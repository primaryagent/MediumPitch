# BTC Now - Design System & Style Guide

## DESIGN PHILOSOPHY

**Design is the visual translation of brand voice.**

The BTC Now design system reflects our communication principles:
- **Direct** → Clean layouts, no decorative elements, information-first
- **Factual** → Data visualization, clear hierarchy, number emphasis
- **Non-apologetic** → Bold typography, confident color usage, strong contrast
- **Methodical** → Grid systems, consistent spacing, modular components
- **To the point** → Minimal components, purpose-driven design, no fluff

### Visual Language

We design like we write:

**Term Sheet Aesthetic**
- Monochrome palette + single accent color
- Tabular data presentation
- Clear section delineation
- Document-quality typography

**System Architecture Document**
- Modular, reusable components
- Logical information flow
- Technical precision
- Structural clarity

**Financial Model**
- Numbers as primary visual element
- Clear calculation display
- Structured data hierarchy
- Minimal ornamentation

---

## FOUNDATION

### Color System

#### Primary Colors

```css
Black:           #000000  /* Background, primary text */
White:           #FFFFFF  /* Text, borders, elements */
Bitcoin Orange:  #F7931A  /* Accent, CTAs, emphasis */
```

#### Opacity Scale (White on Black)

```css
white/100:  rgba(255, 255, 255, 1.0)   /* Primary text, headlines */
white/80:   rgba(255, 255, 255, 0.8)   /* Body text, readable content */
white/70:   rgba(255, 255, 255, 0.7)   /* Secondary text */
white/60:   rgba(255, 255, 255, 0.6)   /* Tertiary text, subdued content */
white/50:   rgba(255, 255, 255, 0.5)   /* Labels, metadata */
white/40:   rgba(255, 255, 255, 0.4)   /* Subtle text, hints */
white/30:   rgba(255, 255, 255, 0.3)   /* Inactive elements, borders */
white/10:   rgba(255, 255, 255, 0.1)   /* Subtle borders, dividers */
white/5:    rgba(255, 255, 255, 0.05)  /* Very subtle backgrounds */
```

#### Orange Variations

```css
bitcoin-orange:     #F7931A  /* Full strength - CTAs, active states */
bitcoin-orange/30:  rgba(247, 147, 26, 0.3)  /* Borders, emphasis */
bitcoin-orange/5:   rgba(247, 147, 26, 0.05) /* Subtle backgrounds */
```

#### Usage Rules

**Black Background**
- Always. No exceptions.
- Maintains focus and reduces visual noise
- Creates high contrast for readability

**White Text**
- Primary communication color
- Use opacity for hierarchy, never gray hex values
- Higher opacity = higher importance

**Bitcoin Orange**
- Accent only. Never primary.
- Use for: CTAs, active states, key metrics, emphasis
- Maximum 20% of any screen should be orange
- Don't use orange for readability - use white

**Color Combinations**

✓ **Good**
- White headline + orange number
- White text + orange/10 border
- White/80 body + orange/30 highlight border

✗ **Avoid**
- Orange on white (reversed)
- Orange body text (poor readability)
- Multiple colors (stay monochrome + accent)

---

### Typography

#### Font Stack

```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

**Why System Fonts:**
- Zero load time
- Native OS optimization
- Technical, un-designed aesthetic
- Matches "engineering document" voice

#### Type Scale

**Headlines (Sections)**
```css
9xl:  8rem    (128px)  /* Hero statements */
7xl:  4.5rem  (72px)   /* Hero secondary */
6xl:  3.75rem (60px)   /* Section headers */
5xl:  3rem    (48px)   /* Section headers, large metrics */
```

**Content**
```css
4xl:  2.25rem (36px)   /* Large metrics, sub-headers */
3xl:  1.875rem (30px)  /* Metrics, emphasized content */
2xl:  1.5rem (24px)    /* Medium emphasis */
xl:   1.25rem (20px)   /* Body text, readable paragraphs */
lg:   1.125rem (18px)  /* Body text, standard */
base: 1rem    (16px)   /* Default text, UI elements */
sm:   0.875rem (14px)  /* Labels, metadata, captions */
xs:   0.75rem (12px)   /* Fine print, smallest labels */
```

#### Font Weights

```css
font-bold:      700  /* Headlines, emphasis, metrics */
font-semibold:  600  /* Sub-emphasis, key terms */
font-medium:    500  /* UI elements, slight emphasis */
font-normal:    400  /* Body text, readable content */
```

#### Line Heights

```css
/* Headlines - tighter leading for impact */
leading-none:    1.0    /* 9xl, 7xl - hero text only */
leading-tight:   1.25   /* 6xl, 5xl, 4xl - section headers */
leading-snug:    1.375  /* 3xl, 2xl - emphasized content */

