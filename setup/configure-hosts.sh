#!/bin/bash

# Check if the script is run with superuser privileges
if [ "$EUID" -ne 0 ]; then
  echo "Please run this script as root or with sudo."
  exit 1
fi

# Define the domain name
DOMAIN="final_project.com"

# Retrieve the IP address of the my-nginx container
CONTAINER_IP=$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' my-nginx)

# Check if the IP address is empty
if [ -z "$CONTAINER_IP" ]; then
  echo "Failed to retrieve the IP address of the my-nginx container."
  exit 1
fi

# Add an entry to the hosts file
echo -e "$CONTAINER_IP\t$DOMAIN" >> /etc/hosts

echo "Hosts file configured to route traffic to $DOMAIN to $CONTAINER_IP."
