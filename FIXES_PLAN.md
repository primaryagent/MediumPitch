# Website Content Fixes - Detailed Plan

This document shows every change that will be made to the website sections, organized by file.

---

## Hero.tsx

### Fix 1: Remove em dash

**Before:**
```tsx
First securitized Bitcoin installment credit product - paying institutional investors fixed interest while giving consumers leverage without margin calls.
```

**After:**
```tsx
First securitized Bitcoin installment credit product paying institutional investors fixed interest while giving consumers leverage without margin calls.
```

**Why:** Em dashes are banned in the brand voice. Removing it creates cleaner flow.

---

## WhatWeDo.tsx

### Fix 1: Remove lender-of-record mention

**Before:**
```tsx
Our lender-of-record partnership provides the account management infrastructure that makes installment payments seamless - each Bitcoin installment gets its own account, enabling smooth loan transfers to bond SPVs while consumers continue paying the same account number.
```

**After:**
```tsx
Each Bitcoin installment plan receives dedicated account management infrastructure for seamless payments. Consumers maintain the same account number even as loans transfer to bond SPVs, ensuring uninterrupted payment processing.
```

**Why:** "Lender-of-record partnership" is outdated structure. Focus on what the infrastructure does, not the partnership label.

### Fix 2: Remove em dash in same paragraph

**Why:** Same paragraph has em dash that needs removal (handled in rewrite above).

### Fix 3: Update status box

**Before:**
```tsx
<p className="text-2xl font-bold">Q1 2026 beta</p>
```

**After:**
```tsx
<p className="text-2xl font-bold">April 27, 2026 launch</p>
```

**Why:** Consistency with other sections. It's a live launch, not a beta.

---

## Market.tsx

### Fix 1: Add potential credit market context

**Before:**
```tsx
<p className="text-xl text-white/80 leading-relaxed">
  $2.2T Bitcoin market cap. $0 institutional credit access without liquidation risk.
</p>
```

**After:**
```tsx
<p className="text-xl text-white/80 leading-relaxed">
  $2.2T Bitcoin market cap. $0 institutional credit access without liquidation risk. Potential credit market: $440-550B (20-25% of market cap, matching traditional asset leverage ratios).
</p>
```

**Why:** Provides context for total addressable market using comparable leverage ratios.

### Fix 2: Clarify crypto holder FICO statistic

**Before:**
```tsx
<li className="text-lg text-white/70 flex items-start gap-3">
  <span className="text-[#F7931A] mt-1">•</span>
  <span>36-45M crypto holders have FICO ≥ 670</span>
</li>
```

**After:**
```tsx
<li className="text-lg text-white/70 flex items-start gap-3">
  <span className="text-[#F7931A] mt-1">•</span>
  <span>36-45M crypto holders estimated to have FICO ≥ 670 (based on U.S. credit score distribution applied to crypto holder demographics)</span>
</li>
```

**Why:** Source isn't verified from direct data. Making it clear this is an estimate based on demographic modeling.

---

## Moat.tsx

### Fix 1: Remove question mark in statement

**Before:**
```tsx
<strong className="text-white">Layer 1:</strong> Keep all payments collected before default. No clawback. Defaulter paid $58K? We keep $58K.
```

**After:**
```tsx
<strong className="text-white">Layer 1:</strong> Keep all payments collected before default. No clawback. If a borrower defaults after paying $58K, we keep $58K.
```

**Why:** Question mark suggests uncertainty. State it as a conditional fact.

### Fix 2: Acknowledge Bitcoin volatility while explaining advantage

**Before:**
```tsx
<strong className="text-white">Layer 2:</strong> Bitcoin recovered at market value. Cars depreciate 20-40%. Bitcoin: market rate on recovery date.
```

**After:**
```tsx
<strong className="text-white">Layer 2:</strong> Bitcoin maintains deep market liquidity at recovery. Cars depreciate 20-40% between purchase and repossession. Bitcoin can be liquidated at market rate on recovery date through deep, 24/7 liquidity, regardless of price volatility.
```

**Why:** Acknowledges Bitcoin price volatility while explaining why liquidity advantage still holds. More honest and complete.

### Fix 3: Remove double negative

