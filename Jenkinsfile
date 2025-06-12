pipeline {
  agent any
    tools {
        nodejs 'Node22'  // Ensure this name matches Jenkins global tool config
  }
  stages {
    stage('Install Playwright Dependencies') {
      steps {
        bat '''
          npm i -D @playwright/test
        '''
      }
    }
     stage('Install Playwright') {
      steps {
        bat '''
          npx playwright install
        '''
      }
    }
    stage('Get Help') {
      steps {
        bat 'npx playwright test --help'
      }
    }
    stage('List All Tests') {
      steps {
        bat '''
          npx playwright test --list
        '''
      }
    }
    stage('Run All Tests') {
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

