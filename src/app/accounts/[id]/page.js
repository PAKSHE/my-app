import Link from "next/link";
import { getAccount } from "../../../data/accounts";

export default function AccountPage({ params }) {
  const account = getAccount(params.id);

  if (!account) {
0y2nvz-codex/create-game-id-sales-website
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

    return <main className="p-8">Account not found.</main>;
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-2">{account.game}</h1>
      <p className="mb-2">{account.description}</p>
      <p className="font-bold mb-4">${account.price}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Buy now
      </button>
      <div className="mt-4">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to listings
        </Link>
 master
      </div>
    </main>
  );
}
