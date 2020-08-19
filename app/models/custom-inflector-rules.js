import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('организация', 'Организацияs');
inflector.irregular('застройщик', 'Застройщикs');
inflector.irregular('строит', 'Строитs');

export default {};
