import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Size {
    thickness: bigint;
    length: bigint;
    width: bigint;
}
export interface Product {
    name: string;
    origin: string;
    description: string;
    sizes: Array<Size>;
    finishes: Array<Finish>;
    category: Category;
}
export interface CompanyInfo {
    name: string;
    email: string;
    website: string;
    address: string;
    phone: string;
}
export enum Category {
    granite = "granite",
    marble = "marble",
    exotic = "exotic"
}
export enum Finish {
    honed = "honed",
    flamed = "flamed",
    bushHammered = "bushHammered",
    leathered = "leathered",
    sandblasted = "sandblasted",
    polished = "polished"
}
export interface backendInterface {
    addProduct(product: Product): Promise<void>;
    getCompanyInfo(): Promise<CompanyInfo>;
    getProduct(name: string): Promise<Product>;
    getProductsByCategory(cat: Category): Promise<Array<Product>>;
}
