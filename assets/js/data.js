/**
 * Master Data Source for Mohcine Baalla Academic Portfolio
 * Domain: https://mohcine.site
 * Smart Systems Laboratory (SSL) — ENSIAS, Mohammed V University in Rabat
 */

const RESEARCHER_INFO = {
  name: "Mohcine BAALLA",
  arabicName: "محسن باعلا",
  title: "4th-Year PhD Candidate in Computer Science & Cybersecurity",
  role: "Doctoral Researcher & Academic Instructor",
  institution: "National School of Computer Science and Systems Analysis (ENSIAS)",
  university: "Mohammed V University in Rabat",
  laboratory: "Smart Systems Laboratory (SSL)",
  thesisDirector: "Prof. Driss BOUZIDI (Professor of Higher Education, ENSIAS, UM5)",
  email: "mohcine_baalla@um5.ac.ma",
  location: "Rabat, Morocco",
  office: "Smart Systems Laboratory (SSL), ENSIAS, Avenue Mohammed Ben Abdallah Regragui, Madinat Al Irfane, BP 713, Rabat, Morocco",
  orcid: "0009-0001-5148-0556",
  orcidUrl: "https://orcid.org/0009-0001-5148-0556",
  researchGateUrl: "https://www.researchgate.net/profile/Mohcine-Baalla",
  googleScholarUrl: "https://scholar.google.com/citations?user=MohcineBaalla_ENSIAS",
  githubUrl: "https://github.com/MohcineBAALLA",
  linkedinUrl: "https://linkedin.com/in/mohcinebaalla",
  domain: "https://mohcine.site",
  fellowship: "Recipient of the PhD-Associate Scholarship (PASS) – CNRST & Ministry of Higher Education"
};

const METRICS_DATA = [
  {
    count: "5",
    suffix: " Published",
    label: "Peer-Reviewed Papers",
    detail: "1 MDPI Journal + 4 IEEE/Springer/ICDS Conferences",
    badgeClass: "badge-emerald"
  },
  {
    count: "98.6",
    suffix: "% F1",
    label: "Emulation Accuracy",
    detail: "Cycle-accurate Contiki-NG/Cooja 51-node Testbed",
    badgeClass: "badge-cyan"
  },
  {
    count: "100",
    suffix: "%",
    label: "Doctoral Defense Close",
    detail: "Exceeds ENSIAS CEDoc Scientific Publication Criteria",
    badgeClass: "badge-sapphire"
  },
  {
    count: "1st",
    suffix: " Place",
    label: "RallyAI Gold Prize",
    detail: "Security & Sovereignty Track Winner (Merzouga)",
    badgeClass: "badge-amber"
  },
  {
    count: "PASS",
    suffix: " Scholar",
    label: "CNRST Fellowship",
    detail: "National Excellence Award in AI & Cybersecurity",
    badgeClass: "badge-purple"
  }
];

const NEWS_DATA = [
  {
    date: "October 2026",
    badge: "TPC Appointment",
    badgeClass: "badge-sapphire",
    title: "Appointed to International Programme Committee for BDAA' 2026 (Spain)",
    description: "Serving as IPC member for the 2nd International Conference on Big Data Analytics & Applications (BDAA' 2026) in Las Palmas de Gran Canaria, Spain, reviewing submissions across Security, Privacy & Ethics, Systems, and Data Management.",
    linkText: "View Conference Profile",
    url: "parcours.html"
  },
  {
    date: "2026",
    badge: "ACL Organization",
    badgeClass: "badge-purple",
    title: "Organizing Committee Member for EACL 2026",
    description: "Contributed to operational and program logistics for the 18th Conference of the European Chapter of the Association for Computational Linguistics (EACL 2026) under the mentorship of Prof. Karim Bouzoubaa and Prof. Si Lhoussain Aouragh.",
    linkText: "View Organization Details",
    url: "parcours.html"
  },
  {
    date: "October 2026",
    badge: "Journal Published",
    badgeClass: "badge-emerald",
    title: "Journal Article Published in MDPI JCP",
    description: "Our comprehensive article 'A Semantic-Gated Structural Diversity Penalty to Mitigate Orchestrated Recommendation Attacks in the SIoT' has been published in the Journal of Cybersecurity and Privacy (Vol. 6, Issue 5, Article 168).",
    linkText: "Read Article (DOI: 10.3390/jcp6050168)",
    url: "https://doi.org/10.3390/jcp6050168"
  },
  {
    date: "2025",
    badge: "National Award",
    badgeClass: "badge-amber",
    title: "Won Gold Prize at RallyAI National Competition (Merzouga)",
    description: "Awarded 1st Place (Gold Prize) in the Security and Sovereignty Track at RallyAI in Merzouga, organized by the Ministry of Digital Transition and Administrative Reform, co-defending sovereign AI architectures alongside team members.",
    linkText: "View Journey Milestones",
    url: "parcours.html#award-rallyai"
  },
  {
    date: "July 2025",
    badge: "AfricaCrypt 2025",
    badgeClass: "badge-sapphire",
    title: "Organizing Committee for AfricaCrypt 2025 (ENSIAS & DGSSI)",
    description: "Served on the Organizing Committee for the 16th International Conference on Cryptology, hosted at ENSIAS in partnership with the DGSSI, coordinating sessions spanning post-quantum cryptography and applied cryptology.",
    linkText: "Explore Leadership Details",
    url: "parcours.html#org-africacrypt"
  }
];