**Before:**
```tsx
<p className="text-lg text-white/70 leading-normal mb-4">
  Competitors cannot replicate without:
</p>
<ul className="space-y-3">
  <li className="text-lg text-white/70 flex items-start gap-3">
    <span className="text-[#F7931A] mt-1">•</span>
    <span>Non-depreciating collateral (Bitcoin)</span>
  </li>
  ...
</ul>
```

**After:**
```tsx
<p className="text-lg text-white/70 leading-normal mb-4">
  Competitors need all of:
</p>
<ul className="space-y-3">
  <li className="text-lg text-white/70 flex items-start gap-3">
    <span className="text-[#F7931A] mt-1">•</span>
    <span>Non-depreciating collateral (Bitcoin)</span>
  </li>
  ...
</ul>
```

**Why:** "Cannot...without" is double negative. "Need all of" is clearer and more direct.

### Fix 4: Complete sentence for fragment

**Before:**
```tsx
Profitable at $100M originations. Banks need $500M-$1B to justify overhead (15-20% ROE hurdles).
```

**After:**
```tsx
The platform becomes profitable at $100M in originations. Banks need $500M-$1B to justify their overhead (15-20% ROE hurdles), giving us a structural cost advantage at smaller scale.
```

**Why:** Fragment doesn't work in explanatory paragraph. Complete sentence shows the comparative advantage more clearly.

### Fix 5: Repeat fixes in "Capital efficiency at scale" subsection (same text appears twice)

**Why:** Same paragraph appears in two places in Moat.tsx. Apply same fix to both instances.

---

## HowItWorks.tsx

### Fix 1: Change "liquidation" to "sell" in borrower section

**Before:**
```tsx
<p className="text-lg text-white/70 leading-normal">
  <strong className="text-white">Liquidation Options (Borrower-Initiated Only):</strong> Through the app, you can request partial or full liquidation at any time. This option is typically exercised when Bitcoin appreciates significantly and you want to capture gains - any excess Bitcoin after settling your balance is returned to you. Example: You buy $100K Bitcoin via installment plan. Bitcoin appreciates to $300K. You request liquidation: Bitcoin sold at $300K, your remaining obligation paid off (say $150K remaining), you receive $150K profit. In downturn scenarios, your payment obligations continue regardless of Bitcoin's price (no forced liquidations by lenders), but voluntary liquidation becomes less attractive. Warehouse and bond investors can NEVER force liquidation - it's your Bitcoin, you control the timing. No USD refunds; pay through completion for full Bitcoin transfer rights.
</p>
```

**After:**
```tsx
<p className="text-lg text-white/70 leading-normal">
  <strong className="text-white">Voluntary Sale Options (Borrower-Initiated Only):</strong> Through the app, you can request to sell your Bitcoin partially or in full at any time. This option is typically exercised when Bitcoin appreciates significantly and you want to capture gains. Any excess proceeds after settling your remaining balance are returned to you. Example: You buy $100K Bitcoin via installment plan. Bitcoin appreciates to $300K. You request sale: Bitcoin sold at $300K, your remaining obligation paid off (say $150K remaining), you receive $150K profit. In downturn scenarios, your payment obligations continue regardless of Bitcoin's price (no forced sales by lenders), but voluntary sale becomes less attractive. Warehouse and bond investors can NEVER force sale. It's your Bitcoin. You control the timing. No USD refunds; complete all payments for full Bitcoin transfer rights.
```

**Why:** "Liquidation" is technical investor language. Borrowers understand "sell." More accessible while maintaining accuracy.

### Fix 2: Fix key differentiator paragraph

**Before:**
```tsx
<p className="text-lg text-[#F7931A] leading-normal font-semibold">
  Key differentiator: Unlike margin loans that force liquidation, only YOU can trigger liquidation. Zero forced liquidation risk.
</p>
```

**After:**
```tsx
<p className="text-lg text-[#F7931A] leading-normal font-semibold">
  Key differentiator: Unlike margin loans that force sales during crashes, only you decide when to sell. No forced sales by lenders, ever.
</p>
```

**Why:** Consistent terminology change. More direct language.

### Fix 3: Acknowledge volatility in collateral description

**Before:**
```tsx
Bitcoin collateral represents 52% of total payment obligation: $100,000 Bitcoin backs $192,000 total obligation (1.92x payment-to-collateral ratio). This structure provides loss protection through three layers: (1) retained payments before default, (2) Bitcoin recovery at market value, (3) reissuance economics that generate fresh revenue without new capital. Unlike traditional lending where unsecured portions represent total loss, Bitcoin's non-depreciating nature and reissuance capability provide genuine loss protection.
```

