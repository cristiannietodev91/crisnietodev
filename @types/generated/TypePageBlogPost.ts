import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeComponentAuthorSkeleton } from "./TypeComponentAuthor";
import type { TypeComponentSeoSkeleton } from "./TypeComponentSeo";

export interface TypePageBlogPostFields {
    internalName: EntryFieldTypes.Symbol;
    seoFields?: EntryFieldTypes.EntryLink<TypeComponentSeoSkeleton>;
    slug: EntryFieldTypes.Symbol;
    author?: EntryFieldTypes.EntryLink<TypeComponentAuthorSkeleton>;
    publishedDate: EntryFieldTypes.Date;
    title: EntryFieldTypes.Symbol;
    shortDescription?: EntryFieldTypes.Text;
    featuredImage: EntryFieldTypes.AssetLink;
    content: EntryFieldTypes.RichText;
    relatedBlogPosts?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePageBlogPostSkeleton>>;
}

export type TypePageBlogPostSkeleton = EntrySkeletonType<TypePageBlogPostFields, "pageBlogPost">;
export type TypePageBlogPost<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePageBlogPostSkeleton, Modifiers, Locales>;
export type TypePageBlogPostWithoutLinkResolutionResponse = TypePageBlogPost<"WITHOUT_LINK_RESOLUTION", string>;
export type TypePageBlogPostWithoutUnresolvableLinksResponse = TypePageBlogPost<"WITHOUT_UNRESOLVABLE_LINKS", string>;
export type TypePageBlogPostWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypePageBlogPost<"WITH_ALL_LOCALES", Locales>;
export type TypePageBlogPostWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypePageBlogPost<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypePageBlogPostWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypePageBlogPost<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;