export interface ControlRegister {
    memToReg: boolean;
    regWrite: boolean;
    memWrite: boolean;
    memRead: boolean;
    branchEq: boolean;
    aluSrc: boolean;
    regDst: boolean;
    funct: boolean[];
    trunk: boolean[];
    signed: boolean;
    shift: boolean;
    branchNE: boolean;
    jump: boolean;
    linkR: boolean;

}
