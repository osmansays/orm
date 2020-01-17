# Technical Test Project 

[![N|Solid](https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/apptopia/app/1b027a7f-520e-432b-a107-97271243d366)](https://www.linkedin.com/in/osman-elamin/)

# Web Application !

It's a small NodeJS applicatin to save single record through web form to an sqlite database .
The running application can be found on : 
[!(http://animalregapp-879959901.ap-south-1.elb.amazonaws.com/)](http://animalregapp-879959901.ap-south-1.elb.amazonaws.com/)

The application hosted on 2 EC2 AWS instances behind a load balancer (round robin) , while the only open ports are 80 (for web requests) and 22 (for ssh access) , with specfic public keys copied on each instances.
The application showed the running server name to determine if Load Balancer is working properly .
# Ansible Playbook!

An Ansible playbook has beem written to deploy the application on any number of servers wanted , it install all prequistetes for the application to be run and install dependance packages after pulling the source code from git hub repository (https://github.com/osmansays/orm/) .
The playbook file resides on the repository as (https://github.com/osmansays/orm/blob/master/DeployWebApp.yaml)
and it's alswo located on the first EC2 instance as followed:

- Ec2 Instance DNS: ec2-52-66-205-33.ap-south-1.compute.amazonaws.com
- Disk Location: /home/ubuntu/Ansbile_yaml_files/DeployWebApp.yaml

To run the playbook and install the application , the following steps whould be followed:
- Include all hosts names/IP that need to be deployed on ansible hosts file (the inventory) .
- run ansible-playbook /home/ubuntu/Ansbile_yaml_files/DeployWebApp.yaml 

P.S: when creating new EC2 instance plece make sure to include the following on User Data , to install Python (since it's required by anisble) and udate apt packages, as:
apt-get install python
apt-get update

## Links and servers IP :
- First EC2 Public DNS: ec2-52-66-205-33.ap-south-1.compute.amazonaws.com
- Second EC2 Public DNS: ec2-52-66-205-33.ap-south-1.compute.amazonaws.com
- Load Balancer Public DNS: http://animalregapp-879959901.ap-south-1.elb.amazonaws.com/

Benifits :
- The solution is easily scalable , all it requires is just creating a new EC2 with enable public key access .
- The solution is running behind a Load Balancer to insure highest availablity possible.
- Firewall and acess rules are configured and only required port are open (ssh and web application) , for both instances.
