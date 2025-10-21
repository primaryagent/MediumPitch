# BTC Now Variables & Parameters

This document serves as a single source of truth for all parameters, variables, and calculations used throughout the BTC Now fee structure.

---

## 1. Borrower Variables

| Variable | Value | Formula | Notes |
|----------|-------|---------|-------|
| **Bitcoin Loan Amount** | $100,000 | Input parameter | Standard loan size per borrower |
| **Monthly Payment** | $1,600 | P × [r(1+r)^n] / [(1+r)^n - 1] | Where P=$100K, r=1.25% (15%÷12), n=120 months |
| **APR (Annual Percentage Rate)** | 15% | Input parameter | Fixed rate over 10-year term |
| **Monthly Interest Rate** | 1.25% | 15% ÷ 12 | Used in amortization calculation |
| **Loan Term** | 120 months | Input parameter | 10 years |
| **Terminal Value** | $192,000 | $1,600 × 120 months | Total amount paid over life of loan |
| **Total Interest Paid** | $92,000 | $192,000 - $100,000 | Interest portion of terminal value |
| **Bitcoin Collateral** | $100,000 | Equal to loan amount | Held in custody until all 120 payments completed |

---

## 2. Bond Structure Variables

| Variable | Value | Formula | Notes |
|----------|-------|---------|-------|
| **Borrowers per Bond** | 521 | Calculated | Number of $100K loans to create $100M bond |
| **Total Terminal Value** | $192M | 521 × $192,000 | Aggregate of all installment plans |
| **Bond Face Value** | $100M | 521 × $100K × 1.92 ≈ $100M | Total bond size |
| **AAA Tranche** | $70M | 70% of face value | Senior secured tranche |
| **AAA Percentage** | 70% | $70M ÷ $100M | Senior tranche allocation |
| **BBB Tranche** | $20M | 20% of face value | Mezzanine tranche |
| **BBB Percentage** | 20% | $20M ÷ $100M | Mezzanine tranche allocation |
| **Equity Tranche** | $10M | 10% of face value | Junior tranche retained by warehouse |
| **Equity Percentage** | 10% | $10M ÷ $100M | Equity tranche allocation |
| **Sold to Investors** | $90M | $70M + $20M | AAA + BBB tranches |
| **Retained by Warehouse** | $10M | Equity tranche | Off-balance sheet in SPV |

---

## 3. Interest Rates & Coupons

| Variable | Value | Formula | Notes |
|----------|-------|---------|-------|
| **Borrower APR** | 15% | Input parameter | Rate paid by borrowers |
| **AAA Coupon** | 6.5% | Input parameter | Annual interest rate on AAA tranche |
| **BBB Coupon** | 11% | Input parameter | Annual interest rate on BBB tranche |
| **Weighted Avg Coupon** | 7.44% | ($70M × 6.5% + $20M × 11%) ÷ $90M | Blended rate paid to bondholders |
| **Bond Servicing Fee** | 0.5% | Input parameter | Paid to BTC Now GP from SPV |
| **Net Interest Spread** | 7.75% | 15% - 7.44% - 0.5% = 7.06% (approx) | Residual to equity after coupons and servicing |
| **AAA Annual Interest** | $4.55M | $70M × 6.5% | Annual payment to AAA holders |
| **BBB Annual Interest** | $2.20M | $20M × 11% | Annual payment to BBB holders |
| **Total Annual Coupons** | $6.75M | $4.55M + $2.20M | Total interest paid to bondholders |

---

## 4. Fee Percentages & Amounts

| Fee Type | Rate | Base | Annual Amount | Notes |
|----------|------|------|---------------|-------|
| **Loan Origination Fee** | 1% | Terminal value | ~$1M per bond | $192M × 1% = $1,920 per borrower × 521 |
| **Bond Issuance Fee** | 2% | Bond face value | $2M per bond | $100M × 2% = $2M one-time |
| **Loan Servicing Fee** | 0.25% | Terminal value | $480K per bond | $192M × 0.25% during pre-bond only |
| **Bond Servicing Fee** | 0.5% | Bond face value | $500K per bond | $100M × 0.5% annually for 10 years |
| **Warehouse Management Fee** | 2% | NAV | ~$3M annually | Varies by NAV cycle ($150-320K/month) |

---

## 5. Warehouse Variables

| Variable | Value | Formula | Notes |
|----------|-------|---------|-------|
| **Capital Commitment** | $150M | Input parameter | LP committed capital |
| **LP Preferred Return** | 10% | Input parameter | Annual hurdle rate |
| **LP Preferred Amount** | $15M/year | $150M × 10% | First priority distribution |
| **GP Carried Interest** | 50% | Input parameter | Split of returns above 10% hurdle |
| **Carry Split** | 50/50 | Above 10% hurdle | LP gets 50%, GP gets 50% of excess |
| **Average NAV** | ~$150M | Dynamic | Varies through origination cycle |
| **Minimum NAV** | ~$88M | Post-bond issuance | Cash after bond sale |
| **Maximum NAV** | ~$192M | During seasoning | Terminal value of active installments |

