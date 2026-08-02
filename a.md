# Prateek Agrahari — Portfolio Migration Data

This document aggregates all your personal information, academic credentials, work experience, project details, skill competencies, and online profiles. Use this as a single source of truth to populate your new portfolio.

---

## 1. Identity & Profile

* **Full Name:** Prateek Agrahari
* **Current Location:** IIT Jodhpur, Rajasthan, India
* **Primary Title / Role:** Data & ML Engineer
* **Alternative Titles:** RAG Systems Builder | NLP Pipeline Architect | Agentic AI Developer
* **Academic Tagline:** IIT Jodhpur · B.Tech: Minor in AI '2027 (expected)
* **Summary Bio:** 
  > Building production-grade ML pipelines, retrieval systems, and agentic AI — from raw data ingestion to intelligent LLM-driven output. 
  >
  > *My edge:* I approach ML from a systems lens, focusing on latency, data quality, pipeline reproducibility, and evaluation harnesses — not just training accuracy. Every project I ship is end-to-end and measurable.

---

## 2. Core Contact & Social Links

* **Email:** [b23bb1033@iitj.ac.in](mailto:b23bb1033@iitj.ac.in) 
  * *(Direct compose link: [Gmail Compose](https://mail.google.com/mail/?view=cm&fs=1&to=b23bb1033@iitj.ac.in))*
* **GitHub Profile:** [github.com/prateek-1110](https://github.com/prateek-1110)
* **LinkedIn Profile:** [linkedin.com/in/prateek1110/](https://www.linkedin.com/in/prateek1110/)
* **Resume (ML/AI Engineer):** [Google Drive Link](https://drive.google.com/file/d/1BbKTVsQgwGILnEgUbazcPGd4VBw1xIRl/view?usp=sharing)
* **Web3Forms Contact Form Access Key:** `d889e3a5-9dc2-4554-9e04-2b1b70aee75b`

---

## 3. High-Impact Metrics & Stats

| Metric Value | Label / Description | Context / Project |
| :--- | :--- | :--- |
| **3M+** | Geospatial Records Ingested | Traffic Accident Hotspot Analyzer |
| **92%** | Pixel Semantic Segmentation Accuracy | SAR Oil Spill Detection System |
| **5+** | End-to-End AI/Data Pipelines Built | Various projects |
| **1,300+** | Algorithmic Problems Solved | LeetCode, GFG, Codeforces, CodeChef |
| **1962** | Peak LeetCode Rating (Knight Badge) | Top 4% globally among active competitors |
| **7.63 / 10** | Current Cumulative GPA | IIT Jodhpur (B.Tech) |

---

## 4. Work Experience

### 1. AI Evaluation Engineer (Part-time)
* **Company:** AfterQuery Experts
* **Duration:** Apr 2026 - Jun 2026 (3 months)
* **Location:** Remote
* **Key Achievements:**
  * Designed and validated SWE-bench-style software engineering tasks by reproducing real-world bugs, developing automated test harnesses, and creating reference implementations against private code repositories.
  * Evaluated AI coding agents through machine-verifiable benchmarks, ensuring task correctness, reproducibility, and alignment with realistic software development workflows.

### 2. Algorithm Developer Intern
* **Company:** Ready 2 Go Logistics Services
* **Duration:** May 2025 - Jul 2025 (3 months)
* **Location:** Gurugram, Haryana, India (Remote)
* **Key Achievements:**
  * Optimized routing algorithms on large-scale logistics datasets (1M+ records), identifying performance bottlenecks that improved delivery efficiency by 25% and reduced average transit time by 18%.
  * Enhanced core routing services for faster and more efficient carriage of logistics.

### 3. Undergraduate Research Assistant
* **Company:** School of Management and Entrepreneurship, IIT Jodhpur
* **Duration:** Jan 2025 - Apr 2025 (4 months)
* **Location:** Jodhpur, Rajasthan, India (On-site)
* **Key Achievements:**
  * Developed a speaker-diarized NLP pipeline processing 40+ hours of raw audio (1,500+ minutes) across 30+ unique sources using PyTorch, `pyannote.audio`, and Librosa, achieving 95% transcription accuracy.
  * Engineered a GPU-accelerated inference workflow with an automated Neural Machine Translation (NMT) layer, reducing manual transcription effort by 80% and qualitative analysis time by 60%.

---

## 5. Projects & Case Studies

### Project 1: Codebase Intelligence Engine (Advanced RAG)
* **Status:** Featured (2026)
* **Category:** ML/AI
* **GitHub/Live Link:** [github.com/Prateek-1110/Rag_Codebase](https://github.com/Prateek-1110/Rag_Codebase)
* **Key Metric:** 3M+ Vectors Indexed
* **System Pipeline & Data Flow:**
  `Codebase` ➔ `AST Chunking` ➔ `Qdrant Store` ➔ `RRF Ranker` ➔ `Llama 3`
* **Technologies:** Python, FastAPI, Qdrant Vector DB, PostgreSQL, RAG, NLP
* **Case Study Details:**
  * **The Problem:** Querying large, nested codebases using standard LLMs suffers from structural context loss (e.g. tracing deep function call paths) and high rates of factual hallucination.
  * **My Contribution:** Engineered a custom Abstract Syntax Tree (AST) chunking parser to divide codebases by syntax scope. Implemented a hierarchical call-graph index in PostgreSQL, integrated dense-sparse hybrid vector search (BM25 & Qdrant), and utilized cross-encoder rerankers to rank results.
  * **Measurable Outcome:** Reduced retrieval hallucinations by 45% and improved context precision on complex architectural code lookups.

### Project 2: Traffic Accident Hotspot Analyzer
* **Status:** Active (2026)
* **Category:** Data Engineering
* **GitHub Link:** [github.com/Prateek-1110/traffic_analyser](https://github.com/Prateek-1110/traffic_analyser)
* **Live App Link:** [traffic-analyser.streamlit.app/](https://traffic-analyser.streamlit.app/)
* **Key Metric:** 3M+ Rows Ingested
* **System Pipeline & Data Flow:**
  `CSV Ingestion` ➔ `ETL Pandas` ➔ `Postgres` ➔ `DBSCAN` ➔ `Django Map`
* **Technologies:** Python, Django, PostgreSQL, ETL, DBSCAN Clustering, Scikit-Learn
* **Case Study Details:**
  * **The Problem:** Urban planners lacked granular tools to digest geospatial collision reports and predict risk levels, leaving safety upgrades to guesswork.
  * **My Contribution:** Ingested and cleaned over 3 million historical records using a custom Pandas/PostgreSQL ETL pipeline. Programmed DBSCAN density clustering to identify collision hotspots and trained a Random Forest model to predict risk severity based on weather and road attributes.
  * **Measurable Outcome:** Identified 120+ active safety hotspots and achieved an 85% accuracy score in predicting danger severity.

### Project 3: AI-Powered Autonomous News Agent
* **Status:** Active (2026)
* **Category:** NLP / Pipelines
* **GitHub Link:** [github.com/Prateek-1110/News_Automation/](https://github.com/Prateek-1110/News_Automation/)
* **Live App Link:** [prateektech.vercel.app/](https://prateektech.vercel.app/)
* **Key Metric:** 5k+ articles processed / day
* **System Pipeline & Data Flow:**
  `RSS Feed` ➔ `Scraping` ➔ `Cosine Sim Deduplication` ➔ `LLM Summary` ➔ `Publish`
* **Technologies:** Python, Django, Data Pipeline, NLP, LLMs, Vector Matching
* **Case Study Details:**
  * **The Problem:** Real-time RSS feeds monitoring pipelines face high API cost overhead from processing duplicate posts and high feed-to-publish rendering latency.
  * **My Contribution:** Designed a parallelized stateful news pipeline digesting 5k+ articles daily. Engineered a text deduplication filter using cosine similarity matrix matching, and integrated a parallelized LLM summary generation pipeline.
  * **Measurable Outcome:** Deduplicated feed articles by 60%, significantly lowering LLM API costs, and cut publication latency to under 120 seconds.

### Project 4: Oil Spill Detection System
* **Status:** Featured (2024)
* **Category:** Computer Vision
* **GitHub/Live Link:** [github.com/Prateek-1110/SIH_2024-Oil-Spill-Detection/](https://github.com/Prateek-1110/SIH_2024-Oil-Spill-Detection/)
* **Key Metric:** 92% Pixel Accuracy
* **System Pipeline & Data Flow:**
  `SAR Imagery + AIS Telemetry` ➔ `DeepLabV3 Segmentor` ➔ `Flipped Conv` ➔ `Data Fusion Layer` ➔ `Spill Alert`
* **Technologies:** DeepLabV3, PyTorch, SAR Imaging, Computer Vision
* **Case Study Details:**
  * **The Problem:** Satellite radar oil spill detection maps lack real-time vessel telemetry, making maritime pollution enforcement nearly impossible.
  * **My Contribution:** Trained a DeepLabV3 semantic segmentation model in PyTorch on Synthetic Aperture Radar (SAR) imagery. Built a data fusion layer in Python to overlay real-time Automatic Identification System (AIS) telemetry streams onto spill boundaries.
  * **Measurable Outcome:** Delineated spills with 92% pixel-level segmentation accuracy and mapped coordinates to nearby ship transponders.

### Project 5: Agentic ArXiv Research Assistant
* **Status:** Active (2026)
* **Category:** ML/AI
* **GitHub Link:** [github.com/Prateek-1110/agentic_arxiv](https://github.com/Prateek-1110/agentic_arxiv)
* **Key Metric:** Stateful Graph Routing
* **System Pipeline & Data Flow:**
  `Search Query` ➔ `Relevance Match` ➔ `State Router` ➔ `Summary Gen` ➔ `Markdown Output`
* **Technologies:** LangGraph, LangChain, Python, ArXiv API, LLMs
* **Case Study Details:**
  * **The Problem:** Researchers lose hours querying repositories and hand-filtering paper relevance, resulting in slow literature review workflows.
  * **My Contribution:** Created a stateful cyclical agent graph using LangGraph. Structured logical nodes to run search queries, filter results for keyword/embedding relevance, dynamically route back for deeper search if relevancy is low, and invoke a critique agent.
  * **Measurable Outcome:** Automated the end-to-end literature review process, cutting manual research time by 3x.

---

## 6. Detailed Skill Stack & Competencies

### Languages & Self-Assessed Proficiency
1. **Python (95%):** Core language for ML modeling, deep learning workflows, backend services (FastAPI/Django), and scripting automation.
   * *Examples:* FastAPI REST API designs, PyTorch model pipelines, and automated news parsing scripts.
2. **SQL (90%):** Expertise in PostgreSQL schema designs, complex recursive queries, indexing strategies, and transactional constraints.
   * *Examples:* Call-graph indexing structures for codebase RAG and geo-spatial query processing.
3. **C++ (90%):** Primary choice for performance-critical systems, low-level optimizations, and advanced data structures. 500+ questions solved.
   * *Examples:* Algorithmic Problem Solving (Knight rating on LeetCode) and custom low-level logic.
4. **JavaScript (80%):** Modern ES6+ frontend development, React state management, and real-time client components.
   * *Examples:* Interactive analytics dashboards, dynamic particle animations, and theme toggling.
5. **TypeScript (75%):** Type-safe systems architectures, Next.js routing, database migrations, and modular API service layers.
   * *Examples:* Building robust, self-documenting service modules and web apps.

### Domain Competencies

#### A. Machine Learning & Agentic AI
* **RAG Architecture (95%):** Designing deterministic multi-stage retrieval-augmented generation systems. Implements dense-sparse vector hybrid indexing, Reciprocal Rank Fusion (RRF), AST parsing, and cross-encoder reranking algorithms.
* **LangChain & LangGraph (92%):** Building production-grade stateful multi-agent orchestrations. Utilizes cyclical graph states, conditional node routing, and parallel execution hierarchies for complex tool-calling loops.
* **PyTorch & CV Models (85%):** Building, training, and optimizing deep neural networks. Expertise in model segmentation (DeepLabV3), tensor manipulation, training loops, and multimodal data fusion architectures.
* **HuggingFace Transformers (80%):** Fine-tuning and deploying large language and vision models. Utilizes pipeline abstractions, tokenizer customizations, and parameter-efficient fine-tuning (PEFT/LoRA) modules.
* **Other Competencies:** Model Evaluation, Model Context Protocol (MCP), Natural Language Processing (NLP), Computer Vision (CV).

#### B. Data Engineering
* **Vector Databases (88%):** Qdrant Vector DB (optimizing high-dimensional dense vector embeddings store, payload filtering strategies, payload indexes, HNSW configurations, and collection clustering layouts).
* **Databases:** PostgreSQL, MongoDB, Redis.
* **DevOps / Containers:** Docker, Kubernetes.

#### C. Software Engineering & Frameworks
* **Backend:** FastAPI, Django, Node.js.
* **Frontend:** React, Next.js, Tailwind CSS, HTML5, CSS3.

---

## 7. Education

### 1. Indian Institute of Technology Jodhpur
* **Degree:** B.Tech in Bioscience & Bioengineering, Minor in Artificial Intelligence
* **Duration:** 2023 - 2027 (Expected)
* **Grade:** Cumulative GPA: **7.63 / 10**
* **Key Coursework:** Deep Learning, Machine Learning, Probability & Statistics, Data Structures and Algorithms
* **Relevance Connection:** Coursework and projects apply AI/ML concepts to computational biology, high-dimensional biological data modeling, and sequence algorithms.

### 2. Maharishi Vidya Mandir, Uttar Pradesh
* **Certificate:** Senior Secondary (Class XII), PCM
* **Duration:** 2021 - 2022
* **Grade:** Percentage: **93%**
* **Subjects:** Physics, Chemistry, Mathematics

---

## 8. Problem Solving & Coding Profiles

* **LeetCode (Knight Badge):**
  * **Solved:** 500+ problems
  * **Max Rating:** 1962 (Top 4% globally)
  * **Profile Link:** [leetcode.com/prateekagr-1110/](https://leetcode.com/prateekagr-1110/)
* **GeeksforGeeks:**
  * **Solved:** 650+ problems
  * **Profile Link:** [geeksforgeeks.org/user/prateekagr1110/](https://www.geeksforgeeks.org/user/prateekagr1110/)
* **Codeforces:**
  * **Profile Link:** [codeforces.com/profile/prateek_1110](https://codeforces.com/profile/prateek_1110)
* **CodeChef:**
  * **Profile Link:** [codechef.com/users/prateek11_10](https://www.codechef.com/users/prateek11_10)
  * *Note: Combined Competitive Programming (CP) problems count is over 300+ problems.*
