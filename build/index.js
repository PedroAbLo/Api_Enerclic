"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); //middleware que transforma la req.body a un json
const PORT = 5003;
app.get('/familia', (_req, res) => {
    console.log('someone pinged here!');
    res.send('familiaService.getFamilia()');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