/* Body - comfortable reading */
leading-normal:  1.5    /* base, lg - standard paragraphs */
leading-relaxed: 1.625  /* xl - long-form content */
leading-loose:   2.0    /* Special cases - very open text */
```

**Usage:**
- Large headlines (5xl+): Use `leading-tight` or `leading-none` for visual impact
- Body text: Use `leading-normal` for readability
- Long-form content: Use `leading-relaxed` for comfortable extended reading

#### Letter Spacing

```css
tracking-tighter: -0.05em   /* 9xl, 7xl - very large headlines */
tracking-tight:   -0.025em  /* 6xl, 5xl - large headlines */
tracking-normal:   0        /* Standard text, most use cases */
tracking-wide:     0.025em  /* Small caps, labels (if needed) */
```

**Usage:**
- Headlines 5xl+: Use `tracking-tight` to prevent loose appearance
- Body text: Use `tracking-normal` (default)
- Avoid positive tracking unless for specific stylistic needs

#### Typography Hierarchy

Complete semantic mapping for consistent usage:

| Element | Tailwind Class | Size | Weight | Leading | Tracking | Use Case |
|---------|---------------|------|--------|---------|----------|----------|
| **Hero H1** | `text-9xl font-bold` | 128px | 700 | none | tighter | Hero statements only |
| **Hero H2** | `text-7xl font-bold` | 72px | 700 | tight | tight | Hero secondary line |
| **Page H1** | `text-6xl font-bold` | 60px | 700 | tight | tight | Main page headers |
| **Section H2** | `text-5xl font-bold` | 48px | 700 | tight | tight | Section headers |
| **Subsection H3** | `text-4xl font-bold` | 36px | 700 | tight | normal | Subsection titles |
| **Minor H4** | `text-2xl font-semibold` | 24px | 600 | snug | normal | Minor headers |
| **Emphasis** | `text-xl font-semibold` | 20px | 600 | relaxed | normal | Key statements |
| **Body Large** | `text-xl` | 20px | 400 | relaxed | normal | Emphasized paragraphs |
| **Body Standard** | `text-lg` | 18px | 400 | normal | normal | Standard paragraphs |
| **Body Default** | `text-base` | 16px | 400 | normal | normal | Default text, UI |
| **Label** | `text-sm font-medium` | 14px | 500 | normal | normal | Labels, metadata |
| **Caption** | `text-sm` | 14px | 400 | normal | normal | Captions, hints |
| **Fine Print** | `text-xs` | 12px | 400 | normal | normal | Smallest text |

#### Type Scale Ratios

The type scale uses **intentionally non-uniform ratios** for different purposes:

**Headlines** (Impact-focused, larger jumps)
```
9xl → 7xl:  1.78x ratio (128px → 72px)
7xl → 6xl:  1.20x ratio (72px → 60px)
6xl → 5xl:  1.25x ratio (60px → 48px)
```

**Body Text** (Readability-focused, ~1.125 ratio)
```
xl → lg:    1.11x ratio (20px → 18px)
lg → base:  1.125x ratio (18px → 16px)
base → sm:  1.14x ratio (16px → 14px)
```

**Why Non-Uniform:**
- Headlines need dramatic size differences for visual hierarchy
- Body text needs subtle differences for comfortable reading
- Matches brand voice: bold statements, readable details

#### Typography Pairings

Recommended headline + body combinations:

**Hero Section**
```tsx
<h1 className="text-7xl md:text-9xl font-bold leading-none tracking-tighter">
  Bitcoin Now
</h1>
<p className="text-5xl md:text-7xl font-bold leading-tight text-bitcoin-orange">
  0% Down
</p>
```

**Standard Section**
```tsx
<h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-16">
  Section Title
</h2>
<p className="text-xl text-white/70 leading-relaxed">
  Body paragraph with comfortable reading spacing.
</p>
```

**Content Section**
```tsx
<h3 className="text-4xl font-bold leading-tight mb-12">
  Subsection Title
</h3>
<p className="text-lg text-white/70 leading-normal">
  Standard body text for detailed content.
</p>
```

**Business Plan Detail**
```tsx
<h4 className="text-2xl font-semibold leading-snug mb-6">
  Detail Section