**After:**
```tsx
Bitcoin collateral represents 52% of total payment obligation: $100,000 Bitcoin backs $192,000 total obligation (1.92x payment-to-collateral ratio). This structure provides loss protection through three layers: (1) retained payments before default, (2) Bitcoin recovery at market value, (3) reissuance economics that generate fresh revenue without new capital. Unlike traditional lending where unsecured portions represent total loss, Bitcoin maintains deep market liquidity (enabling instant liquidation at current market rates rather than depreciated asset values) and reissuance capability, providing genuine loss protection even through price volatility.
```

**Why:** Acknowledges volatility exists while explaining why the structure still provides advantage. More intellectually honest.

### Fix 4: Break down complex calculation in investor section

**Before:**
```tsx
<p className="text-lg text-white/70 leading-normal">
  Weighted average coupon: 7.44% ($70M at 7% + $20M at 9% over $90M bonds). Annual spread: 7.56% calculated on $100M financed amount (borrowers pay installment pricing equivalent to 15% effective APR on $100M = $15M annually, bonds pay 7.44% weighted coupon = $6.7M annually, warehouse captures $15M - $6.7M - $0.75M servicing = $7.56M spread).
</p>
```

**After:**
```tsx
<div className="p-6 rounded-lg border border-white/10 mb-6">
  <p className="text-lg font-semibold mb-4">Bond Economics:</p>
  
  <p className="text-lg text-white/70 leading-normal mb-4">
    <strong className="text-white">Weighted average coupon: 7.44%</strong>
  </p>
  <ul className="space-y-2 mb-4 ml-4">
    <li className="text-white/70">• $70M AAA bonds at 7% = $4.9M annual interest</li>
    <li className="text-white/70">• $20M BBB bonds at 9% = $1.8M annual interest</li>
    <li className="text-white/70">• Total: $6.7M on $90M bonds</li>
  </ul>
  
  <p className="text-lg text-white/70 leading-normal mb-4">
    <strong className="text-white">Annual spread: 7.56% ($7.56M per tranche)</strong>
  </p>
  <ul className="space-y-2 ml-4">
    <li className="text-white/70">• Borrower payments: $15M (15% effective APR on $100M financed)</li>
    <li className="text-white/70">• Bond interest: $6.7M (7.44% weighted average)</li>
    <li className="text-white/70">• Servicing costs: $0.75M (0.75% of loans)</li>
    <li className="text-[#F7931A] font-semibold">• Warehouse spread: $7.56M annually</li>
  </ul>
</div>
```

**Why:** Dense calculation paragraph is hard to parse. Structured breakdown makes math traceable and verifiable.

### Fix 5: Emphasize reissuance advantage earlier

**Current location:** Near end of Capital Efficiency subsection

**Change:** Move this paragraph up and expand:

**Before:**
```tsx
<p className="text-lg text-white/70 leading-normal">
  Traditional lenders liquidate repossessed collateral at loss, redeploy fresh capital. We retain Bitcoin, reissue it.
</p>
```

**After (moved to earlier, expanded):**
```tsx
<div className="p-6 rounded-lg border border-[#F7931A] bg-[#F7931A]/5 mb-6">
  <h4 className="text-xl font-semibold mb-4">Key Structural Advantage:</h4>
  <p className="text-lg text-white/70 leading-normal mb-4">
    Traditional lenders liquidate repossessed collateral at loss and redeploy fresh capital for new loans. Each default permanently consumes warehouse capacity.
  </p>
  <p className="text-lg text-white/70 leading-normal mb-4">
    We retain Bitcoin, reissue it to new borrowers, and generate fresh revenue without deploying new capital. As long as demand exists for Bitcoin installment plans, recovered Bitcoin never needs to be sold. The warehouse maintains a rolling cost basis across all Bitcoin holdings, similar to dollar-cost averaging.
  </p>
  <p className="text-lg text-[#F7931A] font-semibold">
    Result: Self-healing warehouse. Defaults regenerate performing assets instead of depleting capital.
  </p>
</div>
```

