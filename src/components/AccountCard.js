import Link from "next/link";

export default function AccountCard({ account }) {
  return (
 0y2nvz-codex/create-game-id-sales-website
    <div className="flex flex-col bg-white border rounded-lg p-4 shadow-sm transition-shadow hover:shadow-md">
      <h2 className="text-xl font-semibold">{account.game}</h2>
      <p className="text-sm text-gray-700 mt-1 flex-grow">
        {account.description}
      </p>
      <p className="font-bold mt-4">${account.price}</p>
      <Link
        href={`/accounts/${account.id}`}
        className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"

    <div className="border rounded p-4 shadow-sm">
      <h2 className="text-xl font-semibold">{account.game}</h2>
      <p className="text-sm text-gray-700 mt-1">{account.description}</p>
      <p className="font-bold mt-4">${account.price}</p>
      <Link
        href={`/accounts/${account.id}`}
        className="mt-4 inline-block text-blue-600 hover:underline"
 master
      >
        View details
      </Link>
    </div>
  );
}
