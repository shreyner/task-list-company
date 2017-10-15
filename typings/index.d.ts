declare module "*.scss" {
    const a: {[index: string]: string};
    export default a;
}

declare module "*.pug" {
    const a: (b?: any) => string;
    export default a;
}
