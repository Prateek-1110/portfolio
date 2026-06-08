// ─────────────────────────────────────────────────────────────────────────────
//  BLOG DATA — src/data/blogs.js
//  All blog posts live here. The site reads this file automatically.
// ─────────────────────────────────────────────────────────────────────────────
//
//  HOW TO ADD A NEW BLOG POST:
//  ─────────────────────────────
//  1. Copy the blog object template below and paste it at the END of the array
//  2. Increment the `id` (e.g., if the last one is 5, make yours 6)
//  3. Fill in each field:
//       title     → Full post title
//       date      → e.g., "June 2026"
//       tag       → One of: "Research" | "Engineering" | "Reflection" | "Tutorial"
//       readTime  → Estimated reading time, e.g., "5 min read"
//       mediumUrl → Your Medium post URL once published. Set null if not yet live.
//       preview   → 3–4 sentences shown on the card. No spoilers — hook the reader.
//       content   → Array of content blocks for the full detail page:
//                     { type: 'p',     text: '...' }   →  paragraph
//                     { type: 'h2',    text: '...' }   →  section heading
//                     { type: 'quote', text: '...' }   →  pull-quote / callout
//  4. Save. The blog card and detail page appear automatically.
//
//  BLOG OBJECT TEMPLATE — copy this:
//  ────────────────────────────────────
//  {
//    id: 6,                            ← increment from last
//    title: "Your Post Title Here",
//    date: "June 2026",
//    tag: "Engineering",
//    readTime: "5 min read",
//    mediumUrl: null,                  ← replace with Medium URL once published
//    preview: "Opening hook sentence. Second sentence with more detail. Third sentence that makes them want to keep reading. Fourth sentence optional.",
//    content: [
//      { type: 'p', text: "First paragraph..." },
//      { type: 'h2', text: "Section Heading" },
//      { type: 'p', text: "More content..." },
//      { type: 'quote', text: "A key insight or memorable line." },
//    ],
//  },
// ─────────────────────────────────────────────────────────────────────────────

