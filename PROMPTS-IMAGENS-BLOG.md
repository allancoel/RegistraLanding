# 🎨 Prompts para Geração de Imagens do Blog

## 📐 Estilo Visual do Registra

**Paleta de Cores:**
- Azul primário: `#2563eb` (blue-600)
- Azul escuro: `#1e293b` (slate-800)
- Roxo/Lilás: `#8b5cf6` (violet-500)
- Gradientes: Azul → Roxo → Azul
- Background: Tons de slate (900, 950)

**Estilo Geral:**
- Moderno e minimalista
- Dark theme com acentos brilhantes
- Formas geométricas e elementos isométricos
- Sombras e glows suaves
- Ícones de linha (line icons)
- Interface iOS moderna

---

## 📝 Blog Post 1: "How to Document Customer Service Calls: A Complete Guide"

### **Categoria:** Guides

### **Prompt para IA (Midjourney/DALL-E):**

```
Create a modern, minimalist illustration in dark theme (navy blue #1e293b background). 
Show an isometric iPhone mockup displaying a call documentation interface with these elements:
- A phone call timer at the top
- Note-taking interface with text lines
- Voice recording waveform animation
- Attachment icons (camera, microphone, document)
- Blue and purple gradient accents (#2563eb to #8b5cf6)
- Soft glow effects around the phone
- Clean, professional style
- 3D rendered look with subtle shadows
- Aspect ratio 16:9
- High contrast, legible even at small sizes
Style: Modern UI design, isometric view, dark mode, corporate professional
```

### **Prompt Alternativo (Mais Simples):**

```
Dark navy background with a floating iPhone showing a call documentation app interface. 
Glowing blue and purple elements. Modern 3D style. Minimalist. Professional.
--ar 16:9 --style modern --v 6
```

### **Elementos Chave:**
- 📱 iPhone em ângulo isométrico
- 📝 Interface de anotações visível
- 🎙️ Ícone de gravação ativo
- 💙 Glow azul/roxo ao redor
- ⏱️ Timer de chamada
- 📎 Ícones de anexos

---

## 📝 Blog Post 2: "10 Consumer Rights You Need to Know in 2025"

### **Categoria:** Consumer Rights

### **Prompt para IA (Midjourney/DALL-E):**

```
Create a modern, minimalist illustration in dark theme (navy blue #1e293b background).
Show an isometric composition with these elements:
- A glowing blue shield icon in the center (representing protection)
- Surrounding the shield: 10 small circular icons representing rights (scale/justice, phone, document, clock, checkmark, etc.)
- Each icon connected with thin glowing lines forming a network
- Blue to purple gradient accents (#2563eb to #8b5cf6)
- Floating geometric shapes (triangles, hexagons) in the background
- Soft glow and light rays emanating from the shield
- Clean, professional, corporate style
- 3D rendered look with depth
- Aspect ratio 16:9
Style: Modern infographic, isometric 3D, dark mode, legal/professional theme
```

### **Prompt Alternativo (Mais Simples):**

```
Dark navy background with a glowing blue shield in center, surrounded by 10 connected icons. 
Purple and blue gradients. Legal theme. Modern 3D isometric style. Professional.
--ar 16:9 --style modern --v 6
```

### **Elementos Chave:**
- 🛡️ Escudo brilhante (proteção)
- 🔟 10 ícones ao redor (direitos)
- 🔗 Linhas conectando ícones
- ⚖️ Tema legal/justiça
- 💫 Efeitos de brilho
- 🎨 Gradiente azul→roxo

---

## 📝 Blog Post 3: "What to Do When Companies Lose Your Case Number"

### **Categoria:** Problem Solving

### **Prompt para IA (Midjourney/DALL-E):**

```
Create a modern, minimalist illustration in dark theme (navy blue #1e293b background).
Split-screen composition showing problem and solution:
LEFT SIDE (Problem): 
- Frustrated person icon with question marks
- Scattered, disorganized papers and documents floating
- Red warning symbols
- Chaos and confusion visual
RIGHT SIDE (Solution):
- Same person icon now calm/happy with checkmark
- Organized iPhone app interface showing case numbers
- Green success symbols
- Order and clarity visual
CENTER:
- Glowing arrow pointing from left to right
- Blue to purple gradient (#2563eb to #8b5cf6)
- Soft glow connecting both sides
- 3D isometric style
- Aspect ratio 16:9
Style: Modern problem-solution infographic, isometric 3D, dark mode, professional
```

### **Prompt Alternativo (Mais Simples):**

```
Dark navy background split in two: left side shows chaos with scattered papers and red alerts, 
right side shows organized iPhone app with case numbers and green checkmarks. 
Glowing blue arrow in center. Modern 3D isometric style.
--ar 16:9 --style modern --v 6
```

