export enum Services {
    AWS = 'amazon-web-services',
    MarketingAutomationEventQueue = 'marketing-automation-event-queue',
    SalesService = 'sales-service',
}

export function log(value: any) {
    console.log(value);
}

export function injectDebugger() {
    debugger;
}

export function isSelfCompare(value) {
    return value === value;
}

var shadowMe = () => {};

export function setShadow(func: Function) {
    shadowMe = func;
}
