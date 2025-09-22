
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Printer
 * 
 */
export type Printer = $Result.DefaultSelection<Prisma.$PrinterPayload>
/**
 * Model RepairStatus
 * 
 */
export type RepairStatus = $Result.DefaultSelection<Prisma.$RepairStatusPayload>
/**
 * Model RepairRequest
 * 
 */
export type RepairRequest = $Result.DefaultSelection<Prisma.$RepairRequestPayload>
/**
 * Model RepairPart
 * 
 */
export type RepairPart = $Result.DefaultSelection<Prisma.$RepairPartPayload>
/**
 * Model Shipping
 * 
 */
export type Shipping = $Result.DefaultSelection<Prisma.$ShippingPayload>
/**
 * Model Note
 * 
 */
export type Note = $Result.DefaultSelection<Prisma.$NotePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.printer`: Exposes CRUD operations for the **Printer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Printers
    * const printers = await prisma.printer.findMany()
    * ```
    */
  get printer(): Prisma.PrinterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repairStatus`: Exposes CRUD operations for the **RepairStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RepairStatuses
    * const repairStatuses = await prisma.repairStatus.findMany()
    * ```
    */
  get repairStatus(): Prisma.RepairStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repairRequest`: Exposes CRUD operations for the **RepairRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RepairRequests
    * const repairRequests = await prisma.repairRequest.findMany()
    * ```
    */
  get repairRequest(): Prisma.RepairRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repairPart`: Exposes CRUD operations for the **RepairPart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RepairParts
    * const repairParts = await prisma.repairPart.findMany()
    * ```
    */
  get repairPart(): Prisma.RepairPartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipping`: Exposes CRUD operations for the **Shipping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shippings
    * const shippings = await prisma.shipping.findMany()
    * ```
    */
  get shipping(): Prisma.ShippingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.note`: Exposes CRUD operations for the **Note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.NoteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Role: 'Role',
    User: 'User',
    Printer: 'Printer',
    RepairStatus: 'RepairStatus',
    RepairRequest: 'RepairRequest',
    RepairPart: 'RepairPart',
    Shipping: 'Shipping',
    Note: 'Note'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "role" | "user" | "printer" | "repairStatus" | "repairRequest" | "repairPart" | "shipping" | "note"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Printer: {
        payload: Prisma.$PrinterPayload<ExtArgs>
        fields: Prisma.PrinterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrinterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrinterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>
          }
          findFirst: {
            args: Prisma.PrinterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrinterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>
          }
          findMany: {
            args: Prisma.PrinterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>[]
          }
          create: {
            args: Prisma.PrinterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>
          }
          createMany: {
            args: Prisma.PrinterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrinterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>[]
          }
          delete: {
            args: Prisma.PrinterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>
          }
          update: {
            args: Prisma.PrinterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>
          }
          deleteMany: {
            args: Prisma.PrinterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrinterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrinterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>[]
          }
          upsert: {
            args: Prisma.PrinterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>
          }
          aggregate: {
            args: Prisma.PrinterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrinter>
          }
          groupBy: {
            args: Prisma.PrinterGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrinterGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrinterCountArgs<ExtArgs>
            result: $Utils.Optional<PrinterCountAggregateOutputType> | number
          }
        }
      }
      RepairStatus: {
        payload: Prisma.$RepairStatusPayload<ExtArgs>
        fields: Prisma.RepairStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepairStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepairStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairStatusPayload>
          }
          findFirst: {
            args: Prisma.RepairStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepairStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairStatusPayload>
          }
          findMany: {
            args: Prisma.RepairStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairStatusPayload>[]
          }
          create: {
            args: Prisma.RepairStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairStatusPayload>
          }
          createMany: {
            args: Prisma.RepairStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepairStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairStatusPayload>[]
          }
          delete: {
            args: Prisma.RepairStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairStatusPayload>
          }
          update: {
            args: Prisma.RepairStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairStatusPayload>
          }
          deleteMany: {
            args: Prisma.RepairStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepairStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RepairStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairStatusPayload>[]
          }
          upsert: {
            args: Prisma.RepairStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairStatusPayload>
          }
          aggregate: {
            args: Prisma.RepairStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepairStatus>
          }
          groupBy: {
            args: Prisma.RepairStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepairStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepairStatusCountArgs<ExtArgs>
            result: $Utils.Optional<RepairStatusCountAggregateOutputType> | number
          }
        }
      }
      RepairRequest: {
        payload: Prisma.$RepairRequestPayload<ExtArgs>
        fields: Prisma.RepairRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepairRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepairRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairRequestPayload>
          }
          findFirst: {
            args: Prisma.RepairRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepairRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairRequestPayload>
          }
          findMany: {
            args: Prisma.RepairRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairRequestPayload>[]
          }
          create: {
            args: Prisma.RepairRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairRequestPayload>
          }
          createMany: {
            args: Prisma.RepairRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepairRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairRequestPayload>[]
          }
          delete: {
            args: Prisma.RepairRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairRequestPayload>
          }
          update: {
            args: Prisma.RepairRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairRequestPayload>
          }
          deleteMany: {
            args: Prisma.RepairRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepairRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RepairRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairRequestPayload>[]
          }
          upsert: {
            args: Prisma.RepairRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairRequestPayload>
          }
          aggregate: {
            args: Prisma.RepairRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepairRequest>
          }
          groupBy: {
            args: Prisma.RepairRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepairRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepairRequestCountArgs<ExtArgs>
            result: $Utils.Optional<RepairRequestCountAggregateOutputType> | number
          }
        }
      }
      RepairPart: {
        payload: Prisma.$RepairPartPayload<ExtArgs>
        fields: Prisma.RepairPartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepairPartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepairPartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPartPayload>
          }
          findFirst: {
            args: Prisma.RepairPartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepairPartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPartPayload>
          }
          findMany: {
            args: Prisma.RepairPartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPartPayload>[]
          }
          create: {
            args: Prisma.RepairPartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPartPayload>
          }
          createMany: {
            args: Prisma.RepairPartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepairPartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPartPayload>[]
          }
          delete: {
            args: Prisma.RepairPartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPartPayload>
          }
          update: {
            args: Prisma.RepairPartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPartPayload>
          }
          deleteMany: {
            args: Prisma.RepairPartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepairPartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RepairPartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPartPayload>[]
          }
          upsert: {
            args: Prisma.RepairPartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepairPartPayload>
          }
          aggregate: {
            args: Prisma.RepairPartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepairPart>
          }
          groupBy: {
            args: Prisma.RepairPartGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepairPartGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepairPartCountArgs<ExtArgs>
            result: $Utils.Optional<RepairPartCountAggregateOutputType> | number
          }
        }
      }
      Shipping: {
        payload: Prisma.$ShippingPayload<ExtArgs>
        fields: Prisma.ShippingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShippingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShippingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingPayload>
          }
          findFirst: {
            args: Prisma.ShippingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShippingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingPayload>
          }
          findMany: {
            args: Prisma.ShippingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingPayload>[]
          }
          create: {
            args: Prisma.ShippingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingPayload>
          }
          createMany: {
            args: Prisma.ShippingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShippingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingPayload>[]
          }
          delete: {
            args: Prisma.ShippingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingPayload>
          }
          update: {
            args: Prisma.ShippingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingPayload>
          }
          deleteMany: {
            args: Prisma.ShippingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShippingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShippingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingPayload>[]
          }
          upsert: {
            args: Prisma.ShippingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingPayload>
          }
          aggregate: {
            args: Prisma.ShippingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipping>
          }
          groupBy: {
            args: Prisma.ShippingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShippingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShippingCountArgs<ExtArgs>
            result: $Utils.Optional<ShippingCountAggregateOutputType> | number
          }
        }
      }
      Note: {
        payload: Prisma.$NotePayload<ExtArgs>
        fields: Prisma.NoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findFirst: {
            args: Prisma.NoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findMany: {
            args: Prisma.NoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          create: {
            args: Prisma.NoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          createMany: {
            args: Prisma.NoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          delete: {
            args: Prisma.NoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          update: {
            args: Prisma.NoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          deleteMany: {
            args: Prisma.NoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          upsert: {
            args: Prisma.NoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          aggregate: {
            args: Prisma.NoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNote>
          }
          groupBy: {
            args: Prisma.NoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteCountArgs<ExtArgs>
            result: $Utils.Optional<NoteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    role?: RoleOmit
    user?: UserOmit
    printer?: PrinterOmit
    repairStatus?: RepairStatusOmit
    repairRequest?: RepairRequestOmit
    repairPart?: RepairPartOmit
    shipping?: ShippingOmit
    note?: NoteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    printers: number
    notes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    printers?: boolean | UserCountOutputTypeCountPrintersArgs
    notes?: boolean | UserCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPrintersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrinterWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }


  /**
   * Count Type PrinterCountOutputType
   */

  export type PrinterCountOutputType = {
    repairRequests: number
  }

  export type PrinterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairRequests?: boolean | PrinterCountOutputTypeCountRepairRequestsArgs
  }

  // Custom InputTypes
  /**
   * PrinterCountOutputType without action
   */
  export type PrinterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrinterCountOutputType
     */
    select?: PrinterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrinterCountOutputType without action
   */
  export type PrinterCountOutputTypeCountRepairRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairRequestWhereInput
  }


  /**
   * Count Type RepairStatusCountOutputType
   */

  export type RepairStatusCountOutputType = {
    repairRequests: number
  }

  export type RepairStatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairRequests?: boolean | RepairStatusCountOutputTypeCountRepairRequestsArgs
  }

  // Custom InputTypes
  /**
   * RepairStatusCountOutputType without action
   */
  export type RepairStatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairStatusCountOutputType
     */
    select?: RepairStatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RepairStatusCountOutputType without action
   */
  export type RepairStatusCountOutputTypeCountRepairRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairRequestWhereInput
  }


  /**
   * Count Type RepairRequestCountOutputType
   */

  export type RepairRequestCountOutputType = {
    repairParts: number
    notes: number
  }

  export type RepairRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairParts?: boolean | RepairRequestCountOutputTypeCountRepairPartsArgs
    notes?: boolean | RepairRequestCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * RepairRequestCountOutputType without action
   */
  export type RepairRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequestCountOutputType
     */
    select?: RepairRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RepairRequestCountOutputType without action
   */
  export type RepairRequestCountOutputTypeCountRepairPartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairPartWhereInput
  }

  /**
   * RepairRequestCountOutputType without action
   */
  export type RepairRequestCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    roleId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    roleId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phone: number
    roleId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    roleId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    roleId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    roleId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    phone: string | null
    roleId: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    printers?: boolean | User$printersArgs<ExtArgs>
    notes?: boolean | User$notesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    roleId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "phone" | "roleId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    printers?: boolean | User$printersArgs<ExtArgs>
    notes?: boolean | User$notesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      printers: Prisma.$PrinterPayload<ExtArgs>[]
      notes: Prisma.$NotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      phone: string | null
      roleId: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    printers<T extends User$printersArgs<ExtArgs> = {}>(args?: Subset<T, User$printersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends User$notesArgs<ExtArgs> = {}>(args?: Subset<T, User$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.printers
   */
  export type User$printersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    where?: PrinterWhereInput
    orderBy?: PrinterOrderByWithRelationInput | PrinterOrderByWithRelationInput[]
    cursor?: PrinterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrinterScalarFieldEnum | PrinterScalarFieldEnum[]
  }

  /**
   * User.notes
   */
  export type User$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Printer
   */

  export type AggregatePrinter = {
    _count: PrinterCountAggregateOutputType | null
    _avg: PrinterAvgAggregateOutputType | null
    _sum: PrinterSumAggregateOutputType | null
    _min: PrinterMinAggregateOutputType | null
    _max: PrinterMaxAggregateOutputType | null
  }

  export type PrinterAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type PrinterSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type PrinterMinAggregateOutputType = {
    id: number | null
    model: string | null
    serialNumber: string | null
    ownerId: number | null
  }

  export type PrinterMaxAggregateOutputType = {
    id: number | null
    model: string | null
    serialNumber: string | null
    ownerId: number | null
  }

  export type PrinterCountAggregateOutputType = {
    id: number
    model: number
    serialNumber: number
    ownerId: number
    _all: number
  }


  export type PrinterAvgAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type PrinterSumAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type PrinterMinAggregateInputType = {
    id?: true
    model?: true
    serialNumber?: true
    ownerId?: true
  }

  export type PrinterMaxAggregateInputType = {
    id?: true
    model?: true
    serialNumber?: true
    ownerId?: true
  }

  export type PrinterCountAggregateInputType = {
    id?: true
    model?: true
    serialNumber?: true
    ownerId?: true
    _all?: true
  }

  export type PrinterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Printer to aggregate.
     */
    where?: PrinterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Printers to fetch.
     */
    orderBy?: PrinterOrderByWithRelationInput | PrinterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrinterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Printers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Printers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Printers
    **/
    _count?: true | PrinterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrinterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrinterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrinterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrinterMaxAggregateInputType
  }

  export type GetPrinterAggregateType<T extends PrinterAggregateArgs> = {
        [P in keyof T & keyof AggregatePrinter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrinter[P]>
      : GetScalarType<T[P], AggregatePrinter[P]>
  }




  export type PrinterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrinterWhereInput
    orderBy?: PrinterOrderByWithAggregationInput | PrinterOrderByWithAggregationInput[]
    by: PrinterScalarFieldEnum[] | PrinterScalarFieldEnum
    having?: PrinterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrinterCountAggregateInputType | true
    _avg?: PrinterAvgAggregateInputType
    _sum?: PrinterSumAggregateInputType
    _min?: PrinterMinAggregateInputType
    _max?: PrinterMaxAggregateInputType
  }

  export type PrinterGroupByOutputType = {
    id: number
    model: string
    serialNumber: string
    ownerId: number
    _count: PrinterCountAggregateOutputType | null
    _avg: PrinterAvgAggregateOutputType | null
    _sum: PrinterSumAggregateOutputType | null
    _min: PrinterMinAggregateOutputType | null
    _max: PrinterMaxAggregateOutputType | null
  }

  type GetPrinterGroupByPayload<T extends PrinterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrinterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrinterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrinterGroupByOutputType[P]>
            : GetScalarType<T[P], PrinterGroupByOutputType[P]>
        }
      >
    >


  export type PrinterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    serialNumber?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    repairRequests?: boolean | Printer$repairRequestsArgs<ExtArgs>
    _count?: boolean | PrinterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["printer"]>

  export type PrinterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    serialNumber?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["printer"]>

  export type PrinterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    serialNumber?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["printer"]>

  export type PrinterSelectScalar = {
    id?: boolean
    model?: boolean
    serialNumber?: boolean
    ownerId?: boolean
  }

  export type PrinterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "model" | "serialNumber" | "ownerId", ExtArgs["result"]["printer"]>
  export type PrinterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    repairRequests?: boolean | Printer$repairRequestsArgs<ExtArgs>
    _count?: boolean | PrinterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PrinterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PrinterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PrinterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Printer"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      repairRequests: Prisma.$RepairRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      model: string
      serialNumber: string
      ownerId: number
    }, ExtArgs["result"]["printer"]>
    composites: {}
  }

  type PrinterGetPayload<S extends boolean | null | undefined | PrinterDefaultArgs> = $Result.GetResult<Prisma.$PrinterPayload, S>

  type PrinterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrinterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrinterCountAggregateInputType | true
    }

  export interface PrinterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Printer'], meta: { name: 'Printer' } }
    /**
     * Find zero or one Printer that matches the filter.
     * @param {PrinterFindUniqueArgs} args - Arguments to find a Printer
     * @example
     * // Get one Printer
     * const printer = await prisma.printer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrinterFindUniqueArgs>(args: SelectSubset<T, PrinterFindUniqueArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Printer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrinterFindUniqueOrThrowArgs} args - Arguments to find a Printer
     * @example
     * // Get one Printer
     * const printer = await prisma.printer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrinterFindUniqueOrThrowArgs>(args: SelectSubset<T, PrinterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Printer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterFindFirstArgs} args - Arguments to find a Printer
     * @example
     * // Get one Printer
     * const printer = await prisma.printer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrinterFindFirstArgs>(args?: SelectSubset<T, PrinterFindFirstArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Printer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterFindFirstOrThrowArgs} args - Arguments to find a Printer
     * @example
     * // Get one Printer
     * const printer = await prisma.printer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrinterFindFirstOrThrowArgs>(args?: SelectSubset<T, PrinterFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Printers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Printers
     * const printers = await prisma.printer.findMany()
     * 
     * // Get first 10 Printers
     * const printers = await prisma.printer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const printerWithIdOnly = await prisma.printer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrinterFindManyArgs>(args?: SelectSubset<T, PrinterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Printer.
     * @param {PrinterCreateArgs} args - Arguments to create a Printer.
     * @example
     * // Create one Printer
     * const Printer = await prisma.printer.create({
     *   data: {
     *     // ... data to create a Printer
     *   }
     * })
     * 
     */
    create<T extends PrinterCreateArgs>(args: SelectSubset<T, PrinterCreateArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Printers.
     * @param {PrinterCreateManyArgs} args - Arguments to create many Printers.
     * @example
     * // Create many Printers
     * const printer = await prisma.printer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrinterCreateManyArgs>(args?: SelectSubset<T, PrinterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Printers and returns the data saved in the database.
     * @param {PrinterCreateManyAndReturnArgs} args - Arguments to create many Printers.
     * @example
     * // Create many Printers
     * const printer = await prisma.printer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Printers and only return the `id`
     * const printerWithIdOnly = await prisma.printer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrinterCreateManyAndReturnArgs>(args?: SelectSubset<T, PrinterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Printer.
     * @param {PrinterDeleteArgs} args - Arguments to delete one Printer.
     * @example
     * // Delete one Printer
     * const Printer = await prisma.printer.delete({
     *   where: {
     *     // ... filter to delete one Printer
     *   }
     * })
     * 
     */
    delete<T extends PrinterDeleteArgs>(args: SelectSubset<T, PrinterDeleteArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Printer.
     * @param {PrinterUpdateArgs} args - Arguments to update one Printer.
     * @example
     * // Update one Printer
     * const printer = await prisma.printer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrinterUpdateArgs>(args: SelectSubset<T, PrinterUpdateArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Printers.
     * @param {PrinterDeleteManyArgs} args - Arguments to filter Printers to delete.
     * @example
     * // Delete a few Printers
     * const { count } = await prisma.printer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrinterDeleteManyArgs>(args?: SelectSubset<T, PrinterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Printers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Printers
     * const printer = await prisma.printer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrinterUpdateManyArgs>(args: SelectSubset<T, PrinterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Printers and returns the data updated in the database.
     * @param {PrinterUpdateManyAndReturnArgs} args - Arguments to update many Printers.
     * @example
     * // Update many Printers
     * const printer = await prisma.printer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Printers and only return the `id`
     * const printerWithIdOnly = await prisma.printer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrinterUpdateManyAndReturnArgs>(args: SelectSubset<T, PrinterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Printer.
     * @param {PrinterUpsertArgs} args - Arguments to update or create a Printer.
     * @example
     * // Update or create a Printer
     * const printer = await prisma.printer.upsert({
     *   create: {
     *     // ... data to create a Printer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Printer we want to update
     *   }
     * })
     */
    upsert<T extends PrinterUpsertArgs>(args: SelectSubset<T, PrinterUpsertArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Printers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterCountArgs} args - Arguments to filter Printers to count.
     * @example
     * // Count the number of Printers
     * const count = await prisma.printer.count({
     *   where: {
     *     // ... the filter for the Printers we want to count
     *   }
     * })
    **/
    count<T extends PrinterCountArgs>(
      args?: Subset<T, PrinterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrinterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Printer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrinterAggregateArgs>(args: Subset<T, PrinterAggregateArgs>): Prisma.PrismaPromise<GetPrinterAggregateType<T>>

    /**
     * Group by Printer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrinterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrinterGroupByArgs['orderBy'] }
        : { orderBy?: PrinterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrinterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrinterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Printer model
   */
  readonly fields: PrinterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Printer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrinterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    repairRequests<T extends Printer$repairRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Printer$repairRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Printer model
   */
  interface PrinterFieldRefs {
    readonly id: FieldRef<"Printer", 'Int'>
    readonly model: FieldRef<"Printer", 'String'>
    readonly serialNumber: FieldRef<"Printer", 'String'>
    readonly ownerId: FieldRef<"Printer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Printer findUnique
   */
  export type PrinterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    /**
     * Filter, which Printer to fetch.
     */
    where: PrinterWhereUniqueInput
  }

  /**
   * Printer findUniqueOrThrow
   */
  export type PrinterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    /**
     * Filter, which Printer to fetch.
     */
    where: PrinterWhereUniqueInput
  }

  /**
   * Printer findFirst
   */
  export type PrinterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    /**
     * Filter, which Printer to fetch.
     */
    where?: PrinterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Printers to fetch.
     */
    orderBy?: PrinterOrderByWithRelationInput | PrinterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Printers.
     */
    cursor?: PrinterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Printers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Printers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Printers.
     */
    distinct?: PrinterScalarFieldEnum | PrinterScalarFieldEnum[]
  }

  /**
   * Printer findFirstOrThrow
   */
  export type PrinterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    /**
     * Filter, which Printer to fetch.
     */
    where?: PrinterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Printers to fetch.
     */
    orderBy?: PrinterOrderByWithRelationInput | PrinterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Printers.
     */
    cursor?: PrinterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Printers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Printers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Printers.
     */
    distinct?: PrinterScalarFieldEnum | PrinterScalarFieldEnum[]
  }

  /**
   * Printer findMany
   */
  export type PrinterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    /**
     * Filter, which Printers to fetch.
     */
    where?: PrinterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Printers to fetch.
     */
    orderBy?: PrinterOrderByWithRelationInput | PrinterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Printers.
     */
    cursor?: PrinterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Printers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Printers.
     */
    skip?: number
    distinct?: PrinterScalarFieldEnum | PrinterScalarFieldEnum[]
  }

  /**
   * Printer create
   */
  export type PrinterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    /**
     * The data needed to create a Printer.
     */
    data: XOR<PrinterCreateInput, PrinterUncheckedCreateInput>
  }

  /**
   * Printer createMany
   */
  export type PrinterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Printers.
     */
    data: PrinterCreateManyInput | PrinterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Printer createManyAndReturn
   */
  export type PrinterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * The data used to create many Printers.
     */
    data: PrinterCreateManyInput | PrinterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Printer update
   */
  export type PrinterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    /**
     * The data needed to update a Printer.
     */
    data: XOR<PrinterUpdateInput, PrinterUncheckedUpdateInput>
    /**
     * Choose, which Printer to update.
     */
    where: PrinterWhereUniqueInput
  }

  /**
   * Printer updateMany
   */
  export type PrinterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Printers.
     */
    data: XOR<PrinterUpdateManyMutationInput, PrinterUncheckedUpdateManyInput>
    /**
     * Filter which Printers to update
     */
    where?: PrinterWhereInput
    /**
     * Limit how many Printers to update.
     */
    limit?: number
  }

  /**
   * Printer updateManyAndReturn
   */
  export type PrinterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * The data used to update Printers.
     */
    data: XOR<PrinterUpdateManyMutationInput, PrinterUncheckedUpdateManyInput>
    /**
     * Filter which Printers to update
     */
    where?: PrinterWhereInput
    /**
     * Limit how many Printers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Printer upsert
   */
  export type PrinterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    /**
     * The filter to search for the Printer to update in case it exists.
     */
    where: PrinterWhereUniqueInput
    /**
     * In case the Printer found by the `where` argument doesn't exist, create a new Printer with this data.
     */
    create: XOR<PrinterCreateInput, PrinterUncheckedCreateInput>
    /**
     * In case the Printer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrinterUpdateInput, PrinterUncheckedUpdateInput>
  }

  /**
   * Printer delete
   */
  export type PrinterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    /**
     * Filter which Printer to delete.
     */
    where: PrinterWhereUniqueInput
  }

  /**
   * Printer deleteMany
   */
  export type PrinterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Printers to delete
     */
    where?: PrinterWhereInput
    /**
     * Limit how many Printers to delete.
     */
    limit?: number
  }

  /**
   * Printer.repairRequests
   */
  export type Printer$repairRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestInclude<ExtArgs> | null
    where?: RepairRequestWhereInput
    orderBy?: RepairRequestOrderByWithRelationInput | RepairRequestOrderByWithRelationInput[]
    cursor?: RepairRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepairRequestScalarFieldEnum | RepairRequestScalarFieldEnum[]
  }

  /**
   * Printer without action
   */
  export type PrinterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
  }


  /**
   * Model RepairStatus
   */

  export type AggregateRepairStatus = {
    _count: RepairStatusCountAggregateOutputType | null
    _avg: RepairStatusAvgAggregateOutputType | null
    _sum: RepairStatusSumAggregateOutputType | null
    _min: RepairStatusMinAggregateOutputType | null
    _max: RepairStatusMaxAggregateOutputType | null
  }

  export type RepairStatusAvgAggregateOutputType = {
    id: number | null
  }

  export type RepairStatusSumAggregateOutputType = {
    id: number | null
  }

  export type RepairStatusMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RepairStatusMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RepairStatusCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RepairStatusAvgAggregateInputType = {
    id?: true
  }

  export type RepairStatusSumAggregateInputType = {
    id?: true
  }

  export type RepairStatusMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RepairStatusMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RepairStatusCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RepairStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepairStatus to aggregate.
     */
    where?: RepairStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairStatuses to fetch.
     */
    orderBy?: RepairStatusOrderByWithRelationInput | RepairStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepairStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RepairStatuses
    **/
    _count?: true | RepairStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepairStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepairStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepairStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepairStatusMaxAggregateInputType
  }

  export type GetRepairStatusAggregateType<T extends RepairStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateRepairStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepairStatus[P]>
      : GetScalarType<T[P], AggregateRepairStatus[P]>
  }




  export type RepairStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairStatusWhereInput
    orderBy?: RepairStatusOrderByWithAggregationInput | RepairStatusOrderByWithAggregationInput[]
    by: RepairStatusScalarFieldEnum[] | RepairStatusScalarFieldEnum
    having?: RepairStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepairStatusCountAggregateInputType | true
    _avg?: RepairStatusAvgAggregateInputType
    _sum?: RepairStatusSumAggregateInputType
    _min?: RepairStatusMinAggregateInputType
    _max?: RepairStatusMaxAggregateInputType
  }

  export type RepairStatusGroupByOutputType = {
    id: number
    name: string
    _count: RepairStatusCountAggregateOutputType | null
    _avg: RepairStatusAvgAggregateOutputType | null
    _sum: RepairStatusSumAggregateOutputType | null
    _min: RepairStatusMinAggregateOutputType | null
    _max: RepairStatusMaxAggregateOutputType | null
  }

  type GetRepairStatusGroupByPayload<T extends RepairStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepairStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepairStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepairStatusGroupByOutputType[P]>
            : GetScalarType<T[P], RepairStatusGroupByOutputType[P]>
        }
      >
    >


  export type RepairStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    repairRequests?: boolean | RepairStatus$repairRequestsArgs<ExtArgs>
    _count?: boolean | RepairStatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repairStatus"]>

  export type RepairStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["repairStatus"]>

  export type RepairStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["repairStatus"]>

  export type RepairStatusSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RepairStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["repairStatus"]>
  export type RepairStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairRequests?: boolean | RepairStatus$repairRequestsArgs<ExtArgs>
    _count?: boolean | RepairStatusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RepairStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RepairStatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RepairStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RepairStatus"
    objects: {
      repairRequests: Prisma.$RepairRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["repairStatus"]>
    composites: {}
  }

  type RepairStatusGetPayload<S extends boolean | null | undefined | RepairStatusDefaultArgs> = $Result.GetResult<Prisma.$RepairStatusPayload, S>

  type RepairStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepairStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepairStatusCountAggregateInputType | true
    }

  export interface RepairStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RepairStatus'], meta: { name: 'RepairStatus' } }
    /**
     * Find zero or one RepairStatus that matches the filter.
     * @param {RepairStatusFindUniqueArgs} args - Arguments to find a RepairStatus
     * @example
     * // Get one RepairStatus
     * const repairStatus = await prisma.repairStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepairStatusFindUniqueArgs>(args: SelectSubset<T, RepairStatusFindUniqueArgs<ExtArgs>>): Prisma__RepairStatusClient<$Result.GetResult<Prisma.$RepairStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RepairStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepairStatusFindUniqueOrThrowArgs} args - Arguments to find a RepairStatus
     * @example
     * // Get one RepairStatus
     * const repairStatus = await prisma.repairStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepairStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, RepairStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepairStatusClient<$Result.GetResult<Prisma.$RepairStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepairStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairStatusFindFirstArgs} args - Arguments to find a RepairStatus
     * @example
     * // Get one RepairStatus
     * const repairStatus = await prisma.repairStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepairStatusFindFirstArgs>(args?: SelectSubset<T, RepairStatusFindFirstArgs<ExtArgs>>): Prisma__RepairStatusClient<$Result.GetResult<Prisma.$RepairStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepairStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairStatusFindFirstOrThrowArgs} args - Arguments to find a RepairStatus
     * @example
     * // Get one RepairStatus
     * const repairStatus = await prisma.repairStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepairStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, RepairStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepairStatusClient<$Result.GetResult<Prisma.$RepairStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RepairStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RepairStatuses
     * const repairStatuses = await prisma.repairStatus.findMany()
     * 
     * // Get first 10 RepairStatuses
     * const repairStatuses = await prisma.repairStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repairStatusWithIdOnly = await prisma.repairStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepairStatusFindManyArgs>(args?: SelectSubset<T, RepairStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RepairStatus.
     * @param {RepairStatusCreateArgs} args - Arguments to create a RepairStatus.
     * @example
     * // Create one RepairStatus
     * const RepairStatus = await prisma.repairStatus.create({
     *   data: {
     *     // ... data to create a RepairStatus
     *   }
     * })
     * 
     */
    create<T extends RepairStatusCreateArgs>(args: SelectSubset<T, RepairStatusCreateArgs<ExtArgs>>): Prisma__RepairStatusClient<$Result.GetResult<Prisma.$RepairStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RepairStatuses.
     * @param {RepairStatusCreateManyArgs} args - Arguments to create many RepairStatuses.
     * @example
     * // Create many RepairStatuses
     * const repairStatus = await prisma.repairStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepairStatusCreateManyArgs>(args?: SelectSubset<T, RepairStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RepairStatuses and returns the data saved in the database.
     * @param {RepairStatusCreateManyAndReturnArgs} args - Arguments to create many RepairStatuses.
     * @example
     * // Create many RepairStatuses
     * const repairStatus = await prisma.repairStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RepairStatuses and only return the `id`
     * const repairStatusWithIdOnly = await prisma.repairStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepairStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, RepairStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RepairStatus.
     * @param {RepairStatusDeleteArgs} args - Arguments to delete one RepairStatus.
     * @example
     * // Delete one RepairStatus
     * const RepairStatus = await prisma.repairStatus.delete({
     *   where: {
     *     // ... filter to delete one RepairStatus
     *   }
     * })
     * 
     */
    delete<T extends RepairStatusDeleteArgs>(args: SelectSubset<T, RepairStatusDeleteArgs<ExtArgs>>): Prisma__RepairStatusClient<$Result.GetResult<Prisma.$RepairStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RepairStatus.
     * @param {RepairStatusUpdateArgs} args - Arguments to update one RepairStatus.
     * @example
     * // Update one RepairStatus
     * const repairStatus = await prisma.repairStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepairStatusUpdateArgs>(args: SelectSubset<T, RepairStatusUpdateArgs<ExtArgs>>): Prisma__RepairStatusClient<$Result.GetResult<Prisma.$RepairStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RepairStatuses.
     * @param {RepairStatusDeleteManyArgs} args - Arguments to filter RepairStatuses to delete.
     * @example
     * // Delete a few RepairStatuses
     * const { count } = await prisma.repairStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepairStatusDeleteManyArgs>(args?: SelectSubset<T, RepairStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepairStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RepairStatuses
     * const repairStatus = await prisma.repairStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepairStatusUpdateManyArgs>(args: SelectSubset<T, RepairStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepairStatuses and returns the data updated in the database.
     * @param {RepairStatusUpdateManyAndReturnArgs} args - Arguments to update many RepairStatuses.
     * @example
     * // Update many RepairStatuses
     * const repairStatus = await prisma.repairStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RepairStatuses and only return the `id`
     * const repairStatusWithIdOnly = await prisma.repairStatus.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RepairStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, RepairStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RepairStatus.
     * @param {RepairStatusUpsertArgs} args - Arguments to update or create a RepairStatus.
     * @example
     * // Update or create a RepairStatus
     * const repairStatus = await prisma.repairStatus.upsert({
     *   create: {
     *     // ... data to create a RepairStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RepairStatus we want to update
     *   }
     * })
     */
    upsert<T extends RepairStatusUpsertArgs>(args: SelectSubset<T, RepairStatusUpsertArgs<ExtArgs>>): Prisma__RepairStatusClient<$Result.GetResult<Prisma.$RepairStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RepairStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairStatusCountArgs} args - Arguments to filter RepairStatuses to count.
     * @example
     * // Count the number of RepairStatuses
     * const count = await prisma.repairStatus.count({
     *   where: {
     *     // ... the filter for the RepairStatuses we want to count
     *   }
     * })
    **/
    count<T extends RepairStatusCountArgs>(
      args?: Subset<T, RepairStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepairStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RepairStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RepairStatusAggregateArgs>(args: Subset<T, RepairStatusAggregateArgs>): Prisma.PrismaPromise<GetRepairStatusAggregateType<T>>

    /**
     * Group by RepairStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RepairStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepairStatusGroupByArgs['orderBy'] }
        : { orderBy?: RepairStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RepairStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepairStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RepairStatus model
   */
  readonly fields: RepairStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RepairStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepairStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repairRequests<T extends RepairStatus$repairRequestsArgs<ExtArgs> = {}>(args?: Subset<T, RepairStatus$repairRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RepairStatus model
   */
  interface RepairStatusFieldRefs {
    readonly id: FieldRef<"RepairStatus", 'Int'>
    readonly name: FieldRef<"RepairStatus", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RepairStatus findUnique
   */
  export type RepairStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairStatus
     */
    select?: RepairStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairStatus
     */
    omit?: RepairStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairStatusInclude<ExtArgs> | null
    /**
     * Filter, which RepairStatus to fetch.
     */
    where: RepairStatusWhereUniqueInput
  }

  /**
   * RepairStatus findUniqueOrThrow
   */
  export type RepairStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairStatus
     */
    select?: RepairStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairStatus
     */
    omit?: RepairStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairStatusInclude<ExtArgs> | null
    /**
     * Filter, which RepairStatus to fetch.
     */
    where: RepairStatusWhereUniqueInput
  }

  /**
   * RepairStatus findFirst
   */
  export type RepairStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairStatus
     */
    select?: RepairStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairStatus
     */
    omit?: RepairStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairStatusInclude<ExtArgs> | null
    /**
     * Filter, which RepairStatus to fetch.
     */
    where?: RepairStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairStatuses to fetch.
     */
    orderBy?: RepairStatusOrderByWithRelationInput | RepairStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepairStatuses.
     */
    cursor?: RepairStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepairStatuses.
     */
    distinct?: RepairStatusScalarFieldEnum | RepairStatusScalarFieldEnum[]
  }

  /**
   * RepairStatus findFirstOrThrow
   */
  export type RepairStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairStatus
     */
    select?: RepairStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairStatus
     */
    omit?: RepairStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairStatusInclude<ExtArgs> | null
    /**
     * Filter, which RepairStatus to fetch.
     */
    where?: RepairStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairStatuses to fetch.
     */
    orderBy?: RepairStatusOrderByWithRelationInput | RepairStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepairStatuses.
     */
    cursor?: RepairStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepairStatuses.
     */
    distinct?: RepairStatusScalarFieldEnum | RepairStatusScalarFieldEnum[]
  }

  /**
   * RepairStatus findMany
   */
  export type RepairStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairStatus
     */
    select?: RepairStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairStatus
     */
    omit?: RepairStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairStatusInclude<ExtArgs> | null
    /**
     * Filter, which RepairStatuses to fetch.
     */
    where?: RepairStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairStatuses to fetch.
     */
    orderBy?: RepairStatusOrderByWithRelationInput | RepairStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RepairStatuses.
     */
    cursor?: RepairStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairStatuses.
     */
    skip?: number
    distinct?: RepairStatusScalarFieldEnum | RepairStatusScalarFieldEnum[]
  }

  /**
   * RepairStatus create
   */
  export type RepairStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairStatus
     */
    select?: RepairStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairStatus
     */
    omit?: RepairStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a RepairStatus.
     */
    data: XOR<RepairStatusCreateInput, RepairStatusUncheckedCreateInput>
  }

  /**
   * RepairStatus createMany
   */
  export type RepairStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RepairStatuses.
     */
    data: RepairStatusCreateManyInput | RepairStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RepairStatus createManyAndReturn
   */
  export type RepairStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairStatus
     */
    select?: RepairStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RepairStatus
     */
    omit?: RepairStatusOmit<ExtArgs> | null
    /**
     * The data used to create many RepairStatuses.
     */
    data: RepairStatusCreateManyInput | RepairStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RepairStatus update
   */
  export type RepairStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairStatus
     */
    select?: RepairStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairStatus
     */
    omit?: RepairStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a RepairStatus.
     */
    data: XOR<RepairStatusUpdateInput, RepairStatusUncheckedUpdateInput>
    /**
     * Choose, which RepairStatus to update.
     */
    where: RepairStatusWhereUniqueInput
  }

  /**
   * RepairStatus updateMany
   */
  export type RepairStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RepairStatuses.
     */
    data: XOR<RepairStatusUpdateManyMutationInput, RepairStatusUncheckedUpdateManyInput>
    /**
     * Filter which RepairStatuses to update
     */
    where?: RepairStatusWhereInput
    /**
     * Limit how many RepairStatuses to update.
     */
    limit?: number
  }

  /**
   * RepairStatus updateManyAndReturn
   */
  export type RepairStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairStatus
     */
    select?: RepairStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RepairStatus
     */
    omit?: RepairStatusOmit<ExtArgs> | null
    /**
     * The data used to update RepairStatuses.
     */
    data: XOR<RepairStatusUpdateManyMutationInput, RepairStatusUncheckedUpdateManyInput>
    /**
     * Filter which RepairStatuses to update
     */
    where?: RepairStatusWhereInput
    /**
     * Limit how many RepairStatuses to update.
     */
    limit?: number
  }

  /**
   * RepairStatus upsert
   */
  export type RepairStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairStatus
     */
    select?: RepairStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairStatus
     */
    omit?: RepairStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the RepairStatus to update in case it exists.
     */
    where: RepairStatusWhereUniqueInput
    /**
     * In case the RepairStatus found by the `where` argument doesn't exist, create a new RepairStatus with this data.
     */
    create: XOR<RepairStatusCreateInput, RepairStatusUncheckedCreateInput>
    /**
     * In case the RepairStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepairStatusUpdateInput, RepairStatusUncheckedUpdateInput>
  }

  /**
   * RepairStatus delete
   */
  export type RepairStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairStatus
     */
    select?: RepairStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairStatus
     */
    omit?: RepairStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairStatusInclude<ExtArgs> | null
    /**
     * Filter which RepairStatus to delete.
     */
    where: RepairStatusWhereUniqueInput
  }

  /**
   * RepairStatus deleteMany
   */
  export type RepairStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepairStatuses to delete
     */
    where?: RepairStatusWhereInput
    /**
     * Limit how many RepairStatuses to delete.
     */
    limit?: number
  }

  /**
   * RepairStatus.repairRequests
   */
  export type RepairStatus$repairRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestInclude<ExtArgs> | null
    where?: RepairRequestWhereInput
    orderBy?: RepairRequestOrderByWithRelationInput | RepairRequestOrderByWithRelationInput[]
    cursor?: RepairRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepairRequestScalarFieldEnum | RepairRequestScalarFieldEnum[]
  }

  /**
   * RepairStatus without action
   */
  export type RepairStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairStatus
     */
    select?: RepairStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairStatus
     */
    omit?: RepairStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairStatusInclude<ExtArgs> | null
  }


  /**
   * Model RepairRequest
   */

  export type AggregateRepairRequest = {
    _count: RepairRequestCountAggregateOutputType | null
    _avg: RepairRequestAvgAggregateOutputType | null
    _sum: RepairRequestSumAggregateOutputType | null
    _min: RepairRequestMinAggregateOutputType | null
    _max: RepairRequestMaxAggregateOutputType | null
  }

  export type RepairRequestAvgAggregateOutputType = {
    id: number | null
    printerId: number | null
    statusId: number | null
  }

  export type RepairRequestSumAggregateOutputType = {
    id: number | null
    printerId: number | null
    statusId: number | null
  }

  export type RepairRequestMinAggregateOutputType = {
    id: number | null
    printerId: number | null
    description: string | null
    accessories: string | null
    statusId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RepairRequestMaxAggregateOutputType = {
    id: number | null
    printerId: number | null
    description: string | null
    accessories: string | null
    statusId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RepairRequestCountAggregateOutputType = {
    id: number
    printerId: number
    description: number
    accessories: number
    statusId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RepairRequestAvgAggregateInputType = {
    id?: true
    printerId?: true
    statusId?: true
  }

  export type RepairRequestSumAggregateInputType = {
    id?: true
    printerId?: true
    statusId?: true
  }

  export type RepairRequestMinAggregateInputType = {
    id?: true
    printerId?: true
    description?: true
    accessories?: true
    statusId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RepairRequestMaxAggregateInputType = {
    id?: true
    printerId?: true
    description?: true
    accessories?: true
    statusId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RepairRequestCountAggregateInputType = {
    id?: true
    printerId?: true
    description?: true
    accessories?: true
    statusId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RepairRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepairRequest to aggregate.
     */
    where?: RepairRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairRequests to fetch.
     */
    orderBy?: RepairRequestOrderByWithRelationInput | RepairRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepairRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RepairRequests
    **/
    _count?: true | RepairRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepairRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepairRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepairRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepairRequestMaxAggregateInputType
  }

  export type GetRepairRequestAggregateType<T extends RepairRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRepairRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepairRequest[P]>
      : GetScalarType<T[P], AggregateRepairRequest[P]>
  }




  export type RepairRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairRequestWhereInput
    orderBy?: RepairRequestOrderByWithAggregationInput | RepairRequestOrderByWithAggregationInput[]
    by: RepairRequestScalarFieldEnum[] | RepairRequestScalarFieldEnum
    having?: RepairRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepairRequestCountAggregateInputType | true
    _avg?: RepairRequestAvgAggregateInputType
    _sum?: RepairRequestSumAggregateInputType
    _min?: RepairRequestMinAggregateInputType
    _max?: RepairRequestMaxAggregateInputType
  }

  export type RepairRequestGroupByOutputType = {
    id: number
    printerId: number
    description: string
    accessories: string | null
    statusId: number
    createdAt: Date
    updatedAt: Date
    _count: RepairRequestCountAggregateOutputType | null
    _avg: RepairRequestAvgAggregateOutputType | null
    _sum: RepairRequestSumAggregateOutputType | null
    _min: RepairRequestMinAggregateOutputType | null
    _max: RepairRequestMaxAggregateOutputType | null
  }

  type GetRepairRequestGroupByPayload<T extends RepairRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepairRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepairRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepairRequestGroupByOutputType[P]>
            : GetScalarType<T[P], RepairRequestGroupByOutputType[P]>
        }
      >
    >


  export type RepairRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    printerId?: boolean
    description?: boolean
    accessories?: boolean
    statusId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    printer?: boolean | PrinterDefaultArgs<ExtArgs>
    status?: boolean | RepairStatusDefaultArgs<ExtArgs>
    repairParts?: boolean | RepairRequest$repairPartsArgs<ExtArgs>
    shipping?: boolean | RepairRequest$shippingArgs<ExtArgs>
    notes?: boolean | RepairRequest$notesArgs<ExtArgs>
    _count?: boolean | RepairRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repairRequest"]>

  export type RepairRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    printerId?: boolean
    description?: boolean
    accessories?: boolean
    statusId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    printer?: boolean | PrinterDefaultArgs<ExtArgs>
    status?: boolean | RepairStatusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repairRequest"]>

  export type RepairRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    printerId?: boolean
    description?: boolean
    accessories?: boolean
    statusId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    printer?: boolean | PrinterDefaultArgs<ExtArgs>
    status?: boolean | RepairStatusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repairRequest"]>

  export type RepairRequestSelectScalar = {
    id?: boolean
    printerId?: boolean
    description?: boolean
    accessories?: boolean
    statusId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RepairRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "printerId" | "description" | "accessories" | "statusId" | "createdAt" | "updatedAt", ExtArgs["result"]["repairRequest"]>
  export type RepairRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    printer?: boolean | PrinterDefaultArgs<ExtArgs>
    status?: boolean | RepairStatusDefaultArgs<ExtArgs>
    repairParts?: boolean | RepairRequest$repairPartsArgs<ExtArgs>
    shipping?: boolean | RepairRequest$shippingArgs<ExtArgs>
    notes?: boolean | RepairRequest$notesArgs<ExtArgs>
    _count?: boolean | RepairRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RepairRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    printer?: boolean | PrinterDefaultArgs<ExtArgs>
    status?: boolean | RepairStatusDefaultArgs<ExtArgs>
  }
  export type RepairRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    printer?: boolean | PrinterDefaultArgs<ExtArgs>
    status?: boolean | RepairStatusDefaultArgs<ExtArgs>
  }

  export type $RepairRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RepairRequest"
    objects: {
      printer: Prisma.$PrinterPayload<ExtArgs>
      status: Prisma.$RepairStatusPayload<ExtArgs>
      repairParts: Prisma.$RepairPartPayload<ExtArgs>[]
      shipping: Prisma.$ShippingPayload<ExtArgs> | null
      notes: Prisma.$NotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      printerId: number
      description: string
      accessories: string | null
      statusId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["repairRequest"]>
    composites: {}
  }

  type RepairRequestGetPayload<S extends boolean | null | undefined | RepairRequestDefaultArgs> = $Result.GetResult<Prisma.$RepairRequestPayload, S>

  type RepairRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepairRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepairRequestCountAggregateInputType | true
    }

  export interface RepairRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RepairRequest'], meta: { name: 'RepairRequest' } }
    /**
     * Find zero or one RepairRequest that matches the filter.
     * @param {RepairRequestFindUniqueArgs} args - Arguments to find a RepairRequest
     * @example
     * // Get one RepairRequest
     * const repairRequest = await prisma.repairRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepairRequestFindUniqueArgs>(args: SelectSubset<T, RepairRequestFindUniqueArgs<ExtArgs>>): Prisma__RepairRequestClient<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RepairRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepairRequestFindUniqueOrThrowArgs} args - Arguments to find a RepairRequest
     * @example
     * // Get one RepairRequest
     * const repairRequest = await prisma.repairRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepairRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, RepairRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepairRequestClient<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepairRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairRequestFindFirstArgs} args - Arguments to find a RepairRequest
     * @example
     * // Get one RepairRequest
     * const repairRequest = await prisma.repairRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepairRequestFindFirstArgs>(args?: SelectSubset<T, RepairRequestFindFirstArgs<ExtArgs>>): Prisma__RepairRequestClient<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepairRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairRequestFindFirstOrThrowArgs} args - Arguments to find a RepairRequest
     * @example
     * // Get one RepairRequest
     * const repairRequest = await prisma.repairRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepairRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, RepairRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepairRequestClient<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RepairRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RepairRequests
     * const repairRequests = await prisma.repairRequest.findMany()
     * 
     * // Get first 10 RepairRequests
     * const repairRequests = await prisma.repairRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repairRequestWithIdOnly = await prisma.repairRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepairRequestFindManyArgs>(args?: SelectSubset<T, RepairRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RepairRequest.
     * @param {RepairRequestCreateArgs} args - Arguments to create a RepairRequest.
     * @example
     * // Create one RepairRequest
     * const RepairRequest = await prisma.repairRequest.create({
     *   data: {
     *     // ... data to create a RepairRequest
     *   }
     * })
     * 
     */
    create<T extends RepairRequestCreateArgs>(args: SelectSubset<T, RepairRequestCreateArgs<ExtArgs>>): Prisma__RepairRequestClient<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RepairRequests.
     * @param {RepairRequestCreateManyArgs} args - Arguments to create many RepairRequests.
     * @example
     * // Create many RepairRequests
     * const repairRequest = await prisma.repairRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepairRequestCreateManyArgs>(args?: SelectSubset<T, RepairRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RepairRequests and returns the data saved in the database.
     * @param {RepairRequestCreateManyAndReturnArgs} args - Arguments to create many RepairRequests.
     * @example
     * // Create many RepairRequests
     * const repairRequest = await prisma.repairRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RepairRequests and only return the `id`
     * const repairRequestWithIdOnly = await prisma.repairRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepairRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, RepairRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RepairRequest.
     * @param {RepairRequestDeleteArgs} args - Arguments to delete one RepairRequest.
     * @example
     * // Delete one RepairRequest
     * const RepairRequest = await prisma.repairRequest.delete({
     *   where: {
     *     // ... filter to delete one RepairRequest
     *   }
     * })
     * 
     */
    delete<T extends RepairRequestDeleteArgs>(args: SelectSubset<T, RepairRequestDeleteArgs<ExtArgs>>): Prisma__RepairRequestClient<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RepairRequest.
     * @param {RepairRequestUpdateArgs} args - Arguments to update one RepairRequest.
     * @example
     * // Update one RepairRequest
     * const repairRequest = await prisma.repairRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepairRequestUpdateArgs>(args: SelectSubset<T, RepairRequestUpdateArgs<ExtArgs>>): Prisma__RepairRequestClient<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RepairRequests.
     * @param {RepairRequestDeleteManyArgs} args - Arguments to filter RepairRequests to delete.
     * @example
     * // Delete a few RepairRequests
     * const { count } = await prisma.repairRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepairRequestDeleteManyArgs>(args?: SelectSubset<T, RepairRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepairRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RepairRequests
     * const repairRequest = await prisma.repairRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepairRequestUpdateManyArgs>(args: SelectSubset<T, RepairRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepairRequests and returns the data updated in the database.
     * @param {RepairRequestUpdateManyAndReturnArgs} args - Arguments to update many RepairRequests.
     * @example
     * // Update many RepairRequests
     * const repairRequest = await prisma.repairRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RepairRequests and only return the `id`
     * const repairRequestWithIdOnly = await prisma.repairRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RepairRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, RepairRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RepairRequest.
     * @param {RepairRequestUpsertArgs} args - Arguments to update or create a RepairRequest.
     * @example
     * // Update or create a RepairRequest
     * const repairRequest = await prisma.repairRequest.upsert({
     *   create: {
     *     // ... data to create a RepairRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RepairRequest we want to update
     *   }
     * })
     */
    upsert<T extends RepairRequestUpsertArgs>(args: SelectSubset<T, RepairRequestUpsertArgs<ExtArgs>>): Prisma__RepairRequestClient<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RepairRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairRequestCountArgs} args - Arguments to filter RepairRequests to count.
     * @example
     * // Count the number of RepairRequests
     * const count = await prisma.repairRequest.count({
     *   where: {
     *     // ... the filter for the RepairRequests we want to count
     *   }
     * })
    **/
    count<T extends RepairRequestCountArgs>(
      args?: Subset<T, RepairRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepairRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RepairRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RepairRequestAggregateArgs>(args: Subset<T, RepairRequestAggregateArgs>): Prisma.PrismaPromise<GetRepairRequestAggregateType<T>>

    /**
     * Group by RepairRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RepairRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepairRequestGroupByArgs['orderBy'] }
        : { orderBy?: RepairRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RepairRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepairRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RepairRequest model
   */
  readonly fields: RepairRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RepairRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepairRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    printer<T extends PrinterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PrinterDefaultArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    status<T extends RepairStatusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepairStatusDefaultArgs<ExtArgs>>): Prisma__RepairStatusClient<$Result.GetResult<Prisma.$RepairStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    repairParts<T extends RepairRequest$repairPartsArgs<ExtArgs> = {}>(args?: Subset<T, RepairRequest$repairPartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairPartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shipping<T extends RepairRequest$shippingArgs<ExtArgs> = {}>(args?: Subset<T, RepairRequest$shippingArgs<ExtArgs>>): Prisma__ShippingClient<$Result.GetResult<Prisma.$ShippingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notes<T extends RepairRequest$notesArgs<ExtArgs> = {}>(args?: Subset<T, RepairRequest$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RepairRequest model
   */
  interface RepairRequestFieldRefs {
    readonly id: FieldRef<"RepairRequest", 'Int'>
    readonly printerId: FieldRef<"RepairRequest", 'Int'>
    readonly description: FieldRef<"RepairRequest", 'String'>
    readonly accessories: FieldRef<"RepairRequest", 'String'>
    readonly statusId: FieldRef<"RepairRequest", 'Int'>
    readonly createdAt: FieldRef<"RepairRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"RepairRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RepairRequest findUnique
   */
  export type RepairRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestInclude<ExtArgs> | null
    /**
     * Filter, which RepairRequest to fetch.
     */
    where: RepairRequestWhereUniqueInput
  }

  /**
   * RepairRequest findUniqueOrThrow
   */
  export type RepairRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestInclude<ExtArgs> | null
    /**
     * Filter, which RepairRequest to fetch.
     */
    where: RepairRequestWhereUniqueInput
  }

  /**
   * RepairRequest findFirst
   */
  export type RepairRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestInclude<ExtArgs> | null
    /**
     * Filter, which RepairRequest to fetch.
     */
    where?: RepairRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairRequests to fetch.
     */
    orderBy?: RepairRequestOrderByWithRelationInput | RepairRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepairRequests.
     */
    cursor?: RepairRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepairRequests.
     */
    distinct?: RepairRequestScalarFieldEnum | RepairRequestScalarFieldEnum[]
  }

  /**
   * RepairRequest findFirstOrThrow
   */
  export type RepairRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestInclude<ExtArgs> | null
    /**
     * Filter, which RepairRequest to fetch.
     */
    where?: RepairRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairRequests to fetch.
     */
    orderBy?: RepairRequestOrderByWithRelationInput | RepairRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepairRequests.
     */
    cursor?: RepairRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepairRequests.
     */
    distinct?: RepairRequestScalarFieldEnum | RepairRequestScalarFieldEnum[]
  }

  /**
   * RepairRequest findMany
   */
  export type RepairRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestInclude<ExtArgs> | null
    /**
     * Filter, which RepairRequests to fetch.
     */
    where?: RepairRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairRequests to fetch.
     */
    orderBy?: RepairRequestOrderByWithRelationInput | RepairRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RepairRequests.
     */
    cursor?: RepairRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairRequests.
     */
    skip?: number
    distinct?: RepairRequestScalarFieldEnum | RepairRequestScalarFieldEnum[]
  }

  /**
   * RepairRequest create
   */
  export type RepairRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a RepairRequest.
     */
    data: XOR<RepairRequestCreateInput, RepairRequestUncheckedCreateInput>
  }

  /**
   * RepairRequest createMany
   */
  export type RepairRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RepairRequests.
     */
    data: RepairRequestCreateManyInput | RepairRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RepairRequest createManyAndReturn
   */
  export type RepairRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * The data used to create many RepairRequests.
     */
    data: RepairRequestCreateManyInput | RepairRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RepairRequest update
   */
  export type RepairRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a RepairRequest.
     */
    data: XOR<RepairRequestUpdateInput, RepairRequestUncheckedUpdateInput>
    /**
     * Choose, which RepairRequest to update.
     */
    where: RepairRequestWhereUniqueInput
  }

  /**
   * RepairRequest updateMany
   */
  export type RepairRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RepairRequests.
     */
    data: XOR<RepairRequestUpdateManyMutationInput, RepairRequestUncheckedUpdateManyInput>
    /**
     * Filter which RepairRequests to update
     */
    where?: RepairRequestWhereInput
    /**
     * Limit how many RepairRequests to update.
     */
    limit?: number
  }

  /**
   * RepairRequest updateManyAndReturn
   */
  export type RepairRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * The data used to update RepairRequests.
     */
    data: XOR<RepairRequestUpdateManyMutationInput, RepairRequestUncheckedUpdateManyInput>
    /**
     * Filter which RepairRequests to update
     */
    where?: RepairRequestWhereInput
    /**
     * Limit how many RepairRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RepairRequest upsert
   */
  export type RepairRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the RepairRequest to update in case it exists.
     */
    where: RepairRequestWhereUniqueInput
    /**
     * In case the RepairRequest found by the `where` argument doesn't exist, create a new RepairRequest with this data.
     */
    create: XOR<RepairRequestCreateInput, RepairRequestUncheckedCreateInput>
    /**
     * In case the RepairRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepairRequestUpdateInput, RepairRequestUncheckedUpdateInput>
  }

  /**
   * RepairRequest delete
   */
  export type RepairRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestInclude<ExtArgs> | null
    /**
     * Filter which RepairRequest to delete.
     */
    where: RepairRequestWhereUniqueInput
  }

  /**
   * RepairRequest deleteMany
   */
  export type RepairRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepairRequests to delete
     */
    where?: RepairRequestWhereInput
    /**
     * Limit how many RepairRequests to delete.
     */
    limit?: number
  }

  /**
   * RepairRequest.repairParts
   */
  export type RepairRequest$repairPartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairPart
     */
    select?: RepairPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairPart
     */
    omit?: RepairPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairPartInclude<ExtArgs> | null
    where?: RepairPartWhereInput
    orderBy?: RepairPartOrderByWithRelationInput | RepairPartOrderByWithRelationInput[]
    cursor?: RepairPartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepairPartScalarFieldEnum | RepairPartScalarFieldEnum[]
  }

  /**
   * RepairRequest.shipping
   */
  export type RepairRequest$shippingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipping
     */
    select?: ShippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipping
     */
    omit?: ShippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingInclude<ExtArgs> | null
    where?: ShippingWhereInput
  }

  /**
   * RepairRequest.notes
   */
  export type RepairRequest$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * RepairRequest without action
   */
  export type RepairRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairRequest
     */
    select?: RepairRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairRequest
     */
    omit?: RepairRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairRequestInclude<ExtArgs> | null
  }


  /**
   * Model RepairPart
   */

  export type AggregateRepairPart = {
    _count: RepairPartCountAggregateOutputType | null
    _avg: RepairPartAvgAggregateOutputType | null
    _sum: RepairPartSumAggregateOutputType | null
    _min: RepairPartMinAggregateOutputType | null
    _max: RepairPartMaxAggregateOutputType | null
  }

  export type RepairPartAvgAggregateOutputType = {
    id: number | null
    repairRequestId: number | null
    quantity: number | null
    price: number | null
  }

  export type RepairPartSumAggregateOutputType = {
    id: number | null
    repairRequestId: number | null
    quantity: number | null
    price: number | null
  }

  export type RepairPartMinAggregateOutputType = {
    id: number | null
    repairRequestId: number | null
    partName: string | null
    quantity: number | null
    price: number | null
  }

  export type RepairPartMaxAggregateOutputType = {
    id: number | null
    repairRequestId: number | null
    partName: string | null
    quantity: number | null
    price: number | null
  }

  export type RepairPartCountAggregateOutputType = {
    id: number
    repairRequestId: number
    partName: number
    quantity: number
    price: number
    _all: number
  }


  export type RepairPartAvgAggregateInputType = {
    id?: true
    repairRequestId?: true
    quantity?: true
    price?: true
  }

  export type RepairPartSumAggregateInputType = {
    id?: true
    repairRequestId?: true
    quantity?: true
    price?: true
  }

  export type RepairPartMinAggregateInputType = {
    id?: true
    repairRequestId?: true
    partName?: true
    quantity?: true
    price?: true
  }

  export type RepairPartMaxAggregateInputType = {
    id?: true
    repairRequestId?: true
    partName?: true
    quantity?: true
    price?: true
  }

  export type RepairPartCountAggregateInputType = {
    id?: true
    repairRequestId?: true
    partName?: true
    quantity?: true
    price?: true
    _all?: true
  }

  export type RepairPartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepairPart to aggregate.
     */
    where?: RepairPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairParts to fetch.
     */
    orderBy?: RepairPartOrderByWithRelationInput | RepairPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepairPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RepairParts
    **/
    _count?: true | RepairPartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepairPartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepairPartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepairPartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepairPartMaxAggregateInputType
  }

  export type GetRepairPartAggregateType<T extends RepairPartAggregateArgs> = {
        [P in keyof T & keyof AggregateRepairPart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepairPart[P]>
      : GetScalarType<T[P], AggregateRepairPart[P]>
  }




  export type RepairPartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepairPartWhereInput
    orderBy?: RepairPartOrderByWithAggregationInput | RepairPartOrderByWithAggregationInput[]
    by: RepairPartScalarFieldEnum[] | RepairPartScalarFieldEnum
    having?: RepairPartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepairPartCountAggregateInputType | true
    _avg?: RepairPartAvgAggregateInputType
    _sum?: RepairPartSumAggregateInputType
    _min?: RepairPartMinAggregateInputType
    _max?: RepairPartMaxAggregateInputType
  }

  export type RepairPartGroupByOutputType = {
    id: number
    repairRequestId: number
    partName: string
    quantity: number
    price: number
    _count: RepairPartCountAggregateOutputType | null
    _avg: RepairPartAvgAggregateOutputType | null
    _sum: RepairPartSumAggregateOutputType | null
    _min: RepairPartMinAggregateOutputType | null
    _max: RepairPartMaxAggregateOutputType | null
  }

  type GetRepairPartGroupByPayload<T extends RepairPartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepairPartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepairPartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepairPartGroupByOutputType[P]>
            : GetScalarType<T[P], RepairPartGroupByOutputType[P]>
        }
      >
    >


  export type RepairPartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repairRequestId?: boolean
    partName?: boolean
    quantity?: boolean
    price?: boolean
    repairRequest?: boolean | RepairRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repairPart"]>

  export type RepairPartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repairRequestId?: boolean
    partName?: boolean
    quantity?: boolean
    price?: boolean
    repairRequest?: boolean | RepairRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repairPart"]>

  export type RepairPartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repairRequestId?: boolean
    partName?: boolean
    quantity?: boolean
    price?: boolean
    repairRequest?: boolean | RepairRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repairPart"]>

  export type RepairPartSelectScalar = {
    id?: boolean
    repairRequestId?: boolean
    partName?: boolean
    quantity?: boolean
    price?: boolean
  }

  export type RepairPartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "repairRequestId" | "partName" | "quantity" | "price", ExtArgs["result"]["repairPart"]>
  export type RepairPartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairRequest?: boolean | RepairRequestDefaultArgs<ExtArgs>
  }
  export type RepairPartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairRequest?: boolean | RepairRequestDefaultArgs<ExtArgs>
  }
  export type RepairPartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairRequest?: boolean | RepairRequestDefaultArgs<ExtArgs>
  }

  export type $RepairPartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RepairPart"
    objects: {
      repairRequest: Prisma.$RepairRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      repairRequestId: number
      partName: string
      quantity: number
      price: number
    }, ExtArgs["result"]["repairPart"]>
    composites: {}
  }

  type RepairPartGetPayload<S extends boolean | null | undefined | RepairPartDefaultArgs> = $Result.GetResult<Prisma.$RepairPartPayload, S>

  type RepairPartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepairPartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepairPartCountAggregateInputType | true
    }

  export interface RepairPartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RepairPart'], meta: { name: 'RepairPart' } }
    /**
     * Find zero or one RepairPart that matches the filter.
     * @param {RepairPartFindUniqueArgs} args - Arguments to find a RepairPart
     * @example
     * // Get one RepairPart
     * const repairPart = await prisma.repairPart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepairPartFindUniqueArgs>(args: SelectSubset<T, RepairPartFindUniqueArgs<ExtArgs>>): Prisma__RepairPartClient<$Result.GetResult<Prisma.$RepairPartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RepairPart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepairPartFindUniqueOrThrowArgs} args - Arguments to find a RepairPart
     * @example
     * // Get one RepairPart
     * const repairPart = await prisma.repairPart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepairPartFindUniqueOrThrowArgs>(args: SelectSubset<T, RepairPartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepairPartClient<$Result.GetResult<Prisma.$RepairPartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepairPart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairPartFindFirstArgs} args - Arguments to find a RepairPart
     * @example
     * // Get one RepairPart
     * const repairPart = await prisma.repairPart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepairPartFindFirstArgs>(args?: SelectSubset<T, RepairPartFindFirstArgs<ExtArgs>>): Prisma__RepairPartClient<$Result.GetResult<Prisma.$RepairPartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RepairPart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairPartFindFirstOrThrowArgs} args - Arguments to find a RepairPart
     * @example
     * // Get one RepairPart
     * const repairPart = await prisma.repairPart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepairPartFindFirstOrThrowArgs>(args?: SelectSubset<T, RepairPartFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepairPartClient<$Result.GetResult<Prisma.$RepairPartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RepairParts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairPartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RepairParts
     * const repairParts = await prisma.repairPart.findMany()
     * 
     * // Get first 10 RepairParts
     * const repairParts = await prisma.repairPart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repairPartWithIdOnly = await prisma.repairPart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepairPartFindManyArgs>(args?: SelectSubset<T, RepairPartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairPartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RepairPart.
     * @param {RepairPartCreateArgs} args - Arguments to create a RepairPart.
     * @example
     * // Create one RepairPart
     * const RepairPart = await prisma.repairPart.create({
     *   data: {
     *     // ... data to create a RepairPart
     *   }
     * })
     * 
     */
    create<T extends RepairPartCreateArgs>(args: SelectSubset<T, RepairPartCreateArgs<ExtArgs>>): Prisma__RepairPartClient<$Result.GetResult<Prisma.$RepairPartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RepairParts.
     * @param {RepairPartCreateManyArgs} args - Arguments to create many RepairParts.
     * @example
     * // Create many RepairParts
     * const repairPart = await prisma.repairPart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepairPartCreateManyArgs>(args?: SelectSubset<T, RepairPartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RepairParts and returns the data saved in the database.
     * @param {RepairPartCreateManyAndReturnArgs} args - Arguments to create many RepairParts.
     * @example
     * // Create many RepairParts
     * const repairPart = await prisma.repairPart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RepairParts and only return the `id`
     * const repairPartWithIdOnly = await prisma.repairPart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepairPartCreateManyAndReturnArgs>(args?: SelectSubset<T, RepairPartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairPartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RepairPart.
     * @param {RepairPartDeleteArgs} args - Arguments to delete one RepairPart.
     * @example
     * // Delete one RepairPart
     * const RepairPart = await prisma.repairPart.delete({
     *   where: {
     *     // ... filter to delete one RepairPart
     *   }
     * })
     * 
     */
    delete<T extends RepairPartDeleteArgs>(args: SelectSubset<T, RepairPartDeleteArgs<ExtArgs>>): Prisma__RepairPartClient<$Result.GetResult<Prisma.$RepairPartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RepairPart.
     * @param {RepairPartUpdateArgs} args - Arguments to update one RepairPart.
     * @example
     * // Update one RepairPart
     * const repairPart = await prisma.repairPart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepairPartUpdateArgs>(args: SelectSubset<T, RepairPartUpdateArgs<ExtArgs>>): Prisma__RepairPartClient<$Result.GetResult<Prisma.$RepairPartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RepairParts.
     * @param {RepairPartDeleteManyArgs} args - Arguments to filter RepairParts to delete.
     * @example
     * // Delete a few RepairParts
     * const { count } = await prisma.repairPart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepairPartDeleteManyArgs>(args?: SelectSubset<T, RepairPartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepairParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairPartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RepairParts
     * const repairPart = await prisma.repairPart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepairPartUpdateManyArgs>(args: SelectSubset<T, RepairPartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RepairParts and returns the data updated in the database.
     * @param {RepairPartUpdateManyAndReturnArgs} args - Arguments to update many RepairParts.
     * @example
     * // Update many RepairParts
     * const repairPart = await prisma.repairPart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RepairParts and only return the `id`
     * const repairPartWithIdOnly = await prisma.repairPart.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RepairPartUpdateManyAndReturnArgs>(args: SelectSubset<T, RepairPartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepairPartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RepairPart.
     * @param {RepairPartUpsertArgs} args - Arguments to update or create a RepairPart.
     * @example
     * // Update or create a RepairPart
     * const repairPart = await prisma.repairPart.upsert({
     *   create: {
     *     // ... data to create a RepairPart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RepairPart we want to update
     *   }
     * })
     */
    upsert<T extends RepairPartUpsertArgs>(args: SelectSubset<T, RepairPartUpsertArgs<ExtArgs>>): Prisma__RepairPartClient<$Result.GetResult<Prisma.$RepairPartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RepairParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairPartCountArgs} args - Arguments to filter RepairParts to count.
     * @example
     * // Count the number of RepairParts
     * const count = await prisma.repairPart.count({
     *   where: {
     *     // ... the filter for the RepairParts we want to count
     *   }
     * })
    **/
    count<T extends RepairPartCountArgs>(
      args?: Subset<T, RepairPartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepairPartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RepairPart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairPartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RepairPartAggregateArgs>(args: Subset<T, RepairPartAggregateArgs>): Prisma.PrismaPromise<GetRepairPartAggregateType<T>>

    /**
     * Group by RepairPart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepairPartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RepairPartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepairPartGroupByArgs['orderBy'] }
        : { orderBy?: RepairPartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RepairPartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepairPartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RepairPart model
   */
  readonly fields: RepairPartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RepairPart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepairPartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repairRequest<T extends RepairRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepairRequestDefaultArgs<ExtArgs>>): Prisma__RepairRequestClient<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RepairPart model
   */
  interface RepairPartFieldRefs {
    readonly id: FieldRef<"RepairPart", 'Int'>
    readonly repairRequestId: FieldRef<"RepairPart", 'Int'>
    readonly partName: FieldRef<"RepairPart", 'String'>
    readonly quantity: FieldRef<"RepairPart", 'Int'>
    readonly price: FieldRef<"RepairPart", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * RepairPart findUnique
   */
  export type RepairPartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairPart
     */
    select?: RepairPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairPart
     */
    omit?: RepairPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairPartInclude<ExtArgs> | null
    /**
     * Filter, which RepairPart to fetch.
     */
    where: RepairPartWhereUniqueInput
  }

  /**
   * RepairPart findUniqueOrThrow
   */
  export type RepairPartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairPart
     */
    select?: RepairPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairPart
     */
    omit?: RepairPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairPartInclude<ExtArgs> | null
    /**
     * Filter, which RepairPart to fetch.
     */
    where: RepairPartWhereUniqueInput
  }

  /**
   * RepairPart findFirst
   */
  export type RepairPartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairPart
     */
    select?: RepairPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairPart
     */
    omit?: RepairPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairPartInclude<ExtArgs> | null
    /**
     * Filter, which RepairPart to fetch.
     */
    where?: RepairPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairParts to fetch.
     */
    orderBy?: RepairPartOrderByWithRelationInput | RepairPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepairParts.
     */
    cursor?: RepairPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepairParts.
     */
    distinct?: RepairPartScalarFieldEnum | RepairPartScalarFieldEnum[]
  }

  /**
   * RepairPart findFirstOrThrow
   */
  export type RepairPartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairPart
     */
    select?: RepairPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairPart
     */
    omit?: RepairPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairPartInclude<ExtArgs> | null
    /**
     * Filter, which RepairPart to fetch.
     */
    where?: RepairPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairParts to fetch.
     */
    orderBy?: RepairPartOrderByWithRelationInput | RepairPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RepairParts.
     */
    cursor?: RepairPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairParts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RepairParts.
     */
    distinct?: RepairPartScalarFieldEnum | RepairPartScalarFieldEnum[]
  }

  /**
   * RepairPart findMany
   */
  export type RepairPartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairPart
     */
    select?: RepairPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairPart
     */
    omit?: RepairPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairPartInclude<ExtArgs> | null
    /**
     * Filter, which RepairParts to fetch.
     */
    where?: RepairPartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RepairParts to fetch.
     */
    orderBy?: RepairPartOrderByWithRelationInput | RepairPartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RepairParts.
     */
    cursor?: RepairPartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RepairParts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RepairParts.
     */
    skip?: number
    distinct?: RepairPartScalarFieldEnum | RepairPartScalarFieldEnum[]
  }

  /**
   * RepairPart create
   */
  export type RepairPartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairPart
     */
    select?: RepairPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairPart
     */
    omit?: RepairPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairPartInclude<ExtArgs> | null
    /**
     * The data needed to create a RepairPart.
     */
    data: XOR<RepairPartCreateInput, RepairPartUncheckedCreateInput>
  }

  /**
   * RepairPart createMany
   */
  export type RepairPartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RepairParts.
     */
    data: RepairPartCreateManyInput | RepairPartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RepairPart createManyAndReturn
   */
  export type RepairPartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairPart
     */
    select?: RepairPartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RepairPart
     */
    omit?: RepairPartOmit<ExtArgs> | null
    /**
     * The data used to create many RepairParts.
     */
    data: RepairPartCreateManyInput | RepairPartCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairPartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RepairPart update
   */
  export type RepairPartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairPart
     */
    select?: RepairPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairPart
     */
    omit?: RepairPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairPartInclude<ExtArgs> | null
    /**
     * The data needed to update a RepairPart.
     */
    data: XOR<RepairPartUpdateInput, RepairPartUncheckedUpdateInput>
    /**
     * Choose, which RepairPart to update.
     */
    where: RepairPartWhereUniqueInput
  }

  /**
   * RepairPart updateMany
   */
  export type RepairPartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RepairParts.
     */
    data: XOR<RepairPartUpdateManyMutationInput, RepairPartUncheckedUpdateManyInput>
    /**
     * Filter which RepairParts to update
     */
    where?: RepairPartWhereInput
    /**
     * Limit how many RepairParts to update.
     */
    limit?: number
  }

  /**
   * RepairPart updateManyAndReturn
   */
  export type RepairPartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairPart
     */
    select?: RepairPartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RepairPart
     */
    omit?: RepairPartOmit<ExtArgs> | null
    /**
     * The data used to update RepairParts.
     */
    data: XOR<RepairPartUpdateManyMutationInput, RepairPartUncheckedUpdateManyInput>
    /**
     * Filter which RepairParts to update
     */
    where?: RepairPartWhereInput
    /**
     * Limit how many RepairParts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairPartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RepairPart upsert
   */
  export type RepairPartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairPart
     */
    select?: RepairPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairPart
     */
    omit?: RepairPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairPartInclude<ExtArgs> | null
    /**
     * The filter to search for the RepairPart to update in case it exists.
     */
    where: RepairPartWhereUniqueInput
    /**
     * In case the RepairPart found by the `where` argument doesn't exist, create a new RepairPart with this data.
     */
    create: XOR<RepairPartCreateInput, RepairPartUncheckedCreateInput>
    /**
     * In case the RepairPart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepairPartUpdateInput, RepairPartUncheckedUpdateInput>
  }

  /**
   * RepairPart delete
   */
  export type RepairPartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairPart
     */
    select?: RepairPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairPart
     */
    omit?: RepairPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairPartInclude<ExtArgs> | null
    /**
     * Filter which RepairPart to delete.
     */
    where: RepairPartWhereUniqueInput
  }

  /**
   * RepairPart deleteMany
   */
  export type RepairPartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RepairParts to delete
     */
    where?: RepairPartWhereInput
    /**
     * Limit how many RepairParts to delete.
     */
    limit?: number
  }

  /**
   * RepairPart without action
   */
  export type RepairPartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepairPart
     */
    select?: RepairPartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RepairPart
     */
    omit?: RepairPartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepairPartInclude<ExtArgs> | null
  }


  /**
   * Model Shipping
   */

  export type AggregateShipping = {
    _count: ShippingCountAggregateOutputType | null
    _avg: ShippingAvgAggregateOutputType | null
    _sum: ShippingSumAggregateOutputType | null
    _min: ShippingMinAggregateOutputType | null
    _max: ShippingMaxAggregateOutputType | null
  }

  export type ShippingAvgAggregateOutputType = {
    id: number | null
    repairRequestId: number | null
  }

  export type ShippingSumAggregateOutputType = {
    id: number | null
    repairRequestId: number | null
  }

  export type ShippingMinAggregateOutputType = {
    id: number | null
    repairRequestId: number | null
    courier: string | null
    trackingNumber: string | null
    shippedAt: Date | null
    status: string | null
  }

  export type ShippingMaxAggregateOutputType = {
    id: number | null
    repairRequestId: number | null
    courier: string | null
    trackingNumber: string | null
    shippedAt: Date | null
    status: string | null
  }

  export type ShippingCountAggregateOutputType = {
    id: number
    repairRequestId: number
    courier: number
    trackingNumber: number
    shippedAt: number
    status: number
    _all: number
  }


  export type ShippingAvgAggregateInputType = {
    id?: true
    repairRequestId?: true
  }

  export type ShippingSumAggregateInputType = {
    id?: true
    repairRequestId?: true
  }

  export type ShippingMinAggregateInputType = {
    id?: true
    repairRequestId?: true
    courier?: true
    trackingNumber?: true
    shippedAt?: true
    status?: true
  }

  export type ShippingMaxAggregateInputType = {
    id?: true
    repairRequestId?: true
    courier?: true
    trackingNumber?: true
    shippedAt?: true
    status?: true
  }

  export type ShippingCountAggregateInputType = {
    id?: true
    repairRequestId?: true
    courier?: true
    trackingNumber?: true
    shippedAt?: true
    status?: true
    _all?: true
  }

  export type ShippingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipping to aggregate.
     */
    where?: ShippingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shippings to fetch.
     */
    orderBy?: ShippingOrderByWithRelationInput | ShippingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShippingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shippings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shippings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shippings
    **/
    _count?: true | ShippingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShippingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShippingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShippingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShippingMaxAggregateInputType
  }

  export type GetShippingAggregateType<T extends ShippingAggregateArgs> = {
        [P in keyof T & keyof AggregateShipping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipping[P]>
      : GetScalarType<T[P], AggregateShipping[P]>
  }




  export type ShippingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShippingWhereInput
    orderBy?: ShippingOrderByWithAggregationInput | ShippingOrderByWithAggregationInput[]
    by: ShippingScalarFieldEnum[] | ShippingScalarFieldEnum
    having?: ShippingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShippingCountAggregateInputType | true
    _avg?: ShippingAvgAggregateInputType
    _sum?: ShippingSumAggregateInputType
    _min?: ShippingMinAggregateInputType
    _max?: ShippingMaxAggregateInputType
  }

  export type ShippingGroupByOutputType = {
    id: number
    repairRequestId: number
    courier: string
    trackingNumber: string
    shippedAt: Date | null
    status: string
    _count: ShippingCountAggregateOutputType | null
    _avg: ShippingAvgAggregateOutputType | null
    _sum: ShippingSumAggregateOutputType | null
    _min: ShippingMinAggregateOutputType | null
    _max: ShippingMaxAggregateOutputType | null
  }

  type GetShippingGroupByPayload<T extends ShippingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShippingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShippingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShippingGroupByOutputType[P]>
            : GetScalarType<T[P], ShippingGroupByOutputType[P]>
        }
      >
    >


  export type ShippingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repairRequestId?: boolean
    courier?: boolean
    trackingNumber?: boolean
    shippedAt?: boolean
    status?: boolean
    repairRequest?: boolean | RepairRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipping"]>

  export type ShippingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repairRequestId?: boolean
    courier?: boolean
    trackingNumber?: boolean
    shippedAt?: boolean
    status?: boolean
    repairRequest?: boolean | RepairRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipping"]>

  export type ShippingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repairRequestId?: boolean
    courier?: boolean
    trackingNumber?: boolean
    shippedAt?: boolean
    status?: boolean
    repairRequest?: boolean | RepairRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipping"]>

  export type ShippingSelectScalar = {
    id?: boolean
    repairRequestId?: boolean
    courier?: boolean
    trackingNumber?: boolean
    shippedAt?: boolean
    status?: boolean
  }

  export type ShippingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "repairRequestId" | "courier" | "trackingNumber" | "shippedAt" | "status", ExtArgs["result"]["shipping"]>
  export type ShippingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairRequest?: boolean | RepairRequestDefaultArgs<ExtArgs>
  }
  export type ShippingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairRequest?: boolean | RepairRequestDefaultArgs<ExtArgs>
  }
  export type ShippingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairRequest?: boolean | RepairRequestDefaultArgs<ExtArgs>
  }

  export type $ShippingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shipping"
    objects: {
      repairRequest: Prisma.$RepairRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      repairRequestId: number
      courier: string
      trackingNumber: string
      shippedAt: Date | null
      status: string
    }, ExtArgs["result"]["shipping"]>
    composites: {}
  }

  type ShippingGetPayload<S extends boolean | null | undefined | ShippingDefaultArgs> = $Result.GetResult<Prisma.$ShippingPayload, S>

  type ShippingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShippingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShippingCountAggregateInputType | true
    }

  export interface ShippingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shipping'], meta: { name: 'Shipping' } }
    /**
     * Find zero or one Shipping that matches the filter.
     * @param {ShippingFindUniqueArgs} args - Arguments to find a Shipping
     * @example
     * // Get one Shipping
     * const shipping = await prisma.shipping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShippingFindUniqueArgs>(args: SelectSubset<T, ShippingFindUniqueArgs<ExtArgs>>): Prisma__ShippingClient<$Result.GetResult<Prisma.$ShippingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shipping that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShippingFindUniqueOrThrowArgs} args - Arguments to find a Shipping
     * @example
     * // Get one Shipping
     * const shipping = await prisma.shipping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShippingFindUniqueOrThrowArgs>(args: SelectSubset<T, ShippingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShippingClient<$Result.GetResult<Prisma.$ShippingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingFindFirstArgs} args - Arguments to find a Shipping
     * @example
     * // Get one Shipping
     * const shipping = await prisma.shipping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShippingFindFirstArgs>(args?: SelectSubset<T, ShippingFindFirstArgs<ExtArgs>>): Prisma__ShippingClient<$Result.GetResult<Prisma.$ShippingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingFindFirstOrThrowArgs} args - Arguments to find a Shipping
     * @example
     * // Get one Shipping
     * const shipping = await prisma.shipping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShippingFindFirstOrThrowArgs>(args?: SelectSubset<T, ShippingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShippingClient<$Result.GetResult<Prisma.$ShippingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shippings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shippings
     * const shippings = await prisma.shipping.findMany()
     * 
     * // Get first 10 Shippings
     * const shippings = await prisma.shipping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shippingWithIdOnly = await prisma.shipping.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShippingFindManyArgs>(args?: SelectSubset<T, ShippingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShippingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shipping.
     * @param {ShippingCreateArgs} args - Arguments to create a Shipping.
     * @example
     * // Create one Shipping
     * const Shipping = await prisma.shipping.create({
     *   data: {
     *     // ... data to create a Shipping
     *   }
     * })
     * 
     */
    create<T extends ShippingCreateArgs>(args: SelectSubset<T, ShippingCreateArgs<ExtArgs>>): Prisma__ShippingClient<$Result.GetResult<Prisma.$ShippingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shippings.
     * @param {ShippingCreateManyArgs} args - Arguments to create many Shippings.
     * @example
     * // Create many Shippings
     * const shipping = await prisma.shipping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShippingCreateManyArgs>(args?: SelectSubset<T, ShippingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shippings and returns the data saved in the database.
     * @param {ShippingCreateManyAndReturnArgs} args - Arguments to create many Shippings.
     * @example
     * // Create many Shippings
     * const shipping = await prisma.shipping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shippings and only return the `id`
     * const shippingWithIdOnly = await prisma.shipping.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShippingCreateManyAndReturnArgs>(args?: SelectSubset<T, ShippingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShippingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shipping.
     * @param {ShippingDeleteArgs} args - Arguments to delete one Shipping.
     * @example
     * // Delete one Shipping
     * const Shipping = await prisma.shipping.delete({
     *   where: {
     *     // ... filter to delete one Shipping
     *   }
     * })
     * 
     */
    delete<T extends ShippingDeleteArgs>(args: SelectSubset<T, ShippingDeleteArgs<ExtArgs>>): Prisma__ShippingClient<$Result.GetResult<Prisma.$ShippingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shipping.
     * @param {ShippingUpdateArgs} args - Arguments to update one Shipping.
     * @example
     * // Update one Shipping
     * const shipping = await prisma.shipping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShippingUpdateArgs>(args: SelectSubset<T, ShippingUpdateArgs<ExtArgs>>): Prisma__ShippingClient<$Result.GetResult<Prisma.$ShippingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shippings.
     * @param {ShippingDeleteManyArgs} args - Arguments to filter Shippings to delete.
     * @example
     * // Delete a few Shippings
     * const { count } = await prisma.shipping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShippingDeleteManyArgs>(args?: SelectSubset<T, ShippingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shippings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shippings
     * const shipping = await prisma.shipping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShippingUpdateManyArgs>(args: SelectSubset<T, ShippingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shippings and returns the data updated in the database.
     * @param {ShippingUpdateManyAndReturnArgs} args - Arguments to update many Shippings.
     * @example
     * // Update many Shippings
     * const shipping = await prisma.shipping.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shippings and only return the `id`
     * const shippingWithIdOnly = await prisma.shipping.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShippingUpdateManyAndReturnArgs>(args: SelectSubset<T, ShippingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShippingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shipping.
     * @param {ShippingUpsertArgs} args - Arguments to update or create a Shipping.
     * @example
     * // Update or create a Shipping
     * const shipping = await prisma.shipping.upsert({
     *   create: {
     *     // ... data to create a Shipping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shipping we want to update
     *   }
     * })
     */
    upsert<T extends ShippingUpsertArgs>(args: SelectSubset<T, ShippingUpsertArgs<ExtArgs>>): Prisma__ShippingClient<$Result.GetResult<Prisma.$ShippingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shippings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingCountArgs} args - Arguments to filter Shippings to count.
     * @example
     * // Count the number of Shippings
     * const count = await prisma.shipping.count({
     *   where: {
     *     // ... the filter for the Shippings we want to count
     *   }
     * })
    **/
    count<T extends ShippingCountArgs>(
      args?: Subset<T, ShippingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShippingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shipping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShippingAggregateArgs>(args: Subset<T, ShippingAggregateArgs>): Prisma.PrismaPromise<GetShippingAggregateType<T>>

    /**
     * Group by Shipping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShippingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShippingGroupByArgs['orderBy'] }
        : { orderBy?: ShippingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShippingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShippingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shipping model
   */
  readonly fields: ShippingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shipping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShippingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repairRequest<T extends RepairRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepairRequestDefaultArgs<ExtArgs>>): Prisma__RepairRequestClient<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shipping model
   */
  interface ShippingFieldRefs {
    readonly id: FieldRef<"Shipping", 'Int'>
    readonly repairRequestId: FieldRef<"Shipping", 'Int'>
    readonly courier: FieldRef<"Shipping", 'String'>
    readonly trackingNumber: FieldRef<"Shipping", 'String'>
    readonly shippedAt: FieldRef<"Shipping", 'DateTime'>
    readonly status: FieldRef<"Shipping", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Shipping findUnique
   */
  export type ShippingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipping
     */
    select?: ShippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipping
     */
    omit?: ShippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingInclude<ExtArgs> | null
    /**
     * Filter, which Shipping to fetch.
     */
    where: ShippingWhereUniqueInput
  }

  /**
   * Shipping findUniqueOrThrow
   */
  export type ShippingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipping
     */
    select?: ShippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipping
     */
    omit?: ShippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingInclude<ExtArgs> | null
    /**
     * Filter, which Shipping to fetch.
     */
    where: ShippingWhereUniqueInput
  }

  /**
   * Shipping findFirst
   */
  export type ShippingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipping
     */
    select?: ShippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipping
     */
    omit?: ShippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingInclude<ExtArgs> | null
    /**
     * Filter, which Shipping to fetch.
     */
    where?: ShippingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shippings to fetch.
     */
    orderBy?: ShippingOrderByWithRelationInput | ShippingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shippings.
     */
    cursor?: ShippingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shippings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shippings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shippings.
     */
    distinct?: ShippingScalarFieldEnum | ShippingScalarFieldEnum[]
  }

  /**
   * Shipping findFirstOrThrow
   */
  export type ShippingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipping
     */
    select?: ShippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipping
     */
    omit?: ShippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingInclude<ExtArgs> | null
    /**
     * Filter, which Shipping to fetch.
     */
    where?: ShippingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shippings to fetch.
     */
    orderBy?: ShippingOrderByWithRelationInput | ShippingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shippings.
     */
    cursor?: ShippingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shippings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shippings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shippings.
     */
    distinct?: ShippingScalarFieldEnum | ShippingScalarFieldEnum[]
  }

  /**
   * Shipping findMany
   */
  export type ShippingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipping
     */
    select?: ShippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipping
     */
    omit?: ShippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingInclude<ExtArgs> | null
    /**
     * Filter, which Shippings to fetch.
     */
    where?: ShippingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shippings to fetch.
     */
    orderBy?: ShippingOrderByWithRelationInput | ShippingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shippings.
     */
    cursor?: ShippingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shippings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shippings.
     */
    skip?: number
    distinct?: ShippingScalarFieldEnum | ShippingScalarFieldEnum[]
  }

  /**
   * Shipping create
   */
  export type ShippingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipping
     */
    select?: ShippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipping
     */
    omit?: ShippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingInclude<ExtArgs> | null
    /**
     * The data needed to create a Shipping.
     */
    data: XOR<ShippingCreateInput, ShippingUncheckedCreateInput>
  }

  /**
   * Shipping createMany
   */
  export type ShippingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shippings.
     */
    data: ShippingCreateManyInput | ShippingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shipping createManyAndReturn
   */
  export type ShippingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipping
     */
    select?: ShippingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shipping
     */
    omit?: ShippingOmit<ExtArgs> | null
    /**
     * The data used to create many Shippings.
     */
    data: ShippingCreateManyInput | ShippingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shipping update
   */
  export type ShippingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipping
     */
    select?: ShippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipping
     */
    omit?: ShippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingInclude<ExtArgs> | null
    /**
     * The data needed to update a Shipping.
     */
    data: XOR<ShippingUpdateInput, ShippingUncheckedUpdateInput>
    /**
     * Choose, which Shipping to update.
     */
    where: ShippingWhereUniqueInput
  }

  /**
   * Shipping updateMany
   */
  export type ShippingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shippings.
     */
    data: XOR<ShippingUpdateManyMutationInput, ShippingUncheckedUpdateManyInput>
    /**
     * Filter which Shippings to update
     */
    where?: ShippingWhereInput
    /**
     * Limit how many Shippings to update.
     */
    limit?: number
  }

  /**
   * Shipping updateManyAndReturn
   */
  export type ShippingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipping
     */
    select?: ShippingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shipping
     */
    omit?: ShippingOmit<ExtArgs> | null
    /**
     * The data used to update Shippings.
     */
    data: XOR<ShippingUpdateManyMutationInput, ShippingUncheckedUpdateManyInput>
    /**
     * Filter which Shippings to update
     */
    where?: ShippingWhereInput
    /**
     * Limit how many Shippings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shipping upsert
   */
  export type ShippingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipping
     */
    select?: ShippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipping
     */
    omit?: ShippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingInclude<ExtArgs> | null
    /**
     * The filter to search for the Shipping to update in case it exists.
     */
    where: ShippingWhereUniqueInput
    /**
     * In case the Shipping found by the `where` argument doesn't exist, create a new Shipping with this data.
     */
    create: XOR<ShippingCreateInput, ShippingUncheckedCreateInput>
    /**
     * In case the Shipping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShippingUpdateInput, ShippingUncheckedUpdateInput>
  }

  /**
   * Shipping delete
   */
  export type ShippingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipping
     */
    select?: ShippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipping
     */
    omit?: ShippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingInclude<ExtArgs> | null
    /**
     * Filter which Shipping to delete.
     */
    where: ShippingWhereUniqueInput
  }

  /**
   * Shipping deleteMany
   */
  export type ShippingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shippings to delete
     */
    where?: ShippingWhereInput
    /**
     * Limit how many Shippings to delete.
     */
    limit?: number
  }

  /**
   * Shipping without action
   */
  export type ShippingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipping
     */
    select?: ShippingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipping
     */
    omit?: ShippingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingInclude<ExtArgs> | null
  }


  /**
   * Model Note
   */

  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteAvgAggregateOutputType = {
    id: number | null
    repairRequestId: number | null
    userId: number | null
  }

  export type NoteSumAggregateOutputType = {
    id: number | null
    repairRequestId: number | null
    userId: number | null
  }

  export type NoteMinAggregateOutputType = {
    id: number | null
    repairRequestId: number | null
    userId: number | null
    note: string | null
    createdAt: Date | null
  }

  export type NoteMaxAggregateOutputType = {
    id: number | null
    repairRequestId: number | null
    userId: number | null
    note: string | null
    createdAt: Date | null
  }

  export type NoteCountAggregateOutputType = {
    id: number
    repairRequestId: number
    userId: number
    note: number
    createdAt: number
    _all: number
  }


  export type NoteAvgAggregateInputType = {
    id?: true
    repairRequestId?: true
    userId?: true
  }

  export type NoteSumAggregateInputType = {
    id?: true
    repairRequestId?: true
    userId?: true
  }

  export type NoteMinAggregateInputType = {
    id?: true
    repairRequestId?: true
    userId?: true
    note?: true
    createdAt?: true
  }

  export type NoteMaxAggregateInputType = {
    id?: true
    repairRequestId?: true
    userId?: true
    note?: true
    createdAt?: true
  }

  export type NoteCountAggregateInputType = {
    id?: true
    repairRequestId?: true
    userId?: true
    note?: true
    createdAt?: true
    _all?: true
  }

  export type NoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Note to aggregate.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type NoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithAggregationInput | NoteOrderByWithAggregationInput[]
    by: NoteScalarFieldEnum[] | NoteScalarFieldEnum
    having?: NoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _avg?: NoteAvgAggregateInputType
    _sum?: NoteSumAggregateInputType
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }

  export type NoteGroupByOutputType = {
    id: number
    repairRequestId: number
    userId: number
    note: string
    createdAt: Date
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends NoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type NoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repairRequestId?: boolean
    userId?: boolean
    note?: boolean
    createdAt?: boolean
    repairRequest?: boolean | RepairRequestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repairRequestId?: boolean
    userId?: boolean
    note?: boolean
    createdAt?: boolean
    repairRequest?: boolean | RepairRequestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repairRequestId?: boolean
    userId?: boolean
    note?: boolean
    createdAt?: boolean
    repairRequest?: boolean | RepairRequestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectScalar = {
    id?: boolean
    repairRequestId?: boolean
    userId?: boolean
    note?: boolean
    createdAt?: boolean
  }

  export type NoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "repairRequestId" | "userId" | "note" | "createdAt", ExtArgs["result"]["note"]>
  export type NoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairRequest?: boolean | RepairRequestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairRequest?: boolean | RepairRequestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repairRequest?: boolean | RepairRequestDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Note"
    objects: {
      repairRequest: Prisma.$RepairRequestPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      repairRequestId: number
      userId: number
      note: string
      createdAt: Date
    }, ExtArgs["result"]["note"]>
    composites: {}
  }

  type NoteGetPayload<S extends boolean | null | undefined | NoteDefaultArgs> = $Result.GetResult<Prisma.$NotePayload, S>

  type NoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteCountAggregateInputType | true
    }

  export interface NoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Note'], meta: { name: 'Note' } }
    /**
     * Find zero or one Note that matches the filter.
     * @param {NoteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteFindUniqueArgs>(args: SelectSubset<T, NoteFindUniqueArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Note that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteFindFirstArgs>(args?: SelectSubset<T, NoteFindFirstArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteWithIdOnly = await prisma.note.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoteFindManyArgs>(args?: SelectSubset<T, NoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Note.
     * @param {NoteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
     */
    create<T extends NoteCreateArgs>(args: SelectSubset<T, NoteCreateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {NoteCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteCreateManyArgs>(args?: SelectSubset<T, NoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {NoteCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Note.
     * @param {NoteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
     */
    delete<T extends NoteDeleteArgs>(args: SelectSubset<T, NoteDeleteArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Note.
     * @param {NoteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteUpdateArgs>(args: SelectSubset<T, NoteUpdateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {NoteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteDeleteManyArgs>(args?: SelectSubset<T, NoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteUpdateManyArgs>(args: SelectSubset<T, NoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {NoteUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NoteUpdateManyAndReturnArgs>(args: SelectSubset<T, NoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Note.
     * @param {NoteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
     */
    upsert<T extends NoteUpsertArgs>(args: SelectSubset<T, NoteUpsertArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NoteCountArgs>(
      args?: Subset<T, NoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteGroupByArgs['orderBy'] }
        : { orderBy?: NoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Note model
   */
  readonly fields: NoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repairRequest<T extends RepairRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepairRequestDefaultArgs<ExtArgs>>): Prisma__RepairRequestClient<$Result.GetResult<Prisma.$RepairRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Note model
   */
  interface NoteFieldRefs {
    readonly id: FieldRef<"Note", 'Int'>
    readonly repairRequestId: FieldRef<"Note", 'Int'>
    readonly userId: FieldRef<"Note", 'Int'>
    readonly note: FieldRef<"Note", 'String'>
    readonly createdAt: FieldRef<"Note", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Note findUnique
   */
  export type NoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findUniqueOrThrow
   */
  export type NoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findFirst
   */
  export type NoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findFirstOrThrow
   */
  export type NoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findMany
   */
  export type NoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note create
   */
  export type NoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Note.
     */
    data: XOR<NoteCreateInput, NoteUncheckedCreateInput>
  }

  /**
   * Note createMany
   */
  export type NoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Note createManyAndReturn
   */
  export type NoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note update
   */
  export type NoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Note.
     */
    data: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
    /**
     * Choose, which Note to update.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note updateMany
   */
  export type NoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
  }

  /**
   * Note updateManyAndReturn
   */
  export type NoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note upsert
   */
  export type NoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Note to update in case it exists.
     */
    where: NoteWhereUniqueInput
    /**
     * In case the Note found by the `where` argument doesn't exist, create a new Note with this data.
     */
    create: XOR<NoteCreateInput, NoteUncheckedCreateInput>
    /**
     * In case the Note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
  }

  /**
   * Note delete
   */
  export type NoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter which Note to delete.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note deleteMany
   */
  export type NoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to delete.
     */
    limit?: number
  }

  /**
   * Note without action
   */
  export type NoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    roleId: 'roleId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PrinterScalarFieldEnum: {
    id: 'id',
    model: 'model',
    serialNumber: 'serialNumber',
    ownerId: 'ownerId'
  };

  export type PrinterScalarFieldEnum = (typeof PrinterScalarFieldEnum)[keyof typeof PrinterScalarFieldEnum]


  export const RepairStatusScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RepairStatusScalarFieldEnum = (typeof RepairStatusScalarFieldEnum)[keyof typeof RepairStatusScalarFieldEnum]


  export const RepairRequestScalarFieldEnum: {
    id: 'id',
    printerId: 'printerId',
    description: 'description',
    accessories: 'accessories',
    statusId: 'statusId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RepairRequestScalarFieldEnum = (typeof RepairRequestScalarFieldEnum)[keyof typeof RepairRequestScalarFieldEnum]


  export const RepairPartScalarFieldEnum: {
    id: 'id',
    repairRequestId: 'repairRequestId',
    partName: 'partName',
    quantity: 'quantity',
    price: 'price'
  };

  export type RepairPartScalarFieldEnum = (typeof RepairPartScalarFieldEnum)[keyof typeof RepairPartScalarFieldEnum]


  export const ShippingScalarFieldEnum: {
    id: 'id',
    repairRequestId: 'repairRequestId',
    courier: 'courier',
    trackingNumber: 'trackingNumber',
    shippedAt: 'shippedAt',
    status: 'status'
  };

  export type ShippingScalarFieldEnum = (typeof ShippingScalarFieldEnum)[keyof typeof ShippingScalarFieldEnum]


  export const NoteScalarFieldEnum: {
    id: 'id',
    repairRequestId: 'repairRequestId',
    userId: 'userId',
    note: 'note',
    createdAt: 'createdAt'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    roleId?: IntFilter<"User"> | number
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    printers?: PrinterListRelationFilter
    notes?: NoteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    roleId?: SortOrder
    role?: RoleOrderByWithRelationInput
    printers?: PrinterOrderByRelationAggregateInput
    notes?: NoteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    roleId?: IntFilter<"User"> | number
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    printers?: PrinterListRelationFilter
    notes?: NoteListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    roleId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    roleId?: IntWithAggregatesFilter<"User"> | number
  }

  export type PrinterWhereInput = {
    AND?: PrinterWhereInput | PrinterWhereInput[]
    OR?: PrinterWhereInput[]
    NOT?: PrinterWhereInput | PrinterWhereInput[]
    id?: IntFilter<"Printer"> | number
    model?: StringFilter<"Printer"> | string
    serialNumber?: StringFilter<"Printer"> | string
    ownerId?: IntFilter<"Printer"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    repairRequests?: RepairRequestListRelationFilter
  }

  export type PrinterOrderByWithRelationInput = {
    id?: SortOrder
    model?: SortOrder
    serialNumber?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    repairRequests?: RepairRequestOrderByRelationAggregateInput
  }

  export type PrinterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    serialNumber?: string
    AND?: PrinterWhereInput | PrinterWhereInput[]
    OR?: PrinterWhereInput[]
    NOT?: PrinterWhereInput | PrinterWhereInput[]
    model?: StringFilter<"Printer"> | string
    ownerId?: IntFilter<"Printer"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    repairRequests?: RepairRequestListRelationFilter
  }, "id" | "serialNumber">

  export type PrinterOrderByWithAggregationInput = {
    id?: SortOrder
    model?: SortOrder
    serialNumber?: SortOrder
    ownerId?: SortOrder
    _count?: PrinterCountOrderByAggregateInput
    _avg?: PrinterAvgOrderByAggregateInput
    _max?: PrinterMaxOrderByAggregateInput
    _min?: PrinterMinOrderByAggregateInput
    _sum?: PrinterSumOrderByAggregateInput
  }

  export type PrinterScalarWhereWithAggregatesInput = {
    AND?: PrinterScalarWhereWithAggregatesInput | PrinterScalarWhereWithAggregatesInput[]
    OR?: PrinterScalarWhereWithAggregatesInput[]
    NOT?: PrinterScalarWhereWithAggregatesInput | PrinterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Printer"> | number
    model?: StringWithAggregatesFilter<"Printer"> | string
    serialNumber?: StringWithAggregatesFilter<"Printer"> | string
    ownerId?: IntWithAggregatesFilter<"Printer"> | number
  }

  export type RepairStatusWhereInput = {
    AND?: RepairStatusWhereInput | RepairStatusWhereInput[]
    OR?: RepairStatusWhereInput[]
    NOT?: RepairStatusWhereInput | RepairStatusWhereInput[]
    id?: IntFilter<"RepairStatus"> | number
    name?: StringFilter<"RepairStatus"> | string
    repairRequests?: RepairRequestListRelationFilter
  }

  export type RepairStatusOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    repairRequests?: RepairRequestOrderByRelationAggregateInput
  }

  export type RepairStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RepairStatusWhereInput | RepairStatusWhereInput[]
    OR?: RepairStatusWhereInput[]
    NOT?: RepairStatusWhereInput | RepairStatusWhereInput[]
    repairRequests?: RepairRequestListRelationFilter
  }, "id" | "name">

  export type RepairStatusOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RepairStatusCountOrderByAggregateInput
    _avg?: RepairStatusAvgOrderByAggregateInput
    _max?: RepairStatusMaxOrderByAggregateInput
    _min?: RepairStatusMinOrderByAggregateInput
    _sum?: RepairStatusSumOrderByAggregateInput
  }

  export type RepairStatusScalarWhereWithAggregatesInput = {
    AND?: RepairStatusScalarWhereWithAggregatesInput | RepairStatusScalarWhereWithAggregatesInput[]
    OR?: RepairStatusScalarWhereWithAggregatesInput[]
    NOT?: RepairStatusScalarWhereWithAggregatesInput | RepairStatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RepairStatus"> | number
    name?: StringWithAggregatesFilter<"RepairStatus"> | string
  }

  export type RepairRequestWhereInput = {
    AND?: RepairRequestWhereInput | RepairRequestWhereInput[]
    OR?: RepairRequestWhereInput[]
    NOT?: RepairRequestWhereInput | RepairRequestWhereInput[]
    id?: IntFilter<"RepairRequest"> | number
    printerId?: IntFilter<"RepairRequest"> | number
    description?: StringFilter<"RepairRequest"> | string
    accessories?: StringNullableFilter<"RepairRequest"> | string | null
    statusId?: IntFilter<"RepairRequest"> | number
    createdAt?: DateTimeFilter<"RepairRequest"> | Date | string
    updatedAt?: DateTimeFilter<"RepairRequest"> | Date | string
    printer?: XOR<PrinterScalarRelationFilter, PrinterWhereInput>
    status?: XOR<RepairStatusScalarRelationFilter, RepairStatusWhereInput>
    repairParts?: RepairPartListRelationFilter
    shipping?: XOR<ShippingNullableScalarRelationFilter, ShippingWhereInput> | null
    notes?: NoteListRelationFilter
  }

  export type RepairRequestOrderByWithRelationInput = {
    id?: SortOrder
    printerId?: SortOrder
    description?: SortOrder
    accessories?: SortOrderInput | SortOrder
    statusId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    printer?: PrinterOrderByWithRelationInput
    status?: RepairStatusOrderByWithRelationInput
    repairParts?: RepairPartOrderByRelationAggregateInput
    shipping?: ShippingOrderByWithRelationInput
    notes?: NoteOrderByRelationAggregateInput
  }

  export type RepairRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RepairRequestWhereInput | RepairRequestWhereInput[]
    OR?: RepairRequestWhereInput[]
    NOT?: RepairRequestWhereInput | RepairRequestWhereInput[]
    printerId?: IntFilter<"RepairRequest"> | number
    description?: StringFilter<"RepairRequest"> | string
    accessories?: StringNullableFilter<"RepairRequest"> | string | null
    statusId?: IntFilter<"RepairRequest"> | number
    createdAt?: DateTimeFilter<"RepairRequest"> | Date | string
    updatedAt?: DateTimeFilter<"RepairRequest"> | Date | string
    printer?: XOR<PrinterScalarRelationFilter, PrinterWhereInput>
    status?: XOR<RepairStatusScalarRelationFilter, RepairStatusWhereInput>
    repairParts?: RepairPartListRelationFilter
    shipping?: XOR<ShippingNullableScalarRelationFilter, ShippingWhereInput> | null
    notes?: NoteListRelationFilter
  }, "id">

  export type RepairRequestOrderByWithAggregationInput = {
    id?: SortOrder
    printerId?: SortOrder
    description?: SortOrder
    accessories?: SortOrderInput | SortOrder
    statusId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RepairRequestCountOrderByAggregateInput
    _avg?: RepairRequestAvgOrderByAggregateInput
    _max?: RepairRequestMaxOrderByAggregateInput
    _min?: RepairRequestMinOrderByAggregateInput
    _sum?: RepairRequestSumOrderByAggregateInput
  }

  export type RepairRequestScalarWhereWithAggregatesInput = {
    AND?: RepairRequestScalarWhereWithAggregatesInput | RepairRequestScalarWhereWithAggregatesInput[]
    OR?: RepairRequestScalarWhereWithAggregatesInput[]
    NOT?: RepairRequestScalarWhereWithAggregatesInput | RepairRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RepairRequest"> | number
    printerId?: IntWithAggregatesFilter<"RepairRequest"> | number
    description?: StringWithAggregatesFilter<"RepairRequest"> | string
    accessories?: StringNullableWithAggregatesFilter<"RepairRequest"> | string | null
    statusId?: IntWithAggregatesFilter<"RepairRequest"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RepairRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RepairRequest"> | Date | string
  }

  export type RepairPartWhereInput = {
    AND?: RepairPartWhereInput | RepairPartWhereInput[]
    OR?: RepairPartWhereInput[]
    NOT?: RepairPartWhereInput | RepairPartWhereInput[]
    id?: IntFilter<"RepairPart"> | number
    repairRequestId?: IntFilter<"RepairPart"> | number
    partName?: StringFilter<"RepairPart"> | string
    quantity?: IntFilter<"RepairPart"> | number
    price?: FloatFilter<"RepairPart"> | number
    repairRequest?: XOR<RepairRequestScalarRelationFilter, RepairRequestWhereInput>
  }

  export type RepairPartOrderByWithRelationInput = {
    id?: SortOrder
    repairRequestId?: SortOrder
    partName?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    repairRequest?: RepairRequestOrderByWithRelationInput
  }

  export type RepairPartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RepairPartWhereInput | RepairPartWhereInput[]
    OR?: RepairPartWhereInput[]
    NOT?: RepairPartWhereInput | RepairPartWhereInput[]
    repairRequestId?: IntFilter<"RepairPart"> | number
    partName?: StringFilter<"RepairPart"> | string
    quantity?: IntFilter<"RepairPart"> | number
    price?: FloatFilter<"RepairPart"> | number
    repairRequest?: XOR<RepairRequestScalarRelationFilter, RepairRequestWhereInput>
  }, "id">

  export type RepairPartOrderByWithAggregationInput = {
    id?: SortOrder
    repairRequestId?: SortOrder
    partName?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    _count?: RepairPartCountOrderByAggregateInput
    _avg?: RepairPartAvgOrderByAggregateInput
    _max?: RepairPartMaxOrderByAggregateInput
    _min?: RepairPartMinOrderByAggregateInput
    _sum?: RepairPartSumOrderByAggregateInput
  }

  export type RepairPartScalarWhereWithAggregatesInput = {
    AND?: RepairPartScalarWhereWithAggregatesInput | RepairPartScalarWhereWithAggregatesInput[]
    OR?: RepairPartScalarWhereWithAggregatesInput[]
    NOT?: RepairPartScalarWhereWithAggregatesInput | RepairPartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RepairPart"> | number
    repairRequestId?: IntWithAggregatesFilter<"RepairPart"> | number
    partName?: StringWithAggregatesFilter<"RepairPart"> | string
    quantity?: IntWithAggregatesFilter<"RepairPart"> | number
    price?: FloatWithAggregatesFilter<"RepairPart"> | number
  }

  export type ShippingWhereInput = {
    AND?: ShippingWhereInput | ShippingWhereInput[]
    OR?: ShippingWhereInput[]
    NOT?: ShippingWhereInput | ShippingWhereInput[]
    id?: IntFilter<"Shipping"> | number
    repairRequestId?: IntFilter<"Shipping"> | number
    courier?: StringFilter<"Shipping"> | string
    trackingNumber?: StringFilter<"Shipping"> | string
    shippedAt?: DateTimeNullableFilter<"Shipping"> | Date | string | null
    status?: StringFilter<"Shipping"> | string
    repairRequest?: XOR<RepairRequestScalarRelationFilter, RepairRequestWhereInput>
  }

  export type ShippingOrderByWithRelationInput = {
    id?: SortOrder
    repairRequestId?: SortOrder
    courier?: SortOrder
    trackingNumber?: SortOrder
    shippedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    repairRequest?: RepairRequestOrderByWithRelationInput
  }

  export type ShippingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    repairRequestId?: number
    AND?: ShippingWhereInput | ShippingWhereInput[]
    OR?: ShippingWhereInput[]
    NOT?: ShippingWhereInput | ShippingWhereInput[]
    courier?: StringFilter<"Shipping"> | string
    trackingNumber?: StringFilter<"Shipping"> | string
    shippedAt?: DateTimeNullableFilter<"Shipping"> | Date | string | null
    status?: StringFilter<"Shipping"> | string
    repairRequest?: XOR<RepairRequestScalarRelationFilter, RepairRequestWhereInput>
  }, "id" | "repairRequestId">

  export type ShippingOrderByWithAggregationInput = {
    id?: SortOrder
    repairRequestId?: SortOrder
    courier?: SortOrder
    trackingNumber?: SortOrder
    shippedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: ShippingCountOrderByAggregateInput
    _avg?: ShippingAvgOrderByAggregateInput
    _max?: ShippingMaxOrderByAggregateInput
    _min?: ShippingMinOrderByAggregateInput
    _sum?: ShippingSumOrderByAggregateInput
  }

  export type ShippingScalarWhereWithAggregatesInput = {
    AND?: ShippingScalarWhereWithAggregatesInput | ShippingScalarWhereWithAggregatesInput[]
    OR?: ShippingScalarWhereWithAggregatesInput[]
    NOT?: ShippingScalarWhereWithAggregatesInput | ShippingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Shipping"> | number
    repairRequestId?: IntWithAggregatesFilter<"Shipping"> | number
    courier?: StringWithAggregatesFilter<"Shipping"> | string
    trackingNumber?: StringWithAggregatesFilter<"Shipping"> | string
    shippedAt?: DateTimeNullableWithAggregatesFilter<"Shipping"> | Date | string | null
    status?: StringWithAggregatesFilter<"Shipping"> | string
  }

  export type NoteWhereInput = {
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    id?: IntFilter<"Note"> | number
    repairRequestId?: IntFilter<"Note"> | number
    userId?: IntFilter<"Note"> | number
    note?: StringFilter<"Note"> | string
    createdAt?: DateTimeFilter<"Note"> | Date | string
    repairRequest?: XOR<RepairRequestScalarRelationFilter, RepairRequestWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NoteOrderByWithRelationInput = {
    id?: SortOrder
    repairRequestId?: SortOrder
    userId?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    repairRequest?: RepairRequestOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type NoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    repairRequestId?: IntFilter<"Note"> | number
    userId?: IntFilter<"Note"> | number
    note?: StringFilter<"Note"> | string
    createdAt?: DateTimeFilter<"Note"> | Date | string
    repairRequest?: XOR<RepairRequestScalarRelationFilter, RepairRequestWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NoteOrderByWithAggregationInput = {
    id?: SortOrder
    repairRequestId?: SortOrder
    userId?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    _count?: NoteCountOrderByAggregateInput
    _avg?: NoteAvgOrderByAggregateInput
    _max?: NoteMaxOrderByAggregateInput
    _min?: NoteMinOrderByAggregateInput
    _sum?: NoteSumOrderByAggregateInput
  }

  export type NoteScalarWhereWithAggregatesInput = {
    AND?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    OR?: NoteScalarWhereWithAggregatesInput[]
    NOT?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Note"> | number
    repairRequestId?: IntWithAggregatesFilter<"Note"> | number
    userId?: IntWithAggregatesFilter<"Note"> | number
    note?: StringWithAggregatesFilter<"Note"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
  }

  export type RoleCreateInput = {
    name: string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    role: RoleCreateNestedOneWithoutUsersInput
    printers?: PrinterCreateNestedManyWithoutOwnerInput
    notes?: NoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    roleId: number
    printers?: PrinterUncheckedCreateNestedManyWithoutOwnerInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    printers?: PrinterUpdateManyWithoutOwnerNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    printers?: PrinterUncheckedUpdateManyWithoutOwnerNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    roleId: number
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type PrinterCreateInput = {
    model: string
    serialNumber: string
    owner: UserCreateNestedOneWithoutPrintersInput
    repairRequests?: RepairRequestCreateNestedManyWithoutPrinterInput
  }

  export type PrinterUncheckedCreateInput = {
    id?: number
    model: string
    serialNumber: string
    ownerId: number
    repairRequests?: RepairRequestUncheckedCreateNestedManyWithoutPrinterInput
  }

  export type PrinterUpdateInput = {
    model?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutPrintersNestedInput
    repairRequests?: RepairRequestUpdateManyWithoutPrinterNestedInput
  }

  export type PrinterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
    repairRequests?: RepairRequestUncheckedUpdateManyWithoutPrinterNestedInput
  }

  export type PrinterCreateManyInput = {
    id?: number
    model: string
    serialNumber: string
    ownerId: number
  }

  export type PrinterUpdateManyMutationInput = {
    model?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
  }

  export type PrinterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type RepairStatusCreateInput = {
    name: string
    repairRequests?: RepairRequestCreateNestedManyWithoutStatusInput
  }

  export type RepairStatusUncheckedCreateInput = {
    id?: number
    name: string
    repairRequests?: RepairRequestUncheckedCreateNestedManyWithoutStatusInput
  }

  export type RepairStatusUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    repairRequests?: RepairRequestUpdateManyWithoutStatusNestedInput
  }

  export type RepairStatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    repairRequests?: RepairRequestUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type RepairStatusCreateManyInput = {
    id?: number
    name: string
  }

  export type RepairStatusUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RepairStatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RepairRequestCreateInput = {
    description: string
    accessories?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    printer: PrinterCreateNestedOneWithoutRepairRequestsInput
    status: RepairStatusCreateNestedOneWithoutRepairRequestsInput
    repairParts?: RepairPartCreateNestedManyWithoutRepairRequestInput
    shipping?: ShippingCreateNestedOneWithoutRepairRequestInput
    notes?: NoteCreateNestedManyWithoutRepairRequestInput
  }

  export type RepairRequestUncheckedCreateInput = {
    id?: number
    printerId: number
    description: string
    accessories?: string | null
    statusId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    repairParts?: RepairPartUncheckedCreateNestedManyWithoutRepairRequestInput
    shipping?: ShippingUncheckedCreateNestedOneWithoutRepairRequestInput
    notes?: NoteUncheckedCreateNestedManyWithoutRepairRequestInput
  }

  export type RepairRequestUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    accessories?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    printer?: PrinterUpdateOneRequiredWithoutRepairRequestsNestedInput
    status?: RepairStatusUpdateOneRequiredWithoutRepairRequestsNestedInput
    repairParts?: RepairPartUpdateManyWithoutRepairRequestNestedInput
    shipping?: ShippingUpdateOneWithoutRepairRequestNestedInput
    notes?: NoteUpdateManyWithoutRepairRequestNestedInput
  }

  export type RepairRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    printerId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    accessories?: NullableStringFieldUpdateOperationsInput | string | null
    statusId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairParts?: RepairPartUncheckedUpdateManyWithoutRepairRequestNestedInput
    shipping?: ShippingUncheckedUpdateOneWithoutRepairRequestNestedInput
    notes?: NoteUncheckedUpdateManyWithoutRepairRequestNestedInput
  }

  export type RepairRequestCreateManyInput = {
    id?: number
    printerId: number
    description: string
    accessories?: string | null
    statusId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RepairRequestUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    accessories?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepairRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    printerId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    accessories?: NullableStringFieldUpdateOperationsInput | string | null
    statusId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepairPartCreateInput = {
    partName: string
    quantity: number
    price: number
    repairRequest: RepairRequestCreateNestedOneWithoutRepairPartsInput
  }

  export type RepairPartUncheckedCreateInput = {
    id?: number
    repairRequestId: number
    partName: string
    quantity: number
    price: number
  }

  export type RepairPartUpdateInput = {
    partName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    repairRequest?: RepairRequestUpdateOneRequiredWithoutRepairPartsNestedInput
  }

  export type RepairPartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    repairRequestId?: IntFieldUpdateOperationsInput | number
    partName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type RepairPartCreateManyInput = {
    id?: number
    repairRequestId: number
    partName: string
    quantity: number
    price: number
  }

  export type RepairPartUpdateManyMutationInput = {
    partName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type RepairPartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    repairRequestId?: IntFieldUpdateOperationsInput | number
    partName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type ShippingCreateInput = {
    courier: string
    trackingNumber: string
    shippedAt?: Date | string | null
    status: string
    repairRequest: RepairRequestCreateNestedOneWithoutShippingInput
  }

  export type ShippingUncheckedCreateInput = {
    id?: number
    repairRequestId: number
    courier: string
    trackingNumber: string
    shippedAt?: Date | string | null
    status: string
  }

  export type ShippingUpdateInput = {
    courier?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    repairRequest?: RepairRequestUpdateOneRequiredWithoutShippingNestedInput
  }

  export type ShippingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    repairRequestId?: IntFieldUpdateOperationsInput | number
    courier?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ShippingCreateManyInput = {
    id?: number
    repairRequestId: number
    courier: string
    trackingNumber: string
    shippedAt?: Date | string | null
    status: string
  }

  export type ShippingUpdateManyMutationInput = {
    courier?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ShippingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    repairRequestId?: IntFieldUpdateOperationsInput | number
    courier?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type NoteCreateInput = {
    note: string
    createdAt?: Date | string
    repairRequest: RepairRequestCreateNestedOneWithoutNotesInput
    user: UserCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateInput = {
    id?: number
    repairRequestId: number
    userId: number
    note: string
    createdAt?: Date | string
  }

  export type NoteUpdateInput = {
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairRequest?: RepairRequestUpdateOneRequiredWithoutNotesNestedInput
    user?: UserUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    repairRequestId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCreateManyInput = {
    id?: number
    repairRequestId: number
    userId: number
    note: string
    createdAt?: Date | string
  }

  export type NoteUpdateManyMutationInput = {
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    repairRequestId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type PrinterListRelationFilter = {
    every?: PrinterWhereInput
    some?: PrinterWhereInput
    none?: PrinterWhereInput
  }

  export type NoteListRelationFilter = {
    every?: NoteWhereInput
    some?: NoteWhereInput
    none?: NoteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PrinterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    roleId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    roleId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    roleId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RepairRequestListRelationFilter = {
    every?: RepairRequestWhereInput
    some?: RepairRequestWhereInput
    none?: RepairRequestWhereInput
  }

  export type RepairRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrinterCountOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    serialNumber?: SortOrder
    ownerId?: SortOrder
  }

  export type PrinterAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type PrinterMaxOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    serialNumber?: SortOrder
    ownerId?: SortOrder
  }

  export type PrinterMinOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    serialNumber?: SortOrder
    ownerId?: SortOrder
  }

  export type PrinterSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type RepairStatusCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RepairStatusAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RepairStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RepairStatusMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RepairStatusSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PrinterScalarRelationFilter = {
    is?: PrinterWhereInput
    isNot?: PrinterWhereInput
  }

  export type RepairStatusScalarRelationFilter = {
    is?: RepairStatusWhereInput
    isNot?: RepairStatusWhereInput
  }

  export type RepairPartListRelationFilter = {
    every?: RepairPartWhereInput
    some?: RepairPartWhereInput
    none?: RepairPartWhereInput
  }

  export type ShippingNullableScalarRelationFilter = {
    is?: ShippingWhereInput | null
    isNot?: ShippingWhereInput | null
  }

  export type RepairPartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RepairRequestCountOrderByAggregateInput = {
    id?: SortOrder
    printerId?: SortOrder
    description?: SortOrder
    accessories?: SortOrder
    statusId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepairRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    printerId?: SortOrder
    statusId?: SortOrder
  }

  export type RepairRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    printerId?: SortOrder
    description?: SortOrder
    accessories?: SortOrder
    statusId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepairRequestMinOrderByAggregateInput = {
    id?: SortOrder
    printerId?: SortOrder
    description?: SortOrder
    accessories?: SortOrder
    statusId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepairRequestSumOrderByAggregateInput = {
    id?: SortOrder
    printerId?: SortOrder
    statusId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type RepairRequestScalarRelationFilter = {
    is?: RepairRequestWhereInput
    isNot?: RepairRequestWhereInput
  }

  export type RepairPartCountOrderByAggregateInput = {
    id?: SortOrder
    repairRequestId?: SortOrder
    partName?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type RepairPartAvgOrderByAggregateInput = {
    id?: SortOrder
    repairRequestId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type RepairPartMaxOrderByAggregateInput = {
    id?: SortOrder
    repairRequestId?: SortOrder
    partName?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type RepairPartMinOrderByAggregateInput = {
    id?: SortOrder
    repairRequestId?: SortOrder
    partName?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type RepairPartSumOrderByAggregateInput = {
    id?: SortOrder
    repairRequestId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ShippingCountOrderByAggregateInput = {
    id?: SortOrder
    repairRequestId?: SortOrder
    courier?: SortOrder
    trackingNumber?: SortOrder
    shippedAt?: SortOrder
    status?: SortOrder
  }

  export type ShippingAvgOrderByAggregateInput = {
    id?: SortOrder
    repairRequestId?: SortOrder
  }

  export type ShippingMaxOrderByAggregateInput = {
    id?: SortOrder
    repairRequestId?: SortOrder
    courier?: SortOrder
    trackingNumber?: SortOrder
    shippedAt?: SortOrder
    status?: SortOrder
  }

  export type ShippingMinOrderByAggregateInput = {
    id?: SortOrder
    repairRequestId?: SortOrder
    courier?: SortOrder
    trackingNumber?: SortOrder
    shippedAt?: SortOrder
    status?: SortOrder
  }

  export type ShippingSumOrderByAggregateInput = {
    id?: SortOrder
    repairRequestId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NoteCountOrderByAggregateInput = {
    id?: SortOrder
    repairRequestId?: SortOrder
    userId?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type NoteAvgOrderByAggregateInput = {
    id?: SortOrder
    repairRequestId?: SortOrder
    userId?: SortOrder
  }

  export type NoteMaxOrderByAggregateInput = {
    id?: SortOrder
    repairRequestId?: SortOrder
    userId?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type NoteMinOrderByAggregateInput = {
    id?: SortOrder
    repairRequestId?: SortOrder
    userId?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type NoteSumOrderByAggregateInput = {
    id?: SortOrder
    repairRequestId?: SortOrder
    userId?: SortOrder
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type PrinterCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PrinterCreateWithoutOwnerInput, PrinterUncheckedCreateWithoutOwnerInput> | PrinterCreateWithoutOwnerInput[] | PrinterUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PrinterCreateOrConnectWithoutOwnerInput | PrinterCreateOrConnectWithoutOwnerInput[]
    createMany?: PrinterCreateManyOwnerInputEnvelope
    connect?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
  }

  export type NoteCreateNestedManyWithoutUserInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type PrinterUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PrinterCreateWithoutOwnerInput, PrinterUncheckedCreateWithoutOwnerInput> | PrinterCreateWithoutOwnerInput[] | PrinterUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PrinterCreateOrConnectWithoutOwnerInput | PrinterCreateOrConnectWithoutOwnerInput[]
    createMany?: PrinterCreateManyOwnerInputEnvelope
    connect?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type PrinterUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PrinterCreateWithoutOwnerInput, PrinterUncheckedCreateWithoutOwnerInput> | PrinterCreateWithoutOwnerInput[] | PrinterUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PrinterCreateOrConnectWithoutOwnerInput | PrinterCreateOrConnectWithoutOwnerInput[]
    upsert?: PrinterUpsertWithWhereUniqueWithoutOwnerInput | PrinterUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PrinterCreateManyOwnerInputEnvelope
    set?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    disconnect?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    delete?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    connect?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    update?: PrinterUpdateWithWhereUniqueWithoutOwnerInput | PrinterUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PrinterUpdateManyWithWhereWithoutOwnerInput | PrinterUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PrinterScalarWhereInput | PrinterScalarWhereInput[]
  }

  export type NoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutUserInput | NoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutUserInput | NoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutUserInput | NoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type PrinterUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PrinterCreateWithoutOwnerInput, PrinterUncheckedCreateWithoutOwnerInput> | PrinterCreateWithoutOwnerInput[] | PrinterUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PrinterCreateOrConnectWithoutOwnerInput | PrinterCreateOrConnectWithoutOwnerInput[]
    upsert?: PrinterUpsertWithWhereUniqueWithoutOwnerInput | PrinterUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PrinterCreateManyOwnerInputEnvelope
    set?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    disconnect?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    delete?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    connect?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    update?: PrinterUpdateWithWhereUniqueWithoutOwnerInput | PrinterUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PrinterUpdateManyWithWhereWithoutOwnerInput | PrinterUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PrinterScalarWhereInput | PrinterScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutUserInput | NoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutUserInput | NoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutUserInput | NoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPrintersInput = {
    create?: XOR<UserCreateWithoutPrintersInput, UserUncheckedCreateWithoutPrintersInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrintersInput
    connect?: UserWhereUniqueInput
  }

  export type RepairRequestCreateNestedManyWithoutPrinterInput = {
    create?: XOR<RepairRequestCreateWithoutPrinterInput, RepairRequestUncheckedCreateWithoutPrinterInput> | RepairRequestCreateWithoutPrinterInput[] | RepairRequestUncheckedCreateWithoutPrinterInput[]
    connectOrCreate?: RepairRequestCreateOrConnectWithoutPrinterInput | RepairRequestCreateOrConnectWithoutPrinterInput[]
    createMany?: RepairRequestCreateManyPrinterInputEnvelope
    connect?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
  }

  export type RepairRequestUncheckedCreateNestedManyWithoutPrinterInput = {
    create?: XOR<RepairRequestCreateWithoutPrinterInput, RepairRequestUncheckedCreateWithoutPrinterInput> | RepairRequestCreateWithoutPrinterInput[] | RepairRequestUncheckedCreateWithoutPrinterInput[]
    connectOrCreate?: RepairRequestCreateOrConnectWithoutPrinterInput | RepairRequestCreateOrConnectWithoutPrinterInput[]
    createMany?: RepairRequestCreateManyPrinterInputEnvelope
    connect?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPrintersNestedInput = {
    create?: XOR<UserCreateWithoutPrintersInput, UserUncheckedCreateWithoutPrintersInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrintersInput
    upsert?: UserUpsertWithoutPrintersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPrintersInput, UserUpdateWithoutPrintersInput>, UserUncheckedUpdateWithoutPrintersInput>
  }

  export type RepairRequestUpdateManyWithoutPrinterNestedInput = {
    create?: XOR<RepairRequestCreateWithoutPrinterInput, RepairRequestUncheckedCreateWithoutPrinterInput> | RepairRequestCreateWithoutPrinterInput[] | RepairRequestUncheckedCreateWithoutPrinterInput[]
    connectOrCreate?: RepairRequestCreateOrConnectWithoutPrinterInput | RepairRequestCreateOrConnectWithoutPrinterInput[]
    upsert?: RepairRequestUpsertWithWhereUniqueWithoutPrinterInput | RepairRequestUpsertWithWhereUniqueWithoutPrinterInput[]
    createMany?: RepairRequestCreateManyPrinterInputEnvelope
    set?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    disconnect?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    delete?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    connect?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    update?: RepairRequestUpdateWithWhereUniqueWithoutPrinterInput | RepairRequestUpdateWithWhereUniqueWithoutPrinterInput[]
    updateMany?: RepairRequestUpdateManyWithWhereWithoutPrinterInput | RepairRequestUpdateManyWithWhereWithoutPrinterInput[]
    deleteMany?: RepairRequestScalarWhereInput | RepairRequestScalarWhereInput[]
  }

  export type RepairRequestUncheckedUpdateManyWithoutPrinterNestedInput = {
    create?: XOR<RepairRequestCreateWithoutPrinterInput, RepairRequestUncheckedCreateWithoutPrinterInput> | RepairRequestCreateWithoutPrinterInput[] | RepairRequestUncheckedCreateWithoutPrinterInput[]
    connectOrCreate?: RepairRequestCreateOrConnectWithoutPrinterInput | RepairRequestCreateOrConnectWithoutPrinterInput[]
    upsert?: RepairRequestUpsertWithWhereUniqueWithoutPrinterInput | RepairRequestUpsertWithWhereUniqueWithoutPrinterInput[]
    createMany?: RepairRequestCreateManyPrinterInputEnvelope
    set?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    disconnect?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    delete?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    connect?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    update?: RepairRequestUpdateWithWhereUniqueWithoutPrinterInput | RepairRequestUpdateWithWhereUniqueWithoutPrinterInput[]
    updateMany?: RepairRequestUpdateManyWithWhereWithoutPrinterInput | RepairRequestUpdateManyWithWhereWithoutPrinterInput[]
    deleteMany?: RepairRequestScalarWhereInput | RepairRequestScalarWhereInput[]
  }

  export type RepairRequestCreateNestedManyWithoutStatusInput = {
    create?: XOR<RepairRequestCreateWithoutStatusInput, RepairRequestUncheckedCreateWithoutStatusInput> | RepairRequestCreateWithoutStatusInput[] | RepairRequestUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: RepairRequestCreateOrConnectWithoutStatusInput | RepairRequestCreateOrConnectWithoutStatusInput[]
    createMany?: RepairRequestCreateManyStatusInputEnvelope
    connect?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
  }

  export type RepairRequestUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<RepairRequestCreateWithoutStatusInput, RepairRequestUncheckedCreateWithoutStatusInput> | RepairRequestCreateWithoutStatusInput[] | RepairRequestUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: RepairRequestCreateOrConnectWithoutStatusInput | RepairRequestCreateOrConnectWithoutStatusInput[]
    createMany?: RepairRequestCreateManyStatusInputEnvelope
    connect?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
  }

  export type RepairRequestUpdateManyWithoutStatusNestedInput = {
    create?: XOR<RepairRequestCreateWithoutStatusInput, RepairRequestUncheckedCreateWithoutStatusInput> | RepairRequestCreateWithoutStatusInput[] | RepairRequestUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: RepairRequestCreateOrConnectWithoutStatusInput | RepairRequestCreateOrConnectWithoutStatusInput[]
    upsert?: RepairRequestUpsertWithWhereUniqueWithoutStatusInput | RepairRequestUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: RepairRequestCreateManyStatusInputEnvelope
    set?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    disconnect?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    delete?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    connect?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    update?: RepairRequestUpdateWithWhereUniqueWithoutStatusInput | RepairRequestUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: RepairRequestUpdateManyWithWhereWithoutStatusInput | RepairRequestUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: RepairRequestScalarWhereInput | RepairRequestScalarWhereInput[]
  }

  export type RepairRequestUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<RepairRequestCreateWithoutStatusInput, RepairRequestUncheckedCreateWithoutStatusInput> | RepairRequestCreateWithoutStatusInput[] | RepairRequestUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: RepairRequestCreateOrConnectWithoutStatusInput | RepairRequestCreateOrConnectWithoutStatusInput[]
    upsert?: RepairRequestUpsertWithWhereUniqueWithoutStatusInput | RepairRequestUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: RepairRequestCreateManyStatusInputEnvelope
    set?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    disconnect?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    delete?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    connect?: RepairRequestWhereUniqueInput | RepairRequestWhereUniqueInput[]
    update?: RepairRequestUpdateWithWhereUniqueWithoutStatusInput | RepairRequestUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: RepairRequestUpdateManyWithWhereWithoutStatusInput | RepairRequestUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: RepairRequestScalarWhereInput | RepairRequestScalarWhereInput[]
  }

  export type PrinterCreateNestedOneWithoutRepairRequestsInput = {
    create?: XOR<PrinterCreateWithoutRepairRequestsInput, PrinterUncheckedCreateWithoutRepairRequestsInput>
    connectOrCreate?: PrinterCreateOrConnectWithoutRepairRequestsInput
    connect?: PrinterWhereUniqueInput
  }

  export type RepairStatusCreateNestedOneWithoutRepairRequestsInput = {
    create?: XOR<RepairStatusCreateWithoutRepairRequestsInput, RepairStatusUncheckedCreateWithoutRepairRequestsInput>
    connectOrCreate?: RepairStatusCreateOrConnectWithoutRepairRequestsInput
    connect?: RepairStatusWhereUniqueInput
  }

  export type RepairPartCreateNestedManyWithoutRepairRequestInput = {
    create?: XOR<RepairPartCreateWithoutRepairRequestInput, RepairPartUncheckedCreateWithoutRepairRequestInput> | RepairPartCreateWithoutRepairRequestInput[] | RepairPartUncheckedCreateWithoutRepairRequestInput[]
    connectOrCreate?: RepairPartCreateOrConnectWithoutRepairRequestInput | RepairPartCreateOrConnectWithoutRepairRequestInput[]
    createMany?: RepairPartCreateManyRepairRequestInputEnvelope
    connect?: RepairPartWhereUniqueInput | RepairPartWhereUniqueInput[]
  }

  export type ShippingCreateNestedOneWithoutRepairRequestInput = {
    create?: XOR<ShippingCreateWithoutRepairRequestInput, ShippingUncheckedCreateWithoutRepairRequestInput>
    connectOrCreate?: ShippingCreateOrConnectWithoutRepairRequestInput
    connect?: ShippingWhereUniqueInput
  }

  export type NoteCreateNestedManyWithoutRepairRequestInput = {
    create?: XOR<NoteCreateWithoutRepairRequestInput, NoteUncheckedCreateWithoutRepairRequestInput> | NoteCreateWithoutRepairRequestInput[] | NoteUncheckedCreateWithoutRepairRequestInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutRepairRequestInput | NoteCreateOrConnectWithoutRepairRequestInput[]
    createMany?: NoteCreateManyRepairRequestInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type RepairPartUncheckedCreateNestedManyWithoutRepairRequestInput = {
    create?: XOR<RepairPartCreateWithoutRepairRequestInput, RepairPartUncheckedCreateWithoutRepairRequestInput> | RepairPartCreateWithoutRepairRequestInput[] | RepairPartUncheckedCreateWithoutRepairRequestInput[]
    connectOrCreate?: RepairPartCreateOrConnectWithoutRepairRequestInput | RepairPartCreateOrConnectWithoutRepairRequestInput[]
    createMany?: RepairPartCreateManyRepairRequestInputEnvelope
    connect?: RepairPartWhereUniqueInput | RepairPartWhereUniqueInput[]
  }

  export type ShippingUncheckedCreateNestedOneWithoutRepairRequestInput = {
    create?: XOR<ShippingCreateWithoutRepairRequestInput, ShippingUncheckedCreateWithoutRepairRequestInput>
    connectOrCreate?: ShippingCreateOrConnectWithoutRepairRequestInput
    connect?: ShippingWhereUniqueInput
  }

  export type NoteUncheckedCreateNestedManyWithoutRepairRequestInput = {
    create?: XOR<NoteCreateWithoutRepairRequestInput, NoteUncheckedCreateWithoutRepairRequestInput> | NoteCreateWithoutRepairRequestInput[] | NoteUncheckedCreateWithoutRepairRequestInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutRepairRequestInput | NoteCreateOrConnectWithoutRepairRequestInput[]
    createMany?: NoteCreateManyRepairRequestInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PrinterUpdateOneRequiredWithoutRepairRequestsNestedInput = {
    create?: XOR<PrinterCreateWithoutRepairRequestsInput, PrinterUncheckedCreateWithoutRepairRequestsInput>
    connectOrCreate?: PrinterCreateOrConnectWithoutRepairRequestsInput
    upsert?: PrinterUpsertWithoutRepairRequestsInput
    connect?: PrinterWhereUniqueInput
    update?: XOR<XOR<PrinterUpdateToOneWithWhereWithoutRepairRequestsInput, PrinterUpdateWithoutRepairRequestsInput>, PrinterUncheckedUpdateWithoutRepairRequestsInput>
  }

  export type RepairStatusUpdateOneRequiredWithoutRepairRequestsNestedInput = {
    create?: XOR<RepairStatusCreateWithoutRepairRequestsInput, RepairStatusUncheckedCreateWithoutRepairRequestsInput>
    connectOrCreate?: RepairStatusCreateOrConnectWithoutRepairRequestsInput
    upsert?: RepairStatusUpsertWithoutRepairRequestsInput
    connect?: RepairStatusWhereUniqueInput
    update?: XOR<XOR<RepairStatusUpdateToOneWithWhereWithoutRepairRequestsInput, RepairStatusUpdateWithoutRepairRequestsInput>, RepairStatusUncheckedUpdateWithoutRepairRequestsInput>
  }

  export type RepairPartUpdateManyWithoutRepairRequestNestedInput = {
    create?: XOR<RepairPartCreateWithoutRepairRequestInput, RepairPartUncheckedCreateWithoutRepairRequestInput> | RepairPartCreateWithoutRepairRequestInput[] | RepairPartUncheckedCreateWithoutRepairRequestInput[]
    connectOrCreate?: RepairPartCreateOrConnectWithoutRepairRequestInput | RepairPartCreateOrConnectWithoutRepairRequestInput[]
    upsert?: RepairPartUpsertWithWhereUniqueWithoutRepairRequestInput | RepairPartUpsertWithWhereUniqueWithoutRepairRequestInput[]
    createMany?: RepairPartCreateManyRepairRequestInputEnvelope
    set?: RepairPartWhereUniqueInput | RepairPartWhereUniqueInput[]
    disconnect?: RepairPartWhereUniqueInput | RepairPartWhereUniqueInput[]
    delete?: RepairPartWhereUniqueInput | RepairPartWhereUniqueInput[]
    connect?: RepairPartWhereUniqueInput | RepairPartWhereUniqueInput[]
    update?: RepairPartUpdateWithWhereUniqueWithoutRepairRequestInput | RepairPartUpdateWithWhereUniqueWithoutRepairRequestInput[]
    updateMany?: RepairPartUpdateManyWithWhereWithoutRepairRequestInput | RepairPartUpdateManyWithWhereWithoutRepairRequestInput[]
    deleteMany?: RepairPartScalarWhereInput | RepairPartScalarWhereInput[]
  }

  export type ShippingUpdateOneWithoutRepairRequestNestedInput = {
    create?: XOR<ShippingCreateWithoutRepairRequestInput, ShippingUncheckedCreateWithoutRepairRequestInput>
    connectOrCreate?: ShippingCreateOrConnectWithoutRepairRequestInput
    upsert?: ShippingUpsertWithoutRepairRequestInput
    disconnect?: ShippingWhereInput | boolean
    delete?: ShippingWhereInput | boolean
    connect?: ShippingWhereUniqueInput
    update?: XOR<XOR<ShippingUpdateToOneWithWhereWithoutRepairRequestInput, ShippingUpdateWithoutRepairRequestInput>, ShippingUncheckedUpdateWithoutRepairRequestInput>
  }

  export type NoteUpdateManyWithoutRepairRequestNestedInput = {
    create?: XOR<NoteCreateWithoutRepairRequestInput, NoteUncheckedCreateWithoutRepairRequestInput> | NoteCreateWithoutRepairRequestInput[] | NoteUncheckedCreateWithoutRepairRequestInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutRepairRequestInput | NoteCreateOrConnectWithoutRepairRequestInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutRepairRequestInput | NoteUpsertWithWhereUniqueWithoutRepairRequestInput[]
    createMany?: NoteCreateManyRepairRequestInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutRepairRequestInput | NoteUpdateWithWhereUniqueWithoutRepairRequestInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutRepairRequestInput | NoteUpdateManyWithWhereWithoutRepairRequestInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type RepairPartUncheckedUpdateManyWithoutRepairRequestNestedInput = {
    create?: XOR<RepairPartCreateWithoutRepairRequestInput, RepairPartUncheckedCreateWithoutRepairRequestInput> | RepairPartCreateWithoutRepairRequestInput[] | RepairPartUncheckedCreateWithoutRepairRequestInput[]
    connectOrCreate?: RepairPartCreateOrConnectWithoutRepairRequestInput | RepairPartCreateOrConnectWithoutRepairRequestInput[]
    upsert?: RepairPartUpsertWithWhereUniqueWithoutRepairRequestInput | RepairPartUpsertWithWhereUniqueWithoutRepairRequestInput[]
    createMany?: RepairPartCreateManyRepairRequestInputEnvelope
    set?: RepairPartWhereUniqueInput | RepairPartWhereUniqueInput[]
    disconnect?: RepairPartWhereUniqueInput | RepairPartWhereUniqueInput[]
    delete?: RepairPartWhereUniqueInput | RepairPartWhereUniqueInput[]
    connect?: RepairPartWhereUniqueInput | RepairPartWhereUniqueInput[]
    update?: RepairPartUpdateWithWhereUniqueWithoutRepairRequestInput | RepairPartUpdateWithWhereUniqueWithoutRepairRequestInput[]
    updateMany?: RepairPartUpdateManyWithWhereWithoutRepairRequestInput | RepairPartUpdateManyWithWhereWithoutRepairRequestInput[]
    deleteMany?: RepairPartScalarWhereInput | RepairPartScalarWhereInput[]
  }

  export type ShippingUncheckedUpdateOneWithoutRepairRequestNestedInput = {
    create?: XOR<ShippingCreateWithoutRepairRequestInput, ShippingUncheckedCreateWithoutRepairRequestInput>
    connectOrCreate?: ShippingCreateOrConnectWithoutRepairRequestInput
    upsert?: ShippingUpsertWithoutRepairRequestInput
    disconnect?: ShippingWhereInput | boolean
    delete?: ShippingWhereInput | boolean
    connect?: ShippingWhereUniqueInput
    update?: XOR<XOR<ShippingUpdateToOneWithWhereWithoutRepairRequestInput, ShippingUpdateWithoutRepairRequestInput>, ShippingUncheckedUpdateWithoutRepairRequestInput>
  }

  export type NoteUncheckedUpdateManyWithoutRepairRequestNestedInput = {
    create?: XOR<NoteCreateWithoutRepairRequestInput, NoteUncheckedCreateWithoutRepairRequestInput> | NoteCreateWithoutRepairRequestInput[] | NoteUncheckedCreateWithoutRepairRequestInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutRepairRequestInput | NoteCreateOrConnectWithoutRepairRequestInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutRepairRequestInput | NoteUpsertWithWhereUniqueWithoutRepairRequestInput[]
    createMany?: NoteCreateManyRepairRequestInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutRepairRequestInput | NoteUpdateWithWhereUniqueWithoutRepairRequestInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutRepairRequestInput | NoteUpdateManyWithWhereWithoutRepairRequestInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type RepairRequestCreateNestedOneWithoutRepairPartsInput = {
    create?: XOR<RepairRequestCreateWithoutRepairPartsInput, RepairRequestUncheckedCreateWithoutRepairPartsInput>
    connectOrCreate?: RepairRequestCreateOrConnectWithoutRepairPartsInput
    connect?: RepairRequestWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RepairRequestUpdateOneRequiredWithoutRepairPartsNestedInput = {
    create?: XOR<RepairRequestCreateWithoutRepairPartsInput, RepairRequestUncheckedCreateWithoutRepairPartsInput>
    connectOrCreate?: RepairRequestCreateOrConnectWithoutRepairPartsInput
    upsert?: RepairRequestUpsertWithoutRepairPartsInput
    connect?: RepairRequestWhereUniqueInput
    update?: XOR<XOR<RepairRequestUpdateToOneWithWhereWithoutRepairPartsInput, RepairRequestUpdateWithoutRepairPartsInput>, RepairRequestUncheckedUpdateWithoutRepairPartsInput>
  }

  export type RepairRequestCreateNestedOneWithoutShippingInput = {
    create?: XOR<RepairRequestCreateWithoutShippingInput, RepairRequestUncheckedCreateWithoutShippingInput>
    connectOrCreate?: RepairRequestCreateOrConnectWithoutShippingInput
    connect?: RepairRequestWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RepairRequestUpdateOneRequiredWithoutShippingNestedInput = {
    create?: XOR<RepairRequestCreateWithoutShippingInput, RepairRequestUncheckedCreateWithoutShippingInput>
    connectOrCreate?: RepairRequestCreateOrConnectWithoutShippingInput
    upsert?: RepairRequestUpsertWithoutShippingInput
    connect?: RepairRequestWhereUniqueInput
    update?: XOR<XOR<RepairRequestUpdateToOneWithWhereWithoutShippingInput, RepairRequestUpdateWithoutShippingInput>, RepairRequestUncheckedUpdateWithoutShippingInput>
  }

  export type RepairRequestCreateNestedOneWithoutNotesInput = {
    create?: XOR<RepairRequestCreateWithoutNotesInput, RepairRequestUncheckedCreateWithoutNotesInput>
    connectOrCreate?: RepairRequestCreateOrConnectWithoutNotesInput
    connect?: RepairRequestWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNotesInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    connect?: UserWhereUniqueInput
  }

  export type RepairRequestUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<RepairRequestCreateWithoutNotesInput, RepairRequestUncheckedCreateWithoutNotesInput>
    connectOrCreate?: RepairRequestCreateOrConnectWithoutNotesInput
    upsert?: RepairRequestUpsertWithoutNotesInput
    connect?: RepairRequestWhereUniqueInput
    update?: XOR<XOR<RepairRequestUpdateToOneWithWhereWithoutNotesInput, RepairRequestUpdateWithoutNotesInput>, RepairRequestUncheckedUpdateWithoutNotesInput>
  }

  export type UserUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    upsert?: UserUpsertWithoutNotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotesInput, UserUpdateWithoutNotesInput>, UserUncheckedUpdateWithoutNotesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutRoleInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    printers?: PrinterCreateNestedManyWithoutOwnerInput
    notes?: NoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    printers?: PrinterUncheckedCreateNestedManyWithoutOwnerInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    roleId?: IntFilter<"User"> | number
  }

  export type RoleCreateWithoutUsersInput = {
    name: string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type PrinterCreateWithoutOwnerInput = {
    model: string
    serialNumber: string
    repairRequests?: RepairRequestCreateNestedManyWithoutPrinterInput
  }

  export type PrinterUncheckedCreateWithoutOwnerInput = {
    id?: number
    model: string
    serialNumber: string
    repairRequests?: RepairRequestUncheckedCreateNestedManyWithoutPrinterInput
  }

  export type PrinterCreateOrConnectWithoutOwnerInput = {
    where: PrinterWhereUniqueInput
    create: XOR<PrinterCreateWithoutOwnerInput, PrinterUncheckedCreateWithoutOwnerInput>
  }

  export type PrinterCreateManyOwnerInputEnvelope = {
    data: PrinterCreateManyOwnerInput | PrinterCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type NoteCreateWithoutUserInput = {
    note: string
    createdAt?: Date | string
    repairRequest: RepairRequestCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateWithoutUserInput = {
    id?: number
    repairRequestId: number
    note: string
    createdAt?: Date | string
  }

  export type NoteCreateOrConnectWithoutUserInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput>
  }

  export type NoteCreateManyUserInputEnvelope = {
    data: NoteCreateManyUserInput | NoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PrinterUpsertWithWhereUniqueWithoutOwnerInput = {
    where: PrinterWhereUniqueInput
    update: XOR<PrinterUpdateWithoutOwnerInput, PrinterUncheckedUpdateWithoutOwnerInput>
    create: XOR<PrinterCreateWithoutOwnerInput, PrinterUncheckedCreateWithoutOwnerInput>
  }

  export type PrinterUpdateWithWhereUniqueWithoutOwnerInput = {
    where: PrinterWhereUniqueInput
    data: XOR<PrinterUpdateWithoutOwnerInput, PrinterUncheckedUpdateWithoutOwnerInput>
  }

  export type PrinterUpdateManyWithWhereWithoutOwnerInput = {
    where: PrinterScalarWhereInput
    data: XOR<PrinterUpdateManyMutationInput, PrinterUncheckedUpdateManyWithoutOwnerInput>
  }

  export type PrinterScalarWhereInput = {
    AND?: PrinterScalarWhereInput | PrinterScalarWhereInput[]
    OR?: PrinterScalarWhereInput[]
    NOT?: PrinterScalarWhereInput | PrinterScalarWhereInput[]
    id?: IntFilter<"Printer"> | number
    model?: StringFilter<"Printer"> | string
    serialNumber?: StringFilter<"Printer"> | string
    ownerId?: IntFilter<"Printer"> | number
  }

  export type NoteUpsertWithWhereUniqueWithoutUserInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutUserInput, NoteUncheckedUpdateWithoutUserInput>
    create: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutUserInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutUserInput, NoteUncheckedUpdateWithoutUserInput>
  }

  export type NoteUpdateManyWithWhereWithoutUserInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutUserInput>
  }

  export type NoteScalarWhereInput = {
    AND?: NoteScalarWhereInput | NoteScalarWhereInput[]
    OR?: NoteScalarWhereInput[]
    NOT?: NoteScalarWhereInput | NoteScalarWhereInput[]
    id?: IntFilter<"Note"> | number
    repairRequestId?: IntFilter<"Note"> | number
    userId?: IntFilter<"Note"> | number
    note?: StringFilter<"Note"> | string
    createdAt?: DateTimeFilter<"Note"> | Date | string
  }

  export type UserCreateWithoutPrintersInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    role: RoleCreateNestedOneWithoutUsersInput
    notes?: NoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPrintersInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    roleId: number
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPrintersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPrintersInput, UserUncheckedCreateWithoutPrintersInput>
  }

  export type RepairRequestCreateWithoutPrinterInput = {
    description: string
    accessories?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status: RepairStatusCreateNestedOneWithoutRepairRequestsInput
    repairParts?: RepairPartCreateNestedManyWithoutRepairRequestInput
    shipping?: ShippingCreateNestedOneWithoutRepairRequestInput
    notes?: NoteCreateNestedManyWithoutRepairRequestInput
  }

  export type RepairRequestUncheckedCreateWithoutPrinterInput = {
    id?: number
    description: string
    accessories?: string | null
    statusId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    repairParts?: RepairPartUncheckedCreateNestedManyWithoutRepairRequestInput
    shipping?: ShippingUncheckedCreateNestedOneWithoutRepairRequestInput
    notes?: NoteUncheckedCreateNestedManyWithoutRepairRequestInput
  }

  export type RepairRequestCreateOrConnectWithoutPrinterInput = {
    where: RepairRequestWhereUniqueInput
    create: XOR<RepairRequestCreateWithoutPrinterInput, RepairRequestUncheckedCreateWithoutPrinterInput>
  }

  export type RepairRequestCreateManyPrinterInputEnvelope = {
    data: RepairRequestCreateManyPrinterInput | RepairRequestCreateManyPrinterInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPrintersInput = {
    update: XOR<UserUpdateWithoutPrintersInput, UserUncheckedUpdateWithoutPrintersInput>
    create: XOR<UserCreateWithoutPrintersInput, UserUncheckedCreateWithoutPrintersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPrintersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPrintersInput, UserUncheckedUpdateWithoutPrintersInput>
  }

  export type UserUpdateWithoutPrintersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPrintersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RepairRequestUpsertWithWhereUniqueWithoutPrinterInput = {
    where: RepairRequestWhereUniqueInput
    update: XOR<RepairRequestUpdateWithoutPrinterInput, RepairRequestUncheckedUpdateWithoutPrinterInput>
    create: XOR<RepairRequestCreateWithoutPrinterInput, RepairRequestUncheckedCreateWithoutPrinterInput>
  }

  export type RepairRequestUpdateWithWhereUniqueWithoutPrinterInput = {
    where: RepairRequestWhereUniqueInput
    data: XOR<RepairRequestUpdateWithoutPrinterInput, RepairRequestUncheckedUpdateWithoutPrinterInput>
  }

  export type RepairRequestUpdateManyWithWhereWithoutPrinterInput = {
    where: RepairRequestScalarWhereInput
    data: XOR<RepairRequestUpdateManyMutationInput, RepairRequestUncheckedUpdateManyWithoutPrinterInput>
  }

  export type RepairRequestScalarWhereInput = {
    AND?: RepairRequestScalarWhereInput | RepairRequestScalarWhereInput[]
    OR?: RepairRequestScalarWhereInput[]
    NOT?: RepairRequestScalarWhereInput | RepairRequestScalarWhereInput[]
    id?: IntFilter<"RepairRequest"> | number
    printerId?: IntFilter<"RepairRequest"> | number
    description?: StringFilter<"RepairRequest"> | string
    accessories?: StringNullableFilter<"RepairRequest"> | string | null
    statusId?: IntFilter<"RepairRequest"> | number
    createdAt?: DateTimeFilter<"RepairRequest"> | Date | string
    updatedAt?: DateTimeFilter<"RepairRequest"> | Date | string
  }

  export type RepairRequestCreateWithoutStatusInput = {
    description: string
    accessories?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    printer: PrinterCreateNestedOneWithoutRepairRequestsInput
    repairParts?: RepairPartCreateNestedManyWithoutRepairRequestInput
    shipping?: ShippingCreateNestedOneWithoutRepairRequestInput
    notes?: NoteCreateNestedManyWithoutRepairRequestInput
  }

  export type RepairRequestUncheckedCreateWithoutStatusInput = {
    id?: number
    printerId: number
    description: string
    accessories?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repairParts?: RepairPartUncheckedCreateNestedManyWithoutRepairRequestInput
    shipping?: ShippingUncheckedCreateNestedOneWithoutRepairRequestInput
    notes?: NoteUncheckedCreateNestedManyWithoutRepairRequestInput
  }

  export type RepairRequestCreateOrConnectWithoutStatusInput = {
    where: RepairRequestWhereUniqueInput
    create: XOR<RepairRequestCreateWithoutStatusInput, RepairRequestUncheckedCreateWithoutStatusInput>
  }

  export type RepairRequestCreateManyStatusInputEnvelope = {
    data: RepairRequestCreateManyStatusInput | RepairRequestCreateManyStatusInput[]
    skipDuplicates?: boolean
  }

  export type RepairRequestUpsertWithWhereUniqueWithoutStatusInput = {
    where: RepairRequestWhereUniqueInput
    update: XOR<RepairRequestUpdateWithoutStatusInput, RepairRequestUncheckedUpdateWithoutStatusInput>
    create: XOR<RepairRequestCreateWithoutStatusInput, RepairRequestUncheckedCreateWithoutStatusInput>
  }

  export type RepairRequestUpdateWithWhereUniqueWithoutStatusInput = {
    where: RepairRequestWhereUniqueInput
    data: XOR<RepairRequestUpdateWithoutStatusInput, RepairRequestUncheckedUpdateWithoutStatusInput>
  }

  export type RepairRequestUpdateManyWithWhereWithoutStatusInput = {
    where: RepairRequestScalarWhereInput
    data: XOR<RepairRequestUpdateManyMutationInput, RepairRequestUncheckedUpdateManyWithoutStatusInput>
  }

  export type PrinterCreateWithoutRepairRequestsInput = {
    model: string
    serialNumber: string
    owner: UserCreateNestedOneWithoutPrintersInput
  }

  export type PrinterUncheckedCreateWithoutRepairRequestsInput = {
    id?: number
    model: string
    serialNumber: string
    ownerId: number
  }

  export type PrinterCreateOrConnectWithoutRepairRequestsInput = {
    where: PrinterWhereUniqueInput
    create: XOR<PrinterCreateWithoutRepairRequestsInput, PrinterUncheckedCreateWithoutRepairRequestsInput>
  }

  export type RepairStatusCreateWithoutRepairRequestsInput = {
    name: string
  }

  export type RepairStatusUncheckedCreateWithoutRepairRequestsInput = {
    id?: number
    name: string
  }

  export type RepairStatusCreateOrConnectWithoutRepairRequestsInput = {
    where: RepairStatusWhereUniqueInput
    create: XOR<RepairStatusCreateWithoutRepairRequestsInput, RepairStatusUncheckedCreateWithoutRepairRequestsInput>
  }

  export type RepairPartCreateWithoutRepairRequestInput = {
    partName: string
    quantity: number
    price: number
  }

  export type RepairPartUncheckedCreateWithoutRepairRequestInput = {
    id?: number
    partName: string
    quantity: number
    price: number
  }

  export type RepairPartCreateOrConnectWithoutRepairRequestInput = {
    where: RepairPartWhereUniqueInput
    create: XOR<RepairPartCreateWithoutRepairRequestInput, RepairPartUncheckedCreateWithoutRepairRequestInput>
  }

  export type RepairPartCreateManyRepairRequestInputEnvelope = {
    data: RepairPartCreateManyRepairRequestInput | RepairPartCreateManyRepairRequestInput[]
    skipDuplicates?: boolean
  }

  export type ShippingCreateWithoutRepairRequestInput = {
    courier: string
    trackingNumber: string
    shippedAt?: Date | string | null
    status: string
  }

  export type ShippingUncheckedCreateWithoutRepairRequestInput = {
    id?: number
    courier: string
    trackingNumber: string
    shippedAt?: Date | string | null
    status: string
  }

  export type ShippingCreateOrConnectWithoutRepairRequestInput = {
    where: ShippingWhereUniqueInput
    create: XOR<ShippingCreateWithoutRepairRequestInput, ShippingUncheckedCreateWithoutRepairRequestInput>
  }

  export type NoteCreateWithoutRepairRequestInput = {
    note: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateWithoutRepairRequestInput = {
    id?: number
    userId: number
    note: string
    createdAt?: Date | string
  }

  export type NoteCreateOrConnectWithoutRepairRequestInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutRepairRequestInput, NoteUncheckedCreateWithoutRepairRequestInput>
  }

  export type NoteCreateManyRepairRequestInputEnvelope = {
    data: NoteCreateManyRepairRequestInput | NoteCreateManyRepairRequestInput[]
    skipDuplicates?: boolean
  }

  export type PrinterUpsertWithoutRepairRequestsInput = {
    update: XOR<PrinterUpdateWithoutRepairRequestsInput, PrinterUncheckedUpdateWithoutRepairRequestsInput>
    create: XOR<PrinterCreateWithoutRepairRequestsInput, PrinterUncheckedCreateWithoutRepairRequestsInput>
    where?: PrinterWhereInput
  }

  export type PrinterUpdateToOneWithWhereWithoutRepairRequestsInput = {
    where?: PrinterWhereInput
    data: XOR<PrinterUpdateWithoutRepairRequestsInput, PrinterUncheckedUpdateWithoutRepairRequestsInput>
  }

  export type PrinterUpdateWithoutRepairRequestsInput = {
    model?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutPrintersNestedInput
  }

  export type PrinterUncheckedUpdateWithoutRepairRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type RepairStatusUpsertWithoutRepairRequestsInput = {
    update: XOR<RepairStatusUpdateWithoutRepairRequestsInput, RepairStatusUncheckedUpdateWithoutRepairRequestsInput>
    create: XOR<RepairStatusCreateWithoutRepairRequestsInput, RepairStatusUncheckedCreateWithoutRepairRequestsInput>
    where?: RepairStatusWhereInput
  }

  export type RepairStatusUpdateToOneWithWhereWithoutRepairRequestsInput = {
    where?: RepairStatusWhereInput
    data: XOR<RepairStatusUpdateWithoutRepairRequestsInput, RepairStatusUncheckedUpdateWithoutRepairRequestsInput>
  }

  export type RepairStatusUpdateWithoutRepairRequestsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RepairStatusUncheckedUpdateWithoutRepairRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RepairPartUpsertWithWhereUniqueWithoutRepairRequestInput = {
    where: RepairPartWhereUniqueInput
    update: XOR<RepairPartUpdateWithoutRepairRequestInput, RepairPartUncheckedUpdateWithoutRepairRequestInput>
    create: XOR<RepairPartCreateWithoutRepairRequestInput, RepairPartUncheckedCreateWithoutRepairRequestInput>
  }

  export type RepairPartUpdateWithWhereUniqueWithoutRepairRequestInput = {
    where: RepairPartWhereUniqueInput
    data: XOR<RepairPartUpdateWithoutRepairRequestInput, RepairPartUncheckedUpdateWithoutRepairRequestInput>
  }

  export type RepairPartUpdateManyWithWhereWithoutRepairRequestInput = {
    where: RepairPartScalarWhereInput
    data: XOR<RepairPartUpdateManyMutationInput, RepairPartUncheckedUpdateManyWithoutRepairRequestInput>
  }

  export type RepairPartScalarWhereInput = {
    AND?: RepairPartScalarWhereInput | RepairPartScalarWhereInput[]
    OR?: RepairPartScalarWhereInput[]
    NOT?: RepairPartScalarWhereInput | RepairPartScalarWhereInput[]
    id?: IntFilter<"RepairPart"> | number
    repairRequestId?: IntFilter<"RepairPart"> | number
    partName?: StringFilter<"RepairPart"> | string
    quantity?: IntFilter<"RepairPart"> | number
    price?: FloatFilter<"RepairPart"> | number
  }

  export type ShippingUpsertWithoutRepairRequestInput = {
    update: XOR<ShippingUpdateWithoutRepairRequestInput, ShippingUncheckedUpdateWithoutRepairRequestInput>
    create: XOR<ShippingCreateWithoutRepairRequestInput, ShippingUncheckedCreateWithoutRepairRequestInput>
    where?: ShippingWhereInput
  }

  export type ShippingUpdateToOneWithWhereWithoutRepairRequestInput = {
    where?: ShippingWhereInput
    data: XOR<ShippingUpdateWithoutRepairRequestInput, ShippingUncheckedUpdateWithoutRepairRequestInput>
  }

  export type ShippingUpdateWithoutRepairRequestInput = {
    courier?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ShippingUncheckedUpdateWithoutRepairRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    courier?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    shippedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type NoteUpsertWithWhereUniqueWithoutRepairRequestInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutRepairRequestInput, NoteUncheckedUpdateWithoutRepairRequestInput>
    create: XOR<NoteCreateWithoutRepairRequestInput, NoteUncheckedCreateWithoutRepairRequestInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutRepairRequestInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutRepairRequestInput, NoteUncheckedUpdateWithoutRepairRequestInput>
  }

  export type NoteUpdateManyWithWhereWithoutRepairRequestInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutRepairRequestInput>
  }

  export type RepairRequestCreateWithoutRepairPartsInput = {
    description: string
    accessories?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    printer: PrinterCreateNestedOneWithoutRepairRequestsInput
    status: RepairStatusCreateNestedOneWithoutRepairRequestsInput
    shipping?: ShippingCreateNestedOneWithoutRepairRequestInput
    notes?: NoteCreateNestedManyWithoutRepairRequestInput
  }

  export type RepairRequestUncheckedCreateWithoutRepairPartsInput = {
    id?: number
    printerId: number
    description: string
    accessories?: string | null
    statusId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    shipping?: ShippingUncheckedCreateNestedOneWithoutRepairRequestInput
    notes?: NoteUncheckedCreateNestedManyWithoutRepairRequestInput
  }

  export type RepairRequestCreateOrConnectWithoutRepairPartsInput = {
    where: RepairRequestWhereUniqueInput
    create: XOR<RepairRequestCreateWithoutRepairPartsInput, RepairRequestUncheckedCreateWithoutRepairPartsInput>
  }

  export type RepairRequestUpsertWithoutRepairPartsInput = {
    update: XOR<RepairRequestUpdateWithoutRepairPartsInput, RepairRequestUncheckedUpdateWithoutRepairPartsInput>
    create: XOR<RepairRequestCreateWithoutRepairPartsInput, RepairRequestUncheckedCreateWithoutRepairPartsInput>
    where?: RepairRequestWhereInput
  }

  export type RepairRequestUpdateToOneWithWhereWithoutRepairPartsInput = {
    where?: RepairRequestWhereInput
    data: XOR<RepairRequestUpdateWithoutRepairPartsInput, RepairRequestUncheckedUpdateWithoutRepairPartsInput>
  }

  export type RepairRequestUpdateWithoutRepairPartsInput = {
    description?: StringFieldUpdateOperationsInput | string
    accessories?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    printer?: PrinterUpdateOneRequiredWithoutRepairRequestsNestedInput
    status?: RepairStatusUpdateOneRequiredWithoutRepairRequestsNestedInput
    shipping?: ShippingUpdateOneWithoutRepairRequestNestedInput
    notes?: NoteUpdateManyWithoutRepairRequestNestedInput
  }

  export type RepairRequestUncheckedUpdateWithoutRepairPartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    printerId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    accessories?: NullableStringFieldUpdateOperationsInput | string | null
    statusId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipping?: ShippingUncheckedUpdateOneWithoutRepairRequestNestedInput
    notes?: NoteUncheckedUpdateManyWithoutRepairRequestNestedInput
  }

  export type RepairRequestCreateWithoutShippingInput = {
    description: string
    accessories?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    printer: PrinterCreateNestedOneWithoutRepairRequestsInput
    status: RepairStatusCreateNestedOneWithoutRepairRequestsInput
    repairParts?: RepairPartCreateNestedManyWithoutRepairRequestInput
    notes?: NoteCreateNestedManyWithoutRepairRequestInput
  }

  export type RepairRequestUncheckedCreateWithoutShippingInput = {
    id?: number
    printerId: number
    description: string
    accessories?: string | null
    statusId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    repairParts?: RepairPartUncheckedCreateNestedManyWithoutRepairRequestInput
    notes?: NoteUncheckedCreateNestedManyWithoutRepairRequestInput
  }

  export type RepairRequestCreateOrConnectWithoutShippingInput = {
    where: RepairRequestWhereUniqueInput
    create: XOR<RepairRequestCreateWithoutShippingInput, RepairRequestUncheckedCreateWithoutShippingInput>
  }

  export type RepairRequestUpsertWithoutShippingInput = {
    update: XOR<RepairRequestUpdateWithoutShippingInput, RepairRequestUncheckedUpdateWithoutShippingInput>
    create: XOR<RepairRequestCreateWithoutShippingInput, RepairRequestUncheckedCreateWithoutShippingInput>
    where?: RepairRequestWhereInput
  }

  export type RepairRequestUpdateToOneWithWhereWithoutShippingInput = {
    where?: RepairRequestWhereInput
    data: XOR<RepairRequestUpdateWithoutShippingInput, RepairRequestUncheckedUpdateWithoutShippingInput>
  }

  export type RepairRequestUpdateWithoutShippingInput = {
    description?: StringFieldUpdateOperationsInput | string
    accessories?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    printer?: PrinterUpdateOneRequiredWithoutRepairRequestsNestedInput
    status?: RepairStatusUpdateOneRequiredWithoutRepairRequestsNestedInput
    repairParts?: RepairPartUpdateManyWithoutRepairRequestNestedInput
    notes?: NoteUpdateManyWithoutRepairRequestNestedInput
  }

  export type RepairRequestUncheckedUpdateWithoutShippingInput = {
    id?: IntFieldUpdateOperationsInput | number
    printerId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    accessories?: NullableStringFieldUpdateOperationsInput | string | null
    statusId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairParts?: RepairPartUncheckedUpdateManyWithoutRepairRequestNestedInput
    notes?: NoteUncheckedUpdateManyWithoutRepairRequestNestedInput
  }

  export type RepairRequestCreateWithoutNotesInput = {
    description: string
    accessories?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    printer: PrinterCreateNestedOneWithoutRepairRequestsInput
    status: RepairStatusCreateNestedOneWithoutRepairRequestsInput
    repairParts?: RepairPartCreateNestedManyWithoutRepairRequestInput
    shipping?: ShippingCreateNestedOneWithoutRepairRequestInput
  }

  export type RepairRequestUncheckedCreateWithoutNotesInput = {
    id?: number
    printerId: number
    description: string
    accessories?: string | null
    statusId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    repairParts?: RepairPartUncheckedCreateNestedManyWithoutRepairRequestInput
    shipping?: ShippingUncheckedCreateNestedOneWithoutRepairRequestInput
  }

  export type RepairRequestCreateOrConnectWithoutNotesInput = {
    where: RepairRequestWhereUniqueInput
    create: XOR<RepairRequestCreateWithoutNotesInput, RepairRequestUncheckedCreateWithoutNotesInput>
  }

  export type UserCreateWithoutNotesInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    role: RoleCreateNestedOneWithoutUsersInput
    printers?: PrinterCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutNotesInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    roleId: number
    printers?: PrinterUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
  }

  export type RepairRequestUpsertWithoutNotesInput = {
    update: XOR<RepairRequestUpdateWithoutNotesInput, RepairRequestUncheckedUpdateWithoutNotesInput>
    create: XOR<RepairRequestCreateWithoutNotesInput, RepairRequestUncheckedCreateWithoutNotesInput>
    where?: RepairRequestWhereInput
  }

  export type RepairRequestUpdateToOneWithWhereWithoutNotesInput = {
    where?: RepairRequestWhereInput
    data: XOR<RepairRequestUpdateWithoutNotesInput, RepairRequestUncheckedUpdateWithoutNotesInput>
  }

  export type RepairRequestUpdateWithoutNotesInput = {
    description?: StringFieldUpdateOperationsInput | string
    accessories?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    printer?: PrinterUpdateOneRequiredWithoutRepairRequestsNestedInput
    status?: RepairStatusUpdateOneRequiredWithoutRepairRequestsNestedInput
    repairParts?: RepairPartUpdateManyWithoutRepairRequestNestedInput
    shipping?: ShippingUpdateOneWithoutRepairRequestNestedInput
  }

  export type RepairRequestUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    printerId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    accessories?: NullableStringFieldUpdateOperationsInput | string | null
    statusId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairParts?: RepairPartUncheckedUpdateManyWithoutRepairRequestNestedInput
    shipping?: ShippingUncheckedUpdateOneWithoutRepairRequestNestedInput
  }

  export type UserUpsertWithoutNotesInput = {
    update: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
  }

  export type UserUpdateWithoutNotesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    printers?: PrinterUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    printers?: PrinterUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyRoleInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
  }

  export type UserUpdateWithoutRoleInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    printers?: PrinterUpdateManyWithoutOwnerNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    printers?: PrinterUncheckedUpdateManyWithoutOwnerNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrinterCreateManyOwnerInput = {
    id?: number
    model: string
    serialNumber: string
  }

  export type NoteCreateManyUserInput = {
    id?: number
    repairRequestId: number
    note: string
    createdAt?: Date | string
  }

  export type PrinterUpdateWithoutOwnerInput = {
    model?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    repairRequests?: RepairRequestUpdateManyWithoutPrinterNestedInput
  }

  export type PrinterUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    repairRequests?: RepairRequestUncheckedUpdateManyWithoutPrinterNestedInput
  }

  export type PrinterUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
  }

  export type NoteUpdateWithoutUserInput = {
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairRequest?: RepairRequestUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    repairRequestId?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    repairRequestId?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepairRequestCreateManyPrinterInput = {
    id?: number
    description: string
    accessories?: string | null
    statusId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RepairRequestUpdateWithoutPrinterInput = {
    description?: StringFieldUpdateOperationsInput | string
    accessories?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: RepairStatusUpdateOneRequiredWithoutRepairRequestsNestedInput
    repairParts?: RepairPartUpdateManyWithoutRepairRequestNestedInput
    shipping?: ShippingUpdateOneWithoutRepairRequestNestedInput
    notes?: NoteUpdateManyWithoutRepairRequestNestedInput
  }

  export type RepairRequestUncheckedUpdateWithoutPrinterInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    accessories?: NullableStringFieldUpdateOperationsInput | string | null
    statusId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairParts?: RepairPartUncheckedUpdateManyWithoutRepairRequestNestedInput
    shipping?: ShippingUncheckedUpdateOneWithoutRepairRequestNestedInput
    notes?: NoteUncheckedUpdateManyWithoutRepairRequestNestedInput
  }

  export type RepairRequestUncheckedUpdateManyWithoutPrinterInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    accessories?: NullableStringFieldUpdateOperationsInput | string | null
    statusId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepairRequestCreateManyStatusInput = {
    id?: number
    printerId: number
    description: string
    accessories?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RepairRequestUpdateWithoutStatusInput = {
    description?: StringFieldUpdateOperationsInput | string
    accessories?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    printer?: PrinterUpdateOneRequiredWithoutRepairRequestsNestedInput
    repairParts?: RepairPartUpdateManyWithoutRepairRequestNestedInput
    shipping?: ShippingUpdateOneWithoutRepairRequestNestedInput
    notes?: NoteUpdateManyWithoutRepairRequestNestedInput
  }

  export type RepairRequestUncheckedUpdateWithoutStatusInput = {
    id?: IntFieldUpdateOperationsInput | number
    printerId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    accessories?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repairParts?: RepairPartUncheckedUpdateManyWithoutRepairRequestNestedInput
    shipping?: ShippingUncheckedUpdateOneWithoutRepairRequestNestedInput
    notes?: NoteUncheckedUpdateManyWithoutRepairRequestNestedInput
  }

  export type RepairRequestUncheckedUpdateManyWithoutStatusInput = {
    id?: IntFieldUpdateOperationsInput | number
    printerId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    accessories?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepairPartCreateManyRepairRequestInput = {
    id?: number
    partName: string
    quantity: number
    price: number
  }

  export type NoteCreateManyRepairRequestInput = {
    id?: number
    userId: number
    note: string
    createdAt?: Date | string
  }

  export type RepairPartUpdateWithoutRepairRequestInput = {
    partName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type RepairPartUncheckedUpdateWithoutRepairRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    partName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type RepairPartUncheckedUpdateManyWithoutRepairRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    partName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type NoteUpdateWithoutRepairRequestInput = {
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateWithoutRepairRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyWithoutRepairRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}