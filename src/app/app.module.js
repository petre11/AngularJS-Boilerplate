import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularSanitize from 'angular-sanitize';
import angularUiBootstrap from 'angular-ui-bootstrap';
import angularUiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';

import 'jquery';
import 'popper.js';

import './css/custom.scss';

import routes from './app.routes';
import home from './pages/home'
import instructions from './pages/instructions';
import answer from './pages/answer';

// import the root reducer from reducers folder
import localeConstants from './constants';
import componentsModule from './components';
import directivesModule from './directives';
import filtersModule from './filters';
import servicesModule from './services';
import middlewareModule from './middleware';

export default angular.module('boilerplatePoc', [
        angularAnimate,
        angularSanitize,
        angularUiBootstrap,
        angularUiRouter,
        ngRedux,
        localeConstants,
        componentsModule,
        directivesModule,
        filtersModule,
        servicesModule,
        middlewareModule,
        home,
        instructions,
        answer
    ])
    .config(routes);