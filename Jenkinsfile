pipeline {
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.40.0-jammy'
    } 
  }
  stages {
    stage('install node and playwright') {
      steps {
        bat '''
          npm install
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    stage('get help') {
      steps {
        bat 'npx playwright test --help'
      }
    }
    stage('run test') {
      steps {
        bat '''
          npx playwright test --list
          npx playwright test
        '''
      }
      post {
        success {
          archiveArtifacts(artifacts: 'homepage-*.png', followSymlinks: false)
          sh 'rm -rf *.png'
        }
      }
    }
  }
}
