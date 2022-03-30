import { ExchangeInitialized } from "../generated/LoopringV3/LoopringV3";
import { BigInt } from "@graphprotocol/graph-ts";
import { ExchangeV3 } from "../generated/templates/ExchangeV3/ExchangeV3";
import {
    getOrCreateExchange
} from "../src/helpers";

export function handleExchangeInitialized(event: ExchangeInitialized): void {
    let exchange = getOrCreateExchange(
        event.params.exchangeAddress.toHexString()
    );

    exchange.onChainDataAvailability = event.params.onchainDataAvailability;
    exchange.owner = event.params.owner;
    exchange.operator = event.params.operator;
    exchange.internalId = event.params.exchangeId;

    exchange.save();

    ExchangeV3.create(event.params.exchangeAddress);
}