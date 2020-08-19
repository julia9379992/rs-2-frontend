import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-r-s-2-застройщик', 'Unit | Serializer | i-i-s-r-s-2-застройщик', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-r-s-2-застройщик',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-r-s-2-t-вид-разрешения',

    'model:i-i-s-r-s-2-застройщик',
    'model:i-i-s-r-s-2-объект-строит',
    'model:i-i-s-r-s-2-организация',
    'model:i-i-s-r-s-2-разреш-на-строит',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
