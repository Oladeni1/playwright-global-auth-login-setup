pipeline {
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.17.2-focal'
    } 
  }
  stages {
    stage('install playwright test') {
      steps {
        bash 'npm i -D @playwright/test'
        
      }
    }
    stage('install playwright') {
      steps {
        bash 'npx playwright install'
      }
    }
    stage('help') {
      steps {
        sh 'npx playwright test --help'
      }
    }
    stage('run e2e tests') {
      steps {
        bash 'npx playwright test' 
      }
    }
  }
}