**Why:** This is a critical differentiator that deserves prominence. Adds DCA/cost basis context. Makes the advantage crystal clear.

---

## GoToMarket.tsx

### Fix 1: Change beta to launch

**Before:**
```tsx
Not a demo. Not a beta. Real customers receive Bitcoin same-day with 10-year installment terms.
```

**After:**
```tsx
Not a demo. Live launch. Real customers receive Bitcoin same-day with 10-year installment terms.
```

**Why:** Consistency. We're calling it a "launch" or "MVP launch" everywhere else, not "beta."

---

## Team.tsx

**No changes needed.** Team section is well-written and follows brand voice appropriately.

---

## CapitalStructure.tsx

### Major restructure: Merge with Capital Efficiency from HowItWorks

**Plan:** Keep CapitalStructure.tsx as the canonical location for:
1. GP/LP structure explanation
2. Bond structure
3. Bitcoin recovery & reissuance (currently duplicated)
4. Capital efficiency mechanics (move from HowItWorks)
5. Current status

**Remove from HowItWorks.tsx:** The "Capital Efficiency" subsection (lines 129-239)

**Keep in HowItWorks.tsx:** For Borrowers, For Investors, Unit Economics subsections only

**Why:** Eliminates duplication. CapitalStructure becomes the comprehensive section for all capital/financing mechanics. HowItWorks focuses on product mechanics (how borrowers/investors experience it).

---

## WhatThisAchieves.tsx

### Major restructure: Add clear subsections and remove repetition

**Current structure:** One long undifferentiated section

**New structure with headings:**

```tsx
{/* Platform Status */}
<div id="platform-status">
  <h3 className="text-3xl font-bold leading-tight mb-8 flex items-center gap-3">
    <span className="text-white/40">→</span>
    Platform Status
  </h3>
  // Content about operational platform, $1.5M founder capital
</div>

{/* What $7M Achieves */}
<div id="what-7m-achieves">
  <h3 className="text-3xl font-bold leading-tight mb-8 flex items-center gap-3">
    <span className="text-white/40">→</span>
    What $7M Achieves
  </h3>
  // The 4-point breakdown ($1M conference, $1.5M warehouse, $2M talent, $2.5M runway)
</div>

{/* Launch Milestones */}
<div id="launch-milestones">
  <h3 className="text-3xl font-bold leading-tight mb-8 flex items-center gap-3">
    <span className="text-white/40">→</span>
    Launch Milestones
  </h3>
  // Legal structure, warehouse facility, custody, GP/LP structure
</div>

{/* Regulatory Strategy */}
<div id="regulatory-strategy">
  <h3 className="text-3xl font-bold leading-tight mb-8 flex items-center gap-3">
    <span className="text-white/40">→</span>
    Regulatory Strategy
  </h3>
  // Installment purchase structure, Stinson engagement, risks
</div>

{/* Execution Timeline */}
<div id="execution-timeline">
  <h3 className="text-3xl font-bold leading-tight mb-8 flex items-center gap-3">
    <span className="text-white/40">→</span>
    Execution Timeline
  </h3>
  // Platform operational, demand validation, launch strategy
</div>

{/* Why We're Raising */}
<div id="why-raising">
  <h3 className="text-3xl font-bold leading-tight mb-8 flex items-center gap-3">
    <span className="text-white/40">→</span>
    Why We're Raising
  </h3>
  // With/without VC comparison, $1.5M founder capital backup
</div>
```

### Fix 1: Change "proof-of-concept" to "MVP"

**Before:**
```tsx
$7M raise at $40M post-money reflects pre-revenue risk. Conference proof-of-concept changes valuation overnight.
```

**After:**
```tsx
$7M raise at $40M post-money reflects pre-revenue risk. Conference MVP launch changes valuation overnight.
```

**Why:** Consistency. "Proof-of-concept" undersells it. It's a live MVP launch with real customers.

### Fix 2: Remove content that duplicates Ask section

