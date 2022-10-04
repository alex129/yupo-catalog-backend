"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const scraping_pw_1 = require("../services/scraping-pw");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const router = express_1.default.Router();
router.post('/', (req, res) => {
    const { url } = req.body;
    void (0, scraping_pw_1.scrapImgsFromUrl)(url).then(response => {
        res.send(response);
    }).catch(error => {
        console.log('response error', error);
        res.send(error);
    });
});
exports.default = router;
