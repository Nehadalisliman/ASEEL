import React from 'react';
import { Perfume } from '../types';
import { ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Perfume;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-charcoal/20 border border-charcoal/30 overflow-hidden hover:border-gold-500/50 transition-all duration-500">
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 bg-gradient-to-t from-black to-transparent">
          <span className="text-gold-400 text-sm font-medium flex items-center justify-center gap-2">
            <ShoppingBag size={16} />
            عرض التفاصيل
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 text-center">
        <div className="flex justify-center gap-1 mb-2 text-gold-500">
          {[...Array(5)].map((_, i) => (
             <Star key={i} size={12} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} strokeWidth={1} />
          ))}
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-xl font-bold text-white mb-1 font-serif group-hover:text-gold-500 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-400 text-xs mb-3">{product.tagline}</p>
        <div className="flex items-center justify-center gap-2">
          <span className="text-gold-400 font-bold text-lg">{product.price} ر.س</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;