pipeline {
  agent any
  stages {
    stage('Functional test') {
      environment {
        CI = 'true'
      }
      steps {
        sh '''/Users/os/Desktop/tbctestautomation/Jenkins/testcomplete-homework-main.sh

./jenkins/scripts/test.sh'''
      }
    }

  }
}