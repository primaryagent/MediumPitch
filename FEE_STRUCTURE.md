# BTC Now Fee Structure & Flow

## Overview

This document provides a comprehensive breakdown of all fees in the BTC Now system, who pays them, who receives them, and when they occur. Fees are organized by entity and phase (pre-bond warehouse vs. post-bond SPV).

---

## Fee Summary by Entity

### Borrower Payment Obligations

|| Payment Type | Amount | Timing | Paid To | Notes |
||--------------|--------|--------|---------|-------|
|| **First Installment** | $1,600 per month | At plan signing (before activation) | Warehouse Fund | Required upfront payment before installment plan activates. Always paid during seasoning period. |
|| **Monthly Installments** | $1,600 per month | Monthly on same calendar day | Warehouse Fund (pre-bond) or Bond SPV (post-bond) | Installment pricing equivalent to 15% effective APR on $100K Bitcoin purchase. Due on same day each month as signing date (e.g., sign Jan 15 → due 15th monthly). |
|| **Terminal Value** | $192,000 total | Over 10-year life | — | Total obligation: $1,600/month × 120 months = $192K |
|| **Bitcoin Collateral** | $100,000 | At plan signing | Held in custody (collateral) | Bitcoin held in custody as collateral. Borrower has beneficial ownership but cannot transfer until all 120 payments completed. |
|| **Effective APR** | 15% annually | — | — | Fixed rate over 10-year term |

**Interest Calculation:**

The 15% effective APR equivalent uses standard amortizing loan formula:

**Formula:** Monthly Payment = P × [r(1+r)^n] / [(1+r)^n - 1]

Where:
- P = Principal amount ($100,000)
- r = Monthly interest rate (15% ÷ 12 = 1.25% = 0.0125)
- n = Number of payments (120 months)

**Calculation Example:**
- Principal: $100,000
- Monthly rate: 15% ÷ 12 = 1.25%
- Term: 120 months
- Monthly payment: $1,614.71 (rounded to $1,600 for simplicity)
- Total paid: $1,600 × 120 = $192,000
- Total interest: $192,000 - $100,000 = $92,000

**Alternative Rate Examples:**
| APR | Monthly Rate | Monthly Payment | Terminal Value | Total Interest |
|-----|--------------|-----------------|----------------|----------------|
| 12% | 1.00% | $1,434.71 | $172,165 | $72,165 |
| 15% | 1.25% | $1,614.71 | $193,765 | $93,765 |
| 18% | 1.50% | $1,799.84 | $215,981 | $115,981 |
| 20% | 1.67% | $1,927.80 | $231,336 | $131,336 |

*Note: Actual payments rounded for operational simplicity ($1,600/month at 15% effective APR). Terminal value calculations use actual amortization.*

**Payment Flow:**
- **Pre-bond (60-90 day seasoning):** Borrower → Warehouse Fund
- **Post-bond:** Borrower → Bond SPV → Waterfall distribution (see "Bond SPV Operations" section)

**Example: $100K Bitcoin Purchase**
- $100K Bitcoin placed in custody: Held as collateral (borrower has beneficial ownership, cannot transfer)
- Borrower pays first installment: $1,600 (at signing, before activation)
- Installment plan activates: After first payment clears
- Warehouse pays origination fee: $1,920 to BTC Now (at activation)
- Borrower pays monthly: $1,600 × 120 months for 120 months = $192K total
- Upon completion: Bitcoin released from custody to borrower with full transfer rights

---

### BTC Now (GP) Income (Fee Streams)

