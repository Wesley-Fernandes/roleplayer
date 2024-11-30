
# RPG com React-Konva

Este é um projeto simples que utiliza a biblioteca [React-Konva](https://konvajs.org/docs/react/) para criar um sistema interativo onde os usuários podem movimentar, redimensionar, inverter e rotacionar personagens no cenário. O objetivo é ser uma base para um RPG onde jogadores podem interagir diretamente com os elementos na tela.

---

## **Funcionalidades**

- **Movimentação:** Arraste o personagem para qualquer posição dentro do palco.
- **Redimensionamento:** Ajuste o tamanho do personagem diretamente na interface.
- **Rotação:** Gire o personagem em 360 graus.
- **Inversão Horizontal:** Inverta o personagem horizontalmente (espelhamento).
- **Configuração Modular:** Componentes organizados para fácil reutilização e manutenção.

---

## **Pré-requisitos**

- Node.js (>= 14.x)
- Gerenciador de pacotes (npm ou yarn)
- Navegador moderno compatível com ES6+

---

## **Instalação**

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/rpg-react-konva.git
   cd rpg-react-konva
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Abra o navegador em [http://localhost:5173](http://localhost:5173).

---

## **Estrutura do Projeto**

```
src/
├── App.tsx                # Componente principal
└── components/            # Componentes modulares
    ├── Controls.tsx       # Botões para interagir com o personagem
    ├── GameStage.tsx      # Palco onde o jogo é renderizado
    └── Player.tsx         # Componente para o personagem interativo
```

---

## **Como Usar**

1. Movimente o personagem clicando e arrastando.
2. Redimensione o personagem selecionando-o e ajustando as alças.
3. Use os botões disponíveis para inverter a imagem horizontalmente.

---

## **Tecnologias Utilizadas**

- **React.js:** Biblioteca para criar interfaces de usuário.
- **TypeScript:** Tipagem estática para maior segurança no desenvolvimento.
- **React-Konva:** Biblioteca para criar gráficos interativos com canvas.
- **Vite:** Ferramenta de build rápida para desenvolvimento em React.

---

## **Personalização**

Para substituir a imagem do personagem:
1. Substitua o arquivo de imagem no caminho configurado em `player.imageSrc` no arquivo `App.tsx`.
2. Certifique-se de que a nova imagem seja compatível (por exemplo, `.png` ou `.jpg`).

---

## **Contribuição**

1. Faça um fork do projeto.
2. Crie uma branch para sua feature: `git checkout -b minha-feature`.
3. Faça commit das suas alterações: `git commit -m 'Adicionei uma nova feature'`.
4. Envie para o repositório remoto: `git push origin minha-feature`.
5. Abra um pull request para revisão.

---

## **Licença**

Este projeto é licenciado sob a [MIT License](LICENSE). Sinta-se à vontade para usá-lo e modificá-lo.

