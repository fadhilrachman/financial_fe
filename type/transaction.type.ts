export interface CountTransactionType {
  income: number;
  expense: number;
  money_total: number;
}

export interface PostTransactionType {
  description?: string;
  count: number;
  date: Date;
  category_id: string;
  wallet_id: string;
  type: "income" | "expense";
}

export interface TransactionType {
  id: string;
  description?: string;
  count: number;
  date: Date;
  created_at: Date;
  wallet: {
    id: string;
    name: string;
  };
  type: "income" | "expense";
  category: {
    id: string;
    name: string;
    icon: string;
  };
}

export interface GroupingByDateTransactionType {
  [key: string]: TransactionType[];
}
