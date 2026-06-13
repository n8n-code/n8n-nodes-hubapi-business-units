import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class HubapiBusinessUnitsApi implements ICredentialType {
        name = 'N8nDevHubapiBusinessUnitsApi';

        displayName = 'Hubapi Business Units API';

        icon: Icon = { light: 'file:../nodes/HubapiBusinessUnits/hubapi-business-units.png', dark: 'file:../nodes/HubapiBusinessUnits/hubapi-business-units.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.hubapi.com/',
                        required: true,
                        placeholder: 'https://api.hubapi.com/',
                        description: 'The base URL of your Hubapi Business Units API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