</h4>
<p className="text-base text-white/70 leading-normal">
  Dense information presented clearly.
</p>
```

**Metric + Label**
```tsx
<div className="text-5xl font-bold leading-tight text-bitcoin-orange">
  $28M
</div>
<p className="text-sm text-white/50 leading-normal mt-1">
  Year 1 Revenue
</p>
```

#### Typography Patterns

**Pattern: Section Header**
```tsx
<h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-16 text-center">
  Section Title
</h2>
```

**Pattern: Metric Display**
```tsx
<div className="text-5xl font-bold leading-tight text-bitcoin-orange">
  $28M
</div>
<p className="text-sm text-white/50 leading-normal mt-1">Year 1</p>
```

**Pattern: Headline + Subhead**
```tsx
<h1 className="text-7xl md:text-9xl font-bold leading-none tracking-tighter mb-4">
  Bitcoin Now
</h1>
<p className="text-5xl md:text-7xl font-bold leading-tight text-bitcoin-orange">
  0% Down
</p>
```

**Pattern: Body Text**
```tsx
<p className="text-xl text-white/70 leading-relaxed text-balance">
  Readable paragraph content with balanced line breaks.
</p>
```

**Pattern: Emphasized Statement**
```tsx
<p className="text-2xl font-semibold leading-snug text-bitcoin-orange">
  Key statement that demands attention
</p>
```

#### Typography Rules

**DO:**
- Use bold weights for all headlines and numbers
- Leverage size for hierarchy (bigger = more important)
- Use text-balance for headlines and short paragraphs
- Pair large bold headlines with small light labels
- Apply tighter line height (leading-tight/none) to large headlines
- Use negative tracking on headlines 5xl and above
- Use relaxed leading for long-form body text

**DON'T:**
- Use italic (unless absolutely necessary for citation)
- Mix too many sizes in one component
- Use fancy fonts or decorative typography
- Set body text smaller than 16px (base)
- Use loose line height on headlines (looks disconnected)
- Apply positive letter spacing to large headlines (looks weak)
- Forget to specify line height (always define it explicitly)

---

### Spacing System

#### Base Unit: 8px

All spacing follows 8px base unit for visual rhythm.

```css
gap-1:  0.25rem  (4px)   /* Tight grouping */
gap-2:  0.5rem   (8px)   /* Related elements */
gap-4:  1rem     (16px)  /* Standard spacing */
gap-6:  1.5rem   (24px)  /* Comfortable spacing */
gap-8:  2rem     (32px)  /* Section internal spacing */
gap-12: 3rem     (48px)  /* Between groups */
gap-16: 4rem     (64px)  /* Section spacing */

mb-2:   0.5rem   (8px)   /* Tight margin */
mb-4:   1rem     (16px)  /* Standard margin */
mb-8:   2rem     (32px)  /* Paragraph spacing */
mb-12:  3rem     (48px)  /* Group spacing */
mb-16:  4rem     (64px)  /* Section spacing */

px-6:   1.5rem   (24px)  /* Horizontal padding */
px-8:   2rem     (32px)  /* Standard horizontal */
py-6:   1.5rem   (24px)  /* Vertical padding */
py-8:   2rem     (32px)  /* Standard vertical */
```

#### Spacing Patterns

**Pattern: Section Spacing**
```tsx
<section className="min-h-screen flex items-center justify-center">
  <div className="max-w-5xl mx-auto px-8">
    {/* Content with mb-16 between major groups */}
  </div>
</section>
```

**Pattern: Card Padding**
```tsx
<div className="p-6 rounded-lg border border-white/10">
  {/* 24px internal padding */}
</div>
```

**Pattern: Vertical Rhythm**
```tsx
<div className="space-y-6">  {/* 24px between children */}
  <Item />
  <Item />
  <Item />
</div>
```

**Pattern: Grid Gaps**
```tsx
<div className="grid md:grid-cols-3 gap-8">
  {/* 32px between grid items */}
</div>
```

---

### Layout System

#### Container Widths

```css
max-w-4xl:  56rem  (896px)   /* Narrow content, focused reading */
max-w-5xl:  64rem  (1024px)  /* Standard sections */
max-w-6xl:  72rem  (1152px)  /* Wide sections, hero content */
max-w-7xl:  80rem  (1280px)  /* Maximum content width */
```

**Usage:**
- Hero: `max-w-6xl` (needs impact)
- Standard sections: `max-w-5xl` (optimal readability)
- Text-heavy content: `max-w-4xl` (comfortable reading)
- Full-width data tables: `max-w-7xl` (accommodate wide data)

#### Grid Patterns

**Pattern: Equal Columns**
```tsx
<div className="grid md:grid-cols-3 gap-8">
  <Column />
  <Column />
  <Column />
