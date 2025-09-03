#this is for copying build from git and build docker image and rename it with proper tag and push to dockerhub and start the container and both docer and jenkins in same server###
pipeline {
    agent any

    stages {
        stage('code and build') {
            steps {
                 git branch: 'main', url: 'https://github.com/surendratig/two.git'
            }
        }
        stage('dockerbuild') {
            steps {
                sh 'docker build -t nginx:v1 .'
                sh 'docker tag nginx:v1 surendra84/firstrepo:nginxv4'
            }
        }
        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                    '''
                }
            }
        }
            stage('push image'){
                steps {
                    sh 'docker push surendra84/firstrepo:nginxv4'
                }
            }
            stage('run container') {
                steps {
                    sh 'docker run -itd --name cont1 -p 1234:80 surendra84/firstrepo:nginxv4'
                }
            }
    }
}
