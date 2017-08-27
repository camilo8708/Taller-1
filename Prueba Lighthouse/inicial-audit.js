'use strict';

const Audit = require('lighthouse').Audit;

const MAX_INICIAL_TIME = 3000;

class LoadAudit extends Audit {
    static get meta() {
        return {
            category: 'MyPerformance2',
            name: 'inicial-audit',
            description: 'Schedule card initialized and ready',
            failureDescription: 'Schedule Card slow to initialize',
            helpText: 'Used to measure time from navigationStart to when the schedule' +
            ' inicial page is shown.',

            requiredArtifacts: ['TimeToInicial']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeToInicial;

        const belowThreshold = loadedTime <= MAX_INICIAL_TIME;

        return {
            rawValue: loadedTime,
            score: belowThreshold
        };
    }
}

module.exports = LoadAudit;