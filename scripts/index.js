// scripts/index.js

var box = null

async function setup() {
    // Set up an ethers contract, representing our deployed Box instance
    const localAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    const rinkebyAddress = '0x8413F1153504d7D2074D39CbAb379Ca87bf4Cb39';
    const Box = await ethers.getContractFactory('Box');
    box = await Box.attach(rinkebyAddress);
}

async function sendTransactiontoStore() {
    // Send a transaction to store() a new value in the Box
    await box.store(69);
}

async function fetchAccounts() {
    // Retrieve accounts from the local node
    const accounts = await ethers.provider.listAccounts();
    console.log(accounts);
}

async function printBoxValue() {
    // Call the retrieve() function of the deployed Box contract
    const value = await box.retrieve();
    console.log('Box value is', value.toString());
}



async function main () {
    await setup();
    await fetchAccounts();
}
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });