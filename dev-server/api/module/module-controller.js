export function index(req, res) {
    // Get all
    return res.status(200).json()
}

export function create(req, res) {
    // Create a module
    return res.status(201).json()
}

export function update(req, res) {
    //Update a module
    return res.status(204).json()
}

export function show(req, res) {
    //Show a module
    return res.status(200).json()
}

export function remove(req, res) {
    //Delete a module
    return res.status(204).json()
}