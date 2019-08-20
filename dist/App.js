"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const tableComponents_1 = __importDefault(require("./components/tableComponents/tableComponents"));
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(tableComponents_1.default, null)));
}
exports.default = App;
//# sourceMappingURL=App.js.map