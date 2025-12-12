import { Perfume, Review, BlogPost } from './types';

export const PERFUMES: Perfume[] = [
  {
    id: 1,
    name: "عود ملكي",
    tagline: "أصالة العود الكمبودي الفاخر",
    price: 450,
    image: "https://images.unsplash.com/photo-1594035910387-fea477942698?q=80&w=800&auto=format&fit=crop",
    category: "oud",
    description: "عطر يجسد الفخامة المطلقة  من العود المعتق والجلد الإيطالي الفاخر. مصمم للرجل الذي يترك أثراً أينما حل.",
    notes: {
      top: "الزعفران، الهيل",
      heart: "العود الكمبودي، الورد الدمشقي",
      base: "الجلد، العنبر، خشب الصندل"
    },
    sizes: [50, 100],
    isBestseller: true,
    rating: 4.9,
    reviews: 124
  },
  {
    id: 2,
    name: "ليل حالك",
    tagline: "غموض الليل وسحر التوابل",
    price: 380,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    category: "spicy",
    description: "عطر مسائي دافئ يجمع بين حدة التوابل وعمق الأخشاب. مثالي للمناسبات الرسمية والسهرات.",
    notes: {
      top: "الفلفل الأسود، البرغموت",
      heart: "القرفة، جوزة الطيب",
      base: "البتشولي، نجيل الهند"
    },
    sizes: [100],
    isBestseller: true,
    rating: 4.8,
    reviews: 89
  },
  {
    id: 3,
    name: "سراب",
    tagline: "انتعاش الحمضيات في قلب الصحراء",
    price: 290,
    image: "https://images.unsplash.com/photo-1616995241953-060447fa436c?q=80&w=800&auto=format&fit=crop",
    category: "fresh",
    description: "عطر نهاري منعش يمزج بين حمضيات البحر المتوسط وأخشاب الأرز، ليعطيك طاقة وحيوية طوال اليوم.",
    notes: {
      top: "الليمون الصقلي، النعناع",
      heart: "زهر البرتقال، إكليل الجبل",
      base: "المسك الأبيض، خشب الأرز"
    },
    sizes: [50, 100],
    rating: 4.7,
    reviews: 56
  },
  {
    id: 4,
    name: "فارس",
    tagline: "قوة الجلود والتبغ",
    price: 520,
    image: "https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?q=80&w=800&auto=format&fit=crop",
    category: "leather",
    description: "عطر ذكوري حاد يجمع بين رائحة الجلود المدخنة وأوراق التبغ الفاخرة، لرجل واثق من نفسه.",
    notes: {
      top: "الويسكي، الجريب فروت",
      heart: "الجلد، التبغ",
      base: "حبوب التونكا، طحلب البلوط"
    },
    sizes: [100],
    rating: 5.0,
    reviews: 42
  },
  {
    id: 5,
    name: "أمبروود",
    tagline: "دفء العنبر وسحر الأخشاب",
    price: 410,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    category: "oud",
    description: "مزيج ساحر من العنبر الدافئ والأخشاب النادرة. عطر يدوم طويلاً ويترك انطباعاً لا ينسى.",
    notes: {
      top: "البخور، الزنجبيل",
      heart: "العنبر، خشب الغاياك",
      base: "الفانيليا، البنزوين"
    },
    sizes: [50, 100],
    rating: 4.6,
    reviews: 30
  },
  {
    id: 6,
    name: "نسيم",
    tagline: "هدوء البحر وصفاء السماء",
    price: 275,
    image: "https://images.unsplash.com/photo-1590736969955-71cc9480c713?q=80&w=800&auto=format&fit=crop",
    category: "fresh",
    description: "عطر خفيف وأنيق يناسب الاستخدام اليومي والعمل، يمنحك شعوراً بالنظافة والترتيب.",
    notes: {
      top: "الماندرين، الملح البحري",
      heart: "المريمية، الخزامى",
      base: "الأمبروكسان، الأخشاب الطافية"
    },
    sizes: [50, 100],
    rating: 4.5,
    reviews: 65
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    user: "محمد السالم",
    rating: 5,
    comment: "عطر عود ملكي شيء خيالي، الثبات يستمر لأكثر من 12 ساعة والفوحان ممتاز.",
    date: "2023-10-15"
  },
  {
    id: 2,
    user: "خالد العمري",
    rating: 5,
    comment: "تغليف فاخر جداً يصلح كهدية، وسرعة التوصيل مذهلة. شكراً أصيل.",
    date: "2023-11-02"
  },
  {
    id: 3,
    user: "فهد القحطاني",
    rating: 4,
    comment: "جربت عطر سراب، ممتاز للدوام الصباحي، ريحته نظافة وانتعاش.",
    date: "2023-11-20"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "كيف تختار عطرك المناسب لفصل الشتاء؟",
    excerpt: "تعرف على النوتات العطرية التي تمنحك الدفء والجاذبية في الأجواء الباردة.",
    date: "12 ديسمبر 2023",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "أسرار زيادة ثبات العطر",
    excerpt: "خطوات بسيطة تجعل عطرك يدوم طوال اليوم دون الحاجة لإعادة رشه.",
    date: "05 نوفمبر 2023",
    image: "https://images.unsplash.com/photo-1519669556878-63bd08be7635?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "الفرق بين العود الطبيعي والصناعي",
    excerpt: "دليلك الشامل لتمييز جودة العود وفهم مكوناته الأساسية.",
    date: "28 أكتوبر 2023",
    image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&w=800&auto=format&fit=crop"
  }
];
