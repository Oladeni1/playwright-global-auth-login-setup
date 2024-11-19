pipeline {
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.40.0-jammy'
    } 
  }
  stages {
    stage('install node and playwright') {
      steps {
          npm install
          npm i -D @playwright/test
          npx playwright install
      }
    }
    stage('get help') {
      steps {
        npx playwright test --help
      }
    }
    stage('run test') {
      steps {
          npx playwright test --list
          npx playwright test
      }
      post {
        success {
          archiveArtifacts(artifacts: 'homepage-*.png', followSymlinks: false) 'rm -rf *.png'
        }
      }
    }
  }
}
