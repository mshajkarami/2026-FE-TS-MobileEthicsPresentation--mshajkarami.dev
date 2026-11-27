import { useState } from 'react';
import { APP_PROFILES } from '../data/ethicsData';
import {
  ShieldAlert,
  ThumbsUp,
  Star,
  Filter,
  Smartphone,
  CheckCircle2,
  AlertTriangle,
  Activity,
  Layers,
  Sparkles,
  ChevronLeft,
} from 'lucide-react';

export function EthicsRadarLab() {
  const [selectedAppId, setSelectedAppId] = useState<string>('tiktok');
  const [filterType, setFilterType] = useState<'all' | 'internal' | 'external'>('all');

  const selectedApp = APP_PROFILES.find((a) => a.id === selectedAppId) || APP_PROFILES[0];

  const filteredReviews = selectedApp.sampleReviews.filter((r) => {
    if (filterType === 'internal') return !r.isExternal;
    if (filterType === 'external') return r.isExternal;
    return true;
  });

  return (
    <div className="radar-lab-container">
      {/* هدر کنترل و فیلترهای آزمایشگاه */}
      <div className="radar-lab-top-bar">
        <div className="radar-lab-title-group">
          <span className="academic-badge-gold">
            <Activity size={13} className="text-gold" />
            <span>آزمایشگاه زنده ۵.۸ میلیون نظر (Google Play Telemetry)</span>
          </span>
          <span className="telemetry-stat-chip mono">BERT F1=0.94</span>
          <span className="telemetry-stat-chip mono">۱۰ پلتفرم مرجع</span>
        </div>

        {/* فیلتر دامنه وقوع */}
        <div className="radar-filter-group">
          <span className="radar-filter-label">
            <Filter size={12} className="text-gold" />
            <span>دامنه تخلف:</span>
          </span>
          <button
            className={`radar-filter-pill ${filterType === 'all' ? 'active' : ''}`}
            onClick={() => setFilterType('all')}
          >
            همه نظرات
          </button>
          <button
            className={`radar-filter-pill ${filterType === 'internal' ? 'active' : ''}`}
            onClick={() => setFilterType('internal')}
          >
            <CheckCircle2 size={11} className="text-emerald" />
            <span>درون‌برنامه‌ای (۹۲٪)</span>
          </button>
          <button
            className={`radar-filter-pill ${filterType === 'external' ? 'active' : ''}`}
            onClick={() => setFilterType('external')}
          >
            <AlertTriangle size={11} className="text-crimson" />
            <span>سرایت به دنیای فیزیکی (۸٪)</span>
          </button>
        </div>
      </div>

      {/* فضای کاری دو ستونه شبیه‌ساز */}
      <div className="radar-lab-workspace">
        {/* ستون راست: انتخابگر پلتفرم‌ها (Target Platform Selector) */}
        <div className="radar-platforms-sidebar">
          <div className="sidebar-header">
            <Layers size={13} className="text-gold" />
            <span>انتخاب پلتفرم جهت تحلیل:</span>
          </div>

          <div className="platform-cards-list">
            {APP_PROFILES.map((app) => {
              const isSelected = app.id === selectedAppId;
              return (
                <button
                  key={app.id}
                  className={`platform-select-card ${isSelected ? 'active' : ''}`}
                  onClick={() => setSelectedAppId(app.id)}
                  style={{ '--app-color': app.color } as React.CSSProperties}
                >
                  <div className="platform-card-header">
                    <div
                      className="platform-dot"
                      style={{
                        backgroundColor: app.color,
                        boxShadow: `0 0 10px ${app.color}80`,
                      }}
                    />
                    <div className="platform-name-wrap">
                      <div className="platform-fa-name">{app.faName}</div>
                      <div className="platform-en-name mono">{app.name}</div>
                    </div>
                    <div
                      className="platform-rate-pill mono"
                      style={{
                        color: app.ethicalReviewRate > 70 ? 'var(--accent-crimson)' : 'var(--accent-gold)',
                      }}
                    >
                      {app.ethicalReviewRate}%
                    </div>
                  </div>

                  <div className="platform-card-footer">
                    <span className="platform-domain-tag">{app.domain}</span>
                    {isSelected && <ChevronLeft size={13} className="text-gold" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* تلمتری نمونه آزمایشگاهی */}
          <div className="sidebar-telemetry-box">
            <div className="telemetry-item">
              <span className="t-label">نمونه برچسب‌خورده پلتفرم:</span>
              <span className="t-val mono text-gold">{selectedApp.sampleSize} نظر</span>
            </div>
            <div className="telemetry-item">
              <span className="t-label">ضریب انطباق مدل عمیق:</span>
              <span className="t-val mono text-emerald">BERT F1=0.94 (۹۴٪)</span>
            </div>
          </div>
        </div>

        {/* ستون چپ: تحلیل کالبدشکافی و استریم نظرات زنده کاربران */}
        <div className="radar-details-main">
          {/* هدر پلتفرم منتخب */}
          <div className="platform-hero-banner" style={{ borderRightColor: selectedApp.color }}>
            <div className="banner-left-info">
              <div className="banner-title-row">
                <div
                  className="banner-app-badge"
                  style={{
                    backgroundColor: `${selectedApp.color}25`,
                    color: selectedApp.color,
                    border: `1px solid ${selectedApp.color}60`,
                  }}
                >
                  <Smartphone size={16} />
                </div>
                <div>
                  <h3>کالبدشکافی بحران‌های اخلاقی در {selectedApp.faName}</h3>
                  <div className="banner-sub-domain mono">{selectedApp.name} • {selectedApp.domain}</div>
                </div>
              </div>
            </div>

            <div className="banner-rate-badge">
              <div className="rate-num mono" style={{ color: selectedApp.ethicalReviewRate > 70 ? '#f43f5e' : '#f59e0b' }}>
                {selectedApp.ethicalReviewRate}%
              </div>
              <div className="rate-caption">سهم نظرات دارای دغدغه اخلاقی</div>
            </div>
          </div>

          {/* ۳ چالش اخلاقی با بیشترین فراوانی */}
          <div className="top-concerns-box">
            <div className="concerns-box-head">
              <Sparkles size={12} className="text-gold" />
              <span>۳ چالش اخلاقی پرتکرار در این پلتفرم:</span>
            </div>
            <div className="concerns-bars-grid">
              {selectedApp.topConcerns.map((tc, idx) => (
                <div key={idx} className="concern-bar-card">
                  <div className="bar-labels">
                    <span className="concern-title">{tc.concernFa}</span>
                    <span className="concern-percent mono">
                      {tc.percentage}%
                    </span>
                  </div>
                  <div className="progress-bar-track">
                    <div
                      className="progress-bar-fill"
                      style={{
                        width: `${Math.min(100, tc.percentage * 2)}%`,
                        backgroundColor:
                          idx === 0 ? 'var(--accent-crimson)' : idx === 1 ? 'var(--accent-amber)' : 'var(--accent-emerald)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* بازتاب صدای واقعی کاربران (استریم نظرات) */}
          <div className="reviews-stream-wrap">
            <div className="stream-header-row">
              <div className="stream-title">
                <Smartphone size={13} className="text-gold" />
                <span>بازتاب واقعی صدای کاربران در گوگل‌پلی ({filteredReviews.length} نظر نمونه):</span>
              </div>
            </div>

            <div className="reviews-scroll-list">
              {filteredReviews.length === 0 ? (
                <div className="empty-reviews-card">
                  هیچ نظری با فیلتر انتخابی در نمونه ثبت نشده است.
                </div>
              ) : (
                filteredReviews.map((rev, i) => (
                  <div
                    key={i}
                    className={`review-card-v2 ${rev.isExternal ? 'external' : 'internal'}`}
                  >
                    <div className="review-meta-row">
                      <span className="review-concern-tag">
                        <ShieldAlert size={11} />
                        <span>{rev.concernFa}</span>
                      </span>

                      <div className="review-meta-pills">
                        <span className={`realm-badge ${rev.isExternal ? 'badge-ext' : 'badge-int'}`}>
                          {rev.isExternal ? 'خطر سرایت فیزیکی (External)' : 'درون برنامه (Internal)'}
                        </span>

                        <span className="stars-pill mono">
                          <Star size={10} fill="#f59e0b" color="#f59e0b" />
                          <span>{rev.rating}★</span>
                        </span>

                        <span className="upvotes-pill mono">
                          <ThumbsUp size={10} />
                          <span>{rev.upvotes} لایک</span>
                        </span>
                      </div>
                    </div>

                    <p className="review-content-quote">«{rev.text}»</p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* پاورقی علمی یافته تجربی */}
          <div className="radar-empirical-footer">
            <CheckCircle2 size={14} className="text-emerald" style={{ flexShrink: 0 }} />
            <p>
              <strong>یافته مقاله تجربی ESE 2024:</strong> کاربران هنگام مواجهه با نقض اخلاقی، به‌طور میانگین{' '}
              <span className="mono text-gold font-bold">۳۹ کلمه</span> (در مقایسه با ۲۷ کلمه عادی) می‌نویسند و امتیاز ستاره آن‌ها به میانگین{' '}
              <span className="mono text-crimson font-bold">۱.۸۹ ستاره</span> سقوط می‌کند.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
