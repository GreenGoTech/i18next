import { resources, defaultNS } from '../i18n/config';
import Resources from './resources';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;

    // the resources.d.ts file is generated with npm run i18next-resources-for-ts
    resources: Resources;

    // if type safe interpolation is not wanted, this is sufficient:
    // resources: (typeof resources)['en'];
  }
}
