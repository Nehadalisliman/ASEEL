import React from 'react';
import { useCart } from '../App';
import Button from '../components/Button';
import { Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 500 ? 0 : 25;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="pt-32 pb-20 min-h-[60vh] flex flex-col items-center justify-center animate-fade-in text-center px-4">
        <h2 className="text-3xl font-bold mb-4">سلة التسوق فارغة</h2>
        <p className="text-gray-400 mb-8">لم تقم بإضافة أي منتجات للسلة بعد.</p>
        <Link to="/shop">
          <Button>تصفح المنتجات</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 animate-fade-in bg-matte min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-serif font-bold mb-8">سلة التسوق</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <div key={`${item.id}-${item.selectedSize}`} className="bg-charcoal/10 border border-charcoal/30 p-4 rounded-lg flex gap-4 items-center">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded bg-charcoal/20" />
                
                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg">{item.name}</h3>
                  <p className="text-gray-400 text-sm mb-1">{item.selectedSize} مل</p>
                  <span className="text-gold-500 font-bold">{item.price} ر.س</span>
                </div>

                <div className="flex flex-col items-end gap-3">
                  <div className="flex items-center gap-3 bg-black rounded px-2 py-1">
                    <button 
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="text-gray-400 hover:text-white"
                    >-</button>
                    <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-gray-400 hover:text-white"
                    >+</button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-500 text-sm flex items-center gap-1"
                  >
                    <Trash2 size={14} /> حذف
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-charcoal/10 border border-charcoal/30 p-6 rounded-lg sticky top-28">
              <h3 className="text-xl font-bold mb-6">ملخص الطلب</h3>
              
              <div className="space-y-3 mb-6 pb-6 border-b border-charcoal">
                <div className="flex justify-between text-gray-300">
                  <span>المجموع الفرعي</span>
                  <span>{subtotal} ر.س</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>الشحن</span>
                  <span>{shipping === 0 ? 'مجاني' : `${shipping} ر.س`}</span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-bold text-white mb-8">
                <span>الإجمالي</span>
                <span className="text-gold-500">{total} ر.س</span>
              </div>

              <Button fullWidth className="py-4 text-lg">
                إتمام الشراء
              </Button>
              
              <div className="mt-4 text-center">
                 <Link to="/shop" className="text-sm text-gray-400 hover:text-white flex items-center justify-center gap-1">
                   العودة للتسوق <ArrowRight size={14} />
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;