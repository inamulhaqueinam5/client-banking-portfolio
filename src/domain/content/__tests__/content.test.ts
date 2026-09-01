import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  getExecutiveProfile,
  getCareerTimeline,
  getTimelineFilters,
  getCompetencyMatrix,
  getCompetencyCategories,
  getCompetencyCategoryCounts,
  getCredentials,
  getCredentialCategories,
} from '../index';

describe('Domain Content Repository', () => {
  describe('getExecutiveProfile', () => {
    it('returns valid candidate profile with complete contact and metrics', () => {
      const profile = getExecutiveProfile();
      assert.equal(profile.name, 'Zannat Ara Nishat');
      assert.equal(profile.shortName, 'Z. A. Nishat');
      assert.equal(profile.institution, 'National Bank PLC');
      assert.equal(profile.contact.email, 'nishatzannatara@gmail.com');
      assert.equal(profile.contact.phone, '+8801927265191');
      assert.equal(profile.metrics.length, 3);
      assert.equal(profile.references.length, 2);
    });
  });

  describe('getCareerTimeline', () => {
    it('returns all roles by default or when department is All Roles', () => {
      const allRoles = getCareerTimeline();
      assert.equal(allRoles.length, 2);
      assert.equal(allRoles[0].isCurrent, true);
      assert.equal(allRoles[0].department, 'Foreign Trade & Export');
      assert.equal(allRoles[1].department, 'Cash Department');

      const allRolesExplicit = getCareerTimeline({ department: 'All Roles' });
      assert.equal(allRolesExplicit.length, 2);
    });

    it('filters roles accurately by department', () => {
      const ftRoles = getCareerTimeline({ department: 'Foreign Trade & Export' });
      assert.equal(ftRoles.length, 1);
      assert.equal(ftRoles[0].id, 'feo-export-mohakhali');
      assert.equal(ftRoles[0].milestones.length, 5);

      const cashRoles = getCareerTimeline({ department: 'Cash Department' });
      assert.equal(cashRoles.length, 1);
      assert.equal(cashRoles[0].id, 'jo-feo-cash-dept');
      assert.equal(cashRoles[0].milestones.length, 4);

      const emptyRoles = getCareerTimeline({ department: 'Nonexistent Department' });
      assert.equal(emptyRoles.length, 0);
    });

    it('returns valid timeline filters', () => {
      const filters = getTimelineFilters();
      assert.deepEqual(Array.from(filters), [
        'All Roles',
        'Foreign Trade & Export',
        'Cash Department',
      ]);
    });
  });

  describe('getCompetencyMatrix', () => {
    it('returns all competencies when no filter is provided', () => {
      const allSkills = getCompetencyMatrix();
      assert.equal(allSkills.length, 24);
    });

    it('filters competencies by category', () => {
      const bankingOps = getCompetencyMatrix({ category: 'Banking Operations' });
      assert.equal(bankingOps.length > 0, true);
      assert.equal(bankingOps.every((s) => s.category === 'Banking Operations'), true);

      const compliance = getCompetencyMatrix({ category: 'Compliance & AML/CFT' });
      assert.equal(compliance.length > 0, true);
      assert.equal(compliance.every((s) => s.category === 'Compliance & AML/CFT'), true);
    });

    it('filters competencies by accreditation flag', () => {
      const certifiedAll = getCompetencyMatrix({ accreditedOnly: true });
      assert.equal(certifiedAll.length > 0, true);
      assert.equal(certifiedAll.every((s) => Boolean(s.certification)), true);

      const certifiedCompliance = getCompetencyMatrix({
        category: 'Compliance & AML/CFT',
        accreditedOnly: true,
      });
      assert.equal(certifiedCompliance.every((s) => s.category === 'Compliance & AML/CFT' && Boolean(s.certification)), true);
    });

    it('calculates category counts matching total items', () => {
      const counts = getCompetencyCategoryCounts();
      assert.equal(counts.All, 24);
      const sum =
        counts['Banking Operations'] +
        counts['Compliance & AML/CFT'] +
        counts['Customer Service'] +
        counts['Core Systems'] +
        counts['Languages & Soft Skills'];
      assert.equal(sum, counts.All);
    });

    it('returns the category list', () => {
      const categories = getCompetencyCategories();
      assert.equal(categories.includes('All'), true);
      assert.equal(categories.includes('Banking Operations'), true);
      assert.equal(categories.includes('Compliance & AML/CFT'), true);
    });
  });

  describe('getCredentials', () => {
    it('returns all credentials when category is all or omitted', () => {
      const allCreds = getCredentials();
      assert.equal(allCreds.length, 6);

      const allCredsExplicit = getCredentials({ category: 'all' });
      assert.equal(allCredsExplicit.length, 6);
    });

    it('filters credentials by specific category', () => {
      const banking = getCredentials({ category: 'banking' });
      assert.equal(banking.length, 2);
      assert.equal(banking.every((c) => c.category === 'banking'), true);

      const academic = getCredentials({ category: 'academic' });
      assert.equal(academic.length, 2);
      assert.equal(academic.every((c) => c.category === 'academic'), true);

      const training = getCredentials({ category: 'training' });
      assert.equal(training.length, 2);
      assert.equal(training.every((c) => c.category === 'training'), true);
    });

    it('returns credential category tabs', () => {
      const tabs = getCredentialCategories();
      assert.equal(tabs.length, 4);
      assert.equal(tabs[0].id, 'all');
    });
  });
});
