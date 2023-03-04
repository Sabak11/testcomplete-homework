pipeline {
  agent any
  stages {
    stage('Functional test') {
      environment {
        CI = 'true'
      }
      steps {
        sh '''/Users/os/.jenkins/workspace/testcomplete-homework_main@tmp/durable-fb5e24c9/script.sh:
./jenkins/scripts/test.sh

'''
      }
    }

  }
}