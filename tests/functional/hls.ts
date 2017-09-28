const { suite, test, before } = intern.getInterface('tdd');
const { assert } = intern.getPlugin('chai');

suite('hls', () => {
    before(async ({ remote }) => {
        await remote.get('https://moiseyev.github.io/hls-tests/tests/functional/hls.html');
        await remote.sleep(1000);
    });

    test('canPlayType application/vnd.apple.mpegURL', async ({ remote }) => {
        assert.equal(await remote.findById('can-play-type-1').getVisibleText(), 'maybe');
    });

    test('canPlayType application/x-mpegurl', async ({ remote }) => {
        assert.equal(await remote.findById('can-play-type-2').getVisibleText(), 'maybe');
    });

    test('play', async ({ remote }) => {
        await remote.findById('play-button').click();
        assert.equal(await remote.findById('video').getProperty('paused'), false);
    });
});