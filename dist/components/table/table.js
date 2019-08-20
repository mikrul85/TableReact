"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
function Table(props) {
    const [data, setData] = react_1.useState({ users: props.data });
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("table", null,
            react_1.default.createElement("tbody", null,
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("th", null, "NAME"),
                    react_1.default.createElement("th", null, "USERNAME"),
                    react_1.default.createElement("th", null, "EMAIL"),
                    react_1.default.createElement("th", null, "WEB-SITE")),
                data.users.map((item, i) => {
                    return (react_1.default.createElement("tr", { key: i, onClick: props.userModalInitiate.bind(null, i) },
                        react_1.default.createElement("td", null, item.name),
                        react_1.default.createElement("td", null, item.username),
                        react_1.default.createElement("td", null, item.email),
                        react_1.default.createElement("td", null, item.website)));
                })))));
}
exports.default = Table;
//# sourceMappingURL=table.js.map