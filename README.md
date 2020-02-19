# Megatherium

Megatherium is a React & Redux web app boilerplate.
It includes a simple infrastructure for a quick start in front-end development with react.

Megatherium is named after an old giant sloth:
[Check It out!](https://en.wikipedia.org/wiki/Megatherium)

#### Features Breakdown

- [Getting started](#setup)
- [Configuration and Security](#config)
- [React guidlines](#react)
- [Handling css](#css)
- [Store managment](#store)
- [Handling Router](#routes)

## Getting started <a name="setup"></a>

Clone the repository and reset the working directory:

```
git clone [MEGATHERIUM REPOSITORY URL] [PROJECT NAME]
cd /[PROJECT NAME]
rm -rf .git
git init
```

Then run:

```
yarn
yarn start
```

For more information about yarn - [yarn](https://yarnpkg.com/en/)

Replace all instances of the Megatherium name with your actual project name. These include:

**package.json**

```json
{
  "name": "megatherium",
  "version": "0.1.0",
  // ...
  },
```

**index.html**

```html
<title>Megatherium - Boilerplate React & Redux App</title>
```

**manifest.json**

```json
{
  "short_name": "megatherium",
  "name": "Megatherium - Boilerplate React & Redux App",
  // ...
}
```


## Configuration and security <a name="config"></a>
Megatherium has several changes that need to be done for start developing. These include:

#### Add your own API_URL
Go to src/config.js and change your API_URL.

#### Add your own .env file
Add file called .env in the root folder of your app. 
In this file you add all your keys that you want to have on your local environment.
* Add  - GENERATE_SOURCEMAP=false
* Add - REACT_APP_BUGS_SNAG_KEY=mybugsnagkey

> NOTE: every key that you want to add have to start with [REACT_APP].<br />for example REACT_APP_API_SECRET_KEY=everybodyloveyou


## React guidlines <a name="react"></a>
Megatherium uses the newest version of react and use react hooks for functional components.
Please keep this guildlines in your code for every developer that will continue your work one day.

For more information about react - [react](https://reactjs.org/)
For more information about react hooks  - [react-hooks](https://reactjs.org/docs/hooks-intro.html)


## Handling css <a name="css"></a>
Megatherium uses inline style with styled-component & styled-system.
Play hand have fun with all the example component in the src/components/common folder. you can find there few samples of compoent that could be good in your project. if you have any suggestion just add some new component into the boilerplate project.
Exept the inline style there is a folder (src/assets/styles) for your css regular style. try to keep that only for big containers style, animation and complex css. we use scss format for those files.

For more information about styled-component - [styled-components](https://www.styled-components.com/)

For more information about styled-system - [styled-system](https://styled-system.com/)

For more information about sass - [sass-lang](https://sass-lang.com/)


## Store Managment <a name="store"></a>
Megatherium uses redux for store managment.

For more information about redux - [redux](https://redux.js.org/)


## Handling router <a name="router"></a>
Megatherium uses react-router for handling routes in the app.

For more information about react-router - [react-router](https://reacttraining.com/react-router/web/guides/quick-start/)