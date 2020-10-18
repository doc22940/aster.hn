import { Observable } from 'graphql-typed-client'

export interface Query {
  employment: Employment | null
  employments: (Employment | null)[] | null
  employmentsConnection: EmploymentConnection | null
  personalInfo: PersonalInfo | null
  personalInfos: (PersonalInfo | null)[] | null
  personalInfosConnection: PersonalInfoConnection | null
  files: (UploadFile | null)[] | null
  filesConnection: UploadFileConnection | null
  role: UsersPermissionsRole | null
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles: (UsersPermissionsRole | null)[] | null
  rolesConnection: UsersPermissionsRoleConnection | null
  user: UsersPermissionsUser | null
  users: (UsersPermissionsUser | null)[] | null
  usersConnection: UsersPermissionsUserConnection | null
  me: UsersPermissionsMe | null
  __typename: 'Query'
}

/** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
export type ID = string

export interface Employment {
  Company: String | null
  Title: String | null
  fromDate: Date | null
  toDate: Date | null
  projects: String | null
  _id: ID
  id: ID
  createdAt: DateTime
  updatedAt: DateTime
  __typename: 'Employment'
}

/** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
export type String = string

/** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
export type Date = any

/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
export type DateTime = any

/** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
export type Int = number

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type JSON = any

export interface EmploymentConnection {
  values: (Employment | null)[] | null
  groupBy: EmploymentGroupBy | null
  aggregate: EmploymentAggregator | null
  __typename: 'EmploymentConnection'
}

export interface EmploymentGroupBy {
  Company: (EmploymentConnectionCompany | null)[] | null
  Title: (EmploymentConnectionTitle | null)[] | null
  fromDate: (EmploymentConnectionFromDate | null)[] | null
  toDate: (EmploymentConnectionToDate | null)[] | null
  projects: (EmploymentConnectionProjects | null)[] | null
  _id: (EmploymentConnection_id | null)[] | null
  id: (EmploymentConnectionId | null)[] | null
  createdAt: (EmploymentConnectionCreatedAt | null)[] | null
  updatedAt: (EmploymentConnectionUpdatedAt | null)[] | null
  __typename: 'EmploymentGroupBy'
}

export interface EmploymentConnectionCompany {
  key: String | null
  connection: EmploymentConnection | null
  __typename: 'EmploymentConnectionCompany'
}

export interface EmploymentConnectionTitle {
  key: String | null
  connection: EmploymentConnection | null
  __typename: 'EmploymentConnectionTitle'
}

export interface EmploymentConnectionFromDate {
  key: ID | null
  connection: EmploymentConnection | null
  __typename: 'EmploymentConnectionFromDate'
}

export interface EmploymentConnectionToDate {
  key: ID | null
  connection: EmploymentConnection | null
  __typename: 'EmploymentConnectionToDate'
}

export interface EmploymentConnectionProjects {
  key: String | null
  connection: EmploymentConnection | null
  __typename: 'EmploymentConnectionProjects'
}

export interface EmploymentConnection_id {
  key: ID | null
  connection: EmploymentConnection | null
  __typename: 'EmploymentConnection_id'
}

export interface EmploymentConnectionId {
  key: ID | null
  connection: EmploymentConnection | null
  __typename: 'EmploymentConnectionId'
}

export interface EmploymentConnectionCreatedAt {
  key: DateTime | null
  connection: EmploymentConnection | null
  __typename: 'EmploymentConnectionCreatedAt'
}

export interface EmploymentConnectionUpdatedAt {
  key: DateTime | null
  connection: EmploymentConnection | null
  __typename: 'EmploymentConnectionUpdatedAt'
}

export interface EmploymentAggregator {
  count: Int | null
  totalCount: Int | null
  __typename: 'EmploymentAggregator'
}

export interface PersonalInfo {
  name: String | null
  Title: String | null
  _id: ID
  id: ID
  createdAt: DateTime
  updatedAt: DateTime
  __typename: 'PersonalInfo'
}

export interface PersonalInfoConnection {
  values: (PersonalInfo | null)[] | null
  groupBy: PersonalInfoGroupBy | null
  aggregate: PersonalInfoAggregator | null
  __typename: 'PersonalInfoConnection'
}

export interface PersonalInfoGroupBy {
  name: (PersonalInfoConnectionName | null)[] | null
  Title: (PersonalInfoConnectionTitle | null)[] | null
  _id: (PersonalInfoConnection_id | null)[] | null
  id: (PersonalInfoConnectionId | null)[] | null
  createdAt: (PersonalInfoConnectionCreatedAt | null)[] | null
  updatedAt: (PersonalInfoConnectionUpdatedAt | null)[] | null
  __typename: 'PersonalInfoGroupBy'
}

export interface PersonalInfoConnectionName {
  key: String | null
  connection: PersonalInfoConnection | null
  __typename: 'PersonalInfoConnectionName'
}

export interface PersonalInfoConnectionTitle {
  key: String | null
  connection: PersonalInfoConnection | null
  __typename: 'PersonalInfoConnectionTitle'
}

export interface PersonalInfoConnection_id {
  key: ID | null
  connection: PersonalInfoConnection | null
  __typename: 'PersonalInfoConnection_id'
}

export interface PersonalInfoConnectionId {
  key: ID | null
  connection: PersonalInfoConnection | null
  __typename: 'PersonalInfoConnectionId'
}

export interface PersonalInfoConnectionCreatedAt {
  key: DateTime | null
  connection: PersonalInfoConnection | null
  __typename: 'PersonalInfoConnectionCreatedAt'
}

export interface PersonalInfoConnectionUpdatedAt {
  key: DateTime | null
  connection: PersonalInfoConnection | null
  __typename: 'PersonalInfoConnectionUpdatedAt'
}

export interface PersonalInfoAggregator {
  count: Int | null
  totalCount: Int | null
  __typename: 'PersonalInfoAggregator'
}

export interface UploadFile {
  name: String
  hash: String
  sha256: String | null
  ext: String | null
  mime: String
  size: Float
  url: String
  provider: String
  provider_metadata: JSON | null
  related: (Morph | null)[] | null
  _id: ID
  id: ID
  createdAt: DateTime
  updatedAt: DateTime
  __typename: 'UploadFile'
}

/** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
export type Float = number

export type Morph =
  | UsersPermissionsMe
  | UsersPermissionsMeRole
  | UsersPermissionsLoginPayload
  | Employment
  | createEmploymentPayload
  | updateEmploymentPayload
  | deleteEmploymentPayload
  | EmploymentConnection
  | EmploymentAggregator
  | EmploymentGroupBy
  | EmploymentConnectionCompany
  | EmploymentConnectionTitle
  | EmploymentConnectionFromDate
  | EmploymentConnectionToDate
  | EmploymentConnectionProjects
  | EmploymentConnection_id
  | EmploymentConnectionId
  | EmploymentConnectionCreatedAt
  | EmploymentConnectionUpdatedAt
  | PersonalInfo
  | createPersonalInfoPayload
  | updatePersonalInfoPayload
  | deletePersonalInfoPayload
  | PersonalInfoConnection
  | PersonalInfoAggregator
  | PersonalInfoGroupBy
  | PersonalInfoConnectionName
  | PersonalInfoConnectionTitle
  | PersonalInfoConnection_id
  | PersonalInfoConnectionId
  | PersonalInfoConnectionCreatedAt
  | PersonalInfoConnectionUpdatedAt
  | UploadFile
  | UploadFileConnection
  | UploadFileAggregator
  | UploadFileGroupBy
  | UploadFileConnectionName
  | UploadFileConnectionHash
  | UploadFileConnectionSha256
  | UploadFileConnectionExt
  | UploadFileConnectionMime
  | UploadFileConnectionSize
  | UploadFileConnectionUrl
  | UploadFileConnectionProvider
  | UploadFileConnectionProvider_metadata
  | UploadFileConnection_id
  | UploadFileConnectionId
  | UploadFileConnectionCreatedAt
  | UploadFileConnectionUpdatedAt
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | createRolePayload
  | updateRolePayload
  | deleteRolePayload
  | UsersPermissionsRoleConnection
  | UsersPermissionsRoleAggregator
  | UsersPermissionsRoleGroupBy
  | UsersPermissionsRoleConnectionName
  | UsersPermissionsRoleConnectionDescription
  | UsersPermissionsRoleConnectionType
  | UsersPermissionsRoleConnection_id
  | UsersPermissionsRoleConnectionId
  | UsersPermissionsRoleConnectionCreatedAt
  | UsersPermissionsRoleConnectionUpdatedAt
  | UsersPermissionsUser
  | createUserPayload
  | updateUserPayload
  | deleteUserPayload
  | UsersPermissionsUserConnection
  | UsersPermissionsUserAggregator
  | UsersPermissionsUserGroupBy
  | UsersPermissionsUserConnectionUsername
  | UsersPermissionsUserConnectionEmail
  | UsersPermissionsUserConnectionProvider
  | UsersPermissionsUserConnectionConfirmed
  | UsersPermissionsUserConnectionBlocked
  | UsersPermissionsUserConnectionRole
  | UsersPermissionsUserConnection_id
  | UsersPermissionsUserConnectionId
  | UsersPermissionsUserConnectionCreatedAt
  | UsersPermissionsUserConnectionUpdatedAt

export interface UsersPermissionsMe {
  id: ID
  username: String
  email: String
  confirmed: Boolean | null
  blocked: Boolean | null
  role: UsersPermissionsMeRole | null
  __typename: 'UsersPermissionsMe'
}

/** The `Boolean` scalar type represents `true` or `false`. */
export type Boolean = boolean

export interface UsersPermissionsMeRole {
  id: ID
  name: String
  description: String | null
  type: String | null
  __typename: 'UsersPermissionsMeRole'
}

export interface UsersPermissionsLoginPayload {
  jwt: String
  user: UsersPermissionsMe
  __typename: 'UsersPermissionsLoginPayload'
}

export interface createEmploymentPayload {
  employment: Employment | null
  __typename: 'createEmploymentPayload'
}

export interface updateEmploymentPayload {
  employment: Employment | null
  __typename: 'updateEmploymentPayload'
}

export interface deleteEmploymentPayload {
  employment: Employment | null
  __typename: 'deleteEmploymentPayload'
}

export interface createPersonalInfoPayload {
  personalInfo: PersonalInfo | null
  __typename: 'createPersonalInfoPayload'
}

export interface updatePersonalInfoPayload {
  personalInfo: PersonalInfo | null
  __typename: 'updatePersonalInfoPayload'
}

export interface deletePersonalInfoPayload {
  personalInfo: PersonalInfo | null
  __typename: 'deletePersonalInfoPayload'
}

export interface UploadFileConnection {
  values: (UploadFile | null)[] | null
  groupBy: UploadFileGroupBy | null
  aggregate: UploadFileAggregator | null
  __typename: 'UploadFileConnection'
}

export interface UploadFileGroupBy {
  name: (UploadFileConnectionName | null)[] | null
  hash: (UploadFileConnectionHash | null)[] | null
  sha256: (UploadFileConnectionSha256 | null)[] | null
  ext: (UploadFileConnectionExt | null)[] | null
  mime: (UploadFileConnectionMime | null)[] | null
  size: (UploadFileConnectionSize | null)[] | null
  url: (UploadFileConnectionUrl | null)[] | null
  provider: (UploadFileConnectionProvider | null)[] | null
  provider_metadata: (UploadFileConnectionProvider_metadata | null)[] | null
  _id: (UploadFileConnection_id | null)[] | null
  id: (UploadFileConnectionId | null)[] | null
  createdAt: (UploadFileConnectionCreatedAt | null)[] | null
  updatedAt: (UploadFileConnectionUpdatedAt | null)[] | null
  __typename: 'UploadFileGroupBy'
}

export interface UploadFileConnectionName {
  key: String | null
  connection: UploadFileConnection | null
  __typename: 'UploadFileConnectionName'
}

export interface UploadFileConnectionHash {
  key: String | null
  connection: UploadFileConnection | null
  __typename: 'UploadFileConnectionHash'
}

export interface UploadFileConnectionSha256 {
  key: String | null
  connection: UploadFileConnection | null
  __typename: 'UploadFileConnectionSha256'
}

export interface UploadFileConnectionExt {
  key: String | null
  connection: UploadFileConnection | null
  __typename: 'UploadFileConnectionExt'
}

export interface UploadFileConnectionMime {
  key: String | null
  connection: UploadFileConnection | null
  __typename: 'UploadFileConnectionMime'
}

export interface UploadFileConnectionSize {
  key: Float | null
  connection: UploadFileConnection | null
  __typename: 'UploadFileConnectionSize'
}

export interface UploadFileConnectionUrl {
  key: String | null
  connection: UploadFileConnection | null
  __typename: 'UploadFileConnectionUrl'
}

export interface UploadFileConnectionProvider {
  key: String | null
  connection: UploadFileConnection | null
  __typename: 'UploadFileConnectionProvider'
}

export interface UploadFileConnectionProvider_metadata {
  key: JSON | null
  connection: UploadFileConnection | null
  __typename: 'UploadFileConnectionProvider_metadata'
}

export interface UploadFileConnection_id {
  key: ID | null
  connection: UploadFileConnection | null
  __typename: 'UploadFileConnection_id'
}

export interface UploadFileConnectionId {
  key: ID | null
  connection: UploadFileConnection | null
  __typename: 'UploadFileConnectionId'
}

export interface UploadFileConnectionCreatedAt {
  key: DateTime | null
  connection: UploadFileConnection | null
  __typename: 'UploadFileConnectionCreatedAt'
}

export interface UploadFileConnectionUpdatedAt {
  key: DateTime | null
  connection: UploadFileConnection | null
  __typename: 'UploadFileConnectionUpdatedAt'
}

export interface UploadFileAggregator {
  count: Int | null
  totalCount: Int | null
  __typename: 'UploadFileAggregator'
}

export interface UsersPermissionsPermission {
  type: String
  controller: String
  action: String
  enabled: Boolean
  policy: String | null
  role: UsersPermissionsRole | null
  _id: ID
  id: ID
  createdAt: DateTime
  updatedAt: DateTime
  __typename: 'UsersPermissionsPermission'
}

export interface UsersPermissionsRole {
  name: String
  description: String | null
  type: String | null
  permissions: (UsersPermissionsPermission | null)[] | null
  users: (UsersPermissionsUser | null)[] | null
  _id: ID
  id: ID
  createdAt: DateTime
  updatedAt: DateTime
  __typename: 'UsersPermissionsRole'
}

export interface UsersPermissionsUser {
  username: String
  email: String
  provider: String | null
  confirmed: Boolean | null
  blocked: Boolean | null
  role: UsersPermissionsRole | null
  _id: ID
  id: ID
  createdAt: DateTime
  updatedAt: DateTime
  __typename: 'UsersPermissionsUser'
}

export interface createRolePayload {
  role: UsersPermissionsRole | null
  __typename: 'createRolePayload'
}

export interface updateRolePayload {
  role: UsersPermissionsRole | null
  __typename: 'updateRolePayload'
}

export interface deleteRolePayload {
  role: UsersPermissionsRole | null
  __typename: 'deleteRolePayload'
}

export interface UsersPermissionsRoleConnection {
  values: (UsersPermissionsRole | null)[] | null
  groupBy: UsersPermissionsRoleGroupBy | null
  aggregate: UsersPermissionsRoleAggregator | null
  __typename: 'UsersPermissionsRoleConnection'
}

export interface UsersPermissionsRoleGroupBy {
  name: (UsersPermissionsRoleConnectionName | null)[] | null
  description: (UsersPermissionsRoleConnectionDescription | null)[] | null
  type: (UsersPermissionsRoleConnectionType | null)[] | null
  _id: (UsersPermissionsRoleConnection_id | null)[] | null
  id: (UsersPermissionsRoleConnectionId | null)[] | null
  createdAt: (UsersPermissionsRoleConnectionCreatedAt | null)[] | null
  updatedAt: (UsersPermissionsRoleConnectionUpdatedAt | null)[] | null
  __typename: 'UsersPermissionsRoleGroupBy'
}

export interface UsersPermissionsRoleConnectionName {
  key: String | null
  connection: UsersPermissionsRoleConnection | null
  __typename: 'UsersPermissionsRoleConnectionName'
}

export interface UsersPermissionsRoleConnectionDescription {
  key: String | null
  connection: UsersPermissionsRoleConnection | null
  __typename: 'UsersPermissionsRoleConnectionDescription'
}

export interface UsersPermissionsRoleConnectionType {
  key: String | null
  connection: UsersPermissionsRoleConnection | null
  __typename: 'UsersPermissionsRoleConnectionType'
}

export interface UsersPermissionsRoleConnection_id {
  key: ID | null
  connection: UsersPermissionsRoleConnection | null
  __typename: 'UsersPermissionsRoleConnection_id'
}

export interface UsersPermissionsRoleConnectionId {
  key: ID | null
  connection: UsersPermissionsRoleConnection | null
  __typename: 'UsersPermissionsRoleConnectionId'
}

export interface UsersPermissionsRoleConnectionCreatedAt {
  key: DateTime | null
  connection: UsersPermissionsRoleConnection | null
  __typename: 'UsersPermissionsRoleConnectionCreatedAt'
}

export interface UsersPermissionsRoleConnectionUpdatedAt {
  key: DateTime | null
  connection: UsersPermissionsRoleConnection | null
  __typename: 'UsersPermissionsRoleConnectionUpdatedAt'
}

export interface UsersPermissionsRoleAggregator {
  count: Int | null
  totalCount: Int | null
  __typename: 'UsersPermissionsRoleAggregator'
}

export interface createUserPayload {
  user: UsersPermissionsUser | null
  __typename: 'createUserPayload'
}

export interface updateUserPayload {
  user: UsersPermissionsUser | null
  __typename: 'updateUserPayload'
}

export interface deleteUserPayload {
  user: UsersPermissionsUser | null
  __typename: 'deleteUserPayload'
}

export interface UsersPermissionsUserConnection {
  values: (UsersPermissionsUser | null)[] | null
  groupBy: UsersPermissionsUserGroupBy | null
  aggregate: UsersPermissionsUserAggregator | null
  __typename: 'UsersPermissionsUserConnection'
}

export interface UsersPermissionsUserGroupBy {
  username: (UsersPermissionsUserConnectionUsername | null)[] | null
  email: (UsersPermissionsUserConnectionEmail | null)[] | null
  provider: (UsersPermissionsUserConnectionProvider | null)[] | null
  confirmed: (UsersPermissionsUserConnectionConfirmed | null)[] | null
  blocked: (UsersPermissionsUserConnectionBlocked | null)[] | null
  role: (UsersPermissionsUserConnectionRole | null)[] | null
  _id: (UsersPermissionsUserConnection_id | null)[] | null
  id: (UsersPermissionsUserConnectionId | null)[] | null
  createdAt: (UsersPermissionsUserConnectionCreatedAt | null)[] | null
  updatedAt: (UsersPermissionsUserConnectionUpdatedAt | null)[] | null
  __typename: 'UsersPermissionsUserGroupBy'
}

export interface UsersPermissionsUserConnectionUsername {
  key: String | null
  connection: UsersPermissionsUserConnection | null
  __typename: 'UsersPermissionsUserConnectionUsername'
}

export interface UsersPermissionsUserConnectionEmail {
  key: String | null
  connection: UsersPermissionsUserConnection | null
  __typename: 'UsersPermissionsUserConnectionEmail'
}

export interface UsersPermissionsUserConnectionProvider {
  key: String | null
  connection: UsersPermissionsUserConnection | null
  __typename: 'UsersPermissionsUserConnectionProvider'
}

export interface UsersPermissionsUserConnectionConfirmed {
  key: Boolean | null
  connection: UsersPermissionsUserConnection | null
  __typename: 'UsersPermissionsUserConnectionConfirmed'
}

export interface UsersPermissionsUserConnectionBlocked {
  key: Boolean | null
  connection: UsersPermissionsUserConnection | null
  __typename: 'UsersPermissionsUserConnectionBlocked'
}

export interface UsersPermissionsUserConnectionRole {
  key: ID | null
  connection: UsersPermissionsUserConnection | null
  __typename: 'UsersPermissionsUserConnectionRole'
}

export interface UsersPermissionsUserConnection_id {
  key: ID | null
  connection: UsersPermissionsUserConnection | null
  __typename: 'UsersPermissionsUserConnection_id'
}

export interface UsersPermissionsUserConnectionId {
  key: ID | null
  connection: UsersPermissionsUserConnection | null
  __typename: 'UsersPermissionsUserConnectionId'
}

export interface UsersPermissionsUserConnectionCreatedAt {
  key: DateTime | null
  connection: UsersPermissionsUserConnection | null
  __typename: 'UsersPermissionsUserConnectionCreatedAt'
}

export interface UsersPermissionsUserConnectionUpdatedAt {
  key: DateTime | null
  connection: UsersPermissionsUserConnection | null
  __typename: 'UsersPermissionsUserConnectionUpdatedAt'
}

export interface UsersPermissionsUserAggregator {
  count: Int | null
  totalCount: Int | null
  __typename: 'UsersPermissionsUserAggregator'
}

export interface Mutation {
  createEmployment: createEmploymentPayload | null
  updateEmployment: updateEmploymentPayload | null
  deleteEmployment: deleteEmploymentPayload | null
  createPersonalInfo: createPersonalInfoPayload | null
  updatePersonalInfo: updatePersonalInfoPayload | null
  deletePersonalInfo: deletePersonalInfoPayload | null
  /** Create a new role */
  createRole: createRolePayload | null
  /** Update an existing role */
  updateRole: updateRolePayload | null
  /** Delete an existing role */
  deleteRole: deleteRolePayload | null
  /** Create a new user */
  createUser: createUserPayload | null
  /** Update an existing user */
  updateUser: updateUserPayload | null
  /** Delete an existing user */
  deleteUser: deleteUserPayload | null
  upload: UploadFile
  multipleUpload: (UploadFile | null)[]
  login: UsersPermissionsLoginPayload
  register: UsersPermissionsLoginPayload
  __typename: 'Mutation'
}

