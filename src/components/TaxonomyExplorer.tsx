import { useState, useMemo } from 'react';
import { ETHICAL_CATEGORIES } from '../data/ethicsData';
import {
  EyeOff,
  UserX,
  ShieldAlert,
  Flame,
  Lock,
  Scale,
  DollarSign,
  AlertTriangle,
  FileWarning,
  Copy,
  HelpCircle,
  Megaphone,
  MessageSquareWarning,
  Compass,
  Accessibility,
  Leaf,
  Star,
  MessageSquare,
  ThumbsUp,
  Sparkles,
  Filter,
  ArrowUpDown,
  Quote,
  CheckCircle2,
} from 'lucide-react';

const ICONS: Record<string, React.ElementType> = {
  EyeOff,
  UserX,
  ShieldAlert,
  Flame,
  Lock,
  Scale,
  DollarSign,
  AlertTriangle,
  FileWarning,
  Copy,
  HelpCircle,
  Megaphone,
  MessageSquareWarning,
  Compass,
  Accessibility,
  Leaf,
};

const NEW_2024_IDS = new Set([
  'censorship',
  'identity-theft',
  'addiction',
  'misinformation',
  'scam',
  'inappropriate-content',
  'content-theft',
  'harmful-advertising',
  'cyberbullying',
]);

type FilterType = 'all' | 'new-2024' | 'external' | 'internal';
type SortType = 'percentage' | 'rating-asc' | 'words-desc' | 'upvotes-desc';

