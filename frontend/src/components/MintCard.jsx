import React, { useState } from "react";
import { BrowserProvider, Contract, parseUnits } from "ethers";

const tokenAbi = ["function mint(uint256 amount) public"];
const tokenAddress = "0xf0e91d659e9cAEf49c7A7a771f3Db00Be47B226C";

function MintCard({ account, onRequestConnect }) {
    const [quantity, setQuantity] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [txHash, setTxHash] = useState("");
    const [txStatus, setTxStatus] = useState(null);
    const [error, setError] = useState("");

    function normalizeInput(input) {
        return input.replace(",", ".").trim();
    }

    async function handleMint() {
        setError("");
        setTxHash("");
        setTxStatus(null);

        if (!account) {
            alert("Please connect your wallet first.");
            return;
        }

        if (!quantity) {
            alert("Please enter a quantity.");
            return;
        }

        const normalized = normalizeInput(quantity);

        if (isNaN(normalized) || Number(normalized) <= 0) {
            alert("Please enter a valid positive number.");
            return;
        }

        if (!window.ethereum) {
            alert("MetaMask not detected.");
            return;
        }

        try {
            setIsProcessing(true);

            const provider = new BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();

            const contract = new Contract(tokenAddress, tokenAbi, signer);

            const amountToMint = parseUnits(normalized, 18);

            const tx = await contract.mint(amountToMint);
            setTxHash(tx.hash);
            setTxStatus("success");

            await tx.wait();

            await window.ethereum.request({
                method: "wallet_watchAsset",
                params: {
                    type: "ERC20",
                    options: {
                        address: tokenAddress,
                        symbol: "ZETHT",
                        decimals: 18,
                        image: "https://i.ibb.co/9HMw5p7D/zeth.png",
                    },
                },
            });
        } catch (err) {
            console.error(err);
            if (err.code === "ACTION_REJECTED") {
                setError("You rejected the mint request.");
            } else if (err.code === "INSUFFICIENT_FUNDS") {
                setError("Insufficient funds for gas.");
            } else {
                setError(err.message || "Something went wrong during the mint.");
            }
            setTxStatus("fail");
        } finally {
            setIsProcessing(false);
        }
    }

    return (
        <div
            style={{
                background:
                    "linear-gradient(135deg, #00ffff 10%, #004080 70%, #20104a 90%)",
                color: "black",
                fontFamily: "'Orbitron', sans-serif",
                fontWeight: "900",
                letterSpacing: "0.1em",
                border: "2px solid #00fff7",
                borderRadius: "24px",
                boxShadow:
                    "0 0 8px #00fff7, 0 0 16px #003366, inset 0 0 10px #00fff7",
                userSelect: "none",
                maxWidth: "500px",
                minWidth: "350px",
                marginTop: "15px",
                padding: "1.5rem 1.5rem",
                textAlign: "center",
            }}
        >
            <h3
                className="mb-4"
                style={{
                    textTransform: "uppercase",
                    color: "black",
                    fontWeight: "900",
                    fontSize: "1.8rem",
                    textShadow: "0 0 4px #00fff7, 0 0 6px #003366",
                }}
            >
                MINT $ZETHT NOW!
            </h3>

            {!account ? (
                <button
                    onClick={onRequestConnect}
                    className="mt-6 px-6 py-3 bg-yellow-400 text-black font-bold rounded hover:scale-105 transition-transform"
                >
                    CONNECT WALLET
                </button>
            ) : (
                <>
                    <input
                        type="text"
                        placeholder="Quantity to mint (ex: 0.001 or 0,001)"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="w-full p-2 rounded bg-[#222] border border-[#29B6F6] text-white font-orbitron uppercase tracking-widest mt-6"
                    />

                    <button
                        onClick={handleMint}
                        disabled={isProcessing}
                        className="mt-4 px-6 py-3 bg-yellow-400 text-black font-bold border border-black hover:bg-yellow-300 transition"
                    >
                        {isProcessing ? "PROCESSING..." : "MINT"}
                    </button>

                    {txStatus === "success" && txHash && (
                        <div className="mt-4 p-4 border border-green-400 bg-black bg-opacity-80 rounded-lg text-center text-white">
                            <p className="text-sm mb-1">✅ Mint successful!</p>
                            <a
                                href={`https://sepolia.etherscan.io/tx/${txHash}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-400 underline hover:text-yellow-300 transition"
                            >
                                Check your mint status here 🔗
                            </a>
                        </div>
                    )}

                    {txStatus === "fail" && error && (
                        <div className="mt-4 p-4 border border-red-500 bg-black bg-opacity-80 rounded-lg text-center text-white">
                            <p className="text-sm">❌ {error}</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default MintCard;
