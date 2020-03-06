export const Opcodes = {
    TIPOR: '000000',
    ADDI: '001000',
    ANDI: '001100',
    BEQ: '000100',
    BNE: '000101',
    LB: '100000',
    LBU: '100100',
    LH: '100001',
    LHU: '100101',
    LUI: '001111',
    LW: '100011',
    LWU: '100111',
    ORI: '001101',
    SB: '101000',
    SH: '101001',
    SLTI: '001010',
    SW: '101011',
    XORI: '001110',
    J: '000010',
    JAL: '000011',
    JR: '001000',
    JALR: '001001',
    NOP: '111110'
}

export const TypeR = [
    'SLL', 'SRL', 'SRA', 'SLLV', 'SRLV', 'SRAV', 'ADDU',
    'SUBU', 'AND', 'OR', 'XOR', 'NOR', 'SLT'
]

export const TypeI = [
    'LB', 'LH', 'LW', 'LBU', 'LHU', 'LWU', 'SB', 'SH', 'SW', 'ADDI', 'ANDI', 'ORI',
    'XORI', 'LUI', 'SLTI', 'BEQ', 'BNE'
]

export const TypeJ = [
    'J', 'JAL'
]
