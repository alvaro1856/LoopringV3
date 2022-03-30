import { BigInt } from "@graphprotocol/graph-ts"
import {
  LoopringV3,
  ExchangeInitialized,
  ExchangeStakeDeposited
} from "../generated/LoopringV3/LoopringV3"
import {
  ExchangeV3,
  AccountCreated
} from "../generated/templates/ExchangeV3/ExchangeV3";
import {
  getOrCreateAccount,
  getOrCreateExchange
} from "../src/helpers";

export function handleExchangeInitialized(event: ExchangeInitialized): void {}
