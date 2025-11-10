import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: 'https://raw.githubusercontent.com/aqibhanif14324-lab/everide-backend/main/openapi.yaml',
  apiFile: 'src/store/baseApi.ts',
  apiImport: 'baseApi',
  outputFile: 'src/store/generated/everideApi.ts',
  exportName: 'everideApi',
  hooks: true,
};
export default config;
