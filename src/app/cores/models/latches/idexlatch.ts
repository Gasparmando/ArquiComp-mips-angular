import { ControlRegister } from "../control-register";

export interface IDEXLatch {
    control : ControlRegister;
    pc: number;
    readData1: number;
    readData2: number;
    signExt: number;
    rs: number;
    rt: number;
    rd: number;
    shift: number;
}
