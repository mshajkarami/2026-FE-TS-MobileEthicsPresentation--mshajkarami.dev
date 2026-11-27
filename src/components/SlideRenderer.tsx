import { SlideDefinition } from '../types/presentation';
import { ETHICAL_CATEGORIES } from '../data/ethicsData';
import { EthicsRadarLab } from './EthicsRadarLab';
import { MobileDarkPatternSimulator } from './MobileDarkPatternSimulator';
import { ClassQuiz } from './ClassQuiz';
import {
  Smartphone,
  Layers,
  Scale,
  BrainCircuit,
  Calendar,
  Award,
  Lock,
  AlertTriangle,
  CheckCircle2,
  TrendingDown,
  MessageSquare,
  ThumbsUp,
  Cpu,
} from 'lucide-react';

interface SlideRendererProps {
  slide: SlideDefinition;
}

export function SlideRenderer({ slide }: SlideRendererProps) {
  switch (slide.id) {
    /* اسلاید ۱: کاور و هویت ارائه */
    case 'slide-01':
      return (
        <div className="hero-slide-grid">
          <div className="hero-main-col">
            <div className="hero-academic-bar">
              <span className="hero-academic-pill">دانشگاه فنی و حرفه‌ای (ملی مهارت) شهید مهاجر اصفهان</span>
              <span className="hero-academic-pill">درس: اخلاق حرفه‌ای مهندسی</span>
              <span className="hero-academic-pill">مدرس: سرکار خانم آرزو صبری</span>
            </div>

            <div className="hero-title-box">
              <h1>کالبدشکافی اخلاق در زیست‌بوم نرم‌افزارهای موبایل</h1>
              <p>تحلیل تجربی ۵.۸ میلیون بازخورد کاربران در گوگل پلی، ۱۶ بُعد اخلاقی، و راهنمای مهندسی توسعه مسئولانه</p>
            </div>

            <div className="hero-stats-row">
              <div className="hero-stat-card">
                <div className="hero-stat-number mono">5.8M+</div>
                <div className="hero-stat-label">نظر تحلیل‌شده در گوگل پلی</div>
              </div>
              <div className="hero-stat-card">
                <div className="hero-stat-number mono">16</div>
                <div className="hero-stat-label">بُعد اخلاقی شناسایی‌شده</div>
              </div>
              <div className="hero-stat-card">
                <div className="hero-stat-number mono text-emerald">F1=0.94</div>
                <div className="hero-stat-label">دقت مدل عمیق BERT</div>
              </div>
            </div>
          </div>

          <div className="hero-meta-col">
            <div className="presenter-profile-box">
              <div className="avatar-halo">ص</div>
              <div className="presenter-info">
                <h4>مهندس محمد صالح حاج‌کرمی</h4>
                <p className="mono">mshajkarami.dev</p>
                <div className="text-muted" style={{ fontSize: '11px', marginTop: '2px' }}>
                  توسعه‌دهنده نرم‌افزار موبایل و سامانه‌های سازمانی
                </div>
              </div>
            </div>

            <div className="paper-reference-card">
              <div className="paper-ref-title">مقاله مرجع پژوهش (Reference Paper):</div>
              <div className="paper-ref-name">The best ends by the best means: ethical concerns in app reviews</div>
              <div className="paper-ref-meta mono">
                Empirical Software Engineering (2024) 29:138 • Springer Nature
              </div>
            </div>
          </div>
        </div>
      );

    /* اسلاید ۲: صورت‌مسئله و بحران */
    case 'slide-02':
      return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', height: '100%' }}>
          <div className="tax-card">
            <Smartphone size={32} className="text-sky" />
            <h4 style={{ fontSize: '16px', color: '#fff', margin: '12px 0 6px' }}>نفوذ ۸۵٪ گوشی هوشمند</h4>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
              گوشی موبایل صمیمی‌ترین دستگاه دیجیتال بشر است؛ به دوربین، میکروفون، حساب بانکی و موقعیت مکانی ۲۴ ساعته دسترسی دارد.
            </p>
          </div>
          <div className="tax-card">
            <Lock size={32} className="text-rose" />
            <h4 style={{ fontSize: '16px', color: '#fff', margin: '12px 0 6px' }}>انحصار غول‌های فناوری</h4>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
              زیست‌بوم موبایل در انحصار شرکت‌هایی است که مدل درآمدی آن‌ها بر پایه فروش توجه (Attention Economy) و استخراج داده بنا شده است.
            </p>
          </div>
          <div className="tax-card">
            <AlertTriangle size={32} className="text-amber" />
            <h4 style={{ fontSize: '16px', color: '#fff', margin: '12px 0 6px' }}>شکست رگولاتوری سنتی</h4>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
              قوانین دولتی توان همگامی با شتاب آپدیت‌های هفتگی نرم‌افزارها را ندارند؛ کنترل اخلاقی صرفاً در دست مهندس نرم‌افزار باقی مانده است.
            </p>
          </div>
          <div className="tax-card">
            <BrainCircuit size={32} className="text-emerald" />
            <h4 style={{ fontSize: '16px', color: '#fff', margin: '12px 0 6px' }}>دستکاری رفتار و روان</h4>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
              تضعیف تمرکز کودکان، اعتیاد دوپامینی، تبعیض‌های نامرئی الگوریتمی و نفرت‌پراکنی، هزینه سنگینی است که جامعه می‌پردازد.
            </p>
          </div>
        </div>
      );

    /* اسلاید ۳: شناسنامه پژوهش ESE 2024 */
    case 'slide-03':
      return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '24px', height: '100%' }}>
          <div className="platform-details-card">
            <h4 style={{ fontSize: '18px', color: '#38bdf8', marginBottom: '12px' }}>مشخصات رسمی مقاله رفرنس</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <li><strong>عنوان:</strong> The best ends by the best means: ethical concerns in app reviews</li>
              <li><strong>ژورنال:</strong> Empirical Software Engineering (ESE), Vol 29, Issue 138 (2024)</li>
              <li><strong>ناشر:</strong> Springer Nature (نمایه ISI Web of Science با ایمپکت فاکتور بالا)</li>
              <li><strong>نویسندگان:</strong> Neelam Tjikhoeri, Lauren Olson, Emitzá Guzmán</li>
              <li><strong>وابستگی سازمانی:</strong> دانشکده علوم، دانشگاه وریج آمستردام (هلند)</li>
              <li className="mono text-muted">DOI: 10.1007/s10664-024-10463-7</li>
            </ul>
          </div>
          <div className="platform-details-card">
            <h4 style={{ fontSize: '18px', color: '#10b981', marginBottom: '12px' }}>۳ سؤال بنیادی پژوهش (Research Questions)</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ background: 'rgba(56, 189, 248, 0.08)', padding: '12px', borderRadius: '8px', borderRight: '3px solid #38bdf8' }}>
                <strong className="text-sky">RQ1 (انواع دغدغه‌ها):</strong> چه مقولاتی از دغدغه‌های اخلاقی در نظرات وجود دارند و چگونه با وقایع سیاسی و زمانی تغییر می‌کنند؟
              </div>
              <div style={{ background: 'rgba(245, 158, 11, 0.08)', padding: '12px', borderRadius: '8px', borderRight: '3px solid #f59e0b' }}>
                <strong className="text-amber">RQ2 (رفتارشناسی و شاخص‌ها):</strong> ریویوهای اخلاقی چه ویژگی‌های آماری متمایزی از حیث ریتینگ، طول کلمات و لایک دارند؟
              </div>
              <div style={{ background: 'rgba(16, 185, 129, 0.08)', padding: '12px', borderRadius: '8px', borderRight: '3px solid #10b981' }}>
                <strong className="text-emerald">RQ3 (پتانسیل خودکارسازی):</strong> آیا یادگیری ماشین و ترنسفورمر BERT می‌توانند این دغدغه‌ها را به صورت خودکار پایش کنند؟
              </div>
            </div>
          </div>
        </div>
      );

    /* اسلاید ۴: متدولوژی و دیتاست */
    case 'slide-04':
      return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', height: '100%' }}>
          <div className="platform-details-card">
            <Layers size={28} className="text-sky" />
            <h4 style={{ fontSize: '16px', margin: '10px 0 6px', color: '#fff' }}>مخزن داده میلیونی</h4>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
              جمع‌آوری ۵,۸۶۴,۱۸۸ نظر از ۱۰ اپلیکیشن پیشرو در گوگل پلی استور به عنوان بزرگ‌ترین فروشگاه اپ جهان.
            </p>
            <div className="mono text-muted" style={{ fontSize: '11px', marginTop: 'auto' }}>
              Source: Mingyu Play Scraper
            </div>
          </div>
          <div className="platform-details-card">
            <Scale size={28} className="text-amber" />
            <h4 style={{ fontSize: '16px', margin: '10px 0 6px', color: '#fff' }}>۹ دور ارزیابی تجربی</h4>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
              ۲ ارزیاب مستقل، ۹ دوره پیش‌آزمون برچسب‌گذاری دستی را انجام دادند تا ضریب توافق به عدد طلایی Cohen's Kappa = 0.91 رسید.
            </p>
            <div className="mono text-emerald" style={{ fontSize: '11px', marginTop: 'auto' }}>
              High Inter-Rater Reliability
            </div>
          </div>
          <div className="platform-details-card">
            <CheckCircle2 size={28} className="text-emerald" />
            <h4 style={{ fontSize: '16px', margin: '10px 0 6px', color: '#fff' }}>نمونه نهایی ۳,۱۰۱ نظر</h4>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
              استخراج ۳,۱۰۱ نظر پالایش‌شده با ۱۰۹ کلمه کلیدی برای آموزش و تست مدل‌های پیش‌بین یادگیری ماشین و یادگیری عمیق.
            </p>
            <div className="mono text-sky" style={{ fontSize: '11px', marginTop: 'auto' }}>
              Gold Standard Labeled Dataset
            </div>
          </div>
        </div>
      );

    /* اسلاید ۵: تکامل چارچوب اخلاقی */
    case 'slide-05':
      return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', height: '100%' }}>
          <div className="platform-details-card">
            <h4 style={{ fontSize: '16px', color: '#94a3b8', borderBottom: '1px solid var(--border-glass)', paddingBottom: '8px' }}>
              چارچوب کلاسیک رایت (Wright ICT Framework 2011)
            </h4>
            <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
              چارچوب رایت قبل از همه‌گیری گوشی‌های هوشمند مدرن نوشته شده بود و مفاهیم انتزاعی آکادمیک داشت:
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: '#94a3b8' }}>
              <li>❌ مفاهیم انتزاعی مثل Value Sensitive Design و Dignity</li>
              <li>❌ عدم پوشش مفاهیم موبایلی مثل فید اعتیادآور و ترندهای ویدیو</li>
              <li>❌ نگاه بیش از حد تئوریک بدون بازتاب زبان عامیانه کاربران</li>
            </ul>
          </div>

          <div className="platform-details-card" style={{ borderColor: 'rgba(16, 185, 129, 0.4)' }}>
            <h4 style={{ fontSize: '16px', color: '#10b981', borderBottom: '1px solid var(--border-glass)', paddingBottom: '8px' }}>
              چارچوب تجربی نوین ESE 2024 (۹ مقوله جدید کشف‌شده)
            </h4>
            <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
              محققان با تحلیل زبان واقعی کاربران در گوگل پلی، ۹ دغدغه حاد جدید اضافه کردند:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '12px' }}>
              <span className="hero-academic-pill">طراحی اعتیادآور (Addiction)</span>
              <span className="hero-academic-pill">سانسور و سرکوب (Censorship)</span>
              <span className="hero-academic-pill">سرقت هویت (Catfishing)</span>
              <span className="hero-academic-pill">اخبار جعلی (Misinformation)</span>
              <span className="hero-academic-pill">کلاهبرداری مالی (Scam)</span>
              <span className="hero-academic-pill">آزار سایبری (Bullying)</span>
              <span className="hero-academic-pill">تبلیغات قمار (Harmful Ads)</span>
              <span className="hero-academic-pill">محتوای نامناسب (Vulgarity)</span>
            </div>
          </div>
        </div>
      );

    /* اسلاید ۶: تاکسونومی ۱۶ بعدی اخلاق */
    case 'slide-06':
      return (
        <div className="taxonomy-grid">
          {ETHICAL_CATEGORIES.map((cat) => (
            <div key={cat.id} className="tax-card">
              <div className="tax-card-top">
                <span className="badge-pill mono" style={{ backgroundColor: `${cat.color}22`, color: cat.color }}>
                  {cat.nameEn}
                </span>
                <span className="tax-card-pct mono">{cat.percentage}%</span>
              </div>
              <div className="tax-card-name">{cat.nameFa}</div>
              <p className="tax-card-desc">{cat.descriptionFa}</p>
              <div className="tax-card-metrics mono">
                <span>★ {cat.avgRating.toFixed(2)}</span>
                <span>{cat.avgWords.toFixed(0)} words</span>
                <span>👍 {cat.avgUpvotes.toFixed(1)}</span>
              </div>
            </div>
          ))}
        </div>
      );

    /* اسلاید ۷: دغدغه‌های Internal vs External */
    case 'slide-07':
      return (
        <div className="split-impact-container">
          <div className="split-col-card internal-col">
            <div className="split-head-pct mono">92%</div>
            <h4 style={{ fontSize: '18px', color: '#38bdf8' }}>دغدغه‌های درونی (Internal Concerns)</h4>
            <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
              آسیب‌ها و تخلفاتی که در مرزهای درون‌برنامه‌ای باقی می‌مانند:
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
              <li>• پنهان کردن پست‌های کاربر بدون اطلاع (Shadow-ban)</li>
              <li>• سرقت عکس پروفایل و جعل حساب (Catfishing)</li>
              <li>• دسترسی غیرمجاز به دفترچه تلفن و گالری</li>
              <li>• آزار کلامی در بخش نظرات</li>
            </ul>
          </div>

          <div className="split-col-card external-col">
            <div className="split-head-pct mono">8%</div>
            <h4 style={{ fontSize: '18px', color: '#f43f5e' }}>سرایت به دنیای فیزیکی (External Concerns)</h4>
            <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
              لحظه‌ای که نقص اخلاقی نرم‌افزار، سلامت جسمی و امنیت جان انسان‌ها را به خطر می‌اندازد:
            </p>
            <div style={{ background: 'rgba(0,0,0,0.4)', padding: '12px', borderRadius: '8px', fontSize: '12px', lineHeight: '1.6' }}>
              <strong>مستندات اوبر (Uber):</strong> تجاوز و آزار فیزیکی مسافران، تصادف راننده به دلیل نوتیفیکیشن‌های مزاحم روی نقشه، رها کردن مسافر شبانه در بیابان.
            </div>
            <div style={{ background: 'rgba(0,0,0,0.4)', padding: '12px', borderRadius: '8px', fontSize: '12px', lineHeight: '1.6' }}>
              <strong>مستندات تیک‌تاک (TikTok):</strong> ترویج چالش‌های آتش‌زدن وسایل خانه توسط کودکان و نوجوانان!
            </div>
          </div>
        </div>
      );

    /* اسلاید ۸: ویجت تعاملی ۱ - رادار مقایسه اپ‌ها */
    case 'slide-08':
      return <EthicsRadarLab />;

    /* اسلاید ۹: رفتارشناسی کاربران هنگام نقض اخلاق (RQ2) */
    case 'slide-09':
      return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', height: '100%' }}>
          <div className="platform-details-card" style={{ textAlign: 'center', justifyContent: 'center' }}>
            <TrendingDown size={40} className="text-rose" style={{ margin: '0 auto 12px' }} />
            <div style={{ fontSize: '36px', fontWeight: 900 }} className="text-rose mono">1.89 ★</div>
            <h4 style={{ fontSize: '16px', color: '#fff', margin: '8px 0' }}>سقوط ریتینگ ستاره</h4>
            <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: '1.6' }}>
              میانگین امتیاز نظرات اخلاقی به ۱.۸۹ ستاره سقوط می‌کند (در مقایسه با ۲.۶۱ ستاره نظرات عادی). سانسور با ۱.۱۷ ستاره کمترین رضایت را دارد.
            </p>
          </div>

          <div className="platform-details-card" style={{ textAlign: 'center', justifyContent: 'center' }}>
            <MessageSquare size={40} className="text-sky" style={{ margin: '0 auto 12px' }} />
            <div style={{ fontSize: '36px', fontWeight: 900 }} className="text-sky mono">39.3 Words</div>
            <h4 style={{ fontSize: '16px', color: '#fff', margin: '8px 0' }}>طولانی‌تر بودن متن نظر</h4>
            <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: '1.6' }}>
              نظرات اخلاقی با میانگین ۳۹ کلمه (در برابر ۲۷ کلمه عادی) نوشته می‌شوند؛ کاربر با جزئیات و با درد احساسی تجربه خود را روایت می‌کند.
            </p>
          </div>

          <div className="platform-details-card" style={{ textAlign: 'center', justifyContent: 'center' }}>
            <ThumbsUp size={40} className="text-amber" style={{ margin: '0 auto 12px' }} />
            <div style={{ fontSize: '36px', fontWeight: 900 }} className="text-amber mono">16.1 Likes</div>
            <h4 style={{ fontSize: '16px', color: '#fff', margin: '8px 0' }}>همبستگی جمعی (Up-votes)</h4>
            <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: '1.6' }}>
              تعداد لایک نظرات اخلاقی بیش از ۵ برابر نظرات عادی است (۱۶.۱ در برابر ۳.۱) که قطبی‌شدن شدید و توجه سایر کاربران را ثابت می‌کند.
            </p>
          </div>
        </div>
      );

    /* اسلاید ۱۰: پدیده دسترس‌پذیری */
    case 'slide-10':
      return (
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '24px', height: '100%', alignItems: 'center' }}>
          <div className="platform-details-card">
            <div className="badge-pill bg-amber" style={{ width: 'fit-content', marginBottom: '8px' }}>
              شگفت‌انگیزترین یافته آماری پژوهش
            </div>
            <h3 style={{ fontSize: '26px', color: '#fff', lineHeight: '1.4' }}>
              چرا دسترس‌پذیری با سهم ۱.۵٪، رکورد خیره‌کننده <span className="text-amber mono">۱۰۸.۵ لایک</span> را شکست؟
            </h3>
            <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: '1.7', marginTop: '12px' }}>
              در حالی که مباحث اعتیاد کمتر از ۱ لایک ثبت کردند، هر نظری که درباره محرومیت یک فرد ناشنوا از زیرنویس یا ناسازگاری با صفحه‌خوان بود، سیل لایک و خشم سایر کاربران را به دنبال داشت.
            </p>
            <div style={{ background: 'rgba(245, 158, 11, 0.1)', borderRight: '4px solid #f59e0b', padding: '12px', borderRadius: '8px', marginTop: '14px', fontSize: '13px' }}>
              <strong>نتیجه‌گیری اخلاقی برای مهندسان:</strong> تبعیض علیه توانیابان تنها تخلف فنی نیست؛ لگدمال کردن کرامت انسانی است و جامعه به سرعت در برابر آن جبهه می‌گیرد.
            </div>
          </div>

          <div className="platform-details-card" style={{ textAlign: 'center', padding: '32px' }}>
            <div style={{ fontSize: '56px', fontWeight: 900 }} className="text-amber mono">108.5</div>
            <div style={{ fontSize: '14px', color: '#e2e8f0', marginTop: '4px' }}>میانگین لایک هر نظر دسترس‌پذیری</div>
            <div className="mono text-muted" style={{ fontSize: '12px', marginTop: '8px' }}>
              Next closest: Transparency (48.4)
            </div>
          </div>
        </div>
      );

    /* اسلاید ۱۱: یادگیری ماشین و BERT */
    case 'slide-11':
      return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', height: '100%' }}>
          <div className="platform-details-card">
            <Cpu size={28} className="text-emerald" />
            <h4 style={{ fontSize: '16px', color: '#fff', margin: '8px 0' }}>پتانسیل خودکارسازی با هوش مصنوعی (RQ3)</h4>
            <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
              به دلیل حجم میلیونی بازخوردها، امکان بررسی دستی وجود ندارد؛ محققان مدل‌های ترنسفورمر BERT و سنتی را ارزیابی کردند:
            </p>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '12px', fontSize: '12px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-glass)', textAlign: 'right' }}>
                  <th style={{ padding: '6px' }}>مدل</th>
                  <th style={{ padding: '6px' }}>Precision</th>
                  <th style={{ padding: '6px' }}>Recall</th>
                  <th style={{ padding: '6px' }}>F1-Score</th>
                </tr>
              </thead>
              <tbody className="mono">
                <tr style={{ background: 'rgba(16, 185, 129, 0.15)' }}>
                  <td style={{ padding: '6px', fontWeight: 800 }}>BERT (Deep Learning)</td>
                  <td style={{ padding: '6px' }}>0.94</td>
                  <td style={{ padding: '6px' }}>0.94</td>
                  <td style={{ padding: '6px', color: '#10b981', fontWeight: 900 }}>0.94</td>
                </tr>
                <tr>
                  <td style={{ padding: '6px' }}>Multinomial Naive Bayes</td>
                  <td style={{ padding: '6px' }}>0.89</td>
                  <td style={{ padding: '6px' }}>0.90</td>
                  <td style={{ padding: '6px' }}>0.89</td>
                </tr>
                <tr>
                  <td style={{ padding: '6px' }}>Logistic Regression</td>
                  <td style={{ padding: '6px' }}>0.90</td>
                  <td style={{ padding: '6px' }}>0.88</td>
                  <td style={{ padding: '6px' }}>0.89</td>
                </tr>
                <tr>
                  <td style={{ padding: '6px' }}>Support Vector Machine (SVM)</td>
                  <td style={{ padding: '6px' }}>0.90</td>
                  <td style={{ padding: '6px' }}>0.88</td>
                  <td style={{ padding: '6px' }}>0.89</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="platform-details-card">
            <h4 style={{ fontSize: '16px', color: '#38bdf8' }}>کاربرد عملی در CI/CD و مهندسی نرم‌افزار</h4>
            <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
              با ادغام پایپ‌لاین BERT در چرخه توسعه:
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12px' }}>
              <li style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '6px' }}>
                🟢 <strong>کشف زودهنگام باگ‌های اخلاقی:</strong> قبل از رسانه‌ای شدن بحران یا اخطار رگولاتوری، نظرات اخلاقی دسته‌بندی می‌شوند.
              </li>
              <li style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '6px' }}>
                🟢 <strong>اولویت‌دهی رخدادهای بیرونی (External):</strong> هشدارهای ایمنی فیزیکی با F1=0.97 به سرعت به تیم‌های حقوقی و فنی ارجاع داده می‌شوند.
              </li>
            </ul>
          </div>
        </div>
      );

    /* اسلاید ۱۲: همبستگی با رخدادهای دنیای واقعی */
    case 'slide-12':
      return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', height: '100%' }}>
          <div className="platform-details-card">
            <Calendar size={28} className="text-rose" />
            <h4 style={{ fontSize: '16px', margin: '8px 0', color: '#fff' }}>شورش ۶ ژانویه کنگره</h4>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
              افزایش ناگهانی و قله شکایات سانسور در فیس‌بوک و یوتیوب همزمان با مسدودسازی حساب ترامپ و فکت‌چکینگ سیاسی.
            </p>
          </div>
          <div className="platform-details-card">
            <Scale size={28} className="text-amber" />
            <h4 style={{ fontSize: '16px', margin: '8px 0', color: '#fff' }}>دادگاه قتل جورج فلوید</h4>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
              همزمان با دادگاه درک شووین، نظرات مربوط به تبعیض نژادی الگوریتمی در شبکه‌های اجتماعی جهش چشمگیری پیدا کرد.
            </p>
          </div>
          <div className="platform-details-card">
            <AlertTriangle size={28} className="text-sky" />
            <h4 style={{ fontSize: '16px', margin: '8px 0', color: '#fff' }}>ترندهای مرگبار تیک‌تاک</h4>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
              قله شکایات ایمنی کاربر در فوریه ۲۰۲۱، دقیقاً پس از وایرال شدن ویدیوهای چالش خودکشی و مواد مخدر ثبت شد.
            </p>
          </div>
        </div>
      );

    /* اسلاید ۱۳: ویجت تعاملی ۲ - شبیه‌ساز بازرس کدهای اندروید */
    case 'slide-13':
      return <MobileDarkPatternSimulator />;

    /* اسلاید ۱۴: دستورالعمل‌های مهندسی */
    case 'slide-14':
      return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', height: '100%' }}>
          <div className="platform-details-card">
            <div className="badge-pill bg-indigo">توصیه ۱</div>
            <h4 style={{ fontSize: '16px', color: '#fff', margin: '6px 0' }}>اصلاح ساختاری سیستم گزارش‌دهی</h4>
            <p style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: '1.6' }}>
              حذف محدودیت مضحک کاراکتر، تعریف دسته‌بندی‌های شفاف، امکان ارسال اسکرین‌شات و ارائه داشبورد عمومی وضعیت پیگیری.
            </p>
          </div>
          <div className="platform-details-card">
            <div className="badge-pill bg-rose">توصیه ۲</div>
            <h4 style={{ fontSize: '16px', color: '#fff', margin: '6px 0' }}>شفافیت در مجوزها و اصل Least Privilege</h4>
            <p style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: '1.6' }}>
              رفع معضل Over-permission در اندروید؛ عدم درخواست مجوزهای حساس تا قبل از نیاز واقعی و تشریح کاربرد داده به زبان ساده.
            </p>
          </div>
          <div className="platform-details-card">
            <div className="badge-pill bg-amber">توصیه ۳</div>
            <h4 style={{ fontSize: '16px', color: '#fff', margin: '6px 0' }}>مهار الگوهای اعتیادآور (Digital Wellbeing)</h4>
            <p style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: '1.6' }}>
              حذف رفرش‌های شبیه قمار، تعبیه توقف‌های آگاهانه (Mindful Friction) بعد از استفاده مداوم، و امکان غیرفعال‌سازی پخش خودکار.
            </p>
          </div>
          <div className="platform-details-card">
            <div className="badge-pill bg-rose" style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#6ee7b7' }}>توصیه ۴</div>
            <h4 style={{ fontSize: '16px', color: '#fff', margin: '6px 0' }}>رعایت سخت‌گیرانه دسترس‌پذیری</h4>
            <p style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: '1.6' }}>
              تست با TalkBack، تکمیل ContentDescription و تعبیه زیرنویس دو زبانه به عنوان یک الزام حقوقی و انسانی.
            </p>
          </div>
        </div>
      );

    /* اسلاید ۱۵: ویجت تعاملی ۳ - کوییز کلاسی */
    case 'slide-15':
      return <ClassQuiz />;

    /* اسلاید ۱۶: سوگندنامه و جمع‌بندی صالح */
    case 'slide-16':
      return (
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '24px', height: '100%', alignItems: 'center' }}>
          <div className="platform-details-card" style={{ padding: '28px' }}>
            <Award size={36} className="text-amber" />
            <h3 style={{ fontSize: '24px', color: '#fff', margin: '12px 0 8px' }}>سوگندنامه مهندسی نرم‌افزار مسئولانه</h3>
            <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: '1.8' }}>
              «ما مهندسان نرم‌افزار، متعهد می‌شویم دانشی را که برای ساختن سیستم‌ها کسب کرده‌ایم، هرگز در جهت فریب، استثمار یا به دام انداختن روان انسان‌ها به کار نگیریم. کدهای ما فانی هستند، اما تعهد اخلاقی ما به عدالت، حریم خصوصی و کرامت انسانی جاودانه است.»
            </p>
            <div style={{ marginTop: '16px', borderTop: '1px solid var(--border-glass)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>محمد صالح حاج‌کرمی</strong>
                <div className="text-muted" style={{ fontSize: '11px' }}>دانشجوی مهندسی کامپیوتر • دانشگاه شهید مهاجر اصفهان</div>
              </div>
              <span className="domain-badge mono">mshajkarami.dev</span>
            </div>
          </div>

          <div className="platform-details-card" style={{ textAlign: 'center', padding: '28px' }}>
            <h4 style={{ fontSize: '16px', color: '#38bdf8', marginBottom: '8px' }}>سؤالات و تبادل نظر</h4>
            <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: '1.6' }}>
              از توجه و دقت استاد گرامی سرکار خانم صبری و همه هم‌کلاسی‌های محترم صمیمانه سپاسگزارم.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div className="paper-ref-title">The Best Ends by the Best Means</div>
              <div className="mono text-muted" style={{ fontSize: '11px' }}>Springer Nature ESE 2024</div>
            </div>
          </div>
        </div>
      );

    default:
      return <div>اسلاید در دست ساخت است...</div>;
  }
}
