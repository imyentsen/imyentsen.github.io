---
title: "Design system revamp for complex digital twin"
org: "Aize AS"
year: 2026
yearRange: "2025-2026"
desc: "I co-led the redesign of our design system and delivered it alongside the product refactor beta within 18 months. By pairing streamlined component architecture with standard UX patterns and tokenized styles, we empowered product teams to scale design production rapidly and accelerate the overall refactoring timeline."
slug: "/design-system-revamp-for-complex-digital-twin"
coverImage: "cover.jpg"
highlightImage: "cover.jpg"
highlightVideo: "cover-card.mp4"
---

# Objectives

Aize was spun off from Aker Solutions, a global Norwegian engineering and technology company for the energy industry. When the software department became its own company in 2019, it took with it around 30 to 40 product lines, each one a small application, along with the design system those applications relied on. Our product itself is a browser application. It gives customers a digital twin of complex energy infrastructure, so they can inspect and maintain their offshore and onshore crude oil production equipment.

At the beginning of 2024 the company started to rework the whole product and merge those product lines into one. We were asked to rebuild the design system at the same time. The goal was to unify the user experience, keep what we had learned from the old system, and pay down the design and technical debt that had never had a chance to be dealt with.

![before and after the rework, around 30 to 40 small applications merged into one product](./02-objectives.jpg "The spin-off and the rework. 35+ applications and an inherited design system on the left, one product on a rebuilt system on the right.")

# My role

I spent three years in the design system team with the other designer. In this project I was responsible for around half of the tokens, components and UX patterns. I also worked with the other designer, the design lead of the team, on our strategy and ways of working.

Besides the design work, I ran UX audits, design reviews and knowledge-sharing sessions for more than 150 designers and developers.

![how the design system team sat between the seven product teams](./03-role.jpg "What the team sent across to the seven product areas: tokens, components, patterns, guidelines and audits.")

# Challenge

## Rebuilding the design system while the product was being reworked

Generally speaking, a design system is supposed to move slowly, and to settle the inconsistencies that come up naturally in fast product development. Our situation was the opposite. The product teams were still exploring, the use scenarios kept changing, and we had to build a stable system quickly at the same time.

![the two migrations running in parallel, on the design system side and the product side](./04-challenge.jpg "Two speeds in one orbit. The old system stabilised slowly while the product areas explored fast, and the rebuilt system had to support that pace.")

The old design philosophy made it harder. The design system we inherited gave product teams heavy, feature-rich components built for specific industry needs. Research and design of that kind takes a long time, and it could not survive the new requirement to produce product quickly while working in parallel with the delivery teams. If we had insisted on keeping it, the design system would have become the bottleneck for the product teams’ deadlines.

At the same time we had to follow the branding guidelines set by an external consultancy the company had hired. Those guidelines were visually refined, but they lacked consideration for accessibility and for the design system. We had to follow the new design language and localise it into our own product context.

# Approach

## The core of the design system

Before the detail, it is worth saying what the system actually offers. We thought of it as foundations and overarching rules. The foundations are the tokens and the components, which carry the visual language and the building blocks of every screen. The overarching rules are the UX patterns, which govern how those blocks may be assembled. Together they constitute the core product experiences, and each section below is one of those offerings.

![the foundations and the overarching rules that make up the core product experiences](./05-key-offerings.jpg "The foundations and the overarching rules that constitute the core product experiences.")

## A three tier token system

We rebuilt the foundation as three tiers of tokens: global tokens, alias tokens and component tokens. The tiers support consistency in the user experience and flexibility in design, and they let the design system trace the design decisions made by different product teams. If a product team needs to change the colour or the spacing of a component, that change still resolves back to the alias tokens or to the global tokens underneath, so the design system can keep track of it and manage it.

![a colour resolving through global, alias and component tokens, then applied to Data Label in the 3D and 2D viewers](./06-tokens.jpg "One colour travelling from raw value through global, alias and component tokens, then resolving differently for Data Label in each viewer.")

The tiers also give the product teams room to explore design possibilities. When a team needed to build components for a conceptual flow that the library did not cover yet, well-structured tokens still kept the design language consistent. For anything outside the scope of the library, we provided tokens and guidelines so a team could build its own component and keep the look and the experience consistent with the rest of the system. If we decided to adopt that component later, the tokens made the adoption faster and more transparent.

## Decomposing components by appearance rather than by use case

There are two main considerations when deciding how to break an interaction down into components: use case and appearance. We deliberately put the weight on appearance, and we were fairly aggressive about it. If two elements looked different, we treated them as two components.

![two large panel components on the left replaced by six smaller components on the right](./07-decomposition.jpg "Two heavy panel components on the left, replaced by six smaller ones that can be recombined.")

The clearest case was List. The original single large List component carried a lot of variants, because it had to present the very different objects in the digital twin. We broke it into several smaller List components, according to what the appearance required.

The trade-off was deliberate. Smaller components have a simpler structure and can be developed faster. At the same time there are now more List components that look alike, so the way to choose between them and combine them has to be defined and governed properly. We therefore moved the cross-component governance of List into UX patterns.

Following the same logic, the list pattern sits alongside input patterns, toolbar patterns, selection patterns and loading patterns in the design system. The centre of gravity of the design system team moved with it, from only producing components to spending more time governing how they are used across the product teams.