</div>
```

**Pattern: Asymmetric Grid**
```tsx
<div className="grid grid-cols-5 gap-4">
  <div className="col-span-2">Narrow</div>
  <div className="col-span-3">Wide</div>
</div>
```

**Pattern: Flex Split**
```tsx
<div className="flex flex-col md:flex-row items-center justify-between gap-8">
  <Left />
  <Right />
</div>
```

#### Page Structure

**Current Model: Full-Height Scroll Snap**
```css
body {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}

section {
  scroll-snap-align: start;
  scroll-snap-stop: always;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

**New Model: Content-Flexible (for Business Plan)**
```css
body {
  scroll-behavior: smooth;
  /* No scroll-snap for text-heavy content */
}

section {
  min-height: auto;  /* Allow natural content flow */
  padding-top: 6rem;
  padding-bottom: 6rem;
}
```

---

## COMPONENTS

### Navigation

#### Dot Navigation (Current Homepage)

**Structure:**
```tsx
<nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
  <button>
    <div className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/60" />
  </button>
</nav>
```

**Behavior:**
- Fixed right side, vertically centered
- Hide on mobile (< md breakpoint)
- Active state: `bg-bitcoin-orange`
- Inactive state: `bg-white/30`
- Hover state: `bg-white/60`
- Dots scale on scroll (1x → 2x for active)
- Labels appear on scroll + hover

**States:**
```tsx
// Inactive
className="w-2 h-2 rounded-full bg-white/30"

// Hover
className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/60"

// Active
className="w-2 h-2 rounded-full bg-bitcoin-orange"

// Scaling
style={{ transform: `scale(${activeScale})` }}
```

#### Sidebar Navigation (Business Plan)

**Structure:**
```tsx
<nav className="fixed left-0 top-0 h-screen w-64 border-r border-white/10 bg-black p-8 overflow-y-auto">
  <div className="space-y-6">
    {/* Logo/Title */}
    <div className="mb-12">
      <h3 className="text-xl font-bold">BTC Now</h3>
      <p className="text-sm text-white/50">Business Plan</p>
    </div>
    
    {/* Navigation Items */}
    <NavSection>
      <NavItem active />
      <NavSubItem />
    </NavSection>
  </div>
</nav>
```

**Nav Item States:**
```tsx
// Section (parent)
<button className="text-base font-semibold text-white/80 hover:text-white">
  Section Name
</button>

// Active Section
<button className="text-base font-semibold text-bitcoin-orange">
  Active Section
</button>

// Subsection (child)
<button className="text-sm text-white/60 hover:text-white/80 pl-4">
  Subsection Name
</button>

// Active Subsection
<button className="text-sm text-bitcoin-orange pl-4">
  Active Subsection
</button>
```

**Behavior:**
- Always visible on desktop
- Collapses to hamburger menu on mobile
- Active section highlighted in orange
- Smooth scroll to section on click
- Progress indicator (optional)

---

### Section Layouts

#### Full-Height Hero Section

```tsx
<section className="relative min-h-screen h-screen flex items-center justify-center">
  <div className="max-w-6xl mx-auto px-8 text-center">
    <h1 className="text-7xl md:text-9xl font-bold mb-4">
      Bitcoin Now
    </h1>
    <p className="text-5xl md:text-7xl font-bold text-bitcoin-orange">
      0% Down
    </p>
  </div>
</section>
```

#### Content Section (Standard)

```tsx
<section id="section-id" className="min-h-screen flex items-center justify-center">
  <div className="max-w-5xl mx-auto px-8">
    <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
      Section Title
    </h2>
    {/* Content */}
  </div>
</section>
```

#### Content Section (Flexible Height)

```tsx
<section id="section-id" className="py-24">
  <div className="max-w-4xl mx-auto px-8">
    <h2 className="text-4xl font-bold mb-12">
      Section Title
    </h2>
    {/* Long-form content */}
  </div>
</section>
```

---

### Cards & Blocks

#### Standard Card

```tsx
<div className="p-6 rounded-lg border border-white/10">
  <div className="text-3xl font-bold text-bitcoin-orange mb-2">
    $28M
  </div>
  <p className="text-lg text-white/80">Year 1 Revenue</p>
  <p className="text-sm text-white/50 mt-2">Projected</p>
</div>
```

#### Highlighted Card

```tsx
<div className="p-6 rounded-lg border border-bitcoin-orange bg-bitcoin-orange/5">
  <div className="text-3xl font-bold text-bitcoin-orange mb-2">
    7%
  </div>
  <p className="text-lg text-white/80">Spread</p>
  <p className="text-sm text-white/50 mt-2">BTC Now earns</p>
</div>
```

#### Info Block (Emphasis)

```tsx
<div className="p-6 rounded-lg border border-bitcoin-orange/30 bg-bitcoin-orange/5">
  <p className="text-lg text-white/70 text-center mb-3">
    The only way to buy Bitcoin on leverage
  </p>
  <p className="text-2xl font-semibold text-bitcoin-orange text-center">
    without a margin call.
  </p>
</div>
```

#### Simple Border Card

```tsx
<div className="p-6 rounded-lg border border-white/10 hover:border-white/30 transition-colors">
  {/* Content */}
</div>
```

---

### Data Display

#### Metric Display

```tsx
<div className="text-center">
  <div className="text-5xl font-bold text-bitcoin-orange">
    15%
  </div>
  <p className="text-lg text-white/80 mt-2">APR</p>
  <p className="text-sm text-white/50 mt-1">Borrower Rate</p>
</div>
```

#### Metric Row (3-Column)

```tsx
<div className="flex items-center justify-center gap-12">
  <Metric />
  <div className="w-px h-16 bg-white/20"></div>
  <Metric />
  <div className="w-px h-16 bg-white/20"></div>
  <Metric />
</div>
```

#### Data Table

```tsx
<div className="space-y-4">
  {data.map((row) => (
    <div className="grid grid-cols-5 gap-4 p-6 rounded-lg border border-white/10">
      <div className="col-span-2 text-lg font-medium">
        {row.label}
      </div>
      <div className="text-right">
        <div className="text-white/80">{row.value1}</div>
        <div className="text-xs text-white/40">{row.label1}</div>
      </div>
      <div className="text-right">
        <div className="text-white/80">{row.value2}</div>
        <div className="text-xs text-white/40">{row.label2}</div>
      </div>
      <div className="text-right">
        <div className="text-bitcoin-orange font-bold">{row.value3}</div>
        <div className="text-xs text-white/40">{row.label3}</div>
      </div>
    </div>
  ))}
</div>
```

#### Highlighted Row

```tsx
<div className="grid grid-cols-5 gap-4 p-6 rounded-lg border border-bitcoin-orange bg-bitcoin-orange/5">
  {/* Same structure as above */}
</div>
```

#### Key-Value Pairs

```tsx
<dl className="space-y-4">
  <div className="flex justify-between items-center">
    <dt className="text-base text-white/60">Label</dt>
    <dd className="text-lg font-semibold">Value</dd>
  </div>
</dl>
```

#### Timeline/Process Flow

```tsx
<div className="flex items-start justify-between gap-8">
  {steps.map((step, index) => (
    <div className="flex-1 text-center">
      <div className="w-16 h-16 rounded-full border-2 border-bitcoin-orange flex items-center justify-center text-2xl font-bold text-bitcoin-orange mx-auto mb-4">
        {step.number}
      </div>
      <p className="text-lg text-white/80">{step.text}</p>
    </div>
  ))}
</div>
```

---

### Content Blocks

#### Text Block (Long Form)

```tsx
<div className="prose prose-invert max-w-none">
  <h3 className="text-2xl font-bold mb-4">Subsection Title</h3>
  <p className="text-lg text-white/70 mb-6">
    Paragraph text with comfortable line height and spacing.
    Use text-balance for better line breaks.
  </p>
  <p className="text-lg text-white/70 mb-6">
    Additional paragraphs maintain consistent spacing.
  </p>
</div>
```

#### Quote/Callout Block

```tsx
<div className="border-l-4 border-bitcoin-orange pl-6 py-2 my-8">
  <p className="text-xl text-white/80 italic">
    Important statement or key insight that needs emphasis.
  </p>
</div>
```

#### Definition Block

```tsx
<div className="p-6 rounded-lg bg-white/5 border border-white/10">
  <h4 className="text-lg font-semibold mb-3">Term or Concept</h4>
  <p className="text-base text-white/70">
    Clear, concise definition or explanation.
  </p>
</div>
```

#### List (Unordered)

```tsx
<ul className="space-y-3">
  <li className="text-lg text-white/70 flex items-start gap-3">
    <span className="text-bitcoin-orange mt-1">•</span>
    <span>List item with proper spacing and alignment</span>
  </li>
</ul>
```

#### List (Ordered)

```tsx
<ol className="space-y-3">
  <li className="text-lg text-white/70 flex items-start gap-3">
    <span className="text-bitcoin-orange font-semibold min-w-[2rem]">1.</span>
    <span>Numbered list item with clear hierarchy</span>
  </li>
</ol>
```

---

### Interactive Elements

#### Primary Button

```tsx
<button className="px-8 py-4 bg-bitcoin-orange hover:bg-[#E8880F] text-black font-semibold rounded-lg transition-colors">
  Button Text
</button>
```

#### Secondary Button

```tsx
<button className="px-8 py-4 border-2 border-white/30 hover:border-white text-white font-semibold rounded-lg transition-colors">
  Button Text
</button>
```

#### Text Link

```tsx
<a href="#" className="text-bitcoin-orange hover:text-white transition-colors underline underline-offset-4">
  Link Text
</a>
```

#### Subtle Link

```tsx
<a href="#" className="text-white/70 hover:text-white transition-colors">
  Link Text
</a>
```

---

## MOTION & ANIMATION

### Principles

**Subtle, not showy.**
- Animations enhance understanding, never distract
- Fast enough to feel responsive, slow enough to be perceived
- Consistent timing creates rhythm

### Framer Motion Patterns

#### Fade In on View

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* Content */}
</motion.div>
```

#### Staggered Children

```tsx
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    viewport={{ once: true }}
  >
    {/* Item */}
  </motion.div>
))}
```

#### Hero Entry

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  {/* Hero content */}
</motion.div>
```

