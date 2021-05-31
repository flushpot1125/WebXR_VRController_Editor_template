"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@babylonjs/core");
var BABYLON = require("@babylonjs/core/Legacy/legacy");
var tools_1 = require("../tools");
/**
 * This represents a script that is attached to a node in the editor.
 * Available nodes are:
 *      - Meshes
 *      - Lights
 *      - Cameas
 *      - Transform nodes
 *
 * You can extend the desired class according to the node type.
 * Example:
 *      export default class MyMesh extends Mesh {
 *          public onUpdate(): void {
 *              this.rotation.y += 0.04;
 *          }
 *      }
 * The function "onInitialize" is called immediately after the constructor is called.
 * The functions "onStart" and "onUpdate" are called automatically.
 */
var WebXR_VRControllerInput = /** @class */ (function (_super) {
    __extends(WebXR_VRControllerInput, _super);
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    function WebXR_VRControllerInput() {
        var _this = this;
        return _this;
    }
    /**
     * Called on the node is being initialized.
     * This function is called immediatly after the constructor has been called.
     */
    WebXR_VRControllerInput.prototype.onInitialize = function () {
        // ...
    };
    /**
     * Called on the scene starts.
     */
    WebXR_VRControllerInput.prototype.onStart = function () {
        var __scene = this._scene;
        var __Dram0 = this._Dram0;
        var __Dram1 = this._Dram1;
        var __Dram2 = this._Dram2;
        var __Dram3 = this._Dram3;
        var __Dram4 = this._Dram4;
        var __cymbal1 = this._cymbal1;
        var __cymbal2 = this._cymbal2;
        var __cymbal3 = this._cymbal3;
        var __cymbal4 = this._cymbal4;
        var __particle = this._particle;
        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), this._scene);
        light.intensity = 0.7;
        var wcf = function WebXRConfigration() {
            return __awaiter(this, void 0, void 0, function () {
                var env, xr;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            env = __scene.createDefaultEnvironment();
                            return [4 /*yield*/, __scene.createDefaultXRExperienceAsync({
                                    floorMeshes: [env.ground]
                                })];
                        case 1:
                            xr = _a.sent();
                            //changed position when WebXR immersive-vr mode is active. 
                            xr.baseExperience.camera.position.set(-0.83, 2, 11);
                            /* avoid low performance thanks for @ninisan_drumath */
                            __scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline("ssao", __scene.activeCamera);
                            __scene.postProcessRenderPipelineManager.supportedPipelines.forEach(function (pp) {
                                __scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(pp.name, __scene.activeCamera);
                            });
                            xr.input.onControllerAddedObservable.add(function (controller) {
                                controller.onMotionControllerInitObservable.add(function (motionController) {
                                    var xr_ids = motionController.getComponentIds();
                                    if (motionController.handness === 'left') {
                                        var cymbal4_left_standardTrigger_Component_1 = motionController.getComponent(xr_ids[0]); //xr-standard-trigger
                                        cymbal4_left_standardTrigger_Component_1.onButtonStateChangedObservable.add(function () {
                                            if (cymbal4_left_standardTrigger_Component_1.pressed) {
                                                __cymbal4.scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
                                                __particle.start_lineParticle();
                                            }
                                            else {
                                                __cymbal4.scaling = new BABYLON.Vector3(1, 1, 1);
                                                __particle.stop_lineParticle();
                                            }
                                        });
                                        var cymbal3_left_squeeze_Component_1 = motionController.getComponent(xr_ids[1]); //xr-standard-squeeze
                                        cymbal3_left_squeeze_Component_1.onButtonStateChangedObservable.add(function () {
                                            if (cymbal3_left_squeeze_Component_1.pressed) {
                                                __cymbal3.scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
                                                __particle.start_mucisNoteParticle();
                                            }
                                            else {
                                                __cymbal3.scaling = new BABYLON.Vector3(1, 1, 1);
                                                __particle.stop_mucisNoteParticle();
                                            }
                                        });
                                        /*
                                        let thumbstickComponent = motionController.getComponent(xr_ids[2]);//xr-standard-thumbstick
                                        thumbstickComponent.onButtonStateChangedObservable.add(() => {
                                            if (thumbstickComponent.pressed) {
                                                __Box_Left_ThumbStick.scaling= new BABYLON.Vector3(1.2,1.2,1.2);
                                            }else{
                                                __Box_Left_ThumbStick.scaling=new BABYLON.Vector3(1,1,1);
                                            }
                                        });
                                        */
                                        var dram3_left_button_Component_1 = motionController.getComponent(xr_ids[3]); //x-button
                                        dram3_left_button_Component_1.onButtonStateChangedObservable.add(function () {
                                            if (dram3_left_button_Component_1.pressed) {
                                                __Dram3.scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
                                            }
                                            else {
                                                __Dram3.scaling = new BABYLON.Vector3(1, 1, 1);
                                            }
                                        });
                                        var dram4_left_button_Component_1 = motionController.getComponent(xr_ids[4]); //y-button
                                        dram4_left_button_Component_1.onButtonStateChangedObservable.add(function () {
                                            if (dram4_left_button_Component_1.pressed) {
                                                __Dram4.scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
                                            }
                                            else {
                                                __Dram4.scaling = new BABYLON.Vector3(1, 1, 1);
                                            }
                                        });
                                    }
                                    if (motionController.handness === 'right') {
                                        var cymbal1_right_standardTrigger_Component_1 = motionController.getComponent(xr_ids[0]); //xr-standard-trigger
                                        cymbal1_right_standardTrigger_Component_1.onButtonStateChangedObservable.add(function () {
                                            if (cymbal1_right_standardTrigger_Component_1.pressed) {
                                                __cymbal1.scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
                                                __particle.start_mucisNoteDoubleParticle();
                                            }
                                            else {
                                                __cymbal1.scaling = new BABYLON.Vector3(1, 1, 1);
                                                __particle.stop_mucisNoteDoubleParticle();
                                            }
                                        });
                                        var cymbal2_right_squeeze_Component_1 = motionController.getComponent(xr_ids[1]); //xr-standard-squeeze
                                        cymbal2_right_squeeze_Component_1.onButtonStateChangedObservable.add(function () {
                                            if (cymbal2_right_squeeze_Component_1.pressed) {
                                                __cymbal2.scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
                                                __particle.start_starParticle();
                                                console.log("xr-standard-squeese pressed");
                                            }
                                            else {
                                                __cymbal2.scaling = new BABYLON.Vector3(1, 1, 1);
                                                __particle.stop_starParticle();
                                            }
                                        });
                                        var dram2_right_button_Component_1 = motionController.getComponent(xr_ids[3]); //a-button
                                        dram2_right_button_Component_1.onButtonStateChangedObservable.add(function () {
                                            if (dram2_right_button_Component_1.pressed) {
                                                __Dram2.scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
                                            }
                                            else {
                                                __Dram2.scaling = new BABYLON.Vector3(1, 1, 1);
                                            }
                                        });
                                        var dram1_right_button_Component_1 = motionController.getComponent(xr_ids[4]); //b-button
                                        dram1_right_button_Component_1.onButtonStateChangedObservable.add(function () {
                                            if (dram1_right_button_Component_1.pressed) {
                                                __Dram1.scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
                                            }
                                            else {
                                                __Dram1.scaling = new BABYLON.Vector3(1, 1, 1);
                                            }
                                        });
                                    }
                                });
                            });
                            return [2 /*return*/];
                    }
                });
            });
        };
        wcf();
        // ...
    };
    /**
     * Called each frame.
     */
    WebXR_VRControllerInput.prototype.onUpdate = function () {
        // ...
    };
    /**
     * Called on a message has been received and sent from a graph.
     * @param message defines the name of the message sent from the graph.
     * @param data defines the data sent in the message.
     * @param sender defines the reference to the graph class that sent the message.
     */
    WebXR_VRControllerInput.prototype.onMessage = function (name, data, sender) {
        switch (name) {
            case "myMessage":
                // Do something...
                break;
        }
    };
    __decorate([
        tools_1.fromScene("Dram0")
    ], WebXR_VRControllerInput.prototype, "_Dram0", void 0);
    __decorate([
        tools_1.fromScene("Dram1")
    ], WebXR_VRControllerInput.prototype, "_Dram1", void 0);
    __decorate([
        tools_1.fromScene("Dram2")
    ], WebXR_VRControllerInput.prototype, "_Dram2", void 0);
    __decorate([
        tools_1.fromScene("Dram3")
    ], WebXR_VRControllerInput.prototype, "_Dram3", void 0);
    __decorate([
        tools_1.fromScene("Dram4")
    ], WebXR_VRControllerInput.prototype, "_Dram4", void 0);
    __decorate([
        tools_1.fromScene("cymbal1")
    ], WebXR_VRControllerInput.prototype, "_cymbal1", void 0);
    __decorate([
        tools_1.fromScene("cymbal2")
    ], WebXR_VRControllerInput.prototype, "_cymbal2", void 0);
    __decorate([
        tools_1.fromScene("cymbal3")
    ], WebXR_VRControllerInput.prototype, "_cymbal3", void 0);
    __decorate([
        tools_1.fromScene("cymbal4")
    ], WebXR_VRControllerInput.prototype, "_cymbal4", void 0);
    __decorate([
        tools_1.fromScene("Particle")
    ], WebXR_VRControllerInput.prototype, "_particle", void 0);
    return WebXR_VRControllerInput;
}(core_1.Node));
exports.default = WebXR_VRControllerInput;
//# sourceMappingURL=WebXR_VRControllerInput.js.map