/** The `Upload` scalar type represents a file upload. */
export type Upload = any

/** A time string with format: HH:mm:ss.SSS */
export type Time = any

/** The `Long` scalar type represents 52-bit integers */
export type Long = any

export enum CacheControlScope {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

export interface QueryRequest {
  employment?: [{ id: ID }, EmploymentRequest]
  employments?:
    | [{ sort?: String | null; limit?: Int | null; start?: Int | null; where?: JSON | null }, EmploymentRequest]
    | EmploymentRequest
  employmentsConnection?:
    | [{ sort?: String | null; limit?: Int | null; start?: Int | null; where?: JSON | null }, EmploymentConnectionRequest]
    | EmploymentConnectionRequest
  personalInfo?: [{ id: ID }, PersonalInfoRequest]
  personalInfos?:
    | [{ sort?: String | null; limit?: Int | null; start?: Int | null; where?: JSON | null }, PersonalInfoRequest]
    | PersonalInfoRequest
  personalInfosConnection?:
    | [{ sort?: String | null; limit?: Int | null; start?: Int | null; where?: JSON | null }, PersonalInfoConnectionRequest]
    | PersonalInfoConnectionRequest
  files?:
    | [{ sort?: String | null; limit?: Int | null; start?: Int | null; where?: JSON | null }, UploadFileRequest]
    | UploadFileRequest
  filesConnection?:
    | [{ sort?: String | null; limit?: Int | null; start?: Int | null; where?: JSON | null }, UploadFileConnectionRequest]
    | UploadFileConnectionRequest
  role?: [{ id: ID }, UsersPermissionsRoleRequest]
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?:
    | [{ sort?: String | null; limit?: Int | null; start?: Int | null; where?: JSON | null }, UsersPermissionsRoleRequest]
    | UsersPermissionsRoleRequest
  rolesConnection?:
    | [
        { sort?: String | null; limit?: Int | null; start?: Int | null; where?: JSON | null },
        UsersPermissionsRoleConnectionRequest,
      ]
    | UsersPermissionsRoleConnectionRequest
  user?: [{ id: ID }, UsersPermissionsUserRequest]
  users?:
    | [{ sort?: String | null; limit?: Int | null; start?: Int | null; where?: JSON | null }, UsersPermissionsUserRequest]
    | UsersPermissionsUserRequest
  usersConnection?:
    | [
        { sort?: String | null; limit?: Int | null; start?: Int | null; where?: JSON | null },
        UsersPermissionsUserConnectionRequest,
      ]
    | UsersPermissionsUserConnectionRequest
  me?: UsersPermissionsMeRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface EmploymentRequest {
  Company?: boolean | number
  Title?: boolean | number
  fromDate?: boolean | number
  toDate?: boolean | number
  projects?: boolean | number
  _id?: boolean | number
  id?: boolean | number
  createdAt?: boolean | number
  updatedAt?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface EmploymentConnectionRequest {
  values?: EmploymentRequest
  groupBy?: EmploymentGroupByRequest
  aggregate?: EmploymentAggregatorRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface EmploymentGroupByRequest {
  Company?: EmploymentConnectionCompanyRequest
  Title?: EmploymentConnectionTitleRequest
  fromDate?: EmploymentConnectionFromDateRequest
  toDate?: EmploymentConnectionToDateRequest
  projects?: EmploymentConnectionProjectsRequest
  _id?: EmploymentConnection_idRequest
  id?: EmploymentConnectionIdRequest
  createdAt?: EmploymentConnectionCreatedAtRequest
  updatedAt?: EmploymentConnectionUpdatedAtRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface EmploymentConnectionCompanyRequest {
  key?: boolean | number
  connection?: EmploymentConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface EmploymentConnectionTitleRequest {
  key?: boolean | number
  connection?: EmploymentConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface EmploymentConnectionFromDateRequest {
  key?: boolean | number
  connection?: EmploymentConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface EmploymentConnectionToDateRequest {
  key?: boolean | number
  connection?: EmploymentConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface EmploymentConnectionProjectsRequest {
  key?: boolean | number
  connection?: EmploymentConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface EmploymentConnection_idRequest {
  key?: boolean | number
  connection?: EmploymentConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface EmploymentConnectionIdRequest {
  key?: boolean | number
  connection?: EmploymentConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface EmploymentConnectionCreatedAtRequest {
  key?: boolean | number
  connection?: EmploymentConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface EmploymentConnectionUpdatedAtRequest {
  key?: boolean | number
  connection?: EmploymentConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface EmploymentAggregatorRequest {
  count?: boolean | number
  totalCount?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PersonalInfoRequest {
  name?: boolean | number
  Title?: boolean | number
  _id?: boolean | number
  id?: boolean | number
  createdAt?: boolean | number
  updatedAt?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PersonalInfoConnectionRequest {
  values?: PersonalInfoRequest
  groupBy?: PersonalInfoGroupByRequest
  aggregate?: PersonalInfoAggregatorRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PersonalInfoGroupByRequest {
  name?: PersonalInfoConnectionNameRequest
  Title?: PersonalInfoConnectionTitleRequest
  _id?: PersonalInfoConnection_idRequest
  id?: PersonalInfoConnectionIdRequest
  createdAt?: PersonalInfoConnectionCreatedAtRequest
  updatedAt?: PersonalInfoConnectionUpdatedAtRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PersonalInfoConnectionNameRequest {
  key?: boolean | number
  connection?: PersonalInfoConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PersonalInfoConnectionTitleRequest {
  key?: boolean | number
  connection?: PersonalInfoConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PersonalInfoConnection_idRequest {
  key?: boolean | number
  connection?: PersonalInfoConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PersonalInfoConnectionIdRequest {
  key?: boolean | number
  connection?: PersonalInfoConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PersonalInfoConnectionCreatedAtRequest {
  key?: boolean | number
  connection?: PersonalInfoConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PersonalInfoConnectionUpdatedAtRequest {
  key?: boolean | number
  connection?: PersonalInfoConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PersonalInfoAggregatorRequest {
  count?: boolean | number
  totalCount?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UploadFileRequest {
  name?: boolean | number
  hash?: boolean | number
  sha256?: boolean | number
  ext?: boolean | number
  mime?: boolean | number
  size?: boolean | number
  url?: boolean | number
  provider?: boolean | number
  provider_metadata?: boolean | number
  related?:
    | [{ sort?: String | null; limit?: Int | null; start?: Int | null; where?: JSON | null }, MorphRequest]
    | MorphRequest
  _id?: boolean | number
  id?: boolean | number
  createdAt?: boolean | number
  updatedAt?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface MorphRequest {
  on_UsersPermissionsMe?: UsersPermissionsMeRequest
  on_UsersPermissionsMeRole?: UsersPermissionsMeRoleRequest
  on_UsersPermissionsLoginPayload?: UsersPermissionsLoginPayloadRequest
  on_Employment?: EmploymentRequest
  on_createEmploymentPayload?: createEmploymentPayloadRequest
  on_updateEmploymentPayload?: updateEmploymentPayloadRequest
  on_deleteEmploymentPayload?: deleteEmploymentPayloadRequest
  on_EmploymentConnection?: EmploymentConnectionRequest
  on_EmploymentAggregator?: EmploymentAggregatorRequest
  on_EmploymentGroupBy?: EmploymentGroupByRequest
  on_EmploymentConnectionCompany?: EmploymentConnectionCompanyRequest
  on_EmploymentConnectionTitle?: EmploymentConnectionTitleRequest
  on_EmploymentConnectionFromDate?: EmploymentConnectionFromDateRequest
  on_EmploymentConnectionToDate?: EmploymentConnectionToDateRequest
  on_EmploymentConnectionProjects?: EmploymentConnectionProjectsRequest
  on_EmploymentConnection_id?: EmploymentConnection_idRequest
  on_EmploymentConnectionId?: EmploymentConnectionIdRequest
  on_EmploymentConnectionCreatedAt?: EmploymentConnectionCreatedAtRequest
  on_EmploymentConnectionUpdatedAt?: EmploymentConnectionUpdatedAtRequest
  on_PersonalInfo?: PersonalInfoRequest
  on_createPersonalInfoPayload?: createPersonalInfoPayloadRequest
  on_updatePersonalInfoPayload?: updatePersonalInfoPayloadRequest
  on_deletePersonalInfoPayload?: deletePersonalInfoPayloadRequest
  on_PersonalInfoConnection?: PersonalInfoConnectionRequest
  on_PersonalInfoAggregator?: PersonalInfoAggregatorRequest
  on_PersonalInfoGroupBy?: PersonalInfoGroupByRequest
  on_PersonalInfoConnectionName?: PersonalInfoConnectionNameRequest
  on_PersonalInfoConnectionTitle?: PersonalInfoConnectionTitleRequest
  on_PersonalInfoConnection_id?: PersonalInfoConnection_idRequest
  on_PersonalInfoConnectionId?: PersonalInfoConnectionIdRequest
  on_PersonalInfoConnectionCreatedAt?: PersonalInfoConnectionCreatedAtRequest
  on_PersonalInfoConnectionUpdatedAt?: PersonalInfoConnectionUpdatedAtRequest
  on_UploadFile?: UploadFileRequest
  on_UploadFileConnection?: UploadFileConnectionRequest
  on_UploadFileAggregator?: UploadFileAggregatorRequest
  on_UploadFileGroupBy?: UploadFileGroupByRequest
  on_UploadFileConnectionName?: UploadFileConnectionNameRequest
  on_UploadFileConnectionHash?: UploadFileConnectionHashRequest
  on_UploadFileConnectionSha256?: UploadFileConnectionSha256Request
  on_UploadFileConnectionExt?: UploadFileConnectionExtRequest
  on_UploadFileConnectionMime?: UploadFileConnectionMimeRequest
  on_UploadFileConnectionSize?: UploadFileConnectionSizeRequest
  on_UploadFileConnectionUrl?: UploadFileConnectionUrlRequest
  on_UploadFileConnectionProvider?: UploadFileConnectionProviderRequest
  on_UploadFileConnectionProvider_metadata?: UploadFileConnectionProvider_metadataRequest
  on_UploadFileConnection_id?: UploadFileConnection_idRequest
  on_UploadFileConnectionId?: UploadFileConnectionIdRequest
  on_UploadFileConnectionCreatedAt?: UploadFileConnectionCreatedAtRequest
  on_UploadFileConnectionUpdatedAt?: UploadFileConnectionUpdatedAtRequest
  on_UsersPermissionsPermission?: UsersPermissionsPermissionRequest
  on_UsersPermissionsRole?: UsersPermissionsRoleRequest
  on_createRolePayload?: createRolePayloadRequest
  on_updateRolePayload?: updateRolePayloadRequest
  on_deleteRolePayload?: deleteRolePayloadRequest
  on_UsersPermissionsRoleConnection?: UsersPermissionsRoleConnectionRequest
  on_UsersPermissionsRoleAggregator?: UsersPermissionsRoleAggregatorRequest
  on_UsersPermissionsRoleGroupBy?: UsersPermissionsRoleGroupByRequest
  on_UsersPermissionsRoleConnectionName?: UsersPermissionsRoleConnectionNameRequest
  on_UsersPermissionsRoleConnectionDescription?: UsersPermissionsRoleConnectionDescriptionRequest
  on_UsersPermissionsRoleConnectionType?: UsersPermissionsRoleConnectionTypeRequest
  on_UsersPermissionsRoleConnection_id?: UsersPermissionsRoleConnection_idRequest
  on_UsersPermissionsRoleConnectionId?: UsersPermissionsRoleConnectionIdRequest
  on_UsersPermissionsRoleConnectionCreatedAt?: UsersPermissionsRoleConnectionCreatedAtRequest
  on_UsersPermissionsRoleConnectionUpdatedAt?: UsersPermissionsRoleConnectionUpdatedAtRequest
  on_UsersPermissionsUser?: UsersPermissionsUserRequest
  on_createUserPayload?: createUserPayloadRequest
  on_updateUserPayload?: updateUserPayloadRequest
  on_deleteUserPayload?: deleteUserPayloadRequest
  on_UsersPermissionsUserConnection?: UsersPermissionsUserConnectionRequest
  on_UsersPermissionsUserAggregator?: UsersPermissionsUserAggregatorRequest
  on_UsersPermissionsUserGroupBy?: UsersPermissionsUserGroupByRequest
  on_UsersPermissionsUserConnectionUsername?: UsersPermissionsUserConnectionUsernameRequest
  on_UsersPermissionsUserConnectionEmail?: UsersPermissionsUserConnectionEmailRequest
  on_UsersPermissionsUserConnectionProvider?: UsersPermissionsUserConnectionProviderRequest
  on_UsersPermissionsUserConnectionConfirmed?: UsersPermissionsUserConnectionConfirmedRequest
  on_UsersPermissionsUserConnectionBlocked?: UsersPermissionsUserConnectionBlockedRequest
  on_UsersPermissionsUserConnectionRole?: UsersPermissionsUserConnectionRoleRequest
  on_UsersPermissionsUserConnection_id?: UsersPermissionsUserConnection_idRequest
  on_UsersPermissionsUserConnectionId?: UsersPermissionsUserConnectionIdRequest
  on_UsersPermissionsUserConnectionCreatedAt?: UsersPermissionsUserConnectionCreatedAtRequest
  on_UsersPermissionsUserConnectionUpdatedAt?: UsersPermissionsUserConnectionUpdatedAtRequest
  __typename?: boolean | number
}

export interface UsersPermissionsMeRequest {
  id?: boolean | number
  username?: boolean | number
  email?: boolean | number
  confirmed?: boolean | number
  blocked?: boolean | number
  role?: UsersPermissionsMeRoleRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsMeRoleRequest {
  id?: boolean | number
  name?: boolean | number
  description?: boolean | number
  type?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsLoginPayloadRequest {
  jwt?: boolean | number
  user?: UsersPermissionsMeRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface createEmploymentPayloadRequest {
  employment?: EmploymentRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface updateEmploymentPayloadRequest {
  employment?: EmploymentRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface deleteEmploymentPayloadRequest {
  employment?: EmploymentRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface createPersonalInfoPayloadRequest {
  personalInfo?: PersonalInfoRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface updatePersonalInfoPayloadRequest {
  personalInfo?: PersonalInfoRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface deletePersonalInfoPayloadRequest {
  personalInfo?: PersonalInfoRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UploadFileConnectionRequest {
  values?: UploadFileRequest
  groupBy?: UploadFileGroupByRequest
  aggregate?: UploadFileAggregatorRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UploadFileGroupByRequest {
  name?: UploadFileConnectionNameRequest
  hash?: UploadFileConnectionHashRequest
  sha256?: UploadFileConnectionSha256Request
  ext?: UploadFileConnectionExtRequest
  mime?: UploadFileConnectionMimeRequest
  size?: UploadFileConnectionSizeRequest
  url?: UploadFileConnectionUrlRequest
  provider?: UploadFileConnectionProviderRequest
  provider_metadata?: UploadFileConnectionProvider_metadataRequest
  _id?: UploadFileConnection_idRequest
  id?: UploadFileConnectionIdRequest
  createdAt?: UploadFileConnectionCreatedAtRequest
  updatedAt?: UploadFileConnectionUpdatedAtRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UploadFileConnectionNameRequest {
  key?: boolean | number
  connection?: UploadFileConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UploadFileConnectionHashRequest {
  key?: boolean | number
  connection?: UploadFileConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UploadFileConnectionSha256Request {
  key?: boolean | number
  connection?: UploadFileConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UploadFileConnectionExtRequest {
  key?: boolean | number
  connection?: UploadFileConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UploadFileConnectionMimeRequest {
  key?: boolean | number
  connection?: UploadFileConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UploadFileConnectionSizeRequest {
  key?: boolean | number
  connection?: UploadFileConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UploadFileConnectionUrlRequest {
  key?: boolean | number
  connection?: UploadFileConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UploadFileConnectionProviderRequest {
  key?: boolean | number
  connection?: UploadFileConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UploadFileConnectionProvider_metadataRequest {
  key?: boolean | number
  connection?: UploadFileConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UploadFileConnection_idRequest {
  key?: boolean | number
  connection?: UploadFileConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UploadFileConnectionIdRequest {
  key?: boolean | number
  connection?: UploadFileConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UploadFileConnectionCreatedAtRequest {
  key?: boolean | number
  connection?: UploadFileConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UploadFileConnectionUpdatedAtRequest {
  key?: boolean | number
  connection?: UploadFileConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UploadFileAggregatorRequest {
  count?: boolean | number
  totalCount?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsPermissionRequest {
  type?: boolean | number
  controller?: boolean | number
  action?: boolean | number
  enabled?: boolean | number
  policy?: boolean | number
  role?: UsersPermissionsRoleRequest
  _id?: boolean | number
  id?: boolean | number
  createdAt?: boolean | number
  updatedAt?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsRoleRequest {
  name?: boolean | number
  description?: boolean | number
  type?: boolean | number
  permissions?:
    | [
        { sort?: String | null; limit?: Int | null; start?: Int | null; where?: JSON | null },
        UsersPermissionsPermissionRequest,
      ]
    | UsersPermissionsPermissionRequest
  users?:
    | [{ sort?: String | null; limit?: Int | null; start?: Int | null; where?: JSON | null }, UsersPermissionsUserRequest]
    | UsersPermissionsUserRequest
  _id?: boolean | number
  id?: boolean | number
  createdAt?: boolean | number
  updatedAt?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsUserRequest {
  username?: boolean | number
  email?: boolean | number
  provider?: boolean | number
  confirmed?: boolean | number
  blocked?: boolean | number
  role?: UsersPermissionsRoleRequest
  _id?: boolean | number
  id?: boolean | number
  createdAt?: boolean | number
  updatedAt?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface createRolePayloadRequest {
  role?: UsersPermissionsRoleRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface updateRolePayloadRequest {
  role?: UsersPermissionsRoleRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface deleteRolePayloadRequest {
  role?: UsersPermissionsRoleRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsRoleConnectionRequest {
  values?: UsersPermissionsRoleRequest
  groupBy?: UsersPermissionsRoleGroupByRequest
  aggregate?: UsersPermissionsRoleAggregatorRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsRoleGroupByRequest {
  name?: UsersPermissionsRoleConnectionNameRequest
  description?: UsersPermissionsRoleConnectionDescriptionRequest
  type?: UsersPermissionsRoleConnectionTypeRequest
  _id?: UsersPermissionsRoleConnection_idRequest
  id?: UsersPermissionsRoleConnectionIdRequest
  createdAt?: UsersPermissionsRoleConnectionCreatedAtRequest
  updatedAt?: UsersPermissionsRoleConnectionUpdatedAtRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsRoleConnectionNameRequest {
  key?: boolean | number
  connection?: UsersPermissionsRoleConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsRoleConnectionDescriptionRequest {
  key?: boolean | number
  connection?: UsersPermissionsRoleConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsRoleConnectionTypeRequest {
  key?: boolean | number
  connection?: UsersPermissionsRoleConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsRoleConnection_idRequest {
  key?: boolean | number
  connection?: UsersPermissionsRoleConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsRoleConnectionIdRequest {
  key?: boolean | number
  connection?: UsersPermissionsRoleConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsRoleConnectionCreatedAtRequest {
  key?: boolean | number
  connection?: UsersPermissionsRoleConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsRoleConnectionUpdatedAtRequest {
  key?: boolean | number
  connection?: UsersPermissionsRoleConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsRoleAggregatorRequest {
  count?: boolean | number
  totalCount?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface createUserPayloadRequest {
  user?: UsersPermissionsUserRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface updateUserPayloadRequest {
  user?: UsersPermissionsUserRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface deleteUserPayloadRequest {
  user?: UsersPermissionsUserRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsUserConnectionRequest {
  values?: UsersPermissionsUserRequest
  groupBy?: UsersPermissionsUserGroupByRequest
  aggregate?: UsersPermissionsUserAggregatorRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsUserGroupByRequest {
  username?: UsersPermissionsUserConnectionUsernameRequest
  email?: UsersPermissionsUserConnectionEmailRequest
  provider?: UsersPermissionsUserConnectionProviderRequest
  confirmed?: UsersPermissionsUserConnectionConfirmedRequest
  blocked?: UsersPermissionsUserConnectionBlockedRequest
  role?: UsersPermissionsUserConnectionRoleRequest
  _id?: UsersPermissionsUserConnection_idRequest
  id?: UsersPermissionsUserConnectionIdRequest
  createdAt?: UsersPermissionsUserConnectionCreatedAtRequest
  updatedAt?: UsersPermissionsUserConnectionUpdatedAtRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsUserConnectionUsernameRequest {
  key?: boolean | number
  connection?: UsersPermissionsUserConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsUserConnectionEmailRequest {
  key?: boolean | number
  connection?: UsersPermissionsUserConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsUserConnectionProviderRequest {
  key?: boolean | number
  connection?: UsersPermissionsUserConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsUserConnectionConfirmedRequest {
  key?: boolean | number
  connection?: UsersPermissionsUserConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsUserConnectionBlockedRequest {
  key?: boolean | number
  connection?: UsersPermissionsUserConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsUserConnectionRoleRequest {
  key?: boolean | number
  connection?: UsersPermissionsUserConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsUserConnection_idRequest {
  key?: boolean | number
  connection?: UsersPermissionsUserConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsUserConnectionIdRequest {
  key?: boolean | number
  connection?: UsersPermissionsUserConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsUserConnectionCreatedAtRequest {
  key?: boolean | number
  connection?: UsersPermissionsUserConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsUserConnectionUpdatedAtRequest {
  key?: boolean | number
  connection?: UsersPermissionsUserConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UsersPermissionsUserAggregatorRequest {
  count?: boolean | number
  totalCount?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface MutationRequest {
  createEmployment?:
    | [{ input?: createEmploymentInput | null }, createEmploymentPayloadRequest]
    | createEmploymentPayloadRequest
  updateEmployment?:
    | [{ input?: updateEmploymentInput | null }, updateEmploymentPayloadRequest]
    | updateEmploymentPayloadRequest
  deleteEmployment?:
    | [{ input?: deleteEmploymentInput | null }, deleteEmploymentPayloadRequest]
    | deleteEmploymentPayloadRequest
  createPersonalInfo?:
    | [{ input?: createPersonalInfoInput | null }, createPersonalInfoPayloadRequest]
    | createPersonalInfoPayloadRequest
  updatePersonalInfo?:
    | [{ input?: updatePersonalInfoInput | null }, updatePersonalInfoPayloadRequest]
    | updatePersonalInfoPayloadRequest
  deletePersonalInfo?:
    | [{ input?: deletePersonalInfoInput | null }, deletePersonalInfoPayloadRequest]
    | deletePersonalInfoPayloadRequest
  /** Create a new role */
  createRole?: [{ input?: createRoleInput | null }, createRolePayloadRequest] | createRolePayloadRequest
  /** Update an existing role */
  updateRole?: [{ input?: updateRoleInput | null }, updateRolePayloadRequest] | updateRolePayloadRequest
  /** Delete an existing role */
  deleteRole?: [{ input?: deleteRoleInput | null }, deleteRolePayloadRequest] | deleteRolePayloadRequest
  /** Create a new user */
  createUser?: [{ input?: createUserInput | null }, createUserPayloadRequest] | createUserPayloadRequest
  /** Update an existing user */
  updateUser?: [{ input?: updateUserInput | null }, updateUserPayloadRequest] | updateUserPayloadRequest
  /** Delete an existing user */
  deleteUser?: [{ input?: deleteUserInput | null }, deleteUserPayloadRequest] | deleteUserPayloadRequest
  upload?: [
    { refId?: ID | null; ref?: String | null; field?: String | null; source?: String | null; file: Upload },
    UploadFileRequest,
  ]
  multipleUpload?: [
    { refId?: ID | null; ref?: String | null; field?: String | null; source?: String | null; files: (Upload | null)[] },
    UploadFileRequest,
  ]
  login?: [{ input: UsersPermissionsLoginInput }, UsersPermissionsLoginPayloadRequest]
  register?: [{ input: UserInput }, UsersPermissionsLoginPayloadRequest]
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface createEmploymentInput {
  data?: EmploymentInput | null
}

export interface EmploymentInput {
  Company?: String | null
  Title?: String | null
  fromDate?: Date | null
  toDate?: Date | null
  projects?: String | null
}

export interface updateEmploymentInput {
  where?: InputID | null
  data?: editEmploymentInput | null
}

export interface InputID {
  id: ID
}

export interface editEmploymentInput {
  Company?: String | null
  Title?: String | null
  fromDate?: Date | null
  toDate?: Date | null
  projects?: String | null
}

export interface deleteEmploymentInput {
  where?: InputID | null
}

export interface createPersonalInfoInput {
  data?: PersonalInfoInput | null
}

export interface PersonalInfoInput {
  name?: String | null
  Title?: String | null
}

export interface updatePersonalInfoInput {
  where?: InputID | null
  data?: editPersonalInfoInput | null
}

export interface editPersonalInfoInput {
  name?: String | null
  Title?: String | null
}

export interface deletePersonalInfoInput {
  where?: InputID | null
}

export interface createRoleInput {
  data?: RoleInput | null
}

export interface RoleInput {
  name: String
  description?: String | null
  type?: String | null
  permissions?: (ID | null)[] | null
  users?: (ID | null)[] | null
}

export interface updateRoleInput {
  where?: InputID | null
  data?: editRoleInput | null
}

export interface editRoleInput {
  name?: String | null
  description?: String | null
  type?: String | null
  permissions?: (ID | null)[] | null
  users?: (ID | null)[] | null
}

export interface deleteRoleInput {
  where?: InputID | null
}

export interface createUserInput {
  data?: UserInput | null
}

export interface UserInput {
  username: String
  email: String
  provider?: String | null
  password?: String | null
  resetPasswordToken?: String | null
  confirmed?: Boolean | null
  blocked?: Boolean | null
  role?: ID | null
}

export interface updateUserInput {
  where?: InputID | null
  data?: editUserInput | null
}

export interface editUserInput {
  username?: String | null
  email?: String | null
  provider?: String | null
  password?: String | null
  resetPasswordToken?: String | null
  confirmed?: Boolean | null
  blocked?: Boolean | null
  role?: ID | null
}

export interface deleteUserInput {
  where?: InputID | null
}

export interface UsersPermissionsLoginInput {
  identifier: String
  password: String
  provider?: String | null
}

export interface FileInput {
  name: String
  hash: String
  sha256?: String | null
  ext?: String | null
  mime: String
  size: Float
  url: String
  provider: String
  provider_metadata?: JSON | null
  related?: (ID | null)[] | null
}

export interface editFileInput {
  name?: String | null
  hash?: String | null
  sha256?: String | null
  ext?: String | null
  mime?: String | null
  size?: Float | null
  url?: String | null
  provider?: String | null
  provider_metadata?: JSON | null
  related?: (ID | null)[] | null
}

const Query_possibleTypes = ['Query']
export const isQuery = (obj: { __typename: String }): obj is Query => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Query_possibleTypes.includes(obj.__typename)
}

const Employment_possibleTypes = ['Employment']
export const isEmployment = (obj: { __typename: String }): obj is Employment => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Employment_possibleTypes.includes(obj.__typename)
}

const EmploymentConnection_possibleTypes = ['EmploymentConnection']
export const isEmploymentConnection = (obj: { __typename: String }): obj is EmploymentConnection => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return EmploymentConnection_possibleTypes.includes(obj.__typename)
}

const EmploymentGroupBy_possibleTypes = ['EmploymentGroupBy']
export const isEmploymentGroupBy = (obj: { __typename: String }): obj is EmploymentGroupBy => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return EmploymentGroupBy_possibleTypes.includes(obj.__typename)
}

const EmploymentConnectionCompany_possibleTypes = ['EmploymentConnectionCompany']
export const isEmploymentConnectionCompany = (obj: { __typename: String }): obj is EmploymentConnectionCompany => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return EmploymentConnectionCompany_possibleTypes.includes(obj.__typename)
}

const EmploymentConnectionTitle_possibleTypes = ['EmploymentConnectionTitle']
export const isEmploymentConnectionTitle = (obj: { __typename: String }): obj is EmploymentConnectionTitle => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return EmploymentConnectionTitle_possibleTypes.includes(obj.__typename)
}

const EmploymentConnectionFromDate_possibleTypes = ['EmploymentConnectionFromDate']
export const isEmploymentConnectionFromDate = (obj: { __typename: String }): obj is EmploymentConnectionFromDate => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return EmploymentConnectionFromDate_possibleTypes.includes(obj.__typename)
}

const EmploymentConnectionToDate_possibleTypes = ['EmploymentConnectionToDate']
export const isEmploymentConnectionToDate = (obj: { __typename: String }): obj is EmploymentConnectionToDate => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return EmploymentConnectionToDate_possibleTypes.includes(obj.__typename)
}

const EmploymentConnectionProjects_possibleTypes = ['EmploymentConnectionProjects']
export const isEmploymentConnectionProjects = (obj: { __typename: String }): obj is EmploymentConnectionProjects => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return EmploymentConnectionProjects_possibleTypes.includes(obj.__typename)
}

const EmploymentConnection_id_possibleTypes = ['EmploymentConnection_id']
export const isEmploymentConnection_id = (obj: { __typename: String }): obj is EmploymentConnection_id => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return EmploymentConnection_id_possibleTypes.includes(obj.__typename)
}

const EmploymentConnectionId_possibleTypes = ['EmploymentConnectionId']
export const isEmploymentConnectionId = (obj: { __typename: String }): obj is EmploymentConnectionId => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return EmploymentConnectionId_possibleTypes.includes(obj.__typename)
}

const EmploymentConnectionCreatedAt_possibleTypes = ['EmploymentConnectionCreatedAt']
export const isEmploymentConnectionCreatedAt = (obj: { __typename: String }): obj is EmploymentConnectionCreatedAt => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return EmploymentConnectionCreatedAt_possibleTypes.includes(obj.__typename)
}

const EmploymentConnectionUpdatedAt_possibleTypes = ['EmploymentConnectionUpdatedAt']
export const isEmploymentConnectionUpdatedAt = (obj: { __typename: String }): obj is EmploymentConnectionUpdatedAt => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return EmploymentConnectionUpdatedAt_possibleTypes.includes(obj.__typename)
}

const EmploymentAggregator_possibleTypes = ['EmploymentAggregator']
export const isEmploymentAggregator = (obj: { __typename: String }): obj is EmploymentAggregator => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return EmploymentAggregator_possibleTypes.includes(obj.__typename)
}

const PersonalInfo_possibleTypes = ['PersonalInfo']
export const isPersonalInfo = (obj: { __typename: String }): obj is PersonalInfo => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return PersonalInfo_possibleTypes.includes(obj.__typename)
}

const PersonalInfoConnection_possibleTypes = ['PersonalInfoConnection']
export const isPersonalInfoConnection = (obj: { __typename: String }): obj is PersonalInfoConnection => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return PersonalInfoConnection_possibleTypes.includes(obj.__typename)
}

const PersonalInfoGroupBy_possibleTypes = ['PersonalInfoGroupBy']
export const isPersonalInfoGroupBy = (obj: { __typename: String }): obj is PersonalInfoGroupBy => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return PersonalInfoGroupBy_possibleTypes.includes(obj.__typename)
}

const PersonalInfoConnectionName_possibleTypes = ['PersonalInfoConnectionName']
export const isPersonalInfoConnectionName = (obj: { __typename: String }): obj is PersonalInfoConnectionName => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return PersonalInfoConnectionName_possibleTypes.includes(obj.__typename)
}

const PersonalInfoConnectionTitle_possibleTypes = ['PersonalInfoConnectionTitle']
export const isPersonalInfoConnectionTitle = (obj: { __typename: String }): obj is PersonalInfoConnectionTitle => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return PersonalInfoConnectionTitle_possibleTypes.includes(obj.__typename)
}

const PersonalInfoConnection_id_possibleTypes = ['PersonalInfoConnection_id']
export const isPersonalInfoConnection_id = (obj: { __typename: String }): obj is PersonalInfoConnection_id => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return PersonalInfoConnection_id_possibleTypes.includes(obj.__typename)
}

const PersonalInfoConnectionId_possibleTypes = ['PersonalInfoConnectionId']
export const isPersonalInfoConnectionId = (obj: { __typename: String }): obj is PersonalInfoConnectionId => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return PersonalInfoConnectionId_possibleTypes.includes(obj.__typename)
}

const PersonalInfoConnectionCreatedAt_possibleTypes = ['PersonalInfoConnectionCreatedAt']
export const isPersonalInfoConnectionCreatedAt = (obj: { __typename: String }): obj is PersonalInfoConnectionCreatedAt => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return PersonalInfoConnectionCreatedAt_possibleTypes.includes(obj.__typename)
}

const PersonalInfoConnectionUpdatedAt_possibleTypes = ['PersonalInfoConnectionUpdatedAt']
export const isPersonalInfoConnectionUpdatedAt = (obj: { __typename: String }): obj is PersonalInfoConnectionUpdatedAt => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return PersonalInfoConnectionUpdatedAt_possibleTypes.includes(obj.__typename)
}

const PersonalInfoAggregator_possibleTypes = ['PersonalInfoAggregator']
export const isPersonalInfoAggregator = (obj: { __typename: String }): obj is PersonalInfoAggregator => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return PersonalInfoAggregator_possibleTypes.includes(obj.__typename)
}

const UploadFile_possibleTypes = ['UploadFile']
export const isUploadFile = (obj: { __typename: String }): obj is UploadFile => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UploadFile_possibleTypes.includes(obj.__typename)
}

const Morph_possibleTypes = [
  'UsersPermissionsMe',
  'UsersPermissionsMeRole',
  'UsersPermissionsLoginPayload',
  'Employment',
  'createEmploymentPayload',
  'updateEmploymentPayload',
  'deleteEmploymentPayload',
  'EmploymentConnection',
  'EmploymentAggregator',
  'EmploymentGroupBy',
  'EmploymentConnectionCompany',
  'EmploymentConnectionTitle',
  'EmploymentConnectionFromDate',
  'EmploymentConnectionToDate',
  'EmploymentConnectionProjects',
  'EmploymentConnection_id',
  'EmploymentConnectionId',
  'EmploymentConnectionCreatedAt',
  'EmploymentConnectionUpdatedAt',
  'PersonalInfo',
  'createPersonalInfoPayload',
  'updatePersonalInfoPayload',
  'deletePersonalInfoPayload',
  'PersonalInfoConnection',
  'PersonalInfoAggregator',
  'PersonalInfoGroupBy',
  'PersonalInfoConnectionName',
  'PersonalInfoConnectionTitle',
  'PersonalInfoConnection_id',
  'PersonalInfoConnectionId',
  'PersonalInfoConnectionCreatedAt',
  'PersonalInfoConnectionUpdatedAt',
  'UploadFile',
  'UploadFileConnection',
  'UploadFileAggregator',
  'UploadFileGroupBy',
  'UploadFileConnectionName',
  'UploadFileConnectionHash',
  'UploadFileConnectionSha256',
  'UploadFileConnectionExt',
  'UploadFileConnectionMime',
  'UploadFileConnectionSize',
  'UploadFileConnectionUrl',
  'UploadFileConnectionProvider',
  'UploadFileConnectionProvider_metadata',
  'UploadFileConnection_id',
  'UploadFileConnectionId',
  'UploadFileConnectionCreatedAt',
  'UploadFileConnectionUpdatedAt',
  'UsersPermissionsPermission',
  'UsersPermissionsRole',
  'createRolePayload',
  'updateRolePayload',
  'deleteRolePayload',
  'UsersPermissionsRoleConnection',
  'UsersPermissionsRoleAggregator',
  'UsersPermissionsRoleGroupBy',
  'UsersPermissionsRoleConnectionName',
  'UsersPermissionsRoleConnectionDescription',
  'UsersPermissionsRoleConnectionType',
  'UsersPermissionsRoleConnection_id',
  'UsersPermissionsRoleConnectionId',
  'UsersPermissionsRoleConnectionCreatedAt',
  'UsersPermissionsRoleConnectionUpdatedAt',
  'UsersPermissionsUser',
  'createUserPayload',
  'updateUserPayload',
  'deleteUserPayload',
  'UsersPermissionsUserConnection',
  'UsersPermissionsUserAggregator',
  'UsersPermissionsUserGroupBy',
  'UsersPermissionsUserConnectionUsername',
  'UsersPermissionsUserConnectionEmail',
  'UsersPermissionsUserConnectionProvider',
  'UsersPermissionsUserConnectionConfirmed',
  'UsersPermissionsUserConnectionBlocked',
  'UsersPermissionsUserConnectionRole',
  'UsersPermissionsUserConnection_id',
  'UsersPermissionsUserConnectionId',
  'UsersPermissionsUserConnectionCreatedAt',
  'UsersPermissionsUserConnectionUpdatedAt',
]
export const isMorph = (obj: { __typename: String }): obj is Morph => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Morph_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsMe_possibleTypes = ['UsersPermissionsMe']
export const isUsersPermissionsMe = (obj: { __typename: String }): obj is UsersPermissionsMe => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsMe_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsMeRole_possibleTypes = ['UsersPermissionsMeRole']
export const isUsersPermissionsMeRole = (obj: { __typename: String }): obj is UsersPermissionsMeRole => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsMeRole_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsLoginPayload_possibleTypes = ['UsersPermissionsLoginPayload']
export const isUsersPermissionsLoginPayload = (obj: { __typename: String }): obj is UsersPermissionsLoginPayload => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsLoginPayload_possibleTypes.includes(obj.__typename)
}

const createEmploymentPayload_possibleTypes = ['createEmploymentPayload']
export const iscreateEmploymentPayload = (obj: { __typename: String }): obj is createEmploymentPayload => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return createEmploymentPayload_possibleTypes.includes(obj.__typename)
}

const updateEmploymentPayload_possibleTypes = ['updateEmploymentPayload']
export const isupdateEmploymentPayload = (obj: { __typename: String }): obj is updateEmploymentPayload => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return updateEmploymentPayload_possibleTypes.includes(obj.__typename)
}

const deleteEmploymentPayload_possibleTypes = ['deleteEmploymentPayload']
export const isdeleteEmploymentPayload = (obj: { __typename: String }): obj is deleteEmploymentPayload => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return deleteEmploymentPayload_possibleTypes.includes(obj.__typename)
}

const createPersonalInfoPayload_possibleTypes = ['createPersonalInfoPayload']
export const iscreatePersonalInfoPayload = (obj: { __typename: String }): obj is createPersonalInfoPayload => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return createPersonalInfoPayload_possibleTypes.includes(obj.__typename)
}

const updatePersonalInfoPayload_possibleTypes = ['updatePersonalInfoPayload']
export const isupdatePersonalInfoPayload = (obj: { __typename: String }): obj is updatePersonalInfoPayload => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return updatePersonalInfoPayload_possibleTypes.includes(obj.__typename)
}

const deletePersonalInfoPayload_possibleTypes = ['deletePersonalInfoPayload']
export const isdeletePersonalInfoPayload = (obj: { __typename: String }): obj is deletePersonalInfoPayload => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return deletePersonalInfoPayload_possibleTypes.includes(obj.__typename)
}

const UploadFileConnection_possibleTypes = ['UploadFileConnection']
export const isUploadFileConnection = (obj: { __typename: String }): obj is UploadFileConnection => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UploadFileConnection_possibleTypes.includes(obj.__typename)
}

const UploadFileGroupBy_possibleTypes = ['UploadFileGroupBy']
export const isUploadFileGroupBy = (obj: { __typename: String }): obj is UploadFileGroupBy => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UploadFileGroupBy_possibleTypes.includes(obj.__typename)
}

const UploadFileConnectionName_possibleTypes = ['UploadFileConnectionName']
export const isUploadFileConnectionName = (obj: { __typename: String }): obj is UploadFileConnectionName => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UploadFileConnectionName_possibleTypes.includes(obj.__typename)
}

const UploadFileConnectionHash_possibleTypes = ['UploadFileConnectionHash']
export const isUploadFileConnectionHash = (obj: { __typename: String }): obj is UploadFileConnectionHash => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UploadFileConnectionHash_possibleTypes.includes(obj.__typename)
}

const UploadFileConnectionSha256_possibleTypes = ['UploadFileConnectionSha256']
export const isUploadFileConnectionSha256 = (obj: { __typename: String }): obj is UploadFileConnectionSha256 => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UploadFileConnectionSha256_possibleTypes.includes(obj.__typename)
}

const UploadFileConnectionExt_possibleTypes = ['UploadFileConnectionExt']
export const isUploadFileConnectionExt = (obj: { __typename: String }): obj is UploadFileConnectionExt => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UploadFileConnectionExt_possibleTypes.includes(obj.__typename)
}

const UploadFileConnectionMime_possibleTypes = ['UploadFileConnectionMime']
export const isUploadFileConnectionMime = (obj: { __typename: String }): obj is UploadFileConnectionMime => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UploadFileConnectionMime_possibleTypes.includes(obj.__typename)
}

const UploadFileConnectionSize_possibleTypes = ['UploadFileConnectionSize']
export const isUploadFileConnectionSize = (obj: { __typename: String }): obj is UploadFileConnectionSize => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UploadFileConnectionSize_possibleTypes.includes(obj.__typename)
}

const UploadFileConnectionUrl_possibleTypes = ['UploadFileConnectionUrl']
export const isUploadFileConnectionUrl = (obj: { __typename: String }): obj is UploadFileConnectionUrl => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UploadFileConnectionUrl_possibleTypes.includes(obj.__typename)
}

const UploadFileConnectionProvider_possibleTypes = ['UploadFileConnectionProvider']
export const isUploadFileConnectionProvider = (obj: { __typename: String }): obj is UploadFileConnectionProvider => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UploadFileConnectionProvider_possibleTypes.includes(obj.__typename)
}

const UploadFileConnectionProvider_metadata_possibleTypes = ['UploadFileConnectionProvider_metadata']
export const isUploadFileConnectionProvider_metadata = (obj: {
  __typename: String
}): obj is UploadFileConnectionProvider_metadata => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UploadFileConnectionProvider_metadata_possibleTypes.includes(obj.__typename)
}

const UploadFileConnection_id_possibleTypes = ['UploadFileConnection_id']
export const isUploadFileConnection_id = (obj: { __typename: String }): obj is UploadFileConnection_id => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UploadFileConnection_id_possibleTypes.includes(obj.__typename)
}

const UploadFileConnectionId_possibleTypes = ['UploadFileConnectionId']
export const isUploadFileConnectionId = (obj: { __typename: String }): obj is UploadFileConnectionId => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UploadFileConnectionId_possibleTypes.includes(obj.__typename)
}

const UploadFileConnectionCreatedAt_possibleTypes = ['UploadFileConnectionCreatedAt']
export const isUploadFileConnectionCreatedAt = (obj: { __typename: String }): obj is UploadFileConnectionCreatedAt => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UploadFileConnectionCreatedAt_possibleTypes.includes(obj.__typename)
}

const UploadFileConnectionUpdatedAt_possibleTypes = ['UploadFileConnectionUpdatedAt']
export const isUploadFileConnectionUpdatedAt = (obj: { __typename: String }): obj is UploadFileConnectionUpdatedAt => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UploadFileConnectionUpdatedAt_possibleTypes.includes(obj.__typename)
}

const UploadFileAggregator_possibleTypes = ['UploadFileAggregator']
export const isUploadFileAggregator = (obj: { __typename: String }): obj is UploadFileAggregator => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UploadFileAggregator_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsPermission_possibleTypes = ['UsersPermissionsPermission']
export const isUsersPermissionsPermission = (obj: { __typename: String }): obj is UsersPermissionsPermission => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsPermission_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsRole_possibleTypes = ['UsersPermissionsRole']
export const isUsersPermissionsRole = (obj: { __typename: String }): obj is UsersPermissionsRole => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsRole_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsUser_possibleTypes = ['UsersPermissionsUser']
export const isUsersPermissionsUser = (obj: { __typename: String }): obj is UsersPermissionsUser => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsUser_possibleTypes.includes(obj.__typename)
}

const createRolePayload_possibleTypes = ['createRolePayload']
export const iscreateRolePayload = (obj: { __typename: String }): obj is createRolePayload => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return createRolePayload_possibleTypes.includes(obj.__typename)
}

const updateRolePayload_possibleTypes = ['updateRolePayload']
export const isupdateRolePayload = (obj: { __typename: String }): obj is updateRolePayload => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return updateRolePayload_possibleTypes.includes(obj.__typename)
}

const deleteRolePayload_possibleTypes = ['deleteRolePayload']
export const isdeleteRolePayload = (obj: { __typename: String }): obj is deleteRolePayload => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return deleteRolePayload_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsRoleConnection_possibleTypes = ['UsersPermissionsRoleConnection']
export const isUsersPermissionsRoleConnection = (obj: { __typename: String }): obj is UsersPermissionsRoleConnection => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsRoleConnection_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsRoleGroupBy_possibleTypes = ['UsersPermissionsRoleGroupBy']
export const isUsersPermissionsRoleGroupBy = (obj: { __typename: String }): obj is UsersPermissionsRoleGroupBy => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsRoleGroupBy_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsRoleConnectionName_possibleTypes = ['UsersPermissionsRoleConnectionName']
export const isUsersPermissionsRoleConnectionName = (obj: {
  __typename: String
}): obj is UsersPermissionsRoleConnectionName => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsRoleConnectionName_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsRoleConnectionDescription_possibleTypes = ['UsersPermissionsRoleConnectionDescription']
export const isUsersPermissionsRoleConnectionDescription = (obj: {
  __typename: String
}): obj is UsersPermissionsRoleConnectionDescription => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsRoleConnectionDescription_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsRoleConnectionType_possibleTypes = ['UsersPermissionsRoleConnectionType']
export const isUsersPermissionsRoleConnectionType = (obj: {
  __typename: String
}): obj is UsersPermissionsRoleConnectionType => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsRoleConnectionType_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsRoleConnection_id_possibleTypes = ['UsersPermissionsRoleConnection_id']
export const isUsersPermissionsRoleConnection_id = (obj: {
  __typename: String
}): obj is UsersPermissionsRoleConnection_id => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsRoleConnection_id_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsRoleConnectionId_possibleTypes = ['UsersPermissionsRoleConnectionId']
export const isUsersPermissionsRoleConnectionId = (obj: { __typename: String }): obj is UsersPermissionsRoleConnectionId => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsRoleConnectionId_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsRoleConnectionCreatedAt_possibleTypes = ['UsersPermissionsRoleConnectionCreatedAt']
export const isUsersPermissionsRoleConnectionCreatedAt = (obj: {
  __typename: String
}): obj is UsersPermissionsRoleConnectionCreatedAt => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsRoleConnectionCreatedAt_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsRoleConnectionUpdatedAt_possibleTypes = ['UsersPermissionsRoleConnectionUpdatedAt']
export const isUsersPermissionsRoleConnectionUpdatedAt = (obj: {
  __typename: String
}): obj is UsersPermissionsRoleConnectionUpdatedAt => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsRoleConnectionUpdatedAt_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsRoleAggregator_possibleTypes = ['UsersPermissionsRoleAggregator']
export const isUsersPermissionsRoleAggregator = (obj: { __typename: String }): obj is UsersPermissionsRoleAggregator => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsRoleAggregator_possibleTypes.includes(obj.__typename)
}

const createUserPayload_possibleTypes = ['createUserPayload']
export const iscreateUserPayload = (obj: { __typename: String }): obj is createUserPayload => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return createUserPayload_possibleTypes.includes(obj.__typename)
}

const updateUserPayload_possibleTypes = ['updateUserPayload']
export const isupdateUserPayload = (obj: { __typename: String }): obj is updateUserPayload => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return updateUserPayload_possibleTypes.includes(obj.__typename)
}

const deleteUserPayload_possibleTypes = ['deleteUserPayload']
export const isdeleteUserPayload = (obj: { __typename: String }): obj is deleteUserPayload => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return deleteUserPayload_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsUserConnection_possibleTypes = ['UsersPermissionsUserConnection']
export const isUsersPermissionsUserConnection = (obj: { __typename: String }): obj is UsersPermissionsUserConnection => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsUserConnection_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsUserGroupBy_possibleTypes = ['UsersPermissionsUserGroupBy']
export const isUsersPermissionsUserGroupBy = (obj: { __typename: String }): obj is UsersPermissionsUserGroupBy => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsUserGroupBy_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsUserConnectionUsername_possibleTypes = ['UsersPermissionsUserConnectionUsername']
export const isUsersPermissionsUserConnectionUsername = (obj: {
  __typename: String
}): obj is UsersPermissionsUserConnectionUsername => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsUserConnectionUsername_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsUserConnectionEmail_possibleTypes = ['UsersPermissionsUserConnectionEmail']
export const isUsersPermissionsUserConnectionEmail = (obj: {
  __typename: String
}): obj is UsersPermissionsUserConnectionEmail => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsUserConnectionEmail_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsUserConnectionProvider_possibleTypes = ['UsersPermissionsUserConnectionProvider']
export const isUsersPermissionsUserConnectionProvider = (obj: {
  __typename: String
}): obj is UsersPermissionsUserConnectionProvider => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsUserConnectionProvider_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsUserConnectionConfirmed_possibleTypes = ['UsersPermissionsUserConnectionConfirmed']
export const isUsersPermissionsUserConnectionConfirmed = (obj: {
  __typename: String
}): obj is UsersPermissionsUserConnectionConfirmed => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsUserConnectionConfirmed_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsUserConnectionBlocked_possibleTypes = ['UsersPermissionsUserConnectionBlocked']
export const isUsersPermissionsUserConnectionBlocked = (obj: {
  __typename: String
}): obj is UsersPermissionsUserConnectionBlocked => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsUserConnectionBlocked_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsUserConnectionRole_possibleTypes = ['UsersPermissionsUserConnectionRole']
export const isUsersPermissionsUserConnectionRole = (obj: {
  __typename: String
}): obj is UsersPermissionsUserConnectionRole => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsUserConnectionRole_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsUserConnection_id_possibleTypes = ['UsersPermissionsUserConnection_id']
export const isUsersPermissionsUserConnection_id = (obj: {
  __typename: String
}): obj is UsersPermissionsUserConnection_id => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsUserConnection_id_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsUserConnectionId_possibleTypes = ['UsersPermissionsUserConnectionId']
export const isUsersPermissionsUserConnectionId = (obj: { __typename: String }): obj is UsersPermissionsUserConnectionId => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsUserConnectionId_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsUserConnectionCreatedAt_possibleTypes = ['UsersPermissionsUserConnectionCreatedAt']
export const isUsersPermissionsUserConnectionCreatedAt = (obj: {
  __typename: String
}): obj is UsersPermissionsUserConnectionCreatedAt => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsUserConnectionCreatedAt_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsUserConnectionUpdatedAt_possibleTypes = ['UsersPermissionsUserConnectionUpdatedAt']
export const isUsersPermissionsUserConnectionUpdatedAt = (obj: {
  __typename: String
}): obj is UsersPermissionsUserConnectionUpdatedAt => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsUserConnectionUpdatedAt_possibleTypes.includes(obj.__typename)
}

const UsersPermissionsUserAggregator_possibleTypes = ['UsersPermissionsUserAggregator']
export const isUsersPermissionsUserAggregator = (obj: { __typename: String }): obj is UsersPermissionsUserAggregator => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UsersPermissionsUserAggregator_possibleTypes.includes(obj.__typename)
}

const Mutation_possibleTypes = ['Mutation']
export const isMutation = (obj: { __typename: String }): obj is Mutation => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Mutation_possibleTypes.includes(obj.__typename)
}

export interface QueryPromiseChain {
  employment: (args: {
    id: ID
  }) => EmploymentPromiseChain & {
    execute: (request: EmploymentRequest, defaultValue?: Employment | null) => Promise<Employment | null>
  }
  employments: ((args?: {
    sort?: String | null
    limit?: Int | null
    start?: Int | null
    where?: JSON | null
  }) => {
    execute: (
      request: EmploymentRequest,
      defaultValue?: (Employment | null)[] | null,
    ) => Promise<(Employment | null)[] | null>
  }) & {
    execute: (
      request: EmploymentRequest,
      defaultValue?: (Employment | null)[] | null,
    ) => Promise<(Employment | null)[] | null>
  }
  employmentsConnection: ((args?: {
    sort?: String | null
    limit?: Int | null
    start?: Int | null
    where?: JSON | null
  }) => EmploymentConnectionPromiseChain & {
    execute: (
      request: EmploymentConnectionRequest,
      defaultValue?: EmploymentConnection | null,
    ) => Promise<EmploymentConnection | null>
  }) &
    (EmploymentConnectionPromiseChain & {
      execute: (
        request: EmploymentConnectionRequest,
        defaultValue?: EmploymentConnection | null,
      ) => Promise<EmploymentConnection | null>
    })
  personalInfo: (args: {
    id: ID
  }) => PersonalInfoPromiseChain & {
    execute: (request: PersonalInfoRequest, defaultValue?: PersonalInfo | null) => Promise<PersonalInfo | null>
  }
  personalInfos: ((args?: {
    sort?: String | null
    limit?: Int | null
    start?: Int | null
    where?: JSON | null
  }) => {
    execute: (
      request: PersonalInfoRequest,
      defaultValue?: (PersonalInfo | null)[] | null,
    ) => Promise<(PersonalInfo | null)[] | null>
  }) & {
    execute: (
      request: PersonalInfoRequest,
      defaultValue?: (PersonalInfo | null)[] | null,
    ) => Promise<(PersonalInfo | null)[] | null>
  }
  personalInfosConnection: ((args?: {
    sort?: String | null
    limit?: Int | null
    start?: Int | null
    where?: JSON | null
  }) => PersonalInfoConnectionPromiseChain & {
    execute: (
      request: PersonalInfoConnectionRequest,
      defaultValue?: PersonalInfoConnection | null,
    ) => Promise<PersonalInfoConnection | null>
  }) &
    (PersonalInfoConnectionPromiseChain & {
      execute: (
        request: PersonalInfoConnectionRequest,
        defaultValue?: PersonalInfoConnection | null,
      ) => Promise<PersonalInfoConnection | null>
    })
  files: ((args?: {
    sort?: String | null
    limit?: Int | null
    start?: Int | null
    where?: JSON | null
  }) => {
    execute: (
      request: UploadFileRequest,
      defaultValue?: (UploadFile | null)[] | null,
    ) => Promise<(UploadFile | null)[] | null>
  }) & {
    execute: (
      request: UploadFileRequest,
      defaultValue?: (UploadFile | null)[] | null,
    ) => Promise<(UploadFile | null)[] | null>
  }
  filesConnection: ((args?: {
    sort?: String | null
    limit?: Int | null
    start?: Int | null
    where?: JSON | null
  }) => UploadFileConnectionPromiseChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Promise<UploadFileConnection | null>
  }) &
    (UploadFileConnectionPromiseChain & {
      execute: (
        request: UploadFileConnectionRequest,
        defaultValue?: UploadFileConnection | null,
      ) => Promise<UploadFileConnection | null>
    })
  role: (args: {
    id: ID
  }) => UsersPermissionsRolePromiseChain & {
    execute: (
      request: UsersPermissionsRoleRequest,
      defaultValue?: UsersPermissionsRole | null,
    ) => Promise<UsersPermissionsRole | null>
  }
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles: ((args?: {
    sort?: String | null
    limit?: Int | null
    start?: Int | null
    where?: JSON | null
  }) => {
    execute: (
      request: UsersPermissionsRoleRequest,
      defaultValue?: (UsersPermissionsRole | null)[] | null,
    ) => Promise<(UsersPermissionsRole | null)[] | null>
  }) & {
    execute: (
      request: UsersPermissionsRoleRequest,
      defaultValue?: (UsersPermissionsRole | null)[] | null,
    ) => Promise<(UsersPermissionsRole | null)[] | null>
  }
  rolesConnection: ((args?: {
    sort?: String | null
    limit?: Int | null
    start?: Int | null
    where?: JSON | null
  }) => UsersPermissionsRoleConnectionPromiseChain & {
    execute: (
      request: UsersPermissionsRoleConnectionRequest,
      defaultValue?: UsersPermissionsRoleConnection | null,
    ) => Promise<UsersPermissionsRoleConnection | null>
  }) &
    (UsersPermissionsRoleConnectionPromiseChain & {
      execute: (
        request: UsersPermissionsRoleConnectionRequest,
        defaultValue?: UsersPermissionsRoleConnection | null,
      ) => Promise<UsersPermissionsRoleConnection | null>
    })
  user: (args: {
    id: ID
  }) => UsersPermissionsUserPromiseChain & {
    execute: (
      request: UsersPermissionsUserRequest,
      defaultValue?: UsersPermissionsUser | null,
    ) => Promise<UsersPermissionsUser | null>
  }
  users: ((args?: {
    sort?: String | null
    limit?: Int | null
    start?: Int | null
    where?: JSON | null
  }) => {
    execute: (
      request: UsersPermissionsUserRequest,
      defaultValue?: (UsersPermissionsUser | null)[] | null,
    ) => Promise<(UsersPermissionsUser | null)[] | null>
  }) & {
    execute: (
      request: UsersPermissionsUserRequest,
      defaultValue?: (UsersPermissionsUser | null)[] | null,
    ) => Promise<(UsersPermissionsUser | null)[] | null>
  }
  usersConnection: ((args?: {
    sort?: String | null
    limit?: Int | null
    start?: Int | null
    where?: JSON | null
  }) => UsersPermissionsUserConnectionPromiseChain & {
    execute: (
      request: UsersPermissionsUserConnectionRequest,
      defaultValue?: UsersPermissionsUserConnection | null,
    ) => Promise<UsersPermissionsUserConnection | null>
  }) &
    (UsersPermissionsUserConnectionPromiseChain & {
      execute: (
        request: UsersPermissionsUserConnectionRequest,
        defaultValue?: UsersPermissionsUserConnection | null,
      ) => Promise<UsersPermissionsUserConnection | null>
    })
  me: UsersPermissionsMePromiseChain & {
    execute: (
      request: UsersPermissionsMeRequest,
      defaultValue?: UsersPermissionsMe | null,
    ) => Promise<UsersPermissionsMe | null>
  }
}

export interface QueryObservableChain {
  employment: (args: {
    id: ID
  }) => EmploymentObservableChain & {
    execute: (request: EmploymentRequest, defaultValue?: Employment | null) => Observable<Employment | null>
  }
  employments: ((args?: {
    sort?: String | null
    limit?: Int | null
    start?: Int | null
    where?: JSON | null
  }) => {
    execute: (
      request: EmploymentRequest,
      defaultValue?: (Employment | null)[] | null,
    ) => Observable<(Employment | null)[] | null>
  }) & {
    execute: (
      request: EmploymentRequest,
      defaultValue?: (Employment | null)[] | null,
    ) => Observable<(Employment | null)[] | null>
  }
  employmentsConnection: ((args?: {
    sort?: String | null
    limit?: Int | null
    start?: Int | null
    where?: JSON | null
  }) => EmploymentConnectionObservableChain & {
    execute: (
      request: EmploymentConnectionRequest,
      defaultValue?: EmploymentConnection | null,
    ) => Observable<EmploymentConnection | null>
  }) &
    (EmploymentConnectionObservableChain & {
      execute: (
        request: EmploymentConnectionRequest,
        defaultValue?: EmploymentConnection | null,
      ) => Observable<EmploymentConnection | null>
    })
  personalInfo: (args: {
    id: ID
  }) => PersonalInfoObservableChain & {
    execute: (request: PersonalInfoRequest, defaultValue?: PersonalInfo | null) => Observable<PersonalInfo | null>
  }
  personalInfos: ((args?: {
    sort?: String | null
    limit?: Int | null
    start?: Int | null
    where?: JSON | null
  }) => {
    execute: (
      request: PersonalInfoRequest,
      defaultValue?: (PersonalInfo | null)[] | null,
    ) => Observable<(PersonalInfo | null)[] | null>
  }) & {
    execute: (
      request: PersonalInfoRequest,
      defaultValue?: (PersonalInfo | null)[] | null,
    ) => Observable<(PersonalInfo | null)[] | null>
  }
  personalInfosConnection: ((args?: {
    sort?: String | null
    limit?: Int | null
    start?: Int | null
    where?: JSON | null
  }) => PersonalInfoConnectionObservableChain & {
    execute: (
      request: PersonalInfoConnectionRequest,
      defaultValue?: PersonalInfoConnection | null,
    ) => Observable<PersonalInfoConnection | null>
  }) &
    (PersonalInfoConnectionObservableChain & {
      execute: (
        request: PersonalInfoConnectionRequest,
        defaultValue?: PersonalInfoConnection | null,
      ) => Observable<PersonalInfoConnection | null>
    })
  files: ((args?: {
    sort?: String | null
    limit?: Int | null
    start?: Int | null
    where?: JSON | null
  }) => {
    execute: (
      request: UploadFileRequest,
      defaultValue?: (UploadFile | null)[] | null,
    ) => Observable<(UploadFile | null)[] | null>
  }) & {
    execute: (
      request: UploadFileRequest,
      defaultValue?: (UploadFile | null)[] | null,
    ) => Observable<(UploadFile | null)[] | null>
  }
  filesConnection: ((args?: {
    sort?: String | null
    limit?: Int | null
    start?: Int | null
    where?: JSON | null
  }) => UploadFileConnectionObservableChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Observable<UploadFileConnection | null>
  }) &
    (UploadFileConnectionObservableChain & {
      execute: (
        request: UploadFileConnectionRequest,
        defaultValue?: UploadFileConnection | null,
      ) => Observable<UploadFileConnection | null>
    })
  role: (args: {
    id: ID
  }) => UsersPermissionsRoleObservableChain & {
    execute: (
      request: UsersPermissionsRoleRequest,
      defaultValue?: UsersPermissionsRole | null,
    ) => Observable<UsersPermissionsRole | null>
  }
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles: ((args?: {
    sort?: String | null
    limit?: Int | null
    start?: Int | null
    where?: JSON | null
  }) => {
    execute: (
      request: UsersPermissionsRoleRequest,
      defaultValue?: (UsersPermissionsRole | null)[] | null,
    ) => Observable<(UsersPermissionsRole | null)[] | null>
  }) & {
    execute: (
      request: UsersPermissionsRoleRequest,
      defaultValue?: (UsersPermissionsRole | null)[] | null,
    ) => Observable<(UsersPermissionsRole | null)[] | null>
  }
  rolesConnection: ((args?: {
    sort?: String | null
    limit?: Int | null
    start?: Int | null
    where?: JSON | null
  }) => UsersPermissionsRoleConnectionObservableChain & {
    execute: (
      request: UsersPermissionsRoleConnectionRequest,
      defaultValue?: UsersPermissionsRoleConnection | null,
    ) => Observable<UsersPermissionsRoleConnection | null>
  }) &
    (UsersPermissionsRoleConnectionObservableChain & {
      execute: (
        request: UsersPermissionsRoleConnectionRequest,
        defaultValue?: UsersPermissionsRoleConnection | null,
      ) => Observable<UsersPermissionsRoleConnection | null>
    })
  user: (args: {
    id: ID
  }) => UsersPermissionsUserObservableChain & {
    execute: (
      request: UsersPermissionsUserRequest,
      defaultValue?: UsersPermissionsUser | null,
    ) => Observable<UsersPermissionsUser | null>
  }
  users: ((args?: {
    sort?: String | null
    limit?: Int | null
    start?: Int | null
    where?: JSON | null
  }) => {
    execute: (
      request: UsersPermissionsUserRequest,
      defaultValue?: (UsersPermissionsUser | null)[] | null,
    ) => Observable<(UsersPermissionsUser | null)[] | null>
  }) & {
    execute: (
      request: UsersPermissionsUserRequest,
      defaultValue?: (UsersPermissionsUser | null)[] | null,
    ) => Observable<(UsersPermissionsUser | null)[] | null>
  }
  usersConnection: ((args?: {
    sort?: String | null
    limit?: Int | null
    start?: Int | null
    where?: JSON | null
  }) => UsersPermissionsUserConnectionObservableChain & {
    execute: (
      request: UsersPermissionsUserConnectionRequest,
      defaultValue?: UsersPermissionsUserConnection | null,
    ) => Observable<UsersPermissionsUserConnection | null>
  }) &
    (UsersPermissionsUserConnectionObservableChain & {
      execute: (
        request: UsersPermissionsUserConnectionRequest,
        defaultValue?: UsersPermissionsUserConnection | null,
      ) => Observable<UsersPermissionsUserConnection | null>
    })
  me: UsersPermissionsMeObservableChain & {
    execute: (
      request: UsersPermissionsMeRequest,
      defaultValue?: UsersPermissionsMe | null,
    ) => Observable<UsersPermissionsMe | null>
  }
}

export interface EmploymentPromiseChain {
  Company: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  Title: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  fromDate: { execute: (request?: boolean | number, defaultValue?: Date | null) => Promise<Date | null> }
  toDate: { execute: (request?: boolean | number, defaultValue?: Date | null) => Promise<Date | null> }
  projects: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  _id: { execute: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Promise<DateTime> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Promise<DateTime> }
}

export interface EmploymentObservableChain {
  Company: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  Title: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  fromDate: { execute: (request?: boolean | number, defaultValue?: Date | null) => Observable<Date | null> }
  toDate: { execute: (request?: boolean | number, defaultValue?: Date | null) => Observable<Date | null> }
  projects: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  _id: { execute: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Observable<DateTime> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Observable<DateTime> }
}

export interface EmploymentConnectionPromiseChain {
  values: {
    execute: (
      request: EmploymentRequest,
      defaultValue?: (Employment | null)[] | null,
    ) => Promise<(Employment | null)[] | null>
  }
  groupBy: EmploymentGroupByPromiseChain & {
    execute: (
      request: EmploymentGroupByRequest,
      defaultValue?: EmploymentGroupBy | null,
    ) => Promise<EmploymentGroupBy | null>
  }
  aggregate: EmploymentAggregatorPromiseChain & {
    execute: (
      request: EmploymentAggregatorRequest,
      defaultValue?: EmploymentAggregator | null,
    ) => Promise<EmploymentAggregator | null>
  }
}

export interface EmploymentConnectionObservableChain {
  values: {
    execute: (
      request: EmploymentRequest,
      defaultValue?: (Employment | null)[] | null,
    ) => Observable<(Employment | null)[] | null>
  }
  groupBy: EmploymentGroupByObservableChain & {
    execute: (
      request: EmploymentGroupByRequest,
      defaultValue?: EmploymentGroupBy | null,
    ) => Observable<EmploymentGroupBy | null>
  }
  aggregate: EmploymentAggregatorObservableChain & {
    execute: (
      request: EmploymentAggregatorRequest,
      defaultValue?: EmploymentAggregator | null,
    ) => Observable<EmploymentAggregator | null>
  }
}

export interface EmploymentGroupByPromiseChain {
  Company: {
    execute: (
      request: EmploymentConnectionCompanyRequest,
      defaultValue?: (EmploymentConnectionCompany | null)[] | null,
    ) => Promise<(EmploymentConnectionCompany | null)[] | null>
  }
  Title: {
    execute: (
      request: EmploymentConnectionTitleRequest,
      defaultValue?: (EmploymentConnectionTitle | null)[] | null,
    ) => Promise<(EmploymentConnectionTitle | null)[] | null>
  }
  fromDate: {
    execute: (
      request: EmploymentConnectionFromDateRequest,
      defaultValue?: (EmploymentConnectionFromDate | null)[] | null,
    ) => Promise<(EmploymentConnectionFromDate | null)[] | null>
  }
  toDate: {
    execute: (
      request: EmploymentConnectionToDateRequest,
      defaultValue?: (EmploymentConnectionToDate | null)[] | null,
    ) => Promise<(EmploymentConnectionToDate | null)[] | null>
  }
  projects: {
    execute: (
      request: EmploymentConnectionProjectsRequest,
      defaultValue?: (EmploymentConnectionProjects | null)[] | null,
    ) => Promise<(EmploymentConnectionProjects | null)[] | null>
  }
  _id: {
    execute: (
      request: EmploymentConnection_idRequest,
      defaultValue?: (EmploymentConnection_id | null)[] | null,
    ) => Promise<(EmploymentConnection_id | null)[] | null>
  }
  id: {
    execute: (
      request: EmploymentConnectionIdRequest,
      defaultValue?: (EmploymentConnectionId | null)[] | null,
    ) => Promise<(EmploymentConnectionId | null)[] | null>
  }
  createdAt: {
    execute: (
      request: EmploymentConnectionCreatedAtRequest,
      defaultValue?: (EmploymentConnectionCreatedAt | null)[] | null,
    ) => Promise<(EmploymentConnectionCreatedAt | null)[] | null>
  }
  updatedAt: {
    execute: (
      request: EmploymentConnectionUpdatedAtRequest,
      defaultValue?: (EmploymentConnectionUpdatedAt | null)[] | null,
    ) => Promise<(EmploymentConnectionUpdatedAt | null)[] | null>
  }
}

export interface EmploymentGroupByObservableChain {
  Company: {
    execute: (
      request: EmploymentConnectionCompanyRequest,
      defaultValue?: (EmploymentConnectionCompany | null)[] | null,
    ) => Observable<(EmploymentConnectionCompany | null)[] | null>
  }
  Title: {
    execute: (
      request: EmploymentConnectionTitleRequest,
      defaultValue?: (EmploymentConnectionTitle | null)[] | null,
    ) => Observable<(EmploymentConnectionTitle | null)[] | null>
  }
  fromDate: {
    execute: (
      request: EmploymentConnectionFromDateRequest,
      defaultValue?: (EmploymentConnectionFromDate | null)[] | null,
    ) => Observable<(EmploymentConnectionFromDate | null)[] | null>
  }
  toDate: {
    execute: (
      request: EmploymentConnectionToDateRequest,
      defaultValue?: (EmploymentConnectionToDate | null)[] | null,
    ) => Observable<(EmploymentConnectionToDate | null)[] | null>
  }
  projects: {
    execute: (
      request: EmploymentConnectionProjectsRequest,
      defaultValue?: (EmploymentConnectionProjects | null)[] | null,
    ) => Observable<(EmploymentConnectionProjects | null)[] | null>
  }
  _id: {
    execute: (
      request: EmploymentConnection_idRequest,
      defaultValue?: (EmploymentConnection_id | null)[] | null,
    ) => Observable<(EmploymentConnection_id | null)[] | null>
  }
  id: {
    execute: (
      request: EmploymentConnectionIdRequest,
      defaultValue?: (EmploymentConnectionId | null)[] | null,
    ) => Observable<(EmploymentConnectionId | null)[] | null>
  }
  createdAt: {
    execute: (
      request: EmploymentConnectionCreatedAtRequest,
      defaultValue?: (EmploymentConnectionCreatedAt | null)[] | null,
    ) => Observable<(EmploymentConnectionCreatedAt | null)[] | null>
  }
  updatedAt: {
    execute: (
      request: EmploymentConnectionUpdatedAtRequest,
      defaultValue?: (EmploymentConnectionUpdatedAt | null)[] | null,
    ) => Observable<(EmploymentConnectionUpdatedAt | null)[] | null>
  }
}

export interface EmploymentConnectionCompanyPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  connection: EmploymentConnectionPromiseChain & {
    execute: (
      request: EmploymentConnectionRequest,
      defaultValue?: EmploymentConnection | null,
    ) => Promise<EmploymentConnection | null>
  }
}

export interface EmploymentConnectionCompanyObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  connection: EmploymentConnectionObservableChain & {
    execute: (
      request: EmploymentConnectionRequest,
      defaultValue?: EmploymentConnection | null,
    ) => Observable<EmploymentConnection | null>
  }
}

export interface EmploymentConnectionTitlePromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  connection: EmploymentConnectionPromiseChain & {
    execute: (
      request: EmploymentConnectionRequest,
      defaultValue?: EmploymentConnection | null,
    ) => Promise<EmploymentConnection | null>
  }
}

export interface EmploymentConnectionTitleObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  connection: EmploymentConnectionObservableChain & {
    execute: (
      request: EmploymentConnectionRequest,
      defaultValue?: EmploymentConnection | null,
    ) => Observable<EmploymentConnection | null>
  }
}

export interface EmploymentConnectionFromDatePromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: ID | null) => Promise<ID | null> }
  connection: EmploymentConnectionPromiseChain & {
    execute: (
      request: EmploymentConnectionRequest,
      defaultValue?: EmploymentConnection | null,
    ) => Promise<EmploymentConnection | null>
  }
}

export interface EmploymentConnectionFromDateObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: ID | null) => Observable<ID | null> }
  connection: EmploymentConnectionObservableChain & {
    execute: (
      request: EmploymentConnectionRequest,
      defaultValue?: EmploymentConnection | null,
    ) => Observable<EmploymentConnection | null>
  }
}

export interface EmploymentConnectionToDatePromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: ID | null) => Promise<ID | null> }
  connection: EmploymentConnectionPromiseChain & {
    execute: (
      request: EmploymentConnectionRequest,
      defaultValue?: EmploymentConnection | null,
    ) => Promise<EmploymentConnection | null>
  }
}

export interface EmploymentConnectionToDateObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: ID | null) => Observable<ID | null> }
  connection: EmploymentConnectionObservableChain & {
    execute: (
      request: EmploymentConnectionRequest,
      defaultValue?: EmploymentConnection | null,
    ) => Observable<EmploymentConnection | null>
  }
}

export interface EmploymentConnectionProjectsPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  connection: EmploymentConnectionPromiseChain & {
    execute: (
      request: EmploymentConnectionRequest,
      defaultValue?: EmploymentConnection | null,
    ) => Promise<EmploymentConnection | null>
  }
}

export interface EmploymentConnectionProjectsObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  connection: EmploymentConnectionObservableChain & {
    execute: (
      request: EmploymentConnectionRequest,
      defaultValue?: EmploymentConnection | null,
    ) => Observable<EmploymentConnection | null>
  }
}

export interface EmploymentConnection_idPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: ID | null) => Promise<ID | null> }
  connection: EmploymentConnectionPromiseChain & {
    execute: (
      request: EmploymentConnectionRequest,
      defaultValue?: EmploymentConnection | null,
    ) => Promise<EmploymentConnection | null>
  }
}

export interface EmploymentConnection_idObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: ID | null) => Observable<ID | null> }
  connection: EmploymentConnectionObservableChain & {
    execute: (
      request: EmploymentConnectionRequest,
      defaultValue?: EmploymentConnection | null,
    ) => Observable<EmploymentConnection | null>
  }
}

export interface EmploymentConnectionIdPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: ID | null) => Promise<ID | null> }
  connection: EmploymentConnectionPromiseChain & {
    execute: (
      request: EmploymentConnectionRequest,
      defaultValue?: EmploymentConnection | null,
    ) => Promise<EmploymentConnection | null>
  }
}