#### Delayed Fade

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5, duration: 0.8 }}
>
  {/* Content */}
</motion.div>
```

### Timing Standards

```tsx
// Quick interactions
duration: 0.3  // Hover states, small transitions

// Standard entrance
duration: 0.5  // Cards, list items

// Emphasized entrance
duration: 0.6  // Sections, important elements

// Hero/dramatic
duration: 0.8  // Hero elements, major transitions

// Stagger delay
delay: index * 0.1  // 100ms between items
delay: index * 0.2  // 200ms for more emphasis
```

### Hover States

```tsx
// Border hover
className="border border-white/10 hover:border-white/30 transition-colors"

// Background hover
className="bg-white/5 hover:bg-white/10 transition-colors"

// Scale hover (subtle)
className="transition-transform hover:scale-105"

// Text color
className="text-white/70 hover:text-white transition-colors"
```

### Transition Classes

```tsx
// Color transitions
className="transition-colors duration-300"

// All properties
className="transition-all duration-300"

// Transform only
className="transition-transform duration-300"

// Custom easing
className="transition-all duration-300 ease-out"
```

---

## RESPONSIVE DESIGN

### Breakpoints

```tsx
// Tailwind defaults we use
sm:  640px   // Mobile landscape (rarely used)
md:  768px   // Tablet (our primary breakpoint)
lg:  1024px  // Desktop (use sparingly)
xl:  1280px  // Large desktop (rare)
```

**Primary Strategy: Mobile-first, md breakpoint**

Most layouts:
- Mobile: Single column, stacked
- md and up: Multi-column, side-by-side

### Responsive Patterns

#### Typography Scaling

```tsx
<h1 className="text-5xl md:text-7xl lg:text-9xl font-bold">
  Headline
