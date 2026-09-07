# Data contract

Each record retains entity_id, observation_at, available_at, decision_at, execution_at, value, unit and source_version. Use consistent ISO-8601 timestamps and time zones. Enforce available_at <= decision_at < execution_at; period-end dates are not publication dates. Keep historical revisions and missing values; never backward-fill from future observations.

Returns are decimals (1% = 0.01); costs are basis points (1 bp = 0.0001). Variance and volatility require separate fields. Preserve original units and conversion rules.

## Asset-specific inputs

Require unspliced contract settlements, multipliers, expiries, open interest, volume and roll rules. Inventory/commercial positions need full release histories; pre-register non-log alternatives for negative prices.

Version products, contracts, exchanges, multipliers, minimum ticks, settlements, expiries, delivery, trading sessions and announcement times. Assign night sessions to trading dates consistently.

## Applicability

- The 30 entries include literature candidates, risk measures, portfolio methods and explicitly labeled extension hypotheses; they are not independent validated alphas.
- This is a new academic research framework without authorized futures-market data or a complete backtest. Independent examples cover basic signals, basis and contract-level PnL.
- Commodity inventories and commercial hedging positions have limited applicability. Commodity supply-demand variables cannot be applied mechanically to equity-index, rate or FX futures.
- Log basis is undefined for negative prices. Use an explicit alternative measure; never silently take absolute values.
