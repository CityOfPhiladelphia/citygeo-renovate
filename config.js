module.exports = {
  platform: 'github',
  // Reduce this after done testing
  prHourlyLimit: 20,
  onboardingConfig: {
    extends: ['config:best-practices', ':dependencyDashboard'],
    ignorePresets: [':ignoreModulesAndTests']
  },
  terraform: {
    "pinDigests": true
  },
  hostRules: [
    {
      matchHost: 'rtf-runtime-registry.kprod.msap.io',
      hostType: 'helm',
      username: process.env.RENOVATE_MULESOFT_USERNAME,
      password: process.env.RENOVATE_MULESOFT_PASS
    },
    {
      matchHost: 'https://github.com/CityOfPhiladelphia',
      token: process.env.RENOVATE_COP_GIT_TOKEN
    }
  ],
  repositories: [
    'CityOfPhiladelphia/mulesoft-rtf-gitops',
    'CityOfPhiladelphia/mulesoft-rtf-iac',
    'CityOfPhiladelphia/citygeo-shared-workflows',
    'CityOfPhiladelphia/mulesoft-flex-gateway-iac',
    'CityOfPhiladelphia/citygeo-renovate', // How funny, renovating itself!
  ]
}
