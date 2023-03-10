"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var morgan_1 = __importDefault(require("morgan"));
var compression_1 = __importDefault(require("compression"));
var Logging_1 = __importDefault(require("@utils/Logging"));
var Config_1 = __importDefault(require("@config/Config"));
var LogRequestInfo_1 = __importDefault(require("@middlewares/LogRequestInfo"));
var SetAPIRules_1 = __importDefault(require("@middlewares/SetAPIRules"));
var TryConnectMongoDB_1 = __importDefault(require("@utils/TryConnectMongoDB"));
var TryConnectMysql_1 = __importDefault(require("@utils/TryConnectMysql"));
var App = /** @class */ (function () {
    function App(controllers, port) {
        this.express = (0, express_1.default)();
        this.port = Number(Config_1.default.server.port) || port;
        this.host = String(Config_1.default.server.host) || "localhost";
        this.namespace = "SERVER";
        this.initializeDatabaseConnection();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }
    App.prototype.initializeDatabaseConnection = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, TryConnectMongoDB_1.default)()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, (0, TryConnectMysql_1.default)()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    App.prototype.initializeMiddlewares = function () {
        this.express.use((0, cors_1.default)());
        this.express.use((0, helmet_1.default)());
        this.express.use((0, morgan_1.default)('dev'));
        this.express.use(express_1.default.json());
        this.express.use(express_1.default.urlencoded({ extended: true }));
        this.express.use(LogRequestInfo_1.default);
        this.express.use(SetAPIRules_1.default);
        this.express.use((0, compression_1.default)());
    };
    ;
    App.prototype.initializeControllers = function (controllers) {
        var _this = this;
        controllers.forEach(function (controller) {
            console.log(controller.path);
            _this.express.use('/', controller.router);
        });
    };
    App.prototype.listen = function () {
        var _this = this;
        this.express.listen(this.port, function () {
            Logging_1.default.info(_this.namespace, "Server is running at http://".concat(_this.host, ":").concat(_this.port));
        });
    };
    ;
    return App;
}());
exports.default = App;
;
