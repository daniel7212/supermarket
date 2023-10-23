import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'supermercado',
  webDir: 'dist/supermercado',
  server: {
    androidScheme: 'https'
  }
};

export default config;
