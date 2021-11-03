
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class OrganizationInput {
    name?: Nullable<string>;
    location?: Nullable<string>;
    phoneNo?: Nullable<number>;
}

export class WorkerInput {
    name?: Nullable<string>;
    organization?: Nullable<string>;
    age?: Nullable<number>;
    gender?: Nullable<string>;
}

export abstract class IMutation {
    abstract createOrganization(organizationInput: OrganizationInput): Nullable<OrganizationOutput> | Promise<Nullable<OrganizationOutput>>;

    abstract updateOrganization(name: string, organizationInput: OrganizationInput): Nullable<OrganizationOutput> | Promise<Nullable<OrganizationOutput>>;

    abstract deleteOrganization(name: string): Nullable<OrganizationOutput> | Promise<Nullable<OrganizationOutput>>;

    abstract createWorker(workerInput: WorkerInput): Nullable<WorkerOutput> | Promise<Nullable<WorkerOutput>>;

    abstract updateWorker(name: string, workerInput: WorkerInput): Nullable<WorkerOutput> | Promise<Nullable<WorkerOutput>>;

    abstract deleteWorker(name: string): Nullable<WorkerOutput> | Promise<Nullable<WorkerOutput>>;
}

export class OrganizationOutput {
    name?: Nullable<string>;
    location?: Nullable<string>;
    phoneNo?: Nullable<number>;
    workers?: Nullable<Nullable<WorkerOutput>[]>;
}

export abstract class IQuery {
    abstract organizations(): Nullable<Nullable<OrganizationOutput>[]> | Promise<Nullable<Nullable<OrganizationOutput>[]>>;

    abstract organization(name: string): Nullable<OrganizationOutput> | Promise<Nullable<OrganizationOutput>>;

    abstract workers(): Nullable<Nullable<WorkerOutput>[]> | Promise<Nullable<Nullable<WorkerOutput>[]>>;

    abstract worker(name: string): Nullable<WorkerOutput> | Promise<Nullable<WorkerOutput>>;
}

export class WorkerOutput {
    name?: Nullable<string>;
    organization?: Nullable<string>;
    age?: Nullable<number>;
    gender?: Nullable<string>;
}

type Nullable<T> = T | null;
