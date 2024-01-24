import app from "./app"

const main = () => {
  app.listen(app.get("port"))
  console.log("puerto corriendo en " + app.get("port"))
}

main()