export function TaxonomyExplorer() {
  const [selectedId, setSelectedId] = useState<string>('censorship');
  const [filter, setFilter] = useState<FilterType>('all');
  const [sort, setSort] = useState<SortType>('percentage');

  const selectedCategory = useMemo(() => {
    return ETHICAL_CATEGORIES.find((c) => c.id === selectedId) || ETHICAL_CATEGORIES[0];
  }, [selectedId]);

  const filteredAndSorted = useMemo(() => {
    let result = [...ETHICAL_CATEGORIES];

    // اعمال فیلتر
    if (filter === 'new-2024') {
      result = result.filter((c) => NEW_2024_IDS.has(c.id));
    } else if (filter === 'external') {
      result = result.filter((c) => c.isExternalCapable);
    } else if (filter === 'internal') {
      result = result.filter((c) => !c.isExternalCapable);
    }

    // اعمال مرتب‌سازی
    result.sort((a, b) => {
      if (sort === 'percentage') return b.percentage - a.percentage;
      if (sort === 'rating-asc') return a.avgRating - b.avgRating; // بدترین رضایت اول
      if (sort === 'words-desc') return b.avgWords - a.avgWords;
      if (sort === 'upvotes-desc') return b.avgUpvotes - a.avgUpvotes;
      return 0;
    });

    return result;
  }, [filter, sort]);

  const SelectedIcon = ICONS[selectedCategory.iconName] || Scale;

  return (
    <div className="tax-explorer-container">
      {/* نوار کنترل، فیلترها و خلاصه آماری بالا */}
      <div className="tax-explorer-top-bar">
        {/* فیلترها */}
        <div className="tax-filter-pills">
          <span className="tax-control-label">
            <Filter size={13} className="text-gold" />
            <span>فیلتر:</span>
          </span>
          <button
            className={`tax-filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            همه ۱۶ بُعد ({ETHICAL_CATEGORIES.length})
          </button>
          <button
            className={`tax-filter-btn ${filter === 'new-2024' ? 'active' : ''}`}
            onClick={() => setFilter('new-2024')}
          >
            <Sparkles size={11} className="text-amber" />
            <span>۹ مقوله نوین ESE 2024</span>
          </button>
          <button
            className={`tax-filter-btn ${filter === 'external' ? 'active' : ''}`}
            onClick={() => setFilter('external')}
          >
            <ShieldAlert size={11} className="text-crimson" />
            <span>سرایت به دنیای فیزیکی (۸٪)</span>
          </button>
          <button
            className={`tax-filter-btn ${filter === 'internal' ? 'active' : ''}`}
            onClick={() => setFilter('internal')}
          >
            <span>دغدغه‌های درونی (۹۲٪)</span>
          </button>
        </div>

        {/* مرتب‌سازی */}
        <div className="tax-sort-wrap">
          <span className="tax-control-label">
            <ArrowUpDown size={13} className="text-gold" />
            <span>ترتیب:</span>
          </span>
          <select
            className="tax-sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortType)}
          >
            <option value="percentage">بیشترین فراوانی (%)</option>
            <option value="rating-asc">کمترین رضایت (سقوط ستاره ★)</option>
            <option value="upvotes-desc">بیشترین لایک و همبستگی (Upvotes)</option>
            <option value="words-desc">طولانی‌ترین شرح نقد (Words)</option>
          </select>
        </div>
      </div>

      {/* بنر هایلایت‌های شگفت‌انگیز آماری پژوهش */}
      <div className="tax-highlights-banner">
        <div className="tax-highlight-chip">
          <span className="chip-badge bg-crimson-light text-crimson mono">#1 FREQUENCY</span>
          <span><strong>سانسور و سرکوب:</strong> سهم ۹.۹٪ با کمترین امتیاز رضایت در کل استور (۱.۱۸ ستاره)</span>
        </div>
        <div className="tax-highlight-chip gold-glow">
          <span className="chip-badge bg-gold-light text-gold mono">★ RECORD 108.5 LIKES</span>
          <span><strong>دسترس‌پذیری:</strong> با وجود سهم ۱.۵٪، رکورد لایک و همبستگی جمعی را شکست!</span>
        </div>
        <div className="tax-highlight-chip">
          <span className="chip-badge bg-emerald-light text-emerald mono">PARADOX 4.04★</span>
          <span><strong>اعتیاد:</strong> پارادوکس اخلاقی؛ کاربران علی‌رغم اعتیاد و اتلاف وقت، ۴ ستاره می‌دهند!</span>
        </div>
      </div>

      {/* ناحیه تقسیم دوتایی: گرید در چپ + بازرس جزئیات در راست */}
      <div className="tax-workspace-split">
        {/* ستون چپ: گرید تعاملی کارت‌ها */}
        <div className="tax-cards-grid-scroll">
          <div className="tax-cards-grid">
            {filteredAndSorted.map((cat, idx) => {
              const IconComp = ICONS[cat.iconName] || Scale;
              const isSelected = cat.id === selectedCategory.id;
              const isNew = NEW_2024_IDS.has(cat.id);

              return (
                <div
                  key={cat.id}
                  className={`tax-card-v2 ${isSelected ? 'selected' : ''}`}
                  onClick={() => setSelectedId(cat.id)}
                  style={{ '--cat-color': cat.color } as React.CSSProperties}
                >
                  <div className="tax-card-v2-header">
                    <div className="tax-card-icon-wrap" style={{ backgroundColor: `${cat.color}18`, color: cat.color }}>
                      <IconComp size={16} />
                    </div>
                    <div className="tax-card-title-block">
                      <div className="tax-card-name-fa">{cat.nameFa}</div>
                      <div className="tax-card-name-en mono">{cat.nameEn}</div>
                    </div>
                    <div className="tax-card-pct-badge mono" style={{ color: cat.color }}>
                      {cat.percentage}%
                    </div>
                  </div>

                  {/* نوار گرافیکی پیشرفت درصد */}
                  <div className="tax-card-progress-bar">
                    <div
                      className="tax-card-progress-fill"
                      style={{
                        width: `${Math.min(cat.percentage * 10, 100)}%`,
                        backgroundColor: cat.color,
                      }}
                    />
                  </div>

                  {/* ۳ متریک عددی کلیدی */}
                  <div className="tax-card-metrics-row">
                    <div className={`metric-pill ${cat.avgRating < 2 ? 'crit-rating' : ''}`} title="میانگین امتیاز ستاره">
                      <Star size={11} className={cat.avgRating < 2 ? 'text-crimson' : 'text-gold'} fill={cat.avgRating < 2 ? '#f43f5e' : '#f59e0b'} />
                      <span className="mono">{cat.avgRating.toFixed(2)}</span>
                    </div>

                    <div className="metric-pill" title="میانگین تعداد کلمات متن نظر">
                      <MessageSquare size={11} className="text-secondary" />
                      <span className="mono">{cat.avgWords.toFixed(0)}w</span>
                    </div>

                    <div className={`metric-pill ${cat.avgUpvotes > 20 ? 'highlight-upvotes' : ''}`} title="میانگین لایک و همبستگی سایر کاربران">
                      <ThumbsUp size={11} className={cat.avgUpvotes > 20 ? 'text-gold' : 'text-secondary'} />
                      <span className="mono">{cat.avgUpvotes.toFixed(1)}</span>
                    </div>
                  </div>

                  {/* برچسب‌های متادیتا */}
                  <div className="tax-card-tags-row">
                    {cat.isExternalCapable && (
                      <span className="tax-mini-tag external">خطر فیزیکی</span>
                    )}
                    {isNew && (
                      <span className="tax-mini-tag new-tag">مقوله نوین</span>
                    )}
                    <span className="tax-mini-tag rank mono">#{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ستون راست: بازرس عمیق و سند زنده نظر کاربر */}
        <div className="tax-inspector-panel">
          <div className="inspector-card">
            {/* هدر بازرس */}
            <div className="inspector-header">
              <div
                className="inspector-large-icon"
                style={{
                  backgroundColor: `${selectedCategory.color}20`,
                  color: selectedCategory.color,
                  border: `1px solid ${selectedCategory.color}50`,
                }}
              >
                <SelectedIcon size={26} />
              </div>
              <div className="inspector-title-area">
                <div className="inspector-rank-badge mono" style={{ color: selectedCategory.color }}>
                  بُعد اخلاقی رتبه #{ETHICAL_CATEGORIES.findIndex((c) => c.id === selectedCategory.id) + 1}
                </div>
                <h3>{selectedCategory.nameFa}</h3>
                <div className="inspector-subtitle mono">{selectedCategory.nameEn}</div>
              </div>
            </div>

            {/* سهم فراوانی در نمونه */}
            <div className="inspector-share-box" style={{ borderColor: `${selectedCategory.color}40` }}>
              <div className="share-box-left">
                <span className="share-label">سهم دغدغه در نمونه ۳,۱۰۱ نظر:</span>
                <span className="share-percent mono" style={{ color: selectedCategory.color }}>
                  {selectedCategory.percentage}%
                </span>
              </div>
              <div className="share-realm-tag">
                {selectedCategory.isExternalCapable ? (
                  <span className="badge-pill bg-crimson-light text-crimson">
                    <ShieldAlert size={12} />
                    <span>قابلیت سرایت به دنیای فیزیکی (External)</span>
                  </span>
                ) : (
                  <span className="badge-pill bg-emerald-light text-emerald">
                    <CheckCircle2 size={12} />
                    <span>دغدغه درون‌برنامه‌ای (Internal)</span>
                  </span>
                )}
              </div>
            </div>

            {/* شرح دقیق علمی بر اساس مقاله */}
            <p className="inspector-desc">{selectedCategory.descriptionFa}</p>

            {/* سنجش ۳ متریک تجربی در مقایسه با استاندارد فروشگاه */}
            <div className="inspector-metrics-compare">
              <div className="compare-bar-item">
                <div className="compare-bar-top">
                  <span>
                    <Star size={13} className="text-gold" /> رضایت ستاره (Rating)
                  </span>
                  <span className="mono">
                    <strong>{selectedCategory.avgRating.toFixed(2)}★</strong>
                    <small> (میانگین عادی: ۲.۶۱★)</small>
                  </span>
                </div>
                <div className="compare-progress-track">
                  <div
                    className="compare-progress-fill"
                    style={{
                      width: `${(selectedCategory.avgRating / 5) * 100}%`,
                      backgroundColor: selectedCategory.avgRating < 2 ? '#f43f5e' : '#f59e0b',
                    }}
                  />
                  <div className="benchmark-marker" style={{ left: '52.2%' }} title="میانگین نظرات عادی: 2.61" />
                </div>
              </div>

              <div className="compare-bar-item">
                <div className="compare-bar-top">
                  <span>
                    <MessageSquare size={13} className="text-sky" /> طول نظر (Word Count)
                  </span>
                  <span className="mono">
                    <strong>{selectedCategory.avgWords.toFixed(0)} کلمه</strong>
                    <small> (میانگین عادی: ۲۷)</small>
                  </span>
                </div>
                <div className="compare-progress-track">
                  <div
                    className="compare-progress-fill"
                    style={{
                      width: `${Math.min((selectedCategory.avgWords / 70) * 100, 100)}%`,
                      backgroundColor: '#38bdf8',
                    }}
                  />
                  <div className="benchmark-marker" style={{ left: '38.5%' }} title="میانگین نظرات عادی: 27 کلمه" />
                </div>
              </div>

              <div className="compare-bar-item">
                <div className="compare-bar-top">
                  <span>
                    <ThumbsUp size={13} className="text-emerald" /> لایک و همبستگی جمعی (Upvotes)
                  </span>
                  <span className="mono">
                    <strong style={{ color: selectedCategory.avgUpvotes > 20 ? 'var(--accent-gold)' : undefined }}>
                      {selectedCategory.avgUpvotes.toFixed(1)} لایک
                    </strong>
                    <small> (میانگین عادی: ۳.۱)</small>
                  </span>
                </div>
                <div className="compare-progress-track">
                  <div
                    className="compare-progress-fill"
                    style={{
                      width: `${Math.min((selectedCategory.avgUpvotes / 110) * 100, 100)}%`,
                      backgroundColor: selectedCategory.avgUpvotes > 20 ? '#f59e0b' : '#10b981',
                    }}
                  />
                  <div className="benchmark-marker" style={{ left: '2.8%' }} title="میانگین نظرات عادی: 3.1 لایک" />
                </div>
              </div>
            </div>

            {/* نقل‌قول واقعی کاربر از گوگل پلی استور */}
            <div className="inspector-quote-box">
              <div className="quote-box-header">
                <div className="quote-header-title">
                  <Quote size={13} className="text-gold" />
                  <span>سند تجربی: متن واقعی نظر کاربر در گوگل پلی</span>
                </div>
                <span className="quote-platform-tag mono">{selectedCategory.quotePlatform}</span>
              </div>
              <p className="quote-body-text mono">"{selectedCategory.realQuote}"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
