import { CompetencyItem, SkillCategory } from '../types';

export const COMPETENCY_CATEGORIES: SkillCategory[] = [
  'All',
  'Banking Operations',
  'Compliance & AML/CFT',
  'Customer Service',
  'Core Systems',
  'Languages & Soft Skills',
];

export const COMPETENCY_ITEMS: CompetencyItem[] = [
  // 1. Banking Operations
  {
    id: 'ft-1',
    name: 'L/C Scrutiny & Settlement',
    category: 'Banking Operations',
    description:
      'Comprehensive examination of Letters of Credit (L/C) documents, shipping bills, and invoices in strict alignment with UCP 600 & ISBP standards.',
    proficiencyLabel: 'Mastery',
    proficiencyLevel: 98,
    iconKey: 'file-check',
    certification: 'ICCD Guidelines',
    keyHighlight: true,
  },
  {
    id: 'ft-2',
    name: 'Export Bill Negotiation',
    category: 'Banking Operations',
    description:
      'Expert negotiation and processing of export documents, discounting foreign bills, and minimizing foreign exchange credit risks.',
    proficiencyLabel: 'Expert',
    proficiencyLevel: 92,
    iconKey: 'trending-up',
  },
  {
    id: 'ft-3',
    name: 'Foreign Exchange Settlement',
    category: 'Banking Operations',
    description:
      'Managing multi-currency trade settlements, foreign currency clearing, and foreign exchange compliance under Bangladesh Bank regulations.',
    proficiencyLabel: 'Expert',
    proficiencyLevel: 94,
    iconKey: 'circle-dollar-sign',
    certification: 'Bangladesh Bank Compliance',
    keyHighlight: true,
  },
  {
    id: 'ft-4',
    name: 'ICCD Guidelines',
    category: 'Compliance & AML/CFT',
    description:
      'Direct operational adherence to International Chamber of Commerce (ICC) Banking Commission directives and trade finance frameworks.',
    proficiencyLabel: 'Mastery',
    proficiencyLevel: 96,
    iconKey: 'book-open-check',
    certification: 'ICCD Guidelines',
  },
  {
    id: 'ft-5',
    name: 'Trade Finance Documentation',
    category: 'Banking Operations',
    description:
      'Precision preparation and audit of EXP forms, Bills of Lading, Certificates of Origin, and import/export regulatory submissions.',
    proficiencyLabel: 'Advanced',
    proficiencyLevel: 90,
    iconKey: 'file-text',
  },

  // 2. Compliance & AML/CFT
  {
    id: 'rc-1',
    name: 'AML/CFT Screening',
    category: 'Compliance & AML/CFT',
    description:
      'Rigorous Know Your Customer (KYC) verification, sanction list screening, and anti-money laundering risk classification.',
    proficiencyLabel: 'Mastery',
    proficiencyLevel: 97,
    iconKey: 'shield-check',
    certification: 'Bangladesh Bank Compliance',
    keyHighlight: true,
  },
  {
    id: 'rc-2',
    name: 'Bangladesh Bank Circular Compliance',
    category: 'Compliance & AML/CFT',
    description:
      'Real-time interpretation and branch-wide enforcement of central bank monetary circulars, prudential guidelines, and policy shifts.',
    proficiencyLabel: 'Mastery',
    proficiencyLevel: 98,
    iconKey: 'building',
    certification: 'Bangladesh Bank Compliance',
    keyHighlight: true,
  },
  {
    id: 'rc-3',
    name: 'CTR/STR Reporting',
    category: 'Compliance & AML/CFT',
    description:
      'Systematic generation and submission of Cash Transaction Reports (CTR) and Suspicious Transaction Reports (STR) to BFIU.',
    proficiencyLabel: 'Expert',
    proficiencyLevel: 93,
    iconKey: 'alert-triangle',
    certification: 'AIBB',
  },
  {
    id: 'rc-4',
    name: 'Audit Preparation',
    category: 'Compliance & AML/CFT',
    description:
      'Leading branch audit readiness for Bangladesh Bank inspections, internal compliance reviews, and external financial audits.',
    proficiencyLabel: 'Expert',
    proficiencyLevel: 95,
    iconKey: 'clipboard-check',
    certification: 'JAIBB',
  },
  {
    id: 'rc-5',
    name: 'Risk Mitigation',
    category: 'Compliance & AML/CFT',
    description:
      'Proactive identification of operational vulnerabilities, cash variance prevention, and enforcement of internal control systems.',
    proficiencyLabel: 'Expert',
    proficiencyLevel: 91,
    iconKey: 'shield-alert',
  },

  // 3. Cash & Branch Operations
  {
    id: 'cb-1',
    name: 'Cash Management',
    category: 'Banking Operations',
    description:
      'End-to-end administration of daily branch cash flow, vault balance limits, teller dispatch, and cash liquidity optimization.',
    proficiencyLabel: 'Mastery',
    proficiencyLevel: 96,
    iconKey: 'landmark',
    keyHighlight: true,
  },
  {
    id: 'cb-2',
    name: 'Vault Balance Auditing',
    category: 'Banking Operations',
    description:
      'Strict physical cash counting, joint-custody vault security protocols, reserve verification, and daily balance sheet reconciliation.',
    proficiencyLabel: 'Expert',
    proficiencyLevel: 94,
    iconKey: 'lock',
    certification: 'JAIBB',
  },
  {
    id: 'cb-3',
    name: 'High-Volume Clearing',
    category: 'Banking Operations',
    description:
      'High-speed processing and verification of inter-bank checks, clearing house routines, and high-value financial instruments.',
    proficiencyLabel: 'Advanced',
    proficiencyLevel: 90,
    iconKey: 'refresh-cw',
  },
  {
    id: 'cb-4',
    name: 'Transaction Verification',
    category: 'Banking Operations',
    description:
      'Dual-signatory verification for high-value fund transfers, pay order issuance, demand drafts, and signature authentication.',
    proficiencyLabel: 'Mastery',
    proficiencyLevel: 95,
    iconKey: 'check-circle-2',
  },
  {
    id: 'cb-5',
    name: 'Customer Service Excellence',
    category: 'Customer Service',
    description:
      'Elevating client satisfaction through high-touch corporate account maintenance, prompt dispute resolution, and VIP service.',
    proficiencyLabel: 'Mastery',
    proficiencyLevel: 96,
    iconKey: 'user-check',
  },

  // 4. Core Systems
  {
    id: 'cs-1',
    name: 'Core Banking Software (CBS)',
    category: 'Core Systems',
    description:
      'Expert-level operation of enterprise CBS infrastructure for customer account management, general ledgers, and day-end batch processing.',
    proficiencyLabel: 'Mastery',
    proficiencyLevel: 97,
    iconKey: 'cpu',
    keyHighlight: true,
  },
  {
    id: 'cs-2',
    name: 'Electronic Fund Transfers (EFT)',
    category: 'Core Systems',
    description:
      'Execution and oversight of real-time electronic fund routing, electronic batch payments, and digital remittance channels.',
    proficiencyLabel: 'Expert',
    proficiencyLevel: 93,
    iconKey: 'zap',
  },
  {
    id: 'cs-3',
    name: 'SWIFT Operations',
    category: 'Core Systems',
    description:
      'Authoring, verifying, and routing SWIFT financial messages (MT103, MT700, MT707) for international trade and remittances.',
    proficiencyLabel: 'Expert',
    proficiencyLevel: 94,
    iconKey: 'network',
    certification: 'AIBB',
    keyHighlight: true,
  },
  {
    id: 'cs-4',
    name: 'Automated Clearing (BACPS/BEFTN)',
    category: 'Core Systems',
    description:
      'Daily clearing settlement operations via Bangladesh Automated Cheque Processing System (BACPS) and Electronic Funds Transfer Network (BEFTN).',
    proficiencyLabel: 'Mastery',
    proficiencyLevel: 96,
    iconKey: 'server',
    certification: 'Bangladesh Bank Compliance',
  },

  // 5. Languages & Soft Skills
  {
    id: 'ls-1',
    name: 'English Fluency (Professional)',
    category: 'Languages & Soft Skills',
    description:
      'Professional business English articulation for international trade correspondences, executive reporting, and cross-border transactions.',
    proficiencyLabel: 'Professional',
    proficiencyLevel: 95,
    iconKey: 'languages',
  },
  {
    id: 'ls-2',
    name: 'Bengali (Native)',
    category: 'Languages & Soft Skills',
    description:
      'Native verbal and written mastery for seamless client engagement, local regulatory documentation, and institutional communication.',
    proficiencyLabel: 'Native',
    proficiencyLevel: 100,
    iconKey: 'message-square',
  },
  {
    id: 'ls-3',
    name: 'Executive Communication',
    category: 'Languages & Soft Skills',
    description:
      'High-impact presentation skills, inter-departmental liaison, and corporate leadership communication across branch operations.',
    proficiencyLabel: 'Advanced',
    proficiencyLevel: 91,
    iconKey: 'users',
  },
  {
    id: 'ls-4',
    name: 'Problem Solving',
    category: 'Languages & Soft Skills',
    description:
      'Strategic resolution of complex trade discrepancies, compliance bottlenecks, and high-pressure operational challenges.',
    proficiencyLabel: 'Expert',
    proficiencyLevel: 94,
    iconKey: 'lightbulb',
  },
  {
    id: 'ls-5',
    name: 'Regulatory Auditing',
    category: 'Languages & Soft Skills',
    description:
      'Analytical auditing mindset for identifying process gaps, ensuring strict regulatory adherence, and enforcing operational integrity.',
    proficiencyLabel: 'Mastery',
    proficiencyLevel: 95,
    iconKey: 'badge-check',
    certification: 'JAIBB',
  },
];
