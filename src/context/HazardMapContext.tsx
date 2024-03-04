import { createContext } from 'react';
import { VisualAssets } from '../types/types';

// interface VisualAssets {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     [key: string]: any;
// }



// export const HazardMapContext = createContext<{ visualAssets: VisualAssets }>({
//     visualAssets: {}
// });

export const HazardMapContext = createContext<VisualAssets | null>(null);
