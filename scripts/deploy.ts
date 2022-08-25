import { ethers } from "hardhat";

async function main() {
  const Todo = await ethers.getContractFactory("TodoList");
  const todo = await Todo.deploy();

  await todo.deployed();

  console.log(`Todo deployed to ${todo.address}`);
  // contract address on rinkeby : 0x2683B6cD1F529F424A1d596d6A9292097d47FccA
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
