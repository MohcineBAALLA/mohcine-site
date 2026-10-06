/**
 * Master Data Source for Mohcine Baalla Academic Portfolio
 * Domain: https://mohcine.site
 * Smart Systems Laboratory (SSL) — ENSIAS, Mohammed V University in Rabat
 */

const RESEARCHER_INFO = {
  name: "Mohcine BAALLA",
  arabicName: "محسن بعلا",
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
  cvPath: "assets/docs/CV_Mohcine_BAALLA.pdf",
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
    count: "1",
    suffix: " In Press",
    label: "Accepted Paper",
    detail: "AISDS 2025 (Fake Relationship Attack in SIoT)",
    badgeClass: "badge-amber"
  },
  {
    count: "4",
    suffix: " Active",
    label: "Pipeline Manuscripts",
    detail: "Targeting IEEE Access, Elsevier, IEEE IoT-J, TNSM",
    badgeClass: "badge-purple"
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
    label: "Doctoral Defense Ready",
    detail: "Exceeds ENSIAS CEDoc Scientific Publication Criteria",
    badgeClass: "badge-sapphire"
  }
];

const NEWS_DATA = [
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
    date: "September 2025",
    badge: "Accepted & In Press",
    badgeClass: "badge-amber",
    title: "Paper Accepted at AISDS 2025 (Springer LNNS)",
    description: "Groundbreaking paper 'Introducing and Analyzing the Fake Relationship Attack in Social IoT' accepted and registered for presentation at the International Conference on Artificial Intelligence and Smart Digital Systems.",
    linkText: "View Paper Details",
    url: "publications.html#baalla2025introducing"
  },
  {
    date: "June 2025",
    badge: "IEEE WINCOM 2025",
    badgeClass: "badge-sapphire",
    title: "Presented Zero-Knowledge Proofs in Vehicular Networks",
    description: "Delivered research presentation on privacy-preserving zk-SNARK authentication schemes for SIoV at the IEEE International Conference on Wireless Networks and Mobile Communications.",
    linkText: "View IEEE Paper",
    url: "publications.html#baalla2025zkp"
  },
  {
    date: "April 2025",
    badge: "ACDSA 2025",
    badgeClass: "badge-cyan",
    title: "Published Trust Manipulation Attack Analysis",
    description: "'The Hidden Threat: Analyzing Trust Manipulation Attacks in Trust Management Systems for Vehicular Networks' presented at the International Conference on Artificial Intelligence, Computer, Data Sciences and Applications.",
    linkText: "View Conference Paper",
    url: "publications.html#baalla2025hidden"
  },
  {
    date: "2024",
    badge: "Dual Conference Milestone",
    badgeClass: "badge-emerald",
    title: "Springer BDIoT & IEEE ICDS 2024 Publications",
    description: "Presented adaptive vehicular thresholding at Springer BDIoT 2024 and machine learning behavioral variance detection at ICDS 2024 in Nice, France & Marrakesh, Morocco.",
    linkText: "View 2024 Works",
    url: "publications.html#baalla2024adaptive"
  }
];

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
    id: "baalla2025introducing",
    category: "accepted",
    categoryLabel: "Conference (In Press)",
    statusBadge: "Accepted & Registered | In Press",
    statusClass: "badge-amber",
    title: "Introducing and Analyzing the Fake Relationship Attack in Social IoT",
    authors: ["Mohcine Baalla", "Driss Bouzidi"],
    venue: "Proceedings of the International Conference on Artificial Intelligence and Smart Digital Systems (AISDS 2025)",
    venueDetails: "Springer Lecture Notes in Networks and Systems (LNNS), 2025",
    year: 2025,
    doi: "In Press",
    doiUrl: "#",
    abstract: "The Social Internet of Things (SIoT) extends traditional IoT by enabling devices to form autonomous social ties inspired by human relationships (ownership, co-location, co-work, and friendship). While these social connections enhance efficiency and service discovery, they introduce an expanded attack surface targeting the social trust layer. In this paper, we formally introduce and analyze the Fake Relationship Attack (FRA), a novel SIoT-specific threat where malicious devices forge or manipulate social ties to illegitimately inherit trust, elevate privileges, or gain unauthorized access. We analyze the adversary's capabilities, including Sybil creation, friend-of-a-friend exploitation, and strategic temporal manipulation. Through realistic Contiki-NG/Cooja simulations, we show how FRA subverts trust propagation, causing catastrophic network trust degradation while conventional IoT security mechanisms focused on device integrity or communication encryption fail to detect a single fraudulent relationship. This work establishes the formal foundation for relationship-based threat modeling in SIoT.",
    contributions: [
      "First formal characterization, mathematical model, and taxonomy of the Fake Relationship Attack (FRA) in SIoT.",
      "Detailed threat modeling of friend-of-a-friend transitive trust manipulation.",
      "Empirical simulation in Cooja proving that physical link-layer cryptography fails against social graph attacks."
    ],
    keywords: ["Fake Relationship Attack (FRA)", "Social IoT", "Threat Modeling", "Transitive Trust", "Cooja Simulation"],
    bibtex: `@inproceedings{baalla2025introducing,
  author = {Baalla, Mohcine and Bouzidi, Driss},
  title = {Introducing and Analyzing the Fake Relationship Attack in Social IoT},
  booktitle = {Proceedings of the International Conference on Artificial Intelligence and Smart Digital Systems (AISDS 2025)},
  series = {Lecture Notes in Networks and Systems},
  publisher = {Springer},
  year = {2025},
  note = {Accepted and In Press}
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
  },
  {
    id: "baalla2026mimicry",
    category: "pipeline",
    categoryLabel: "Journal Pipeline",
    statusBadge: "Advanced Pipeline | Targeted: IEEE Access",
    statusClass: "badge-purple",
    title: "Defeating Perfect Temporal Mimicry in SIoT: A Deep Semantic Relational Attention Framework",
    authors: ["Mohcine Baalla", "Driss Bouzidi"],
    venue: "Targeted Venue: IEEE Access",
    venueDetails: "Submission Target: 2026",
    year: 2026,
    doi: "Manuscript in Preparation",
    doiUrl: "#",
    abstract: "Counters Generative Adversarial Network (GAN)-based Pareto temporal mimicry where adversaries synthesize transaction timings indistinguishable from honest nodes. Proposes Multihead Self-Attention over Continuous-Time Dynamic Graphs (CTDG) with semantic relational masking. Achieves Average Precision (AP) = 0.9707, False Positive Rate (FPR) = 0.0023, and ultra-low 0.17 ms edge inference latency.",
    contributions: [
      "Addresses GAN-driven Pareto temporal mimicry in autonomous SIoT networks.",
      "Designs continuous-time dynamic graph attention architecture with relational masking.",
      "Achieves AP = 0.9707, FPR = 0.0023 with 0.17 ms edge inference latency."
    ],
    keywords: ["Temporal Mimicry", "Continuous-Time Dynamic Graphs", "CTDG", "Relational Attention", "GAN Defense"],
    bibtex: `@article{baalla2026mimicry,
  author = {Baalla, Mohcine and Bouzidi, Driss},
  title = {Defeating Perfect Temporal Mimicry in SIoT: A Deep Semantic Relational Attention Framework},
  journal = {IEEE Access},
  note = {Under Preparation / Target 2026},
  year = {2026}
}`
  },
  {
    id: "baalla2026rehab",
    category: "pipeline",
    categoryLabel: "Journal Pipeline",
    statusBadge: "Advanced Pipeline | Targeted: Elsevier Computers & Security",
    statusClass: "badge-purple",
    title: "Temporal-Gated Social Rehabilitation for Lightweight Trust Management and TMA Resistance in the Social Internet of Things",
    authors: ["Mohcine Baalla", "Driss Bouzidi"],
    venue: "Targeted Venue: Elsevier Computers & Security",
    venueDetails: "Submission Target: 2026",
    year: 2026,
    doi: "Manuscript in Preparation",
    doiUrl: "#",
    abstract: "Solves the trust-isolation deadlock where falsely penalized benign nodes become permanently quarantined due to transient environmental loss. Introduces variance-gated social endorsements, sequential transition-rate gating, and burst-length validation, achieving 98.4% benign node recovery while preventing 100% of malicious recidivism.",
    contributions: [
      "Breaks the trust isolation deadlock for benign nodes facing intermittent dropouts.",
      "Formulates variance-gated social endorsements and sequential transition-rate gating.",
      "Empirically proves 98.4% benign recovery with zero malicious recidivism."
    ],
    keywords: ["Social Rehabilitation", "Trust Deadlock", "Sequential Gating", "Elsevier Computers & Security"],
    bibtex: `@article{baalla2026rehabilitation,
  author = {Baalla, Mohcine and Bouzidi, Driss},
  title = {Temporal-Gated Social Rehabilitation for Lightweight Trust Management and TMA Resistance in the Social Internet of Things},
  journal = {Computers & Security},
  publisher = {Elsevier},
  note = {Under Preparation / Target 2026},
  year = {2026}
}`
  },
  {
    id: "baalla2026coldstart",
    category: "pipeline",
    categoryLabel: "Journal Pipeline",
    statusBadge: "Advanced Pipeline | Targeted: IEEE Internet of Things Journal",
    statusClass: "badge-purple",
    title: "Integrity-Constrained Trust Bootstrapping Under Zero Behavioral Evidence in the Social IoT",
    authors: ["Mohcine Baalla", "Driss Bouzidi"],
    venue: "Targeted Venue: IEEE Internet of Things Journal (IEEE IoT-J)",
    venueDetails: "Targeted Submission",
    year: 2026,
    doi: "Manuscript in Preparation",
    doiUrl: "#",
    abstract: "Solves the structural cold-start dilemma for newly deployed IoT devices lacking previous interaction logs. Combines multi-relational Knowledge Graph priors across POR, OOR, CLOR, CWOR, and SOR with Inductive Graph Neural Networks to safely initialize new node reputations while strictly bounding adversarial Sybil injection risks.",
    contributions: [
      "Solves zero-evidence cold-start dilemma without trusting unverified initial ratings.",
      "Synthesizes structural Knowledge Graph priors across five standard SIoT relational types.",
      "Employs Inductive Graph Neural Networks resilient to Sybil spoofing."
    ],
    keywords: ["Cold-Start Bootstrapping", "Inductive GNN", "Knowledge Graph", "IEEE IoT-J", "SIoT Relations"],
    bibtex: `@article{baalla2026coldstart,
  author = {Baalla, Mohcine and Bouzidi, Driss},
  title = {Integrity-Constrained Trust Bootstrapping Under Zero Behavioral Evidence in the Social IoT},
  journal = {IEEE Internet of Things Journal},
  note = {Targeted Submission},
  year = {2026}
}`
  },
  {
    id: "baalla2026tgn",
    category: "pipeline",
    categoryLabel: "Journal Pipeline",
    statusBadge: "Advanced Pipeline | Targeted: IEEE TNSM",
    statusClass: "badge-purple",
    title: "A Continuous-Time Dynamic Graph Framework for Mitigating Delayed Trust Manipulation Attacks in SIoT Architectures",
    authors: ["Mohcine Baalla", "Driss Bouzidi"],
    venue: "Targeted Venue: IEEE Transactions on Network and Service Management (TNSM)",
    venueDetails: "Targeted Submission",
    year: 2026,
    doi: "Manuscript in Preparation",
    doiUrl: "#",
    abstract: "Employs Temporal Graph Networks (TGN) with continuous memory updates over asynchronous event streams to defeat ultra-long-horizon delayed TMA that effortlessly evades fixed-duration sliding windows. Evaluated against multi-month simulated interaction traces.",
    contributions: [
      "Addresses ultra-long-horizon delayed defections designed to outlast sliding-window detectors.",
      "Integrates continuous memory update modules over asynchronous edge event streams.",
      "Maintains low memory footprint suitable for distributed gateway nodes."
    ],
    keywords: ["Temporal Graph Networks", "TGN", "Delayed TMA", "IEEE TNSM", "Event Streams"],
    bibtex: `@article{baalla2026tgn,
  author = {Baalla, Mohcine and Bouzidi, Driss},
  title = {A Continuous-Time Dynamic Graph Framework for Mitigating Delayed Trust Manipulation Attacks in SIoT Architectures},
  journal = {IEEE Transactions on Network and Service Management},
  note = {Targeted Submission},
  year = {2026}
}`
  }
];

const RESEARCH_PILLARS_DATA = [
  {
    num: "01",
    id: "pillar-siot",
    title: "Social Internet of Things & Decentralized Trust",
    tagline: "Autonomous service discovery and relationship-centric dependability without cloud arbiters.",
    description: "Investigating how smart physical devices establish and navigate autonomous social relationships—Parental Object Relationship (POR), Ownership Object Relationship (OOR), Co-Location Object Relationship (CLOR), Co-Work Object Relationship (CWOR), and Social Object Relationship (SOR)—to discover services, verify dependability, and compute peer reputation across decentralized topologies without centralized trust authorities.",
    highlights: [
      "Formalizing multi-relational SIoT interaction graphs.",
      "Transitive multi-hop trust propagation algorithms.",
      "Localized trust calculation avoiding global graph traversal."
    ],
    icon: "network"
  },
  {
    num: "02",
    id: "pillar-threats",
    title: "Adversarial Threat Modeling & Relationship-Layer Attacks",
    tagline: "Uncovering exploits targeting the social trust fabric rather than device hardware.",
    description: "Pioneering novel threat models against attacks targeting the relational layer of IoT networks. Formally introduced the Fake Relationship Attack (FRA)—where colluding adversaries synthesize fraudulent social ties to inherit trust and bypass outlier filters—as well as analyzing Trust Manipulation Attacks (TMA), on-off behavioral oscillations, and strategic temporal defection.",
    highlights: [
      "First formal taxonomy of Fake Relationship Attacks (FRA).",
      "Analysis of mathematical flaws in traditional exponential trust decay.",
      "Empirical proof that physical link-layer crypto fails against social attacks."
    ],
    icon: "shield-alert"
  },
  {
    num: "03",
    id: "pillar-ctdg",
    title: "Continuous-Time Dynamic Graphs & Relational Attention",
    tagline: "Deep graph architectures for asynchronous, event-driven edge interaction streams.",
    description: "Developing neural trust architectures capable of processing irregular, continuous event streams. Leveraging Continuous-Time Dynamic Graphs (CTDG), Multi-Head Self-Attention, and Temporal Graph Networks (TGN) with semantic relational masking to detect long-delay behavioral defections and adversarial GAN temporal mimicry.",
    highlights: [
      "Multi-Head Self-Attention over Continuous-Time Dynamic Graphs.",
      "Detection of GAN-generated Pareto temporal mimicry with AP = 0.9707.",
      "Ultra-low 0.17 ms edge inference latency on embedded platforms."
    ],
    icon: "cpu"
  },
  {
    num: "04",
    id: "pillar-zkp",
    title: "Privacy-Preserving Cryptographic Verification (zk-SNARKs)",
    tagline: "Resolving the fundamental privacy vs. trust dilemma in mobile and vehicular networks.",
    description: "Engineering Non-Interactive Zero-Knowledge Proofs of Knowledge (zk-SNARKs using Groth16 / BN254) enabling constrained mobile nodes and connected vehicles (SIoV) to cryptographically prove that their trust reputation satisfies a required threshold (T_i >= τ) without disclosing their identity, transaction history, or geographical trajectory.",
    highlights: [
      "Sub-42 ms proof generation on constrained edge hardware.",
      "Sub-3.2 ms verification time on Roadside Units (RSUs) and gateways.",
      "Zero identity or trajectory exposure for connected vehicles."
    ],
    icon: "lock"
  },
  {
    num: "05",
    id: "pillar-rehab",
    title: "Resilient Social Rehabilitation & Zero-Evidence Cold-Start",
    tagline: "Breaking trust-isolation deadlocks and safely onboarding newly deployed nodes.",
    description: "Eliminating the 'trust isolation deadlock' where benign devices with transient network dropouts become permanently quarantined. Designing temporal-gated rehabilitation protocols with sequential burst gating, and utilizing inductive Knowledge Graph priors over SIoT relations to safely bootstrap newly deployed IoT devices with zero interaction history.",
    highlights: [
      "98.4% benign node recovery with zero malicious recidivism.",
      "Multi-relational Knowledge Graph priors over POR, OOR, CLOR, CWOR, SOR.",
      "Inductive Graph Neural Network bootstrapping immune to Sybil flooding."
    ],
    icon: "refresh-cw"
  }
];

const PROJECTS_DATA = [
  {
    id: "proj-cooja",
    category: "testbed",
    categoryLabel: "Doctoral Research Testbed",
    title: "Contiki-NG & Cooja Sensor Emulation Testbed",
    subtitle: "Hardware-accurate cycle-level emulation of constrained IoT devices",
    description: "Developed and calibrated a 51-node distributed enterprise SIoT testbed on Contiki-NG and Cooja. Emulates Tmote Sky / MSP430 sensor nodes with CC2420 wireless transceivers executing 6LoWPAN, RPL routing, and IEEE 802.15.4 links. Implements edge-native C modules for the Structural Diversity Penalty (SDP) operating in under 2.4 KB RAM.",
    stack: ["Contiki-NG", "Cooja", "C / Embedded C", "6LoWPAN", "RPL", "IEEE 802.15.4"],
    metrics: "51+ Nodes | <2.4 KB RAM | F1: 98.6%",
    featured: true
  },
  {
    id: "proj-veins",
    category: "testbed",
    categoryLabel: "Doctoral Research Testbed",
    title: "OMNeT++, Veins & SUMO Vehicular Co-Simulation",
    subtitle: "High-fidelity macroscopic and microscopic vehicular ad-hoc co-simulation",
    description: "Coupled simulation platform linking SUMO (realistic vehicle kinematics and microscopic road traffic in urban/highway environments), Veins (IEEE 802.11p DSRC wireless vehicular physics), and OMNeT++ (discrete event network protocols). Benchmarks adaptive trust thresholds and machine learning TMA detectors under dynamic vehicle speeds.",
    stack: ["OMNeT++", "Veins", "SUMO", "C++", "IEEE 802.11p", "Python"],
    metrics: "High-speed mobility | 96.1% attack isolation | 38.2% false alarm reduction",
    featured: true
  },
  {
    id: "proj-ctdg",
    category: "testbed",
    categoryLabel: "Doctoral Research Testbed",
    title: "Continuous-Time Dynamic Graph (CTDG) Framework",
    subtitle: "Relational deep graph learning pipeline for asynchronous IoT interaction streams",
    description: "Engineered deep graph neural network pipelines built with PyTorch Geometric (PyG) and PyG Temporal. Evaluates continuous interaction event streams, computes multi-head relational attention, and maintains dynamic node embeddings to isolate GAN-driven Pareto temporal mimicry and long-horizon delayed behavioral switching.",
    stack: ["PyTorch Geometric", "PyG Temporal", "Python", "CUDA", "Continuous-Time Graphs"],
    metrics: "AP: 0.9707 | FPR: 0.0023 | 0.17 ms inference",
    featured: true
  },
  {
    id: "proj-zkp",
    category: "testbed",
    categoryLabel: "Doctoral Research Testbed",
    title: "Edge Zero-Knowledge Cryptographic Prover (zk-SNARKs)",
    subtitle: "Privacy-preserving trust proof generation for resource-constrained gateways",
    description: "Cryptographic testbed utilizing BN254 elliptic curves and Groth16 zk-SNARK proof systems. Benchmarked on embedded edge processors and Linux ARM gateways to achieve sub-42 ms proof generation and sub-3.2 ms verification of trust threshold compliance without leaking identities or trajectories.",
    stack: ["zk-SNARKs", "Groth16", "BN254", "Rust / C++", "Python", "ARM Linux"],
    metrics: "<42 ms proof gen | <3.2 ms verification",
    featured: true
  },
  {
    id: "proj-anomaly",
    category: "ml",
    categoryLabel: "AI & Machine Learning",
    title: "Anomaly Detection in IoT Networks Using Deep Learning",
    subtitle: "Multi-layer neural network architecture for zero-day threat detection",
    description: "Engineered an end-to-end deep learning framework analyzing packet capture sequences and telemetry in IoT environments. Evaluates flow feature vectors to distinguish benign sensor traffic from stealthy scanning and botnet orchestrations.",
    stack: ["Python", "TensorFlow / PyTorch", "Scikit-learn", "Wireshark", "Data Mining"],
    metrics: "High-precision anomaly classification",
    featured: false
  },
  {
    id: "proj-gnn-attack",
    category: "ml",
    categoryLabel: "AI & Graph AI",
    title: "Graph Neural Network for Attack Detection",
    subtitle: "Topological feature aggregation over network communication graphs",
    description: "Constructed graph convolutional networks (GCN) and Graph Attention Networks (GAT) to model inter-node communication topologies, detecting distributed denial-of-service and collusive Sybil nodes through structural neighborhood anomaly scores.",
    stack: ["PyTorch Geometric", "NetworkX", "Graph AI", "Python"],
    metrics: "Robust structural anomaly detection",
    featured: false
  },
  {
    id: "proj-scanner",
    category: "security",
    categoryLabel: "Cybersecurity & Systems",
    title: "Multi-Threaded Port Scanner & Banner Grabber",
    subtitle: "High-speed network reconnaissance and service enumeration tool",
    description: "Developed an asynchronous multi-threaded port scanner in Python capable of rapid TCP SYN/Connect scanning, protocol fingerprinting, and automated banner grabbing with integrated rate limiting.",
    stack: ["Python", "Socket Programming", "Multi-threading", "Network Security"],
    metrics: "Fast asynchronous socket scanning",
    featured: false
  },
  {
    id: "proj-dos-ml",
    category: "security",
    categoryLabel: "Cybersecurity & ML",
    title: "DOS/DDOS Attack Detection Using Machine Learning",
    subtitle: "Real-time flow telemetry classifier against high-volume flood attacks",
    description: "Implemented random forest and XGBoost classification models over high-speed network flow records (NetFlow/IPFIX) to identify SYN floods, UDP amplification, and HTTP floods with sub-second alerting.",
    stack: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Network Security"],
    metrics: ">99% detection on benchmark datasets",
    featured: false
  },
  {
    id: "proj-carpooling",
    category: "dev",
    categoryLabel: "Full-Stack Web App",
    title: "Carpooling Web Application Platform",
    subtitle: "Full-stack university ride-sharing portal with geolocation and scheduling",
    description: "Architected and deployed a responsive web platform facilitating university carpooling with route matching, user reputation ratings, secure authentication, and real-time scheduling.",
    stack: ["React", "Express.js", "Node.js", "PostgreSQL", "REST APIs"],
    metrics: "Production-ready full-stack architecture",
    featured: false
  },
  {
    id: "proj-jwt-tls",
    category: "security",
    categoryLabel: "Cybersecurity & Web",
    title: "Hardened Web Security Architecture with JWT & TLS/SSL",
    subtitle: "Defense-in-depth web application security hardening and forensic logging",
    description: "Implemented secure authentication pipelines with JWT token rotation, cryptographic hashing, granular logging levels, rate limiting, and strict TLS/SSL configuration.",
    stack: ["Python", "JWT", "TLS/SSL", "Security Hardening", "Logging Frameworks"],
    metrics: "OWASP Top 10 compliance",
    featured: false
  },
  {
    id: "proj-gns3-tunnel",
    category: "security",
    categoryLabel: "Network Engineering",
    title: "IPv6-over-IPv4 Tunneling Architecture in GNS3",
    subtitle: "Transition mechanism simulation with dynamic routing protocols",
    description: "Configured dual-stack routing environments, automatic 6to4 tunnels, and GRE tunneling over simulated enterprise topologies running OSPFv3 and BGP.",
    stack: ["GNS3", "Cisco IOS", "IPv6", "GRE Tunneling", "OSPFv3", "Wireshark"],
    metrics: "Seamless dual-stack interoperability",
    featured: false
  },
  {
    id: "proj-iso",
    category: "security",
    categoryLabel: "Information Security Governance",
    title: "ISO/IEC 27001 & ISO 27003 Implementation Case Study",
    subtitle: "Comprehensive information security management system (ISMS) audit",
    description: "Authored an end-to-end ISMS implementation blueprint covering risk assessment matrices, Statement of Applicability (SoA), security control mapping, and incident management procedures.",
    stack: ["ISO/IEC 27001", "ISO 27003", "Risk Management", "Compliance Audit"],
    metrics: "Comprehensive ISMS blueprint",
    featured: false
  }
];

const EDUCATION_DATA = [
  {
    degree: "Doctor of Philosophy (PhD) in Computer Science & Cybersecurity",
    period: "Nov 2023 – Present (4th-Year Candidate)",
    institution: "National School of Computer Science and Systems Analysis (ENSIAS)",
    university: "Mohammed V University in Rabat, Morocco",
    laboratory: "Smart Systems Laboratory (SSL)",
    supervisor: "Supervised by Prof. Driss BOUZIDI",
    details: [
      "Thesis: Resilient Trust Management, Adversarial Threat Modeling, and Multi-Layer Defenses in Social IoT and Vehicular Networks.",
      "Recipient of the prestigious PhD-Associate Scholarship (PASS) awarded by CNRST and the Ministry of Higher Education.",
      "Exceeds ENSIAS CEDoc Doctoral Defense publication requirements with 5 peer-reviewed works (MDPI, IEEE, Springer)."
    ],
    badge: "PhD Candidate",
    badgeClass: "badge-sapphire"
  },
  {
    degree: "Master's Degree in Systems and Services Security (2S)",
    period: "Sep 2021 – Sep 2023",
    institution: "National School of Computer Science and Systems Analysis (ENSIAS)",
    university: "Mohammed V University in Rabat, Morocco",
    supervisor: "High Honors",
    details: [
      "In-depth specialization in advanced cryptography, network security, penetration testing, distributed architectures, and cloud security.",
      "Graduated with High Honors (Mention Très Bien).",
      "Conducted research on security architectures, trust models, and network vulnerability mitigation."
    ],
    badge: "Master ENSIAS",
    badgeClass: "badge-cyan"
  },
  {
    degree: "Bachelor's Degree (Licence) in Mathematical Sciences & Computer Science",
    period: "Sep 2020 – Jul 2021",
    institution: "Faculty of Sciences Ben M'sik (FSBM)",
    university: "Hassan II University of Casablanca, Morocco",
    supervisor: "Foundational Honors",
    details: [
      "Rigorous mathematical foundations in discrete mathematics, abstract algebra, linear programming, and graph theory.",
      "Core computer science curriculum in data structures, algorithms, operating systems, and database management."
    ],
    badge: "Licence FSBM",
    badgeClass: "badge-emerald"
  },
  {
    degree: "High School Diploma (Baccalauréat) in Mathematical Sciences",
    period: "Sep 2017 – Jul 2018",
    institution: "Mohamed 6 High School",
    university: "Casablanca, Morocco",
    supervisor: "Scientific Track",
    details: [
      "Specialized in Mathematical Sciences track (Filière Sciences Mathématiques) with intensive mathematics and physics curriculum."
    ],
    badge: "Baccalauréat SM",
    badgeClass: "badge-amber"
  }
];

const TEACHING_DATA = [
  {
    role: "Instructor / Academic Teaching Engagement",
    institution: "ENSIAS, Mohammed V University in Rabat",
    period: "Academic Years 2023 – Present",
    description: "Delivering theoretical lectures and hands-on laboratory courses for engineering students, bridging rigorous mathematical concepts with applied systems implementation.",
    courses: [
      { name: "Graph Theory", level: "Engineering Cycle", desc: "Modeling topologies, graph traversal algorithms, connectivity, relational structures." },
      { name: "Linear Programming & Optimization", level: "Engineering Cycle", desc: "Simplex algorithm, duality theory, integer programming, combinatorial optimization." },
      { name: "Merise Methodology & Information Systems Design", level: "Engineering Cycle", desc: "Conceptual data modeling (MCD/MLD/MOT), relational mapping." },
      { name: "Mobile Application Development", level: "Applied Labs", desc: "Modern cross-platform and native mobile software architectures, REST integration." },
      { name: "Internet Protocols & Applications", level: "Networking Labs", desc: "TCP/IP protocol stack, socket programming, application-layer services, Wireshark packet capture analysis." },
      { name: "Security-Oriented Python Programming", level: "Security Engineering", desc: "Defensive and offensive scripting, socket programming, cryptographic implementations." },
      { name: "Introduction to Systems Security", level: "Cybersecurity Cycle", desc: "Access control models, operating system hardening, authentication mechanisms." }
    ]
  },
  {
    role: "System & Linux Instructor",
    institution: "JobInTech Program (Morocco)",
    period: "Professional Training Engagement",
    description: "Trained aspiring software engineers and cybersecurity professionals on system-level administration, Linux shell scripting, server automation, and process management.",
    courses: [
      { name: "Linux Administration & Shell Scripting", level: "Professional Bootcamp", desc: "Permissions, systemd services, Bash automation, network configuration." }
    ]
  },
  {
    role: "Upcoming Teaching Assignments",
    institution: "ENSIAS, Mohammed V University in Rabat",
    period: "Upcoming Academic Semester",
    description: "Scheduled to teach advanced foundational and applied modules in computer science and cybersecurity.",
    courses: [
      { name: "Advanced Python Programming", level: "Undergraduate / Graduate", desc: "Object-oriented design, asynchronous paradigms, scientific computing stack." },
      { name: "Applied Cryptography", level: "Graduate Cycle", desc: "Symmetric and asymmetric encryption, digital signatures, hash functions, Zero-Knowledge Proofs." }
    ]
  }
];

const SKILLS_DATA = {
  programming: [
    { name: "Python", level: 95, tag: "Scientific & AI Stack" },
    { name: "C / Embedded C", level: 92, tag: "Contiki-NG / Cooja / Systems" },
    { name: "C++", level: 85, tag: "OMNeT++ / Veins simulation" },
    { name: "Java", level: 88, tag: "Enterprise / Distributed Systems" },
    { name: "Bash / Shell Scripting", level: 90, tag: "Linux Automation" },
    { name: "JavaScript / Node / React", level: 85, tag: "Full-Stack Web" },
    { name: "PHP / SQL", level: 82, tag: "Databases & Backend" },
    { name: "LaTeX", level: 95, tag: "Academic Publishing & BibTeX" }
  ],
  aiGraph: [
    { name: "PyTorch & PyTorch Geometric", level: 92, tag: "GNNs & Graph Deep Learning" },
    { name: "PyG Temporal", level: 88, tag: "Continuous-Time Dynamic Graphs" },
    { name: "Scikit-Learn", level: 95, tag: "Machine Learning Classifiers" },
    { name: "NetworkX", level: 92, tag: "Complex Network Analysis" },
    { name: "NumPy / Pandas", level: 95, tag: "Data Analysis & Scientific Computing" },
    { name: "Matplotlib & Seaborn", level: 92, tag: "Scientific Data Visualization" }
  ],
  simulation: [
    { name: "Contiki-NG & Cooja", level: 96, tag: "Cycle-Accurate IoT Sensor Emulation" },
    { name: "OMNeT++ & Veins", level: 90, tag: "Vehicular Network Simulation" },
    { name: "SUMO", level: 88, tag: "Microscopic Urban Mobility" },
    { name: "Wireshark", level: 95, tag: "Deep Packet Inspection & Analysis" },
    { name: "GNS3 / Mininet", level: 85, tag: "Network Topology Emulation" },
    { name: "NS-2 / NS-3", level: 80, tag: "Discrete Event Network Simulators" }
  ],
  securityCrypto: [
    { name: "Zero-Knowledge Proofs (zk-SNARKs)", level: 90, tag: "Groth16, BN254 elliptic curves" },
    { name: "Trust Management Systems (TMS)", level: 98, tag: "Doctoral Specialization" },
    { name: "Adversarial Threat Modeling", level: 95, tag: "FRA, TMA, Sybil, Collusion Rings" },
    { name: "Penetration Testing Tools", level: 88, tag: "Nmap, Burp Suite, Nessus, Metasploit" },
    { name: "ISO/IEC 27001 & 27003", level: 85, tag: "Information Security Standards" },
    { name: "Malware Analysis & Incident Response", level: 82, tag: "Threat Intelligence" }
  ],
  systemsDevops: [
    { name: "Linux (Ubuntu, Debian, Kali)", level: 95, tag: "Daily Driver & Research Environment" },
    { name: "Docker & Containerization", level: 88, tag: "Reproducible Research Environments" },
    { name: "Git, GitHub, GitLab", level: 94, tag: "Version Control & Collaboration" },
    { name: "Proxmox VE & VMware vSphere", level: 84, tag: "Virtualization & Hypervisors" },
    { name: "Databases (MySQL, Oracle, SQLite)", level: 86, tag: "Relational Data Management" }
  ],
  languages: [
    { name: "Arabic", level: 100, tag: "Native Language" },
    { name: "French", level: 95, tag: "Bilingual / Professional & Academic" },
    { name: "English", level: 95, tag: "Fluent / Academic Writing & Conferences" }
  ]
};

const PARCOURS_MILESTONES = [
  {
    year: "2026",
    title: "Major Milestone: MDPI Journal Article & Doctoral Defense Preparation",
    institution: "ENSIAS, Mohammed V University in Rabat",
    badge: "Publication & Defense Ready",
    badgeClass: "badge-emerald",
    icon: "award",
    description: "Published breakthrough article in the Journal of Cybersecurity and Privacy (MDPI, Vol. 6, Issue 5) introducing the Semantic-Gated Structural Diversity Penalty (SDP) in SIoT. Finalizing doctoral dissertation manuscript under the direction of Prof. Driss Bouzidi, surpassing CEDoc ENSIAS doctoral criteria."
  },
  {
    year: "2025",
    title: "International Conferences & zk-SNARK Vehicular Breakthroughs",
    institution: "IEEE WINCOM, ACDSA & AISDS Conferences",
    badge: "International Exposure",
    badgeClass: "badge-sapphire",
    icon: "globe",
    description: "Presented privacy-preserving zk-SNARK protocols at IEEE WINCOM 2025. Analyzed Trust Manipulation Attacks at ACDSA 2025 in Antalya, Turkey. Accepted paper at AISDS 2025 (Springer LNNS) introducing the Fake Relationship Attack (FRA) in Social IoT."
  },
  {
    year: "2024",
    title: "Double Conference Presentations & Machine Learning Detection",
    institution: "ICDS (Nice, France & Marrakesh) & BDIoT 2024",
    badge: "Research Milestones",
    badgeClass: "badge-cyan",
    icon: "book-open",
    description: "Presented novel ML detection against Trust Manipulation Attacks at the 18th International Conference on Digital Society (ICDS 2024, Nice, France) and adaptive vehicular thresholds at Springer BDIoT 2024. Active academic teaching at ENSIAS in Graph Theory and Optimization."
  },
  {
    year: "2023",
    title: "Commencement of Doctoral Research & CNRST PASS Fellowship",
    institution: "Smart Systems Laboratory (SSL), ENSIAS, Rabat",
    badge: "Doctoral Fellowship Award",
    badgeClass: "badge-amber",
    icon: "zap",
    description: "Awarded the highly competitive PhD-Associate Scholarship (PASS) by CNRST and the Ministry of Higher Education for exceptional research potential in AI and Cybersecurity. Joined the Smart Systems Laboratory under Prof. Driss Bouzidi."
  },
  {
    year: "2021 – 2023",
    title: "Master's Degree in Systems and Services Security (2S)",
    institution: "ENSIAS, Mohammed V University in Rabat",
    badge: "Master with High Honors",
    badgeClass: "badge-sapphire",
    icon: "shield-check",
    description: "Graduated with High Honors (Mention Très Bien) from ENSIAS. Specialized in distributed cryptography, threat detection, penetration testing, and security protocol engineering. Laid foundational work for doctoral research in trust models."
  },
  {
    year: "2020 – 2021",
    title: "Bachelor's Degree in Mathematics & Computer Science",
    institution: "Faculty of Sciences Ben M'sik (FSBM), Casablanca",
    badge: "Academic Foundation",
    badgeClass: "badge-emerald",
    icon: "compass",
    description: "Intensive training in discrete mathematics, algorithmic optimization, graph theory, data structures, and foundational computing principles."
  },
  {
    year: "2017 – 2018",
    title: "Baccalauréat in Mathematical Sciences (Sciences Math)",
    institution: "Mohamed 6 High School, Casablanca",
    badge: "Scientific Baccalauréat",
    badgeClass: "badge-amber",
    icon: "flag",
    description: "Completed Morocco's elite Mathematical Sciences curriculum, fostering analytical rigor, problem solving, and computational curiosity."
  }
];
