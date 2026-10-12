Here is a professional, detailed prompt you can copy into your AI coding tool. It instructs the AI to build a PowerPoint-style interactive HMIS presentation website using the claymorphism design from your uploaded reference image, with 3D illustrations, animations, architecture maps, and detailed explanations of every hospital module.

# PROJECT: PREMIUM INTERACTIVE HMIS PRESENTATION WEBSITE

## 1. Project Objective

Build a premium, fully responsive, interactive website that presents my Hospital Management Information System (HMIS) to professional clients, doctors, hospital owners, medical directors, administrators, and hospital management teams.

The website must look and behave like a **high-end PowerPoint presentation converted into an interactive website**. It is not a conventional business website, dashboard, or landing page.

When I open the website during a client meeting, I should be able to present the entire HMIS system like a professional product demonstration, moving from one presentation slide to another while explaining the architecture, workflows, modules, security, and business benefits.

Use the uploaded reference image as the primary visual inspiration.

## 2. Design System: Claymorphism + Premium 3D

Follow the visual direction of the reference image:

- Soft pastel gradients using lavender, sky blue, peach, pink, mint, and white.
- Claymorphism UI with rounded, inflated, soft 3D surfaces.
- Soft ambient shadows, inner shadows, subtle highlights, and realistic depth.
- Floating 3D vector-style illustrations of hospitals, doctors, medical equipment, computers, documents, charts, beds, medicines, and medical workflows.
- Glass-like floating panels combined with clay-style interface elements.
- Smooth transitions, micro-interactions, floating animations, and parallax effects.
- Premium typography, excellent spacing, and strong visual hierarchy.
- Clean, sophisticated, enterprise-quality design suitable for healthcare professionals.

Avoid a generic Bootstrap template, boring tables, plain cards, excessive gradients, cluttered layouts, and typical admin dashboard designs.

Use professional medical iconography and high-quality vector illustrations. Maintain readability and a consistent visual language throughout the presentation.

## 3. PowerPoint-Style Presentation Experience

The entire website must behave like a full-screen presentation.

### Presentation controls

Implement:

- Full-screen 16:9 slide layouts.
- Next and Previous slide controls.
- Keyboard navigation using the left and right arrow keys.
- Spacebar to advance slides.
- A slide progress indicator.
- Slide numbers, such as 01/24.
- A clickable presentation overview.
- Smooth slide transitions.
- Full-screen mode.
- A presenter-friendly navigation bar.
- A table of contents for jumping directly to a module.
- Responsive layouts for laptops, projectors, tablets, and mobile devices.
- Optional presenter notes containing explanations for each module.
- A final Thank You / Contact slide.

Every slide must have a clear heading, concise explanatory content, a meaningful illustration, and a visual representation of the feature being explained.

Do not put the entire presentation on one long scrolling page. The default experience must be slide-based, like PowerPoint.

## 4. Master CSS and Component-Based Architecture

Build a reusable design system before developing individual slides.

### Master CSS

Create a centralized global stylesheet containing:

- Color tokens and gradient definitions.
- Typography scales.
- Spacing and sizing variables.
- Claymorphism surface styles.
- Shadow and depth presets.
- Border radius tokens.
- Animation timing and easing variables.
- Responsive breakpoints.
- Slide layout rules.
- Button, icon, and navigation styles.
- Light and dark presentation themes, if appropriate.
- Accessibility and reduced-motion support.

Suggested CSS structure:

- `styles/tokens.css`
- `styles/global.css`
- `styles/typography.css`
- `styles/claymorphism.css`
- `styles/animations.css`
- `styles/slides.css`
- `styles/responsive.css`

Avoid duplicated CSS and arbitrary styling scattered across components.

### Reusable components

Build reusable components such as:

- `PresentationShell`
- `SlideContainer`
- `SlideHeader`
- `SlideFooter`
- `SlideNavigation`
- `ProgressIndicator`
- `ClayCard`
- `ClayButton`
- `GlassPanel`
- `Icon3D`
- `VectorIllustration`
- `Hospital3DScene`
- `ArchitectureMap`
- `WorkflowDiagram`
- `ModuleOverview`
- `KPIDisplay`
- `SecurityDiagram`
- `BranchNetworkMap`
- `DashboardPreview`
- `PresenterNotes`
- `TableOfContents`

