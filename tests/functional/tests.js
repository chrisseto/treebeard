define([
    'intern!object',
    'intern/assert',
    'require'
], function (registerSuite, assert, require) {
    appUrl = 'http://localhost:8080/demo/';

    var getBrowser = function(remote) {
        return remote.environmentType.browserName;
    };

    suite = {
        name: 'Treebeard Behaviour',

        before: function() {
            NEXTTODO = 'upnext';
        },

        'Deletes first item, arrayLength == 3': function() {
            return this.get('remote').get(appUrl)
                .setFindTimeout(2000)
                .findByTagName('button')
                    .click()
                    .end()
                .setFindTimeout(2000)
                .findAllByClassName('tb-row')
                .then(function (data) {
                    assert.lengthOf(data, 3, "Deleting the first folder should leave the grid with only 3 items left");
                });
        }
    };

    registerSuite(suite);

});
