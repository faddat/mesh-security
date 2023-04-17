/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { InstantiateMsg, ExecuteMsg, Uint128, QueryMsg, BalanceResponse, Lein } from "./MeshVault.types";
export interface MeshVaultReadOnlyInterface {
  contractAddress: string;
  balance: ({
    account
  }: {
    account: string;
  }) => Promise<BalanceResponse>;
}
export class MeshVaultQueryClient implements MeshVaultReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.balance = this.balance.bind(this);
  }

  balance = async ({
    account
  }: {
    account: string;
  }): Promise<BalanceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      balance: {
        account
      }
    });
  };
}
export interface MeshVaultInterface extends MeshVaultReadOnlyInterface {
  contractAddress: string;
  sender: string;
  bond: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  unbond: ({
    amount
  }: {
    amount: Uint128;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  grantClaim: ({
    amount,
    leinholder,
    validator
  }: {
    amount: Uint128;
    leinholder: string;
    validator: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  releaseClaim: ({
    amount,
    owner
  }: {
    amount: Uint128;
    owner: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  slashClaim: ({
    amount,
    owner
  }: {
    amount: Uint128;
    owner: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export class MeshVaultClient extends MeshVaultQueryClient implements MeshVaultInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.bond = this.bond.bind(this);
    this.unbond = this.unbond.bind(this);
    this.grantClaim = this.grantClaim.bind(this);
    this.releaseClaim = this.releaseClaim.bind(this);
    this.slashClaim = this.slashClaim.bind(this);
  }

  bond = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      bond: {}
    }, fee, memo, funds);
  };
  unbond = async ({
    amount
  }: {
    amount: Uint128;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      unbond: {
        amount
      }
    }, fee, memo, funds);
  };
  grantClaim = async ({
    amount,
    leinholder,
    validator
  }: {
    amount: Uint128;
    leinholder: string;
    validator: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      grant_claim: {
        amount,
        leinholder,
        validator
      }
    }, fee, memo, funds);
  };
  releaseClaim = async ({
    amount,
    owner
  }: {
    amount: Uint128;
    owner: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      release_claim: {
        amount,
        owner
      }
    }, fee, memo, funds);
  };
  slashClaim = async ({
    amount,
    owner
  }: {
    amount: Uint128;
    owner: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      slash_claim: {
        amount,
        owner
      }
    }, fee, memo, funds);
  };
}