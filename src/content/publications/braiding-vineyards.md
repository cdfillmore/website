---
title: "Braiding Vineyards"
authors: ["Erin Chambers", "Christopher Fillmore", "Elizabeth Stephenson", "Mathijs Wintraecken"]
venue: "Proceedings of the 2026 Annual ACM-SIAM Symposium on Discrete Algorithms (SODA)"
year: 2026
type: "conference"
featured: true
doi: "https://doi.org/10.1137/1.9781611978971.225"
arxiv: "https://arxiv.org/abs/2504.11203"
image: "/appendix_with_loop_and_cyl_transp_3.jpg"
---

In this work, we introduce and study what we believe is an intriguing, and, to the best of our knowledge, previously unknown connection between two fundamental areas in computational topology, namely topological data analysis (TDA) and knot theory. Given a function from a topological space to $\mathbb{R}$, TDA provides tools to simplify and study the importance of topological features: in particular, the $l$th-dimensional persistence diagram encodes the topological changes (or $l$-homology) in the sublevel set as the function value increases into a set of points in the plane. Given a continuous one parameter family of such functions, we can combine the persistence diagrams into an object known as a vineyard, which tracks the evolution of points in the persistence diagram as the function changes. If we further restrict that family of functions to be periodic, we identify the two ends of the vineyard, yielding a closed vineyard. This allows the study of monodromy, which in this context means that following the family of functions for a period permutes the set of points in a non-trivial way. Recent work has studied monodromy in the directional persistent homology transform, demonstrating some interesting connections between an input shape and monodromy in the persistent homology transform for 0-dimensional homology embedded in $\mathbb{R}^2$.

In this work, given a link and a value $l$, we construct a topological space (based on the given link) and periodic family of functions on this space (based on the Euclidean distance function), such that the closed $l$-vineyard contains this link. This shows that vineyards are topologically as rich as one could possibly hope, suggesting many future directions of work. Importantly, it has at least two immediate consequences we explicitly point out:

1. Monodromy of any periodicity can occur in an $l$-vineyard for any $l$. This answers a variant of a question by Arya and collaborators. To exhibit this as a consequence of our first main result we also reformulate monodromy in a more geometric way, which may be of interest in itself.
2. Topologically distinguishing closed vineyards is likely to be difficult (from a complexity theory as well as from a practical perspective) because of the difficulty of knot and link recognition, which have strong connections to many NP-hard problems.
