import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import routing from './home.routes.js';
import HomeController from './home.controller.js';
import NavController from './nav.controller.js';

export default angular.module('app.home', [uirouter, ngResource])
    .config(routing)
    .controller('HomeController', HomeController)
    .controller('NavController', NavController)
    .name;
