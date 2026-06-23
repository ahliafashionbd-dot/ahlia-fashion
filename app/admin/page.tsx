"use client";

import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../lib/firebase";

export default function AdminDashboard() {
  // Auth State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Form State
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [price, setPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [category, setCategory] = useState("Bexi Batik");
  const [imageUrl, setImageUrl] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [formError, setFormError] = useState("");

  // Live Products State
  const [products, setProducts] = useState<any[]>([]);

  // Monitor Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Sync Live Products from Firestore
  useEffect(() => {
    if (!user) return;
    const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
      const productList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
    });
    return () => unsubscribe();
  }, [user]);

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      setLoginError("Invalid email or password.");
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    await signOut(auth);
  };

  // Handle Product Submission
  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    setFormSuccess("");

    if (!name || !code || !price || !imageUrl) {
      setFormError("Please fill out all required fields.");
      return;
    }

    try {
      await addDoc(collection(db, "products"), {
        name,
        code,
        price: Number(price),
        discountPrice: discountPrice ? Number(discountPrice) : null,
        category,
        imageUrl,
        createdAt: new Date().toISOString(),
      });

      setFormSuccess("Product added successfully!");
      setName("");
      setCode("");
      setPrice("");
      setDiscountPrice("");
      setImageUrl("");
    } catch (err: any) {
      setFormError("Failed to add product to database.");
    }
  };

  // Handle Product Deletion
  const handleDeleteProduct = async (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteDoc(doc(db, "products", id));
      } catch (err) {
        alert("Error deleting product.");
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-charcoal text-pure-white">
        <p className="tracking-widest animate-pulse">LOADING...</p>
      </div>
    );
  }

  // --- LOGGED IN PORTAL ---
  if (user) {
    return (
      <div className="min-h-screen bg-light-gray font-body p-6 sm:p-12 text-charcoal">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-charcoal/10 pb-6 gap-4">
            <div>
              <h1 className="font-display text-4xl text-forest">Ahlia Management</h1>
              <p className="text-xs tracking-widest text-gold uppercase font-semibold mt-1">Live Inventory Suite</p>
            </div>
            <button 
              onClick={handleLogout}
              className="border border-charcoal/40 px-6 py-2 text-xs uppercase tracking-wider rounded hover:bg-charcoal hover:text-pure-white transition"
            >
              Sign Out
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form Section */}
            <div className="lg:col-span-1 bg-pure-white p-8 rounded-2xl shadow-luxury h-fit">
              <h2 className="font-display text-xl text-forest mb-6 border-b pb-2">Add New Apparel</h2>
              
              <form onSubmit={handleAddProduct} className="space-y-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-charcoal/60 mb-1">Product Name *</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full border-b pb-1 focus:border-forest outline-none transition text-sm" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-charcoal/60 mb-1">Product Code * (e.g., AF-BB-01)</label>
                  <input type="text" value={code} onChange={(e) => setCode(e.target.value)} required className="w-full border-b pb-1 focus:border-forest outline-none transition text-sm" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-charcoal/60 mb-1">Original Price (BDT) *</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required className="w-full border-b pb-1 focus:border-forest outline-none transition text-sm" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-charcoal/60 mb-1">Discount Price (Optional)</label>
                    <input type="number" value={discountPrice} onChange={(e) => setDiscountPrice(e.target.value)} className="w-full border-b pb-1 focus:border-forest outline-none transition text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-charcoal/60 mb-1">Collection Category</label>
                  <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border-b pb-1 bg-transparent focus:border-forest outline-none transition text-sm">
                    <option value="Bexi Batik">Bexi Batik</option>
                    <option value="Digital Printed Lawn">Digital Printed Lawn</option>
                    <option value="Pakistani Inspired">Pakistani Inspired</option>
                    <option value="Best Sellers">Best Sellers</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-charcoal/60 mb-1">Image URL / Web Link *</label>
                  <input type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="https://example.com/dress.jpg" required className="w-full border-b pb-1 focus:border-forest outline-none transition text-sm text-forest" />
                </div>

                {formError && <p className="text-red-500 text-xs">{formError}</p>}
                {formSuccess && <p className="text-forest text-xs font-medium">{formSuccess}</p>}

                <button type="submit" className="w-full bg-forest text-pure-white py-3 text-xs tracking-widest uppercase hover:bg-gold transition rounded mt-4">
                  Upload to Catalog
                </button>
              </form>
            </div>

            {/* Live Inventory List Section */}
            <div className="lg:col-span-2 bg-pure-white p-8 rounded-2xl shadow-luxury">
              <h2 className="font-display text-xl text-forest mb-6 border-b pb-2">Active Catalog Grid ({products.length} Items)</h2>
              
              {products.length === 0 ? (
                <p className="text-sm text-charcoal/50 italic py-10 text-center">No products uploaded yet. Use the form to submit your first item!</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-charcoal/10 uppercase tracking-wider text-charcoal/50 text-[10px]">
                        <th className="pb-3">Preview</th>
                        <th className="pb-3">Details</th>
                        <th className="pb-3">Category</th>
                        <th className="pb-3">Price</th>
                        <th className="pb-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-charcoal/5">
                      {products.map((item) => (
                        <tr key={item.id} className="hover:bg-light-gray/40 transition">
                          <td className="py-3">
                            <img src={item.imageUrl} alt={item.name} className="w-12 h-16 object-cover rounded shadow" onError={(e)=>{(e.target as HTMLImageElement).src="https://placehold.co/150x200?text=No+Image"}}/>
                          </td>
                          <td className="py-3 pr-2">
                            <p className="font-semibold text-charcoal">{item.name}</p>
                            <p className="text-[10px] text-charcoal/50 tracking-wider uppercase mt-0.5">{item.code}</p>
                          </td>
                          <td className="py-3 font-medium text-gold">{item.category}</td>
                          <td className="py-3">
                            {item.discountPrice ? (
                              <div>
                                <span className="text-forest font-semibold">৳{item.discountPrice}</span>
                                <span className="text-charcoal/40 line-through ml-1.5">৳{item.price}</span>
                              </div>
                            ) : (
                              <span className="font-semibold">৳{item.price}</span>
                            )}
                          </td>
                          <td className="py-3 text-right">
                            <button onClick={() => handleDeleteProduct(item.id)} className="text-red-500 hover:text-red-700 font-medium uppercase text-[10px] tracking-wider border border-red-200 px-2 py-1 rounded hover:bg-red-50 transition">
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    );
  }

  // --- SECURE LOG OUT SCREEN ---
  return (
    <div className="min-h-screen flex items-center justify-center bg-charcoal font-body px-4">
      <div className="w-full max-w-md bg-pure-white p-8 sm:p-12 rounded-2xl shadow-luxury">
        <div className="text-center mb-10">
          <h1 className="font-display text-3xl text-forest mb-2">Admin Portal</h1>
          <p className="text-xs tracking-[0.2em] text-gold uppercase font-semibold">Ahlia Fashion</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-wider text-charcoal/70 mb-2">Email Address</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-b border-light-gray pb-2 focus:border-forest outline-none transition-colors bg-transparent text-charcoal" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-charcoal/70 mb-2">Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border-b border-light-gray pb-2 focus:border-forest outline-none transition-colors bg-transparent text-charcoal" />
          </div>

          {loginError && <p className="text-red-500 text-xs text-center">{loginError}</p>}

          <button type="submit" className="w-full bg-forest text-pure-white py-4 text-xs tracking-[0.2em] uppercase hover:bg-gold transition-colors duration-300 rounded">
            Secure Login
          </button>
        </form>
      </div>
    </div>
  );
}
