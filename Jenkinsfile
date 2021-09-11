pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
         stage('Image Build') {
            agent { dockerfile true }
            steps {
                sh 'node --version'
            }
        }
      
    }
}

