import { Router } from "express";
import { RoomController } from "./controller/RoomController";
import { SubjectController } from "./controller/SubjectController";

const routes = Router();

routes.post('/subject', new SubjectController().create)
routes.post('/room', new RoomController().create)
routes.get('/room', new RoomController().listRooms)
routes.post('/room/:idRoom/create', new RoomController().createVideo)
routes.post('/room/:idRoom/subject', new RoomController().roomSubject)

export default routes;