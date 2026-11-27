import { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS } from '../data/ethicsData';
import { HelpCircle, CheckCircle2, XCircle, Award, RotateCcw, Timer, BookOpen } from 'lucide-react';

export function ClassQuiz() {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(25);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentQIndex];

  // تایمر ۲۵ ثانیه‌ای برای هر سوال
  useEffect(() => {
    if (isAnswered || quizFinished) return;

    if (timeLeft <= 0) {
      setIsAnswered(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isAnswered, quizFinished]);

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(25);
    } else {
      setQuizFinished(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setTimeLeft(25);
    setQuizFinished(false);
  };

  return (
    <div className="quiz-container">
      {/* هدر آزمونک */}
      <div className="quiz-top-bar">
        <div className="quiz-title-box">
          <div className="badge-pill bg-amber">
            <HelpCircle size={14} />
            <span>بازی‌وارسازی و سنجش کلاسی (Live Class Challenge)</span>
          </div>
          <h3>مسابقه سنجش تسلط بر یافته‌های تجربی مقاله Springer</h3>
        </div>

        {!quizFinished && (
          <div className="quiz-metrics-bar">
            <div className="quiz-timer mono">
              <Timer size={16} className={timeLeft <= 5 ? 'text-rose animate-ping' : 'text-amber'} />
              <span>{timeLeft}s</span>
            </div>
            <div className="quiz-score-badge">
              <span>امتیاز:</span>
              <strong className="mono">{score}</strong> / {QUIZ_QUESTIONS.length}
            </div>
          </div>
        )}
      </div>

      {!quizFinished ? (
        <div className="quiz-card-body">
          {/* نشانگر گام سوالات */}
          <div className="question-stepper">
            {QUIZ_QUESTIONS.map((_, i) => (
              <div
                key={i}
                className={`step-dot ${i === currentQIndex ? 'current' : i < currentQIndex ? 'done' : ''}`}
              />
            ))}
            <span className="step-label">پرسش {currentQIndex + 1} از {QUIZ_QUESTIONS.length}</span>
          </div>

          {/* متن سوال */}
          <div className="question-text-box">
            <h4>{currentQ.questionFa}</h4>
          </div>

          {/* گزینه‌ها */}
          <div className="options-grid">
            {currentQ.optionsFa.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQ.correctIndex;

              let btnClass = 'quiz-option-btn';
              if (isAnswered) {
                if (isCorrect) btnClass += ' correct';
                else if (isSelected) btnClass += ' wrong';
                else btnClass += ' muted';
              }

              return (
                <button
                  key={idx}
                  className={btnClass}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                >
                  <div className="opt-letter mono">{['الف', 'ب', 'ج', 'د'][idx]}</div>
                  <div className="opt-text">{opt}</div>
                  {isAnswered && isCorrect && <CheckCircle2 size={18} className="text-emerald" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle size={18} className="text-rose" />}
                </button>
              );
            })}
          </div>

          {/* کادر فیدبک و استدلال علمی */}
          {isAnswered && (
            <div className={`answer-feedback-box ${selectedOption === currentQ.correctIndex ? 'success-box' : 'failure-box'}`}>
              <div className="feedback-head">
                <BookOpen size={16} />
                <span>استناد مستقیم به متن مقاله Springer ESE:</span>
              </div>
              <p className="feedback-text">{currentQ.explanationFa}</p>
              <div className="quote-box mono">
                «{currentQ.referenceQuote}»
              </div>
              <div className="feedback-action">
                <button className="next-q-btn" onClick={handleNextQuestion}>
                  {currentQIndex < QUIZ_QUESTIONS.length - 1 ? 'رفتن به پرسش بعدی' : 'مشاهده کارنامه نهایی'}
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* صفحه کارنامه و پایان کوییز */
        <div className="quiz-result-card">
          <Award size={64} className="text-amber result-trophy" />
          <h3>نتیجه آزمونک کلاسی اخلاق حرفه‌ای</h3>
          <p className="result-subtext">
            شما موفق شدید به <strong className="text-emerald mono">{score}</strong> پرسش از مجموع{' '}
            <strong className="mono">{QUIZ_QUESTIONS.length}</strong> پرسش پاسخ صحیح بدهید.
          </p>

          <div className="score-verdict">
            {score === 3 && (
              <div className="verdict-banner gold">
                🌟 تسلط ۱۰۰٪ و عالی بر متدولوژی و آمار مقاله ESE 2024!
              </div>
            )}
            {score === 2 && (
              <div className="verdict-banner silver">
                👏 نتیجه بسیار خوب! تسلط بر مفاهیم بنیادین اخلاق مهندسی نرم‌افزار.
              </div>
            )}
            {score <= 1 && (
              <div className="verdict-banner bronze">
                📖 پیشنهاد: مرور مجدد اسلایدهای تحلیل آماری و تفاوت دغدغه‌های Internal و External.
              </div>
            )}
          </div>

          <button className="reset-quiz-btn" onClick={handleResetQuiz}>
            <RotateCcw size={15} />
            <span>شروع مجدد آزمونک</span>
          </button>
        </div>
      )}
    </div>
  );
}