export interface EmploymentConnectionIdObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: ID | null) => Observable<ID | null> }
  connection: EmploymentConnectionObservableChain & {
    execute: (
      request: EmploymentConnectionRequest,
      defaultValue?: EmploymentConnection | null,
    ) => Observable<EmploymentConnection | null>
  }
}

export interface EmploymentConnectionCreatedAtPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: DateTime | null) => Promise<DateTime | null> }
  connection: EmploymentConnectionPromiseChain & {
    execute: (
      request: EmploymentConnectionRequest,
      defaultValue?: EmploymentConnection | null,
    ) => Promise<EmploymentConnection | null>
  }
}

export interface EmploymentConnectionCreatedAtObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: DateTime | null) => Observable<DateTime | null> }
  connection: EmploymentConnectionObservableChain & {
    execute: (
      request: EmploymentConnectionRequest,
      defaultValue?: EmploymentConnection | null,
    ) => Observable<EmploymentConnection | null>
  }
}

export interface EmploymentConnectionUpdatedAtPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: DateTime | null) => Promise<DateTime | null> }
  connection: EmploymentConnectionPromiseChain & {
    execute: (
      request: EmploymentConnectionRequest,
      defaultValue?: EmploymentConnection | null,
    ) => Promise<EmploymentConnection | null>
  }
}

export interface EmploymentConnectionUpdatedAtObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: DateTime | null) => Observable<DateTime | null> }
  connection: EmploymentConnectionObservableChain & {
    execute: (
      request: EmploymentConnectionRequest,
      defaultValue?: EmploymentConnection | null,
    ) => Observable<EmploymentConnection | null>
  }
}

export interface EmploymentAggregatorPromiseChain {
  count: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  totalCount: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
}

export interface EmploymentAggregatorObservableChain {
  count: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  totalCount: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
}

export interface PersonalInfoPromiseChain {
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  Title: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  _id: { execute: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Promise<DateTime> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Promise<DateTime> }
}

export interface PersonalInfoObservableChain {
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  Title: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  _id: { execute: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Observable<DateTime> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Observable<DateTime> }
}

export interface PersonalInfoConnectionPromiseChain {
  values: {
    execute: (
      request: PersonalInfoRequest,
      defaultValue?: (PersonalInfo | null)[] | null,
    ) => Promise<(PersonalInfo | null)[] | null>
  }
  groupBy: PersonalInfoGroupByPromiseChain & {
    execute: (
      request: PersonalInfoGroupByRequest,
      defaultValue?: PersonalInfoGroupBy | null,
    ) => Promise<PersonalInfoGroupBy | null>
  }
  aggregate: PersonalInfoAggregatorPromiseChain & {
    execute: (
      request: PersonalInfoAggregatorRequest,
      defaultValue?: PersonalInfoAggregator | null,
    ) => Promise<PersonalInfoAggregator | null>
  }
}

