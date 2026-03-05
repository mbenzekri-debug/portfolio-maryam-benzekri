/**
 * Central student profile data for the whole portfolio.
 * This is the only file to edit for content updates.
 */

export type NavItem = {
  id: string;
  label: string;
  icon: IconName;
};

export type IconName =
  | "home"
  | "user"
  | "code"
  | "graduation"
  | "briefcase"
  | "book"
  | "badge"
  | "folder"
  | "mail";

export type PersonalInfo = {
  firstName: string;
  lastName: string;
  title: string;
  subtitle: string;
  availability: string;
  location: string;
  avatar: string;
  emails: string[];
  phone?: string;
  cvUrl?: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type TechnicalSkillCategory = {
  name: string;
  icon: "code" | "database" | "globe" | "server" | "tool" | "cpu";
  skills: string[];
};

export type SoftSkill = {
  icon: "users" | "message" | "target" | "sparkles";
  name: string;
  description: string;
};

export type EducationItem = {
  period: string;
  degree: string;
  field: string;
  institution: string;
  institutionUrl?: string;
  description: string;
};

export type ExperienceItem = {
  period: string;
  role: string;
  organization: string;
  organizationUrl?: string;
  description: string;
  current?: boolean;
};

export type PublicationRole = "first-author" | "co-author";

export type PublicationItem = {
  year: number;
  title: string;
  url?: string;
  journal: string;
  authors: string[];
  doi?: string;
  role: PublicationRole;
};

export type CertificationItem = {
  title: string;
  issuer: string;
  issuerUrl?: string;
  date: string;
  skills: string[];
  icon: "award" | "book" | "graduation";
};

export type ProjectItem = {
  title: string;
  url?: string;
  description: string;
  tags: string[];
};

export type SocialItem = {
  label: string;
  url: string;
  icon:
    | "github"
    | "linkedin"
    | "twitter"
    | "globe"
    | "scholar"
    | "orcid"
    | "researchgate"
    | "mail";
};

export type AcademicProfiles = {
  scholar?: string;
  orcid?: string;
  researchGate?: string;
  scopus?: string;
};

export const profile = {
  personal: {
    firstName: "Maryam",
    lastName: "Benzekri",
    title: "Étudiante en Ingénierie Logicielle (1ère année)",
    subtitle: "Passionnée par le développement logiciel et la création de projets web modernes",
    availability: "Disponible pour un stage",
    location: "Maroc",
    avatar: "https://avatars.githubusercontent.com/u/254163975?v=4",
    emails: ["m.benzekri@esisa.ac.ma"],
    phone: "",
    cvUrl: ""
  } satisfies PersonalInfo,

  about: [
    "Je suis Maryam Benzekri, étudiante en ingénierie logicielle en première année, avec une forte motivation pour construire des applications utiles et bien conçues.",
    "Je développe progressivement mes compétences en programmation, architecture logicielle et développement web moderne, avec un intérêt particulier pour les projets concrets.",
    "Je recherche des opportunités de stage et de collaboration pour apprendre en continu, travailler en équipe et livrer des solutions professionnelles."
  ],

  stats: [
    { label: "Projets", value: "1" },
    { label: "Technologies", value: "8" },
    { label: "Certifications", value: "0" },
    { label: "Années d'études", value: "1" }
  ] satisfies Stat[],

  technicalSkills: [
    {
      name: "Programming",
      icon: "code",
      skills: ["TypeScript", "JavaScript", "HTML", "CSS"]
    },
    {
      name: "Frameworks",
      icon: "globe",
      skills: ["Astro"]
    },
    {
      name: "Tools & Deployment",
      icon: "tool",
      skills: ["Git", "GitHub", "Vercel"]
    }
  ] satisfies TechnicalSkillCategory[],

  softSkills: [] as SoftSkill[],

  education: [] as EducationItem[],

  experience: [] as ExperienceItem[],

  publications: [] as PublicationItem[],

  certifications: [] as CertificationItem[],

  projects: [
    {
      title: "Portfolio Maryam Benzekri",
      url: "https://github.com/mbenzekri-debug/portfolio-maryam-benzekri",
      description:
        "Portfolio personnel moderne développé avec Astro et déployé sur Vercel, avec sections dynamiques pilotées par un fichier TypeScript centralisé.",
      tags: ["Astro", "TypeScript", "CSS", "Vercel", "GitHub"]
    }
  ] as ProjectItem[],

  social: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/maryam-benzekri-8069b1398?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      icon: "linkedin"
    },
    {
      label: "GitHub",
      url: "https://github.com/mbenzekri-debug",
      icon: "github"
    },
    {
      label: "Email",
      url: "mailto:m.benzekri@esisa.ac.ma",
      icon: "mail"
    }
  ] as SocialItem[],

  academicProfiles: {
    scholar: "",
    orcid: "",
    researchGate: "",
    scopus: ""
  } as AcademicProfiles
};

const hasItems = <T>(arr: T[] | undefined): boolean => Array.isArray(arr) && arr.length > 0;

export const activeSections = {
  hero: true,
  about: hasItems(profile.about),
  skills:
    profile.technicalSkills.some((category) => category.skills.length > 0) ||
    hasItems(profile.softSkills),
  education: hasItems(profile.education),
  experience: hasItems(profile.experience),
  publications: hasItems(profile.publications),
  certifications: hasItems(profile.certifications),
  projects: hasItems(profile.projects),
  contact: true
};

const navConfig: Array<{ id: keyof typeof activeSections; label: string; icon: IconName }> = [
  { id: "hero", label: "Accueil", icon: "home" },
  { id: "about", label: "À propos", icon: "user" },
  { id: "skills", label: "Compétences", icon: "code" },
  { id: "education", label: "Éducation", icon: "graduation" },
  { id: "experience", label: "Expérience", icon: "briefcase" },
  { id: "publications", label: "Publications", icon: "book" },
  { id: "certifications", label: "Certifications", icon: "badge" },
  { id: "projects", label: "Projets", icon: "folder" },
  { id: "contact", label: "Contact", icon: "mail" }
];

export const navItems: NavItem[] = navConfig
  .filter((item) => activeSections[item.id])
  .map(({ id, label, icon }) => ({ id, label, icon }));

export const fullName = `${profile.personal.firstName} ${profile.personal.lastName}`.trim();

export const profileSlug = `${profile.personal.firstName}-${profile.personal.lastName}`
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, "")
  .trim()
  .replace(/\s+/g, "-");

export const finalVercelAlias = `portfolio-${profileSlug || "prenom-nom"}.vercel.app`;

export const publicationMetrics = {
  totalPapers: profile.publications.length,
  firstAuthor: profile.publications.filter((paper) => paper.role === "first-author").length,
  coAuthor: profile.publications.filter((paper) => paper.role === "co-author").length,
  citations: "N/A"
};
