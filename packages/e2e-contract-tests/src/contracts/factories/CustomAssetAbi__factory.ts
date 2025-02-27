/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.58.0
  Forc version: 0.44.0
  Fuel-Core version: 0.20.4
*/

import { Interface, Contract, ContractFactory } from 'fuels';
import type {
  Provider,
  Account,
  AbstractAddress,
  BytesLike,
  DeployContractOptions,
} from 'fuels';
import type {
  CustomAssetAbi,
  CustomAssetAbiInterface,
} from '../CustomAssetAbi';

const _abi = {
  types: [
    {
      typeId: 0,
      type: '()',
      components: [],
      typeParameters: null,
    },
    {
      typeId: 1,
      type: 'b256',
      components: null,
      typeParameters: null,
    },
    {
      typeId: 2,
      type: 'enum BurnError',
      components: [
        {
          name: 'NotEnoughTokens',
          type: 0,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 3,
      type: 'enum Identity',
      components: [
        {
          name: 'Address',
          type: 7,
          typeArguments: null,
        },
        {
          name: 'ContractId',
          type: 10,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 4,
      type: 'enum Option',
      components: [
        {
          name: 'None',
          type: 0,
          typeArguments: null,
        },
        {
          name: 'Some',
          type: 5,
          typeArguments: null,
        },
      ],
      typeParameters: [5],
    },
    {
      typeId: 5,
      type: 'generic T',
      components: null,
      typeParameters: null,
    },
    {
      typeId: 6,
      type: 'raw untyped ptr',
      components: null,
      typeParameters: null,
    },
    {
      typeId: 7,
      type: 'struct Address',
      components: [
        {
          name: 'value',
          type: 1,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 8,
      type: 'struct AssetId',
      components: [
        {
          name: 'value',
          type: 1,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 9,
      type: 'struct Bytes',
      components: [
        {
          name: 'buf',
          type: 11,
          typeArguments: null,
        },
        {
          name: 'len',
          type: 13,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 10,
      type: 'struct ContractId',
      components: [
        {
          name: 'value',
          type: 1,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 11,
      type: 'struct RawBytes',
      components: [
        {
          name: 'ptr',
          type: 6,
          typeArguments: null,
        },
        {
          name: 'cap',
          type: 13,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 12,
      type: 'struct String',
      components: [
        {
          name: 'bytes',
          type: 9,
          typeArguments: null,
        },
      ],
      typeParameters: null,
    },
    {
      typeId: 13,
      type: 'u64',
      components: null,
      typeParameters: null,
    },
    {
      typeId: 14,
      type: 'u8',
      components: null,
      typeParameters: null,
    },
  ],
  functions: [
    {
      inputs: [
        {
          name: 'asset',
          type: 8,
          typeArguments: null,
        },
      ],
      name: 'decimals',
      output: {
        name: '',
        type: 4,
        typeArguments: [
          {
            name: '',
            type: 14,
            typeArguments: null,
          },
        ],
      },
      attributes: [
        {
          name: 'storage',
          arguments: ['read'],
        },
      ],
    },
    {
      inputs: [
        {
          name: 'asset',
          type: 8,
          typeArguments: null,
        },
      ],
      name: 'name',
      output: {
        name: '',
        type: 4,
        typeArguments: [
          {
            name: '',
            type: 12,
            typeArguments: null,
          },
        ],
      },
      attributes: [
        {
          name: 'storage',
          arguments: ['read'],
        },
      ],
    },
    {
      inputs: [
        {
          name: 'asset',
          type: 8,
          typeArguments: null,
        },
      ],
      name: 'symbol',
      output: {
        name: '',
        type: 4,
        typeArguments: [
          {
            name: '',
            type: 12,
            typeArguments: null,
          },
        ],
      },
      attributes: [
        {
          name: 'storage',
          arguments: ['read'],
        },
      ],
    },
    {
      inputs: [],
      name: 'total_assets',
      output: {
        name: '',
        type: 13,
        typeArguments: null,
      },
      attributes: [
        {
          name: 'storage',
          arguments: ['read'],
        },
      ],
    },
    {
      inputs: [
        {
          name: 'asset',
          type: 8,
          typeArguments: null,
        },
      ],
      name: 'total_supply',
      output: {
        name: '',
        type: 4,
        typeArguments: [
          {
            name: '',
            type: 13,
            typeArguments: null,
          },
        ],
      },
      attributes: [
        {
          name: 'storage',
          arguments: ['read'],
        },
      ],
    },
    {
      inputs: [
        {
          name: 'sub_id',
          type: 1,
          typeArguments: null,
        },
        {
          name: 'amount',
          type: 13,
          typeArguments: null,
        },
      ],
      name: 'burn',
      output: {
        name: '',
        type: 0,
        typeArguments: null,
      },
      attributes: [
        {
          name: 'storage',
          arguments: ['read', 'write'],
        },
      ],
    },
    {
      inputs: [
        {
          name: 'recipient',
          type: 3,
          typeArguments: null,
        },
        {
          name: 'sub_id',
          type: 1,
          typeArguments: null,
        },
        {
          name: 'amount',
          type: 13,
          typeArguments: null,
        },
      ],
      name: 'mint',
      output: {
        name: '',
        type: 0,
        typeArguments: null,
      },
      attributes: [
        {
          name: 'storage',
          arguments: ['read', 'write'],
        },
      ],
    },
    {
      inputs: [],
      name: 'deposit',
      output: {
        name: '',
        type: 13,
        typeArguments: null,
      },
      attributes: [
        {
          name: 'storage',
          arguments: ['read', 'write'],
        },
        {
          name: 'payable',
          arguments: [],
        },
      ],
    },
    {
      inputs: [],
      name: 'deposit_half',
      output: {
        name: '',
        type: 13,
        typeArguments: null,
      },
      attributes: [
        {
          name: 'payable',
          arguments: [],
        },
        {
          name: 'storage',
          arguments: ['read', 'write'],
        },
      ],
    },
    {
      inputs: [
        {
          name: 'recipient',
          type: 3,
          typeArguments: null,
        },
        {
          name: 'sub_id',
          type: 1,
          typeArguments: null,
        },
        {
          name: 'amount',
          type: 13,
          typeArguments: null,
        },
      ],
      name: 'deposit_half_and_mint',
      output: {
        name: '',
        type: 13,
        typeArguments: null,
      },
      attributes: [
        {
          name: 'storage',
          arguments: ['read', 'write'],
        },
        {
          name: 'payable',
          arguments: [],
        },
      ],
    },
    {
      inputs: [
        {
          name: 'recipient',
          type: 3,
          typeArguments: null,
        },
        {
          name: 'sub_id',
          type: 1,
          typeArguments: null,
        },
        {
          name: 'amount',
          type: 13,
          typeArguments: null,
        },
        {
          name: 'contract_id',
          type: 10,
          typeArguments: null,
        },
      ],
      name: 'deposit_half_and_mint_from_external_contract',
      output: {
        name: '',
        type: 13,
        typeArguments: null,
      },
      attributes: [
        {
          name: 'payable',
          arguments: [],
        },
        {
          name: 'storage',
          arguments: ['read', 'write'],
        },
      ],
    },
  ],
  loggedTypes: [
    {
      logId: 0,
      loggedType: {
        name: '',
        type: 2,
        typeArguments: [],
      },
    },
  ],
  messagesTypes: [],
  configurables: [],
};

export class CustomAssetAbi__factory {
  static readonly abi = _abi;
  static createInterface(): CustomAssetAbiInterface {
    return new Interface(_abi) as unknown as CustomAssetAbiInterface;
  }
  static connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider,
  ): CustomAssetAbi {
    return new Contract(
      id,
      _abi,
      accountOrProvider,
    ) as unknown as CustomAssetAbi;
  }
  static async deployContract(
    bytecode: BytesLike,
    wallet: Account,
    options: DeployContractOptions = {},
  ): Promise<CustomAssetAbi> {
    const factory = new ContractFactory(bytecode, _abi, wallet);
    const contract = await factory.deployContract(options);
    return contract as unknown as CustomAssetAbi;
  }
}
