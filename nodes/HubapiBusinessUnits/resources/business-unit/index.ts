import type { INodeProperties } from 'n8n-workflow';

export const businessUnitDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Business Unit"
					]
				}
			},
			"options": [
				{
					"name": "Get Business Units v3 Business Units User User ID",
					"value": "Get Business Units v3 Business Units User User ID",
					"action": "Get Business Units for a user",
					"description": "Get Business Units identified by `userId`. The `userId` refers to the user’s ID.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/business-units/v3/business-units/user/{{$parameter[\"userId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /business-units/v3/business-units/user/{userId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Business Unit"
					],
					"operation": [
						"Get Business Units v3 Business Units User User ID"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "Identifier of user to retrieve.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Business Unit"
					],
					"operation": [
						"Get Business Units v3 Business Units User User ID"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"description": "The names of properties to optionally include in the response body. The only valid value is `logoMetadata`.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "properties",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Business Unit"
					],
					"operation": [
						"Get Business Units v3 Business Units User User ID"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"description": "The names of Business Units to retrieve. If empty or not provided, then all associated Business Units will be returned.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Business Unit"
					],
					"operation": [
						"Get Business Units v3 Business Units User User ID"
					]
				}
			}
		},
		{
			"displayName": "Private Apps Legacy API Key",
			"name": "security_private_apps_legacy",
			"type": "string",
			"default": "",
			"description": "API key for private_apps_legacy (header: private-app-legacy)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"private-app-legacy": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Business Unit"
					],
					"operation": [
						"Get Business Units v3 Business Units User User ID"
					]
				}
			}
		},
];
