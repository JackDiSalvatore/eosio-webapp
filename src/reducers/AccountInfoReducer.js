
const initialState = {
  account_name: "testacc",
  core_liquid_balance: "25.8044 EOS",
  head_block_num: 1079,
  head_block_time: "2018-11-10T00:45:53.500",
  privileged: false,
  last_code_update: "1970-01-01T00:00:00.000",
  created: "2018-11-10T00:37:05.000",
  ram_quota: -1,
  net_weight: -1,
  cpu_weight: -1,
  net_limit: { used: -1, available: -1, max: -1 },
  cpu_limit: { used: -1, available: -1, max: -1 },
  ram_usage: 2724,
  permissions: [
    { 
      perm_name: "active",
      parent: "owner",
      required_auth: {
        accounts: [
          {
            actor: "",
            permission: "",
            weight: 0,
          }
        ],
        keys: [
          {
            key: "",
            weight: 0,
          }
        ],
        threshold: 0,
        waits: [
          {
            wait_sec: 0,
            weight: 0,
          }
        ]
      }
    } 
  ],
  total_resources: {
    cpu_weight: "10.5481 EOS",
    net_weight: "10.5482 EOS",
    owner: "eosio",
    ram_bytes: 14021,
  },
  self_delegated_bandwidth: {
    cpu_weight: "10.5481 EOS",
    from: "eosio",
    net_weight: "10.5482 EOS",
    to: "eosio"
  },
  refund_request: {
    cpu_amount: "0.0000 EOS",
    net_amount: "880.0000 EOS",
    owner: "eosio",
    request_time: "2019-05-15T12:25:29"
  },
  voter_info: {
    flags1: 0,
    is_proxy:0,
    last_vote_weight: "6335582760066.02734375000000000",
    owner: "testacc",
    producers: ["1eostheworld"],
    proxied_vote_weight: "0.00000000000000000",
    proxy: "",
    reserved2: 0,
    reserved3: "0.0000 EOS",
    staked: 9012760
  }
}


export default function(state = initialState, action) {
  switch(action.type) {
    case 'SET_ACCOUNT': {
      // console.log(action)
      // return Object.assign({}, state, action.payload)
      return action.payload
    }
  }

  return state;
}