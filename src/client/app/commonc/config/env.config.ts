// Feel free to extend this interface
// depending on your app specific config.
export interface IConfig {
  API: string;
  APP_TITLE: string;
}

export const Config: IConfig = JSON.parse('<%= ENV_CONFIG %>');