Create reusable templates for module introduction slides, workflow slides, architecture slides, dashboard slides, security slides, and summary slides.

Every presentation slide should use the same design system while retaining a unique composition suited to its content.

## 5. Technology and Code Quality

Use the existing project stack if a codebase has already been supplied. Otherwise, use:

- React.js
- TypeScript
- Vite
- Modern CSS with reusable design tokens
- Framer Motion or an equivalent animation library
- Three.js with React Three Fiber for selected 3D scenes
- Lucide icons or another consistent professional icon library
- SVG illustrations for scalable medical diagrams
- Mermaid, SVG, or custom React components for architecture and workflow diagrams

Use 3D only where it adds value. Keep the website smooth, lightweight, and suitable for presentation on ordinary business laptops.

Organize the project into components, slides, data, hooks, utilities, styles, and assets.

Keep all slide content and module metadata data-driven so that the presentation can be updated without rewriting the entire interface.

Do not replace existing business logic or modify the actual HMIS application. This project is a client-facing presentation and demonstration experience.

## 6. Complete Presentation Structure

Create approximately 24–28 professionally designed slides.

### SECTION A: INTRODUCTION AND VISION

**Slide 01 — Cover**

Title: Hospital Management Information System

Subtitle: One Integrated Platform. Every Hospital Workflow. Smarter Healthcare.

Show a premium 3D hospital building, floating medical icons, a desktop interface preview, and soft pastel claymorphism shapes.

Include an elegant Start Presentation button.

**Slide 02 — The Vision**

Explain how HMIS connects clinical, administrative, operational, and financial processes into one integrated platform.

Show doctors, patients, nurses, administrators, and hospital departments connected through a central system.

**Slide 03 — Key Benefits**

Present benefits such as:

- Centralized hospital operations.
- Better patient coordination.
- Integrated clinical workflows.
- Improved operational visibility.
- Reduced repetitive manual work.
- Inventory and financial control.
- Auditability and accountability.
- Data-driven management decisions.

Do not invent performance percentages or financial savings. Use qualitative benefits unless verified metrics are available.

### SECTION B: SYSTEM ARCHITECTURE

**Slide 04 — Complete HMIS Architecture**

Create a large, interactive architecture diagram.

Represent these layers:

1. Presentation layer: doctors, nurses, reception, pharmacy, laboratory, billing, HR, and administrators.
2. Application layer: authentication, role-based authorization, master data, clinical services, billing services, inventory services, and reporting.
3. Workflow layer: appointments, encounters, admissions, prescriptions, orders, billing, discharge, and follow-up.
4. Data layer: patient records, encounters, clinical records, transactions, inventory, financial data, configuration, and audit records.
5. Integration layer: laboratory devices, imaging systems, payment services, messaging, external systems, and reporting integrations where configured.
6. Infrastructure layer: application hosting, SQL Server, caching, background processing, monitoring, and backups where implemented.

Use color-coded connections, animated data flows, and interactive tooltips.

Clicking a component must explain its purpose and connections to other components.

Clearly distinguish existing implemented capabilities from optional integrations or proposed architecture.

**Slide 05 — How HMIS Works**

Show the end-to-end patient journey:

Registration → Appointment → OPD Consultation → Clinical Orders → Laboratory/Radiology/Pharmacy → Billing → Admission if required → Treatment → Discharge → Follow-up.

Explain that patients may enter the workflow at different points and not every patient requires every department.

Use animated connections and moving indicators to demonstrate how data flows between modules.

### SECTION C: HOSPITAL ORGANIZATION AND ACCESS

**Slide 06 — Hospital Master Configuration**

Explain master data management, including:

- Hospital and branch masters.
- Department and specialty masters.
- Doctor and employee masters.
- Service and procedure masters.
- Billing tariffs and packages.
- Bed, ward, and room masters.
- Pharmacy item and unit masters.
- Laboratory test and diagnostic service masters.
- Payment methods and configuration.
- Workflow status and reference masters.

