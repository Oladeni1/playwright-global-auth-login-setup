pipeline {
  agent any
    tools {
        nodejs 'Node22'  // Ensure this name matches Jenkins global tool config
  }
  stages {
    stage('install playwright') {
      steps {
        bat '''
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    stage('help') {
      steps {
        bat 'npx playwright test --help'
      }
    }
    stage('test') {
      steps {
        bat '''
          npx playwright test --list
          npx playwright test
          npx playwright test --reporter=html
        '''
      }
    }
    stage('Archive Report') {
            steps {
                archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
            }
        }
    }
    post {
        always {
            echo 'Pipeline execution completed.'
        }
    }
}
    }
  }
}
