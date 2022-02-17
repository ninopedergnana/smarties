// scripts/index.js

var box = null

async function setup() {
    // Set up an ethers contract, representing our deployed Box instance
    const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    const Box = await ethers.getContractFactory('Box');
    box = await Box.attach(address);
}

async function sendTransactiontoStore() {
    // Send a transaction to store() a new value in the Box
    await box.store(23);
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