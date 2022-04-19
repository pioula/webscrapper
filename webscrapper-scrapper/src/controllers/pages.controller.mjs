import { getData } from "../services/firebaseDatabase.mjs"

const table = 'pages';

const pagesController = {
    get: (req, res) => {
        res.json(getData(table));
    }
}

export default pagesController;