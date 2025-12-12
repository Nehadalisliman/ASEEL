import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PERFUMES } from '../constants';
import { useCart } from '../App';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import { Star, Truck, ShieldCheck, RefreshCw, Minus, Plus } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PERFUMES.find(p => p.id === Number(id));
  const { addToCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState<number>(0);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    if (product) {
      setMainImage(product.image);
      if (product.sizes.length > 0) setSelectedSize(product.sizes[0]);
    }
    // Reset quantity on product change
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return <div className="pt-32 text-center text-white">المنتج غير موجود</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    alert("تمت الإضافة للسلة بنجاح");
  };

  const relatedProducts = PERFUMES
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="pt-24 pb-20 animate-fade-in">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-gray-500 text-sm mb-8">
          <Link to="/" className="hover:text-gold-500">الرئيسية</Link> / 
          <Link to="/shop" className="hover:text-gold-500 mx-2">المتجر</Link> / 
          <span className="text-gold-500">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="bg-charcoal/10 aspect-square overflow-hidden rounded-lg border border-charcoal/20">
              <img src={mainImage} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[product.image, 'https://images.unsplash.com/photo-1592914610354-fd354ea45e48?q=80&w=300', 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=300'].map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setMainImage(img)}
                  className={`aspect-square rounded overflow-hidden border ${mainImage === img ? 'border-gold-500' : 'border-transparent opacity-70 hover:opacity-100'}`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="mb-6 border-b border-charcoal pb-6">
              <h1 className="text-4xl font-serif font-bold text-white mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl text-gold-500 font-bold">{product.price} ر.س</span>
                <div className="flex items-center gap-1 text-gold-400 text-sm">
                  <Star size={14} fill="currentColor" />
                  <span>{product.rating}</span>
                  <span className="text-gray-500 mx-1">({product.reviews} تقييم)</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">{product.description}</p>
            </div>

            {/* Notes */}
            <div className="mb-8">
              <h3 className="font-bold text-white mb-4">المكونات العطرية:</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-charcoal/20 rounded border border-charcoal/30">
                  <span className="block text-xs text-gold-500 mb-1">الافتتاحية</span>
                  <span className="text-sm text-gray-200">{product.notes.top}</span>
                </div>
                <div className="p-3 bg-charcoal/20 rounded border border-charcoal/30">
                  <span className="block text-xs text-gold-500 mb-1">القلب</span>
                  <span className="text-sm text-gray-200">{product.notes.heart}</span>
                </div>
                <div className="p-3 bg-charcoal/20 rounded border border-charcoal/30">
                  <span className="block text-xs text-gold-500 mb-1">القاعدة</span>
                  <span className="text-sm text-gray-200">{product.notes.base}</span>
                </div>
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-8">
              <h3 className="font-bold text-white mb-3">الحجم:</h3>
              <div className="flex gap-4">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-2 rounded border transition-all ${
                      selectedSize === size 
                      ? 'border-gold-500 bg-gold-500/10 text-gold-500' 
                      : 'border-charcoal text-gray-400 hover:border-gray-500'
                    }`}
                  >
                    {size} مل
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center border border-charcoal rounded w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:text-gold-500"
                >
                  <Minus size={18} />
                </button>
                <span className="w-12 text-center font-bold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:text-gold-500"
                >
                  <Plus size={18} />
                </button>
              </div>
              <Button fullWidth onClick={handleAddToCart} className="flex-1">
                أضف إلى السلة
              </Button>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-4 text-xs text-gray-400 border-t border-charcoal pt-6">
              <div className="flex flex-col items-center gap-2">
                <Truck size={20} className="text-gold-500" />
                <span>شحن سريع ومجاني</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ShieldCheck size={20} className="text-gold-500" />
                <span>ضمان ذهبي</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <RefreshCw size={20} className="text-gold-500" />
                <span>استرجاع سهل</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-charcoal pt-16">
            <h2 className="text-2xl font-serif font-bold text-white mb-8">قد يعجبك أيضاً</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;