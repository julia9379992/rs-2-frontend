import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  адрес: DS.attr('string'),
  иНН: DS.attr('string')
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-r-s-2-организация.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  адрес: {
    descriptionKey: 'models.i-i-s-r-s-2-организация.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  иНН: {
    descriptionKey: 'models.i-i-s-r-s-2-организация.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};
