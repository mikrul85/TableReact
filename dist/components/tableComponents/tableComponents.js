"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const table_1 = __importDefault(require("../table/table"));
const userModal_1 = __importDefault(require("../userModal/userModal"));
function TableComponents() {
    const [data, setData] = react_1.useState({
        users: [{
                name: null,
                email: null,
                username: null,
                website: null
            }],
        isLoading: false,
    });
    const [query, setQuery] = react_1.useState('users/');
    const [modal, setModal] = react_1.useState({
        userTodosData: [],
        isModalActive: false,
        userId: 0
    });
    // console.log(modal.isModalActive)
    react_1.useEffect(() => {
        let ignore = false;
        function fetchData(queryValue) {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield fetch('https://jsonplaceholder.typicode.com/' + queryValue);
                const result = yield response.json();
                if (!ignore)
                    setData({ users: result, isLoading: true });
            });
        }
        fetchData(query);
        return () => { ignore = true; };
    }, [query]);
    let userModalHandler = (id) => {
        const todosUserId = id + 1;
        function fetchData(queryValue) {
            return __awaiter(this, void 0, void 0, function* () {
                const response = yield fetch('https://jsonplaceholder.typicode.com/' + queryValue);
                const result = yield response.json();
                console.log(result);
                setModal({ userTodosData: result, isModalActive: true, userId: id });
            });
        }
        fetchData("todos?userId=" + todosUserId);
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", null, data.isLoading ? react_1.default.createElement(table_1.default, { data: data.users, userModalInitiate: userModalHandler }) : react_1.default.createElement("p", null, "\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")),
        react_1.default.createElement("div", null, modal.isModalActive ? react_1.default.createElement(userModal_1.default, { data: data.users[modal.userId], userTodosData: modal.userTodosData }) : null)));
}
exports.default = TableComponents;
//# sourceMappingURL=tableComponents.js.map