import { Serializer as ЗастройщикSerializer } from
  '../mixins/regenerated/serializers/i-i-s-r-s-2-застройщик';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗастройщикSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
