import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  видРазрешения: DS.attr('i-i-s-r-s-2-t-вид-разрешения'),
  архив: DS.attr('boolean'),
  датаРазрешения: DS.attr('date'),
  номерРазрешения: DS.attr('number'),
  объектСтроит: DS.hasMany('i-i-s-r-s-2-объект-строит', { inverse: 'разрешение', async: false }),
  застройщик: DS.hasMany('i-i-s-r-s-2-застройщик', { inverse: 'разрешение', async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-r-s-2-разреш-на-строит.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  видРазрешения: {
    descriptionKey: 'models.i-i-s-r-s-2-разреш-на-строит.validations.видРазрешения.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  архив: {
    descriptionKey: 'models.i-i-s-r-s-2-разреш-на-строит.validations.архив.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаРазрешения: {
    descriptionKey: 'models.i-i-s-r-s-2-разреш-на-строит.validations.датаРазрешения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерРазрешения: {
    descriptionKey: 'models.i-i-s-r-s-2-разреш-на-строит.validations.номерРазрешения.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  объектСтроит: {
    descriptionKey: 'models.i-i-s-r-s-2-разреш-на-строит.validations.объектСтроит.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  застройщик: {
    descriptionKey: 'models.i-i-s-r-s-2-разреш-на-строит.validations.застройщик.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};
