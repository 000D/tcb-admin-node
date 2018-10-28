import { QueryCommmand } from '../commands/query';
import { LogicCommand } from '../commands/logic';
export declare type IQueryCondition = Record<string, any> | LogicCommand;
export declare class QuerySerializer {
    private constructor();
    static encode(query: IQueryCondition | QueryCommmand | LogicCommand): IQueryCondition;
}
