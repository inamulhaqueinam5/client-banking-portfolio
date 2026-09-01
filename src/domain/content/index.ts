import {
  CareerRole,
  CompetencyItem,
  CredentialCategory,
  CredentialCategoryTab,
  CredentialItem,
  ExecutiveProfile,
  SkillCategory,
} from '../types';
import { EXECUTIVE_PROFILE } from './profile';
import { CAREER_ROLES, TIMELINE_FILTERS } from './timeline';
import { COMPETENCY_CATEGORIES, COMPETENCY_ITEMS } from './competencies';
import { CREDENTIAL_CATEGORY_TABS, CREDENTIAL_ITEMS } from './credentials';

export * from '../types';
export { EXECUTIVE_PROFILE } from './profile';
export { CAREER_ROLES, TIMELINE_FILTERS } from './timeline';
export { COMPETENCY_CATEGORIES, COMPETENCY_ITEMS } from './competencies';
export { CREDENTIAL_CATEGORY_TABS, CREDENTIAL_ITEMS } from './credentials';

/**
 * Returns the canonical executive profile.
 */
export function getExecutiveProfile(): ExecutiveProfile {
  return EXECUTIVE_PROFILE;
}

/**
 * Returns career timeline roles, optionally filtered by department.
 */
export function getCareerTimeline(options?: {
  department?: (typeof TIMELINE_FILTERS)[number] | string;
}): CareerRole[] {
  if (!options || !options.department || options.department === 'All Roles') {
    return CAREER_ROLES;
  }
  return CAREER_ROLES.filter((role) => role.department === options.department);
}

/**
 * Returns available timeline filter labels.
 */
export function getTimelineFilters(): readonly string[] {
  return TIMELINE_FILTERS;
}

/**
 * Returns competency matrix items matching category and accreditation filters.
 */
export function getCompetencyMatrix(options?: {
  category?: SkillCategory;
  accreditedOnly?: boolean;
}): CompetencyItem[] {
  const category = options?.category ?? 'All';
  const accreditedOnly = options?.accreditedOnly ?? false;

  return COMPETENCY_ITEMS.filter((skill) => {
    const matchesCategory = category === 'All' || skill.category === category;
    const matchesAccreditation = !accreditedOnly || Boolean(skill.certification);
    return matchesCategory && matchesAccreditation;
  });
}

/**
 * Returns the list of all competency category tab names.
 */
export function getCompetencyCategories(): readonly SkillCategory[] {
  return COMPETENCY_CATEGORIES;
}

/**
 * Calculates item counts per competency category for filter badge counters.
 */
export function getCompetencyCategoryCounts(): Record<SkillCategory, number> {
  const counts: Record<SkillCategory, number> = {
    All: COMPETENCY_ITEMS.length,
    'Banking Operations': 0,
    'Compliance & AML/CFT': 0,
    'Customer Service': 0,
    'Core Systems': 0,
    'Languages & Soft Skills': 0,
  };

  COMPETENCY_ITEMS.forEach((skill) => {
    counts[skill.category] += 1;
  });

  return counts;
}

/**
 * Returns credentials, optionally filtered by credential category.
 */
export function getCredentials(options?: {
  category?: CredentialCategory;
}): CredentialItem[] {
  const category = options?.category ?? 'all';
  if (category === 'all') {
    return CREDENTIAL_ITEMS;
  }
  return CREDENTIAL_ITEMS.filter((item) => item.category === category);
}

/**
 * Returns credential tab definitions.
 */
export function getCredentialCategories(): readonly CredentialCategoryTab[] {
  return CREDENTIAL_CATEGORY_TABS;
}
