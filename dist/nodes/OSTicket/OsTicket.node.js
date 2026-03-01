"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OsTicket = void 0;
const descriptions_1 = require("./descriptions");
class OsTicket {
    constructor() {
        this.description = {
            displayName: 'OSTicket',
            name: 'osTicket',
            icon: 'file:osticket-logo.svg',
            group: ['transform'],
            version: [1, 2],
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Interact with OSTicket API - Manage tickets and users',
            defaults: {
                name: 'OSTicket',
            },
            inputs: ['main'],
            outputs: ['main'],
            credentials: [
                {
                    name: 'osTicketApi',
                    required: true,
                },
            ],
            requestDefaults: {
                baseURL: '={{$credentials.domain.replace(new RegExp("/$"), "")}}',
                skipSslCertificateValidation: '={{$credentials.selfSigned}}',
                headers: {
                    'Content-Type': 'application/json',
                },
            },
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'Ticket',
                            value: 'ticket',
                            description: 'Manage tickets',
                        },
                        {
                            name: 'User',
                            value: 'user',
                            description: 'Manage users',
                        },
                    ],
                    default: 'ticket',
                },
                ...descriptions_1.ticketOperations,
                ...descriptions_1.ticketFields,
                ...descriptions_1.userOperations,
                ...descriptions_1.userFields,
            ],
        };
    }
}
exports.OsTicket = OsTicket;
//# sourceMappingURL=OsTicket.node.js.map