Explain why centralized, governed master data is essential for consistency.

**Slide 07 — Multi-Branch Hospital Management**

Show a 3D network of hospitals and branches connected to a central administrative layer.

Demonstrate:

- Multiple hospital branches.
- Branch-specific departments and resources.
- Branch-specific stock and transactions.
- Centralized administrative oversight.
- Consolidated reporting for authorized users.
- Branch-specific configuration.
- Controlled inter-branch stock transfers.

Use an interactive map or network diagram.

Click a branch to show its departments, users, resources, and permitted data scope.

Explain how branch-level data isolation must be enforced by the backend, not merely by hiding UI elements.

**Slide 08 — Role-Based Access Control**

Explain the difference between roles, permissions, departments, and branch scope.

Include example roles:

- Super Administrator.
- Hospital Administrator.
- Doctor.
- Nurse.
- Receptionist.
- Cashier.
- Pharmacist.
- Laboratory Technician.
- Radiology Staff.
- HR Manager.
- Inventory Manager.
- Medical Records Staff.
- Reporting and MIS User.

Show a permission matrix with view, create, update, approve, cancel, export, and branch-scope examples.

Use illustrative permissions only. Make it clear that actual permissions depend on configuration.

Explain authentication, server-side authorization, least privilege, session controls, and access reviews.

### SECTION D: PATIENT CARE AND CLINICAL OPERATIONS

**Slide 09 — Patient Registration and Patient Management**

Show the patient registration experience, patient identity, demographics, contact details, identifiers, medical history, allergies, and longitudinal encounter history.

Demonstrate a patient record connecting appointments, consultations, prescriptions, laboratory reports, radiology reports, bills, admissions, and discharge documents.

Use fictional sample data only.

**Slide 10 — Appointment and Queue Management**

Show the complete appointment workflow:

Appointment Booking → Schedule Validation → Token Generation → Check-in → Waiting Queue → Doctor Consultation → Completion.

Include doctor availability, specialty selection, appointment status, queue status, rescheduling, cancellation, and notifications where configured.

Create a polished animated workflow with a realistic appointment dashboard preview.

**Slide 11 — Emergency Department**

Explain emergency registration, triage, priority classification, initial assessment, stabilization, emergency orders, bed allocation, admission, transfer, discharge, and referral workflows.

Show a 3D emergency department with animated connections between triage, clinical staff, diagnostic services, pharmacy, and inpatient care.

Clearly communicate that clinical triage decisions remain with qualified healthcare professionals.

**Slide 12 — OPD: Outpatient Department**

Show:

Patient Check-in → Consultation → Clinical Assessment → Diagnosis → Prescription → Laboratory/Radiology Orders → Billing → Follow-up.

Include doctor schedules, consultation notes, diagnosis, prescription, clinical orders, and encounter status.

Use an animated outpatient workflow and a realistic application preview.

**Slide 13 — IPD: Inpatient Department**

Show:

Admission → Bed Assignment → Doctor Assessment → Treatment Plan → Nursing Care → Investigations → Medication → Billing → Discharge.

Include admission records, ward allocation, treatment progress, patient transfer, daily charges, discharge summaries, and follow-up.

Show a 3D hospital ward with beds and department connections.

**Slide 14 — Bed and Ward Management**

Visualize wards, rooms, beds, occupancy, availability, reservations, cleaning status, isolation status, and patient transfers.

Use a 3D or isometric hospital floor plan.

Clicking a bed should display a fictional bed identifier, ward, status, and relevant workflow.

Distinguish illustrative bed states from real operational data.

**Slide 15 — Clinical Management and Nursing**

Explain clinical documentation, diagnoses, treatment plans, vital signs, medication administration, nursing assessments, care plans, clinical orders, progress notes, and handover workflows.

Show how authorized clinical staff collaborate around a patient encounter.

Use role-specific views and animated connections.

Avoid implying that software independently makes clinical decisions.

### SECTION E: DIAGNOSTICS AND SUPPORT SERVICES

**Slide 16 — Laboratory Management**

Show:

Test Ordering → Sample Collection → Barcode Identification → Sample Processing → Result Entry → Validation → Report Generation → Clinical Review.

