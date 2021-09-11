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
                 git clone https://github.com/Omer930/react-app-devops.git '''
            }
        }
      
    }
}


