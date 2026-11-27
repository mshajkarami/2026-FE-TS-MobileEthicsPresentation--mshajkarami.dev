import { useState } from 'react';
import { DARK_PATTERN_SIMULATIONS } from '../data/ethicsData';
import {
  Smartphone,
  ShieldCheck,
  AlertTriangle,
  Code2,
  Wrench,
  UserCheck,
  Check,
  Volume2,
  Bell,
  Clock,
  Sparkles,
} from 'lucide-react';

export function MobileDarkPatternSimulator() {
  const [selectedPatternId, setSelectedPatternId] = useState<string>('over-permission');
  const [isEthicalMode, setIsEthicalMode] = useState<boolean>(false);

  const pattern = DARK_PATTERN_SIMULATIONS.find((p) => p.id === selectedPatternId) || DARK_PATTERN_SIMULATIONS[0];

  return (
    <div className="dark-pattern-sim-container">
      {/* هدر بالایی شبیه‌ساز */}
      <div className="sim-header-bar">
        <div className="sim-header-title">
          <div className="badge-pill bg-indigo">
            <Smartphone size={14} />
            <span>شبیه‌ساز زنده تعاملی مهندسی نرم‌افزار موبایل</span>
          </div>
          <h3>کالبدشکافی الگوهای تاریک و راه‌حل‌های اخلاق‌مدار در اندروید</h3>
        </div>

        {/* سوییچ حالت: دارک‌پترن vs اصلاح مهندسی */}
        <div className="mode-toggle-group">
          <button
            className={`mode-toggle-btn bad-btn ${!isEthicalMode ? 'active' : ''}`}
            onClick={() => setIsEthicalMode(false)}
          >
            <AlertTriangle size={15} />
            <span>حالت غیراخلاقی (Dark Pattern)</span>
          </button>
          <button
            className={`mode-toggle-btn good-btn ${isEthicalMode ? 'active' : ''}`}
            onClick={() => setIsEthicalMode(true)}
          >
            <ShieldCheck size={15} />
            <span>اصلاح اخلاقی (Ethical Fix)</span>
          </button>
        </div>
      </div>

      <div className="sim-grid-layout">
        {/* ستون ۱: تب‌های انتخاب سناریو */}
        <div className="sim-sidebar-card">
          <div className="sidebar-title">سناریوهای کالبدشکافی:</div>
          <div className="scenario-buttons">
            {DARK_PATTERN_SIMULATIONS.map((sim) => (
              <button
                key={sim.id}
                className={`scenario-btn ${sim.id === selectedPatternId ? 'active' : ''}`}
                onClick={() => setSelectedPatternId(sim.id)}
              >
                <div className="scenario-top">
                  <span className="scenario-cat">{sim.category}</span>
                  <span className={`severity-tag ${sim.severity}`}>{sim.severity.toUpperCase()}</span>
                </div>
                <div className="scenario-name">{sim.titleFa}</div>
                <div className="scenario-eng mono">{sim.titleEn}</div>
              </button>
            ))}
          </div>

          {/* گیج ارزیابی اثر روی کاربر */}
          <div className="impact-gauge-box">
            <div className="gauge-title">شاخص سلامت اخلاقی محصول:</div>
            <div className="gauge-meter">
              <div
                className={`gauge-bar ${isEthicalMode ? 'good' : 'bad'}`}
                style={{ width: isEthicalMode ? '94%' : '28%' }}
              />
            </div>
            <div className="gauge-metrics">
              <div>
                اعتماد کاربر: <strong className={isEthicalMode ? 'text-emerald' : 'text-rose'}>{isEthicalMode ? 'عالی (۹۴٪)' : 'بحرانی (۲۸٪)'}</strong>
              </div>
              <div>
                ریسک ریزش: <strong className={isEthicalMode ? 'text-emerald' : 'text-rose'}>{isEthicalMode ? 'بسیار کم' : 'بسیار بالا'}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* ستون ۲: موکاپ زنده گوشی موبایل */}
        <div className="sim-phone-wrapper">
          <div className="phone-bezel">
            <div className="phone-notch">
              <div className="camera-dot" />
              <div className="speaker-slot" />
            </div>

            {/* صفحه نمایش موبایل */}
            <div className="phone-screen">
              <div className="phone-status-bar">
                <span>10:30</span>
                <div className="status-icons mono">5G 100%</div>
              </div>

              <div className="phone-content-area">
                {!isEthicalMode ? (
                  /* نمای دارک‌پترن غیراخلاقی */
                  <div className="phone-modal bad-modal">
                    <div className="modal-header text-rose">
                      <AlertTriangle size={20} />
                      <h5>{pattern.titleFa}</h5>
                    </div>

                    {pattern.id === 'over-permission' && (
                      <div className="modal-body-content">
                        <p className="modal-text">برنامه ماشین‌حساب نیاز به دسترسی‌های زیر دارد:</p>
                        <ul className="modal-perm-list mono">
                          <li>❌ ACCESS_BACKGROUND_LOCATION</li>
                          <li>❌ READ_CONTACTS_DATA</li>
                          <li>❌ RECORD_AUDIO_CONTINUOUS</li>
                        </ul>
                        <div className="modal-actions">
                          <button className="phone-btn danger-fill">پذیرش و ادامه اجباری</button>
                          <span className="tiny-exit">خروج از برنامه</span>
                        </div>
                      </div>
                    )}

                    {pattern.id === 'broken-reporting' && (
                      <div className="modal-body-content">
                        <p className="modal-text">گزارش تخلف (حداکثر ۱۴۰ کاراکتر):</p>
                        <textarea
                          readOnly
                          className="phone-textarea"
                          value="راننده با سرعت غیرمجاز رفت و فحاشی کرد و کرایه را دوبرابر گرفت و هیچ راهی برای ثبت مدرک نیست..."
                        />
                        <div className="char-warning text-rose mono">خطا: ۱۴۰/۱۸۵ کاراکتر مجاز! امکان ارسال نیست.</div>
                        <button className="phone-btn danger-fill" disabled>
                          ارسال بدون پیگیری
                        </button>
                      </div>
                    )}

                    {pattern.id === 'infinite-rabbit-hole' && (
                      <div className="modal-body-content">
                        <div className="fake-video-card">
                          <div className="video-thumb-bad">
                            <Bell size={24} className="shake" />
                            <span>ویدیوی شوکه‌کننده شماره ۴۹...</span>
                          </div>
                          <div className="autoplay-countdown mono">پخش خودکار بدون توقف (۰ ثانیه)</div>
                        </div>
                        <p className="tiny-text text-slate-400">شما ۳ ساعت است بدون وقفه در حال اسکرول هستید.</p>
                      </div>
                    )}

                    {pattern.id === 'accessibility-neglect' && (
                      <div className="modal-body-content">
                        <div className="broken-ui-box">
                          <div className="unlabeled-btn" title="فاقد ContentDescription">
                            [ ؟ دکمه ناشناس ]
                          </div>
                          <p className="talkback-silent text-rose">
                            🚫 صفحه‌خوان TalkBack: «عنصر ناشناخته - بدون صدا»
                          </p>
                          <div className="video-no-subs">[ ویدیو فاقد زیرنویس برای ناشنوایان ]</div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  /* نمای اخلاقی و مهندسی شده */
                  <div className="phone-modal good-modal">
                    <div className="modal-header text-emerald">
                      <ShieldCheck size={20} />
                      <h5>اصلاح مهندسی اخلاق‌مدار</h5>
                    </div>

                    {pattern.id === 'over-permission' && (
                      <div className="modal-body-content">
                        <div className="ethical-perm-card">
                          <UserCheck size={20} className="text-emerald" />
                          <div>
                            <h6>اصل حداقل دسترسی (Least Privilege)</h6>
                            <p className="tiny-text">
                              تنها در زمان نیاز به مکان‌یابی فروشگاه نزدیک، مجوز لوکیشن موقت و تقریبی درخواست می‌شود.
                            </p>
                          </div>
                        </div>
                        <div className="modal-actions">
                          <button className="phone-btn emerald-fill">تایید دسترسی موقت</button>
                          <button className="phone-btn ghost-btn">رد کردن بدون مسدودسازی</button>
                        </div>
                      </div>
                    )}

                    {pattern.id === 'broken-reporting' && (
                      <div className="modal-body-content">
                        <div className="ticket-flow-box">
                          <div className="ticket-step active">
                            <Check size={12} /> دسته‌بندی شفاف تخلف
                          </div>
                          <div className="ticket-step active">
                            <Check size={12} /> آپلود نامحدود اسکرین‌شات
                          </div>
                          <div className="ticket-step active">
                            <Check size={12} /> کد پیگیری زنده تیکت
                          </div>
                        </div>
                        <div className="ticket-id-tag mono">Tracking ID: #ETH-84920</div>
                      </div>
                    )}

                    {pattern.id === 'infinite-rabbit-hole' && (
                      <div className="modal-body-content">
                        <div className="mindful-pause-card">
                          <Clock size={28} className="text-emerald" />
                          <h6>توقف آگاهانه (Mindful Friction)</h6>
                          <p className="tiny-text">
                            شما ۴۵ دقیقه است که در حال مطالعه هستید. مایلید یک استراحت کوتاه داشته باشید؟
                          </p>
                          <button className="phone-btn emerald-fill">پایان اسکرول و ذخیره برای بعد</button>
                        </div>
                      </div>
                    )}

                    {pattern.id === 'accessibility-neglect' && (
                      <div className="modal-body-content">
                        <div className="accessible-ui-box">
                          <div className="talkback-active">
                            <Volume2 size={16} className="text-emerald animate-pulse" />
                            <span>TalkBack: «دکمه تایید و پرداخت کرایه - برای فعال‌سازی دوبار لمس کنید»</span>
                          </div>
                          <div className="active-captions mono">
                            [زیرنویس خودکار دو زبانه با کنتراست استاندارد]
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ستون ۳: کدهای مقایسه‌ای و درس‌نامه‌های مهندسی */}
        <div className="sim-code-card">
          <div className="code-head-row">
            <Code2 size={16} />
            <span>مقایسه کدهای سیستمی (System Code Inspection):</span>
            <span className={`tag-mode ${isEthicalMode ? 'tag-good' : 'tag-bad'}`}>
              {isEthicalMode ? 'کد اخلاق‌مدار (Clean)' : 'کد ضدالگو (Anti-Pattern)'}
            </span>
          </div>

          <div className="code-editor-box mono">
            <pre>
              <code>{isEthicalMode ? pattern.codeSnippetGood : pattern.codeSnippetBad}</code>
            </pre>
          </div>

          {/* تحلیل مهندسی */}
          <div className="engineering-verdict">
            <div className="verdict-title">
              <Wrench size={14} />
              <span>راهکار مهندسی و تعهد توسعه‌دهنده:</span>
            </div>
            <p className="verdict-body">{pattern.ethicalFix}</p>
            <div className="impact-footer">
              <Sparkles size={14} className="text-amber" />
              <span><strong>نتیجه بر کسب‌وکار:</strong> {pattern.userImpact}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
