import { profile, activeSections, navItems, fullName, finalVercelAlias, publicationMetrics } from "../data/profile";

export { profile, activeSections, navItems, fullName, finalVercelAlias, publicationMetrics };

export const social = profile.social;

export const technicalSkills = profile.technicalSkills.filter((cat) => cat.skills.length > 0);
export const softSkills = profile.softSkills;
export const education = profile.education;
export const experience = profile.experience;
export const publications = profile.publications;
export const certifications = profile.certifications;
export const projects = profile.projects;

export const firstAuthorPublications = publications.filter((paper) => paper.role === "first-author");
export const coAuthorPublications = publications.filter((paper) => paper.role === "co-author");
