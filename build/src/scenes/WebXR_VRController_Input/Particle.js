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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@babylonjs/core");
var BABYLON = require("@babylonjs/core/Legacy/legacy");
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
var starParticleSystem;
var musicNoteParticleSystem;
var musicNoteDoubleParticleSystem;
var lineParticleSystem;
var ParticleComponent = /** @class */ (function (_super) {
    __extends(ParticleComponent, _super);
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    function ParticleComponent() {
        var _this = this;
        return _this;
    }
    /**
     * Called on the node is being initialized.
     * This function is called immediatly after the constructor has been called.
     */
    ParticleComponent.prototype.onInitialize = function () {
        // ...
    };
    /**
     * Called on the scene starts.
     */
    ParticleComponent.prototype.onStart = function () {
        starParticleSystem = new BABYLON.ParticleSystem("particles", 200, this._scene);
        starParticleSystem.particleTexture = new BABYLON.Texture("../../../../scenes/dramset/files/star.png", this._scene);
        starParticleSystem.emitter = new BABYLON.Vector3(1, 2.2, 6.95);
        starParticleSystem.minLifeTime = 0.2;
        starParticleSystem.maxLifeTime = 1;
        musicNoteParticleSystem = new BABYLON.ParticleSystem("particles", 200, this._scene);
        musicNoteParticleSystem.particleTexture = new BABYLON.Texture("../../../../scenes/dramset/files/music_note.png", this._scene);
        musicNoteParticleSystem.emitter = new BABYLON.Vector3(-4, 2.2, -6.95);
        musicNoteParticleSystem.minLifeTime = 0.2;
        musicNoteParticleSystem.maxLifeTime = 1;
        musicNoteDoubleParticleSystem = new BABYLON.ParticleSystem("particles", 200, this._scene);
        musicNoteDoubleParticleSystem.particleTexture = new BABYLON.Texture("../../../../scenes/dramset/files/music_notes.png", this._scene);
        musicNoteDoubleParticleSystem.emitter = new BABYLON.Vector3(-1, 2.2, 6.95);
        musicNoteDoubleParticleSystem.minLifeTime = 0.2;
        musicNoteDoubleParticleSystem.maxLifeTime = 1;
        lineParticleSystem = new BABYLON.ParticleSystem("particles", 200, this._scene);
        lineParticleSystem.particleTexture = new BABYLON.Texture("../../../../scenes/dramset/files/line.png", this._scene);
        lineParticleSystem.emitter = new BABYLON.Vector3(4, 2.2, -6.95);
        lineParticleSystem.minLifeTime = 0.2;
        lineParticleSystem.maxLifeTime = 1;
    };
    /**
     * Called each frame.
     */
    ParticleComponent.prototype.onUpdate = function () {
        // ...
    };
    /**
     * Called on a message has been received and sent from a graph.
     * @param message defines the name of the message sent from the graph.
     * @param data defines the data sent in the message.
     * @param sender defines the reference to the graph class that sent the message.
     */
    ParticleComponent.prototype.onMessage = function (name, data, sender) {
        switch (name) {
            case "myMessage":
                // Do something...
                break;
        }
    };
    ParticleComponent.prototype.start_starParticle = function () {
        starParticleSystem.start();
    };
    ParticleComponent.prototype.stop_starParticle = function () {
        starParticleSystem.stop();
    };
    ParticleComponent.prototype.start_mucisNoteParticle = function () {
        musicNoteParticleSystem.start();
    };
    ParticleComponent.prototype.stop_mucisNoteParticle = function () {
        musicNoteParticleSystem.stop();
    };
    ParticleComponent.prototype.start_mucisNoteDoubleParticle = function () {
        musicNoteDoubleParticleSystem.start();
    };
    ParticleComponent.prototype.stop_mucisNoteDoubleParticle = function () {
        musicNoteDoubleParticleSystem.stop();
    };
    ParticleComponent.prototype.start_lineParticle = function () {
        lineParticleSystem.start();
    };
    ParticleComponent.prototype.stop_lineParticle = function () {
        lineParticleSystem.stop();
    };
    return ParticleComponent;
}(core_1.Node));
exports.default = ParticleComponent;
//# sourceMappingURL=Particle.js.map