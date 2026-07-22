---
title: "The Singular Source of Vineyard Monodromy"
authors: ["Erin W. Chambers", "Christopher Fillmore", "Shankha Shubhra Mukherjee", "Rohit Roy", "Elizabeth Stephenson", "Mathijs Wintraecken"]
venue: "arXiv preprint"
year: 2026
type: "preprint"
featured: true
arxiv: "https://arxiv.org/abs/2607.01046"
---

Vineyards, or time-varying families of persistence diagrams, are widely used in topological data analysis (TDA) pipelines to track how topological features change and evolve as a parameter varies. When the parameter traces a closed loop, a vineyard can exhibit monodromy: diagram points permute over the course of a full traversal, which obstructs feature tracking and can complicate downstream analysis of such data. Chambers et al. considered the periodic vineyards that arise from the radial persistence transform, which maps the manifold to a family of persistence diagrams, where each diagram fixes a base point and considers the filtration that is based on Euclidean distance to that point, and showed that monodromy and knotting can occur. Other recent work by Arya et al. considers geometric conditions that exclude monodromy in two dimensions, in an effort to better understand when this effect happens. That said, understanding when and why monodromy occurs is a fundamental open problem with direct practical consequences for many data analysis pipelines.

In this work, we study this question for 1-manifolds in $\mathbb{R}^2$, using a surprising connection with tools from singularity theory, and provide a classification for the causes of monodromy in vineyards. More precisely, we prove that the vineyard of a sufficiently small loop $\gamma$ cannot exhibit monodromy unless it contains a specific singularity of the distance function. The central geometric object in our analysis is the symmetry set, which is the locus of centers of spheres tangent in more than one point to the manifold; this object classifies singularities of the distance function, and in our setting, dictates precisely when monodromy occurs. This characterization opens the door to the development of algorithmic criteria for detecting and utilizing (or avoiding) monodromy in TDA pipelines.
