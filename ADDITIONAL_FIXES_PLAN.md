# Additional Fixes Plan - User Concerns

This document addresses specific user concerns about custody provider, timelines, and technical details across the website sections.

---

## Issue 1: Custody Provider & Timeline Updates

### Multiple files affected: Hero.tsx, WhatWeDo.tsx, HowItWorks.tsx, WhatThisAchieves.tsx

**Change custody provider from Coinbase/Anchorage to Fireblocks Trust**
**Update timeline: Custody integration complete 2026, Legal opinion to proceed November 2026**

---

## Hero.tsx

### Fix 1: Update custody timeline

**Before:**
```tsx
Platform operational. Custody complete November 2025. Live launch April 27, 2026.
```

**After:**
```tsx
Platform operational. Legal opinion to proceed November 2025. Custody integration complete 2026. Live launch April 27, 2026.
```

**Why:** Correct timeline - legal opinion November 2025, full custody integration 2026

---

## WhatWeDo.tsx

### Fix 1: Update custody provider

**Before:**
```tsx
Borrowers own their Bitcoin from day one, held in institutional custody (Coinbase/Anchorage) with transfer restrictions until final payment.
```

**After:**
```tsx
Borrowers own their Bitcoin from day one, held in institutional custody (Fireblocks Trust) with transfer restrictions until final payment. Each customer receives a dedicated Bitcoin wallet address for their installment plan. No pooling of assets. You can view your Bitcoin and wallet address directly in the app.
```

**Why:** 
- Correct custody provider is Fireblocks Trust
- Emphasize dedicated wallet per customer (no pooling)
- Highlight transparency (can see wallet in app)

### Fix 2: Remove unnecessary account management sentence

**Before:**
```tsx
Each Bitcoin installment plan receives dedicated account management infrastructure for seamless payments. Consumers maintain the same account number even as loans transfer to bond SPVs, ensuring uninterrupted payment processing.
```

**After:**
```tsx
Monthly payments remain fixed regardless of Bitcoin's price.
```

**Why:** Account management infrastructure is standard for loans, adds no value. Focus on what matters to customers.

### Fix 3: Reword securitization description

**Before:**
```tsx
We package these loans into tranches and securitize them as Bitcoin-Backed Securities (BBS) - AAA and BBB-rated bonds paying 7-9% coupons to institutional investors. Each tranche requires $100M in Bitcoin inventory to originate loans, generating a $7.56M annual spread per tranche ($75.6M over 10 years), creating the first securitized Bitcoin installment credit product that delivers fixed interest to bond investors.
```

**After:**
```tsx
We securitize $100M face value Bitcoin installment plans into Bitcoin-Backed Securities (BBS). AAA tranche pays 7% coupon, BBB tranche pays 9% coupon. Each tranche generates $7.56M annual spread ($75.6M over 10 years). First securitized Bitcoin installment credit product delivering fixed interest to institutional bond investors.
```

**Why:** 
- Clearer structure: securitize X into Y
- State coupons explicitly (AAA = 7%, BBB = 9%)
- More concise, follows brand voice

---

## Market.tsx

### Fix 1: Add context about personal loan terms

**Before:**
```tsx
Personal loans prohibit investment use - covenant violations trigger immediate full repayment demands.
```

**After:**
```tsx
Personal loans prohibit investment use - covenant violations trigger immediate full repayment demands. Personal loans typically offer 3-5 year terms (rarely 7 years, never 10+ years). Short duration compounds credit score damage from high utilization.
```

**Why:** Important context - personal loans aren't long-term products, making them unsuitable for 10-year Bitcoin accumulation strategy

### Fix 2: Change "Beta" to "at launch"

**Before:**
```tsx
Pricing flexibility: Beta will validate pricing sensitivity across customer segments.
```

**After:**
```tsx
Pricing flexibility: At launch, we will validate pricing sensitivity across customer segments.
```

**Why:** Consistency - not calling it "beta" anymore

---

## HowItWorks.tsx

### Fix 1: Update custody details in borrower section

**Before:**
```tsx
<strong className="text-white">Ownership & Custody:</strong> Your Bitcoin is held in institutional custody under your name from day one, with transfer restrictions until final payment.
```

**After:**
```tsx
<strong className="text-white">Ownership & Custody:</strong> Your Bitcoin is held in institutional custody (Fireblocks Trust) under your name from day one, with transfer restrictions until final payment. Each installment plan receives a dedicated Bitcoin wallet address. No pooling of assets. You can view your Bitcoin and wallet address directly in the app.
```

**Why:** 
- Correct custody provider
- Emphasize dedicated wallet (key differentiator)
- Highlight transparency

### Fix 2: Update custody provider in investor section

**Before:**
```tsx
Each tranche requires $100M in Bitcoin inventory and is structured as bonds:
```

**After:**
(No change needed here, but verify no other Coinbase/Anchorage mentions)

---

## WhatThisAchieves.tsx

### Fix 1: Update custody timeline in milestones

