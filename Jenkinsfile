pipeline {
  agent {
    node {
      label 'docker-agent'
    }

  }
  stages {
    stage('building') {
      steps {
        build 'backend'
      }
    }

  }
}