/**
 * 
 * @param header [Authorization]
 * @returns { type: 'Bearer', token: 'your token' }
 */
export const extractHeader = (header: string | undefined): { [key: string]: string; } => {
    if (!header) return { type: 'no-type', token: 'null' };
    const extractedAuth: { [key: string]: string; } =
        header?.match(/^(?<type>.+?)\s+(?<token>.+?)$/)?.groups ?? {
            type: 'none'
        };
    return extractedAuth;
};