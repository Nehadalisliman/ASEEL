import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import { PERFUMES, REVIEWS } from '../constants';
import { ArrowLeft, Award, Clock, Wind, Star } from 'lucide-react';

const Home: React.FC = () => {
  const bestsellers = PERFUMES.filter(p => p.isBestseller);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-matte">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-charcoal/30 via-black to-black"></div>

        <div className="container mx-auto px-4 relative z-10 flex items-center justify-start">
          {/* Text Section */}
          <div className="text-white animate-slide-up text-right max-w-4xl">
            <span className="text-gold-500 tracking-[0.2em] text-sm font-bold uppercase mb-4 block">
              مجموعة الشتاء الجديدة
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              عود<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-gold-400 to-white">ملكي فاخر</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl">
              العود الكمبودي المعتق والجلود الإيطالية. عطر صمم للرجل الذي لا يرضى إلا بالتميز.
            </p>
            <div className="flex gap-4 justify-start">
              <Link to="/shop">
                <Button className="px-10 py-4 text-lg">تسوق الآن</Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="px-10 py-4 text-lg">اكتشف قصتنا</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-matte border-b border-charcoal/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 border border-charcoal/50 hover:border-gold-500/30 transition-colors rounded-lg">
              <div className="w-16 h-16 rounded-full bg-charcoal/50 flex items-center justify-center text-gold-500 mb-4">
                <Award size={32} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-bold mb-2">جودة عالمية</h3>
              <p className="text-gray-400">زيوت عطرية فرنسية نادرة بتركيز عالي جداً (Parfum).</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border border-charcoal/50 hover:border-gold-500/30 transition-colors rounded-lg">
              <div className="w-16 h-16 rounded-full bg-charcoal/50 flex items-center justify-center text-gold-500 mb-4">
                <Clock size={32} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-bold mb-2">ثبات طويل</h3>
              <p className="text-gray-400">ثبات يتجاوز 24 ساعة على الملابس و 12 ساعة على الجلد.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border border-charcoal/50 hover:border-gold-500/30 transition-colors rounded-lg">
              <div className="w-16 h-16 rounded-full bg-charcoal/50 flex items-center justify-center text-gold-500 mb-4">
                <Wind size={32} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-bold mb-2">فوحان استثنائي</h3>
              <p className="text-gray-400">انتشار واسع يملأ المكان بحضورك المميز.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-gold-500 text-sm font-bold uppercase tracking-wider">المختار لكم</span>
              <h2 className="text-4xl font-serif font-bold text-white mt-2">الأكثر مبيعاً</h2>
            </div>
            <Link to="/shop" className="hidden md:flex items-center gap-2 text-white hover:text-gold-500 transition-colors">
              عرض الجميع <ArrowLeft size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestsellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
             <Link to="/shop">
               <Button variant="outline" fullWidth>عرض الجميع</Button>
             </Link>
          </div>
        </div>
      </section>

      {/* About Section - Split Screen */}
      <section className="bg-matte overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative h-[400px] md:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1557170334-a9632e77c6e4?q=80&w=1000&auto=format&fit=crop" 
              alt="Craftsmanship" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-12 md:p-24 flex flex-col justify-center items-start">
            <span className="text-gold-500 font-bold mb-4">عن أصيل</span>
            <h2 className="text-4xl font-serif font-bold mb-6">حكاية عطر.. <br/>بدأت من الصحراء</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              في أصيل، لا نصنع مجرد عطور، بل نصوغ ذكريات. نستلهم روائحنا من التراث العربي الأصيل ممزوجاً بأحدث التقنيات الفرنسية في صناعة العطور. كل زجاجة هي تحفة فنية، وكل رشة هي قصة ترويها.
            </p>
            <Link to="/about">
              <Button variant="outline">اقرأ قصتنا كاملة</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">ماذا يقول عملاؤنا</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map(review => (
              <div key={review.id} className="bg-charcoal/10 p-8 rounded-lg border border-charcoal/30">
                <div className="flex gap-1 mb-4 text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} strokeWidth={1} />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">"{review.comment}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center font-bold">
                    {review.user.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{review.user}</h4>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;