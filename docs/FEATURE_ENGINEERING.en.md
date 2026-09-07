# Feature engineering and generalization

24 seeds × 4–7 total versions = **96–168 planned columns**, including base expressions. Derived expressions beyond one per seed: 72–144. Current catalog: 30 entries; do not add these different units.

## Priority

Start with trend and curves, then add inventory, positioning and distributional features. Exclude position scaling and PnL accounting from the 24 predictive-seed budget.

## Windows

Pre-register 1/3/6/12-month trend windows. Use adjacent delivery months or fixed expiry gaps for curves and post-release historical seasonal baselines for inventory.

## Transforms

Original signal, two justified horizons, within-product historical z-score, cross-product rank, seasonal/sector residual and one limited interaction. At most seven total versions; no horizon-by-maturity-by-transform Cartesian product.

## Example

Carry: annualized near/far basis, fixed-expiry-gap variant, same-season residual, within-product z-score, sector rank and carry times momentum. Evaluate interaction together with both main effects.

## Data

Require unspliced contract settlements, multipliers, expiries, open interest, volume and roll rules. Inventory/commercial positions need full release histories; pre-register non-log alternatives for negative prices.

## Generalize

Hold out markets, products and sectors. Agricultural seasonality is not equity-index seasonality. Trend can transfer across assets; storage and commercial hedging features require suitable commodities.

## Planned seed allocation

- Trend/momentum: 6
- Curve/value: 5
- Inventory/supply: 3
- Positions/hedging: 3
- Distribution/liquidity: 4
- Macro/interactions: 3

## Protocol and counting conventions

Register each seed's hypothesis, source version, formula, market, sign, availability time, unit and missing-value rule. Whitelist transformations and assign versioned feature IDs. Fit time-series thresholds, regressions and PCA on training history only. Contemporaneous ranks use only eligible information available at that time.

Use rolling training, validation and a sealed final test. Purge overlapping labels according to the holding horizon and respect issuer, manager, underlying and contract groups. Never use the final test to choose directions or versions.

Deduplicate identical formulas, unit changes and strictly monotonic representations before claiming independent signals. Correlation clustering is fitted in training data; |Spearman| > 0.95 is only an example threshold to pre-register, not a universal rule. Evaluate family-level incremental prediction, ablations, coverage, stability, turnover and costs. Retain all attempts and address multiple testing, for example with FDR or hierarchical family screening.

Counts describe three different things: current source records; planned candidate columns including base expressions; and factors retained after data and out-of-sample screening. Only the first two are known or budgeted. Planning totals must not be added mechanically to catalog counts or interpreted as independent alpha dimensions. Use the lower version budget first, expanding only after basic replication and data-quality gates. Interactions consume the existing version allowance. Data-quality flags, position scaling and PnL accounting are not predictive seeds.
