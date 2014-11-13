define([
    'intern!object',
    'intern/assert',
    'require'
], function (registerSuite, assert, require) {
    appUrl = 'http://localhost:8080/demo/';
    //appUrl2 = 'http://localhost:5000/cpjr2/files/';

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

        /*'Uploads a file': function(){
            return this.get('remote').get(appUrl2)
            .setFindTimeout(2000)
            .findByClassName('fangorn-clickable')
                .click()
                .end()
            .then(function (data){
                assert.strictEqual("Hello", "Hello", "Uploading a file should increase the children length by 1");
            })
        }*/
    };

    registerSuite(suite);

});
