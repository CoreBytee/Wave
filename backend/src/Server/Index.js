import Elysia from "elysia"

const App = new Elysia()

App.get(
    "/",
    () => "Online!"
)

App.listen(3000)