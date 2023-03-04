pipeline {
  agent any
  stages {
    stage('Functional test') {
      environment {
        CI = 'true'
      }
      steps {
        sh 'mvn clean'
      }
    }

  }
}