import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeComponentAuthorFields {
    internalName: EntryFieldTypes.Symbol;
    name: EntryFieldTypes.Symbol;
    avatar?: EntryFieldTypes.AssetLink;
}

export type TypeComponentAuthorSkeleton = EntrySkeletonType<TypeComponentAuthorFields, "componentAuthor">;
export type TypeComponentAuthor<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeComponentAuthorSkeleton, Modifiers, Locales>;
export type TypeComponentAuthorWithoutLinkResolutionResponse = TypeComponentAuthor<"WITHOUT_LINK_RESOLUTION", string>;
export type TypeComponentAuthorWithoutUnresolvableLinksResponse = TypeComponentAuthor<"WITHOUT_UNRESOLVABLE_LINKS", string>;
export type TypeComponentAuthorWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentAuthor<"WITH_ALL_LOCALES", Locales>;
export type TypeComponentAuthorWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentAuthor<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeComponentAuthorWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentAuthor<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
