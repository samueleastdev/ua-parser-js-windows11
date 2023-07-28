import { UAParser } from 'ua-parser-js';
import { CPUArch, DeviceType, EngineName } from 'ua-parser-js/enums';
import * as assert from 'assert';

describe('Returns', () => {
    it('getResult() should returns object', () => {
        assert.deepEqual(new UAParser('').getResult(), 
            {
                ua : '',
                //ua_ch : { architecture: undefined, bitness: undefined, brands: undefined, fullVersionList: undefined, mobile: false, model: undefined, platform: undefined, platformVersion: undefined },
                browser: { name: undefined, version: undefined, major: undefined },
                cpu: { architecture: undefined },
                device: { vendor: undefined, model: undefined, type: undefined },
                engine: { name: undefined, version: undefined},
                os: { name: undefined, version: undefined }
        });
    });
});

describe('Enums', () => {    
    it('Can use enum', () => {
        const { cpu, device, engine } = UAParser('Mozilla/5.0 (X11; U; Linux armv7l; en-GB; rv:1.9.2a1pre) Gecko/20090928 Firefox/3.5 Maemo Browser 1.4.1.22 RX-51 N900');
        assert.strictEqual(cpu.is(CPUArch.ARM), true);
        assert.strictEqual(device.is(DeviceType.MOBILE), true);
        assert.strictEqual(engine.is(EngineName.GECKO), true);
    });
});