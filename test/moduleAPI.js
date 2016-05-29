/*global require, suite, setup, teardown, test */

'use strict';

var assert = require('chai').assert;

var testconfig = require('./testconfig');

var modulePath = '../src/module';

if (testconfig.modules['moduleAPI']) {
    suite('module (API): ', function () {
        test('require does not throw', function () {
            assert.doesNotThrow(function () {
                require(modulePath);
            });
        });

        test('require returns object', function () {
            assert.isObject(require(modulePath));
        });

        suite('require:', function () {
            var escomplex;

            setup(function () {
                escomplex = require(modulePath);
            });

            teardown(function () {
                escomplex = undefined;
            });

            test('analyse function is exported', function () {
                assert.isFunction(escomplex.analyse);
            });

            test('analyse does not throw with valid arguments', function () {
                assert.doesNotThrow(function () {
                    escomplex.analyse({
                        body: [],
                        loc: {
                            start: {
                                line: 0
                            },
                            end: {
                                line: 0
                            }
                        }
                    });
                });
            });

            test('analyse throws when ast is string', function () {
                assert.throws(function () {
                    escomplex.analyse('console.log("foo");');
                });
            });

            test('analyse throws when ast is array', function () {
                assert.throws(function () {
                    escomplex.analyse([]);
                });
            });

            test('analyse returns object', function () {
                assert.isObject(escomplex.analyse({
                    body: [],
                    loc: {
                        start: {
                            line: 0
                        },
                        end: {
                            line: 0
                        }
                    }
                }));
            });

            test('analyse returns aggregate object', function () {
                assert.isObject(escomplex.analyse({
                    body: [],
                    loc: {
                        start: {
                            line: 0
                        },
                        end: {
                            line: 0
                        }
                    }
                }).aggregate);
            });

            test('analyse returns aggregate lines of code property', function () {
                assert.isObject(escomplex.analyse({
                    body: [],
                    loc: {
                        start: {
                            line: 0
                        },
                        end: {
                            line: 0
                        }
                    }
                }).aggregate.sloc);
            });

            test('analyse returns aggregate physical lines of code property', function () {
                assert.isNumber(escomplex.analyse({
                    body: [],
                    loc: {
                        start: {
                            line: 0
                        },
                        end: {
                            line: 0
                        }
                    }
                }).aggregate.sloc.physical);
            });

            test('analyse returns aggregate logical lines of code property', function () {
                assert.isNumber(escomplex.analyse({
                    body: [],
                    loc: {
                        start: {
                            line: 0
                        },
                        end: {
                            line: 0
                        }
                    }
                }).aggregate.sloc.logical);
            });

            test('analyse returns aggregate cyclomatic complexity property', function () {
                assert.isNumber(escomplex.analyse({
                    body: [],
                    loc: {
                        start: {
                            line: 0
                        },
                        end: {
                            line: 0
                        }
                    }
                }).aggregate.cyclomatic);
            });

            test('analyse returns aggregate cyclomatic complexity density property', function () {
                assert.isNumber(escomplex.analyse({
                    body: [],
                    loc: {
                        start: {
                            line: 0
                        },
                        end: {
                            line: 0
                        }
                    }
                }).aggregate.cyclomaticDensity);
            });

            test('analyse returns aggregate halstead property', function () {
                assert.isObject(escomplex.analyse({
                    body: [],
                    loc: {
                        start: {
                            line: 0
                        },
                        end: {
                            line: 0
                        }
                    }
                }).aggregate.halstead);
            });

            test('analyse returns aggregate halstead operators property', function () {
                assert.isObject(escomplex.analyse({
                    body: [],
                    loc: {
                        start: {
                            line: 0
                        },
                        end: {
                            line: 0
                        }
                    }
                }).aggregate.halstead.operators);
            });

            test('analyse returns aggregate halstead total operators property', function () {
                assert.isNumber(escomplex.analyse({
                    body: [],
                    loc: {
                        start: {
                            line: 0
                        },
                        end: {
                            line: 0
                        }
                    }
                }).aggregate.halstead.operators.total);
            });

            test('analyse returns aggregate halstead distinct operators property', function () {
                assert.isNumber(escomplex.analyse({
                    body: [],
                    loc: {
                        start: {
                            line: 0
                        },
                        end: {
                            line: 0
                        }
                    }
                }).aggregate.halstead.operators.distinct);
            });

            test('analyse returns aggregate halstead operator identifiers property', function () {
                assert.isArray(escomplex.analyse({
                    body: [],
                    loc: {
                        start: {
                            line: 0
                        },
                        end: {
                            line: 0
                        }
                    }
                }).aggregate.halstead.operators.identifiers);
            });

            test('analyse returns aggregate halstead operands property', function () {
                assert.isObject(escomplex.analyse({
                    body: [],
                    loc: {
                        start: {
                            line: 0
                        },
                        end: {
                            line: 0
                        }
                    }
                }).aggregate.halstead.operands);
            });

            test('analyse returns aggregate halstead total operands property', function () {
                assert.isNumber(escomplex.analyse({
                    body: [],
                    loc: {
                        start: {
                            line: 0
                        },
                        end: {
                            line: 0
                        }
                    }
                }).aggregate.halstead.operands.total);
            });

            test('analyse returns aggregate halstead distinct operands property', function () {
                assert.isNumber(escomplex.analyse({
                    body: [],
                    loc: {
                        start: {
                            line: 0
                        },
                        end: {
                            line: 0
                        }
                    }
                }).aggregate.halstead.operands.distinct);
            });

            test('analyse returns aggregate halstead operand identifiers property', function () {
                assert.isArray(escomplex.analyse({
                    body: [],
                    loc: {
                        start: {
                            line: 0
                        },
                        end: {
                            line: 0
                        }
                    }
                }).aggregate.halstead.operands.identifiers);
            });

            test('analyse returns maintainability property', function () {
                assert.isNumber(escomplex.analyse({
                    body: [],
                    loc: {
                        start: {
                            line: 0
                        },
                        end: {
                            line: 0
                        }
                    }
                }).maintainability);
            });

            test('analyse returns functions property', function () {
                assert.isArray(escomplex.analyse({
                    body: [],
                    loc: {
                        start: {
                            line: 0
                        },
                        end: {
                            line: 0
                        }
                    }
                }).functions);
            });

            test('analyse returns dependencies property', function () {
                assert.isArray(escomplex.analyse({
                    body: [],
                    loc: {
                        start: {
                            line: 0
                        },
                        end: {
                            line: 0
                        }
                    }
                }).dependencies);
            });
        });
    });
}
