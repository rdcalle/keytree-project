# (keytree-project) a Github user finder

This is a small project for a Keytree's react interview that retrieves and displays the user main information, repositories and organisations in Github.

### Demo

You can try online at [here](https://keytree-project.netlify.com)

### Ho to run project on you local machine?

Requires [Node.js  >=8.0.0](https://nodejs.org/) installed in your system.
I recommend you to install [Yarn](https://yarnpkg.com/en/docs/install) to a fast, reliable and secure dependency management. But you can use *npm* as well.
After the project has been cloned in your computer, install the dependencies and devDependencies and start the server.

```sh
$ cd keytree-project
$ yarn
$ yarn start
```

For production environments...

```sh
$ yarn build
$ serve -s build
```
serve command is available if you install before with *yarn global add serve*, but you can use *http-serve* or whatever you prefer.

To run tests...

```sh
$ yarn test
```