</h1>

<p className="text-base md:text-lg lg:text-xl">
  Body text
</p>
```

#### Layout Switching

```tsx
// Stack on mobile, row on desktop
<div className="flex flex-col md:flex-row gap-8">
  <Left />
  <Right />
</div>

// 1 column on mobile, 2 on tablet, 3 on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <Card />
</div>
```

#### Spacing Adjustments

```tsx
<div className="px-4 md:px-8 lg:px-12">
  {/* Less padding on mobile, more on desktop */}
</div>

<div className="mb-8 md:mb-12 lg:mb-16">
  {/* Tighter spacing on mobile */}
</div>
```

#### Visibility Toggles

```tsx
// Show only on desktop
<div className="hidden md:flex">
  Desktop Navigation
</div>

// Show only on mobile
<div className="block md:hidden">
  Mobile Menu
</div>
```

#### Width Constraints

```tsx
// Max width adapts to viewport
<div className="w-full max-w-full md:max-w-5xl lg:max-w-6xl">
  {/* Content */}
</div>
```

### Mobile Considerations

**Navigation:**
- Dot nav hidden on mobile (`hidden md:flex`)
- Sidebar converts to hamburger menu
- Bottom fixed navigation as alternative

**Typography:**
- Reduce heading sizes (9xl → 7xl → 5xl)
- Maintain readable body text (never below 16px)

**Spacing:**
- Tighter horizontal padding (px-4 vs px-8)
- Maintain vertical rhythm

**Tables:**
- Stack columns on mobile
- Horizontal scroll for complex tables
- Consider card layout as alternative

---

## BUSINESS PLAN SPECIFIC

### Layout Structure

**Two-Column Layout:**
```
┌─────────────────────────────────────┐
│  Sidebar  │  Content                │
│  (256px)  │  (flex-1)               │
│           │                         │
│  - Nav    │  - Section Header       │
│  - Prog   │  - Content Blocks       │
│           │  - Data Tables          │
│           │  - Subsections          │
└─────────────────────────────────────┘
```

**Mobile:**
```
┌─────────────────┐
│  Header + Menu  │
├─────────────────┤
│  Content        │
│  (full width)   │
└─────────────────┘
```

### Sidebar Navigation Component

```tsx
<div className="flex min-h-screen">
  {/* Sidebar */}
  <aside className="hidden lg:block fixed left-0 top-0 w-64 h-screen border-r border-white/10 bg-black overflow-y-auto">
    <div className="p-8">
      {/* Logo */}
      <div className="mb-12">
        <h3 className="text-xl font-bold">BTC Now</h3>
        <p className="text-sm text-white/50">Business Plan</p>
      </div>
      
      {/* Nav Sections */}
      <nav className="space-y-6">
        <NavSection title="Company">
          <NavItem href="#overview">Overview</NavItem>
          <NavItem href="#structure">Corporate Structure</NavItem>
          <NavItem href="#governance">Governance</NavItem>
        </NavSection>
      </nav>
    </div>
  </aside>
  
  {/* Main Content */}
  <main className="flex-1 lg:ml-64">
    <div className="max-w-4xl mx-auto px-8 py-24">
      {/* Content */}
    </div>
  </main>
