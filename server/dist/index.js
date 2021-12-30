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
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const person_1 = require("./entities/person");
(0, typeorm_1.createConnection)()
    .then((connection) => __awaiter(void 0, void 0, void 0, function* () {
    const PORT = process.env.PORT || 3001;
    const app = (0, express_1.default)();
    app.post("/new_person", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const person = new person_1.Person();
        person.name = "test";
        person.age = 24;
        person.wage = 32;
        person.position = "testing";
        // Writes to DB and outputs its ID
        yield connection.manager.save(person).then((u) => {
            // tslint:disable-next-line:no-console
            console.log("Person saved with id of: ", u.id);
        });
        res.send(person);
    }));
    app.listen(PORT, () => {
        // tslint:disable-next-line:no-console
        console.log(`Server listening on ${PORT}`);
    });
    // Returns all Person rows in the Person table
    const personRepo = connection.getRepository(person_1.Person);
    const savedpersons = yield personRepo.find();
    // tslint:disable-next-line:no-console
    console.log("All persons in the DB: ", savedpersons);
}))
    // tslint:disable-next-line:no-console
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map