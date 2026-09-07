# Futures and CTA Factors

[中文](README.md) · [English](README.en.md)

Combine cross-asset trend, commodity carry, inventory and positioning with explicit contract rolls and risk budgets.

30 research entries and 12 academic/method references. Signal definitions, position-management rules and PnL operators are distinct; they are not 30 independent alphas.

## Website and language switching

[中文网页](https://yuedai-pbc.github.io/futures-factor-library/?lang=zh) · [English website](https://yuedai-pbc.github.io/futures-factor-library/?lang=en)

Overview, catalog, factor cards, methodology, feature engineering, reference notes and interaction messages are available in Chinese and English. Switch with 中文 / English at the top right; search supports both languages. Source IDs, original paper titles, authors, formula symbols and material labeled as upstream original text retain their source form for verification.

Open `site/index.html` offline, or start a server at the repository root:

```sh
python -m http.server 8000
```

Visit [localhost:8000/site/](http://localhost:8000/site/).

## Catalog scope

- **30**: Research entries
- **12**: Academic and method references
- **0**: Completed market-data backtests

## Construction approach

1. **Contracts and trading calendars** — Version products, contracts, exchanges, multipliers, minimum ticks, settlements, expiries, delivery, trading sessions and announcement times. Assign night sessions to trading dates consistently.

2. **Continuous series and rolls** — Specify liquidity criteria, the safety margin to expiry and roll rules first. Accumulate contract-level PnL using yesterday's positions; spliced price jumps are not investment returns.

3. **Signals and portfolios** — Record time-series direction, cross-sectional ranks, carry and supply-demand features separately. Use historical estimates for risk scaling and impose product, sector and leverage constraints.

4. **Out-of-sample tests and implementation** — Include commissions, spreads, impact, price limits and roll costs. Report returns on notional and actual capital separately; report collateral cash returns separately. Margin is not the default return denominator.

5. **Feature families and incremental tests** — Replicate baseline definitions before registering allowed windows, changes, conditional residuals and limited interactions. Deduplicate within economic families; use rolling-time tests, cross-market holdouts and after-cost ablations. See Feature engineering for budgets and data prerequisites.

## Feature engineering and generalization budget

24 planned seeds × 4–7 permitted versions per seed = **96–168 candidate columns**, including base expressions. This is a data-dependent construction budget, not a count of implemented or validated alphas.

Start with trend and curves, then add inventory, positioning and distributional features. Exclude position scaling and PnL accounting from the 24 predictive-seed budget.

[Full feature engineering protocol](docs/FEATURE_ENGINEERING.en.md)

## Run and test

Python 3.10+; basic examples use only the standard library.

```sh
python examples/demo.py
python -m unittest discover -s tests -v
```

## Files and research documentation

- `site/`: Static website with offline support.
- `docs/`: The same website for GitHub Pages and bilingual research documentation.
- `data/catalog.json` / `data/catalog.en.json`: Chinese / English factor catalogs.
- `data/references.json` / `data/references.en.json`: Chinese / English bibliographic notes.
- `src/factors.py`: Independently written basic operators.
- [Methodology and economic rationale](docs/METHODOLOGY.en.md)
- [Inputs and availability constraints](docs/DATA_CONTRACT.en.md)
- [Provenance and implementation scope](docs/PROVENANCE.en.md)
- [Papers and research links](docs/REFERENCES.en.md)
- [Bilingual review record](docs/BILINGUAL_AUDIT.en.md)

## Implementation status and remaining validation

- The 30 entries include literature candidates, risk measures, portfolio methods and explicitly labeled extension hypotheses; they are not independent validated alphas.
- This is a new academic research framework without authorized futures-market data or a complete backtest. Independent examples cover basic signals, basis and contract-level PnL.
- Commodity inventories and commercial hedging positions have limited applicability. Commodity supply-demand variables cannot be applied mechanically to equity-index, rate or FX futures.
- Log basis is undefined for negative prices. Use an explicit alternative measure; never silently take absolute values.

## GitHub Pages publication

The website is published from `/docs` on the `main` branch. Synchronize static assets in `site/` and `docs/` when updating the website. GitHub Actions validates Python examples; the Pages build runs separately.

## Data, provenance and licensing

Example inputs are teaching data. No real holdings, raw market data, account information or credentials are included, and no real out-of-sample performance is claimed. New website and example code use GPL-2.0. Publications remain under their authors' and publishers' rights; complete third-party reports are not redistributed. OAP metadata retains upstream attribution.