Include test catalogs, sample tracking, reference ranges, abnormal-result flags, report history, and billing integration.

Show a realistic laboratory dashboard and an animated sample journey.

**Slide 17 — Radiology and Diagnostic Imaging**

Explain imaging requests, scheduling, modality selection, study status, image storage or PACS integration where configured, radiology reporting, and result availability.

Show a 3D radiology room, imaging equipment, a fictional radiology worklist, and diagnostic workflow connections.

Do not present fabricated diagnostic findings as real medical advice.

**Slide 18 — Blood Bank Management**

Explain donor registration, donation records, blood grouping, component preparation, screening status, inventory, compatibility checks, reservation, issue, transfusion traceability, expiry monitoring, and discard documentation.

Show a visual blood-component inventory and workflow diagram.

Emphasize that compatibility verification and blood-release decisions require qualified staff and validated procedures.

### SECTION F: PHARMACY, INVENTORY, AND FINANCE

**Slide 19 — Pharmacy Management**

Show:

Prescription → Prescription Validation → Stock Check → Batch Selection → Dispensing → Billing → Stock Ledger Update.

Include:

- Item master and dosage forms.
- Purchase units and base units.
- Unit conversion.
- Purchase orders and goods receipt.
- Batch and expiry tracking.
- Stock availability.
- Pharmacy billing.
- Purchase returns and sales returns.
- Stock transfers between authorized branches.
- Supplier management.
- Reorder monitoring.
- Inventory ledger and transaction traceability.

Show a realistic pharmacy interface and a 3D pharmacy counter.

**Slide 20 — Billing and Insurance**

Explain OPD billing, IPD billing, package billing, service charges, tariffs, discounts, deposits, refunds, payments, insurance workflows, corporate billing, and claim documentation.

Show the relationship between clinical orders, pharmacy charges, laboratory charges, radiology charges, inpatient services, and the final bill.

Include a fictional invoice preview and a clear revenue workflow.

Distinguish bill generation, payment collection, and insurance claim settlement as separate processes.

### SECTION G: PEOPLE, RECORDS, AND MANAGEMENT

**Slide 21 — Employee and HR Management**

Show employee records, departments, designations, joining information, attendance, shifts, leave, payroll integration where configured, role assignment, and employee lifecycle management.

Explain how employee records connect to departments, user accounts, and access permissions without granting unnecessary access to sensitive information.

**Slide 22 — Medical Records Department (MRD)**

Explain medical record indexing, encounter documentation, discharge summaries, certificates, document retrieval, record corrections, retention policies, and authorized access.

Include document version history, traceability, and confidentiality.

Show a visual medical records archive with searchable patient documentation.

**Slide 23 — MIS Reports and Analytics**

Create a premium analytics slide containing illustrative dashboards for:

- OPD and IPD statistics.
- Appointment and patient volumes.
- Bed occupancy.
- Pharmacy stock and expiry.
- Laboratory and radiology workload.
- Billing and collections.
- Revenue trends.
- Branch comparisons.
- Department-wise performance.
- Audit and operational summaries.

Include interactive filters, charts, and drill-down concepts.

Use clearly labeled fictional sample data. Do not fabricate real hospital metrics or claim that every report is already implemented.

### SECTION H: ADMINISTRATION, SECURITY, AND TECHNOLOGY

**Slide 24 — Administrator Control Center**

Explain centralized administration, user and role management, hospital configuration, branch setup, masters, permission assignments, system settings, reporting access, and operational oversight.

Use an isometric control-center illustration with connected departments.

**Slide 25 — Security, Audit Logs, and Compliance**

Show the security lifecycle:

Authentication → Authorization → Transaction → Audit Event → Review → Investigation.

Explain:

- Role-based permissions.
- Branch-level access restrictions.
- Secure sessions.
- Data protection in transit and at rest where configured.
- Audit logs.
- Login and access events.
- Sensitive-record access.
- Transaction history.
- Administrative changes.
- Backup and recovery.
- Monitoring and incident response.

Distinguish implemented controls from recommended controls that still require configuration or verification.

