import sys, unittest, math
from pathlib import Path
sys.path.insert(0,str(Path(__file__).resolve().parents[1]))
from src.factors import *

class TestFactors(unittest.TestCase):
    def test_asof_blocks_future(self):
        records=[{'available_at':'2024-04-30','value':2},{'available_at':'2024-08-30','value':99}]
        self.assertIsNone(asof_record(records,'2024-03-01'))
        self.assertEqual(asof_record(records,'2024-05-01')['value'],2)
        self.assertEqual(asof_record(records,'2024-08-30')['value'],99)

    def test_compounding(self):
        self.assertAlmostEqual(compounded_return([.1,-.1]),-.01)
        with self.assertRaises(ValueError): compounded_return([])

    def test_basis_sign_and_invalid_prices(self):
        self.assertGreater(annualized_basis(102,100,90),0)
        self.assertLess(annualized_basis(98,100,90),0)
        for price in [0,-2,float('nan')]:
            with self.assertRaises(ValueError):annualized_basis(price,100,90)
    def test_trend_compounds(self):
        self.assertEqual(trend_signal([.1,-.1]),-1)
        self.assertEqual(trend_signal([0,0]),0)
        with self.assertRaises(ValueError):trend_signal([])
    def test_pnl_negative_price_and_roll(self):
        self.assertEqual(contract_pnl(-5,-3,2,10,1),39)
        self.assertEqual(contract_pnl(100,101,1,10)+contract_pnl(110,111,1,10),20)
        self.assertEqual(contract_pnl(100,101,-1,10),-10)