### **Elementos Chave:**
- ↔️ Comparação antes/depois
- 📄 Documentos desorganizados → organizados
- ❌ Problema (vermelho) → ✅ Solução (verde)
- 📱 iPhone com app Registra
- 🔢 Case numbers visíveis
- ➡️ Seta de transformação

---

## 🎨 Especificações Técnicas Gerais

### **Dimensões Recomendadas:**
- **Largura:** 1200-1600px
- **Altura:** 675-900px
- **Aspect Ratio:** 16:9 ou 4:3
- **Formato:** JPG (otimizado) ou WebP
- **Peso:** Máximo 200KB (comprimir depois)

### **Paleta de Cores Exata:**
```css
/* Backgrounds */
--bg-primary: #0f172a     /* slate-900 */
--bg-secondary: #1e293b   /* slate-800 */
--bg-card: #1e3a5f        /* Azul escuro */

/* Acentos */
--accent-blue: #2563eb    /* blue-600 */
--accent-purple: #8b5cf6  /* violet-500 */
--accent-green: #10b981   /* green-500 */
--accent-red: #ef4444     /* red-500 */

/* Gradientes */
background: linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%);
```

### **Tipografia (para textos na imagem):**
- **Fonte:** SF Pro Display, Inter, ou Poppins
- **Peso:** Bold (700) para títulos
- **Cor texto:** Branco (#ffffff) ou Slate-100 (#f1f5f9)

### **Efeitos Visuais:**
```css
/* Glow Effect */
box-shadow: 0 0 40px rgba(37, 99, 235, 0.4);
filter: blur(20px);

/* Card Shadow */
box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);

/* Border Glow */
border: 2px solid rgba(37, 99, 235, 0.3);
```

---

## 🛠️ Ferramentas Recomendadas

### **1. Midjourney (Melhor qualidade)**
```bash
# Template básico
/imagine prompt: [seu prompt aqui] 
--ar 16:9 --style raw --v 6 --q 2
```

### **2. DALL-E 3 (OpenAI)**
- Use os prompts detalhados
- Especifique "high quality, 4K"
- Mencione "dark theme, modern UI"

### **3. Stable Diffusion**
```bash
# Negative prompt importante
Negative: blurry, low quality, amateur, bright colors, messy, cluttered
Positive: professional, clean, minimalist, dark theme, high contrast
```

### **4. Adobe Firefly**
- Boa para manter consistência
- Use "Style Match" com screenshots do app

### **5. Leonardo.ai**
- Modelo: "Leonardo Diffusion XL"
- Preset: "3D Render" ou "Isometric"

---

## 📋 Checklist de Qualidade

Antes de usar a imagem, verifique:

- [ ] **Cores:** Paleta azul/roxo do Registra?
- [ ] **Estilo:** Dark theme consistente?
- [ ] **Legibilidade:** Elementos visíveis em miniatura?
- [ ] **Resolução:** Mínimo 1200x675px?
- [ ] **Peso:** Menos de 200KB (comprimido)?
- [ ] **Aspect Ratio:** 16:9 ou similar?
- [ ] **Glow Effects:** Presentes mas sutis?
- [ ] **Profissional:** Visual corporativo/premium?
- [ ] **Sem texto:** Ou texto mínimo e legível?
- [ ] **Isométrico:** Perspectiva 3D moderna?

---

## 🎯 Dicas para Melhores Resultados

### **1. Seja Específico:**
✅ "iPhone 15 Pro mockup showing call timer at 00:03:45"
❌ "phone with app"

### **2. Mencione o Estilo:**
✅ "modern 3D isometric illustration, dark navy background"
❌ "nice looking image"

### **3. Especifique Cores:**
✅ "blue (#2563eb) to purple (#8b5cf6) gradient glow"
❌ "colorful"

### **4. Descreva Iluminação:**
✅ "soft blue glow emanating from phone, subtle shadows"
❌ "bright"

### **5. Use Referências:**
✅ "in the style of modern iOS app marketing, Apple website aesthetic"
❌ genérico

### **6. Negative Prompts (Evitar):**
```
cartoon, anime, childish, oversaturated, messy, cluttered, 
low quality, blurry, amateur, bright colors, white background,
stock photo, realistic photo, people faces, text overlay
```

---

## 🔄 Variações por Categoria

### **Para "Guides":**
- Foco em UI/UX do app
- Screenshots estilizados
- Tutorial step-by-step visual
- Elementos didáticos (setas, números)

### **Para "Consumer Rights":**
- Ícones de proteção/segurança
- Tema legal/corporativo
- Escudos, balanças, documentos
- Tons mais sérios (menos roxo, mais azul)

### **Para "Problem Solving":**
- Comparação antes/depois
- Problema (caos) → Solução (ordem)
- Cores: Vermelho → Verde
- Elementos transformacionais

---

## 📦 Exemplos de Prompts Completos

### **Exemplo 1: Estilo Corporativo**
```
A professional 3D isometric illustration on a dark navy blue (#1e293b) background. 
Central focus: iPhone 15 Pro displaying the Registra app interface with visible 
case numbers, call timer, and note-taking features. Surrounding elements: floating 
geometric shapes (hexagons, triangles) with soft blue (#2563eb) and purple (#8b5cf6) 
gradient glows. Subtle shadows and depth. Clean, minimalist, corporate style. 
High-end marketing aesthetic similar to Apple or Microsoft product pages. 
16:9 aspect ratio. Ultra-professional. No text. 
--ar 16:9 --style raw --q 2 --v 6
```

### **Exemplo 2: Estilo Infográfico**
```
Modern dark theme infographic illustration. Navy blue (#1e293b) background. 
Center: glowing blue shield icon surrounded by 10 connected circular icons 
(phone, document, clock, checkmark, scale). Thin glowing lines connecting all 
icons in a network pattern. Blue to purple gradient accents. Floating subtle 
geometric shapes in background. Clean, professional legal theme. 3D rendered 
with soft shadows. High contrast for legibility. 16:9 format.
--ar 16:9 --style modern --v 6
```

### **Exemplo 3: Estilo Comparativo**
```
Split-screen 3D isometric illustration on dark navy (#1e293b) background. 
LEFT: scattered documents, red warning symbols, chaos (40% of space). 
RIGHT: organized iPhone showing Registra app with case list, green checkmarks, 
order (40% of space). 
CENTER: large glowing blue arrow pointing left to right with gradient (20%). 
Professional problem-solution visual. Clean, modern, high-end marketing style.
16:9 aspect ratio.
--ar 16:9 --style modern --v 6
```

---

## 🎨 Elementos Visuais do App para Incluir

### **iPhone Mockup:**
- Modelo: iPhone 15 Pro (bordas arredondadas)
- Cor: Space Black ou Titanium
- Tela: Interface do Registra visível
- Perspectiva: Leve inclinação (15-30°)

### **Interface Elements:**
- Navigation bar superior
- Cards com informações de cases
- Botões azuis arredondados
- Ícones de linha (outline icons)
- Badges de status
- Timers e contadores

### **Geometric Shapes:**
- Hexágonos
- Triângulos
- Círculos
- Linhas conectoras
- Pontos brilhantes

### **Effects:**
- Blur gaussiano sutil
- Gradient meshes
- Soft shadows (não duras)
- Glow/bloom effects
- Subtle noise texture

---

## 🚀 Workflow de Produção

1. **Geração:**
   - Use o prompt específico para o post
   - Gere 4-6 variações
   - Escolha as 2 melhores

2. **Refinamento:**
   - Ajuste cores no Photoshop/Figma
   - Adicione badge de categoria se necessário
   - Aplique filtros de contraste

3. **Otimização:**
   - Resize para 1600x900px
   - Compress com TinyPNG ou Squoosh
   - Converter para WebP (com fallback JPG)
   - Target: < 150KB

4. **Implementação:**
   - Salvar em `assets/images/blog/`
   - Nome: `post-slug-cover.jpg`
   - Adicionar alt text descritivo

---

## ✅ Prompts Prontos para Copiar

### **Guides Post:**
```
Modern 3D isometric iPhone mockup on dark navy background (#1e293b), showing call documentation app interface with timer, notes, and recording waveform. Blue (#2563eb) to purple (#8b5cf6) gradient glow around phone. Floating geometric shapes. Professional, clean, minimalist. High-end tech marketing style. 16:9 --ar 16:9 --v 6 --q 2
```

### **Consumer Rights Post:**
```
Dark navy background (#1e293b) with glowing blue shield in center, surrounded by 10 connected circular icons representing consumer rights. Thin blue lines connecting icons. Purple (#8b5cf6) and blue (#2563eb) gradient accents. 3D isometric professional style. Legal/corporate theme. 16:9 --ar 16:9 --v 6 --q 2
```

### **Problem Solving Post:**
```
Split-screen on dark navy (#1e293b): left shows chaos with scattered papers and red alerts, right shows organized iPhone with Registra app and green checks. Large glowing blue arrow in center pointing right. 3D isometric professional style. Problem-solution visual. 16:9 --ar 16:9 --v 6 --q 2
```

---

**Pronto para gerar imagens incríveis! 🎨✨**

Use estes prompts nas ferramentas de IA e ajuste conforme necessário para manter a consistência visual com o Registra.

