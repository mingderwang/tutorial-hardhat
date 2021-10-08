# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

# for Superfluid
```shell
cp .secrets.json.example .secrets.json
```
> please modify for your own keys
```
cat .secrets.js
{
   "infuraProjectId": "68e9ddf037830185",
   "etherscanApiKey": "IYCTRKFJDZYT25A4",
   "bscscanApiKey": "8STPU6H6F756UBY9ND",
   "privateKey": "58dc50f0863a2fb911576",
   "deployer_address": "0c6efE284a7cf46",
   "alchemyApiKey": "gaW_kfYzX3WOA-YwSX"
}
```
then
```shell
npx hardhat run scripts/test-superfluid.ts
```

