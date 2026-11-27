export interface EthicalCategory {
  id: string;
  nameEn: string;
  nameFa: string;
  percentage: number; // e.g. 9.9
  avgRating: number;   // e.g. 1.18
  avgWords: number;    // e.g. 42.8
  avgUpvotes: number;  // e.g. 1.69
  isExternalCapable: boolean;
  externalSharePct?: number;
  descriptionFa: string;
  realQuote: string;
  quotePlatform: string;
  iconName: string;
  color: string;
}

export interface AppEthicalProfile {
  id: string;
  name: string;
  faName: string;
  domain: string;
  ethicalReviewRate: number; // e.g. 95.9
  sampleSize: number;
  color: string;
  topConcerns: {
    concernFa: string;
    percentage: number;
  }[];
  sampleReviews: {
    text: string;
    concernFa: string;
    isExternal: boolean;
    rating: number;
    upvotes: number;
  }[];
}

export interface DarkPatternSimulation {
  id: string;
  titleFa: string;
  titleEn: string;
  component: string;
  category: string;
  severity: 'high' | 'critical' | 'moderate';
  badPractice: string;
  codeSnippetBad: string;
  codeSnippetGood: string;
  ethicalFix: string;
  userImpact: string;
}

export interface QuizQuestion {
  id: number;
  questionFa: string;
  optionsFa: string[];
  correctIndex: number;
  explanationFa: string;
  referenceQuote: string;
}

export interface SlideDefinition {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  category: 'intro' | 'problem' | 'framework' | 'empirical' | 'simulator' | 'engineering' | 'quiz' | 'conclusion';
  durationMin: number;
  speakerNotes: string[];
  keyTakeaway: string;
}
