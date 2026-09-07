# Futures and CTA Factors

[中文](README.md) | English

Combine cross-asset trend, commodity carry, inventory and positioning with explicit contract rolls and risk budgets.

30 research entries and 12 academic/method references. Signal definitions, position-management rules and PnL operators are distinct; they are not 30 independent alphas.

## Bilingual website

Open `site/index.html` directly, or run `python -m http.server 8000` and visit `http://localhost:8000/site/`. Use 中文 / English to switch language. Search covers both languages and source IDs remain unchanged. The static site makes no translation-service requests. `docs/` contains the identical GitHub Pages assets.

## Build and validate

Python 3.10+; examples use the standard library.

```sh
python examples/demo.py
python -m unittest discover -s tests -v
```

## Research and documentation

- [Methodology](docs/METHODOLOGY.en.md)
- [Data contract](docs/DATA_CONTRACT.en.md)
- [Feature engineering](docs/FEATURE_ENGINEERING.en.md)
- [References](docs/REFERENCES.en.md)
- [Provenance](docs/PROVENANCE.en.md)

Original Chinese source-audit documents remain available alongside the English research guide.

## Feature budget

24 planned seeds × 4–7 permitted versions = **96–168 candidate columns**, including base expressions. This is a conditional construction budget, not implemented data or a forecast of successful alpha.

## Current limitations

- The catalog includes risk measurement, sizing and accounting, not just predictive signals.
- No authorized market-data backtest has been completed; basic trend, basis and contract-PnL examples are available.
- Inventory and commercial-position features apply only to appropriate commodities, not mechanically to equity-index, rate or FX futures.
- Log basis is undefined for non-positive prices; use a pre-registered alternative rather than silently taking absolute values.

## Licensing

New website and example code: GPL-2.0. Referenced publications remain under their authors' and publishers' rights. No private account data, market-data licenses, complete third-party reports or credentials are included. OAP metadata retains upstream attribution.
