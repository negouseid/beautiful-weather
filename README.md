# BeautifulForecast

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

This is a simple 5 days forecast app

The Process I took to build this app was a bit complicated but it works nicely. I started with a five day forecast API and the data I recieved was a large array contianing 40 objects which also contianed additonal objects. What I was getting was data for every three hours. To get the daily temp I took a long route. First, I made a REST call to get all the data, then I used chunks to seperate the data into 5 array of 8 objects. The 5 array represented 5 days and the 8 objects the weather every three hours in a 24 span. Finally, I made a min and max function to find the high and low temperature for the day. 
The big tradeoffs I made was definitely styling. I would like to make the app cleaner, I just did not have the time. It was a hectic week and weekend. 
Things I would add if I had more time.

1. From technical point, I would use ngSwitch instead of ngIf on the weather template page. 
2. I would add cleaner styles and possibly a header and footer
3. Add a feature that allows for finding activities based on temp and locations near by. 

to get started 

`git clone https://github.com/negouseid/beautiful-weather.git`


`cd into beautiful-weather`


`npm install` 


For testing `ng test`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
