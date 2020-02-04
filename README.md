# **Technical Test Project**

Osman Elamin ([https://www.linkedin.com/in/osman-elamin/](https://www.linkedin.com/in/osman-elamin/))

# **Web Application!**

It&#39;s a small NodeJS applicatin to save single record through web form to an SQLite database. The running application can be found on : [!(http://animalregapp-879959901.ap-south-1.elb.amazonaws.com/)](http://animalregapp-879959901.ap-south-1.elb.amazonaws.com/)

The application hosted on 2 EC2 AWS instances behind a load balancer (round robin) , while the only open ports are 80 (for web requests) and 22 (for SSH access) , with specific public keys copied on each instances. The application showed the running server name to determine if Load Balancer is working properly.

# **Ansible Playbook!**

An Ansible playbook has beem written to deploy the application on any number of servers wanted , it install all prequistetes for the application to be run and install dependance packages after pulling the source code from git hub repository ([https://github.com/osmansays/orm/](https://github.com/osmansays/orm/)) . The playbook file resides on the repository as ([https://github.com/osmansays/orm/blob/master/DeployWebApp.yaml](https://github.com/osmansays/orm/blob/master/DeployWebApp.yaml)) and it&#39;s also located on the first EC2 instance as followed:

- Ec2 Instance DNS: ec2-52-66-205-33.ap-south-1.compute.amazonaws.com
- Disk Location: /home/ubuntu/Ansbile\_yaml\_files/DeployWebApp.yaml

To run the playbook and install the application, the following steps should be followed:

- Include all hosts names/IP that need to be used as webserver (under the same group name) on ansible hosts file .
- run ansible-playbook /home/ubuntu/Ansbile\_yaml\_files/DeployWebApp.yaml

P.S: when creating new EC2 instance place make sure to include the following on User Data, to install Python (since it&#39;s required by anisble) and update apt packages, as: apt-get install python apt-get update

## **Links and servers IP :**

- First EC2 Public DNS: ec2-52-66-205-33.ap-south-1.compute.amazonaws.com
- Second EC2 Public DNS: ec2-52-66-205-33.ap-south-1.compute.amazonaws.com
- Load Balancer Public DNS: [http://animalregapp-879959901.ap-south-1.elb.amazonaws.com/](http://animalregapp-879959901.ap-south-1.elb.amazonaws.com/)

## **Bonus :**

- The solution is easily scalable, all it requires is just creating a new EC2 with enable public key access.
- The solution is running behind a Load Balancer to insure highest availability possible.
- Firewall and access rules are configured and only required port are open (ssh and web application) , for both instances.
