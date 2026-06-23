export interface ICollection {
  id: string;
  name: string; // e.g., "Digital Printed Lawn Collection"
  slug: string; // e.g., "digital-printed-lawn"
  description: string;
  imageUrl: string; // Cloudinary URL
  displayOrder: number;
  hasSubCategories: boolean;
  subCategories?: string[]; // e.g., ["A-Grade Jam Jam", "VIP Jam Jam", "Swiss Cotton", "Malhar", "Karizma Jam Jam"]
}

export interface IProduct {
  id: string;
  name: string; // e.g., "Royal Kalamkari 3 Piece"
  slug: string;
  description: string; // Detailed editorial description
  price: number; // In BDT (Tk)
  discountPrice?: number; // Optional
  
  // Inventory & Classification
  collectionId: string; // Reference to ICollection.id
  collectionName: string; // Denormalized for faster display
  subCategory?: string; // e.g., "VIP Jam Jam" (Only if applicable)
  tags: string[]; // e.g., ["new-arrival", "best-seller", "trending", "summer", "luxury"]
  
  // Unstitched Specifics
  fabricDetails: {
    top: string; // e.g., "100% Premium Cotton"
    bottom: string; // e.g., "100% Cotton Dyed"
    dupatta: string; // e.g., "Cotton Printed / Chiffon"
  };
  piecesIncluded: string; // e.g., "3 Piece (Unstitched)"
  
  // Media
  images: string[]; // Cloudinary URLs
  
  // Status
  inStock: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface IAdminUser {
  uid: string; // Firebase Auth UID
  email: string;
  role: "super_admin" | "editor";
  displayName: string;
  createdAt: Timestamp;
}