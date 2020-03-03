import { ControlRegister } from "../control-register";

export interface MEMWBLatch {
    control: ControlRegister;
    pc: number;
    readData: number;
    addr: number;
    regDst: number;
    shift: number;
}
