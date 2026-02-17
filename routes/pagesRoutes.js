const express = require ('express');
const path = require('path');
const pageRouter = express.Router();

// existing subject route (static file served)
pageRouter.get('/subject', (req, res) => {
    return res.redirect('/htmlfiles/faculty.html');
});

// Dynamic branch -> semester route
// Example: GET /cse/sem  -> redirects to semester page with query param used by client-side JS
pageRouter.get('/:branch/sem', (req, res) => {
    return res.sendFile(path.join(__dirname, '..', 'public', 'htmlfiles', 'semester.html'));
});

// Route for branch/sem{number}, e.g. /IT/sem2 -> serve subjects page
pageRouter.get('/:branch/sem:semester(\\d+)', (req, res) => {
    return res.sendFile(path.join(__dirname, '..', 'public', 'htmlfiles', 'faculty.html'));
});
// Route for branch/sem{number}/subject, e.g. /IT/sem2/Applied%20Physics -> serve resources page
pageRouter.get('/:branch/sem:semester(\\d+)/:subject', (req, res) => {
    return res.sendFile(path.join(__dirname, '..', 'public', 'htmlfiles', 'resources.html'));
});
// Redirect lowercase branch/semester (e.g. /bdes/2) to uppercase /BDES/sem{semester}
// Uses regex to match before the numeric semester route
pageRouter.get(/^\/([a-z.]+)\/(\d+)$/, (req, res) => {
    const branch = req.params[0].toUpperCase();
    const semester = req.params[1];
    return res.redirect(301, `/${branch}/sem${semester}`);
});

module.exports = pageRouter;