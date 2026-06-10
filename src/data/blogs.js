// ─────────────────────────────────────────────────────────────────────────────
//  BLOG DATA — src/data/blogs.js
// ─────────────────────────────────────────────────────────────────────────────
//
//  HOW TO ADD A NEW BLOG POST (when you have more):
//  ──────────────────────────────────────────────────
//  {
//    id: <increment from last>,
//    title: "Your Post Title Here",
//    description: "2-line summary shown on the card and detail page.",
//    mediumUrl: "https://medium.com/@your-post-url",
//  },
// ─────────────────────────────────────────────────────────────────────────────

export const blogs = [
  {
    id: 1,
    title: "Understanding the Bias-Variance Tradeoff in Machine Learning",
    description: "Every ML model walks a tightrope between memorizing training data and generalizing to new inputs. This post breaks down the bias-variance tradeoff — what it means, why it matters, and how to use it to make better modeling decisions.",
    mediumUrl: "https://medium.com/@prateek-1110/understanding-the-bias-variance-tradeoff-in-machine-learning-d46441f27b4a",
  },
   {
    id: 2,
    title: "Loss Functions in Machine Learning",
    description: "Loss functions are the compass that guide machine learning models toward better predictions. This post explores the intuition behind loss functions, why different tasks require different losses, and how the choice of loss impacts training, convergence, and model behavior.",
    mediumUrl: "https://medium.com/@prateek-1110/loss-functions-in-machine-learning-5cf5972661fc",
  },
];