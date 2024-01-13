pipeline {
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.17.2-focal'
    } 
  }
  stages {
    stage('install playwright test') {
      steps {
        bat 'npm i -D @playwright/test'
        
      }
    }
    stage('install playwright') {
      steps {
        bat 'npx playwright install'
      }
    }
    stage('help') {
      steps {
        sh 'npx playwright test --help'
      }
    }
    stage('run e2e tests') {
      steps {
        bat 'npx playwright test' 
      }
    }
  }
}