export default function ModalCreateWallet({ onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-[#1a1a1a] border-2 border-white text-white rounded-xl w-96 p-6 relative backdrop-blur-lg backdrop-opacity-30">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-3 text-white text-xl font-bold hover:text-[#29B6F6]"
                    aria-label="Close"
                >
                    ×
                </button>

                <h2 className="text-xl font-extrabold uppercase mb-4 text-center">Create Wallet</h2>

                <p className="text-sm mb-3">
                    To create a MetaMask wallet, follow these steps:
                </p>

                <ol className="list-decimal pl-5 text-sm space-y-2">
                    <li>Visit the <a href="https://metamask.io/download/" target="_blank" rel="noreferrer" className="text-blue-400 underline">official MetaMask website</a>.</li>
                    <li>Choose your browser and install the extension.</li>
                    <li>Create a new wallet and safely store your recovery phrase.</li>
                    <li>Return here and click “Connect Wallet”.</li>
                </ol>

                <p className="text-xs mt-4 text-gray-400 text-center">Need help? Search YouTube for “How to create a MetaMask wallet”.</p>
            </div>
        </div>
    )
}