| Fee Type | Amount | Timing | Paid By | Phase | Notes |
|----------|--------|--------|---------|-------|-------|
| **Loan Origination Fee** | 1% of terminal value | At activation | Warehouse Fund | Pre-bond | ~$1,920 per $100K loan. ~$1M per $100M bond (521 loans). |
| **Bond Issuance Fee** | 2% of bond face value | At bond closing | Bond Investors | Pre-bond → Post-bond | $2M per $100M bond. Deducted from investor capital. |
| **Loan Servicing Fee** | 0.25% of terminal value annually | Monthly | Warehouse Fund | Pre-bond only | ~$480K/year per $192M terminal value during seasoning. |
| **Bond Servicing Fee** | 0.5% of bond face value annually | Monthly | Bond SPV | Post-bond | $500K/year per $100M bond. Covers custody fees, legal, SPV administration. |
| **Warehouse Management Fee** | 2% of NAV annually | Monthly | Warehouse Fund | All phases | Varies by NAV cycle: $150-320K/month. See "Warehouse AUM/NAV Calculation". |


**Note:** Carried interest is not a "fee" but rather an ownership allocation mechanism. See "Capital Account Allocation (Carried Interest)" section for details.

---

### Warehouse Fund Income & Expenses

**Warehouse Fund Income (What Comes IN)**

| Income Source | Amount | Timing | Phase | Notes |
|---------------|--------|--------|-------|-------|
| **Borrower Installment Payments** | $1,600/month per active borrower | Monthly | Pre-bond (seasoning) | Warehouse receives payments from borrowers during 60-90 day seasoning before transferring to bond SPV. |
| **Active Installment Plans** | $192M terminal value | During seasoning | Pre-bond (seasoning) | 521 active installment plans on warehouse books during 60-90 day seasoning period. |
| **Seasoning Payments at Bond Sale** | $1.2-1.8M | At bond issuance | Pre-bond → Post-bond | Accumulated payments from 521 borrowers during seasoning period. Retained by warehouse as cash. |
| **Equity Tranche Distributions** | ~7.75% annual (variable) | Monthly | Post-bond | Residual after: 1) Servicing fees, 2) AAA coupons, 3) BBB coupons, 4) Reserve pool funding. See "Bond SPV Operations" section. |

**Warehouse Fund Expenses (What Goes OUT)**

| Expense Type | Amount | Timing | Paid To | Phase | Notes |
|--------------|--------|--------|---------|-------|-------|
| **Loan Origination Fee** | 1% of terminal value | At activation | BTC Now GP | Pre-bond | See "BTC Now (GP) Fee Streams" section. ~$1M per $100M bond. |
| **Warehouse Management Fee** | 2% of NAV annually | Monthly | BTC Now GP | All phases | See "BTC Now (GP) Fee Streams" section. Varies by NAV cycle (~$150-320K/month). |
| **Loan Servicing Fee** | 0.25% of terminal value annually | Monthly | BTC Now GP | Pre-bond only | See "BTC Now (GP) Fee Streams" section. ~$480K/year per $192M terminal value. |
| **Bond Issuance (Asset Transfer)** | $192M terminal value | At bond closing | Bond SPV | Pre-bond → Post-bond | Installment plans transferred to SPV (off-balance sheet). Warehouse receives $88M cash + retains $10M equity. |

**Capital Account Allocations (Non-Cash):**

The following are NOT cash expenses but rather accounting allocations calculated at the annual performance meeting:

- **LP Preferred Return:** 10% annually on capital accounts. Used to calculate dilution, not a cash payment.
- **GP Carried Interest:** 50% of returns above 10% hurdle. Capital account reallocation, increases GP ownership %.

See "Capital Account Allocation (Carried Interest)" section for details on how these work.

**Note:** All operating expenses (custody fees, legal, compliance, origination costs) are paid by BTC Now GP using the management fees collected from the warehouse.

**Bitcoin Inventory from Defaults:**

When a borrower defaults:
- Warehouse keeps all installment payments received to date
- Warehouse recovers Bitcoin collateral from custody
- Bitcoin becomes warehouse inventory for reissuance to new borrowers
- This creates additional income opportunity: Bitcoin can appreciate in value and/or be resold at current market price

