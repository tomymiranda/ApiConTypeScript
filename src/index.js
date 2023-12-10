"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); //para recibir json
const PORT = 3000;
/* _par asi ignora el parametro, esto es propio de typescript */
app.get('/', (req, res) => {
    console.log("el req", req);
    console.log("el body del req", req.body);
    console.log('Hello world');
    res.send('Hello world');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
