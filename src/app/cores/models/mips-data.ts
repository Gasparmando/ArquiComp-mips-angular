import { ForwardingUnit } from "./forwarding-unit";
import { HazardDetectionUnit } from "./hazard-detection-unit";
import { EXMEMLatch } from './latches/exmemlatch';
import { IDEXLatch } from './latches/idexlatch';
import { IFIDLatch } from './latches/ifidlatch';
import { MEMWBLatch } from './latches/memwblatch';




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
