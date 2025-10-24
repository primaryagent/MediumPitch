# BTC Now - Long-Form Brand Voice Guide

## Purpose

This guide extends BRAND_VOICE.md for complex, multi-paragraph explanations. Use this when explaining technical mechanisms, financial structures, or multi-step processes that require more than punchy statements.

**Core principle remains:** Say what it is. No bullshit.

But complex ideas get room to breathe.

---

## When to Use Which Voice

### Use BRAND_VOICE.md (Terse) for:
- Headlines and section titles
- Simple value propositions
- Single-concept statements
- Stats and metrics
- Team credentials

### Use BRAND_VOICE_LONGFORM.md for:
- Multi-step processes (How It Works)
- Financial calculations with multiple inputs
- Technical architecture explanations
- Regulatory frameworks
- Risk analysis and mitigation strategies
- Comparative economics (us vs. traditional)

---

## Core Principles (Inherited from BRAND_VOICE.md)

These never change, regardless of length:

1. **Direct** - Say what it is
2. **Factual** - Numbers speak, adjectives don't
3. **Non-apologetic** - No hedging
4. **Methodical** - Structured like code
5. **Specific** - Precision over vagueness

---

## Long-Form Adaptations

### Allow Natural Sentence Flow

**Terse voice:**
```
Bitcoin loan issued. BTC held in escrow. Released at full payoff.
```

**Long-form voice (when explaining mechanics):**
```
When you take out a Bitcoin installment plan, the Bitcoin is purchased 
immediately and held in institutional custody under your name. It remains 
there with transfer restrictions until you make your final payment, at 
which point full transfer rights are released to you.
```

**Why it works:** The mechanism requires understanding the sequence and the custody arrangement. Three fragments don't provide enough context.

### Complete Sentences for Complex Ideas

**Bad (fragment):**
```
Profitable at $100M originations.
```

**Good (complete sentence):**
```
The platform becomes profitable at $100M in originations.
```

**Why:** Fragments work for emphasis in isolation. In paragraphs explaining economics, complete sentences provide necessary connective tissue.

### Fragments Still Have a Place

Use fragments for:
- Emphasis after explanation
- Lists of credentials
- Parallel structures
- Dramatic reveals

**Example:**
```
Traditional lenders liquidate repossessed collateral at loss and redeploy 
fresh capital for new loans. Each default permanently consumes warehouse 
capacity. We retain Bitcoin, reissue it to new borrowers, and generate 
fresh revenue without deploying new capital.

Result: Self-healing warehouse.
```

The fragment "Result: Self-healing warehouse." works because it punctuates the full explanation that came before.

---

## Banned Patterns

### 1. No Em Dashes (—) Ever

**Why banned:** Em dashes create visual interruption and suggest hesitation. They're a crutch for unclear thinking.

**Bad:**
```
First securitized Bitcoin installment credit product - paying institutional 
investors fixed interest while giving consumers leverage without margin calls.
```

**Good (use colon):**
```
First securitized Bitcoin installment credit product: paying institutional 
investors fixed interest while giving consumers leverage without margin calls.
```

**Good (use period):**
```
First securitized Bitcoin installment credit product. Pays institutional 
investors fixed interest while giving consumers leverage without margin calls.
```

**Good (restructure):**
```
The first securitized Bitcoin installment credit product that pays 
institutional investors fixed interest while giving consumers leverage 
without margin calls.
```

### 2. No Double Negatives

**Bad:**
```
Competitors cannot replicate without:
- Non-depreciating collateral (Bitcoin)
- Installment purchase structure (not margin loans)
```

**Good:**
```
Competitors need all of:
- Non-depreciating collateral (Bitcoin)
- Installment purchase structure (not margin loans)
```

**Why:** "Cannot...without" forces readers to mentally reverse logic. State requirements positively.

### 3. No Confusing Punctuation

**Bad:**
```
Defaulter paid $58K? We keep $58K.
```

**Why bad:** The question mark suggests uncertainty when you're stating a fact.

**Good:**
```
Defaulter paid $58K over three years. We keep $58K.
```

**Also good:**
```
If a borrower defaults after paying $58K, we keep $58K.
```

### 4. No Vague Fragments in Complex Explanations

