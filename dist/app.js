"use strict";
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
var App = /** @class */ (function () {
    function App(controllers, port) {
        this.express = (0, express_1.default)();
        this.port = Number(Config_1.default.server.port) || port;
        this.host = String(Config_1.default.server.host) || "localhost";
        this.namespace = "SERVER";
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }
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
