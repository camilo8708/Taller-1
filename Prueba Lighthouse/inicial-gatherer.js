'use strict';

const Gatherer = require('lighthouse').Gatherer;

class TimeToInicial extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.inicialLoadTime')
            .then(inicialLoadTime => {
                if (!inicialLoadTime) {

                    throw new Error('Unable to find inicial load metrics in page');
                }
                return inicialLoadTime;
            });
    }
}

module.exports = TimeToInicial;