**Bad:**
```
Capital efficiency at scale. Profitable at $100M originations. Banks need 
$500M-$1B to justify overhead.
```

**Good:**
```
The platform becomes profitable at $100M in originations. Banks need 
$500M-$1B to justify their overhead, giving us a structural cost advantage 
at smaller scale.
```

**Why:** When comparing economics, the relationship between facts matters. Complete sentences make the comparison clear.

---

## Handling Complexity

### Financial Calculations

When showing math, break it down step by step with clear labels.

**Bad (single dense paragraph):**
```
Weighted average coupon: 7.44% ($70M at 7% + $20M at 9% over $90M bonds). 
Annual spread: 7.56% calculated on $100M financed amount (borrowers pay 
installment pricing equivalent to 15% effective APR on $100M = $15M 
annually, bonds pay 7.44% weighted coupon = $6.7M annually, warehouse 
captures $15M - $6.7M - $0.75M servicing = $7.56M spread).
```

**Good (structured breakdown):**
```
Weighted average coupon: 7.44%
- $70M AAA bonds at 7% = $4.9M
- $20M BBB bonds at 9% = $1.8M
- Total annual interest: $6.7M on $90M bonds

Annual spread calculation:
- Borrower payments: $15M (15% effective APR on $100M financed)
- Bond interest: $6.7M (7.44% weighted average)
- Servicing costs: $0.75M (0.75% of loans)
- Warehouse spread: $7.56M annually per tranche
```

**Why it works:** Each number is traceable. Readers can verify the math. The structure shows the logic.

### Multi-Layer Mechanisms

Use numbered layers or clear headings.

**Good example:**
```
Three-layer capital advantage:

Layer 1 - Retained Payments: All payments collected before default stay 
with warehouse. No clawback. If a borrower defaults after three years of 
$58K in payments, we retain $58K.

Layer 2 - Non-Depreciating Collateral: Bitcoin maintains market liquidity 
at recovery. Cars depreciate 20-40% between purchase and repossession. 
Bitcoin can be liquidated at market rate on recovery date through deep, 
24/7 liquidity.

Layer 3 - Reissuance Without Capital: Recovered Bitcoin is reissued to new 
borrowers. This generates fresh origination fees (1% of face value) and 
creates new 10-year payment streams without deploying new capital.
```

**Why it works:** Clear structure. Each layer explained fully before moving to the next. No assumed knowledge.

### Acknowledging Nuance

When something has both advantages and volatility, state both clearly.

**Bad:**
```
Bitcoin's non-depreciating nature provides loss protection.
```

**Good:**
```
Bitcoin maintains deep market liquidity, enabling instant liquidation at 
market rates unlike cars or homes. While Bitcoin price is volatile, the 
ability to recover full market value on any given day (rather than selling 
depreciated physical assets at distressed prices) provides structural 
advantage in default scenarios.
```

**Why it works:** Acknowledges volatility (readers know Bitcoin is volatile). Explains why the structure still works despite volatility. Contrasts with traditional collateral.

---

## Terminology Precision

### Use Accurate Terms for Legal/User Context

**Borrower-facing language:**
- "Liquidation" → "Sell" or "Voluntary sale"
- "Loan" → "Installment plan" or "Installment purchase"
- "Default" → "Stop payments" or "Miss payments" (when customer-facing)

**Investor-facing language:**
- "Loan" is fine (they understand credit structures)
- "Default" is standard terminology
- "Liquidation" for collateral recovery is appropriate

**Example:**

**Bad (borrower-facing):**
```
Key differentiator: Unlike margin loans that force liquidation, only YOU 
can trigger liquidation.
```

**Good (borrower-facing):**
```
Key differentiator: Unlike margin loans that force sales during crashes, 
only you decide when to sell. No forced liquidations by lenders, ever.
```

---

## Examples from Website Sections

### Before/After: Complex Paragraph

**Before:**
```
Our bankruptcy-remote structure keeps Bitcoin off our balance sheet entirely, 
eliminating corporate risk. Each tranche requires $100M in Bitcoin inventory 
to originate loans, generating a $7.56M annual spread per tranche ($75.6M 
over 10 years), creating the first securitized Bitcoin installment credit 
product that delivers fixed interest to bond investors.
```

