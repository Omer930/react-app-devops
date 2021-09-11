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
                  sh '''#!/bin/bash
                  docker run -d -p 8087:80 jenkinapp '''
            }
        }
      
    }
}


