pipeline {
  agent any
    tools {
        nodejs 'Node22'  // Ensure this name matches Jenkins global tool config
  }
  stages {
    stage('install playwright Dependencies') {
      steps {
        bat '''
          npm i -D @playwright/test
        '''
      }
    }
     stage('install playwright') {
      steps {
        bat '''
          npx playwright install
        '''
      }
    }
    stage('help') {
      steps {
        bat 'npx playwright test --help'
      }
    }
    stage('List all test') {
      steps {
        bat '''
          npx playwright test --list
        '''
      }
    }
    stage('Run test') {
      steps {
        bat '''
          npx playwright test
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

