import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { businessUnitDescription } from './resources/business-unit';

export class HubapiBusinessUnits implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Hubapi Business Units',
                name: 'N8nDevHubapiBusinessUnits',
                icon: { light: 'file:./hubapi-business-units.png', dark: 'file:./hubapi-business-units.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Retrieve Business Unit information.',
                defaults: { name: 'Hubapi Business Units' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevHubapiBusinessUnitsApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Business Unit",
					"value": "Business Unit",
					"description": "Get Business Unit information."
				}
			],
			"default": ""
		},
		...businessUnitDescription
                ],
        };
}
