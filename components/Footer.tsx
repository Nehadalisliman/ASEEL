import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-matte border-t border-charcoal/30 pt-16 pb-8 text-gray-400 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <Link to="/" className="text-2xl font-serif font-bold text-white mb-6 block">
              ASSEE<span className="text-gold-500">L</span>
            </Link>
            <p className="mb-6 leading-relaxed">
              علامة عطور سعودية فاخرة تعيد تعريف مفهوم الأناقة الكلاسيكية بلمسة عصرية. نصنع الذكريات في كل قطرة.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-charcoal flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-charcoal flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-charcoal flex items-center justify-center hover:border-gold-500 hover:text-gold-500 transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">روابط سريعة</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="hover:text-gold-500 transition-colors">جميع العطور</Link></li>
              <li><Link to="/about" className="hover:text-gold-500 transition-colors">قصتنا</Link></li>
              <li><Link to="/blog" className="hover:text-gold-500 transition-colors">المدونة</Link></li>
              <li><Link to="/policies" className="hover:text-gold-500 transition-colors">سياسة الخصوصية</Link></li>
              <li><Link to="/policies" className="hover:text-gold-500 transition-colors">الشحن والاسترجاع</Link></li>
            </ul>
          </div>

          {/* Collection */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">المجموعات</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?cat=oud" className="hover:text-gold-500 transition-colors">مجموعة العود</Link></li>
              <li><Link to="/shop?cat=leather" className="hover:text-gold-500 transition-colors">مجموعة الجلود</Link></li>
              <li><Link to="/shop?cat=fresh" className="hover:text-gold-500 transition-colors">المجموعة الصيفية</Link></li>
              <li><Link to="/shop" className="hover:text-gold-500 transition-colors">الأكثر مبيعاً</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold-500 shrink-0" size={20} />
                <span>الرياض، المملكة العربية السعودية<br />طريق الملك فهد</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold-500 shrink-0" size={20} />
                <span>+966 50 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold-500 shrink-0" size={20} />
                <span>hello@asseel.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 ASSEEL Perfumes. جميع الحقوق محفوظة.</p>
          <div className="flex gap-4">
            <span className="w-12 h-8 bg-charcoal rounded opacity-50"></span>
            <span className="w-12 h-8 bg-charcoal rounded opacity-50"></span>
            <span className="w-12 h-8 bg-charcoal rounded opacity-50"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;