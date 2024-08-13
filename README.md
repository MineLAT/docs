# MineLatino Docs

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## About

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## License

The MineLatino documentation (files inside `/docs` folder) is [MIT](https://github.com/MineLAT/docs/blob/main/LICENSE-docs) licensed.

The rest of the code is
[BSD-2-Clause](https://github.com/MineLAT/docs/blob/main/LICENSE) licensed.

Take in count that any logomark or image used in this project may have its own rights and doesn't belong from any of this project licences.
