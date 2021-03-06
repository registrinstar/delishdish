import '../../../../sass-example/public/stylesheets/main.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';
import auth from './app.config';
import home from './components/home';
import login from './components/login';
import signup from './components/signup';
import profile from './components/profile';
import recipe from './components/recipe';
import shoppinglist from './components/shoppinglist';
import shoppinglistdetail from './components/shoppinglistdetail';

angular.module('app', [uirouter, home, login, signup, profile, recipe, shoppinglist, shoppinglistdetail]).config(routing, auth);

