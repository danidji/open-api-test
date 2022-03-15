export const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Test OPEN',
            version: '1.0.0',
            description: 'CRUD - Gestion users',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
            {
                url: 'https://europe-west2-api-test-open.cloudfunctions.net/openApi',
            },
            {
                url: 'http://localhost:5001/api-test-open/europe-west2/openApi',
            },

        ],
    },
    apis: ['./src/router.ts'],
};
