# EC2

## User Data--Bootstrap Script

Only run once when the instance is first launched.

EC2 user data is used to automate boot tasks such as:

- Installing updates
- Installing software
- Downloading files
- Configuring the instance

## Launching an EC2 Instance

1. **Name and Tags**: Name the instance and add tags
2. **Choose AMI**: Amazon Machine Image
3. **Choose Instance Type**: Hardware configuration of the instance
4. **Configure Instance**: Number of instances, network settings, IAM role, etc.
5. **Add Storage**: EBS volumes

## Details

- **Public IP**: Changes every time the instance is stopped and started
- **Private IP**: Stays the same

## Types of Instances

- General Purpose: Balanced compute, memory, and networking resources
  - T Classes
- Compute Optimized: Batch processing workloads, Media transcoding, High-performance web servers
  - C Classes
- Memory Optimized: High-performance databases, Distributed web scale in-memory caches, In-memory analytics, Applications performing real-time processing of unstructured big data
  - R Classes
- Storage Optimized: Online transaction processing (OLTP) systems, NoSQL databases, Data warehousing applications, Distributed file systems, Cache for in-memory databases (e.g., Redis)
  - I Classes, D Classes, H1

## Security Groups

- Can be attached to multiple instances
- Locked down to a region/VPC combination
- Outside the scope of the instance itself
- All inbound traffic is blocked by default
- All outbound traffic is allowed by default
- Trouble shooting:
  - If time out, check security group
  - If connection refused, check application

### Classic Ports

- 22: SSH(secure shell) -- login to the instance
- 21: FTP(File Transfer Protocol) -- upload files
- 22: SFTP(Secure File Transfer Protocol) -- upload files using SSH
- 80: HTTP -- access (unsecured) web server
- 443: HTTPS -- access secured web server
- 3389: RDP(Remote Desktop Protocol) -- access Windows instance

## SSH connection

To connect to an EC2 instance, use the following command:

```bash
ssh -i <key.pem> ec2-user@<public-ip>
```

If you encounter the following message, it means that your SSH client does not recognize the server's key. This is a normal security measure to prevent man-in-the-middle attacks. To proceed, you can type `yes` to continue connecting.

```sh
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
```

After typing `yes`, you should see a message like this:

```sh
Warning: Permanently added '54.88.104.152' (ED25519) to the list of known hosts.
```

If you are using an SSH key for authentication, make sure you have the correct key file specified. For example:

```sh
ssh -i <your key pem> ec2-user@<public ip>
```

If `Permission denied (publickey)` error occurs, it means that the key file is not correct or the key file does not have the correct permissions. To fix this, you can change the permissions of the key file using the following command:

```sh
chmod 400 <your key pem>
```

Then, connect again using the SSH command.

Finally, you will see the following message:

```sh
   ,     #_
   ~\_  ####_        Amazon Linux 2023
  ~~  \_#####\
  ~~     \###|
  ~~       \#/ ___   https://aws.amazon.com/linux/amazon-linux-2023
   ~~       V~' '->
    ~~~         /
      ~~._.   _/
         _/ _/
       _/m/'
Last login: Wed Dec  4 18:34:58 2024 from <ip address>
[ec2-user@xx ~]$
```

## EC2 Instance Roles

**NEVER** enter your AWS credentials into your instance. Instead, assign an IAM role to your instance.

`Instances` -- `Actions` -- `Security` -- `Modify IAM Role`
