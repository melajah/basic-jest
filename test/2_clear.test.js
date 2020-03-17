const { Todo } = require('../models');

describe("clear data", function () {
    it('', function (done) {
        Todo.destroy({
            where: {},
            truncate: true
        })
        .then(() => {
            done()
        })
        .catch(console.log)
    })
})