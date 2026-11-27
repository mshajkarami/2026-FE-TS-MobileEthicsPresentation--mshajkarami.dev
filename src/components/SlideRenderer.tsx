import { SlideDefinition } from '../types/presentation';
import { ETHICAL_CATEGORIES } from '../data/ethicsData';
import { EthicsRadarLab } from './EthicsRadarLab';
import { MobileDarkPatternSimulator } from './MobileDarkPatternSimulator';
import { ClassQuiz } from './ClassQuiz';

import ethicsHeroImg from '../assets/ethics_hero.jpg';
import darkPatternsImg from '../assets/dark_patterns.jpg';
import uberSafetyImg from '../assets/uber_safety.jpg';
import accessibilityImg from '../assets/accessibility.jpg';
import salehPhoto from '../assets/saleh.jpg';

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
  Flame,
  Zap,
  Globe2,
  Clock,
  Sparkles,
  CheckCircle,
  ArrowLeft,
  ExternalLink,
} from 'lucide-react';

interface SlideRendererProps {
  slide: SlideDefinition;
  onStartPresentation?: () => void;
}

export function SlideRenderer({ slide, onStartPresentation }: SlideRendererProps) {
  switch (slide.id) {
    /* اسلاید ۱: کاور و هیرو سکشن لوکس و شاهکار */
    case 'slide-01':
      return (
        <div className="hero-v3-container">
          <div className="hero-v3-left">
            <div className="hero-academic-tag-bar">
              <span className="academic-badge-gold">
                <Sparkles size={13} />
                <span>دانشگاه فنی و حرفه‌ای (ملی مهارت) شهید مهاجر اصفهان</span>
              </span>
              <span className="academic-badge-glass">درس: اخلاق حرفه‌ای مهندسی</span>
              <span className="academic-badge-glass">مدرس: سرکار خانم آرزو صبری</span>
            </div>

            <div className="hero-v3-title-wrap">
              <h1>کالبدشکافی اخلاق در زیست‌بوم نرم‌افزارهای موبایل</h1>
              <p>تحلیل تجربی ۵.۸ میلیون بازخورد کاربران در گوگل پلی، ۱۶ بُعد اخلاقی، و چارچوب توسعه مسئولانه</p>
            </div>

            <div className="hero-v3-metrics-grid">
              <div className="hero-v3-metric-box">
                <div className="metric-header-row">
                  <MessageSquare size={15} className="text-gold" />
                  <span className="hero-v3-metric-val mono text-gold">5.8M+</span>
                </div>
                <div className="hero-v3-metric-lbl">نظرات تحلیل‌شده در گوگل پلی</div>
              </div>
              <div className="hero-v3-metric-box">
                <div className="metric-header-row">
                  <Scale size={15} className="text-emerald" />
                  <span className="hero-v3-metric-val mono text-emerald">16</span>
                </div>
                <div className="hero-v3-metric-lbl">بُعد اخلاقی شناسایی‌شده</div>
              </div>
              <div className="hero-v3-metric-box">
                <div className="metric-header-row">
                  <BrainCircuit size={15} className="text-sky" />
                  <span className="hero-v3-metric-val mono text-sky">F1=0.94</span>
                </div>
                <div className="hero-v3-metric-lbl">دقت مدل عمیق BERT</div>
              </div>
            </div>

            {/* کارت پرستیژ رسمی محمد صالح حاج‌کرمی با عکس واقعی */}
            <div className="presenter-luxury-card">
              <div className="presenter-photo-frame">
                <img src={salehPhoto} alt="مهندس محمد صالح حاج‌کرمی" />
                <div className="photo-pulse-ring" />
              </div>
              <div className="presenter-details">
                <h4>
                  <span>مهندس محمد صالح حاج‌کرمی</span>
                  <span className="verified-badge-wrap" title="تاییدشده">
                    <CheckCircle size={15} className="presenter-verified-icon" />
                  </span>
                </h4>
                <div className="role-text">دانشجوی مهندسی کامپیوتر • توسعه‌دهنده نرم‌افزار موبایل و سامانه‌های سازمانی</div>
                <a
                  href="https://mshajkarami.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand-url-link mono"
                  title="مشاهده وب‌سایت شخصی و رزومه"
                >
                  <span>mshajkarami.dev</span>
                  <ExternalLink size={11} />
                </a>
              </div>

              {onStartPresentation && (
                <button
                  className="hero-launch-btn"
                  onClick={onStartPresentation}
                  title="ورود به اسلاید بعدی"
                >
                  <span>شروع ارائه</span>
                  <ArrowLeft size={15} />
                </button>
              )}
            </div>
          </div>

          {/* ستون راست: قاب بصری ۳بعدی سینمایی */}
          <div className="hero-v3-right">
            <div className="hero-3d-visual-card">
              <div className="hero-3d-ambient-glow" />
              <img src={ethicsHeroImg} alt="Mobile Software Ethics 3D Concept" />
              <div className="hero-floating-chip-1">
                <Scale size={14} className="text-gold" />
                <span>ترازوی عدالت اخلاقی در کدنویسی</span>
              </div>
              <div className="hero-floating-chip-2">
                <div className="chip-2-title">پژوهش مرجع بین‌المللی:</div>
                <div className="chip-2-desc">The best ends by the best means: ethical concerns in app reviews</div>
                <div className="chip-2-meta mono">Empirical Software Engineering (2024) 29:138 • Springer Nature</div>
              </div>
            </div>
          </div>
        </div>
      );

    /* اسلاید ۲: بحران مدرن اخلاق در موبایل (بصری با تصویر و اینفوگرافیک) */
    case 'slide-02':
      return (
        <div className="slide2-visual-grid">
          {/* ستون راست: کارت ویترین تصویر ۳بعدی سینمایی */}
          <div className="slide2-media-showcase">
            <div className="slide2-img-container">
              <img src={darkPatternsImg} alt="Dark Patterns and Attention Vortex" />
              <div className="slide2-img-badge">
                <Flame size={13} className="text-crimson" />
                <span>ATTENTION ECONOMY</span>
              </div>
            </div>
            <div className="slide2-media-footer">
              <div>
                <div className="slide2-media-title">بحران مدل درآمدی «اقتصاد توجه»</div>
                <p className="slide2-media-desc">
                  وقتی درآمد پلتفرم‌ها مستقیماً به زمان حضور و اسکرول بی‌پایان کاربر گره خورده است، اخلاق و سلامت روان انسان نخستین قربانی الگوریتم‌های بیشینه‌ساز سود خواهد بود.
                </p>
              </div>
              <div className="slide-takeaway-bar" style={{ marginTop: '10px', fontSize: '11px', padding: '6px 12px' }}>
                <Zap size={14} className="text-gold" />
                <span>مهندس نرم‌افزار = آخرین مرز دفاعی کرامت کاربر</span>
              </div>
            </div>
          </div>

          {/* ستون چپ: شبکه ۲ در ۲ کارت‌های گرافیکی با داده‌های ملموس */}
          <div className="slide2-cards-2x2">
            {/* کارت ۱ */}
            <div className="pillar-card-v2" style={{ borderRight: '4px solid var(--accent-gold)' }}>
              <div>
                <div className="pillar-top-row">
                  <div className="pillar-icon-box bg-gold-light">
                    <Smartphone size={22} className="text-gold" />
                  </div>
                  <span className="pillar-badge-stat bg-gold-light mono">85% GLOBAL REACH</span>
                </div>
                <div className="pillar-title">نفوذ ۸۵٪ گوشی هوشمند</div>
                <p className="pillar-text">
                  گوشی موبایل صمیمی‌ترین دستگاه دیجیتال بشر است؛ به دوربین، میکروفون، حساب بانکی و موقعیت مکانی ۲۴ ساعته دسترسی بدون وقفه دارد.
                </p>
              </div>
              <div className="pillar-highlight-tag">
                <Globe2 size={13} />
                <span>۶.۸ میلیارد دستگاه هوشمند فعال</span>
              </div>
            </div>

            {/* کارت ۲ */}
            <div className="pillar-card-v2" style={{ borderRight: '4px solid var(--accent-crimson)' }}>
              <div>
                <div className="pillar-top-row">
                  <div className="pillar-icon-box bg-crimson-light">
                    <Lock size={22} className="text-crimson" />
                  </div>
                  <span className="pillar-badge-stat bg-crimson-light mono">BIG TECH OLIGOPOLY</span>
                </div>
                <div className="pillar-title">انحصار غول‌های فناوری</div>
                <p className="pillar-text">
                  تعداد انگشت‌شماری از غول‌های فناوری (Meta, ByteDance, Google, Uber) بر این شاهراه ارتباطی تسلط دارند و الگوریتم‌های رفتاری را هدایت می‌کنند.
                </p>
              </div>
              <div className="pillar-highlight-tag text-crimson">
                <AlertTriangle size={13} />
                <span>انحصار الگوریتمی بر توزیع محتوا</span>
              </div>
            </div>

            {/* کارت ۳ */}
            <div className="pillar-card-v2" style={{ borderRight: '4px solid var(--accent-amber)' }}>
              <div>
                <div className="pillar-top-row">
                  <div className="pillar-icon-box bg-gold-light">
                    <Clock size={22} className="text-amber" />
                  </div>
                  <span className="pillar-badge-stat bg-gold-light mono">REGULATORY CHASM</span>
                </div>
                <div className="pillar-title">شکست رگولاتوری سنتی</div>
                <p className="pillar-text">
                  سرعت انتشار آپدیت‌های هفتگی نرم‌افزار (۷ روز) در برابر فرآیند چندساله تصویب قوانین دولتی (۳ تا ۵ سال) باعث ناتوانی کامل نهادهای ناظر شده است.
                </p>
              </div>
              <div className="pillar-highlight-tag text-amber">
                <Scale size={13} />
                <span>مسئولیت مستقیم مهندسی نرم‌افزار</span>
              </div>
            </div>

            {/* کارت ۴ */}
            <div className="pillar-card-v2" style={{ borderRight: '4px solid var(--accent-emerald)' }}>
              <div>
                <div className="pillar-top-row">
                  <div className="pillar-icon-box bg-emerald-light">
                    <BrainCircuit size={22} className="text-emerald" />
                  </div>
                  <span className="pillar-badge-stat bg-emerald-light mono">DOPAMINE TRAP</span>
                </div>
                <div className="pillar-title">دستکاری رفتار و روان</div>
                <p className="pillar-text">
                  طراحی لوپ‌های اعتیادآور و فیدهای بی‌پایان به سبک قمارخانه‌ها (Slot-Machine UX)، تضعیف تمرکز کودکان و نوجوانان و ایجاد اضطراب مزمن.
                </p>
              </div>
              <div className="pillar-highlight-tag text-emerald">
                <Sparkles size={13} />
                <span>الگوهای تاریک شناختی (Dark Patterns)</span>
              </div>
            </div>
          </div>
        </div>
      );

    /* اسلاید ۳: شناسنامه پژوهش ESE 2024 */
    case 'slide-03':
      return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '24px', height: '100%' }}>
          <div className="platform-details-card" style={{ borderColor: 'rgba(245, 158, 11, 0.3)' }}>
            <div className="badge-pill bg-gold-light" style={{ width: 'fit-content', marginBottom: '8px' }}>
              Springer Nature Publication
            </div>
            <h4 style={{ fontSize: '18px', color: '#fde68a', marginBottom: '12px' }}>مشخصات رسمی مقاله رفرنس</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <li><strong>عنوان:</strong> The best ends by the best means: ethical concerns in app reviews</li>
              <li><strong>ژورنال:</strong> Empirical Software Engineering (ESE), Vol 29, Issue 138 (2024)</li>
              <li><strong>ناشر:</strong> Springer Nature (نمایه ISI Web of Science با ایمپکت فاکتور بالا)</li>
              <li><strong>نویسندگان:</strong> Neelam Tjikhoeri, Lauren Olson, Emitzá Guzmán</li>
              <li><strong>وابستگی سازمانی:</strong> دانشکده علوم، دانشگاه وریج آمستردام (هلند)</li>
              <li className="mono text-gold">DOI: 10.1007/s10664-024-10463-7</li>
            </ul>
          </div>
          <div className="platform-details-card">
            <h4 style={{ fontSize: '18px', color: '#10b981', marginBottom: '12px' }}>۳ سؤال بنیادی پژوهش (Research Questions)</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ background: 'rgba(245, 158, 11, 0.08)', padding: '14px', borderRadius: '10px', borderRight: '4px solid var(--accent-gold)' }}>
                <strong className="text-gold">RQ1 (انواع دغدغه‌ها):</strong> چه مقولاتی از دغدغه‌های اخلاقی در نظرات وجود دارند و چگونه با وقایع سیاسی و زمانی تغییر می‌کنند؟
              </div>
              <div style={{ background: 'rgba(16, 185, 129, 0.08)', padding: '14px', borderRadius: '10px', borderRight: '4px solid var(--accent-emerald)' }}>
                <strong className="text-emerald">RQ2 (رفتارشناسی و شاخص‌ها):</strong> ریویوهای اخلاقی چه ویژگی‌های آماری متمایزی از حیث ریتینگ، طول کلمات و لایک دارند؟
              </div>
              <div style={{ background: 'rgba(56, 189, 248, 0.08)', padding: '14px', borderRadius: '10px', borderRight: '4px solid var(--accent-sky)' }}>
                <strong className="text-sky">RQ3 (پتانسیل خودکارسازی):</strong> آیا یادگیری ماشین و ترنسفورمر BERT می‌توانند این دغدغه‌ها را به صورت خودکار پایش کنند؟
              </div>
            </div>
          </div>
        </div>
      );

    /* اسلاید ۴: متدولوژی و دیتاست */
    case 'slide-04':
      return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px', height: '100%' }}>
          <div className="platform-details-card" style={{ borderTop: '4px solid var(--accent-gold)' }}>
            <Layers size={32} className="text-gold" />
            <h4 style={{ fontSize: '17px', margin: '12px 0 6px', color: '#fff' }}>مخزن داده ۵.۸ میلیونی</h4>
            <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
              جمع‌آوری ۵,۸۶۴,۱۸۸ نظر واقعی از ۱۰ اپلیکیشن پیشرو در گوگل پلی استور به عنوان بزرگ‌ترین فروشگاه اپ جهان.
            </p>
            <div className="mono text-gold" style={{ fontSize: '11px', marginTop: 'auto' }}>
              10 Global Apps across 4 Domains
            </div>
          </div>
          <div className="platform-details-card" style={{ borderTop: '4px solid var(--accent-emerald)' }}>
            <Scale size={32} className="text-emerald" />
            <h4 style={{ fontSize: '17px', margin: '12px 0 6px', color: '#fff' }}>۹ دور ارزیابی تجربی</h4>
            <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
              ۲ ارزیاب مستقل، ۹ دوره پیش‌آزمون برچسب‌گذاری دستی را انجام دادند تا ضریب توافق به شاخص طلایی Cohen's Kappa = 0.91 رسید.
            </p>
            <div className="mono text-emerald" style={{ fontSize: '11px', marginTop: 'auto' }}>
              Cohen's Kappa = 0.91 (High Rigor)
            </div>
          </div>
          <div className="platform-details-card" style={{ borderTop: '4px solid var(--accent-sky)' }}>
            <CheckCircle2 size={32} className="text-sky" />
            <h4 style={{ fontSize: '17px', margin: '12px 0 6px', color: '#fff' }}>نمونه استاندارد ۳,۱۰۱ نظر</h4>
            <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '22px', height: '100%' }}>
          <div className="platform-details-card">
            <h4 style={{ fontSize: '16px', color: '#94a3b8', borderBottom: '1px solid rgba(245, 158, 11, 0.15)', paddingBottom: '8px' }}>
              چارچوب کلاسیک رایت (Wright ICT Framework 2011)
            </h4>
            <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
              چارچوب رایت قبل از همه‌گیری گوشی‌های هوشمند مدرن نوشته شده بود و مفاهیم انتزاعی آکادمیک داشت:
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12.5px', color: '#94a3b8' }}>
              <li>❌ مفاهیم انتزاعی مثل Value Sensitive Design و Dignity</li>
              <li>❌ عدم پوشش مفاهیم موبایلی مثل فید اعتیادآور و ترندهای ویدیو</li>
              <li>❌ نگاه بیش از حد تئوریک بدون بازتاب زبان عامیانه کاربران</li>
            </ul>
          </div>

          <div className="platform-details-card" style={{ borderColor: 'rgba(16, 185, 129, 0.4)', background: 'rgba(16, 185, 129, 0.05)' }}>
            <h4 style={{ fontSize: '16px', color: '#10b981', borderBottom: '1px solid rgba(16, 185, 129, 0.2)', paddingBottom: '8px' }}>
              چارچوب تجربی نوین ESE 2024 (۹ مقوله جدید کشف‌شده)
            </h4>
            <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
              محققان با تحلیل زبان واقعی کاربران در گوگل پلی، ۹ دغدغه حاد جدید اضافه کردند:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '12px' }}>
              <span className="hero-academic-pill" style={{ color: '#fde68a', borderColor: 'rgba(245, 158, 11, 0.3)' }}>طراحی اعتیادآور (Addiction)</span>
              <span className="hero-academic-pill" style={{ color: '#fde68a', borderColor: 'rgba(245, 158, 11, 0.3)' }}>سانسور و سرکوب (Censorship)</span>
              <span className="hero-academic-pill" style={{ color: '#fde68a', borderColor: 'rgba(245, 158, 11, 0.3)' }}>سرقت هویت (Catfishing)</span>
              <span className="hero-academic-pill" style={{ color: '#fde68a', borderColor: 'rgba(245, 158, 11, 0.3)' }}>اخبار جعلی (Misinformation)</span>
              <span className="hero-academic-pill" style={{ color: '#fde68a', borderColor: 'rgba(245, 158, 11, 0.3)' }}>کلاهبرداری مالی (Scam)</span>
              <span className="hero-academic-pill" style={{ color: '#fde68a', borderColor: 'rgba(245, 158, 11, 0.3)' }}>آزار سایبری (Bullying)</span>
              <span className="hero-academic-pill" style={{ color: '#fde68a', borderColor: 'rgba(245, 158, 11, 0.3)' }}>تبلیغات قمار (Harmful Ads)</span>
              <span className="hero-academic-pill" style={{ color: '#fde68a', borderColor: 'rgba(245, 158, 11, 0.3)' }}>محتوای نامناسب (Vulgarity)</span>
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
                <span className="tax-card-pct mono" style={{ color: cat.color }}>{cat.percentage}%</span>
              </div>
              <div className="tax-card-name">{cat.nameFa}</div>
              <p className="tax-card-desc">{cat.descriptionFa}</p>
              <div className="tax-card-metrics mono">
                <span>★ {cat.avgRating.toFixed(2)}</span>
                <span>{cat.avgWords.toFixed(0)} words</span>
                <span style={{ color: cat.id === 'accessibility' ? 'var(--accent-gold)' : undefined, fontWeight: cat.id === 'accessibility' ? 800 : undefined }}>
                  👍 {cat.avgUpvotes.toFixed(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      );

    /* اسلاید ۷: دغدغه‌های Internal vs External با تصویر اوبر */
    case 'slide-07':
      return (
        <div className="split-v2-grid">
          <div className="split-v2-card internal-realm">
            <div className="split-head-pct mono text-gold">92%</div>
            <h4 style={{ fontSize: '18px', color: '#fde68a' }}>دغدغه‌های درونی (Internal Concerns)</h4>
            <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
              آسیب‌ها و تخلفاتی که در مرزهای درون‌برنامه‌ای باقی می‌مانند:
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px' }}>
              <li>• پنهان کردن پست‌های کاربر بدون اطلاع (Shadow-ban)</li>
              <li>• سرقت عکس پروفایل و جعل حساب (Catfishing)</li>
              <li>• دسترسی غیرمجاز به دفترچه تلفن و گالری</li>
              <li>• آزار کلامی در بخش نظرات</li>
            </ul>
          </div>

          <div className="split-v2-card external-danger">
            <div className="split-hero-img-box">
              <img src={uberSafetyImg} alt="Physical safety collision" />
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
              <div className="split-head-pct mono text-crimson" style={{ fontSize: '32px' }}>8%</div>
              <h4 style={{ fontSize: '17px', color: '#fca5a5' }}>سرایت به دنیای فیزیکی (External Concerns)</h4>
            </div>
            <p style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: '1.5' }}>
              لحظه‌ای که نقص اخلاقی نرم‌افزار، سلامت جسمی و امنیت جان انسان‌ها را به خطر می‌اندازد (اوبر و چالش‌های فیزیکی تیک‌تاک).
            </p>
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
          <div className="platform-details-card" style={{ textAlign: 'center', justifyContent: 'center', borderTop: '4px solid var(--accent-crimson)' }}>
            <TrendingDown size={42} className="text-crimson" style={{ margin: '0 auto 12px' }} />
            <div style={{ fontSize: '38px', fontWeight: 900 }} className="text-crimson mono">1.89 ★</div>
            <h4 style={{ fontSize: '16px', color: '#fff', margin: '8px 0' }}>سقوط ریتینگ ستاره</h4>
            <p style={{ fontSize: '12.5px', color: '#cbd5e1', lineHeight: '1.6' }}>
              میانگین امتیاز نظرات اخلاقی به ۱.۸۹ ستاره سقوط می‌کند (در مقایسه با ۲.۶۱ ستاره نظرات عادی). سانسور با ۱.۱۷ ستاره کمترین رضایت را دارد.
            </p>
          </div>

          <div className="platform-details-card" style={{ textAlign: 'center', justifyContent: 'center', borderTop: '4px solid var(--accent-gold)' }}>
            <MessageSquare size={42} className="text-gold" style={{ margin: '0 auto 12px' }} />
            <div style={{ fontSize: '38px', fontWeight: 900 }} className="text-gold mono">39.3 Words</div>
            <h4 style={{ fontSize: '16px', color: '#fff', margin: '8px 0' }}>طولانی‌تر بودن متن نظر</h4>
            <p style={{ fontSize: '12.5px', color: '#cbd5e1', lineHeight: '1.6' }}>
              نظرات اخلاقی با میانگین ۳۹ کلمه (در برابر ۲۷ کلمه عادی) نوشته می‌شوند؛ کاربر با جزئیات و با درد احساسی تجربه خود را روایت می‌کند.
            </p>
          </div>

          <div className="platform-details-card" style={{ textAlign: 'center', justifyContent: 'center', borderTop: '4px solid var(--accent-emerald)' }}>
            <ThumbsUp size={42} className="text-emerald" style={{ margin: '0 auto 12px' }} />
            <div style={{ fontSize: '38px', fontWeight: 900 }} className="text-emerald mono">16.1 Likes</div>
            <h4 style={{ fontSize: '16px', color: '#fff', margin: '8px 0' }}>همبستگی جمعی (Up-votes)</h4>
            <p style={{ fontSize: '12.5px', color: '#cbd5e1', lineHeight: '1.6' }}>
              تعداد لایک نظرات اخلاقی بیش از ۵ برابر نظرات عادی است (۱۶.۱ در برابر ۳.۱) که قطبی‌شدن شدید و توجه سایر کاربران را ثابت می‌کند.
            </p>
          </div>
        </div>
      );

    /* اسلاید ۱۰: پدیده دسترس‌پذیری با تصویر همدلی ۳بعدی */
    case 'slide-10':
      return (
        <div className="access-v2-grid">
          <div className="platform-details-card">
            <div className="badge-pill bg-gold-light" style={{ width: 'fit-content', marginBottom: '8px' }}>
              شگفت‌انگیزترین یافته آماری پژوهش
            </div>
            <h3 style={{ fontSize: '26px', color: '#fff', lineHeight: '1.4' }}>
              چرا دسترس‌پذیری با سهم ۱.۵٪، رکورد خیره‌کننده <span className="text-gold mono">۱۰۸.۵ لایک</span> را شکست؟
            </h3>
            <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: '1.7', marginTop: '12px' }}>
              در حالی که مباحث اعتیاد کمتر از ۱ لایک ثبت کردند، هر نظری که درباره محرومیت یک فرد ناشنوا از زیرنویس یا ناسازگاری با صفحه‌خوان بود، سیل لایک و خشم سایر کاربران را به دنبال داشت.
            </p>
            <div style={{ background: 'rgba(245, 158, 11, 0.1)', borderRight: '4px solid var(--accent-gold)', padding: '14px', borderRadius: '10px', marginTop: '16px', fontSize: '13px' }}>
              <strong>نتیجه‌گیری اخلاقی برای مهندسان:</strong> تبعیض علیه توانیابان تنها تخلف فنی نیست؛ لگدمال کردن کرامت انسانی است و جامعه به سرعت در برابر آن جبهه می‌گیرد.
            </div>
          </div>

          <div className="access-img-card">
            <img src={accessibilityImg} alt="Inclusive Design & Empathy" />
          </div>
        </div>
      );

    /* اسلاید ۱۱: یادگیری ماشین و BERT */
    case 'slide-11':
      return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', height: '100%' }}>
          <div className="platform-details-card" style={{ borderColor: 'rgba(16, 185, 129, 0.3)' }}>
            <Cpu size={30} className="text-emerald" />
            <h4 style={{ fontSize: '17px', color: '#fff', margin: '8px 0' }}>پتانسیل خودکارسازی با هوش مصنوعی (RQ3)</h4>
            <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
              به دلیل حجم میلیونی بازخوردها، امکان بررسی دستی وجود ندارد؛ محققان مدل‌های ترنسفورمر BERT و سنتی را ارزیابی کردند:
            </p>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '12px', fontSize: '12.5px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(245, 158, 11, 0.2)', textAlign: 'right' }}>
                  <th style={{ padding: '8px' }}>مدل</th>
                  <th style={{ padding: '8px' }}>Precision</th>
                  <th style={{ padding: '8px' }}>Recall</th>
                  <th style={{ padding: '8px' }}>F1-Score</th>
                </tr>
              </thead>
              <tbody className="mono">
                <tr style={{ background: 'rgba(16, 185, 129, 0.15)' }}>
                  <td style={{ padding: '8px', fontWeight: 800, color: '#fff' }}>BERT (Deep Learning)</td>
                  <td style={{ padding: '8px' }}>0.94</td>
                  <td style={{ padding: '8px' }}>0.94</td>
                  <td style={{ padding: '8px', color: '#10b981', fontWeight: 900 }}>0.94</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>Multinomial Naive Bayes</td>
                  <td style={{ padding: '8px' }}>0.89</td>
                  <td style={{ padding: '8px' }}>0.90</td>
                  <td style={{ padding: '8px' }}>0.89</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>Logistic Regression</td>
                  <td style={{ padding: '8px' }}>0.90</td>
                  <td style={{ padding: '8px' }}>0.88</td>
                  <td style={{ padding: '8px' }}>0.89</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>Support Vector Machine (SVM)</td>
                  <td style={{ padding: '8px' }}>0.90</td>
                  <td style={{ padding: '8px' }}>0.88</td>
                  <td style={{ padding: '8px' }}>0.89</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="platform-details-card">
            <h4 style={{ fontSize: '17px', color: '#fde68a' }}>کاربرد عملی در CI/CD و مهندسی نرم‌افزار</h4>
            <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
              با ادغام پایپ‌لاین BERT در چرخه توسعه:
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '12.5px' }}>
              <li style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '8px', borderRight: '3px solid var(--accent-emerald)' }}>
                🟢 <strong>کشف زودهنگام باگ‌های اخلاقی:</strong> قبل از رسانه‌ای شدن بحران یا اخطار رگولاتوری، نظرات اخلاقی دسته‌بندی می‌شوند.
              </li>
              <li style={{ background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '8px', borderRight: '3px solid var(--accent-crimson)' }}>
                🔴 <strong>اولویت‌دهی رخدادهای بیرونی (External):</strong> هشدارهای ایمنی فیزیکی با F1=0.97 به سرعت به تیم‌های حقوقی و فنی ارجاع داده می‌شوند.
              </li>
            </ul>
          </div>
        </div>
      );

    /* اسلاید ۱۲: همبستگی با رخدادهای دنیای واقعی */
    case 'slide-12':
      return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px', height: '100%' }}>
          <div className="platform-details-card" style={{ borderTop: '4px solid var(--accent-crimson)' }}>
            <Calendar size={32} className="text-crimson" />
            <h4 style={{ fontSize: '17px', margin: '10px 0', color: '#fff' }}>شورش ۶ ژانویه کنگره</h4>
            <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
              افزایش ناگهانی و قله شکایات سانسور در فیس‌بوک و یوتیوب همزمان با مسدودسازی حساب ترامپ و فکت‌چکینگ سیاسی.
            </p>
          </div>
          <div className="platform-details-card" style={{ borderTop: '4px solid var(--accent-gold)' }}>
            <Scale size={32} className="text-gold" />
            <h4 style={{ fontSize: '17px', margin: '10px 0', color: '#fff' }}>دادگاه قتل جورج فلوید</h4>
            <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
              همزمان با دادگاه درک شووین، نظرات مربوط به تبعیض نژادی الگوریتمی در شبکه‌های اجتماعی جهش چشمگیری پیدا کرد.
            </p>
          </div>
          <div className="platform-details-card" style={{ borderTop: '4px solid var(--accent-sky)' }}>
            <AlertTriangle size={32} className="text-sky" />
            <h4 style={{ fontSize: '17px', margin: '10px 0', color: '#fff' }}>ترندهای مرگبار تیک‌تاک</h4>
            <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6' }}>
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '18px', height: '100%' }}>
          <div className="platform-details-card" style={{ borderRight: '4px solid var(--accent-gold)' }}>
            <div className="badge-pill bg-gold-light">توصیه ۱</div>
            <h4 style={{ fontSize: '17px', color: '#fff', margin: '8px 0' }}>اصلاح ساختاری سیستم گزارش‌دهی</h4>
            <p style={{ fontSize: '12.5px', color: '#cbd5e1', lineHeight: '1.6' }}>
              حذف محدودیت مضحک کاراکتر، تعریف دسته‌بندی‌های شفاف، امکان ارسال اسکرین‌شات و ارائه داشبورد عمومی وضعیت پیگیری.
            </p>
          </div>
          <div className="platform-details-card" style={{ borderRight: '4px solid var(--accent-crimson)' }}>
            <div className="badge-pill bg-crimson-light">توصیه ۲</div>
            <h4 style={{ fontSize: '17px', color: '#fff', margin: '8px 0' }}>شفافیت در مجوزها و اصل Least Privilege</h4>
            <p style={{ fontSize: '12.5px', color: '#cbd5e1', lineHeight: '1.6' }}>
              رفع معضل Over-permission در اندروید؛ عدم درخواست مجوزهای حساس تا قبل از نیاز واقعی و تشریح کاربرد داده به زبان ساده.
            </p>
          </div>
          <div className="platform-details-card" style={{ borderRight: '4px solid var(--accent-amber)' }}>
            <div className="badge-pill bg-gold-light">توصیه ۳</div>
            <h4 style={{ fontSize: '17px', color: '#fff', margin: '8px 0' }}>مهار الگوهای اعتیادآور (Digital Wellbeing)</h4>
            <p style={{ fontSize: '12.5px', color: '#cbd5e1', lineHeight: '1.6' }}>
              حذف رفرش‌های شبیه قمار، تعبیه توقف‌های آگاهانه (Mindful Friction) بعد از ۴۵ دقیقه استفاده مداوم، و امکان غیرفعال‌سازی پخش خودکار.
            </p>
          </div>
          <div className="platform-details-card" style={{ borderRight: '4px solid var(--accent-emerald)' }}>
            <div className="badge-pill bg-emerald-light">توصیه ۴</div>
            <h4 style={{ fontSize: '17px', color: '#fff', margin: '8px 0' }}>رعایت سخت‌گیرانه دسترس‌پذیری</h4>
            <p style={{ fontSize: '12.5px', color: '#cbd5e1', lineHeight: '1.6' }}>
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
          <div className="platform-details-card" style={{ padding: '30px', borderRight: '4px solid var(--accent-gold)' }}>
            <Award size={40} className="text-gold" />
            <h3 style={{ fontSize: '24px', color: '#fff', margin: '14px 0 8px' }}>سوگندنامه مهندسی نرم‌افزار مسئولانه</h3>
            <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: '1.8' }}>
              «ما مهندسان نرم‌افزار، متعهد می‌شویم دانشی را که برای ساختن سیستم‌ها کسب کرده‌ایم، هرگز در جهت فریب، استثمار یا به دام انداختن روان انسان‌ها به کار نگیریم. کدهای ما فانی هستند، اما تعهد اخلاقی ما به عدالت، حریم خصوصی و کرامت انسانی جاودانه است.»
            </p>
            <div style={{ marginTop: '20px', borderTop: '1px solid rgba(245, 158, 11, 0.2)', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong style={{ fontSize: '15px' }}>محمد صالح حاج‌کرمی</strong>
                <div className="text-muted" style={{ fontSize: '11px' }}>دانشجوی مهندسی کامپیوتر • دانشگاه شهید مهاجر اصفهان</div>
              </div>
              <span className="author-pill mono">mshajkarami.dev</span>
            </div>
          </div>

          <div className="platform-details-card" style={{ textAlign: 'center', padding: '30px' }}>
            <h4 style={{ fontSize: '18px', color: '#fde68a', marginBottom: '8px' }}>سؤالات و تبادل نظر</h4>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
              از توجه و دقت استاد گرامی سرکار خانم صبری و همه هم‌کلاسی‌های محترم صمیمانه سپاسگزارم.
            </p>
            <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div className="paper-ref-title" style={{ fontSize: '13px' }}>The Best Ends by the Best Means</div>
              <div className="mono text-muted" style={{ fontSize: '11.5px' }}>Springer Nature ESE 2024</div>
            </div>
          </div>
        </div>
      );

    default:
      return <div>اسلاید در دست ساخت است...</div>;
  }
}
