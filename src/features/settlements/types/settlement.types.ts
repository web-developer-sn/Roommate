export interface Settlement {
  fromUserId: string;
  fromName: string;
  toUserId: string;
  toName: string;
  amountPaise: number;
}

export interface SettlementMember {
  userId: string;
  name: string;
  netBalancePaise: number;
}