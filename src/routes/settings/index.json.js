export function get(req, res) {
    const user = req.session.token;

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(user));
}
