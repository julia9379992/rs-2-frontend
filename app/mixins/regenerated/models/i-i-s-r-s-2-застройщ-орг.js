import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  описание: DS.attr('string'),
  организЗастр: DS.belongsTo('i-i-s-r-s-2-организация', { inverse: null, async: false }),
  разрешение: DS.belongsTo('i-i-s-r-s-2-разреш-на-строит', { inverse: 'застройщОрг', async: false })
});

export let ValidationRules = {
  описание: {
    descriptionKey: 'models.i-i-s-r-s-2-застройщ-орг.validations.описание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  организЗастр: {
    descriptionKey: 'models.i-i-s-r-s-2-застройщ-орг.validations.организЗастр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  разрешение: {
    descriptionKey: 'models.i-i-s-r-s-2-застройщ-орг.validations.разрешение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗастройщикE', 'i-i-s-r-s-2-застройщ-орг', {
    
  });
};
