import { model, Schema } from "mongoose";

const categories = [
  "Housing",
  "Transportation",
  "Food",
  "Utilities",
  "Clothing",
  "Medical/Healthcare",
  "Insurance",
  "Household items/supplies",
  "Personal",
  "Debt",
  "Education",
  "Savings",
  "Retirement",
  "Gift/Donations",
  "Entertainment",
] as const;

type Categories = typeof categories;

interface ISpend {
  title: string;
  date: Date;
  amount: number;
  category: Categories;
  source?: string;
}

const spendSchema = new Schema<ISpend>({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  source: String,
});

const Spend = model<ISpend>("Spend", spendSchema);

export default Spend;