Never claim regulatory compliance, encryption coverage, or security certification without evidence.

**Slide 26 — System Monitoring and Reliability**

Explain application health, database performance, cache availability where configured, background processing, error logging, resource monitoring, backup status, and recovery planning.

Use a visual system map linking application, database, cache, integrations, and monitoring.

Label optional technologies and unimplemented features honestly.

### SECTION I: FINAL PRESENTATION

**Slide 27 — Complete Hospital Workflow Map**

Create the largest and most visually impressive interactive architecture map in the presentation.

Place the hospital or HMIS core at the center, surrounded by connected modules:

- Masters and administration.
- Patient registration.
- Appointments.
- Emergency.
- OPD.
- IPD.
- Beds and wards.
- Clinical and nursing.
- Laboratory.
- Radiology.
- Blood bank.
- Pharmacy.
- Billing and insurance.
- Inventory.
- HR and employees.
- MRD.
- MIS and reporting.
- Security and audit logs.
- Multi-branch management.

Draw directional links that explain which modules exchange data and why.

Clicking any module must open a detail panel containing its purpose, users, inputs, outputs, related modules, and typical workflow.

Provide zoom, pan, reset, and fit-to-screen controls.

Use animated flow lines and soft 3D vector elements without making the map visually confusing.

**Slide 28 — Why Choose Our HMIS?**

Summarize the value proposition:

- Integrated hospital operations.
- Connected patient-care workflows.
- Better administrative visibility.
- Controlled access to sensitive information.
- Improved inventory traceability.
- Connected billing and diagnostic workflows.
- Multi-branch operational oversight.
- Reporting and management visibility.

Finish with a premium 3D hospital illustration, a Thank You message, and configurable company/contact details.

Do not invent company names, client logos, testimonials, awards, or contact information.

## 7. 3D Vector Illustration Requirements

Create or integrate consistent claymorphism-style vector assets for:

- Hospital buildings and campuses.
- Doctors, nurses, patients, and administrators.
- Emergency rooms and ambulances.
- Reception and consultation rooms.
- Hospital beds and wards.
- Laboratory instruments and sample tubes.
- X-ray and diagnostic imaging rooms.
- Blood bags and blood components.
- Pharmacy shelves, medicines, and stock.
- Billing counters and payment interfaces.
- Employee management.
- Medical records and documents.
- Security shields and audit trails.
- Multi-branch hospital networks.
- Data flows and system architecture.

Use SVG illustrations for diagrams and icons. Use Three.js selectively for interactive hospital scenes and spatial visualizations.

Keep assets visually consistent, professional, and optimized.

## 8. Animation Requirements

Implement purposeful animations:

- Floating 3D medical objects.
- Soft parallax backgrounds.
- Slide entrance and exit transitions.
- Animated workflow arrows.
- Flowing data connections.
- Hover elevation and gentle object rotation.
- Architecture node highlighting.
- Animated dashboard charts.
- Smooth map zooming and panning.
- Interactive 3D hospital navigation.
- Scroll-independent slide transitions.

Animations must not interfere with reading, navigation, or clinical information.

Support reduced-motion preferences and provide fallbacks for low-performance devices.

Avoid excessive spinning, distracting motion, and animation that causes layout shifts.

## 9. Interactive Hospital Map

Build a visual hospital floor plan or isometric 3D hospital scene with clickable departments:

- Reception.
- Emergency.
- OPD.
- IPD.
- ICU.
- Pharmacy.
- Laboratory.
- Radiology.
- Blood Bank.
- Billing.
- Administration.

When the user selects a department:

1. Highlight the department.
2. Display its purpose.
3. Show its primary users.
4. Explain the workflow.
5. Show connected modules.
6. Animate the relevant data flow.
7. Offer a button to open the corresponding presentation slide.

The map is a demonstration and visualization, not a live representation of real patients or actual hospital occupancy unless connected to an authorized live system.

## 10. Content and Presentation Quality

Write professional, accurate explanations that doctors and hospital administrators can understand without technical expertise.

For every module, include:

