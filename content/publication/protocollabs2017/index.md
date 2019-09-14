---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Power Fault Tolerance"
authors: ["Protocol Labs"]
date: 2017-07-27
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2019-09-03T11:05:30+01:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["4"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: "Byzantine Fault Tolerance (BFT) accounts for faults as the number of faulty nodes and is thus cumbersome to apply to many modern decentralized systems. We introduce the Power Fault Tolerance (PFT) model, which reframes BFT in terms of participants' influence over the outcome of a protocol, instead of the number of nodes. In PFT, n is the total power, and f is the fraction of power controlled by faulty or adversarial participants. This work: (a) provides a formal definition and properties for PFT; (b) generalizes Byzantine Consensus (BC) protocols of different classes (permissioned, permissionless, and federated) into a single class of Power Consensus (PC); (c) explores new directions for PC protocols, particularly for blockchains, and protocols that can detect and make progress during catastrophic network partitions."

# Summary. An optional shortened abstract.
summary: ""

tags: ["Filecoin"]
categories: []
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf:
url_code:
url_dataset:
url_poster:
url_project:
url_slides:
url_source:
url_video:

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: [cryptography, distributed-systems]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---