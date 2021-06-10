import { Node } from "@babylonjs/core";
import * as BABYLON from "@babylonjs/core/Legacy/legacy";
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

 let starParticleSystem;
 let musicNoteParticleSystem;
 let musicNoteDoubleParticleSystem;
 let lineParticleSystem;
export default class ParticleComponent extends Node {
    /**
     * Override constructor.
     * @warn do not fill.
     */
    // @ts-ignore ignoring the super call as we don't want to re-init
    protected constructor() { }

    /**
     * Called on the node is being initialized.
     * This function is called immediatly after the constructor has been called.
     */
    public onInitialize(): void {
        // ...
    }

    /**
     * Called on the scene starts.
     */
     public onStart(): void {
        starParticleSystem =  new BABYLON.ParticleSystem("particles", 200, this._scene);
        starParticleSystem.particleTexture = new BABYLON.Texture("../../../../scenes/WebXR_VRController_Input/files/star.png",this._scene);
        starParticleSystem.emitter = new BABYLON.Vector3(-1, 2.2, 6.95);
        starParticleSystem.minLifeTime = 0.2;
        starParticleSystem.maxLifeTime = 1;

        musicNoteParticleSystem =  new BABYLON.ParticleSystem("particles", 200, this._scene);
        musicNoteParticleSystem.particleTexture = new BABYLON.Texture("../../../../scenes/WebXR_VRController_Input/files/music_note.png",this._scene);
        musicNoteParticleSystem.emitter = new BABYLON.Vector3(-4, 2.2, -6.95);
        musicNoteParticleSystem.minLifeTime = 0.2;
        musicNoteParticleSystem.maxLifeTime = 1;

        musicNoteDoubleParticleSystem =  new BABYLON.ParticleSystem("particles", 200, this._scene);
        musicNoteDoubleParticleSystem.particleTexture = new BABYLON.Texture("../../../../scenes/WebXR_VRController_Input/files/music_notes.png",this._scene);
        musicNoteDoubleParticleSystem.emitter = new BABYLON.Vector3(-4, 2.2, 6.95);
        musicNoteDoubleParticleSystem.minLifeTime = 0.2;
        musicNoteDoubleParticleSystem.maxLifeTime = 1;

        lineParticleSystem =  new BABYLON.ParticleSystem("particles", 200, this._scene);
        lineParticleSystem.particleTexture = new BABYLON.Texture("../../../../scenes/WebXR_VRController_Input/files/line.png",this._scene);
        lineParticleSystem.emitter = new BABYLON.Vector3(-4, 2.2, -2.95);
        lineParticleSystem.minLifeTime = 0.2;
        lineParticleSystem.maxLifeTime = 1;


    }

    /**
     * Called each frame.
     */
    public onUpdate(): void {
        // ...
    }

    /**
     * Called on a message has been received and sent from a graph.
     * @param message defines the name of the message sent from the graph.
     * @param data defines the data sent in the message.
     * @param sender defines the reference to the graph class that sent the message.
     */
    public onMessage(name: string, data: any, sender: any): void {
        switch (name) {
            case "myMessage":
                // Do something...
                break;
        }
    }

    public start_starParticle():void{
        starParticleSystem.start();
    }

    public stop_starParticle():void{
        starParticleSystem.stop();
    }

    public start_mucisNoteParticle():void{
        musicNoteParticleSystem.start();
    }

    public stop_mucisNoteParticle():void{
        musicNoteParticleSystem.stop();
    }


    public start_mucisNoteDoubleParticle():void{
        musicNoteDoubleParticleSystem.start();
    }

    public stop_mucisNoteDoubleParticle():void{
        musicNoteDoubleParticleSystem.stop();
    }


    public start_lineParticle():void{
        lineParticleSystem.start();
    }

    public stop_lineParticle():void{
        lineParticleSystem.stop();
    }
}
