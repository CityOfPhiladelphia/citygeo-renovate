module.exports = {
  platform: 'github',
  // Reduce this after done testing
  prHourlyLimit: 20,
  onboardingConfig: {
    extends: ['config:best-practices'],
    ignorePresets: [':ignoreModulesAndTests'],
  },
  hostRules: [
    {
      matchHost: 'rtf-runtime-registry.kprod.msap.io',
      hostType: 'helm',
      username: process.env.RENOVATE_MULESOFT_USERNAME,
      password: process.env.RENOVATE_MULESOFT_PASS
    },
    {
      matchHost: '880708401960.dkr.ecr.us-east-1.amazonaws.com',
      hostType: 'docker',
      username: process.env.AWS_ACCESS_KEY_ID,
      password: process.env.AWS_SECRET_ACCESS_KEY
    }
  ],
  repositories: [
    'CityOfPhiladelphia/mulesoft-rtf-gitops',
    'CityOfPhiladelphia/mulesoft-rtf-iac',
    'CityOfPhiladelphia/citygeo-shared-workflows',
    'CityOfPhiladelphia/mulesoft-flex-gateway-iac',
    'CityOfPhiladelphia/mygeotab-api-adapter-iac',
    'CityOfPhiladelphia/airflow-iac-dags',
    'CityOfPhiladelphia/citygeo-variety-cluster-gitops',
    'CityOfPhiladelphia/citygeo-variety-cluster-iac',
    'CityOfPhiladelphia/citygeo-renovate', // How funny, renovating itself!
  ]
}
