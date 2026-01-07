
export interface ExperienceItem {
  period: string;
  position: string;
  company: string;
  location: string;
  tasks?: string[];
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface SkillItem {
  title: string;
  skills: string[];
}

export type LanguageCode = 'de' | 'en' | 'fr' | 'it' | 'ro' | 'es';

export interface Translations {
  profile: {
    role: string;
    locationLabel: string;
    phoneLabel: string;
    emailLabel: string;
    residence: string;
  };
  nav: {
    about: string;
    experience: string;
    skills: string;
    education: string;
    contact: string;
    hire: string;
  };
  hero: {
    badge: string;
    availability: string;
    summary: string;
    ctaContact: string;
    ctaDownload: string;
    facts: string[];
  };
  about: {
    title: string;
    heading: string;
    p1: string;
    p2: string;
    definesTitle: string;
    defines: string[];
    yearsLabel: string;
  };
  experience: {
    title: string;
    subtitle: string;
    items: ExperienceItem[];
  };
  skills: {
    title: string;
    subtitle: string;
    categories: SkillItem[];
  };
  education: {
    title: string;
    subtitle: string;
    mechanic: {
      title: string;
      school: string;
      desc: string;
    };
    school: {
      title: string;
      location: string;
    };
  };
  languages: {
    title: string;
    subtitle: string;
    items: LanguageItem[];
    levels: {
      native: string;
      good: string;
      spoken: string;
      comm: string;
      basic: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    infoTitle: string;
    infoDesc: string;
    whatsapp: string;
    formTitle: string;
    labels: {
      name: string;
      company: string;
      email: string;
      phone: string;
      message: string;
    };
    submit: string;
    availabilityNote: string;
  };
}
