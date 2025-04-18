#!/bin/bash

# Set the directory where the images will be saved
IMAGE_DIR="/Users/allancoelho/Desktop/VamosRegistrarLanding/images/flags"

# Create the directory if it doesn't exist
mkdir -p "$IMAGE_DIR"

# Change to the image directory
cd "$IMAGE_DIR"

echo "Downloading flag images to $IMAGE_DIR..."

# Download flag images
curl "https://flagcdn.com/w40/br.png" -o br.png
curl "https://flagcdn.com/w40/us.png" -o us.png
curl "https://flagcdn.com/w40/fr.png" -o fr.png

echo "All flag images have been downloaded to $IMAGE_DIR." 