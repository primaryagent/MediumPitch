# BTC Now Pitch Deck Review - Frank's Questions & Feedback

**Reviewer:** Frank (as frank-persona.md)
**Document Reviewed:** BTC-Now-Medium-Pitch.md
**Review Date:** 2025-10-20
**Purpose:** Identify inconsistencies, structural issues, and questions to resolve before finalizing pitch

---

## Executive Summary

**Overall Assessment:** This is a comprehensive, well-structured pitch that demonstrates deep domain expertise. You've clearly identified risks and articulated credible mitigation plans—exactly what I look for at seed stage.

**However:** There are structural inconsistencies and positioning issues that could confuse investors and undermine credibility.

**Recommendation:** Work through the questions below, resolve inconsistencies, then update the pitch deck. The business model is sound; we need to tighten the presentation.

---

## CRITICAL INCONSISTENCIES (Must Fix)

### 1. Revenue Projections Don't Match ✅ RESOLVED

**Problem:** Your revenue numbers conflict between sections.

**RESOLUTION:** Updated Financial Projections section to match Revenue Model section. Both now show:
- Year 1: $10.5-18M
- Year 2: $23.75-37M
- Year 3: $39.75-59M
- Year 4+: $53.75-68.5M
- 10-year cumulative: $400-550M

**Clarification confirmed:** These are **platform fees only** (origination + servicing + warehouse management fees). Does NOT include warehouse fund spread capture or LP returns. Both sections now include this explicit note.

---

### 2. Warehouse Capital Status Inconsistency ✅ RESOLVED - KEEP AS IS

**"Capital Structure" section says:** "No committed warehouse capital yet. Active negotiations with private lenders, Bitcoin whales, family offices."

**"Risks & Status" section says:** "We've had exploratory conversations with family offices and Bitcoin whales... Formal commitments are contingent on beta traction."

**RESOLUTION:** Both statements are acceptable in context. "Active negotiations" refers to ongoing discussions, while "exploratory conversations" accurately describes the stage. No change needed—the language appropriately reflects seed-stage positioning.

---

### 3. Custody Partnership Positioning Confusion ✅ RESOLVED

**Original problem:** Mixed messaging between "active engagement" and "commodity service like bank account setup."

**RESOLUTION:** Updated positioning in Risks & Status section to clearly frame custody as commodity infrastructure procurement:

**New language:**
- "Custody is a commodity service. Coinbase Custody, Anchorage Digital, and BitGo all offer standard institutional custody at ~0.25% AUM with established pricing and service terms."
- "We'll execute standard service agreements during Q4 2025 technical buildout. No partnership risk—this is infrastructure procurement with established pricing, similar to opening a bank account."

**Result:** Eliminates confusion. Custody is now clearly positioned as de-risked infrastructure procurement, not a speculative partnership dependency.

---

### 4. Legal Structure Classification Needs Clarity ✅ RESOLVED

**Original concern:** Why do you need lender-of-record if this is an installment purchase (not lending)?

**CLARIFICATION RECEIVED:** The lender-of-record partnership provides operational infrastructure, NOT regulatory classification:

**Why lender-of-record is needed:**
- Provides account management infrastructure for installment purchases
- Each Bitcoin installment gets its own account at the lender-of-record
- Critical for Bond SPV transfers: consumer keeps paying same account number, while lender-of-record changes account ownership from warehouse to SPV behind the scenes
- This is operational infrastructure that makes the installment purchase structure work seamlessly at scale

**RESOLUTION:** Added explanation in Risks & Status section under "Lender-of-record partnership" clarifying:
- "This is not just payment processing. Lender-of-record partners provide account management infrastructure that's critical for our installment purchase structure."
- Explains account infrastructure and seamless SPV transfer mechanics

**Result:** Investors now understand lender-of-record is for operational infrastructure (account management), not regulatory classification. The installment purchase structure is legally accurate.

---

## QUESTIONS NEEDING MORE DETAIL

### 5. Lender-of-Record Partnership Landscape ✅ RESOLVED - KEEP AS IS

**Current statement:** "Negotiations with Cross River, WebBank. Preliminary discussions underway. Fallback: Multiple regional banks offer lender-of-record services."

**RESOLUTION:** Current language is acceptable for seed stage. The pitch now includes clear explanation of WHY lender-of-record is needed (account management infrastructure for SPV transfers), which addresses the strategic rationale. The level of partnership detail is appropriate for pre-revenue stage.

**Note:** If you DO have more specific conversations with Cross River/WebBank about timelines, concerns, or fee structures, adding that detail would strengthen the pitch—but it's not required to fix an inconsistency.

---

### 6. Rating Agency Strategy Validation ✅ RESOLVED - SKIP

