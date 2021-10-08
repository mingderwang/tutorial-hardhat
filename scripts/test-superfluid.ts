// test-superfluid.ts
const { alchemyApiKey, privateKey, infuraProjectId, etherscanApiKey } = require('../.secrets.json');

const { ethers } = require("hardhat");

const SuperfluidSDK = require("@superfluid-finance/js-sdk");

const network = "rinkeby";

const provider = ethers.getDefaultProvider(network, {
    etherscan: etherscanApiKey,
    infura: infuraProjectId,
    // Or if using a project secret:
    // infura: {
    //   projectId: YOUR_INFURA_PROJECT_ID,
    //   projectSecret: YOUR_INFURA_PROJECT_SECRET,
    // },
    alchemy: alchemyApiKey,
    //pocket: YOUR_POCKET_APPLICATION_KEY
    // Or if using an application secret key:
    // pocket: {
    //   applicationId: ,
    //   applicationSecretKey:
    // }
});
console.log(provider)

async function main() {
const sf = new SuperfluidSDK.Framework({
            ethers: provider,
            version: "v1", //"test"
            tokens: ["fDAI"]
        });


await sf.initialize()
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