## Design system operation is about rituals and tools

For a design system to govern the experience of a whole product, it takes more than a long rulebook, and it also takes living rituals and tools. The rituals give designers and developers in different teams a sense of belonging, an understanding of each other’s work and a habit of collaborating. The tools help them reach the shared goal more efficiently and more consistently.

During the product rework we built a range of rituals, so that the teams would speak up and exchange more actively, and understand the use of the design system and our shared ways of working more deeply. For example, we held a weekly sync session with the designers and prepared the theme, the presentation, a small workshop and the discussion questions in advance. We also had a fixed monthly demo, which gave every designer a place to see the latest state of the system and to give feedback. Besides that, we set up a Slack channel where someone always answers. As the design and development work required it, we also made sure stakeholders took part in the relevant interviews and workshops, so that information stayed transparent and users could take part in design decisions.

![a week-by-week grid of recurring design system rituals above a heatmap of on-demand communication](./08-operation.jpg "The operating rhythm. Recurring rituals above, and the on-demand workshops, interviews and requests that fill the gaps below.")

As the product was reworked, the product teams still needed to build custom components outside the design system quickly. We gave them a process and a shared documentation space, so they could publish their custom components to the other teams, and so they had a clear expectation of when the design system could adopt a component and what the specification would require.

## Tools that let designers check their own work

We built internal tools for checking accessibility, against WCAG 2.1 AA, and responsive design, from tablet to ultra-wide desktop. Designers could check their own output against the standards and our internal acceptance criteria without waiting for us. It let the design team move forward more independently.

![viewport usage statistics above a Figma breakpoint tool showing the small, medium and large ranges](./09-tooling.jpg "The viewport data behind the breakpoints, and the Figma tool that lets a designer resize a frame across each range.")

## Prototyping with agentic coding

A digital twin needs a lot of prototyping in 3D model viewers and 2D collaborative canvases, and that is hard to do in Figma Design. We adopted agentic coding tools early, including Figma Make and Codex, to build 2D and 3D prototypes quickly and validate concepts.

The Data Label component is the case with the biggest return. It marks data points in 2D and 3D environments, much like a pin in Google Maps, and we brought its design delivery down from several months in the previous version to a single sprint.

![a static Figma drawing on the left and an interactive 3D prototype built with agentic coding on the right](./10-prototyping.jpg "A static Figma design on the left, and the same scene as an interactive 3D prototype built with agentic coding.")

We worked closely with the developers to break the prompts down into small and standardised steps. Small steps reduce errors and stop the result drifting into unrelated directions, so the output keeps a similar quality in the hands of different designers, and a designer can build a 3D test boilerplate on their own.

## Lowering the cost of adopting AI while keeping the architecture extensible

In the design of the AI skills, we separated reading the design system from applying it.

We built an agent skill that crawls the content in full, so that both Figma and Codex agents can fetch the latest guidelines held in Figma whenever they run a related task. This lowers the cost of migrating the guidelines we already have, and if we later need to move them to a more natively machine-readable format, that will not affect the skills and the workflows in the application layer.

With the design system guidelines in that form, our designers can use AI to run audits and quick prototyping themselves, both in Figma and in the front end. An audit of the toolbar pattern is one example, and motion prototyping that applies the motion guidelines and the tokens is another.

![design system documentation converted into scraper skills, which feed skills that check a design against its guideline](./11-ai-architecture.jpg "Documentation becomes scraper skills, which become applied skills that check a design against the guideline it came from.")

# Outcome

The rebuild window was about eighteen months, inside my three years in the design system team. In that time we delivered:

- a new token system in three tiers of global, alias and component tokens. It covers colour, spacing, typography, radius and breakpoints. I was responsible for part of the colour, spacing, radius and breakpoint tokens.
- more than 30 core components, small enough to keep the ongoing UX exploration moving. I was responsible for around half of them.
- a pattern library. I was responsible for the input, selection, list and toolbar patterns.
- a regular design audit and sync ritual, which became part of how the company works. I ran half of those sessions.

![the assembled product annotated with five regions: top navigation, finder and filter, viewer, properties and toolbar](./12-outcome.jpg "The assembled product and its five regions: top navigation, finder and filter, viewer, properties and toolbar.")

The new design system is more efficient than what came before. After the spin-off in 2019, the company spent four years trying to merge those product lines into a single product, and it did not really work out. By contrast, the rework that started in 2024 went very well, and it delivered a beta that merged them properly in about eighteen months.

What I find most valuable in this work is the operating model of the system, rather than a component library on its own. A successful design system encourages teams to collaborate and to share resources, so that the product can grow without the headcount growing at the same rate.

That belief shaped the direction of our work:

- The token tiers let a team build what the component library does not cover yet, without breaking the design language.
- Patterns govern the creation and the use of components in one place, so there is no need to redo the research and negotiate across teams every time.
- The weekly rituals and the design tools let work be reviewed without waiting for the design system team to be in the room.

That ecosystem is what supports the product as it keeps evolving.

![A glance at the revamped design system](./13-outcome.jpg "A glance at the revamped design system")

---

# Note

## Confidentiality concerns

All visual materials in this article were created solely to illustrate the process and outcomes of this project. They do not represent the actual product and respect the company’s intellectual property and the client’s business confidentiality.
