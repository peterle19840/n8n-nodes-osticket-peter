import { INodeProperties } from 'n8n-workflow';

export const ticketOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['ticket'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a new ticket',
				description: 'Create a new ticket',
				routing: {
					request: {
						method: 'POST',
						url: '/api/tickets.json',
						json: true,
					},
				},
			},
			{
				name: 'Close',
				value: 'close',
				action: 'Close a ticket',
				description: 'Close a ticket by number',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/tickets.json/{{$parameter["ticketNumber"]}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a ticket',
				description: 'Get a ticket by number',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/tickets.json/{{$parameter["ticketNumber"]}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many tickets',
				description: 'Get many tickets',
				routing: {
					request: {
						method: 'GET',
						url: '/api/tickets.json',
					},
				},
			},
			{
				name: 'Reopen',
				value: 'reopen',
				action: 'Reopen a closed ticket',
				description: 'Reopen a previously closed ticket',
				routing: {
					request: {
						method: 'POST',
						url: '=/api/tickets.json/{{$parameter["ticketNumber"]}}',
						json: true,
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a ticket',
				description: 'Update a ticket by number',
				routing: {
					request: {
						method: 'PUT',
						url: '=/api/tickets.json/{{$parameter["ticketNumber"]}}',
						json: true,
					},
				},
			},
		],
		default: 'create',
	},
];

export const ticketFields: INodeProperties[] = [
	// ------------------------------------------------------------------
	//                        Ticket Number
	//       (used by Get, Update, Close operations)
	// ------------------------------------------------------------------
	{
		displayName: 'Ticket Number',
		name: 'ticketNumber',
		type: 'string',
		required: true,
		default: '',
		description: 'The ticket number (e.g. 123456)',
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['get', 'update', 'close', 'reopen'],
			},
		},
	},

	// ------------------------------------------------------------------
	//                        Create: Required Fields
	// ------------------------------------------------------------------
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'email',
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Subject',
		name: 'subject',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'subject',
			},
		},
	},
	{
		displayName: 'Message',
		name: 'message',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'message',
			},
		},
	},

	// ------------------------------------------------------------------
	//                   Create: Additional Fields
	// ------------------------------------------------------------------
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Alert',
				name: 'alert',
				type: 'boolean',
				default: true,
				description: 'Whether to disable alerts to staff',
				routing: {
					send: {
						type: 'body',
						property: 'alert',
					},
				},
			},
			{
				displayName: 'Autorespond',
				name: 'autorespond',
				type: 'boolean',
				default: true,
				description: 'Whether to disable autorespond',
				routing: {
					send: {
						type: 'body',
						property: 'autorespond',
					},
				},
			},
			{
				displayName: 'Department ID',
				name: 'departmentId',
				type: 'number',
				default: 0,
				description: 'Department ID to route the ticket to',
				routing: {
					send: {
						type: 'body',
						property: 'departmentId',
					},
				},
			},
			{
				displayName: 'Due Date',
				name: 'duedate',
				type: 'dateTime',
				default: '',
				description: 'Due date for the ticket',
				routing: {
					send: {
						type: 'body',
						property: 'duedate',
					},
				},
			},
			{
				displayName: 'IP Address',
				name: 'ip',
				type: 'string',
				default: '',
				description: 'IP address of the submitter',
				routing: {
					send: {
						type: 'body',
						property: 'ip',
					},
				},
			},
			{
				displayName: 'Internal Note',
				name: 'internalNote',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'Internal note (only visible to staff)',
				routing: {
					send: {
						type: 'body',
						property: 'note',
					},
				},
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'Phone number of the submitter (use X for extension, e.g. 1234567890X123)',
				routing: {
					send: {
						type: 'body',
						property: 'phone',
					},
				},
			},
			{
				displayName: 'Priority ID',
				name: 'priorityId',
				type: 'options',
				options: [
					{
						name: 'Low',
						value: 1,
					},
					{
						name: 'Normal',
						value: 2,
					},
					{
						name: 'High',
						value: 3,
					},
					{
						name: 'Emergency',
						value: 4,
					},
				],
				default: 1,
				description: 'Priority ID for the new ticket to assume',
				routing: {
					send: {
						type: 'body',
						property: 'priority',
					},
				},
			},
			{
				displayName: 'Source',
				name: 'source',
				type: 'string',
				default: 'API',
				description: 'Source of the ticket (e.g. API, Email, Phone, Web)',
				routing: {
					send: {
						type: 'body',
						property: 'source',
					},
				},
			},
			{
				displayName: 'Topic ID',
				name: 'topicId',
				type: 'number',
				default: 0,
				description: 'Help topic ID for the ticket',
				routing: {
					send: {
						type: 'body',
						property: 'topicId',
					},
				},
			},
		],
	},

	// ------------------------------------------------------------------
	//                   Get Many: Filters
	// ------------------------------------------------------------------
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				default: '',
				description: 'Filter tickets by submitter email',
				routing: {
					send: {
						type: 'query',
						property: 'email',
					},
				},
			},
			{
				displayName: 'Limit',
				name: 'limit',
				type: 'number',
				default: 50,
				description: 'Max number of results to return',
				typeOptions: {
					minValue: 1,
					maxValue: 200,
				},
				routing: {
					send: {
						type: 'query',
						property: 'limit',
					},
				},
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'Open',
						value: 'open',
					},
					{
						name: 'Closed',
						value: 'closed',
					},
					{
						name: 'Overdue',
						value: 'overdue',
					},
					{
						name: 'Answered',
						value: 'answered',
					},
				],
				default: 'open',
				description: 'Filter tickets by status',
				routing: {
					send: {
						type: 'query',
						property: 'status',
					},
				},
			},
			{
				displayName: 'User ID',
				name: 'userId',
				type: 'number',
				default: 0,
				description: 'Filter tickets by user ID',
				routing: {
					send: {
						type: 'query',
						property: 'userId',
					},
				},
			},
		],
	},

	// ------------------------------------------------------------------
	//                   Update: Fields
	// ------------------------------------------------------------------
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['ticket'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Assign To (Staff ID)',
				name: 'staffId',
				type: 'number',
				default: 0,
				description: 'Staff member ID to assign the ticket to',
				routing: {
					send: {
						type: 'body',
						property: 'staffId',
					},
				},
			},
			{
				displayName: 'Department ID',
				name: 'departmentId',
				type: 'number',
				default: 0,
				description: 'Move ticket to this department',
				routing: {
					send: {
						type: 'body',
						property: 'departmentId',
					},
				},
			},
			{
				displayName: 'Due Date',
				name: 'duedate',
				type: 'dateTime',
				default: '',
				description: 'Update the due date of the ticket',
				routing: {
					send: {
						type: 'body',
						property: 'duedate',
					},
				},
			},
			{
				displayName: 'Internal Note',
				name: 'note',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'Add an internal note (only visible to staff)',
				routing: {
					send: {
						type: 'body',
						property: 'note',
					},
				},
			},
			{
				displayName: 'Message',
				name: 'message',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'Add a reply message to the ticket',
				routing: {
					send: {
						type: 'body',
						property: 'message',
					},
				},
			},
			{
				displayName: 'Priority ID',
				name: 'priorityId',
				type: 'options',
				options: [
					{
						name: 'Low',
						value: 1,
					},
					{
						name: 'Normal',
						value: 2,
					},
					{
						name: 'High',
						value: 3,
					},
					{
						name: 'Emergency',
						value: 4,
					},
				],
				default: 2,
				description: 'Update the priority of the ticket',
				routing: {
					send: {
						type: 'body',
						property: 'priorityId',
					},
				},
			},
			{
				displayName: 'SLA ID',
				name: 'slaId',
				type: 'number',
				default: 0,
				description: 'SLA plan ID to apply to the ticket',
				routing: {
					send: {
						type: 'body',
						property: 'slaId',
					},
				},
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'Open',
						value: 'open',
					},
					{
						name: 'Closed',
						value: 'closed',
					},
					{
						name: 'Resolved',
						value: 'resolved',
					},
				],
				default: 'open',
				description: 'Update the status of the ticket',
				routing: {
					send: {
						type: 'body',
						property: 'status',
					},
				},
			},
			{
				displayName: 'Topic ID',
				name: 'topicId',
				type: 'number',
				default: 0,
				description: 'Update the help topic of the ticket',
				routing: {
					send: {
						type: 'body',
						property: 'topicId',
					},
				},
			},
		],
	},
];