Example: Borrower defaults after 24 months:
- Payments collected: $1,600 × 24 = $38,400
- Bitcoin recovered: $100K (at original value, may be worth more/less at market price)
- Total warehouse recovery: $38,400 + Bitcoin inventory
- Bitcoin can be reissued: Generates new origination cycle with fresh installment plan

**Note:** Excess returns above 10% LP hurdle result in capital account reallocation (carried interest), not cash distributions. See "Capital Account Allocation" section below.

---

### Bond SPV Operations

**SPV Role:**
The Bond SPV is a special purpose vehicle that receives borrower payments and distributes them according to a strict payment waterfall. The SPV ensures bondholders receive their contracted payments (both principal and interest) and manages the equity tranche for the warehouse.

**Bond SPV Income (What Comes IN)**

| Income Source | Amount | Timing | Phase | Notes |
|---------------|--------|--------|-------|-------|
| **Borrower Installment Payments** | $1,600/month per active borrower | Monthly | Post-bond | 521 borrowers making monthly payments. ~$15M annually (includes principal + interest). |
| **Installment Plans (Asset)** | $192M terminal value | At bond issuance | Post-bond | 521 installment plans transferred from warehouse. Asset backing the bond structure. |

**Bond SPV Expenses (What Goes OUT)**

| Expense Type | Amount | Timing | Paid To | Priority | Notes |
|--------------|--------|--------|---------|----------|-------|
| **Bond Servicing Fee** | $500K annually | Monthly | BTC Now GP | 1st | 0.5% of $100M bond face value. Covers custody, legal, SPV administration. |
| **AAA Principal + Coupon** | $70M principal + $4.55M/year interest | Monthly over 10 years | AAA Investors | 2nd | 6.5% coupon on $70M. Principal amortizes over bond life. |
| **BBB Principal + Coupon** | $20M principal + $2.20M/year interest | Monthly over 10 years | BBB Investors | 3rd | 11% coupon on $20M. Principal amortizes over bond life. |
| **Reserve Pool Funding** | Variable | As needed | Reserve Account | 4th | Credit enhancement for senior tranches. Protects against defaults. |
| **Equity Distributions** | Residual (~$7.75M/year) | Monthly | Warehouse Fund | 5th | Only paid after reserve pool is fully funded. After all senior obligations including principal repayments. Variable based on collections. |

**Note:** The $15M annual borrower payments include both interest and principal amortization. SPV must return the $90M invested principal to bondholders over the 10-year life, plus pay coupons.

**Payment Priority:**
- **1st Priority:** Servicing fees to BTC Now (operating expense)
- **2nd Priority:** AAA tranche principal + coupon payments (senior debt)
- **3rd Priority:** BBB tranche principal + coupon payments (mezzanine debt)
- **4th Priority:** Reserve pool funding (credit enhancement)
- **5th Priority:** Equity tranche distributions (residual to warehouse)

**Default/Prepayment Impact:**

**Defaults (First 24 Months):**
- Non-performing installment plan is sent back to warehouse
- Warehouse substitutes a new seasoned installment plan with matching monthly payment
- Bond investors protected from early defaults through substitution mechanism
- Warehouse absorbs the defaulted loan and reissues Bitcoin from inventory

**Defaults (After 24 Months):**
- Reserve pool absorbs losses
- If reserve depleted: equity tranche absorbs first loss, then BBB, then AAA
- No substitution mechanism after 24-month period

**Prepayments:** 
- Return principal early to bondholders
- Reduce future interest payments proportionally across tranches

**Example: Monthly Distribution on $100M Bond**
- Borrower payments received: ~$1.25M/month ($15M annual ÷ 12)
- Servicing fee (0.5%): ~$42K/month → BTC Now
- AAA principal + coupon: Variable based on amortization schedule → AAA investors
- BBB principal + coupon: Variable based on amortization schedule → BBB investors
- Reserve pool: Variable based on needs
- Equity residual: Variable → Warehouse (after all senior obligations)

---

*Last Updated: October 2025*  
*Version: 1.0*