**Before:**
```tsx
<strong className="text-white">Timeline:</strong> Custody complete November 2025. GP/LP structure December 2025. Warehouse roadshow begins Q1 2026. April 27, 2026 launch. $150M warehouse closed Q2 2026. First securitization Q3 2026.
```

**After:**
```tsx
<strong className="text-white">Timeline:</strong> Legal opinion to proceed November 2025. GP/LP structure December 2025. Warehouse roadshow begins Q1 2026. Custody integration complete early 2026. April 27, 2026 launch. $150M warehouse closed Q2 2026. First securitization Q3 2026.
```

**Why:** Correct sequence - legal opinion first (Nov 2025), then custody integration (early 2026), then launch (April 2026)

### Fix 2: Update custody section details

**Before:**
```tsx
<h4 className="text-2xl font-semibold leading-snug mb-4">Custody partnerships:</h4>
<p className="text-lg text-white/70 leading-normal mb-4">
  <strong className="text-white">Status: Complete end of November 2025.</strong>
</p>
<p className="text-lg text-white/70 leading-normal mb-4">
  Targeting Coinbase Custody, Anchorage Digital, or BitGo for standard institutional custody at ~0.25% AUM with established pricing, insurance arrangements, and technical documentation.
</p>
```

**After:**
```tsx
<h4 className="text-2xl font-semibold leading-snug mb-4">Custody integration:</h4>
<p className="text-lg text-white/70 leading-normal mb-4">
  <strong className="text-white">Status: Legal opinion to proceed November 2025. Integration complete early 2026.</strong>
</p>
<p className="text-lg text-white/70 leading-normal mb-4">
  Fireblocks Trust provides institutional custody with dedicated Bitcoin wallet addresses for each customer installment plan. No pooling of assets. Customers view their Bitcoin and wallet address in the app.
</p>
```

**Why:** 
- Correct provider (Fireblocks Trust)
- Correct timeline (legal opinion Nov 2025, integration early 2026)
- Emphasize dedicated wallets and transparency

### Fix 3: Update custody integration timeline in budget line

**Before:**
```tsx
<p className="text-lg text-white/70 leading-normal mb-2">Budget: $500K for custody integration (included in operating runway), covering API work, insurance, and testing.</p>
<p className="text-lg text-white/70 leading-normal">Complete end of November 2025.</p>
```

**After:**
```tsx
<p className="text-lg text-white/70 leading-normal mb-2">Budget: $500K for custody integration (included in operating runway), covering API work, insurance, and testing.</p>
<p className="text-lg text-white/70 leading-normal">Legal opinion to proceed November 2025. Integration complete early 2026.</p>
```

**Why:** Correct timeline sequence

---

## Ask.tsx

### Fix 1: Update custody integration budget line

**Before:**
```tsx
<li className="text-base text-white/70 flex items-start gap-3">
  <span className="text-[#F7931A] mt-1">•</span>
  <span>Custody integration: $500K (API work, insurance, testing - complete Nov 2025)</span>
</li>
```

**After:**
```tsx
<li className="text-base text-white/70 flex items-start gap-3">
  <span className="text-[#F7931A] mt-1">•</span>
  <span>Custody integration: $500K (API work, insurance, testing - legal opinion Nov 2025, integration complete early 2026)</span>
</li>
```

**Why:** Correct timeline with proper sequencing

---

## Summary of Changes

### Files to modify:
1. **Hero.tsx** - Update custody timeline
2. **WhatWeDo.tsx** - Change custody provider, remove unnecessary sentence, reword securitization, add dedicated wallet emphasis
3. **Market.tsx** - Add personal loan term context, change "Beta" to "at launch"
4. **HowItWorks.tsx** - Update custody provider and add dedicated wallet details in borrower section
5. **WhatThisAchieves.tsx** - Update timeline throughout, change custody provider, add dedicated wallet emphasis
6. **Ask.tsx** - Update custody timeline in budget

### Key Changes:
- ✅ Coinbase/Anchorage → Fireblocks Trust (everywhere)
- ✅ Custody timeline: Legal opinion Nov 2025, Integration complete early 2026
- ✅ Emphasize dedicated Bitcoin wallet per customer (no pooling)
- ✅ Highlight wallet visibility in app
- ✅ Remove unnecessary account management infrastructure sentence
- ✅ Reword securitization for clarity
- ✅ Add personal loan term context (3-5 years, never 10+)
- ✅ Change "Beta" → "at launch"

---

## Verification Checklist

After changes:
- [ ] No mentions of Coinbase/Anchorage remain
- [ ] All custody references mention Fireblocks Trust
- [ ] Timeline is consistent: Legal opinion Nov 2025, Integration early 2026, Launch April 2026
- [ ] Dedicated wallet/no pooling emphasized in key sections
- [ ] Securitization description is clear and concise
- [ ] Personal loan limitations include term duration context
- [ ] No "beta" references remain (use "at launch" instead)

