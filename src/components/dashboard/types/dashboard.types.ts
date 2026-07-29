export interface Group {
  _id: string;
  name: string;
}

export interface CurrentMember {
  _id: string;
  name: string;
}

export interface DashboardSummary {
  memberCount: number;
  totalExpense: number;
  totalBalance: number;
  toSettle: number;
}

export interface RecentExpense {
  _id: string;
  title: string;
  amount: number;
  paidBy: string;
  createdAt: string;
}

export interface DashboardResponse {
  group: Group;
  currentMember: CurrentMember;
  summary: DashboardSummary;
  recentExpenses: RecentExpense[];
}