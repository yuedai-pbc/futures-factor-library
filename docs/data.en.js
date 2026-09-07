window.LIBRARY_EN = {
  "slug": "futures-factor-library",
  "title": "Futures and CTA Factors",
  "cn": "Futures and CTA Factors",
  "short": "Futures and CTA Factors",
  "kind": "futures",
  "eyebrow": "05 / FUTURES & CTA",
  "color": "#ba4b48",
  "factors": [
    {
      "id": "tsmom12",
      "name": "12-month time-series momentum",
      "category": "Directional signal",
      "formula": "sign(compounded rule-based futures excess return over the previous 12 months).",
      "logic": "Tests continuation in an instrument's own returns.",
      "status": "Basic signal implemented",
      "refs": [
        "tsmom"
      ],
      "frequency": "Monthly research; input frequency depends on definition",
      "source": "Literature-based research design",
      "caveat": "Replicate signal and volatility-estimation details separately.",
      "market": "Cross-asset futures"
    },
    {
      "id": "vol_target",
      "name": "Volatility targeting",
      "category": "Position sizing",
      "formula": "Target notional weight = signal * target volatility / lagged estimated volatility, subject to leverage limits.",
      "logic": "Balances instrument risk contributions.",
      "status": "Literature candidate / replication pending",
      "refs": [
        "tsmom"
      ],
      "frequency": "Monthly research; input frequency depends on definition",
      "source": "Literature-based research design",
      "caveat": "Position sizing is not a standalone predictive alpha.",
      "market": "Cross-asset futures"
    },
    {
      "id": "xs_mom",
      "name": "Cross-sectional commodity momentum",
      "category": "Directional signal",
      "formula": "At each date, rank past rule-based futures returns; buy winners and sell losers.",
      "logic": "Relative performance may persist across commodities.",
      "status": "Literature candidate / replication pending",
      "refs": [
        "bgr"
      ],
      "frequency": "Monthly research; input frequency depends on definition",
      "source": "Literature-based research design",
      "caveat": "Cross-sectional ranking differs from the sign of an instrument's own return.",
      "market": "Commodity futures"
    },
    {
      "id": "basis",
      "name": "Annualized basis proxy",
      "category": "Term structure",
      "formula": "ln(F_near/F_far) / ((expiry_far-expiry_near)/365).",
      "logic": "Backwardation may reflect scarcity and carry.",
      "status": "Basic operator implemented",
      "refs": [
        "carry",
        "ghr"
      ],
      "frequency": "Monthly research; input frequency depends on definition",
      "source": "Literature-based research design",
      "caveat": "A curve proxy, not a realized return. Both prices must be positive.",
      "market": "Commodity futures"
    },
    {
      "id": "carry",
      "name": "Commodity carry portfolio",
      "category": "Pricing factor",
      "formula": "Sort commodities on the specified carry measure and construct long-short returns.",
      "logic": "Carry differences may reflect risk compensation.",
      "status": "Literature candidate / replication pending",
      "refs": [
        "carry",
        "bgr"
      ],
      "frequency": "Monthly research; input frequency depends on definition",
      "source": "Literature-based research design",
      "caveat": "Contract choice, annualization, seasonality and weights require replication.",
      "market": "Commodity futures"
    },
    {
      "id": "basis_momentum",
      "name": "Basis-momentum",
      "category": "Term structure",
      "formula": "Difference between cumulative returns on near and next-near futures, following the paper.",
      "logic": "Measures curve dynamics rather than a single-date basis level.",
      "status": "Literature candidate / replication pending",
      "refs": [
        "basismom"
      ],
      "frequency": "Monthly research; input frequency depends on definition",
      "source": "Literature-based research design",
      "caveat": "Rebuild both rolling series; this is not simply a change in basis across two dates.",
      "market": "Commodity futures"
    },
    {
      "id": "inventory",
      "name": "Inventory state",
      "category": "Supply and demand",
      "formula": "Seasonally adjust historically available inventory within each commodity and define a low-inventory signal.",
      "logic": "Inventories affect convenience yield and supply elasticity.",
      "status": "Literature candidate / replication pending",
      "refs": [
        "ghr"
      ],
      "frequency": "Monthly research; input frequency depends on definition",
      "source": "Literature-based research design",
      "caveat": "Use only historical information for adjustment; preserve release lags and definitions.",
      "market": "Commodity futures"
    },
    {
      "id": "hedging_pressure",
      "name": "Commercial hedging pressure",
      "category": "Positioning",
      "formula": "Candidate proxy: (commercial shorts-commercial longs)/(commercial shorts+commercial longs).",
      "logic": "Absorbing hedging demand may earn risk compensation.",
      "status": "Literature candidate / replication pending",
      "refs": [
        "hp",
        "ghr"
      ],
      "frequency": "Monthly research; input frequency depends on definition",
      "source": "Literature-based research design",
      "caveat": "Verify the original measure; US commercial positions and Chinese broker-seat rankings differ.",
      "market": "Commodity futures"
    },
    {
      "id": "commodity_market",
      "name": "Commodity market factor",
      "category": "Pricing benchmark",
      "formula": "Equal-weighted rule-based commodity futures excess returns.",
      "logic": "Measures broad commodity risk exposure.",
      "status": "Literature candidate / replication pending",
      "refs": [
        "bgr"
      ],
      "frequency": "Monthly research; input frequency depends on definition",
      "source": "Literature-based research design",
      "caveat": "Equal asset weights are not equal risk; collateral interest is separate.",
      "market": "Commodity futures"
    },
    {
      "id": "curve_slope",
      "name": "Curve-slope extension",
      "category": "Term structure",
      "formula": "Estimate price-versus-maturity slopes across several contracts on the same commodity.",
      "logic": "Describes maturity direction and local curve structure.",
      "status": "Literature candidate / replication pending",
      "refs": [
        "carry",
        "basismom"
      ],
      "frequency": "Monthly research; input frequency depends on definition",
      "source": "Literature-based research design",
      "caveat": "New research design, not a separately validated original factor; account for seasonality.",
      "market": "Commodity futures"
    },
    {
      "id": "contract_pnl",
      "name": "Contract-level PnL",
      "category": "PnL accounting",
      "formula": "Lagged contracts * multiplier * (current settlement-previous settlement) - costs.",
      "logic": "Reconciles research signals with trading PnL.",
      "status": "Basic operator implemented",
      "refs": [
        "tsmom"
      ],
      "frequency": "Monthly research; input frequency depends on definition",
      "source": "Literature-based research design",
      "caveat": "Accounting operator; record old/new contracts separately at rolls. Negative settlement prices are allowed.",
      "market": "Cross-asset futures"
    },
    {
      "id": "trend_multi",
      "name": "Multi-horizon trend consensus",
      "category": "Directional signal",
      "formula": "Pre-register short, medium and long windows and combine directions equally or with training-only weights.",
      "logic": "Reduces reliance on one formation horizon.",
      "status": "Literature candidate / replication pending",
      "refs": [
        "century",
        "tsmom"
      ],
      "frequency": "Pre-register formation windows; use after publication",
      "source": "Research definitions added in this expansion",
      "caveat": "Different windows are variants within a family, not separate economic theories.",
      "market": "Cross-asset futures",
      "reference_authors": "Brian Hurst; Yao Hua Ooi; Lasse Heje Pedersen; Tobias Moskowitz; Yao Hua Ooi; Lasse Heje Pedersen"
    },
    {
      "id": "trend_strength",
      "name": "Risk-adjusted trend strength",
      "category": "Directional signal",
      "formula": "Cumulative return divided by a risk scale estimated only from historical data.",
      "logic": "Retains information about trend strength beyond direction.",
      "status": "Extension hypothesis / untested",
      "refs": [
        "tsmom"
      ],
      "frequency": "Pre-register formation windows; use after publication",
      "source": "Research definitions added in this expansion",
      "caveat": "Extension hypothesis; keep distinct from position scaling to avoid double amplification.",
      "market": "Cross-asset futures",
      "reference_authors": "Tobias Moskowitz; Yao Hua Ooi; Lasse Heje Pedersen"
    },
    {
      "id": "trend_accel",
      "name": "Trend acceleration",
      "category": "Directional signal",
      "formula": "Standardized short-horizon trend minus standardized long-horizon trend.",
      "logic": "Tests whether strengthening or fading trends add information.",
      "status": "Extension hypothesis / untested",
      "refs": [
        "tsmom",
        "century"
      ],
      "frequency": "Pre-register formation windows; use after publication",
      "source": "Research definitions added in this expansion",
      "caveat": "New hypothesis; choose horizons before inspecting final tests.",
      "market": "Cross-asset futures",
      "reference_authors": "Tobias Moskowitz; Yao Hua Ooi; Lasse Heje Pedersen; Brian Hurst; Yao Hua Ooi; Lasse Heje Pedersen"
    },
    {
      "id": "trend_consistency",
      "name": "Trend-path consistency",
      "category": "Directional signal",
      "formula": "Preselect either the share of same-direction days or the count of direction changes.",
      "logic": "Equal cumulative returns can arise from different paths.",
      "status": "Extension hypothesis / untested",
      "refs": [
        "tsmom"
      ],
      "frequency": "Pre-register formation windows; use after publication",
      "source": "Research definitions added in this expansion",
      "caveat": "New extension; compare incrementally against trend and volatility controls.",
      "market": "Cross-asset futures",
      "reference_authors": "Tobias Moskowitz; Yao Hua Ooi; Lasse Heje Pedersen"
    },
    {
      "id": "value_long",
      "name": "Long-horizon commodity value",
      "category": "Value characteristic",
      "formula": "Construct a value anchor from long-horizon price changes using the paper's commodity convention.",
      "logic": "Tests return differences associated with distance from long-run value.",
      "status": "Literature candidate / replication pending",
      "refs": [
        "vm"
      ],
      "frequency": "Pre-register formation windows; use after publication",
      "source": "Research definitions added in this expansion",
      "caveat": "Pre-register real-price and maturity adjustments; do not splice incompatible spot grades.",
      "market": "Commodity futures",
      "reference_authors": "Cliff Asness; Tobias Moskowitz; Lasse Heje Pedersen"
    },
    {
      "id": "spot_premium",
      "name": "Spot-risk-premium portfolio",
      "category": "Pricing factor",
      "formula": "Decompose futures returns as in the paper and sort using basis or other registered characteristics.",
      "logic": "Separates underlying commodity risk from term-structure changes.",
      "status": "Literature candidate / replication pending",
      "refs": [
        "anatomy"
      ],
      "frequency": "Pre-register formation windows; use after publication",
      "source": "Research definitions added in this expansion",
      "caveat": "A decomposition concept; untradeable spot returns are not executable futures strategies.",
      "market": "Commodity futures",
      "reference_authors": "Marta Szymanowska; Frans de Roon; Theo Nijman; Rob van den Goorbergh"
    },
    {
      "id": "term_premium",
      "name": "Term-risk-premium portfolio",
      "category": "Pricing factor",
      "formula": "Construct maturity-risk portfolios using the original return decomposition across expiry points.",
      "logic": "Different maturities bear different basis-change risks.",
      "status": "Literature candidate / replication pending",
      "refs": [
        "anatomy"
      ],
      "frequency": "Pre-register formation windows; use after publication",
      "source": "Research definitions added in this expansion",
      "caveat": "Requires contract-level series and roll accounting.",
      "market": "Commodity futures",
      "reference_authors": "Marta Szymanowska; Frans de Roon; Theo Nijman; Rob van den Goorbergh"
    },
    {
      "id": "curve_curvature",
      "name": "Curve-curvature proxy",
      "category": "Term structure",
      "formula": "Difference between adjacent annualized log slopes, retaining each expiry interval.",
      "logic": "Curve curvature may contain inventory and seasonal information.",
      "status": "Extension hypothesis / untested",
      "refs": [
        "basismom",
        "anatomy"
      ],
      "frequency": "Pre-register formation windows; use after publication",
      "source": "Research definitions added in this expansion",
      "caveat": "New proxy, not basis-momentum. Adjust for unequal spacing and seasonality.",
      "market": "Commodity futures",
      "reference_authors": "Martijn Boons; Melissa Porras Prado; Marta Szymanowska; Frans de Roon; Theo Nijman; Rob van den Goorbergh"
    },
    {
      "id": "carry_seasonal",
      "name": "Seasonally adjusted carry",
      "category": "Term structure",
      "formula": "Current basis minus a historical same-season average basis.",
      "logic": "Separates normal production cycles from unusual scarcity.",
      "status": "Extension hypothesis / untested",
      "refs": [
        "ghr",
        "carry"
      ],
      "frequency": "Pre-register formation windows; use after publication",
      "source": "Research definitions added in this expansion",
      "caveat": "Require adequate historical seasonal observations; do not mix unlike delivery seasons.",
      "market": "Commodity futures",
      "reference_authors": "Gary Gorton; Fumio Hayashi; K. Geert Rouwenhorst; Ralph Koijen; Tobias Moskowitz; Lasse Heje Pedersen; Evert Vrugt"
    },
    {
      "id": "inventory_surprise",
      "name": "Inventory-release change",
      "category": "Supply and demand",
      "formula": "Released inventory relative to its previous release or a historical seasonal expectation.",
      "logic": "New inventory information may change supply-demand expectations.",
      "status": "Extension hypothesis / untested",
      "refs": [
        "ghr"
      ],
      "frequency": "Pre-register formation windows; use after publication",
      "source": "Research definitions added in this expansion",
      "caveat": "Use release time, not observation-period end; estimate expectations from past data only.",
      "market": "Commodity futures",
      "reference_authors": "Gary Gorton; Fumio Hayashi; K. Geert Rouwenhorst"
    },
    {
      "id": "oi_growth",
      "name": "Open-interest growth",
      "category": "Positioning",
      "formula": "Aggregate relevant contracts within a commodity, compute growth, and separately construct a standardized cross-commodity aggregate.",
      "logic": "Position growth may contain information about risk absorption and economic activity.",
      "status": "Literature candidate / replication pending",
      "refs": [
        "hy"
      ],
      "frequency": "Pre-register formation windows; use after publication",
      "source": "Research definitions added in this expansion",
      "caveat": "Using only the dominant contract creates roll artifacts. Separate aggregate-paper measures from local extensions.",
      "market": "Commodity futures",
      "reference_authors": "Harrison Hong; Motohiro Yogo"
    },
    {
      "id": "hp_change",
      "name": "Change in hedging pressure",
      "category": "Positioning",
      "formula": "Change in the commercial net-short share under a stable reporting definition.",
      "logic": "Tests incremental information in changes rather than levels.",
      "status": "Extension hypothesis / untested",
      "refs": [
        "hp"
      ],
      "frequency": "Pre-register formation windows; use after publication",
      "source": "Research definitions added in this expansion",
      "caveat": "Extension hypothesis; broker rankings are not commercial-account classifications.",
      "market": "Commodity futures",
      "reference_authors": "Frans de Roon; Theo Nijman; Chris Veld"
    },
    {
      "id": "return_skew",
      "name": "Historical return skewness",
      "category": "Distributional risk",
      "formula": "Rolling third central moment of rule-based futures returns divided by standard deviation cubed.",
      "logic": "Skewness preferences and selective hedging may relate to expected returns.",
      "status": "Literature candidate / replication pending",
      "refs": [
        "skew"
      ],
      "frequency": "Pre-register formation windows; use after publication",
      "source": "Research definitions added in this expansion",
      "caveat": "Record the original sample sign separately; small samples are unstable and zero variance means missing.",
      "market": "Commodity futures",
      "reference_authors": "Adrian Fernandez-Perez; Bart Frijns; Ana-Maria Fuertes; Joëlle Miffre"
    },
    {
      "id": "commodity_vol",
      "name": "Commodity historical volatility",
      "category": "Distributional risk",
      "formula": "Rolling return standard deviation or realized variance, with distinct units.",
      "logic": "Volatility sorts may capture risk states.",
      "status": "Literature candidate / replication pending",
      "refs": [
        "anatomy"
      ],
      "frequency": "Pre-register formation windows; use after publication",
      "source": "Research definitions added in this expansion",
      "caveat": "Do not assume either high or low volatility must be profitable.",
      "market": "Commodity futures",
      "reference_authors": "Marta Szymanowska; Frans de Roon; Theo Nijman; Rob van den Goorbergh"
    },
    {
      "id": "liquidity_state",
      "name": "Commodity liquidity state",
      "category": "Trading frictions",
      "formula": "Build the paper's trading-liquidity sorts and keep them separate from estimated execution costs.",
      "logic": "Less liquid instruments may require compensation.",
      "status": "Literature candidate / replication pending",
      "refs": [
        "anatomy"
      ],
      "frequency": "Pre-register formation windows; use after publication",
      "source": "Research definitions added in this expansion",
      "caveat": "Notional turnover must include multipliers; margin is not transaction value.",
      "market": "Commodity futures",
      "reference_authors": "Marta Szymanowska; Frans de Roon; Theo Nijman; Rob van den Goorbergh"
    },
    {
      "id": "inflation_beta",
      "name": "Inflation sensitivity",
      "category": "Macro exposure",
      "formula": "Training-window beta of rule-based commodity returns on publicly available inflation innovations.",
      "logic": "Commodities may respond differently to purchasing-power shocks.",
      "status": "Extension hypothesis / untested",
      "refs": [
        "anatomy"
      ],
      "frequency": "Pre-register formation windows; use after publication",
      "source": "Research definitions added in this expansion",
      "caveat": "New beta extension; not claimed equivalent to the original characteristic sorts.",
      "market": "Commodity futures",
      "reference_authors": "Marta Szymanowska; Frans de Roon; Theo Nijman; Rob van den Goorbergh"
    },
    {
      "id": "inverse_variance",
      "name": "Inverse-variance risk management",
      "category": "Position sizing",
      "formula": "Scale a strategy by inverse lagged variance, subject to capital and leverage constraints.",
      "logic": "Studies allocation as risk changes over time.",
      "status": "Extension hypothesis / untested",
      "refs": [
        "mm"
      ],
      "frequency": "Pre-register formation windows; use after publication",
      "source": "Research definitions added in this expansion",
      "caveat": "Method-transfer hypothesis, not CTA-specific evidence; distinct from inverse-volatility targeting.",
      "market": "Cross-asset futures",
      "reference_authors": "Alan Moreira; Tyler Muir"
    },
    {
      "id": "carry_momentum",
      "name": "Carry-momentum interaction",
      "category": "Interaction hypothesis",
      "formula": "Product of contemporaneously standardized carry and momentum, retaining both main effects.",
      "logic": "Tests whether valuation and price direction jointly add information.",
      "status": "Extension hypothesis / untested",
      "refs": [
        "carry",
        "bgr"
      ],
      "frequency": "Pre-register formation windows; use after publication",
      "source": "Research definitions added in this expansion",
      "caveat": "New interaction hypothesis; compare against a main-effects model.",
      "market": "Commodity futures",
      "reference_authors": "Ralph Koijen; Tobias Moskowitz; Lasse Heje Pedersen; Evert Vrugt; Gurdip Bakshi; Xiaohui Gao; Alberto Rossi"
    },
    {
      "id": "inventory_basis",
      "name": "Inventory-basis interaction",
      "category": "Interaction hypothesis",
      "formula": "Seasonally adjusted inventory state times contemporaneously available basis, retaining main effects.",
      "logic": "Tests whether inventory stress changes curve information.",
      "status": "Extension hypothesis / untested",
      "refs": [
        "ghr"
      ],
      "frequency": "Pre-register formation windows; use after publication",
      "source": "Research definitions added in this expansion",
      "caveat": "Pre-register direction; estimate separately across storage regimes.",
      "market": "Commodity futures",
      "reference_authors": "Gary Gorton; Fumio Hayashi; K. Geert Rouwenhorst"
    }
  ],
  "metrics": [
    [
      "30",
      "Catalog records"
    ],
    [
      "12",
      "References"
    ],
    [
      "0",
      "Completed market-data backtests"
    ]
  ],
  "summary": "Combine cross-asset trend, commodity carry, inventory and positioning with explicit contract rolls and risk budgets.",
  "scope": "30 research entries and 12 academic/method references. Signal definitions, position-management rules and PnL operators are distinct; they are not 30 independent alphas.",
  "steps": [
    [
      "Step 1",
      "Version product/contract identifiers, multipliers, tick sizes, settlements, expiry, delivery, trading sessions and release timestamps."
    ],
    [
      "Step 2",
      "Pre-register roll rules and reconstruct PnL using lagged contract holdings; spliced price gaps are not investment returns."
    ],
    [
      "Step 3",
      "Keep time-series direction, cross-sectional ranks, carry and supply-demand characteristics separate; apply historical risk estimates and leverage limits."
    ],
    [
      "Step 4",
      "Include commissions, spread, impact, limit moves and rolls. Report notional and capital returns separately, with collateral interest distinct."
    ],
    [
      "Step 5",
      "Whitelist feature windows, changes, seasonal residuals and limited interactions; evaluate by time, market and commodity sector."
    ]
  ],
  "limitations": [
    "The catalog includes risk measurement, sizing and accounting, not just predictive signals.",
    "No authorized market-data backtest has been completed; basic trend, basis and contract-PnL examples are available.",
    "Inventory and commercial-position features apply only to appropriate commodities, not mechanically to equity-index, rate or FX futures.",
    "Log basis is undefined for non-positive prices; use a pre-registered alternative rather than silently taking absolute values."
  ],
  "engineering": {
    "bases": 24,
    "lo": 4,
    "hi": 7,
    "groups": [
      [
        "Trend/momentum",
        6
      ],
      [
        "Curve/value",
        5
      ],
      [
        "Inventory/supply",
        3
      ],
      [
        "Positions/hedging",
        3
      ],
      [
        "Distribution/liquidity",
        4
      ],
      [
        "Macro/interactions",
        3
      ]
    ],
    "windows": "Pre-register 1/3/6/12-month trend windows. Use adjacent delivery months or fixed expiry gaps for curves and post-release historical seasonal baselines for inventory.",
    "transforms": "Original signal, two justified horizons, within-product historical z-score, cross-product rank, seasonal/sector residual and one limited interaction. At most seven total versions; no horizon-by-maturity-by-transform Cartesian product.",
    "example": "Carry: annualized near/far basis, fixed-expiry-gap variant, same-season residual, within-product z-score, sector rank and carry times momentum. Evaluate interaction together with both main effects.",
    "data": "Require unspliced contract settlements, multipliers, expiries, open interest, volume and roll rules. Inventory/commercial positions need full release histories; pre-register non-log alternatives for negative prices.",
    "generalize": "Hold out markets, products and sectors. Agricultural seasonality is not equity-index seasonality. Trend can transfer across assets; storage and commercial hedging features require suitable commodities.",
    "priority": "Start with trend and curves, then add inventory, positioning and distributional features. Exclude position scaling and PnL accounting from the 24 predictive-seed budget.",
    "low": 96,
    "high": 168,
    "catalog_count": 30
  },
  "papers": [
    {
      "id": "tsmom",
      "title": "Time series momentum",
      "authors": "Tobias Moskowitz; Yao Hua Ooi; Lasse Heje Pedersen",
      "year": "2012",
      "url": "https://fairmodel.econ.yale.edu/ec439/mosk.pdf",
      "role": "Research or method reference; see factor-level status",
      "note": "Research link: 12-month time-series momentum; Volatility targeting; Contract-level PnL; Multi-horizon trend consensus; Risk-adjusted trend strength; Trend acceleration; Trend-path consistency. Local implementation status is recorded on individual factor cards; citation does not establish successful replication."
    },
    {
      "id": "carry",
      "title": "Carry",
      "authors": "Ralph Koijen; Tobias Moskowitz; Lasse Heje Pedersen; Evert Vrugt",
      "year": "2018",
      "url": "https://spinup-000d1a-wp-offload-media.s3.amazonaws.com/faculty/wp-content/uploads/sites/3/2019/04/Carry.pdf",
      "role": "Research or method reference; see factor-level status",
      "note": "Research link: Annualized basis proxy; Commodity carry portfolio; Curve-slope extension; Seasonally adjusted carry; Carry-momentum interaction. Local implementation status is recorded on individual factor cards; citation does not establish successful replication."
    },
    {
      "id": "ghr",
      "title": "The Fundamentals of Commodity Futures Returns",
      "authors": "Gary Gorton; Fumio Hayashi; K. Geert Rouwenhorst",
      "year": "2013",
      "url": "https://doi.org/10.1093/rof/rfs019",
      "role": "Research or method reference; see factor-level status",
      "note": "Research link: Annualized basis proxy; Inventory state; Commercial hedging pressure; Seasonally adjusted carry; Inventory-release change; Inventory-basis interaction. Local implementation status is recorded on individual factor cards; citation does not establish successful replication."
    },
    {
      "id": "bgr",
      "title": "Understanding the Sources of Risk Underlying the Cross Section of Commodity Returns",
      "authors": "Gurdip Bakshi; Xiaohui Gao; Alberto Rossi",
      "year": "2019",
      "url": "https://pubsonline.informs.org/doi/10.1287/mnsc.2017.2840",
      "role": "Research or method reference; see factor-level status",
      "note": "Research link: Cross-sectional commodity momentum; Commodity carry portfolio; Commodity market factor; Carry-momentum interaction. Local implementation status is recorded on individual factor cards; citation does not establish successful replication."
    },
    {
      "id": "hp",
      "title": "Hedging Pressure Effects in Futures Markets",
      "authors": "Frans de Roon; Theo Nijman; Chris Veld",
      "year": "2000",
      "url": "https://doi.org/10.1111/0022-1082.00253",
      "role": "Research or method reference; see factor-level status",
      "note": "Research link: Commercial hedging pressure; Change in hedging pressure. Local implementation status is recorded on individual factor cards; citation does not establish successful replication."
    },
    {
      "id": "basismom",
      "title": "Basis-Momentum",
      "authors": "Martijn Boons; Melissa Porras Prado",
      "year": "2019",
      "url": "https://doi.org/10.1111/jofi.12738",
      "role": "Research or method reference; see factor-level status",
      "note": "Research link: Basis-momentum; Curve-slope extension; Curve-curvature proxy. Local implementation status is recorded on individual factor cards; citation does not establish successful replication."
    },
    {
      "id": "vm",
      "title": "Value and Momentum Everywhere",
      "authors": "Cliff Asness; Tobias Moskowitz; Lasse Heje Pedersen",
      "year": "2013",
      "url": "https://www.aqr.com/insights/research/journal-article/value-and-momentum-everywhere",
      "role": "Research or method reference; see factor-level status",
      "note": "Research link: Long-horizon commodity value. Local implementation status is recorded on individual factor cards; citation does not establish successful replication."
    },
    {
      "id": "century",
      "title": "A Century of Evidence on Trend-Following Investing",
      "authors": "Brian Hurst; Yao Hua Ooi; Lasse Heje Pedersen",
      "year": "2017",
      "url": "https://www.aqr.com/-/media/AQR/Documents/Insights/Journal-Article/AQR-JPM-Fall-2017.pdf",
      "role": "Research or method reference; see factor-level status",
      "note": "Research link: Multi-horizon trend consensus; Trend acceleration. Local implementation status is recorded on individual factor cards; citation does not establish successful replication."
    },
    {
      "id": "anatomy",
      "title": "An Anatomy of Commodity Futures Risk Premia",
      "authors": "Marta Szymanowska; Frans de Roon; Theo Nijman; Rob van den Goorbergh",
      "year": "2014",
      "url": "https://onlinelibrary.wiley.com/doi/10.1111/jofi.12096",
      "role": "Research or method reference; see factor-level status",
      "note": "Research link: Spot-risk-premium portfolio; Term-risk-premium portfolio; Curve-curvature proxy; Commodity historical volatility; Commodity liquidity state; Inflation sensitivity. Local implementation status is recorded on individual factor cards; citation does not establish successful replication."
    },
    {
      "id": "hy",
      "title": "What does futures market interest tell us about the macroeconomy and asset prices?",
      "authors": "Harrison Hong; Motohiro Yogo",
      "year": "2012",
      "url": "https://www.sciencedirect.com/science/article/pii/S0304405X12000657",
      "role": "Research or method reference; see factor-level status",
      "note": "Research link: Open-interest growth. Local implementation status is recorded on individual factor cards; citation does not establish successful replication."
    },
    {
      "id": "skew",
      "title": "The Skewness of Commodity Futures Returns",
      "authors": "Adrian Fernandez-Perez; Bart Frijns; Ana-Maria Fuertes; Joëlle Miffre",
      "year": "2018",
      "url": "https://doi.org/10.1016/j.jbankfin.2017.06.015",
      "role": "Research or method reference; see factor-level status",
      "note": "Research link: Historical return skewness. Local implementation status is recorded on individual factor cards; citation does not establish successful replication."
    },
    {
      "id": "mm",
      "title": "Volatility-Managed Portfolios",
      "authors": "Alan Moreira; Tyler Muir",
      "year": "2017",
      "url": "https://doi.org/10.1111/jofi.12513",
      "role": "Research or method reference; see factor-level status",
      "note": "Research link: Inverse-variance risk management. Local implementation status is recorded on individual factor cards; citation does not establish successful replication."
    }
  ]
};