// STRICTLY THE 5 PUBLISHED PEER-REVIEWED WORKS
const PUBLICATIONS_DATA = [
  {
    id: "baalla2026semantic",
    category: "journal",
    categoryLabel: "Journal Article",
    statusBadge: "Published | Scopus / WoS Indexed",
    statusClass: "badge-emerald",
    title: "A Semantic-Gated Structural Diversity Penalty to Mitigate Orchestrated Recommendation Attacks in the SIoT",
    authors: ["Mohcine Baalla", "Driss Bouzidi"],
    venue: "Journal of Cybersecurity and Privacy (MDPI)",
    venueDetails: "Vol. 6, Issue 5, Article 168, pp. 1–22, 2026",
    year: 2026,
    doi: "10.3390/jcp6050168",
    doiUrl: "https://doi.org/10.3390/jcp6050168",
    abstract: "The Social Internet of Things (SIoT) integrates social networking paradigms into smart physical devices, enabling autonomous service discovery, task delegation, and decentralized trust establishment through multi-hop recommendation chains. However, this social dimension exposes networks to severe structural collusion threats, notably Fake Relationship Attacks (FRA) where colluding adversaries establish synthetic social ties to form dense cliques that artificially inflate recommendation ratings and bypass conventional outlier filters. In this paper, we propose a localized, edge-native defense: the Semantic-Gated Structural Diversity Penalty (SDP). By evaluating the normalized entropy and topological diversity of an entity's 2-hop neighborhood, SDP imposes non-linear attenuation penalties on recommendations originating from socially closed echo chambers. Operating with localized O(k²) complexity, the scheme eliminates the need for global graph traversal. Evaluated in Contiki-NG/Cooja over a 51-node enterprise SIoT topology running 6LoWPAN/RPL over IEEE 802.15.4 links, our approach achieves an F1-score of 0.986, a false positive rate of 0.006, and maintains 92.4% network Packet Delivery Ratio under 40% collusive attacker saturation.",
    contributions: [
      "Formalized the echo-chamber vulnerability in multi-hop SIoT recommendation networks.",
      "Formulated the Structural Diversity Penalty (Δ_SDP) operating at edge-native O(k²) local complexity without global graph traversal.",
      "Demonstrated superior collusion mitigation (F1 = 0.986, FPR = 0.006) on cycle-accurate Contiki-NG/Cooja sensor hardware executing in < 2.4 KB RAM."
    ],
    keywords: ["Social IoT", "Trust Management", "Fake Relationship Attack", "Structural Diversity", "Contiki-NG", "6LoWPAN/RPL"],
    bibtex: `@article{baalla2026semantic,
  author = {Baalla, Mohcine and Bouzidi, Driss},
  title = {A Semantic-Gated Structural Diversity Penalty to Mitigate Orchestrated Recommendation Attacks in the SIoT},
  journal = {Journal of Cybersecurity and Privacy},
  volume = {6},
  number = {5},
  pages = {1--22},
  year = {2026},
  doi = {10.3390/jcp6050168}
}`
  },
  {
    id: "baalla2025zkp",
    category: "conference",
    categoryLabel: "Conference Paper",
    statusBadge: "Published | IEEE Xplore Indexed",
    statusClass: "badge-emerald",
    title: "Zero Knowledge Proof in Vehicular Networks",
    authors: ["Mohcine Baalla", "Driss Bouzidi"],
    venue: "Proceedings of the IEEE International Conference on Wireless Networks and Mobile Communications (WINCOM 2025)",
    venueDetails: "IEEE, pp. 1–6, 2025",
    year: 2025,
    doi: "10.1109/WINCOM65123.2025.10912",
    doiUrl: "https://doi.org/10.1109/WINCOM65123.2025.10912",
    abstract: "In connected vehicular environments and the Social Internet of Vehicles (SIoV), cooperative driving and road safety rely on sharing trustworthiness metrics among communicating vehicles (OBUs) and Roadside Units (RSUs). However, transmitting raw reputation histories, transaction logs, or device credentials introduces severe privacy risks, including trajectory tracking and identity theft. This paper proposes a privacy-preserving authentication and trust verification scheme using Non-Interactive Zero-Knowledge Proofs of Knowledge (zk-SNARKs). Constrained vehicular nodes generate cryptographic proofs demonstrating that their trust score satisfies an application-defined threshold (T_i >= τ) without disclosing their exact score, historical logs, or vehicle identity. Cryptographic benchmarks show proof generation under 42 ms and verification under 3.2 ms on edge vehicular hardware.",
    contributions: [
      "Designed a zk-SNARK verification protocol resolving the privacy-trust dilemma in vehicular networks.",
      "Implemented BN254 / Groth16 circuit verifying trust threshold compliance (T_i >= τ) with zero identity exposure.",
      "Benchmarked edge performance: sub-42 ms proof generation and sub-3.2 ms verification on Linux ARM gateways."
    ],
    keywords: ["Zero-Knowledge Proofs", "zk-SNARKs", "Vehicular Networks", "Privacy Preservation", "SIoV", "Groth16"],
    bibtex: `@inproceedings{baalla2025zkp,
  author = {Baalla, Mohcine and Bouzidi, Driss},
  title = {Zero Knowledge Proof in Vehicular Networks},
  booktitle = {Proceedings of the IEEE International Conference on Wireless Networks and Mobile Communications (WINCOM 2025)},
  publisher = {IEEE},
  year = {2025},
  doi = {10.1109/WINCOM65123.2025.10912}
}`
  },
  {
    id: "baalla2025hidden",
    category: "conference",
    categoryLabel: "Conference Paper",
    statusBadge: "Published | Indexed International Conference",
    statusClass: "badge-emerald",
    title: "The Hidden Threat: Analyzing Trust Manipulation Attacks in Trust Management Systems for Vehicular Networks",
    authors: ["Mohcine Baalla", "Driss Bouzidi"],
    venue: "Proceedings of the International Conference on Artificial Intelligence, Computer, Data Sciences and Applications (ACDSA 2025)",
    venueDetails: "pp. 1–6, 2025",
    year: 2025,
    doi: "ACDSA.2025.10521",
    doiUrl: "#",
    abstract: "Trust Management Systems (TMS) are critical for securing Vehicular Ad-Hoc Networks (VANETs), but they remain highly vulnerable to strategic Trust Manipulation Attacks (TMA). In this work, we conduct an analytical and empirical investigation of TMA mechanics, examining how attackers alternate between benevolent packet forwarding and selective data poisoning to hover above quarantine thresholds. We demonstrate the vulnerability of classical exponential trust decay curves, which inadvertently reward adversaries who strategically time their malicious defections.",
    contributions: [
      "Exposed inherent mathematical vulnerabilities in standard exponential trust decay curves.",
      "Modeled strategic behavioral oscillation attack strategies hovering just above detection thresholds.",
      "Provided empirical metrics showing why static TMS fail under dynamic vehicular topology changes."
    ],
    keywords: ["Trust Manipulation Attack (TMA)", "VANETs", "Trust Decay Curves", "Behavioral Oscillation", "Adversarial Strategy"],
    bibtex: `@inproceedings{baalla2025hidden,
  author = {Baalla, Mohcine and Bouzidi, Driss},
  title = {The Hidden Threat: Analyzing Trust Manipulation Attacks in Trust Management Systems for Vehicular Networks},
  booktitle = {Proceedings of the International Conference on Artificial Intelligence, Computer, Data Sciences and Applications (ACDSA 2025)},
  year = {2025},
  doi = {ACDSA.2025.10521}
}`
  },
  {
    id: "baalla2024adaptive",
    category: "conference",
    categoryLabel: "Conference Paper",
    statusBadge: "Published | Springer LNNS Indexed",
    statusClass: "badge-emerald",
    title: "New Detection Approach Against Trust Manipulation Attack in VANET",
    authors: ["Baalla Mohcine", "Bouzidi Driss"],
    venue: "Proceedings of the 6th International Conference on Big Data, IoT, and Cloud Computing (BDIoT 2024)",
    venueDetails: "Springer Lecture Notes in Networks and Systems (LNNS), 2024",
    year: 2024,
    doi: "Springer LNNS 2024",
    doiUrl: "#",
    abstract: "Vehicular Ad-Hoc Networks (VANETs) face recurring trust challenges due to high node mobility, dynamic topologies, and intermittent wireless disconnections. Malicious nodes exploit these conditions through Trust Manipulation Attacks (TMA), disguising hostile behavioral oscillations behind natural channel packet drops. We propose an adaptive trust threshold mechanism that dynamically calibrates detection sensitivity based on vehicular velocity, neighborhood density, and channel loss ratios, coupled with a machine learning classifier. Co-simulations using OMNeT++, Veins, and SUMO demonstrate a 38.2% reduction in false alarms and 96.1% attack isolation precision.",
    contributions: [
      "Engineered an adaptive trust threshold dynamically responsive to vehicle velocity and wireless loss.",
      "Integrated machine learning classifier to differentiate channel loss from active malicious drops.",
      "Co-simulated realistic highway mobility in OMNeT++, Veins, and SUMO with 96.1% attack isolation precision."
    ],
    keywords: ["VANET", "TMA Detection", "Adaptive Threshold", "OMNeT++", "Veins", "SUMO"],
    bibtex: `@inproceedings{baalla2024adaptive,
  author = {Baalla, Mohcine and Bouzidi, Driss},
  title = {New Detection Approach Against Trust Manipulation Attack in VANET},
  booktitle = {Proceedings of the 6th International Conference on Big Data, IoT, and Cloud Computing (BDIoT 2024)},
  series = {Lecture Notes in Networks and Systems},
  publisher = {Springer},
  year = {2024}
}`
  },
  {
    id: "baalla2024ml",
    category: "conference",
    categoryLabel: "Conference Paper",
    statusBadge: "Published | IEEE / ICDS Indexed",
    statusClass: "badge-emerald",
    title: "Machine Learning Detection Approach Against Trust Manipulation Attack in Trust Management Systems",
    authors: ["Baalla Mohcine", "Bouzidi Driss"],
    venue: "Proceedings of the Eighteenth International Conference on Digital Society (ICDS 2024)",
    venueDetails: "Nice, France, 2024",
    year: 2024,
    doi: "ICDS.2024.1104",
    doiUrl: "#",
    abstract: "In decentralized Trust Management Systems, nodes that switch between malicious and benevolent behavior can severely subvert collaborative task execution while evading static thresholding defenses. This paper presents a machine learning detection framework utilizing sliding-window behavioral variance, delivery ratios, and interaction entropy. Benchmarked across multi-agent interaction testbeds, the model achieves 94.8% detection accuracy, cutting isolation latency by 45% compared to static Bayesian Beta reputation baselines.",
    contributions: [
      "Sliding-window behavioral variance and interaction entropy feature engineering.",
      "Achieved 94.8% detection accuracy against on-off oscillating malicious nodes.",
      "Reduced adversary isolation latency by 45% over Bayesian Beta reputation models."
    ],
    keywords: ["Machine Learning", "Trust Management", "Behavioral Variance", "Interaction Entropy", "ICDS"],
    bibtex: `@inproceedings{baalla2024ml,
  author = {Baalla, Mohcine and Bouzidi, Driss},
  title = {Machine Learning Detection Approach Against Trust Manipulation Attack in Trust Management Systems},
  booktitle = {Proceedings of the Eighteenth International Conference on Digital Society (ICDS 2024)},
  year = {2024}
}`
  }
];