export interface PersonalInfoConnectionObservableChain {
  values: {
    execute: (
      request: PersonalInfoRequest,
      defaultValue?: (PersonalInfo | null)[] | null,
    ) => Observable<(PersonalInfo | null)[] | null>
  }
  groupBy: PersonalInfoGroupByObservableChain & {
    execute: (
      request: PersonalInfoGroupByRequest,
      defaultValue?: PersonalInfoGroupBy | null,
    ) => Observable<PersonalInfoGroupBy | null>
  }
  aggregate: PersonalInfoAggregatorObservableChain & {
    execute: (
      request: PersonalInfoAggregatorRequest,
      defaultValue?: PersonalInfoAggregator | null,
    ) => Observable<PersonalInfoAggregator | null>
  }
}

export interface PersonalInfoGroupByPromiseChain {
  name: {
    execute: (
      request: PersonalInfoConnectionNameRequest,
      defaultValue?: (PersonalInfoConnectionName | null)[] | null,
    ) => Promise<(PersonalInfoConnectionName | null)[] | null>
  }
  Title: {
    execute: (
      request: PersonalInfoConnectionTitleRequest,
      defaultValue?: (PersonalInfoConnectionTitle | null)[] | null,
    ) => Promise<(PersonalInfoConnectionTitle | null)[] | null>
  }
  _id: {
    execute: (
      request: PersonalInfoConnection_idRequest,
      defaultValue?: (PersonalInfoConnection_id | null)[] | null,
    ) => Promise<(PersonalInfoConnection_id | null)[] | null>
  }
  id: {
    execute: (
      request: PersonalInfoConnectionIdRequest,
      defaultValue?: (PersonalInfoConnectionId | null)[] | null,
    ) => Promise<(PersonalInfoConnectionId | null)[] | null>
  }
  createdAt: {
    execute: (
      request: PersonalInfoConnectionCreatedAtRequest,
      defaultValue?: (PersonalInfoConnectionCreatedAt | null)[] | null,
    ) => Promise<(PersonalInfoConnectionCreatedAt | null)[] | null>
  }
  updatedAt: {
    execute: (
      request: PersonalInfoConnectionUpdatedAtRequest,
      defaultValue?: (PersonalInfoConnectionUpdatedAt | null)[] | null,
    ) => Promise<(PersonalInfoConnectionUpdatedAt | null)[] | null>
  }
}

export interface PersonalInfoGroupByObservableChain {
  name: {
    execute: (
      request: PersonalInfoConnectionNameRequest,
      defaultValue?: (PersonalInfoConnectionName | null)[] | null,
    ) => Observable<(PersonalInfoConnectionName | null)[] | null>
  }
  Title: {
    execute: (
      request: PersonalInfoConnectionTitleRequest,
      defaultValue?: (PersonalInfoConnectionTitle | null)[] | null,
    ) => Observable<(PersonalInfoConnectionTitle | null)[] | null>
  }
  _id: {
    execute: (
      request: PersonalInfoConnection_idRequest,
      defaultValue?: (PersonalInfoConnection_id | null)[] | null,
    ) => Observable<(PersonalInfoConnection_id | null)[] | null>
  }
  id: {
    execute: (
      request: PersonalInfoConnectionIdRequest,
      defaultValue?: (PersonalInfoConnectionId | null)[] | null,
    ) => Observable<(PersonalInfoConnectionId | null)[] | null>
  }
  createdAt: {
    execute: (
      request: PersonalInfoConnectionCreatedAtRequest,
      defaultValue?: (PersonalInfoConnectionCreatedAt | null)[] | null,
    ) => Observable<(PersonalInfoConnectionCreatedAt | null)[] | null>
  }
  updatedAt: {
    execute: (
      request: PersonalInfoConnectionUpdatedAtRequest,
      defaultValue?: (PersonalInfoConnectionUpdatedAt | null)[] | null,
    ) => Observable<(PersonalInfoConnectionUpdatedAt | null)[] | null>
  }
}

export interface PersonalInfoConnectionNamePromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  connection: PersonalInfoConnectionPromiseChain & {
    execute: (
      request: PersonalInfoConnectionRequest,
      defaultValue?: PersonalInfoConnection | null,
    ) => Promise<PersonalInfoConnection | null>
  }
}

export interface PersonalInfoConnectionNameObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  connection: PersonalInfoConnectionObservableChain & {
    execute: (
      request: PersonalInfoConnectionRequest,
      defaultValue?: PersonalInfoConnection | null,
    ) => Observable<PersonalInfoConnection | null>
  }
}

export interface PersonalInfoConnectionTitlePromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  connection: PersonalInfoConnectionPromiseChain & {
    execute: (
      request: PersonalInfoConnectionRequest,
      defaultValue?: PersonalInfoConnection | null,
    ) => Promise<PersonalInfoConnection | null>
  }
}

export interface PersonalInfoConnectionTitleObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  connection: PersonalInfoConnectionObservableChain & {
    execute: (
      request: PersonalInfoConnectionRequest,
      defaultValue?: PersonalInfoConnection | null,
    ) => Observable<PersonalInfoConnection | null>
  }
}

export interface PersonalInfoConnection_idPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: ID | null) => Promise<ID | null> }
  connection: PersonalInfoConnectionPromiseChain & {
    execute: (
      request: PersonalInfoConnectionRequest,
      defaultValue?: PersonalInfoConnection | null,
    ) => Promise<PersonalInfoConnection | null>
  }
}

export interface PersonalInfoConnection_idObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: ID | null) => Observable<ID | null> }
  connection: PersonalInfoConnectionObservableChain & {
    execute: (
      request: PersonalInfoConnectionRequest,
      defaultValue?: PersonalInfoConnection | null,
    ) => Observable<PersonalInfoConnection | null>
  }
}

export interface PersonalInfoConnectionIdPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: ID | null) => Promise<ID | null> }
  connection: PersonalInfoConnectionPromiseChain & {
    execute: (
      request: PersonalInfoConnectionRequest,
      defaultValue?: PersonalInfoConnection | null,
    ) => Promise<PersonalInfoConnection | null>
  }
}

export interface PersonalInfoConnectionIdObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: ID | null) => Observable<ID | null> }
  connection: PersonalInfoConnectionObservableChain & {
    execute: (
      request: PersonalInfoConnectionRequest,
      defaultValue?: PersonalInfoConnection | null,
    ) => Observable<PersonalInfoConnection | null>
  }
}

export interface PersonalInfoConnectionCreatedAtPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: DateTime | null) => Promise<DateTime | null> }
  connection: PersonalInfoConnectionPromiseChain & {
    execute: (
      request: PersonalInfoConnectionRequest,
      defaultValue?: PersonalInfoConnection | null,
    ) => Promise<PersonalInfoConnection | null>
  }
}

export interface PersonalInfoConnectionCreatedAtObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: DateTime | null) => Observable<DateTime | null> }
  connection: PersonalInfoConnectionObservableChain & {
    execute: (
      request: PersonalInfoConnectionRequest,
      defaultValue?: PersonalInfoConnection | null,
    ) => Observable<PersonalInfoConnection | null>
  }
}

export interface PersonalInfoConnectionUpdatedAtPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: DateTime | null) => Promise<DateTime | null> }
  connection: PersonalInfoConnectionPromiseChain & {
    execute: (
      request: PersonalInfoConnectionRequest,
      defaultValue?: PersonalInfoConnection | null,
    ) => Promise<PersonalInfoConnection | null>
  }
}

export interface PersonalInfoConnectionUpdatedAtObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: DateTime | null) => Observable<DateTime | null> }
  connection: PersonalInfoConnectionObservableChain & {
    execute: (
      request: PersonalInfoConnectionRequest,
      defaultValue?: PersonalInfoConnection | null,
    ) => Observable<PersonalInfoConnection | null>
  }
}

export interface PersonalInfoAggregatorPromiseChain {
  count: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  totalCount: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
}

export interface PersonalInfoAggregatorObservableChain {
  count: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  totalCount: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
}

export interface UploadFilePromiseChain {
  name: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  hash: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  sha256: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  ext: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  mime: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  size: { execute: (request?: boolean | number, defaultValue?: Float) => Promise<Float> }
  url: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  provider: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  provider_metadata: { execute: (request?: boolean | number, defaultValue?: JSON | null) => Promise<JSON | null> }
  related: ((args?: {
    sort?: String | null
    limit?: Int | null
    start?: Int | null
    where?: JSON | null
  }) => { execute: (request: MorphRequest, defaultValue?: (Morph | null)[] | null) => Promise<(Morph | null)[] | null> }) & {
    execute: (request: MorphRequest, defaultValue?: (Morph | null)[] | null) => Promise<(Morph | null)[] | null>
  }
  _id: { execute: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Promise<DateTime> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Promise<DateTime> }
}

