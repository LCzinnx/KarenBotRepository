import { TAG_ID as $ } from '../common/html.js';
import type { TreeAdapter, TreeAdapterTypeMap } from '../tree-adapters/interface';
export interface StackHandler<T extends TreeAdapterTypeMap> {
    onItemPush: (node: T['parentNode'], tid: number, isTop: boolean) => void;
    onItemPop: (node: T['parentNode'], isTop: boolean) => void;
}
export declare class OpenElementStack<T extends TreeAdapterTypeMap> {
    private treeAdapter;
    private handler;
    items: T['parentNode'][];
    tagIDs: $[];
    current: T['parentNode'];
    stackTop: number;
    tmplCount: number;
    currentTagId: $;
    get currentTmplContentOrNode(): T['parentNode'];
    constructor(document: T['document'], treeAdapter: TreeAdapter<T>, handler: StackHandler<T>);
    private _indexOf;
    private _isInTemplate;
    private _updateCurrentElement;
    push(element: T['element'], tagID: $): void;
    pop(): void;
    replace(oldElement: T['element'], newElement: T['element']): void;
    insertAfter(referenceElement: T['element'], newElement: T['element'], newElementID: $): void;
    popUntilTagNamePopped(tagName: $): void;
    shortenToLength(idx: number): void;
    popUntilElementPopped(element: T['element']): void;
    private popUntilPopped;
    popUntilNumberedHeaderPopped(): void;
    popUntilTableCellPopped(): void;
    popAllUpToHtmlElement(): void;
    private _indexOfTagNames;
    private clearBackTo;
    clearBackToTableContext(): void;
    clearBackToTableBodyContext(): void;
    clearBackToTableRowContext(): void;
    remove(element: T['element']): void;
    tryPeekProperlyNestedBodyElement(): T['element'] | null;
    contains(element: T['element']): boolean;
    getCommonAncestor(element: T['element']): T['element'] | null;
    isRootHtmlElementCurrent(): boolean;
    hasInScope(tagName: $): boolean;
    hasNumberedHeaderInScope(): boolean;
    hasInListItemScope(tagName: $): boolean;
    hasInButtonScope(tagName: $): boolean;
    hasInTableScope(tagName: $): boolean;
    hasTableBodyContextInTableScope(): boolean;
    hasInSelectScope(tagName: $): boolean;
    generateImpliedEndTags(): void;
    generateImpliedEndTagsThoroughly(): void;
    generateImpliedEndTagsWithExclusion(exclusionId: $): void;
}
//# sourceMappingURL=open-element-stack.d.ts.map