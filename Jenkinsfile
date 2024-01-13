pipeline {
  agent { 
    docker { 
      image 'node:20.10.0-alpine3.19' 
    } 
  }
  stages {
    stage('install playwright') {
      steps {
        sh '''
          #!/bin/bash
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    stage('help') {
      steps {
        sh '''
          #!/bin/bash
          npx playwright test --help
        '''
      }
    }
    stage('run e2e tests') {
      steps {
        sh '''
          #!/bin/bash
          npx playwright test
         '''
      }
    }
  }
}