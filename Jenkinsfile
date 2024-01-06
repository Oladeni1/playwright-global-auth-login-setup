pipeline {
  agent { 
    any { 
      image 'mcr.microsoft.com/playwright:v1.17.2-focal'
    } 
  }
  stages {
    stage('install playwright') {
      steps {
        ba '''
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    stage('help') {
      steps {
        ba 'npx playwright test --help'
      }
    }
    stage('run e2e tests') {
      steps {
         ba'''
          npx playwright test --headed
        '''
      }
    }
  }
}