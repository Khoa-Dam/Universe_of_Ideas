import { getDefaultConfig, getDefaultWallets, } from '@rainbow-me/rainbowkit';
import {
    mainnet,
    sepolia,
    klaytn,
    klaytnBaobab,
} from 'wagmi/chains';

import { http } from 'wagmi';

import {
    trustWallet,
    ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';

const { wallets } = getDefaultWallets();
export const config = getDefaultConfig({
    appName: 'Ideas',
    projectId: '83cff9cefa1494107e94a9cb18b99ebc',
    wallets: [
        ...wallets,
        {
            groupName: 'Other',
            wallets: [trustWallet, ledgerWallet],
        },
    ],
    chains: [mainnet,
        sepolia,
        klaytn,
        klaytnBaobab,],
    transports: {
        // [mainnet.id]: http('https://eth-mainnet.g.alchemy.com/v2/...'),
        // [sepolia.id]: http('https://eth-sepolia.g.alchemy.com/v2/...'),
        [klaytn.id]: http('https://public-en.node.kaia.io'),
        [klaytnBaobab.id]: http('https://public-en-kairos.node.kaia.io'),
    },
    ssr: true,
});
