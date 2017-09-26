import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:programa4', 'Unit | Controller | programa4', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});

test('Divide', function(assert) {
  let controller = this.subject();
  controller.set('text',"1,2,2¬2,3,3");
  controller.send('metodo_dividirLOCMetodos');
  assert.equal(controller.get('division')[0],"1");
  assert.equal(controller.get('division')[1],"1");
});

test('Log', function(assert) {
  let controller = this.subject();
  controller.set('text',"1,2,2¬2,3,3");
  controller.send('metodo_dividirLOCMetodos');
  controller.send('metodo_calcularLog');
  assert.equal(controller.get('logaritmos')[0],"0");
});

test('Prom', function(assert) {
  let controller = this.subject();
  controller.set('text',"asdfa,2,2¬asdfasd,3,3");
  controller.send('metodo_dividirLOCMetodos');
  controller.send('metodo_calcularLog');
  controller.send('metodo_calcularProm');
  assert.equal(controller.get('promedio'),"0");
})
