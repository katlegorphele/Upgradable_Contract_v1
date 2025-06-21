const { ethers, upgrades } = require("hardhat");

async function main() {

const V1 = await ethers.getContractFactory("v1");
  const proxy = await upgrades.deployProxy(V1, [55], {
    initializer: "initialise",
  });

  await proxy.waitForDeployment();

  // console.log("Proxy deployed to:", proxy.address);
  console.log(`Proxy deployed to ${proxy.target}`);

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});