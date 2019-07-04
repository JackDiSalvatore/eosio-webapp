import React from "react";
import { Api, JsonRpc } from "eosjs";
import ScatterJS from "@scatterjs/core";
import ScatterEOS from "@scatterjs/eosjs2"; // Use eosjs2 if your version of eosjs is > 16


// eosio endpoint
// const endpoint = "https://junglehistory.cryptolions.io:443"; // Jungle2 full node
// const endpoint = "https://jungle2.cryptolions.io:443"; // Jungle2

// Networks are used to reference certain blockchains.
// They let you get accounts and help you build signature providers.
// const network = {
// 	blockchain: "eos",
// 	protocol: "https",
// 	host: "junglehistory.cryptolions.io",
// 	port: 80,
// 	// chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906" // EOS Main Net
// 	chainId: "e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473" // Jungle
// };


class EOSIOClient extends React.Component {
	constructor(contractAccount, endpoint, chainInfo) {
	// constructor(contractAccount) {
		super(contractAccount);

		this.contractAccount = contractAccount;
		this.account = null;
		this.endpoint = endpoint;

		// console.log(endpoint)
		// console.log(chainInfo.chain_id)

		var networkPattern = /(^https):\/\/(.*):([0-9]+)/
		var networkArray = networkPattern.exec(endpoint)
		// console.log(networkArray)

		this.network = {
			blockchain: "eos",
			protocol: networkArray[1], //"https",
			host: networkArray[2], //"jungle2.cryptolions.io",
			port: parseInt(networkArray[3]), //443,
			// chainId: "e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473" // Jungle
			chainId: chainInfo.chain_id // Jungle
		};
		
		// Don't forget to tell ScatterJS which plugins you are using.
		ScatterJS.plugins(new ScatterEOS());

		// Can implement this into Redux using dispatch(setScatter(ScatterJS.scatter));
		try {
			ScatterJS.scatter.connect(this.contractAccount).then(connected => {
				// User does not have Scatter Desktop, Mobile or Classic installed.
				if (!connected) return console.log("Issue Connecting");

				const scatter = ScatterJS.scatter;

				const requiredFields = {
					accounts: [this.network]
				};
				scatter.getIdentity(requiredFields).then(() => {
					// Always use the accounts you got back from Scatter. Never hardcode them even if you are prompting
					// the user for their account name beforehand. They could still give you a different account.
					this.account = scatter.identity.accounts.find(
						x => x.blockchain === "eos"
					);

					const eosOptions = { expireInSeconds:60 };

					// Get a proxy reference to eosjs which you can use to sign transactions with a user's Scatter.
					this.rpc = new JsonRpc(endpoint);
					this.eos = scatter.eos(this.network, Api, { rpc: this.rpc }, eosOptions );
				});

				window.ScatterJS = null;
			});
		} catch (error) {
			console.log(error);
		}
	}

	hello = () => {
		console.log('Hello ' + this.account.name)
	}

	transaction = (action, data) => {
		return this.eos.transact(
			{
				actions: [
					{
						account: this.contractAccount,
						name: action,
						authorization: [
							{
								actor: this.account.name,
								permission: this.account.authority
							}
						],
						data: {
							...data
						}
					}
				]
			},
			{
				blocksBehind: 3,
				expireSeconds: 30
			}
		);
	};
}

  
export default EOSIOClient;
