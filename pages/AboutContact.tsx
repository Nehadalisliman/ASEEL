import React, { useState } from 'react';
import Button from '../components/Button';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 animate-fade-in">
      {/* Hero */}
      <div className="relative h-[400px] mb-20 flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&w=1600" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>
        <h1 className="relative z-10 text-5xl font-serif font-bold text-center">قصة أصيل</h1>
      </div>

      <div className="container mx-auto px-4">
        {/* Story */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            في عام 2018، انطلقت "أصيل" برؤية واضحة: إعادة صياغة الموروث العطري العربي بلمسة حداثية تليق بالرجل المعاصر.
          </p>
          <p className="text-gray-400 leading-relaxed">
            نحن نؤمن بأن العطر ليس مجرد رائحة، بل هو هوية، وتوقيع شخصي يسبق حضورك ويبقى بعد انصرافك. نستخدم أنقى أنواع الزيوت العطرية من "جراس" الفرنسية، ونمزجها بخبراتنا المحلية لإنتاج عطور فريدة تتحدى الزمن.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-gold-500">مسيرتنا</h2>
          <div className="relative border-r-2 border-charcoal mr-6 space-y-12">
            <div className="relative pr-10">
              <span className="absolute -right-[9px] top-2 w-4 h-4 bg-gold-500 rounded-full shadow-[0_0_10px_#C6A667]"></span>
              <h3 className="text-2xl font-bold mb-2">2018</h3>
              <p className="text-gray-400">تأسيس العلامة وإطلاق أول مجموعة "البدايات".</p>
            </div>
            <div className="relative pr-10">
              <span className="absolute -right-[9px] top-2 w-4 h-4 bg-gold-500 rounded-full shadow-[0_0_10px_#C6A667]"></span>
              <h3 className="text-2xl font-bold mb-2">2020</h3>
              <p className="text-gray-400">التوسع في دول الخليج وافتتاح أول فرع رئيسي في الرياض.</p>
            </div>
            <div className="relative pr-10">
              <span className="absolute -right-[9px] top-2 w-4 h-4 bg-gold-500 rounded-full shadow-[0_0_10px_#C6A667]"></span>
              <h3 className="text-2xl font-bold mb-2">2023</h3>
              <p className="text-gray-400">الحصول على جائزة "أفضل عطر شرقي" في معرض العطور الدولي.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate AJAX
    setTimeout(() => {
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <div className="pt-24 pb-20 animate-fade-in bg-matte min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-center mb-12">تواصل معنا</h1>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            <div className="bg-charcoal/10 p-8 rounded-lg border border-charcoal/30">
              <h3 className="text-xl font-bold text-gold-500 mb-6">معلومات الاتصال</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded bg-charcoal/50 flex items-center justify-center text-gold-500"><Phone /></div>
                  <div>
                    <p className="text-xs text-gray-500">الهاتف</p>
                    <p className="text-lg">+966 50 000 0000</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded bg-charcoal/50 flex items-center justify-center text-gold-500"><Mail /></div>
                  <div>
                    <p className="text-xs text-gray-500">البريد الإلكتروني</p>
                    <p className="text-lg">support@asseel.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded bg-charcoal/50 flex items-center justify-center text-gold-500"><MapPin /></div>
                  <div>
                    <p className="text-xs text-gray-500">الموقع</p>
                    <p className="text-lg">الرياض، طريق العليا</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="h-64 bg-charcoal/20 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                [Google Map Placeholder]
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-charcoal/10 p-8 rounded-lg border border-charcoal/30">
            <h3 className="text-xl font-bold mb-6">أرسل لنا رسالة</h3>
            {isSent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <Send />
                </div>
                <h4 className="text-xl font-bold mb-2">تم الإرسال بنجاح</h4>
                <p className="text-gray-400">شكراً لتواصلك معنا، سنرد عليك قريباً.</p>
                <button onClick={() => setIsSent(false)} className="mt-6 text-gold-500 underline">إرسال رسالة أخرى</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">الاسم</label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-black border border-charcoal rounded p-3 focus:border-gold-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">البريد الإلكتروني</label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-black border border-charcoal rounded p-3 focus:border-gold-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">الرسالة</label>
                  <textarea 
                    rows={5}
                    required
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-black border border-charcoal rounded p-3 focus:border-gold-500 outline-none transition-colors"
                  ></textarea>
                </div>
                <Button type="submit" fullWidth className="py-4">إرسال</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};