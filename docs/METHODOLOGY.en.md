# Methodology

30 research entries and 12 academic/method references. Signal definitions, position-management rules and PnL operators are distinct; they are not 30 independent alphas.

## Step 1

Version product/contract identifiers, multipliers, tick sizes, settlements, expiry, delivery, trading sessions and release timestamps.

## Step 2

Pre-register roll rules and reconstruct PnL using lagged contract holdings; spliced price gaps are not investment returns.

## Step 3

Keep time-series direction, cross-sectional ranks, carry and supply-demand characteristics separate; apply historical risk estimates and leverage limits.

## Step 4

Include commissions, spread, impact, limit moves and rolls. Report notional and capital returns separately, with collateral interest distinct.

## Step 5

Whitelist feature windows, changes, seasonal residuals and limited interactions; evaluate by time, market and commodity sector.

## Research protocol

Register each seed's hypothesis, source version, formula, market, sign, availability time, unit and missing-value rule. Whitelist transformations and assign versioned feature IDs. Fit time-series thresholds, regressions and PCA on training history only. Contemporaneous ranks use only eligible information available at that time.

Use rolling training, validation and a sealed final test. Purge overlapping labels according to the holding horizon and respect issuer, manager, underlying and contract groups. Never use the final test to choose directions or versions.

Deduplicate identical formulas, unit changes and strictly monotonic representations before claiming independent signals. Correlation clustering is fitted in training data; |Spearman| > 0.95 is only an example threshold to pre-register, not a universal rule. Evaluate family-level incremental prediction, ablations, coverage, stability, turnover and costs. Retain all attempts and address multiple testing, for example with FDR or hierarchical family screening.

Counts describe three different things: current source records; planned candidate columns including base expressions; and factors retained after data and out-of-sample screening. Only the first two are known or budgeted. Planning totals must not be added mechanically to catalog counts or interpreted as independent alpha dimensions. Use the lower version budget first, expanding only after basic replication and data-quality gates. Interactions consume the existing version allowance. Data-quality flags, position scaling and PnL accounting are not predictive seeds.
