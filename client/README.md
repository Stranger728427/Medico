# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Medico Client

This project is a React application for a medical services platform. It includes various components such as a homepage, navbar, login/signup modal, header, banner, and card menu.

## Project Structure

```
medico-client/
├── src/
│   ├── Api/
│   │   └── Medicine.ts
│   ├── components/
│   │   ├── Banner/
│   │   │   ├── CardMenu/
│   │   │   │   └── index.tsx
│   │   │   ├── Search/
│   │   │   │   └── index.tsx
│   │   │   └── index.tsx
│   │   ├── Header/
│   │   │   └── index.tsx
│   │   ├── LoginSignup/
│   │   │   └── index.tsx
│   │   ├── Navbar/
│   │   │   └── index.tsx
│   ├── pages/
│   │   ├── homepage/
│   │   │   └── index.tsx
│   └── App.tsx
├── public/
│   └── index.html
├── tsconfig.json
├── package.json
└── README.md
```

## Changes Made

### /src/pages/homepage/index.tsx

- Added a new property 'description' to the `Card.Meta` component.

```tsx
// ...existing code...
<Card.Meta title={product.title} description={product.description} />
// ...existing code...
```

## Using Ant Design

This project uses [Ant Design](https://ant.design/) for UI components. Ant Design is a popular React UI framework that provides a set of high-quality components and design guidelines.

### Installation

To install Ant Design, run the following command:

```sh
npm install antd
```

````

### Customizing Ant Design

You can customize the Ant Design theme by modifying the `theme` property in your `vite.config.ts` or `craco.config.js` file. Refer to the [Ant Design documentation](https://ant.design/docs/react/customize-theme) for more details.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/medico-client.git
````

2. Navigate to the project directory:
   ```sh
   cd medico-client
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## License

This project is licensed under the MIT License.