- What it does.
- Who uses it.
- How it works.
- Which modules it connects to.
- What information enters and leaves it.
- Operational and administrative benefits.
- Important security or approval controls.
- An illustrative workflow.
- A representative interface preview.

Keep each slide focused on one primary topic. Use short paragraphs, concise labels, readable diagrams, and strong visual storytelling.

Provide optional presenter notes for deeper technical explanations.

Do not use tiny text, giant paragraphs, overloaded slides, or fake performance metrics.

## 11. Functional Requirements

The website must be fully functional, not just a static mockup.

Implement:

- Working slide navigation.
- Keyboard shortcuts.
- Full-screen presentation.
- Searchable module navigation.
- Clickable architecture diagrams.
- Interactive hospital map.
- Animated workflows.
- Responsive layouts.
- Reusable slide components.
- Functional theme controls if provided.
- Proper loading and error states.
- Smooth performance.
- Accessibility labels and keyboard support.

Do not create buttons that do nothing. Do not simulate a live hospital database or live operational data without an actual backend connection.

## 12. Deliverables

Produce:

1. A complete working source-code project.
2. Reusable master CSS and design tokens.
3. Reusable presentation components.
4. All 28 slide layouts.
5. SVG and 3D illustration assets.
6. Interactive hospital and architecture maps.
7. Animation and navigation logic.
8. Sample data clearly marked as fictional.
9. A README explaining installation, development, and production builds.
10. A clear list of implemented features and optional future integrations.

Test every slide, navigation control, interactive diagram, responsive breakpoint, and animation.

## 13. Final Acceptance Criteria

The final website must look like a premium PowerPoint deck that has become an interactive 3D healthcare presentation.

A doctor or hospital owner should be able to understand the HMIS from the cover slide through the complete workflow map without needing to read source code.

Prioritize visual quality, clear communication, accurate module relationships, smooth interactions, maintainable components, and honest representation of implemented capabilities.

Start by establishing the master design system and presentation shell. Then build the slides in sequence, integrate the diagrams and 3D scenes, and test the entire presentation.

Do not stop after creating a landing page or a few sample slides. Complete the entire presentation experience.

## Important implementation note

Use the uploaded claymorphism reference image as the visual direction, but create each slide as an independent, full-screen presentation layout. The architecture map should be interactive, and the module slides should explain how the HMIS works in practice—not just display decorative 3D illustrations.

For your HMIS presentation website, I recommend React + TypeScript + Three.js + Framer Motion. This combination can recreate the pastel claymorphism design in your reference, with PowerPoint-style slides, interactive hospital maps, animated workflows, and 3D medical illustrations.

The important distinction is that this is a client-facing presentation website, not the actual hospital management application. You can build it separately without changing your existing HMIS business logic.

## 1. Recommended technology stack

