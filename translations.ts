import { Translations, LanguageCode } from './types.ts';

const SHARED_COMPANIES = {
  SELCO: "Selco Builders Warehouse",
  MZ: "M.Z. Dienstleistungen",
  DACHSER: "Dachser",
  BRAUNSHOFER: "Braunshofer",
  LSW: "L.S.W",
  BXR: "B.X.R.",
  GRECCO: "Grecco",
  ROSSI: "Rossi Mauro Treviso",
  STEIIACI: "Steiiaci Trans.",
  ITA: "I.T.A"
};

export const TRANSLATIONS: Record<LanguageCode, Translations> = {
  de: {
    profile: { role: "Berufsfahrer / Chauffeur (Kat. CE)", locationLabel: "Adresse", phoneLabel: "Telefon", emailLabel: "E-Mail", residence: "B-Bewilligung, wohnhaft in der Schweiz seit 01/2020" },
    nav: { about: 'Über mich', experience: 'Erfahrung', skills: 'Fähigkeiten', education: 'Ausbildung', contact: 'Kontakt', hire: 'Stefan anfragen' },
    hero: {
      badge: 'Erfahrener Berufsfahrer',
      availability: 'Verfügbar für Teilzeit- & Vollzeitstellen',
      summary: 'Über 22 Jahre unfallfreie Erfahrung im internationalen Fernverkehr. Höchste Präzision, Zuverlässigkeit und absolute Ruhe in anspruchsvollen Logistikumgebungen.',
      ctaContact: 'Kontakt aufnehmen',
      ctaDownload: 'Lebenslauf (PDF)',
      facts: ['22+ Jahre unfallfrei', 'Kat. B, C, E, ADR', 'Sitz in der Schweiz', 'DE, EN, IT, RO, FR, ES']
    },
    about: {
      title: 'Über mich',
      heading: 'Ihr zuverlässiger Partner am Steuer',
      p1: 'Stefan Cristian ist ein hochdisziplinierter und serviceorientierter Berufsfahrer mit über zwei Jahrzehnten Erfahrung auf internationalen Strassen. Er verbindet technisches Verständnis mit logistischer Präzision.',
      p2: 'Seit 2020 in der Schweiz ansässig, ist er bestens integriert und bereit, nationale sowie internationale Transportunternehmen mit seiner unfallfreien Erfolgsbilanz und seiner ruhigen Fachkompetenz zu unterstützen.',
      definesTitle: 'Was meine Arbeit auszeichnet',
      defines: ['22+ Jahre unfallfreie Fahrpraxis', 'Höchste Präzision unter Zeitdruck', 'Hervorragende Orientierung & Routenplanung', 'Kundenorientiertes Auftreten', 'Verantwortungsvoller Umgang mit Fahrzeugen', 'Hohe Flexibilität'],
      yearsLabel: 'Jahre Exzellenz'
    },
    experience: { 
      title: 'Berufserfahrung', 
      subtitle: 'Über zwei Jahrzehnte internationale Logistik-Expertise.',
      items: [
        { period: "02/2023 – 09/2023", position: "Chauffeur Kat. C", company: SHARED_COMPANIES.SELCO, location: "London (UK)", tasks: ["Transport von Baumaterialien"] },
        { period: "08/2020 – 12/2022", position: "Chauffeur Kat. CE", company: SHARED_COMPANIES.MZ, location: "Lupfig (CH)", tasks: ["Auslieferung und Kundeneinweisung von Neufahrzeugen", "Fahrzeugübernahme am Hauptsitz", "Allgemeine Supportarbeiten in der Werkstatt"] },
        { period: "01/2020 – 07/2020", position: "Chauffeur Kat. CE", company: SHARED_COMPANIES.DACHSER, location: "Regensdorf (CH)", tasks: ["Professionelle Auslieferung bestellter Produkte", "Fahrzeugbeladung nach Entladereihenfolge", "Umsetzung von Qualitätsstandards und GDP-Vorschriften"] },
        { period: "06/2017 – 10/2019", position: "Chauffeur Kat. CE", company: SHARED_COMPANIES.BRAUNSHOFER, location: "Amstetten (AT)" },
        { period: "09/2014 – 04/2017", position: "Waggonrangierer", company: SHARED_COMPANIES.LSW, location: "Meitingen (DE)" },
        { period: "08/2011 – 09/2014", position: "Chauffeur Kat. CE & Kranführer", company: SHARED_COMPANIES.BXR, location: "Augsburg (DE)" },
        { period: "03/2008 – 06/2011", position: "Chauffeur Kat. CE", company: SHARED_COMPANIES.GRECCO, location: "Florenz (IT)" },
        { period: "08/2005 – 02/2008", position: "Chauffeur Kat. CE", company: SHARED_COMPANIES.ROSSI, location: "Allmendingen (IT)", tasks: ["Lieferungen an Grosskunden", "Diverse Allrounder-Tätigkeiten"] }
      ]
    },
    skills: { 
      title: 'Fähigkeiten & Lizenzen', 
      subtitle: 'Zertifizierte Kompetenz für Schwer- und Spezialtransporte.',
      categories: [
        { title: "Fahrtechnik & Technik", skills: ["LKW-Fahren (Kat. CE)", "Be- und Entladen", "Kranführung (Kat. C)", "ADR Basis", "Routenplanung & Orientierung"] },
        { title: "Persönliche Stärken", skills: ["Zuverlässigkeit & Pünktlichkeit", "Gelassenheit unter Druck", "Kundenfreundlichkeit", "Flexibilität & Anpassungsfähigkeit", "Präzise Arbeitsweise"] },
        { title: "Lizenzen & Bewilligungen", skills: ["Führerausweis Kat. B, C, E", "Krane Kat. C", "ADR Basis", "Schweizer B-Bewilligung", "Eigener PKW vorhanden"] }
      ]
    },
    education: {
      title: 'Ausbildung',
      subtitle: 'Fundiertes technisches Wissen in der Fahrzeugmechanik.',
      mechanic: { title: 'Autoelektriker & Automechaniker', school: 'G.S.A., Caransebes (RO)', desc: 'Umfassende Ausbildung in Fahrzeugsystemen und Wartung.' },
      school: { title: 'Primar- & Sekundarschule', location: 'Caransebes (RO)' }
    },
    languages: {
      title: 'Sprachen',
      subtitle: 'Kommunikationstalent für multikulturelle Logistikumgebungen.',
      items: [
        { name: "Rumänisch", level: "Muttersprache" },
        { name: "Deutsch", level: "Gute Kenntnisse" },
        { name: "Englisch", level: "Gute Sprachkenntnisse" },
        { name: "Italienisch", level: "Gute Kommunikation" },
        { name: "Französisch", level: "Grundkenntnisse" }
      ],
      levels: { native: 'Muttersprache', good: 'Gute Kenntnisse', spoken: 'Gute Sprachkenntnisse', comm: 'Gute Kommunikation', basic: 'Grundkenntnisse' }
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Bereit für neue Herausforderungen in der Schweiz oder International.',
      infoTitle: 'Direkt kontaktieren',
      infoDesc: 'Suchen Sie einen stabilen, erfahrenen Chauffeur? Stefan ist für Gespräche verfügbar.',
      whatsapp: 'WhatsApp Chat',
      formTitle: 'Nachricht senden',
      labels: { name: 'Vollständiger Name', company: 'Unternehmen', email: 'E-Mail', phone: 'Telefonnummer', message: 'Ihre Nachricht' },
      submit: 'Anfrage senden',
      availabilityNote: 'Verfügbar für nationale und internationale Einsätze.'
    }
  },
  en: {
    profile: { role: "Professional Chauffeur / Truck Driver (Cat. CE)", locationLabel: "Address", phoneLabel: "Phone", emailLabel: "Email", residence: "B permit, resident in Switzerland since 01/2020" },
    nav: { about: 'About', experience: 'Experience', skills: 'Skills', education: 'Education', contact: 'Contact', hire: 'Hire Stefan' },
    hero: {
      badge: 'Professional Chauffeur',
      availability: 'Available for Part-time & Full-time assignments',
      summary: 'Distinguished 22-year record of accident-free international logistics. Unwavering precision, reliability, and composure in high-stakes operational environments.',
      ctaContact: 'Contact Stefan',
      ctaDownload: 'Download CV',
      facts: ['22+ Years Accident-Free', 'Cat. B, C, E, ADR', 'Switzerland Based', 'DE, EN, IT, RO, FR, ES']
    },
    about: {
      title: 'About Me',
      heading: 'A Reliable Partner Behind the Wheel',
      p1: 'Stefan Cristian is a highly disciplined, service-oriented professional with over two decades of international road mastery. He bridges the gap between mechanical expertise and logistical execution.',
      p2: 'Resident in Switzerland since 2020, he is fully integrated and prepared to bolster national or global transport firms with his proven safety record and calm expert guidance.',
      definesTitle: 'Core Professional Pillars',
      defines: ['22+ years of impeccable safety', 'Surgical precision under pressure', 'Advanced navigation & route optimization', 'Exceptional client-facing professionalism', 'Meticulous vehicle care', 'Strategic operational flexibility'],
      yearsLabel: 'Years of Excellence'
    },
    experience: { 
      title: 'Professional Experience', 
      subtitle: 'Two decades of expertise across global logistics networks.',
      items: [
        { period: "02/2023 – 09/2023", position: "Chauffeur Cat. C", company: SHARED_COMPANIES.SELCO, location: "London (UK)", tasks: ["Transport of building materials"] },
        { period: "08/2020 – 12/2022", position: "Chauffeur Cat. CE", company: SHARED_COMPANIES.MZ, location: "Lupfig (CH)", tasks: ["Delivery and customer instruction of new vehicles", "Acceptance of vehicles at the head office", "General support work in the workshop"] },
        { period: "01/2020 – 07/2020", position: "Chauffeur Cat. CE", company: SHARED_COMPANIES.DACHSER, location: "Regensdorf (CH)", tasks: ["Professional delivery of ordered products", "Vehicle loading and sequence logic", "Implementing quality standards and GDP regulations"] },
        { period: "06/2017 – 10/2019", position: "Chauffeur Cat. CE", company: SHARED_COMPANIES.BRAUNSHOFER, location: "Amstetten (AT)" },
        { period: "09/2014 – 04/2017", position: "Wagon ranger", company: SHARED_COMPANIES.LSW, location: "Meitingen (DE)" },
        { period: "08/2011 – 09/2014", position: "Chauffeur Cat. CE & crane driver", company: SHARED_COMPANIES.BXR, location: "Augsburg (DE)" },
        { period: "03/2008 – 06/2011", position: "Chauffeur Cat. CE", company: SHARED_COMPANIES.GRECCO, location: "Florence (IT)" },
        { period: "08/2005 – 02/2008", position: "Chauffeur Cat. CE", company: SHARED_COMPANIES.ROSSI, location: "Allmendingen (IT)", tasks: ["Deliveries to major customers", "Various all-rounder duties"] }
      ]
    },
    skills: { 
      title: 'Skills & Licenses', 
      subtitle: 'Certified proficiency in heavy transport and specialized logistics.',
      categories: [
        { title: "Technical Expertise", skills: ["Truck Driving (Cat. CE)", "Loading & Unloading", "Crane Operation (Cat. C)", "ADR Basic", "Route Planning & GPS Mastery"] },
        { title: "Professional Traits", skills: ["Reliability & Punctuality", "Composure Under Pressure", "Customer-First Handling", "Adaptability & Flexibility", "Detail-Oriented Precision"] },
        { title: "Permits & Assets", skills: ["License Cat. B, C, E", "Cranes Cat. C", "ADR Basic Certification", "Swiss B Permit", "Personal Vehicle Available"] }
      ]
    },
    education: {
      title: 'Education & Training',
      subtitle: 'A technical foundation in automotive mechanical engineering.',
      mechanic: { title: 'Auto Electrician & Car Mechanic', school: 'G.S.A., Caransebes (RO)', desc: 'Specialized training in complex automotive systems and mechanical maintenance.' },
      school: { title: 'Primary & Secondary Education', location: 'Caransebes (RO)' }
    },
    languages: {
      title: 'Languages',
      subtitle: 'Linguistic versatility for international logistics coordination.',
      items: [
        { name: "Romanian", level: "Native" },
        { name: "German", level: "Good Proficiency" },
        { name: "English", level: "Fluent Speaking" },
        { name: "Italian", level: "Strong Communication" },
        { name: "French", level: "Basic Knowledge" }
      ],
      levels: { native: 'Native', good: 'Good Proficiency', spoken: 'Fluent Speaking', comm: 'Strong Communication', basic: 'Basic Knowledge' }
    },
    contact: {
      title: 'Contact',
      subtitle: 'Strategic logistical support for your fleet operations.',
      infoTitle: 'Get in Touch',
      infoDesc: 'Seeking a seasoned professional to secure your supply chain? Stefan is available for immediate discussion.',
      whatsapp: 'WhatsApp Chat',
      formTitle: 'Send a Message',
      labels: { name: 'Full Name', company: 'Company', email: 'Email Address', phone: 'Phone Number', message: 'How can I help?' },
      submit: 'Send Request',
      availabilityNote: 'Available for national and international driving assignments.'
    }
  },
  fr: {
    profile: { role: "Chauffeur Poids Lourd Professionnel (Cat. CE)", locationLabel: "Adresse", phoneLabel: "Téléphone", emailLabel: "Email", residence: "Permis B, résidant en Suisse depuis 01/2020" },
    nav: { about: 'À Propos', experience: 'Expérience', skills: 'Compétences', education: 'Formation', contact: 'Contact', hire: 'Recruter Stefan' },
    hero: {
      badge: 'Chauffeur Professionnel',
      availability: 'Disponible pour missions à temps partiel et plein temps',
      summary: 'Plus de 22 ans d\'expérience internationale sans accident. Précision, fiabilité et calme absolu dans des environnements logistiques exigeants.',
      ctaContact: 'Contactez Stefan',
      ctaDownload: 'Télécharger CV',
      facts: ['22+ Ans Sans Accident', 'Cat. B, C, E, ADR', 'Basé en Suisse', 'DE, EN, IT, RO, FR, ES']
    },
    about: {
      title: 'À Propos',
      heading: 'Un partenaire de confiance au volant',
      p1: 'Stefan Cristian est un professionnel discipliné et axé sur le service, possédant plus de vingt ans de maîtrise des routes internationales. Il allie expertise mécanique et exécution logistique.',
      p2: 'Résidant en Suisse depuis 2020, il est prêt à accompagner les entreprises de transport nationales ou internationales avec son dossier de sécurité irréprochable.',
      definesTitle: 'Mes Engagements Professionnels',
      defines: ['22+ ans de conduite sans accident', 'Précision dans les situations stressantes', 'Orientation et planification expertes', 'Communication client exemplaire', 'Entretien méticuleux des véhicules', 'Grande flexibilité opérationnelle'],
      yearsLabel: 'Années d\'Excellence'
    },
    experience: { 
      title: 'Expérience Professionnelle', 
      subtitle: 'Vingt ans d\'expertise à travers les réseaux logistiques mondiaux.',
      items: [
        { period: "02/2023 – 09/2023", position: "Chauffeur Cat. C", company: SHARED_COMPANIES.SELCO, location: "Londres (UK)", tasks: ["Transport de matériaux de construction"] },
        { period: "08/2020 – 12/2022", position: "Chauffeur Cat. CE", company: SHARED_COMPANIES.MZ, location: "Lupfig (CH)", tasks: ["Livraison et formation client sur nouveaux véhicules", "Réception de véhicules au siège", "Support technique en atelier"] },
        { period: "01/2020 – 07/2020", position: "Chauffeur Cat. CE", company: SHARED_COMPANIES.DACHSER, location: "Regensdorf (CH)", tasks: ["Livraison professionnelle de produits commandés", "Chargement logique selon la séquence", "Respect des normes qualité et GDP"] },
        { period: "06/2017 – 10/2019", position: "Chauffeur Cat. CE", company: SHARED_COMPANIES.BRAUNSHOFER, location: "Amstetten (AT)" },
        { period: "09/2014 – 04/2017", position: "Waggonranger", company: SHARED_COMPANIES.LSW, location: "Meitingen (DE)" },
        { period: "08/2011 – 09/2014", position: "Chauffeur Cat. CE & grutier", company: SHARED_COMPANIES.BXR, location: "Augsbourg (DE)" },
        { period: "03/2008 – 06/2011", position: "Chauffeur Cat. CE", company: SHARED_COMPANIES.GRECCO, location: "Florence (IT)" },
        { period: "08/2005 – 02/2008", position: "Chauffeur Cat. CE", company: SHARED_COMPANIES.ROSSI, location: "Allmendingen (IT)", tasks: ["Livraisons aux gros clients", "Diverses tâches polyvalentes"] }
      ]
    },
    skills: { 
      title: 'Compétences & Permis', 
      subtitle: 'Compétences certifiées pour le transport lourd et la logistique.',
      categories: [
        { title: "Expertise Technique", skills: ["Conduite de camions (Cat. CE)", "Chargement & Déchargement", "Conduite de grues (Cat. C)", "Base ADR", "Planification de routes"] },
        { title: "Traits Professionnels", skills: ["Fiabilité & Ponctualité", "Calme sous pression", "Sens du service client", "Adaptabilité", "Précision rigoureuse"] },
        { title: "Permis & Atouts", skills: ["Permis de conduire B, C, E", "Grues Cat. C", "Certificat de base ADR", "Permis B Suisse", "Véhicule personnel disponible"] }
      ]
    },
    education: {
      title: 'Formation',
      subtitle: 'Une base technique solide en mécanique automobile.',
      mechanic: { title: 'Électricien & Mécanicien Auto', school: 'G.S.A., Caransebes (RO)', desc: 'Formation spécialisée dans les systèmes automobiles et la maintenance.' },
      school: { title: 'Éducation Primaire & Secondaire', location: 'Caransebes (RO)' }
    },
    languages: {
      title: 'Langues',
      subtitle: 'Versatilité linguistique pour la logistique internationale.',
      items: [
        { name: "Roumain", level: "Langue Maternelle" },
        { name: "Allemand", level: "Bon Niveau" },
        { name: "Anglais", level: "Bonne Maîtrise Orale" },
        { name: "Italien", level: "Bonne Communication" },
        { name: "Français", level: "Notions de base" }
      ],
      levels: { native: 'Langue Maternelle', good: 'Bon Niveau', spoken: 'Bonne Maîtrise Orale', comm: 'Bonne Communication', basic: 'Notions de base' }
    },
    contact: {
      title: 'Contact',
      subtitle: 'Disponible pour des missions nationales et internationales.',
      infoTitle: 'Me contacter',
      infoDesc: 'Vous recherchez un chauffeur d\'expérience pour sécuriser votre chaîne logistique ? Je suis à votre disposition.',
      whatsapp: 'Chat WhatsApp',
      formTitle: 'Envoyer un message',
      labels: { name: 'Nom complet', company: 'Entreprise', email: 'E-mail', phone: 'Téléphone', message: 'Votre message' },
      submit: 'Envoyer la demande',
      availabilityNote: 'Disponible pour des missions nationales et internationales.'
    }
  },
  it: {
    profile: { role: "Chauffeur Professionista (Cat. CE)", locationLabel: "Indirizzo", phoneLabel: "Telefono", emailLabel: "Email", residence: "Permesso B, residente in Svizzera dal 01/2020" },
    nav: { about: 'Chi Sono', experience: 'Esperienza', skills: 'Competenze', education: 'Istruzione', contact: 'Contatto', hire: 'Richiedi Stefan' },
    hero: {
      badge: 'Chauffeur Professionista',
      availability: 'Disponibile per incarichi part-time e full-time',
      summary: 'Oltre 22 anni di esperienza internazionale senza incidenti. Massima precisione, affidabilità e calma in ambienti logistici complessi.',
      ctaContact: 'Contatta Stefan',
      ctaDownload: 'Scarica CV',
      facts: ['22+ Anni Senza Incidenti', 'Cat. B, C, E, ADR', 'Base in Svizzera', 'DE, EN, IT, RO, FR, ES']
    },
    about: {
      title: 'Chi Sono',
      heading: 'Un partner affidabile al volante',
      p1: 'Stefan Cristian è un professionista disciplinato e orientato al servizio con oltre vent\'anni di maestria sulle strade internazionali. Unisce competenza meccanica ed esecuzione logistica.',
      p2: 'Residente in Svizzera dal 2020, è perfettamente integrato e pronto a supportare aziende di trasporto con la sua calma competenza e un record di sicurezza impeccabile.',
      definesTitle: 'Pilastri Professionali',
      defines: ['22+ anni di sicurezza impeccabile', 'Precisione sotto pressione operativa', 'Navigazione esperta e pianificazione rotte', 'Professionalità rivolta al cliente', 'Cura meticolosa del veicolo', 'Flessibilità strategica'],
      yearsLabel: 'Anni di Eccellenza'
    },
    experience: { 
      title: 'Esperienza Professionale', 
      subtitle: 'Vent\'anni di competenza nelle reti logistiche internazionali.',
      items: [
        { period: "02/2023 – 09/2023", position: "Autista Cat. C", company: SHARED_COMPANIES.SELCO, location: "Londra (UK)", tasks: ["Trasporto materiali da costruzione"] },
        { period: "08/2020 – 12/2022", position: "Autista Cat. CE", company: SHARED_COMPANIES.MZ, location: "Lupfig (CH)", tasks: ["Consegna e istruzione clienti nuovi veicoli", "Accettazione veicoli presso la sede", "Supporto tecnico in officina"] },
        { period: "01/2020 – 07/2020", position: "Autista Cat. CE", company: SHARED_COMPANIES.DACHSER, location: "Regensdorf (CH)", tasks: ["Consegna professionale prodotti ordinati", "Carico veicolo secondo logica di scarico", "Rispetto standard qualità e norme GDP"] },
        { period: "06/2017 – 10/2019", position: "Autista Cat. CE", company: SHARED_COMPANIES.BRAUNSHOFER, location: "Amstetten (AT)" },
        { period: "09/2014 – 04/2017", position: "Manovratore vagoni", company: SHARED_COMPANIES.LSW, location: "Meitingen (DE)" },
        { period: "08/2011 – 09/2014", position: "Autista Cat. CE & gruista", company: SHARED_COMPANIES.BXR, location: "Augusta (DE)" },
        { period: "03/2008 – 06/2011", position: "Autista Cat. CE", company: SHARED_COMPANIES.GRECCO, location: "Firenze (IT)" },
        { period: "08/2005 – 02/2008", position: "Autista Cat. CE", company: SHARED_COMPANIES.ROSSI, location: "Allmendingen (IT)", tasks: ["Consegne a grandi clienti", "Varie attività tuttofare"] }
      ]
    },
    skills: { 
      title: 'Competenze & Patenti', 
      subtitle: 'Competenza certificata per trasporti pesanti e logistica.',
      categories: [
        { title: "Competenza Tecnica", skills: ["Guida camion (Cat. CE)", "Carico e Scarico", "Manovra gru (Cat. C)", "ADR Base", "Pianificazione itinerari"] },
        { title: "Tratti Professionali", skills: ["Affidabilità & Puntualità", "Calma sotto pressione", "Orientamento al cliente", "Adattabilità", "Precisione assoluta"] },
        { title: "Patenti & Asset", skills: ["Patenti B, C, E", "Gru Cat. C", "Certificazione ADR Base", "Permesso B Svizzero", "Auto propria disponibile"] }
      ]
    },
    education: {
      title: 'Istruzione',
      subtitle: 'Solida base tecnica in meccanica automobilistica.',
      mechanic: { title: 'Elettrauto & Meccanico', school: 'G.S.A., Caransebes (RO)', desc: 'Formazione professionale in sistemi elettrici e meccanica.' },
      school: { title: 'Scuola Primaria e Secondaria', location: 'Caransebes (RO)' }
    },
    languages: {
      title: 'Lingue',
      subtitle: 'Versatilità linguistica per ambienti logistici multiculturali.',
      items: [
        { name: "Rumeno", level: "Madrelingua" },
        { name: "Tedesco", level: "Buona conoscenza" },
        { name: "Inglese", level: "Buona padronanza orale" },
        { name: "Italiano", level: "Buona comunicazione" },
        { name: "Francese", level: "Conoscenza base" }
      ],
      levels: { native: 'Madrelingua', good: 'Buona conoscenza', spoken: 'Buona padronanza orale', comm: 'Buona comunicazione', basic: 'Conoscenza base' }
    },
    contact: {
      title: 'Contatto',
      subtitle: 'Disponibile per incarichi di guida nazionali e internazionali.',
      infoTitle: 'Mettiti in contatto',
      infoDesc: 'Cerchi un autista affidabile per la tua flotta? Stefan è disponibile per un colloquio conoscitivo.',
      whatsapp: 'Chat WhatsApp',
      formTitle: 'Invia un messaggio',
      labels: { name: 'Nome completo', company: 'Azienda', email: 'E-mail', phone: 'Telefono', message: 'Come posso aiutarvi?' },
      submit: 'Invia richiesta',
      availabilityNote: 'Disponibile per incarichi di guida nazionali e internazionali.'
    }
  },
  ro: {
    profile: { role: "Șofer Profesionist / Chauffeur (Cat. CE)", locationLabel: "Adresa", phoneLabel: "Telefon", emailLabel: "Email", residence: "Permis B, stabilit în Elveția din 01/2020" },
    nav: { about: 'Despre', experience: 'Experiență', skills: 'Abilități', education: 'Educație', contact: 'Contact', hire: 'Contactează-mă' },
    hero: {
      badge: 'Șofer Profesionist',
      availability: 'Disponibil pentru contracte part-time și full-time',
      summary: 'Record de 22 de ani fără accidente în transport internațional. Precizie, fiabilitate și calm în medii logistice exigente.',
      ctaContact: 'Contactează-mă',
      ctaDownload: 'Descarcă CV',
      facts: ['22+ Ani Fără Accidente', 'Cat. B, C, E, ADR', 'Bază în Elveția', 'DE, EN, IT, RO, FR, ES']
    },
    about: {
      title: 'Despre Mine',
      heading: 'Un partener de încredere la volan',
      p1: 'Stefan Cristian este un profesionist disciplinat, cu peste două decenii de experiență pe drumurile internaționale. Îmbină expertiza tehnică cu execuția logistică.',
      p2: 'Locuind în Elveția din 2020, este pregăit să sprijine firme de transport naționale sau internaționale cu expertiza sa calmă și recordul său de siguranță.',
      definesTitle: 'Pilonii activității mele',
      defines: ['22+ ani de conducere fără accidente', 'Precizie maximă sub presiune', 'Navigare și planificare rute expertă', 'Interacțiune prietenoasă cu clienții', 'Manevrare responsabilă a vehiculului', 'Flexibilitate ridicată'],
      yearsLabel: 'Ani de Excelență'
    },
    experience: { 
      title: 'Experiență Profesională', 
      subtitle: 'Două decenii de expertiză în rețele logistice globale.',
      items: [
        { period: "02/2023 – 09/2023", position: "Șofer Cat. C", company: SHARED_COMPANIES.SELCO, location: "Londra (UK)", tasks: ["Transport de materiale de construcție"] },
        { period: "08/2020 – 12/2022", position: "Șofer Cat. CE", company: SHARED_COMPANIES.MZ, location: "Lupfig (CH)", tasks: ["Livrarea și instruirea clienților pentru vehicule noi", "Recepția vehiculelor la sediu", "Suport tehnic în atelier"] },
        { period: "01/2020 – 07/2020", position: "Șofer Cat. CE", company: SHARED_COMPANIES.DACHSER, location: "Regensdorf (CH)", tasks: ["Livrarea profesională a produselor", "Încărcarea vehiculului conform logicii de descărcare", "Implementarea standardelor de calitate și GDP"] },
        { period: "06/2017 – 10/2019", position: "Șofer Cat. CE", company: SHARED_COMPANIES.BRAUNSHOFER, location: "Amstetten (AT)" },
        { period: "09/2014 – 04/2017", position: "Manevrant vagoane", company: SHARED_COMPANIES.LSW, location: "Meitingen (DE)" },
        { period: "08/2011 – 09/2014", position: "Șofer Cat. CE & macaragiu", company: SHARED_COMPANIES.BXR, location: "Augsburg (DE)" },
        { period: "03/2008 – 06/2011", position: "Șofer Cat. CE", company: SHARED_COMPANIES.GRECCO, location: "Florența (IT)" },
        { period: "08/2005 – 02/2008", position: "Șofer Cat. CE", company: SHARED_COMPANIES.ROSSI, location: "Allmendingen (IT)", tasks: ["Livrări la clienți mari", "Diverse activități auxiliare"] }
      ]
    },
    skills: { 
      title: 'Abilități & Permise', 
      subtitle: 'Competență certificată pentru transport greu și logistică.',
      categories: [
        { title: "Expertiză Tehnică", skills: ["Conducere camioane (Cat. CE)", "Încărcare & Descărcare", "Operare macara (Cat. C)", "ADR de bază", "Planificare rute"] },
        { title: "Trăsături Profesionale", skills: ["Fiabilitate & Punctualitate", "Calm sub presiune", "Orientare către client", "Adaptabilitate", "Precizie responsabilă"] },
        { title: "Permise & Facilități", skills: ["Permis de conducere B, C, E", "Macara Cat. C", "Certificat ADR de bază", "Permis B Elveția", "Mașină personală disponibilă"] }
      ]
    },
    education: {
      title: 'Educație și Formare',
      subtitle: 'O bază tehnică solidă în mecanică auto.',
      mechanic: { title: 'Electrician Auto & Mecanic', school: 'G.S.A., Caransebes (RO)', desc: 'Formare profesională în sisteme electrice și întreținere mecanică.' },
      school: { title: 'Școala Primară și Secundară', location: 'Caransebes (RO)' }
    },
    languages: {
      title: 'Limbi Străine',
      subtitle: 'Abilități de comunicare pentru logistică internațională.',
      items: [
        { name: "Română", level: "Nativ" },
        { name: "Germană", level: "Cunoștințe bune" },
        { name: "Engleză", level: "Vorbit bine" },
        { name: "Italiană", level: "Comunicare bună" },
        { name: "Franceză", level: "Cunoștințe de bază" }
      ],
      levels: { native: 'Nativ', good: 'Cunoștințe bune', spoken: 'Vorbit bine', comm: 'Comunicare bună', basic: 'Cunoștințe de bază' }
    },
    contact: {
      title: 'Contact',
      subtitle: 'Disponibil pentru misiuni naționale și internaționale.',
      infoTitle: 'Contactează-mă',
      infoDesc: 'Căutați un șofer stabil și experimentat pentru flota dumneavoastră? Stefan este disponibil pentru discuții.',
      whatsapp: 'Chat WhatsApp',
      formTitle: 'Trimite un mesaj',
      labels: { name: 'Nume complet', company: 'Companie', email: 'E-mail', phone: 'Telefon', message: 'Cum vă pot ajuta?' },
      submit: 'Trimite cererea',
      availabilityNote: 'Disponibil pentru misiuni naționale și internaționale.'
    }
  },
  es: {
    profile: { role: "Chófer Profesional / Conductor (Cat. CE)", locationLabel: "Dirección", phoneLabel: "Teléfono", emailLabel: "Correo", residence: "Permiso B, residente en Suiza desde 01/2020" },
    nav: { about: 'Sobre mí', experience: 'Experiencia', skills: 'Habilidades', education: 'Educación', contact: 'Contacto', hire: 'Contratar' },
    hero: {
      badge: 'Chófer Profesional',
      availability: 'Disponible para jornada parcial y completa',
      summary: 'Trayectoria ejemplar de 22 años sin accidentes en logística internacional. Precisión, fiabilidad y calma en entornos exigentes.',
      ctaContact: 'Contactar',
      ctaDownload: 'Descargar CV',
      facts: ['22+ Años Sin Accidentes', 'Cat. B, C, E, ADR', 'Sede en Suiza', 'DE, EN, IT, RO, FR, ES']
    },
    about: {
      title: 'Sobre mí',
      heading: 'Un socio fiable al volante',
      p1: 'Stefan Cristian es un profesional disciplinado con más de dos décadas de maestría en las carreteras internacionales. Une conocimiento mecánico con ejecución logística.',
      p2: 'Residente en Suiza desde 2020, está preparado para apoyar a empresas de transporte nacionales o internacionales con su seguridad comprobada.',
      definesTitle: 'Principios Profesionales',
      defines: ['22+ años de seguridad impecable', 'Precisión bajo presión operativa', 'Navegación experta y optimización de rutas', 'Profesionalidad de cara al cliente', 'Cuidado meticuloso del vehículo', 'Flexibilidad estratégica'],
      yearsLabel: 'Años de Excelencia'
    },
    experience: { 
      title: 'Experiencia Profesional', 
      subtitle: 'Dos décadas de experiencia en redes logísticas globales.',
      items: [
        { period: "02/2023 – 09/2023", position: "Chofer Cat. C", company: SHARED_COMPANIES.SELCO, location: "Londres (UK)", tasks: ["Transporte de materiales de construcción"] },
        { period: "08/2020 – 12/2022", position: "Chofer Cat. CE", company: SHARED_COMPANIES.MZ, location: "Lupfig (CH)", tasks: ["Entrega e instrucción a clientes sobre vehículos nuevos", "Recepción de vehículos en la sede", "Apoyo técnico en taller"] },
        { period: "01/2020 – 07/2020", position: "Chofer Cat. CE", company: SHARED_COMPANIES.DACHSER, location: "Regensdorf (CH)", tasks: ["Entrega profesional de productos pedidos", "Carga del vehículo según secuencia lógica", "Cumplimiento de estándares de calidad y GDP"] },
        { period: "06/2017 – 10/2019", position: "Chofer Cat. CE", company: SHARED_COMPANIES.BRAUNSHOFER, location: "Amstetten (AT)" },
        { period: "09/2014 – 04/2017", position: "Operador de vagones", company: SHARED_COMPANIES.LSW, location: "Meitingen (DE)" },
        { period: "08/2011 – 09/2014", position: "Chofer Cat. CE & gruista", company: SHARED_COMPANIES.BXR, location: "Augsburgo (DE)" },
        { period: "03/2008 – 06/2011", position: "Chofer Cat. CE", company: SHARED_COMPANIES.GRECCO, location: "Florencia (IT)" },
        { period: "08/2005 – 02/2008", position: "Chofer Cat. CE", company: SHARED_COMPANIES.ROSSI, location: "Allmendingen (IT)", tasks: ["Entregas a grandes clientes", "Diversas actividades auxiliares"] }
      ]
    },
    skills: { 
      title: 'Habilidades y Licencias', 
      subtitle: 'Competencia certificada para transporte pesado y logística.',
      categories: [
        { title: "Experiencia Técnica", skills: ["Conducción de camiones (Cat. CE)", "Carga y Descarga", "Operación de grúas (Cat. C)", "ADR Básico", "Planificación de rutas"] },
        { title: "Rasgos Profesionales", skills: ["Fiabilidad y Puntualidad", "Calma bajo presión", "Orientación al cliente", "Adaptabilidad", "Precisión responsable"] },
        { title: "Permisos y Activos", skills: ["Licencia de conducir B, C, E", "Grúas Cat. C", "Certificación ADR Básica", "Permiso B Suizo", "Vehículo propio disponible"] }
      ]
    },
    education: {
      title: 'Educación',
      subtitle: 'Sólida base técnica en mecánica automotriz.',
      mechanic: { title: 'Electricista y Mecánico Auto', school: 'G.S.A., Caransebes (RO)', desc: 'Formación especializada en sistemas eléctricos y mantenimiento.' },
      school: { title: 'Educación Primaria y Secundaria', location: 'Caransebes (RO)' }
    },
    languages: {
      title: 'Idiomas',
      subtitle: 'Versatilidad lingüística para logística internacional.',
      items: [
        { name: "Rumano", level: "Nativo" },
        { name: "Alemán", level: "Buen conocimiento" },
        { name: "Inglés", level: "Fluidez oral" },
        { name: "Italiano", level: "Buona comunicación" },
        { name: "Francés", level: "Conocimientos básicos" }
      ],
      levels: { native: 'Nativo', good: 'Buen conocimiento', spoken: 'Fluidez oral', comm: 'Buena comunicación', basic: 'Conocimientos básicos' }
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Disponible para asignaciones nacionales e internacionales.',
      infoTitle: 'Póngase en contacto',
      infoDesc: '¿Busca un chófer experimentado para su flota? Stefan está disponible para entrevistas.',
      whatsapp: 'Chat WhatsApp',
      formTitle: 'Enviar mensaje',
      labels: { name: 'Nombre completo', company: 'Empresa', email: 'Email', phone: 'Teléfono', message: '¿Cómo puedo ayudarle?' },
      submit: 'Enviar solicitud',
      availabilityNote: 'Disponible para asignaciones nacionales e internacionales.'
    }
  }
};