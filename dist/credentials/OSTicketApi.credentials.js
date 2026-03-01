"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OSTicketApi = void 0;
class OSTicketApi {
    constructor() {
        this.name = 'osTicketApi';
        this.displayName = 'OSTicket API';
        this.properties = [
            {
                displayName: 'Domain',
                name: 'domain',
                type: 'string',
                default: '',
            },
            {
                displayName: 'API Key',
                name: 'apiKey',
                type: 'string',
                typeOptions: { password: true },
                default: '',
            },
            {
                displayName: 'Self Signed Certifiate',
                name: 'selfSigned',
                type: 'boolean',
                default: false,
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    'X-API-Key': '={{$credentials.apiKey}}',
                },
            },
        };
        this.test = {
            request: {
                method: 'POST',
                baseURL: '={{$credentials?.domain}}',
                url: '/api/tickets.json',
                skipSslCertificateValidation: '={{$credentials?.selfSigned}}',
                body: '{}',
                ignoreHttpStatusErrors: true,
            },
        };
    }
}
exports.OSTicketApi = OSTicketApi;
//# sourceMappingURL=OSTicketApi.credentials.js.map