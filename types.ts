
export interface Coach {
  name: string;
  role: string;
  image: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  highlights: string[];
}

export interface Message {
  role: 'user' | 'model';
  content: string;
}
