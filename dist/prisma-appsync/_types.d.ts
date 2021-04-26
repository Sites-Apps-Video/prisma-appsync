import { PrismaClient } from '@prisma/client';
import { AuthModes, Operations, AuthActions } from './_constants';
export declare type ExperimentalOptions = {
    dateTimeFieldsRegex?: RegExp | boolean;
};
export declare type CustomPrismaClientOptions = {
    connectionUrl: string;
    debug?: boolean;
};
export declare type Options = {
    connectionUrl: string;
    debug?: boolean;
    sanitize?: boolean;
    experimental?: ExperimentalOptions;
};
export declare type PrivateOptions = {
    customResolvers: any;
    connectionUrl: string;
    debug: boolean;
    sanitize: boolean;
    prisma: PrismaClient;
    experimental?: ExperimentalOptions;
};
export declare type AdapterOptions = {
    customResolvers?: any;
    debug?: boolean;
    sanitize?: boolean;
};
export declare type CustomResolverProps = {
    args?: RequestProps;
    authIdentity?: AuthIdentityProps;
};
export declare type RequestProps = {
    data?: any;
    select?: any;
    include?: any;
    where?: any;
    orderBy?: any;
    [key: string]: any;
};
export declare type BeforeResolveProps = {
    authIdentity: AuthIdentityProps;
    operation: Operation;
    subject: string;
    fields: string[];
    requestSetPaths: any;
    args: RequestProps;
};
export declare type AfterResolveProps = {
    authIdentity: AuthIdentityProps;
    operation: Operation;
    subject: string;
    fields: string[];
    requestSetPaths: any;
    args: RequestProps;
    result: any;
};
export declare type AuthType = typeof AuthModes[keyof typeof AuthModes];
export declare type Operation = typeof Operations[keyof typeof Operations];
export declare type AuthAction = typeof AuthActions[keyof typeof AuthActions];
export declare type AuthIdentityProps = {
    authorization: AuthType;
    [key: string]: any;
};
export declare type AuthRule = {
    action: AuthAction | AuthAction[];
    subject: string | string[];
    fields?: string[];
    condition?: any | any[];
    reason?: string;
};
export declare type CaslRule = {
    type: 'allow' | 'deny';
    action: AuthAction;
    subject: string;
    fields?: string[];
    condition?: any;
    reason?: string;
};
export declare type CaslAbilityResult = {
    canProceed: boolean;
    reason?: string;
};
