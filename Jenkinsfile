pipeline {
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.17.2-focal'
    } 
  }
  stages {
    stage('install playwright') {
      steps {
        npm install
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