export interface UploadFileObservableChain {
  name: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  hash: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  sha256: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  ext: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  mime: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  size: { execute: (request?: boolean | number, defaultValue?: Float) => Observable<Float> }
  url: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  provider: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  provider_metadata: { execute: (request?: boolean | number, defaultValue?: JSON | null) => Observable<JSON | null> }
  related: ((args?: {
    sort?: String | null
    limit?: Int | null
    start?: Int | null
    where?: JSON | null
  }) => {
    execute: (request: MorphRequest, defaultValue?: (Morph | null)[] | null) => Observable<(Morph | null)[] | null>
  }) & { execute: (request: MorphRequest, defaultValue?: (Morph | null)[] | null) => Observable<(Morph | null)[] | null> }
  _id: { execute: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Observable<DateTime> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Observable<DateTime> }
}

export interface UsersPermissionsMePromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  username: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  email: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  confirmed: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Promise<Boolean | null> }
  blocked: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Promise<Boolean | null> }
  role: UsersPermissionsMeRolePromiseChain & {
    execute: (
      request: UsersPermissionsMeRoleRequest,
      defaultValue?: UsersPermissionsMeRole | null,
    ) => Promise<UsersPermissionsMeRole | null>
  }
}

export interface UsersPermissionsMeObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  username: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  email: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  confirmed: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Observable<Boolean | null> }
  blocked: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Observable<Boolean | null> }
  role: UsersPermissionsMeRoleObservableChain & {
    execute: (
      request: UsersPermissionsMeRoleRequest,
      defaultValue?: UsersPermissionsMeRole | null,
    ) => Observable<UsersPermissionsMeRole | null>
  }
}

export interface UsersPermissionsMeRolePromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  name: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  description: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  type: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

export interface UsersPermissionsMeRoleObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  name: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  description: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  type: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

export interface UsersPermissionsLoginPayloadPromiseChain {
  jwt: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  user: UsersPermissionsMePromiseChain & {
    execute: (request: UsersPermissionsMeRequest, defaultValue?: UsersPermissionsMe) => Promise<UsersPermissionsMe>
  }
}

export interface UsersPermissionsLoginPayloadObservableChain {
  jwt: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  user: UsersPermissionsMeObservableChain & {
    execute: (request: UsersPermissionsMeRequest, defaultValue?: UsersPermissionsMe) => Observable<UsersPermissionsMe>
  }
}

export interface createEmploymentPayloadPromiseChain {
  employment: EmploymentPromiseChain & {
    execute: (request: EmploymentRequest, defaultValue?: Employment | null) => Promise<Employment | null>
  }
}

export interface createEmploymentPayloadObservableChain {
  employment: EmploymentObservableChain & {
    execute: (request: EmploymentRequest, defaultValue?: Employment | null) => Observable<Employment | null>
  }
}

export interface updateEmploymentPayloadPromiseChain {
  employment: EmploymentPromiseChain & {
    execute: (request: EmploymentRequest, defaultValue?: Employment | null) => Promise<Employment | null>
  }
}

export interface updateEmploymentPayloadObservableChain {
  employment: EmploymentObservableChain & {
    execute: (request: EmploymentRequest, defaultValue?: Employment | null) => Observable<Employment | null>
  }
}

export interface deleteEmploymentPayloadPromiseChain {
  employment: EmploymentPromiseChain & {
    execute: (request: EmploymentRequest, defaultValue?: Employment | null) => Promise<Employment | null>
  }
}

export interface deleteEmploymentPayloadObservableChain {
  employment: EmploymentObservableChain & {
    execute: (request: EmploymentRequest, defaultValue?: Employment | null) => Observable<Employment | null>
  }
}

export interface createPersonalInfoPayloadPromiseChain {
  personalInfo: PersonalInfoPromiseChain & {
    execute: (request: PersonalInfoRequest, defaultValue?: PersonalInfo | null) => Promise<PersonalInfo | null>
  }
}

export interface createPersonalInfoPayloadObservableChain {
  personalInfo: PersonalInfoObservableChain & {
    execute: (request: PersonalInfoRequest, defaultValue?: PersonalInfo | null) => Observable<PersonalInfo | null>
  }
}

export interface updatePersonalInfoPayloadPromiseChain {
  personalInfo: PersonalInfoPromiseChain & {
    execute: (request: PersonalInfoRequest, defaultValue?: PersonalInfo | null) => Promise<PersonalInfo | null>
  }
}

export interface updatePersonalInfoPayloadObservableChain {
  personalInfo: PersonalInfoObservableChain & {
    execute: (request: PersonalInfoRequest, defaultValue?: PersonalInfo | null) => Observable<PersonalInfo | null>
  }
}

export interface deletePersonalInfoPayloadPromiseChain {
  personalInfo: PersonalInfoPromiseChain & {
    execute: (request: PersonalInfoRequest, defaultValue?: PersonalInfo | null) => Promise<PersonalInfo | null>
  }
}

export interface deletePersonalInfoPayloadObservableChain {
  personalInfo: PersonalInfoObservableChain & {
    execute: (request: PersonalInfoRequest, defaultValue?: PersonalInfo | null) => Observable<PersonalInfo | null>
  }
}

export interface UploadFileConnectionPromiseChain {
  values: {
    execute: (
      request: UploadFileRequest,
      defaultValue?: (UploadFile | null)[] | null,
    ) => Promise<(UploadFile | null)[] | null>
  }
  groupBy: UploadFileGroupByPromiseChain & {
    execute: (
      request: UploadFileGroupByRequest,
      defaultValue?: UploadFileGroupBy | null,
    ) => Promise<UploadFileGroupBy | null>
  }
  aggregate: UploadFileAggregatorPromiseChain & {
    execute: (
      request: UploadFileAggregatorRequest,
      defaultValue?: UploadFileAggregator | null,
    ) => Promise<UploadFileAggregator | null>
  }
}

export interface UploadFileConnectionObservableChain {
  values: {
    execute: (
      request: UploadFileRequest,
      defaultValue?: (UploadFile | null)[] | null,
    ) => Observable<(UploadFile | null)[] | null>
  }
  groupBy: UploadFileGroupByObservableChain & {
    execute: (
      request: UploadFileGroupByRequest,
      defaultValue?: UploadFileGroupBy | null,
    ) => Observable<UploadFileGroupBy | null>
  }
  aggregate: UploadFileAggregatorObservableChain & {
    execute: (
      request: UploadFileAggregatorRequest,
      defaultValue?: UploadFileAggregator | null,
    ) => Observable<UploadFileAggregator | null>
  }
}

export interface UploadFileGroupByPromiseChain {
  name: {
    execute: (
      request: UploadFileConnectionNameRequest,
      defaultValue?: (UploadFileConnectionName | null)[] | null,
    ) => Promise<(UploadFileConnectionName | null)[] | null>
  }
  hash: {
    execute: (
      request: UploadFileConnectionHashRequest,
      defaultValue?: (UploadFileConnectionHash | null)[] | null,
    ) => Promise<(UploadFileConnectionHash | null)[] | null>
  }
  sha256: {
    execute: (
      request: UploadFileConnectionSha256Request,
      defaultValue?: (UploadFileConnectionSha256 | null)[] | null,
    ) => Promise<(UploadFileConnectionSha256 | null)[] | null>
  }
  ext: {
    execute: (
      request: UploadFileConnectionExtRequest,
      defaultValue?: (UploadFileConnectionExt | null)[] | null,
    ) => Promise<(UploadFileConnectionExt | null)[] | null>
  }
  mime: {
    execute: (
      request: UploadFileConnectionMimeRequest,
      defaultValue?: (UploadFileConnectionMime | null)[] | null,
    ) => Promise<(UploadFileConnectionMime | null)[] | null>
  }
  size: {
    execute: (
      request: UploadFileConnectionSizeRequest,
      defaultValue?: (UploadFileConnectionSize | null)[] | null,
    ) => Promise<(UploadFileConnectionSize | null)[] | null>
  }
  url: {
    execute: (
      request: UploadFileConnectionUrlRequest,
      defaultValue?: (UploadFileConnectionUrl | null)[] | null,
    ) => Promise<(UploadFileConnectionUrl | null)[] | null>
  }
  provider: {
    execute: (
      request: UploadFileConnectionProviderRequest,
      defaultValue?: (UploadFileConnectionProvider | null)[] | null,
    ) => Promise<(UploadFileConnectionProvider | null)[] | null>
  }
  provider_metadata: {
    execute: (
      request: UploadFileConnectionProvider_metadataRequest,
      defaultValue?: (UploadFileConnectionProvider_metadata | null)[] | null,
    ) => Promise<(UploadFileConnectionProvider_metadata | null)[] | null>
  }
  _id: {
    execute: (
      request: UploadFileConnection_idRequest,
      defaultValue?: (UploadFileConnection_id | null)[] | null,
    ) => Promise<(UploadFileConnection_id | null)[] | null>
  }
  id: {
    execute: (
      request: UploadFileConnectionIdRequest,
      defaultValue?: (UploadFileConnectionId | null)[] | null,
    ) => Promise<(UploadFileConnectionId | null)[] | null>
  }
  createdAt: {
    execute: (
      request: UploadFileConnectionCreatedAtRequest,
      defaultValue?: (UploadFileConnectionCreatedAt | null)[] | null,
    ) => Promise<(UploadFileConnectionCreatedAt | null)[] | null>
  }
  updatedAt: {
    execute: (
      request: UploadFileConnectionUpdatedAtRequest,
      defaultValue?: (UploadFileConnectionUpdatedAt | null)[] | null,
    ) => Promise<(UploadFileConnectionUpdatedAt | null)[] | null>
  }
}

export interface UploadFileGroupByObservableChain {
  name: {
    execute: (
      request: UploadFileConnectionNameRequest,
      defaultValue?: (UploadFileConnectionName | null)[] | null,
    ) => Observable<(UploadFileConnectionName | null)[] | null>
  }
  hash: {
    execute: (
      request: UploadFileConnectionHashRequest,
      defaultValue?: (UploadFileConnectionHash | null)[] | null,
    ) => Observable<(UploadFileConnectionHash | null)[] | null>
  }
  sha256: {
    execute: (
      request: UploadFileConnectionSha256Request,
      defaultValue?: (UploadFileConnectionSha256 | null)[] | null,
    ) => Observable<(UploadFileConnectionSha256 | null)[] | null>
  }
  ext: {
    execute: (
      request: UploadFileConnectionExtRequest,
      defaultValue?: (UploadFileConnectionExt | null)[] | null,
    ) => Observable<(UploadFileConnectionExt | null)[] | null>
  }
  mime: {
    execute: (
      request: UploadFileConnectionMimeRequest,
      defaultValue?: (UploadFileConnectionMime | null)[] | null,
    ) => Observable<(UploadFileConnectionMime | null)[] | null>
  }
  size: {
    execute: (
      request: UploadFileConnectionSizeRequest,
      defaultValue?: (UploadFileConnectionSize | null)[] | null,
    ) => Observable<(UploadFileConnectionSize | null)[] | null>
  }
  url: {
    execute: (
      request: UploadFileConnectionUrlRequest,
      defaultValue?: (UploadFileConnectionUrl | null)[] | null,
    ) => Observable<(UploadFileConnectionUrl | null)[] | null>
  }
  provider: {
    execute: (
      request: UploadFileConnectionProviderRequest,
      defaultValue?: (UploadFileConnectionProvider | null)[] | null,
    ) => Observable<(UploadFileConnectionProvider | null)[] | null>
  }
  provider_metadata: {
    execute: (
      request: UploadFileConnectionProvider_metadataRequest,
      defaultValue?: (UploadFileConnectionProvider_metadata | null)[] | null,
    ) => Observable<(UploadFileConnectionProvider_metadata | null)[] | null>
  }
  _id: {
    execute: (
      request: UploadFileConnection_idRequest,
      defaultValue?: (UploadFileConnection_id | null)[] | null,
    ) => Observable<(UploadFileConnection_id | null)[] | null>
  }
  id: {
    execute: (
      request: UploadFileConnectionIdRequest,
      defaultValue?: (UploadFileConnectionId | null)[] | null,
    ) => Observable<(UploadFileConnectionId | null)[] | null>
  }
  createdAt: {
    execute: (
      request: UploadFileConnectionCreatedAtRequest,
      defaultValue?: (UploadFileConnectionCreatedAt | null)[] | null,
    ) => Observable<(UploadFileConnectionCreatedAt | null)[] | null>
  }
  updatedAt: {
    execute: (
      request: UploadFileConnectionUpdatedAtRequest,
      defaultValue?: (UploadFileConnectionUpdatedAt | null)[] | null,
    ) => Observable<(UploadFileConnectionUpdatedAt | null)[] | null>
  }
}

export interface UploadFileConnectionNamePromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  connection: UploadFileConnectionPromiseChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Promise<UploadFileConnection | null>
  }
}

export interface UploadFileConnectionNameObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  connection: UploadFileConnectionObservableChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Observable<UploadFileConnection | null>
  }
}

export interface UploadFileConnectionHashPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  connection: UploadFileConnectionPromiseChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Promise<UploadFileConnection | null>
  }
}

export interface UploadFileConnectionHashObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  connection: UploadFileConnectionObservableChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Observable<UploadFileConnection | null>
  }
}

export interface UploadFileConnectionSha256PromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  connection: UploadFileConnectionPromiseChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Promise<UploadFileConnection | null>
  }
}

export interface UploadFileConnectionSha256ObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  connection: UploadFileConnectionObservableChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Observable<UploadFileConnection | null>
  }
}

export interface UploadFileConnectionExtPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  connection: UploadFileConnectionPromiseChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Promise<UploadFileConnection | null>
  }
}

export interface UploadFileConnectionExtObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  connection: UploadFileConnectionObservableChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Observable<UploadFileConnection | null>
  }
}

export interface UploadFileConnectionMimePromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  connection: UploadFileConnectionPromiseChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Promise<UploadFileConnection | null>
  }
}

export interface UploadFileConnectionMimeObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  connection: UploadFileConnectionObservableChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Observable<UploadFileConnection | null>
  }
}

export interface UploadFileConnectionSizePromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  connection: UploadFileConnectionPromiseChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Promise<UploadFileConnection | null>
  }
}

export interface UploadFileConnectionSizeObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  connection: UploadFileConnectionObservableChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Observable<UploadFileConnection | null>
  }
}

export interface UploadFileConnectionUrlPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  connection: UploadFileConnectionPromiseChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Promise<UploadFileConnection | null>
  }
}

export interface UploadFileConnectionUrlObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  connection: UploadFileConnectionObservableChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Observable<UploadFileConnection | null>
  }
}

export interface UploadFileConnectionProviderPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  connection: UploadFileConnectionPromiseChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Promise<UploadFileConnection | null>
  }
}

export interface UploadFileConnectionProviderObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  connection: UploadFileConnectionObservableChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Observable<UploadFileConnection | null>
  }
}

export interface UploadFileConnectionProvider_metadataPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: JSON | null) => Promise<JSON | null> }
  connection: UploadFileConnectionPromiseChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Promise<UploadFileConnection | null>
  }
}

export interface UploadFileConnectionProvider_metadataObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: JSON | null) => Observable<JSON | null> }
  connection: UploadFileConnectionObservableChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Observable<UploadFileConnection | null>
  }
}

export interface UploadFileConnection_idPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: ID | null) => Promise<ID | null> }
  connection: UploadFileConnectionPromiseChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Promise<UploadFileConnection | null>
  }
}

export interface UploadFileConnection_idObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: ID | null) => Observable<ID | null> }
  connection: UploadFileConnectionObservableChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Observable<UploadFileConnection | null>
  }
}

export interface UploadFileConnectionIdPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: ID | null) => Promise<ID | null> }
  connection: UploadFileConnectionPromiseChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Promise<UploadFileConnection | null>
  }
}

export interface UploadFileConnectionIdObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: ID | null) => Observable<ID | null> }
  connection: UploadFileConnectionObservableChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Observable<UploadFileConnection | null>
  }
}

export interface UploadFileConnectionCreatedAtPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: DateTime | null) => Promise<DateTime | null> }
  connection: UploadFileConnectionPromiseChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Promise<UploadFileConnection | null>
  }
}

export interface UploadFileConnectionCreatedAtObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: DateTime | null) => Observable<DateTime | null> }
  connection: UploadFileConnectionObservableChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Observable<UploadFileConnection | null>
  }
}

export interface UploadFileConnectionUpdatedAtPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: DateTime | null) => Promise<DateTime | null> }
  connection: UploadFileConnectionPromiseChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Promise<UploadFileConnection | null>
  }
}

export interface UploadFileConnectionUpdatedAtObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: DateTime | null) => Observable<DateTime | null> }
  connection: UploadFileConnectionObservableChain & {
    execute: (
      request: UploadFileConnectionRequest,
      defaultValue?: UploadFileConnection | null,
    ) => Observable<UploadFileConnection | null>
  }
}

export interface UploadFileAggregatorPromiseChain {
  count: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  totalCount: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
}

export interface UploadFileAggregatorObservableChain {
  count: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  totalCount: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
}

export interface UsersPermissionsPermissionPromiseChain {
  type: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  controller: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  action: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  enabled: { execute: (request?: boolean | number, defaultValue?: Boolean) => Promise<Boolean> }
  policy: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  role: UsersPermissionsRolePromiseChain & {
    execute: (
      request: UsersPermissionsRoleRequest,
      defaultValue?: UsersPermissionsRole | null,
    ) => Promise<UsersPermissionsRole | null>
  }
  _id: { execute: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Promise<DateTime> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Promise<DateTime> }
}

export interface UsersPermissionsPermissionObservableChain {
  type: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  controller: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  action: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  enabled: { execute: (request?: boolean | number, defaultValue?: Boolean) => Observable<Boolean> }
  policy: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  role: UsersPermissionsRoleObservableChain & {
    execute: (
      request: UsersPermissionsRoleRequest,
      defaultValue?: UsersPermissionsRole | null,
    ) => Observable<UsersPermissionsRole | null>
  }
  _id: { execute: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Observable<DateTime> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Observable<DateTime> }
}

export interface UsersPermissionsRolePromiseChain {
  name: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  description: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  type: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  permissions: ((args?: {
    sort?: String | null
    limit?: Int | null
    start?: Int | null
    where?: JSON | null
  }) => {
    execute: (
      request: UsersPermissionsPermissionRequest,
      defaultValue?: (UsersPermissionsPermission | null)[] | null,
    ) => Promise<(UsersPermissionsPermission | null)[] | null>
  }) & {
    execute: (
      request: UsersPermissionsPermissionRequest,
      defaultValue?: (UsersPermissionsPermission | null)[] | null,
    ) => Promise<(UsersPermissionsPermission | null)[] | null>
  }
  users: ((args?: {
    sort?: String | null
    limit?: Int | null
    start?: Int | null
    where?: JSON | null
  }) => {
    execute: (
      request: UsersPermissionsUserRequest,
      defaultValue?: (UsersPermissionsUser | null)[] | null,
    ) => Promise<(UsersPermissionsUser | null)[] | null>
  }) & {
    execute: (
      request: UsersPermissionsUserRequest,
      defaultValue?: (UsersPermissionsUser | null)[] | null,
    ) => Promise<(UsersPermissionsUser | null)[] | null>
  }
  _id: { execute: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Promise<DateTime> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Promise<DateTime> }
}

export interface UsersPermissionsRoleObservableChain {
  name: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  description: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  type: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  permissions: ((args?: {
    sort?: String | null
    limit?: Int | null
    start?: Int | null
    where?: JSON | null
  }) => {
    execute: (
      request: UsersPermissionsPermissionRequest,
      defaultValue?: (UsersPermissionsPermission | null)[] | null,
    ) => Observable<(UsersPermissionsPermission | null)[] | null>
  }) & {
    execute: (
      request: UsersPermissionsPermissionRequest,
      defaultValue?: (UsersPermissionsPermission | null)[] | null,
    ) => Observable<(UsersPermissionsPermission | null)[] | null>
  }
  users: ((args?: {
    sort?: String | null
    limit?: Int | null
    start?: Int | null
    where?: JSON | null
  }) => {
    execute: (
      request: UsersPermissionsUserRequest,
      defaultValue?: (UsersPermissionsUser | null)[] | null,
    ) => Observable<(UsersPermissionsUser | null)[] | null>
  }) & {
    execute: (
      request: UsersPermissionsUserRequest,
      defaultValue?: (UsersPermissionsUser | null)[] | null,
    ) => Observable<(UsersPermissionsUser | null)[] | null>
  }
  _id: { execute: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Observable<DateTime> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Observable<DateTime> }
}

export interface UsersPermissionsUserPromiseChain {
  username: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  email: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  provider: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  confirmed: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Promise<Boolean | null> }
  blocked: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Promise<Boolean | null> }
  role: UsersPermissionsRolePromiseChain & {
    execute: (
      request: UsersPermissionsRoleRequest,
      defaultValue?: UsersPermissionsRole | null,
    ) => Promise<UsersPermissionsRole | null>
  }
  _id: { execute: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Promise<DateTime> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Promise<DateTime> }
}

export interface UsersPermissionsUserObservableChain {
  username: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  email: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  provider: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  confirmed: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Observable<Boolean | null> }
  blocked: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Observable<Boolean | null> }
  role: UsersPermissionsRoleObservableChain & {
    execute: (
      request: UsersPermissionsRoleRequest,
      defaultValue?: UsersPermissionsRole | null,
    ) => Observable<UsersPermissionsRole | null>
  }
  _id: { execute: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Observable<DateTime> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: DateTime) => Observable<DateTime> }
}

export interface createRolePayloadPromiseChain {
  role: UsersPermissionsRolePromiseChain & {
    execute: (
      request: UsersPermissionsRoleRequest,
      defaultValue?: UsersPermissionsRole | null,
    ) => Promise<UsersPermissionsRole | null>
  }
}

export interface createRolePayloadObservableChain {
  role: UsersPermissionsRoleObservableChain & {
    execute: (
      request: UsersPermissionsRoleRequest,
      defaultValue?: UsersPermissionsRole | null,
    ) => Observable<UsersPermissionsRole | null>
  }
}

