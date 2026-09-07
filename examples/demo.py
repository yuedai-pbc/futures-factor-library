import sys
from pathlib import Path
sys.path.insert(0,str(Path(__file__).resolve().parents[1]))
from src.factors import *

# Synthetic teaching inputs, not market data.
print(annualized_basis(102,100,90))
print(trend_signal([.02,-.01,.03]))
print(contract_pnl(100,101,2,10,1))