export const blogs = [
  {
    id: 1,
    title: "Building a Multi-Omics Foundation Model: My SeNMo Replication Journey",
    date: "May 2025",
    tag: "Research",
    readTime: "8 min read",
    mediumUrl: "https://medium.com/@placeholder", // ← replace with your actual Medium URL
    preview: "Foundation models for genomics are having their ImageNet moment. When I came across SeNMo — a multi-omics transformer for cancer survival prediction — I replicated it from scratch using GDC API-fetched labels. What followed was three weeks of debugging, a C-Index of 0.769 that beat the paper's own 0.758, and a much sharper understanding of why naive omics concatenation is a fundamental architectural mistake.",
    content: [
      { type: 'p', text: "Foundation models for genomics are having their ImageNet moment, and SeNMo caught my attention for one reason: it works across multiple omics modalities simultaneously — mRNA expression, miRNA, copy number variation, methylation — all fused into a single architecture for cancer survival prediction." },
      { type: 'h2', text: "What SeNMo Actually Does" },
      { type: 'p', text: "At its core, SeNMo is a flat MLP with naive concatenation of embeddings from different omics types. Simple in design, but powerful enough to outperform single-omics baselines across most TCGA cancer cohorts. The paper reports a C-Index of 0.758 on survival prediction — respectable for a pan-cancer model." },
      { type: 'h2', text: "My Replication Approach" },
      { type: 'p', text: "Instead of using preprocessed embeddings from the paper's repository, I fetched survival labels directly from the GDC API and linked them with the precomputed embeddings. This required non-trivial wrangling — patient ID harmonization, handling TCGA duplicate cases, and survival time normalization across cohorts. The GDC API is powerful but not exactly intuitive." },
      { type: 'h2', text: "Results" },
      { type: 'p', text: "My replication hit a C-Index of 0.769 on survival prediction — beating the paper's own 0.758. Cancer classification underperformed, which I traced back to the model being trained purely on survival labels. A single-task bias baked right into the training loop, invisible until you try to use it for anything else." },
      { type: 'quote', text: "Replicating papers teaches you more than reading them ever will. The number matters less than understanding why the architecture makes the choices it does — and where those choices quietly break." },
      { type: 'h2', text: "The Fundamental Problem" },
      { type: 'p', text: "Naive concatenation of omics modalities ignores inter-modal interactions entirely. A GNN-based extension using STRING DB for protein interaction graphs or KEGG pathway compression would introduce meaningful biological inductive bias that the current architecture simply lacks. That gap is what I'm exploring next." },
    ],
  },
  {
    id: 2,
    title: "RAG Systems Demystified: From Naive Retrieval to Hybrid Search",
    date: "March 2025",
    tag: "Engineering",
    readTime: "6 min read",
    mediumUrl: "https://medium.com/@placeholder", // ← replace with your actual Medium URL
    preview: "Everyone talks about RAG like it's a simple vector search problem. It isn't. After building an enterprise document Q&A system with FastAPI, Qdrant, BM25 sparse retrieval, and Cohere reranking, I found that the retrieval pipeline is where most production RAG systems silently fail — and dense retrieval alone is almost never enough.",
    content: [
      { type: 'p', text: "Everyone talks about RAG like it is a simple vector search problem. Build an index, embed the query, fetch the top-k chunks, stuff them into a prompt. Done. Except in production, that naive approach fails in ways that are surprisingly hard to diagnose — you get answers that are semantically adjacent to correct, but wrong in the details that actually matter." },
      { type: 'h2', text: "The Problem with Dense-Only Retrieval" },
      { type: 'p', text: "Dense retrieval is semantically rich but has a dirty secret: it struggles with exact keyword matches. Ask it for a specific clause number from a legal document and it will retrieve semantically related paragraphs instead of the exact clause. BM25 handles this natively. Neither alone is sufficient — they are complementary, not substitutes." },
      { type: 'h2', text: "Hybrid Search in Practice" },
      { type: 'p', text: "In the enterprise Q&A system I built, I combined BM25 sparse retrieval with dense embedding search over Qdrant, then applied a Cohere reranker on the merged candidate pool. The reranker is the secret weapon — it sees the full query-chunk pair and reranks with much richer signal than cosine similarity alone can provide." },
      { type: 'h2', text: "The Reranker Changes Everything" },
      { type: 'p', text: "Before adding the reranker, precision@5 on internal test cases was decent but inconsistent. After, it became reliably good. The reranker adds latency, but for enterprise use cases where correctness matters more than milliseconds, it is almost always worth it. The latency trade-off is rarely as bad as it sounds in practice." },
      { type: 'quote', text: "In RAG, the retrieval pipeline is not a solved problem. It is where systems either earn trust or silently lose it — one wrong answer at a time." },
      { type: 'h2', text: "What I Would Do Differently" },
      { type: 'p', text: "Add query rewriting before retrieval. The user's raw query is rarely the best retrieval signal. A lightweight LLM call to expand or reformulate the query before hitting the vector store consistently improves recall on ambiguous questions — and ambiguous questions are the majority of real-world queries." },
    ],
  },
  {
    id: 3,
    title: "Why Graph Neural Networks Are a Natural Fit for Biological Data",
    date: "April 2025",
    tag: "Research",
    readTime: "7 min read",
    mediumUrl: "https://medium.com/@placeholder", // ← replace with your actual Medium URL
    preview: "Biology is not a table. Proteins interact in networks, genes regulate each other through pathways, and omics modalities don't exist in isolation. Yet most ML models applied to biological data still treat it as flat feature vectors. This post makes the case for why GNNs — specifically Graph Transformers over PPI networks — are the right inductive bias for multi-omics tasks.",
    content: [
      { type: 'p', text: "Biology is not a table. Proteins interact in networks. Genes regulate each other through pathways. Omics modalities do not exist in isolation. Yet most ML models applied to biological data still treat it as a flat feature vector — a design choice that throws away an enormous amount of already-known biological structure." },
      { type: 'h2', text: "What Graphs Give You" },
      { type: 'p', text: "A graph representation of biological data lets you encode known relationships as edges. STRING DB provides protein-protein interaction scores. KEGG gives you pathway membership. REACTOME captures signaling cascades. When you pass omics features through a GNN that is aware of these edges, the model can propagate information between biologically connected genes — something an MLP simply cannot do, regardless of depth." },
      { type: 'h2', text: "Graph Transformers vs Standard GNNs" },
      { type: 'p', text: "Standard message-passing GNNs suffer from over-smoothing at depth: features from all nodes start to converge toward the same representation. Graph Transformers address this with global attention, allowing each node to attend to every other node without the smoothing problem. For PPI networks where hub proteins are globally important, this distinction matters significantly." },
      { type: 'quote', text: "The inductive bias you choose is a hypothesis about how the world works. For biology, that hypothesis should always incorporate known network structure — not discard it." },
      { type: 'h2', text: "The Practical Hurdle" },
      { type: 'p', text: "The main challenge is that PPI networks are noisy and incomplete. STRING DB interaction scores vary widely in confidence, and naively using all edges adds more noise than signal. Pruning to high-confidence interactions (score > 700) and using pathway-compressed representations are practical mitigations that I have found consistently useful." },
    ],
  },
  {
    id: 4,
    title: "Building an Agentic Arxiv Research Assistant Without Any Frameworks",
    date: "February 2025",
    tag: "Engineering",
    readTime: "5 min read",
    mediumUrl: "https://medium.com/@placeholder", // ← replace with your actual Medium URL
    preview: "I built a four-tool agentic loop over Arxiv — no LangChain, no LlamaIndex, just FastAPI, ChromaDB, and raw tool-calling logic with Gemini via OpenRouter. Here's what the build taught me about the gap between 'agentic AI' as a concept and agentic AI as a working system that actually handles failures gracefully.",
    content: [
      { type: 'p', text: "The term 'agentic AI' gets thrown around loosely. An agent, in practice, is a model that can decide which tool to call, call it, observe the result, and decide what to do next — in a loop, until the task is done or it gives up. That loop is deceptively simple to describe and surprisingly hard to make robust." },
      { type: 'h2', text: "The Architecture" },
      { type: 'p', text: "My Arxiv Research Assistant uses four tools: search (queries Arxiv API), fetch_paper (retrieves full abstract and metadata), embed_and_store (chunks and stores in ChromaDB), and answer_from_context (retrieves relevant chunks and synthesizes an answer). Gemini via OpenRouter handles the agentic decision loop. No framework wiring anything together — just the raw mechanics." },
      { type: 'h2', text: "Why No LangChain?" },
      { type: 'p', text: "LangChain abstracts the loop away. That is valuable in production, but terrible for learning. Building the tool-calling logic by hand forces you to understand what the framework is doing for you — and more importantly, what it is hiding from you. The hidden parts are usually where the interesting bugs live." },
      { type: 'h2', text: "Where It Actually Breaks" },
      { type: 'p', text: "The failure modes are not where you expect. The model sometimes calls tools in the wrong order. It occasionally hallucinates tool arguments. And when a tool returns an error, a naive loop just retries identically. Handling these cases requires explicit retry logic, argument validation, and fallback prompting — none of which you get for free from a language model." },
      { type: 'quote', text: "Every agentic system is a distributed system where one of the nodes is a language model. Design it accordingly — with the same skepticism you would give any unreliable service." },
    ],
  },
  {
    id: 5,
    title: "The Hidden Cost of Copy-Pasting from LLMs: A Student's Reflection",
    date: "January 2025",
    tag: "Reflection",
    readTime: "4 min read",
    mediumUrl: "https://medium.com/@placeholder", // ← replace with your actual Medium URL
    preview: "I used to copy-paste code from LLMs constantly. It worked — until it didn't. A year into building ML projects, I noticed I could scaffold a FastAPI backend in minutes but couldn't debug a threading issue without asking the LLM again. The tool that was accelerating me had quietly become a crutch. Here's how I recalibrated.",
    content: [
      { type: 'p', text: "I used to copy-paste code from LLMs constantly. It felt like a superpower. I could spin up a FastAPI backend with JWT auth in an afternoon, build a ChromaDB retrieval pipeline before dinner, and scaffold an entire project structure in under an hour. Until the day something broke in a way I did not understand, and I realized I had no idea how to debug it without asking the LLM to fix it for me." },
      { type: 'h2', text: "The Acceleration Trap" },
      { type: 'p', text: "The problem with copy-pasting from LLMs is not that the code is wrong — usually it is not. The problem is that you skip the step where understanding forms. You get the artifact without the mental model. And mental models are exactly what you need when things break, because they always break eventually, in ways the LLM did not anticipate." },
      { type: 'h2', text: "The Recalibration" },
      { type: 'p', text: "I changed one rule: before using any code from an LLM, I have to be able to explain every line out loud. If I cannot, I do not paste it — I ask the LLM to explain it instead, then write it myself from scratch. Slower? Yes. But the understanding sticks, and the debugging goes from panic to process." },
      { type: 'quote', text: "Use LLMs to accelerate understanding, not to bypass it. The bypass always catches up with you — usually at the worst possible moment." },
      { type: 'h2', text: "What Changed" },
      { type: 'p', text: "Projects take longer now. But I can debug them. I can explain architecture decisions in interviews. I can read someone else's code and actually understand it. That is the compound interest that copy-pasting silently forfeited — and why the recalibration was worth it." },
    ],
  },
];