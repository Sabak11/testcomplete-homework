pipeline {
  agent any
  stages {
    stage('Functional test') {
      environment {
        CI = 'true'
      }
      steps {
        sh './jenkins/scripts/test.sh'
      }
    }

  }
}