# prettier-tailwind-class-order-setup

> 🛠️ A simple CLI tool to configure Prettier with the Tailwind CSS plugin for any project.

This CLI tool checks for the existence of a `.prettierrc` file in your project (or creates one if it doesn’t exist) and ensures that `prettier-plugin-tailwindcss` is added to the Prettier configuration. It supports automatic installation of required dependencies and works seamlessly with `npm`, `pnpm`, and `yarn`.

---

## ✨ Features

- **Automatic Setup**: Creates a `.prettierrc` file if one does not exist.
- **Tailwind CSS Plugin**: Ensures that `prettier-plugin-tailwindcss` is added to your Prettier configuration.
- **Package Manager Detection**: Supports `npm`, `pnpm`, and `yarn`. Automatically installs dependencies using the package manager detected in your environment.
- **Safe and Non-Destructive**: Does not overwrite existing configuration unless necessary.

---

## 🚀 Usage

You can run the setup script using your preferred package manager:

```bash
npm install -D prettier-tailwind-class-order-setup
# or
pnpm add -D prettier-tailwind-class-order-setup
# or
yarn add -D create prettier-tailwind-class-order-setup
```

This will:

- Check for the `.prettierrc` file and create it if missing.
- Add `"prettier-plugin-tailwindcss"` to the `plugins` array in the Prettier config if it's not already there.

---

## 🧪 Example Output

If your `.prettierrc` file doesn't already contain the plugin, it will look like this:

```json
{
	"plugins": ["prettier-plugin-tailwindcss"]
}
```

If there are other settings in the file, this tool will append the plugin without overwriting them.

---

## 📄 How It Works

The tool performs the following steps:

1. Checks if `prettier` and `prettier-plugin-tailwindcss` are installed locally.
2. If not installed, it automatically installs the required dependencies using the detected package manager (`npm`, `pnpm`, or `yarn`).
3. Ensures that `prettier-plugin-tailwindcss` is added to your `.prettierrc` file under the `plugins` array.

---

## 🔄 Automatic Installation of Dependencies

The tool checks the environment to detect the package manager in use. It will install the dependencies with the appropriate package manager, as follows:

- **npm**: `npm install -D prettier prettier-plugin-tailwindcss`
- **pnpm**: `pnpm add -D prettier prettier-plugin-tailwindcss`
- **yarn**: `yarn add -D prettier prettier-plugin-tailwindcss`

This ensures that the tool works seamlessly regardless of the package manager you're using.

---

## 🧑‍💻 Example

Here's how you can run the tool in a new project:

```bash
mkdir my-project && cd my-project
npm init -y
npm install --save-dev prettier-tailwind-class-order-setup
```

This will create or modify the `.prettierrc` file with the Tailwind CSS plugin configured.

---

## 💡 Tips

You can add the setup to your `postinstall` script to ensure the Prettier configuration is automatically set up when dependencies are installed:

```json
"scripts": {
  "postinstall": "prettier-tailwind-class-order-setup"
}
```

This way, whenever you run `npm install` (or `pnpm install` or `yarn install`), the Prettier config will be automatically applied.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 📣 Contributing

If you'd like to contribute to the project, feel free to open an issue or a pull request! We're happy to accept contributions and suggestions.

---

## 🧑‍💻 Author

Made with ❤️ by [Sudhansh Singh](https://github.com/SadhuG)

[GitHub](https://github.com/SadhuG) · [Twitter](https://x.com/iamsudhug)
