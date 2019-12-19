---
title: "PLONK: Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge"
date: 2019-08-21

publishDate: 2019-08-21

doi:

authors:
  - ariel-gabizon
  - zachary-j-williamson
  - oana-ciobotaru
publication_types:
  - report
tags:
categories:
research-areas:
  - cryptography

journal:

venue: Fifth Symposium on Compositional Structures (SYCO 5)
venue_location: Birmingham, UK.

url_source: https://eprint.iacr.org/2019/953

resources:
  - src: gabizon2019a.pdf
  - src: cite.bib
---
zk-SNARK constructions that utilize an updatable universal structured reference string remove one of the main obstacles in deploying zk-SNARKs[GKM + ]. The important work of Maller et al. [MBKM19] presented Sonic-the first potentially practical zk-SNARK with fully succinct verification for general arithmetic circuits with such an SRS. However, the version of Sonic enabling fully succinct verification still requires relatively high proof construction overheads. We present a universal SNARK construction with fully succinct verification, and significantly lower prover running time (roughly 7.5-20 less group exponentiations than [MBKM19] in the fully succinct verifier mode depending on circuit structure). Similarly to [MBKM19, BCC + 16] we rely on a permutation argument based on Bayer and Groth [BG12]. However, we focus on \"Evaluations on a subgroup rather than coefficients of monomials\"; which enables simplifying both the permutation argument and the artihmetization step.