export interface updateRolePayloadPromiseChain {
  role: UsersPermissionsRolePromiseChain & {
    execute: (
      request: UsersPermissionsRoleRequest,
      defaultValue?: UsersPermissionsRole | null,
    ) => Promise<UsersPermissionsRole | null>
  }
}

export interface updateRolePayloadObservableChain {
  role: UsersPermissionsRoleObservableChain & {
    execute: (
      request: UsersPermissionsRoleRequest,
      defaultValue?: UsersPermissionsRole | null,
    ) => Observable<UsersPermissionsRole | null>
  }
}

export interface deleteRolePayloadPromiseChain {
  role: UsersPermissionsRolePromiseChain & {
    execute: (
      request: UsersPermissionsRoleRequest,
      defaultValue?: UsersPermissionsRole | null,
    ) => Promise<UsersPermissionsRole | null>
  }
}

export interface deleteRolePayloadObservableChain {
  role: UsersPermissionsRoleObservableChain & {
    execute: (
      request: UsersPermissionsRoleRequest,
      defaultValue?: UsersPermissionsRole | null,
    ) => Observable<UsersPermissionsRole | null>
  }
}

export interface UsersPermissionsRoleConnectionPromiseChain {
  values: {
    execute: (
      request: UsersPermissionsRoleRequest,
      defaultValue?: (UsersPermissionsRole | null)[] | null,
    ) => Promise<(UsersPermissionsRole | null)[] | null>
  }
  groupBy: UsersPermissionsRoleGroupByPromiseChain & {
    execute: (
      request: UsersPermissionsRoleGroupByRequest,
      defaultValue?: UsersPermissionsRoleGroupBy | null,
    ) => Promise<UsersPermissionsRoleGroupBy | null>
  }
  aggregate: UsersPermissionsRoleAggregatorPromiseChain & {
    execute: (
      request: UsersPermissionsRoleAggregatorRequest,
      defaultValue?: UsersPermissionsRoleAggregator | null,
    ) => Promise<UsersPermissionsRoleAggregator | null>
  }
}

export interface UsersPermissionsRoleConnectionObservableChain {
  values: {
    execute: (
      request: UsersPermissionsRoleRequest,
      defaultValue?: (UsersPermissionsRole | null)[] | null,
    ) => Observable<(UsersPermissionsRole | null)[] | null>
  }
  groupBy: UsersPermissionsRoleGroupByObservableChain & {
    execute: (
      request: UsersPermissionsRoleGroupByRequest,
      defaultValue?: UsersPermissionsRoleGroupBy | null,
    ) => Observable<UsersPermissionsRoleGroupBy | null>
  }
  aggregate: UsersPermissionsRoleAggregatorObservableChain & {
    execute: (
      request: UsersPermissionsRoleAggregatorRequest,
      defaultValue?: UsersPermissionsRoleAggregator | null,
    ) => Observable<UsersPermissionsRoleAggregator | null>
  }
}

export interface UsersPermissionsRoleGroupByPromiseChain {
  name: {
    execute: (
      request: UsersPermissionsRoleConnectionNameRequest,
      defaultValue?: (UsersPermissionsRoleConnectionName | null)[] | null,
    ) => Promise<(UsersPermissionsRoleConnectionName | null)[] | null>
  }
  description: {
    execute: (
      request: UsersPermissionsRoleConnectionDescriptionRequest,
      defaultValue?: (UsersPermissionsRoleConnectionDescription | null)[] | null,
    ) => Promise<(UsersPermissionsRoleConnectionDescription | null)[] | null>
  }
  type: {
    execute: (
      request: UsersPermissionsRoleConnectionTypeRequest,
      defaultValue?: (UsersPermissionsRoleConnectionType | null)[] | null,
    ) => Promise<(UsersPermissionsRoleConnectionType | null)[] | null>
  }
  _id: {
    execute: (
      request: UsersPermissionsRoleConnection_idRequest,
      defaultValue?: (UsersPermissionsRoleConnection_id | null)[] | null,
    ) => Promise<(UsersPermissionsRoleConnection_id | null)[] | null>
  }
  id: {
    execute: (
      request: UsersPermissionsRoleConnectionIdRequest,
      defaultValue?: (UsersPermissionsRoleConnectionId | null)[] | null,
    ) => Promise<(UsersPermissionsRoleConnectionId | null)[] | null>
  }
  createdAt: {
    execute: (
      request: UsersPermissionsRoleConnectionCreatedAtRequest,
      defaultValue?: (UsersPermissionsRoleConnectionCreatedAt | null)[] | null,
    ) => Promise<(UsersPermissionsRoleConnectionCreatedAt | null)[] | null>
  }
  updatedAt: {
    execute: (
      request: UsersPermissionsRoleConnectionUpdatedAtRequest,
      defaultValue?: (UsersPermissionsRoleConnectionUpdatedAt | null)[] | null,
    ) => Promise<(UsersPermissionsRoleConnectionUpdatedAt | null)[] | null>
  }
}

export interface UsersPermissionsRoleGroupByObservableChain {
  name: {
    execute: (
      request: UsersPermissionsRoleConnectionNameRequest,
      defaultValue?: (UsersPermissionsRoleConnectionName | null)[] | null,
    ) => Observable<(UsersPermissionsRoleConnectionName | null)[] | null>
  }
  description: {
    execute: (
      request: UsersPermissionsRoleConnectionDescriptionRequest,
      defaultValue?: (UsersPermissionsRoleConnectionDescription | null)[] | null,
    ) => Observable<(UsersPermissionsRoleConnectionDescription | null)[] | null>
  }
  type: {
    execute: (
      request: UsersPermissionsRoleConnectionTypeRequest,
      defaultValue?: (UsersPermissionsRoleConnectionType | null)[] | null,
    ) => Observable<(UsersPermissionsRoleConnectionType | null)[] | null>
  }
  _id: {
    execute: (
      request: UsersPermissionsRoleConnection_idRequest,
      defaultValue?: (UsersPermissionsRoleConnection_id | null)[] | null,
    ) => Observable<(UsersPermissionsRoleConnection_id | null)[] | null>
  }
  id: {
    execute: (
      request: UsersPermissionsRoleConnectionIdRequest,
      defaultValue?: (UsersPermissionsRoleConnectionId | null)[] | null,
    ) => Observable<(UsersPermissionsRoleConnectionId | null)[] | null>
  }
  createdAt: {
    execute: (
      request: UsersPermissionsRoleConnectionCreatedAtRequest,
      defaultValue?: (UsersPermissionsRoleConnectionCreatedAt | null)[] | null,
    ) => Observable<(UsersPermissionsRoleConnectionCreatedAt | null)[] | null>
  }
  updatedAt: {
    execute: (
      request: UsersPermissionsRoleConnectionUpdatedAtRequest,
      defaultValue?: (UsersPermissionsRoleConnectionUpdatedAt | null)[] | null,
    ) => Observable<(UsersPermissionsRoleConnectionUpdatedAt | null)[] | null>
  }
}

export interface UsersPermissionsRoleConnectionNamePromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  connection: UsersPermissionsRoleConnectionPromiseChain & {
    execute: (
      request: UsersPermissionsRoleConnectionRequest,
      defaultValue?: UsersPermissionsRoleConnection | null,
    ) => Promise<UsersPermissionsRoleConnection | null>
  }
}

export interface UsersPermissionsRoleConnectionNameObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  connection: UsersPermissionsRoleConnectionObservableChain & {
    execute: (
      request: UsersPermissionsRoleConnectionRequest,
      defaultValue?: UsersPermissionsRoleConnection | null,
    ) => Observable<UsersPermissionsRoleConnection | null>
  }
}

export interface UsersPermissionsRoleConnectionDescriptionPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  connection: UsersPermissionsRoleConnectionPromiseChain & {
    execute: (
      request: UsersPermissionsRoleConnectionRequest,
      defaultValue?: UsersPermissionsRoleConnection | null,
    ) => Promise<UsersPermissionsRoleConnection | null>
  }
}

export interface UsersPermissionsRoleConnectionDescriptionObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  connection: UsersPermissionsRoleConnectionObservableChain & {
    execute: (
      request: UsersPermissionsRoleConnectionRequest,
      defaultValue?: UsersPermissionsRoleConnection | null,
    ) => Observable<UsersPermissionsRoleConnection | null>
  }
}

export interface UsersPermissionsRoleConnectionTypePromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  connection: UsersPermissionsRoleConnectionPromiseChain & {
    execute: (
      request: UsersPermissionsRoleConnectionRequest,
      defaultValue?: UsersPermissionsRoleConnection | null,
    ) => Promise<UsersPermissionsRoleConnection | null>
  }
}

export interface UsersPermissionsRoleConnectionTypeObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  connection: UsersPermissionsRoleConnectionObservableChain & {
    execute: (
      request: UsersPermissionsRoleConnectionRequest,
      defaultValue?: UsersPermissionsRoleConnection | null,
    ) => Observable<UsersPermissionsRoleConnection | null>
  }
}

export interface UsersPermissionsRoleConnection_idPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: ID | null) => Promise<ID | null> }
  connection: UsersPermissionsRoleConnectionPromiseChain & {
    execute: (
      request: UsersPermissionsRoleConnectionRequest,
      defaultValue?: UsersPermissionsRoleConnection | null,
    ) => Promise<UsersPermissionsRoleConnection | null>
  }
}

export interface UsersPermissionsRoleConnection_idObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: ID | null) => Observable<ID | null> }
  connection: UsersPermissionsRoleConnectionObservableChain & {
    execute: (
      request: UsersPermissionsRoleConnectionRequest,
      defaultValue?: UsersPermissionsRoleConnection | null,
    ) => Observable<UsersPermissionsRoleConnection | null>
  }
}

export interface UsersPermissionsRoleConnectionIdPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: ID | null) => Promise<ID | null> }
  connection: UsersPermissionsRoleConnectionPromiseChain & {
    execute: (
      request: UsersPermissionsRoleConnectionRequest,
      defaultValue?: UsersPermissionsRoleConnection | null,
    ) => Promise<UsersPermissionsRoleConnection | null>
  }
}

export interface UsersPermissionsRoleConnectionIdObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: ID | null) => Observable<ID | null> }
  connection: UsersPermissionsRoleConnectionObservableChain & {
    execute: (
      request: UsersPermissionsRoleConnectionRequest,
      defaultValue?: UsersPermissionsRoleConnection | null,
    ) => Observable<UsersPermissionsRoleConnection | null>
  }
}

export interface UsersPermissionsRoleConnectionCreatedAtPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: DateTime | null) => Promise<DateTime | null> }
  connection: UsersPermissionsRoleConnectionPromiseChain & {
    execute: (
      request: UsersPermissionsRoleConnectionRequest,
      defaultValue?: UsersPermissionsRoleConnection | null,
    ) => Promise<UsersPermissionsRoleConnection | null>
  }
}

export interface UsersPermissionsRoleConnectionCreatedAtObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: DateTime | null) => Observable<DateTime | null> }
  connection: UsersPermissionsRoleConnectionObservableChain & {
    execute: (
      request: UsersPermissionsRoleConnectionRequest,
      defaultValue?: UsersPermissionsRoleConnection | null,
    ) => Observable<UsersPermissionsRoleConnection | null>
  }
}

export interface UsersPermissionsRoleConnectionUpdatedAtPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: DateTime | null) => Promise<DateTime | null> }
  connection: UsersPermissionsRoleConnectionPromiseChain & {
    execute: (
      request: UsersPermissionsRoleConnectionRequest,
      defaultValue?: UsersPermissionsRoleConnection | null,
    ) => Promise<UsersPermissionsRoleConnection | null>
  }
}

export interface UsersPermissionsRoleConnectionUpdatedAtObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: DateTime | null) => Observable<DateTime | null> }
  connection: UsersPermissionsRoleConnectionObservableChain & {
    execute: (
      request: UsersPermissionsRoleConnectionRequest,
      defaultValue?: UsersPermissionsRoleConnection | null,
    ) => Observable<UsersPermissionsRoleConnection | null>
  }
}

export interface UsersPermissionsRoleAggregatorPromiseChain {
  count: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  totalCount: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
}

export interface UsersPermissionsRoleAggregatorObservableChain {
  count: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  totalCount: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
}

export interface createUserPayloadPromiseChain {
  user: UsersPermissionsUserPromiseChain & {
    execute: (
      request: UsersPermissionsUserRequest,
      defaultValue?: UsersPermissionsUser | null,
    ) => Promise<UsersPermissionsUser | null>
  }
}

export interface createUserPayloadObservableChain {
  user: UsersPermissionsUserObservableChain & {
    execute: (
      request: UsersPermissionsUserRequest,
      defaultValue?: UsersPermissionsUser | null,
    ) => Observable<UsersPermissionsUser | null>
  }
}

export interface updateUserPayloadPromiseChain {
  user: UsersPermissionsUserPromiseChain & {
    execute: (
      request: UsersPermissionsUserRequest,
      defaultValue?: UsersPermissionsUser | null,
    ) => Promise<UsersPermissionsUser | null>
  }
}

export interface updateUserPayloadObservableChain {
  user: UsersPermissionsUserObservableChain & {
    execute: (
      request: UsersPermissionsUserRequest,
      defaultValue?: UsersPermissionsUser | null,
    ) => Observable<UsersPermissionsUser | null>
  }
}

export interface deleteUserPayloadPromiseChain {
  user: UsersPermissionsUserPromiseChain & {
    execute: (
      request: UsersPermissionsUserRequest,
      defaultValue?: UsersPermissionsUser | null,
    ) => Promise<UsersPermissionsUser | null>
  }
}

export interface deleteUserPayloadObservableChain {
  user: UsersPermissionsUserObservableChain & {
    execute: (
      request: UsersPermissionsUserRequest,
      defaultValue?: UsersPermissionsUser | null,
    ) => Observable<UsersPermissionsUser | null>
  }
}

export interface UsersPermissionsUserConnectionPromiseChain {
  values: {
    execute: (
      request: UsersPermissionsUserRequest,
      defaultValue?: (UsersPermissionsUser | null)[] | null,
    ) => Promise<(UsersPermissionsUser | null)[] | null>
  }
  groupBy: UsersPermissionsUserGroupByPromiseChain & {
    execute: (
      request: UsersPermissionsUserGroupByRequest,
      defaultValue?: UsersPermissionsUserGroupBy | null,
    ) => Promise<UsersPermissionsUserGroupBy | null>
  }
  aggregate: UsersPermissionsUserAggregatorPromiseChain & {
    execute: (
      request: UsersPermissionsUserAggregatorRequest,
      defaultValue?: UsersPermissionsUserAggregator | null,
    ) => Promise<UsersPermissionsUserAggregator | null>
  }
}

export interface UsersPermissionsUserConnectionObservableChain {
  values: {
    execute: (
      request: UsersPermissionsUserRequest,
      defaultValue?: (UsersPermissionsUser | null)[] | null,
    ) => Observable<(UsersPermissionsUser | null)[] | null>
  }
  groupBy: UsersPermissionsUserGroupByObservableChain & {
    execute: (
      request: UsersPermissionsUserGroupByRequest,
      defaultValue?: UsersPermissionsUserGroupBy | null,
    ) => Observable<UsersPermissionsUserGroupBy | null>
  }
  aggregate: UsersPermissionsUserAggregatorObservableChain & {
    execute: (
      request: UsersPermissionsUserAggregatorRequest,
      defaultValue?: UsersPermissionsUserAggregator | null,
    ) => Observable<UsersPermissionsUserAggregator | null>
  }
}

export interface UsersPermissionsUserGroupByPromiseChain {
  username: {
    execute: (
      request: UsersPermissionsUserConnectionUsernameRequest,
      defaultValue?: (UsersPermissionsUserConnectionUsername | null)[] | null,
    ) => Promise<(UsersPermissionsUserConnectionUsername | null)[] | null>
  }
  email: {
    execute: (
      request: UsersPermissionsUserConnectionEmailRequest,
      defaultValue?: (UsersPermissionsUserConnectionEmail | null)[] | null,
    ) => Promise<(UsersPermissionsUserConnectionEmail | null)[] | null>
  }
  provider: {
    execute: (
      request: UsersPermissionsUserConnectionProviderRequest,
      defaultValue?: (UsersPermissionsUserConnectionProvider | null)[] | null,
    ) => Promise<(UsersPermissionsUserConnectionProvider | null)[] | null>
  }
  confirmed: {
    execute: (
      request: UsersPermissionsUserConnectionConfirmedRequest,
      defaultValue?: (UsersPermissionsUserConnectionConfirmed | null)[] | null,
    ) => Promise<(UsersPermissionsUserConnectionConfirmed | null)[] | null>
  }
  blocked: {
    execute: (
      request: UsersPermissionsUserConnectionBlockedRequest,
      defaultValue?: (UsersPermissionsUserConnectionBlocked | null)[] | null,
    ) => Promise<(UsersPermissionsUserConnectionBlocked | null)[] | null>
  }
  role: {
    execute: (
      request: UsersPermissionsUserConnectionRoleRequest,
      defaultValue?: (UsersPermissionsUserConnectionRole | null)[] | null,
    ) => Promise<(UsersPermissionsUserConnectionRole | null)[] | null>
  }
  _id: {
    execute: (
      request: UsersPermissionsUserConnection_idRequest,
      defaultValue?: (UsersPermissionsUserConnection_id | null)[] | null,
    ) => Promise<(UsersPermissionsUserConnection_id | null)[] | null>
  }
  id: {
    execute: (
      request: UsersPermissionsUserConnectionIdRequest,
      defaultValue?: (UsersPermissionsUserConnectionId | null)[] | null,
    ) => Promise<(UsersPermissionsUserConnectionId | null)[] | null>
  }
  createdAt: {
    execute: (
      request: UsersPermissionsUserConnectionCreatedAtRequest,
      defaultValue?: (UsersPermissionsUserConnectionCreatedAt | null)[] | null,
    ) => Promise<(UsersPermissionsUserConnectionCreatedAt | null)[] | null>
  }
  updatedAt: {
    execute: (
      request: UsersPermissionsUserConnectionUpdatedAtRequest,
      defaultValue?: (UsersPermissionsUserConnectionUpdatedAt | null)[] | null,
    ) => Promise<(UsersPermissionsUserConnectionUpdatedAt | null)[] | null>
  }
}

export interface UsersPermissionsUserGroupByObservableChain {
  username: {
    execute: (
      request: UsersPermissionsUserConnectionUsernameRequest,
      defaultValue?: (UsersPermissionsUserConnectionUsername | null)[] | null,
    ) => Observable<(UsersPermissionsUserConnectionUsername | null)[] | null>
  }
  email: {
    execute: (
      request: UsersPermissionsUserConnectionEmailRequest,
      defaultValue?: (UsersPermissionsUserConnectionEmail | null)[] | null,
    ) => Observable<(UsersPermissionsUserConnectionEmail | null)[] | null>
  }
  provider: {
    execute: (
      request: UsersPermissionsUserConnectionProviderRequest,
      defaultValue?: (UsersPermissionsUserConnectionProvider | null)[] | null,
    ) => Observable<(UsersPermissionsUserConnectionProvider | null)[] | null>
  }
  confirmed: {
    execute: (
      request: UsersPermissionsUserConnectionConfirmedRequest,
      defaultValue?: (UsersPermissionsUserConnectionConfirmed | null)[] | null,
    ) => Observable<(UsersPermissionsUserConnectionConfirmed | null)[] | null>
  }
  blocked: {
    execute: (
      request: UsersPermissionsUserConnectionBlockedRequest,
      defaultValue?: (UsersPermissionsUserConnectionBlocked | null)[] | null,
    ) => Observable<(UsersPermissionsUserConnectionBlocked | null)[] | null>
  }
  role: {
    execute: (
      request: UsersPermissionsUserConnectionRoleRequest,
      defaultValue?: (UsersPermissionsUserConnectionRole | null)[] | null,
    ) => Observable<(UsersPermissionsUserConnectionRole | null)[] | null>
  }
  _id: {
    execute: (
      request: UsersPermissionsUserConnection_idRequest,
      defaultValue?: (UsersPermissionsUserConnection_id | null)[] | null,
    ) => Observable<(UsersPermissionsUserConnection_id | null)[] | null>
  }
  id: {
    execute: (
      request: UsersPermissionsUserConnectionIdRequest,
      defaultValue?: (UsersPermissionsUserConnectionId | null)[] | null,
    ) => Observable<(UsersPermissionsUserConnectionId | null)[] | null>
  }
  createdAt: {
    execute: (
      request: UsersPermissionsUserConnectionCreatedAtRequest,
      defaultValue?: (UsersPermissionsUserConnectionCreatedAt | null)[] | null,
    ) => Observable<(UsersPermissionsUserConnectionCreatedAt | null)[] | null>
  }
  updatedAt: {
    execute: (
      request: UsersPermissionsUserConnectionUpdatedAtRequest,
      defaultValue?: (UsersPermissionsUserConnectionUpdatedAt | null)[] | null,
    ) => Observable<(UsersPermissionsUserConnectionUpdatedAt | null)[] | null>
  }
}

export interface UsersPermissionsUserConnectionUsernamePromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  connection: UsersPermissionsUserConnectionPromiseChain & {
    execute: (
      request: UsersPermissionsUserConnectionRequest,
      defaultValue?: UsersPermissionsUserConnection | null,
    ) => Promise<UsersPermissionsUserConnection | null>
  }
}

export interface UsersPermissionsUserConnectionUsernameObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  connection: UsersPermissionsUserConnectionObservableChain & {
    execute: (
      request: UsersPermissionsUserConnectionRequest,
      defaultValue?: UsersPermissionsUserConnection | null,
    ) => Observable<UsersPermissionsUserConnection | null>
  }
}

export interface UsersPermissionsUserConnectionEmailPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  connection: UsersPermissionsUserConnectionPromiseChain & {
    execute: (
      request: UsersPermissionsUserConnectionRequest,
      defaultValue?: UsersPermissionsUserConnection | null,
    ) => Promise<UsersPermissionsUserConnection | null>
  }
}

export interface UsersPermissionsUserConnectionEmailObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  connection: UsersPermissionsUserConnectionObservableChain & {
    execute: (
      request: UsersPermissionsUserConnectionRequest,
      defaultValue?: UsersPermissionsUserConnection | null,
    ) => Observable<UsersPermissionsUserConnection | null>
  }
}

export interface UsersPermissionsUserConnectionProviderPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  connection: UsersPermissionsUserConnectionPromiseChain & {
    execute: (
      request: UsersPermissionsUserConnectionRequest,
      defaultValue?: UsersPermissionsUserConnection | null,
    ) => Promise<UsersPermissionsUserConnection | null>
  }
}

export interface UsersPermissionsUserConnectionProviderObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  connection: UsersPermissionsUserConnectionObservableChain & {
    execute: (
      request: UsersPermissionsUserConnectionRequest,
      defaultValue?: UsersPermissionsUserConnection | null,
    ) => Observable<UsersPermissionsUserConnection | null>
  }
}

export interface UsersPermissionsUserConnectionConfirmedPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Promise<Boolean | null> }
  connection: UsersPermissionsUserConnectionPromiseChain & {
    execute: (
      request: UsersPermissionsUserConnectionRequest,
      defaultValue?: UsersPermissionsUserConnection | null,
    ) => Promise<UsersPermissionsUserConnection | null>
  }
}

export interface UsersPermissionsUserConnectionConfirmedObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Observable<Boolean | null> }
  connection: UsersPermissionsUserConnectionObservableChain & {
    execute: (
      request: UsersPermissionsUserConnectionRequest,
      defaultValue?: UsersPermissionsUserConnection | null,
    ) => Observable<UsersPermissionsUserConnection | null>
  }
}

export interface UsersPermissionsUserConnectionBlockedPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Promise<Boolean | null> }
  connection: UsersPermissionsUserConnectionPromiseChain & {
    execute: (
      request: UsersPermissionsUserConnectionRequest,
      defaultValue?: UsersPermissionsUserConnection | null,
    ) => Promise<UsersPermissionsUserConnection | null>
  }
}

export interface UsersPermissionsUserConnectionBlockedObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Observable<Boolean | null> }
  connection: UsersPermissionsUserConnectionObservableChain & {
    execute: (
      request: UsersPermissionsUserConnectionRequest,
      defaultValue?: UsersPermissionsUserConnection | null,
    ) => Observable<UsersPermissionsUserConnection | null>
  }
}

export interface UsersPermissionsUserConnectionRolePromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: ID | null) => Promise<ID | null> }
  connection: UsersPermissionsUserConnectionPromiseChain & {
    execute: (
      request: UsersPermissionsUserConnectionRequest,
      defaultValue?: UsersPermissionsUserConnection | null,
    ) => Promise<UsersPermissionsUserConnection | null>
  }
}

export interface UsersPermissionsUserConnectionRoleObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: ID | null) => Observable<ID | null> }
  connection: UsersPermissionsUserConnectionObservableChain & {
    execute: (
      request: UsersPermissionsUserConnectionRequest,
      defaultValue?: UsersPermissionsUserConnection | null,
    ) => Observable<UsersPermissionsUserConnection | null>
  }
}

export interface UsersPermissionsUserConnection_idPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: ID | null) => Promise<ID | null> }
  connection: UsersPermissionsUserConnectionPromiseChain & {
    execute: (
      request: UsersPermissionsUserConnectionRequest,
      defaultValue?: UsersPermissionsUserConnection | null,
    ) => Promise<UsersPermissionsUserConnection | null>
  }
}

export interface UsersPermissionsUserConnection_idObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: ID | null) => Observable<ID | null> }
  connection: UsersPermissionsUserConnectionObservableChain & {
    execute: (
      request: UsersPermissionsUserConnectionRequest,
      defaultValue?: UsersPermissionsUserConnection | null,
    ) => Observable<UsersPermissionsUserConnection | null>
  }
}

export interface UsersPermissionsUserConnectionIdPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: ID | null) => Promise<ID | null> }
  connection: UsersPermissionsUserConnectionPromiseChain & {
    execute: (
      request: UsersPermissionsUserConnectionRequest,
      defaultValue?: UsersPermissionsUserConnection | null,
    ) => Promise<UsersPermissionsUserConnection | null>
  }
}

export interface UsersPermissionsUserConnectionIdObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: ID | null) => Observable<ID | null> }
  connection: UsersPermissionsUserConnectionObservableChain & {
    execute: (
      request: UsersPermissionsUserConnectionRequest,
      defaultValue?: UsersPermissionsUserConnection | null,
    ) => Observable<UsersPermissionsUserConnection | null>
  }
}

export interface UsersPermissionsUserConnectionCreatedAtPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: DateTime | null) => Promise<DateTime | null> }
  connection: UsersPermissionsUserConnectionPromiseChain & {
    execute: (
      request: UsersPermissionsUserConnectionRequest,
      defaultValue?: UsersPermissionsUserConnection | null,
    ) => Promise<UsersPermissionsUserConnection | null>
  }
}

export interface UsersPermissionsUserConnectionCreatedAtObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: DateTime | null) => Observable<DateTime | null> }
  connection: UsersPermissionsUserConnectionObservableChain & {
    execute: (
      request: UsersPermissionsUserConnectionRequest,
      defaultValue?: UsersPermissionsUserConnection | null,
    ) => Observable<UsersPermissionsUserConnection | null>
  }
}

export interface UsersPermissionsUserConnectionUpdatedAtPromiseChain {
  key: { execute: (request?: boolean | number, defaultValue?: DateTime | null) => Promise<DateTime | null> }
  connection: UsersPermissionsUserConnectionPromiseChain & {
    execute: (
      request: UsersPermissionsUserConnectionRequest,
      defaultValue?: UsersPermissionsUserConnection | null,
    ) => Promise<UsersPermissionsUserConnection | null>
  }
}

export interface UsersPermissionsUserConnectionUpdatedAtObservableChain {
  key: { execute: (request?: boolean | number, defaultValue?: DateTime | null) => Observable<DateTime | null> }
  connection: UsersPermissionsUserConnectionObservableChain & {
    execute: (
      request: UsersPermissionsUserConnectionRequest,
      defaultValue?: UsersPermissionsUserConnection | null,
    ) => Observable<UsersPermissionsUserConnection | null>
  }
}

export interface UsersPermissionsUserAggregatorPromiseChain {
  count: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  totalCount: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
}

export interface UsersPermissionsUserAggregatorObservableChain {
  count: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  totalCount: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
}

export interface MutationPromiseChain {
  createEmployment: ((args?: {
    input?: createEmploymentInput | null
  }) => createEmploymentPayloadPromiseChain & {
    execute: (
      request: createEmploymentPayloadRequest,
      defaultValue?: createEmploymentPayload | null,
    ) => Promise<createEmploymentPayload | null>
  }) &
    (createEmploymentPayloadPromiseChain & {
      execute: (
        request: createEmploymentPayloadRequest,
        defaultValue?: createEmploymentPayload | null,
      ) => Promise<createEmploymentPayload | null>
    })
  updateEmployment: ((args?: {
    input?: updateEmploymentInput | null
  }) => updateEmploymentPayloadPromiseChain & {
    execute: (
      request: updateEmploymentPayloadRequest,
      defaultValue?: updateEmploymentPayload | null,
    ) => Promise<updateEmploymentPayload | null>
  }) &
    (updateEmploymentPayloadPromiseChain & {
      execute: (
        request: updateEmploymentPayloadRequest,
        defaultValue?: updateEmploymentPayload | null,
      ) => Promise<updateEmploymentPayload | null>
    })
  deleteEmployment: ((args?: {
    input?: deleteEmploymentInput | null
  }) => deleteEmploymentPayloadPromiseChain & {
    execute: (
      request: deleteEmploymentPayloadRequest,
      defaultValue?: deleteEmploymentPayload | null,
    ) => Promise<deleteEmploymentPayload | null>
  }) &
    (deleteEmploymentPayloadPromiseChain & {
      execute: (
        request: deleteEmploymentPayloadRequest,
        defaultValue?: deleteEmploymentPayload | null,
      ) => Promise<deleteEmploymentPayload | null>
    })
  createPersonalInfo: ((args?: {
    input?: createPersonalInfoInput | null
  }) => createPersonalInfoPayloadPromiseChain & {
    execute: (
      request: createPersonalInfoPayloadRequest,
      defaultValue?: createPersonalInfoPayload | null,
    ) => Promise<createPersonalInfoPayload | null>
  }) &
    (createPersonalInfoPayloadPromiseChain & {
      execute: (
        request: createPersonalInfoPayloadRequest,
        defaultValue?: createPersonalInfoPayload | null,
      ) => Promise<createPersonalInfoPayload | null>
    })
  updatePersonalInfo: ((args?: {
    input?: updatePersonalInfoInput | null
  }) => updatePersonalInfoPayloadPromiseChain & {
    execute: (
      request: updatePersonalInfoPayloadRequest,
      defaultValue?: updatePersonalInfoPayload | null,
    ) => Promise<updatePersonalInfoPayload | null>
  }) &
    (updatePersonalInfoPayloadPromiseChain & {
      execute: (
        request: updatePersonalInfoPayloadRequest,
        defaultValue?: updatePersonalInfoPayload | null,
      ) => Promise<updatePersonalInfoPayload | null>
    })
  deletePersonalInfo: ((args?: {
    input?: deletePersonalInfoInput | null
  }) => deletePersonalInfoPayloadPromiseChain & {
    execute: (
      request: deletePersonalInfoPayloadRequest,
      defaultValue?: deletePersonalInfoPayload | null,
    ) => Promise<deletePersonalInfoPayload | null>
  }) &
    (deletePersonalInfoPayloadPromiseChain & {
      execute: (
        request: deletePersonalInfoPayloadRequest,
        defaultValue?: deletePersonalInfoPayload | null,
      ) => Promise<deletePersonalInfoPayload | null>
    })
  /** Create a new role */
  createRole: ((args?: {
    input?: createRoleInput | null
  }) => createRolePayloadPromiseChain & {
    execute: (
      request: createRolePayloadRequest,
      defaultValue?: createRolePayload | null,
    ) => Promise<createRolePayload | null>
  }) &
    (createRolePayloadPromiseChain & {
      execute: (
        request: createRolePayloadRequest,
        defaultValue?: createRolePayload | null,
      ) => Promise<createRolePayload | null>
    })
  /** Update an existing role */
  updateRole: ((args?: {
    input?: updateRoleInput | null
  }) => updateRolePayloadPromiseChain & {
    execute: (
      request: updateRolePayloadRequest,
      defaultValue?: updateRolePayload | null,
    ) => Promise<updateRolePayload | null>
  }) &
    (updateRolePayloadPromiseChain & {
      execute: (
        request: updateRolePayloadRequest,
        defaultValue?: updateRolePayload | null,
      ) => Promise<updateRolePayload | null>
    })
  /** Delete an existing role */
  deleteRole: ((args?: {
    input?: deleteRoleInput | null
  }) => deleteRolePayloadPromiseChain & {
    execute: (
      request: deleteRolePayloadRequest,
      defaultValue?: deleteRolePayload | null,
    ) => Promise<deleteRolePayload | null>
  }) &
    (deleteRolePayloadPromiseChain & {
      execute: (
        request: deleteRolePayloadRequest,
        defaultValue?: deleteRolePayload | null,
      ) => Promise<deleteRolePayload | null>
    })
  /** Create a new user */
  createUser: ((args?: {
    input?: createUserInput | null
  }) => createUserPayloadPromiseChain & {
    execute: (
      request: createUserPayloadRequest,
      defaultValue?: createUserPayload | null,
    ) => Promise<createUserPayload | null>
  }) &
    (createUserPayloadPromiseChain & {
      execute: (
        request: createUserPayloadRequest,
        defaultValue?: createUserPayload | null,
      ) => Promise<createUserPayload | null>
    })
  /** Update an existing user */
  updateUser: ((args?: {
    input?: updateUserInput | null
  }) => updateUserPayloadPromiseChain & {
    execute: (
      request: updateUserPayloadRequest,
      defaultValue?: updateUserPayload | null,
    ) => Promise<updateUserPayload | null>
  }) &
    (updateUserPayloadPromiseChain & {
      execute: (
        request: updateUserPayloadRequest,
        defaultValue?: updateUserPayload | null,
      ) => Promise<updateUserPayload | null>
    })
  /** Delete an existing user */
  deleteUser: ((args?: {
    input?: deleteUserInput | null
  }) => deleteUserPayloadPromiseChain & {
    execute: (
      request: deleteUserPayloadRequest,
      defaultValue?: deleteUserPayload | null,
    ) => Promise<deleteUserPayload | null>
  }) &
    (deleteUserPayloadPromiseChain & {
      execute: (
        request: deleteUserPayloadRequest,
        defaultValue?: deleteUserPayload | null,
      ) => Promise<deleteUserPayload | null>
    })
  upload: (args: {
    refId?: ID | null
    ref?: String | null
    field?: String | null
    source?: String | null
    file: Upload
  }) => UploadFilePromiseChain & { execute: (request: UploadFileRequest, defaultValue?: UploadFile) => Promise<UploadFile> }
  multipleUpload: (args: {
    refId?: ID | null
    ref?: String | null
    field?: String | null
    source?: String | null
    files: (Upload | null)[]
  }) => { execute: (request: UploadFileRequest, defaultValue?: (UploadFile | null)[]) => Promise<(UploadFile | null)[]> }
  login: (args: {
    input: UsersPermissionsLoginInput
  }) => UsersPermissionsLoginPayloadPromiseChain & {
    execute: (
      request: UsersPermissionsLoginPayloadRequest,
      defaultValue?: UsersPermissionsLoginPayload,
    ) => Promise<UsersPermissionsLoginPayload>
  }
  register: (args: {
    input: UserInput
  }) => UsersPermissionsLoginPayloadPromiseChain & {
    execute: (
      request: UsersPermissionsLoginPayloadRequest,
      defaultValue?: UsersPermissionsLoginPayload,
    ) => Promise<UsersPermissionsLoginPayload>
  }
}

export interface MutationObservableChain {
  createEmployment: ((args?: {
    input?: createEmploymentInput | null
  }) => createEmploymentPayloadObservableChain & {
    execute: (
      request: createEmploymentPayloadRequest,
      defaultValue?: createEmploymentPayload | null,
    ) => Observable<createEmploymentPayload | null>
  }) &
    (createEmploymentPayloadObservableChain & {
      execute: (
        request: createEmploymentPayloadRequest,
        defaultValue?: createEmploymentPayload | null,
      ) => Observable<createEmploymentPayload | null>
    })
  updateEmployment: ((args?: {
    input?: updateEmploymentInput | null
  }) => updateEmploymentPayloadObservableChain & {
    execute: (
      request: updateEmploymentPayloadRequest,
      defaultValue?: updateEmploymentPayload | null,
    ) => Observable<updateEmploymentPayload | null>
  }) &
    (updateEmploymentPayloadObservableChain & {
      execute: (
        request: updateEmploymentPayloadRequest,
        defaultValue?: updateEmploymentPayload | null,
      ) => Observable<updateEmploymentPayload | null>
    })
  deleteEmployment: ((args?: {
    input?: deleteEmploymentInput | null
  }) => deleteEmploymentPayloadObservableChain & {
    execute: (
      request: deleteEmploymentPayloadRequest,
      defaultValue?: deleteEmploymentPayload | null,
    ) => Observable<deleteEmploymentPayload | null>
  }) &
    (deleteEmploymentPayloadObservableChain & {
      execute: (
        request: deleteEmploymentPayloadRequest,
        defaultValue?: deleteEmploymentPayload | null,
      ) => Observable<deleteEmploymentPayload | null>
    })
  createPersonalInfo: ((args?: {
    input?: createPersonalInfoInput | null
  }) => createPersonalInfoPayloadObservableChain & {
    execute: (
      request: createPersonalInfoPayloadRequest,
      defaultValue?: createPersonalInfoPayload | null,
    ) => Observable<createPersonalInfoPayload | null>
  }) &
    (createPersonalInfoPayloadObservableChain & {
      execute: (
        request: createPersonalInfoPayloadRequest,
        defaultValue?: createPersonalInfoPayload | null,
      ) => Observable<createPersonalInfoPayload | null>
    })
  updatePersonalInfo: ((args?: {
    input?: updatePersonalInfoInput | null
  }) => updatePersonalInfoPayloadObservableChain & {
    execute: (
      request: updatePersonalInfoPayloadRequest,
      defaultValue?: updatePersonalInfoPayload | null,
    ) => Observable<updatePersonalInfoPayload | null>
  }) &
    (updatePersonalInfoPayloadObservableChain & {
      execute: (
        request: updatePersonalInfoPayloadRequest,
        defaultValue?: updatePersonalInfoPayload | null,
      ) => Observable<updatePersonalInfoPayload | null>
    })
  deletePersonalInfo: ((args?: {
    input?: deletePersonalInfoInput | null
  }) => deletePersonalInfoPayloadObservableChain & {
    execute: (
      request: deletePersonalInfoPayloadRequest,
      defaultValue?: deletePersonalInfoPayload | null,
    ) => Observable<deletePersonalInfoPayload | null>
  }) &
    (deletePersonalInfoPayloadObservableChain & {
      execute: (
        request: deletePersonalInfoPayloadRequest,
        defaultValue?: deletePersonalInfoPayload | null,
      ) => Observable<deletePersonalInfoPayload | null>
    })
  /** Create a new role */
  createRole: ((args?: {
    input?: createRoleInput | null
  }) => createRolePayloadObservableChain & {
    execute: (
      request: createRolePayloadRequest,
      defaultValue?: createRolePayload | null,
    ) => Observable<createRolePayload | null>
  }) &
    (createRolePayloadObservableChain & {
      execute: (
        request: createRolePayloadRequest,
        defaultValue?: createRolePayload | null,
      ) => Observable<createRolePayload | null>
    })
  /** Update an existing role */
  updateRole: ((args?: {
    input?: updateRoleInput | null
  }) => updateRolePayloadObservableChain & {
    execute: (
      request: updateRolePayloadRequest,
      defaultValue?: updateRolePayload | null,
    ) => Observable<updateRolePayload | null>
  }) &
    (updateRolePayloadObservableChain & {
      execute: (
        request: updateRolePayloadRequest,
        defaultValue?: updateRolePayload | null,
      ) => Observable<updateRolePayload | null>
    })
  /** Delete an existing role */
  deleteRole: ((args?: {
    input?: deleteRoleInput | null
  }) => deleteRolePayloadObservableChain & {
    execute: (
      request: deleteRolePayloadRequest,
      defaultValue?: deleteRolePayload | null,
    ) => Observable<deleteRolePayload | null>
  }) &
    (deleteRolePayloadObservableChain & {
      execute: (
        request: deleteRolePayloadRequest,
        defaultValue?: deleteRolePayload | null,
      ) => Observable<deleteRolePayload | null>
    })
  /** Create a new user */
  createUser: ((args?: {
    input?: createUserInput | null
  }) => createUserPayloadObservableChain & {
    execute: (
      request: createUserPayloadRequest,
      defaultValue?: createUserPayload | null,
    ) => Observable<createUserPayload | null>
  }) &
    (createUserPayloadObservableChain & {
      execute: (
        request: createUserPayloadRequest,
        defaultValue?: createUserPayload | null,
      ) => Observable<createUserPayload | null>
    })
  /** Update an existing user */
  updateUser: ((args?: {
    input?: updateUserInput | null
  }) => updateUserPayloadObservableChain & {
    execute: (
      request: updateUserPayloadRequest,
      defaultValue?: updateUserPayload | null,
    ) => Observable<updateUserPayload | null>
  }) &
    (updateUserPayloadObservableChain & {
      execute: (
        request: updateUserPayloadRequest,
        defaultValue?: updateUserPayload | null,
      ) => Observable<updateUserPayload | null>
    })
  /** Delete an existing user */
  deleteUser: ((args?: {
    input?: deleteUserInput | null
  }) => deleteUserPayloadObservableChain & {
    execute: (
      request: deleteUserPayloadRequest,
      defaultValue?: deleteUserPayload | null,
    ) => Observable<deleteUserPayload | null>
  }) &
    (deleteUserPayloadObservableChain & {
      execute: (
        request: deleteUserPayloadRequest,
        defaultValue?: deleteUserPayload | null,
      ) => Observable<deleteUserPayload | null>
    })
  upload: (args: {
    refId?: ID | null
    ref?: String | null
    field?: String | null
    source?: String | null
    file: Upload
  }) => UploadFileObservableChain & {
    execute: (request: UploadFileRequest, defaultValue?: UploadFile) => Observable<UploadFile>
  }
  multipleUpload: (args: {
    refId?: ID | null
    ref?: String | null
    field?: String | null
    source?: String | null
    files: (Upload | null)[]
  }) => { execute: (request: UploadFileRequest, defaultValue?: (UploadFile | null)[]) => Observable<(UploadFile | null)[]> }
  login: (args: {
    input: UsersPermissionsLoginInput
  }) => UsersPermissionsLoginPayloadObservableChain & {
    execute: (
      request: UsersPermissionsLoginPayloadRequest,
      defaultValue?: UsersPermissionsLoginPayload,
    ) => Observable<UsersPermissionsLoginPayload>
  }
  register: (args: {
    input: UserInput
  }) => UsersPermissionsLoginPayloadObservableChain & {
    execute: (
      request: UsersPermissionsLoginPayloadRequest,
      defaultValue?: UsersPermissionsLoginPayload,
    ) => Observable<UsersPermissionsLoginPayload>
  }
}
