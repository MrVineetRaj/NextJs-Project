"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ITransaction } from "@/models/transaction";

export function RecentTransactions() {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  async function fetchTransactions() {
    const response = await fetch("/api/transactions");
    const data = await response.json();
    setTransactions(data.transactions.slice(0, 5)); // Show only 5 latest transactions
  }

  async function addTransaction() {
    const newTransaction = {
      description: "Freelance Work",
      amount: 5000,
      type: "income",
      date: new Date().toISOString(),
      category: "Salary",
    };

    await fetch("/api/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTransaction),
    });

    fetchTransactions(); // Refresh transactions after adding
  }

  return (
    <div className="space-y-4">
      <Button onClick={addTransaction} className="mb-4">
        Add Transaction
      </Button>

      {transactions.map((transaction) => (
        <div key={transaction._id} className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div
              className={`rounded-full p-2 ${
                transaction.type === "income" ? "bg-green-100" : "bg-red-100"
              }`}
            >
              {transaction.type === "income" ? (
                <ArrowUp className="h-4 w-4 text-green-600" />
              ) : (
                <ArrowDown className="h-4 w-4 text-red-600" />
              )}
            </div>
            <div>
              <p className="text-sm font-medium">{transaction.description}</p>
              <p className="text-xs text-muted-foreground">
                {transaction.category}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p
                className={`text-sm font-medium ${
                  transaction.type === "income"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {transaction.type === "income" ? "+" : "-"}₹
                {Math.abs(transaction.amount).toLocaleString()}
              </p>
              <p className="text-xs text-muted-foreground">
                {new Date(transaction.date).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>View details</DropdownMenuItem>
                <DropdownMenuItem>Edit transaction</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
    </div>
  );
}