---

## 6. Timing Variables

| Variable | Value | Notes |
|----------|-------|-------|
| **Seasoning Period** | 60-90 days | Pre-bond period where warehouse collects payments |
| **Typical Seasoning** | 3 months | Used in calculations |
| **Default Substitution Period** | 24 months | Period where defaults are replaced by warehouse |
| **Bond Term** | 10 years | 120 months |
| **Payment Frequency** | Monthly | Borrowers pay monthly on same calendar day |
| **Bond Issuance Cycle** | ~12 months | Time to originate, season, and issue one bond |
| **Steady State Bonds** | 12 bonds | Outstanding bonds in steady state operations |

---

## 7. Calculated Amounts

### Per Bond Cycle

| Calculation | Amount | Formula | Notes |
|-------------|--------|---------|-------|
| **Seasoning Payments** | $1.2-1.8M | 521 × $1,600 × 3 months | Cash collected during pre-bond period |
| **Origination Fees (Total)** | ~$1.0M | 521 × $1,920 | Paid to BTC Now at activation |
| **Loan Servicing (3 months)** | ~$120K | $192M × 0.25% ÷ 12 × 3 | Pre-bond servicing fees |
| **Management Fees (3 months)** | $600-900K | Variable based on NAV phase | During seasoning period |
| **Bond Issuance Fee** | $2.0M | $100M × 2% | One-time at bond closing |
| **Bond Servicing (10 years)** | $5.0M | $500K × 10 years | Post-bond servicing fees |
| **Total Fees per Bond** | $8.5-9.5M | Sum of all fees | Over full 10-year cycle |

### Annual Cash Flows (Per $100M Bond)

| Flow Type | Annual Amount | Formula | Notes |
|-----------|---------------|---------|-------|
| **Borrower Payments to SPV** | ~$15M | 521 × $1,600 × 12 months | Principal + interest |
| **Bond Servicing Fee** | $500K | $100M × 0.5% | To BTC Now GP |
| **AAA Coupons** | $4.55M | $70M × 6.5% | To AAA investors |
| **BBB Coupons** | $2.20M | $20M × 11% | To BBB investors |
| **Total Coupons** | $6.75M | $4.55M + $2.20M | To all bondholders |
| **Equity Distribution** | ~$7.75M | Residual after senior obligations | To warehouse (variable) |

### At Scale (12 Bonds Outstanding)

| Metric | Annual Amount | Formula | Notes |
|--------|---------------|---------|-------|
| **Bond Issuance Fees** | $2M | 1 new bond × $2M | Assuming 1 new bond/year |
| **Origination Fees** | $1M | 1 new bond × $1M | From new originations |
| **Bond Servicing Fees** | $6.0M | 12 bonds × $500K | From all outstanding bonds |
| **Loan Servicing Fees** | $480K | 1 bond in seasoning | Pre-bond only |
| **Management Fees** | ~$3M | 2% of ~$150M avg NAV | Variable by cycle |
| **Total Annual Fee Income** | ~$12.5M | Sum of all fees | To BTC Now GP |
| **Spread Capture (Warehouse)** | $93M | 12 bonds × $7.75M | Equity distributions |

---

## 8. Key Ratios

| Ratio | Value | Formula | Notes |
|-------|-------|---------|-------|
| **Loan-to-Value (LTV)** | 100% | $100K loan ÷ $100K Bitcoin | Bitcoin = collateral |
| **Over-Collateralization** | 192% | $192M terminal value ÷ $100M bond | Terminal value vs bond face value |
| **Credit Enhancement** | 10% | Equity tranche | First loss piece |
| **Advance Rate** | 90% | $90M sold ÷ $100M face value | Proceeds to warehouse |
| **Blended Spread** | 7.75% | 15% - 7.44% - 0.5% | After coupons and servicing |

---

## 9. Amortization Formula

**Monthly Payment Calculation:**

```
Monthly Payment = P × [r(1+r)^n] / [(1+r)^n - 1]

Where:
P = Principal ($100,000)
r = Monthly interest rate (0.0125 or 1.25%)
n = Number of payments (120)

Result:
$1,614.71 ≈ $1,600 (rounded for simplicity)
```

**Terminal Value Calculation:**

```
Terminal Value = Monthly Payment × Number of Payments
Terminal Value = $1,600 × 120 = $192,000
```

---

*Last Updated: October 2025*  
*Version: 1.0*

