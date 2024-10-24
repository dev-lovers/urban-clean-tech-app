# Projeto de Monitoramento de Coleta de Lixo

Este projeto permite que o usuário, com base em sua localização atual, visualize em um mapa se existe um container de lixo próximo ou se o caminhão da coleta já passou em sua rua ou não irá passar no dia.

## Funcionalidades

- Exibe a localização atual do usuário no mapa.
- Mostra a localização dos containers de lixo mais próximos.
- Indica se o caminhão de lixo já passou pela rua do usuário ou se ainda vai passar, com base no horário e na localização.
- Integração com APIs para obter dados de localização e status da coleta de lixo.

## Tecnologias Utilizadas

- **React Native**: Estrutura principal do aplicativo.
- **Expo**: Framework para facilitar o desenvolvimento e build do app.
- **React Navigation**: Navegação entre as telas do app.
- **Axios**: Para fazer requisições HTTP e integrar com APIs de coleta de lixo.
- **Mapas**: Utiliza APIs de mapas para mostrar a localização do usuário e dos containers.

## Instalação

Siga as etapas abaixo para configurar e rodar o projeto localmente.

### Pré-requisitos

- Node.js (v16.x ou mais recente)
- Expo
- Android Studio (para emulação)
- Git

### Passos para Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/dev-lovers/urban-clean-tech-app.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd urban-clean-tech-app
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o projeto:

   ```bash
   npx expo start
   ```

5. Abra no emulador ou escaneie o QR code com o app do Expo no seu dispositivo.

## Uso

1. Ao abrir o aplicativo, permita o acesso à sua localização.
2. O mapa será exibido mostrando sua localização atual.
3. Se houver um container de lixo próximo, ele aparecerá no mapa.
4. O app indicará se o caminhão de lixo já passou em sua rua ou se ainda vai passar, com base nas informações disponíveis.
