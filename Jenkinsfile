pipeline {
   agent { any { image 'mcr.microsoft.com/playwright:v1.40.0-jammy' } }
   stages {
      stage('e2e-tests') {
         steps {
            bat 'npm ci'
            bat 'npx playwright test'
         }
      }
   }
}