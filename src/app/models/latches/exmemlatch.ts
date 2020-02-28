import { ControlRegister } from "../control-register";

export interface EXMEMLatch {
    control: ControlRegister;
    pc: number;
    aluResult: number;
    wrData: number;
    regDst: number;
    shift: number;

}
