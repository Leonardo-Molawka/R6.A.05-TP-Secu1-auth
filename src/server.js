const {build} = await import( "./app.js")

const app = build({logger: false})

const start = async () => {
    try {
        console.log("Server trying listening on port 3000")
        await app.listen({port: 3000})
        console.log("Server listening on port 3000")
    } catch (err) {
        console.log("Error starting server:", err)
        app.log.error(err)
        process.exit(1)
    }
}
start()