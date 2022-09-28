describe.skip('Description of test suite', () => {
    before(() => {
        console.log("runs once before the first test in this block")
    });
    after(() => {
        console.log("runs once after the last test in this block");
    });
    it.skip('Individual test 1', () => {
        console.log("Execute code : Individual test 1");
    })
    it.skip('Individual test 2', () => {
        console.log("Execute code: Individual test 2");
    });
})