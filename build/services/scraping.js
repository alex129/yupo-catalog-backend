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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrapImgsFromUrl = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const scrapImgsFromUrl = (url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('initializing puppeteer');
        const browser = yield puppeteer_1.default.launch();
        const page = yield browser.newPage();
        console.log('go to page');
        yield page.goto(url);
        console.log('before goto page');
        const issueSrcs = yield page.evaluate(() => {
            const srcs = Array.from(document.querySelectorAll('img')).map((image) => image.getAttribute('src'));
            return srcs;
        });
        return yield Promise.resolve(issueSrcs);
    }
    catch (error) {
        console.log(error);
        return yield Promise.reject(error);
    }
});
exports.scrapImgsFromUrl = scrapImgsFromUrl;
