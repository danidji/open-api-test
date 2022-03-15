import firebase from 'firebase-admin';
import serviceAccount from '../files/service-account.json';

const params = {
    type: serviceAccount.type,
    projectId: serviceAccount.project_id,
    privateKeyId: serviceAccount.private_key_id,
    privateKey: serviceAccount.private_key,
    clientEmail: serviceAccount.client_email,
    clientId: serviceAccount.client_id,
    authUri: serviceAccount.auth_uri,
    tokenUri: serviceAccount.token_uri,
    authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
    clientC509CertUrl: serviceAccount.client_x509_cert_url,
};

firebase.initializeApp({
    credential: firebase.credential.cert(params),
    databaseURL: 'https://api-test-open-default-rtdb.europe-west1.firebasedatabase.app/',
});

export const database = firebase.database();
