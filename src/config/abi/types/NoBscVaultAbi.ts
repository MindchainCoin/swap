/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface NoBscVaultAbiInterface extends utils.Interface {
  functions: {
    "BSC_CHAIN_ID()": FunctionFragment;
    "CROSS_FARMING_BSC_CONTRACT()": FunctionFragment;
    "CROSS_FARMING_ETH_CONTRACT()": FunctionFragment;
    "add(address,uint256)": FunctionFragment;
    "deposit(uint256,uint256)": FunctionFragment;
    "emergencyWithdraw(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "poolInfo(uint256)": FunctionFragment;
    "poolLength()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "updateCrossFarmingParams(address,address,uint8)": FunctionFragment;
    "updatePoolInfo(uint256,uint256)": FunctionFragment;
    "userInfo(uint256,address)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BSC_CHAIN_ID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CROSS_FARMING_BSC_CONTRACT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CROSS_FARMING_ETH_CONTRACT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "add",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "poolInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "poolLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateCrossFarmingParams",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePoolInfo",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userInfo",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "BSC_CHAIN_ID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CROSS_FARMING_BSC_CONTRACT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CROSS_FARMING_ETH_CONTRACT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateCrossFarmingParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePoolInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Deposit(address,uint256,uint256,uint256)": EventFragment;
    "EmergencyWithdraw(address,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Pause()": EventFragment;
    "Paused(address)": EventFragment;
    "Unpause()": EventFragment;
    "Unpaused(address)": EventFragment;
    "UpdateCrossFarmingParams(address,address,address,uint8)": EventFragment;
    "UpdatePoolInfo(address,uint256)": EventFragment;
    "Withdraw(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EmergencyWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Pause"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpause"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateCrossFarmingParams"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdatePoolInfo"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type DepositEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  {
    sender: string;
    pid: BigNumber;
    amount: BigNumber;
    lastDepositedTime: BigNumber;
  }
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export type EmergencyWithdrawEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { sender: string; pid: BigNumber; amount: BigNumber }
>;

export type EmergencyWithdrawEventFilter =
  TypedEventFilter<EmergencyWithdrawEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type PauseEvent = TypedEvent<[], {}>;

export type PauseEventFilter = TypedEventFilter<PauseEvent>;

export type PausedEvent = TypedEvent<[string], { account: string }>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export type UnpauseEvent = TypedEvent<[], {}>;

export type UnpauseEventFilter = TypedEventFilter<UnpauseEvent>;

export type UnpausedEvent = TypedEvent<[string], { account: string }>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export type UpdateCrossFarmingParamsEvent = TypedEvent<
  [string, string, string, number],
  {
    sender: string;
    ethCrossFarming: string;
    bscCrossFarming: string;
    chainId: number;
  }
>;

export type UpdateCrossFarmingParamsEventFilter =
  TypedEventFilter<UpdateCrossFarmingParamsEvent>;

export type UpdatePoolInfoEvent = TypedEvent<
  [string, BigNumber],
  { lpToken: string; mockPoolId: BigNumber }
>;

export type UpdatePoolInfoEventFilter = TypedEventFilter<UpdatePoolInfoEvent>;

export type WithdrawEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { sender: string; pid: BigNumber; amount: BigNumber }
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface NoBscVaultAbi extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NoBscVaultAbiInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    BSC_CHAIN_ID(overrides?: CallOverrides): Promise<[number]>;

    CROSS_FARMING_BSC_CONTRACT(overrides?: CallOverrides): Promise<[string]>;

    CROSS_FARMING_ETH_CONTRACT(overrides?: CallOverrides): Promise<[string]>;

    add(
      _lpToken: string,
      _mockPoolId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emergencyWithdraw(
      _pid: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber] & {
        lpToken: string;
        mockPoolId: BigNumber;
        totalAmount: BigNumber;
      }
    >;

    poolLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateCrossFarmingParams(
      _ethCrossFarming: string,
      _bscCrossFarming: string,
      _chainId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updatePoolInfo(
      _pid: BigNumberish,
      _mockPoolId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        amount: BigNumber;
        lastDepositedTime: BigNumber;
      }
    >;

    withdraw(
      _pid: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  BSC_CHAIN_ID(overrides?: CallOverrides): Promise<number>;

  CROSS_FARMING_BSC_CONTRACT(overrides?: CallOverrides): Promise<string>;

  CROSS_FARMING_ETH_CONTRACT(overrides?: CallOverrides): Promise<string>;

  add(
    _lpToken: string,
    _mockPoolId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    _pid: BigNumberish,
    _amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emergencyWithdraw(
    _pid: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  poolInfo(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber] & {
      lpToken: string;
      mockPoolId: BigNumber;
      totalAmount: BigNumber;
    }
  >;

  poolLength(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateCrossFarmingParams(
    _ethCrossFarming: string,
    _bscCrossFarming: string,
    _chainId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updatePoolInfo(
    _pid: BigNumberish,
    _mockPoolId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userInfo(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { amount: BigNumber; lastDepositedTime: BigNumber }
  >;

  withdraw(
    _pid: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BSC_CHAIN_ID(overrides?: CallOverrides): Promise<number>;

    CROSS_FARMING_BSC_CONTRACT(overrides?: CallOverrides): Promise<string>;

    CROSS_FARMING_ETH_CONTRACT(overrides?: CallOverrides): Promise<string>;

    add(
      _lpToken: string,
      _mockPoolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    emergencyWithdraw(
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber] & {
        lpToken: string;
        mockPoolId: BigNumber;
        totalAmount: BigNumber;
      }
    >;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    updateCrossFarmingParams(
      _ethCrossFarming: string,
      _bscCrossFarming: string,
      _chainId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updatePoolInfo(
      _pid: BigNumberish,
      _mockPoolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        amount: BigNumber;
        lastDepositedTime: BigNumber;
      }
    >;

    withdraw(_pid: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Deposit(address,uint256,uint256,uint256)"(
      sender?: string | null,
      pid?: null,
      amount?: null,
      lastDepositedTime?: null
    ): DepositEventFilter;
    Deposit(
      sender?: string | null,
      pid?: null,
      amount?: null,
      lastDepositedTime?: null
    ): DepositEventFilter;

    "EmergencyWithdraw(address,uint256,uint256)"(
      sender?: string | null,
      pid?: null,
      amount?: null
    ): EmergencyWithdrawEventFilter;
    EmergencyWithdraw(
      sender?: string | null,
      pid?: null,
      amount?: null
    ): EmergencyWithdrawEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Pause()"(): PauseEventFilter;
    Pause(): PauseEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "Unpause()"(): UnpauseEventFilter;
    Unpause(): UnpauseEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;

    "UpdateCrossFarmingParams(address,address,address,uint8)"(
      sender?: string | null,
      ethCrossFarming?: null,
      bscCrossFarming?: null,
      chainId?: null
    ): UpdateCrossFarmingParamsEventFilter;
    UpdateCrossFarmingParams(
      sender?: string | null,
      ethCrossFarming?: null,
      bscCrossFarming?: null,
      chainId?: null
    ): UpdateCrossFarmingParamsEventFilter;

    "UpdatePoolInfo(address,uint256)"(
      lpToken?: string | null,
      mockPoolId?: null
    ): UpdatePoolInfoEventFilter;
    UpdatePoolInfo(
      lpToken?: string | null,
      mockPoolId?: null
    ): UpdatePoolInfoEventFilter;

    "Withdraw(address,uint256,uint256)"(
      sender?: string | null,
      pid?: null,
      amount?: null
    ): WithdrawEventFilter;
    Withdraw(
      sender?: string | null,
      pid?: null,
      amount?: null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    BSC_CHAIN_ID(overrides?: CallOverrides): Promise<BigNumber>;

    CROSS_FARMING_BSC_CONTRACT(overrides?: CallOverrides): Promise<BigNumber>;

    CROSS_FARMING_ETH_CONTRACT(overrides?: CallOverrides): Promise<BigNumber>;

    add(
      _lpToken: string,
      _mockPoolId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emergencyWithdraw(
      _pid: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateCrossFarmingParams(
      _ethCrossFarming: string,
      _bscCrossFarming: string,
      _chainId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updatePoolInfo(
      _pid: BigNumberish,
      _mockPoolId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      _pid: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BSC_CHAIN_ID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CROSS_FARMING_BSC_CONTRACT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CROSS_FARMING_ETH_CONTRACT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    add(
      _lpToken: string,
      _mockPoolId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emergencyWithdraw(
      _pid: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateCrossFarmingParams(
      _ethCrossFarming: string,
      _bscCrossFarming: string,
      _chainId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updatePoolInfo(
      _pid: BigNumberish,
      _mockPoolId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      _pid: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