**Current statement:** "Path A: Package as unsecured consumer loans for faster rating access."

**RESOLUTION:** No changes needed. The dual-path rating strategy (Path A: unsecured consumer loans, Path B: Bitcoin-backed securities) is clearly articulated in the Revenue Model section. This is appropriately conservative for seed stage—you're not claiming rating agency validation you don't have.

---

### 7. Default Rate Assumptions Missing ✅ RESOLVED

**Original problem:** Only mentioned 70% stress test, but no base case default assumptions.

**RESOLUTION:** Added new "Unit Economics & Default Assumptions" subsection in "How It Works" section.

**New content includes:**
- **Base case lifetime default rate:** 8-15% over 10-year bond life (based on FICO 670+ unsecured credit performance)
- **Stress test:** 70% lifetime defaults (AAA tranche remains fully protected)
- **Why structure survives extreme stress:** Bitcoin recovery and reissuance mechanism reduces effective LGD
- Detailed example showing traditional lender vs. BTC Now recovery economics
- Conservative design rationale for new asset class

**Result:** Investors now have clear baseline assumptions and understand stress test resilience.

---

### 8. LP Redemption Mechanics Create Risk ✅ RESOLVED

**Original concern:** Unclear redemption mechanics could create capital flight risk during market stress.

**RESOLUTION:** Clarified LP redemption mechanics in Capital Structure section.

**Updated language:**
- **Redemption request:** Simple email request (at-will)
- **Redemption is LP's decision:** Warehouse cannot force LPs out
- **Exiting LPs receive:** Original capital + all accumulated unpaid preferred return
- **Warehouse commitment:** Will use best efforts to find replacement capital when redemption requested
- **No forced liquidation rights:** LPs cannot force warehouse to liquidate assets during market stress—protects operational continuity

**Result:** Clear mechanics that balance LP flexibility with operational protection. "Best efforts" language is appropriate for seed-stage fund structure.

---

### 9. Customer Acquisition Strategy Beyond Bitcoin Conference ✅ RESOLVED

**Original concern:** Relying solely on Bitcoin Conference was risky without backup channels.

**RESOLUTION:** Multiple improvements made:

**1. Fixed conference location:** Nashville → **Las Vegas** (correct venue)

**2. De-risked beta timeline:** Added beta status showing **95% complete**:
- AML/KYC systems already operational
- Credit check infrastructure already built
- Underwriting system and borrower portal live
- Only custody and lender-of-record integrations pending
- This dramatically reduces risk of missing April 2026 launch

**3. Created dedicated "Go-to-Market Strategy" section** (new section after "The Moat"):
- Positions Bitcoin Conference as launch event (not sole strategy)
- Details viral referral program with capital efficiency benefits
- Shows scalable CAC model ($833-$3,333 referral payments based on loan size)
- Zero upfront marketing burn—referrals paid from collected revenue

**Result:** Go-to-market is now clearly articulated with both event strategy and scalable viral mechanics. Beta readiness (95%) makes April 2026 timeline credible.

---

## STRUCTURAL RECOMMENDATIONS

### 10. "The Moat" Section Comes Too Late ✅ RESOLVED

**Original problem:** "The Moat" appeared too late (after Revenue Model, Capital Structure), so investors formed opinions about competitive threats before seeing competitive advantages.

**RESOLUTION:** Moved "The Moat" section to immediately after "The Market" section.

**New structure:**
1. What We Do
2. The Market (problem size)
3. **The Moat** ← NOW HERE (investors see "why you?" early)
4. **Go-to-Market Strategy** ← NEW SECTION
5. How It Works (mechanics)
6. Revenue Model
7. Team
8. Capital Structure
9. What This $7M Achieves (renamed from Risks & Status)

**Result:** Investors see competitive advantages before diving into operational details. Better narrative flow: Problem → Why You Win → How You'll Acquire Customers → How It Works → Economics.

---

### 11. Customer Acquisition Strategy Buried in "The Ask" ✅ RESOLVED

**Original problem:** Referral program was buried at the end in "The Ask" section, hiding a competitive advantage.

**RESOLUTION:** Created new "Go-to-Market Strategy" section positioned after "The Moat" section.

**New section includes:**
- **Launch Event:** Bitcoin Conference 2026 (Las Vegas, April 27, 50K+ attendees)
- **Viral Referral Program:** Detailed explanation of capital-efficient customer acquisition
- **Zero upfront marketing spend:** Referrals paid from collected revenue only
- **Scalable economics:** $833-$3,333 referral payments that scale with loan size

**Result:** Go-to-market strategy is now prominent, appearing early in the pitch (before operational details). Demonstrates both launch plan and scalable acquisition mechanics.

---

### 12. "Risks & Status" Should Be Reframed ✅ RESOLVED

