pipeline {
    agent any 
    environment {
        dockerImage = ''
        registry = 'omer112288/test'
          registryCredential = 'dockerhub_id'
    }

    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
     stage('Python Image Build') {
      steps{
        script {
          dockerImage = docker.build registry
        }
      }
      }
              stage('Docker Run') {
         steps{
         script {
            dockerImage.run("-p 8087:80 --rm --name reactappContainer")
         }
      }
    }
      
    }
}



