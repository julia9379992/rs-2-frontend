import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  основной: DS.attr('boolean'),
  организЗастр: DS.belongsTo('i-i-s-r-s-2-организация', { inverse: null, async: false }),
  разрешение: DS.belongsTo('i-i-s-r-s-2-разреш-на-строит', { inverse: 'застройщик', async: false })
});

export let ValidationRules = {
  основной: {
    descriptionKey: 'models.i-i-s-r-s-2-застройщик.validations.основной.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  организЗастр: {
    descriptionKey: 'models.i-i-s-r-s-2-застройщик.validations.организЗастр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  разрешение: {
    descriptionKey: 'models.i-i-s-r-s-2-застройщик.validations.разрешение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗастройщикE', 'i-i-s-r-s-2-застройщик', {
    основной: attr('Основной', { index: 0 })
  });
};
