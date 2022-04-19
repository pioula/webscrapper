import { useEffect, useState } from "react";

//const path = 'http://localhost:3001/pages';
const path = 'http://10.100.0.182:3001/pages';

const GET = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}

export default function usePages() {
    const [pages, setPages] = useState();

    useEffect(() => {
        fetch(path, GET)
            .then(res => res.json())
            .then(jsonPages => setPages(jsonPages));
    }, []);

    return pages;
}
