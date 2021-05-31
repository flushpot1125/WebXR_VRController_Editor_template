import { ScriptMap } from "./tools";

/**
 * Defines the interface that exposes all exported scripts in this project.
 */
export interface ISceneScriptMap extends ScriptMap {
	"src/scenes/WebXR_VRController_Input/Particle.ts": any;
	"src/scenes/WebXR_VRController_Input/WebXR_VRControllerInput.ts": any;
}

/**
 * Defines the map of all available scripts in the project.
 */
export const scriptsMap: ISceneScriptMap = {
	"src/scenes/WebXR_VRController_Input/Particle.ts": require("./WebXR_VRController_Input/Particle"),
	"src/scenes/WebXR_VRController_Input/WebXR_VRControllerInput.ts": require("./WebXR_VRController_Input/WebXR_VRControllerInput"),
}
