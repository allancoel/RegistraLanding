# Guia para Imagens do Site Registra

Este documento explica como substituir e inserir as imagens corretas no site Registra, incluindo os nomes de arquivos necessários e os tamanhos recomendados para melhor otimização.

## Estrutura de Imagens Necessárias

Todas as imagens devem ser colocadas no diretório `/images/` na raiz do projeto.

### Imagens Principais

| Nome do Arquivo | Descrição | Tamanho Recomendado | Formato |
|-----------------|-----------|---------------------|---------|
| `app-preview.png` | Screenshot principal do aplicativo (seção hero) | 1200×800px | PNG |
| `step1.png` | Ilustração da primeira etapa | 600×450px | PNG |
| `step2.png` | Ilustração da segunda etapa | 600×450px | PNG |
| `step3.png` | Ilustração da terceira etapa | 600×450px | PNG |
| `user1.jpg` | Foto de Nick Adamany (Miami) | 300×300px | JPG |
| `user2.jpg` | Foto de Marie Dubois (Suíça) | 300×300px | JPG |
| `user3.jpg` | Foto de Ana Clara Ferreira (Brasil) | 300×300px | JPG |

### Ícones e Favicons

| Nome do Arquivo | Descrição | Tamanho Recomendado | Formato |
|-----------------|-----------|---------------------|---------|
| `favicon.svg` | Favicon vetorial | Vetorial | SVG |
| `apple-touch-icon.png` | Ícone para dispositivos Apple | 180×180px | PNG |
| `pattern.svg` | Padrão de fundo do cabeçalho | Vetorial | SVG |

## Instruções para Substituição de Imagens

### Passo 1: Preparar as Imagens

1. **Otimize todas as imagens** antes de carregá-las para reduzir o tamanho do arquivo:
   - Para PNG: use ferramentas como TinyPNG (https://tinypng.com/)
   - Para JPG: use ferramentas como ImageOptim (https://imageoptim.com/)
   - Para SVG: use SVGOMG (https://jakearchibald.github.io/svgomg/)

2. **Mantenha a proporção de aspecto** conforme as recomendações acima.

3. **Use nomes de arquivo exatamente como especificados** (incluindo letras minúsculas e extensões).

### Passo 2: Carregar as Imagens

#### Método 1: Usando um Editor de Código ou IDE
1. Abra o projeto em seu editor (VS Code, Sublime, etc.)
2. Localize a pasta `/images/`
3. Arraste e solte as imagens da sua máquina para esta pasta

#### Método 2: Usando o Finder/Explorer
1. Navegue até `/Users/allancoelho/Desktop/VamosRegistrarLanding/images/`
2. Copie as imagens para esta pasta

#### Método 3: Usando Terminal
```bash
# Substitua /caminho/para/suas/imagens/ pelo caminho real onde suas imagens estão
cp /caminho/para/suas/imagens/app-preview.png /Users/allancoelho/Desktop/VamosRegistrarLanding/images/
cp /caminho/para/suas/imagens/step1.png /Users/allancoelho/Desktop/VamosRegistrarLanding/images/
# Repita para cada imagem
```

## Usando Imagens de Demonstração Temporárias

Se você ainda não tem as imagens finais, pode usar imagens de demonstração temporárias:

### Método 1: Usar Serviços de Placeholder

Adicione estas imagens temporárias de placeholder enquanto não tem as imagens finais:

```bash
# Crie um script para baixar imagens de placeholder
mkdir -p /Users/allancoelho/Desktop/VamosRegistrarLanding/images/
cd /Users/allancoelho/Desktop/VamosRegistrarLanding/images/

# App Preview
curl "https://placehold.co/1200x800/3b82f6/FFFFFF.png?text=App+Preview" -o app-preview.png

# Steps
curl "https://placehold.co/600x450/10b981/FFFFFF.png?text=Step+1" -o step1.png
curl "https://placehold.co/600x450/10b981/FFFFFF.png?text=Step+2" -o step2.png
curl "https://placehold.co/600x450/10b981/FFFFFF.png?text=Step+3" -o step3.png

# Users
curl "https://placehold.co/300x300/f59e0b/FFFFFF.png?text=User+1" -o user1.jpg
curl "https://placehold.co/300x300/f59e0b/FFFFFF.png?text=User+2" -o user2.jpg
curl "https://placehold.co/300x300/f59e0b/FFFFFF.png?text=User+3" -o user3.jpg

# Favicon
echo '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><circle cx="24" cy="24" r="22" fill="#3b82f6"/><text x="24" y="30" font-family="Arial" font-size="24" text-anchor="middle" fill="#FFFFFF">R</text></svg>' > favicon.svg

# Apple Touch Icon
curl "https://placehold.co/180x180/3b82f6/FFFFFF.png?text=R" -o apple-touch-icon.png
```

### Método 2: Usar Imagens de Amostra de Um Banco de Imagens Gratuito

Alternativamente, você pode usar imagens de sites como:
- Unsplash (https://unsplash.com)
- Pexels (https://pexels.com)
- Pixabay (https://pixabay.com)

## Verificação

Depois de adicionar as imagens:

1. Abra o site em um navegador
2. Verifique se todas as imagens estão carregando corretamente
3. Se alguma imagem não aparecer:
   - Verifique o nome do arquivo (deve ser exatamente igual ao especificado no HTML)
   - Verifique o caminho (`images/nome-do-arquivo.extensao`)
   - Verifique se a imagem está realmente na pasta `/images/`

## Dimensões e Orientações Detalhadas por Imagem

### app-preview.png
- **Conteúdo ideal**: Screenshot da interface principal do aplicativo mostrando a funcionalidade principal
- **Orientação**: Retrato (altura maior que largura) para dispositivos móveis
- **Qualidade**: Alta resolução, sem pixelização
- **Fundo**: Transparente ou com o fundo da interface real do app

### step1.png, step2.png, step3.png
- **Conteúdo ideal**: Screenshots ou ilustrações mostrando as etapas de uso do aplicativo
- **Consistência**: Use o mesmo estilo visual para todas as três imagens
- **Qualidade**: Média a alta resolução
- **Cor**: Use cores consistentes com a paleta do site

### user1.jpg, user2.jpg, user3.jpg
- **Conteúdo ideal**: Fotos profissionais das pessoas mencionadas nos depoimentos
- **Estilo**: Ideal que sejam fotos de rosto (headshots) profissionais
- **Formato**: Quadrado, cortado em formato circular pelo CSS
- **Qualidade**: Boa qualidade, mas otimizadas para web

### favicon.svg
- **Conteúdo ideal**: Logo simplificado da marca Registra
- **Estilo**: Vetorial para garantir boa renderização em qualquer tamanho
- **Cores**: Use as cores primárias da marca

### apple-touch-icon.png
- **Conteúdo ideal**: Versão quadrada do logo com fundo sólido
- **Estilo**: Design limpo e reconhecível mesmo em tamanho pequeno
- **Cores**: Cores vivas que se destacam na tela inicial de dispositivos Apple

## Dicas de Otimização

1. **Compressão sem perda**: Reduza o tamanho do arquivo sem perder qualidade visual
2. **Dimensões corretas**: Não use imagens maiores que o necessário
3. **Formatos apropriados**:
   - JPG para fotografias
   - PNG para imagens com transparência
   - SVG para gráficos vetoriais
4. **Lazy loading**: Já implementado no site para melhorar o desempenho

---

Caso tenha dúvidas adicionais, consulte o desenvolvedor do projeto ou entre em contato com AMC marketing LTDA. 