</div>
```

### Content Sections

**Section Header:**
```tsx
<header className="mb-16">
  <div className="text-sm text-bitcoin-orange mb-2">Section 01</div>
  <h2 className="text-4xl font-bold mb-4">Company Overview</h2>
  <p className="text-lg text-white/60">
    Brief section description or context.
  </p>
</header>
```

**Subsection:**
```tsx
<section className="mb-12" id="subsection-id">
  <h3 className="text-2xl font-bold mb-6">Subsection Title</h3>
  <div className="space-y-6">
    {/* Content blocks */}
  </div>
</section>
```

### Detailed Content Patterns

**Company Information:**
```tsx
<div className="grid md:grid-cols-2 gap-6 p-6 rounded-lg border border-white/10">
  <div>
    <div className="text-sm text-white/50 mb-1">Incorporation</div>
    <div className="text-lg font-medium">Delaware, USA</div>
  </div>
  <div>
    <div className="text-sm text-white/50 mb-1">Founded</div>
    <div className="text-lg font-medium">2024</div>
  </div>
  <div>
    <div className="text-sm text-white/50 mb-1">Tax ID</div>
    <div className="text-lg font-medium">XX-XXXXXXX</div>
  </div>
  <div>
    <div className="text-sm text-white/50 mb-1">Headquarters</div>
    <div className="text-lg font-medium">New York, NY</div>
  </div>
</div>
```

**Team Member (Detailed):**
```tsx
<div className="p-6 rounded-lg border border-white/10">
  <div className="flex items-start justify-between mb-4">
    <div>
      <h4 className="text-xl font-bold">Name</h4>
      <p className="text-sm text-bitcoin-orange">Title</p>
    </div>
  </div>
  <p className="text-base text-white/70 mb-4">
    Detailed background and relevant experience.
  </p>
  <div className="space-y-2">
    <div className="text-sm">
      <span className="text-white/50">Previous: </span>
      <span className="text-white/80">Company, Role</span>
    </div>
    <div className="text-sm">
      <span className="text-white/50">Education: </span>
      <span className="text-white/80">Degree, School</span>
    </div>
  </div>
