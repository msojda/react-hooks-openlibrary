# react-hooks-openlibrary

Sample, very simple App to showcase React's new Hooks API (available in alpha).

The app built on top of create-react-app and bulma. 
It displays a search box where you can input book title and after the form is submitted it calls OpenLibrary API and after successful call it displays the results.

Read more: https://matwrites.com/react-hooks-revisited/

### Instalation

Clone the repo
```
git clone git@github.com:msojda/react-hooks-openlibrary.git
```

Install dependencies
```
cd react-hooks-openlibrary/ && yarn
```

Run the app
```
yarn start
```

Branch `master` contains an app with class based component. In order to use hooks api and see the difference you need to
checkout `react-hooks` branch and run `yarn` again to `upgrade react` and `react-dom`.
