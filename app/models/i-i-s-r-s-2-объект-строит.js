import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import OfflineModelMixin from 'ember-flexberry-data/mixins/offline-model';

import {
  ValidationRules,
  Model as ОбъектСтроитMixin
} from '../mixins/regenerated/models/i-i-s-r-s-2-объект-строит';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(OfflineModelMixin, ОбъектСтроитMixin, Validations, {
});

export default Model;
