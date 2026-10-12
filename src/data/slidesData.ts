export interface SlideItem {
  id: number;
  section: string;
  badge: string;
  title: string;
  subtitle: string;
  iconName: string;
  presenterNotes: string[];
}

export const SLIDES_DATA: SlideItem[] = [
  {
    id: 1,
    section: "Section A: Introduction & Vision",
    badge: "Executive Overview",
    title: "Hospital Management Information System",
    subtitle: "One Integrated Platform. Every Hospital Workflow. Smarter Healthcare.",
    iconName: "Building2",
    presenterNotes: [
      "Welcome hospital leadership, board members, and clinical department heads.",
      "Today we demonstrate our next-generation Hospital Management Information System (HMIS).",
      "Notice how the entire hospital ecosystem—clinical, operational, diagnostic, and financial—unifies into a single responsive, interoperable hub.",
      "The presentation is interactive: we will walk through clinical workflows, department handoffs, and live governance architecture."
    ]
  },
  {
    id: 2,
    section: "Section A: Introduction & Vision",
    badge: "Strategic Vision",
    title: "The Vision: Connected Healthcare Ecosystem",
    subtitle: "Eliminating silos between doctors, nurses, patients, diagnostics, and management.",
    iconName: "Compass",
    presenterNotes: [
      "Traditional hospitals struggle with isolated legacy silos: paper charts in wards, separate software in pharmacy, disconnected lab analyzers.",
      "Our HMIS connects every stakeholder into a singular, real-time feedback loop.",
      "Doctors receive instant abnormal lab alerts; nurses see digital orders instantly; billing synchronizes automatically upon medication dispensing.",
      "Highlight the 6 key stakeholder lenses: Patients, Clinicians, Nursing Staff, Operations, Pharmacy, and Executive Leadership."
    ]
  },
  {
    id: 3,
    section: "Section A: Introduction & Vision",
    badge: "Value Proposition",
    title: "Key Qualitative Operational Benefits",
    subtitle: "Driving clinical precision, patient safety, financial integrity, and auditability.",
    iconName: "Award",
    presenterNotes: [
      "Emphasize qualitative clinical safety: zero illegible hand-written prescriptions, automated drug-allergy contraindication checks.",
      "Revenue leakage prevention: no diagnostic test or consumable is consumed without an automated ledger entry.",
      "Regulatory audit readiness: every click, record access, and modification is permanently sealed in an immutable audit trail.",
      "Patient satisfaction: reduced waiting times, SMS token notifications, and unified discharge summaries."
    ]
  },
  {
    id: 4,
    section: "Section B: System Architecture",
    badge: "Enterprise Tech Stack",
    title: "Complete 6-Layer HMIS Architecture",
    subtitle: "Modular, scalable, enterprise-grade architecture engineered for 99.99% availability.",
    iconName: "Layers",
    presenterNotes: [
      "Walk the client's Chief Technology Officer (CTO) through the 6 decoupled architectural layers.",
      "1. Presentation Layer: Responsive web desktop & mobile tablets for bedside rounds.",
      "2. Application Layer: Microservice-ready clinical, billing, and scheduling business logic.",
      "3. Workflow Layer: Orchestrates multi-department handoffs (e.g. ED to ICU transfer).",
      "4. Data Layer: High-performance relational database with partitioned audit archives.",
      "5. Integration Layer: HL7, FHIR, DICOM PACS, barcode scanners, and payment gateways.",
      "6. Infrastructure Layer: Cloud or on-premises deployment with redundant disaster recovery."
    ]
  },
  {
    id: 5,
    section: "Section B: System Architecture",
    badge: "Patient Journey",
    title: "End-to-End Hospital Patient Workflow",
    subtitle: "Visualizing the longitudinal patient flow from first contact to post-discharge care.",
    iconName: "GitCommit",
    presenterNotes: [
      "Illustrate how a patient transitions across the continuum of care without duplicate data entry.",
      "Point out the 8 sequential milestones: Registration -> Appointment -> OPD Consultation -> Diagnostic Orders -> Billing -> IPD Admission -> Treatment & Nursing -> Discharge.",
      "Highlight that not every patient touches every department; the workflow adapts dynamically whether it is a 15-minute OPD visit or a 5-day surgical admission."
    ]
  },
  {
    id: 6,
    section: "Section C: Hospital Organization & Access",
    badge: "Governance & Setup",
    title: "Hospital Master Configuration",
    subtitle: "Centralized master governance ensuring institutional consistency across all departments.",
    iconName: "Database",
    presenterNotes: [
      "Clean master data is the prerequisite for flawless hospital operations.",
      "Demonstrate master categories: Facility & Branch Masters, Department Hierarchy, Doctor Specialties, Tariff Packages, Formulary & Item Codes, Bed/Ward Classes.",
      "Changes to tariffs or doctor consultation fees propagate instantly with versioning and date-effective rules."
    ]
  },
  {
    id: 7,
    section: "Section C: Hospital Organization & Access",
    badge: "Multi-Tenancy",
    title: "Multi-Branch Hospital Management",
    subtitle: "Unified central oversight with strict branch-level operational isolation.",
    iconName: "Network",
    presenterNotes: [
      "Critical for hospital chains, healthcare groups, and multi-facility medical networks.",
      "Headquarters has consolidated visibility: group revenue, bed occupancy, inter-branch stock transfers.",
      "Branch-level isolation ensures staff at City Hospital cannot view patients or billing records from Metro Campus unless explicitly granted cross-branch privileges."
    ]
  },
  {
    id: 8,
    section: "Section C: Hospital Organization & Access",
    badge: "Access Governance",
    title: "Role-Based Access Control (RBAC)",
    subtitle: "Granular least-privilege security matrix tailored for 13+ healthcare roles.",
    iconName: "ShieldCheck",
    presenterNotes: [
      "Demonstrate our granular permissions model: Super Admin, Medical Director, Doctor, Nurse, Receptionist, Cashier, Pharmacist, Lab Tech, Radiologist, MRD, HR, Inventory, and Auditor.",
      "Permissions operate at function level (View, Create, Edit, Approve, Dispense, Export) and data-scope level (My Ward vs Entire Branch).",
      "Emphasize strict compliance with medical confidentiality guidelines."
    ]
  },
  {
    id: 9,
    section: "Section D: Patient Care & Clinical Operations",
    badge: "Digital Identity",
    title: "Patient Registration & Longitudinal EHR",
    subtitle: "A unified Unique Hospital ID (UHID) creating a lifetime electronic health record.",
    iconName: "UserCheck",
    presenterNotes: [
      "Show how patient duplicate entries are eliminated via smart National ID, Phone, and biometric cross-matching.",
      "Showcase the 360° patient summary: vital signs history, documented drug allergies, chronic conditions, past admissions, and diagnostic reports.",
      "All medical notes are time-stamped and electronically signed by credentialed clinical personnel."
    ]
  },
  {
    id: 10,
    section: "Section D: Patient Care & Clinical Operations",
    badge: "Front Desk & Flow",
    title: "Appointment & Digital Queue Management",
    subtitle: "Optimizing patient flow, doctor rosters, and waiting room experience.",
    iconName: "CalendarClock",
    presenterNotes: [
      "Explain multi-channel booking: walk-in tokens, call center schedules, and patient portal reservations.",
      "Dynamic doctor roster: slot allocation, break schedules, leave overrides, and emergency slot reserves.",
      "OPD Token Display displays real-time queue status on waiting room digital screens, cutting perceived wait times and front-desk friction."
    ]
  },
  {
    id: 11,
    section: "Section D: Patient Care & Clinical Operations",
    badge: "Critical Care",
    title: "Emergency Department & Triage Protocol",
    subtitle: "Rapid-response triage, instant trauma registration, and life-critical escalation.",
    iconName: "Flame",
    presenterNotes: [
      "Emergency workflows cannot wait for 15-minute standard registration forms.",
      "Our Rapid Emergency Registration creates an emergency token in under 15 seconds.",
      "Standard 4-level triage color classification: Red (Resuscitation), Orange (Emergent), Yellow (Urgent), Green (Non-Urgent).",
      "Auto-alerts notify the Trauma, Anesthesia, and Surgical teams immediately when a Red triage is logged."
    ]
  },
  {
    id: 12,
    section: "Section D: Patient Care & Clinical Operations",
    badge: "Outpatient Care",
    title: "OPD: Doctor Consultation Desk",
    subtitle: "Intuitive clinical documentation, SOAP notes, ICD-10 diagnostics, and e-Prescriptions.",
    iconName: "Stethoscope",
    presenterNotes: [
      "Demonstrate the doctor-friendly workstation designed to minimize screen time and maximize patient gaze.",
      "Smart templates for specialties (Cardiology, Pediatrics, Orthopedics, Ophthalmology).",
      "Integrated ICD-10 code search, dosage calculators, and 1-click requisition for diagnostics.",
      "Electronic prescriptions dispatch directly to the hospital pharmacy dispensary before the patient leaves the consult room."
    ]
  },
  {
    id: 13,
    section: "Section D: Patient Care & Clinical Operations",
    badge: "Inpatient Journey",
    title: "IPD: Inpatient Department Management",
    subtitle: "Seamless admission processing, daily clinical rounds, care plans, and discharge.",
    iconName: "BedDouble",
    presenterNotes: [
      "Explain the IPD workflow: Admission Request -> Bed Assignment -> Primary Consultant Assignment -> Daily Doctor Rounds & Progress Notes -> Nursing Handover -> Discharge Summary.",
      "Automated daily charge postings (bed charges, nursing fees, doctor visit charges) eliminate manual billing omissions.",
      "Discharge planning begins on day of admission, streamlining TPA insurance clearance."
    ]
  },
  {
    id: 14,
    section: "Section D: Patient Care & Clinical Operations",
    badge: "Bed Logistics",
    title: "Interactive Bed & Ward Management",
    subtitle: "Real-time visual bed census, occupancy analytics, and housekeeping statuses.",
    iconName: "LayoutGrid",
    presenterNotes: [
      "This is one of the most visual operational screens in hospital administration.",
      "Color-coded visual bed map: Available (Green), Occupied (Blue), Reserved (Amber), Cleaning/Sanitization (Purple), Maintenance (Red).",
      "Clicking any bed reveals patient name, admitting doctor, admission date, expected length of stay (ELOS), and current nursing station."
    ]
  },
  {
    id: 15,
    section: "Section D: Patient Care & Clinical Operations",
    badge: "Nursing Informatics",
    title: "Clinical Nursing Station & e-MAR",
    subtitle: "Digital vitals charting, medication administration records, and shift handovers.",
    iconName: "HeartPulse",
    presenterNotes: [
      "Nurses spend up to 40% of their shift on paperwork; our station cuts documentation time in half.",
      "Electronic Medication Administration Record (e-MAR): barcode verification at bedside ensures Right Patient, Right Drug, Right Dose, Right Route, Right Time.",
      "Dynamic vitals charting with automatic Early Warning Score (EWS) triggers for deteriorating patients."
    ]
  },
  {
    id: 16,
    section: "Section E: Diagnostics & Support Services",
    badge: "Laboratory LIS",
    title: "Laboratory Information System (LIS)",
    subtitle: "Bidirectional analyzer interfacing, barcode specimen tracking, and critical flags.",
    iconName: "FlaskConical",
    presenterNotes: [
      "Walk through the complete specimen journey: Test Order -> Phlebotomy Barcode Generation -> Analyzer Ingestion -> Auto-validation -> Pathologist Digital Sign-off -> Instant EHR Notification.",
      "Panic/Critical Value alert system automatically notifies the treating doctor's phone or desktop if a potassium or cardiac enzyme exceeds panic thresholds.",
      "Bidirectional interfacing eliminates manual transcription errors from biochemistry and hematology analyzers."
    ]
  },
  {
    id: 17,
    section: "Section E: Diagnostics & Support Services",
    badge: "Imaging RIS/PACS",
    title: "Radiology Information System (RIS & PACS)",
    subtitle: "Modality scheduling, DICOM image integration, and structured radiological reporting.",
    iconName: "Scan",
    presenterNotes: [
      "Radiology workflow: Modality Booking (X-Ray, CT, MRI, USG) -> Patient Arrival -> Technologist Study Complete -> PACS DICOM Storage -> Radiologist Reporting.",
      "Web-based zero-footprint DICOM viewer allows doctors to view cross-sectional imaging and scans directly within the patient's EHR.",
      "Structured speech-to-text and pre-filled macro templates accelerate radiologist report turnaround."
    ]
  },
  {
    id: 18,
    section: "Section E: Diagnostics & Support Services",
    badge: "Blood Banking",
    title: "Blood Bank Management System",
    subtitle: "Donor recruitment, component separation, cross-matching, and cold-chain integrity.",
    iconName: "Droplets",
    presenterNotes: [
      "Blood banking is heavily regulated and requires zero margin for error.",
      "Module tracks: Donor Health Screening -> Donation Records -> Component Separation (PRBC, FFP, Platelets, Cryo) -> Serology Testing -> Cold-Chain Storage.",
      "Compatibility cross-matching prevents ABO/Rh mismatch transfusions; full barcoded traceability ensures batch recall capability."
    ]
  },
  {
    id: 19,
    section: "Section F: Pharmacy, Inventory & Finance",
    badge: "Pharmacy & Formulary",
    title: "Pharmacy & Inventory Control",
    subtitle: "Batch/expiry FEFO dispensing, automated reorder triggers, and stock traceability.",
    iconName: "Pill",
    presenterNotes: [
      "Direct integration with doctor's e-Prescriptions: pharmacy staff can immediately view and prepare the prescription.",
      "Strict FEFO (First-Expiry-First-Out) dispensing prevents drug obsolescence and financial write-offs.",
      "Automated stock level reorder alerts, supplier purchase order generation, Goods Receipt Note (GRN) verification, and central-to-ward indenting."
    ]
  },
  {
    id: 20,
    section: "Section F: Pharmacy, Inventory & Finance",
    badge: "Revenue Cycle RCM",
    title: "Billing, Insurance & TPA Claims",
    subtitle: "Automated charge aggregation, cashless insurance pre-auth, and split-billing.",
    iconName: "Receipt",
    presenterNotes: [
      "Eliminate end-of-stay billing bottlenecks and forgotten unbilled consumables.",
      "Every syringe, medicine, bed-day, and lab test automatically posts to the patient's running ledger.",
      "TPA & Insurance Module: pre-authorization documentation, policy deduction calculations, cashless claim tracking, and patient co-pay split billing."
    ]
  },
  {
    id: 21,
    section: "Section G: People, Records & Management",
    badge: "Human Capital",
    title: "Healthcare HR & Staff Roster",
    subtitle: "Physician credentialing, multi-shift duty rosters, and department scheduling.",
    iconName: "Users",
    presenterNotes: [
      "Hospital operations run 24/7/365 across rotational shifts.",
      "Our HR engine handles clinical rosters: Shift scheduling, on-call specialist designations, and biometric attendance sync.",
      "Credentialing tracker flags upcoming medical license renewals, BLS/ACLS certification expirations, and malpractice insurance renewals."
    ]
  },
  {
    id: 22,
    section: "Section G: People, Records & Management",
    badge: "Health Informatics",
    title: "Medical Records Department (MRD)",
    subtitle: "ICD-10/ICD-11 diagnostic coding, medico-legal indexing, and digital archival.",
    iconName: "FileSpreadsheet",
    presenterNotes: [
      "MRD manages legal compliance, medical record archival, and epidemiology reporting.",
      "Features: Comprehensive ICD-10 diagnostic indexing, procedure coding, Medico-Legal Case (MLC) tracking, birth and death registry filing.",
      "Digital document archival ensures paper charts, physical consents, and historical records can be retrieved within seconds."
    ]
  },
  {
    id: 23,
    section: "Section G: People, Records & Management",
    badge: "Executive Analytics",
    title: "Executive MIS & Business Intelligence",
    subtitle: "Interactive dashboards for Bed Occupancy, ALOS, Revenue, and Clinical TAT.",
    iconName: "BarChart3",
    presenterNotes: [
      "This slide is tailored for hospital owners, CFOs, and managing directors.",
      "Live operational KPIs: Bed Occupancy Rate (%), Average Length of Stay (ALOS), Emergency Turnaround Time, Daily Gross & Net Revenue.",
      "Interactive drill-downs allow leadership to compare performance across departments, specialties, and branches."
    ]
  },
  {
    id: 24,
    section: "Section H: Administration, Security & Technology",
    badge: "Command Center",
    title: "Administrator Control Center",
    subtitle: "Global parameter management, live system diagnostics, and tenant administration.",
    iconName: "Sliders",
    presenterNotes: [
      "Demonstrate the centralized IT and operational control cockpit.",
      "Administrators can configure hospital policies: token display rules, password rotation intervals, discount approval thresholds, and automated backup schedules.",
      "Real-time health indicators monitor database connections, background print spoolers, and interface status."
    ]
  },
  {
    id: 25,
    section: "Section H: Administration, Security & Technology",
    badge: "Cybersecurity & Audit",
    title: "Security, Audit Trails & Compliance",
    subtitle: "Immutable event logging, field-level encryption, and healthcare privacy safeguards.",
    iconName: "Lock",
    presenterNotes: [
      "Security is non-negotiable in healthcare.",
      "Explain our multi-tiered defense: TLS 1.3 encryption in transit, AES-256 encryption at rest, and zero-trust authentication.",
      "Immutable Audit Log captures: User ID, Timestamp, Patient Record Accessed, Action (View/Edit/Delete/Print/Export), and IP address for forensic compliance."
    ]
  },
  {
    id: 26,
    section: "Section H: Administration, Security & Technology",
    badge: "High Availability",
    title: "System Reliability & Disaster Recovery",
    subtitle: "Engineered for 99.99% uptime with automated database failover and instant backups.",
    iconName: "Server",
    presenterNotes: [
      "Hospital operations cannot tolerate unplanned system downtime.",
      "Architecture highlights: Clustered database failover, Redis distributed caching, offline-tolerant reception workstations, and automated geo-redundant backups.",
      "Disaster recovery objectives: RPO (Recovery Point Objective) under 1 minute; RTO (Recovery Time Objective) under 15 minutes."
    ]
  },
  {
    id: 27,
    section: "Section I: Final Presentation",
    badge: "Master Topology",
    title: "Complete Hospital Workflow Mega-Map",
    subtitle: "Interactive macro architecture uniting all 16 clinical, diagnostic, and financial nodes.",
    iconName: "Maximize2",
    presenterNotes: [
      "This is the master interactive topology: click any module to see its upstream inputs, downstream outputs, and connected stakeholders.",
      "Illustrate how Patient Registration feeds OPD and Emergency; Doctor Orders feed Pharmacy and Labs; Nursing and Ward updates feed Billing; and all activities feed Executive MIS.",
      "Invite the client to select specific departments they wish to discuss in greater depth."
    ]
  },
  {
    id: 28,
    section: "Section I: Final Presentation",
    badge: "Conclusion & Next Steps",
    title: "Why Choose Our HMIS? & Schedule Demo",
    subtitle: "Transforming your healthcare institution with an integrated, intelligent platform.",
    iconName: "Sparkles",
    presenterNotes: [
      "Summarize the 4 core pillars: Clinical Excellence, Operational Efficiency, Financial Transparency, and Future-Proof Scalability.",
      "Highlight our phased implementation roadmap: Discovery & Master Data -> Pilot Ward Deployment -> Enterprise Go-Live -> 24/7 Clinical Support.",
      "Click the 'Schedule Live Walkthrough' button to trigger the interactive celebration and capture contact details."
    ]
  }
];
