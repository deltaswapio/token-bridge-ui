import {Adapter} from "@solana/wallet-adapter-base";
import {ConnectionProvider, useWallet, WalletProvider,} from "@solana/wallet-adapter-react";
import {
    BackpackWalletAdapter,
    CloverWalletAdapter,
    Coin98WalletAdapter,
    ExodusWalletAdapter,
    NightlyWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    SolletExtensionWalletAdapter,
    SolletWalletAdapter,
    SolongWalletAdapter,
    TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import {FC, useMemo} from "react";
import {CLUSTER, SOLANA_HOST} from "../utils/consts";
type Props = {
  children: React.ReactNode
}

export const SolanaWalletProvider: FC<Props> = (props) => {
  const wallets = useMemo(() => {
    const wallets: Adapter[] = [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new BackpackWalletAdapter(),
      new NightlyWalletAdapter(),
      new SolletWalletAdapter(),
      new SolletExtensionWalletAdapter(),
      new CloverWalletAdapter(),
      new Coin98WalletAdapter(),
      new SlopeWalletAdapter(),
      new SolongWalletAdapter(),
      new TorusWalletAdapter(),
      new ExodusWalletAdapter(),
    ];
    if (CLUSTER === "testnet") {
      wallets.push(
        //new BloctoWalletAdapter({ network: WalletAdapterNetwork.Devnet })
      );
    }
    return wallets;
  }, []);

  return (
    <ConnectionProvider endpoint={SOLANA_HOST}>
      <WalletProvider wallets={wallets} autoConnect>
        {props.children}
      </WalletProvider>
    </ConnectionProvider>
  );
};

export const useSolanaWallet = useWallet;
