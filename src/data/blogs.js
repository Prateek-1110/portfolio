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
  {
    id: 3,
    title: "Gradient Descent & Optimizers Explained: From Vanilla SGD to Adam",
    description: "Training a machine learning model is fundamentally an optimization problem, and gradient descent is the engine that drives it. This post breaks down the intuition behind gradient descent, explores how models learn by minimizing error, and compares popular optimization algorithms—from Vanilla SGD and Momentum to RMSProp and Adam. Learn how different optimizers influence convergence speed, stability, and overall model performance in real-world deep learning applications.",
    mediumUrl: "https://medium.com/@prateek-1110/gradient-descent-optimizers-explained-from-vanilla-sgd-to-adam-8c3e5f8697e8",
  },
   {
    id: 4,
    title: "The Probabilistic Soul of Machine Learning — Likelihood, MLE, and MAP",
    description: "Every loss function you minimize is secretly a probabilistic statement, and every regularizer is a prior in disguise. This post unpacks the likelihood function, derives MLE for a Gaussian from scratch, and reveals how MAP estimation connects Bayesian priors to L1 and L2 regularization — along with a clear-eyed look at where frequentist and Bayesian thinking diverge.",
    mediumUrl: "https://medium.com/@prateek-1110/day-4-the-probabilistic-soul-of-machine-learning-likelihood-mle-and-map-f5137ec42ddd",
  },
];