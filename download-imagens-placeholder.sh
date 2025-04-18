#!/bin/bash

# Script para baixar imagens de placeholder para o site Registra
echo "Baixando imagens de placeholder para o site Registra..."

# Garantir que o diretório de imagens exista
mkdir -p /Users/allancoelho/Desktop/VamosRegistrarLanding/images/
cd /Users/allancoelho/Desktop/VamosRegistrarLanding/images/

# App Preview
echo "Baixando app-preview.png..."
curl "https://placehold.co/1200x800/3b82f6/FFFFFF.png?text=App+Preview" -o app-preview.png

# Steps
echo "Baixando imagens de etapas..."
curl "https://placehold.co/600x450/10b981/FFFFFF.png?text=Step+1" -o step1.png
curl "https://placehold.co/600x450/10b981/FFFFFF.png?text=Step+2" -o step2.png
curl "https://placehold.co/600x450/10b981/FFFFFF.png?text=Step+3" -o step3.png

# Users
echo "Baixando imagens de usuários..."
curl "https://placehold.co/300x300/f59e0b/FFFFFF.png?text=User+1" -o user1.jpg
curl "https://placehold.co/300x300/f59e0b/FFFFFF.png?text=User+2" -o user2.jpg
curl "https://placehold.co/300x300/f59e0b/FFFFFF.png?text=User+3" -o user3.jpg

# Favicon
echo "Criando favicon.svg..."
echo '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><circle cx="24" cy="24" r="22" fill="#3b82f6"/><text x="24" y="30" font-family="Arial" font-size="24" text-anchor="middle" fill="#FFFFFF">R</text></svg>' > favicon.svg

# Apple Touch Icon
echo "Baixando apple-touch-icon.png..."
curl "https://placehold.co/180x180/3b82f6/FFFFFF.png?text=R" -o apple-touch-icon.png

# Pattern
echo "Criando pattern.svg..."
echo '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="#f0f9ff"/><circle cx="10" cy="10" r="2" fill="#3b82f6" opacity="0.3"/><circle cx="30" cy="10" r="2" fill="#3b82f6" opacity="0.3"/><circle cx="50" cy="10" r="2" fill="#3b82f6" opacity="0.3"/><circle cx="70" cy="10" r="2" fill="#3b82f6" opacity="0.3"/><circle cx="90" cy="10" r="2" fill="#3b82f6" opacity="0.3"/><circle cx="10" cy="30" r="2" fill="#3b82f6" opacity="0.3"/><circle cx="30" cy="30" r="2" fill="#3b82f6" opacity="0.3"/><circle cx="50" cy="30" r="2" fill="#3b82f6" opacity="0.3"/><circle cx="70" cy="30" r="2" fill="#3b82f6" opacity="0.3"/><circle cx="90" cy="30" r="2" fill="#3b82f6" opacity="0.3"/><circle cx="10" cy="50" r="2" fill="#3b82f6" opacity="0.3"/><circle cx="30" cy="50" r="2" fill="#3b82f6" opacity="0.3"/><circle cx="50" cy="50" r="2" fill="#3b82f6" opacity="0.3"/><circle cx="70" cy="50" r="2" fill="#3b82f6" opacity="0.3"/><circle cx="90" cy="50" r="2" fill="#3b82f6" opacity="0.3"/><circle cx="10" cy="70" r="2" fill="#3b82f6" opacity="0.3"/><circle cx="30" cy="70" r="2" fill="#3b82f6" opacity="0.3"/><circle cx="50" cy="70" r="2" fill="#3b82f6" opacity="0.3"/><circle cx="70" cy="70" r="2" fill="#3b82f6" opacity="0.3"/><circle cx="90" cy="70" r="2" fill="#3b82f6" opacity="0.3"/><circle cx="10" cy="90" r="2" fill="#3b82f6" opacity="0.3"/><circle cx="30" cy="90" r="2" fill="#3b82f6" opacity="0.3"/><circle cx="50" cy="90" r="2" fill="#3b82f6" opacity="0.3"/><circle cx="70" cy="90" r="2" fill="#3b82f6" opacity="0.3"/><circle cx="90" cy="90" r="2" fill="#3b82f6" opacity="0.3"/></svg>' > pattern.svg

echo "Todas as imagens de placeholder foram baixadas para a pasta /Users/allancoelho/Desktop/VamosRegistrarLanding/images/"
echo "Para usar essas imagens, execute este script com 'bash download-imagens-placeholder.sh'" 