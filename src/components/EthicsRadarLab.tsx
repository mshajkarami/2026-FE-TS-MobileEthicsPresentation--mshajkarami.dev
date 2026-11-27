import { useState } from 'react';
import { APP_PROFILES } from '../data/ethicsData';
import { ShieldAlert, ThumbsUp, Star, Filter, Smartphone, AlertOctagon, CheckCircle2 } from 'lucide-react';

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
    <div className="ethics-radar-container">
      {/* هدر آزمایشگاه تعاملی */}
      <div className="radar-header">
        <div className="radar-title-group">
          <div className="badge-pill bg-rose">
            <AlertOctagon size={14} />
            <span>آزمایشگاه زنده تحلیل تجربی (Google Play Store)</span>
          </div>
          <h3>رادار ۵.۸ میلیون نظر و مقایسه چندپلتفرمی</h3>
        </div>
        <div className="filter-controls">
          <span className="filter-label">
            <Filter size={14} />
            <span>فیلتر دامنه وقوع:</span>
          </span>
          <button
            className={`filter-btn ${filterType === 'all' ? 'active' : ''}`}
            onClick={() => setFilterType('all')}
          >
            همه موارد
          </button>
          <button
            className={`filter-btn ${filterType === 'internal' ? 'active' : ''}`}
            onClick={() => setFilterType('internal')}
          >
            درون اپلیکیشن (۹۲٪)
          </button>
          <button
            className={`filter-btn ${filterType === 'external' ? 'active' : ''}`}
            onClick={() => setFilterType('external')}
          >
            سرایت به دنیای فیزیکی (۸٪)
          </button>
        </div>
      </div>

      <div className="radar-body-grid">
        {/* ستون راست: انتخاب پلتفرم‌ها و آمار کلیدی */}
        <div className="platform-selector-card">
          <div className="card-subhead">انتخاب اپلیکیشن مورد مطالعه:</div>
          <div className="app-pills-list">
            {APP_PROFILES.map((app) => (
              <button
                key={app.id}
                className={`app-select-pill ${app.id === selectedAppId ? 'active' : ''}`}
                onClick={() => setSelectedAppId(app.id)}
              >
                <div className="app-dot" style={{ backgroundColor: app.color }} />
                <div className="app-pill-info">
                  <span className="app-pill-name">{app.faName}</span>
                  <span className="app-pill-domain">{app.domain}</span>
                </div>
                <div className="app-pill-rate">
                  <span className="rate-value mono">{app.ethicalReviewRate}%</span>
                  <span className="rate-label">شکایت اخلاقی</span>
                </div>
              </button>
            ))}
          </div>

          <div className="radar-stats-box">
            <div className="stat-row">
              <span className="stat-label">حجم نمونه تحلیل‌شده:</span>
              <span className="stat-value mono">{selectedApp.sampleSize} نظر برچسب‌خورده</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">ضریب انطباق مدل BERT:</span>
              <span className="stat-value text-emerald mono">F1 = 0.94 (۹۴٪)</span>
            </div>
          </div>
        </div>

        {/* ستون چپ: جزئیات پلتفرم انتخاب شده و نمونه‌های واقعی */}
        <div className="platform-details-card">
          <div className="detail-card-head" style={{ borderRightColor: selectedApp.color }}>
            <div className="detail-title-row">
              <h4>کالبدشکافی بحران‌های اخلاقی در {selectedApp.faName}</h4>
              <span className="domain-badge mono">{selectedApp.name}</span>
            </div>
            <p className="detail-desc">
              درصد نظرات دارای دغدغه اخلاقی در این اپلیکیشن برابر با{' '}
              <strong className="text-rose mono">{selectedApp.ethicalReviewRate}%</strong> بوده است.
            </p>
          </div>

          {/* نوار سهم ۳ دغدغه اصلی */}
          <div className="top-concerns-section">
            <div className="concerns-title">۳ چالش اخلاقی با بیشترین فراوانی:</div>
            <div className="concerns-bars">
              {selectedApp.topConcerns.map((tc, idx) => (
                <div key={idx} className="concern-bar-row">
                  <div className="concern-label-row">
                    <span className="concern-name">{tc.concernFa}</span>
                    <span className="concern-pct mono">{tc.percentage}%</span>
                  </div>
                  <div className="progress-track">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${Math.min(100, tc.percentage * 1.8)}%`,
                        backgroundColor: idx === 0 ? '#ef4444' : idx === 1 ? '#f97316' : '#eab308',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* فهرست نظرات واقعی کاربران */}
          <div className="reviews-stream-section">
            <div className="stream-head">
              <Smartphone size={15} />
              <span>بازتاب واقعی صدای کاربران در گوگل پلی استور:</span>
            </div>
            <div className="reviews-list">
              {filteredReviews.length === 0 ? (
                <div className="empty-reviews">هیچ نظری با این فیلتر در نمونه منتخب ثبت نشده است.</div>
              ) : (
                filteredReviews.map((rev, i) => (
                  <div key={i} className={`review-bubble ${rev.isExternal ? 'external-bubble' : ''}`}>
                    <div className="review-top-meta">
                      <span className="review-concern-tag">
                        <ShieldAlert size={12} />
                        <span>{rev.concernFa}</span>
                      </span>
                      <div className="meta-badges">
                        <span className={`origin-badge ${rev.isExternal ? 'badge-ext' : 'badge-int'}`}>
                          {rev.isExternal ? 'سرایت بیرونی (External)' : 'درون برنامه (Internal)'}
                        </span>
                        <span className="stars-badge">
                          <Star size={11} fill="#eab308" color="#eab308" />
                          <span className="mono">{rev.rating}</span>
                        </span>
                        <span className="upvotes-badge">
                          <ThumbsUp size={11} />
                          <span className="mono">{rev.upvotes}</span>
                        </span>
                      </div>
                    </div>
                    <p className="review-quote-text">«{rev.text}»</p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* فکت علمی زیرین */}
          <div className="paper-highlight-box">
            <CheckCircle2 size={16} className="text-emerald" />
            <p>
              <strong>یافته مقاله تجربی:</strong> کاربران وقتی با نقض اخلاق مواجه می‌شوند، به‌طور میانگین{' '}
              <span className="text-amber mono">۳۹ کلمه</span> (در مقایسه با ۲۷ کلمه عادی) می‌نویسند و امتیاز ستاره آن‌ها به میانگین{' '}
              <span className="text-rose mono">۱.۸۹ ستاره</span> سقوط می‌کند.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
