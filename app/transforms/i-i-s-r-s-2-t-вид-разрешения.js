import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tВидРазрешенияEnum from '../enums/i-i-s-r-s-2-t-вид-разрешения';

export default FlexberryEnum.extend({
  enum: tВидРазрешенияEnum,
  sourceType: 'IIS.RS_2.tВидРазрешения'
});
