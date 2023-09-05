// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type ProfiledaanDocumentDataSlicesSlice = TestSliceSlice;

/**
 * Content for ProfileDaan documents
 */
interface ProfiledaanDocumentData {
  /**
   * nametext2 field in *ProfileDaan*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: profiledaan.nametext2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  nametext2: prismic.RichTextField;

  /**
   * mainimage field in *ProfileDaan*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: profiledaan.mainimage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  mainimage: prismic.ImageField<never>;

  /**
   * Slice Zone field in *ProfileDaan*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: profiledaan.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProfiledaanDocumentDataSlicesSlice>
  /**
   * Meta Description field in *ProfileDaan*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: profiledaan.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *ProfileDaan*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: profiledaan.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *ProfileDaan*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: profiledaan.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * ProfileDaan document from Prismic
 *
 * - **API ID**: `profiledaan`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProfiledaanDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ProfiledaanDocumentData>,
    "profiledaan",
    Lang
  >;

export type AllDocumentTypes = ProfiledaanDocument;

/**
 * Default variation for TestSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *TestSlice*
 */
type TestSliceSliceVariation = TestSliceSliceDefault;

/**
 * TestSlice Shared Slice
 *
 * - **API ID**: `test_slice`
 * - **Description**: TestSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestSliceSlice = prismic.SharedSlice<
  "test_slice",
  TestSliceSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ProfiledaanDocument,
      ProfiledaanDocumentData,
      ProfiledaanDocumentDataSlicesSlice,
      AllDocumentTypes,
      TestSliceSlice,
      TestSliceSliceVariation,
      TestSliceSliceDefault,
    };
  }
}
