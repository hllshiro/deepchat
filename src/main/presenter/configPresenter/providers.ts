import { LLM_PROVIDER_BASE } from '@shared/presenter'

export const DEFAULT_PROVIDERS: LLM_PROVIDER_BASE[] = [
  {
    id: 'ollama',
    name: 'Ollama',
    apiType: 'ollama',
    apiKey: '',
    baseUrl: 'http://localhost:11434',
    enable: false,
    websites: {
      official: 'https://ollama.com/',
      apiKey: '',
      docs: 'https://github.com/ollama/ollama/tree/main/docs',
      models: 'https://ollama.com/library',
      defaultBaseUrl: 'http://localhost:11434'
    }
  },
  {
    id: 'lmstudio',
    name: 'LM Studio',
    apiType: 'lmstudio',
    apiKey: '',
    baseUrl: 'http://127.0.0.1:1234/v1',
    enable: false,
    websites: {
      official: 'https://lmstudio.ai/docs/app',
      apiKey: 'https://lmstudio.ai/docs/app',
      docs: 'https://lmstudio.ai/docs/app',
      models: 'https://lmstudio.ai/models',
      defaultBaseUrl: 'http://127.0.0.1:1234/v1'
    }
  }
]
