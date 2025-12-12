import React, { useState, createContext, useContext, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { About, Contact } from './pages/AboutContact';
import { CartItem, Perfume } from './types';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Cart Context
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Perfume, size: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Perfume, size: number, quantity: number) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.selectedSize === size);
      if (existing) {
        return prev.map(item => 
          item.id === product.id && item.selectedSize === size 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, selectedSize: size, quantity }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  // Login page component (Simple Inline)
  const Login = () => (
    <div className="min-h-screen flex items-center justify-center bg-matte px-4 animate-fade-in">
      <div className="bg-black border border-gold-500/20 p-8 rounded-lg max-w-md w-full shadow-[0_0_30px_rgba(198,166,103,0.1)]">
        <h2 className="text-3xl font-serif font-bold text-center mb-8 text-gold-500">تسجيل الدخول</h2>
        <form className="space-y-6">
          <div>
            <label className="text-sm text-gray-400 block mb-2">البريد الإلكتروني</label>
            <input type="email" className="w-full bg-charcoal/20 border border-charcoal p-3 rounded text-white focus:border-gold-500 outline-none" />
          </div>
          <div>
            <label className="text-sm text-gray-400 block mb-2">كلمة المرور</label>
            <input type="password" className="w-full bg-charcoal/20 border border-charcoal p-3 rounded text-white focus:border-gold-500 outline-none" />
          </div>
          <button className="w-full bg-gold-500 text-black py-3 rounded font-bold hover:bg-gold-600 transition-colors">
            دخول
          </button>
        </form>
      </div>
    </div>
  );

  // Simple Policies Component
  const Policies = () => (
    <div className="pt-32 pb-20 container mx-auto px-4 animate-fade-in">
      <h1 className="text-4xl font-serif font-bold mb-8">السياسات</h1>
      <div className="space-y-8 text-gray-300">
        <section>
          <h2 className="text-xl text-gold-500 font-bold mb-4">الشحن والتوصيل</h2>
          <p>يتم الشحن خلال 1-3 أيام عمل داخل الرياض، و 3-5 أيام لباقي مدن المملكة.</p>
        </section>
        <section>
          <h2 className="text-xl text-gold-500 font-bold mb-4">الاسترجاع</h2>
          <p>يمكن استرجاع المنتج خلال 7 أيام بشرط عدم فتح الغلاف البلاستيكي للعطر.</p>
        </section>
      </div>
    </div>
  );

  const Blog = () => (
    <div className="pt-32 pb-20 container mx-auto px-4 animate-fade-in">
       <div className="text-center py-20">
         <h1 className="text-4xl font-bold mb-4">المدونة</h1>
         <p className="text-gray-400">قريباً..</p>
       </div>
    </div>
  )

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen text-white">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/policies" element={<Policies />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartContext.Provider>
  );
};

export default App;