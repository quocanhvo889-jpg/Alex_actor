const Apify = require('apify');
Apify.main(async () => {
  const input = await Apify.getInput();
  const cmd = input.command;
  const args = input.args || {};
  let result;
  if (cmd === 'balance') result = { accountId: args.accountId, balance: 1250.75 };
  else if (cmd === 'transfer') result = { from: args.fromAccount, to: args.toAccount, amount: args.amount };
  else if (cmd === 'health') result = { status: 'ok' };
  else result = { error: 'unknown command' };
  await Apify.pushData(result);
});