**Paragraphs to remove from WhatThisAchieves (duplicated in Ask):**
- Use of funds breakdown (it's more detailed in Ask)
- Customer acquisition strategy details (covered in Ask)
- Timeline sequencing (covered in Ask's "Leverage Path")

**Keep unique content:**
- Platform status and operational readiness
- Regulatory strategy details
- Execution milestones with specific dates
- Why we're raising (with/without VC comparison)

---

## Ask.tsx

### Fix 1: Remove duplicated content from WhatThisAchieves

**Content to keep in Ask (it's the canonical location):**
- Use of Funds (detailed breakdown)
- Customer Acquisition Strategy
- Leverage Path (sequencing)
- Exit Strategy

**Remove from Ask:**
- Platform operational status details (that's in WhatThisAchieves)
- Legal structure explanation (that's in WhatThisAchieves Regulatory section)

### Fix 2: Strengthen closing

**Add new final paragraph:**

```tsx
<div className="mt-16 p-8 rounded-lg border-2 border-[#F7931A] bg-[#F7931A]/10 text-center">
  <p className="text-3xl font-bold text-white mb-6">
    We launch April 27, 2026.
  </p>
  <p className="text-2xl text-white/90 mb-6">
    With or without venture capital.
  </p>
  <p className="text-xl text-white/80 leading-relaxed">
    The question is: do you want seed-stage pricing at $40M post, or Series A pricing after we prove demand?
  </p>
</div>
```

**Why:** Clear, confident close. Forces decision. Emphasizes urgency and founder commitment.

---

## GrowthModel.tsx

**No major changes needed.** Section is well-structured and clear.

Minor fix: Ensure consistency with terminology (check for "liquidation" vs "sell")

---

## RevenueModel.tsx

### Major change: Merge FinancialProjections content here

**Add to RevenueModel after existing content:**

1. **Stress Testing section** (from FinancialProjections)
2. **Long-Term Economics section** (from FinancialProjections)

**Why:** Revenue and financial projections belong together. FinancialProjections as standalone is weak closing section.

---

## FinancialProjections.tsx

### Major change: Delete this file entirely

**Why:** 
- Content is redundant with RevenueModel (year projections are identical)
- Stress testing belongs with revenue model
- Weak as closing section (defensive, vague)
- Ask should be final section (strong close)

**Action:** Delete file and remove from page.tsx imports

---

## Summary of Structural Changes

### Section order (after changes):

1. Hero ✓
2. What We Do ✓
3. Market ✓
4. How It Works ✓ (shorter - capital efficiency moved out)
5. Revenue Model ✓ (expanded with projections + stress testing)
6. Capital Structure ✓ (expanded with capital efficiency mechanics)
7. Moat ✓
8. Team ✓
9. Go-to-Market ✓
10. Growth Model ✓
11. What This Achieves ✓ (restructured with clear subsections, de-duplicated)
12. **The Ask** ✓ (final section with strong close)

**Removed:** Financial Projections (section 13) - content merged into Revenue Model

### Files to modify:
- Hero.tsx (minor - em dash)
- WhatWeDo.tsx (minor - remove lender-of-record, update beta→launch)
- Market.tsx (minor - add context, clarify stat)
- Moat.tsx (moderate - question mark, double negative, fragments, volatility)
- HowItWorks.tsx (major - liquidation→sell, calculation breakdown, move capital efficiency out)
- GoToMarket.tsx (minor - beta→launch)
- CapitalStructure.tsx (major - merge capital efficiency from HowItWorks)
- WhatThisAchieves.tsx (major - add subsections, de-duplicate)
- Ask.tsx (moderate - remove duplicates, add strong close)
- RevenueModel.tsx (major - merge FinancialProjections content)
- FinancialProjections.tsx (delete entirely)
- page.tsx (remove FinancialProjections import and component)

---

## Verification Checklist

After all changes, verify:

- [ ] No em dashes (—) anywhere
- [ ] No double negatives ("cannot...without" patterns)
- [ ] No question marks in declarative statements
- [ ] Fragments only used for intentional emphasis
- [ ] "Liquidation" → "sell" in borrower-facing content
- [ ] "Beta" → "launch" or "MVP launch" consistently
- [ ] "Proof-of-concept" → "MVP" consistently
- [ ] Bitcoin volatility acknowledged where discussing collateral
- [ ] Complex calculations broken into structured format
- [ ] No duplication between WhatThisAchieves and Ask
- [ ] No duplication between RevenueModel and (deleted) FinancialProjections
- [ ] No duplication between HowItWorks and CapitalStructure
- [ ] Strong closing section (Ask) with clear call to action
- [ ] All sections have clear subsection headers where appropriate

