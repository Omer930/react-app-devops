pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Image Build') {
            agent { Dockerfile true }
            steps {
                sh 'node --version'
            }
        }
    }
}

