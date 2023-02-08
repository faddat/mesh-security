/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.19.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Decimal = string;
export interface InstantiateMsg {
  ics20_channel: string;
  meta_staking_contract_address: string;
  packet_lifetime?: number | null;
  provider: ProviderInfo;
  remote_to_local_exchange_rate: Decimal;
}
export interface ProviderInfo {
  connection_id: string;
  port_id: string;
}
export type ExecuteMsg = {
  mesh_consumer_recieve_rewards_msg: {
    validator: string;
  };
};
export type QueryMsg = {
  config: {};
};
export type Addr = string;
export interface Config {
  ics20_channel: string;
  meta_staking_contract_address: Addr;
  provider: ProviderInfo;
  remote_to_local_exchange_rate: Decimal;
}