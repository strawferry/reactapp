



const TEST = 'TEST';

export const homeAction = {
    TEST,
};

export function setTest(str) {
    return {
        type: homeAction.TEST,
        test: str
    };
}



