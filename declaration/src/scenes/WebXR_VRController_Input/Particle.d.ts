import { Node } from "@babylonjs/core";
export default class ParticleComponent extends Node {
    /**
     * Override constructor.
     * @warn do not fill.
     */
    protected constructor();
    /**
     * Called on the node is being initialized.
     * This function is called immediatly after the constructor has been called.
     */
    onInitialize(): void;
    /**
     * Called on the scene starts.
     */
    onStart(): void;
    /**
     * Called each frame.
     */
    onUpdate(): void;
    /**
     * Called on a message has been received and sent from a graph.
     * @param message defines the name of the message sent from the graph.
     * @param data defines the data sent in the message.
     * @param sender defines the reference to the graph class that sent the message.
     */
    onMessage(name: string, data: any, sender: any): void;
    start_starParticle(): void;
    stop_starParticle(): void;
    start_mucisNoteParticle(): void;
    stop_mucisNoteParticle(): void;
    start_mucisNoteDoubleParticle(): void;
    stop_mucisNoteDoubleParticle(): void;
    start_lineParticle(): void;
    stop_lineParticle(): void;
}
