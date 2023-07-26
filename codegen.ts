import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  documents: ["src/**/*.gql"],
  // ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/generated.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      // preset: "client",
    },
  },
};

export default config;
