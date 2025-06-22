import { useState } from 'react';

export default function ModalConnect({ onClose, setAccount, onOpenCreate }) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    async function connectMetaMask() {
        if (typeof window.ethereum === 'undefined') {
            alert('Please install MetaMask extension');
            return;
        }

        setIsLoading(true);
        setError("");

        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];

            await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                    chainId: '0xaa36a7',
                    chainName: 'Sepolia Testnet',
                    rpcUrls: ['https://rpc.sepolia.org'],
                    nativeCurrency: { name: 'Sepolia ETH', symbol: 'ETH', decimals: 18 },
                    blockExplorerUrls: ['https://sepolia.etherscan.io'],
                }],
            }).catch(() => { });

            setAccount(account);
            onClose();
        } catch (err) {
            console.error(err);
            if (err.code === 4001) {
                setError("You rejected the connection request. Please confirm the access in MetaMask.");
            } else {
                setError("Something went wrong while connecting to MetaMask. Please try again.");
            }
        }

        setIsLoading(false);
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-gradient-to-br from-[#111] via-[#222] to-[#1a1a1a] border border-[#29B6F6] rounded-xl w-96 p-6 relative text-white font-orbitron uppercase">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-3 text-white text-xl font-bold hover:text-[#29B6F6]"
                    aria-label="Close modal"
                >
                    ×
                </button>

                <h2 className="text-xl font-extrabold mb-4 text-center tracking-widest">Connect Wallet</h2>

                <div className="space-y-4">
                    <button
                        onClick={connectMetaMask}
                        disabled={isLoading}
                        className="w-full py-2 px-4 font-bold border-2 border-[#FFA500] bg-transparent hover:bg-[#FFA500] hover:text-black transition-all duration-300"
                    >
                        {isLoading ? 'CONNECTING...' : 'METAMASK 🦊'}
                    </button>

                    {error && (
                        <div className="text-red-500 text-xs text-center">{error}</div>
                    )}
                </div>

                <p
                    onClick={onOpenCreate}
                    className="text-xs mt-6 text-gray-400 text-center cursor-pointer hover:text-[#29B6F6] transition-colors"
                >
                    Don’t have a wallet?
                </p>
            </div>
        </div>
    );
}