[File:React.svg - Wikimedia Commons](https://images.openai.com/static-rsc-4/7xLwZ4scX4fnuMMhGGC1cqLT77iXYre5xJdgpd7WX1KQ_p3g1RPDF7yr_WadpTqTOOQqdyWXwfoJZwqVjziB4ZjkWfqXFUA5ZzmEP0gz1yPlo8186Lx7bp_RlOKNJMYunWYIIcau9pEjVKeCiiL7F2AY3pRccI_LGvBv9WXSfHU?purpose=inline)

React + TypeScript

Core foundation

Build reusable slides, navigation, module views, architecture diagrams, and interactive components. TypeScript helps maintain consistency across a large presentation.

[File:Three.js Icon.svg - Wikimedia Commons](https://images.openai.com/static-rsc-4/3IQ7cPoSs10rkMSCB3er-YlNWWbl3LzvXfkGX6c4ZDarZ335jEMbAON39Hnr6x0vW-6VZHQ_esvzvDjcDI8f17iipgDSluY3-EeahXYnSydnVv3gF4f8Z-ZVDvqF0mq1qafNP1eljVkuJVYGxiBXSqCqfCH803tHVG8ChnIW57M?purpose=inline)

Three.js + React Three Fiber

3D visuals

Create an interactive isometric hospital, rotating 3D scenes, department selection, floating medical objects, and navigable hospital maps.

[Framer Motion (@framermotion) on X](https://images.openai.com/static-rsc-4/LQze_cMO7rEHhaLZJvFcanTeJxYiBDmf75xl3iR-sN4t83Kt2RD3O04QBnd9IX95Aaa7H9Q0JNB9Dp6q7bXeZuM3YhWbYWTv8I03XpYdoSw-ynPXhqZ4nplNkzl1bW6QML1QJl0-v0JGL8oREwAiEueIY4TG-IX9pJU8A6hirC8?purpose=inline)

Motion for React (Framer Motion)

Animation

PowerPoint-style slide transitions, floating cards, animated workflow arrows, smooth entrances, hover effects, and page navigation.

[Tailwind CSS Wordmark Logo PNG Vector (SVG) Free Download in 2025 | Word mark logo, Css, Vector logo](https://images.openai.com/static-rsc-4/iecL2Ab__eIJwMwWSQ0fsqaBOaRDQFYLB-PDmu7IyVB8sQq_th1AxXOVxgdKZ0__waTfGwLIHYI4No0nWeY3abP5vL0ik4OIKb_SFE1RmSR6viDxHB2N5Jlaoxv7T0mE1rB805ZIq_i5LMEB_tcI-NrF_idJ0XCmapBO7bf09Bs?purpose=inline)

CSS Modules + Master CSS

Visual design

Use centralized CSS variables and reusable styles for claymorphism, pastel gradients, rounded surfaces, shadows, typography, and responsive layouts. Tailwind CSS is optional; don't duplicate styling systems unnecessarily.

[What is SVG and how to use it?](https://images.openai.com/static-rsc-4/37gYoS2plRQfr8MlCCU9bx2eSy6_ppco3DP1MNQbIsMTNGkg3xEvn2mkxmLGO2C8t7lfqB7McRar0IkpGpDxS-B7mGUEIqDec38ZgCskMwrQ8vwSSeQkD1P9HcY8pk1ghphaHutJpX18CdUldKCTLs89q_dC_MMVScEedAVokLc?purpose=inline)

SVG + Lucide Icons

Use SVG for crisp, scalable workflow diagrams and medical vector illustrations. Use Lucide for consistent navigation and interface icons.

## 2. Best tools for each feature

| Feature                      | Technology                                       |
| ---------------------------- | ------------------------------------------------ |
| Presentation-style slides    | React + custom slide engine or Reveal.js         |
| Full-screen navigation       | React keyboard events + Fullscreen API           |
| 3D hospital building         | Three.js + React Three Fiber                     |
| Hospital floor map           | Three.js or interactive SVG                      |
| Smooth animations            | Motion for React                                 |
| Claymorphism UI              | Custom CSS variables and layered shadows         |
| Interactive architecture map | React + SVG                                      |
| Dashboard charts             | Recharts                                         |
| Medical icons                | Lucide React                                     |
| 3D medical characters        | GLB/GLTF models with React Three Fiber           |
| Performance optimization     | Vite, lazy loading, compressed assets            |
| Hosting                      | Cloudflare Pages or Vercel for a static frontend |

## 3. How the architecture should look

Presentation interface

Full-screen slides · Navigation · Presenter controls

Slide components

Reusable layouts and module content

3D scenes

Hospital map and animated objects

Shared design system

Master CSS · Colors · Typography · Shadows · Animation tokens

This presentation can run independently of your actual HMIS database. If you later want live dashboards, real branch information, or actual operational data, connect those features through a secured, read-only API with appropriate authorization.

## 4. My recommended project setup

Start with this stack:

- Framework: React + TypeScript + Vite
- Styling: Master CSS + CSS Modules
- Animation: Motion for React
- 3D: Three.js + React Three Fiber + Drei
- Charts: Recharts
- Icons: Lucide React
- Deployment: Cloudflare Pages or Vercel

For the 3D hospital, use optimized GLB models where realistic 3D is necessary, and SVG illustrations for diagrams and lighter visual elements. This will give you a premium appearance without making every slide unnecessarily heavy.

One important recommendation: build the slide navigation and design system first, then create the 3D hospital map and workflow animations. That will make the entire website consistent, maintainable, and easier to extend when you add or update HMIS modules.
