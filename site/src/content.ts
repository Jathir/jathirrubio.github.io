// src/content.ts
/**
 * Structured copy for the portfolio. Each top-level key feeds a section in
 * `App`, so updating resume information is centralized here.
 */
export const content = {
  // Landing hero data consumed by <Hero />.
  hero: {
    title: "Jose Jathir Rubio Delgado",
    subtitle: "Mechatronics engineer focused on coding, industrial automation, robotics and CAD-based digital twins.",
    ctaPrimary: { label: "View experience", href: "#experience" },
    ctaSecondary: { label: "Download CV", href: "./cv.pdf" },
  },
  // Narrative overview + profile data for the About cards.
  about: {
    title: "About",
    subtitle: "",
    who: `Mechatronics engineer with hands-on experience in industrial automation, robot programming, and CAD-driven digital twins. Strong background in scripting 3D model pipelines, PLC programming, and building autonomous robotics routines with ROS and LiDAR. Comfortable delivering repeatable, scriptable solutions, optimizing operator–robot workflows, and collaborating across R&D and manufacturing environments.`,
    meta: "",
    profile: {
      nationality: "Mexican / American",
      location: "Texas, USA",
      languages: [
        "Spanish (native)",
        "English (fluent) - TOEFL B2",
        "German (basic) - Goethe Zertifikat A2"
      ],
      images: ["/profile/profile-3.png", "/profile/profile-1.png", "/profile/profile-2.png", "/profile/profile-4.png"],
    },
    
  },
  // Skill taxonomy split into software, hardware and supporting tags.
  skills: {
    title: "Skills & Tech",
    subtitle: "",
    software: [
      { name: "Python" },
      { name: "C++" },
      { name: "MATLAB" },
      { name: "LabVIEW" },
    ],
    hardware: [
      { name: "ROS / LiDAR mapping" },
      { name: "PLCs (Siemens TIA Portal)" },
      { name: "Robot programming (xArm, UR)" },
      { name: "CAD / Digital twin" },
    ],
    tags: [
      "SolidWorks",
      "Process Simulate",
      "Script-based CAD control",
      "CNC / G-code",
      "Universal Robots (E-Series)",
      "TIA Portal",
      "In-Sight Explorer",
    ],
  },
  // Side projects rendered under the Projects section.
  projects: {
    title: "Additional projects",
    subtitle: "Personal and side projects complementary to academic and industry work.",
    items: [
      {
        title: "React/Vite portfolio",
        description: "Single-page portfolio for presenting my mechatronics profile on GitHub Pages.",
        tags: ["React", " Vite", " GitHub Pages"],
      },
      {
        title: "LogLife productivity app",
        description: "Desktop app in Python + PyQt6 to track habits, learning and weekly summaries.",
        tags: ["Python", " PyQt6", " Productivity"],
      },
    ],
  },

  // Professional and academic experience cards plus optional carousels.
  experience: {
    title: "Experience",
    subtitle: "",
    items: [
      {
        role: "ZEISS – R&D Department (Thesis)",
        place: "Oberkochen, Germany",
        period: "Sep 2024 – Feb 2025",
        bullets: [
          "Automated CAD model processing for recurring tasks (rotating components, removing unnecessary elements, vertex-count optimization).",
          "Used 3D graphics / animation / rendering software through script-based control to ensure robust and reproducible CAD modelling workflows.",
          "Identified CAD model parameters and analyzed their impact on pose estimation.",
        ],
        images: ["/experience/zeiss-1.jpg"],
      },
      {
        role: "ZEISS – R&D Department (Internship)",
        place: "Oberkochen, Germany",
        period: "Apr 2024 – Sep 2024",
        bullets: [
          "Automated CAD model processing for recurring tasks (rotation, cleanup, vertex optimization).",
          "Script-based animation and rendering control to keep the pipeline reproducible.",
          "Analyzed how model changes affect tracking accuracy and robustness.",
          "Evaluated object-model parameter changes to improve tracking performance.",
          
        ],
      },
      {
        role: "Hochschule Zittau/Görlitz - ROS & LiDAR routine for LIMO robot",
        place: "Zittau, Germany",
        period: "Sep 2023 – Jun 2023",
        bullets: [
          "Python programming of a LIMO robot through ROS.",
          "Final routine: automated room mapping with LiDAR, autonomous navigation and camera-based color recognition.",
          "Integrated image processing in the same routine to demonstrate a multi-step autonomous task.",
        ],
        images: ["/experience/LIMO-1.png", "/experience/LIMO-2.png", "/experience/LIMO-3.png"],
      },
      {
        role: "Tec de Monterrey and MIT - Production line workstation automation",
        place: "Monterrey, Mexico",
        period: "Mar 2023 – Jun 2023",
        bullets: [
          "Automated the last workstation on a production line.",
          "Programmed xArm for a pick-and-place routine.",
          "Programmed Siemens PLC (inputs/outputs) to work with the robot.",
          "Designed workbench and fixtures for the cell.",
          "Planned and optimized the operator–robot routine.",
        ],
        images: ["/experience/MIT-1.png","/experience/MIT-2.png","/experience/MIT-3.png"],
      },
      {
        role: "PremiertTech - Digital twin & simulation",
        place: "Monterrey, Mexico",
        period: "Mar 2023 – Jun 2023",
        bullets: [
          "Created a digital twin in SolidWorks for the cell.",
          "Simulated machines and operator in Process Simulate (FANUC, KUKA, CNC, belts, warehouses).",
          "Designed fixtures and generated G-code for CNC machining.",
          "Implemented PLC programming for the cell.",
        ],
        images: ["/experience/PremiertTech-1.png","/experience/PremiertTech-2.png","/experience/PremiertTech-3.png","/experience/PremiertTech-4.png","/experience/PremiertTech-5.png","/experience/PremiertTech-6.png"],
      },
      {
        role: "John Deere - LabVIEW control system prototype",
        place: "Monterrey, Mexico",
        period: "Sep 2022 – Dec 2022",
        bullets: [
          "Developed the LabVIEW code for the control system.",
          "Collaborated on the design of a linear actuator prototype.",
          "Supported the assembly of the prototype.",
        ],
      },
    ],
  },
  // Formal education history for the Education grid.
  education: {
    title: "Education",
    subtitle: "",
    items: [
      {
        title: "B.Eng. Automatisierung und Mechatronik (DHIK double degree)",
        place: "Hochschule Zittau/Görlitz, Germany",
        period: "Oct 2023 – Feb 2025",
        description:
          "One-year German exchange leading to a German degree via thesis. Grade: 1.22 (≈ 3.9/4.0).",
      },
      {
        title: "B.Sc. in Mechatronics Engineering",
        place: "Tecnológico de Monterrey, Mexico",
        period: "Aug 2020 – Jul 2025",
        description: "Overall grade: 96/100 (≈ 3.84/4.0).",
      },
    ],
  },
  // Awards and memberships list.
  awards: {
    title: "Awards & Memberships",
    subtitle: "",
    items: [
      "DHIK Dual Degree member (2023–2024).",
      "50% Scholarship for academic talent (2020–2025).",
    ],
  },
  // Certifications grouped as a simple bullet list.
  certifications: {
    title: "Certifications",
    subtitle: "",
    items: [
      "Universal Robots — E-Series Application (2023).",
      "Universal Robots — E-Series Core Track (2023).",
      "Universal Robots — E-Series Pro Track (2023).",
      "CSWA SolidWorks, XpertCAD (2023).",
      "Learn C++ Programming (Udemy, 2023).",
      "LabVIEW and Arduino Application Programming (Udemy, 2022).",
    ],
  },
  // General contact information + optional `cv` override used in App.tsx.
  contact: {
    title: "Contact",
    subtitle: "",
    email: "josejathir@gmail.com",
    location: "Texas, USA",
    github: "https://github.com/Jathir",
    linkedin: "https://www.linkedin.com/in/jose-jathir-rubio-delgado-a43837294/",
    cv: "./cv.pdf"  
  },
}
