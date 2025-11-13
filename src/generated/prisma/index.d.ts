
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Reminder
 * 
 */
export type Reminder = $Result.DefaultSelection<Prisma.$ReminderPayload>
/**
 * Model File
 * 
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>
/**
 * Model ChatbotConversation
 * 
 */
export type ChatbotConversation = $Result.DefaultSelection<Prisma.$ChatbotConversationPayload>
/**
 * Model Exam
 * 
 */
export type Exam = $Result.DefaultSelection<Prisma.$ExamPayload>
/**
 * Model ExamQuestion
 * 
 */
export type ExamQuestion = $Result.DefaultSelection<Prisma.$ExamQuestionPayload>
/**
 * Model ExamSubmission
 * 
 */
export type ExamSubmission = $Result.DefaultSelection<Prisma.$ExamSubmissionPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs>;

  /**
   * `prisma.reminder`: Exposes CRUD operations for the **Reminder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reminders
    * const reminders = await prisma.reminder.findMany()
    * ```
    */
  get reminder(): Prisma.ReminderDelegate<ExtArgs>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<ExtArgs>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs>;

  /**
   * `prisma.chatbotConversation`: Exposes CRUD operations for the **ChatbotConversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatbotConversations
    * const chatbotConversations = await prisma.chatbotConversation.findMany()
    * ```
    */
  get chatbotConversation(): Prisma.ChatbotConversationDelegate<ExtArgs>;

  /**
   * `prisma.exam`: Exposes CRUD operations for the **Exam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exams
    * const exams = await prisma.exam.findMany()
    * ```
    */
  get exam(): Prisma.ExamDelegate<ExtArgs>;

  /**
   * `prisma.examQuestion`: Exposes CRUD operations for the **ExamQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExamQuestions
    * const examQuestions = await prisma.examQuestion.findMany()
    * ```
    */
  get examQuestion(): Prisma.ExamQuestionDelegate<ExtArgs>;

  /**
   * `prisma.examSubmission`: Exposes CRUD operations for the **ExamSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExamSubmissions
    * const examSubmissions = await prisma.examSubmission.findMany()
    * ```
    */
  get examSubmission(): Prisma.ExamSubmissionDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Project: 'Project',
    Task: 'Task',
    ChatMessage: 'ChatMessage',
    Notification: 'Notification',
    Reminder: 'Reminder',
    File: 'File',
    Submission: 'Submission',
    ActivityLog: 'ActivityLog',
    ChatbotConversation: 'ChatbotConversation',
    Exam: 'Exam',
    ExamQuestion: 'ExamQuestion',
    ExamSubmission: 'ExamSubmission'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "project" | "task" | "chatMessage" | "notification" | "reminder" | "file" | "submission" | "activityLog" | "chatbotConversation" | "exam" | "examQuestion" | "examSubmission"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Reminder: {
        payload: Prisma.$ReminderPayload<ExtArgs>
        fields: Prisma.ReminderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReminderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReminderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          findFirst: {
            args: Prisma.ReminderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReminderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          findMany: {
            args: Prisma.ReminderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          create: {
            args: Prisma.ReminderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          createMany: {
            args: Prisma.ReminderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReminderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          delete: {
            args: Prisma.ReminderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          update: {
            args: Prisma.ReminderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          deleteMany: {
            args: Prisma.ReminderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReminderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReminderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          aggregate: {
            args: Prisma.ReminderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReminder>
          }
          groupBy: {
            args: Prisma.ReminderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReminderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReminderCountArgs<ExtArgs>
            result: $Utils.Optional<ReminderCountAggregateOutputType> | number
          }
        }
      }
      File: {
        payload: Prisma.$FilePayload<ExtArgs>
        fields: Prisma.FileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findFirst: {
            args: Prisma.FileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findMany: {
            args: Prisma.FileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          create: {
            args: Prisma.FileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          createMany: {
            args: Prisma.FileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          delete: {
            args: Prisma.FileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          update: {
            args: Prisma.FileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          deleteMany: {
            args: Prisma.FileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.FileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileCountArgs<ExtArgs>
            result: $Utils.Optional<FileCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
      ChatbotConversation: {
        payload: Prisma.$ChatbotConversationPayload<ExtArgs>
        fields: Prisma.ChatbotConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatbotConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatbotConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotConversationPayload>
          }
          findFirst: {
            args: Prisma.ChatbotConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatbotConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotConversationPayload>
          }
          findMany: {
            args: Prisma.ChatbotConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotConversationPayload>[]
          }
          create: {
            args: Prisma.ChatbotConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotConversationPayload>
          }
          createMany: {
            args: Prisma.ChatbotConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatbotConversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotConversationPayload>[]
          }
          delete: {
            args: Prisma.ChatbotConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotConversationPayload>
          }
          update: {
            args: Prisma.ChatbotConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotConversationPayload>
          }
          deleteMany: {
            args: Prisma.ChatbotConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatbotConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatbotConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatbotConversationPayload>
          }
          aggregate: {
            args: Prisma.ChatbotConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatbotConversation>
          }
          groupBy: {
            args: Prisma.ChatbotConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatbotConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatbotConversationCountArgs<ExtArgs>
            result: $Utils.Optional<ChatbotConversationCountAggregateOutputType> | number
          }
        }
      }
      Exam: {
        payload: Prisma.$ExamPayload<ExtArgs>
        fields: Prisma.ExamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findFirst: {
            args: Prisma.ExamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findMany: {
            args: Prisma.ExamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          create: {
            args: Prisma.ExamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          createMany: {
            args: Prisma.ExamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          delete: {
            args: Prisma.ExamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          update: {
            args: Prisma.ExamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          deleteMany: {
            args: Prisma.ExamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          aggregate: {
            args: Prisma.ExamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExam>
          }
          groupBy: {
            args: Prisma.ExamGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamCountArgs<ExtArgs>
            result: $Utils.Optional<ExamCountAggregateOutputType> | number
          }
        }
      }
      ExamQuestion: {
        payload: Prisma.$ExamQuestionPayload<ExtArgs>
        fields: Prisma.ExamQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload>
          }
          findFirst: {
            args: Prisma.ExamQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload>
          }
          findMany: {
            args: Prisma.ExamQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload>[]
          }
          create: {
            args: Prisma.ExamQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload>
          }
          createMany: {
            args: Prisma.ExamQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload>[]
          }
          delete: {
            args: Prisma.ExamQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload>
          }
          update: {
            args: Prisma.ExamQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload>
          }
          deleteMany: {
            args: Prisma.ExamQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExamQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamQuestionPayload>
          }
          aggregate: {
            args: Prisma.ExamQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamQuestion>
          }
          groupBy: {
            args: Prisma.ExamQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<ExamQuestionCountAggregateOutputType> | number
          }
        }
      }
      ExamSubmission: {
        payload: Prisma.$ExamSubmissionPayload<ExtArgs>
        fields: Prisma.ExamSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload>
          }
          findFirst: {
            args: Prisma.ExamSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload>
          }
          findMany: {
            args: Prisma.ExamSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload>[]
          }
          create: {
            args: Prisma.ExamSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload>
          }
          createMany: {
            args: Prisma.ExamSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload>[]
          }
          delete: {
            args: Prisma.ExamSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload>
          }
          update: {
            args: Prisma.ExamSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.ExamSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExamSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamSubmissionPayload>
          }
          aggregate: {
            args: Prisma.ExamSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamSubmission>
          }
          groupBy: {
            args: Prisma.ExamSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<ExamSubmissionCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    projects: number
    tasks: number
    tutorProjects: number
    tutoredTasks: number
    chatMessages: number
    receivedMessages: number
    notifications: number
    reminders: number
    studentSubmissions: number
    tutorGradings: number
    activityLogs: number
    createdExams: number
    examSubmissions: number
    chatbotConversations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
    tasks?: boolean | UserCountOutputTypeCountTasksArgs
    tutorProjects?: boolean | UserCountOutputTypeCountTutorProjectsArgs
    tutoredTasks?: boolean | UserCountOutputTypeCountTutoredTasksArgs
    chatMessages?: boolean | UserCountOutputTypeCountChatMessagesArgs
    receivedMessages?: boolean | UserCountOutputTypeCountReceivedMessagesArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    reminders?: boolean | UserCountOutputTypeCountRemindersArgs
    studentSubmissions?: boolean | UserCountOutputTypeCountStudentSubmissionsArgs
    tutorGradings?: boolean | UserCountOutputTypeCountTutorGradingsArgs
    activityLogs?: boolean | UserCountOutputTypeCountActivityLogsArgs
    createdExams?: boolean | UserCountOutputTypeCountCreatedExamsArgs
    examSubmissions?: boolean | UserCountOutputTypeCountExamSubmissionsArgs
    chatbotConversations?: boolean | UserCountOutputTypeCountChatbotConversationsArgs
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
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTutorProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTutoredTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudentSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTutorGradingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedExamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExamSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamSubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatbotConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatbotConversationWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    tasks: number
    participants: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | ProjectCountOutputTypeCountTasksArgs
    participants?: boolean | ProjectCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    submissions: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | TaskCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }


  /**
   * Count Type SubmissionCountOutputType
   */

  export type SubmissionCountOutputType = {
    files: number
  }

  export type SubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | SubmissionCountOutputTypeCountFilesArgs
  }

  // Custom InputTypes
  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionCountOutputType
     */
    select?: SubmissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
  }


  /**
   * Count Type ExamCountOutputType
   */

  export type ExamCountOutputType = {
    submissions: number
    questions: number
  }

  export type ExamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | ExamCountOutputTypeCountSubmissionsArgs
    questions?: boolean | ExamCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamCountOutputType
     */
    select?: ExamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamSubmissionWhereInput
  }

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamQuestionWhereInput
  }


  /**
   * Models
   */

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
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    role: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    profileComplete: boolean | null
    status: string | null
    password: string | null
    googleId: string | null
    googleAccessToken: string | null
    googleRefreshToken: string | null
    googleTokenExpiry: Date | null
    calendarId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    role: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    profileComplete: boolean | null
    status: string | null
    password: string | null
    googleId: string | null
    googleAccessToken: string | null
    googleRefreshToken: string | null
    googleTokenExpiry: Date | null
    calendarId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    role: number
    firstName: number
    lastName: number
    email: number
    profileComplete: number
    status: number
    password: number
    googleId: number
    googleAccessToken: number
    googleRefreshToken: number
    googleTokenExpiry: number
    calendarId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    role?: true
    firstName?: true
    lastName?: true
    email?: true
    profileComplete?: true
    status?: true
    password?: true
    googleId?: true
    googleAccessToken?: true
    googleRefreshToken?: true
    googleTokenExpiry?: true
    calendarId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    role?: true
    firstName?: true
    lastName?: true
    email?: true
    profileComplete?: true
    status?: true
    password?: true
    googleId?: true
    googleAccessToken?: true
    googleRefreshToken?: true
    googleTokenExpiry?: true
    calendarId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    role?: true
    firstName?: true
    lastName?: true
    email?: true
    profileComplete?: true
    status?: true
    password?: true
    googleId?: true
    googleAccessToken?: true
    googleRefreshToken?: true
    googleTokenExpiry?: true
    calendarId?: true
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
    username: string
    role: string
    firstName: string | null
    lastName: string | null
    email: string | null
    profileComplete: boolean
    status: string
    password: string
    googleId: string | null
    googleAccessToken: string | null
    googleRefreshToken: string | null
    googleTokenExpiry: Date | null
    calendarId: string | null
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
    username?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    profileComplete?: boolean
    status?: boolean
    password?: boolean
    googleId?: boolean
    googleAccessToken?: boolean
    googleRefreshToken?: boolean
    googleTokenExpiry?: boolean
    calendarId?: boolean
    projects?: boolean | User$projectsArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    tutorProjects?: boolean | User$tutorProjectsArgs<ExtArgs>
    tutoredTasks?: boolean | User$tutoredTasksArgs<ExtArgs>
    chatMessages?: boolean | User$chatMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    reminders?: boolean | User$remindersArgs<ExtArgs>
    studentSubmissions?: boolean | User$studentSubmissionsArgs<ExtArgs>
    tutorGradings?: boolean | User$tutorGradingsArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    createdExams?: boolean | User$createdExamsArgs<ExtArgs>
    examSubmissions?: boolean | User$examSubmissionsArgs<ExtArgs>
    chatbotConversations?: boolean | User$chatbotConversationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    profileComplete?: boolean
    status?: boolean
    password?: boolean
    googleId?: boolean
    googleAccessToken?: boolean
    googleRefreshToken?: boolean
    googleTokenExpiry?: boolean
    calendarId?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    profileComplete?: boolean
    status?: boolean
    password?: boolean
    googleId?: boolean
    googleAccessToken?: boolean
    googleRefreshToken?: boolean
    googleTokenExpiry?: boolean
    calendarId?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | User$projectsArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    tutorProjects?: boolean | User$tutorProjectsArgs<ExtArgs>
    tutoredTasks?: boolean | User$tutoredTasksArgs<ExtArgs>
    chatMessages?: boolean | User$chatMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    reminders?: boolean | User$remindersArgs<ExtArgs>
    studentSubmissions?: boolean | User$studentSubmissionsArgs<ExtArgs>
    tutorGradings?: boolean | User$tutorGradingsArgs<ExtArgs>
    activityLogs?: boolean | User$activityLogsArgs<ExtArgs>
    createdExams?: boolean | User$createdExamsArgs<ExtArgs>
    examSubmissions?: boolean | User$examSubmissionsArgs<ExtArgs>
    chatbotConversations?: boolean | User$chatbotConversationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      tutorProjects: Prisma.$ProjectPayload<ExtArgs>[]
      tutoredTasks: Prisma.$TaskPayload<ExtArgs>[]
      chatMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
      receivedMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      reminders: Prisma.$ReminderPayload<ExtArgs>[]
      studentSubmissions: Prisma.$SubmissionPayload<ExtArgs>[]
      tutorGradings: Prisma.$SubmissionPayload<ExtArgs>[]
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
      createdExams: Prisma.$ExamPayload<ExtArgs>[]
      examSubmissions: Prisma.$ExamSubmissionPayload<ExtArgs>[]
      chatbotConversations: Prisma.$ChatbotConversationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      role: string
      firstName: string | null
      lastName: string | null
      email: string | null
      profileComplete: boolean
      status: string
      password: string
      googleId: string | null
      googleAccessToken: string | null
      googleRefreshToken: string | null
      googleTokenExpiry: Date | null
      calendarId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany"> | Null>
    tasks<T extends User$tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    tutorProjects<T extends User$tutorProjectsArgs<ExtArgs> = {}>(args?: Subset<T, User$tutorProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany"> | Null>
    tutoredTasks<T extends User$tutoredTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$tutoredTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    chatMessages<T extends User$chatMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$chatMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany"> | Null>
    receivedMessages<T extends User$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany"> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany"> | Null>
    reminders<T extends User$remindersArgs<ExtArgs> = {}>(args?: Subset<T, User$remindersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany"> | Null>
    studentSubmissions<T extends User$studentSubmissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$studentSubmissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany"> | Null>
    tutorGradings<T extends User$tutorGradingsArgs<ExtArgs> = {}>(args?: Subset<T, User$tutorGradingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany"> | Null>
    activityLogs<T extends User$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany"> | Null>
    createdExams<T extends User$createdExamsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdExamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany"> | Null>
    examSubmissions<T extends User$examSubmissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$examSubmissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "findMany"> | Null>
    chatbotConversations<T extends User$chatbotConversationsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatbotConversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatbotConversationPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly username: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly profileComplete: FieldRef<"User", 'Boolean'>
    readonly status: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly googleAccessToken: FieldRef<"User", 'String'>
    readonly googleRefreshToken: FieldRef<"User", 'String'>
    readonly googleTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly calendarId: FieldRef<"User", 'String'>
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
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
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
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.tasks
   */
  export type User$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.tutorProjects
   */
  export type User$tutorProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.tutoredTasks
   */
  export type User$tutoredTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.chatMessages
   */
  export type User$chatMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * User.receivedMessages
   */
  export type User$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.reminders
   */
  export type User$remindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    cursor?: ReminderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * User.studentSubmissions
   */
  export type User$studentSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * User.tutorGradings
   */
  export type User$tutorGradingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * User.activityLogs
   */
  export type User$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * User.createdExams
   */
  export type User$createdExamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    cursor?: ExamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * User.examSubmissions
   */
  export type User$examSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    where?: ExamSubmissionWhereInput
    orderBy?: ExamSubmissionOrderByWithRelationInput | ExamSubmissionOrderByWithRelationInput[]
    cursor?: ExamSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamSubmissionScalarFieldEnum | ExamSubmissionScalarFieldEnum[]
  }

  /**
   * User.chatbotConversations
   */
  export type User$chatbotConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatbotConversation
     */
    select?: ChatbotConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotConversationInclude<ExtArgs> | null
    where?: ChatbotConversationWhereInput
    orderBy?: ChatbotConversationOrderByWithRelationInput | ChatbotConversationOrderByWithRelationInput[]
    cursor?: ChatbotConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatbotConversationScalarFieldEnum | ChatbotConversationScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    tutorId: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    tutorId: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
    googleEventId: string | null
    tutorId: number | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
    googleEventId: string | null
    tutorId: number | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    startDate: number
    endDate: number
    status: number
    googleEventId: number
    tutorId: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    tutorId?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    tutorId?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    status?: true
    googleEventId?: true
    tutorId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    status?: true
    googleEventId?: true
    tutorId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    startDate?: true
    endDate?: true
    status?: true
    googleEventId?: true
    tutorId?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    name: string
    description: string | null
    startDate: Date | null
    endDate: Date | null
    status: string
    googleEventId: string | null
    tutorId: number | null
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    googleEventId?: boolean
    tutorId?: boolean
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    participants?: boolean | Project$participantsArgs<ExtArgs>
    tutor?: boolean | Project$tutorArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    googleEventId?: boolean
    tutorId?: boolean
    tutor?: boolean | Project$tutorArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    googleEventId?: boolean
    tutorId?: boolean
  }

  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    participants?: boolean | Project$participantsArgs<ExtArgs>
    tutor?: boolean | Project$tutorArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tutor?: boolean | Project$tutorArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      participants: Prisma.$UserPayload<ExtArgs>[]
      tutor: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      startDate: Date | null
      endDate: Date | null
      status: string
      googleEventId: string | null
      tutorId: number | null
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends Project$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Project$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    participants<T extends Project$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Project$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    tutor<T extends Project$tutorArgs<ExtArgs> = {}>(args?: Subset<T, Project$tutorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly startDate: FieldRef<"Project", 'DateTime'>
    readonly endDate: FieldRef<"Project", 'DateTime'>
    readonly status: FieldRef<"Project", 'String'>
    readonly googleEventId: FieldRef<"Project", 'String'>
    readonly tutorId: FieldRef<"Project", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }

  /**
   * Project.tasks
   */
  export type Project$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Project.participants
   */
  export type Project$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
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
   * Project.tutor
   */
  export type Project$tutorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
    responsibleId: number | null
    tutorId: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
    projectId: number | null
    responsibleId: number | null
    tutorId: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    dueDate: Date | null
    priority: string | null
    status: string | null
    type: string | null
    googleEventId: string | null
    projectId: number | null
    responsibleId: number | null
    tutorId: number | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    dueDate: Date | null
    priority: string | null
    status: string | null
    type: string | null
    googleEventId: string | null
    projectId: number | null
    responsibleId: number | null
    tutorId: number | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    name: number
    description: number
    dueDate: number
    priority: number
    status: number
    type: number
    googleEventId: number
    projectId: number
    responsibleId: number
    tutorId: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    projectId?: true
    responsibleId?: true
    tutorId?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    projectId?: true
    responsibleId?: true
    tutorId?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    dueDate?: true
    priority?: true
    status?: true
    type?: true
    googleEventId?: true
    projectId?: true
    responsibleId?: true
    tutorId?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    dueDate?: true
    priority?: true
    status?: true
    type?: true
    googleEventId?: true
    projectId?: true
    responsibleId?: true
    tutorId?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    dueDate?: true
    priority?: true
    status?: true
    type?: true
    googleEventId?: true
    projectId?: true
    responsibleId?: true
    tutorId?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: number
    name: string
    description: string | null
    dueDate: Date | null
    priority: string
    status: string
    type: string
    googleEventId: string | null
    projectId: number | null
    responsibleId: number
    tutorId: number | null
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    dueDate?: boolean
    priority?: boolean
    status?: boolean
    type?: boolean
    googleEventId?: boolean
    projectId?: boolean
    responsibleId?: boolean
    tutorId?: boolean
    project?: boolean | Task$projectArgs<ExtArgs>
    responsible?: boolean | UserDefaultArgs<ExtArgs>
    tutor?: boolean | Task$tutorArgs<ExtArgs>
    submissions?: boolean | Task$submissionsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    dueDate?: boolean
    priority?: boolean
    status?: boolean
    type?: boolean
    googleEventId?: boolean
    projectId?: boolean
    responsibleId?: boolean
    tutorId?: boolean
    project?: boolean | Task$projectArgs<ExtArgs>
    responsible?: boolean | UserDefaultArgs<ExtArgs>
    tutor?: boolean | Task$tutorArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    dueDate?: boolean
    priority?: boolean
    status?: boolean
    type?: boolean
    googleEventId?: boolean
    projectId?: boolean
    responsibleId?: boolean
    tutorId?: boolean
  }

  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | Task$projectArgs<ExtArgs>
    responsible?: boolean | UserDefaultArgs<ExtArgs>
    tutor?: boolean | Task$tutorArgs<ExtArgs>
    submissions?: boolean | Task$submissionsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | Task$projectArgs<ExtArgs>
    responsible?: boolean | UserDefaultArgs<ExtArgs>
    tutor?: boolean | Task$tutorArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs> | null
      responsible: Prisma.$UserPayload<ExtArgs>
      tutor: Prisma.$UserPayload<ExtArgs> | null
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      dueDate: Date | null
      priority: string
      status: string
      type: string
      googleEventId: string | null
      projectId: number | null
      responsibleId: number
      tutorId: number | null
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends Task$projectArgs<ExtArgs> = {}>(args?: Subset<T, Task$projectArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    responsible<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tutor<T extends Task$tutorArgs<ExtArgs> = {}>(args?: Subset<T, Task$tutorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    submissions<T extends Task$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Task$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Task model
   */ 
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'Int'>
    readonly name: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly dueDate: FieldRef<"Task", 'DateTime'>
    readonly priority: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'String'>
    readonly type: FieldRef<"Task", 'String'>
    readonly googleEventId: FieldRef<"Task", 'String'>
    readonly projectId: FieldRef<"Task", 'Int'>
    readonly responsibleId: FieldRef<"Task", 'Int'>
    readonly tutorId: FieldRef<"Task", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
  }

  /**
   * Task.project
   */
  export type Task$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
  }

  /**
   * Task.tutor
   */
  export type Task$tutorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Task.submissions
   */
  export type Task$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _avg: ChatMessageAvgAggregateOutputType | null
    _sum: ChatMessageSumAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    recipientId: number | null
  }

  export type ChatMessageSumAggregateOutputType = {
    id: number | null
    userId: number | null
    recipientId: number | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: number | null
    userId: number | null
    message: string | null
    timestamp: Date | null
    recipientId: number | null
    isPrivate: boolean | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    message: string | null
    timestamp: Date | null
    recipientId: number | null
    isPrivate: boolean | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    userId: number
    message: number
    timestamp: number
    recipientId: number
    isPrivate: number
    _all: number
  }


  export type ChatMessageAvgAggregateInputType = {
    id?: true
    userId?: true
    recipientId?: true
  }

  export type ChatMessageSumAggregateInputType = {
    id?: true
    userId?: true
    recipientId?: true
  }

  export type ChatMessageMinAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    timestamp?: true
    recipientId?: true
    isPrivate?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    timestamp?: true
    recipientId?: true
    isPrivate?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    timestamp?: true
    recipientId?: true
    isPrivate?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _avg?: ChatMessageAvgAggregateInputType
    _sum?: ChatMessageSumAggregateInputType
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: number
    userId: number
    message: string
    timestamp: Date
    recipientId: number | null
    isPrivate: boolean
    _count: ChatMessageCountAggregateOutputType | null
    _avg: ChatMessageAvgAggregateOutputType | null
    _sum: ChatMessageSumAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    timestamp?: boolean
    recipientId?: boolean
    isPrivate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | ChatMessage$recipientArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    timestamp?: boolean
    recipientId?: boolean
    isPrivate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | ChatMessage$recipientArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    userId?: boolean
    message?: boolean
    timestamp?: boolean
    recipientId?: boolean
    isPrivate?: boolean
  }

  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | ChatMessage$recipientArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | ChatMessage$recipientArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      recipient: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      message: string
      timestamp: Date
      recipientId: number | null
      isPrivate: boolean
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
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
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    recipient<T extends ChatMessage$recipientArgs<ExtArgs> = {}>(args?: Subset<T, ChatMessage$recipientArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the ChatMessage model
   */ 
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'Int'>
    readonly userId: FieldRef<"ChatMessage", 'Int'>
    readonly message: FieldRef<"ChatMessage", 'String'>
    readonly timestamp: FieldRef<"ChatMessage", 'DateTime'>
    readonly recipientId: FieldRef<"ChatMessage", 'Int'>
    readonly isPrivate: FieldRef<"ChatMessage", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
  }

  /**
   * ChatMessage.recipient
   */
  export type ChatMessage$recipientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    relatedId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
    relatedId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    message: string | null
    type: string | null
    isRead: boolean | null
    createdAt: Date | null
    relatedId: number | null
    relatedType: string | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    message: string | null
    type: string | null
    isRead: boolean | null
    createdAt: Date | null
    relatedId: number | null
    relatedType: string | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    message: number
    type: number
    isRead: number
    createdAt: number
    relatedId: number
    relatedType: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userId?: true
    relatedId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userId?: true
    relatedId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    type?: true
    isRead?: true
    createdAt?: true
    relatedId?: true
    relatedType?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    type?: true
    isRead?: true
    createdAt?: true
    relatedId?: true
    relatedType?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    type?: true
    isRead?: true
    createdAt?: true
    relatedId?: true
    relatedType?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    userId: number
    message: string
    type: string
    isRead: boolean
    createdAt: Date
    relatedId: number | null
    relatedType: string | null
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    type?: boolean
    isRead?: boolean
    createdAt?: boolean
    relatedId?: boolean
    relatedType?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    type?: boolean
    isRead?: boolean
    createdAt?: boolean
    relatedId?: boolean
    relatedType?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    message?: boolean
    type?: boolean
    isRead?: boolean
    createdAt?: boolean
    relatedId?: boolean
    relatedType?: boolean
  }

  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      message: string
      type: string
      isRead: boolean
      createdAt: Date
      relatedId: number | null
      relatedType: string | null
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Notification model
   */ 
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly userId: FieldRef<"Notification", 'Int'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly relatedId: FieldRef<"Notification", 'Int'>
    readonly relatedType: FieldRef<"Notification", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Reminder
   */

  export type AggregateReminder = {
    _count: ReminderCountAggregateOutputType | null
    _avg: ReminderAvgAggregateOutputType | null
    _sum: ReminderSumAggregateOutputType | null
    _min: ReminderMinAggregateOutputType | null
    _max: ReminderMaxAggregateOutputType | null
  }

  export type ReminderAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    relatedId: number | null
  }

  export type ReminderSumAggregateOutputType = {
    id: number | null
    userId: number | null
    relatedId: number | null
  }

  export type ReminderMinAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    description: string | null
    scheduledAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
    relatedId: number | null
    relatedType: string | null
  }

  export type ReminderMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    description: string | null
    scheduledAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
    relatedId: number | null
    relatedType: string | null
  }

  export type ReminderCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    scheduledAt: number
    isActive: number
    createdAt: number
    relatedId: number
    relatedType: number
    _all: number
  }


  export type ReminderAvgAggregateInputType = {
    id?: true
    userId?: true
    relatedId?: true
  }

  export type ReminderSumAggregateInputType = {
    id?: true
    userId?: true
    relatedId?: true
  }

  export type ReminderMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    scheduledAt?: true
    isActive?: true
    createdAt?: true
    relatedId?: true
    relatedType?: true
  }

  export type ReminderMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    scheduledAt?: true
    isActive?: true
    createdAt?: true
    relatedId?: true
    relatedType?: true
  }

  export type ReminderCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    scheduledAt?: true
    isActive?: true
    createdAt?: true
    relatedId?: true
    relatedType?: true
    _all?: true
  }

  export type ReminderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminder to aggregate.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reminders
    **/
    _count?: true | ReminderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReminderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReminderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReminderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReminderMaxAggregateInputType
  }

  export type GetReminderAggregateType<T extends ReminderAggregateArgs> = {
        [P in keyof T & keyof AggregateReminder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReminder[P]>
      : GetScalarType<T[P], AggregateReminder[P]>
  }




  export type ReminderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithAggregationInput | ReminderOrderByWithAggregationInput[]
    by: ReminderScalarFieldEnum[] | ReminderScalarFieldEnum
    having?: ReminderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReminderCountAggregateInputType | true
    _avg?: ReminderAvgAggregateInputType
    _sum?: ReminderSumAggregateInputType
    _min?: ReminderMinAggregateInputType
    _max?: ReminderMaxAggregateInputType
  }

  export type ReminderGroupByOutputType = {
    id: number
    userId: number
    title: string
    description: string | null
    scheduledAt: Date
    isActive: boolean
    createdAt: Date
    relatedId: number | null
    relatedType: string | null
    _count: ReminderCountAggregateOutputType | null
    _avg: ReminderAvgAggregateOutputType | null
    _sum: ReminderSumAggregateOutputType | null
    _min: ReminderMinAggregateOutputType | null
    _max: ReminderMaxAggregateOutputType | null
  }

  type GetReminderGroupByPayload<T extends ReminderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReminderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReminderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReminderGroupByOutputType[P]>
            : GetScalarType<T[P], ReminderGroupByOutputType[P]>
        }
      >
    >


  export type ReminderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    scheduledAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    relatedId?: boolean
    relatedType?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    scheduledAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    relatedId?: boolean
    relatedType?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    scheduledAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    relatedId?: boolean
    relatedType?: boolean
  }

  export type ReminderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReminderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReminderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reminder"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      title: string
      description: string | null
      scheduledAt: Date
      isActive: boolean
      createdAt: Date
      relatedId: number | null
      relatedType: string | null
    }, ExtArgs["result"]["reminder"]>
    composites: {}
  }

  type ReminderGetPayload<S extends boolean | null | undefined | ReminderDefaultArgs> = $Result.GetResult<Prisma.$ReminderPayload, S>

  type ReminderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReminderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReminderCountAggregateInputType | true
    }

  export interface ReminderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reminder'], meta: { name: 'Reminder' } }
    /**
     * Find zero or one Reminder that matches the filter.
     * @param {ReminderFindUniqueArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReminderFindUniqueArgs>(args: SelectSubset<T, ReminderFindUniqueArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reminder that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReminderFindUniqueOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReminderFindUniqueOrThrowArgs>(args: SelectSubset<T, ReminderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reminder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindFirstArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReminderFindFirstArgs>(args?: SelectSubset<T, ReminderFindFirstArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reminder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindFirstOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReminderFindFirstOrThrowArgs>(args?: SelectSubset<T, ReminderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reminders
     * const reminders = await prisma.reminder.findMany()
     * 
     * // Get first 10 Reminders
     * const reminders = await prisma.reminder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reminderWithIdOnly = await prisma.reminder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReminderFindManyArgs>(args?: SelectSubset<T, ReminderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reminder.
     * @param {ReminderCreateArgs} args - Arguments to create a Reminder.
     * @example
     * // Create one Reminder
     * const Reminder = await prisma.reminder.create({
     *   data: {
     *     // ... data to create a Reminder
     *   }
     * })
     * 
     */
    create<T extends ReminderCreateArgs>(args: SelectSubset<T, ReminderCreateArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reminders.
     * @param {ReminderCreateManyArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminder = await prisma.reminder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReminderCreateManyArgs>(args?: SelectSubset<T, ReminderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reminders and returns the data saved in the database.
     * @param {ReminderCreateManyAndReturnArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminder = await prisma.reminder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reminders and only return the `id`
     * const reminderWithIdOnly = await prisma.reminder.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReminderCreateManyAndReturnArgs>(args?: SelectSubset<T, ReminderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Reminder.
     * @param {ReminderDeleteArgs} args - Arguments to delete one Reminder.
     * @example
     * // Delete one Reminder
     * const Reminder = await prisma.reminder.delete({
     *   where: {
     *     // ... filter to delete one Reminder
     *   }
     * })
     * 
     */
    delete<T extends ReminderDeleteArgs>(args: SelectSubset<T, ReminderDeleteArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reminder.
     * @param {ReminderUpdateArgs} args - Arguments to update one Reminder.
     * @example
     * // Update one Reminder
     * const reminder = await prisma.reminder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReminderUpdateArgs>(args: SelectSubset<T, ReminderUpdateArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reminders.
     * @param {ReminderDeleteManyArgs} args - Arguments to filter Reminders to delete.
     * @example
     * // Delete a few Reminders
     * const { count } = await prisma.reminder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReminderDeleteManyArgs>(args?: SelectSubset<T, ReminderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reminders
     * const reminder = await prisma.reminder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReminderUpdateManyArgs>(args: SelectSubset<T, ReminderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reminder.
     * @param {ReminderUpsertArgs} args - Arguments to update or create a Reminder.
     * @example
     * // Update or create a Reminder
     * const reminder = await prisma.reminder.upsert({
     *   create: {
     *     // ... data to create a Reminder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reminder we want to update
     *   }
     * })
     */
    upsert<T extends ReminderUpsertArgs>(args: SelectSubset<T, ReminderUpsertArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderCountArgs} args - Arguments to filter Reminders to count.
     * @example
     * // Count the number of Reminders
     * const count = await prisma.reminder.count({
     *   where: {
     *     // ... the filter for the Reminders we want to count
     *   }
     * })
    **/
    count<T extends ReminderCountArgs>(
      args?: Subset<T, ReminderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReminderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReminderAggregateArgs>(args: Subset<T, ReminderAggregateArgs>): Prisma.PrismaPromise<GetReminderAggregateType<T>>

    /**
     * Group by Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderGroupByArgs} args - Group by arguments.
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
      T extends ReminderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReminderGroupByArgs['orderBy'] }
        : { orderBy?: ReminderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReminderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReminderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reminder model
   */
  readonly fields: ReminderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reminder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReminderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Reminder model
   */ 
  interface ReminderFieldRefs {
    readonly id: FieldRef<"Reminder", 'Int'>
    readonly userId: FieldRef<"Reminder", 'Int'>
    readonly title: FieldRef<"Reminder", 'String'>
    readonly description: FieldRef<"Reminder", 'String'>
    readonly scheduledAt: FieldRef<"Reminder", 'DateTime'>
    readonly isActive: FieldRef<"Reminder", 'Boolean'>
    readonly createdAt: FieldRef<"Reminder", 'DateTime'>
    readonly relatedId: FieldRef<"Reminder", 'Int'>
    readonly relatedType: FieldRef<"Reminder", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reminder findUnique
   */
  export type ReminderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder findUniqueOrThrow
   */
  export type ReminderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder findFirst
   */
  export type ReminderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder findFirstOrThrow
   */
  export type ReminderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder findMany
   */
  export type ReminderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminders to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder create
   */
  export type ReminderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The data needed to create a Reminder.
     */
    data: XOR<ReminderCreateInput, ReminderUncheckedCreateInput>
  }

  /**
   * Reminder createMany
   */
  export type ReminderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reminders.
     */
    data: ReminderCreateManyInput | ReminderCreateManyInput[]
  }

  /**
   * Reminder createManyAndReturn
   */
  export type ReminderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reminders.
     */
    data: ReminderCreateManyInput | ReminderCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reminder update
   */
  export type ReminderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The data needed to update a Reminder.
     */
    data: XOR<ReminderUpdateInput, ReminderUncheckedUpdateInput>
    /**
     * Choose, which Reminder to update.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder updateMany
   */
  export type ReminderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reminders.
     */
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyInput>
    /**
     * Filter which Reminders to update
     */
    where?: ReminderWhereInput
  }

  /**
   * Reminder upsert
   */
  export type ReminderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The filter to search for the Reminder to update in case it exists.
     */
    where: ReminderWhereUniqueInput
    /**
     * In case the Reminder found by the `where` argument doesn't exist, create a new Reminder with this data.
     */
    create: XOR<ReminderCreateInput, ReminderUncheckedCreateInput>
    /**
     * In case the Reminder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReminderUpdateInput, ReminderUncheckedUpdateInput>
  }

  /**
   * Reminder delete
   */
  export type ReminderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter which Reminder to delete.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder deleteMany
   */
  export type ReminderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminders to delete
     */
    where?: ReminderWhereInput
  }

  /**
   * Reminder without action
   */
  export type ReminderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
  }


  /**
   * Model File
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    id: number | null
    size: number | null
    submissionId: number | null
  }

  export type FileSumAggregateOutputType = {
    id: number | null
    size: number | null
    submissionId: number | null
  }

  export type FileMinAggregateOutputType = {
    id: number | null
    filename: string | null
    originalName: string | null
    mimeType: string | null
    size: number | null
    path: string | null
    uploadedAt: Date | null
    submissionId: number | null
  }

  export type FileMaxAggregateOutputType = {
    id: number | null
    filename: string | null
    originalName: string | null
    mimeType: string | null
    size: number | null
    path: string | null
    uploadedAt: Date | null
    submissionId: number | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    filename: number
    originalName: number
    mimeType: number
    size: number
    path: number
    uploadedAt: number
    submissionId: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    id?: true
    size?: true
    submissionId?: true
  }

  export type FileSumAggregateInputType = {
    id?: true
    size?: true
    submissionId?: true
  }

  export type FileMinAggregateInputType = {
    id?: true
    filename?: true
    originalName?: true
    mimeType?: true
    size?: true
    path?: true
    uploadedAt?: true
    submissionId?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    filename?: true
    originalName?: true
    mimeType?: true
    size?: true
    path?: true
    uploadedAt?: true
    submissionId?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    filename?: true
    originalName?: true
    mimeType?: true
    size?: true
    path?: true
    uploadedAt?: true
    submissionId?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
    orderBy?: FileOrderByWithAggregationInput | FileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    id: number
    filename: string
    originalName: string
    mimeType: string
    size: number
    path: string
    uploadedAt: Date
    submissionId: number | null
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    originalName?: boolean
    mimeType?: boolean
    size?: boolean
    path?: boolean
    uploadedAt?: boolean
    submissionId?: boolean
    submission?: boolean | File$submissionArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    originalName?: boolean
    mimeType?: boolean
    size?: boolean
    path?: boolean
    uploadedAt?: boolean
    submissionId?: boolean
    submission?: boolean | File$submissionArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectScalar = {
    id?: boolean
    filename?: boolean
    originalName?: boolean
    mimeType?: boolean
    size?: boolean
    path?: boolean
    uploadedAt?: boolean
    submissionId?: boolean
  }

  export type FileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | File$submissionArgs<ExtArgs>
  }
  export type FileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | File$submissionArgs<ExtArgs>
  }

  export type $FilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "File"
    objects: {
      submission: Prisma.$SubmissionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      filename: string
      originalName: string
      mimeType: string
      size: number
      path: string
      uploadedAt: Date
      submissionId: number | null
    }, ExtArgs["result"]["file"]>
    composites: {}
  }

  type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = $Result.GetResult<Prisma.$FilePayload, S>

  type FileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['File'], meta: { name: 'File' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileFindUniqueArgs>(args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one File that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(args: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileFindFirstArgs>(args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileFindManyArgs>(args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
     */
    create<T extends FileCreateArgs>(args: SelectSubset<T, FileCreateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Files.
     * @param {FileCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileCreateManyArgs>(args?: SelectSubset<T, FileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {FileCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileCreateManyAndReturnArgs>(args?: SelectSubset<T, FileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
     */
    delete<T extends FileDeleteArgs>(args: SelectSubset<T, FileDeleteArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileUpdateArgs>(args: SelectSubset<T, FileUpdateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileDeleteManyArgs>(args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileUpdateManyArgs>(args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
     */
    upsert<T extends FileUpsertArgs>(args: SelectSubset<T, FileUpsertArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
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
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the File model
   */
  readonly fields: FileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends File$submissionArgs<ExtArgs> = {}>(args?: Subset<T, File$submissionArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the File model
   */ 
  interface FileFieldRefs {
    readonly id: FieldRef<"File", 'Int'>
    readonly filename: FieldRef<"File", 'String'>
    readonly originalName: FieldRef<"File", 'String'>
    readonly mimeType: FieldRef<"File", 'String'>
    readonly size: FieldRef<"File", 'Int'>
    readonly path: FieldRef<"File", 'String'>
    readonly uploadedAt: FieldRef<"File", 'DateTime'>
    readonly submissionId: FieldRef<"File", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * File findUnique
   */
  export type FileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findFirst
   */
  export type FileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findMany
   */
  export type FileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File create
   */
  export type FileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }

  /**
   * File createMany
   */
  export type FileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
  }

  /**
   * File createManyAndReturn
   */
  export type FileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * File update
   */
  export type FileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File updateMany
   */
  export type FileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
  }

  /**
   * File upsert
   */
  export type FileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }

  /**
   * File delete
   */
  export type FileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput
  }

  /**
   * File.submission
   */
  export type File$submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
  }

  /**
   * File without action
   */
  export type FileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionAvgAggregateOutputType = {
    id: number | null
    taskId: number | null
    studentId: number | null
    grade: number | null
    gradedBy: number | null
  }

  export type SubmissionSumAggregateOutputType = {
    id: number | null
    taskId: number | null
    studentId: number | null
    grade: number | null
    gradedBy: number | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: number | null
    taskId: number | null
    studentId: number | null
    submittedAt: Date | null
    content: string | null
    grade: number | null
    feedback: string | null
    gradedAt: Date | null
    gradedBy: number | null
    status: string | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: number | null
    taskId: number | null
    studentId: number | null
    submittedAt: Date | null
    content: string | null
    grade: number | null
    feedback: string | null
    gradedAt: Date | null
    gradedBy: number | null
    status: string | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    taskId: number
    studentId: number
    submittedAt: number
    content: number
    grade: number
    feedback: number
    gradedAt: number
    gradedBy: number
    status: number
    _all: number
  }


  export type SubmissionAvgAggregateInputType = {
    id?: true
    taskId?: true
    studentId?: true
    grade?: true
    gradedBy?: true
  }

  export type SubmissionSumAggregateInputType = {
    id?: true
    taskId?: true
    studentId?: true
    grade?: true
    gradedBy?: true
  }

  export type SubmissionMinAggregateInputType = {
    id?: true
    taskId?: true
    studentId?: true
    submittedAt?: true
    content?: true
    grade?: true
    feedback?: true
    gradedAt?: true
    gradedBy?: true
    status?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    taskId?: true
    studentId?: true
    submittedAt?: true
    content?: true
    grade?: true
    feedback?: true
    gradedAt?: true
    gradedBy?: true
    status?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    taskId?: true
    studentId?: true
    submittedAt?: true
    content?: true
    grade?: true
    feedback?: true
    gradedAt?: true
    gradedBy?: true
    status?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _avg?: SubmissionAvgAggregateInputType
    _sum?: SubmissionSumAggregateInputType
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: number
    taskId: number
    studentId: number
    submittedAt: Date
    content: string | null
    grade: number | null
    feedback: string | null
    gradedAt: Date | null
    gradedBy: number | null
    status: string
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    studentId?: boolean
    submittedAt?: boolean
    content?: boolean
    grade?: boolean
    feedback?: boolean
    gradedAt?: boolean
    gradedBy?: boolean
    status?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    gradedByUser?: boolean | Submission$gradedByUserArgs<ExtArgs>
    files?: boolean | Submission$filesArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    studentId?: boolean
    submittedAt?: boolean
    content?: boolean
    grade?: boolean
    feedback?: boolean
    gradedAt?: boolean
    gradedBy?: boolean
    status?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    gradedByUser?: boolean | Submission$gradedByUserArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    taskId?: boolean
    studentId?: boolean
    submittedAt?: boolean
    content?: boolean
    grade?: boolean
    feedback?: boolean
    gradedAt?: boolean
    gradedBy?: boolean
    status?: boolean
  }

  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    gradedByUser?: boolean | Submission$gradedByUserArgs<ExtArgs>
    files?: boolean | Submission$filesArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    gradedByUser?: boolean | Submission$gradedByUserArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      student: Prisma.$UserPayload<ExtArgs>
      gradedByUser: Prisma.$UserPayload<ExtArgs> | null
      files: Prisma.$FilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      taskId: number
      studentId: number
      submittedAt: Date
      content: string | null
      grade: number | null
      feedback: string | null
      gradedAt: Date | null
      gradedBy: number | null
      status: string
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
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
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    gradedByUser<T extends Submission$gradedByUserArgs<ExtArgs> = {}>(args?: Subset<T, Submission$gradedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    files<T extends Submission$filesArgs<ExtArgs> = {}>(args?: Subset<T, Submission$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Submission model
   */ 
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'Int'>
    readonly taskId: FieldRef<"Submission", 'Int'>
    readonly studentId: FieldRef<"Submission", 'Int'>
    readonly submittedAt: FieldRef<"Submission", 'DateTime'>
    readonly content: FieldRef<"Submission", 'String'>
    readonly grade: FieldRef<"Submission", 'Float'>
    readonly feedback: FieldRef<"Submission", 'String'>
    readonly gradedAt: FieldRef<"Submission", 'DateTime'>
    readonly gradedBy: FieldRef<"Submission", 'Int'>
    readonly status: FieldRef<"Submission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
  }

  /**
   * Submission.gradedByUser
   */
  export type Submission$gradedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Submission.files
   */
  export type Submission$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _avg: ActivityLogAvgAggregateOutputType | null
    _sum: ActivityLogSumAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    entityId: number | null
  }

  export type ActivityLogSumAggregateOutputType = {
    id: number | null
    userId: number | null
    entityId: number | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: number | null
    userId: number | null
    action: string | null
    entityType: string | null
    entityId: number | null
    details: string | null
    oldValues: string | null
    newValues: string | null
    timestamp: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    action: string | null
    entityType: string | null
    entityId: number | null
    details: string | null
    oldValues: string | null
    newValues: string | null
    timestamp: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    entityType: number
    entityId: number
    details: number
    oldValues: number
    newValues: number
    timestamp: number
    _all: number
  }


  export type ActivityLogAvgAggregateInputType = {
    id?: true
    userId?: true
    entityId?: true
  }

  export type ActivityLogSumAggregateInputType = {
    id?: true
    userId?: true
    entityId?: true
  }

  export type ActivityLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entityType?: true
    entityId?: true
    details?: true
    oldValues?: true
    newValues?: true
    timestamp?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entityType?: true
    entityId?: true
    details?: true
    oldValues?: true
    newValues?: true
    timestamp?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entityType?: true
    entityId?: true
    details?: true
    oldValues?: true
    newValues?: true
    timestamp?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _avg?: ActivityLogAvgAggregateInputType
    _sum?: ActivityLogSumAggregateInputType
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: number
    userId: number
    action: string
    entityType: string
    entityId: number
    details: string | null
    oldValues: string | null
    newValues: string | null
    timestamp: Date
    _count: ActivityLogCountAggregateOutputType | null
    _avg: ActivityLogAvgAggregateOutputType | null
    _sum: ActivityLogSumAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    details?: boolean
    oldValues?: boolean
    newValues?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    details?: boolean
    oldValues?: boolean
    newValues?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    details?: boolean
    oldValues?: boolean
    newValues?: boolean
    timestamp?: boolean
  }

  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      action: string
      entityType: string
      entityId: number
      details: string | null
      oldValues: string | null
      newValues: string | null
      timestamp: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
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
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ActivityLog model
   */ 
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'Int'>
    readonly userId: FieldRef<"ActivityLog", 'Int'>
    readonly action: FieldRef<"ActivityLog", 'String'>
    readonly entityType: FieldRef<"ActivityLog", 'String'>
    readonly entityId: FieldRef<"ActivityLog", 'Int'>
    readonly details: FieldRef<"ActivityLog", 'String'>
    readonly oldValues: FieldRef<"ActivityLog", 'String'>
    readonly newValues: FieldRef<"ActivityLog", 'String'>
    readonly timestamp: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
  }


  /**
   * Model ChatbotConversation
   */

  export type AggregateChatbotConversation = {
    _count: ChatbotConversationCountAggregateOutputType | null
    _avg: ChatbotConversationAvgAggregateOutputType | null
    _sum: ChatbotConversationSumAggregateOutputType | null
    _min: ChatbotConversationMinAggregateOutputType | null
    _max: ChatbotConversationMaxAggregateOutputType | null
  }

  export type ChatbotConversationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ChatbotConversationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ChatbotConversationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    messages: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatbotConversationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    messages: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatbotConversationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    messages: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatbotConversationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ChatbotConversationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ChatbotConversationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    messages?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatbotConversationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    messages?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatbotConversationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    messages?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatbotConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatbotConversation to aggregate.
     */
    where?: ChatbotConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatbotConversations to fetch.
     */
    orderBy?: ChatbotConversationOrderByWithRelationInput | ChatbotConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatbotConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatbotConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatbotConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatbotConversations
    **/
    _count?: true | ChatbotConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatbotConversationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatbotConversationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatbotConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatbotConversationMaxAggregateInputType
  }

  export type GetChatbotConversationAggregateType<T extends ChatbotConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateChatbotConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatbotConversation[P]>
      : GetScalarType<T[P], AggregateChatbotConversation[P]>
  }




  export type ChatbotConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatbotConversationWhereInput
    orderBy?: ChatbotConversationOrderByWithAggregationInput | ChatbotConversationOrderByWithAggregationInput[]
    by: ChatbotConversationScalarFieldEnum[] | ChatbotConversationScalarFieldEnum
    having?: ChatbotConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatbotConversationCountAggregateInputType | true
    _avg?: ChatbotConversationAvgAggregateInputType
    _sum?: ChatbotConversationSumAggregateInputType
    _min?: ChatbotConversationMinAggregateInputType
    _max?: ChatbotConversationMaxAggregateInputType
  }

  export type ChatbotConversationGroupByOutputType = {
    id: number
    userId: number
    title: string | null
    messages: string
    createdAt: Date
    updatedAt: Date
    _count: ChatbotConversationCountAggregateOutputType | null
    _avg: ChatbotConversationAvgAggregateOutputType | null
    _sum: ChatbotConversationSumAggregateOutputType | null
    _min: ChatbotConversationMinAggregateOutputType | null
    _max: ChatbotConversationMaxAggregateOutputType | null
  }

  type GetChatbotConversationGroupByPayload<T extends ChatbotConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatbotConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatbotConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatbotConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ChatbotConversationGroupByOutputType[P]>
        }
      >
    >


  export type ChatbotConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    messages?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatbotConversation"]>

  export type ChatbotConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    messages?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatbotConversation"]>

  export type ChatbotConversationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    messages?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatbotConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatbotConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatbotConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatbotConversation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      title: string | null
      messages: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatbotConversation"]>
    composites: {}
  }

  type ChatbotConversationGetPayload<S extends boolean | null | undefined | ChatbotConversationDefaultArgs> = $Result.GetResult<Prisma.$ChatbotConversationPayload, S>

  type ChatbotConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatbotConversationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChatbotConversationCountAggregateInputType | true
    }

  export interface ChatbotConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatbotConversation'], meta: { name: 'ChatbotConversation' } }
    /**
     * Find zero or one ChatbotConversation that matches the filter.
     * @param {ChatbotConversationFindUniqueArgs} args - Arguments to find a ChatbotConversation
     * @example
     * // Get one ChatbotConversation
     * const chatbotConversation = await prisma.chatbotConversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatbotConversationFindUniqueArgs>(args: SelectSubset<T, ChatbotConversationFindUniqueArgs<ExtArgs>>): Prisma__ChatbotConversationClient<$Result.GetResult<Prisma.$ChatbotConversationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ChatbotConversation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChatbotConversationFindUniqueOrThrowArgs} args - Arguments to find a ChatbotConversation
     * @example
     * // Get one ChatbotConversation
     * const chatbotConversation = await prisma.chatbotConversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatbotConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatbotConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatbotConversationClient<$Result.GetResult<Prisma.$ChatbotConversationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ChatbotConversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotConversationFindFirstArgs} args - Arguments to find a ChatbotConversation
     * @example
     * // Get one ChatbotConversation
     * const chatbotConversation = await prisma.chatbotConversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatbotConversationFindFirstArgs>(args?: SelectSubset<T, ChatbotConversationFindFirstArgs<ExtArgs>>): Prisma__ChatbotConversationClient<$Result.GetResult<Prisma.$ChatbotConversationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ChatbotConversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotConversationFindFirstOrThrowArgs} args - Arguments to find a ChatbotConversation
     * @example
     * // Get one ChatbotConversation
     * const chatbotConversation = await prisma.chatbotConversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatbotConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatbotConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatbotConversationClient<$Result.GetResult<Prisma.$ChatbotConversationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ChatbotConversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatbotConversations
     * const chatbotConversations = await prisma.chatbotConversation.findMany()
     * 
     * // Get first 10 ChatbotConversations
     * const chatbotConversations = await prisma.chatbotConversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatbotConversationWithIdOnly = await prisma.chatbotConversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatbotConversationFindManyArgs>(args?: SelectSubset<T, ChatbotConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatbotConversationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ChatbotConversation.
     * @param {ChatbotConversationCreateArgs} args - Arguments to create a ChatbotConversation.
     * @example
     * // Create one ChatbotConversation
     * const ChatbotConversation = await prisma.chatbotConversation.create({
     *   data: {
     *     // ... data to create a ChatbotConversation
     *   }
     * })
     * 
     */
    create<T extends ChatbotConversationCreateArgs>(args: SelectSubset<T, ChatbotConversationCreateArgs<ExtArgs>>): Prisma__ChatbotConversationClient<$Result.GetResult<Prisma.$ChatbotConversationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ChatbotConversations.
     * @param {ChatbotConversationCreateManyArgs} args - Arguments to create many ChatbotConversations.
     * @example
     * // Create many ChatbotConversations
     * const chatbotConversation = await prisma.chatbotConversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatbotConversationCreateManyArgs>(args?: SelectSubset<T, ChatbotConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatbotConversations and returns the data saved in the database.
     * @param {ChatbotConversationCreateManyAndReturnArgs} args - Arguments to create many ChatbotConversations.
     * @example
     * // Create many ChatbotConversations
     * const chatbotConversation = await prisma.chatbotConversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatbotConversations and only return the `id`
     * const chatbotConversationWithIdOnly = await prisma.chatbotConversation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatbotConversationCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatbotConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatbotConversationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ChatbotConversation.
     * @param {ChatbotConversationDeleteArgs} args - Arguments to delete one ChatbotConversation.
     * @example
     * // Delete one ChatbotConversation
     * const ChatbotConversation = await prisma.chatbotConversation.delete({
     *   where: {
     *     // ... filter to delete one ChatbotConversation
     *   }
     * })
     * 
     */
    delete<T extends ChatbotConversationDeleteArgs>(args: SelectSubset<T, ChatbotConversationDeleteArgs<ExtArgs>>): Prisma__ChatbotConversationClient<$Result.GetResult<Prisma.$ChatbotConversationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ChatbotConversation.
     * @param {ChatbotConversationUpdateArgs} args - Arguments to update one ChatbotConversation.
     * @example
     * // Update one ChatbotConversation
     * const chatbotConversation = await prisma.chatbotConversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatbotConversationUpdateArgs>(args: SelectSubset<T, ChatbotConversationUpdateArgs<ExtArgs>>): Prisma__ChatbotConversationClient<$Result.GetResult<Prisma.$ChatbotConversationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ChatbotConversations.
     * @param {ChatbotConversationDeleteManyArgs} args - Arguments to filter ChatbotConversations to delete.
     * @example
     * // Delete a few ChatbotConversations
     * const { count } = await prisma.chatbotConversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatbotConversationDeleteManyArgs>(args?: SelectSubset<T, ChatbotConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatbotConversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatbotConversations
     * const chatbotConversation = await prisma.chatbotConversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatbotConversationUpdateManyArgs>(args: SelectSubset<T, ChatbotConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatbotConversation.
     * @param {ChatbotConversationUpsertArgs} args - Arguments to update or create a ChatbotConversation.
     * @example
     * // Update or create a ChatbotConversation
     * const chatbotConversation = await prisma.chatbotConversation.upsert({
     *   create: {
     *     // ... data to create a ChatbotConversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatbotConversation we want to update
     *   }
     * })
     */
    upsert<T extends ChatbotConversationUpsertArgs>(args: SelectSubset<T, ChatbotConversationUpsertArgs<ExtArgs>>): Prisma__ChatbotConversationClient<$Result.GetResult<Prisma.$ChatbotConversationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ChatbotConversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotConversationCountArgs} args - Arguments to filter ChatbotConversations to count.
     * @example
     * // Count the number of ChatbotConversations
     * const count = await prisma.chatbotConversation.count({
     *   where: {
     *     // ... the filter for the ChatbotConversations we want to count
     *   }
     * })
    **/
    count<T extends ChatbotConversationCountArgs>(
      args?: Subset<T, ChatbotConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatbotConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatbotConversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatbotConversationAggregateArgs>(args: Subset<T, ChatbotConversationAggregateArgs>): Prisma.PrismaPromise<GetChatbotConversationAggregateType<T>>

    /**
     * Group by ChatbotConversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatbotConversationGroupByArgs} args - Group by arguments.
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
      T extends ChatbotConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatbotConversationGroupByArgs['orderBy'] }
        : { orderBy?: ChatbotConversationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatbotConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatbotConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatbotConversation model
   */
  readonly fields: ChatbotConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatbotConversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatbotConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ChatbotConversation model
   */ 
  interface ChatbotConversationFieldRefs {
    readonly id: FieldRef<"ChatbotConversation", 'Int'>
    readonly userId: FieldRef<"ChatbotConversation", 'Int'>
    readonly title: FieldRef<"ChatbotConversation", 'String'>
    readonly messages: FieldRef<"ChatbotConversation", 'String'>
    readonly createdAt: FieldRef<"ChatbotConversation", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatbotConversation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatbotConversation findUnique
   */
  export type ChatbotConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatbotConversation
     */
    select?: ChatbotConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotConversationInclude<ExtArgs> | null
    /**
     * Filter, which ChatbotConversation to fetch.
     */
    where: ChatbotConversationWhereUniqueInput
  }

  /**
   * ChatbotConversation findUniqueOrThrow
   */
  export type ChatbotConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatbotConversation
     */
    select?: ChatbotConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotConversationInclude<ExtArgs> | null
    /**
     * Filter, which ChatbotConversation to fetch.
     */
    where: ChatbotConversationWhereUniqueInput
  }

  /**
   * ChatbotConversation findFirst
   */
  export type ChatbotConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatbotConversation
     */
    select?: ChatbotConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotConversationInclude<ExtArgs> | null
    /**
     * Filter, which ChatbotConversation to fetch.
     */
    where?: ChatbotConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatbotConversations to fetch.
     */
    orderBy?: ChatbotConversationOrderByWithRelationInput | ChatbotConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatbotConversations.
     */
    cursor?: ChatbotConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatbotConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatbotConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatbotConversations.
     */
    distinct?: ChatbotConversationScalarFieldEnum | ChatbotConversationScalarFieldEnum[]
  }

  /**
   * ChatbotConversation findFirstOrThrow
   */
  export type ChatbotConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatbotConversation
     */
    select?: ChatbotConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotConversationInclude<ExtArgs> | null
    /**
     * Filter, which ChatbotConversation to fetch.
     */
    where?: ChatbotConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatbotConversations to fetch.
     */
    orderBy?: ChatbotConversationOrderByWithRelationInput | ChatbotConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatbotConversations.
     */
    cursor?: ChatbotConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatbotConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatbotConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatbotConversations.
     */
    distinct?: ChatbotConversationScalarFieldEnum | ChatbotConversationScalarFieldEnum[]
  }

  /**
   * ChatbotConversation findMany
   */
  export type ChatbotConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatbotConversation
     */
    select?: ChatbotConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotConversationInclude<ExtArgs> | null
    /**
     * Filter, which ChatbotConversations to fetch.
     */
    where?: ChatbotConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatbotConversations to fetch.
     */
    orderBy?: ChatbotConversationOrderByWithRelationInput | ChatbotConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatbotConversations.
     */
    cursor?: ChatbotConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatbotConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatbotConversations.
     */
    skip?: number
    distinct?: ChatbotConversationScalarFieldEnum | ChatbotConversationScalarFieldEnum[]
  }

  /**
   * ChatbotConversation create
   */
  export type ChatbotConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatbotConversation
     */
    select?: ChatbotConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatbotConversation.
     */
    data: XOR<ChatbotConversationCreateInput, ChatbotConversationUncheckedCreateInput>
  }

  /**
   * ChatbotConversation createMany
   */
  export type ChatbotConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatbotConversations.
     */
    data: ChatbotConversationCreateManyInput | ChatbotConversationCreateManyInput[]
  }

  /**
   * ChatbotConversation createManyAndReturn
   */
  export type ChatbotConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatbotConversation
     */
    select?: ChatbotConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ChatbotConversations.
     */
    data: ChatbotConversationCreateManyInput | ChatbotConversationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotConversationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatbotConversation update
   */
  export type ChatbotConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatbotConversation
     */
    select?: ChatbotConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatbotConversation.
     */
    data: XOR<ChatbotConversationUpdateInput, ChatbotConversationUncheckedUpdateInput>
    /**
     * Choose, which ChatbotConversation to update.
     */
    where: ChatbotConversationWhereUniqueInput
  }

  /**
   * ChatbotConversation updateMany
   */
  export type ChatbotConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatbotConversations.
     */
    data: XOR<ChatbotConversationUpdateManyMutationInput, ChatbotConversationUncheckedUpdateManyInput>
    /**
     * Filter which ChatbotConversations to update
     */
    where?: ChatbotConversationWhereInput
  }

  /**
   * ChatbotConversation upsert
   */
  export type ChatbotConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatbotConversation
     */
    select?: ChatbotConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatbotConversation to update in case it exists.
     */
    where: ChatbotConversationWhereUniqueInput
    /**
     * In case the ChatbotConversation found by the `where` argument doesn't exist, create a new ChatbotConversation with this data.
     */
    create: XOR<ChatbotConversationCreateInput, ChatbotConversationUncheckedCreateInput>
    /**
     * In case the ChatbotConversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatbotConversationUpdateInput, ChatbotConversationUncheckedUpdateInput>
  }

  /**
   * ChatbotConversation delete
   */
  export type ChatbotConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatbotConversation
     */
    select?: ChatbotConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotConversationInclude<ExtArgs> | null
    /**
     * Filter which ChatbotConversation to delete.
     */
    where: ChatbotConversationWhereUniqueInput
  }

  /**
   * ChatbotConversation deleteMany
   */
  export type ChatbotConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatbotConversations to delete
     */
    where?: ChatbotConversationWhereInput
  }

  /**
   * ChatbotConversation without action
   */
  export type ChatbotConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatbotConversation
     */
    select?: ChatbotConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatbotConversationInclude<ExtArgs> | null
  }


  /**
   * Model Exam
   */

  export type AggregateExam = {
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  export type ExamAvgAggregateOutputType = {
    id: number | null
    numQuestions: number | null
    timeLimit: number | null
    createdBy: number | null
  }

  export type ExamSumAggregateOutputType = {
    id: number | null
    numQuestions: number | null
    timeLimit: number | null
    createdBy: number | null
  }

  export type ExamMinAggregateOutputType = {
    id: number | null
    title: string | null
    topics: string | null
    numQuestions: number | null
    timeLimit: number | null
    generatedQuestions: string | null
    createdBy: number | null
    assignedTo: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ExamMaxAggregateOutputType = {
    id: number | null
    title: string | null
    topics: string | null
    numQuestions: number | null
    timeLimit: number | null
    generatedQuestions: string | null
    createdBy: number | null
    assignedTo: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ExamCountAggregateOutputType = {
    id: number
    title: number
    topics: number
    numQuestions: number
    timeLimit: number
    generatedQuestions: number
    createdBy: number
    assignedTo: number
    status: number
    createdAt: number
    _all: number
  }


  export type ExamAvgAggregateInputType = {
    id?: true
    numQuestions?: true
    timeLimit?: true
    createdBy?: true
  }

  export type ExamSumAggregateInputType = {
    id?: true
    numQuestions?: true
    timeLimit?: true
    createdBy?: true
  }

  export type ExamMinAggregateInputType = {
    id?: true
    title?: true
    topics?: true
    numQuestions?: true
    timeLimit?: true
    generatedQuestions?: true
    createdBy?: true
    assignedTo?: true
    status?: true
    createdAt?: true
  }

  export type ExamMaxAggregateInputType = {
    id?: true
    title?: true
    topics?: true
    numQuestions?: true
    timeLimit?: true
    generatedQuestions?: true
    createdBy?: true
    assignedTo?: true
    status?: true
    createdAt?: true
  }

  export type ExamCountAggregateInputType = {
    id?: true
    title?: true
    topics?: true
    numQuestions?: true
    timeLimit?: true
    generatedQuestions?: true
    createdBy?: true
    assignedTo?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ExamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exam to aggregate.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exams
    **/
    _count?: true | ExamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamMaxAggregateInputType
  }

  export type GetExamAggregateType<T extends ExamAggregateArgs> = {
        [P in keyof T & keyof AggregateExam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExam[P]>
      : GetScalarType<T[P], AggregateExam[P]>
  }




  export type ExamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithAggregationInput | ExamOrderByWithAggregationInput[]
    by: ExamScalarFieldEnum[] | ExamScalarFieldEnum
    having?: ExamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamCountAggregateInputType | true
    _avg?: ExamAvgAggregateInputType
    _sum?: ExamSumAggregateInputType
    _min?: ExamMinAggregateInputType
    _max?: ExamMaxAggregateInputType
  }

  export type ExamGroupByOutputType = {
    id: number
    title: string
    topics: string
    numQuestions: number
    timeLimit: number
    generatedQuestions: string
    createdBy: number
    assignedTo: string
    status: string
    createdAt: Date
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  type GetExamGroupByPayload<T extends ExamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamGroupByOutputType[P]>
            : GetScalarType<T[P], ExamGroupByOutputType[P]>
        }
      >
    >


  export type ExamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    topics?: boolean
    numQuestions?: boolean
    timeLimit?: boolean
    generatedQuestions?: boolean
    createdBy?: boolean
    assignedTo?: boolean
    status?: boolean
    createdAt?: boolean
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
    submissions?: boolean | Exam$submissionsArgs<ExtArgs>
    questions?: boolean | Exam$questionsArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    topics?: boolean
    numQuestions?: boolean
    timeLimit?: boolean
    generatedQuestions?: boolean
    createdBy?: boolean
    assignedTo?: boolean
    status?: boolean
    createdAt?: boolean
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectScalar = {
    id?: boolean
    title?: boolean
    topics?: boolean
    numQuestions?: boolean
    timeLimit?: boolean
    generatedQuestions?: boolean
    createdBy?: boolean
    assignedTo?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ExamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
    submissions?: boolean | Exam$submissionsArgs<ExtArgs>
    questions?: boolean | Exam$questionsArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdByUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exam"
    objects: {
      createdByUser: Prisma.$UserPayload<ExtArgs>
      submissions: Prisma.$ExamSubmissionPayload<ExtArgs>[]
      questions: Prisma.$ExamQuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      topics: string
      numQuestions: number
      timeLimit: number
      generatedQuestions: string
      createdBy: number
      assignedTo: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["exam"]>
    composites: {}
  }

  type ExamGetPayload<S extends boolean | null | undefined | ExamDefaultArgs> = $Result.GetResult<Prisma.$ExamPayload, S>

  type ExamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExamFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExamCountAggregateInputType | true
    }

  export interface ExamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exam'], meta: { name: 'Exam' } }
    /**
     * Find zero or one Exam that matches the filter.
     * @param {ExamFindUniqueArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamFindUniqueArgs>(args: SelectSubset<T, ExamFindUniqueArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Exam that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExamFindUniqueOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Exam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamFindFirstArgs>(args?: SelectSubset<T, ExamFindFirstArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Exam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Exams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exams
     * const exams = await prisma.exam.findMany()
     * 
     * // Get first 10 Exams
     * const exams = await prisma.exam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examWithIdOnly = await prisma.exam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamFindManyArgs>(args?: SelectSubset<T, ExamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Exam.
     * @param {ExamCreateArgs} args - Arguments to create a Exam.
     * @example
     * // Create one Exam
     * const Exam = await prisma.exam.create({
     *   data: {
     *     // ... data to create a Exam
     *   }
     * })
     * 
     */
    create<T extends ExamCreateArgs>(args: SelectSubset<T, ExamCreateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Exams.
     * @param {ExamCreateManyArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamCreateManyArgs>(args?: SelectSubset<T, ExamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exams and returns the data saved in the database.
     * @param {ExamCreateManyAndReturnArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exams and only return the `id`
     * const examWithIdOnly = await prisma.exam.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Exam.
     * @param {ExamDeleteArgs} args - Arguments to delete one Exam.
     * @example
     * // Delete one Exam
     * const Exam = await prisma.exam.delete({
     *   where: {
     *     // ... filter to delete one Exam
     *   }
     * })
     * 
     */
    delete<T extends ExamDeleteArgs>(args: SelectSubset<T, ExamDeleteArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Exam.
     * @param {ExamUpdateArgs} args - Arguments to update one Exam.
     * @example
     * // Update one Exam
     * const exam = await prisma.exam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamUpdateArgs>(args: SelectSubset<T, ExamUpdateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Exams.
     * @param {ExamDeleteManyArgs} args - Arguments to filter Exams to delete.
     * @example
     * // Delete a few Exams
     * const { count } = await prisma.exam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamDeleteManyArgs>(args?: SelectSubset<T, ExamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamUpdateManyArgs>(args: SelectSubset<T, ExamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exam.
     * @param {ExamUpsertArgs} args - Arguments to update or create a Exam.
     * @example
     * // Update or create a Exam
     * const exam = await prisma.exam.upsert({
     *   create: {
     *     // ... data to create a Exam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exam we want to update
     *   }
     * })
     */
    upsert<T extends ExamUpsertArgs>(args: SelectSubset<T, ExamUpsertArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamCountArgs} args - Arguments to filter Exams to count.
     * @example
     * // Count the number of Exams
     * const count = await prisma.exam.count({
     *   where: {
     *     // ... the filter for the Exams we want to count
     *   }
     * })
    **/
    count<T extends ExamCountArgs>(
      args?: Subset<T, ExamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamAggregateArgs>(args: Subset<T, ExamAggregateArgs>): Prisma.PrismaPromise<GetExamAggregateType<T>>

    /**
     * Group by Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamGroupByArgs} args - Group by arguments.
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
      T extends ExamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamGroupByArgs['orderBy'] }
        : { orderBy?: ExamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exam model
   */
  readonly fields: ExamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdByUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    submissions<T extends Exam$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Exam$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "findMany"> | Null>
    questions<T extends Exam$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Exam$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Exam model
   */ 
  interface ExamFieldRefs {
    readonly id: FieldRef<"Exam", 'Int'>
    readonly title: FieldRef<"Exam", 'String'>
    readonly topics: FieldRef<"Exam", 'String'>
    readonly numQuestions: FieldRef<"Exam", 'Int'>
    readonly timeLimit: FieldRef<"Exam", 'Int'>
    readonly generatedQuestions: FieldRef<"Exam", 'String'>
    readonly createdBy: FieldRef<"Exam", 'Int'>
    readonly assignedTo: FieldRef<"Exam", 'String'>
    readonly status: FieldRef<"Exam", 'String'>
    readonly createdAt: FieldRef<"Exam", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Exam findUnique
   */
  export type ExamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findUniqueOrThrow
   */
  export type ExamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findFirst
   */
  export type ExamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findFirstOrThrow
   */
  export type ExamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findMany
   */
  export type ExamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exams to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam create
   */
  export type ExamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to create a Exam.
     */
    data: XOR<ExamCreateInput, ExamUncheckedCreateInput>
  }

  /**
   * Exam createMany
   */
  export type ExamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
  }

  /**
   * Exam createManyAndReturn
   */
  export type ExamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exam update
   */
  export type ExamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to update a Exam.
     */
    data: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
    /**
     * Choose, which Exam to update.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam updateMany
   */
  export type ExamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exams.
     */
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     */
    where?: ExamWhereInput
  }

  /**
   * Exam upsert
   */
  export type ExamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The filter to search for the Exam to update in case it exists.
     */
    where: ExamWhereUniqueInput
    /**
     * In case the Exam found by the `where` argument doesn't exist, create a new Exam with this data.
     */
    create: XOR<ExamCreateInput, ExamUncheckedCreateInput>
    /**
     * In case the Exam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
  }

  /**
   * Exam delete
   */
  export type ExamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter which Exam to delete.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam deleteMany
   */
  export type ExamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exams to delete
     */
    where?: ExamWhereInput
  }

  /**
   * Exam.submissions
   */
  export type Exam$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    where?: ExamSubmissionWhereInput
    orderBy?: ExamSubmissionOrderByWithRelationInput | ExamSubmissionOrderByWithRelationInput[]
    cursor?: ExamSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamSubmissionScalarFieldEnum | ExamSubmissionScalarFieldEnum[]
  }

  /**
   * Exam.questions
   */
  export type Exam$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    where?: ExamQuestionWhereInput
    orderBy?: ExamQuestionOrderByWithRelationInput | ExamQuestionOrderByWithRelationInput[]
    cursor?: ExamQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamQuestionScalarFieldEnum | ExamQuestionScalarFieldEnum[]
  }

  /**
   * Exam without action
   */
  export type ExamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
  }


  /**
   * Model ExamQuestion
   */

  export type AggregateExamQuestion = {
    _count: ExamQuestionCountAggregateOutputType | null
    _avg: ExamQuestionAvgAggregateOutputType | null
    _sum: ExamQuestionSumAggregateOutputType | null
    _min: ExamQuestionMinAggregateOutputType | null
    _max: ExamQuestionMaxAggregateOutputType | null
  }

  export type ExamQuestionAvgAggregateOutputType = {
    id: number | null
    examId: number | null
  }

  export type ExamQuestionSumAggregateOutputType = {
    id: number | null
    examId: number | null
  }

  export type ExamQuestionMinAggregateOutputType = {
    id: number | null
    examId: number | null
    question: string | null
    options: string | null
    correctAnswer: string | null
    type: string | null
  }

  export type ExamQuestionMaxAggregateOutputType = {
    id: number | null
    examId: number | null
    question: string | null
    options: string | null
    correctAnswer: string | null
    type: string | null
  }

  export type ExamQuestionCountAggregateOutputType = {
    id: number
    examId: number
    question: number
    options: number
    correctAnswer: number
    type: number
    _all: number
  }


  export type ExamQuestionAvgAggregateInputType = {
    id?: true
    examId?: true
  }

  export type ExamQuestionSumAggregateInputType = {
    id?: true
    examId?: true
  }

  export type ExamQuestionMinAggregateInputType = {
    id?: true
    examId?: true
    question?: true
    options?: true
    correctAnswer?: true
    type?: true
  }

  export type ExamQuestionMaxAggregateInputType = {
    id?: true
    examId?: true
    question?: true
    options?: true
    correctAnswer?: true
    type?: true
  }

  export type ExamQuestionCountAggregateInputType = {
    id?: true
    examId?: true
    question?: true
    options?: true
    correctAnswer?: true
    type?: true
    _all?: true
  }

  export type ExamQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamQuestion to aggregate.
     */
    where?: ExamQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamQuestions to fetch.
     */
    orderBy?: ExamQuestionOrderByWithRelationInput | ExamQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExamQuestions
    **/
    _count?: true | ExamQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamQuestionMaxAggregateInputType
  }

  export type GetExamQuestionAggregateType<T extends ExamQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateExamQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamQuestion[P]>
      : GetScalarType<T[P], AggregateExamQuestion[P]>
  }




  export type ExamQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamQuestionWhereInput
    orderBy?: ExamQuestionOrderByWithAggregationInput | ExamQuestionOrderByWithAggregationInput[]
    by: ExamQuestionScalarFieldEnum[] | ExamQuestionScalarFieldEnum
    having?: ExamQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamQuestionCountAggregateInputType | true
    _avg?: ExamQuestionAvgAggregateInputType
    _sum?: ExamQuestionSumAggregateInputType
    _min?: ExamQuestionMinAggregateInputType
    _max?: ExamQuestionMaxAggregateInputType
  }

  export type ExamQuestionGroupByOutputType = {
    id: number
    examId: number
    question: string
    options: string | null
    correctAnswer: string
    type: string
    _count: ExamQuestionCountAggregateOutputType | null
    _avg: ExamQuestionAvgAggregateOutputType | null
    _sum: ExamQuestionSumAggregateOutputType | null
    _min: ExamQuestionMinAggregateOutputType | null
    _max: ExamQuestionMaxAggregateOutputType | null
  }

  type GetExamQuestionGroupByPayload<T extends ExamQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], ExamQuestionGroupByOutputType[P]>
        }
      >
    >


  export type ExamQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examId?: boolean
    question?: boolean
    options?: boolean
    correctAnswer?: boolean
    type?: boolean
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examQuestion"]>

  export type ExamQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examId?: boolean
    question?: boolean
    options?: boolean
    correctAnswer?: boolean
    type?: boolean
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examQuestion"]>

  export type ExamQuestionSelectScalar = {
    id?: boolean
    examId?: boolean
    question?: boolean
    options?: boolean
    correctAnswer?: boolean
    type?: boolean
  }

  export type ExamQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }
  export type ExamQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }

  export type $ExamQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExamQuestion"
    objects: {
      exam: Prisma.$ExamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      examId: number
      question: string
      options: string | null
      correctAnswer: string
      type: string
    }, ExtArgs["result"]["examQuestion"]>
    composites: {}
  }

  type ExamQuestionGetPayload<S extends boolean | null | undefined | ExamQuestionDefaultArgs> = $Result.GetResult<Prisma.$ExamQuestionPayload, S>

  type ExamQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExamQuestionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExamQuestionCountAggregateInputType | true
    }

  export interface ExamQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExamQuestion'], meta: { name: 'ExamQuestion' } }
    /**
     * Find zero or one ExamQuestion that matches the filter.
     * @param {ExamQuestionFindUniqueArgs} args - Arguments to find a ExamQuestion
     * @example
     * // Get one ExamQuestion
     * const examQuestion = await prisma.examQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamQuestionFindUniqueArgs>(args: SelectSubset<T, ExamQuestionFindUniqueArgs<ExtArgs>>): Prisma__ExamQuestionClient<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ExamQuestion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExamQuestionFindUniqueOrThrowArgs} args - Arguments to find a ExamQuestion
     * @example
     * // Get one ExamQuestion
     * const examQuestion = await prisma.examQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamQuestionClient<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ExamQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamQuestionFindFirstArgs} args - Arguments to find a ExamQuestion
     * @example
     * // Get one ExamQuestion
     * const examQuestion = await prisma.examQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamQuestionFindFirstArgs>(args?: SelectSubset<T, ExamQuestionFindFirstArgs<ExtArgs>>): Prisma__ExamQuestionClient<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ExamQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamQuestionFindFirstOrThrowArgs} args - Arguments to find a ExamQuestion
     * @example
     * // Get one ExamQuestion
     * const examQuestion = await prisma.examQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamQuestionClient<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ExamQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExamQuestions
     * const examQuestions = await prisma.examQuestion.findMany()
     * 
     * // Get first 10 ExamQuestions
     * const examQuestions = await prisma.examQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examQuestionWithIdOnly = await prisma.examQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamQuestionFindManyArgs>(args?: SelectSubset<T, ExamQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ExamQuestion.
     * @param {ExamQuestionCreateArgs} args - Arguments to create a ExamQuestion.
     * @example
     * // Create one ExamQuestion
     * const ExamQuestion = await prisma.examQuestion.create({
     *   data: {
     *     // ... data to create a ExamQuestion
     *   }
     * })
     * 
     */
    create<T extends ExamQuestionCreateArgs>(args: SelectSubset<T, ExamQuestionCreateArgs<ExtArgs>>): Prisma__ExamQuestionClient<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ExamQuestions.
     * @param {ExamQuestionCreateManyArgs} args - Arguments to create many ExamQuestions.
     * @example
     * // Create many ExamQuestions
     * const examQuestion = await prisma.examQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamQuestionCreateManyArgs>(args?: SelectSubset<T, ExamQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExamQuestions and returns the data saved in the database.
     * @param {ExamQuestionCreateManyAndReturnArgs} args - Arguments to create many ExamQuestions.
     * @example
     * // Create many ExamQuestions
     * const examQuestion = await prisma.examQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExamQuestions and only return the `id`
     * const examQuestionWithIdOnly = await prisma.examQuestion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ExamQuestion.
     * @param {ExamQuestionDeleteArgs} args - Arguments to delete one ExamQuestion.
     * @example
     * // Delete one ExamQuestion
     * const ExamQuestion = await prisma.examQuestion.delete({
     *   where: {
     *     // ... filter to delete one ExamQuestion
     *   }
     * })
     * 
     */
    delete<T extends ExamQuestionDeleteArgs>(args: SelectSubset<T, ExamQuestionDeleteArgs<ExtArgs>>): Prisma__ExamQuestionClient<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ExamQuestion.
     * @param {ExamQuestionUpdateArgs} args - Arguments to update one ExamQuestion.
     * @example
     * // Update one ExamQuestion
     * const examQuestion = await prisma.examQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamQuestionUpdateArgs>(args: SelectSubset<T, ExamQuestionUpdateArgs<ExtArgs>>): Prisma__ExamQuestionClient<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ExamQuestions.
     * @param {ExamQuestionDeleteManyArgs} args - Arguments to filter ExamQuestions to delete.
     * @example
     * // Delete a few ExamQuestions
     * const { count } = await prisma.examQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamQuestionDeleteManyArgs>(args?: SelectSubset<T, ExamQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExamQuestions
     * const examQuestion = await prisma.examQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamQuestionUpdateManyArgs>(args: SelectSubset<T, ExamQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExamQuestion.
     * @param {ExamQuestionUpsertArgs} args - Arguments to update or create a ExamQuestion.
     * @example
     * // Update or create a ExamQuestion
     * const examQuestion = await prisma.examQuestion.upsert({
     *   create: {
     *     // ... data to create a ExamQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExamQuestion we want to update
     *   }
     * })
     */
    upsert<T extends ExamQuestionUpsertArgs>(args: SelectSubset<T, ExamQuestionUpsertArgs<ExtArgs>>): Prisma__ExamQuestionClient<$Result.GetResult<Prisma.$ExamQuestionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ExamQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamQuestionCountArgs} args - Arguments to filter ExamQuestions to count.
     * @example
     * // Count the number of ExamQuestions
     * const count = await prisma.examQuestion.count({
     *   where: {
     *     // ... the filter for the ExamQuestions we want to count
     *   }
     * })
    **/
    count<T extends ExamQuestionCountArgs>(
      args?: Subset<T, ExamQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExamQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamQuestionAggregateArgs>(args: Subset<T, ExamQuestionAggregateArgs>): Prisma.PrismaPromise<GetExamQuestionAggregateType<T>>

    /**
     * Group by ExamQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamQuestionGroupByArgs} args - Group by arguments.
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
      T extends ExamQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamQuestionGroupByArgs['orderBy'] }
        : { orderBy?: ExamQuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExamQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExamQuestion model
   */
  readonly fields: ExamQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExamQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exam<T extends ExamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamDefaultArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ExamQuestion model
   */ 
  interface ExamQuestionFieldRefs {
    readonly id: FieldRef<"ExamQuestion", 'Int'>
    readonly examId: FieldRef<"ExamQuestion", 'Int'>
    readonly question: FieldRef<"ExamQuestion", 'String'>
    readonly options: FieldRef<"ExamQuestion", 'String'>
    readonly correctAnswer: FieldRef<"ExamQuestion", 'String'>
    readonly type: FieldRef<"ExamQuestion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExamQuestion findUnique
   */
  export type ExamQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ExamQuestion to fetch.
     */
    where: ExamQuestionWhereUniqueInput
  }

  /**
   * ExamQuestion findUniqueOrThrow
   */
  export type ExamQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ExamQuestion to fetch.
     */
    where: ExamQuestionWhereUniqueInput
  }

  /**
   * ExamQuestion findFirst
   */
  export type ExamQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ExamQuestion to fetch.
     */
    where?: ExamQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamQuestions to fetch.
     */
    orderBy?: ExamQuestionOrderByWithRelationInput | ExamQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamQuestions.
     */
    cursor?: ExamQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamQuestions.
     */
    distinct?: ExamQuestionScalarFieldEnum | ExamQuestionScalarFieldEnum[]
  }

  /**
   * ExamQuestion findFirstOrThrow
   */
  export type ExamQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ExamQuestion to fetch.
     */
    where?: ExamQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamQuestions to fetch.
     */
    orderBy?: ExamQuestionOrderByWithRelationInput | ExamQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamQuestions.
     */
    cursor?: ExamQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamQuestions.
     */
    distinct?: ExamQuestionScalarFieldEnum | ExamQuestionScalarFieldEnum[]
  }

  /**
   * ExamQuestion findMany
   */
  export type ExamQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    /**
     * Filter, which ExamQuestions to fetch.
     */
    where?: ExamQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamQuestions to fetch.
     */
    orderBy?: ExamQuestionOrderByWithRelationInput | ExamQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExamQuestions.
     */
    cursor?: ExamQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamQuestions.
     */
    skip?: number
    distinct?: ExamQuestionScalarFieldEnum | ExamQuestionScalarFieldEnum[]
  }

  /**
   * ExamQuestion create
   */
  export type ExamQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a ExamQuestion.
     */
    data: XOR<ExamQuestionCreateInput, ExamQuestionUncheckedCreateInput>
  }

  /**
   * ExamQuestion createMany
   */
  export type ExamQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExamQuestions.
     */
    data: ExamQuestionCreateManyInput | ExamQuestionCreateManyInput[]
  }

  /**
   * ExamQuestion createManyAndReturn
   */
  export type ExamQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ExamQuestions.
     */
    data: ExamQuestionCreateManyInput | ExamQuestionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamQuestion update
   */
  export type ExamQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a ExamQuestion.
     */
    data: XOR<ExamQuestionUpdateInput, ExamQuestionUncheckedUpdateInput>
    /**
     * Choose, which ExamQuestion to update.
     */
    where: ExamQuestionWhereUniqueInput
  }

  /**
   * ExamQuestion updateMany
   */
  export type ExamQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExamQuestions.
     */
    data: XOR<ExamQuestionUpdateManyMutationInput, ExamQuestionUncheckedUpdateManyInput>
    /**
     * Filter which ExamQuestions to update
     */
    where?: ExamQuestionWhereInput
  }

  /**
   * ExamQuestion upsert
   */
  export type ExamQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the ExamQuestion to update in case it exists.
     */
    where: ExamQuestionWhereUniqueInput
    /**
     * In case the ExamQuestion found by the `where` argument doesn't exist, create a new ExamQuestion with this data.
     */
    create: XOR<ExamQuestionCreateInput, ExamQuestionUncheckedCreateInput>
    /**
     * In case the ExamQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamQuestionUpdateInput, ExamQuestionUncheckedUpdateInput>
  }

  /**
   * ExamQuestion delete
   */
  export type ExamQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
    /**
     * Filter which ExamQuestion to delete.
     */
    where: ExamQuestionWhereUniqueInput
  }

  /**
   * ExamQuestion deleteMany
   */
  export type ExamQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamQuestions to delete
     */
    where?: ExamQuestionWhereInput
  }

  /**
   * ExamQuestion without action
   */
  export type ExamQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamQuestion
     */
    select?: ExamQuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamQuestionInclude<ExtArgs> | null
  }


  /**
   * Model ExamSubmission
   */

  export type AggregateExamSubmission = {
    _count: ExamSubmissionCountAggregateOutputType | null
    _avg: ExamSubmissionAvgAggregateOutputType | null
    _sum: ExamSubmissionSumAggregateOutputType | null
    _min: ExamSubmissionMinAggregateOutputType | null
    _max: ExamSubmissionMaxAggregateOutputType | null
  }

  export type ExamSubmissionAvgAggregateOutputType = {
    id: number | null
    examId: number | null
    studentId: number | null
    score: number | null
  }

  export type ExamSubmissionSumAggregateOutputType = {
    id: number | null
    examId: number | null
    studentId: number | null
    score: number | null
  }

  export type ExamSubmissionMinAggregateOutputType = {
    id: number | null
    examId: number | null
    studentId: number | null
    answers: string | null
    score: number | null
    submittedAt: Date | null
    review: string | null
  }

  export type ExamSubmissionMaxAggregateOutputType = {
    id: number | null
    examId: number | null
    studentId: number | null
    answers: string | null
    score: number | null
    submittedAt: Date | null
    review: string | null
  }

  export type ExamSubmissionCountAggregateOutputType = {
    id: number
    examId: number
    studentId: number
    answers: number
    score: number
    submittedAt: number
    review: number
    _all: number
  }


  export type ExamSubmissionAvgAggregateInputType = {
    id?: true
    examId?: true
    studentId?: true
    score?: true
  }

  export type ExamSubmissionSumAggregateInputType = {
    id?: true
    examId?: true
    studentId?: true
    score?: true
  }

  export type ExamSubmissionMinAggregateInputType = {
    id?: true
    examId?: true
    studentId?: true
    answers?: true
    score?: true
    submittedAt?: true
    review?: true
  }

  export type ExamSubmissionMaxAggregateInputType = {
    id?: true
    examId?: true
    studentId?: true
    answers?: true
    score?: true
    submittedAt?: true
    review?: true
  }

  export type ExamSubmissionCountAggregateInputType = {
    id?: true
    examId?: true
    studentId?: true
    answers?: true
    score?: true
    submittedAt?: true
    review?: true
    _all?: true
  }

  export type ExamSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamSubmission to aggregate.
     */
    where?: ExamSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamSubmissions to fetch.
     */
    orderBy?: ExamSubmissionOrderByWithRelationInput | ExamSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExamSubmissions
    **/
    _count?: true | ExamSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamSubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamSubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamSubmissionMaxAggregateInputType
  }

  export type GetExamSubmissionAggregateType<T extends ExamSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateExamSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamSubmission[P]>
      : GetScalarType<T[P], AggregateExamSubmission[P]>
  }




  export type ExamSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamSubmissionWhereInput
    orderBy?: ExamSubmissionOrderByWithAggregationInput | ExamSubmissionOrderByWithAggregationInput[]
    by: ExamSubmissionScalarFieldEnum[] | ExamSubmissionScalarFieldEnum
    having?: ExamSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamSubmissionCountAggregateInputType | true
    _avg?: ExamSubmissionAvgAggregateInputType
    _sum?: ExamSubmissionSumAggregateInputType
    _min?: ExamSubmissionMinAggregateInputType
    _max?: ExamSubmissionMaxAggregateInputType
  }

  export type ExamSubmissionGroupByOutputType = {
    id: number
    examId: number
    studentId: number
    answers: string
    score: number
    submittedAt: Date
    review: string | null
    _count: ExamSubmissionCountAggregateOutputType | null
    _avg: ExamSubmissionAvgAggregateOutputType | null
    _sum: ExamSubmissionSumAggregateOutputType | null
    _min: ExamSubmissionMinAggregateOutputType | null
    _max: ExamSubmissionMaxAggregateOutputType | null
  }

  type GetExamSubmissionGroupByPayload<T extends ExamSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], ExamSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type ExamSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examId?: boolean
    studentId?: boolean
    answers?: boolean
    score?: boolean
    submittedAt?: boolean
    review?: boolean
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examSubmission"]>

  export type ExamSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examId?: boolean
    studentId?: boolean
    answers?: boolean
    score?: boolean
    submittedAt?: boolean
    review?: boolean
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examSubmission"]>

  export type ExamSubmissionSelectScalar = {
    id?: boolean
    examId?: boolean
    studentId?: boolean
    answers?: boolean
    score?: boolean
    submittedAt?: boolean
    review?: boolean
  }

  export type ExamSubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExamSubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExamSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExamSubmission"
    objects: {
      exam: Prisma.$ExamPayload<ExtArgs>
      student: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      examId: number
      studentId: number
      answers: string
      score: number
      submittedAt: Date
      review: string | null
    }, ExtArgs["result"]["examSubmission"]>
    composites: {}
  }

  type ExamSubmissionGetPayload<S extends boolean | null | undefined | ExamSubmissionDefaultArgs> = $Result.GetResult<Prisma.$ExamSubmissionPayload, S>

  type ExamSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExamSubmissionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExamSubmissionCountAggregateInputType | true
    }

  export interface ExamSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExamSubmission'], meta: { name: 'ExamSubmission' } }
    /**
     * Find zero or one ExamSubmission that matches the filter.
     * @param {ExamSubmissionFindUniqueArgs} args - Arguments to find a ExamSubmission
     * @example
     * // Get one ExamSubmission
     * const examSubmission = await prisma.examSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamSubmissionFindUniqueArgs>(args: SelectSubset<T, ExamSubmissionFindUniqueArgs<ExtArgs>>): Prisma__ExamSubmissionClient<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ExamSubmission that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExamSubmissionFindUniqueOrThrowArgs} args - Arguments to find a ExamSubmission
     * @example
     * // Get one ExamSubmission
     * const examSubmission = await prisma.examSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamSubmissionClient<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ExamSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSubmissionFindFirstArgs} args - Arguments to find a ExamSubmission
     * @example
     * // Get one ExamSubmission
     * const examSubmission = await prisma.examSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamSubmissionFindFirstArgs>(args?: SelectSubset<T, ExamSubmissionFindFirstArgs<ExtArgs>>): Prisma__ExamSubmissionClient<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ExamSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSubmissionFindFirstOrThrowArgs} args - Arguments to find a ExamSubmission
     * @example
     * // Get one ExamSubmission
     * const examSubmission = await prisma.examSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamSubmissionClient<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ExamSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExamSubmissions
     * const examSubmissions = await prisma.examSubmission.findMany()
     * 
     * // Get first 10 ExamSubmissions
     * const examSubmissions = await prisma.examSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examSubmissionWithIdOnly = await prisma.examSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamSubmissionFindManyArgs>(args?: SelectSubset<T, ExamSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ExamSubmission.
     * @param {ExamSubmissionCreateArgs} args - Arguments to create a ExamSubmission.
     * @example
     * // Create one ExamSubmission
     * const ExamSubmission = await prisma.examSubmission.create({
     *   data: {
     *     // ... data to create a ExamSubmission
     *   }
     * })
     * 
     */
    create<T extends ExamSubmissionCreateArgs>(args: SelectSubset<T, ExamSubmissionCreateArgs<ExtArgs>>): Prisma__ExamSubmissionClient<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ExamSubmissions.
     * @param {ExamSubmissionCreateManyArgs} args - Arguments to create many ExamSubmissions.
     * @example
     * // Create many ExamSubmissions
     * const examSubmission = await prisma.examSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamSubmissionCreateManyArgs>(args?: SelectSubset<T, ExamSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExamSubmissions and returns the data saved in the database.
     * @param {ExamSubmissionCreateManyAndReturnArgs} args - Arguments to create many ExamSubmissions.
     * @example
     * // Create many ExamSubmissions
     * const examSubmission = await prisma.examSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExamSubmissions and only return the `id`
     * const examSubmissionWithIdOnly = await prisma.examSubmission.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ExamSubmission.
     * @param {ExamSubmissionDeleteArgs} args - Arguments to delete one ExamSubmission.
     * @example
     * // Delete one ExamSubmission
     * const ExamSubmission = await prisma.examSubmission.delete({
     *   where: {
     *     // ... filter to delete one ExamSubmission
     *   }
     * })
     * 
     */
    delete<T extends ExamSubmissionDeleteArgs>(args: SelectSubset<T, ExamSubmissionDeleteArgs<ExtArgs>>): Prisma__ExamSubmissionClient<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ExamSubmission.
     * @param {ExamSubmissionUpdateArgs} args - Arguments to update one ExamSubmission.
     * @example
     * // Update one ExamSubmission
     * const examSubmission = await prisma.examSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamSubmissionUpdateArgs>(args: SelectSubset<T, ExamSubmissionUpdateArgs<ExtArgs>>): Prisma__ExamSubmissionClient<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ExamSubmissions.
     * @param {ExamSubmissionDeleteManyArgs} args - Arguments to filter ExamSubmissions to delete.
     * @example
     * // Delete a few ExamSubmissions
     * const { count } = await prisma.examSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamSubmissionDeleteManyArgs>(args?: SelectSubset<T, ExamSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExamSubmissions
     * const examSubmission = await prisma.examSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamSubmissionUpdateManyArgs>(args: SelectSubset<T, ExamSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExamSubmission.
     * @param {ExamSubmissionUpsertArgs} args - Arguments to update or create a ExamSubmission.
     * @example
     * // Update or create a ExamSubmission
     * const examSubmission = await prisma.examSubmission.upsert({
     *   create: {
     *     // ... data to create a ExamSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExamSubmission we want to update
     *   }
     * })
     */
    upsert<T extends ExamSubmissionUpsertArgs>(args: SelectSubset<T, ExamSubmissionUpsertArgs<ExtArgs>>): Prisma__ExamSubmissionClient<$Result.GetResult<Prisma.$ExamSubmissionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ExamSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSubmissionCountArgs} args - Arguments to filter ExamSubmissions to count.
     * @example
     * // Count the number of ExamSubmissions
     * const count = await prisma.examSubmission.count({
     *   where: {
     *     // ... the filter for the ExamSubmissions we want to count
     *   }
     * })
    **/
    count<T extends ExamSubmissionCountArgs>(
      args?: Subset<T, ExamSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExamSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamSubmissionAggregateArgs>(args: Subset<T, ExamSubmissionAggregateArgs>): Prisma.PrismaPromise<GetExamSubmissionAggregateType<T>>

    /**
     * Group by ExamSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamSubmissionGroupByArgs} args - Group by arguments.
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
      T extends ExamSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: ExamSubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExamSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExamSubmission model
   */
  readonly fields: ExamSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExamSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exam<T extends ExamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamDefaultArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ExamSubmission model
   */ 
  interface ExamSubmissionFieldRefs {
    readonly id: FieldRef<"ExamSubmission", 'Int'>
    readonly examId: FieldRef<"ExamSubmission", 'Int'>
    readonly studentId: FieldRef<"ExamSubmission", 'Int'>
    readonly answers: FieldRef<"ExamSubmission", 'String'>
    readonly score: FieldRef<"ExamSubmission", 'Float'>
    readonly submittedAt: FieldRef<"ExamSubmission", 'DateTime'>
    readonly review: FieldRef<"ExamSubmission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExamSubmission findUnique
   */
  export type ExamSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ExamSubmission to fetch.
     */
    where: ExamSubmissionWhereUniqueInput
  }

  /**
   * ExamSubmission findUniqueOrThrow
   */
  export type ExamSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ExamSubmission to fetch.
     */
    where: ExamSubmissionWhereUniqueInput
  }

  /**
   * ExamSubmission findFirst
   */
  export type ExamSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ExamSubmission to fetch.
     */
    where?: ExamSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamSubmissions to fetch.
     */
    orderBy?: ExamSubmissionOrderByWithRelationInput | ExamSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamSubmissions.
     */
    cursor?: ExamSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamSubmissions.
     */
    distinct?: ExamSubmissionScalarFieldEnum | ExamSubmissionScalarFieldEnum[]
  }

  /**
   * ExamSubmission findFirstOrThrow
   */
  export type ExamSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ExamSubmission to fetch.
     */
    where?: ExamSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamSubmissions to fetch.
     */
    orderBy?: ExamSubmissionOrderByWithRelationInput | ExamSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamSubmissions.
     */
    cursor?: ExamSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamSubmissions.
     */
    distinct?: ExamSubmissionScalarFieldEnum | ExamSubmissionScalarFieldEnum[]
  }

  /**
   * ExamSubmission findMany
   */
  export type ExamSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which ExamSubmissions to fetch.
     */
    where?: ExamSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamSubmissions to fetch.
     */
    orderBy?: ExamSubmissionOrderByWithRelationInput | ExamSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExamSubmissions.
     */
    cursor?: ExamSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamSubmissions.
     */
    skip?: number
    distinct?: ExamSubmissionScalarFieldEnum | ExamSubmissionScalarFieldEnum[]
  }

  /**
   * ExamSubmission create
   */
  export type ExamSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a ExamSubmission.
     */
    data: XOR<ExamSubmissionCreateInput, ExamSubmissionUncheckedCreateInput>
  }

  /**
   * ExamSubmission createMany
   */
  export type ExamSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExamSubmissions.
     */
    data: ExamSubmissionCreateManyInput | ExamSubmissionCreateManyInput[]
  }

  /**
   * ExamSubmission createManyAndReturn
   */
  export type ExamSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ExamSubmissions.
     */
    data: ExamSubmissionCreateManyInput | ExamSubmissionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamSubmission update
   */
  export type ExamSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a ExamSubmission.
     */
    data: XOR<ExamSubmissionUpdateInput, ExamSubmissionUncheckedUpdateInput>
    /**
     * Choose, which ExamSubmission to update.
     */
    where: ExamSubmissionWhereUniqueInput
  }

  /**
   * ExamSubmission updateMany
   */
  export type ExamSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExamSubmissions.
     */
    data: XOR<ExamSubmissionUpdateManyMutationInput, ExamSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ExamSubmissions to update
     */
    where?: ExamSubmissionWhereInput
  }

  /**
   * ExamSubmission upsert
   */
  export type ExamSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the ExamSubmission to update in case it exists.
     */
    where: ExamSubmissionWhereUniqueInput
    /**
     * In case the ExamSubmission found by the `where` argument doesn't exist, create a new ExamSubmission with this data.
     */
    create: XOR<ExamSubmissionCreateInput, ExamSubmissionUncheckedCreateInput>
    /**
     * In case the ExamSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamSubmissionUpdateInput, ExamSubmissionUncheckedUpdateInput>
  }

  /**
   * ExamSubmission delete
   */
  export type ExamSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
    /**
     * Filter which ExamSubmission to delete.
     */
    where: ExamSubmissionWhereUniqueInput
  }

  /**
   * ExamSubmission deleteMany
   */
  export type ExamSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamSubmissions to delete
     */
    where?: ExamSubmissionWhereInput
  }

  /**
   * ExamSubmission without action
   */
  export type ExamSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamSubmission
     */
    select?: ExamSubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamSubmissionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    role: 'role',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    profileComplete: 'profileComplete',
    status: 'status',
    password: 'password',
    googleId: 'googleId',
    googleAccessToken: 'googleAccessToken',
    googleRefreshToken: 'googleRefreshToken',
    googleTokenExpiry: 'googleTokenExpiry',
    calendarId: 'calendarId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    googleEventId: 'googleEventId',
    tutorId: 'tutorId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    dueDate: 'dueDate',
    priority: 'priority',
    status: 'status',
    type: 'type',
    googleEventId: 'googleEventId',
    projectId: 'projectId',
    responsibleId: 'responsibleId',
    tutorId: 'tutorId'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    message: 'message',
    timestamp: 'timestamp',
    recipientId: 'recipientId',
    isPrivate: 'isPrivate'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    message: 'message',
    type: 'type',
    isRead: 'isRead',
    createdAt: 'createdAt',
    relatedId: 'relatedId',
    relatedType: 'relatedType'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const ReminderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    scheduledAt: 'scheduledAt',
    isActive: 'isActive',
    createdAt: 'createdAt',
    relatedId: 'relatedId',
    relatedType: 'relatedType'
  };

  export type ReminderScalarFieldEnum = (typeof ReminderScalarFieldEnum)[keyof typeof ReminderScalarFieldEnum]


  export const FileScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    originalName: 'originalName',
    mimeType: 'mimeType',
    size: 'size',
    path: 'path',
    uploadedAt: 'uploadedAt',
    submissionId: 'submissionId'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    studentId: 'studentId',
    submittedAt: 'submittedAt',
    content: 'content',
    grade: 'grade',
    feedback: 'feedback',
    gradedAt: 'gradedAt',
    gradedBy: 'gradedBy',
    status: 'status'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    details: 'details',
    oldValues: 'oldValues',
    newValues: 'newValues',
    timestamp: 'timestamp'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const ChatbotConversationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    messages: 'messages',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatbotConversationScalarFieldEnum = (typeof ChatbotConversationScalarFieldEnum)[keyof typeof ChatbotConversationScalarFieldEnum]


  export const ExamScalarFieldEnum: {
    id: 'id',
    title: 'title',
    topics: 'topics',
    numQuestions: 'numQuestions',
    timeLimit: 'timeLimit',
    generatedQuestions: 'generatedQuestions',
    createdBy: 'createdBy',
    assignedTo: 'assignedTo',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ExamScalarFieldEnum = (typeof ExamScalarFieldEnum)[keyof typeof ExamScalarFieldEnum]


  export const ExamQuestionScalarFieldEnum: {
    id: 'id',
    examId: 'examId',
    question: 'question',
    options: 'options',
    correctAnswer: 'correctAnswer',
    type: 'type'
  };

  export type ExamQuestionScalarFieldEnum = (typeof ExamQuestionScalarFieldEnum)[keyof typeof ExamQuestionScalarFieldEnum]


  export const ExamSubmissionScalarFieldEnum: {
    id: 'id',
    examId: 'examId',
    studentId: 'studentId',
    answers: 'answers',
    score: 'score',
    submittedAt: 'submittedAt',
    review: 'review'
  };

  export type ExamSubmissionScalarFieldEnum = (typeof ExamSubmissionScalarFieldEnum)[keyof typeof ExamSubmissionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    profileComplete?: BoolFilter<"User"> | boolean
    status?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    googleId?: StringNullableFilter<"User"> | string | null
    googleAccessToken?: StringNullableFilter<"User"> | string | null
    googleRefreshToken?: StringNullableFilter<"User"> | string | null
    googleTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    calendarId?: StringNullableFilter<"User"> | string | null
    projects?: ProjectListRelationFilter
    tasks?: TaskListRelationFilter
    tutorProjects?: ProjectListRelationFilter
    tutoredTasks?: TaskListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
    receivedMessages?: ChatMessageListRelationFilter
    notifications?: NotificationListRelationFilter
    reminders?: ReminderListRelationFilter
    studentSubmissions?: SubmissionListRelationFilter
    tutorGradings?: SubmissionListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    createdExams?: ExamListRelationFilter
    examSubmissions?: ExamSubmissionListRelationFilter
    chatbotConversations?: ChatbotConversationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    profileComplete?: SortOrder
    status?: SortOrder
    password?: SortOrder
    googleId?: SortOrderInput | SortOrder
    googleAccessToken?: SortOrderInput | SortOrder
    googleRefreshToken?: SortOrderInput | SortOrder
    googleTokenExpiry?: SortOrderInput | SortOrder
    calendarId?: SortOrderInput | SortOrder
    projects?: ProjectOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    tutorProjects?: ProjectOrderByRelationAggregateInput
    tutoredTasks?: TaskOrderByRelationAggregateInput
    chatMessages?: ChatMessageOrderByRelationAggregateInput
    receivedMessages?: ChatMessageOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    reminders?: ReminderOrderByRelationAggregateInput
    studentSubmissions?: SubmissionOrderByRelationAggregateInput
    tutorGradings?: SubmissionOrderByRelationAggregateInput
    activityLogs?: ActivityLogOrderByRelationAggregateInput
    createdExams?: ExamOrderByRelationAggregateInput
    examSubmissions?: ExamSubmissionOrderByRelationAggregateInput
    chatbotConversations?: ChatbotConversationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    googleId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    profileComplete?: BoolFilter<"User"> | boolean
    status?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    googleAccessToken?: StringNullableFilter<"User"> | string | null
    googleRefreshToken?: StringNullableFilter<"User"> | string | null
    googleTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    calendarId?: StringNullableFilter<"User"> | string | null
    projects?: ProjectListRelationFilter
    tasks?: TaskListRelationFilter
    tutorProjects?: ProjectListRelationFilter
    tutoredTasks?: TaskListRelationFilter
    chatMessages?: ChatMessageListRelationFilter
    receivedMessages?: ChatMessageListRelationFilter
    notifications?: NotificationListRelationFilter
    reminders?: ReminderListRelationFilter
    studentSubmissions?: SubmissionListRelationFilter
    tutorGradings?: SubmissionListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    createdExams?: ExamListRelationFilter
    examSubmissions?: ExamSubmissionListRelationFilter
    chatbotConversations?: ChatbotConversationListRelationFilter
  }, "id" | "username" | "email" | "googleId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    profileComplete?: SortOrder
    status?: SortOrder
    password?: SortOrder
    googleId?: SortOrderInput | SortOrder
    googleAccessToken?: SortOrderInput | SortOrder
    googleRefreshToken?: SortOrderInput | SortOrder
    googleTokenExpiry?: SortOrderInput | SortOrder
    calendarId?: SortOrderInput | SortOrder
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
    username?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileComplete?: BoolWithAggregatesFilter<"User"> | boolean
    status?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    googleAccessToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    googleRefreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    googleTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    calendarId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    status?: StringFilter<"Project"> | string
    googleEventId?: StringNullableFilter<"Project"> | string | null
    tutorId?: IntNullableFilter<"Project"> | number | null
    tasks?: TaskListRelationFilter
    participants?: UserListRelationFilter
    tutor?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    status?: SortOrder
    googleEventId?: SortOrderInput | SortOrder
    tutorId?: SortOrderInput | SortOrder
    tasks?: TaskOrderByRelationAggregateInput
    participants?: UserOrderByRelationAggregateInput
    tutor?: UserOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    status?: StringFilter<"Project"> | string
    googleEventId?: StringNullableFilter<"Project"> | string | null
    tutorId?: IntNullableFilter<"Project"> | number | null
    tasks?: TaskListRelationFilter
    participants?: UserListRelationFilter
    tutor?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    status?: SortOrder
    googleEventId?: SortOrderInput | SortOrder
    tutorId?: SortOrderInput | SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    status?: StringWithAggregatesFilter<"Project"> | string
    googleEventId?: StringNullableWithAggregatesFilter<"Project"> | string | null
    tutorId?: IntNullableWithAggregatesFilter<"Project"> | number | null
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: IntFilter<"Task"> | number
    name?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    priority?: StringFilter<"Task"> | string
    status?: StringFilter<"Task"> | string
    type?: StringFilter<"Task"> | string
    googleEventId?: StringNullableFilter<"Task"> | string | null
    projectId?: IntNullableFilter<"Task"> | number | null
    responsibleId?: IntFilter<"Task"> | number
    tutorId?: IntNullableFilter<"Task"> | number | null
    project?: XOR<ProjectNullableRelationFilter, ProjectWhereInput> | null
    responsible?: XOR<UserRelationFilter, UserWhereInput>
    tutor?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    submissions?: SubmissionListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    type?: SortOrder
    googleEventId?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    responsibleId?: SortOrder
    tutorId?: SortOrderInput | SortOrder
    project?: ProjectOrderByWithRelationInput
    responsible?: UserOrderByWithRelationInput
    tutor?: UserOrderByWithRelationInput
    submissions?: SubmissionOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    name?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    priority?: StringFilter<"Task"> | string
    status?: StringFilter<"Task"> | string
    type?: StringFilter<"Task"> | string
    googleEventId?: StringNullableFilter<"Task"> | string | null
    projectId?: IntNullableFilter<"Task"> | number | null
    responsibleId?: IntFilter<"Task"> | number
    tutorId?: IntNullableFilter<"Task"> | number | null
    project?: XOR<ProjectNullableRelationFilter, ProjectWhereInput> | null
    responsible?: XOR<UserRelationFilter, UserWhereInput>
    tutor?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    submissions?: SubmissionListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    priority?: SortOrder
    status?: SortOrder
    type?: SortOrder
    googleEventId?: SortOrderInput | SortOrder
    projectId?: SortOrderInput | SortOrder
    responsibleId?: SortOrder
    tutorId?: SortOrderInput | SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Task"> | number
    name?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    dueDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    priority?: StringWithAggregatesFilter<"Task"> | string
    status?: StringWithAggregatesFilter<"Task"> | string
    type?: StringWithAggregatesFilter<"Task"> | string
    googleEventId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    projectId?: IntNullableWithAggregatesFilter<"Task"> | number | null
    responsibleId?: IntWithAggregatesFilter<"Task"> | number
    tutorId?: IntNullableWithAggregatesFilter<"Task"> | number | null
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: IntFilter<"ChatMessage"> | number
    userId?: IntFilter<"ChatMessage"> | number
    message?: StringFilter<"ChatMessage"> | string
    timestamp?: DateTimeFilter<"ChatMessage"> | Date | string
    recipientId?: IntNullableFilter<"ChatMessage"> | number | null
    isPrivate?: BoolFilter<"ChatMessage"> | boolean
    user?: XOR<UserRelationFilter, UserWhereInput>
    recipient?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    recipientId?: SortOrderInput | SortOrder
    isPrivate?: SortOrder
    user?: UserOrderByWithRelationInput
    recipient?: UserOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    userId?: IntFilter<"ChatMessage"> | number
    message?: StringFilter<"ChatMessage"> | string
    timestamp?: DateTimeFilter<"ChatMessage"> | Date | string
    recipientId?: IntNullableFilter<"ChatMessage"> | number | null
    isPrivate?: BoolFilter<"ChatMessage"> | boolean
    user?: XOR<UserRelationFilter, UserWhereInput>
    recipient?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    recipientId?: SortOrderInput | SortOrder
    isPrivate?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _avg?: ChatMessageAvgOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
    _sum?: ChatMessageSumOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatMessage"> | number
    userId?: IntWithAggregatesFilter<"ChatMessage"> | number
    message?: StringWithAggregatesFilter<"ChatMessage"> | string
    timestamp?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
    recipientId?: IntNullableWithAggregatesFilter<"ChatMessage"> | number | null
    isPrivate?: BoolWithAggregatesFilter<"ChatMessage"> | boolean
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    relatedId?: IntNullableFilter<"Notification"> | number | null
    relatedType?: StringNullableFilter<"Notification"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    relatedId?: SortOrderInput | SortOrder
    relatedType?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: IntFilter<"Notification"> | number
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    relatedId?: IntNullableFilter<"Notification"> | number | null
    relatedType?: StringNullableFilter<"Notification"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    relatedId?: SortOrderInput | SortOrder
    relatedType?: SortOrderInput | SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    userId?: IntWithAggregatesFilter<"Notification"> | number
    message?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    relatedId?: IntNullableWithAggregatesFilter<"Notification"> | number | null
    relatedType?: StringNullableWithAggregatesFilter<"Notification"> | string | null
  }

  export type ReminderWhereInput = {
    AND?: ReminderWhereInput | ReminderWhereInput[]
    OR?: ReminderWhereInput[]
    NOT?: ReminderWhereInput | ReminderWhereInput[]
    id?: IntFilter<"Reminder"> | number
    userId?: IntFilter<"Reminder"> | number
    title?: StringFilter<"Reminder"> | string
    description?: StringNullableFilter<"Reminder"> | string | null
    scheduledAt?: DateTimeFilter<"Reminder"> | Date | string
    isActive?: BoolFilter<"Reminder"> | boolean
    createdAt?: DateTimeFilter<"Reminder"> | Date | string
    relatedId?: IntNullableFilter<"Reminder"> | number | null
    relatedType?: StringNullableFilter<"Reminder"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ReminderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    scheduledAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    relatedId?: SortOrderInput | SortOrder
    relatedType?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ReminderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReminderWhereInput | ReminderWhereInput[]
    OR?: ReminderWhereInput[]
    NOT?: ReminderWhereInput | ReminderWhereInput[]
    userId?: IntFilter<"Reminder"> | number
    title?: StringFilter<"Reminder"> | string
    description?: StringNullableFilter<"Reminder"> | string | null
    scheduledAt?: DateTimeFilter<"Reminder"> | Date | string
    isActive?: BoolFilter<"Reminder"> | boolean
    createdAt?: DateTimeFilter<"Reminder"> | Date | string
    relatedId?: IntNullableFilter<"Reminder"> | number | null
    relatedType?: StringNullableFilter<"Reminder"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ReminderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    scheduledAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    relatedId?: SortOrderInput | SortOrder
    relatedType?: SortOrderInput | SortOrder
    _count?: ReminderCountOrderByAggregateInput
    _avg?: ReminderAvgOrderByAggregateInput
    _max?: ReminderMaxOrderByAggregateInput
    _min?: ReminderMinOrderByAggregateInput
    _sum?: ReminderSumOrderByAggregateInput
  }

  export type ReminderScalarWhereWithAggregatesInput = {
    AND?: ReminderScalarWhereWithAggregatesInput | ReminderScalarWhereWithAggregatesInput[]
    OR?: ReminderScalarWhereWithAggregatesInput[]
    NOT?: ReminderScalarWhereWithAggregatesInput | ReminderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reminder"> | number
    userId?: IntWithAggregatesFilter<"Reminder"> | number
    title?: StringWithAggregatesFilter<"Reminder"> | string
    description?: StringNullableWithAggregatesFilter<"Reminder"> | string | null
    scheduledAt?: DateTimeWithAggregatesFilter<"Reminder"> | Date | string
    isActive?: BoolWithAggregatesFilter<"Reminder"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Reminder"> | Date | string
    relatedId?: IntNullableWithAggregatesFilter<"Reminder"> | number | null
    relatedType?: StringNullableWithAggregatesFilter<"Reminder"> | string | null
  }

  export type FileWhereInput = {
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    id?: IntFilter<"File"> | number
    filename?: StringFilter<"File"> | string
    originalName?: StringFilter<"File"> | string
    mimeType?: StringFilter<"File"> | string
    size?: IntFilter<"File"> | number
    path?: StringFilter<"File"> | string
    uploadedAt?: DateTimeFilter<"File"> | Date | string
    submissionId?: IntNullableFilter<"File"> | number | null
    submission?: XOR<SubmissionNullableRelationFilter, SubmissionWhereInput> | null
  }

  export type FileOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    path?: SortOrder
    uploadedAt?: SortOrder
    submissionId?: SortOrderInput | SortOrder
    submission?: SubmissionOrderByWithRelationInput
  }

  export type FileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    filename?: StringFilter<"File"> | string
    originalName?: StringFilter<"File"> | string
    mimeType?: StringFilter<"File"> | string
    size?: IntFilter<"File"> | number
    path?: StringFilter<"File"> | string
    uploadedAt?: DateTimeFilter<"File"> | Date | string
    submissionId?: IntNullableFilter<"File"> | number | null
    submission?: XOR<SubmissionNullableRelationFilter, SubmissionWhereInput> | null
  }, "id">

  export type FileOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    path?: SortOrder
    uploadedAt?: SortOrder
    submissionId?: SortOrderInput | SortOrder
    _count?: FileCountOrderByAggregateInput
    _avg?: FileAvgOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
    _sum?: FileSumOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    OR?: FileScalarWhereWithAggregatesInput[]
    NOT?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"File"> | number
    filename?: StringWithAggregatesFilter<"File"> | string
    originalName?: StringWithAggregatesFilter<"File"> | string
    mimeType?: StringWithAggregatesFilter<"File"> | string
    size?: IntWithAggregatesFilter<"File"> | number
    path?: StringWithAggregatesFilter<"File"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"File"> | Date | string
    submissionId?: IntNullableWithAggregatesFilter<"File"> | number | null
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: IntFilter<"Submission"> | number
    taskId?: IntFilter<"Submission"> | number
    studentId?: IntFilter<"Submission"> | number
    submittedAt?: DateTimeFilter<"Submission"> | Date | string
    content?: StringNullableFilter<"Submission"> | string | null
    grade?: FloatNullableFilter<"Submission"> | number | null
    feedback?: StringNullableFilter<"Submission"> | string | null
    gradedAt?: DateTimeNullableFilter<"Submission"> | Date | string | null
    gradedBy?: IntNullableFilter<"Submission"> | number | null
    status?: StringFilter<"Submission"> | string
    task?: XOR<TaskRelationFilter, TaskWhereInput>
    student?: XOR<UserRelationFilter, UserWhereInput>
    gradedByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    files?: FileListRelationFilter
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    studentId?: SortOrder
    submittedAt?: SortOrder
    content?: SortOrderInput | SortOrder
    grade?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    gradedAt?: SortOrderInput | SortOrder
    gradedBy?: SortOrderInput | SortOrder
    status?: SortOrder
    task?: TaskOrderByWithRelationInput
    student?: UserOrderByWithRelationInput
    gradedByUser?: UserOrderByWithRelationInput
    files?: FileOrderByRelationAggregateInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    taskId?: IntFilter<"Submission"> | number
    studentId?: IntFilter<"Submission"> | number
    submittedAt?: DateTimeFilter<"Submission"> | Date | string
    content?: StringNullableFilter<"Submission"> | string | null
    grade?: FloatNullableFilter<"Submission"> | number | null
    feedback?: StringNullableFilter<"Submission"> | string | null
    gradedAt?: DateTimeNullableFilter<"Submission"> | Date | string | null
    gradedBy?: IntNullableFilter<"Submission"> | number | null
    status?: StringFilter<"Submission"> | string
    task?: XOR<TaskRelationFilter, TaskWhereInput>
    student?: XOR<UserRelationFilter, UserWhereInput>
    gradedByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    files?: FileListRelationFilter
  }, "id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    studentId?: SortOrder
    submittedAt?: SortOrder
    content?: SortOrderInput | SortOrder
    grade?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    gradedAt?: SortOrderInput | SortOrder
    gradedBy?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _avg?: SubmissionAvgOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
    _sum?: SubmissionSumOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Submission"> | number
    taskId?: IntWithAggregatesFilter<"Submission"> | number
    studentId?: IntWithAggregatesFilter<"Submission"> | number
    submittedAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    content?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    grade?: FloatNullableWithAggregatesFilter<"Submission"> | number | null
    feedback?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    gradedAt?: DateTimeNullableWithAggregatesFilter<"Submission"> | Date | string | null
    gradedBy?: IntNullableWithAggregatesFilter<"Submission"> | number | null
    status?: StringWithAggregatesFilter<"Submission"> | string
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: IntFilter<"ActivityLog"> | number
    userId?: IntFilter<"ActivityLog"> | number
    action?: StringFilter<"ActivityLog"> | string
    entityType?: StringFilter<"ActivityLog"> | string
    entityId?: IntFilter<"ActivityLog"> | number
    details?: StringNullableFilter<"ActivityLog"> | string | null
    oldValues?: StringNullableFilter<"ActivityLog"> | string | null
    newValues?: StringNullableFilter<"ActivityLog"> | string | null
    timestamp?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    details?: SortOrderInput | SortOrder
    oldValues?: SortOrderInput | SortOrder
    newValues?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    userId?: IntFilter<"ActivityLog"> | number
    action?: StringFilter<"ActivityLog"> | string
    entityType?: StringFilter<"ActivityLog"> | string
    entityId?: IntFilter<"ActivityLog"> | number
    details?: StringNullableFilter<"ActivityLog"> | string | null
    oldValues?: StringNullableFilter<"ActivityLog"> | string | null
    newValues?: StringNullableFilter<"ActivityLog"> | string | null
    timestamp?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    details?: SortOrderInput | SortOrder
    oldValues?: SortOrderInput | SortOrder
    newValues?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _avg?: ActivityLogAvgOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
    _sum?: ActivityLogSumOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ActivityLog"> | number
    userId?: IntWithAggregatesFilter<"ActivityLog"> | number
    action?: StringWithAggregatesFilter<"ActivityLog"> | string
    entityType?: StringWithAggregatesFilter<"ActivityLog"> | string
    entityId?: IntWithAggregatesFilter<"ActivityLog"> | number
    details?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    oldValues?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    newValues?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type ChatbotConversationWhereInput = {
    AND?: ChatbotConversationWhereInput | ChatbotConversationWhereInput[]
    OR?: ChatbotConversationWhereInput[]
    NOT?: ChatbotConversationWhereInput | ChatbotConversationWhereInput[]
    id?: IntFilter<"ChatbotConversation"> | number
    userId?: IntFilter<"ChatbotConversation"> | number
    title?: StringNullableFilter<"ChatbotConversation"> | string | null
    messages?: StringFilter<"ChatbotConversation"> | string
    createdAt?: DateTimeFilter<"ChatbotConversation"> | Date | string
    updatedAt?: DateTimeFilter<"ChatbotConversation"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ChatbotConversationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrderInput | SortOrder
    messages?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ChatbotConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatbotConversationWhereInput | ChatbotConversationWhereInput[]
    OR?: ChatbotConversationWhereInput[]
    NOT?: ChatbotConversationWhereInput | ChatbotConversationWhereInput[]
    userId?: IntFilter<"ChatbotConversation"> | number
    title?: StringNullableFilter<"ChatbotConversation"> | string | null
    messages?: StringFilter<"ChatbotConversation"> | string
    createdAt?: DateTimeFilter<"ChatbotConversation"> | Date | string
    updatedAt?: DateTimeFilter<"ChatbotConversation"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ChatbotConversationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrderInput | SortOrder
    messages?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatbotConversationCountOrderByAggregateInput
    _avg?: ChatbotConversationAvgOrderByAggregateInput
    _max?: ChatbotConversationMaxOrderByAggregateInput
    _min?: ChatbotConversationMinOrderByAggregateInput
    _sum?: ChatbotConversationSumOrderByAggregateInput
  }

  export type ChatbotConversationScalarWhereWithAggregatesInput = {
    AND?: ChatbotConversationScalarWhereWithAggregatesInput | ChatbotConversationScalarWhereWithAggregatesInput[]
    OR?: ChatbotConversationScalarWhereWithAggregatesInput[]
    NOT?: ChatbotConversationScalarWhereWithAggregatesInput | ChatbotConversationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatbotConversation"> | number
    userId?: IntWithAggregatesFilter<"ChatbotConversation"> | number
    title?: StringNullableWithAggregatesFilter<"ChatbotConversation"> | string | null
    messages?: StringWithAggregatesFilter<"ChatbotConversation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatbotConversation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatbotConversation"> | Date | string
  }

  export type ExamWhereInput = {
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    id?: IntFilter<"Exam"> | number
    title?: StringFilter<"Exam"> | string
    topics?: StringFilter<"Exam"> | string
    numQuestions?: IntFilter<"Exam"> | number
    timeLimit?: IntFilter<"Exam"> | number
    generatedQuestions?: StringFilter<"Exam"> | string
    createdBy?: IntFilter<"Exam"> | number
    assignedTo?: StringFilter<"Exam"> | string
    status?: StringFilter<"Exam"> | string
    createdAt?: DateTimeFilter<"Exam"> | Date | string
    createdByUser?: XOR<UserRelationFilter, UserWhereInput>
    submissions?: ExamSubmissionListRelationFilter
    questions?: ExamQuestionListRelationFilter
  }

  export type ExamOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    topics?: SortOrder
    numQuestions?: SortOrder
    timeLimit?: SortOrder
    generatedQuestions?: SortOrder
    createdBy?: SortOrder
    assignedTo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdByUser?: UserOrderByWithRelationInput
    submissions?: ExamSubmissionOrderByRelationAggregateInput
    questions?: ExamQuestionOrderByRelationAggregateInput
  }

  export type ExamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    title?: StringFilter<"Exam"> | string
    topics?: StringFilter<"Exam"> | string
    numQuestions?: IntFilter<"Exam"> | number
    timeLimit?: IntFilter<"Exam"> | number
    generatedQuestions?: StringFilter<"Exam"> | string
    createdBy?: IntFilter<"Exam"> | number
    assignedTo?: StringFilter<"Exam"> | string
    status?: StringFilter<"Exam"> | string
    createdAt?: DateTimeFilter<"Exam"> | Date | string
    createdByUser?: XOR<UserRelationFilter, UserWhereInput>
    submissions?: ExamSubmissionListRelationFilter
    questions?: ExamQuestionListRelationFilter
  }, "id">

  export type ExamOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    topics?: SortOrder
    numQuestions?: SortOrder
    timeLimit?: SortOrder
    generatedQuestions?: SortOrder
    createdBy?: SortOrder
    assignedTo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ExamCountOrderByAggregateInput
    _avg?: ExamAvgOrderByAggregateInput
    _max?: ExamMaxOrderByAggregateInput
    _min?: ExamMinOrderByAggregateInput
    _sum?: ExamSumOrderByAggregateInput
  }

  export type ExamScalarWhereWithAggregatesInput = {
    AND?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    OR?: ExamScalarWhereWithAggregatesInput[]
    NOT?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Exam"> | number
    title?: StringWithAggregatesFilter<"Exam"> | string
    topics?: StringWithAggregatesFilter<"Exam"> | string
    numQuestions?: IntWithAggregatesFilter<"Exam"> | number
    timeLimit?: IntWithAggregatesFilter<"Exam"> | number
    generatedQuestions?: StringWithAggregatesFilter<"Exam"> | string
    createdBy?: IntWithAggregatesFilter<"Exam"> | number
    assignedTo?: StringWithAggregatesFilter<"Exam"> | string
    status?: StringWithAggregatesFilter<"Exam"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Exam"> | Date | string
  }

  export type ExamQuestionWhereInput = {
    AND?: ExamQuestionWhereInput | ExamQuestionWhereInput[]
    OR?: ExamQuestionWhereInput[]
    NOT?: ExamQuestionWhereInput | ExamQuestionWhereInput[]
    id?: IntFilter<"ExamQuestion"> | number
    examId?: IntFilter<"ExamQuestion"> | number
    question?: StringFilter<"ExamQuestion"> | string
    options?: StringNullableFilter<"ExamQuestion"> | string | null
    correctAnswer?: StringFilter<"ExamQuestion"> | string
    type?: StringFilter<"ExamQuestion"> | string
    exam?: XOR<ExamRelationFilter, ExamWhereInput>
  }

  export type ExamQuestionOrderByWithRelationInput = {
    id?: SortOrder
    examId?: SortOrder
    question?: SortOrder
    options?: SortOrderInput | SortOrder
    correctAnswer?: SortOrder
    type?: SortOrder
    exam?: ExamOrderByWithRelationInput
  }

  export type ExamQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExamQuestionWhereInput | ExamQuestionWhereInput[]
    OR?: ExamQuestionWhereInput[]
    NOT?: ExamQuestionWhereInput | ExamQuestionWhereInput[]
    examId?: IntFilter<"ExamQuestion"> | number
    question?: StringFilter<"ExamQuestion"> | string
    options?: StringNullableFilter<"ExamQuestion"> | string | null
    correctAnswer?: StringFilter<"ExamQuestion"> | string
    type?: StringFilter<"ExamQuestion"> | string
    exam?: XOR<ExamRelationFilter, ExamWhereInput>
  }, "id">

  export type ExamQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    examId?: SortOrder
    question?: SortOrder
    options?: SortOrderInput | SortOrder
    correctAnswer?: SortOrder
    type?: SortOrder
    _count?: ExamQuestionCountOrderByAggregateInput
    _avg?: ExamQuestionAvgOrderByAggregateInput
    _max?: ExamQuestionMaxOrderByAggregateInput
    _min?: ExamQuestionMinOrderByAggregateInput
    _sum?: ExamQuestionSumOrderByAggregateInput
  }

  export type ExamQuestionScalarWhereWithAggregatesInput = {
    AND?: ExamQuestionScalarWhereWithAggregatesInput | ExamQuestionScalarWhereWithAggregatesInput[]
    OR?: ExamQuestionScalarWhereWithAggregatesInput[]
    NOT?: ExamQuestionScalarWhereWithAggregatesInput | ExamQuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExamQuestion"> | number
    examId?: IntWithAggregatesFilter<"ExamQuestion"> | number
    question?: StringWithAggregatesFilter<"ExamQuestion"> | string
    options?: StringNullableWithAggregatesFilter<"ExamQuestion"> | string | null
    correctAnswer?: StringWithAggregatesFilter<"ExamQuestion"> | string
    type?: StringWithAggregatesFilter<"ExamQuestion"> | string
  }

  export type ExamSubmissionWhereInput = {
    AND?: ExamSubmissionWhereInput | ExamSubmissionWhereInput[]
    OR?: ExamSubmissionWhereInput[]
    NOT?: ExamSubmissionWhereInput | ExamSubmissionWhereInput[]
    id?: IntFilter<"ExamSubmission"> | number
    examId?: IntFilter<"ExamSubmission"> | number
    studentId?: IntFilter<"ExamSubmission"> | number
    answers?: StringFilter<"ExamSubmission"> | string
    score?: FloatFilter<"ExamSubmission"> | number
    submittedAt?: DateTimeFilter<"ExamSubmission"> | Date | string
    review?: StringNullableFilter<"ExamSubmission"> | string | null
    exam?: XOR<ExamRelationFilter, ExamWhereInput>
    student?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ExamSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    examId?: SortOrder
    studentId?: SortOrder
    answers?: SortOrder
    score?: SortOrder
    submittedAt?: SortOrder
    review?: SortOrderInput | SortOrder
    exam?: ExamOrderByWithRelationInput
    student?: UserOrderByWithRelationInput
  }

  export type ExamSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExamSubmissionWhereInput | ExamSubmissionWhereInput[]
    OR?: ExamSubmissionWhereInput[]
    NOT?: ExamSubmissionWhereInput | ExamSubmissionWhereInput[]
    examId?: IntFilter<"ExamSubmission"> | number
    studentId?: IntFilter<"ExamSubmission"> | number
    answers?: StringFilter<"ExamSubmission"> | string
    score?: FloatFilter<"ExamSubmission"> | number
    submittedAt?: DateTimeFilter<"ExamSubmission"> | Date | string
    review?: StringNullableFilter<"ExamSubmission"> | string | null
    exam?: XOR<ExamRelationFilter, ExamWhereInput>
    student?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ExamSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    examId?: SortOrder
    studentId?: SortOrder
    answers?: SortOrder
    score?: SortOrder
    submittedAt?: SortOrder
    review?: SortOrderInput | SortOrder
    _count?: ExamSubmissionCountOrderByAggregateInput
    _avg?: ExamSubmissionAvgOrderByAggregateInput
    _max?: ExamSubmissionMaxOrderByAggregateInput
    _min?: ExamSubmissionMinOrderByAggregateInput
    _sum?: ExamSubmissionSumOrderByAggregateInput
  }

  export type ExamSubmissionScalarWhereWithAggregatesInput = {
    AND?: ExamSubmissionScalarWhereWithAggregatesInput | ExamSubmissionScalarWhereWithAggregatesInput[]
    OR?: ExamSubmissionScalarWhereWithAggregatesInput[]
    NOT?: ExamSubmissionScalarWhereWithAggregatesInput | ExamSubmissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExamSubmission"> | number
    examId?: IntWithAggregatesFilter<"ExamSubmission"> | number
    studentId?: IntWithAggregatesFilter<"ExamSubmission"> | number
    answers?: StringWithAggregatesFilter<"ExamSubmission"> | string
    score?: FloatWithAggregatesFilter<"ExamSubmission"> | number
    submittedAt?: DateTimeWithAggregatesFilter<"ExamSubmission"> | Date | string
    review?: StringNullableWithAggregatesFilter<"ExamSubmission"> | string | null
  }

  export type UserCreateInput = {
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectCreateNestedManyWithoutParticipantsInput
    tasks?: TaskCreateNestedManyWithoutResponsibleInput
    tutorProjects?: ProjectCreateNestedManyWithoutTutorInput
    tutoredTasks?: TaskCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutRecipientInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionCreateNestedManyWithoutStudentInput
    tutorGradings?: SubmissionCreateNestedManyWithoutGradedByUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    createdExams?: ExamCreateNestedManyWithoutCreatedByUserInput
    examSubmissions?: ExamSubmissionCreateNestedManyWithoutStudentInput
    chatbotConversations?: ChatbotConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutParticipantsInput
    tasks?: TaskUncheckedCreateNestedManyWithoutResponsibleInput
    tutorProjects?: ProjectUncheckedCreateNestedManyWithoutTutorInput
    tutoredTasks?: TaskUncheckedCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutRecipientInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
    tutorGradings?: SubmissionUncheckedCreateNestedManyWithoutGradedByUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    createdExams?: ExamUncheckedCreateNestedManyWithoutCreatedByUserInput
    examSubmissions?: ExamSubmissionUncheckedCreateNestedManyWithoutStudentInput
    chatbotConversations?: ChatbotConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUpdateManyWithoutParticipantsNestedInput
    tasks?: TaskUpdateManyWithoutResponsibleNestedInput
    tutorProjects?: ProjectUpdateManyWithoutTutorNestedInput
    tutoredTasks?: TaskUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutRecipientNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUpdateManyWithoutStudentNestedInput
    tutorGradings?: SubmissionUpdateManyWithoutGradedByUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    createdExams?: ExamUpdateManyWithoutCreatedByUserNestedInput
    examSubmissions?: ExamSubmissionUpdateManyWithoutStudentNestedInput
    chatbotConversations?: ChatbotConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUncheckedUpdateManyWithoutParticipantsNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutResponsibleNestedInput
    tutorProjects?: ProjectUncheckedUpdateManyWithoutTutorNestedInput
    tutoredTasks?: TaskUncheckedUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutRecipientNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
    tutorGradings?: SubmissionUncheckedUpdateManyWithoutGradedByUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    createdExams?: ExamUncheckedUpdateManyWithoutCreatedByUserNestedInput
    examSubmissions?: ExamSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    chatbotConversations?: ChatbotConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectCreateInput = {
    name: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    status: string
    googleEventId?: string | null
    tasks?: TaskCreateNestedManyWithoutProjectInput
    participants?: UserCreateNestedManyWithoutProjectsInput
    tutor?: UserCreateNestedOneWithoutTutorProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    status: string
    googleEventId?: string | null
    tutorId?: number | null
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
    participants?: UserUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type ProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TaskUpdateManyWithoutProjectNestedInput
    participants?: UserUpdateManyWithoutProjectsNestedInput
    tutor?: UserUpdateOneWithoutTutorProjectsNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    tutorId?: NullableIntFieldUpdateOperationsInput | number | null
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
    participants?: UserUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    status: string
    googleEventId?: string | null
    tutorId?: number | null
  }

  export type ProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    tutorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TaskCreateInput = {
    name: string
    description?: string | null
    dueDate?: Date | string | null
    priority: string
    status: string
    type?: string
    googleEventId?: string | null
    project?: ProjectCreateNestedOneWithoutTasksInput
    responsible: UserCreateNestedOneWithoutTasksInput
    tutor?: UserCreateNestedOneWithoutTutoredTasksInput
    submissions?: SubmissionCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    dueDate?: Date | string | null
    priority: string
    status: string
    type?: string
    googleEventId?: string | null
    projectId?: number | null
    responsibleId: number
    tutorId?: number | null
    submissions?: SubmissionUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateOneWithoutTasksNestedInput
    responsible?: UserUpdateOneRequiredWithoutTasksNestedInput
    tutor?: UserUpdateOneWithoutTutoredTasksNestedInput
    submissions?: SubmissionUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    responsibleId?: IntFieldUpdateOperationsInput | number
    tutorId?: NullableIntFieldUpdateOperationsInput | number | null
    submissions?: SubmissionUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    dueDate?: Date | string | null
    priority: string
    status: string
    type?: string
    googleEventId?: string | null
    projectId?: number | null
    responsibleId: number
    tutorId?: number | null
  }

  export type TaskUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    responsibleId?: IntFieldUpdateOperationsInput | number
    tutorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChatMessageCreateInput = {
    message: string
    timestamp?: Date | string
    isPrivate?: boolean
    user: UserCreateNestedOneWithoutChatMessagesInput
    recipient?: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: number
    userId: number
    message: string
    timestamp?: Date | string
    recipientId?: number | null
    isPrivate?: boolean
  }

  export type ChatMessageUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutChatMessagesNestedInput
    recipient?: UserUpdateOneWithoutReceivedMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientId?: NullableIntFieldUpdateOperationsInput | number | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChatMessageCreateManyInput = {
    id?: number
    userId: number
    message: string
    timestamp?: Date | string
    recipientId?: number | null
    isPrivate?: boolean
  }

  export type ChatMessageUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientId?: NullableIntFieldUpdateOperationsInput | number | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationCreateInput = {
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
    relatedId?: number | null
    relatedType?: string | null
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    userId: number
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
    relatedId?: number | null
    relatedType?: string | null
  }

  export type NotificationUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedId?: NullableIntFieldUpdateOperationsInput | number | null
    relatedType?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedId?: NullableIntFieldUpdateOperationsInput | number | null
    relatedType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationCreateManyInput = {
    id?: number
    userId: number
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
    relatedId?: number | null
    relatedType?: string | null
  }

  export type NotificationUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedId?: NullableIntFieldUpdateOperationsInput | number | null
    relatedType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedId?: NullableIntFieldUpdateOperationsInput | number | null
    relatedType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReminderCreateInput = {
    title: string
    description?: string | null
    scheduledAt: Date | string
    isActive?: boolean
    createdAt?: Date | string
    relatedId?: number | null
    relatedType?: string | null
    user: UserCreateNestedOneWithoutRemindersInput
  }

  export type ReminderUncheckedCreateInput = {
    id?: number
    userId: number
    title: string
    description?: string | null
    scheduledAt: Date | string
    isActive?: boolean
    createdAt?: Date | string
    relatedId?: number | null
    relatedType?: string | null
  }

  export type ReminderUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedId?: NullableIntFieldUpdateOperationsInput | number | null
    relatedType?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutRemindersNestedInput
  }

  export type ReminderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedId?: NullableIntFieldUpdateOperationsInput | number | null
    relatedType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReminderCreateManyInput = {
    id?: number
    userId: number
    title: string
    description?: string | null
    scheduledAt: Date | string
    isActive?: boolean
    createdAt?: Date | string
    relatedId?: number | null
    relatedType?: string | null
  }

  export type ReminderUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedId?: NullableIntFieldUpdateOperationsInput | number | null
    relatedType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReminderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedId?: NullableIntFieldUpdateOperationsInput | number | null
    relatedType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FileCreateInput = {
    filename: string
    originalName: string
    mimeType: string
    size: number
    path: string
    uploadedAt?: Date | string
    submission?: SubmissionCreateNestedOneWithoutFilesInput
  }

  export type FileUncheckedCreateInput = {
    id?: number
    filename: string
    originalName: string
    mimeType: string
    size: number
    path: string
    uploadedAt?: Date | string
    submissionId?: number | null
  }

  export type FileUpdateInput = {
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUpdateOneWithoutFilesNestedInput
  }

  export type FileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FileCreateManyInput = {
    id?: number
    filename: string
    originalName: string
    mimeType: string
    size: number
    path: string
    uploadedAt?: Date | string
    submissionId?: number | null
  }

  export type FileUpdateManyMutationInput = {
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SubmissionCreateInput = {
    submittedAt?: Date | string
    content?: string | null
    grade?: number | null
    feedback?: string | null
    gradedAt?: Date | string | null
    status?: string
    task: TaskCreateNestedOneWithoutSubmissionsInput
    student: UserCreateNestedOneWithoutStudentSubmissionsInput
    gradedByUser?: UserCreateNestedOneWithoutTutorGradingsInput
    files?: FileCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: number
    taskId: number
    studentId: number
    submittedAt?: Date | string
    content?: string | null
    grade?: number | null
    feedback?: string | null
    gradedAt?: Date | string | null
    gradedBy?: number | null
    status?: string
    files?: FileUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUpdateInput = {
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    task?: TaskUpdateOneRequiredWithoutSubmissionsNestedInput
    student?: UserUpdateOneRequiredWithoutStudentSubmissionsNestedInput
    gradedByUser?: UserUpdateOneWithoutTutorGradingsNestedInput
    files?: FileUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradedBy?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    files?: FileUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionCreateManyInput = {
    id?: number
    taskId: number
    studentId: number
    submittedAt?: Date | string
    content?: string | null
    grade?: number | null
    feedback?: string | null
    gradedAt?: Date | string | null
    gradedBy?: number | null
    status?: string
  }

  export type SubmissionUpdateManyMutationInput = {
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradedBy?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityLogCreateInput = {
    action: string
    entityType: string
    entityId: number
    details?: string | null
    oldValues?: string | null
    newValues?: string | null
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: number
    userId: number
    action: string
    entityType: string
    entityId: number
    details?: string | null
    oldValues?: string | null
    newValues?: string | null
    timestamp?: Date | string
  }

  export type ActivityLogUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    details?: NullableStringFieldUpdateOperationsInput | string | null
    oldValues?: NullableStringFieldUpdateOperationsInput | string | null
    newValues?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    details?: NullableStringFieldUpdateOperationsInput | string | null
    oldValues?: NullableStringFieldUpdateOperationsInput | string | null
    newValues?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: number
    userId: number
    action: string
    entityType: string
    entityId: number
    details?: string | null
    oldValues?: string | null
    newValues?: string | null
    timestamp?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    details?: NullableStringFieldUpdateOperationsInput | string | null
    oldValues?: NullableStringFieldUpdateOperationsInput | string | null
    newValues?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    details?: NullableStringFieldUpdateOperationsInput | string | null
    oldValues?: NullableStringFieldUpdateOperationsInput | string | null
    newValues?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatbotConversationCreateInput = {
    title?: string | null
    messages: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChatbotConversationsInput
  }

  export type ChatbotConversationUncheckedCreateInput = {
    id?: number
    userId: number
    title?: string | null
    messages: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatbotConversationUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatbotConversationsNestedInput
  }

  export type ChatbotConversationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatbotConversationCreateManyInput = {
    id?: number
    userId: number
    title?: string | null
    messages: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatbotConversationUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatbotConversationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamCreateInput = {
    title: string
    topics: string
    numQuestions: number
    timeLimit: number
    generatedQuestions: string
    assignedTo: string
    status?: string
    createdAt?: Date | string
    createdByUser: UserCreateNestedOneWithoutCreatedExamsInput
    submissions?: ExamSubmissionCreateNestedManyWithoutExamInput
    questions?: ExamQuestionCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateInput = {
    id?: number
    title: string
    topics: string
    numQuestions: number
    timeLimit: number
    generatedQuestions: string
    createdBy: number
    assignedTo: string
    status?: string
    createdAt?: Date | string
    submissions?: ExamSubmissionUncheckedCreateNestedManyWithoutExamInput
    questions?: ExamQuestionUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    topics?: StringFieldUpdateOperationsInput | string
    numQuestions?: IntFieldUpdateOperationsInput | number
    timeLimit?: IntFieldUpdateOperationsInput | number
    generatedQuestions?: StringFieldUpdateOperationsInput | string
    assignedTo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUser?: UserUpdateOneRequiredWithoutCreatedExamsNestedInput
    submissions?: ExamSubmissionUpdateManyWithoutExamNestedInput
    questions?: ExamQuestionUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    topics?: StringFieldUpdateOperationsInput | string
    numQuestions?: IntFieldUpdateOperationsInput | number
    timeLimit?: IntFieldUpdateOperationsInput | number
    generatedQuestions?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    assignedTo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: ExamSubmissionUncheckedUpdateManyWithoutExamNestedInput
    questions?: ExamQuestionUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamCreateManyInput = {
    id?: number
    title: string
    topics: string
    numQuestions: number
    timeLimit: number
    generatedQuestions: string
    createdBy: number
    assignedTo: string
    status?: string
    createdAt?: Date | string
  }

  export type ExamUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    topics?: StringFieldUpdateOperationsInput | string
    numQuestions?: IntFieldUpdateOperationsInput | number
    timeLimit?: IntFieldUpdateOperationsInput | number
    generatedQuestions?: StringFieldUpdateOperationsInput | string
    assignedTo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    topics?: StringFieldUpdateOperationsInput | string
    numQuestions?: IntFieldUpdateOperationsInput | number
    timeLimit?: IntFieldUpdateOperationsInput | number
    generatedQuestions?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    assignedTo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamQuestionCreateInput = {
    question: string
    options?: string | null
    correctAnswer: string
    type: string
    exam: ExamCreateNestedOneWithoutQuestionsInput
  }

  export type ExamQuestionUncheckedCreateInput = {
    id?: number
    examId: number
    question: string
    options?: string | null
    correctAnswer: string
    type: string
  }

  export type ExamQuestionUpdateInput = {
    question?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    exam?: ExamUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type ExamQuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    examId?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ExamQuestionCreateManyInput = {
    id?: number
    examId: number
    question: string
    options?: string | null
    correctAnswer: string
    type: string
  }

  export type ExamQuestionUpdateManyMutationInput = {
    question?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ExamQuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    examId?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ExamSubmissionCreateInput = {
    answers: string
    score: number
    submittedAt?: Date | string
    review?: string | null
    exam: ExamCreateNestedOneWithoutSubmissionsInput
    student: UserCreateNestedOneWithoutExamSubmissionsInput
  }

  export type ExamSubmissionUncheckedCreateInput = {
    id?: number
    examId: number
    studentId: number
    answers: string
    score: number
    submittedAt?: Date | string
    review?: string | null
  }

  export type ExamSubmissionUpdateInput = {
    answers?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: NullableStringFieldUpdateOperationsInput | string | null
    exam?: ExamUpdateOneRequiredWithoutSubmissionsNestedInput
    student?: UserUpdateOneRequiredWithoutExamSubmissionsNestedInput
  }

  export type ExamSubmissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    examId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    answers?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExamSubmissionCreateManyInput = {
    id?: number
    examId: number
    studentId: number
    answers: string
    score: number
    submittedAt?: Date | string
    review?: string | null
  }

  export type ExamSubmissionUpdateManyMutationInput = {
    answers?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExamSubmissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    examId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    answers?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type ReminderListRelationFilter = {
    every?: ReminderWhereInput
    some?: ReminderWhereInput
    none?: ReminderWhereInput
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type ExamListRelationFilter = {
    every?: ExamWhereInput
    some?: ExamWhereInput
    none?: ExamWhereInput
  }

  export type ExamSubmissionListRelationFilter = {
    every?: ExamSubmissionWhereInput
    some?: ExamSubmissionWhereInput
    none?: ExamSubmissionWhereInput
  }

  export type ChatbotConversationListRelationFilter = {
    every?: ChatbotConversationWhereInput
    some?: ChatbotConversationWhereInput
    none?: ChatbotConversationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReminderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamSubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatbotConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    profileComplete?: SortOrder
    status?: SortOrder
    password?: SortOrder
    googleId?: SortOrder
    googleAccessToken?: SortOrder
    googleRefreshToken?: SortOrder
    googleTokenExpiry?: SortOrder
    calendarId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    profileComplete?: SortOrder
    status?: SortOrder
    password?: SortOrder
    googleId?: SortOrder
    googleAccessToken?: SortOrder
    googleRefreshToken?: SortOrder
    googleTokenExpiry?: SortOrder
    calendarId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    profileComplete?: SortOrder
    status?: SortOrder
    password?: SortOrder
    googleId?: SortOrder
    googleAccessToken?: SortOrder
    googleRefreshToken?: SortOrder
    googleTokenExpiry?: SortOrder
    calendarId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    googleEventId?: SortOrder
    tutorId?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    tutorId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    googleEventId?: SortOrder
    tutorId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    googleEventId?: SortOrder
    tutorId?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    tutorId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProjectNullableRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    type?: SortOrder
    googleEventId?: SortOrder
    projectId?: SortOrder
    responsibleId?: SortOrder
    tutorId?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    responsibleId?: SortOrder
    tutorId?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    type?: SortOrder
    googleEventId?: SortOrder
    projectId?: SortOrder
    responsibleId?: SortOrder
    tutorId?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    type?: SortOrder
    googleEventId?: SortOrder
    projectId?: SortOrder
    responsibleId?: SortOrder
    tutorId?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    responsibleId?: SortOrder
    tutorId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    recipientId?: SortOrder
    isPrivate?: SortOrder
  }

  export type ChatMessageAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recipientId?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    recipientId?: SortOrder
    isPrivate?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    recipientId?: SortOrder
    isPrivate?: SortOrder
  }

  export type ChatMessageSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    recipientId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    relatedId?: SortOrder
    relatedType?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    relatedId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    relatedId?: SortOrder
    relatedType?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    relatedId?: SortOrder
    relatedType?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    relatedId?: SortOrder
  }

  export type ReminderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    scheduledAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    relatedId?: SortOrder
    relatedType?: SortOrder
  }

  export type ReminderAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    relatedId?: SortOrder
  }

  export type ReminderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    scheduledAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    relatedId?: SortOrder
    relatedType?: SortOrder
  }

  export type ReminderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    scheduledAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    relatedId?: SortOrder
    relatedType?: SortOrder
  }

  export type ReminderSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    relatedId?: SortOrder
  }

  export type SubmissionNullableRelationFilter = {
    is?: SubmissionWhereInput | null
    isNot?: SubmissionWhereInput | null
  }

  export type FileCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    path?: SortOrder
    uploadedAt?: SortOrder
    submissionId?: SortOrder
  }

  export type FileAvgOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
    submissionId?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    path?: SortOrder
    uploadedAt?: SortOrder
    submissionId?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    path?: SortOrder
    uploadedAt?: SortOrder
    submissionId?: SortOrder
  }

  export type FileSumOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
    submissionId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type TaskRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type FileListRelationFilter = {
    every?: FileWhereInput
    some?: FileWhereInput
    none?: FileWhereInput
  }

  export type FileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    studentId?: SortOrder
    submittedAt?: SortOrder
    content?: SortOrder
    grade?: SortOrder
    feedback?: SortOrder
    gradedAt?: SortOrder
    gradedBy?: SortOrder
    status?: SortOrder
  }

  export type SubmissionAvgOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    studentId?: SortOrder
    grade?: SortOrder
    gradedBy?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    studentId?: SortOrder
    submittedAt?: SortOrder
    content?: SortOrder
    grade?: SortOrder
    feedback?: SortOrder
    gradedAt?: SortOrder
    gradedBy?: SortOrder
    status?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    studentId?: SortOrder
    submittedAt?: SortOrder
    content?: SortOrder
    grade?: SortOrder
    feedback?: SortOrder
    gradedAt?: SortOrder
    gradedBy?: SortOrder
    status?: SortOrder
  }

  export type SubmissionSumOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    studentId?: SortOrder
    grade?: SortOrder
    gradedBy?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    details?: SortOrder
    oldValues?: SortOrder
    newValues?: SortOrder
    timestamp?: SortOrder
  }

  export type ActivityLogAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    entityId?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    details?: SortOrder
    oldValues?: SortOrder
    newValues?: SortOrder
    timestamp?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    details?: SortOrder
    oldValues?: SortOrder
    newValues?: SortOrder
    timestamp?: SortOrder
  }

  export type ActivityLogSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    entityId?: SortOrder
  }

  export type ChatbotConversationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    messages?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatbotConversationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ChatbotConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    messages?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatbotConversationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    messages?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatbotConversationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ExamQuestionListRelationFilter = {
    every?: ExamQuestionWhereInput
    some?: ExamQuestionWhereInput
    none?: ExamQuestionWhereInput
  }

  export type ExamQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    topics?: SortOrder
    numQuestions?: SortOrder
    timeLimit?: SortOrder
    generatedQuestions?: SortOrder
    createdBy?: SortOrder
    assignedTo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ExamAvgOrderByAggregateInput = {
    id?: SortOrder
    numQuestions?: SortOrder
    timeLimit?: SortOrder
    createdBy?: SortOrder
  }

  export type ExamMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    topics?: SortOrder
    numQuestions?: SortOrder
    timeLimit?: SortOrder
    generatedQuestions?: SortOrder
    createdBy?: SortOrder
    assignedTo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ExamMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    topics?: SortOrder
    numQuestions?: SortOrder
    timeLimit?: SortOrder
    generatedQuestions?: SortOrder
    createdBy?: SortOrder
    assignedTo?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ExamSumOrderByAggregateInput = {
    id?: SortOrder
    numQuestions?: SortOrder
    timeLimit?: SortOrder
    createdBy?: SortOrder
  }

  export type ExamRelationFilter = {
    is?: ExamWhereInput
    isNot?: ExamWhereInput
  }

  export type ExamQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    question?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    type?: SortOrder
  }

  export type ExamQuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
  }

  export type ExamQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    question?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    type?: SortOrder
  }

  export type ExamQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    question?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    type?: SortOrder
  }

  export type ExamQuestionSumOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ExamSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    studentId?: SortOrder
    answers?: SortOrder
    score?: SortOrder
    submittedAt?: SortOrder
    review?: SortOrder
  }

  export type ExamSubmissionAvgOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    studentId?: SortOrder
    score?: SortOrder
  }

  export type ExamSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    studentId?: SortOrder
    answers?: SortOrder
    score?: SortOrder
    submittedAt?: SortOrder
    review?: SortOrder
  }

  export type ExamSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    studentId?: SortOrder
    answers?: SortOrder
    score?: SortOrder
    submittedAt?: SortOrder
    review?: SortOrder
  }

  export type ExamSubmissionSumOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    studentId?: SortOrder
    score?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type ProjectCreateNestedManyWithoutParticipantsInput = {
    create?: XOR<ProjectCreateWithoutParticipantsInput, ProjectUncheckedCreateWithoutParticipantsInput> | ProjectCreateWithoutParticipantsInput[] | ProjectUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutParticipantsInput | ProjectCreateOrConnectWithoutParticipantsInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutResponsibleInput = {
    create?: XOR<TaskCreateWithoutResponsibleInput, TaskUncheckedCreateWithoutResponsibleInput> | TaskCreateWithoutResponsibleInput[] | TaskUncheckedCreateWithoutResponsibleInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutResponsibleInput | TaskCreateOrConnectWithoutResponsibleInput[]
    createMany?: TaskCreateManyResponsibleInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutTutorInput = {
    create?: XOR<ProjectCreateWithoutTutorInput, ProjectUncheckedCreateWithoutTutorInput> | ProjectCreateWithoutTutorInput[] | ProjectUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTutorInput | ProjectCreateOrConnectWithoutTutorInput[]
    createMany?: ProjectCreateManyTutorInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutTutorInput = {
    create?: XOR<TaskCreateWithoutTutorInput, TaskUncheckedCreateWithoutTutorInput> | TaskCreateWithoutTutorInput[] | TaskUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTutorInput | TaskCreateOrConnectWithoutTutorInput[]
    createMany?: TaskCreateManyTutorInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutRecipientInput = {
    create?: XOR<ChatMessageCreateWithoutRecipientInput, ChatMessageUncheckedCreateWithoutRecipientInput> | ChatMessageCreateWithoutRecipientInput[] | ChatMessageUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRecipientInput | ChatMessageCreateOrConnectWithoutRecipientInput[]
    createMany?: ChatMessageCreateManyRecipientInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ReminderCreateNestedManyWithoutUserInput = {
    create?: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput> | ReminderCreateWithoutUserInput[] | ReminderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutUserInput | ReminderCreateOrConnectWithoutUserInput[]
    createMany?: ReminderCreateManyUserInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutStudentInput = {
    create?: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput> | SubmissionCreateWithoutStudentInput[] | SubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutStudentInput | SubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: SubmissionCreateManyStudentInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutGradedByUserInput = {
    create?: XOR<SubmissionCreateWithoutGradedByUserInput, SubmissionUncheckedCreateWithoutGradedByUserInput> | SubmissionCreateWithoutGradedByUserInput[] | SubmissionUncheckedCreateWithoutGradedByUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutGradedByUserInput | SubmissionCreateOrConnectWithoutGradedByUserInput[]
    createMany?: SubmissionCreateManyGradedByUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type ExamCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<ExamCreateWithoutCreatedByUserInput, ExamUncheckedCreateWithoutCreatedByUserInput> | ExamCreateWithoutCreatedByUserInput[] | ExamUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutCreatedByUserInput | ExamCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: ExamCreateManyCreatedByUserInputEnvelope
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type ExamSubmissionCreateNestedManyWithoutStudentInput = {
    create?: XOR<ExamSubmissionCreateWithoutStudentInput, ExamSubmissionUncheckedCreateWithoutStudentInput> | ExamSubmissionCreateWithoutStudentInput[] | ExamSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutStudentInput | ExamSubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: ExamSubmissionCreateManyStudentInputEnvelope
    connect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
  }

  export type ChatbotConversationCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatbotConversationCreateWithoutUserInput, ChatbotConversationUncheckedCreateWithoutUserInput> | ChatbotConversationCreateWithoutUserInput[] | ChatbotConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatbotConversationCreateOrConnectWithoutUserInput | ChatbotConversationCreateOrConnectWithoutUserInput[]
    createMany?: ChatbotConversationCreateManyUserInputEnvelope
    connect?: ChatbotConversationWhereUniqueInput | ChatbotConversationWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutParticipantsInput = {
    create?: XOR<ProjectCreateWithoutParticipantsInput, ProjectUncheckedCreateWithoutParticipantsInput> | ProjectCreateWithoutParticipantsInput[] | ProjectUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutParticipantsInput | ProjectCreateOrConnectWithoutParticipantsInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutResponsibleInput = {
    create?: XOR<TaskCreateWithoutResponsibleInput, TaskUncheckedCreateWithoutResponsibleInput> | TaskCreateWithoutResponsibleInput[] | TaskUncheckedCreateWithoutResponsibleInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutResponsibleInput | TaskCreateOrConnectWithoutResponsibleInput[]
    createMany?: TaskCreateManyResponsibleInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutTutorInput = {
    create?: XOR<ProjectCreateWithoutTutorInput, ProjectUncheckedCreateWithoutTutorInput> | ProjectCreateWithoutTutorInput[] | ProjectUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTutorInput | ProjectCreateOrConnectWithoutTutorInput[]
    createMany?: ProjectCreateManyTutorInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutTutorInput = {
    create?: XOR<TaskCreateWithoutTutorInput, TaskUncheckedCreateWithoutTutorInput> | TaskCreateWithoutTutorInput[] | TaskUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTutorInput | TaskCreateOrConnectWithoutTutorInput[]
    createMany?: TaskCreateManyTutorInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<ChatMessageCreateWithoutRecipientInput, ChatMessageUncheckedCreateWithoutRecipientInput> | ChatMessageCreateWithoutRecipientInput[] | ChatMessageUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRecipientInput | ChatMessageCreateOrConnectWithoutRecipientInput[]
    createMany?: ChatMessageCreateManyRecipientInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type ReminderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput> | ReminderCreateWithoutUserInput[] | ReminderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutUserInput | ReminderCreateOrConnectWithoutUserInput[]
    createMany?: ReminderCreateManyUserInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput> | SubmissionCreateWithoutStudentInput[] | SubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutStudentInput | SubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: SubmissionCreateManyStudentInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutGradedByUserInput = {
    create?: XOR<SubmissionCreateWithoutGradedByUserInput, SubmissionUncheckedCreateWithoutGradedByUserInput> | SubmissionCreateWithoutGradedByUserInput[] | SubmissionUncheckedCreateWithoutGradedByUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutGradedByUserInput | SubmissionCreateOrConnectWithoutGradedByUserInput[]
    createMany?: SubmissionCreateManyGradedByUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type ExamUncheckedCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<ExamCreateWithoutCreatedByUserInput, ExamUncheckedCreateWithoutCreatedByUserInput> | ExamCreateWithoutCreatedByUserInput[] | ExamUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutCreatedByUserInput | ExamCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: ExamCreateManyCreatedByUserInputEnvelope
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type ExamSubmissionUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ExamSubmissionCreateWithoutStudentInput, ExamSubmissionUncheckedCreateWithoutStudentInput> | ExamSubmissionCreateWithoutStudentInput[] | ExamSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutStudentInput | ExamSubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: ExamSubmissionCreateManyStudentInputEnvelope
    connect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
  }

  export type ChatbotConversationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatbotConversationCreateWithoutUserInput, ChatbotConversationUncheckedCreateWithoutUserInput> | ChatbotConversationCreateWithoutUserInput[] | ChatbotConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatbotConversationCreateOrConnectWithoutUserInput | ChatbotConversationCreateOrConnectWithoutUserInput[]
    createMany?: ChatbotConversationCreateManyUserInputEnvelope
    connect?: ChatbotConversationWhereUniqueInput | ChatbotConversationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProjectUpdateManyWithoutParticipantsNestedInput = {
    create?: XOR<ProjectCreateWithoutParticipantsInput, ProjectUncheckedCreateWithoutParticipantsInput> | ProjectCreateWithoutParticipantsInput[] | ProjectUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutParticipantsInput | ProjectCreateOrConnectWithoutParticipantsInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutParticipantsInput | ProjectUpsertWithWhereUniqueWithoutParticipantsInput[]
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutParticipantsInput | ProjectUpdateWithWhereUniqueWithoutParticipantsInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutParticipantsInput | ProjectUpdateManyWithWhereWithoutParticipantsInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutResponsibleNestedInput = {
    create?: XOR<TaskCreateWithoutResponsibleInput, TaskUncheckedCreateWithoutResponsibleInput> | TaskCreateWithoutResponsibleInput[] | TaskUncheckedCreateWithoutResponsibleInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutResponsibleInput | TaskCreateOrConnectWithoutResponsibleInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutResponsibleInput | TaskUpsertWithWhereUniqueWithoutResponsibleInput[]
    createMany?: TaskCreateManyResponsibleInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutResponsibleInput | TaskUpdateWithWhereUniqueWithoutResponsibleInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutResponsibleInput | TaskUpdateManyWithWhereWithoutResponsibleInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutTutorNestedInput = {
    create?: XOR<ProjectCreateWithoutTutorInput, ProjectUncheckedCreateWithoutTutorInput> | ProjectCreateWithoutTutorInput[] | ProjectUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTutorInput | ProjectCreateOrConnectWithoutTutorInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutTutorInput | ProjectUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: ProjectCreateManyTutorInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutTutorInput | ProjectUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutTutorInput | ProjectUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutTutorNestedInput = {
    create?: XOR<TaskCreateWithoutTutorInput, TaskUncheckedCreateWithoutTutorInput> | TaskCreateWithoutTutorInput[] | TaskUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTutorInput | TaskCreateOrConnectWithoutTutorInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTutorInput | TaskUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: TaskCreateManyTutorInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTutorInput | TaskUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTutorInput | TaskUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserInput | ChatMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserInput | ChatMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserInput | ChatMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<ChatMessageCreateWithoutRecipientInput, ChatMessageUncheckedCreateWithoutRecipientInput> | ChatMessageCreateWithoutRecipientInput[] | ChatMessageUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRecipientInput | ChatMessageCreateOrConnectWithoutRecipientInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutRecipientInput | ChatMessageUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: ChatMessageCreateManyRecipientInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutRecipientInput | ChatMessageUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutRecipientInput | ChatMessageUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ReminderUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput> | ReminderCreateWithoutUserInput[] | ReminderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutUserInput | ReminderCreateOrConnectWithoutUserInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutUserInput | ReminderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReminderCreateManyUserInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutUserInput | ReminderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutUserInput | ReminderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput> | SubmissionCreateWithoutStudentInput[] | SubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutStudentInput | SubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutStudentInput | SubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SubmissionCreateManyStudentInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutStudentInput | SubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutStudentInput | SubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutGradedByUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutGradedByUserInput, SubmissionUncheckedCreateWithoutGradedByUserInput> | SubmissionCreateWithoutGradedByUserInput[] | SubmissionUncheckedCreateWithoutGradedByUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutGradedByUserInput | SubmissionCreateOrConnectWithoutGradedByUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutGradedByUserInput | SubmissionUpsertWithWhereUniqueWithoutGradedByUserInput[]
    createMany?: SubmissionCreateManyGradedByUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutGradedByUserInput | SubmissionUpdateWithWhereUniqueWithoutGradedByUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutGradedByUserInput | SubmissionUpdateManyWithWhereWithoutGradedByUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type ExamUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<ExamCreateWithoutCreatedByUserInput, ExamUncheckedCreateWithoutCreatedByUserInput> | ExamCreateWithoutCreatedByUserInput[] | ExamUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutCreatedByUserInput | ExamCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutCreatedByUserInput | ExamUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: ExamCreateManyCreatedByUserInputEnvelope
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutCreatedByUserInput | ExamUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutCreatedByUserInput | ExamUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type ExamSubmissionUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ExamSubmissionCreateWithoutStudentInput, ExamSubmissionUncheckedCreateWithoutStudentInput> | ExamSubmissionCreateWithoutStudentInput[] | ExamSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutStudentInput | ExamSubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: ExamSubmissionUpsertWithWhereUniqueWithoutStudentInput | ExamSubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ExamSubmissionCreateManyStudentInputEnvelope
    set?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    disconnect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    delete?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    connect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    update?: ExamSubmissionUpdateWithWhereUniqueWithoutStudentInput | ExamSubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ExamSubmissionUpdateManyWithWhereWithoutStudentInput | ExamSubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ExamSubmissionScalarWhereInput | ExamSubmissionScalarWhereInput[]
  }

  export type ChatbotConversationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatbotConversationCreateWithoutUserInput, ChatbotConversationUncheckedCreateWithoutUserInput> | ChatbotConversationCreateWithoutUserInput[] | ChatbotConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatbotConversationCreateOrConnectWithoutUserInput | ChatbotConversationCreateOrConnectWithoutUserInput[]
    upsert?: ChatbotConversationUpsertWithWhereUniqueWithoutUserInput | ChatbotConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatbotConversationCreateManyUserInputEnvelope
    set?: ChatbotConversationWhereUniqueInput | ChatbotConversationWhereUniqueInput[]
    disconnect?: ChatbotConversationWhereUniqueInput | ChatbotConversationWhereUniqueInput[]
    delete?: ChatbotConversationWhereUniqueInput | ChatbotConversationWhereUniqueInput[]
    connect?: ChatbotConversationWhereUniqueInput | ChatbotConversationWhereUniqueInput[]
    update?: ChatbotConversationUpdateWithWhereUniqueWithoutUserInput | ChatbotConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatbotConversationUpdateManyWithWhereWithoutUserInput | ChatbotConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatbotConversationScalarWhereInput | ChatbotConversationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUncheckedUpdateManyWithoutParticipantsNestedInput = {
    create?: XOR<ProjectCreateWithoutParticipantsInput, ProjectUncheckedCreateWithoutParticipantsInput> | ProjectCreateWithoutParticipantsInput[] | ProjectUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutParticipantsInput | ProjectCreateOrConnectWithoutParticipantsInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutParticipantsInput | ProjectUpsertWithWhereUniqueWithoutParticipantsInput[]
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutParticipantsInput | ProjectUpdateWithWhereUniqueWithoutParticipantsInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutParticipantsInput | ProjectUpdateManyWithWhereWithoutParticipantsInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutResponsibleNestedInput = {
    create?: XOR<TaskCreateWithoutResponsibleInput, TaskUncheckedCreateWithoutResponsibleInput> | TaskCreateWithoutResponsibleInput[] | TaskUncheckedCreateWithoutResponsibleInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutResponsibleInput | TaskCreateOrConnectWithoutResponsibleInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutResponsibleInput | TaskUpsertWithWhereUniqueWithoutResponsibleInput[]
    createMany?: TaskCreateManyResponsibleInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutResponsibleInput | TaskUpdateWithWhereUniqueWithoutResponsibleInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutResponsibleInput | TaskUpdateManyWithWhereWithoutResponsibleInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutTutorNestedInput = {
    create?: XOR<ProjectCreateWithoutTutorInput, ProjectUncheckedCreateWithoutTutorInput> | ProjectCreateWithoutTutorInput[] | ProjectUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTutorInput | ProjectCreateOrConnectWithoutTutorInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutTutorInput | ProjectUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: ProjectCreateManyTutorInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutTutorInput | ProjectUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutTutorInput | ProjectUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutTutorNestedInput = {
    create?: XOR<TaskCreateWithoutTutorInput, TaskUncheckedCreateWithoutTutorInput> | TaskCreateWithoutTutorInput[] | TaskUncheckedCreateWithoutTutorInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTutorInput | TaskCreateOrConnectWithoutTutorInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTutorInput | TaskUpsertWithWhereUniqueWithoutTutorInput[]
    createMany?: TaskCreateManyTutorInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTutorInput | TaskUpdateWithWhereUniqueWithoutTutorInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTutorInput | TaskUpdateManyWithWhereWithoutTutorInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput> | ChatMessageCreateWithoutUserInput[] | ChatMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserInput | ChatMessageCreateOrConnectWithoutUserInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserInput | ChatMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMessageCreateManyUserInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserInput | ChatMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserInput | ChatMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<ChatMessageCreateWithoutRecipientInput, ChatMessageUncheckedCreateWithoutRecipientInput> | ChatMessageCreateWithoutRecipientInput[] | ChatMessageUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutRecipientInput | ChatMessageCreateOrConnectWithoutRecipientInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutRecipientInput | ChatMessageUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: ChatMessageCreateManyRecipientInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutRecipientInput | ChatMessageUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutRecipientInput | ChatMessageUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ReminderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput> | ReminderCreateWithoutUserInput[] | ReminderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutUserInput | ReminderCreateOrConnectWithoutUserInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutUserInput | ReminderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReminderCreateManyUserInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutUserInput | ReminderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutUserInput | ReminderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput> | SubmissionCreateWithoutStudentInput[] | SubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutStudentInput | SubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutStudentInput | SubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SubmissionCreateManyStudentInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutStudentInput | SubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutStudentInput | SubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutGradedByUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutGradedByUserInput, SubmissionUncheckedCreateWithoutGradedByUserInput> | SubmissionCreateWithoutGradedByUserInput[] | SubmissionUncheckedCreateWithoutGradedByUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutGradedByUserInput | SubmissionCreateOrConnectWithoutGradedByUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutGradedByUserInput | SubmissionUpsertWithWhereUniqueWithoutGradedByUserInput[]
    createMany?: SubmissionCreateManyGradedByUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutGradedByUserInput | SubmissionUpdateWithWhereUniqueWithoutGradedByUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutGradedByUserInput | SubmissionUpdateManyWithWhereWithoutGradedByUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type ExamUncheckedUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<ExamCreateWithoutCreatedByUserInput, ExamUncheckedCreateWithoutCreatedByUserInput> | ExamCreateWithoutCreatedByUserInput[] | ExamUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutCreatedByUserInput | ExamCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutCreatedByUserInput | ExamUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: ExamCreateManyCreatedByUserInputEnvelope
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutCreatedByUserInput | ExamUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutCreatedByUserInput | ExamUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type ExamSubmissionUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ExamSubmissionCreateWithoutStudentInput, ExamSubmissionUncheckedCreateWithoutStudentInput> | ExamSubmissionCreateWithoutStudentInput[] | ExamSubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutStudentInput | ExamSubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: ExamSubmissionUpsertWithWhereUniqueWithoutStudentInput | ExamSubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ExamSubmissionCreateManyStudentInputEnvelope
    set?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    disconnect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    delete?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    connect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    update?: ExamSubmissionUpdateWithWhereUniqueWithoutStudentInput | ExamSubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ExamSubmissionUpdateManyWithWhereWithoutStudentInput | ExamSubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ExamSubmissionScalarWhereInput | ExamSubmissionScalarWhereInput[]
  }

  export type ChatbotConversationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatbotConversationCreateWithoutUserInput, ChatbotConversationUncheckedCreateWithoutUserInput> | ChatbotConversationCreateWithoutUserInput[] | ChatbotConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatbotConversationCreateOrConnectWithoutUserInput | ChatbotConversationCreateOrConnectWithoutUserInput[]
    upsert?: ChatbotConversationUpsertWithWhereUniqueWithoutUserInput | ChatbotConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatbotConversationCreateManyUserInputEnvelope
    set?: ChatbotConversationWhereUniqueInput | ChatbotConversationWhereUniqueInput[]
    disconnect?: ChatbotConversationWhereUniqueInput | ChatbotConversationWhereUniqueInput[]
    delete?: ChatbotConversationWhereUniqueInput | ChatbotConversationWhereUniqueInput[]
    connect?: ChatbotConversationWhereUniqueInput | ChatbotConversationWhereUniqueInput[]
    update?: ChatbotConversationUpdateWithWhereUniqueWithoutUserInput | ChatbotConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatbotConversationUpdateManyWithWhereWithoutUserInput | ChatbotConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatbotConversationScalarWhereInput | ChatbotConversationScalarWhereInput[]
  }

  export type TaskCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput> | UserCreateWithoutProjectsInput[] | UserUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput | UserCreateOrConnectWithoutProjectsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutTutorProjectsInput = {
    create?: XOR<UserCreateWithoutTutorProjectsInput, UserUncheckedCreateWithoutTutorProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTutorProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type TaskUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput> | UserCreateWithoutProjectsInput[] | UserUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput | UserCreateOrConnectWithoutProjectsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TaskUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput> | UserCreateWithoutProjectsInput[] | UserUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput | UserCreateOrConnectWithoutProjectsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProjectsInput | UserUpsertWithWhereUniqueWithoutProjectsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProjectsInput | UserUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProjectsInput | UserUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateOneWithoutTutorProjectsNestedInput = {
    create?: XOR<UserCreateWithoutTutorProjectsInput, UserUncheckedCreateWithoutTutorProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTutorProjectsInput
    upsert?: UserUpsertWithoutTutorProjectsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTutorProjectsInput, UserUpdateWithoutTutorProjectsInput>, UserUncheckedUpdateWithoutTutorProjectsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput> | UserCreateWithoutProjectsInput[] | UserUncheckedCreateWithoutProjectsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput | UserCreateOrConnectWithoutProjectsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProjectsInput | UserUpsertWithWhereUniqueWithoutProjectsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProjectsInput | UserUpdateWithWhereUniqueWithoutProjectsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProjectsInput | UserUpdateManyWithWhereWithoutProjectsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutTasksInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTutoredTasksInput = {
    create?: XOR<UserCreateWithoutTutoredTasksInput, UserUncheckedCreateWithoutTutoredTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTutoredTasksInput
    connect?: UserWhereUniqueInput
  }

  export type SubmissionCreateNestedManyWithoutTaskInput = {
    create?: XOR<SubmissionCreateWithoutTaskInput, SubmissionUncheckedCreateWithoutTaskInput> | SubmissionCreateWithoutTaskInput[] | SubmissionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutTaskInput | SubmissionCreateOrConnectWithoutTaskInput[]
    createMany?: SubmissionCreateManyTaskInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<SubmissionCreateWithoutTaskInput, SubmissionUncheckedCreateWithoutTaskInput> | SubmissionCreateWithoutTaskInput[] | SubmissionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutTaskInput | SubmissionCreateOrConnectWithoutTaskInput[]
    createMany?: SubmissionCreateManyTaskInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type ProjectUpdateOneWithoutTasksNestedInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    upsert?: ProjectUpsertWithoutTasksInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTasksInput, ProjectUpdateWithoutTasksInput>, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    upsert?: UserUpsertWithoutTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksInput, UserUpdateWithoutTasksInput>, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateOneWithoutTutoredTasksNestedInput = {
    create?: XOR<UserCreateWithoutTutoredTasksInput, UserUncheckedCreateWithoutTutoredTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTutoredTasksInput
    upsert?: UserUpsertWithoutTutoredTasksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTutoredTasksInput, UserUpdateWithoutTutoredTasksInput>, UserUncheckedUpdateWithoutTutoredTasksInput>
  }

  export type SubmissionUpdateManyWithoutTaskNestedInput = {
    create?: XOR<SubmissionCreateWithoutTaskInput, SubmissionUncheckedCreateWithoutTaskInput> | SubmissionCreateWithoutTaskInput[] | SubmissionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutTaskInput | SubmissionCreateOrConnectWithoutTaskInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutTaskInput | SubmissionUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: SubmissionCreateManyTaskInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutTaskInput | SubmissionUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutTaskInput | SubmissionUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<SubmissionCreateWithoutTaskInput, SubmissionUncheckedCreateWithoutTaskInput> | SubmissionCreateWithoutTaskInput[] | SubmissionUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutTaskInput | SubmissionCreateOrConnectWithoutTaskInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutTaskInput | SubmissionUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: SubmissionCreateManyTaskInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutTaskInput | SubmissionUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutTaskInput | SubmissionUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChatMessagesInput = {
    create?: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutChatMessagesNestedInput = {
    create?: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMessagesInput
    upsert?: UserUpsertWithoutChatMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatMessagesInput, UserUpdateWithoutChatMessagesInput>, UserUncheckedUpdateWithoutChatMessagesInput>
  }

  export type UserUpdateOneWithoutReceivedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UserUpsertWithoutReceivedMessagesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedMessagesInput, UserUpdateWithoutReceivedMessagesInput>, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutRemindersInput = {
    create?: XOR<UserCreateWithoutRemindersInput, UserUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: UserCreateOrConnectWithoutRemindersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRemindersNestedInput = {
    create?: XOR<UserCreateWithoutRemindersInput, UserUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: UserCreateOrConnectWithoutRemindersInput
    upsert?: UserUpsertWithoutRemindersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRemindersInput, UserUpdateWithoutRemindersInput>, UserUncheckedUpdateWithoutRemindersInput>
  }

  export type SubmissionCreateNestedOneWithoutFilesInput = {
    create?: XOR<SubmissionCreateWithoutFilesInput, SubmissionUncheckedCreateWithoutFilesInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutFilesInput
    connect?: SubmissionWhereUniqueInput
  }

  export type SubmissionUpdateOneWithoutFilesNestedInput = {
    create?: XOR<SubmissionCreateWithoutFilesInput, SubmissionUncheckedCreateWithoutFilesInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutFilesInput
    upsert?: SubmissionUpsertWithoutFilesInput
    disconnect?: SubmissionWhereInput | boolean
    delete?: SubmissionWhereInput | boolean
    connect?: SubmissionWhereUniqueInput
    update?: XOR<XOR<SubmissionUpdateToOneWithWhereWithoutFilesInput, SubmissionUpdateWithoutFilesInput>, SubmissionUncheckedUpdateWithoutFilesInput>
  }

  export type TaskCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<TaskCreateWithoutSubmissionsInput, TaskUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubmissionsInput
    connect?: TaskWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStudentSubmissionsInput = {
    create?: XOR<UserCreateWithoutStudentSubmissionsInput, UserUncheckedCreateWithoutStudentSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTutorGradingsInput = {
    create?: XOR<UserCreateWithoutTutorGradingsInput, UserUncheckedCreateWithoutTutorGradingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTutorGradingsInput
    connect?: UserWhereUniqueInput
  }

  export type FileCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<FileCreateWithoutSubmissionInput, FileUncheckedCreateWithoutSubmissionInput> | FileCreateWithoutSubmissionInput[] | FileUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: FileCreateOrConnectWithoutSubmissionInput | FileCreateOrConnectWithoutSubmissionInput[]
    createMany?: FileCreateManySubmissionInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type FileUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<FileCreateWithoutSubmissionInput, FileUncheckedCreateWithoutSubmissionInput> | FileCreateWithoutSubmissionInput[] | FileUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: FileCreateOrConnectWithoutSubmissionInput | FileCreateOrConnectWithoutSubmissionInput[]
    createMany?: FileCreateManySubmissionInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaskUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<TaskCreateWithoutSubmissionsInput, TaskUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubmissionsInput
    upsert?: TaskUpsertWithoutSubmissionsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutSubmissionsInput, TaskUpdateWithoutSubmissionsInput>, TaskUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateOneRequiredWithoutStudentSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutStudentSubmissionsInput, UserUncheckedCreateWithoutStudentSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentSubmissionsInput
    upsert?: UserUpsertWithoutStudentSubmissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentSubmissionsInput, UserUpdateWithoutStudentSubmissionsInput>, UserUncheckedUpdateWithoutStudentSubmissionsInput>
  }

  export type UserUpdateOneWithoutTutorGradingsNestedInput = {
    create?: XOR<UserCreateWithoutTutorGradingsInput, UserUncheckedCreateWithoutTutorGradingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTutorGradingsInput
    upsert?: UserUpsertWithoutTutorGradingsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTutorGradingsInput, UserUpdateWithoutTutorGradingsInput>, UserUncheckedUpdateWithoutTutorGradingsInput>
  }

  export type FileUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<FileCreateWithoutSubmissionInput, FileUncheckedCreateWithoutSubmissionInput> | FileCreateWithoutSubmissionInput[] | FileUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: FileCreateOrConnectWithoutSubmissionInput | FileCreateOrConnectWithoutSubmissionInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutSubmissionInput | FileUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: FileCreateManySubmissionInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutSubmissionInput | FileUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: FileUpdateManyWithWhereWithoutSubmissionInput | FileUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type FileUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<FileCreateWithoutSubmissionInput, FileUncheckedCreateWithoutSubmissionInput> | FileCreateWithoutSubmissionInput[] | FileUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: FileCreateOrConnectWithoutSubmissionInput | FileCreateOrConnectWithoutSubmissionInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutSubmissionInput | FileUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: FileCreateManySubmissionInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutSubmissionInput | FileUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: FileUpdateManyWithWhereWithoutSubmissionInput | FileUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutActivityLogsNestedInput = {
    create?: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput
    upsert?: UserUpsertWithoutActivityLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivityLogsInput, UserUpdateWithoutActivityLogsInput>, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type UserCreateNestedOneWithoutChatbotConversationsInput = {
    create?: XOR<UserCreateWithoutChatbotConversationsInput, UserUncheckedCreateWithoutChatbotConversationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatbotConversationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutChatbotConversationsNestedInput = {
    create?: XOR<UserCreateWithoutChatbotConversationsInput, UserUncheckedCreateWithoutChatbotConversationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatbotConversationsInput
    upsert?: UserUpsertWithoutChatbotConversationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatbotConversationsInput, UserUpdateWithoutChatbotConversationsInput>, UserUncheckedUpdateWithoutChatbotConversationsInput>
  }

  export type UserCreateNestedOneWithoutCreatedExamsInput = {
    create?: XOR<UserCreateWithoutCreatedExamsInput, UserUncheckedCreateWithoutCreatedExamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedExamsInput
    connect?: UserWhereUniqueInput
  }

  export type ExamSubmissionCreateNestedManyWithoutExamInput = {
    create?: XOR<ExamSubmissionCreateWithoutExamInput, ExamSubmissionUncheckedCreateWithoutExamInput> | ExamSubmissionCreateWithoutExamInput[] | ExamSubmissionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutExamInput | ExamSubmissionCreateOrConnectWithoutExamInput[]
    createMany?: ExamSubmissionCreateManyExamInputEnvelope
    connect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
  }

  export type ExamQuestionCreateNestedManyWithoutExamInput = {
    create?: XOR<ExamQuestionCreateWithoutExamInput, ExamQuestionUncheckedCreateWithoutExamInput> | ExamQuestionCreateWithoutExamInput[] | ExamQuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamQuestionCreateOrConnectWithoutExamInput | ExamQuestionCreateOrConnectWithoutExamInput[]
    createMany?: ExamQuestionCreateManyExamInputEnvelope
    connect?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
  }

  export type ExamSubmissionUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<ExamSubmissionCreateWithoutExamInput, ExamSubmissionUncheckedCreateWithoutExamInput> | ExamSubmissionCreateWithoutExamInput[] | ExamSubmissionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutExamInput | ExamSubmissionCreateOrConnectWithoutExamInput[]
    createMany?: ExamSubmissionCreateManyExamInputEnvelope
    connect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
  }

  export type ExamQuestionUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<ExamQuestionCreateWithoutExamInput, ExamQuestionUncheckedCreateWithoutExamInput> | ExamQuestionCreateWithoutExamInput[] | ExamQuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamQuestionCreateOrConnectWithoutExamInput | ExamQuestionCreateOrConnectWithoutExamInput[]
    createMany?: ExamQuestionCreateManyExamInputEnvelope
    connect?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedExamsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedExamsInput, UserUncheckedCreateWithoutCreatedExamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedExamsInput
    upsert?: UserUpsertWithoutCreatedExamsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedExamsInput, UserUpdateWithoutCreatedExamsInput>, UserUncheckedUpdateWithoutCreatedExamsInput>
  }

  export type ExamSubmissionUpdateManyWithoutExamNestedInput = {
    create?: XOR<ExamSubmissionCreateWithoutExamInput, ExamSubmissionUncheckedCreateWithoutExamInput> | ExamSubmissionCreateWithoutExamInput[] | ExamSubmissionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutExamInput | ExamSubmissionCreateOrConnectWithoutExamInput[]
    upsert?: ExamSubmissionUpsertWithWhereUniqueWithoutExamInput | ExamSubmissionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: ExamSubmissionCreateManyExamInputEnvelope
    set?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    disconnect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    delete?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    connect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    update?: ExamSubmissionUpdateWithWhereUniqueWithoutExamInput | ExamSubmissionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: ExamSubmissionUpdateManyWithWhereWithoutExamInput | ExamSubmissionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: ExamSubmissionScalarWhereInput | ExamSubmissionScalarWhereInput[]
  }

  export type ExamQuestionUpdateManyWithoutExamNestedInput = {
    create?: XOR<ExamQuestionCreateWithoutExamInput, ExamQuestionUncheckedCreateWithoutExamInput> | ExamQuestionCreateWithoutExamInput[] | ExamQuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamQuestionCreateOrConnectWithoutExamInput | ExamQuestionCreateOrConnectWithoutExamInput[]
    upsert?: ExamQuestionUpsertWithWhereUniqueWithoutExamInput | ExamQuestionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: ExamQuestionCreateManyExamInputEnvelope
    set?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    disconnect?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    delete?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    connect?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    update?: ExamQuestionUpdateWithWhereUniqueWithoutExamInput | ExamQuestionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: ExamQuestionUpdateManyWithWhereWithoutExamInput | ExamQuestionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: ExamQuestionScalarWhereInput | ExamQuestionScalarWhereInput[]
  }

  export type ExamSubmissionUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<ExamSubmissionCreateWithoutExamInput, ExamSubmissionUncheckedCreateWithoutExamInput> | ExamSubmissionCreateWithoutExamInput[] | ExamSubmissionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamSubmissionCreateOrConnectWithoutExamInput | ExamSubmissionCreateOrConnectWithoutExamInput[]
    upsert?: ExamSubmissionUpsertWithWhereUniqueWithoutExamInput | ExamSubmissionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: ExamSubmissionCreateManyExamInputEnvelope
    set?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    disconnect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    delete?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    connect?: ExamSubmissionWhereUniqueInput | ExamSubmissionWhereUniqueInput[]
    update?: ExamSubmissionUpdateWithWhereUniqueWithoutExamInput | ExamSubmissionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: ExamSubmissionUpdateManyWithWhereWithoutExamInput | ExamSubmissionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: ExamSubmissionScalarWhereInput | ExamSubmissionScalarWhereInput[]
  }

  export type ExamQuestionUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<ExamQuestionCreateWithoutExamInput, ExamQuestionUncheckedCreateWithoutExamInput> | ExamQuestionCreateWithoutExamInput[] | ExamQuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamQuestionCreateOrConnectWithoutExamInput | ExamQuestionCreateOrConnectWithoutExamInput[]
    upsert?: ExamQuestionUpsertWithWhereUniqueWithoutExamInput | ExamQuestionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: ExamQuestionCreateManyExamInputEnvelope
    set?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    disconnect?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    delete?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    connect?: ExamQuestionWhereUniqueInput | ExamQuestionWhereUniqueInput[]
    update?: ExamQuestionUpdateWithWhereUniqueWithoutExamInput | ExamQuestionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: ExamQuestionUpdateManyWithWhereWithoutExamInput | ExamQuestionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: ExamQuestionScalarWhereInput | ExamQuestionScalarWhereInput[]
  }

  export type ExamCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutQuestionsInput
    connect?: ExamWhereUniqueInput
  }

  export type ExamUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutQuestionsInput
    upsert?: ExamUpsertWithoutQuestionsInput
    connect?: ExamWhereUniqueInput
    update?: XOR<XOR<ExamUpdateToOneWithWhereWithoutQuestionsInput, ExamUpdateWithoutQuestionsInput>, ExamUncheckedUpdateWithoutQuestionsInput>
  }

  export type ExamCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<ExamCreateWithoutSubmissionsInput, ExamUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutSubmissionsInput
    connect?: ExamWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutExamSubmissionsInput = {
    create?: XOR<UserCreateWithoutExamSubmissionsInput, UserUncheckedCreateWithoutExamSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExamSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExamUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<ExamCreateWithoutSubmissionsInput, ExamUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutSubmissionsInput
    upsert?: ExamUpsertWithoutSubmissionsInput
    connect?: ExamWhereUniqueInput
    update?: XOR<XOR<ExamUpdateToOneWithWhereWithoutSubmissionsInput, ExamUpdateWithoutSubmissionsInput>, ExamUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateOneRequiredWithoutExamSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutExamSubmissionsInput, UserUncheckedCreateWithoutExamSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExamSubmissionsInput
    upsert?: UserUpsertWithoutExamSubmissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExamSubmissionsInput, UserUpdateWithoutExamSubmissionsInput>, UserUncheckedUpdateWithoutExamSubmissionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type ProjectCreateWithoutParticipantsInput = {
    name: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    status: string
    googleEventId?: string | null
    tasks?: TaskCreateNestedManyWithoutProjectInput
    tutor?: UserCreateNestedOneWithoutTutorProjectsInput
  }

  export type ProjectUncheckedCreateWithoutParticipantsInput = {
    id?: number
    name: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    status: string
    googleEventId?: string | null
    tutorId?: number | null
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutParticipantsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutParticipantsInput, ProjectUncheckedCreateWithoutParticipantsInput>
  }

  export type TaskCreateWithoutResponsibleInput = {
    name: string
    description?: string | null
    dueDate?: Date | string | null
    priority: string
    status: string
    type?: string
    googleEventId?: string | null
    project?: ProjectCreateNestedOneWithoutTasksInput
    tutor?: UserCreateNestedOneWithoutTutoredTasksInput
    submissions?: SubmissionCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutResponsibleInput = {
    id?: number
    name: string
    description?: string | null
    dueDate?: Date | string | null
    priority: string
    status: string
    type?: string
    googleEventId?: string | null
    projectId?: number | null
    tutorId?: number | null
    submissions?: SubmissionUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutResponsibleInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutResponsibleInput, TaskUncheckedCreateWithoutResponsibleInput>
  }

  export type TaskCreateManyResponsibleInputEnvelope = {
    data: TaskCreateManyResponsibleInput | TaskCreateManyResponsibleInput[]
  }

  export type ProjectCreateWithoutTutorInput = {
    name: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    status: string
    googleEventId?: string | null
    tasks?: TaskCreateNestedManyWithoutProjectInput
    participants?: UserCreateNestedManyWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutTutorInput = {
    id?: number
    name: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    status: string
    googleEventId?: string | null
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
    participants?: UserUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type ProjectCreateOrConnectWithoutTutorInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTutorInput, ProjectUncheckedCreateWithoutTutorInput>
  }

  export type ProjectCreateManyTutorInputEnvelope = {
    data: ProjectCreateManyTutorInput | ProjectCreateManyTutorInput[]
  }

  export type TaskCreateWithoutTutorInput = {
    name: string
    description?: string | null
    dueDate?: Date | string | null
    priority: string
    status: string
    type?: string
    googleEventId?: string | null
    project?: ProjectCreateNestedOneWithoutTasksInput
    responsible: UserCreateNestedOneWithoutTasksInput
    submissions?: SubmissionCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutTutorInput = {
    id?: number
    name: string
    description?: string | null
    dueDate?: Date | string | null
    priority: string
    status: string
    type?: string
    googleEventId?: string | null
    projectId?: number | null
    responsibleId: number
    submissions?: SubmissionUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutTutorInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutTutorInput, TaskUncheckedCreateWithoutTutorInput>
  }

  export type TaskCreateManyTutorInputEnvelope = {
    data: TaskCreateManyTutorInput | TaskCreateManyTutorInput[]
  }

  export type ChatMessageCreateWithoutUserInput = {
    message: string
    timestamp?: Date | string
    isPrivate?: boolean
    recipient?: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutUserInput = {
    id?: number
    message: string
    timestamp?: Date | string
    recipientId?: number | null
    isPrivate?: boolean
  }

  export type ChatMessageCreateOrConnectWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageCreateManyUserInputEnvelope = {
    data: ChatMessageCreateManyUserInput | ChatMessageCreateManyUserInput[]
  }

  export type ChatMessageCreateWithoutRecipientInput = {
    message: string
    timestamp?: Date | string
    isPrivate?: boolean
    user: UserCreateNestedOneWithoutChatMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutRecipientInput = {
    id?: number
    userId: number
    message: string
    timestamp?: Date | string
    isPrivate?: boolean
  }

  export type ChatMessageCreateOrConnectWithoutRecipientInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutRecipientInput, ChatMessageUncheckedCreateWithoutRecipientInput>
  }

  export type ChatMessageCreateManyRecipientInputEnvelope = {
    data: ChatMessageCreateManyRecipientInput | ChatMessageCreateManyRecipientInput[]
  }

  export type NotificationCreateWithoutUserInput = {
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
    relatedId?: number | null
    relatedType?: string | null
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
    relatedId?: number | null
    relatedType?: string | null
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
  }

  export type ReminderCreateWithoutUserInput = {
    title: string
    description?: string | null
    scheduledAt: Date | string
    isActive?: boolean
    createdAt?: Date | string
    relatedId?: number | null
    relatedType?: string | null
  }

  export type ReminderUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description?: string | null
    scheduledAt: Date | string
    isActive?: boolean
    createdAt?: Date | string
    relatedId?: number | null
    relatedType?: string | null
  }

  export type ReminderCreateOrConnectWithoutUserInput = {
    where: ReminderWhereUniqueInput
    create: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput>
  }

  export type ReminderCreateManyUserInputEnvelope = {
    data: ReminderCreateManyUserInput | ReminderCreateManyUserInput[]
  }

  export type SubmissionCreateWithoutStudentInput = {
    submittedAt?: Date | string
    content?: string | null
    grade?: number | null
    feedback?: string | null
    gradedAt?: Date | string | null
    status?: string
    task: TaskCreateNestedOneWithoutSubmissionsInput
    gradedByUser?: UserCreateNestedOneWithoutTutorGradingsInput
    files?: FileCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutStudentInput = {
    id?: number
    taskId: number
    submittedAt?: Date | string
    content?: string | null
    grade?: number | null
    feedback?: string | null
    gradedAt?: Date | string | null
    gradedBy?: number | null
    status?: string
    files?: FileUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutStudentInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput>
  }

  export type SubmissionCreateManyStudentInputEnvelope = {
    data: SubmissionCreateManyStudentInput | SubmissionCreateManyStudentInput[]
  }

  export type SubmissionCreateWithoutGradedByUserInput = {
    submittedAt?: Date | string
    content?: string | null
    grade?: number | null
    feedback?: string | null
    gradedAt?: Date | string | null
    status?: string
    task: TaskCreateNestedOneWithoutSubmissionsInput
    student: UserCreateNestedOneWithoutStudentSubmissionsInput
    files?: FileCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutGradedByUserInput = {
    id?: number
    taskId: number
    studentId: number
    submittedAt?: Date | string
    content?: string | null
    grade?: number | null
    feedback?: string | null
    gradedAt?: Date | string | null
    status?: string
    files?: FileUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutGradedByUserInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutGradedByUserInput, SubmissionUncheckedCreateWithoutGradedByUserInput>
  }

  export type SubmissionCreateManyGradedByUserInputEnvelope = {
    data: SubmissionCreateManyGradedByUserInput | SubmissionCreateManyGradedByUserInput[]
  }

  export type ActivityLogCreateWithoutUserInput = {
    action: string
    entityType: string
    entityId: number
    details?: string | null
    oldValues?: string | null
    newValues?: string | null
    timestamp?: Date | string
  }

  export type ActivityLogUncheckedCreateWithoutUserInput = {
    id?: number
    action: string
    entityType: string
    entityId: number
    details?: string | null
    oldValues?: string | null
    newValues?: string | null
    timestamp?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogCreateManyUserInputEnvelope = {
    data: ActivityLogCreateManyUserInput | ActivityLogCreateManyUserInput[]
  }

  export type ExamCreateWithoutCreatedByUserInput = {
    title: string
    topics: string
    numQuestions: number
    timeLimit: number
    generatedQuestions: string
    assignedTo: string
    status?: string
    createdAt?: Date | string
    submissions?: ExamSubmissionCreateNestedManyWithoutExamInput
    questions?: ExamQuestionCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutCreatedByUserInput = {
    id?: number
    title: string
    topics: string
    numQuestions: number
    timeLimit: number
    generatedQuestions: string
    assignedTo: string
    status?: string
    createdAt?: Date | string
    submissions?: ExamSubmissionUncheckedCreateNestedManyWithoutExamInput
    questions?: ExamQuestionUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutCreatedByUserInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutCreatedByUserInput, ExamUncheckedCreateWithoutCreatedByUserInput>
  }

  export type ExamCreateManyCreatedByUserInputEnvelope = {
    data: ExamCreateManyCreatedByUserInput | ExamCreateManyCreatedByUserInput[]
  }

  export type ExamSubmissionCreateWithoutStudentInput = {
    answers: string
    score: number
    submittedAt?: Date | string
    review?: string | null
    exam: ExamCreateNestedOneWithoutSubmissionsInput
  }

  export type ExamSubmissionUncheckedCreateWithoutStudentInput = {
    id?: number
    examId: number
    answers: string
    score: number
    submittedAt?: Date | string
    review?: string | null
  }

  export type ExamSubmissionCreateOrConnectWithoutStudentInput = {
    where: ExamSubmissionWhereUniqueInput
    create: XOR<ExamSubmissionCreateWithoutStudentInput, ExamSubmissionUncheckedCreateWithoutStudentInput>
  }

  export type ExamSubmissionCreateManyStudentInputEnvelope = {
    data: ExamSubmissionCreateManyStudentInput | ExamSubmissionCreateManyStudentInput[]
  }

  export type ChatbotConversationCreateWithoutUserInput = {
    title?: string | null
    messages: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatbotConversationUncheckedCreateWithoutUserInput = {
    id?: number
    title?: string | null
    messages: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatbotConversationCreateOrConnectWithoutUserInput = {
    where: ChatbotConversationWhereUniqueInput
    create: XOR<ChatbotConversationCreateWithoutUserInput, ChatbotConversationUncheckedCreateWithoutUserInput>
  }

  export type ChatbotConversationCreateManyUserInputEnvelope = {
    data: ChatbotConversationCreateManyUserInput | ChatbotConversationCreateManyUserInput[]
  }

  export type ProjectUpsertWithWhereUniqueWithoutParticipantsInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutParticipantsInput, ProjectUncheckedUpdateWithoutParticipantsInput>
    create: XOR<ProjectCreateWithoutParticipantsInput, ProjectUncheckedCreateWithoutParticipantsInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutParticipantsInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutParticipantsInput, ProjectUncheckedUpdateWithoutParticipantsInput>
  }

  export type ProjectUpdateManyWithWhereWithoutParticipantsInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutParticipantsInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    status?: StringFilter<"Project"> | string
    googleEventId?: StringNullableFilter<"Project"> | string | null
    tutorId?: IntNullableFilter<"Project"> | number | null
  }

  export type TaskUpsertWithWhereUniqueWithoutResponsibleInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutResponsibleInput, TaskUncheckedUpdateWithoutResponsibleInput>
    create: XOR<TaskCreateWithoutResponsibleInput, TaskUncheckedCreateWithoutResponsibleInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutResponsibleInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutResponsibleInput, TaskUncheckedUpdateWithoutResponsibleInput>
  }

  export type TaskUpdateManyWithWhereWithoutResponsibleInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutResponsibleInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: IntFilter<"Task"> | number
    name?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    dueDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    priority?: StringFilter<"Task"> | string
    status?: StringFilter<"Task"> | string
    type?: StringFilter<"Task"> | string
    googleEventId?: StringNullableFilter<"Task"> | string | null
    projectId?: IntNullableFilter<"Task"> | number | null
    responsibleId?: IntFilter<"Task"> | number
    tutorId?: IntNullableFilter<"Task"> | number | null
  }

  export type ProjectUpsertWithWhereUniqueWithoutTutorInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutTutorInput, ProjectUncheckedUpdateWithoutTutorInput>
    create: XOR<ProjectCreateWithoutTutorInput, ProjectUncheckedCreateWithoutTutorInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutTutorInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutTutorInput, ProjectUncheckedUpdateWithoutTutorInput>
  }

  export type ProjectUpdateManyWithWhereWithoutTutorInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutTutorInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutTutorInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutTutorInput, TaskUncheckedUpdateWithoutTutorInput>
    create: XOR<TaskCreateWithoutTutorInput, TaskUncheckedCreateWithoutTutorInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutTutorInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutTutorInput, TaskUncheckedUpdateWithoutTutorInput>
  }

  export type TaskUpdateManyWithWhereWithoutTutorInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutTutorInput>
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutUserInput, ChatMessageUncheckedUpdateWithoutUserInput>
    create: XOR<ChatMessageCreateWithoutUserInput, ChatMessageUncheckedCreateWithoutUserInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutUserInput, ChatMessageUncheckedUpdateWithoutUserInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutUserInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: IntFilter<"ChatMessage"> | number
    userId?: IntFilter<"ChatMessage"> | number
    message?: StringFilter<"ChatMessage"> | string
    timestamp?: DateTimeFilter<"ChatMessage"> | Date | string
    recipientId?: IntNullableFilter<"ChatMessage"> | number | null
    isPrivate?: BoolFilter<"ChatMessage"> | boolean
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutRecipientInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutRecipientInput, ChatMessageUncheckedUpdateWithoutRecipientInput>
    create: XOR<ChatMessageCreateWithoutRecipientInput, ChatMessageUncheckedCreateWithoutRecipientInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutRecipientInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutRecipientInput, ChatMessageUncheckedUpdateWithoutRecipientInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutRecipientInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutRecipientInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    relatedId?: IntNullableFilter<"Notification"> | number | null
    relatedType?: StringNullableFilter<"Notification"> | string | null
  }

  export type ReminderUpsertWithWhereUniqueWithoutUserInput = {
    where: ReminderWhereUniqueInput
    update: XOR<ReminderUpdateWithoutUserInput, ReminderUncheckedUpdateWithoutUserInput>
    create: XOR<ReminderCreateWithoutUserInput, ReminderUncheckedCreateWithoutUserInput>
  }

  export type ReminderUpdateWithWhereUniqueWithoutUserInput = {
    where: ReminderWhereUniqueInput
    data: XOR<ReminderUpdateWithoutUserInput, ReminderUncheckedUpdateWithoutUserInput>
  }

  export type ReminderUpdateManyWithWhereWithoutUserInput = {
    where: ReminderScalarWhereInput
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyWithoutUserInput>
  }

  export type ReminderScalarWhereInput = {
    AND?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
    OR?: ReminderScalarWhereInput[]
    NOT?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
    id?: IntFilter<"Reminder"> | number
    userId?: IntFilter<"Reminder"> | number
    title?: StringFilter<"Reminder"> | string
    description?: StringNullableFilter<"Reminder"> | string | null
    scheduledAt?: DateTimeFilter<"Reminder"> | Date | string
    isActive?: BoolFilter<"Reminder"> | boolean
    createdAt?: DateTimeFilter<"Reminder"> | Date | string
    relatedId?: IntNullableFilter<"Reminder"> | number | null
    relatedType?: StringNullableFilter<"Reminder"> | string | null
  }

  export type SubmissionUpsertWithWhereUniqueWithoutStudentInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutStudentInput, SubmissionUncheckedUpdateWithoutStudentInput>
    create: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutStudentInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutStudentInput, SubmissionUncheckedUpdateWithoutStudentInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutStudentInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutStudentInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: IntFilter<"Submission"> | number
    taskId?: IntFilter<"Submission"> | number
    studentId?: IntFilter<"Submission"> | number
    submittedAt?: DateTimeFilter<"Submission"> | Date | string
    content?: StringNullableFilter<"Submission"> | string | null
    grade?: FloatNullableFilter<"Submission"> | number | null
    feedback?: StringNullableFilter<"Submission"> | string | null
    gradedAt?: DateTimeNullableFilter<"Submission"> | Date | string | null
    gradedBy?: IntNullableFilter<"Submission"> | number | null
    status?: StringFilter<"Submission"> | string
  }

  export type SubmissionUpsertWithWhereUniqueWithoutGradedByUserInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutGradedByUserInput, SubmissionUncheckedUpdateWithoutGradedByUserInput>
    create: XOR<SubmissionCreateWithoutGradedByUserInput, SubmissionUncheckedCreateWithoutGradedByUserInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutGradedByUserInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutGradedByUserInput, SubmissionUncheckedUpdateWithoutGradedByUserInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutGradedByUserInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutGradedByUserInput>
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutUserInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: IntFilter<"ActivityLog"> | number
    userId?: IntFilter<"ActivityLog"> | number
    action?: StringFilter<"ActivityLog"> | string
    entityType?: StringFilter<"ActivityLog"> | string
    entityId?: IntFilter<"ActivityLog"> | number
    details?: StringNullableFilter<"ActivityLog"> | string | null
    oldValues?: StringNullableFilter<"ActivityLog"> | string | null
    newValues?: StringNullableFilter<"ActivityLog"> | string | null
    timestamp?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type ExamUpsertWithWhereUniqueWithoutCreatedByUserInput = {
    where: ExamWhereUniqueInput
    update: XOR<ExamUpdateWithoutCreatedByUserInput, ExamUncheckedUpdateWithoutCreatedByUserInput>
    create: XOR<ExamCreateWithoutCreatedByUserInput, ExamUncheckedCreateWithoutCreatedByUserInput>
  }

  export type ExamUpdateWithWhereUniqueWithoutCreatedByUserInput = {
    where: ExamWhereUniqueInput
    data: XOR<ExamUpdateWithoutCreatedByUserInput, ExamUncheckedUpdateWithoutCreatedByUserInput>
  }

  export type ExamUpdateManyWithWhereWithoutCreatedByUserInput = {
    where: ExamScalarWhereInput
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyWithoutCreatedByUserInput>
  }

  export type ExamScalarWhereInput = {
    AND?: ExamScalarWhereInput | ExamScalarWhereInput[]
    OR?: ExamScalarWhereInput[]
    NOT?: ExamScalarWhereInput | ExamScalarWhereInput[]
    id?: IntFilter<"Exam"> | number
    title?: StringFilter<"Exam"> | string
    topics?: StringFilter<"Exam"> | string
    numQuestions?: IntFilter<"Exam"> | number
    timeLimit?: IntFilter<"Exam"> | number
    generatedQuestions?: StringFilter<"Exam"> | string
    createdBy?: IntFilter<"Exam"> | number
    assignedTo?: StringFilter<"Exam"> | string
    status?: StringFilter<"Exam"> | string
    createdAt?: DateTimeFilter<"Exam"> | Date | string
  }

  export type ExamSubmissionUpsertWithWhereUniqueWithoutStudentInput = {
    where: ExamSubmissionWhereUniqueInput
    update: XOR<ExamSubmissionUpdateWithoutStudentInput, ExamSubmissionUncheckedUpdateWithoutStudentInput>
    create: XOR<ExamSubmissionCreateWithoutStudentInput, ExamSubmissionUncheckedCreateWithoutStudentInput>
  }

  export type ExamSubmissionUpdateWithWhereUniqueWithoutStudentInput = {
    where: ExamSubmissionWhereUniqueInput
    data: XOR<ExamSubmissionUpdateWithoutStudentInput, ExamSubmissionUncheckedUpdateWithoutStudentInput>
  }

  export type ExamSubmissionUpdateManyWithWhereWithoutStudentInput = {
    where: ExamSubmissionScalarWhereInput
    data: XOR<ExamSubmissionUpdateManyMutationInput, ExamSubmissionUncheckedUpdateManyWithoutStudentInput>
  }

  export type ExamSubmissionScalarWhereInput = {
    AND?: ExamSubmissionScalarWhereInput | ExamSubmissionScalarWhereInput[]
    OR?: ExamSubmissionScalarWhereInput[]
    NOT?: ExamSubmissionScalarWhereInput | ExamSubmissionScalarWhereInput[]
    id?: IntFilter<"ExamSubmission"> | number
    examId?: IntFilter<"ExamSubmission"> | number
    studentId?: IntFilter<"ExamSubmission"> | number
    answers?: StringFilter<"ExamSubmission"> | string
    score?: FloatFilter<"ExamSubmission"> | number
    submittedAt?: DateTimeFilter<"ExamSubmission"> | Date | string
    review?: StringNullableFilter<"ExamSubmission"> | string | null
  }

  export type ChatbotConversationUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatbotConversationWhereUniqueInput
    update: XOR<ChatbotConversationUpdateWithoutUserInput, ChatbotConversationUncheckedUpdateWithoutUserInput>
    create: XOR<ChatbotConversationCreateWithoutUserInput, ChatbotConversationUncheckedCreateWithoutUserInput>
  }

  export type ChatbotConversationUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatbotConversationWhereUniqueInput
    data: XOR<ChatbotConversationUpdateWithoutUserInput, ChatbotConversationUncheckedUpdateWithoutUserInput>
  }

  export type ChatbotConversationUpdateManyWithWhereWithoutUserInput = {
    where: ChatbotConversationScalarWhereInput
    data: XOR<ChatbotConversationUpdateManyMutationInput, ChatbotConversationUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatbotConversationScalarWhereInput = {
    AND?: ChatbotConversationScalarWhereInput | ChatbotConversationScalarWhereInput[]
    OR?: ChatbotConversationScalarWhereInput[]
    NOT?: ChatbotConversationScalarWhereInput | ChatbotConversationScalarWhereInput[]
    id?: IntFilter<"ChatbotConversation"> | number
    userId?: IntFilter<"ChatbotConversation"> | number
    title?: StringNullableFilter<"ChatbotConversation"> | string | null
    messages?: StringFilter<"ChatbotConversation"> | string
    createdAt?: DateTimeFilter<"ChatbotConversation"> | Date | string
    updatedAt?: DateTimeFilter<"ChatbotConversation"> | Date | string
  }

  export type TaskCreateWithoutProjectInput = {
    name: string
    description?: string | null
    dueDate?: Date | string | null
    priority: string
    status: string
    type?: string
    googleEventId?: string | null
    responsible: UserCreateNestedOneWithoutTasksInput
    tutor?: UserCreateNestedOneWithoutTutoredTasksInput
    submissions?: SubmissionCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
    description?: string | null
    dueDate?: Date | string | null
    priority: string
    status: string
    type?: string
    googleEventId?: string | null
    responsibleId: number
    tutorId?: number | null
    submissions?: SubmissionUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutProjectInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskCreateManyProjectInputEnvelope = {
    data: TaskCreateManyProjectInput | TaskCreateManyProjectInput[]
  }

  export type UserCreateWithoutProjectsInput = {
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    tasks?: TaskCreateNestedManyWithoutResponsibleInput
    tutorProjects?: ProjectCreateNestedManyWithoutTutorInput
    tutoredTasks?: TaskCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutRecipientInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionCreateNestedManyWithoutStudentInput
    tutorGradings?: SubmissionCreateNestedManyWithoutGradedByUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    createdExams?: ExamCreateNestedManyWithoutCreatedByUserInput
    examSubmissions?: ExamSubmissionCreateNestedManyWithoutStudentInput
    chatbotConversations?: ChatbotConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: number
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    tasks?: TaskUncheckedCreateNestedManyWithoutResponsibleInput
    tutorProjects?: ProjectUncheckedCreateNestedManyWithoutTutorInput
    tutoredTasks?: TaskUncheckedCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutRecipientInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
    tutorGradings?: SubmissionUncheckedCreateNestedManyWithoutGradedByUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    createdExams?: ExamUncheckedCreateNestedManyWithoutCreatedByUserInput
    examSubmissions?: ExamSubmissionUncheckedCreateNestedManyWithoutStudentInput
    chatbotConversations?: ChatbotConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type UserCreateWithoutTutorProjectsInput = {
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectCreateNestedManyWithoutParticipantsInput
    tasks?: TaskCreateNestedManyWithoutResponsibleInput
    tutoredTasks?: TaskCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutRecipientInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionCreateNestedManyWithoutStudentInput
    tutorGradings?: SubmissionCreateNestedManyWithoutGradedByUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    createdExams?: ExamCreateNestedManyWithoutCreatedByUserInput
    examSubmissions?: ExamSubmissionCreateNestedManyWithoutStudentInput
    chatbotConversations?: ChatbotConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTutorProjectsInput = {
    id?: number
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutParticipantsInput
    tasks?: TaskUncheckedCreateNestedManyWithoutResponsibleInput
    tutoredTasks?: TaskUncheckedCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutRecipientInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
    tutorGradings?: SubmissionUncheckedCreateNestedManyWithoutGradedByUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    createdExams?: ExamUncheckedCreateNestedManyWithoutCreatedByUserInput
    examSubmissions?: ExamSubmissionUncheckedCreateNestedManyWithoutStudentInput
    chatbotConversations?: ChatbotConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTutorProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTutorProjectsInput, UserUncheckedCreateWithoutTutorProjectsInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
  }

  export type TaskUpdateManyWithWhereWithoutProjectInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutProjectInput>
  }

  export type UserUpsertWithWhereUniqueWithoutProjectsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutProjectsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateManyWithWhereWithoutProjectsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutProjectsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    profileComplete?: BoolFilter<"User"> | boolean
    status?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    googleId?: StringNullableFilter<"User"> | string | null
    googleAccessToken?: StringNullableFilter<"User"> | string | null
    googleRefreshToken?: StringNullableFilter<"User"> | string | null
    googleTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    calendarId?: StringNullableFilter<"User"> | string | null
  }

  export type UserUpsertWithoutTutorProjectsInput = {
    update: XOR<UserUpdateWithoutTutorProjectsInput, UserUncheckedUpdateWithoutTutorProjectsInput>
    create: XOR<UserCreateWithoutTutorProjectsInput, UserUncheckedCreateWithoutTutorProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTutorProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTutorProjectsInput, UserUncheckedUpdateWithoutTutorProjectsInput>
  }

  export type UserUpdateWithoutTutorProjectsInput = {
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUpdateManyWithoutParticipantsNestedInput
    tasks?: TaskUpdateManyWithoutResponsibleNestedInput
    tutoredTasks?: TaskUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutRecipientNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUpdateManyWithoutStudentNestedInput
    tutorGradings?: SubmissionUpdateManyWithoutGradedByUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    createdExams?: ExamUpdateManyWithoutCreatedByUserNestedInput
    examSubmissions?: ExamSubmissionUpdateManyWithoutStudentNestedInput
    chatbotConversations?: ChatbotConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTutorProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUncheckedUpdateManyWithoutParticipantsNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutResponsibleNestedInput
    tutoredTasks?: TaskUncheckedUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutRecipientNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
    tutorGradings?: SubmissionUncheckedUpdateManyWithoutGradedByUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    createdExams?: ExamUncheckedUpdateManyWithoutCreatedByUserNestedInput
    examSubmissions?: ExamSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    chatbotConversations?: ChatbotConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectCreateWithoutTasksInput = {
    name: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    status: string
    googleEventId?: string | null
    participants?: UserCreateNestedManyWithoutProjectsInput
    tutor?: UserCreateNestedOneWithoutTutorProjectsInput
  }

  export type ProjectUncheckedCreateWithoutTasksInput = {
    id?: number
    name: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    status: string
    googleEventId?: string | null
    tutorId?: number | null
    participants?: UserUncheckedCreateNestedManyWithoutProjectsInput
  }

  export type ProjectCreateOrConnectWithoutTasksInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
  }

  export type UserCreateWithoutTasksInput = {
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectCreateNestedManyWithoutParticipantsInput
    tutorProjects?: ProjectCreateNestedManyWithoutTutorInput
    tutoredTasks?: TaskCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutRecipientInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionCreateNestedManyWithoutStudentInput
    tutorGradings?: SubmissionCreateNestedManyWithoutGradedByUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    createdExams?: ExamCreateNestedManyWithoutCreatedByUserInput
    examSubmissions?: ExamSubmissionCreateNestedManyWithoutStudentInput
    chatbotConversations?: ChatbotConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTasksInput = {
    id?: number
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutParticipantsInput
    tutorProjects?: ProjectUncheckedCreateNestedManyWithoutTutorInput
    tutoredTasks?: TaskUncheckedCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutRecipientInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
    tutorGradings?: SubmissionUncheckedCreateNestedManyWithoutGradedByUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    createdExams?: ExamUncheckedCreateNestedManyWithoutCreatedByUserInput
    examSubmissions?: ExamSubmissionUncheckedCreateNestedManyWithoutStudentInput
    chatbotConversations?: ChatbotConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
  }

  export type UserCreateWithoutTutoredTasksInput = {
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectCreateNestedManyWithoutParticipantsInput
    tasks?: TaskCreateNestedManyWithoutResponsibleInput
    tutorProjects?: ProjectCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutRecipientInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionCreateNestedManyWithoutStudentInput
    tutorGradings?: SubmissionCreateNestedManyWithoutGradedByUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    createdExams?: ExamCreateNestedManyWithoutCreatedByUserInput
    examSubmissions?: ExamSubmissionCreateNestedManyWithoutStudentInput
    chatbotConversations?: ChatbotConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTutoredTasksInput = {
    id?: number
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutParticipantsInput
    tasks?: TaskUncheckedCreateNestedManyWithoutResponsibleInput
    tutorProjects?: ProjectUncheckedCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutRecipientInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
    tutorGradings?: SubmissionUncheckedCreateNestedManyWithoutGradedByUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    createdExams?: ExamUncheckedCreateNestedManyWithoutCreatedByUserInput
    examSubmissions?: ExamSubmissionUncheckedCreateNestedManyWithoutStudentInput
    chatbotConversations?: ChatbotConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTutoredTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTutoredTasksInput, UserUncheckedCreateWithoutTutoredTasksInput>
  }

  export type SubmissionCreateWithoutTaskInput = {
    submittedAt?: Date | string
    content?: string | null
    grade?: number | null
    feedback?: string | null
    gradedAt?: Date | string | null
    status?: string
    student: UserCreateNestedOneWithoutStudentSubmissionsInput
    gradedByUser?: UserCreateNestedOneWithoutTutorGradingsInput
    files?: FileCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutTaskInput = {
    id?: number
    studentId: number
    submittedAt?: Date | string
    content?: string | null
    grade?: number | null
    feedback?: string | null
    gradedAt?: Date | string | null
    gradedBy?: number | null
    status?: string
    files?: FileUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutTaskInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutTaskInput, SubmissionUncheckedCreateWithoutTaskInput>
  }

  export type SubmissionCreateManyTaskInputEnvelope = {
    data: SubmissionCreateManyTaskInput | SubmissionCreateManyTaskInput[]
  }

  export type ProjectUpsertWithoutTasksInput = {
    update: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTasksInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectUpdateWithoutTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    participants?: UserUpdateManyWithoutProjectsNestedInput
    tutor?: UserUpdateOneWithoutTutorProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    tutorId?: NullableIntFieldUpdateOperationsInput | number | null
    participants?: UserUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type UserUpsertWithoutTasksInput = {
    update: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateWithoutTasksInput = {
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUpdateManyWithoutParticipantsNestedInput
    tutorProjects?: ProjectUpdateManyWithoutTutorNestedInput
    tutoredTasks?: TaskUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutRecipientNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUpdateManyWithoutStudentNestedInput
    tutorGradings?: SubmissionUpdateManyWithoutGradedByUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    createdExams?: ExamUpdateManyWithoutCreatedByUserNestedInput
    examSubmissions?: ExamSubmissionUpdateManyWithoutStudentNestedInput
    chatbotConversations?: ChatbotConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUncheckedUpdateManyWithoutParticipantsNestedInput
    tutorProjects?: ProjectUncheckedUpdateManyWithoutTutorNestedInput
    tutoredTasks?: TaskUncheckedUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutRecipientNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
    tutorGradings?: SubmissionUncheckedUpdateManyWithoutGradedByUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    createdExams?: ExamUncheckedUpdateManyWithoutCreatedByUserNestedInput
    examSubmissions?: ExamSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    chatbotConversations?: ChatbotConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutTutoredTasksInput = {
    update: XOR<UserUpdateWithoutTutoredTasksInput, UserUncheckedUpdateWithoutTutoredTasksInput>
    create: XOR<UserCreateWithoutTutoredTasksInput, UserUncheckedCreateWithoutTutoredTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTutoredTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTutoredTasksInput, UserUncheckedUpdateWithoutTutoredTasksInput>
  }

  export type UserUpdateWithoutTutoredTasksInput = {
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUpdateManyWithoutParticipantsNestedInput
    tasks?: TaskUpdateManyWithoutResponsibleNestedInput
    tutorProjects?: ProjectUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutRecipientNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUpdateManyWithoutStudentNestedInput
    tutorGradings?: SubmissionUpdateManyWithoutGradedByUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    createdExams?: ExamUpdateManyWithoutCreatedByUserNestedInput
    examSubmissions?: ExamSubmissionUpdateManyWithoutStudentNestedInput
    chatbotConversations?: ChatbotConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTutoredTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUncheckedUpdateManyWithoutParticipantsNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutResponsibleNestedInput
    tutorProjects?: ProjectUncheckedUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutRecipientNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
    tutorGradings?: SubmissionUncheckedUpdateManyWithoutGradedByUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    createdExams?: ExamUncheckedUpdateManyWithoutCreatedByUserNestedInput
    examSubmissions?: ExamSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    chatbotConversations?: ChatbotConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubmissionUpsertWithWhereUniqueWithoutTaskInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutTaskInput, SubmissionUncheckedUpdateWithoutTaskInput>
    create: XOR<SubmissionCreateWithoutTaskInput, SubmissionUncheckedCreateWithoutTaskInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutTaskInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutTaskInput, SubmissionUncheckedUpdateWithoutTaskInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutTaskInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutTaskInput>
  }

  export type UserCreateWithoutChatMessagesInput = {
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectCreateNestedManyWithoutParticipantsInput
    tasks?: TaskCreateNestedManyWithoutResponsibleInput
    tutorProjects?: ProjectCreateNestedManyWithoutTutorInput
    tutoredTasks?: TaskCreateNestedManyWithoutTutorInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutRecipientInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionCreateNestedManyWithoutStudentInput
    tutorGradings?: SubmissionCreateNestedManyWithoutGradedByUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    createdExams?: ExamCreateNestedManyWithoutCreatedByUserInput
    examSubmissions?: ExamSubmissionCreateNestedManyWithoutStudentInput
    chatbotConversations?: ChatbotConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatMessagesInput = {
    id?: number
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutParticipantsInput
    tasks?: TaskUncheckedCreateNestedManyWithoutResponsibleInput
    tutorProjects?: ProjectUncheckedCreateNestedManyWithoutTutorInput
    tutoredTasks?: TaskUncheckedCreateNestedManyWithoutTutorInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutRecipientInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
    tutorGradings?: SubmissionUncheckedCreateNestedManyWithoutGradedByUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    createdExams?: ExamUncheckedCreateNestedManyWithoutCreatedByUserInput
    examSubmissions?: ExamSubmissionUncheckedCreateNestedManyWithoutStudentInput
    chatbotConversations?: ChatbotConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
  }

  export type UserCreateWithoutReceivedMessagesInput = {
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectCreateNestedManyWithoutParticipantsInput
    tasks?: TaskCreateNestedManyWithoutResponsibleInput
    tutorProjects?: ProjectCreateNestedManyWithoutTutorInput
    tutoredTasks?: TaskCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionCreateNestedManyWithoutStudentInput
    tutorGradings?: SubmissionCreateNestedManyWithoutGradedByUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    createdExams?: ExamCreateNestedManyWithoutCreatedByUserInput
    examSubmissions?: ExamSubmissionCreateNestedManyWithoutStudentInput
    chatbotConversations?: ChatbotConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedMessagesInput = {
    id?: number
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutParticipantsInput
    tasks?: TaskUncheckedCreateNestedManyWithoutResponsibleInput
    tutorProjects?: ProjectUncheckedCreateNestedManyWithoutTutorInput
    tutoredTasks?: TaskUncheckedCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
    tutorGradings?: SubmissionUncheckedCreateNestedManyWithoutGradedByUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    createdExams?: ExamUncheckedCreateNestedManyWithoutCreatedByUserInput
    examSubmissions?: ExamSubmissionUncheckedCreateNestedManyWithoutStudentInput
    chatbotConversations?: ChatbotConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type UserUpsertWithoutChatMessagesInput = {
    update: XOR<UserUpdateWithoutChatMessagesInput, UserUncheckedUpdateWithoutChatMessagesInput>
    create: XOR<UserCreateWithoutChatMessagesInput, UserUncheckedCreateWithoutChatMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatMessagesInput, UserUncheckedUpdateWithoutChatMessagesInput>
  }

  export type UserUpdateWithoutChatMessagesInput = {
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUpdateManyWithoutParticipantsNestedInput
    tasks?: TaskUpdateManyWithoutResponsibleNestedInput
    tutorProjects?: ProjectUpdateManyWithoutTutorNestedInput
    tutoredTasks?: TaskUpdateManyWithoutTutorNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutRecipientNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUpdateManyWithoutStudentNestedInput
    tutorGradings?: SubmissionUpdateManyWithoutGradedByUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    createdExams?: ExamUpdateManyWithoutCreatedByUserNestedInput
    examSubmissions?: ExamSubmissionUpdateManyWithoutStudentNestedInput
    chatbotConversations?: ChatbotConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUncheckedUpdateManyWithoutParticipantsNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutResponsibleNestedInput
    tutorProjects?: ProjectUncheckedUpdateManyWithoutTutorNestedInput
    tutoredTasks?: TaskUncheckedUpdateManyWithoutTutorNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutRecipientNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
    tutorGradings?: SubmissionUncheckedUpdateManyWithoutGradedByUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    createdExams?: ExamUncheckedUpdateManyWithoutCreatedByUserNestedInput
    examSubmissions?: ExamSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    chatbotConversations?: ChatbotConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserUpdateWithoutReceivedMessagesInput = {
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUpdateManyWithoutParticipantsNestedInput
    tasks?: TaskUpdateManyWithoutResponsibleNestedInput
    tutorProjects?: ProjectUpdateManyWithoutTutorNestedInput
    tutoredTasks?: TaskUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUpdateManyWithoutStudentNestedInput
    tutorGradings?: SubmissionUpdateManyWithoutGradedByUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    createdExams?: ExamUpdateManyWithoutCreatedByUserNestedInput
    examSubmissions?: ExamSubmissionUpdateManyWithoutStudentNestedInput
    chatbotConversations?: ChatbotConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUncheckedUpdateManyWithoutParticipantsNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutResponsibleNestedInput
    tutorProjects?: ProjectUncheckedUpdateManyWithoutTutorNestedInput
    tutoredTasks?: TaskUncheckedUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
    tutorGradings?: SubmissionUncheckedUpdateManyWithoutGradedByUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    createdExams?: ExamUncheckedUpdateManyWithoutCreatedByUserNestedInput
    examSubmissions?: ExamSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    chatbotConversations?: ChatbotConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectCreateNestedManyWithoutParticipantsInput
    tasks?: TaskCreateNestedManyWithoutResponsibleInput
    tutorProjects?: ProjectCreateNestedManyWithoutTutorInput
    tutoredTasks?: TaskCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutRecipientInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionCreateNestedManyWithoutStudentInput
    tutorGradings?: SubmissionCreateNestedManyWithoutGradedByUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    createdExams?: ExamCreateNestedManyWithoutCreatedByUserInput
    examSubmissions?: ExamSubmissionCreateNestedManyWithoutStudentInput
    chatbotConversations?: ChatbotConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutParticipantsInput
    tasks?: TaskUncheckedCreateNestedManyWithoutResponsibleInput
    tutorProjects?: ProjectUncheckedCreateNestedManyWithoutTutorInput
    tutoredTasks?: TaskUncheckedCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutRecipientInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
    tutorGradings?: SubmissionUncheckedCreateNestedManyWithoutGradedByUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    createdExams?: ExamUncheckedCreateNestedManyWithoutCreatedByUserInput
    examSubmissions?: ExamSubmissionUncheckedCreateNestedManyWithoutStudentInput
    chatbotConversations?: ChatbotConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUpdateManyWithoutParticipantsNestedInput
    tasks?: TaskUpdateManyWithoutResponsibleNestedInput
    tutorProjects?: ProjectUpdateManyWithoutTutorNestedInput
    tutoredTasks?: TaskUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutRecipientNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUpdateManyWithoutStudentNestedInput
    tutorGradings?: SubmissionUpdateManyWithoutGradedByUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    createdExams?: ExamUpdateManyWithoutCreatedByUserNestedInput
    examSubmissions?: ExamSubmissionUpdateManyWithoutStudentNestedInput
    chatbotConversations?: ChatbotConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUncheckedUpdateManyWithoutParticipantsNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutResponsibleNestedInput
    tutorProjects?: ProjectUncheckedUpdateManyWithoutTutorNestedInput
    tutoredTasks?: TaskUncheckedUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutRecipientNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
    tutorGradings?: SubmissionUncheckedUpdateManyWithoutGradedByUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    createdExams?: ExamUncheckedUpdateManyWithoutCreatedByUserNestedInput
    examSubmissions?: ExamSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    chatbotConversations?: ChatbotConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRemindersInput = {
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectCreateNestedManyWithoutParticipantsInput
    tasks?: TaskCreateNestedManyWithoutResponsibleInput
    tutorProjects?: ProjectCreateNestedManyWithoutTutorInput
    tutoredTasks?: TaskCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutRecipientInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionCreateNestedManyWithoutStudentInput
    tutorGradings?: SubmissionCreateNestedManyWithoutGradedByUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    createdExams?: ExamCreateNestedManyWithoutCreatedByUserInput
    examSubmissions?: ExamSubmissionCreateNestedManyWithoutStudentInput
    chatbotConversations?: ChatbotConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRemindersInput = {
    id?: number
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutParticipantsInput
    tasks?: TaskUncheckedCreateNestedManyWithoutResponsibleInput
    tutorProjects?: ProjectUncheckedCreateNestedManyWithoutTutorInput
    tutoredTasks?: TaskUncheckedCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutRecipientInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
    tutorGradings?: SubmissionUncheckedCreateNestedManyWithoutGradedByUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    createdExams?: ExamUncheckedCreateNestedManyWithoutCreatedByUserInput
    examSubmissions?: ExamSubmissionUncheckedCreateNestedManyWithoutStudentInput
    chatbotConversations?: ChatbotConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRemindersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRemindersInput, UserUncheckedCreateWithoutRemindersInput>
  }

  export type UserUpsertWithoutRemindersInput = {
    update: XOR<UserUpdateWithoutRemindersInput, UserUncheckedUpdateWithoutRemindersInput>
    create: XOR<UserCreateWithoutRemindersInput, UserUncheckedCreateWithoutRemindersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRemindersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRemindersInput, UserUncheckedUpdateWithoutRemindersInput>
  }

  export type UserUpdateWithoutRemindersInput = {
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUpdateManyWithoutParticipantsNestedInput
    tasks?: TaskUpdateManyWithoutResponsibleNestedInput
    tutorProjects?: ProjectUpdateManyWithoutTutorNestedInput
    tutoredTasks?: TaskUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutRecipientNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUpdateManyWithoutStudentNestedInput
    tutorGradings?: SubmissionUpdateManyWithoutGradedByUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    createdExams?: ExamUpdateManyWithoutCreatedByUserNestedInput
    examSubmissions?: ExamSubmissionUpdateManyWithoutStudentNestedInput
    chatbotConversations?: ChatbotConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRemindersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUncheckedUpdateManyWithoutParticipantsNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutResponsibleNestedInput
    tutorProjects?: ProjectUncheckedUpdateManyWithoutTutorNestedInput
    tutoredTasks?: TaskUncheckedUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutRecipientNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
    tutorGradings?: SubmissionUncheckedUpdateManyWithoutGradedByUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    createdExams?: ExamUncheckedUpdateManyWithoutCreatedByUserNestedInput
    examSubmissions?: ExamSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    chatbotConversations?: ChatbotConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubmissionCreateWithoutFilesInput = {
    submittedAt?: Date | string
    content?: string | null
    grade?: number | null
    feedback?: string | null
    gradedAt?: Date | string | null
    status?: string
    task: TaskCreateNestedOneWithoutSubmissionsInput
    student: UserCreateNestedOneWithoutStudentSubmissionsInput
    gradedByUser?: UserCreateNestedOneWithoutTutorGradingsInput
  }

  export type SubmissionUncheckedCreateWithoutFilesInput = {
    id?: number
    taskId: number
    studentId: number
    submittedAt?: Date | string
    content?: string | null
    grade?: number | null
    feedback?: string | null
    gradedAt?: Date | string | null
    gradedBy?: number | null
    status?: string
  }

  export type SubmissionCreateOrConnectWithoutFilesInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutFilesInput, SubmissionUncheckedCreateWithoutFilesInput>
  }

  export type SubmissionUpsertWithoutFilesInput = {
    update: XOR<SubmissionUpdateWithoutFilesInput, SubmissionUncheckedUpdateWithoutFilesInput>
    create: XOR<SubmissionCreateWithoutFilesInput, SubmissionUncheckedCreateWithoutFilesInput>
    where?: SubmissionWhereInput
  }

  export type SubmissionUpdateToOneWithWhereWithoutFilesInput = {
    where?: SubmissionWhereInput
    data: XOR<SubmissionUpdateWithoutFilesInput, SubmissionUncheckedUpdateWithoutFilesInput>
  }

  export type SubmissionUpdateWithoutFilesInput = {
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    task?: TaskUpdateOneRequiredWithoutSubmissionsNestedInput
    student?: UserUpdateOneRequiredWithoutStudentSubmissionsNestedInput
    gradedByUser?: UserUpdateOneWithoutTutorGradingsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradedBy?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateWithoutSubmissionsInput = {
    name: string
    description?: string | null
    dueDate?: Date | string | null
    priority: string
    status: string
    type?: string
    googleEventId?: string | null
    project?: ProjectCreateNestedOneWithoutTasksInput
    responsible: UserCreateNestedOneWithoutTasksInput
    tutor?: UserCreateNestedOneWithoutTutoredTasksInput
  }

  export type TaskUncheckedCreateWithoutSubmissionsInput = {
    id?: number
    name: string
    description?: string | null
    dueDate?: Date | string | null
    priority: string
    status: string
    type?: string
    googleEventId?: string | null
    projectId?: number | null
    responsibleId: number
    tutorId?: number | null
  }

  export type TaskCreateOrConnectWithoutSubmissionsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutSubmissionsInput, TaskUncheckedCreateWithoutSubmissionsInput>
  }

  export type UserCreateWithoutStudentSubmissionsInput = {
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectCreateNestedManyWithoutParticipantsInput
    tasks?: TaskCreateNestedManyWithoutResponsibleInput
    tutorProjects?: ProjectCreateNestedManyWithoutTutorInput
    tutoredTasks?: TaskCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutRecipientInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    tutorGradings?: SubmissionCreateNestedManyWithoutGradedByUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    createdExams?: ExamCreateNestedManyWithoutCreatedByUserInput
    examSubmissions?: ExamSubmissionCreateNestedManyWithoutStudentInput
    chatbotConversations?: ChatbotConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudentSubmissionsInput = {
    id?: number
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutParticipantsInput
    tasks?: TaskUncheckedCreateNestedManyWithoutResponsibleInput
    tutorProjects?: ProjectUncheckedCreateNestedManyWithoutTutorInput
    tutoredTasks?: TaskUncheckedCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutRecipientInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    tutorGradings?: SubmissionUncheckedCreateNestedManyWithoutGradedByUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    createdExams?: ExamUncheckedCreateNestedManyWithoutCreatedByUserInput
    examSubmissions?: ExamSubmissionUncheckedCreateNestedManyWithoutStudentInput
    chatbotConversations?: ChatbotConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudentSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentSubmissionsInput, UserUncheckedCreateWithoutStudentSubmissionsInput>
  }

  export type UserCreateWithoutTutorGradingsInput = {
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectCreateNestedManyWithoutParticipantsInput
    tasks?: TaskCreateNestedManyWithoutResponsibleInput
    tutorProjects?: ProjectCreateNestedManyWithoutTutorInput
    tutoredTasks?: TaskCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutRecipientInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionCreateNestedManyWithoutStudentInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    createdExams?: ExamCreateNestedManyWithoutCreatedByUserInput
    examSubmissions?: ExamSubmissionCreateNestedManyWithoutStudentInput
    chatbotConversations?: ChatbotConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTutorGradingsInput = {
    id?: number
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutParticipantsInput
    tasks?: TaskUncheckedCreateNestedManyWithoutResponsibleInput
    tutorProjects?: ProjectUncheckedCreateNestedManyWithoutTutorInput
    tutoredTasks?: TaskUncheckedCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutRecipientInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    createdExams?: ExamUncheckedCreateNestedManyWithoutCreatedByUserInput
    examSubmissions?: ExamSubmissionUncheckedCreateNestedManyWithoutStudentInput
    chatbotConversations?: ChatbotConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTutorGradingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTutorGradingsInput, UserUncheckedCreateWithoutTutorGradingsInput>
  }

  export type FileCreateWithoutSubmissionInput = {
    filename: string
    originalName: string
    mimeType: string
    size: number
    path: string
    uploadedAt?: Date | string
  }

  export type FileUncheckedCreateWithoutSubmissionInput = {
    id?: number
    filename: string
    originalName: string
    mimeType: string
    size: number
    path: string
    uploadedAt?: Date | string
  }

  export type FileCreateOrConnectWithoutSubmissionInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutSubmissionInput, FileUncheckedCreateWithoutSubmissionInput>
  }

  export type FileCreateManySubmissionInputEnvelope = {
    data: FileCreateManySubmissionInput | FileCreateManySubmissionInput[]
  }

  export type TaskUpsertWithoutSubmissionsInput = {
    update: XOR<TaskUpdateWithoutSubmissionsInput, TaskUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<TaskCreateWithoutSubmissionsInput, TaskUncheckedCreateWithoutSubmissionsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutSubmissionsInput, TaskUncheckedUpdateWithoutSubmissionsInput>
  }

  export type TaskUpdateWithoutSubmissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateOneWithoutTasksNestedInput
    responsible?: UserUpdateOneRequiredWithoutTasksNestedInput
    tutor?: UserUpdateOneWithoutTutoredTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutSubmissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    responsibleId?: IntFieldUpdateOperationsInput | number
    tutorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUpsertWithoutStudentSubmissionsInput = {
    update: XOR<UserUpdateWithoutStudentSubmissionsInput, UserUncheckedUpdateWithoutStudentSubmissionsInput>
    create: XOR<UserCreateWithoutStudentSubmissionsInput, UserUncheckedCreateWithoutStudentSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentSubmissionsInput, UserUncheckedUpdateWithoutStudentSubmissionsInput>
  }

  export type UserUpdateWithoutStudentSubmissionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUpdateManyWithoutParticipantsNestedInput
    tasks?: TaskUpdateManyWithoutResponsibleNestedInput
    tutorProjects?: ProjectUpdateManyWithoutTutorNestedInput
    tutoredTasks?: TaskUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutRecipientNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    tutorGradings?: SubmissionUpdateManyWithoutGradedByUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    createdExams?: ExamUpdateManyWithoutCreatedByUserNestedInput
    examSubmissions?: ExamSubmissionUpdateManyWithoutStudentNestedInput
    chatbotConversations?: ChatbotConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentSubmissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUncheckedUpdateManyWithoutParticipantsNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutResponsibleNestedInput
    tutorProjects?: ProjectUncheckedUpdateManyWithoutTutorNestedInput
    tutoredTasks?: TaskUncheckedUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutRecipientNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    tutorGradings?: SubmissionUncheckedUpdateManyWithoutGradedByUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    createdExams?: ExamUncheckedUpdateManyWithoutCreatedByUserNestedInput
    examSubmissions?: ExamSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    chatbotConversations?: ChatbotConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutTutorGradingsInput = {
    update: XOR<UserUpdateWithoutTutorGradingsInput, UserUncheckedUpdateWithoutTutorGradingsInput>
    create: XOR<UserCreateWithoutTutorGradingsInput, UserUncheckedCreateWithoutTutorGradingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTutorGradingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTutorGradingsInput, UserUncheckedUpdateWithoutTutorGradingsInput>
  }

  export type UserUpdateWithoutTutorGradingsInput = {
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUpdateManyWithoutParticipantsNestedInput
    tasks?: TaskUpdateManyWithoutResponsibleNestedInput
    tutorProjects?: ProjectUpdateManyWithoutTutorNestedInput
    tutoredTasks?: TaskUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutRecipientNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUpdateManyWithoutStudentNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    createdExams?: ExamUpdateManyWithoutCreatedByUserNestedInput
    examSubmissions?: ExamSubmissionUpdateManyWithoutStudentNestedInput
    chatbotConversations?: ChatbotConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTutorGradingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUncheckedUpdateManyWithoutParticipantsNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutResponsibleNestedInput
    tutorProjects?: ProjectUncheckedUpdateManyWithoutTutorNestedInput
    tutoredTasks?: TaskUncheckedUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutRecipientNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    createdExams?: ExamUncheckedUpdateManyWithoutCreatedByUserNestedInput
    examSubmissions?: ExamSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    chatbotConversations?: ChatbotConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FileUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutSubmissionInput, FileUncheckedUpdateWithoutSubmissionInput>
    create: XOR<FileCreateWithoutSubmissionInput, FileUncheckedCreateWithoutSubmissionInput>
  }

  export type FileUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutSubmissionInput, FileUncheckedUpdateWithoutSubmissionInput>
  }

  export type FileUpdateManyWithWhereWithoutSubmissionInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutSubmissionInput>
  }

  export type FileScalarWhereInput = {
    AND?: FileScalarWhereInput | FileScalarWhereInput[]
    OR?: FileScalarWhereInput[]
    NOT?: FileScalarWhereInput | FileScalarWhereInput[]
    id?: IntFilter<"File"> | number
    filename?: StringFilter<"File"> | string
    originalName?: StringFilter<"File"> | string
    mimeType?: StringFilter<"File"> | string
    size?: IntFilter<"File"> | number
    path?: StringFilter<"File"> | string
    uploadedAt?: DateTimeFilter<"File"> | Date | string
    submissionId?: IntNullableFilter<"File"> | number | null
  }

  export type UserCreateWithoutActivityLogsInput = {
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectCreateNestedManyWithoutParticipantsInput
    tasks?: TaskCreateNestedManyWithoutResponsibleInput
    tutorProjects?: ProjectCreateNestedManyWithoutTutorInput
    tutoredTasks?: TaskCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutRecipientInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionCreateNestedManyWithoutStudentInput
    tutorGradings?: SubmissionCreateNestedManyWithoutGradedByUserInput
    createdExams?: ExamCreateNestedManyWithoutCreatedByUserInput
    examSubmissions?: ExamSubmissionCreateNestedManyWithoutStudentInput
    chatbotConversations?: ChatbotConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActivityLogsInput = {
    id?: number
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutParticipantsInput
    tasks?: TaskUncheckedCreateNestedManyWithoutResponsibleInput
    tutorProjects?: ProjectUncheckedCreateNestedManyWithoutTutorInput
    tutoredTasks?: TaskUncheckedCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutRecipientInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
    tutorGradings?: SubmissionUncheckedCreateNestedManyWithoutGradedByUserInput
    createdExams?: ExamUncheckedCreateNestedManyWithoutCreatedByUserInput
    examSubmissions?: ExamSubmissionUncheckedCreateNestedManyWithoutStudentInput
    chatbotConversations?: ChatbotConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActivityLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
  }

  export type UserUpsertWithoutActivityLogsInput = {
    update: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<UserCreateWithoutActivityLogsInput, UserUncheckedCreateWithoutActivityLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivityLogsInput, UserUncheckedUpdateWithoutActivityLogsInput>
  }

  export type UserUpdateWithoutActivityLogsInput = {
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUpdateManyWithoutParticipantsNestedInput
    tasks?: TaskUpdateManyWithoutResponsibleNestedInput
    tutorProjects?: ProjectUpdateManyWithoutTutorNestedInput
    tutoredTasks?: TaskUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutRecipientNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUpdateManyWithoutStudentNestedInput
    tutorGradings?: SubmissionUpdateManyWithoutGradedByUserNestedInput
    createdExams?: ExamUpdateManyWithoutCreatedByUserNestedInput
    examSubmissions?: ExamSubmissionUpdateManyWithoutStudentNestedInput
    chatbotConversations?: ChatbotConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActivityLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUncheckedUpdateManyWithoutParticipantsNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutResponsibleNestedInput
    tutorProjects?: ProjectUncheckedUpdateManyWithoutTutorNestedInput
    tutoredTasks?: TaskUncheckedUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutRecipientNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
    tutorGradings?: SubmissionUncheckedUpdateManyWithoutGradedByUserNestedInput
    createdExams?: ExamUncheckedUpdateManyWithoutCreatedByUserNestedInput
    examSubmissions?: ExamSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    chatbotConversations?: ChatbotConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutChatbotConversationsInput = {
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectCreateNestedManyWithoutParticipantsInput
    tasks?: TaskCreateNestedManyWithoutResponsibleInput
    tutorProjects?: ProjectCreateNestedManyWithoutTutorInput
    tutoredTasks?: TaskCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutRecipientInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionCreateNestedManyWithoutStudentInput
    tutorGradings?: SubmissionCreateNestedManyWithoutGradedByUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    createdExams?: ExamCreateNestedManyWithoutCreatedByUserInput
    examSubmissions?: ExamSubmissionCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutChatbotConversationsInput = {
    id?: number
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutParticipantsInput
    tasks?: TaskUncheckedCreateNestedManyWithoutResponsibleInput
    tutorProjects?: ProjectUncheckedCreateNestedManyWithoutTutorInput
    tutoredTasks?: TaskUncheckedCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutRecipientInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
    tutorGradings?: SubmissionUncheckedCreateNestedManyWithoutGradedByUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    createdExams?: ExamUncheckedCreateNestedManyWithoutCreatedByUserInput
    examSubmissions?: ExamSubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutChatbotConversationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatbotConversationsInput, UserUncheckedCreateWithoutChatbotConversationsInput>
  }

  export type UserUpsertWithoutChatbotConversationsInput = {
    update: XOR<UserUpdateWithoutChatbotConversationsInput, UserUncheckedUpdateWithoutChatbotConversationsInput>
    create: XOR<UserCreateWithoutChatbotConversationsInput, UserUncheckedCreateWithoutChatbotConversationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatbotConversationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatbotConversationsInput, UserUncheckedUpdateWithoutChatbotConversationsInput>
  }

  export type UserUpdateWithoutChatbotConversationsInput = {
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUpdateManyWithoutParticipantsNestedInput
    tasks?: TaskUpdateManyWithoutResponsibleNestedInput
    tutorProjects?: ProjectUpdateManyWithoutTutorNestedInput
    tutoredTasks?: TaskUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutRecipientNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUpdateManyWithoutStudentNestedInput
    tutorGradings?: SubmissionUpdateManyWithoutGradedByUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    createdExams?: ExamUpdateManyWithoutCreatedByUserNestedInput
    examSubmissions?: ExamSubmissionUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutChatbotConversationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUncheckedUpdateManyWithoutParticipantsNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutResponsibleNestedInput
    tutorProjects?: ProjectUncheckedUpdateManyWithoutTutorNestedInput
    tutoredTasks?: TaskUncheckedUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutRecipientNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
    tutorGradings?: SubmissionUncheckedUpdateManyWithoutGradedByUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    createdExams?: ExamUncheckedUpdateManyWithoutCreatedByUserNestedInput
    examSubmissions?: ExamSubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserCreateWithoutCreatedExamsInput = {
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectCreateNestedManyWithoutParticipantsInput
    tasks?: TaskCreateNestedManyWithoutResponsibleInput
    tutorProjects?: ProjectCreateNestedManyWithoutTutorInput
    tutoredTasks?: TaskCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutRecipientInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionCreateNestedManyWithoutStudentInput
    tutorGradings?: SubmissionCreateNestedManyWithoutGradedByUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    examSubmissions?: ExamSubmissionCreateNestedManyWithoutStudentInput
    chatbotConversations?: ChatbotConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedExamsInput = {
    id?: number
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutParticipantsInput
    tasks?: TaskUncheckedCreateNestedManyWithoutResponsibleInput
    tutorProjects?: ProjectUncheckedCreateNestedManyWithoutTutorInput
    tutoredTasks?: TaskUncheckedCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutRecipientInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
    tutorGradings?: SubmissionUncheckedCreateNestedManyWithoutGradedByUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    examSubmissions?: ExamSubmissionUncheckedCreateNestedManyWithoutStudentInput
    chatbotConversations?: ChatbotConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedExamsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedExamsInput, UserUncheckedCreateWithoutCreatedExamsInput>
  }

  export type ExamSubmissionCreateWithoutExamInput = {
    answers: string
    score: number
    submittedAt?: Date | string
    review?: string | null
    student: UserCreateNestedOneWithoutExamSubmissionsInput
  }

  export type ExamSubmissionUncheckedCreateWithoutExamInput = {
    id?: number
    studentId: number
    answers: string
    score: number
    submittedAt?: Date | string
    review?: string | null
  }

  export type ExamSubmissionCreateOrConnectWithoutExamInput = {
    where: ExamSubmissionWhereUniqueInput
    create: XOR<ExamSubmissionCreateWithoutExamInput, ExamSubmissionUncheckedCreateWithoutExamInput>
  }

  export type ExamSubmissionCreateManyExamInputEnvelope = {
    data: ExamSubmissionCreateManyExamInput | ExamSubmissionCreateManyExamInput[]
  }

  export type ExamQuestionCreateWithoutExamInput = {
    question: string
    options?: string | null
    correctAnswer: string
    type: string
  }

  export type ExamQuestionUncheckedCreateWithoutExamInput = {
    id?: number
    question: string
    options?: string | null
    correctAnswer: string
    type: string
  }

  export type ExamQuestionCreateOrConnectWithoutExamInput = {
    where: ExamQuestionWhereUniqueInput
    create: XOR<ExamQuestionCreateWithoutExamInput, ExamQuestionUncheckedCreateWithoutExamInput>
  }

  export type ExamQuestionCreateManyExamInputEnvelope = {
    data: ExamQuestionCreateManyExamInput | ExamQuestionCreateManyExamInput[]
  }

  export type UserUpsertWithoutCreatedExamsInput = {
    update: XOR<UserUpdateWithoutCreatedExamsInput, UserUncheckedUpdateWithoutCreatedExamsInput>
    create: XOR<UserCreateWithoutCreatedExamsInput, UserUncheckedCreateWithoutCreatedExamsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedExamsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedExamsInput, UserUncheckedUpdateWithoutCreatedExamsInput>
  }

  export type UserUpdateWithoutCreatedExamsInput = {
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUpdateManyWithoutParticipantsNestedInput
    tasks?: TaskUpdateManyWithoutResponsibleNestedInput
    tutorProjects?: ProjectUpdateManyWithoutTutorNestedInput
    tutoredTasks?: TaskUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutRecipientNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUpdateManyWithoutStudentNestedInput
    tutorGradings?: SubmissionUpdateManyWithoutGradedByUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    examSubmissions?: ExamSubmissionUpdateManyWithoutStudentNestedInput
    chatbotConversations?: ChatbotConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedExamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUncheckedUpdateManyWithoutParticipantsNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutResponsibleNestedInput
    tutorProjects?: ProjectUncheckedUpdateManyWithoutTutorNestedInput
    tutoredTasks?: TaskUncheckedUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutRecipientNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
    tutorGradings?: SubmissionUncheckedUpdateManyWithoutGradedByUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    examSubmissions?: ExamSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    chatbotConversations?: ChatbotConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ExamSubmissionUpsertWithWhereUniqueWithoutExamInput = {
    where: ExamSubmissionWhereUniqueInput
    update: XOR<ExamSubmissionUpdateWithoutExamInput, ExamSubmissionUncheckedUpdateWithoutExamInput>
    create: XOR<ExamSubmissionCreateWithoutExamInput, ExamSubmissionUncheckedCreateWithoutExamInput>
  }

  export type ExamSubmissionUpdateWithWhereUniqueWithoutExamInput = {
    where: ExamSubmissionWhereUniqueInput
    data: XOR<ExamSubmissionUpdateWithoutExamInput, ExamSubmissionUncheckedUpdateWithoutExamInput>
  }

  export type ExamSubmissionUpdateManyWithWhereWithoutExamInput = {
    where: ExamSubmissionScalarWhereInput
    data: XOR<ExamSubmissionUpdateManyMutationInput, ExamSubmissionUncheckedUpdateManyWithoutExamInput>
  }

  export type ExamQuestionUpsertWithWhereUniqueWithoutExamInput = {
    where: ExamQuestionWhereUniqueInput
    update: XOR<ExamQuestionUpdateWithoutExamInput, ExamQuestionUncheckedUpdateWithoutExamInput>
    create: XOR<ExamQuestionCreateWithoutExamInput, ExamQuestionUncheckedCreateWithoutExamInput>
  }

  export type ExamQuestionUpdateWithWhereUniqueWithoutExamInput = {
    where: ExamQuestionWhereUniqueInput
    data: XOR<ExamQuestionUpdateWithoutExamInput, ExamQuestionUncheckedUpdateWithoutExamInput>
  }

  export type ExamQuestionUpdateManyWithWhereWithoutExamInput = {
    where: ExamQuestionScalarWhereInput
    data: XOR<ExamQuestionUpdateManyMutationInput, ExamQuestionUncheckedUpdateManyWithoutExamInput>
  }

  export type ExamQuestionScalarWhereInput = {
    AND?: ExamQuestionScalarWhereInput | ExamQuestionScalarWhereInput[]
    OR?: ExamQuestionScalarWhereInput[]
    NOT?: ExamQuestionScalarWhereInput | ExamQuestionScalarWhereInput[]
    id?: IntFilter<"ExamQuestion"> | number
    examId?: IntFilter<"ExamQuestion"> | number
    question?: StringFilter<"ExamQuestion"> | string
    options?: StringNullableFilter<"ExamQuestion"> | string | null
    correctAnswer?: StringFilter<"ExamQuestion"> | string
    type?: StringFilter<"ExamQuestion"> | string
  }

  export type ExamCreateWithoutQuestionsInput = {
    title: string
    topics: string
    numQuestions: number
    timeLimit: number
    generatedQuestions: string
    assignedTo: string
    status?: string
    createdAt?: Date | string
    createdByUser: UserCreateNestedOneWithoutCreatedExamsInput
    submissions?: ExamSubmissionCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutQuestionsInput = {
    id?: number
    title: string
    topics: string
    numQuestions: number
    timeLimit: number
    generatedQuestions: string
    createdBy: number
    assignedTo: string
    status?: string
    createdAt?: Date | string
    submissions?: ExamSubmissionUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutQuestionsInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
  }

  export type ExamUpsertWithoutQuestionsInput = {
    update: XOR<ExamUpdateWithoutQuestionsInput, ExamUncheckedUpdateWithoutQuestionsInput>
    create: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
    where?: ExamWhereInput
  }

  export type ExamUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: ExamWhereInput
    data: XOR<ExamUpdateWithoutQuestionsInput, ExamUncheckedUpdateWithoutQuestionsInput>
  }

  export type ExamUpdateWithoutQuestionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    topics?: StringFieldUpdateOperationsInput | string
    numQuestions?: IntFieldUpdateOperationsInput | number
    timeLimit?: IntFieldUpdateOperationsInput | number
    generatedQuestions?: StringFieldUpdateOperationsInput | string
    assignedTo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUser?: UserUpdateOneRequiredWithoutCreatedExamsNestedInput
    submissions?: ExamSubmissionUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    topics?: StringFieldUpdateOperationsInput | string
    numQuestions?: IntFieldUpdateOperationsInput | number
    timeLimit?: IntFieldUpdateOperationsInput | number
    generatedQuestions?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    assignedTo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: ExamSubmissionUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamCreateWithoutSubmissionsInput = {
    title: string
    topics: string
    numQuestions: number
    timeLimit: number
    generatedQuestions: string
    assignedTo: string
    status?: string
    createdAt?: Date | string
    createdByUser: UserCreateNestedOneWithoutCreatedExamsInput
    questions?: ExamQuestionCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutSubmissionsInput = {
    id?: number
    title: string
    topics: string
    numQuestions: number
    timeLimit: number
    generatedQuestions: string
    createdBy: number
    assignedTo: string
    status?: string
    createdAt?: Date | string
    questions?: ExamQuestionUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutSubmissionsInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutSubmissionsInput, ExamUncheckedCreateWithoutSubmissionsInput>
  }

  export type UserCreateWithoutExamSubmissionsInput = {
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectCreateNestedManyWithoutParticipantsInput
    tasks?: TaskCreateNestedManyWithoutResponsibleInput
    tutorProjects?: ProjectCreateNestedManyWithoutTutorInput
    tutoredTasks?: TaskCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageCreateNestedManyWithoutUserInput
    receivedMessages?: ChatMessageCreateNestedManyWithoutRecipientInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    reminders?: ReminderCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionCreateNestedManyWithoutStudentInput
    tutorGradings?: SubmissionCreateNestedManyWithoutGradedByUserInput
    activityLogs?: ActivityLogCreateNestedManyWithoutUserInput
    createdExams?: ExamCreateNestedManyWithoutCreatedByUserInput
    chatbotConversations?: ChatbotConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExamSubmissionsInput = {
    id?: number
    username: string
    role?: string
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    profileComplete?: boolean
    status?: string
    password: string
    googleId?: string | null
    googleAccessToken?: string | null
    googleRefreshToken?: string | null
    googleTokenExpiry?: Date | string | null
    calendarId?: string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutParticipantsInput
    tasks?: TaskUncheckedCreateNestedManyWithoutResponsibleInput
    tutorProjects?: ProjectUncheckedCreateNestedManyWithoutTutorInput
    tutoredTasks?: TaskUncheckedCreateNestedManyWithoutTutorInput
    chatMessages?: ChatMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: ChatMessageUncheckedCreateNestedManyWithoutRecipientInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    reminders?: ReminderUncheckedCreateNestedManyWithoutUserInput
    studentSubmissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
    tutorGradings?: SubmissionUncheckedCreateNestedManyWithoutGradedByUserInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    createdExams?: ExamUncheckedCreateNestedManyWithoutCreatedByUserInput
    chatbotConversations?: ChatbotConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExamSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExamSubmissionsInput, UserUncheckedCreateWithoutExamSubmissionsInput>
  }

  export type ExamUpsertWithoutSubmissionsInput = {
    update: XOR<ExamUpdateWithoutSubmissionsInput, ExamUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<ExamCreateWithoutSubmissionsInput, ExamUncheckedCreateWithoutSubmissionsInput>
    where?: ExamWhereInput
  }

  export type ExamUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: ExamWhereInput
    data: XOR<ExamUpdateWithoutSubmissionsInput, ExamUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ExamUpdateWithoutSubmissionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    topics?: StringFieldUpdateOperationsInput | string
    numQuestions?: IntFieldUpdateOperationsInput | number
    timeLimit?: IntFieldUpdateOperationsInput | number
    generatedQuestions?: StringFieldUpdateOperationsInput | string
    assignedTo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUser?: UserUpdateOneRequiredWithoutCreatedExamsNestedInput
    questions?: ExamQuestionUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutSubmissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    topics?: StringFieldUpdateOperationsInput | string
    numQuestions?: IntFieldUpdateOperationsInput | number
    timeLimit?: IntFieldUpdateOperationsInput | number
    generatedQuestions?: StringFieldUpdateOperationsInput | string
    createdBy?: IntFieldUpdateOperationsInput | number
    assignedTo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: ExamQuestionUncheckedUpdateManyWithoutExamNestedInput
  }

  export type UserUpsertWithoutExamSubmissionsInput = {
    update: XOR<UserUpdateWithoutExamSubmissionsInput, UserUncheckedUpdateWithoutExamSubmissionsInput>
    create: XOR<UserCreateWithoutExamSubmissionsInput, UserUncheckedCreateWithoutExamSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExamSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExamSubmissionsInput, UserUncheckedUpdateWithoutExamSubmissionsInput>
  }

  export type UserUpdateWithoutExamSubmissionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUpdateManyWithoutParticipantsNestedInput
    tasks?: TaskUpdateManyWithoutResponsibleNestedInput
    tutorProjects?: ProjectUpdateManyWithoutTutorNestedInput
    tutoredTasks?: TaskUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutRecipientNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUpdateManyWithoutStudentNestedInput
    tutorGradings?: SubmissionUpdateManyWithoutGradedByUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    createdExams?: ExamUpdateManyWithoutCreatedByUserNestedInput
    chatbotConversations?: ChatbotConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExamSubmissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUncheckedUpdateManyWithoutParticipantsNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutResponsibleNestedInput
    tutorProjects?: ProjectUncheckedUpdateManyWithoutTutorNestedInput
    tutoredTasks?: TaskUncheckedUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutRecipientNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
    tutorGradings?: SubmissionUncheckedUpdateManyWithoutGradedByUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    createdExams?: ExamUncheckedUpdateManyWithoutCreatedByUserNestedInput
    chatbotConversations?: ChatbotConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskCreateManyResponsibleInput = {
    id?: number
    name: string
    description?: string | null
    dueDate?: Date | string | null
    priority: string
    status: string
    type?: string
    googleEventId?: string | null
    projectId?: number | null
    tutorId?: number | null
  }

  export type ProjectCreateManyTutorInput = {
    id?: number
    name: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    status: string
    googleEventId?: string | null
  }

  export type TaskCreateManyTutorInput = {
    id?: number
    name: string
    description?: string | null
    dueDate?: Date | string | null
    priority: string
    status: string
    type?: string
    googleEventId?: string | null
    projectId?: number | null
    responsibleId: number
  }

  export type ChatMessageCreateManyUserInput = {
    id?: number
    message: string
    timestamp?: Date | string
    recipientId?: number | null
    isPrivate?: boolean
  }

  export type ChatMessageCreateManyRecipientInput = {
    id?: number
    userId: number
    message: string
    timestamp?: Date | string
    isPrivate?: boolean
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    message: string
    type: string
    isRead?: boolean
    createdAt?: Date | string
    relatedId?: number | null
    relatedType?: string | null
  }

  export type ReminderCreateManyUserInput = {
    id?: number
    title: string
    description?: string | null
    scheduledAt: Date | string
    isActive?: boolean
    createdAt?: Date | string
    relatedId?: number | null
    relatedType?: string | null
  }

  export type SubmissionCreateManyStudentInput = {
    id?: number
    taskId: number
    submittedAt?: Date | string
    content?: string | null
    grade?: number | null
    feedback?: string | null
    gradedAt?: Date | string | null
    gradedBy?: number | null
    status?: string
  }

  export type SubmissionCreateManyGradedByUserInput = {
    id?: number
    taskId: number
    studentId: number
    submittedAt?: Date | string
    content?: string | null
    grade?: number | null
    feedback?: string | null
    gradedAt?: Date | string | null
    status?: string
  }

  export type ActivityLogCreateManyUserInput = {
    id?: number
    action: string
    entityType: string
    entityId: number
    details?: string | null
    oldValues?: string | null
    newValues?: string | null
    timestamp?: Date | string
  }

  export type ExamCreateManyCreatedByUserInput = {
    id?: number
    title: string
    topics: string
    numQuestions: number
    timeLimit: number
    generatedQuestions: string
    assignedTo: string
    status?: string
    createdAt?: Date | string
  }

  export type ExamSubmissionCreateManyStudentInput = {
    id?: number
    examId: number
    answers: string
    score: number
    submittedAt?: Date | string
    review?: string | null
  }

  export type ChatbotConversationCreateManyUserInput = {
    id?: number
    title?: string | null
    messages: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateWithoutParticipantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TaskUpdateManyWithoutProjectNestedInput
    tutor?: UserUpdateOneWithoutTutorProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    tutorId?: NullableIntFieldUpdateOperationsInput | number | null
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    tutorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TaskUpdateWithoutResponsibleInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateOneWithoutTasksNestedInput
    tutor?: UserUpdateOneWithoutTutoredTasksNestedInput
    submissions?: SubmissionUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutResponsibleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    tutorId?: NullableIntFieldUpdateOperationsInput | number | null
    submissions?: SubmissionUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutResponsibleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    tutorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProjectUpdateWithoutTutorInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TaskUpdateManyWithoutProjectNestedInput
    participants?: UserUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
    participants?: UserUncheckedUpdateManyWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutTutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskUpdateWithoutTutorInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateOneWithoutTasksNestedInput
    responsible?: UserUpdateOneRequiredWithoutTasksNestedInput
    submissions?: SubmissionUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutTutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    responsibleId?: IntFieldUpdateOperationsInput | number
    submissions?: SubmissionUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutTutorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: NullableIntFieldUpdateOperationsInput | number | null
    responsibleId?: IntFieldUpdateOperationsInput | number
  }

  export type ChatMessageUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    recipient?: UserUpdateOneWithoutReceivedMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientId?: NullableIntFieldUpdateOperationsInput | number | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientId?: NullableIntFieldUpdateOperationsInput | number | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChatMessageUpdateWithoutRecipientInput = {
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutChatMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutRecipientInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChatMessageUncheckedUpdateManyWithoutRecipientInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedId?: NullableIntFieldUpdateOperationsInput | number | null
    relatedType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedId?: NullableIntFieldUpdateOperationsInput | number | null
    relatedType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedId?: NullableIntFieldUpdateOperationsInput | number | null
    relatedType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReminderUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedId?: NullableIntFieldUpdateOperationsInput | number | null
    relatedType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReminderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedId?: NullableIntFieldUpdateOperationsInput | number | null
    relatedType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReminderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relatedId?: NullableIntFieldUpdateOperationsInput | number | null
    relatedType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubmissionUpdateWithoutStudentInput = {
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    task?: TaskUpdateOneRequiredWithoutSubmissionsNestedInput
    gradedByUser?: UserUpdateOneWithoutTutorGradingsNestedInput
    files?: FileUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradedBy?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    files?: FileUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradedBy?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionUpdateWithoutGradedByUserInput = {
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    task?: TaskUpdateOneRequiredWithoutSubmissionsNestedInput
    student?: UserUpdateOneRequiredWithoutStudentSubmissionsNestedInput
    files?: FileUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutGradedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    files?: FileUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutGradedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityLogUpdateWithoutUserInput = {
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    details?: NullableStringFieldUpdateOperationsInput | string | null
    oldValues?: NullableStringFieldUpdateOperationsInput | string | null
    newValues?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    details?: NullableStringFieldUpdateOperationsInput | string | null
    oldValues?: NullableStringFieldUpdateOperationsInput | string | null
    newValues?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: IntFieldUpdateOperationsInput | number
    details?: NullableStringFieldUpdateOperationsInput | string | null
    oldValues?: NullableStringFieldUpdateOperationsInput | string | null
    newValues?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamUpdateWithoutCreatedByUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    topics?: StringFieldUpdateOperationsInput | string
    numQuestions?: IntFieldUpdateOperationsInput | number
    timeLimit?: IntFieldUpdateOperationsInput | number
    generatedQuestions?: StringFieldUpdateOperationsInput | string
    assignedTo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: ExamSubmissionUpdateManyWithoutExamNestedInput
    questions?: ExamQuestionUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutCreatedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    topics?: StringFieldUpdateOperationsInput | string
    numQuestions?: IntFieldUpdateOperationsInput | number
    timeLimit?: IntFieldUpdateOperationsInput | number
    generatedQuestions?: StringFieldUpdateOperationsInput | string
    assignedTo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: ExamSubmissionUncheckedUpdateManyWithoutExamNestedInput
    questions?: ExamQuestionUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateManyWithoutCreatedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    topics?: StringFieldUpdateOperationsInput | string
    numQuestions?: IntFieldUpdateOperationsInput | number
    timeLimit?: IntFieldUpdateOperationsInput | number
    generatedQuestions?: StringFieldUpdateOperationsInput | string
    assignedTo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamSubmissionUpdateWithoutStudentInput = {
    answers?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: NullableStringFieldUpdateOperationsInput | string | null
    exam?: ExamUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type ExamSubmissionUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    examId?: IntFieldUpdateOperationsInput | number
    answers?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExamSubmissionUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    examId?: IntFieldUpdateOperationsInput | number
    answers?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatbotConversationUpdateWithoutUserInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatbotConversationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatbotConversationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyProjectInput = {
    id?: number
    name: string
    description?: string | null
    dueDate?: Date | string | null
    priority: string
    status: string
    type?: string
    googleEventId?: string | null
    responsibleId: number
    tutorId?: number | null
  }

  export type TaskUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: UserUpdateOneRequiredWithoutTasksNestedInput
    tutor?: UserUpdateOneWithoutTutoredTasksNestedInput
    submissions?: SubmissionUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleId?: IntFieldUpdateOperationsInput | number
    tutorId?: NullableIntFieldUpdateOperationsInput | number | null
    submissions?: SubmissionUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    googleEventId?: NullableStringFieldUpdateOperationsInput | string | null
    responsibleId?: IntFieldUpdateOperationsInput | number
    tutorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUpdateWithoutProjectsInput = {
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TaskUpdateManyWithoutResponsibleNestedInput
    tutorProjects?: ProjectUpdateManyWithoutTutorNestedInput
    tutoredTasks?: TaskUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: ChatMessageUpdateManyWithoutRecipientNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    reminders?: ReminderUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUpdateManyWithoutStudentNestedInput
    tutorGradings?: SubmissionUpdateManyWithoutGradedByUserNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput
    createdExams?: ExamUpdateManyWithoutCreatedByUserNestedInput
    examSubmissions?: ExamSubmissionUpdateManyWithoutStudentNestedInput
    chatbotConversations?: ChatbotConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: TaskUncheckedUpdateManyWithoutResponsibleNestedInput
    tutorProjects?: ProjectUncheckedUpdateManyWithoutTutorNestedInput
    tutoredTasks?: TaskUncheckedUpdateManyWithoutTutorNestedInput
    chatMessages?: ChatMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: ChatMessageUncheckedUpdateManyWithoutRecipientNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    reminders?: ReminderUncheckedUpdateManyWithoutUserNestedInput
    studentSubmissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
    tutorGradings?: SubmissionUncheckedUpdateManyWithoutGradedByUserNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    createdExams?: ExamUncheckedUpdateManyWithoutCreatedByUserNestedInput
    examSubmissions?: ExamSubmissionUncheckedUpdateManyWithoutStudentNestedInput
    chatbotConversations?: ChatbotConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    profileComplete?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    googleAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubmissionCreateManyTaskInput = {
    id?: number
    studentId: number
    submittedAt?: Date | string
    content?: string | null
    grade?: number | null
    feedback?: string | null
    gradedAt?: Date | string | null
    gradedBy?: number | null
    status?: string
  }

  export type SubmissionUpdateWithoutTaskInput = {
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    student?: UserUpdateOneRequiredWithoutStudentSubmissionsNestedInput
    gradedByUser?: UserUpdateOneWithoutTutorGradingsNestedInput
    files?: FileUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradedBy?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    files?: FileUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableFloatFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gradedBy?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type FileCreateManySubmissionInput = {
    id?: number
    filename: string
    originalName: string
    mimeType: string
    size: number
    path: string
    uploadedAt?: Date | string
  }

  export type FileUpdateWithoutSubmissionInput = {
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateWithoutSubmissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateManyWithoutSubmissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamSubmissionCreateManyExamInput = {
    id?: number
    studentId: number
    answers: string
    score: number
    submittedAt?: Date | string
    review?: string | null
  }

  export type ExamQuestionCreateManyExamInput = {
    id?: number
    question: string
    options?: string | null
    correctAnswer: string
    type: string
  }

  export type ExamSubmissionUpdateWithoutExamInput = {
    answers?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: NullableStringFieldUpdateOperationsInput | string | null
    student?: UserUpdateOneRequiredWithoutExamSubmissionsNestedInput
  }

  export type ExamSubmissionUncheckedUpdateWithoutExamInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    answers?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExamSubmissionUncheckedUpdateManyWithoutExamInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    answers?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExamQuestionUpdateWithoutExamInput = {
    question?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ExamQuestionUncheckedUpdateWithoutExamInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ExamQuestionUncheckedUpdateManyWithoutExamInput = {
    id?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    options?: NullableStringFieldUpdateOperationsInput | string | null
    correctAnswer?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
     */
    export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskCountOutputTypeDefaultArgs instead
     */
    export type TaskCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubmissionCountOutputTypeDefaultArgs instead
     */
    export type SubmissionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubmissionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExamCountOutputTypeDefaultArgs instead
     */
    export type ExamCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExamCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskDefaultArgs instead
     */
    export type TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatMessageDefaultArgs instead
     */
    export type ChatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatMessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationDefaultArgs instead
     */
    export type NotificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReminderDefaultArgs instead
     */
    export type ReminderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReminderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FileDefaultArgs instead
     */
    export type FileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubmissionDefaultArgs instead
     */
    export type SubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubmissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActivityLogDefaultArgs instead
     */
    export type ActivityLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActivityLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatbotConversationDefaultArgs instead
     */
    export type ChatbotConversationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatbotConversationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExamDefaultArgs instead
     */
    export type ExamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExamDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExamQuestionDefaultArgs instead
     */
    export type ExamQuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExamQuestionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExamSubmissionDefaultArgs instead
     */
    export type ExamSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExamSubmissionDefaultArgs<ExtArgs>

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