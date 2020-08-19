import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISRS_2ОрганизацияLForm from './forms/i-i-s-r-s-2-организация-l';
import IISRS_2РазрешНаСтроитLForm from './forms/i-i-s-r-s-2-разреш-на-строит-l';
import IISRS_2ОрганизацияEForm from './forms/i-i-s-r-s-2-организация-e';
import IISRS_2РазрешНаСтроитEForm from './forms/i-i-s-r-s-2-разреш-на-строит-e';
import IISRS_2ЗастройщикModel from './models/i-i-s-r-s-2-застройщик';
import IISRS_2ОбъектСтроитModel from './models/i-i-s-r-s-2-объект-строит';
import IISRS_2ОрганизацияModel from './models/i-i-s-r-s-2-организация';
import IISRS_2РазрешНаСтроитModel from './models/i-i-s-r-s-2-разреш-на-строит';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-r-s-2-застройщик': IISRS_2ЗастройщикModel,
    'i-i-s-r-s-2-объект-строит': IISRS_2ОбъектСтроитModel,
    'i-i-s-r-s-2-организация': IISRS_2ОрганизацияModel,
    'i-i-s-r-s-2-разреш-на-строит': IISRS_2РазрешНаСтроитModel
  },

  'application-name': 'R s_2',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'R s_2',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'R s_2',
          title: 'R s_2'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'r-s-2': {
          caption: 'RS_2',
          title: 'RS_2',
          'i-i-s-r-s-2-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-r-s-2-разреш-на-строит-l': {
            caption: 'Разреш на строит',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-r-s-2-организация-l': IISRS_2ОрганизацияLForm,
    'i-i-s-r-s-2-разреш-на-строит-l': IISRS_2РазрешНаСтроитLForm,
    'i-i-s-r-s-2-организация-e': IISRS_2ОрганизацияEForm,
    'i-i-s-r-s-2-разреш-на-строит-e': IISRS_2РазрешНаСтроитEForm
  },

});

export default translations;
