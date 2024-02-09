/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Category: { // root type
    desc?: string | null; // String
    icon?: string | null; // String
    id?: string | null; // String
    name?: string | null; // String
  }
  Grocery: { // root type
    barcode?: string | null; // String
    desc?: string | null; // String
    expiry?: string | null; // String
    id?: string | null; // String
    image?: string | null; // String
    manufactured?: string | null; // String
    name?: string | null; // String
    status?: string | null; // String
  }
  Mutation: {};
  Query: {};
  Test: { // root type
    message?: string | null; // String
  }
  User: { // root type
    email?: string | null; // String
    id?: string | null; // String
    image?: string | null; // String
    name?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Category: { // field return type
    desc: string | null; // String
    groceries: Array<NexusGenRootTypes['Grocery'] | null> | null; // [Grocery]
    icon: string | null; // String
    id: string | null; // String
    name: string | null; // String
  }
  Grocery: { // field return type
    barcode: string | null; // String
    categories: Array<NexusGenRootTypes['Category'] | null> | null; // [Category]
    desc: string | null; // String
    expiry: string | null; // String
    id: string | null; // String
    image: string | null; // String
    manufactured: string | null; // String
    name: string | null; // String
    status: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
  }
  Mutation: { // field return type
    addGrocery: NexusGenRootTypes['Grocery'] | null; // Grocery
    healthcheck: NexusGenRootTypes['Test'] | null; // Test
  }
  Query: { // field return type
    getUserCategories: Array<NexusGenRootTypes['Category'] | null> | null; // [Category]
    getUserGroceries: Array<NexusGenRootTypes['Grocery'] | null> | null; // [Grocery]
    healthcheck: NexusGenRootTypes['Test'] | null; // Test
  }
  Test: { // field return type
    message: string | null; // String
  }
  User: { // field return type
    email: string | null; // String
    id: string | null; // String
    image: string | null; // String
    name: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  Category: { // field return type name
    desc: 'String'
    groceries: 'Grocery'
    icon: 'String'
    id: 'String'
    name: 'String'
  }
  Grocery: { // field return type name
    barcode: 'String'
    categories: 'Category'
    desc: 'String'
    expiry: 'String'
    id: 'String'
    image: 'String'
    manufactured: 'String'
    name: 'String'
    status: 'String'
    user: 'User'
  }
  Mutation: { // field return type name
    addGrocery: 'Grocery'
    healthcheck: 'Test'
  }
  Query: { // field return type name
    getUserCategories: 'Category'
    getUserGroceries: 'Grocery'
    healthcheck: 'Test'
  }
  Test: { // field return type name
    message: 'String'
  }
  User: { // field return type name
    email: 'String'
    id: 'String'
    image: 'String'
    name: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addGrocery: { // args
      barcode: string; // String!
      desc: string; // String!
      expiry: string; // String!
      image?: string | null; // String
      manufactured?: string | null; // String
      name: string; // String!
    }
  }
  Query: {
    getUserCategories: { // args
      itemsPerPage?: number | null; // Int
      page?: number | null; // Int
      search?: string | null; // String
    }
    getUserGroceries: { // args
      expiry: string; // String!
      itemsPerPage?: number | null; // Int
      page?: number | null; // Int
      search?: string | null; // String
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}