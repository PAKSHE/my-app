import Link from "next/link";

export default function AccountCard({ account }) {
  return (
    <div className="border rounded p-4 shadow-sm">
      <h2 className="text-xl font-semibold">{account.game}</h2>
      <p className="text-sm text-gray-700 mt-1">{account.description}</p>
      <p className="font-bold mt-4">${account.price}</p>
      <Link
        href={`/accounts/${account.id}`}
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        View details
      </Link>
    </div>
  );
}
