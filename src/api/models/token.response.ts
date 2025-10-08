export type GenerateTokenResponse = {
  token: string;
  expires: string;
  status: 'Success' | 'Failed';
  result?: string;
};