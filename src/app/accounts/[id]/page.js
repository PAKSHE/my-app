import Link from "next/link";
import { getAccount } from "../../../data/accounts";

export default function AccountPage({ params }) {
  const account = getAccount(params.id);

  if (!account) {
    return <main className="max-w-5xl mx-auto p-8">Account not found.</main>;
  }

  return (
    <main className="max-w-5xl mx-auto p-8">
      <div className="bg-white border rounded-lg p-6 shadow-sm">
        <h1 className="text-2xl font-bold mb-2">{account.game}</h1>
        <p className="mb-4 text-gray-700">{account.description}</p>
        <p className="font-bold text-lg mb-6">${account.price}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Buy now
        </button>
        <div className="mt-6">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← Back to listings
          </Link>
        </div>
      </div>
    </main>
  );
}