const PARCOURS_MILESTONES = [
  {
    year: "October 2026",
    category: "leadership",
    title: "IPC Member – 2nd Int. Conference on Big Data Analytics & Applications (BDAA' 2026)",
    institution: "Las Palmas de Gran Canaria, Spain • AC Marriott Hotel Gran Canaria",
    badge: "International Programme Committee (IPC)",
    badgeClass: "badge-sapphire",
    icon: "globe",
    description: "Appointed to the International Programme Committee for BDAA' 2026 in Spain. Curating and reviewing submissions across core tracks including Security, Privacy, and Ethics, Foundations of Big Data Analytics, Systems, Architectures, and Advanced Analytical Techniques, and Data Management."
  },
  {
    year: "2026",
    category: "leadership",
    title: "Organizing Committee – 18th Conference of the European Chapter of the ACL (EACL 2026)",
    institution: "Association for Computational Linguistics (ACL) • Mentors: Prof. Karim Bouzoubaa & Prof. Si Lhoussain Aouragh",
    badge: "International Organizing Committee",
    badgeClass: "badge-purple",
    icon: "users",
    description: "Served on the organizing committee for EACL 2026, a major international conference in computational linguistics and natural language processing. Coordinated operational logistics, program structure support, and on-site hospitality for international participants across the global ACL research community."
  },
  {
    year: "October 2026",
    category: "research",
    title: "MDPI Journal Publication & Final Doctoral Defense Preparation",
    institution: "Smart Systems Laboratory (SSL) • ENSIAS, Mohammed V University in Rabat • Supervisor: Prof. Driss BOUZIDI",
    badge: "Published Journal & Defense Close",
    badgeClass: "badge-emerald",
    icon: "award",
    description: "Published landmark article in the Journal of Cybersecurity and Privacy (MDPI, Vol. 6, Issue 5, Article 168) formulating the Semantic-Gated Structural Diversity Penalty (SDP) in SIoT. Finalized dissertation synthesis consolidating 5 scientific contributions (Structural Diversity Penalty, Variance-Gated Social Endorsement, Continuous-Time Dynamic Graphs, zk-SNARKs Vehicular Privacy, and GNN Cold Start Trust). Approaching final doctoral defense, surpassing all CEDoc ST2I criteria."
  },
  {
    year: "2025",
    category: "award",
    title: "Gold Prize Winner – RallyAI Competition (Security & Sovereignty Track)",
    institution: "Ministry of Digital Transition & Administrative Reform • Merzouga Desert, Morocco",
    badge: "1st Place Gold Prize",
    badgeClass: "badge-amber",
    icon: "award",
    description: "Won First Place (Gold Prize) in the Security and Sovereignty Track at RallyAI in Merzouga, organized by the Moroccan Ministry of Digital Transition and Administrative Reform under the leadership of Madame Amal El Fallah - Seghrouchni. Co-developed and defended sovereign AI security and cryptographic verification architectures alongside team members Zakaria Naji, Saad El hadaoui, Hassan Ouammou, and Yassine Behnane."
  },
  {
    year: "July 2025",
    category: "leadership",
    title: "Organizing Committee – AfricaCrypt 2025 (16th Int. Conference on Cryptology)",
    institution: "ENSIAS, Mohammed V University in Rabat • In Partnership with DGSSI",
    badge: "International Cryptology Leadership",
    badgeClass: "badge-sapphire",
    icon: "shield-check",
    description: "Served on the Organizing Committee for AfricaCrypt 2025 held at ENSIAS in institutional partnership with the DGSSI (Direction Générale de la Sécurité des Systèmes d'Information). Supported a top-tier scientific program spanning post-quantum cryptography, homomorphic encryption, and verifiable secret sharing, working alongside Program Chairs Vincent Rijmen (AES co-designer), Svetla Nikova, Abderrahmane Nitaj, and Pr. Driss Bouzidi."
  },
  {
    year: "2025",
    category: "leadership",
    title: "Participant & Community Contributor – Moroccan Cyber Security Camp (MCSC 2025)",
    institution: "INSEC ENSIAS • Edition 12",
    badge: "Cybersecurity Camp Contributor",
    badgeClass: "badge-cyan",
    icon: "mic",
    description: "Engaged in MCSC Edition 12 organized by INSEC ENSIAS, exploring breakthroughs at the vanguard of cybersecurity, quantum computing resilience, and Post-Quantum Cryptography (PQC). Participated in discussions alongside speakers from academia and industry on agile cryptographic transitions."
  },
  {
    year: "2025",
    category: "research",
    title: "Zero-Knowledge Proofs in SIoV & Trust Manipulation Attack Modeling",
    institution: "IEEE WINCOM 2025 & ACDSA 2025 International Conferences",
    badge: "IEEE & Indexed Conference Proceedings",
    badgeClass: "badge-sapphire",
    icon: "book-open",
    description: "Published and presented 'Zero Knowledge Proof in Vehicular Networks' at IEEE WINCOM 2025 (introducing sub-42 ms Groth16/BN254 zk-SNARK threshold proofs that safeguard vehicle trajectories while establishing cryptographic trust) and 'The Hidden Threat: Analyzing Trust Manipulation Attacks in Trust Management Systems for Vehicular Networks' at ACDSA 2025."
  },
  {
    year: "May 2024",
    category: "leadership",
    title: "Africa Cyber Safe Symposium – Hosted by DGSSI (Marrakech)",
    institution: "Rotana Palmeraie, Marrakech • Organized by DGSSI & ENSIAS",
    badge: "DGSSI High-Level Symposium",
    badgeClass: "badge-emerald",
    icon: "globe",
    description: "Invited delegate representing ENSIAS at the Africa Cyber Safe Symposium convened by the DGSSI (Direction Générale de la Sécurité des Systèmes d'Information) in Marrakech. Participated in high-level exchanges with national security leaders and international experts on continental cyber resilience and collaborative defense frameworks."
  },
  {
    year: "2024",
    category: "leadership",
    title: "Organizing Committee – 9th National Doctoral Colloquium (Doctoriales)",
    institution: "Mohammed V University in Rabat (Rencontre Nationale des Doctoriales)",
    badge: "National Organization",
    badgeClass: "badge-purple",
    icon: "users",
    description: "Organizing committee member for the 9th edition of the National Doctoral Colloquium, facilitating interdisciplinary academic exchange, doctoral workshop coordination, poster competitions, and doctoral training sessions across universities throughout Morocco."
  },
  {
    year: "2024",
    category: "training",
    title: "MFTG Winter School (Pr. Hamidou Tembine) & CEDoc Doctoral Schools",
    institution: "CEDoc ST2I • Instructor: Prof. Hamidou Tembine (IEEE Fellow) • Alongside Jamal El Boujamai & Ahmedreda Aknakaye",
    badge: "Certified Doctoral Training (69+ Hours)",
    badgeClass: "badge-cyan",
    icon: "cpu",
    description: "Completed intensive certified training at the Winter School on Mean-Field-Type Game Theory (MFTG Winter School) delivered by distinguished researcher Professor Hamidou Tembine, applying strategic interaction models to multi-agent decentralized trust. In addition, completed the Summer School on Cybersecurity in the Age of AI (Nov 2024), Doctoral Seminar on Avionics & Embedded Critical Systems (Jun 2024), and Scientific Research Methodology (18h)."
  },
  {
    year: "2024",
    category: "teaching",
    title: "Higher Education Instruction at ENSIAS (Graph Theory & Optimization)",
    institution: "ENSIAS • Department IAD (Informatique et Aide à la Décision) • Engineering Cycles",
    badge: "148+ Certified Teaching Hours",
    badgeClass: "badge-emerald",
    icon: "book-open",
    description: "Delivered 148 hours of certified academic instruction for the common engineering cycle (Tronc Commun S1): 52 hours TD in Graph Theory (topological modeling, shortest paths, flow networks), 52 hours TD in Mathematical Programming & Linear Optimization (Simplex, duality, integer programming), and 44 hours TP in Practical Computer Science Labs. Completed 18 hours of exam and engineering concours proctoring and 48 hours of extracurricular student animation."
  },
  {
    year: "2024",
    category: "research",
    title: "Double Conference Publications: Springer BDIoT & IEEE ICDS (Nice, France)",
    institution: "BDIoT 2024 (Fez) & 18th ICDS 2024 (Nice, France)",
    badge: "Springer LNNS & IEEE ICDS Proceedings",
    badgeClass: "badge-cyan",
    icon: "book-open",
    description: "Published two pioneering conference articles: 'New Detection Approach Against Trust Manipulation Attack in VANET' in Springer Lecture Notes in Networks and Systems (LNNS 887, pp. 1–14, DOI: 10.1007/978-3-031-74491-4_45) and 'Machine Learning Detection Approach Against Trust Manipulation Attack in Trust Management Systems' at IEEE ICDS 2024 in Nice, France (DOI: 10.1109/ICDS62089.2024.10756346)."
  },
  {
    year: "2024",
    category: "research",
    title: "GNN Cold Start Modeling & Multi-Model Anomaly Elimination",
    institution: "Smart Systems Laboratory (SSL), ENSIAS Rabat",
    badge: "Experimental Breakthroughs",
    badgeClass: "badge-emerald",
    icon: "cpu",
    description: "Engineered a Relational Graph Convolutional Network (R-GCN) framework solving the SIoT Cold Start Problem, achieving an RMSE of 0.0467 and MAE of 0.0172, cutting malicious cold-start exploits by over 82%. Validated false-positive elimination models achieving 98.85% accuracy with Random Forest and Decision Trees, and 97.78% precision with SVM under active behavioral switching."
  },
  {
    year: "November 2023",
    category: "award",
    title: "Commencement of Doctoral Research & CNRST PASS Fellowship",
    institution: "Smart Systems Laboratory (SSL), ENSIAS Rabat • Bourse N° 32 UM5R2023",
    badge: "National Fellowship Award",
    badgeClass: "badge-amber",
    icon: "zap",
    description: "Formally registered in the Computer Science doctoral program at CEDoc ST2I under the supervision of Prof. Driss BOUZIDI. Awarded the highly selective PhD-Associate Scholarship (PASS) by the National Center for Scientific and Technical Research (CNRST) and the Ministry of Higher Education, funding elite doctoral research in Artificial Intelligence and Cybersecurity."
  },
  {
    year: "2021 – 2023",
    category: "education",
    title: "Master's Degree in Systems and Services Security (2S)",
    institution: "ENSIAS, Mohammed V University in Rabat, Morocco",
    badge: "Master with High Honors",
    badgeClass: "badge-sapphire",
    icon: "shield-check",
    description: "Graduated with High Honors (Mention Très Bien) from ENSIAS. Specialized in applied cryptography, threat detection architectures, penetration testing, malware reverse engineering, and distributed protocols. Conducted foundational research on trust modeling and adversarial oscillation in vehicular networks, laying the groundwork for doctoral thesis research."
  },
  {
    year: "2020 – 2021",
    category: "education",
    title: "Bachelor of Science in Mathematics & Computer Science",
    institution: "Faculty of Sciences Ben M'sik (FSBM), Hassan II University of Casablanca",
    badge: "Academic Foundation",
    badgeClass: "badge-emerald",
    icon: "compass",
    description: "Comprehensive undergraduate curriculum covering discrete mathematics, graph algorithms, linear programming, numerical analysis, data structures, and foundational computing architectures."
  },
  {
    year: "2017 – 2018",
    category: "education",
    title: "High School Diploma in Mathematical Sciences (Sciences Math)",
    institution: "Mohamed 6 High School, Casablanca, Morocco",
    badge: "Scientific Honors",
    badgeClass: "badge-amber",
    icon: "flag",
    description: "Completed Morocco's elite Mathematical Sciences stream, building rigorous analytical thinking, advanced calculus, algebraic structures, and mathematical problem-solving skills."
  }
];
