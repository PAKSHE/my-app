import AccountCard from "../components/AccountCard";
import { accounts } from "../data/accounts";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Game Account Marketplace</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {accounts.map((account) => (
          <AccountCard key={account.id} account={account} />
        ))}
      </div>
    </main>
  );
}
