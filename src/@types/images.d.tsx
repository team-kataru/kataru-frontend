// declaration file for images so TypeScript can recognize and type-check them

// Treat all .png files as modules with a default export
declare module "*.png" {
  const value: any;
  export default value;
}
