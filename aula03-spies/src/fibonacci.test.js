const sinon = require('sinon');
const assert = require('assert');

const Fibonacci = require('./fibonacci');

// Fibonacci: o próximo valor corresponse a soma dos dois anteriores
// dado 3
// 0, 1, 1
// dado 5
// 0, 1, 1, 2, 3
(async () => {
  {
    const fibonacci = new Fibonacci();
    const spy = sinon.spy(fibonacci, fibonacci.execute.name);
    // generators retornam iterators, (.next)
    // existem 3 formas de ler os dados
    // usando as funcoes .next, for await e rest/spread
    for await (const i of fibonacci.execute(3)) { };
    
    //nosso algoritmo vai começar do zero!
    const expectedCallCount = 4;
    assert.deepStrictEqual(spy.callCount, expectedCallCount);
  }
  {
    const fibonacci = new Fibonacci();
    const spy = sinon.spy(fibonacci, fibonacci.execute.name);
    const [...results] = fibonacci.execute(5);
    // [0] input = 5, current = 0, next = 1
    // [1] input = 4, current = 1, next = 1
    // [2] input = 3, current = 1, next = 2
    // [3] input = 2, current = 2, next = 3
    // [4] input = 1, current = 3, next = 5
    // [5] input = 0 -> PARA

    const { args } = spy.getCall(2);
    const exepectedResult = [ 0, 1, 1, 2, 3];
    const expectedParams = Object.values({
      input: 3,
      current: 1,
      next: 2
    });

    assert.deepStrictEqual(args, expectedParams);
    assert.deepStrictEqual(results, exepectedResult);
  }
})();