export const action = <T>(type: string, payload: T): { type: string, payload: T } => ({ type, payload });
