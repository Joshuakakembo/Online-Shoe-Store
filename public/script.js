const momo = require("mtn-momo");
 
const { Collections } = momo.create({
  callbackHost: process.env.classicshoesug.com
});
 
const collections = Collections({
  userSecret: process.env.a2d39701e47f4aee85ba8101df4b66b0,
  userId: process.env.2e432040-6629-4aa2-bce7-7650e27c6d38,
  primaryKey: process.env.58556a8c50064cf1ac32fb3898a35337
});
 
// Request to pay
collections
  .requestToPay({
    amount: "50",
    currency: "EUR",
    externalId: "123456",
    payer: {
      partyIdType: "MSISDN",
      partyId: "256774290781"
    },
    payerMessage: "testing",
    payeeNote: "hello"
  })
  .then(transactionId => {
    console.log({ transactionId });
 
    // Get transaction status
    return collections.getTransaction(transactionId);
  })
  .then(transaction => {
    console.log({ transaction });
 
    // Get account balance
    return collections.getBalance();
  })
  .then(accountBalance => console.log({ accountBalance }))
  .catch(error => {
    console.log(error);
  });