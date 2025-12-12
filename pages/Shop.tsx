import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { PERFUMES } from '../constants';
import { Filter, X } from 'lucide-react';
import { Perfume } from '../types';

const Shop: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Perfume[]>(PERFUMES);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(false);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const categories = [
    { id: 'all', name: 'الكل' },
    { id: 'oud', name: 'عود' },
    { id: 'leather', name: 'جلود' },
    { id: 'fresh', name: 'منعش' },
    { id: 'spicy', name: 'توابل' },
  ];

  // Simulate AJAX loading
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      if (selectedCategory === 'all') {
        setFilteredProducts(PERFUMES);
      } else {
        setFilteredProducts(PERFUMES.filter(p => p.category === selectedCategory));
      }
      setIsLoading(false);
    }, 600); // 600ms fake delay
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-matte animate-fade-in">
      {/* Header */}
      <div className="bg-charcoal/10 py-12 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold text-white mb-2">المتجر</h1>
          <p className="text-gray-400">تصفح مجموعتنا الحصرية من العطور الفاخرة</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filter (Desktop) */}
          <div className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-28 space-y-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-4 border-b border-charcoal pb-2">التصنيف</h3>
                <ul className="space-y-2">
                  {categories.map(cat => (
                    <li key={cat.id}>
                      <button 
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`w-full text-right py-2 px-3 rounded transition-colors ${
                          selectedCategory === cat.id 
                            ? 'bg-gold-500/10 text-gold-500 border-r-2 border-gold-500' 
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-white mb-4 border-b border-charcoal pb-2">السعر</h3>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <input type="range" className="w-full accent-gold-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex justify-between items-center mb-6">
            <span className="text-gray-400">{filteredProducts.length} منتج</span>
            <button 
              onClick={() => setShowMobileFilter(true)}
              className="flex items-center gap-2 text-white border border-charcoal px-4 py-2 rounded"
            >
              <Filter size={18} /> تصفية
            </button>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map(n => (
                  <div key={n} className="bg-charcoal/20 aspect-[3/4] animate-pulse rounded-lg"></div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
            
            {filteredProducts.length === 0 && !isLoading && (
              <div className="text-center py-20 text-gray-500">
                لا توجد منتجات مطابقة لهذا التصنيف
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      {showMobileFilter && (
        <div className="fixed inset-0 bg-black/90 z-50 p-6 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">تصفية المنتجات</h2>
            <button onClick={() => setShowMobileFilter(false)}><X /></button>
          </div>
          <div className="space-y-4">
             {categories.map(cat => (
                <button 
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setShowMobileFilter(false);
                  }}
                  className={`w-full text-right py-4 border-b border-charcoal text-lg ${
                    selectedCategory === cat.id ? 'text-gold-500 font-bold' : 'text-gray-300'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;