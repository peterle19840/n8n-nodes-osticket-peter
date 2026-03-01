import { INodeProperties } from 'n8n-workflow';

export const userOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['user'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a user',
				description: 'Create a new user',
				routing: {
					request: {
						method: 'POST',
						url: '/api/scp/users.json',
						json: true,
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a user',
				description: 'Delete a user by ID',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/api/scp/users.json/{{$parameter["userId"]}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a user',
				description: 'Get a user by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/scp/users.json/{{$parameter["userId"]}}',
					},
				},
			},
		],
		default: 'create',
	},
];

export const userFields: INodeProperties[] = [
	// ------------------------------------------------------------------
	//                        User ID
	//       (used by Get and Delete operations)
	// ------------------------------------------------------------------
	{
		displayName: 'User ID',
		name: 'userId',
		type: 'number',
		required: true,
		default: 0,
		description: 'The ID of the user',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['get', 'delete'],
			},
		},
	},

	// ------------------------------------------------------------------
	//                   Create: Required Fields
	// ------------------------------------------------------------------
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		required: true,
		default: '',
		description: 'Email address of the user',
		displayOptions: {
			show: {
				resource: ['user'],
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
		description: 'Full name of the user',
		displayOptions: {
			show: {
				resource: ['user'],
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
				resource: ['user'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'Internal notes about the user',
				routing: {
					send: {
						type: 'body',
						property: 'notes',
					},
				},
			},
			{
				displayName: 'Organization ID',
				name: 'orgId',
				type: 'number',
				default: 0,
				description: 'Organization ID to associate with the user',
				routing: {
					send: {
						type: 'body',
						property: 'orgId',
					},
				},
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'Phone number of the user',
				routing: {
					send: {
						type: 'body',
						property: 'phone',
					},
				},
			},
		],
	},
];
