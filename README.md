[English](README.en.md) | 中文

# 期货 / CTA 因子库

期货 / CTA 因子库。连接跨资产趋势、商品 Carry、库存和持仓压力，把合约换月与风险预算纳入同一研究流程。

本次根据学术文献新建研究目录、经济逻辑、数据契约和独立基础示例；不是已有完整市场数据因子库的迁移。

## 网页

直接用浏览器打开 `site/index.html` 即可离线使用。也可以在仓库根目录执行：

```sh
python -m http.server 8000
```

访问 http://localhost:8000/site/ 。网页包含目录检索、类别/状态筛选、因子详情、参考资料、构建流程、筛选结果导出及交互计算。双语在线网页入口位于 GitHub 仓库 About 的 Website 链接。

## 内容规模

- 30：研究条目
- 12：学术与方法文献
- 0：已完成真实数据回测

## 运行与测试

Python 3.10+，核心示例只使用标准库。

```sh
python examples/demo.py
python -m unittest discover -s tests -v
```

## 目录

- `site/`：无构建依赖的静态网页。
- `data/catalog.json`：逐因子目录与来源；`data/references.json`：书目。
- `src/factors.py`：本次独立编写的基础计算示例。
- `docs/METHODOLOGY.md`：设计、经济逻辑、评价方法。
- `docs/DATA_CONTRACT.md`：输入字段、时点约束。
- `docs/PROVENANCE.md`：原项目依据、计数与完成度。
- `docs/REFERENCES.md`：参考论文与引用关系。

## 完成度

- 30 项包含文献候选、风险度量、组合方法和明确标注的扩展假设，不等于独立有效 alpha 数量。
- 新建学术研究框架，尚无授权期货行情和完整回测；基础信号、基差与逐合约损益有独立示例。
- 商品库存与商业套保持仓适用范围有限；股指、利率、外汇不能机械套用商品供需变量。
- 负价格时对数基差无定义，应采用明确替代指标；不能静默取绝对值。

## 发布为 GitHub Pages

仓库推送后，在 Settings → Pages → Build and deployment 中选择 Deploy from a branch，分支 `main`，目录 `/docs`。本仓库已把同一套静态页面复制到 `docs/`，可直接发布；独立 `site/` 便于本地浏览。私有仓库的 Pages 可用性取决于账号方案，且 Pages 访问权限需单独核对。

GitHub Actions 仅配置 Python 验证，不会自动把私有内容公开。

## 数据与来源

示例输入为教学数据；不含真实持仓、原始行情、账户信息或连接凭据。因子定义、文献与代码来源分别记录。未提供或暗示真实样本外业绩。

## 特征工程与泛化预算

计划 24 个种子 × 每种子 4–7 种允许表达 = 96–168 个候选列（含基础表达，非有效 alpha 数量）。详见 [特征工程方案](docs/FEATURE_ENGINEERING.md)。
