type AuctionCardProps = {
  id: number;
  sellerAddress: string;
  minBid: number;
  highestBid?: number;
  highestBidder?: string;
  endTime: Date;
  onViewDetail: () => void;
};

export default function AuctionCard({
  sellerAddress,
  minBid,
  highestBid,
  endTime,
  onViewDetail,
}: AuctionCardProps) {
  return (
    <div className="relative flex w-full max-w-md flex-col rounded-xl bg-gray-800 text-gray-200 shadow-lg">
      <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-gray-700 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Auction Image"
          className="object-cover w-full h-48 rounded-xl opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/70"></div>
      </div>
      <div className="p-6">
        <h5 className="text-xl font-medium text-gray-100">Seller: {sellerAddress}</h5>
        <p className="text-base font-light text-gray-400">Minimum Bid: {minBid} ETH</p>
        <p className="text-base font-light text-gray-400">
          Highest Bid: {highestBid ? `${highestBid} ETH` : "No bids yet"}
        </p>
        <p className="text-base font-light text-gray-400">
          Ends at: {new Date(endTime).toLocaleString()}
        </p>
      </div>
      <div className="p-6 pt-3">
        <button
          onClick={onViewDetail}
          className="w-full rounded-lg bg-blue-600 py-3.5 text-white font-bold uppercase transition-all hover:bg-blue-500"
        >
          View Detail
        </button>
      </div>
    </div>
  );
}
