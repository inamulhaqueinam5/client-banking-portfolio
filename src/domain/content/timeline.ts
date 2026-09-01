import { CareerRole } from '../types';

export const CAREER_ROLES: CareerRole[] = [
  {
    id: 'feo-export-mohakhali',
    title: 'First Executive Officer & Export Officer (Foreign Trade)',
    department: 'Foreign Trade & Export',
    branch: 'Mohakhali Branch',
    company: 'National Bank PLC',
    period: 'Jul 2026 – Present',
    location: 'Mohakhali Branch, Dhaka',
    isCurrent: true,
    focusAreas: [
      'Export Operations & L/C Settlement',
      'Packing Credits & Trade Financing',
      'Trade Data Analytics & Decision Support',
      'Bangladesh Bank & ICCD Audit Governance',
      'Corporate Exporter & Shipping Relations',
    ],
    overview:
      'Directing foreign trade export operations at Mohakhali Branch, scrutinizing foreign exchange export bills, negotiating and disbursing packing credits, analyzing trade flow data for strategic decisions, and enforcing strict compliance with Bangladesh Bank, Head Office, and ICCD directives.',
    milestones: [
      {
        title: 'Export Operations and Settlement',
        description:
          'Scrutinize and negotiate foreign exchange export bills while ensuring timely realization of export proceeds in full compliance with trade procedures.',
        impactTag: 'Timely Proceeds Realization',
      },
      {
        title: 'Trade Credit and Documentation',
        description:
          'Process, calculate, and disburse packing credits, and issue necessary export related certificates to facilitate seamless exporter operations.',
        impactTag: 'Seamless Exporter Support',
      },
      {
        title: 'Data Analysis and Decision Support',
        description:
          'Analyze export data and resolve complex trade issues to support strategic and sensitive operational decision making.',
        impactTag: 'Strategic Decision Support',
      },
      {
        title: 'Regulatory Compliance and Reporting',
        description:
          'Prepare accurate export statements and maintain strict compliance with guidelines set by Bangladesh Bank, Head Office, and ICCD.',
        impactTag: 'Strict Central Bank Adherence',
      },
      {
        title: 'Stakeholder and Client Relations',
        description:
          'Maintain active correspondence with banks, exporters, shipping lines, and regulatory bodies while delivering exceptional customer service to branch exporters.',
        impactTag: 'High-Touch Client Relations',
      },
    ],
    keyMetrics: [
      { label: 'Trade Audit Compliance', value: '100% Clean' },
      { label: 'Proceeds Realization', value: 'Zero Discrepancy' },
      { label: 'Primary Focus', value: 'Foreign Trade & Export' },
    ],
  },
  {
    id: 'jo-feo-cash-dept',
    title: 'Junior Officer to First Executive Officer (Cash Department)',
    department: 'Cash Department',
    branch: 'Gulshan, Banani & Mohakhali Branches',
    company: 'National Bank PLC',
    period: 'Oct 2015 – Jul 2026',
    location: 'Gulshan, Banani & Mohakhali Branches, Dhaka',
    isCurrent: false,
    focusAreas: [
      'Cash Department Leadership & Operations',
      'Vault Balancing & Risk Mitigation',
      'AML / CFT Regulatory Screening',
      'High-Net-Worth Client Relations',
      'Core Banking Software & Staff Mentoring',
    ],
    overview:
      'Progressed over a decade across premier commercial branches (Gulshan, Banani, and Mohakhali), spearheading daily cash operations, high-volume teller transactions, vault balancing, and enforcing rigorous Anti Money Laundering (AML/CFT) standards.',
    milestones: [
      {
        title: 'Expert in Cash Operations',
        description:
          'Spearheaded all daily functions of the Cash Department, including high volume teller transactions, vault balancing, and risk mitigation, ensuring strict accuracy and compliance.',
        impactTag: 'Zero-Variance Vault Accuracy',
      },
      {
        title: 'Compliance and Risk Mitigation',
        description:
          'Upheld and implemented rigorous standards for Anti Money Laundering (AML) and Combating the Financing of Terrorism (CFT), vigilantly monitoring transactions to protect the bank\'s integrity.',
        impactTag: 'Institutional AML/CFT Protection',
      },
      {
        title: 'Customer Relationship Management',
        description:
          'Delivered exceptional customer service by resolving complex inquiries and maintaining strict confidentiality, successfully fostering client loyalty and trust.',
        impactTag: 'Client Loyalty & Trust',
      },
      {
        title: 'Operational Proficiency',
        description:
          'Highly proficient in core banking software and all teller functions, adapting seamlessly to different branch environments and mentoring junior staff on best practices.',
        impactTag: 'Core Systems & Mentorship',
      },
    ],
    keyMetrics: [
      { label: 'Career Progression', value: 'Junior Officer → FEO' },
      { label: 'Vault Reconciliation', value: 'Daily 100% Match' },
      { label: 'Institutional Tenure', value: '10+ Years Excellence' },
    ],
  },
];

export const TIMELINE_FILTERS = [
  'All Roles',
  'Foreign Trade & Export',
  'Cash Department',
] as const;
