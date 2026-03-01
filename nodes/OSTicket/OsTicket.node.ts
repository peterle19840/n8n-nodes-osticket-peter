import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { ticketFields, ticketOperations } from './descriptions';

export class OsTicket implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OSTicket',
		name: 'osTicket',
		icon: 'file:osticket-logo.svg',
		group: ['transform'],
		version: [1, 2],
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with OSTicket API - Create, Get, Update and Close tickets',
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
				],
				default: 'ticket',
			},
			...ticketOperations,
			...ticketFields,
		],
	};
}
