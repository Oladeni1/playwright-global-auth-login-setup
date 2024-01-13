pipeline {
  agent { 
    any
  }
  stages {
    stage('install playwright') {
      steps {
        bash '''
          #!/bin/bash
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    stage('help') {
      steps {
        bash '''
          #!/bin/bash
          npx playwright test --help
        '''
      }
    }
    stage('run e2e tests') {
      steps {
        bash '''
          #!/bin/bash
          npx playwright test
         '''
      }
    }
  }
}