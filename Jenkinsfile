pipeline {
  agent any
  stages {
    stage('Functional test') {
      parallel {
        stage('Functional test') {
          steps {
            bat 'mvn clean test'
            sh 'mvn clean test'
          }
        }

        stage('error') {
          steps {
            bat 'mvn -v'
          }
        }

      }
    }

  }
}