**After:**
```
Our bankruptcy-remote structure keeps Bitcoin off our balance sheet entirely, 
eliminating corporate risk.

Each tranche requires $100M in Bitcoin inventory to originate loans. This 
generates a $7.56M annual spread per tranche, or $75.6M over the 10-year 
bond life.

This creates the first securitized Bitcoin installment credit product that 
delivers fixed interest to bond investors.
```

**Why it's better:** Three distinct ideas get three paragraphs. Each stands alone. Easier to scan.

### Before/After: Technical Explanation

**Before:**
```
$150M warehouse → $1.2B bond origination capacity (12 tranches, each requiring 
$100M in Bitcoin inventory).
```

**Good for headline.** But in explanatory text:

**After:**
```
A $150M warehouse supports $1.2B in bond origination capacity through capital 
recycling. The warehouse can maintain 12 outstanding tranches over time. Each 
tranche requires $100M in Bitcoin inventory to originate loans. After loans 
are packaged and sold as bonds, $90M returns to the warehouse (from $90M bond 
sale) while $10M stays locked in the SPV as the equity tranche.
```

**Why it's better:** Explains the "how" of capital recycling. Shows the math. Clarifies what "12 tranches" actually means.

### Before/After: Removing Jargon

**Before:**
```
Installment purchase pricing equivalent to 15% effective APR
```

**After (when explaining to consumers):**
```
15% effective APR over 10 years
```

**Why it's better:** Consumers understand APR. "Installment purchase pricing equivalent to" is legal hedge language that confuses the core point.

---

## Writing Process

### 1. Write the Terse Version First

Start with bullets. Get the facts down.

```
- Platform operational
- Custody complete November 2025
- Live launch April 27, 2026
- First securitized Bitcoin credit product
```

### 2. Identify What Needs Explanation

Ask: Would Frank (the VC) understand this without more context?

- Platform operational → Yes, clear
- Custody complete November 2025 → Needs timeline context
- Live launch April 27, 2026 → Needs "why this date" context
- First securitized Bitcoin credit product → Needs "what this means" context

### 3. Expand Only What's Unclear

```
Platform operational with 5-minute KYC/credit approvals and Stripe payment 
rails.

Custody integration with Coinbase or Anchorage completes end of November 
2025, providing institutional-grade Bitcoin storage with 4-week API 
integration timeline.

Live launch at Bitcoin Conference 2026 (April 27, Las Vegas) provides 
concentrated audience of 50,000+ Bitcoin enthusiasts for demand validation.

First securitized Bitcoin installment credit product: institutional investors 
receive fixed-rate bonds backed by Bitcoin installment payment streams.
```

### 4. Cut Ruthlessly

Read it back. Remove:
- Redundant phrases
- Hedge words
- Unnecessary adjectives
- Anything that doesn't add information

---

## Quick Decision Tree

**Is it a single, punchy fact?**
→ Use terse voice from BRAND_VOICE.md

**Does it involve calculations, multiple steps, or technical detail?**
→ Use long-form voice (this guide)

**Is it a credential or achievement?**
→ Use terse voice

**Does it require showing your work (math, logic, sequence)?**
→ Use long-form voice

**Will a smart reader need to re-read it to understand?**
→ Needs long-form treatment

**Can someone scan it and instantly get the point?**
→ Terse voice is fine

---

## Final Rules

1. **No em dashes (—).** Use colons, periods, or restructure.
2. **No double negatives.** State requirements positively.
3. **No question marks in declarative statements.** State facts as facts.
4. **Complete sentences for complex ideas.** Fragments for emphasis only.
5. **Structure complex calculations.** Make math traceable.
6. **Acknowledge nuance when it exists.** Volatility, regulatory risk, assumptions.
7. **One idea per paragraph in explanatory text.** Let ideas breathe.
8. **Use accurate terminology for audience.** Borrower-facing vs. investor-facing language.

---

## The Test

Read your section out loud as Frank (the VC).

**Ask:**
- Do I understand the mechanism?
- Can I verify the math?
- Are the risks/assumptions clear?
- Would I need to ask "How does that work?"

If yes to the last question, you need more long-form explanation.

If no questions remain, you've hit the right balance.

---

**Remember:** Direct doesn't mean incomplete. Methodical doesn't mean robotic.

Say what it is. Show your work. Cut the rest.

