const server = require('./server');
// const projectRouter = require('./projects/project-router');
// const resourceRouter = require('./resources/resource-router')
// const taskRouter = require('./tasks/task-router')

const PORT = process.env.PORT || 4000;

// server.use('/api/projects', projectRouter);
// server.use('/api/resources', resourceRouter);
// server.use('/api/tasks', taskRouter);

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});