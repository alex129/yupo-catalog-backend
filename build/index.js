"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const scraping_1 = __importDefault(require("./routes/scraping"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3004;
app.use('/api/scrap', scraping_1.default);
app.get('/test', (_req, res) => {
    res.status(200).send({
        msg: 'hello'
    });
});
app.listen(PORT, () => console.log(`It's alive on http://localhost:${PORT}`));
