const { authJwt } = require("../middleware");
const controller = require("../controllers/note.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        next();
    });

    app.get(
        "/api/:userId/note/all",
        [
            authJwt.verifyToken
        ],
        controller.getAllNotes
    );

    app.get(
        "/api/note/:noteId",
        [
            authJwt.verifyToken
        ],
        controller.getOneNote
    );

    app.post(
        "/api/note/new",
        [
            authJwt.verifyToken
        ],
        controller.createNote
    );
    
    app.put(
        "/api/note/:noteId",
        [
            authJwt.verifyToken
        ],
        controller.editNote
    );
    
    app.put(
        "/api/note/:noteId/updateFavourite",
        [
            authJwt.verifyToken
        ],
        controller.updateFavourite
    );
    
    app.delete(
        "/api/note/:noteId",
        [
            authJwt.verifyToken
        ],
        controller.deleteNote
    );
};