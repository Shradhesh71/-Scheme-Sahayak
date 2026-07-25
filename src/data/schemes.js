export const RAJASTHAN_SCHEMES = [
  {
    id: "chiranjeevi",
    name: "Mukhyamantri Chiranjeevi Swasthya Bima Yojana",
    department: "Department of Medical, Health & Family Welfare",
    category: "Healthcare & Social Security",
    summary: "Provides health insurance coverage up to ₹25 Lakhs per family annually for cashless inpatient treatment across government and empaneled private hospitals.",
    benefits: [
      "Cashless treatment up to ₹25 Lakhs/year per household",
      "Accidental coverage up to ₹10 Lakhs under Chiranjeevi Durghatna Bima",
      "Covers pre-hospitalization (5 days) and post-hospitalization (15 days) expenses"
    ],
    eligibilityCriteria: {
      minAge: 0,
      maxAge: 120,
      maxIncome: 800000,
      categories: ["All", "General", "OBC", "SC", "ST", "EWS", "MBC"],
      occupations: ["Farmer", "Student", "Unemployed", "Self-Employed", "Daily Wager", "Salaried", "Homemaker"],
      residence: "Rajasthan"
    },
    documentsNeeded: [
      "Jan Aadhar Card / Jan Aadhar Enrollment Receipt",
      "Aadhar Card of beneficiary",
      "Income Certificate (if non-NFSA / non-SECC household)",
      "Ration Card"
    ],
    eMitraServiceCode: "EM-MED-CHIR-001",
    officialPortal: "https://chiranjeevi.rajasthan.gov.in"
  },
  {
    id: "anuprati",
    name: "Mukhyamantri Anuprati Coaching Yojana",
    department: "Social Justice & Empowerment Department (SJED)",
    category: "Education & Youth Empowerment",
    summary: "Offers 100% free coaching for competitive examinations (UPSC, RPSC RAS, NEET, IIT-JEE, CLAT, Sub-Inspector, REET) along with ₹40,000/year lodging stipend for outstation students.",
    benefits: [
      "Full tuition fee waiver at top empaneled coaching institutes",
      "₹40,000 annual lodging & boarding stipend for outstation students",
      "Mentorship and study material access"
    ],
    eligibilityCriteria: {
      minAge: 15,
      maxAge: 35,
      maxIncome: 800000,
      categories: ["SC", "ST", "OBC", "MBC", "EWS", "Minority"],
      occupations: ["Student", "Unemployed"],
      residence: "Rajasthan"
    },
    documentsNeeded: [
      "Jan Aadhar Card",
      "Class 10th & 12th Marksheets",
      "Caste Certificate (SC/ST/OBC/MBC/EWS)",
      "Income Certificate (Family annual income < ₹8 Lakhs)",
      "Domicile Certificate (Mool Niwas Praman Patra)"
    ],
    eMitraServiceCode: "EM-SJED-ANUP-004",
    officialPortal: "https://sjed.rajasthan.gov.in"
  },
  {
    id: "palanhar",
    name: "Palanhar Yojana",
    department: "Social Justice & Empowerment Department (SJED)",
    category: "Child Welfare & Education Support",
    summary: "Provides monthly financial assistance and educational support for orphan children or children of widowed, divorced, or specially-abled mothers.",
    benefits: [
      "₹1,500/month for children aged 0 to 6 years",
      "₹2,500/month for school-going children aged 6 to 18 years",
      "Annual grant of ₹2,000 for clothes, shoes & stationery"
    ],
    eligibilityCriteria: {
      minAge: 0,
      maxAge: 18,
      maxIncome: 120000,
      categories: ["All", "General", "OBC", "SC", "ST", "EWS", "MBC"],
      occupations: ["Student", "Homemaker", "Unemployed", "Daily Wager"],
      residence: "Rajasthan"
    },
    documentsNeeded: [
      "Jan Aadhar Card containing child and caregiver details",
      "School Enrollment Certificate (Anganwadi / School Admission Receipt)",
      "Parent's Death Certificate / Disability Certificate / Widow Certificate",
      "Bank Passbook linked with Jan Aadhar"
    ],
    eMitraServiceCode: "EM-SJED-PAL-002",
    officialPortal: "https://sjed.rajasthan.gov.in"
  },
  {
    id: "kisan_sathi",
    name: "Rajasthan Kisan Sathi Yojana (Krishi Yantra & Irrigation Subsidy)",
    department: "Department of Agriculture & Farmers Welfare",
    category: "Agriculture & Rural Livelihood",
    summary: "Grants 50% to 75% subsidy to small, marginal, and women farmers for modern farm machinery, drip/sprinkler irrigation systems, solar water pumps, and seed kits.",
    benefits: [
      "Up to 75% subsidy on Drip & Micro Irrigation setup",
      "Up to ₹60,000 direct subsidy on Solar Water Pumps (PM-KUSUM Component)",
      "Free certified mini-seed kits for mustard, bajra, and pulses"
    ],
    eligibilityCriteria: {
      minAge: 18,
      maxAge: 80,
      maxIncome: 1200000,
      categories: ["All", "General", "OBC", "SC", "ST", "EWS", "MBC"],
      occupations: ["Farmer"],
      residence: "Rajasthan"
    },
    documentsNeeded: [
      "Jan Aadhar Card",
      "Jamabandi (Land Record Ownership Certificate - Khasra Copy)",
      "Soil & Water Testing Report (for irrigation subsidy)",
      "Bank Account details"
    ],
    eMitraServiceCode: "EM-AGRI-KS-008",
    officialPortal: "https://rajkisan.rajasthan.gov.in"
  },
  {
    id: "indira_urban_emp",
    name: "Indira Gandhi Urban Employment Guarantee Scheme (IRGY-Urban)",
    department: "Department of Local Self Government (LSG)",
    category: "Livelihood & Guaranteed Wages",
    summary: "Guarantees 125 days of wage employment in a financial year for urban households willing to do unskilled manual work.",
    benefits: [
      "125 days guaranteed wage employment per urban household",
      "Direct Bank Transfer (DBT) of weekly wages within 15 days",
      "Covers tree plantation, pond rejuvenation, heritage site maintenance"
    ],
    eligibilityCriteria: {
      minAge: 18,
      maxAge: 60,
      maxIncome: 500000,
      categories: ["All", "General", "OBC", "SC", "ST", "EWS", "MBC"],
      occupations: ["Unemployed", "Daily Wager", "Homemaker", "Self-Employed"],
      residence: "Urban Rajasthan"
    },
    documentsNeeded: [
      "Jan Aadhar Card (Urban address mandatory)",
      "Job Card application form",
      "Active bank account linked with Aadhar"
    ],
    eMitraServiceCode: "EM-LSG-IRGY-012",
    officialPortal: "https://irgyurban.rajasthan.gov.in"
  },
  {
    id: "ekalnari_pension",
    name: "Mukhyamantri Ekalnari Samman Pension Yojana",
    department: "Social Justice & Empowerment Department (SJED)",
    category: "Social Security & Pension",
    summary: "Provides financial pension to destitute widowed, divorced, or abandoned women of Rajasthan to ensure financial independence.",
    benefits: [
      "₹1,000/month for age 18 to 55 years",
      "₹1,250/month for age 55 to 60 years",
      "₹1,500/month for age 60 years and above",
      "Automatic annual 15% increase"
    ],
    eligibilityCriteria: {
      minAge: 18,
      maxAge: 120,
      maxIncome: 48000,
      categories: ["All", "General", "OBC", "SC", "ST", "EWS", "MBC"],
      occupations: ["Homemaker", "Unemployed", "Daily Wager", "Farmer"],
      residence: "Rajasthan"
    },
    documentsNeeded: [
      "Jan Aadhar Card",
      "Husband's Death Certificate / Divorce Decree / Abandonment Proof",
      "Income Certificate certified by Tehsildar",
      "Bank Account Passbook"
    ],
    eMitraServiceCode: "EM-SJED-PEN-005",
    officialPortal: "https://sjed.rajasthan.gov.in"
  }
];

