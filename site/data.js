window.LIBRARY = {
  "slug": "futures-factor-library",
  "title": "期货 / CTA 因子库",
  "cn": "期货 / CTA 因子库",
  "short": "期货 / CTA 因子库",
  "kind": "futures",
  "eyebrow": "05 / FUTURES & CTA",
  "color": "#ba4b48",
  "factors": [
    {
      "id": "tsmom12",
      "name": "12 月时间序列动量",
      "category": "方向信号",
      "formula": "sign(过去 12 个月规则期货超额收益的累计值)。",
      "logic": "检验自身收益延续。",
      "status": "基础信号算子已实现",
      "refs": [
        "tsmom"
      ],
      "frequency": "月度研究；输入频率依定义",
      "source": "本次文献研究设计",
      "caveat": "原论文信号与波动率估计细节需分别复现。",
      "market": "跨资产期货"
    },
    {
      "id": "vol_target",
      "name": "波动率缩放",
      "category": "仓位管理",
      "formula": "目标名义权重 = 信号 × 目标波动率 / 滞后估计波动率，再执行杠杆上限。",
      "logic": "均衡不同合约风险贡献。",
      "status": "文献候选 / 待复现",
      "refs": [
        "tsmom"
      ],
      "frequency": "月度研究；输入频率依定义",
      "source": "本次文献研究设计",
      "caveat": "这是仓位管理方法，不能单独计作收益预测 alpha。",
      "market": "跨资产期货"
    },
    {
      "id": "xs_mom",
      "name": "横截面商品动量",
      "category": "方向信号",
      "formula": "在同一时点按过去规则期货收益排序：高动量多头、低动量空头。",
      "logic": "品种相对强弱可能延续。",
      "status": "文献候选 / 待复现",
      "refs": [
        "bgr"
      ],
      "frequency": "月度研究；输入频率依定义",
      "source": "本次文献研究设计",
      "caveat": "不得把横截面排名与自身收益正负混同。",
      "market": "商品期货"
    },
    {
      "id": "basis",
      "name": "年化基差代理",
      "category": "期限结构",
      "formula": "ln(F近/F远) / ((到期远−到期近)/365)。",
      "logic": "近高远低为 backwardation，可反映稀缺性和持有收益。",
      "status": "基础算子已实现",
      "refs": [
        "carry",
        "ghr"
      ],
      "frequency": "月度研究；输入频率依定义",
      "source": "本次文献研究设计",
      "caveat": "为曲线 carry 代理；不是实现收益，且两价格必须为正。",
      "market": "商品期货"
    },
    {
      "id": "carry",
      "name": "商品 Carry 组合",
      "category": "定价因子",
      "formula": "依据文献 carry 度量对商品排序后构建多空收益。",
      "logic": "持有收益差异可能反映风险补偿。",
      "status": "文献候选 / 待复现",
      "refs": [
        "carry",
        "bgr"
      ],
      "frequency": "月度研究；输入频率依定义",
      "source": "本次文献研究设计",
      "caveat": "合约选择、年化、季节性与投资权重待复现。",
      "market": "商品期货"
    },
    {
      "id": "basis_momentum",
      "name": "Basis-Momentum",
      "category": "期限结构",
      "formula": "依原文规则取近月与次近月历史累计收益之差。",
      "logic": "关注曲线变化而非单一时点曲线水平。",
      "status": "文献候选 / 待复现",
      "refs": [
        "basismom"
      ],
      "frequency": "月度研究；输入频率依定义",
      "source": "本次文献研究设计",
      "caveat": "必须独立重建两个滚动合约序列；不是简单相减两个月的基差。",
      "market": "商品期货"
    },
    {
      "id": "inventory",
      "name": "库存状态",
      "category": "供需特征",
      "formula": "对可得库存做品种内历史季节性调整，定义低库存信号。",
      "logic": "库存影响便利收益和供给弹性。",
      "status": "文献候选 / 待复现",
      "refs": [
        "ghr"
      ],
      "frequency": "月度研究；输入频率依定义",
      "source": "本次文献研究设计",
      "caveat": "库存口径、报告滞后及季节调整仅用历史数据。",
      "market": "商品期货"
    },
    {
      "id": "hedging_pressure",
      "name": "商业套保压力",
      "category": "持仓特征",
      "formula": "候选代理：(商业空头−商业多头)/(商业空头+商业多头)。",
      "logic": "承接套保需求可能获得风险补偿。",
      "status": "文献候选 / 待复现",
      "refs": [
        "hp",
        "ghr"
      ],
      "frequency": "月度研究；输入频率依定义",
      "source": "本次文献研究设计",
      "caveat": "代理公式单列，原文精确口径待核对；美国商业持仓与国内席位排名不是同一数据。",
      "market": "商品期货"
    },
    {
      "id": "commodity_market",
      "name": "商品市场因子",
      "category": "定价基准",
      "formula": "同一规则下商品期货超额收益的等权组合。",
      "logic": "衡量广泛商品风险暴露。",
      "status": "文献候选 / 待复现",
      "refs": [
        "bgr"
      ],
      "frequency": "月度研究；输入频率依定义",
      "source": "本次文献研究设计",
      "caveat": "等权资产不等于等风险；抵押现金收益单列。",
      "market": "商品期货"
    },
    {
      "id": "curve_slope",
      "name": "期限结构斜率扩展",
      "category": "期限结构",
      "formula": "对同品种多个到期点的价格/期限曲线估计斜率。",
      "logic": "刻画期限方向和局部结构。",
      "status": "文献候选 / 待复现",
      "refs": [
        "carry",
        "basismom"
      ],
      "frequency": "月度研究；输入频率依定义",
      "source": "本次文献研究设计",
      "caveat": "本次扩展研究设计，不声称为原论文独立已验证因子；注意季节性。",
      "market": "商品期货"
    },
    {
      "id": "contract_pnl",
      "name": "逐合约损益",
      "category": "收益核算",
      "formula": "昨日手数 × 合约乘数 × (今日结算价−昨日结算价) − 费用。",
      "logic": "把研究信号落实到可核对的交易损益。",
      "status": "基础算子已实现",
      "refs": [
        "tsmom"
      ],
      "frequency": "月度研究；输入频率依定义",
      "source": "本次文献研究设计",
      "caveat": "属于核算算子；换月平旧开新分别记录，支持负结算价。",
      "market": "跨资产期货"
    },
    {
      "id": "trend_multi",
      "name": "多周期趋势共识",
      "category": "方向信号",
      "formula": "固定短、中、长形成窗口，等权或训练期定权合成各窗口方向。",
      "logic": "降低单一形成周期依赖。 输入：按交易规则重建的超额收益。",
      "status": "文献候选 / 待复现",
      "refs": [
        "century",
        "tsmom"
      ],
      "frequency": "形成窗口预登记；先公告后使用",
      "source": "本次扩充的研究定义",
      "caveat": "周期组合是同一家族变体，不能把三个窗口计成三个新理论。",
      "market": "跨资产期货",
      "input_fields": "按交易规则重建的超额收益",
      "reference_authors": "Brian Hurst; Yao Hua Ooi; Lasse Heje Pedersen; Tobias Moskowitz; Yao Hua Ooi; Lasse Heje Pedersen"
    },
    {
      "id": "trend_strength",
      "name": "风险调整趋势强度",
      "category": "方向信号",
      "formula": "累计收益 / 仅用历史估计的窗口风险尺度。",
      "logic": "保留方向之外的趋势强弱信息。 输入：规则收益、历史波动。",
      "status": "扩展假设 / 待检验",
      "refs": [
        "tsmom"
      ],
      "frequency": "形成窗口预登记；先公告后使用",
      "source": "本次扩充的研究定义",
      "caveat": "研究扩展；与仓位波动率缩放分开，避免重复放大。",
      "market": "跨资产期货",
      "input_fields": "规则收益、历史波动",
      "reference_authors": "Tobias Moskowitz; Yao Hua Ooi; Lasse Heje Pedersen"
    },
    {
      "id": "trend_accel",
      "name": "趋势加速度",
      "category": "方向信号",
      "formula": "标准化短期趋势 − 标准化长期趋势。",
      "logic": "检验趋势转强或衰减是否有增量信息。 输入：多窗口收益、历史风险尺度。",
      "status": "扩展假设 / 待检验",
      "refs": [
        "tsmom",
        "century"
      ],
      "frequency": "形成窗口预登记；先公告后使用",
      "source": "本次扩充的研究定义",
      "caveat": "本次假设；不能先看全样本再选短长窗口。",
      "market": "跨资产期货",
      "input_fields": "多窗口收益、历史风险尺度",
      "reference_authors": "Tobias Moskowitz; Yao Hua Ooi; Lasse Heje Pedersen; Brian Hurst; Yao Hua Ooi; Lasse Heje Pedersen"
    },
    {
      "id": "trend_consistency",
      "name": "趋势路径一致性",
      "category": "方向信号",
      "formula": "同方向日数占比或累计方向变化次数，预先选一种。",
      "logic": "相同累计收益可能对应不同价格路径。 输入：日度规则收益。",
      "status": "扩展假设 / 待检验",
      "refs": [
        "tsmom"
      ],
      "frequency": "形成窗口预登记；先公告后使用",
      "source": "本次扩充的研究定义",
      "caveat": "路径指标为本次扩展；需与趋势、波动做消融比较。",
      "market": "跨资产期货",
      "input_fields": "日度规则收益",
      "reference_authors": "Tobias Moskowitz; Yao Hua Ooi; Lasse Heje Pedersen"
    },
    {
      "id": "value_long",
      "name": "商品长期价值",
      "category": "价值特征",
      "formula": "以长期价格变化构造价值锚，严格沿用文献商品口径。",
      "logic": "检验远离长期价值水平后的收益差。 输入：长期现货/期货序列、必要价格调整。",
      "status": "文献候选 / 待复现",
      "refs": [
        "vm"
      ],
      "frequency": "形成窗口预登记；先公告后使用",
      "source": "本次扩充的研究定义",
      "caveat": "实值化和期限调整预登记，不能拼接不同质量等级现货。",
      "market": "商品期货",
      "input_fields": "长期现货/期货序列、必要价格调整",
      "reference_authors": "Cliff Asness; Tobias Moskowitz; Lasse Heje Pedersen"
    },
    {
      "id": "spot_premium",
      "name": "现货风险溢价组合",
      "category": "定价因子",
      "formula": "依原文分解期货收益，按基差等特征形成现货风险组合。",
      "logic": "区分标的商品风险与期限曲线变动。 输入：多个交割月价格、合约收益、基差。",
      "status": "文献候选 / 待复现",
      "refs": [
        "anatomy"
      ],
      "frequency": "形成窗口预登记；先公告后使用",
      "source": "本次扩充的研究定义",
      "caveat": "名称是文献分解概念，不能直接用未可交易现货回报当期货策略。",
      "market": "商品期货",
      "input_fields": "多个交割月价格、合约收益、基差",
      "reference_authors": "Marta Szymanowska; Frans de Roon; Theo Nijman; Rob van den Goorbergh"
    },
    {
      "id": "term_premium",
      "name": "期限风险溢价组合",
      "category": "定价因子",
      "formula": "依原文不同到期点的收益分解构造期限风险组合。",
      "logic": "不同期限承担不同基差变化风险。 输入：多期限合约收益、到期日、排序变量。",
      "status": "文献候选 / 待复现",
      "refs": [
        "anatomy"
      ],
      "frequency": "形成窗口预登记；先公告后使用",
      "source": "本次扩充的研究定义",
      "caveat": "期限组合需要合约层重建和换月账本。",
      "market": "商品期货",
      "input_fields": "多期限合约收益、到期日、排序变量",
      "reference_authors": "Marta Szymanowska; Frans de Roon; Theo Nijman; Rob van den Goorbergh"
    },
    {
      "id": "curve_curvature",
      "name": "期限曲率代理",
      "category": "期限结构",
      "formula": "相邻两段年化对数斜率之差，保留各段到期间隔。",
      "logic": "曲线弯曲可能包含库存和季节性信息。 输入：至少三个同步正价格、到期日。",
      "status": "扩展假设 / 待检验",
      "refs": [
        "basismom",
        "anatomy"
      ],
      "frequency": "形成窗口预登记；先公告后使用",
      "source": "本次扩充的研究定义",
      "caveat": "本次代理，不是 Basis-Momentum；季节性与不等距到期必须处理。",
      "market": "商品期货",
      "input_fields": "至少三个同步正价格、到期日",
      "reference_authors": "Martijn Boons; Melissa Porras Prado; Marta Szymanowska; Frans de Roon; Theo Nijman; Rob van den Goorbergh"
    },
    {
      "id": "carry_seasonal",
      "name": "季节调整 Carry",
      "category": "期限结构",
      "formula": "当前基差 − 过去同季节的历史平均基差。",
      "logic": "区分常规生产周期与异常紧缺。 输入：多年曲线、交割月、季节标签。",
      "status": "扩展假设 / 待检验",
      "refs": [
        "ghr",
        "carry"
      ],
      "frequency": "形成窗口预登记；先公告后使用",
      "source": "本次扩充的研究定义",
      "caveat": "历史季节样本少则不估计；跨季和同季合约不可混算。",
      "market": "商品期货",
      "input_fields": "多年曲线、交割月、季节标签",
      "reference_authors": "Gary Gorton; Fumio Hayashi; K. Geert Rouwenhorst; Ralph Koijen; Tobias Moskowitz; Lasse Heje Pedersen; Evert Vrugt"
    },
    {
      "id": "inventory_surprise",
      "name": "库存公布变化",
      "category": "供需特征",
      "formula": "库存公告值相对前次公告值或历史季节预期的偏差。",
      "logic": "新增库存信息可能引起供需预期调整。 输入：库存公告历史版本、公布时间。",
      "status": "扩展假设 / 待检验",
      "refs": [
        "ghr"
      ],
      "frequency": "形成窗口预登记；先公告后使用",
      "source": "本次扩充的研究定义",
      "caveat": "不能把统计期末当成已知时点；预期基线只用历史。",
      "market": "商品期货",
      "input_fields": "库存公告历史版本、公布时间",
      "reference_authors": "Gary Gorton; Fumio Hayashi; K. Geert Rouwenhorst"
    },
    {
      "id": "oi_growth",
      "name": "持仓量增长",
      "category": "持仓特征",
      "formula": "同品种全部相关合约聚合持仓量增长，另构建跨品种标准化聚合。",
      "logic": "持仓总量变化可能包含风险吸收与经济活动信息。 输入：逐合约持仓量、乘数、合约状态。",
      "status": "文献候选 / 待复现",
      "refs": [
        "hy"
      ],
      "frequency": "形成窗口预登记；先公告后使用",
      "source": "本次扩充的研究定义",
      "caveat": "聚合不能只看主力，避免换月假信号；原文宏观尺度与单品种扩展分列。",
      "market": "商品期货",
      "input_fields": "逐合约持仓量、乘数、合约状态",
      "reference_authors": "Harrison Hong; Motohiro Yogo"
    },
    {
      "id": "hp_change",
      "name": "套保压力变化",
      "category": "持仓特征",
      "formula": "商业净空占比在相同披露口径下的变化。",
      "logic": "检验套保需求变化而非水平的增量信息。 输入：商业多空持仓、公布时间。",
      "status": "扩展假设 / 待检验",
      "refs": [
        "hp"
      ],
      "frequency": "形成窗口预登记；先公告后使用",
      "source": "本次扩充的研究定义",
      "caveat": "本次扩展；席位多空排行不等于商业账户分类。",
      "market": "商品期货",
      "input_fields": "商业多空持仓、公布时间",
      "reference_authors": "Frans de Roon; Theo Nijman; Chris Veld"
    },
    {
      "id": "return_skew",
      "name": "历史收益偏度",
      "category": "分布风险",
      "formula": "滚动历史规则期货收益的三阶中心矩 / 标准差³。",
      "logic": "偏斜收益偏好及选择性套保可能对应收益差异。 输入：日度规则收益。",
      "status": "文献候选 / 待复现",
      "refs": [
        "skew"
      ],
      "frequency": "形成窗口预登记；先公告后使用",
      "source": "本次扩充的研究定义",
      "caveat": "原样本方向单独登记；小样本偏度不稳定，零方差返回缺失。",
      "market": "商品期货",
      "input_fields": "日度规则收益",
      "reference_authors": "Adrian Fernandez-Perez; Bart Frijns; Ana-Maria Fuertes; Joëlle Miffre"
    },
    {
      "id": "commodity_vol",
      "name": "商品历史波动",
      "category": "分布风险",
      "formula": "滚动收益标准差或已实现方差，单位分列。",
      "logic": "波动排序可能包含风险状态信息。 输入：日度规则收益。",
      "status": "文献候选 / 待复现",
      "refs": [
        "anatomy"
      ],
      "frequency": "形成窗口预登记；先公告后使用",
      "source": "本次扩充的研究定义",
      "caveat": "风险状态特征，不预设高低波动一定获利。",
      "market": "商品期货",
      "input_fields": "日度规则收益",
      "reference_authors": "Marta Szymanowska; Frans de Roon; Theo Nijman; Rob van den Goorbergh"
    },
    {
      "id": "liquidity_state",
      "name": "商品流动性状态",
      "category": "交易摩擦",
      "formula": "按原文口径构造交易流动性排序，并与成本估计分开。",
      "logic": "不易交易品种可能需要额外补偿。 输入：成交量、金额、价差、规则收益。",
      "status": "文献候选 / 待复现",
      "refs": [
        "anatomy"
      ],
      "frequency": "形成窗口预登记；先公告后使用",
      "source": "本次扩充的研究定义",
      "caveat": "金额必须使用乘数；保证金与名义成交额分开。",
      "market": "商品期货",
      "input_fields": "成交量、金额、价差、规则收益",
      "reference_authors": "Marta Szymanowska; Frans de Roon; Theo Nijman; Rob van den Goorbergh"
    },
    {
      "id": "inflation_beta",
      "name": "通胀敏感度",
      "category": "宏观暴露",
      "formula": "训练窗口回归规则商品收益对已公布通胀创新的暴露。",
      "logic": "不同商品对宏观购买力冲击反应可能不同。 输入：通胀公布历史、商品收益。",
      "status": "扩展假设 / 待检验",
      "refs": [
        "anatomy"
      ],
      "frequency": "形成窗口预登记；先公告后使用",
      "source": "本次扩充的研究定义",
      "caveat": "本次 beta 扩展；原文排序与此代理不声称等价。",
      "market": "商品期货",
      "input_fields": "通胀公布历史、商品收益",
      "reference_authors": "Marta Szymanowska; Frans de Roon; Theo Nijman; Rob van den Goorbergh"
    },
    {
      "id": "inverse_variance",
      "name": "逆方差风险管理",
      "category": "仓位管理",
      "formula": "滞后估计方差的倒数缩放原策略，并设定资本及杠杆约束。",
      "logic": "研究风险水平变化时的配置方法。 输入：策略收益、滞后方差、资本上限。",
      "status": "扩展假设 / 待检验",
      "refs": [
        "mm"
      ],
      "frequency": "形成窗口预登记；先公告后使用",
      "source": "本次扩充的研究定义",
      "caveat": "方法迁移假设，不是 CTA 专属实证；不同于目标波动率 / 波动率。",
      "market": "跨资产期货",
      "input_fields": "策略收益、滞后方差、资本上限",
      "reference_authors": "Alan Moreira; Tyler Muir"
    },
    {
      "id": "carry_momentum",
      "name": "Carry × 动量交互",
      "category": "交互假设",
      "formula": "同一时点标准化 Carry 与动量的乘积，同时保留两个主效应。",
      "logic": "检验相对定价与价格方向同时出现时的信息。 输入：Carry、动量、截面分类。",
      "status": "扩展假设 / 待检验",
      "refs": [
        "carry",
        "bgr"
      ],
      "frequency": "形成窗口预登记；先公告后使用",
      "source": "本次扩充的研究定义",
      "caveat": "本次交互研究，不主张论文验证乘积形式；必须与主效应模型比较。",
      "market": "商品期货",
      "input_fields": "Carry、动量、截面分类",
      "reference_authors": "Ralph Koijen; Tobias Moskowitz; Lasse Heje Pedersen; Evert Vrugt; Gurdip Bakshi; Xiaohui Gao; Alberto Rossi"
    },
    {
      "id": "inventory_basis",
      "name": "库存 × 基差交互",
      "category": "交互假设",
      "formula": "季节调整库存状态 × 同期可得基差，保留主效应。",
      "logic": "检验库存紧张时曲线信息是否改变。 输入：公布后库存、合约基差、季节。",
      "status": "扩展假设 / 待检验",
      "refs": [
        "ghr"
      ],
      "frequency": "形成窗口预登记；先公告后使用",
      "source": "本次扩充的研究定义",
      "caveat": "本次交互研究，方向需预登记；不同仓储制度品种分别估计。",
      "market": "商品期货",
      "input_fields": "公布后库存、合约基差、季节",
      "reference_authors": "Gary Gorton; Fumio Hayashi; K. Geert Rouwenhorst"
    }
  ],
  "metrics": [
    [
      "30",
      "研究条目"
    ],
    [
      "12",
      "学术与方法文献"
    ],
    [
      "0",
      "已完成真实数据回测"
    ]
  ],
  "summary": "连接跨资产趋势、商品 Carry、库存和持仓压力，把合约换月与风险预算纳入同一研究流程。",
  "scope": "本次根据学术文献新建研究目录、经济逻辑、数据契约和独立基础示例；不是已有完整市场数据因子库的迁移。",
  "steps": [
    [
      "合约与交易日历",
      "品种、合约、交易所、乘数、最小变动、结算价、到期、交割、交易时段和公告时点版本化；夜盘归属交易日须一致。"
    ],
    [
      "连续序列与换月",
      "先确定流动性、到期安全距离和换月规则；用昨日持仓逐合约累计损益，不能把拼接价跳跃视为投资收益。"
    ],
    [
      "信号与组合",
      "分别记录时间序列方向、横截面排名、carry 和供需特征；风险缩放使用历史估计，设置品种、板块和杠杆约束。"
    ],
    [
      "样本外与实施",
      "纳入佣金、价差、冲击、涨跌停和换月成本；按名义本金与实际资本分别报告收益，抵押现金收益单列，保证金不是收益率分母的默认选择。"
    ],
    [
      "特征家族与增量检验",
      "先复现基准定义，再登记允许的窗口、变化率、条件残差和少量交互。按经济家族分组去重，使用时间滚动、跨市场留出和成本后消融检验。预计数量与数据前提见特征工程页。"
    ]
  ],
  "limitations": [
    "30 项包含文献候选、风险度量、组合方法和明确标注的扩展假设，不等于独立有效 alpha 数量。",
    "新建学术研究框架，尚无授权期货行情和完整回测；基础信号、基差与逐合约损益有独立示例。",
    "商品库存与商业套保持仓适用范围有限；股指、利率、外汇不能机械套用商品供需变量。",
    "负价格时对数基差无定义，应采用明确替代指标；不能静默取绝对值。"
  ],
  "engineering": {
    "bases": 24,
    "lo": 4,
    "hi": 7,
    "groups": [
      [
        "趋势与动量",
        6
      ],
      [
        "期限结构与价值",
        5
      ],
      [
        "库存与供需",
        3
      ],
      [
        "持仓与套保压力",
        3
      ],
      [
        "分布与流动性",
        4
      ],
      [
        "宏观条件与交互",
        3
      ]
    ],
    "windows": "趋势用预先选定的 1/3/6/12 月；曲线用相邻月、固定期限间隔；库存用公布后季节历史基线。",
    "transforms": "原信号 → 两个有意义的周期 → 品种内历史标准分 → 跨品种排名 → 季节/板块残差 → 一项有限交互。每种子最多七个版本，禁止窗口×期限×变换全排列。",
    "example": "Carry：近远月年化基差 → 固定到期间隔版本 → 同季节残差 → 品种内 z 分数 → 板块内排名 → Carry×动量。交互与两个主效应一起比较。",
    "data": "未拼接的逐合约结算价、乘数、到期日、持仓量、成交量、换月规则；库存和商业持仓需要完整公布历史。负价格使用预登记的非对数替代定义。",
    "generalize": "训练市场与留出品种/板块分开；农业季节性不迁移为股指季节性。趋势可跨资产，库存和商业套保仅对适用商品做迁移。",
    "priority": "先趋势和曲线，再加入库存、持仓与分布；仓位缩放和损益核算不作为预测种子计入 24 个预算。",
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
      "role": "本次补充的学术研究",
      "note": "跨股指、利率、外汇和商品期货的自身历史收益信号；信号方向与波动率缩放分开保存。"
    },
    {
      "id": "carry",
      "title": "Carry",
      "authors": "Ralph Koijen; Tobias Moskowitz; Lasse Heje Pedersen; Evert Vrugt",
      "year": "2018",
      "url": "https://spinup-000d1a-wp-offload-media.s3.amazonaws.com/faculty/wp-content/uploads/sites/3/2019/04/Carry.pdf",
      "role": "本次补充的学术研究",
      "note": "跨资产持有收益框架；各资产 carry 的具体测量不同。"
    },
    {
      "id": "ghr",
      "title": "The Fundamentals of Commodity Futures Returns",
      "authors": "Gary Gorton; Fumio Hayashi; K. Geert Rouwenhorst",
      "year": "2013",
      "url": "https://doi.org/10.1093/rof/rfs019",
      "role": "本次补充的学术研究",
      "note": "库存、基差和商品收益关系；库存解释不等于所有持仓压力代理都有效。"
    },
    {
      "id": "bgr",
      "title": "Understanding the Sources of Risk Underlying the Cross Section of Commodity Returns",
      "authors": "Gurdip Bakshi; Xiaohui Gao; Alberto Rossi",
      "year": "2019",
      "url": "https://pubsonline.informs.org/doi/10.1287/mnsc.2017.2840",
      "role": "本次补充的学术研究",
      "note": "商品市场、carry 和动量的组合定价框架；线上发表于 2017，卷期为 2019。"
    },
    {
      "id": "hp",
      "title": "Hedging Pressure Effects in Futures Markets",
      "authors": "Frans de Roon; Theo Nijman; Chris Veld",
      "year": "2000",
      "url": "https://doi.org/10.1111/0022-1082.00253",
      "role": "本次补充的学术研究",
      "note": "套保者需求可能对应风险补偿；必须固定商业持仓定义与公布时点。"
    },
    {
      "id": "basismom",
      "title": "Basis-Momentum",
      "authors": "Martijn Boons; Melissa Porras Prado",
      "year": "2019",
      "url": "https://doi.org/10.1111/jofi.12738",
      "role": "本次补充的学术研究",
      "note": "期限不同合约的历史收益差刻画曲线动态；区别于单期基差水平。"
    },
    {
      "id": "vm",
      "title": "Value and Momentum Everywhere",
      "authors": "Cliff Asness; Tobias Moskowitz; Lasse Heje Pedersen",
      "year": "2013",
      "url": "https://www.aqr.com/insights/research/journal-article/value-and-momentum-everywhere",
      "role": "本次扩充文献 / 待本地复现",
      "note": "跨市场价值与动量，资产特定定义和可交易工具必须保留。"
    },
    {
      "id": "century",
      "title": "A Century of Evidence on Trend-Following Investing",
      "authors": "Brian Hurst; Yao Hua Ooi; Lasse Heje Pedersen",
      "year": "2017",
      "url": "https://www.aqr.com/-/media/AQR/Documents/Insights/Journal-Article/AQR-JPM-Fall-2017.pdf",
      "role": "本次扩充文献 / 待本地复现",
      "note": "长历史、多市场趋势研究；历史数据质量和实施成本需独立审计。"
    },
    {
      "id": "anatomy",
      "title": "An Anatomy of Commodity Futures Risk Premia",
      "authors": "Marta Szymanowska; Frans de Roon; Theo Nijman; Rob van den Goorbergh",
      "year": "2014",
      "url": "https://onlinelibrary.wiley.com/doi/10.1111/jofi.12096",
      "role": "本次扩充文献 / 待本地复现",
      "note": "区分商品现货风险溢价与期限风险溢价，不能将各种期限合约混为一个收益序列。"
    },
    {
      "id": "hy",
      "title": "What does futures market interest tell us about the macroeconomy and asset prices?",
      "authors": "Harrison Hong; Motohiro Yogo",
      "year": "2012",
      "url": "https://www.sciencedirect.com/science/article/pii/S0304405X12000657",
      "role": "本次扩充文献 / 待本地复现",
      "note": "持仓量聚合变化与宏观和资产收益的信息关系；本地单品种增仓代理不是论文聚合指标的精确复现。"
    },
    {
      "id": "skew",
      "title": "The Skewness of Commodity Futures Returns",
      "authors": "Adrian Fernandez-Perez; Bart Frijns; Ana-Maria Fuertes; Joëlle Miffre",
      "year": "2018",
      "url": "https://doi.org/10.1016/j.jbankfin.2017.06.015",
      "role": "本次扩充文献 / 待本地复现",
      "note": "历史偏度与商品预期收益；接受稿为 2017，正式卷期为 2018。"
    },
    {
      "id": "mm",
      "title": "Volatility-Managed Portfolios",
      "authors": "Alan Moreira; Tyler Muir",
      "year": "2017",
      "url": "https://doi.org/10.1111/jofi.12513",
      "role": "本次扩充文献 / 待本地复现",
      "note": "逆方差缩放是资产组合方法参考，原文不是所有 CTA 品种的直接实证；与逆波动率缩放分开。"
    }
  ]
};
