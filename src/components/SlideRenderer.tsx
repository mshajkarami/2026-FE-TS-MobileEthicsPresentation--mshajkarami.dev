import { SlideDefinition } from '../types/presentation';
import { EthicsRadarLab } from './EthicsRadarLab';
import { MobileDarkPatternSimulator } from './MobileDarkPatternSimulator';
import { ClassQuiz } from './ClassQuiz';
import { TaxonomyExplorer } from './TaxonomyExplorer';

import ethicsHeroImg from '../assets/ethics_hero.jpg';
import darkPatternsImg from '../assets/dark_patterns.jpg';
import uberSafetyImg from '../assets/uber_safety.jpg';
import accessibilityImg from '../assets/accessibility.jpg';
import salehPhoto from '../assets/saleh.jpg';

import {
  Smartphone,
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
  Database,
  GraduationCap,
  UserCheck,
  Globe,
  BookOpen,
  Compass,
  Activity,
  Filter,
  FileText,
  Copy,
  ShieldAlert,
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
                <GraduationCap size={14} className="text-gold" />
                <span>دانشگاه فنی و حرفه‌ای (ملی مهارت) شهید مهاجر اصفهان</span>
              </span>
              <span className="academic-badge-glass">
                <BookOpen size={12} className="text-amber" />
                <span>درس: اخلاق حرفه‌ای مهندسی</span>
              </span>
              <span className="academic-badge-glass">
                <UserCheck size={12} className="text-emerald" />
                <span>مدرس: سرکار خانم مهندس آرزو صبری</span>
              </span>
            </div>

            <div className="hero-v3-title-wrap">
              <h1>کالبدشکافی اخلاق در زیست‌بوم نرم‌افزارهای موبایل</h1>
              <p>تحلیل تجربی ۵.۸ میلیون بازخورد کاربران در گوگل‌پلی، ۱۶ بُعد اخلاقی، و چارچوب توسعه مسئولانه نرم‌افزار</p>
            </div>

            <div className="hero-v3-metrics-grid">
              <div className="hero-v3-metric-box gold-border">
                <div className="metric-box-top">
                  <div className="metric-icon-badge bg-gold-light">
                    <Database size={16} className="text-gold" />
                  </div>
                  <span className="hero-v3-metric-val mono text-gold">5.8M+</span>
                </div>
                <div className="hero-v3-metric-lbl">نظرات کاوش‌شده در گوگل‌پلی</div>
                <div className="metric-subtag mono">10 Global Apps across 4 Domains</div>
              </div>

              <div className="hero-v3-metric-box emerald-border">
                <div className="metric-box-top">
                  <div className="metric-icon-badge bg-emerald-light">
                    <Scale size={16} className="text-emerald" />
                  </div>
                  <span className="hero-v3-metric-val mono text-emerald">16</span>
                </div>
                <div className="hero-v3-metric-lbl">بُعد اخلاقی در ۶ لایه سیستمی</div>
                <div className="metric-subtag">۹ مقوله نوین تجربی کشف‌شده</div>
              </div>

              <div className="hero-v3-metric-box sky-border">
                <div className="metric-box-top">
                  <div className="metric-icon-badge bg-sky-light">
                    <BrainCircuit size={16} className="text-sky" />
                  </div>
                  <span className="hero-v3-metric-val mono text-sky">F1 = 0.94</span>
                </div>
                <div className="hero-v3-metric-lbl">دقت مدل ترنسفورمر BERT</div>
                <div className="metric-subtag mono">Cohen's Kappa = 0.91</div>
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
                  title="مشاهده وب‌سایت شخصی و پورتفولیو"
                >
                  <Globe size={11} />
                  <span>mshajkarami.dev</span>
                  <ExternalLink size={10} />
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

    /* اسلاید ۳: شناسنامه پژوهش ESE 2024 و ۳ سؤال بنیادی */
    case 'slide-03':
      return (
        <div className="slide3-research-passport-grid">
          {/* ستون راست: پاسپورت آکادمیک مقاله مرجع */}
          <div className="research-passport-card">
            <div className="passport-header">
              <span className="passport-badge-gold">
                <Sparkles size={12} className="text-gold" />
                <span>Springer Nature Publication</span>
              </span>
              <span className="passport-rank-badge mono">ISI Q1 • IF: 3.8</span>
            </div>

            <h3 className="passport-paper-title">The best ends by the best means: ethical concerns in app reviews</h3>
            <div className="passport-paper-fa">«بهترین اهداف با بهترین ابزارها: دغدغه‌های اخلاقی در بازخورد اپلیکیشن‌ها»</div>

            <div className="passport-meta-grid">
              <div className="passport-meta-item">
                <span className="meta-lbl">ژورنال معتبر:</span>
                <span className="meta-val mono">Empirical Software Engineering (ESE)</span>
              </div>
              <div className="passport-meta-item">
                <span className="meta-lbl">سال و جلد:</span>
                <span className="meta-val mono">Volume 29, Issue 138 (2024)</span>
              </div>
              <div className="passport-meta-item">
                <span className="meta-lbl">پژوهشگران:</span>
                <span className="meta-val">Neelam Tjikhoeri, Lauren Olson, Emitzá Guzmán</span>
              </div>
              <div className="passport-meta-item">
                <span className="meta-lbl">دانشگاه مرجع:</span>
                <span className="meta-val">دانشکده علوم، دانشگاه وریج آمستردام (هلند)</span>
              </div>
            </div>

            <div className="passport-doi-box mono">
              <span className="doi-tag">DOI</span>
              <span className="doi-url">10.1007/s10664-024-10463-7</span>
              <ExternalLink size={12} className="text-gold" />
            </div>
          </div>

          {/* ستون چپ: ۳ سؤال بنیادی پژوهش (Research Questions) */}
          <div className="research-rq-container">
            <div className="rq-section-title">
              <Compass size={15} className="text-gold" />
              <span>۳ پرسش بنیادی پژوهش (Core Research Questions):</span>
            </div>

            <div className="rq-cards-list">
              {/* RQ1 */}
              <div className="rq-luxury-card rq-gold">
                <div className="rq-card-header">
                  <span className="rq-badge mono">RQ 1</span>
                  <span className="rq-type-tag">مقوله‌بندی و پویایی زمانی</span>
                </div>
                <div className="rq-question-text">
                  چه مقولاتی از دغدغه‌های اخلاقی در نظرات کاربران وجود دارند و این دغدغه‌ها چگونه با رخدادهای سیاسی و زمانی تغییر می‌کنند؟
                </div>
                <div className="rq-answer-footer">
                  <CheckCircle2 size={13} className="text-gold" />
                  <span>دستاورد: کشف ۱۶ بُعد اخلاقی (۹ مقوله کاملاً جدید و نوظهور)</span>
                </div>
              </div>

              {/* RQ2 */}
              <div className="rq-luxury-card rq-emerald">
                <div className="rq-card-header">
                  <span className="rq-badge mono">RQ 2</span>
                  <span className="rq-type-tag">رفتارشناسی و شاخص‌های آماری</span>
                </div>
                <div className="rq-question-text">
                  ریویوهای اخلاقی چه ویژگی‌های آماری متمایزی از حیث امتیاز ستاره، طول کلمات و میزان لایک نسبت به نظرات عادی دارند؟
                </div>
                <div className="rq-answer-footer">
                  <CheckCircle2 size={13} className="text-emerald" />
                  <span>دستاورد: سقوط رضایت به ۱.۸۹ ستاره و رکورد ۱۰۸.۵ لایک در دسترس‌پذیری</span>
                </div>
              </div>

              {/* RQ3 */}
              <div className="rq-luxury-card rq-sky">
                <div className="rq-card-header">
                  <span className="rq-badge mono">RQ 3</span>
                  <span className="rq-type-tag">خودکارسازی و یادگیری ماشین</span>
                </div>
                <div className="rq-question-text">
                  آیا مدل‌های یادگیری ماشین و ترنسفورمر BERT می‌توانند این دغدغه‌های اخلاقی را با دقت بالا در خطوط لوله نرم‌افزاری تشخیص دهند؟
                </div>
                <div className="rq-answer-footer">
                  <CheckCircle2 size={13} className="text-sky" />
                  <span>دستاورد: اثبات برتری مطلق BERT با شاخص F1 = 0.94 در پایش بلادرنگ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    /* اسلاید ۴: متدولوژی و پایپ‌لاین دیتاست */
    case 'slide-04':
      return (
        <div className="slide4-methodology-container">
          <div className="method-pipeline-header">
            <span className="academic-badge-gold">
              <Activity size={13} className="text-gold" />
              <span>پایپ‌لاین ۵ مرحله‌ای تضمین سخت‌گیری روش‌شناسی (Methodological Rigor)</span>
            </span>
            <span className="telemetry-stat-chip mono">Cohen's Kappa = 0.91 (توافق عالی)</span>
          </div>

          <div className="method-pipeline-grid">
            {/* گام ۱ */}
            <div className="pipeline-step-card step-gold">
              <div className="step-num mono">01</div>
              <div className="step-icon-wrap bg-gold-light">
                <Database size={20} className="text-gold" />
              </div>
              <div className="step-title">مخزن ۵.۸ میلیونی</div>
              <div className="step-stat mono">5,864,188 نظرات</div>
              <p className="step-desc">
                استخراج تمام بازخوردهای ۱۰ اپلیکیشن برتر گوگل‌پلی استور در ۴ حوزه تخصصی.
              </p>
              <div className="step-tag mono">10 Global Apps</div>
            </div>

            {/* گام ۲ */}
            <div className="pipeline-step-card step-amber">
              <div className="step-num mono">02</div>
              <div className="step-icon-wrap bg-gold-light">
                <Filter size={20} className="text-amber" />
              </div>
              <div className="step-title">فیلترینگ هدفمند</div>
              <div className="step-stat mono">109 واژه اخلاقی</div>
              <p className="step-desc">
                استخراج ۱۰۹ کلیدواژه اخلاقی دقیق از ادبیات علمی و تحلیل واژگانی برای غربال نظرات.
              </p>
              <div className="step-tag mono">Keyword Heuristics</div>
            </div>

            {/* گام ۳ */}
            <div className="pipeline-step-card step-emerald">
              <div className="step-num mono">03</div>
              <div className="step-icon-wrap bg-emerald-light">
                <Scale size={20} className="text-emerald" />
              </div>
              <div className="step-title">۹ دور ارزیابی تجربی</div>
              <div className="step-stat mono">Kappa = 0.91</div>
              <p className="step-desc">
                ۲ ارزیاب مستقل، ۹ دوره پیش‌آزمون برچسب‌گذاری دستی را انجام دادند تا ضریب توافق به ۰.۹۱ رسید.
              </p>
              <div className="step-tag mono">High Inter-Rater Rigor</div>
            </div>

            {/* گام ۴ */}
            <div className="pipeline-step-card step-sky">
              <div className="step-num mono">04</div>
              <div className="step-icon-wrap bg-sky-light">
                <CheckCircle2 size={20} className="text-sky" />
              </div>
              <div className="step-title">نمونه استاندارد طلایی</div>
              <div className="step-stat mono">3,101 نظر انسانی</div>
              <p className="step-desc">
                ایجاد دیتاست مرجع حاشیه‌نویسی‌شده با نظارت مستقیم محققان جهت آموزش هوش مصنوعی.
              </p>
              <div className="step-tag mono">Gold-Standard Dataset</div>
            </div>

            {/* گام ۵ */}
            <div className="pipeline-step-card step-crimson">
              <div className="step-num mono">05</div>
              <div className="step-icon-wrap bg-crimson-light">
                <BrainCircuit size={20} className="text-crimson" />
              </div>
              <div className="step-title">مدل‌سازی عمیق BERT</div>
              <div className="step-stat mono">F1-Score = 0.94</div>
              <p className="step-desc">
                آموزش مدل ترنسفورمر BERT و دستیابی به دقت ۹۴٪ جهت خودکارسازی پایش اخلاق.
              </p>
              <div className="step-tag mono">Transformer Deep AI</div>
            </div>
          </div>

          <div className="method-summary-footer">
            <span className="mono text-gold font-bold">خلاصه سخت‌گیری روش‌شناسی:</span>
            <span>استفاده از نمونه‌گیری تصادفی طبقه‌بندی‌شده و ضریب توافق ۰.۹۱ تضمین می‌کند که داده‌ها کاملاً سوگیریناپذیر و قابل اتکا هستند.</span>
          </div>
        </div>
      );

    /* اسلاید ۵: تکامل چارچوب اخلاقی */
    case 'slide-05':
      return (
        <div className="slide5-evolution-container">
          {/* کارت سمت راست: چارچوب کلاسیک رایت */}
          <div className="evolution-card classic-framework">
            <div className="evolution-card-head">
              <div className="framework-badge classic mono">ERA: 2011 (PRE-SMARTPHONE)</div>
              <h3>چارچوب کلاسیک رایت (Wright ICT)</h3>
              <p className="framework-subtitle">نگاه سنتی و انتزاعی به اخلاق فناوری اطلاعات پیش از بلوغ اپلیکیشن‌ها</p>
            </div>

            <div className="framework-pillars-box">
              <div className="pillar-label">ارکان تئوریک سنتی:</div>
              <div className="classic-pillars-list">
                <span>کرامت انسانی (Human Dignity)</span>
                <span>طراحی ارزش‌محور (VSD)</span>
                <span>عدالت توزیعی و حریم خصوصی اولیه</span>
              </div>
            </div>

            <div className="flaws-list">
              <div className="flaw-item">
                <span className="flaw-icon">❌</span>
                <div>
                  <strong>غفلت از مدل درآمدی «اقتصاد توجه»:</strong> رایت هرگز پیش‌بینی نمی‌کرد اپ‌ها بر پایه اعتیاد عصبی و دزدی زمان درآمدزایی کنند.
                </div>
              </div>
              <div className="flaw-item">
                <span className="flaw-icon">❌</span>
                <div>
                  <strong>عدم پوشش الگوهای تاریک شناختی (Dark Patterns):</strong> نبود هرگونه مفهوم برای لوپ‌های بی‌پایان، پخش خودکار و تله‌های اشتراک.
                </div>
              </div>
              <div className="flaw-item">
                <span className="flaw-icon">❌</span>
                <div>
                  <strong>شکاف عمیق با زبان عامیانه کاربران:</strong> مفاهیم فلسفی انتزاعی که نظرات صریح کاربران مثل «کلاهبرداری» یا «سانسور» را پوشش نمی‌داد.
                </div>
              </div>
            </div>
          </div>

          {/* مرکز: نشانگر جهش پارادایم */}
          <div className="evolution-arrow-divider">
            <div className="arrow-circle">
              <Zap size={18} className="text-gold" />
            </div>
            <span className="arrow-text">جهش پارادایم زیست‌بوم موبایل</span>
          </div>

          {/* کارت سمت چپ: چارچوب نوین تجربی ESE 2024 */}
          <div className="evolution-card modern-framework">
            <div className="evolution-card-head">
              <div className="framework-badge modern mono">ESE 2024 (SPRINGER NATURE)</div>
              <h3 className="text-emerald">چارچوب تجربی نوین ESE 2024</h3>
              <p className="framework-subtitle">کشف ۹ دغدغه حاد جدید بر پایه زبان میدانی ۵.۸ میلیون کاربر واقعی</p>
            </div>

            <div className="modern-new-categories-grid">
              <div className="new-cat-chip">
                <Flame size={14} className="text-amber" />
                <div>
                  <strong>طراحی اعتیادآور</strong>
                  <span className="mono">Addiction</span>
                </div>
              </div>
              <div className="new-cat-chip">
                <Lock size={14} className="text-crimson" />
                <div>
                  <strong>سانسور و سرکوب</strong>
                  <span className="mono">Censorship</span>
                </div>
              </div>
              <div className="new-cat-chip">
                <AlertTriangle size={14} className="text-gold" />
                <div>
                  <strong>سرقت هویت</strong>
                  <span className="mono">Catfishing</span>
                </div>
              </div>
              <div className="new-cat-chip">
                <FileText size={14} className="text-sky" />
                <div>
                  <strong>اخبار جعلی</strong>
                  <span className="mono">Misinformation</span>
                </div>
              </div>
              <div className="new-cat-chip">
                <Scale size={14} className="text-emerald" />
                <div>
                  <strong>کلاهبرداری مالی</strong>
                  <span className="mono">Scam & Fraud</span>
                </div>
              </div>
              <div className="new-cat-chip">
                <ShieldAlert size={14} className="text-crimson" />
                <div>
                  <strong>آزار سایبری</strong>
                  <span className="mono">Cyberbullying</span>
                </div>
              </div>
              <div className="new-cat-chip">
                <Zap size={14} className="text-amber" />
                <div>
                  <strong>تبلیغات آسیب‌رسان</strong>
                  <span className="mono">Harmful Ads</span>
                </div>
              </div>
              <div className="new-cat-chip">
                <Sparkles size={14} className="text-rose" />
                <div>
                  <strong>محتوای نامناسب</strong>
                  <span className="mono">Vulgarity</span>
                </div>
              </div>
              <div className="new-cat-chip">
                <Copy size={14} className="text-indigo" />
                <div>
                  <strong>سرقت محتوای معنوی</strong>
                  <span className="mono">Content Theft</span>
                </div>
              </div>
            </div>

            <div className="modern-summary-callout">
              <CheckCircle2 size={15} className="text-emerald" />
              <span>پوشش کامل ۱۶ بُعد اخلاقی در ۶ لایه سیستمی نرم‌افزار برای نخستین بار در دنیا</span>
            </div>
          </div>
        </div>
      );

    /* اسلاید ۶: کاوشگر پیشرفته تاکسونومی ۱۶ بعدی اخلاق (Empirical Taxonomy Explorer) */
    case 'slide-06':
      return <TaxonomyExplorer />;

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
