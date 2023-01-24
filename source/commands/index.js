import Login from "./login";
import Logout from "./logout";
import Create from "./create";

const commands = {
    create: Create.commandOptions,
    login: Login.commandOptions,
    logout: Logout.commandOptions,
};

export default commands;