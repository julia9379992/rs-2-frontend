import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISRS_2ОрганизацияLForm from './forms/i-i-s-r-s-2-организация-l';
import IISRS_2РазрешНаСтроитLForm from './forms/i-i-s-r-s-2-разреш-на-строит-l';
import IISRS_2ОрганизацияEForm from './forms/i-i-s-r-s-2-организация-e';
import IISRS_2РазрешНаСтроитEForm from './forms/i-i-s-r-s-2-разреш-на-строит-e';
import IISRS_2ЗастройщОргModel from './models/i-i-s-r-s-2-застройщ-орг';
import IISRS_2ЗастройщикModel from './models/i-i-s-r-s-2-застройщик';
import IISRS_2ОбъектСтроитModel from './models/i-i-s-r-s-2-объект-строит';
import IISRS_2ОрганизацияModel from './models/i-i-s-r-s-2-организация';
import IISRS_2РазрешНаСтроитModel from './models/i-i-s-r-s-2-разреш-на-строит';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-r-s-2-застройщ-орг': IISRS_2ЗастройщОргModel,
    'i-i-s-r-s-2-застройщик': IISRS_2ЗастройщикModel,
    'i-i-s-r-s-2-объект-строит': IISRS_2ОбъектСтроитModel,
    'i-i-s-r-s-2-организация': IISRS_2ОрганизацияModel,
    'i-i-s-r-s-2-разреш-на-строит': IISRS_2РазрешНаСтроитModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'r-s-2': {
          caption: 'r-s-2',
          title: 'r-s-2',
          'i-i-s-r-s-2-организация-l': {
            caption: 'i-i-s-r-s-2-организация-l',
            title: 'i-i-s-r-s-2-организация-l'
          },
          'i-i-s-r-s-2-разреш-на-строит-l': {
            caption: 'i-i-s-r-s-2-разреш-на-строит-l',
            title: 'i-i-s-r-s-2-разреш-на-строит-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-r-s-2-организация-l': IISRS_2ОрганизацияLForm,
    'i-i-s-r-s-2-разреш-на-строит-l': IISRS_2РазрешНаСтроитLForm,
    'i-i-s-r-s-2-организация-e': IISRS_2ОрганизацияEForm,
    'i-i-s-r-s-2-разреш-на-строит-e': IISRS_2РазрешНаСтроитEForm
  },

});

export default translations;
