/**
 * Domain types & models for the Executive Banking Portfolio.
 * Strictly aligned with CONTEXT.md domain vocabulary.
 */

export interface KeyMetric {
  label: string;
  value: string;
  detail?: string;
  accentGlow?: string;
  iconKey?: string;
  badgeText?: string;
  iconColor?: string;
  badgeColor?: string;
}

export interface OperationalMilestone {
  title: string;
  description: string;
  impactTag?: string;
}

export interface CareerRole {
  id: string;
  title: string;
  department: string;
  branch: string;
  company: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  focusAreas: string[];
  overview: string;
  milestones: OperationalMilestone[];
  keyMetrics: KeyMetric[];
}

export type SkillCategory =
  | 'All'
  | 'Banking Operations'
  | 'Compliance & AML/CFT'
  | 'Customer Service'
  | 'Core Systems'
  | 'Languages & Soft Skills';

export type CompetencyProficiency =
  | 'Mastery'
  | 'Expert'
  | 'Advanced'
  | 'Professional'
  | 'Native';

export type RegulatoryAccreditation =
  | 'Bangladesh Bank Compliance'
  | 'JAIBB'
  | 'AIBB'
  | 'ICCD Guidelines';

export interface CompetencyItem {
  id: string;
  name: string;
  category: Exclude<SkillCategory, 'All'>;
  description: string;
  proficiencyLabel: CompetencyProficiency;
  proficiencyLevel: number;
  iconKey: string;
  certification?: RegulatoryAccreditation;
  keyHighlight?: boolean;
}

export type CredentialCategory =
  | 'all'
  | 'banking'
  | 'academic'
  | 'training';

export interface CredentialCategoryTab {
  id: CredentialCategory;
  label: string;
}

export interface CredentialItem {
  id: string;
  code: string;
  title: string;
  organization: string;
  completionDate: string;
  category: Exclude<CredentialCategory, 'all'>;
  categoryLabel: string;
  type: string;
  description: string;
  keyModules: string[];
  verificationBadge: string;
  verifiedStatus: 'Completed' | 'Certified' | 'Acquired';
  iconType: 'award' | 'graduation' | 'shield' | 'building' | 'book';
}

export interface ProfessionalReference {
  id: string;
  name: string;
  role: string;
  organization: string;
  categoryTag: string;
  categoryLabel: string;
  note?: string;
  iconKey?: string;
}

export interface ExecutiveProfile {
  name: string;
  shortName: string;
  title: string;
  institution: string;
  statusBadge: {
    text: string;
    subtext: string;
  };
  summary: {
    tenureYears: string;
    institution: string;
    branches: string[];
    specializations: string[];
    governanceFrameworks: string[];
    fullText: string;
  };
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  resumePdfPath: string;
  resumeDownloadFilename: string;
  metrics: KeyMetric[];
  references: ProfessionalReference[];
}
