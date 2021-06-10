import { Node } from "@babylonjs/core";
import * as BABYLON from "@babylonjs/core/Legacy/legacy";
import {MeshBuilder,Vector3,Mesh} from "@babylonjs/core";
import { fromScene } from "../tools";

import ParticleComponent from "./ParticleComponent"
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
export default class WebXR_VRControllerInput extends Node {
    @fromScene("Dram0")
    _Dram0 :Mesh;

    @fromScene("Dram1")
    _Dram1 :Mesh;
    
    @fromScene("Dram2")
    _Dram2 :Mesh;

    @fromScene("Dram3")
    _Dram3 :Mesh;

    @fromScene("Dram4")
    _Dram4 :Mesh;

    @fromScene("cymbal1")
    _cymbal1 :Mesh;

    @fromScene("cymbal2")
    _cymbal2 :Mesh;

    @fromScene("cymbal3")
    _cymbal3 :Mesh;

    @fromScene("cymbal4")
    _cymbal4 :Mesh;

    @fromScene("ParticleComponent")
    _particle : ParticleComponent;
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
        let __scene = this._scene;
        let __Dram0 = this._Dram0;
        let __Dram1 = this._Dram1;
        let __Dram2 = this._Dram2;
        let __Dram3 = this._Dram3;
        let __Dram4 = this._Dram4;
        let __cymbal1 = this._cymbal1;
        let __cymbal2 = this._cymbal2;
        let __cymbal3 = this._cymbal3;
        let __cymbal4 = this._cymbal4;
        let __particle= this._particle;

        let light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), this._scene);
        light.intensity = 0.7;

        let wcf =async function WebXRConfigration():Promise<void>{
            const env = __scene.createDefaultEnvironment();
            let xr = await __scene.createDefaultXRExperienceAsync({
                   floorMeshes: [env.ground]
            });

            //changed position when WebXR immersive-vr mode is active. 
            xr.baseExperience.camera.position.set(-3.8, 2, 11);



            /* avoid low performance thanks for @ninisan_drumath */
            

            __scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline("ssao", __scene.activeCamera);
            __scene.postProcessRenderPipelineManager.supportedPipelines.forEach(pp=>{
                __scene.postProcessRenderPipelineManager.detachCamerasFromRenderPipeline(
                    pp.name,
                    __scene.activeCamera
                );
           });
           

           xr.input.onControllerAddedObservable.add((controller) => {
                controller.onMotionControllerInitObservable.add((motionController) => {
                    const xr_ids = motionController.getComponentIds();
                    if (motionController.handness === 'left') {
                        let cymbal4_left_standardTrigger_Component = motionController.getComponent(xr_ids[0]);//xr-standard-trigger
                        cymbal4_left_standardTrigger_Component.onButtonStateChangedObservable.add(() => {
                            if (cymbal4_left_standardTrigger_Component.pressed) {
                                __cymbal4.scaling= new BABYLON.Vector3(1.2,1.2,1.2);
                                __particle.start_lineParticle();

                            }else{
                                __cymbal4.scaling= new BABYLON.Vector3(1,1,1);
                                __particle.stop_lineParticle();
                            }
                        });
                        let cymbal3_left_squeeze_Component = motionController.getComponent(xr_ids[1]);//xr-standard-squeeze
                        cymbal3_left_squeeze_Component.onButtonStateChangedObservable.add(() => {
                            if (cymbal3_left_squeeze_Component.pressed) {
                                __cymbal3.scaling= new BABYLON.Vector3(1.2,1.2,1.2);
                                __particle.start_mucisNoteParticle();
                            }else{
                                __cymbal3.scaling= new BABYLON.Vector3(1,1,1);
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
                        let dram3_left_button_Component = motionController.getComponent(xr_ids[3]);//x-button
                        dram3_left_button_Component.onButtonStateChangedObservable.add(() => {
                            if (dram3_left_button_Component.pressed) {
                                __Dram3.scaling= new BABYLON.Vector3(1.2,1.2,1.2);
                            }else{
                                __Dram3.scaling= new BABYLON.Vector3(1,1,1);
                            }
                        });
                        let dram4_left_button_Component = motionController.getComponent(xr_ids[4]);//y-button
                        dram4_left_button_Component.onButtonStateChangedObservable.add(() => {
                            if (dram4_left_button_Component.pressed) {
                                __Dram4.scaling= new BABYLON.Vector3(1.2,1.2,1.2);
                            }else{
                                __Dram4.scaling= new BABYLON.Vector3(1,1,1);
                            }
                        });
                    }
                    if (motionController.handness === 'right') {
                        let cymbal1_right_standardTrigger_Component = motionController.getComponent(xr_ids[0]);//xr-standard-trigger
                        cymbal1_right_standardTrigger_Component.onButtonStateChangedObservable.add(() => {
                            if (cymbal1_right_standardTrigger_Component.pressed) {
                                __cymbal1.scaling= new BABYLON.Vector3(1.2,1.2,1.2);
                                __particle.start_mucisNoteDoubleParticle();
                               
                            }else{
                                __cymbal1.scaling= new BABYLON.Vector3(1,1,1);
                                __particle.stop_mucisNoteDoubleParticle();
                               
                            }
                        });
                        let cymbal2_right_squeeze_Component = motionController.getComponent(xr_ids[1]);//xr-standard-squeeze
                        cymbal2_right_squeeze_Component.onButtonStateChangedObservable.add(() => {
                            if (cymbal2_right_squeeze_Component.pressed) {
                                __cymbal2.scaling= new BABYLON.Vector3(1.2,1.2,1.2);
                                __particle.start_starParticle();
                                console.log("xr-standard-squeese pressed");
                            }else{
                                __cymbal2.scaling= new BABYLON.Vector3(1,1,1);
                                __particle.stop_starParticle();
                                
                            }
                        });
                        let dram2_right_button_Component = motionController.getComponent(xr_ids[3]);//a-button
                        dram2_right_button_Component.onButtonStateChangedObservable.add(() => {
                            if (dram2_right_button_Component.pressed) {
                                __Dram2.scaling= new BABYLON.Vector3(1.2,1.2,1.2);
                               
                               
                            }else{
                                __Dram2.scaling= new BABYLON.Vector3(1,1,1);
                                
                            }
                        });
                        let dram1_right_button_Component = motionController.getComponent(xr_ids[4]);//b-button
                        dram1_right_button_Component.onButtonStateChangedObservable.add(() => {
                            if (dram1_right_button_Component.pressed) {
                                __Dram1.scaling= new BABYLON.Vector3(1.2,1.2,1.2);
                            }else{
                                __Dram1.scaling= new BABYLON.Vector3(1,1,1);
                            }
                        });


                    }
                })
           });

        }
        wcf();
        // ...
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
}
