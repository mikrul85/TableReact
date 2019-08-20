"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function UserModal(props) {
    const { name, username, email, website } = props.data;
    const { title, completed } = props.userTodosData[1];
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", null,
            react_1.default.createElement("p", null,
                "Name: ",
                name),
            react_1.default.createElement("p", null,
                "Username: ",
                username),
            react_1.default.createElement("p", null,
                "Email: ",
                email),
            react_1.default.createElement("p", null,
                "Website: ",
                website)),
        react_1.default.createElement("div", null,
            react_1.default.createElement("p", null,
                "Title: ",
                title),
            react_1.default.createElement("p", null,
                "Completed: ",
                completed ? react_1.default.createElement("p", null, "Yes") : react_1.default.createElement("p", null, "No")))));
}
exports.default = UserModal;
//# sourceMappingURL=userModal.js.map