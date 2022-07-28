import * as web3 from "@solana/web3.js"
import { TOKEN_PROGRAM_ID } from "@solana/spl-token"
const wallet = "2cTsA8sEz25Bm5vgdKKddKCa4Vs7KycyJGAqZBxcg74n"

async function main() {
	const connection = new web3.Connection('https://api.mainnet-beta.solana.com');
	const filters = [
	  {
	  	dataSize: 165
	  },
	  {
	  	memcmp: {
	  		offset: 32,
	  		bytes: wallet,
	  	}
	  }
	]

	const tokenAccounts = await connection.getParsedProgramAccounts(
		TOKEN_PROGRAM_ID,
		{ filters }
	);

	tokenAccounts.forEach((account, i) => {
		const parsedAccountInfo = account.account.data
		const address = parsedAccountInfo
		console.log(parsedAccountInfo)
	})
}

main();