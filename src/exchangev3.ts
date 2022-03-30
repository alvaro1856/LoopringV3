import { AccountCreated } from "../generated/templates/ExchangeV3/ExchangeV3";
import { BigInt } from "@graphprotocol/graph-ts";
import { 
    getOrCreateExchange,
    getOrCreateAccount 
} from "./helpers";

export function handleAccountCreated(event: AccountCreated): void {
    let accountId = event.address
        .toHexString()
        .concat("-")
        .concat(BigInt.fromI32(event.params.id).toString());
    let account = getOrCreateAccount(accountId);

    account.exchange = event.address.toHexString();
    account.internalId = event.params.id;
    account.pubKeyX = event.params.pubKeyX;
    account.pubKeyY = event.params.pubKeyY;

    account.save();
}
