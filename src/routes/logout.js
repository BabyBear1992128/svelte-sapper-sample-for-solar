export async function get(req, res) {
    req.session.token = null;

    res.writeHead(307, { Location: '/login' })
    res.end()
}
