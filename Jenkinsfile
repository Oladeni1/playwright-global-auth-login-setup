pipeline {
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.17.2-focal'
    } 
  }
  stages {
    stage('install playwright') {
      steps {
        sh '''
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    stage('help') {
      steps {
        sh '''
          npx playwright test --help
        '''
      }
    }
    stage('run e2e tests') {
      steps {
        sh '''
          npx playwright test
         '''
      }
    }
  }
}