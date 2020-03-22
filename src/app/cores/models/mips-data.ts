import { ControlRegister } from "./control-register";
import { IFIDLatch } from "./latches/IFIDLatch";
import { IDEXLatch } from "./latches/IDEXLatch";
import { EXMEMLatch } from "./latches/EXMEMLatch";

import { MEMWBLatch } from "./latches/MEMWBLatch";
import { ForwardingUnit } from "./forwarding-unit";
import { HazardDetectionUnit } from "./hazard-detection-unit";



export interface MipsData {
    pc: number;
    pcNext: number;
    iteration: number;
    Regs: number[];
    DataMemory: number[];
    ProgramMemory: number[];
    IFID : IFIDLatch;
    IDEX: IDEXLatch;
    EXMEM: EXMEMLatch;
    MEMWB: MEMWBLatch;

    forwarding: ForwardingUnit;
    hazard: HazardDetectionUnit;


}
