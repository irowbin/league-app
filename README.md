# About
This app is developed for tracking rankings of leagues. You can simply enter Home & Away team's name, score and date which will then
computes and displays result view sorting desc by date, modify or new entry of teams and finally list out all the teams with name, played, won, lost, drawn & total score.

# Deployment
The app is deployed in Heroku. Navigate to this [live preview](http://league-result.herokuapp.com/) link.

# Result System App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.3.

## Development server

Run `npm run start-dev` for a dev server. Navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.
Since we're using `simple-table-lib` library locally without publishing it into the npm, when this command runs, It'll first build a library and then serves the app.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
It  will first build the `simple-table-lib` and then the app.

You can also run `npm run build-lib` which builds the library that has been used within the app. If you make changes on 
library, you need to rebuild or configure script with `--watch` flag so whenever you make changes on library, it runs the incremental builds and reflects the changes in app.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