**Original problem:** "Risks & Status" section appeared to bury bad news at the end.

**RESOLUTION:** Completely reframed section with new title: **"What This $7M Achieves"**

**New opening (leads with execution roadmap):**

*This $7M seed round funds four critical milestones:*

1. **Complete beta platform** ($1.4M) — 95% built, final custody and banking integrations
2. **Finalize lender-of-record partnership** ($2M) — Legal structuring, compliance integration
3. **Secure $150M warehouse facility** ($2.1M) — Roadshow, term sheets, legal documentation
4. **Validate demand and pricing** ($2M) — 6-9 months operating runway to prove market fit

**Then includes:**
- Timeline: 6-9 months to warehouse commitment and loan origination launch
- Current stage transparency (pre-revenue, beta 95% complete, active negotiations)
- Execution milestones (same dependencies, but framed as "what we're building")
- Regulatory strategy
- Beta status (95% complete with operational systems)

**Result:** Shifts from risk-focused to execution-focused while maintaining seed-stage transparency. Investors see the plan to deploy capital and de-risk the business.

---

## WHAT YOU'RE DOING RIGHT

Before this review sounds too critical, here's what's **excellent** about your pitch:

✅ **Stage-appropriate transparency:** You clearly state "pre-revenue, no partnerships signed, no committed warehouse capital." Perfect for seed stage. You're not overselling.

✅ **Risk identification:** You've identified critical dependencies (lender-of-record, warehouse capital, custody) and allocated budget to solve them. This demonstrates judgment.

✅ **Capital efficiency narrative:** The self-healing warehouse concept is genuinely differentiated and well-articulated. This is your killer insight.

✅ **Team quality:** Relevant domain expertise (Evan's JPM securitization background is particularly strong for this business).

✅ **Use of funds is specific:** $1.5M legal, $2.1M warehouse roadshow, $1.4M beta, $2M operations. This shows you've thought through execution.

✅ **Stress testing:** Mentioning "survives 90% Bitcoin crash + 70% lifetime defaults" shows you've modeled downside scenarios. Investors respect this.

✅ **Regulatory awareness:** You've clearly thought about compliance complexity and budgeted accordingly.

✅ **Market timing:** You've articulated why now (Bitcoin maturation, institutional interest, crypto payment normalization).

---

## MY HONEST ASSESSMENT

### Would I invest at $7M / $40M post?

**If you resolve the inconsistencies above:** This is a **credible seed-stage opportunity** with appropriate risk/reward for early capital.

**What would make me MORE confident:**

1. **Evidence of lender-of-record interest:** Show me 3-5 preliminary conversations with specific feedback. This dramatically de-risks execution.

2. **Rating agency validation:** One exploratory call with Kroll or DBRS Morningstar would significantly de-risk the securitization path.

3. **Demand validation beyond network conversations:** Even small tests matter. "$5K in targeted ads to Bitcoin holders generated 250 waitlist signups with average stated purchase intent of $40K" would be powerful.

4. **Written legal opinion:** Get Stinson to provide a memo on installment purchase vs. consumer lending classification. Worth the legal spend.

**Bottom line:** This is a **well-conceived business model with genuine structural advantages** (bankruptcy-remote structure, self-healing warehouse, first-mover data). The pitch demonstrates deep expertise.

But the **inconsistencies undermine credibility.** Fix the revenue reconciliation, custody positioning, and lender-of-record specificity—then this becomes a compelling seed-stage pitch.

---

## NEXT STEPS - LET'S WORK THROUGH THIS TOGETHER

### Phase 1: Answer the Questions (You)
Go through sections 1-9 above and answer my questions. Be brutally honest—that's the only way we can fix this properly.

### Phase 2: Reconcile the Numbers (Together)
Once I understand the revenue model components, we'll create a consistent financial narrative across all sections.

### Phase 3: Strengthen Weak Points (Together)
Based on your answers, we'll determine:
- What needs more validation work (rating agencies, lender-of-record conversations)
- What needs clearer positioning (custody, legal structure)
- What needs more conservative language (warehouse capital status)

### Phase 4: Restructure the Pitch (Together)
Move sections around, tighten language, ensure consistent terminology.

### Phase 5: Final Review (Me as Frank)
I'll review the updated pitch deck one more time to ensure all inconsistencies are resolved.

---

## YOUR TURN

Start with the **CRITICAL INCONSISTENCIES** section (1-4). Those need clarity before we can make progress on the rest.

Which inconsistency should we tackle first? Or do you want to give me a brain dump on all of them?

---

**Remember:** You're asking investors to back the journey, not the finished product. The plan is logical. The team is capable. The risks are identified. Let's tighten the presentation so your expertise and judgment come through clearly.
