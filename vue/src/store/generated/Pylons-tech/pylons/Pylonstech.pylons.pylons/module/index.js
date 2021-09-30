// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSetItemString } from "./types/pylons/tx";
import { MsgUpdateAccount } from "./types/pylons/tx";
import { MsgSendItems } from "./types/pylons/tx";
import { MsgFulfillTrade } from "./types/pylons/tx";
import { MsgUpdateRecipe } from "./types/pylons/tx";
import { MsgCompleteExecutionEarly } from "./types/pylons/tx";
import { MsgGoogleInAppPurchaseGetCoins } from "./types/pylons/tx";
import { MsgCreateAccount } from "./types/pylons/tx";
import { MsgTransferCookbook } from "./types/pylons/tx";
import { MsgCancelTrade } from "./types/pylons/tx";
import { MsgExecuteRecipe } from "./types/pylons/tx";
import { MsgUpdateCookbook } from "./types/pylons/tx";
import { MsgCreateTrade } from "./types/pylons/tx";
import { MsgCreateRecipe } from "./types/pylons/tx";
import { MsgCreateCookbook } from "./types/pylons/tx";
const types = [
    ["/Pylonstech.pylons.pylons.MsgSetItemString", MsgSetItemString],
    ["/Pylonstech.pylons.pylons.MsgUpdateAccount", MsgUpdateAccount],
    ["/Pylonstech.pylons.pylons.MsgSendItems", MsgSendItems],
    ["/Pylonstech.pylons.pylons.MsgFulfillTrade", MsgFulfillTrade],
    ["/Pylonstech.pylons.pylons.MsgUpdateRecipe", MsgUpdateRecipe],
    ["/Pylonstech.pylons.pylons.MsgCompleteExecutionEarly", MsgCompleteExecutionEarly],
    ["/Pylonstech.pylons.pylons.MsgGoogleInAppPurchaseGetCoins", MsgGoogleInAppPurchaseGetCoins],
    ["/Pylonstech.pylons.pylons.MsgCreateAccount", MsgCreateAccount],
    ["/Pylonstech.pylons.pylons.MsgTransferCookbook", MsgTransferCookbook],
    ["/Pylonstech.pylons.pylons.MsgCancelTrade", MsgCancelTrade],
    ["/Pylonstech.pylons.pylons.MsgExecuteRecipe", MsgExecuteRecipe],
    ["/Pylonstech.pylons.pylons.MsgUpdateCookbook", MsgUpdateCookbook],
    ["/Pylonstech.pylons.pylons.MsgCreateTrade", MsgCreateTrade],
    ["/Pylonstech.pylons.pylons.MsgCreateRecipe", MsgCreateRecipe],
    ["/Pylonstech.pylons.pylons.MsgCreateCookbook", MsgCreateCookbook],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgSetItemString: (data) => ({ typeUrl: "/Pylonstech.pylons.pylons.MsgSetItemString", value: data }),
        msgUpdateAccount: (data) => ({ typeUrl: "/Pylonstech.pylons.pylons.MsgUpdateAccount", value: data }),
        msgSendItems: (data) => ({ typeUrl: "/Pylonstech.pylons.pylons.MsgSendItems", value: data }),
        msgFulfillTrade: (data) => ({ typeUrl: "/Pylonstech.pylons.pylons.MsgFulfillTrade", value: data }),
        msgUpdateRecipe: (data) => ({ typeUrl: "/Pylonstech.pylons.pylons.MsgUpdateRecipe", value: data }),
        msgCompleteExecutionEarly: (data) => ({ typeUrl: "/Pylonstech.pylons.pylons.MsgCompleteExecutionEarly", value: data }),
        msgGoogleInAppPurchaseGetCoins: (data) => ({ typeUrl: "/Pylonstech.pylons.pylons.MsgGoogleInAppPurchaseGetCoins", value: data }),
        msgCreateAccount: (data) => ({ typeUrl: "/Pylonstech.pylons.pylons.MsgCreateAccount", value: data }),
        msgTransferCookbook: (data) => ({ typeUrl: "/Pylonstech.pylons.pylons.MsgTransferCookbook", value: data }),
        msgCancelTrade: (data) => ({ typeUrl: "/Pylonstech.pylons.pylons.MsgCancelTrade", value: data }),
        msgExecuteRecipe: (data) => ({ typeUrl: "/Pylonstech.pylons.pylons.MsgExecuteRecipe", value: data }),
        msgUpdateCookbook: (data) => ({ typeUrl: "/Pylonstech.pylons.pylons.MsgUpdateCookbook", value: data }),
        msgCreateTrade: (data) => ({ typeUrl: "/Pylonstech.pylons.pylons.MsgCreateTrade", value: data }),
        msgCreateRecipe: (data) => ({ typeUrl: "/Pylonstech.pylons.pylons.MsgCreateRecipe", value: data }),
        msgCreateCookbook: (data) => ({ typeUrl: "/Pylonstech.pylons.pylons.MsgCreateCookbook", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
