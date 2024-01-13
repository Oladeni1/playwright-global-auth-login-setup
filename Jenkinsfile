pipeline {
  agent { 
    any { 
      image 'mcr.microsoft.com/playwright:v1.17.2-focal'
    } 
  }
  stages {
    stage('install playwright') {
      steps {
        sh '''#!/bin/bash
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    stage('help') {
      steps {
        sh '''#!/bin/bash
        npx playwright test --help
        '''
      }
    }
    stage('run e2e tests') {
      steps {
         sh '''#!/bin/bash
         npx playwright test
         '''
      }
    }
  }
}