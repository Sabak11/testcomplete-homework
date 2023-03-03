pipeline {
  agent any
  stages {
    stage('Functional test') {
      steps {
        sh 'mvn clean test'
        git(url: 'https://github.com/Sabak11/testcomplete-homework', branch: 'main')
      }
    }

  }
}