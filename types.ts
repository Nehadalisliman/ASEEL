export interface Perfume {
  id: number;
  name: string;
  tagline: string;
  price: number;
  image: string;
  category: 'oud' | 'leather' | 'fresh' | 'spicy';
  description: string;
  notes: {
    top: string;
    heart: string;
    base: string;
  };
  sizes: number[]; // e.g., [50, 100]
  isBestseller?: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem extends Perfume {
  selectedSize: number;
  quantity: number;
}

export interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}