</div>
```

**Financial Table:**
```tsx
<div className="overflow-x-auto">
  <table className="w-full">
    <thead>
      <tr className="border-b border-white/10">
        <th className="text-left py-3 text-sm text-white/50 font-medium">Year</th>
        <th className="text-right py-3 text-sm text-white/50 font-medium">Revenue</th>
        <th className="text-right py-3 text-sm text-white/50 font-medium">Expenses</th>
        <th className="text-right py-3 text-sm text-white/50 font-medium">Profit</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-white/10">
        <td className="py-4 text-base">Year 1</td>
        <td className="py-4 text-right font-semibold">$28M</td>
        <td className="py-4 text-right">$12M</td>
        <td className="py-4 text-right text-bitcoin-orange font-semibold">$16M</td>
      </tr>
    </tbody>
  </table>
</div>
```

**Legal/Compliance Section:**
```tsx
<div className="p-6 rounded-lg bg-white/5 border border-white/10">
  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
    <span className="text-bitcoin-orange">⚖</span>
    Legal Framework
  </h4>
  <div className="space-y-4">
    <div>
      <div className="text-sm text-white/50 mb-1">License Type</div>
      <div className="text-base text-white/80">Money Transmitter License</div>
    </div>
    <div>
      <div className="text-sm text-white/50 mb-1">Jurisdictions</div>
      <div className="text-base text-white/80">NY, CA, TX, FL (+ 46 states pending)</div>
    </div>
  </div>
</div>
```

---

## QUICK REFERENCE

### Typography Quick Guide

| Type | Class | Complete Example |
|------|-------|------------------|
| **Hero** | 9xl | `text-9xl font-bold leading-none tracking-tighter` |
| **Page H1** | 6xl | `text-6xl font-bold leading-tight tracking-tight` |
| **Section H2** | 5xl | `text-5xl font-bold leading-tight tracking-tight` |
| **Subsection H3** | 4xl | `text-4xl font-bold leading-tight` |
| **H4** | 2xl | `text-2xl font-semibold leading-snug` |
| **Body Large** | xl | `text-xl text-white/70 leading-relaxed` |
| **Body** | lg | `text-lg text-white/70 leading-normal` |
| **Label** | sm | `text-sm text-white/50 leading-normal` |

### Most Common Patterns

**Section:**
```tsx
<section className="py-24">
  <div className="max-w-5xl mx-auto px-8">
    <h2 className="text-5xl font-bold leading-tight tracking-tight mb-16">Title</h2>
    {/* Content */}
  </div>
</section>
```

**Card:**
```tsx
<div className="p-6 rounded-lg border border-white/10">
  {/* Content */}
</div>
```

**Metric:**
```tsx
<div>
  <div className="text-5xl font-bold leading-tight text-bitcoin-orange">$28M</div>
  <p className="text-sm text-white/50 leading-normal mt-1">Label</p>
</div>
```

**Button:**
```tsx
<button className="px-8 py-4 bg-bitcoin-orange hover:bg-[#E8880F] text-black font-semibold rounded-lg transition-colors">
  Action
</button>
```

**Animate In:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
```

---

## DESIGN CHECKLIST

Before finalizing any design, verify:

### Alignment with Brand Voice

- [ ] Is this direct? (No decoration, clear purpose)
- [ ] Is this factual? (Numbers emphasized, hierarchy clear)
- [ ] Is this non-apologetic? (Bold, confident, no hedging)
- [ ] Is this methodical? (Consistent spacing, logical structure)
- [ ] Is this to the point? (Minimal components, no fluff)

### Technical Implementation

- [ ] Uses only black, white, and bitcoin-orange
- [ ] Typography follows scale (never custom sizes)
- [ ] Line height specified for all text elements
- [ ] Negative tracking applied to large headlines (5xl+)
- [ ] Spacing uses 8px base unit
- [ ] Responsive behavior defined for mobile
- [ ] Animations are subtle and consistent
- [ ] Hover states are clear and functional

### Accessibility

- [ ] Text contrast is sufficient (white on black = high contrast)
- [ ] Font sizes are readable (min 16px body text)
- [ ] Interactive elements have clear hover/focus states
- [ ] Navigation is keyboard accessible
- [ ] Content hierarchy is logical

### Performance

- [ ] Using system fonts (zero load time)
- [ ] Minimal animation libraries (Framer Motion only)
- [ ] No decorative images (unless data visualization)
- [ ] Efficient component structure

---

## FINAL RULE

**When in doubt, remove.**

If an element doesn't directly serve the information hierarchy or brand voice:
- Don't add a decoration
- Don't add a color
- Don't add an animation
- Don't add extra spacing

Say what it is. Design what it needs.

**Bitcoin Now Bankable.**

