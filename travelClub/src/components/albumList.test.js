const albumList = require("./albumList")
// @ponicode
describe("componentWillMount", () => {
    let inst

    beforeEach(() => {
        inst = new albumList.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getList", () => {
    let inst

    beforeEach(() => {
        inst = new albumList.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.getList()
        }
    
        expect(callFunction).not.toThrow()
    })
})
