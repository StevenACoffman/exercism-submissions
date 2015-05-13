/*global xit:false, it:false, expect:false, describe:false */
var words = require('./word-count.js');

describe('words()', function () {
  'use strict';
  it('counts one word', function () {
    var expectedCounts = {
      word: 1
    };
    expect(words('word')).toEqual(expectedCounts);
  });

  it('counts one of each', function () {
    var expectedCounts = {
      one: 1,
      of: 1,
      each: 1
    };
    expect(words('one of each')).toEqual(expectedCounts);
  });

  it('counts multiple occurrences', function () {
    var expectedCounts = {
      one: 1,
      fish: 4,
      two: 1,
      red: 1,
      blue: 1
    };
    expect(words('one fish two fish red fish blue fish')).toEqual(expectedCounts);
  });

  it('includes punctuation', function () {
    var expectedCounts = {
      car: 1,
      ':': 2,
      carpet: 1,
      as: 1,
      java: 1,
      'javascript!!&@$%^&': 1
    };
    expect(words('car : carpet as java : javascript!!&@$%^&')).toEqual(expectedCounts);
  });

  it('includes numbers', function () {
    var expectedCounts = {
      testing: 2,
      1: 1,
      2: 1
    };
    expect(words('testing 1 2 testing')).toEqual(expectedCounts);
  });

  it('respects case', function () {
    var expectedCounts = {
      go: 1,
      Go: 1,
      GO: 1
    };
    expect(words('go Go GO')).toEqual(expectedCounts);
  });

  it('counts properly international characters', function () {
    var expectedCounts = {
      '¡Hola!': 1,
      '¿Qué': 1,
      'tal?': 1,
      'Привет!': 1
    };
    expect(words('¡Hola! ¿Qué tal? Привет!')).toEqual(expectedCounts);
  });

  it('counts multiline', function () {
    var expectedCounts = {
      hello: 1,
      world: 1
    };
    expect(words('hello\nworld')).toEqual(expectedCounts);
  });

  it('counts reserved', function () {
    var expectedCounts = {
      abstract: 1,
      arguments: 1,
      boolean: 1,
      break: 1,
      byte: 1,
      case: 1,
      catch: 1,
      char: 1,
      class: 1,
      const: 1,
      continue: 1,
      debugger: 1,
      default: 1,
      delete: 1,
      do: 1,
      double: 1,
      else: 1,
      enum: 1,
      eval: 1,
      export: 1,
      extends: 1,
      false: 1,
      final: 1,
      finally: 1,
      float: 1,
      for: 1,
      function: 1,
      goto: 1,
      if: 1,
      implements: 1,
      import: 1,
      in : 1,
      instanceof: 1,
      int: 1,
      interface: 1,
      let: 1,
      long: 1,
      native: 1,
      new: 1,
      null: 1,
      package: 1,
      private: 1,
      protected: 1,
      public: 1,
      return: 1,
      short: 1,
      static: 1,
      super: 1,
      switch: 1,
      synchronized: 1,
      this: 1,
      throw: 1,
      throws: 1,
      transient: 1,
      true: 1,
      try: 1,
      typeof: 1,
      var: 1,
      void: 1,
      volatile: 1,
      while: 1,
      with: 1,
      yield: 1,
      toString: 1,
      hasOwnProperty: 1
    };
    expect(words('abstract arguments boolean break byte case catch char class ' +
      'const continue debugger default delete do ' +
      'double else enum eval export ' +
      'extends false final finally float ' +
      'for function goto if implements ' +
      'import in instanceof int interface ' +
      'let long native new null ' +
      'package private protected public return ' +
      'short static super switch synchronized ' +
      'this throw throws transient true ' +
      'try typeof var void volatile ' +
      'while with yield toString hasOwnProperty')).toEqual(expectedCounts);
  });

});