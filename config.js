module.exports = {
  platform: 'github',
  // Reduce this after done testing
  prHourlyLimit: 20,
  onboardingConfig: {
    extends: ['config:best-practices', ':dependencyDashboard'],
    ignorePresets: [':ignoreModulesAndTests']
  },
  flux: {
    "managerFilePatterns": ["/\\.yaml$/"]
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
    'CityOfPhiladelphia/citygeo-shared-workflows',
    'CityOfPhiladelphia/mulesoft-flex-gateway-iac',
    'CityOfPhiladelphia/citygeo-renovate', // How funny, renovating itself!
  ]
}
