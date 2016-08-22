var TestUtils = React.addons.TestUtils;

describe("TodoIndex", function() {
    var component;
    describe("renders Index", function() {
        beforeEach(function() {
            component = TestUtils.renderIntoDocument(
                React.createElement(TodoIndex, {
                    todos: [{
                        id: "1",
                        name: "test",
                        checked: false
                    }]
                })
            );
        });

        it("should have todo form rendered", function() {
            var c =  $(ReactDOM.findDOMNode(component))
            expect(c.find(".form-group").length).toBe(1);
        });
    });
});

describe("TodoListItem", function() {
    var component;
    describe("renders item", function() {
        beforeEach(function() {
            component = TestUtils.renderIntoDocument(
                TodoListItem({
                    todo: {
                        id: "1",
                        name: "test",
                        checked: false
                    }
                })
            );
        });

        it("should have todo item text", function() {
            var c =  $(ReactDOM.findDOMNode(component))
            expect(c.find(".list-text").text()).toContain("test");
        });
    });
});
