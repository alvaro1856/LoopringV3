import { 
    Account,
    Exchange
 } from "../generated/schema";
import { BigInt } from "@graphprotocol/graph-ts";
import { BigDecimal } from "@graphprotocol/graph-ts";


export { Account } from "../generated/schema";

export let BIGINT_ZERO = BigInt.fromI32(0);
export let BIGINT_ONE = BigInt.fromI32(1);
export let BIGDECIMAL_ZERO = new BigDecimal(BIGINT_ZERO);

export function getOrCreateAccount(
    id: string,
    createIfNotFound: boolean = true
  ): Account {
    let account = Account.load(id);
  
    if (account == null && createIfNotFound) {
      account = new Account(id);
    }
  
    return account as Account;
  }

export function getOrCreateExchange(
    id: string,
    createIfNotFound: boolean = true
  ): Exchange {
    let exchange = Exchange.load(id);
  
    if (exchange == null && createIfNotFound) {
      exchange = new Exchange(id);
      exchange.makerFeeBips = 0;
      exchange.takerFeeBips = 0;
      exchange.accountCreationFee = BIGINT_ZERO;
      exchange.accountUpdateFee = BIGINT_ZERO;
      exchange.depositFee = BIGINT_ZERO;
      exchange.withdrawalFee = BIGINT_ZERO;
      exchange.exchangeStake = BIGDECIMAL_ZERO;
      exchange.exchangeStakeRaw = BIGINT_ZERO;
      exchange.protocolStake = BIGDECIMAL_ZERO;
      exchange.protocolStakeRaw = BIGINT_ZERO;
      exchange.totalExchangeStakeBurned = BIGDECIMAL_ZERO;
      exchange.totalExchangeStakeBurnedRaw = BIGINT_ZERO;
      exchange.totalExchangeStakeDeposited = BIGDECIMAL_ZERO;
      exchange.totalExchangeStakeDepositedRaw = BIGINT_ZERO;
      exchange.totalExchangeStakeWithdrawn = BIGDECIMAL_ZERO;
      exchange.totalExchangeStakeWithdrawnRaw = BIGINT_ZERO;
      exchange.totalProtocolStakeDeposited = BIGDECIMAL_ZERO;
      exchange.totalProtocolStakeDepositedRaw = BIGINT_ZERO;
      exchange.totalProtocolStakeWithdrawn = BIGDECIMAL_ZERO;
      exchange.totalProtocolStakeWithdrawnRaw = BIGINT_ZERO;
    }
  
    return exchange as Exchange;
  }