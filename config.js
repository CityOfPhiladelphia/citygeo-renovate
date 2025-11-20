module.exports = {
  platform: 'github',
  // Reduce this after done testing
  prHourlyLimit: 20,
  onboardingConfig: {
    extends: ['config:best-practices'],
    ignorePresets: [':ignoreModulesAndTests'],
    terraform: {
      "pinDigests": true
    }
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
