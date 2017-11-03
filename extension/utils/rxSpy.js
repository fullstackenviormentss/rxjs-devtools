export function get() {
    return window.parent.rxSpy;
}

export function exists() {
    return this.exists() !== undefined;
}