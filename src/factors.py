from datetime import datetime
import math

def asof_record(records, decision_at):
    """Select the latest already available snapshot for ONE entity; ISO datetimes required."""
    decision = datetime.fromisoformat(decision_at)
    eligible = [r for r in records if datetime.fromisoformat(r['available_at']) <= decision]
    return max(eligible, key=lambda r: datetime.fromisoformat(r['available_at'])) if eligible else None

def compounded_return(returns):
    values = list(returns)
    if not values or any(not math.isfinite(r) or r < -1 for r in values):
        raise ValueError('Returns must be finite, >= -1, and nonempty')
    return math.prod(1+r for r in values)-1

def annualized_basis(near,far,days_between):
    if not all(math.isfinite(x) and x>0 for x in [near,far,days_between]): raise ValueError('positive finite prices and day gap required')
    return math.log(near/far)*365/days_between

def trend_signal(returns):
    r=compounded_return(returns)
    return (r>0)-(r<0)

def contract_pnl(previous,current,contracts,multiplier,cost=0):
    if not all(math.isfinite(x) for x in [previous,current,contracts,multiplier,cost]) or multiplier<=0 or cost<0: raise ValueError('invalid PnL inputs')
    return contracts*multiplier*(current-previous)-cost
