import { INodeProperties } from 'n8n-workflow';

export const historyOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'history',
				],
			},
		},
		options: [
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get All state changes',
			},
		],
		default: 'getAll',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const historyFields = [
	/* -------------------------------------------------------------------------- */
	/*                                history:getLogbookEntries                   */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: [
					'getAll',
				],
				resource: [
					'history',
				],
			},
		},
		default: false,
		description: 'If all results should be returned or only up to a given limit.',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				operation: [
					'getAll',
				],
				resource: [
					'history',
				],
				returnAll: [
					false,
				],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		description: 'How many results to return.',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'history',
				],
				operation: [
					'getAll',
				],
			},
		},
		options: [
			{
				displayName: 'Start Time',
				name: 'startTime',
				type: 'dateTime',
				default: '',
				description: 'The beginning of the period.',
			},
			{
				displayName: 'Entity IDs',
				name: 'entityIds',
				type: 'string',
				default: '',
				description: 'The entities IDs separated by comma.',
			},
			{
				displayName: 'End Time',
				name: 'endTime',
				type: 'dateTime',
				default: '',
				description: 'The end of the period.',
			},
			{
				displayName: 'Minimal Response',
				name: 'minimalResponse',
				type: 'boolean',
				default: false,
				description: 'To only return last_changed and state for states.',
			},
			{
				displayName: 'Significant Changes Only',
				name: 'significantChangesOnly',
				type: 'boolean',
				default: false,
				description: 'Only return significant state changes',
			},
		],
	},
] as INodeProperties[];
