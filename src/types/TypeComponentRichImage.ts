import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeComponentRichImageFields {
    internalName: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.AssetLink;
    caption?: EntryFieldTypes.Symbol;
    fullWidth?: EntryFieldTypes.Boolean;
}

export type TypeComponentRichImageSkeleton = EntrySkeletonType<TypeComponentRichImageFields, "componentRichImage">;
export type TypeComponentRichImage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeComponentRichImageSkeleton, Modifiers, Locales>;
export type TypeComponentRichImageWithoutLinkResolutionResponse = TypeComponentRichImage<"WITHOUT_LINK_RESOLUTION", string>;
export type TypeComponentRichImageWithoutUnresolvableLinksResponse = TypeComponentRichImage<"WITHOUT_UNRESOLVABLE_LINKS", string>;
export type TypeComponentRichImageWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentRichImage<"WITH_ALL_LOCALES", Locales>;
export type TypeComponentRichImageWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentRichImage<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeComponentRichImageWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeComponentRichImage<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
