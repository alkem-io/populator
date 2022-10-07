import { AlkemioClientConfig } from '@alkemio/client-lib';
import dotenv from 'dotenv';

export const createConfigUsingEnvVars = (): AlkemioClientConfig => {
  dotenv.config();

  const server =
    process.env.API_ENDPOINT_PRIVATE_GRAPHQL ||
    'http://localhost:3000/api/private/non-interactive/graphql';

  return {
    apiEndpointPrivateGraphql: server,
    authInfo: {
      credentials: {
        email: process.env.AUTH_ADMIN_EMAIL ?? 'admin@alkem.io',
        password: process.env.AUTH_ADMIN_PASSWORD ?? 'test',
      },
      kratosPublicApiEndpoint:
        process.env.AUTH_ORY_KRATOS_PUBLIC_BASE_URL ??
        'http://localhost:3000/identity/ory/kratos/public/',
    },
  };
};
