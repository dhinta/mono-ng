import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run cpnel:serve:development',
        production: 'nx run cpnel:serve:production',
      },
      ciWebServerCommand: 'nx run cpnel:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
