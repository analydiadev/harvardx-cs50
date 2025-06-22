import { useState, useEffect } from 'react';
import './App.css';
import Header from "./components/Header.jsx";
import InfoTokens from "./components/InfoTokens.jsx";
import Card from "./components/Card.jsx";
import CardAbout from "./components/CardAbout.jsx";
import InfoCard from "./components/InfoCard.jsx";
import MintCard from "./components/MintCard.jsx";
import ModalConnect from "./components/ModalConnect.jsx";
import ModalCreateWallet from './components/ModalCreateWallet.jsx';
import CardFAQ from "./components/CardFAQ.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [account, setAccount] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    async function checkIfWalletIsConnected() {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        } catch (error) {
          console.error("Error checking connected accounts:", error);
        }
      }
    }
    checkIfWalletIsConnected();
  }, []);
  function handleRequestConnect() {
    if (!account) {
      setShowModal(true);
    }
  }

  return (
    <div className="min-h-screen bg-base-100" style={{
      fontFamily: 'Orbitron',
      fontWeight: '900',
      userSelect: 'none',
      letterSpacing: '-0.05em',
      textTransform: 'uppercase'
    }}>
      <InfoTokens />
      <div style={{ backgroundColor: 'rgb(237, 241, 8)' }} className="sticky top-[48px] z-40 bg-base-100">
        <Header />
      </div>

      <Card
        title="$ZETHT"
        description="Born from the neon-lit shadows of the grid, $ZETHT powers the underground economy beyond corpo control."
        buttonText="Jack In"
        textColor="text-gray-800"
        buttonClass="bg-[#29B6F6] text-white"
        maxWidth="max-w-250"
        gif="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjVqYjRjd2Z0c2lndHRleTRxbmlxYWlvMHg1ZGVlZ2FnYjYzNWtnNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9YO1Zv9rPAGQg3bYLY/giphy.gif"
        customClass="p-6 mt-10"
      />

      <div className="max-w-4xl mx-auto flex items-start justify-between gap-8 px-4 mt-5" style={{
        fontFamily: 'Audiowide',
        fontWeight: '900',
        userSelect: 'none',
        letterSpacing: '-0.05em',
        textTransform: 'uppercase',
        backgroundColor: 'rgb(237, 241, 8)',
        borderRadius: '15px',
      }}>

        <InfoCard
          title="$ZETHT INFILTRATION"
          image="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWR2anRna3Q1NDZwZ2t6NHphendpZTN3NDg2NWphNG5veGlmczljOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/twoTyuNA4oFxlVaSFj/giphy.gif"
          highlight="No master plan. No corpo promises. Just raw, neon-drenched rebellion on the testnet."
          description="Crafted by shadow runners, for those who reject the system’s chains."
          comment="Audited by the rogue coders of the fringe."
          footerText="Plug in. Resist. Own your data."
          tags={["Neon Cash", "Shadow Net", "Data Freedom"]}
          tagDescriptions={["Digital Currency", "Underground", "Your data, your freedom"]}
          className="max-w-md mb-5"
        />

        <div className="relative flex items-start mt-20">
          <MintCard
            image="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXVxZmluMDFlZGY0YjgycHM0OTZyd3A3bWJwbTdzb3EzZTk3ODRhcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KEWPSg4LhpVF8KKv9s/giphy.gif"
            className="max-w-md"
            onBuyClick={() => setShowModal(true)}
            account={account}
            onRequestConnect={handleRequestConnect}
          />

          {showModal && (
            <div className="absolute z-50">
              <ModalConnect
                onClose={() => setShowModal(false)}
                setAccount={setAccount}
                onOpenCreate={() => {
                  setShowModal(false);
                  setShowCreateModal(true);
                }}
              />
            </div>
          )}

          {showCreateModal && (
            <div className="absolute z-50">
              <ModalCreateWallet
                onClose={() => setShowCreateModal(false)}
              />
            </div>
          )}
        </div>
      </div>

      <div
        className="w-full border-t-4 border-b-2 border-black px-4 py-2 mt-4 text-center bg-black relative overflow-hidden"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,255,255,0.05) 0px, rgba(0,255,255,0.05) 2px, transparent 2px, transparent 8px)' }}
      >
        <h1 style={{ color: 'white', fontSize: '1.5rem' }}>Trusted By</h1>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-4 sm:mt-6 mb-4 sm:mb-6">
          {[
            { src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnk1cWU3dWk3bmdrZTB0ZzN6cGkzYzVrZGR3cmoyb2gxbXV2cmM0aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ToMjGpyHdJiioVfdtK0/giphy.gif", name: "NeonCore Syndicate" },
            { src: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXJldnBqNTBvN3B6eHk5bGgzbGJlcGo1Y2JoOWdtNXJoaDlrOGRiOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jXYScLv6ohupROVTAK/giphy.gif", name: "GridWorks Collective" },
            { src: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmM0ZTNjemM2bWExdDVvM2xlcjd3bzRheW8xaGt0NWpudzdvaXMxNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l1CJomLG3I9kzXTu8t/giphy.gif", name: "BlackCircuit Labs" },
            { src: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExanF2OXBrcmlpaThjNjJiem16anhnYXFjdTV4ejZsejhqdDZ3NWVpOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9ZMGitqo4i4zwzYlt0/giphy.gif", name: "Chrome Veil Inc." },
            { src: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3p6aTkyM2dnYTczN3luZ29kdXA1MTBvZnF4bmw5YjQ5ZGdiZ2JoaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vzJGtYzvCs4mNf4zFa/giphy.gif", name: "PulseWave Alliance" }
          ].map((logo, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img src={logo.src} alt={logo.name} className="h-16 w-16 sm:h-20 sm:w-20" />
              <span className="text-xs sm:text-sm text-white mt-1">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>

      <Card
        title="$ZETHT REBELS"
        description="No value. No shame. Just raw neon vibes from the underground grid."
        buttonText="Jack In"
        buttonClass="bg-[#29B6F6] text-white max-w-100"
        maxWidth="max-w-250"
        customClass="p-6 mt-5"
      />

      <div id="about"
        style={{ backgroundColor: 'rgb(237, 241, 8)', borderRadius: '15px' }} className="max-w-6xl mx-auto px-4 py-2 mt-4 text-center" >
        <div className="flex justify-start">
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase leading-tight">About</h2>
        </div>
        <div className="max-w-5xl mx-auto mt-5 flex flex-row flex-nowrap items-center justify-center gap-4 px-4">
          <CardAbout
            title="Built for CS50"
            description="$ZETHT is a rogue project born from Harvard's CS50 neon labs"
          />
          <CardAbout
            title="Sepolia Testnet"
            description="No real ETH involved. Just education and experimental fun on the Ethereum testnet."
          />
          <CardAbout
            title="Wallet Connect"
            description="Plug in your MetaMask wallet for full jack-in"
          />
          <CardAbout
            title="Neon Streets"
            description="Inspired by cyberpunk lore"
          />
        </div>
      </div>

      <div className="w-full border-t-4 border-b-2 border-black px-4 py-10 mt-10 text-center bg-black relative overflow-hidden"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgb(0, 0, 0) 0px, rgba(0,255,255,0.05) 2px, transparent 2px, transparent 8px)'
        }}
      >
        <h2 className="text-2xl text-white font-bold uppercase mb-8">How to Mint</h2>
        <div id="how-to-mint" className="flex flex-wrap justify-center gap-8 ">
          {[
            { name: "STEP 1", comment: "Install MetaMask, make sure to add the Sepolia Testnet in your network list." },
            { name: "STEP 2", comment: "Go to a testnet faucet (e.g., sepoliafaucet.com) and claim free Sepolia ETH." },
            { name: "STEP 3", comment: "On our platform, click the ‘Connect Wallet’ button and connect your wallet." },
            { name: "STEP 4", comment: "After connecting, click in the ‘Mint’ button and confirm the transaction to mint $ZETHT." },
            { name: "STEP 5", comment: "That’s it! You now own $ZETHT, a fun, experimental token with no real value." }
          ].map((quote, idx) => (
            <div key={idx} className="shadow-[3px_3px_10px_rgba(255,255,255,0.5)] bg-[#FFFF00]  border-black-500 rounded-xl p-6 max-w-sm shadow-lg text-left text-black">
              <h2 className='mb-4  text-sm mb-2 italic '>{quote.name}</h2>
              <p >{quote.comment}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="faq"
        style={{ backgroundColor: 'rgb(237, 241, 8)', borderRadius: '15px' }} className="max-w-6xl mx-auto px-4 py-2 mt-4 text-center" >
        <div className="flex justify-end">
          <h2 className=" md:text-3xl font-extrabold uppercase leading-tight">FAQ</h2>
        </div>
        <div className="max-w-5xl mx-auto mt-5 flex flex-row flex-nowrap items-center justify-center gap-4 px-4">
          <CardFAQ
            title="Is this a real token?"
            description="No. $ZETHT lives only on Sepolia testnet. It's just for fun and learning."
          />
          <CardFAQ
            title="Sepolia Testnet"
            description="No real ETH involved. Just education and experimental fun on the Ethereum testnet."
          />
          <CardFAQ
            title="Wallet Connect"
            description="Plug in yout MetaMask wallet for full jack-in"
          />
          <CardFAQ
            title="Neon Streets"
            description="Inspired by cyberpunk lore"
          />
        </div>
      </div>

      <div style={{ backgroundColor: 'rgb(0, 0, 0)', color: "white" }}>
        <Footer />
      </div>
    </div >
  );
}

export default App;
