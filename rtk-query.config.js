/** @type {import('@rtk-query/codegen-openapi').ConfigFile} */
const config = {
  // Backend OpenAPI spec ka URL (tumhare backend repo ka)
  schemaFile: 'https://raw.githubusercontent.com/aqibhanif14324-lab/everide-backend/main/openapi.yaml',

  // Tumhara base RTK Query API (JS file)
  apiFile: 'src/store/baseApi.js',
  apiImport: 'baseApi',

  // Generated hooks yahan likhe jayenge (JS)
  outputFile: 'src/store/generated/everideApi.js',
  exportName: 'everideApi',

  // React hooks generate karo
  hooks: true,
};

export default config;