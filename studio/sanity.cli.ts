import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '46nn0i5r',
    dataset: 'production',
  },
  deployment: {
    appId: 'certzkb6suiifc8wlfzxq4pd',
    autoUpdates: true,
  },
})
