# Methodology

30 research entries and 12 academic/method references. Signal definitions, position-management rules and PnL operators are distinct; they are not 30 independent alphas.

## Contracts and trading calendars

Version products, contracts, exchanges, multipliers, minimum ticks, settlements, expiries, delivery, trading sessions and announcement times. Assign night sessions to trading dates consistently.

## Continuous series and rolls

Specify liquidity criteria, the safety margin to expiry and roll rules first. Accumulate contract-level PnL using yesterday's positions; spliced price jumps are not investment returns.

## Signals and portfolios

Record time-series direction, cross-sectional ranks, carry and supply-demand features separately. Use historical estimates for risk scaling and impose product, sector and leverage constraints.

## Out-of-sample tests and implementation

Include commissions, spreads, impact, price limits and roll costs. Report returns on notional and actual capital separately; report collateral cash returns separately. Margin is not the default return denominator.

## Feature families and incremental tests

Replicate baseline definitions before registering allowed windows, changes, conditional residuals and limited interactions. Deduplicate within economic families; use rolling-time tests, cross-market holdouts and after-cost ablations. See Feature engineering for budgets and data prerequisites.

## Research protocol

Register each seed's hypothesis, source version, formula, market, sign, availability time, unit and missing-value rule. Whitelist transformations and assign versioned feature IDs. Fit time-series thresholds, regressions and PCA on training history only. Contemporaneous ranks use only eligible information available at that time.

Use rolling training, validation and a sealed final test. Purge overlapping labels according to the holding horizon and respect issuer, manager, underlying and contract groups. Never use the final test to choose directions or versions.

Deduplicate identical formulas, unit changes and strictly monotonic representations before claiming independent signals. Correlation clustering is fitted in training data; |Spearman| > 0.95 is only an example threshold to pre-register, not a universal rule. Evaluate family-level incremental prediction, ablations, coverage, stability, turnover and costs. Retain all attempts and address multiple testing, for example with FDR or hierarchical family screening.

Counts describe three different things: current source records; planned candidate columns including base expressions; and factors retained after data and out-of-sample screening. Only the first two are known or budgeted. Planning totals must not be added mechanically to catalog counts or interpreted as independent alpha dimensions. Use the lower version budget first, expanding only after basic replication and data-quality gates. Interactions consume the existing version allowance. Data-quality flags, position scaling and PnL accounting are not predictive seeds.
