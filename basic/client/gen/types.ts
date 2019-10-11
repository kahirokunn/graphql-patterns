export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Datetime: any;
};

export type Author = {
  __typename?: "Author";
  id: Scalars["ID"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  contract: Contract;
  posts?: Maybe<Array<Maybe<Post>>>;
};

export type AuthorPostsArgs = {
  findTitle?: Maybe<Scalars["String"]>;
};

export enum Contract {
  Free = "FREE",
  Premium = "PREMIUM"
}

export type Post = {
  __typename?: "Post";
  id: Scalars["ID"];
  title: Scalars["String"];
  author?: Maybe<Author>;
  createdat: Scalars["Datetime"];
};

export type Query = {
  __typename?: "Query";
  posts: Array<Post>;
};
