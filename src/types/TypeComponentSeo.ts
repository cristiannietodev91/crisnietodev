import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeComponentSeoFields {
    internalName: EntryFieldTypes.Symbol;
    pageTitle: EntryFieldTypes.Symbol;
    pageDescription?: EntryFieldTypes.Text;
    canonicalUrl?: EntryFieldTypes.Symbol;
    nofollow: EntryFieldTypes.Boolean;
    noindex: EntryFieldTypes.Boolean;
    shareImages?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type TypeComponentSeoSkeleton = EntrySkeletonType<TypeComponentSeoFields, "componentSeo">;
export type TypeComponentSeo<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeComponentSeoSkeleton, Modifiers, Locales>;
export type TypeComponentSeoWithoutLinkResolutionResponse = TypeComponentSeo<"WITHOUT_LINK_RESOLUTION", string>;
export type TypeComponentSeoWithoutUnresolvableLinksResponse = TypeComponentSeo<"WITHOUT_UNRESOLVABLE_LINKS", string>;
export type TypeComponentSeoWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentSeo<"WITH_ALL_LOCALES", Locales>;
export type TypeComponentSeoWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentSeo<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeComponentSeoWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentSeo<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
