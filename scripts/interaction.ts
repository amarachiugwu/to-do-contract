import { ethers } from "hardhat";

async function main() {
  const Todo = await ethers.getContractFactory("TodoList");
  const todo = Todo.attach("0x2683B6cD1F529F424A1d596d6A9292097d47FccA");

//   const createTxn = await todo.create('eat');
//   const createTxnReciept = await createTxn.wait();

//   console.log("created todo: ", createTxnReciept);

// const updateTxn = await todo.update(0, "read");
// const updateTxnReciept = await updateTxn.wait();

// console.log("updated todo: ", updateTxnReciept);

const toggleTxn = await todo.toggleTask(0);
const toggleTxnReciept = await toggleTxn.wait();

console.log("Task toggle", toggleTxnReciept);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
