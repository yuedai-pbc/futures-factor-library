# Data contract

Each record retains entity_id, observation_at, available_at, decision_at, execution_at, value, unit and source_version. Use consistent ISO-8601 timestamps and time zones. Enforce available_at <= decision_at < execution_at; period-end dates are not publication dates. Keep historical revisions and missing values; never backward-fill from future observations.

Returns are decimals (1% = 0.01); costs are basis points (1 bp = 0.0001). Variance and volatility require separate fields. Preserve original units and conversion rules.

## Asset-specific inputs

Require unspliced contract settlements, multipliers, expiries, open interest, volume and roll rules. Inventory/commercial positions need full release histories; pre-register non-log alternatives for negative prices.

Version product/contract identifiers, multipliers, tick sizes, settlements, expiry, delivery, trading sessions and release timestamps.

## Applicability

- The catalog includes risk measurement, sizing and accounting, not just predictive signals.
- No authorized market-data backtest has been completed; basic trend, basis and contract-PnL examples are available.
- Inventory and commercial-position features apply only to appropriate commodities, not mechanically to equity-index, rate or FX futures.
- Log basis is undefined for non-positive prices; use a pre-registered alternative rather than silently taking absolute values.
