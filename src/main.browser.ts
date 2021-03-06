__webpack_public_path__ = window.__AppShell_publicPath__.angular2

import './polyfills.browser';
import './vendor.browser';

/*
 * Angular bootstraping
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { decorateModuleRef } from './app/environment';
import { bootloader } from '@angularclass/hmr';
/*
 * App Module
 * our top level module that holds all of our components
 */
import { AppModule } from './app';

/*
 * Bootstrap our Angular app with a top level NgModule
 */
export function main( API: AppShellAPI ): Function {

  const appElement = document.createElement( 'app' );

  document.getElementById( API.appMountPoint )
    .appendChild( appElement );

  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(decorateModuleRef)
    .catch(err => console.error(err));

  return () => {

    const app = appElement.parentNode.removeChild( appElement );

  }

}

