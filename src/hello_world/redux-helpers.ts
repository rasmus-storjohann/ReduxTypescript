export const action = <T>(type: string, payload: T): { readonly type: string, readonly payload: T } => ({ type, payload });
