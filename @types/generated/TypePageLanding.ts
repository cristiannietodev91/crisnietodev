import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeComponentSeoSkeleton } from "./TypeComponentSeo";
import type { TypePageBlogPostSkeleton } from "./TypePageBlogPost";

export interface TypePageLandingFields {
    internalName: EntryFieldTypes.Symbol;
    seoFields?: EntryFieldTypes.EntryLink<TypeComponentSeoSkeleton>;
    featuredBlogPost?: EntryFieldTypes.EntryLink<TypePageBlogPostSkeleton>;
}

export type TypePageLandingSkeleton = EntrySkeletonType<TypePageLandingFields, "pageLanding">;
export type TypePageLanding<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePageLandingSkeleton, Modifiers, Locales>;
export type TypePageLandingWithoutLinkResolutionResponse = TypePageLanding<"WITHOUT_LINK_RESOLUTION">;
export type TypePageLandingWithoutUnresolvableLinksResponse = TypePageLanding<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypePageLandingWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypePageLanding<"WITH_ALL_LOCALES", Locales>;
export type TypePageLandingWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypePageLanding<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypePageLandingWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypePageLanding<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