export const DEMO_QUESTIONS = [
  {
    id: "occupation",
    questionHindi: "नमस्ते! मैं योजना सहायक हूँ। आपको और आपके परिवार को किन सरकारी योजनाओं का लाभ मिल सकता है, यह जानने के लिए कुछ सवाल पूछूँगा। आपका मुख्य व्यवसाय या स्थिति क्या है?",
    questionEnglish: "Namaste! I am Sarthi. I will ask a few simple questions to match you with Rajasthan government welfare schemes. What is your primary occupation or status?",
    options: [
      { label: "किसान (Farmer)", value: "Farmer" },
      { label: "छात्र (Student)", value: "Student" },
      { label: "दैनिक मजदूर / बेरोजगार (Daily Wager / Unemployed)", value: "Daily Wager" },
      { label: "गृहिणी / महिला (Homemaker / Woman)", value: "Homemaker" },
      { label: "स्वरोजगार (Self-Employed)", value: "Self-Employed" }
    ]
  },
  {
    id: "age",
    questionHindi: "आपकी या मुख्य लाभार्थी की आयु कितनी है?",
    questionEnglish: "What is your age or the age of the main beneficiary?",
    options: [
      { label: "0 - 18 वर्ष (Under 18)", value: "17" },
      { label: "18 - 35 वर्ष (Youth 18-35)", value: "24" },
      { label: "36 - 60 वर्ष (Adult 36-60)", value: "45" },
      { label: "60+ वर्ष (Senior Citizen 60+)", value: "65" }
    ]
  },
  {
    id: "income",
    questionHindi: "आपकी वार्षिक पारिवारिक आय (Family Annual Income) लगभग कितनी है?",
    questionEnglish: "What is your approximate total household annual income?",
    options: [
      { label: "₹48,000 से कम (Under ₹48,000)", value: "40000" },
      { label: "₹48,000 - ₹2.5 लाख (Low Income)", value: "150000" },
      { label: "₹2.5 लाख - ₹8 लाख (Middle Income)", value: "450000" },
      { label: "₹8 लाख से अधिक (Above ₹8 Lakhs)", value: "900000" }
    ]
  },
  {
    id: "category",
    questionHindi: "आपकी सामाजिक श्रेणी (Category) क्या है?",
    questionEnglish: "Which social category do you belong to?",
    options: [
      { label: "अनुसूचित जाति / जनजाति (SC / ST)", value: "SC" },
      { label: "अन्य पिछड़ा वर्ग (OBC / MBC)", value: "OBC" },
      { label: "आर्थिक रूप से कमजोर (EWS)", value: "EWS" },
      { label: "सामान्य श्रेणी (General)", value: "General" }
    ]
  },
  {
    id: "district",
    questionHindi: "आप राजस्थान के किस क्षेत्र से हैं?",
    questionEnglish: "Which region of Rajasthan do you reside in?",
    options: [
      { label: "बांसवाड़ा (Banswara District - Tribal/Rural)", value: "Banswara" },
      { label: "उदयपुर (Udaipur Division)", value: "Udaipur" },
      { label: "जयपुर / शहरी क्षेत्र (Jaipur - Urban)", value: "Jaipur" },
      { label: "अन्य जिला (Other Rajasthan District)", value: "Other" }
    ]
  }
];
