# DDswap Interface

An open source interface for DDswap -- a protocol for decentralized exchange of Ethereum tokens.

- Website: [dsme.vip](https://www.dsme.vip/)
- Twitter: [@Decologys](https://twitter.com/Decologys)
- Email: [admin@dsme.vip](mailto:admin@dsme.vip)

## Listing a token

Please see the
[ddswap-default-token-list](https://github.com/decology/ddswap-default-token-list) 
repository.

### Install Dependencies

```bash
yarn
```

### Run

```bash
yarn start
```

### Configuring the environment (optional)

To have the interface default to a different network when a wallet is not connected:

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL` to e.g. `"https://{YOUR_NETWORK_ID}.infura.io/v3/{YOUR_INFURA_KEY}"` 

## Contributions

**Please open all pull requests against the `master` branch.** 
CI checks will run against all PRs.

