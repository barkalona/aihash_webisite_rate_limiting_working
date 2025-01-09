import React from 'react';
import { Wallet } from 'lucide-react';
import { useWallet } from '../../contexts/WalletContext';

export function ConnectWalletButton() {
  const { isConnecting, isConnected, walletAddress, connect, disconnect } = useWallet();

  if (isConnected && walletAddress) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full">
          <Wallet className="w-4 h-4" />
          <span className="text-sm">
            {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
          </span>
        </div>
        <button
          onClick={disconnect}
          className="text-gray-400 hover:text-white text-sm"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={connect}
      disabled={isConnecting}
      className="bg-primary text-background px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-75"
    >
      {isConnecting ? 'Connecting...' : 'Connect Wallet'}
    </button>
  );
}