pipeline {
  agent any
  stages {
    stage('Functional test') {
      parallel {
        stage('Functional test') {
          steps {
            bat 'mvn clean test'
          }
        }

        stage('') {
          steps {
            bat(script: 'mvn -v', returnStatus: true)
          }
        }

      }
    }

  }
}