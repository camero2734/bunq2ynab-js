/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AdditionalInformation {
  /** The category of the refund, required for chargeback. */
  category?: string;
  /** The reason to refund, required for chargeback. */
  reason?: string;
  /** Comment about the refund. */
  comment?: string;
  /** The Attachments to attach to the refund request. */
  attachment?: AttachmentMasterCardActionRefund[];
  /** Proof that the user acknowledged the terms and conditions for chargebacks. */
  terms_and_conditions?: string;
}

export interface AdditionalTransactionInformationCategory {
  /** The category. */
  category?: string;
  /** Who created this category. */
  type?: string;
  /** Whether this category is active. Only relevant for user-defined categories. */
  status?: string;
  /** The sort order of the category. */
  order?: number;
  /** The description of the category. */
  description?: string;
  /** The translation of the description of the category. */
  description_translated?: string;
  /** The color of the category. */
  color?: string;
  /** The icon of the category. */
  icon?: string;
}

export interface AdditionalTransactionInformationCategoryListing {
  /** The category. */
  category?: string;
  /** Who created this category. */
  type?: string;
  /** Whether this category is active. Only relevant for user-defined categories. */
  status?: string;
  /** The sort order of the category. */
  order?: number;
  /** The description of the category. */
  description?: string;
  /** The translation of the description of the category. */
  description_translated?: string;
  /** The color of the category. */
  color?: string;
  /** The icon of the category. */
  icon?: string;
}

export interface AdditionalTransactionInformationCategoryUserDefined {
  /** The category. */
  category?: string;
  /** Whether this category is active. Only relevant for user-defined categories. */
  status: string;
  /** The description of the category. */
  description?: string;
  /** The color of the category. */
  color?: string;
  /** The icon of the category. */
  icon?: string;
}

export interface AdditionalTransactionInformationCategoryUserDefinedCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface Address {
  /** The street. */
  street?: string;
  /** The house number. */
  house_number?: string;
  /** The PO box. */
  po_box?: string;
  /** The postal code. */
  postal_code?: string;
  /** The city. */
  city?: string;
  /** The country as an ISO 3166-1 alpha-2 country code. */
  country?: string;
  /** The apartment, building or other extra information for addresses. */
  extra?: string;
  /** The name on the mailbox (only used for Postal addresses). */
  mailbox_name?: string;
  /** The province according to local standard. */
  province?: string;
  /** To show whether user created or updated her address for app event listing. */
  is_user_address_updated?: boolean;
}

export interface Amount {
  /** The amount formatted to two decimal places. */
  value?: string;
  /** The currency of the amount. It is an ISO 4217 formatted currency code. */
  currency?: string;
}

export interface Attachment {
  /** The description of the attachment. */
  description?: string;
  /** The content type of the attachment's file. */
  content_type?: string;
  /** The URLs where the file can be downloaded. */
  urls?: AttachmentUrl[];
}

export type AttachmentConversationContentListing = object;

export interface AttachmentMasterCardActionRefund {
  /** The id of the attached Attachment. */
  id?: number;
}

export type AttachmentMonetaryAccount = object;

export type AttachmentMonetaryAccountContentListing = object;

export interface AttachmentMonetaryAccountCreate {
  /** The ID of the attachment created. */
  id?: number;
}

export interface AttachmentMonetaryAccountPayment {
  /** The id of the attached Attachment. */
  id?: number;
  /** The id of the MonetaryAccount this Attachment is attached from. */
  monetary_account_id?: number;
}

export type AttachmentPublic = object;

export type AttachmentPublicContentListing = object;

export interface AttachmentPublicCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface AttachmentPublicRead {
  /** The UUID of the attachment. */
  uuid?: string;
  /** The timestamp of the attachment's creation. */
  created?: string;
  /** The timestamp of the attachment's last update. */
  updated?: string;
  /** The attachment. */
  attachment?: Attachment;
}

export interface AttachmentUrl {
  /** The file type of attachment. */
  type?: string;
  /** The URL where the attachment can be downloaded. */
  url?: string;
}

export type AttachmentUserContentListing = object;

export interface AttachmentUserRead {
  /** The id of the attachment. */
  id?: number;
  /** The timestamp of the attachment's creation. */
  created?: string;
  /** The timestamp of the attachment's last update. */
  updated?: string;
  /** The attachment. */
  attachment?: Attachment;
}

export interface Avatar {
  /** The public UUID of the avatar. */
  uuid?: string;
  /** The public UUID of object this avatar is anchored to. */
  anchor_uuid?: string;
  /** The actual image information of this avatar. */
  image?: Image[];
  /** The style (if applicable) for this Avatar. */
  style?: string;
}

export interface AvatarCreate {
  /** The UUID of the created avatar. */
  uuid?: string;
}

export interface AvatarRead {
  /** The UUID of the created avatar. */
  uuid?: string;
  /** The content type of the image. */
  image?: Image[];
}

export interface BankSwitchServiceNetherlandsIncoming {
  /** The label of the monetary of this switch service. */
  alias?: LabelMonetaryAccount;
  /** The IBAN alias that's displayed for this switch service. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The status of the switch service. */
  status?: string;
  /** The label of the user creator of this switch service. */
  user_alias?: LabelUser;
  /** The sub status of the switch service. */
  sub_status?: string;
  /** The timestamp when the switch service desired to be start. */
  time_start_desired?: string;
  /** The timestamp when the switch service actually starts. */
  time_start_actual?: string;
  /** The timestamp when the switch service ends. */
  time_end?: string;
  /** Reference to the bank transfer form for this switch-service. */
  attachment?: Attachment;
}

export interface BankSwitchServiceNetherlandsIncomingPayment {
  /** The bank switch service details. */
  bank_switch_service?: BankSwitchServiceNetherlandsIncoming;
  /** The payment made using bank switch service. */
  payment?: Payment;
}

export interface BankSwitchServiceNetherlandsIncomingPaymentRead {
  /** The bank switch service details. */
  bank_switch_service?: BankSwitchServiceNetherlandsIncoming;
  /** The payment made using bank switch service. */
  payment?: Payment;
}

export interface BillingContractSubscription {
  /** The subscription type of the user. Can be one of PERSON_SUPER_LIGHT_V1, PERSON_LIGHT_V1, PERSON_MORE_V1, PERSON_FREE_V1, PERSON_PREMIUM_V1, COMPANY_V1, or COMPANY_V2. */
  subscription_type?: string;
  /** The id of the billing contract. */
  id?: number;
  /** The timestamp when the billing contract was made. */
  created?: string;
  /** The timestamp when the billing contract was last updated. */
  updated?: string;
  /** The date from when the billing contract is valid. */
  contract_date_start?: string;
  /** The date until when the billing contract is valid. */
  contract_date_end?: string;
  /** The version of the billing contract. */
  contract_version?: number;
  /** The subscription type the user will have after a subscription downgrade. Will be null if downgrading is not possible. */
  subscription_type_downgrade?: string;
  /** The subscription status. */
  status?: string;
  /** The subscription substatus. */
  sub_status?: string;
}

export interface BillingContractSubscriptionListing {
  /** The id of the billing contract. */
  id?: number;
  /** The timestamp when the billing contract was made. */
  created?: string;
  /** The timestamp when the billing contract was last updated. */
  updated?: string;
  /** The date from when the billing contract is valid. */
  contract_date_start?: string;
  /** The date until when the billing contract is valid. */
  contract_date_end?: string;
  /** The version of the billing contract. */
  contract_version?: number;
  /** The subscription type of the user. Can be one of PERSON_SUPER_LIGHT_V1, PERSON_LIGHT_V1, PERSON_MORE_V1, PERSON_FREE_V1, PERSON_PREMIUM_V1, COMPANY_V1, or COMPANY_V2. */
  subscription_type?: string;
  /** The subscription type the user will have after a subscription downgrade. Will be null if downgrading is not possible. */
  subscription_type_downgrade?: string;
  /** The subscription status. */
  status?: string;
  /** The subscription substatus. */
  sub_status?: string;
}

export interface BirdeeInvestmentPortfolio {
  /** The type of risk profile associated with the portfolio. */
  risk_profile_type?: string;
  /** The investment theme. */
  investment_theme?: string;
  /** The name associated with the investment portfolio. */
  name?: string;
  /** The investment goal. */
  goal?: BirdeeInvestmentPortfolioGoal;
  /** Status of the portfolio. */
  status?: string;
  /** Maximum number of strategy changes in a year. */
  number_of_strategy_change_annual_maximum?: number;
  /** Maximum number of strategy changes used. */
  number_of_strategy_change_annual_used?: number;
  /** The external identifier of the portfolio. */
  external_identifier?: string;
  /** The investment portfolio balance. */
  balance?: BirdeeInvestmentPortfolioBalance;
  /** The allocations of the investment portfolio. */
  allocations?: BirdeePortfolioAllocation[];
}

export interface BirdeeInvestmentPortfolioBalance {
  /** The current valuation of the portfolio, minus any amount pending withdrawal. */
  amount_available?: Amount;
  /** The total amount deposited. */
  amount_deposit_total?: Amount;
  /** The total amount withdrawn. */
  amount_withdrawal_total?: Amount;
  /** The total fee amount. */
  amount_fee_total?: Amount;
  /** The difference between the netto deposited amount and the current valuation. */
  amount_profit?: Amount;
  /** The amount that's sent to Birdee, but pending investment on the portfolio. */
  amount_deposit_pending?: Amount;
  /** The amount that's sent to Birdee, but pending withdrawal. */
  amount_withdrawal_pending?: Amount;
}

export interface BirdeeInvestmentPortfolioGoal {
  /** The investment goal amount. */
  amount_target?: Amount;
  /** The investment goal end time. */
  time_end?: string;
}

export interface BirdeePortfolioAllocation {
  /** Currency of the instrument. */
  instrument_currency?: string;
  /** Asset Class of the instrument. */
  instrument_asset_class?: string;
  /** Name of the asset class. */
  instrument_asset_class_name?: string;
  /** ISIN code of the instrument. */
  instrument_isin?: string;
  /** Name of the instrument. */
  instrument_name?: string;
  /** Name of the geographical region covered by the instrument */
  instrument_region_name?: string;
  /** Key Information Document of the instrument. */
  instrument_key_information_document_uri?: string;
  /** Weight of the financial instrument in the model portfolio. */
  weight?: string;
  /** Quantity of the financial instrument in the portfolio. */
  quantity?: string;
  /** Unit price of the financial instrument. */
  price?: string;
  /** Monetary amount of the financial instrument in the portfolio. */
  amount?: string;
}

export interface BunqId {
  /** An integer ID of an object. Unique per object type. */
  id?: number;
}

export interface BunqMeFundraiserProfile {
  /** The pointer (url) which will be used to access the bunq.me fundraiser profile. */
  pointer?: Pointer;
  /** The color chosen for the bunq.me fundraiser profile in hexadecimal format. */
  color?: string;
  /** The LabelMonetaryAccount with the public information of the User and the MonetaryAccount that created the bunq.me fundraiser profile. */
  alias?: LabelMonetaryAccount;
  /** The currency of the MonetaryAccount that created the bunq.me fundraiser profile. */
  currency?: string;
  /** The description of the bunq.me fundraiser profile. */
  description?: string;
  /** The attachment attached to the fundraiser profile. */
  attachment?: AttachmentPublic;
  /** The status of the bunq.me fundraiser profile, can be ACTIVE or DEACTIVATED. */
  status?: string;
  /** The URL which the user is sent to when a payment is completed. */
  redirect_url?: string;
  /** Provided if the user has enabled their invite link. */
  invite_profile_name?: string;
  /** List of available merchants. */
  merchant_available?: BunqMeMerchantAvailable[];
}

export interface BunqMeFundraiserProfileUserListing {
  /** Id of the monetary account on which you want to receive bunq.me payments. */
  monetary_account_id?: number;
  /** Id of the user owning the profile. */
  owner_user_id?: number;
  /** The color chosen for the bunq.me fundraiser profile in hexadecimal format. */
  color?: string;
  /** The LabelMonetaryAccount with the public information of the User and the MonetaryAccount that created the bunq.me fundraiser profile. */
  alias?: LabelMonetaryAccount;
  /** The currency of the MonetaryAccount that created the bunq.me fundraiser profile. */
  currency?: string;
  /** The description of the bunq.me fundraiser profile. */
  description?: string;
  /** The attachment used for the background of the bunq.me fundraiser profile. */
  attachment?: AttachmentPublic;
  /** The pointer (url) which will be used to access the bunq.me fundraiser profile. */
  pointer?: Pointer;
  /** The URL which the user is sent to when a payment is completed. */
  redirect_url?: string;
  /** The status of the bunq.me fundraiser profile, can be ACTIVE or DEACTIVATED. */
  status?: string;
}

export interface BunqMeFundraiserProfileUserRead {
  /** Id of the monetary account on which you want to receive bunq.me payments. */
  monetary_account_id?: number;
  /** Id of the user owning the profile. */
  owner_user_id?: number;
  /** The color chosen for the bunq.me fundraiser profile in hexadecimal format. */
  color?: string;
  /** The LabelMonetaryAccount with the public information of the User and the MonetaryAccount that created the bunq.me fundraiser profile. */
  alias?: LabelMonetaryAccount;
  /** The currency of the MonetaryAccount that created the bunq.me fundraiser profile. */
  currency?: string;
  /** The description of the bunq.me fundraiser profile. */
  description?: string;
  /** The attachment used for the background of the bunq.me fundraiser profile. */
  attachment?: AttachmentPublic;
  /** The pointer (url) which will be used to access the bunq.me fundraiser profile. */
  pointer?: Pointer;
  /** The URL which the user is sent to when a payment is completed. */
  redirect_url?: string;
  /** The status of the bunq.me fundraiser profile, can be ACTIVE or DEACTIVATED. */
  status?: string;
}

export interface BunqMeFundraiserResult {
  /** The id of the bunq.me. */
  id?: number;
  /** The timestamp when the bunq.me was created. */
  created?: string;
  /** The timestamp when the bunq.me was last updated. */
  updated?: string;
  /** The bunq.me fundraiser profile. */
  bunqme_fundraiser_profile?: BunqMeFundraiserProfile;
  /** The list of payments, paid to the bunq.me fundraiser profile. */
  payments?: Payment[];
}

export interface BunqMeFundraiserResultRead {
  /** The id of the bunq.me. */
  id?: number;
  /** The timestamp when the bunq.me was created. */
  created?: string;
  /** The timestamp when the bunq.me was last updated. */
  updated?: string;
  /** The bunq.me fundraiser profile. */
  bunqme_fundraiser_profile?: BunqMeFundraiserProfile;
  /** The list of payments, paid to the bunq.me fundraiser profile. */
  payments?: Payment[];
}

export interface BunqMeMerchantAvailable {
  /** A merchant type supported by bunq.me. */
  merchant_type?: string;
  /** Whether or not the merchant is available for the user. */
  available?: boolean;
}

export interface BunqMeTab {
  /** The bunq.me entry containing the payment information. */
  bunqme_tab_entry: BunqMeTabEntry;
  /** The status of the bunq.me. Ignored in POST requests but can be used for cancelling the bunq.me by setting status as CANCELLED with a PUT request. */
  status?: string;
}

export interface BunqMeTabCreate {
  /** The id of the created bunq.me. */
  id?: number;
}

export interface BunqMeTabEntry {
  /** The requested Amount. */
  amount_inquired?: Amount;
  /** The description for the bunq.me. Maximum 9000 characters. */
  description?: string;
  /** The URL which the user is sent to when a payment is completed. */
  redirect_url?: string;
  /** The uuid of the bunq.me. */
  uuid?: string;
  /** The LabelMonetaryAccount with the public information of the User and the MonetaryAccount that created the bunq.me link. */
  alias?: LabelMonetaryAccount;
  /** The status of the bunq.me. Can be WAITING_FOR_PAYMENT, CANCELLED or EXPIRED. */
  status?: string;
  /** List of available merchants. */
  merchant_available?: BunqMeMerchantAvailable[];
  /** Provided if the user has enabled their invite link. */
  invite_profile_name?: string;
}

export interface BunqMeTabListing {
  /** The id of the created bunq.me. */
  id?: number;
  /** The timestamp when the bunq.me was created. */
  created?: string;
  /** The timestamp when the bunq.me was last updated. */
  updated?: string;
  /** The timestamp of when the bunq.me expired or will expire. */
  time_expiry?: string;
  /** The id of the MonetaryAccount the bunq.me was sent from. */
  monetary_account_id?: number;
  /** The status of the bunq.me. Can be WAITING_FOR_PAYMENT, CANCELLED or EXPIRED. */
  status?: string;
  /** The type of the bunq.me Tab. Should be BUNQ_ME */
  type?: string;
  /** The LabelMonetaryAccount with the public information of the User and the MonetaryAccount that created the bunq.me link. */
  alias_monetary_account?: LabelMonetaryAccount;
  /** The url that points to the bunq.me page. */
  bunqme_tab_share_url?: string;
  /** The bunq.me entry containing the payment information. */
  bunqme_tab_entry?: BunqMeTabEntry;
  /** The bunq.me tab entries attached to this bunq.me Tab. */
  bunqme_tab_entries?: BunqMeTabEntry[];
  /** The list of bunq.me result Inquiries successfully made and paid. */
  result_inquiries?: BunqMeTabResultInquiry[];
}

export interface BunqMeTabRead {
  /** The id of the created bunq.me. */
  id?: number;
  /** The timestamp when the bunq.me was created. */
  created?: string;
  /** The timestamp when the bunq.me was last updated. */
  updated?: string;
  /** The timestamp of when the bunq.me expired or will expire. */
  time_expiry?: string;
  /** The id of the MonetaryAccount the bunq.me was sent from. */
  monetary_account_id?: number;
  /** The status of the bunq.me. Can be WAITING_FOR_PAYMENT, CANCELLED or EXPIRED. */
  status?: string;
  /** The type of the bunq.me Tab. Should be BUNQ_ME */
  type?: string;
  /** The LabelMonetaryAccount with the public information of the User and the MonetaryAccount that created the bunq.me link. */
  alias_monetary_account?: LabelMonetaryAccount;
  /** The url that points to the bunq.me page. */
  bunqme_tab_share_url?: string;
  /** The bunq.me entry containing the payment information. */
  bunqme_tab_entry?: BunqMeTabEntry;
  /** The bunq.me tab entries attached to this bunq.me Tab. */
  bunqme_tab_entries?: BunqMeTabEntry[];
  /** The list of bunq.me result Inquiries successfully made and paid. */
  result_inquiries?: BunqMeTabResultInquiry[];
}

export interface BunqMeTabResultInquiry {
  /** The payment made for the Tab. */
  payment?: Payment;
  /** The Id of the bunq.me tab that this BunqMeTabResultInquiry belongs to. */
  bunq_me_tab_id?: number;
}

export interface BunqMeTabResultResponse {
  /** The payment made for the bunq.me tab. */
  payment?: Payment;
}

export interface BunqMeTabResultResponseRead {
  /** The payment made for the bunq.me tab. */
  payment?: Payment;
}

export interface BunqMeTabUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface Card {
  /** The plaintext pin code. Requests require encryption to be enabled. */
  pin_code?: string;
  /** DEPRECATED: Activate a card by setting status to ACTIVE when the order_status is ACCEPTED_FOR_PRODUCTION. */
  activation_code?: string;
  /** The status to set for the card. Can be ACTIVE, DEACTIVATED, LOST, STOLEN or CANCELLED, and can only be set to LOST/STOLEN/CANCELLED when order status is ACCEPTED_FOR_PRODUCTION/DELIVERED_TO_CUSTOMER/CARD_UPDATE_REQUESTED/CARD_UPDATE_SENT/CARD_UPDATE_ACCEPTED. Can only be set to DEACTIVATED after initial activation, i.e. order_status is DELIVERED_TO_CUSTOMER/CARD_UPDATE_REQUESTED/CARD_UPDATE_SENT/CARD_UPDATE_ACCEPTED. Mind that all the possible choices (apart from ACTIVE and DEACTIVATED) are permanent and cannot be changed after. */
  status?: string;
  /** The order status to set for the card. Set to CARD_REQUEST_PENDING to get a virtual card produced. */
  order_status?: string;
  /** The spending limit for the card. */
  card_limit?: Amount;
  /** The ATM spending limit for the card. */
  card_limit_atm?: Amount;
  /** The countries for which to grant (temporary) permissions to use the card. */
  country_permission?: CardCountryPermission[];
  /** Array of Types, PINs, account IDs assigned to the card. */
  pin_code_assignment?: CardPinAssignment[];
  /** Array of PANs and their attributes. */
  primary_account_numbers?: CardPrimaryAccountNumber[];
  /** ID of the MA to be used as fallback for this card if insufficient balance. Fallback account is removed if not supplied. */
  monetary_account_id_fallback?: number;
  /** The user's preferred name as it will be on the card. */
  preferred_name_on_card?: string;
  /** The second line of text on the card */
  second_line?: string;
  /** The reason for card cancellation. */
  cancellation_reason?: string;
}

export interface CardBatch {
  /** The cards that need to be updated. */
  cards: CardBatchEntry[];
}

export interface CardBatchCreate {
  /** The ids of the cards that have been updated. */
  updated_card_ids?: BunqId[];
}

export interface CardBatchEntry {
  /** The ID of the card that needs to be updated. */
  id: number;
  /** The status to set for the card. Can be ACTIVE, DEACTIVATED, LOST, STOLEN or CANCELLED, and can only be set to LOST/STOLEN/CANCELLED when order status is ACCEPTED_FOR_PRODUCTION/DELIVERED_TO_CUSTOMER/CARD_UPDATE_REQUESTED/CARD_UPDATE_SENT/CARD_UPDATE_ACCEPTED. Can only be set to DEACTIVATED after initial activation, i.e. order_status is DELIVERED_TO_CUSTOMER/CARD_UPDATE_REQUESTED/CARD_UPDATE_SENT/CARD_UPDATE_ACCEPTED. Mind that all the possible choices (apart from ACTIVE and DEACTIVATED) are permanent and cannot be changed after. */
  status?: string;
  /** The spending limit for the card. */
  card_limit?: Amount;
  /** The ATM spending limit for the card. */
  card_limit_atm?: Amount;
  /** The countries for which to grant (temporary) permissions to use the card. */
  country_permission?: CardCountryPermission[];
  /** ID of the MA to be used as fallback for this card if insufficient balance. Fallback account is removed if not supplied. */
  monetary_account_id_fallback?: number;
}

export interface CardBatchReplace {
  /** The cards that need to be replaced. */
  cards: CardBatchReplaceEntry[];
}

export interface CardBatchReplaceCreate {
  /** The ids of the cards that have been replaced. */
  updated_card_ids?: BunqId[];
}

export interface CardBatchReplaceEntry {
  /** The ID of the card that needs to be replaced. */
  id: number;
  /** The user's name as it will be on the card. Check 'card-name' for the available card names for a user. */
  name_on_card?: string;
  /** Array of Types, PINs, account IDs assigned to the card. */
  pin_code_assignment?: CardPinAssignment[];
  /** The second line on the card. */
  second_line?: string;
}

export interface CardCountryPermission {
  /** The country to allow transactions in (e.g. NL, DE). */
  country?: string;
  /** Expiry time of this rule. */
  expiry_time?: string;
  /** The id of the card country permission entry. */
  id?: number;
}

export interface CardCredit {
  /** The first line of text on the card, used as name/description for it. It can contain at most 17 characters and it can be empty. */
  first_line?: string;
  /** The second line of text on the card, used as name/description for it. It can contain at most 17 characters and it can be empty. */
  second_line: string;
  /** The user's name as it will be on the card. Check 'card-name' for the available card names for a user. */
  name_on_card: string;
  /** The user's preferred name that can be put on the card. */
  preferred_name_on_card?: string;
  /** The pointer to the monetary account that will be connected at first with the card. Its IBAN code is also the one that will be printed on the card itself. The pointer must be of type IBAN. */
  alias?: Pointer;
  /** The type of card to order. Can be MASTERCARD. */
  type: string;
  /** The product type of the card to order. */
  product_type: string;
  /** Array of Types, PINs, account IDs assigned to the card. */
  pin_code_assignment?: CardPinAssignment[];
  /** ID of the MA to be used as fallback for this card if insufficient balance. Fallback account is removed if not supplied. */
  monetary_account_id_fallback?: number;
  /** The order status of this card. Can be CARD_REQUEST_PENDING or VIRTUAL_DELIVERY. */
  order_status?: string;
}

export interface CardCreditCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface CardDebit {
  /** The second line of text on the card, used as name/description for it. It can contain at most 17 characters and it can be empty. */
  second_line: string;
  /** The user's name as it will be on the card. Check 'card-name' for the available card names for a user. */
  name_on_card: string;
  /** The user's preferred name that can be put on the card. */
  preferred_name_on_card?: string;
  /** The pointer to the monetary account that will be connected at first with the card. Its IBAN code is also the one that will be printed on the card itself. The pointer must be of type IBAN. */
  alias?: Pointer;
  /** The type of card to order. Can be MAESTRO or MASTERCARD. */
  type: string;
  /** The product type of the card to order. */
  product_type: string;
  /** Array of Types, PINs, account IDs assigned to the card. */
  pin_code_assignment?: CardPinAssignment[];
  /** ID of the MA to be used as fallback for this card if insufficient balance. Fallback account is removed if not supplied. */
  monetary_account_id_fallback?: number;
  /** The order status of this card. Can be CARD_REQUEST_PENDING or VIRTUAL_DELIVERY. */
  order_status?: string;
}

export interface CardDebitCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface CardGeneratedCvc2 {
  /** The type of generated cvc2. Can be STATIC or GENERATED. */
  type?: string;
}

export interface CardGeneratedCvc2Create {
  /** The id of the created item */
  Id?: BunqId;
}

export interface CardGeneratedCvc2Listing {
  /** The id of the cvc code. */
  id?: number;
  /** The timestamp of the cvc code's creation. */
  created?: string;
  /** The timestamp of the cvc code's last update. */
  updated?: string;
  /** The type of generated cvc2. Can be STATIC or GENERATED. */
  type?: string;
  /** The cvc2 code. */
  cvc2?: string;
  /** The status of the cvc2. Can be AVAILABLE, USED, EXPIRED, BLOCKED. */
  status?: string;
  /** Expiry time of the cvc2. */
  expiry_time?: string;
}

export interface CardGeneratedCvc2Read {
  /** The id of the cvc code. */
  id?: number;
  /** The timestamp of the cvc code's creation. */
  created?: string;
  /** The timestamp of the cvc code's last update. */
  updated?: string;
  /** The type of generated cvc2. Can be STATIC or GENERATED. */
  type?: string;
  /** The cvc2 code. */
  cvc2?: string;
  /** The status of the cvc2. Can be AVAILABLE, USED, EXPIRED, BLOCKED. */
  status?: string;
  /** Expiry time of the cvc2. */
  expiry_time?: string;
}

export interface CardGeneratedCvc2Update {
  /** The id of the created item */
  Id?: BunqId;
}

export interface CardListing {
  /** The id of the card. */
  id?: number;
  /** The timestamp of the card's creation. */
  created?: string;
  /** The timestamp of the card's last update. */
  updated?: string;
  /** The public UUID of the card. */
  public_uuid?: string;
  /** The type of the card. Can be MAESTRO, MASTERCARD. */
  type?: string;
  /** The sub-type of the card. */
  sub_type?: string;
  /** The second line of text on the card */
  second_line?: string;
  /** ID of the user who is owner of the card. */
  user_id?: number;
  /** The status to set for the card. Can be ACTIVE, DEACTIVATED, LOST, STOLEN, CANCELLED, EXPIRED or PIN_TRIES_EXCEEDED. */
  status?: string;
  /** The sub-status of the card. Can be NONE or REPLACED. */
  sub_status?: string;
  /** The order status of the card. Can be NEW_CARD_REQUEST_RECEIVED, CARD_REQUEST_PENDING, SENT_FOR_PRODUCTION, ACCEPTED_FOR_PRODUCTION, DELIVERED_TO_CUSTOMER, CARD_UPDATE_REQUESTED, CARD_UPDATE_PENDING, CARD_UPDATE_SENT, CARD_UPDATE_ACCEPTED, VIRTUAL_DELIVERY, NEW_CARD_REQUEST_PENDING_USER_APPROVAL, SENT_FOR_DELIVERY or NEW_CARD_REQUEST_CANCELLED. */
  order_status?: string;
  /** Expiry date of the card. */
  expiry_date?: string;
  /** The user's name on the card. */
  name_on_card?: string;
  /** The user's preferred name on the card. */
  preferred_name_on_card?: string;
  /** Array of PANs and their attributes. */
  primary_account_numbers?: CardPrimaryAccountNumber[];
  /** The payment account reference number associated with the card. */
  payment_account_reference?: string;
  /** The spending limit for the card. */
  card_limit?: Amount;
  /** The ATM spending limit for the card. */
  card_limit_atm?: Amount;
  /** The countries for which to grant (temporary) permissions to use the card. */
  country_permission?: CardCountryPermission[];
  /** The monetary account this card was ordered on and the label user that owns the card. */
  label_monetary_account_ordered?: LabelMonetaryAccount;
  /** The monetary account that this card is currently linked to and the label user viewing it. */
  label_monetary_account_current?: LabelMonetaryAccount;
  /** Current monetary account (only for prepaid credit cards). */
  monetary_account?: MonetaryAccount;
  /** Array of Types, PINs, account IDs assigned to the card. */
  pin_code_assignment?: CardPinAssignment[];
  /** ID of the MA to be used as fallback for this card if insufficient balance. Fallback account is removed if not supplied. */
  monetary_account_id_fallback?: number;
  /** The country that is domestic to the card. Defaults to country of residence of user. */
  country?: string;
  /** A tracking link provided by our shipment provider. */
  card_shipment_tracking_url?: string;
  /** Whether this card is eligible for a free replacement. */
  is_eligible_for_free_replacement?: boolean;
}

export interface CardNameListing {
  /** All possible variations (of suitable length) of user's legal name for the debit card. */
  possible_card_name_array?: string[];
}

export interface CardPinAssignment {
  /** PIN type. Can be PRIMARY, SECONDARY or TERTIARY */
  type?: string;
  /** Routing type. Can be MANUAL or AUTOMATIC */
  routing_type?: string;
  /** The 4 digit PIN to be assigned to this account. */
  pin_code?: string;
  /** The ID of the monetary account to assign to this pin for the card. */
  monetary_account_id?: number;
}

export interface CardPrimaryAccountNumber {
  /** The ID for this Virtual PAN. */
  id?: number;
  /** The description for this PAN. */
  description?: string;
  /** The status for this PAN, only for Online Cards. */
  status?: string;
  /** The ID of the monetary account to assign to this PAN, only for Online Cards. */
  monetary_account_id?: number;
  /** The UUID for this Virtual PAN. */
  uuid?: string;
  /** The last four digits of the PAN. */
  four_digit?: string;
}

export interface CardRead {
  /** The id of the card. */
  id?: number;
  /** The timestamp of the card's creation. */
  created?: string;
  /** The timestamp of the card's last update. */
  updated?: string;
  /** The public UUID of the card. */
  public_uuid?: string;
  /** The type of the card. Can be MAESTRO, MASTERCARD. */
  type?: string;
  /** The sub-type of the card. */
  sub_type?: string;
  /** The second line of text on the card */
  second_line?: string;
  /** ID of the user who is owner of the card. */
  user_id?: number;
  /** The status to set for the card. Can be ACTIVE, DEACTIVATED, LOST, STOLEN, CANCELLED, EXPIRED or PIN_TRIES_EXCEEDED. */
  status?: string;
  /** The sub-status of the card. Can be NONE or REPLACED. */
  sub_status?: string;
  /** The order status of the card. Can be NEW_CARD_REQUEST_RECEIVED, CARD_REQUEST_PENDING, SENT_FOR_PRODUCTION, ACCEPTED_FOR_PRODUCTION, DELIVERED_TO_CUSTOMER, CARD_UPDATE_REQUESTED, CARD_UPDATE_PENDING, CARD_UPDATE_SENT, CARD_UPDATE_ACCEPTED, VIRTUAL_DELIVERY, NEW_CARD_REQUEST_PENDING_USER_APPROVAL, SENT_FOR_DELIVERY or NEW_CARD_REQUEST_CANCELLED. */
  order_status?: string;
  /** Expiry date of the card. */
  expiry_date?: string;
  /** The user's name on the card. */
  name_on_card?: string;
  /** The user's preferred name on the card. */
  preferred_name_on_card?: string;
  /** Array of PANs and their attributes. */
  primary_account_numbers?: CardPrimaryAccountNumber[];
  /** The payment account reference number associated with the card. */
  payment_account_reference?: string;
  /** The spending limit for the card. */
  card_limit?: Amount;
  /** The ATM spending limit for the card. */
  card_limit_atm?: Amount;
  /** The countries for which to grant (temporary) permissions to use the card. */
  country_permission?: CardCountryPermission[];
  /** The monetary account this card was ordered on and the label user that owns the card. */
  label_monetary_account_ordered?: LabelMonetaryAccount;
  /** The monetary account that this card is currently linked to and the label user viewing it. */
  label_monetary_account_current?: LabelMonetaryAccount;
  /** Current monetary account (only for prepaid credit cards). */
  monetary_account?: MonetaryAccount;
  /** Array of Types, PINs, account IDs assigned to the card. */
  pin_code_assignment?: CardPinAssignment[];
  /** ID of the MA to be used as fallback for this card if insufficient balance. Fallback account is removed if not supplied. */
  monetary_account_id_fallback?: number;
  /** The country that is domestic to the card. Defaults to country of residence of user. */
  country?: string;
  /** A tracking link provided by our shipment provider. */
  card_shipment_tracking_url?: string;
  /** Whether this card is eligible for a free replacement. */
  is_eligible_for_free_replacement?: boolean;
}

export interface CardReplace {
  /** The user's name as it will be on the card. Check 'card-name' for the available card names for a user. */
  name_on_card?: string;
  /** The user's preferred name that can be put on the card. */
  preferred_name_on_card?: string;
  /** Array of Types, PINs, account IDs assigned to the card. */
  pin_code_assignment?: CardPinAssignment[];
  /** The second line on the card. */
  second_line?: string;
}

export interface CardReplaceCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface CardUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface CashbackPayoutItem {
  /** The status of the cashback payout item. */
  status?: string;
  /** The amount of cashback earned. */
  amount?: Amount;
  /** The cashback rate. */
  rate_applied?: string;
  /** The transaction category that this cashback is for. */
  transaction_category?: AdditionalTransactionInformationCategory;
}

export interface Certificate {
  /** A single certificate in the chain in .PEM format. */
  certificate?: string;
}

export interface CertificatePinned {
  /** The certificate chain in .PEM format. */
  certificate_chain: Certificate[];
}

export interface CertificatePinnedCreate {
  /** The id generated for the pinned certificate chain. */
  id?: number;
}

export type CertificatePinnedDelete = object;

export interface CertificatePinnedListing {
  /** The certificate chain in .PEM format. Certificates are glued with newline characters. */
  certificate_chain?: string;
  /** The id generated for the pinned certificate chain. */
  id?: number;
}

export interface CertificatePinnedRead {
  /** The certificate chain in .PEM format. Certificates are glued with newline characters. */
  certificate_chain?: string;
  /** The id generated for the pinned certificate chain. */
  id?: number;
}

export interface CoOwner {
  /** The Alias of the co-owner. */
  alias?: LabelUser;
  /** Can be: ACCEPTED, REJECTED, PENDING or REVOKED */
  status?: string;
}

export interface Company {
  /** The company name. */
  name: string;
  /** The company's main address. */
  address_main: Address;
  /** The company's postal address. */
  address_postal: Address;
  /** The country where the company is registered. */
  country: string;
  /** The names and birth dates of the company's ultimate beneficiary owners. Minimum zero, maximum four. */
  ubo?: Ubo[];
  /** The company's chamber of commerce number. */
  chamber_of_commerce_number?: string;
  /** The company's legal form. */
  legal_form: string;
  /** The subscription type for the company. */
  subscription_type: string;
  /** The public UUID of the company's avatar. */
  avatar_uuid?: string;
  /** DEPRECATED All the vat numbers of the company */
  vat_number?: CompanyVatNumber;
  /** All the vat numbers of the company */
  vat_numbers?: CompanyVatNumber[];
  /** The type of signup track the user is following. */
  signup_track_type?: string;
}

export interface CompanyCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface CompanyListing {
  UserCompany?: UserCompany;
}

export interface CompanyRead {
  UserCompany?: UserCompany;
}

export interface CompanyUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface CompanyVatNumber {
  /** The VAT identification number type. */
  type?: string;
  /** The country of the VAT identification number. */
  country?: string;
  /** The VAT identification number number. */
  value?: string;
}

export interface ConfirmationOfFunds {
  /** The pointer (IBAN) of the account we're querying. */
  pointer_iban: Pointer;
  /** The amount we want to check for. */
  amount: Amount;
}

export interface ConfirmationOfFundsCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface CurrencyCloudBeneficiary {
  /** The name of the beneficiary. */
  name: string;
  /** The country of the beneficiary. */
  country: string;
  /** The currency of the beneficiary. */
  currency: string;
  /** The payment type this requirement is for. */
  payment_type: string;
  /** The legal entity type of the beneficiary. */
  legal_entity_type: string;
  /** All fields that were required by CurrencyCloud. Obtained through the CurrencyCloudBeneficiaryRequirement listing. */
  all_field: string[];
}

export interface CurrencyCloudBeneficiaryCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface CurrencyCloudBeneficiaryListing {
  /** The id of the profile. */
  id?: number;
  /** The timestamp of the beneficiaries creation. */
  created?: string;
  /** The timestamp of the beneficiaries last update. */
  updated?: string;
  /** The name of the beneficiary. */
  name?: string;
  /** The account number to display for the beneficiary. */
  account_number?: string;
  /** The currency of the beneficiary. */
  currency?: string;
  /** The external identifier of the beneficiary. */
  external_identifier?: string;
}

export interface CurrencyCloudBeneficiaryRead {
  /** The id of the profile. */
  id?: number;
  /** The timestamp of the beneficiaries creation. */
  created?: string;
  /** The timestamp of the beneficiaries last update. */
  updated?: string;
  /** The name of the beneficiary. */
  name?: string;
  /** The account number to display for the beneficiary. */
  account_number?: string;
  /** The currency of the beneficiary. */
  currency?: string;
  /** The external identifier of the beneficiary. */
  external_identifier?: string;
}

export interface CurrencyCloudBeneficiaryRequirementField {
  /** The label to display for the field. */
  label?: string;
  /** The name of the field. */
  name?: string;
  /** The expression to validate field input. */
  validation_expression?: string;
  /** The type of data to input. Determines the keyboard to display. */
  input_type?: string;
}

export interface CurrencyCloudBeneficiaryRequirementListing {
  /** The payment type this requirement is for. */
  payment_type?: string;
  /** The entity type this requirement is for. */
  legal_entity_type?: string;
  /** The fields that are required. */
  all_field?: CurrencyCloudBeneficiaryRequirementField[];
}

export interface CurrencyCloudPaymentQuote {
  /** The points we want to know the fees for. */
  pointers: Pointer[];
}

export interface CurrencyCloudPaymentQuoteCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface CurrencyConversion {
  /** The id of the conversion. */
  id?: number;
  /** The timestamp of the conversion's creation. */
  created?: string;
  /** The timestamp of the conversion's last update. */
  updated?: string;
  /** The status of the conversion. */
  status?: string;
  /** The expected delivery date of the conversion. */
  date_delivery_expected?: string;
  /** The rate of the conversion. */
  rate?: string;
  /** The amount of the conversion. */
  amount?: Amount;
  /** The amount of the counter conversion. */
  counter_amount?: Amount;
  /** The group uuid of the conversion. */
  group_uuid?: string;
  /** The type of this conversion. */
  type?: string;
  /** The order type, buying or selling. */
  order_type?: string;
  /** The label of the monetary account. */
  label_monetary_account?: LabelMonetaryAccount;
  /** The label of the counter monetary account. */
  counter_label_monetary_account?: LabelMonetaryAccount;
  /** The payment associated with this conversion. */
  payment?: Payment;
}

export interface CurrencyConversionListing {
  /** The id of the conversion. */
  id?: number;
  /** The timestamp of the conversion's creation. */
  created?: string;
  /** The timestamp of the conversion's last update. */
  updated?: string;
  /** The status of the conversion. */
  status?: string;
  /** The expected delivery date of the conversion. */
  date_delivery_expected?: string;
  /** The rate of the conversion. */
  rate?: string;
  /** The amount of the conversion. */
  amount?: Amount;
  /** The amount of the counter conversion. */
  counter_amount?: Amount;
  /** The group uuid of the conversion. */
  group_uuid?: string;
  /** The type of this conversion. */
  type?: string;
  /** The order type, buying or selling. */
  order_type?: string;
  /** The label of the monetary account. */
  label_monetary_account?: LabelMonetaryAccount;
  /** The label of the counter monetary account. */
  counter_label_monetary_account?: LabelMonetaryAccount;
  /** The payment associated with this conversion. */
  payment?: Payment;
}

export interface CurrencyConversionQuote {
  /** The amount to convert. */
  amount: Amount;
  /** The currency we are converting. */
  currency_source: string;
  /** The currency we are converting towards. */
  currency_target: string;
  /** The type of the quote, SELL or BUY. */
  order_type: string;
  /** The Alias of the party we are transferring the money to. */
  counterparty_alias: Pointer;
  /** The status of the quote. */
  status?: string;
}

export interface CurrencyConversionQuoteCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface CurrencyConversionQuoteRead {
  /** The id of the quote. */
  id?: number;
  /** The timestamp of the quote's creation. */
  created?: string;
  /** The timestamp of the quote's last update. */
  updated?: string;
  /** The status of the quote. */
  status?: string;
  /** The amount to convert. */
  amount_source?: Amount;
  /** The amount to convert to. */
  amount_target?: Amount;
  /** The conversion rate. */
  rate?: string;
  /** Timestamp for when this quote expires and the user should request a new one. */
  time_expiry?: string;
}

export interface CurrencyConversionQuoteUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface CurrencyConversionRead {
  /** The id of the conversion. */
  id?: number;
  /** The timestamp of the conversion's creation. */
  created?: string;
  /** The timestamp of the conversion's last update. */
  updated?: string;
  /** The status of the conversion. */
  status?: string;
  /** The expected delivery date of the conversion. */
  date_delivery_expected?: string;
  /** The rate of the conversion. */
  rate?: string;
  /** The amount of the conversion. */
  amount?: Amount;
  /** The amount of the counter conversion. */
  counter_amount?: Amount;
  /** The group uuid of the conversion. */
  group_uuid?: string;
  /** The type of this conversion. */
  type?: string;
  /** The order type, buying or selling. */
  order_type?: string;
  /** The label of the monetary account. */
  label_monetary_account?: LabelMonetaryAccount;
  /** The label of the counter monetary account. */
  counter_label_monetary_account?: LabelMonetaryAccount;
  /** The payment associated with this conversion. */
  payment?: Payment;
}

export interface Customer {
  /** The primary billing account account's id. */
  billing_account_id?: string;
  /** The preferred notification type for invoices. */
  invoice_notification_preference?: string;
  /** The id of the customer. */
  id?: number;
  /** The timestamp of the customer object's creation. */
  created?: string;
  /** The timestamp of the customer object's last update. */
  updated?: string;
}

export interface CustomerLimit {
  /** The limit of monetary accounts. */
  limit_monetary_account?: number;
  /** The amount of additional monetary accounts you can create. */
  limit_monetary_account_remaining?: number;
  /** The limit of Maestro cards. */
  limit_card_debit_maestro?: number;
  /** The limit of MasterCard cards. */
  limit_card_debit_mastercard?: number;
  /** DEPRECTATED: The limit of wildcards, e.g. Maestro or MasterCard cards. */
  limit_card_debit_wildcard?: number;
  /** The limit of wildcards, e.g. Maestro or MasterCard cards. */
  limit_card_wildcard?: number;
  /** The limit of free replacement cards. */
  limit_card_replacement?: number;
  /** The maximum amount a user is allowed to spend in a month. */
  limit_amount_monthly?: Amount;
  /** The amount the user has spent in the last month. */
  spent_amount_monthly?: Amount;
}

export interface CustomerLimitListing {
  /** The limit of monetary accounts. */
  limit_monetary_account?: number;
  /** The amount of additional monetary accounts you can create. */
  limit_monetary_account_remaining?: number;
  /** The limit of Maestro cards. */
  limit_card_debit_maestro?: number;
  /** The limit of MasterCard cards. */
  limit_card_debit_mastercard?: number;
  /** DEPRECTATED: The limit of wildcards, e.g. Maestro or MasterCard cards. */
  limit_card_debit_wildcard?: number;
  /** The limit of wildcards, e.g. Maestro or MasterCard cards. */
  limit_card_wildcard?: number;
  /** The limit of free replacement cards. */
  limit_card_replacement?: number;
  /** The maximum amount a user is allowed to spend in a month. */
  limit_amount_monthly?: Amount;
  /** The amount the user has spent in the last month. */
  spent_amount_monthly?: Amount;
}

export interface DeviceListing {
  DeviceServer?: DeviceServer;
}

export interface DeviceRead {
  DeviceServer?: DeviceServer;
}

export interface DeviceServer {
  /** The description of the DeviceServer. This is only for your own reference when reading the DeviceServer again. */
  description: string;
  /** The API key. You can request an API key in the bunq app. */
  secret: string;
  /** An array of IPs (v4 or v6) this DeviceServer will be able to do calls from. These will be linked to the API key. */
  permitted_ips?: string[];
}

export interface DeviceServerCreate {
  /** The id of the DeviceServer as created on the server. */
  id?: number;
}

export interface DeviceServerListing {
  /** The id of the DeviceServer as created on the server. */
  id?: number;
  /** The timestamp of the DeviceServer's creation. */
  created?: string;
  /** The timestamp of the DeviceServer's last update. */
  updated?: string;
  /** The description of the DeviceServer. */
  description?: string;
  /** The ip address which was used to create the DeviceServer. */
  ip?: string;
  /** The status of the DeviceServer. Can be ACTIVE, BLOCKED, NEEDS_CONFIRMATION or OBSOLETE. */
  status?: string;
}

export interface DeviceServerRead {
  /** The id of the DeviceServer as created on the server. */
  id?: number;
  /** The timestamp of the DeviceServer's creation. */
  created?: string;
  /** The timestamp of the DeviceServer's last update. */
  updated?: string;
  /** The description of the DeviceServer. */
  description?: string;
  /** The ip address which was used to create the DeviceServer. */
  ip?: string;
  /** The status of the DeviceServer. Can be ACTIVE, BLOCKED, NEEDS_CONFIRMATION or OBSOLETE. */
  status?: string;
}

export interface DraftPayment {
  /** The status of the DraftPayment. */
  status?: string;
  /** The list of entries in the DraftPayment. Each entry will result in a payment when the DraftPayment is accepted. */
  entries: DraftPaymentEntry[];
  /** The last updated_timestamp that you received for this DraftPayment. This needs to be provided to prevent race conditions. */
  previous_updated_timestamp?: string;
  /** The number of accepts that are required for the draft payment to receive status ACCEPTED. Currently only 1 is valid. */
  number_of_required_accepts: number;
  /** The schedule details when creating or updating a scheduled payment. */
  schedule?: Schedule;
}

export interface DraftPaymentAnchorObject {
  Payment?: Payment;
  PaymentBatch?: PaymentBatch;
}

export interface DraftPaymentCreate {
  /** The id of the created DrafPayment. */
  id?: number;
}

export interface DraftPaymentEntry {
  /** The amount of the payment. */
  amount?: Amount;
  /** The LabelMonetaryAccount containing the public information of the other (counterparty) side of the DraftPayment. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The description for the DraftPayment. Maximum 140 characters for DraftPayments to external IBANs, 9000 characters for DraftPayments to only other bunq MonetaryAccounts. */
  description?: string;
  /** Optional data to be included with the Payment specific to the merchant. */
  merchant_reference?: string;
  /** The Attachments attached to the DraftPayment. */
  attachment?: AttachmentMonetaryAccountPayment[];
  /** The id of the draft payment entry. */
  id?: number;
  /** The LabelMonetaryAccount containing the public information of 'this' (party) side of the DraftPayment. */
  alias?: LabelMonetaryAccount;
  /** The type of the draft payment entry. */
  type?: string;
}

export interface DraftPaymentListing {
  /** The id of the created DrafPayment. */
  id?: number;
  /** The id of the MonetaryAccount the DraftPayment applies to. */
  monetary_account_id?: number;
  /** The label of the User who created the DraftPayment. */
  user_alias_created?: LabelUser;
  /** All responses to this draft payment. */
  responses?: DraftPaymentResponse[];
  /** The status of the DraftPayment. */
  status?: string;
  /** The type of the DraftPayment. */
  type?: string;
  /** The entries in the DraftPayment. */
  entries?: DraftPaymentEntry[];
  /** The Payment or PaymentBatch. This will only be present after the DraftPayment has been accepted. */
  object?: DraftPaymentAnchorObject;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
  /** The schedule details. */
  schedule?: Schedule;
}

export interface DraftPaymentRead {
  /** The id of the created DrafPayment. */
  id?: number;
  /** The id of the MonetaryAccount the DraftPayment applies to. */
  monetary_account_id?: number;
  /** The label of the User who created the DraftPayment. */
  user_alias_created?: LabelUser;
  /** All responses to this draft payment. */
  responses?: DraftPaymentResponse[];
  /** The status of the DraftPayment. */
  status?: string;
  /** The type of the DraftPayment. */
  type?: string;
  /** The entries in the DraftPayment. */
  entries?: DraftPaymentEntry[];
  /** The Payment or PaymentBatch. This will only be present after the DraftPayment has been accepted. */
  object?: DraftPaymentAnchorObject;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
  /** The schedule details. */
  schedule?: Schedule;
}

export interface DraftPaymentResponse {
  /** The status with which was responded. */
  status?: string;
  /** The user that responded to the DraftPayment. */
  user_alias_created?: LabelUser;
}

export interface DraftPaymentUpdate {
  /** The id of the created DrafPayment. */
  id?: number;
}

export type Error = {
  /** The error description in English. */
  error_description?: string;
  /** The error description translated to the user's language. */
  error_description_translated?: string;
}[];

export interface EventListing {
  /** The id of the event. */
  id?: number;
  /** The timestamp of the event's creation. */
  created?: string;
  /** The timestamp of the event's last update. */
  updated?: string;
  /** The performed action. Can be: CREATE or UPDATE. */
  action?: string;
  /** The id of the user the event applied to (if it was a user event). */
  user_id?: string;
  /** The id of the monetary account the event applied to (if it was a monetary account event). */
  monetary_account_id?: string;
  /** The details of the external object the event was created for. */
  object?: EventObject;
  /** The event status. Can be: FINALIZED or AWAITING_REPLY. An example of FINALIZED event is a payment received event, while an AWAITING_REPLY event is a request received event. */
  status?: string;
}

export interface EventObject {
  BunqMeTab?: BunqMeTab;
  BunqMeTabResultResponse?: BunqMeTabResultResponse;
  BunqMeFundraiserResult?: BunqMeFundraiserResult;
  Card?: Card;
  CardDebit?: CardDebit;
  DraftPayment?: DraftPayment;
  FeatureAnnouncement?: FeatureAnnouncement;
  IdealMerchantTransaction?: IdealMerchantTransaction;
  Invoice?: Invoice;
  ScheduledPayment?: SchedulePayment;
  ScheduledPaymentBatch?: SchedulePaymentBatch;
  ScheduledInstance?: ScheduleInstance;
  MasterCardAction?: MasterCardAction;
  BankSwitchServiceNetherlandsIncomingPayment?: BankSwitchServiceNetherlandsIncomingPayment;
  Payment?: Payment;
  PaymentBatch?: PaymentBatch;
  RequestInquiryBatch?: RequestInquiryBatch;
  RequestInquiry?: RequestInquiry;
  RequestResponse?: RequestResponse;
  RewardRecipient?: RewardRecipient;
  RewardSender?: RewardSender;
  ShareInviteBankInquiry?: ShareInviteMonetaryAccountInquiry;
  ShareInviteBankResponse?: ShareInviteMonetaryAccountResponse;
  SofortMerchantTransaction?: SofortMerchantTransaction;
  TransferwisePayment?: TransferwiseTransfer;
}

export interface EventRead {
  /** The id of the event. */
  id?: number;
  /** The timestamp of the event's creation. */
  created?: string;
  /** The timestamp of the event's last update. */
  updated?: string;
  /** The performed action. Can be: CREATE or UPDATE. */
  action?: string;
  /** The id of the user the event applied to (if it was a user event). */
  user_id?: string;
  /** The id of the monetary account the event applied to (if it was a monetary account event). */
  monetary_account_id?: string;
  /** The details of the external object the event was created for. */
  object?: EventObject;
  /** The event status. Can be: FINALIZED or AWAITING_REPLY. An example of FINALIZED event is a payment received event, while an AWAITING_REPLY event is a request received event. */
  status?: string;
}

export interface ExportAnnualOverview {
  /** The year for which the overview is. */
  year: number;
}

export type ExportAnnualOverviewContentListing = object;

export interface ExportAnnualOverviewCreate {
  /** The id of the annual overview as created on the server. */
  id?: number;
}

export type ExportAnnualOverviewDelete = object;

export interface ExportAnnualOverviewListing {
  /** The id of the annual overview as created on the server. */
  id?: number;
  /** The timestamp of the annual overview 's creation. */
  created?: string;
  /** The timestamp of the annual overview 's last update. */
  updated?: string;
  /** The year for which the overview is. */
  year?: number;
  /** The user to which this annual overview belongs. */
  alias_user?: LabelUser;
}

export interface ExportAnnualOverviewRead {
  /** The id of the annual overview as created on the server. */
  id?: number;
  /** The timestamp of the annual overview 's creation. */
  created?: string;
  /** The timestamp of the annual overview 's last update. */
  updated?: string;
  /** The year for which the overview is. */
  year?: number;
  /** The user to which this annual overview belongs. */
  alias_user?: LabelUser;
}

export type ExportRib = object;

export type ExportRibContentListing = object;

export interface ExportRibCreate {
  /** The id of the rib as created on the server. */
  id?: number;
}

export type ExportRibDelete = object;

export interface ExportRibListing {
  /** The id of the rib as created on the server. */
  id?: number;
  /** The timestamp of the RIB's creation. */
  created?: string;
  /** The timestamp of the RIB's last update. */
  updated?: string;
}

export interface ExportRibRead {
  /** The id of the rib as created on the server. */
  id?: number;
  /** The timestamp of the RIB's creation. */
  created?: string;
  /** The timestamp of the RIB's last update. */
  updated?: string;
}

export interface ExportStatement {
  /** The format type of statement. Allowed values: MT940, CSV, PDF. */
  statement_format: string;
  /** The start date for making statements. */
  date_start: string;
  /** The end date for making statements. */
  date_end: string;
  /** Required for CSV exports. The regional format of the statement, can be UK_US (comma-separated) or EUROPEAN (semicolon-separated). */
  regional_format?: string;
  /** Only for PDF exports. Includes attachments to mutations in the export, such as scanned receipts. */
  include_attachment?: boolean;
}

export type ExportStatementCardContentListing = object;

export interface ExportStatementCardCsv {
  /** The start date for making statements. */
  date_start: string;
  /** The end date for making statements. */
  date_end: string;
  /** Required for CSV exports. The regional format of the statement, can be UK_US (comma-separated) or EUROPEAN (semicolon-separated). */
  regional_format: string;
}

export interface ExportStatementCardCsvCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type ExportStatementCardCsvDelete = object;

export interface ExportStatementCardCsvListing {
  /** The id of the customer statement model. */
  id?: number;
  /** The timestamp of the statement model's creation. */
  created?: string;
  /** The timestamp of the statement model's last update. */
  updated?: string;
  /** The date from when this statement shows transactions. */
  date_start?: string;
  /** The date until which statement shows transactions. */
  date_end?: string;
  /** The status of the export. */
  status?: string;
  /** The regional format of a CSV statement. */
  regional_format?: string;
  /** The card for which this statement was created. */
  card_id?: number;
}

export interface ExportStatementCardCsvRead {
  /** The id of the customer statement model. */
  id?: number;
  /** The timestamp of the statement model's creation. */
  created?: string;
  /** The timestamp of the statement model's last update. */
  updated?: string;
  /** The date from when this statement shows transactions. */
  date_start?: string;
  /** The date until which statement shows transactions. */
  date_end?: string;
  /** The status of the export. */
  status?: string;
  /** The regional format of a CSV statement. */
  regional_format?: string;
  /** The card for which this statement was created. */
  card_id?: number;
}

export interface ExportStatementCardListing {
  /** The id of the customer statement model. */
  id?: number;
  /** The timestamp of the statement model's creation. */
  created?: string;
  /** The timestamp of the statement model's last update. */
  updated?: string;
  /** The date from when this statement shows transactions. */
  date_start?: string;
  /** The date until which statement shows transactions. */
  date_end?: string;
  /** The status of the export. */
  status?: string;
  /** The regional format of a CSV statement. */
  regional_format?: string;
  /** The card for which this statement was created. */
  card_id?: number;
}

export interface ExportStatementCardPdf {
  /** The start date for making statements. */
  date_start: string;
  /** The end date for making statements. */
  date_end: string;
}

export interface ExportStatementCardPdfCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type ExportStatementCardPdfDelete = object;

export interface ExportStatementCardPdfListing {
  /** The id of the customer statement model. */
  id?: number;
  /** The timestamp of the statement model's creation. */
  created?: string;
  /** The timestamp of the statement model's last update. */
  updated?: string;
  /** The date from when this statement shows transactions. */
  date_start?: string;
  /** The date until which statement shows transactions. */
  date_end?: string;
  /** The status of the export. */
  status?: string;
  /** The card for which this statement was created. */
  card_id?: number;
}

export interface ExportStatementCardPdfRead {
  /** The id of the customer statement model. */
  id?: number;
  /** The timestamp of the statement model's creation. */
  created?: string;
  /** The timestamp of the statement model's last update. */
  updated?: string;
  /** The date from when this statement shows transactions. */
  date_start?: string;
  /** The date until which statement shows transactions. */
  date_end?: string;
  /** The status of the export. */
  status?: string;
  /** The card for which this statement was created. */
  card_id?: number;
}

export interface ExportStatementCardRead {
  /** The id of the customer statement model. */
  id?: number;
  /** The timestamp of the statement model's creation. */
  created?: string;
  /** The timestamp of the statement model's last update. */
  updated?: string;
  /** The date from when this statement shows transactions. */
  date_start?: string;
  /** The date until which statement shows transactions. */
  date_end?: string;
  /** The status of the export. */
  status?: string;
  /** The regional format of a CSV statement. */
  regional_format?: string;
  /** The card for which this statement was created. */
  card_id?: number;
}

export type ExportStatementContentListing = object;

export interface ExportStatementCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type ExportStatementDelete = object;

export interface ExportStatementListing {
  /** The id of the customer statement model. */
  id?: number;
  /** The timestamp of the statement model's creation. */
  created?: string;
  /** The timestamp of the statement model's last update. */
  updated?: string;
  /** The date from when this statement shows transactions. */
  date_start?: string;
  /** The date until which statement shows transactions. */
  date_end?: string;
  /** The status of the export. */
  status?: string;
  /** MT940 Statement number. Unique per monetary account. */
  statement_number?: number;
  /** The format of statement. */
  statement_format?: string;
  /** The regional format of a CSV statement. */
  regional_format?: string;
  /** The monetary account for which this statement was created. */
  alias_monetary_account?: LabelMonetaryAccount;
}

export type ExportStatementPayment = object;

export type ExportStatementPaymentContentListing = object;

export interface ExportStatementPaymentCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface ExportStatementPaymentRead {
  /** The id of the single payment statement model. */
  id?: number;
  /** The timestamp of the statement model's creation. */
  created?: string;
  /** The timestamp of the statement model's last update. */
  updated?: string;
  /** The status of the export. */
  status?: string;
}

export interface ExportStatementRead {
  /** The id of the customer statement model. */
  id?: number;
  /** The timestamp of the statement model's creation. */
  created?: string;
  /** The timestamp of the statement model's last update. */
  updated?: string;
  /** The date from when this statement shows transactions. */
  date_start?: string;
  /** The date until which statement shows transactions. */
  date_end?: string;
  /** The status of the export. */
  status?: string;
  /** MT940 Statement number. Unique per monetary account. */
  statement_number?: number;
  /** The format of statement. */
  statement_format?: string;
  /** The regional format of a CSV statement. */
  regional_format?: string;
  /** The monetary account for which this statement was created. */
  alias_monetary_account?: LabelMonetaryAccount;
}

export interface FeatureAnnouncement {
  /** The Avatar of the event overview. */
  avatar?: Avatar;
  /** The event overview title of the feature display */
  title?: string;
  /** The event overview subtitle of the feature display */
  sub_title?: string;
  /** The type of the feature announcement so apps can override with their own stuff if desired */
  type?: string;
}

export interface FeatureAnnouncementRead {
  /** The Avatar of the event overview. */
  avatar?: Avatar;
  /** The event overview title of the feature display */
  title?: string;
  /** The event overview subtitle of the feature display */
  sub_title?: string;
  /** The type of the feature announcement so apps can override with their own stuff if desired */
  type?: string;
}

export interface Geolocation {
  /** The latitude for a geolocation restriction. */
  latitude?: number;
  /** The longitude for a geolocation restriction. */
  longitude?: number;
  /** The altitude for a geolocation restriction. */
  altitude?: number;
  /** The radius for a geolocation restriction. */
  radius?: number;
}

export interface IdealMerchantTransaction {
  /** The requested amount of money to add. */
  amount_requested?: Amount;
  /** The BIC of the issuer. */
  issuer?: string;
  /** The id of the monetary account this ideal merchant transaction links to. */
  monetary_account_id?: number;
  /** The alias of the monetary account to add money to. */
  alias?: LabelMonetaryAccount;
  /** The alias of the monetary account the money comes from. */
  counterparty_alias?: LabelMonetaryAccount;
  /** In case of a successful transaction, the amount of money that will be transferred. */
  amount_guaranteed?: Amount;
  /** When the transaction will expire. */
  expiration?: string;
  /** The Name of the issuer. */
  issuer_name?: string;
  /** The URL to visit to  */
  issuer_authentication_url?: string;
  /** The 'purchase ID' of the iDEAL transaction. */
  purchase_identifier?: string;
  /** The status of the transaction. */
  status?: string;
  /** When the status was last updated. */
  status_timestamp?: string;
  /** The 'transaction ID' of the iDEAL transaction. */
  transaction_identifier?: string;
}

export interface IdealMerchantTransactionCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface IdealMerchantTransactionListing {
  /** The id of the monetary account this ideal merchant transaction links to. */
  monetary_account_id?: number;
  /** The alias of the monetary account to add money to. */
  alias?: LabelMonetaryAccount;
  /** The alias of the monetary account the money comes from. */
  counterparty_alias?: LabelMonetaryAccount;
  /** In case of a successful transaction, the amount of money that will be transferred. */
  amount_guaranteed?: Amount;
  /** The requested amount of money to add. */
  amount_requested?: Amount;
  /** When the transaction will expire. */
  expiration?: string;
  /** The BIC of the issuer. */
  issuer?: string;
  /** The Name of the issuer. */
  issuer_name?: string;
  /** The URL to visit to  */
  issuer_authentication_url?: string;
  /** The 'purchase ID' of the iDEAL transaction. */
  purchase_identifier?: string;
  /** The status of the transaction. */
  status?: string;
  /** When the status was last updated. */
  status_timestamp?: string;
  /** The 'transaction ID' of the iDEAL transaction. */
  transaction_identifier?: string;
}

export interface IdealMerchantTransactionRead {
  /** The id of the monetary account this ideal merchant transaction links to. */
  monetary_account_id?: number;
  /** The alias of the monetary account to add money to. */
  alias?: LabelMonetaryAccount;
  /** The alias of the monetary account the money comes from. */
  counterparty_alias?: LabelMonetaryAccount;
  /** In case of a successful transaction, the amount of money that will be transferred. */
  amount_guaranteed?: Amount;
  /** The requested amount of money to add. */
  amount_requested?: Amount;
  /** When the transaction will expire. */
  expiration?: string;
  /** The BIC of the issuer. */
  issuer?: string;
  /** The Name of the issuer. */
  issuer_name?: string;
  /** The URL to visit to  */
  issuer_authentication_url?: string;
  /** The 'purchase ID' of the iDEAL transaction. */
  purchase_identifier?: string;
  /** The status of the transaction. */
  status?: string;
  /** When the status was last updated. */
  status_timestamp?: string;
  /** The 'transaction ID' of the iDEAL transaction. */
  transaction_identifier?: string;
}

export interface Image {
  /** The public UUID of the public attachment containing the image. */
  attachment_public_uuid?: string;
  /** The content-type as a MIME filetype. */
  content_type?: string;
  /** The image height in pixels. */
  height?: number;
  /** The image width in pixels. */
  width?: number;
}

export interface InsightEventListing {
  /** The id of the event. */
  id?: number;
  /** The timestamp of the event's creation. */
  created?: string;
  /** The timestamp of the event's last update. */
  updated?: string;
  /** The performed action. Can be: CREATE or UPDATE. */
  action?: string;
  /** The id of the user the event applied to (if it was a user event). */
  user_id?: string;
  /** The id of the monetary account the event applied to (if it was a monetary account event). */
  monetary_account_id?: string;
  /** The details of the external object the event was created for. */
  object?: EventObject;
  /** The event status. Can be: FINALIZED or AWAITING_REPLY. An example of FINALIZED event is a payment received event, while an AWAITING_REPLY event is a request received event. */
  status?: string;
}

export interface InsightListing {
  /** The category. */
  category?: string;
  /** The translated category. */
  category_translated?: string;
  /** The color of the category. */
  category_color?: string;
  /** The icon of the category. */
  category_icon?: string;
  /** The total amount of the transactions in the category. */
  amount_total?: Amount;
  /** The number of the transactions in the category. */
  number_of_transactions?: number;
}

export interface InsightPreferenceDateListing {
  /** The day of month at which budgeting/insights should start. */
  day_of_month?: number;
}

export interface Installation {
  /** Your public key. This is the public part of the key pair that you are going to use to create value of the "X-Bunq-Client-Signature" header for all future API calls. */
  client_public_key: string;
}

export interface InstallationCreate {
  /** The Id object of the created Installation */
  Id?: BunqId;
  /** The Token object of this Installation. */
  Token?: InstallationToken;
  /** The ServerPublicKey object of the created Installation */
  ServerPublicKey?: InstallationServerPublicKey;
}

export interface InstallationListing {
  /** The id of the Installation as created on the server. You can use this id to request the server's public key again. */
  id?: number;
}

export interface InstallationRead {
  /** The id of the Installation as created on the server. You can use this id to request the server's public key again. */
  id?: number;
}

export interface InstallationServerPublicKey {
  /** The server's public key for this Installation. You should use this key to verify the "X-Bunq-Server-Signature" header for each response from the server. */
  server_public_key?: string;
}

export interface InstallationServerPublicKeyListing {
  /** The server's public key for this Installation. */
  server_public_key?: string;
}

export interface InstallationToken {
  /** The id of the Token. */
  id?: number;
  /** The timestamp of the Token's creation. */
  created?: string;
  /** The timestamp of the Token's last update. */
  updated?: string;
  /** The installation token is the token the client has to provide in the "X-Bunq-Client-Authentication" header for the creation of a DeviceServer and SessionServer. */
  token?: string;
}

export interface Invoice {
  /** The invoice status. */
  status?: string;
  /** The description provided by the admin. */
  description: string;
  /** The external url provided by the admin. */
  external_url: string;
  /** The id of the invoice object. */
  id?: number;
  /** The timestamp of the invoice object's creation. */
  created?: string;
  /** The timestamp of the invoice object's last update. */
  updated?: string;
  /** The invoice date. */
  invoice_date?: string;
  /** The invoice number. */
  invoice_number?: string;
  /** The category to display to the user. */
  category?: string;
  /** The invoice item groups. */
  group?: InvoiceItemGroup[];
  /** The total discounted item price including VAT. */
  total_vat_inclusive?: Amount;
  /** The total discounted item price excluding VAT. */
  total_vat_exclusive?: Amount;
  /** The VAT on the total discounted item price. */
  total_vat?: Amount;
  /** The label that's displayed to the counterparty with the invoice. Includes user. */
  alias?: LabelMonetaryAccount;
  /** The customer's address. */
  address?: Address;
  /** The label of the counterparty of the invoice. Includes user. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The company's address. */
  counterparty_address?: Address;
  /** The company's chamber of commerce number. */
  chamber_of_commerce_number?: string;
  /** The company's chamber of commerce number. */
  vat_number?: string;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
}

export interface InvoiceByUserListing {
  /** The id of the invoice object. */
  id?: number;
  /** The timestamp of the invoice object's creation. */
  created?: string;
  /** The timestamp of the invoice object's last update. */
  updated?: string;
  /** The invoice date. */
  invoice_date?: string;
  /** The invoice number. */
  invoice_number?: string;
  /** The invoice status. */
  status?: string;
  /** The invoice item groups. */
  group?: InvoiceItemGroup[];
  /** The total discounted item price including VAT. */
  total_vat_inclusive?: Amount;
  /** The total discounted item price excluding VAT. */
  total_vat_exclusive?: Amount;
  /** The VAT on the total discounted item price. */
  total_vat?: Amount;
  /** The label that's displayed to the counterparty with the invoice. Includes user. */
  alias?: LabelMonetaryAccount;
  /** The customer's address. */
  address?: Address;
  /** The label of the counterparty of the invoice. Includes user. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The company's address. */
  counterparty_address?: Address;
  /** The company's chamber of commerce number. */
  chamber_of_commerce_number?: string;
  /** The company's chamber of commerce number. */
  vat_number?: string;
}

export interface InvoiceByUserRead {
  /** The id of the invoice object. */
  id?: number;
  /** The timestamp of the invoice object's creation. */
  created?: string;
  /** The timestamp of the invoice object's last update. */
  updated?: string;
  /** The invoice date. */
  invoice_date?: string;
  /** The invoice number. */
  invoice_number?: string;
  /** The invoice status. */
  status?: string;
  /** The invoice item groups. */
  group?: InvoiceItemGroup[];
  /** The total discounted item price including VAT. */
  total_vat_inclusive?: Amount;
  /** The total discounted item price excluding VAT. */
  total_vat_exclusive?: Amount;
  /** The VAT on the total discounted item price. */
  total_vat?: Amount;
  /** The label that's displayed to the counterparty with the invoice. Includes user. */
  alias?: LabelMonetaryAccount;
  /** The customer's address. */
  address?: Address;
  /** The label of the counterparty of the invoice. Includes user. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The company's address. */
  counterparty_address?: Address;
  /** The company's chamber of commerce number. */
  chamber_of_commerce_number?: string;
  /** The company's chamber of commerce number. */
  vat_number?: string;
}

export type InvoiceExportPdfContentListing = object;

export interface InvoiceItem {
  /** The id of the invoice item. */
  id?: number;
  /** The billing date of the item. */
  billing_date?: string;
  /** The price description. */
  type_description?: string;
  /** The translated price description. */
  type_description_translated?: string;
  /** The unit item price excluding VAT. */
  unit_vat_exclusive?: Amount;
  /** The unit item price including VAT. */
  unit_vat_inclusive?: Amount;
  /** The VAT tax fraction. */
  vat?: number;
  /** The number of items priced. */
  quantity?: number;
  /** The item price excluding VAT. */
  total_vat_exclusive?: Amount;
  /** The item price including VAT. */
  total_vat_inclusive?: Amount;
}

export interface InvoiceItemGroup {
  /** The type of the invoice item group. */
  type?: string;
  /** The description of the type of the invoice item group. */
  type_description?: string;
  /** The translated description of the type of the invoice item group. */
  type_description_translated?: string;
  /** The identifier of the invoice item group. */
  instance_description?: string;
  /** The unit item price excluding VAT. */
  product_vat_exclusive?: Amount;
  /** The unit item price including VAT. */
  product_vat_inclusive?: Amount;
  /** The invoice items in the group. */
  item?: InvoiceItem[];
}

export interface InvoiceListing {
  /** The id of the invoice object. */
  id?: number;
  /** The timestamp of the invoice object's creation. */
  created?: string;
  /** The timestamp of the invoice object's last update. */
  updated?: string;
  /** The invoice date. */
  invoice_date?: string;
  /** The invoice number. */
  invoice_number?: string;
  /** The invoice status. */
  status?: string;
  /** The category to display to the user. */
  category?: string;
  /** The invoice item groups. */
  group?: InvoiceItemGroup[];
  /** The total discounted item price including VAT. */
  total_vat_inclusive?: Amount;
  /** The total discounted item price excluding VAT. */
  total_vat_exclusive?: Amount;
  /** The VAT on the total discounted item price. */
  total_vat?: Amount;
  /** The label that's displayed to the counterparty with the invoice. Includes user. */
  alias?: LabelMonetaryAccount;
  /** The customer's address. */
  address?: Address;
  /** The label of the counterparty of the invoice. Includes user. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The company's address. */
  counterparty_address?: Address;
  /** The company's chamber of commerce number. */
  chamber_of_commerce_number?: string;
  /** The company's chamber of commerce number. */
  vat_number?: string;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
}

export interface InvoiceRead {
  /** The id of the invoice object. */
  id?: number;
  /** The timestamp of the invoice object's creation. */
  created?: string;
  /** The timestamp of the invoice object's last update. */
  updated?: string;
  /** The invoice date. */
  invoice_date?: string;
  /** The invoice number. */
  invoice_number?: string;
  /** The invoice status. */
  status?: string;
  /** The category to display to the user. */
  category?: string;
  /** The invoice item groups. */
  group?: InvoiceItemGroup[];
  /** The total discounted item price including VAT. */
  total_vat_inclusive?: Amount;
  /** The total discounted item price excluding VAT. */
  total_vat_exclusive?: Amount;
  /** The VAT on the total discounted item price. */
  total_vat?: Amount;
  /** The label that's displayed to the counterparty with the invoice. Includes user. */
  alias?: LabelMonetaryAccount;
  /** The customer's address. */
  address?: Address;
  /** The label of the counterparty of the invoice. Includes user. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The company's address. */
  counterparty_address?: Address;
  /** The company's chamber of commerce number. */
  chamber_of_commerce_number?: string;
  /** The company's chamber of commerce number. */
  vat_number?: string;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
}

export interface Issuer {
  /** The BIC code. */
  bic?: string;
  /** The name of the bank. */
  name?: string;
}

export interface LabelCard {
  /** The public UUID. */
  uuid?: string;
  /** The type of the card. */
  type?: string;
  /** The second line on the card. */
  second_line?: string;
  /** The date this card will expire. */
  expiry_date?: string;
  /** The status of the card. */
  status?: string;
  /** The owner of this card. */
  label_user?: LabelUser;
}

export interface LabelMonetaryAccount {
  /** The IBAN of the monetary account. */
  iban?: string;
  /** The name to display with this monetary account. */
  display_name?: string;
  /** The avatar of the monetary account. */
  avatar?: Avatar;
  /** The user this monetary account belongs to. */
  label_user?: LabelUser;
  /** The country of the user. Formatted as a ISO 3166-1 alpha-2 country code. */
  country?: string;
  /** Bunq.me pointer with type and value. */
  bunq_me?: Pointer;
  /** Whether or not the monetary account is light. */
  is_light?: boolean;
  /** The BIC used for a SWIFT payment. */
  swift_bic?: string;
  /** The account number used for a SWIFT payment. May or may not be an IBAN. */
  swift_account_number?: string;
  /** The account number used for a Transferwise payment. May or may not be an IBAN. */
  transferwise_account_number?: string;
  /** The bank code used for a Transferwise payment. May or may not be a BIC. */
  transferwise_bank_code?: string;
  /** The merchant category code. */
  merchant_category_code?: string;
}

export interface LabelUser {
  /** The public UUID of the label-user. */
  uuid?: string;
  /** The name to be displayed for this user, as it was given on the request. */
  display_name?: string;
  /** The country of the user. 000 stands for "unknown" */
  country?: string;
  /** The current avatar of the user. */
  avatar?: Avatar;
  /** The current nickname of the user. */
  public_nick_name?: string;
}

export interface MasterCardAction {
  /** The id of the MastercardAction. */
  id?: number;
  /** The id of the monetary account this action links to. */
  monetary_account_id?: number;
  /** The id of the card this action links to. */
  card_id?: number;
  /** The amount of the transaction in local currency. */
  amount_local?: Amount;
  /** The amount of the transaction in local currency. */
  amount_converted?: Amount;
  /** The amount of the transaction in the monetary account's currency. */
  amount_billing?: Amount;
  /** The original amount in local currency. */
  amount_original_local?: Amount;
  /** The original amount in the monetary account's currency. */
  amount_original_billing?: Amount;
  /** The fee amount as charged by the merchant, if applicable. */
  amount_fee?: Amount;
  /** The response code by which authorised transaction can be identified as authorised by bunq. */
  card_authorisation_id_response?: string;
  /** Why the transaction was denied, if it was denied, or just ALLOWED. */
  decision?: string;
  /** The payment status of the transaction. For example PAYMENT_SUCCESSFUL, for a successful payment. */
  payment_status?: string;
  /** Empty if allowed, otherwise a textual explanation of why it was denied. */
  decision_description?: string;
  /** Empty if allowed, otherwise a textual explanation of why it was denied in user's language. */
  decision_description_translated?: string;
  /** Empty if allowed or if no relevant Together topic exists, otherwise contains the URL for a Together topic with more information about the decision. */
  decision_together_url?: string;
  /** The description for this transaction to display. */
  description?: string;
  /** The status in the authorisation process. */
  authorisation_status?: string;
  /** The type of transaction that was delivered using the card. */
  authorisation_type?: string;
  /** The type of entry mode the user used. Can be 'ATM', 'ICC', 'MAGNETIC_STRIPE' or 'E_COMMERCE'. */
  pan_entry_mode_user?: string;
  /** The setlement status in the authorisation process. */
  settlement_status?: string;
  /** The clearing status of the authorisation. Can be 'PENDING', 'FIRST_PRESENTMENT_COMPLETE' or 'REFUND_LENIENCY'. */
  clearing_status?: string;
  /** The maturity date. */
  maturity_date?: string;
  /** The city where the message originates from as announced by the terminal. */
  city?: string;
  /** The monetary account label of the account that this action is created for. */
  alias?: LabelMonetaryAccount;
  /** The monetary account label of the counterparty. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The label of the card. */
  label_card?: LabelCard;
  /** The identification string of the merchant. */
  merchant_id?: string;
  /** If this is a tokenisation action, this shows the status of the token. */
  token_status?: string;
  /** If this is a reservation, the moment the reservation will expire. */
  reservation_expiry_time?: string;
  /** The time when the processing of the clearing is expired, refunding the authorisation. */
  clearing_expiry_time?: string;
  /** The type of the limit applied to validate if this MasterCardAction was within the spending limits. The returned string matches the limit types as defined in the card endpoint. */
  applied_limit?: string;
  /** The secure code id for this mastercard action or null. */
  secure_code_id?: number;
  /** The ID of the wallet provider as defined by MasterCard. 420 = bunq Android app with Tap&Pay; 103 = Apple Pay. */
  wallet_provider_id?: string;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
  /** A reference to the Refunds if they exist. */
  all_mastercard_action_refund?: MasterCardActionRefund[];
  /** The Card Presence type of the POS. */
  pos_card_presence?: string;
  /** The Card Holder Presence type of the POS. */
  pos_card_holder_presence?: string;
  /** The whitelist id for this action or null. */
  eligible_whitelist_id?: number;
  /** The cashback payout item for this action or null */
  cashback_payout_item?: CashbackPayoutItem;
  /** The report for this transaction */
  mastercard_action_report?: MasterCardActionReport;
  /** The blacklist enabled for the merchant of this transaction */
  blacklist?: UserBlacklistMasterCardMerchant;
  /** The status of the additional authentication performed (3ds) by the user for this transaction. */
  additional_authentication_status?: string;
  /** Status checking the provided PIN. */
  pin_status?: string;
  /** The MCC provided. */
  merchant_category_code?: string;
}

export interface MasterCardActionListing {
  /** The id of the MastercardAction. */
  id?: number;
  /** The id of the monetary account this action links to. */
  monetary_account_id?: number;
  /** The id of the card this action links to. */
  card_id?: number;
  /** The amount of the transaction in local currency. */
  amount_local?: Amount;
  /** The amount of the transaction in local currency. */
  amount_converted?: Amount;
  /** The amount of the transaction in the monetary account's currency. */
  amount_billing?: Amount;
  /** The original amount in local currency. */
  amount_original_local?: Amount;
  /** The original amount in the monetary account's currency. */
  amount_original_billing?: Amount;
  /** The fee amount as charged by the merchant, if applicable. */
  amount_fee?: Amount;
  /** The response code by which authorised transaction can be identified as authorised by bunq. */
  card_authorisation_id_response?: string;
  /** Why the transaction was denied, if it was denied, or just ALLOWED. */
  decision?: string;
  /** The payment status of the transaction. For example PAYMENT_SUCCESSFUL, for a successful payment. */
  payment_status?: string;
  /** Empty if allowed, otherwise a textual explanation of why it was denied. */
  decision_description?: string;
  /** Empty if allowed, otherwise a textual explanation of why it was denied in user's language. */
  decision_description_translated?: string;
  /** Empty if allowed or if no relevant Together topic exists, otherwise contains the URL for a Together topic with more information about the decision. */
  decision_together_url?: string;
  /** The description for this transaction to display. */
  description?: string;
  /** The status in the authorisation process. */
  authorisation_status?: string;
  /** The type of transaction that was delivered using the card. */
  authorisation_type?: string;
  /** The type of entry mode the user used. Can be 'ATM', 'ICC', 'MAGNETIC_STRIPE' or 'E_COMMERCE'. */
  pan_entry_mode_user?: string;
  /** The setlement status in the authorisation process. */
  settlement_status?: string;
  /** The clearing status of the authorisation. Can be 'PENDING', 'FIRST_PRESENTMENT_COMPLETE' or 'REFUND_LENIENCY'. */
  clearing_status?: string;
  /** The maturity date. */
  maturity_date?: string;
  /** The city where the message originates from as announced by the terminal. */
  city?: string;
  /** The monetary account label of the account that this action is created for. */
  alias?: LabelMonetaryAccount;
  /** The monetary account label of the counterparty. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The label of the card. */
  label_card?: LabelCard;
  /** The identification string of the merchant. */
  merchant_id?: string;
  /** If this is a tokenisation action, this shows the status of the token. */
  token_status?: string;
  /** If this is a reservation, the moment the reservation will expire. */
  reservation_expiry_time?: string;
  /** The time when the processing of the clearing is expired, refunding the authorisation. */
  clearing_expiry_time?: string;
  /** The type of the limit applied to validate if this MasterCardAction was within the spending limits. The returned string matches the limit types as defined in the card endpoint. */
  applied_limit?: string;
  /** The secure code id for this mastercard action or null. */
  secure_code_id?: number;
  /** The ID of the wallet provider as defined by MasterCard. 420 = bunq Android app with Tap&Pay; 103 = Apple Pay. */
  wallet_provider_id?: string;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
  /** A reference to the Refunds if they exist. */
  all_mastercard_action_refund?: MasterCardActionRefund[];
  /** The Card Presence type of the POS. */
  pos_card_presence?: string;
  /** The Card Holder Presence type of the POS. */
  pos_card_holder_presence?: string;
  /** The whitelist id for this action or null. */
  eligible_whitelist_id?: number;
  /** The cashback payout item for this action or null */
  cashback_payout_item?: CashbackPayoutItem;
  /** The report for this transaction */
  mastercard_action_report?: MasterCardActionReport;
  /** The blacklist enabled for the merchant of this transaction */
  blacklist?: UserBlacklistMasterCardMerchant;
  /** The status of the additional authentication performed (3ds) by the user for this transaction. */
  additional_authentication_status?: string;
  /** Status checking the provided PIN. */
  pin_status?: string;
  /** The MCC provided. */
  merchant_category_code?: string;
}

export interface MasterCardActionRead {
  /** The id of the MastercardAction. */
  id?: number;
  /** The id of the monetary account this action links to. */
  monetary_account_id?: number;
  /** The id of the card this action links to. */
  card_id?: number;
  /** The amount of the transaction in local currency. */
  amount_local?: Amount;
  /** The amount of the transaction in local currency. */
  amount_converted?: Amount;
  /** The amount of the transaction in the monetary account's currency. */
  amount_billing?: Amount;
  /** The original amount in local currency. */
  amount_original_local?: Amount;
  /** The original amount in the monetary account's currency. */
  amount_original_billing?: Amount;
  /** The fee amount as charged by the merchant, if applicable. */
  amount_fee?: Amount;
  /** The response code by which authorised transaction can be identified as authorised by bunq. */
  card_authorisation_id_response?: string;
  /** Why the transaction was denied, if it was denied, or just ALLOWED. */
  decision?: string;
  /** The payment status of the transaction. For example PAYMENT_SUCCESSFUL, for a successful payment. */
  payment_status?: string;
  /** Empty if allowed, otherwise a textual explanation of why it was denied. */
  decision_description?: string;
  /** Empty if allowed, otherwise a textual explanation of why it was denied in user's language. */
  decision_description_translated?: string;
  /** Empty if allowed or if no relevant Together topic exists, otherwise contains the URL for a Together topic with more information about the decision. */
  decision_together_url?: string;
  /** The description for this transaction to display. */
  description?: string;
  /** The status in the authorisation process. */
  authorisation_status?: string;
  /** The type of transaction that was delivered using the card. */
  authorisation_type?: string;
  /** The type of entry mode the user used. Can be 'ATM', 'ICC', 'MAGNETIC_STRIPE' or 'E_COMMERCE'. */
  pan_entry_mode_user?: string;
  /** The setlement status in the authorisation process. */
  settlement_status?: string;
  /** The clearing status of the authorisation. Can be 'PENDING', 'FIRST_PRESENTMENT_COMPLETE' or 'REFUND_LENIENCY'. */
  clearing_status?: string;
  /** The maturity date. */
  maturity_date?: string;
  /** The city where the message originates from as announced by the terminal. */
  city?: string;
  /** The monetary account label of the account that this action is created for. */
  alias?: LabelMonetaryAccount;
  /** The monetary account label of the counterparty. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The label of the card. */
  label_card?: LabelCard;
  /** The identification string of the merchant. */
  merchant_id?: string;
  /** If this is a tokenisation action, this shows the status of the token. */
  token_status?: string;
  /** If this is a reservation, the moment the reservation will expire. */
  reservation_expiry_time?: string;
  /** The time when the processing of the clearing is expired, refunding the authorisation. */
  clearing_expiry_time?: string;
  /** The type of the limit applied to validate if this MasterCardAction was within the spending limits. The returned string matches the limit types as defined in the card endpoint. */
  applied_limit?: string;
  /** The secure code id for this mastercard action or null. */
  secure_code_id?: number;
  /** The ID of the wallet provider as defined by MasterCard. 420 = bunq Android app with Tap&Pay; 103 = Apple Pay. */
  wallet_provider_id?: string;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
  /** A reference to the Refunds if they exist. */
  all_mastercard_action_refund?: MasterCardActionRefund[];
  /** The Card Presence type of the POS. */
  pos_card_presence?: string;
  /** The Card Holder Presence type of the POS. */
  pos_card_holder_presence?: string;
  /** The whitelist id for this action or null. */
  eligible_whitelist_id?: number;
  /** The cashback payout item for this action or null */
  cashback_payout_item?: CashbackPayoutItem;
  /** The report for this transaction */
  mastercard_action_report?: MasterCardActionReport;
  /** The blacklist enabled for the merchant of this transaction */
  blacklist?: UserBlacklistMasterCardMerchant;
  /** The status of the additional authentication performed (3ds) by the user for this transaction. */
  additional_authentication_status?: string;
  /** Status checking the provided PIN. */
  pin_status?: string;
  /** The MCC provided. */
  merchant_category_code?: string;
}

export interface MasterCardActionReference {
  /** The id of the event. */
  event_id?: number;
}

export interface MasterCardActionRefund {
  /** Type of this refund. Can de REFUND or CHARGEBACK */
  type?: string;
  /** The sub type of this refund indicating whether the chargeback will be FULL or PARTIAL. */
  sub_type?: string;
  /** The amount to refund. */
  amount?: Amount;
  /** The category of the refund, required for chargeback. */
  category?: string;
  /** The reason of the refund. Can be REFUND_EXPIRED_TRANSACTION, REFUND_REQUESTED, REFUND_MERCHANT, REFUND_CHARGEBACK. */
  reason?: string;
  /** Comment about the refund. */
  comment?: string;
  /** The Attachments to attach to the refund request. */
  attachment?: AttachmentMasterCardActionRefund[];
  /** Proof that the user acknowledged the terms and conditions for chargebacks. */
  terms_and_conditions?: string;
  /** The id of the refund. */
  id?: number;
  /** The timestamp of the refund's creation. */
  created?: string;
  /** The timestamp of the refund's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The status of the refunded mastercard action. Can be AUTO_APPROVED, AUTO_APPROVED_WAITING_FOR_EXPIRY, PENDING_APPROVAL, APPROVED, REFUNDED, DENIED or FAILED */
  status?: string;
  /** The reference to the object this refund applies to. */
  reference_mastercard_action_event?: MasterCardActionReference[];
  /** The id of mastercard action being refunded. */
  mastercard_action_id?: number;
  /** The monetary account label of the account that this action is created for. */
  alias?: LabelMonetaryAccount;
  /** The monetary account label of the counterparty. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The description for this transaction to display. */
  description?: string;
  /** The label of the card. */
  label_card?: LabelCard;
  /** The time the refund will take place. */
  time_refund?: string;
  /** All additional information provided by the user. */
  additional_information?: AdditionalInformation;
  /** Description of the refund's current status. */
  status_description?: string;
  /** Description of the refund's current status, translated in user's language. */
  status_description_translated?: string;
  /** Together topic concerning the refund's current status. */
  status_together_url?: string;
}

export interface MasterCardActionReport {
  /** The id of mastercard action being reported. */
  mastercard_action_id?: number;
  /** The id of mastercard action being reported. */
  type?: string;
  /** The id of mastercard action being reported. */
  status?: string;
  /** The reported merchant. */
  merchant_id?: string;
  /** The name of the merchant. */
  merchant_name?: string;
  /** The monetary account label of the merchant. */
  counterparty_alias?: LabelMonetaryAccount;
}

export interface MasterCardIdentityCheckChallengeRequestUser {
  /** The status of the identity check. Can be ACCEPTED_PENDING_RESPONSE or REJECTED_PENDING_RESPONSE. */
  status: string;
}

export interface MasterCardIdentityCheckChallengeRequestUserRead {
  /** The transaction amount. */
  amount?: string;
  /** When the identity check expires. */
  expiry_time?: string;
  /** The description of the purchase. NULL if no description is given. */
  description?: string;
  /** The status of the secure code. Can be PENDING, ACCEPTED, REJECTED, EXPIRED. */
  status?: string;
  /** Textual explanation of the decision. */
  decision_description?: string;
  /** Textual explanation of the decision in user's language. */
  decision_description_translated?: string;
  /** The return url for the merchant app after the challenge is accepted or rejected. */
  url_merchant_app?: string;
  /** The monetary account label of the counterparty. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The ID of the latest event for the identity check. */
  event_id?: number;
}

export interface MasterCardIdentityCheckChallengeRequestUserUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export type MasterCardPaymentListing = object;

export interface MonetaryAccount {
  MonetaryAccountBank?: MonetaryAccountBank;
  MonetaryAccountJoint?: MonetaryAccountJoint;
  MonetaryAccountLight?: MonetaryAccountLight;
  MonetaryAccountSavings?: MonetaryAccountSavings;
  MonetaryAccountExternal?: MonetaryAccountExternal;
  MonetaryAccountInvestment?: MonetaryAccountInvestment;
  MonetaryAccountExternalSavings?: MonetaryAccountExternalSavings;
}

export interface MonetaryAccountBank {
  /** The currency of the MonetaryAccountBank as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountBank. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountBank. Defaults to 1000 EUR. Currency must match the MonetaryAccountBank's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The UUID of the Avatar of the MonetaryAccountBank. */
  avatar_uuid?: string;
  /** The status of the MonetaryAccountBank. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountBank providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountBank, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountBank. Can be any user provided message. */
  reason_description?: string;
  /** The legal name of the user / company using this monetary account. */
  display_name?: string;
  /** The settings of the MonetaryAccountBank. */
  setting?: MonetaryAccountSetting;
  /** The country of the monetary account IBAN. */
  country_iban?: string;
  /** The id of the MonetaryAccountBank. */
  id?: number;
  /** The timestamp of the MonetaryAccountBank's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountBank's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountBank. */
  avatar?: Avatar;
  /** The maximum Amount the MonetaryAccountBank can be 'in the red'. */
  overdraft_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountBank. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountBank. */
  alias?: Pointer[];
  /** The MonetaryAccountBank's public UUID. */
  public_uuid?: string;
  /** The id of the User who owns the MonetaryAccountBank. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
}

export interface MonetaryAccountBankCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface MonetaryAccountBankListing {
  /** The id of the MonetaryAccountBank. */
  id?: number;
  /** The timestamp of the MonetaryAccountBank's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountBank's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountBank. */
  avatar?: Avatar;
  /** The currency of the MonetaryAccountBank as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountBank. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountBank. Defaults to 1000 EUR. Currency must match the MonetaryAccountBank's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The maximum Amount the MonetaryAccountBank can be 'in the red'. */
  overdraft_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountBank. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountBank. */
  alias?: Pointer[];
  /** The MonetaryAccountBank's public UUID. */
  public_uuid?: string;
  /** The status of the MonetaryAccountBank. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountBank providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountBank, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountBank. Can be any user provided message. */
  reason_description?: string;
  /** The id of the User who owns the MonetaryAccountBank. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The legal name of the user / company using this monetary account. */
  display_name?: string;
  /** The settings of the MonetaryAccountBank. */
  setting?: MonetaryAccountSetting;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
}

export interface MonetaryAccountBankRead {
  /** The id of the MonetaryAccountBank. */
  id?: number;
  /** The timestamp of the MonetaryAccountBank's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountBank's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountBank. */
  avatar?: Avatar;
  /** The currency of the MonetaryAccountBank as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountBank. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountBank. Defaults to 1000 EUR. Currency must match the MonetaryAccountBank's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The maximum Amount the MonetaryAccountBank can be 'in the red'. */
  overdraft_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountBank. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountBank. */
  alias?: Pointer[];
  /** The MonetaryAccountBank's public UUID. */
  public_uuid?: string;
  /** The status of the MonetaryAccountBank. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountBank providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountBank, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountBank. Can be any user provided message. */
  reason_description?: string;
  /** The id of the User who owns the MonetaryAccountBank. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The legal name of the user / company using this monetary account. */
  display_name?: string;
  /** The settings of the MonetaryAccountBank. */
  setting?: MonetaryAccountSetting;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
}

export interface MonetaryAccountBankUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export type MonetaryAccountCard = object;

export interface MonetaryAccountCardListing {
  /** The id of the MonetaryAccountCard. */
  id?: number;
  /** The timestamp of the MonetaryAccountCard's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountCard's last update. */
  updated?: string;
  /** The currency of the MonetaryAccountCard as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountCard. Defaults to 'prepaid credit card'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountCard. */
  daily_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountCard. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountCard. */
  alias?: Pointer[];
  /** The MonetaryAccountCard's public UUID. */
  public_uuid?: string;
  /** The status of the MonetaryAccountCard. */
  status?: string;
  /** The sub-status of the MonetaryAccountCard providing extra information regarding the status. */
  sub_status?: string;
  /** The id of the User who owns the MonetaryAccountCard. */
  user_id?: number;
}

export interface MonetaryAccountCardRead {
  /** The id of the MonetaryAccountCard. */
  id?: number;
  /** The timestamp of the MonetaryAccountCard's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountCard's last update. */
  updated?: string;
  /** The currency of the MonetaryAccountCard as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountCard. Defaults to 'prepaid credit card'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountCard. */
  daily_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountCard. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountCard. */
  alias?: Pointer[];
  /** The MonetaryAccountCard's public UUID. */
  public_uuid?: string;
  /** The status of the MonetaryAccountCard. */
  status?: string;
  /** The sub-status of the MonetaryAccountCard providing extra information regarding the status. */
  sub_status?: string;
  /** The id of the User who owns the MonetaryAccountCard. */
  user_id?: number;
}

export interface MonetaryAccountCardUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface MonetaryAccountExternal {
  /** The currency of the MonetaryAccountExternal as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The service the MonetaryAccountExternal is connected with. */
  service: string;
  /** The description of the MonetaryAccountExternal. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountExternal. Defaults to 1000 EUR. Currency must match the MonetaryAccountExternal's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The UUID of the Avatar of the MonetaryAccountExternal. */
  avatar_uuid?: string;
  /** The status of the MonetaryAccountExternal. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountExternal providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountExternal, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountExternal. Can be any user provided message. */
  reason_description?: string;
  /** The legal name of the user / company using this monetary account. */
  display_name?: string;
  /** The settings of the MonetaryAccountExternal. */
  setting?: MonetaryAccountSetting;
  /** The id of the MonetaryAccountExternal. */
  id?: number;
  /** The timestamp of the MonetaryAccountExternal's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountExternal's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountExternal. */
  avatar?: Avatar;
  /** The maximum Amount the MonetaryAccountExternal can be 'in the red'. */
  overdraft_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountExternal. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountExternal. */
  alias?: Pointer[];
  /** The MonetaryAccountExternal's public UUID. */
  public_uuid?: string;
  /** The id of the User who owns the MonetaryAccountExternal. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
}

export interface MonetaryAccountExternalCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface MonetaryAccountExternalListing {
  /** The id of the MonetaryAccountExternal. */
  id?: number;
  /** The timestamp of the MonetaryAccountExternal's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountExternal's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountExternal. */
  avatar?: Avatar;
  /** The currency of the MonetaryAccountExternal as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountExternal. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountExternal. Defaults to 1000 EUR. Currency must match the MonetaryAccountExternal's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The maximum Amount the MonetaryAccountExternal can be 'in the red'. */
  overdraft_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountExternal. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountExternal. */
  alias?: Pointer[];
  /** The MonetaryAccountExternal's public UUID. */
  public_uuid?: string;
  /** The status of the MonetaryAccountExternal. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountExternal providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountExternal, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountExternal. Can be any user provided message. */
  reason_description?: string;
  /** The id of the User who owns the MonetaryAccountExternal. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The legal name of the user / company using this monetary account. */
  display_name?: string;
  /** The settings of the MonetaryAccountExternal. */
  setting?: MonetaryAccountSetting;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
}

export interface MonetaryAccountExternalRead {
  /** The id of the MonetaryAccountExternal. */
  id?: number;
  /** The timestamp of the MonetaryAccountExternal's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountExternal's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountExternal. */
  avatar?: Avatar;
  /** The currency of the MonetaryAccountExternal as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountExternal. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountExternal. Defaults to 1000 EUR. Currency must match the MonetaryAccountExternal's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The maximum Amount the MonetaryAccountExternal can be 'in the red'. */
  overdraft_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountExternal. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountExternal. */
  alias?: Pointer[];
  /** The MonetaryAccountExternal's public UUID. */
  public_uuid?: string;
  /** The status of the MonetaryAccountExternal. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountExternal providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountExternal, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountExternal. Can be any user provided message. */
  reason_description?: string;
  /** The id of the User who owns the MonetaryAccountExternal. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The legal name of the user / company using this monetary account. */
  display_name?: string;
  /** The settings of the MonetaryAccountExternal. */
  setting?: MonetaryAccountSetting;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
}

export interface MonetaryAccountExternalSavings {
  /** The currency of the MonetaryAccountExternalSavings as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The service the MonetaryAccountExternalSavings is connected with. */
  service: string;
  /** The description of the MonetaryAccountExternalSavings. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountExternalSavings. Defaults to 1000 EUR. Currency must match the MonetaryAccountExternalSavings's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The UUID of the Avatar of the MonetaryAccountExternalSavings. */
  avatar_uuid?: string;
  /** The status of the MonetaryAccountExternalSavings. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountExternalSavings providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountExternalSavings, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountExternalSavings. Can be any user provided message. */
  reason_description?: string;
  /** The legal name of the user / company using this monetary account. */
  display_name?: string;
  /** The settings of the MonetaryAccountExternalSavings. */
  setting?: MonetaryAccountSetting;
  /** The Savings Goal set for this MonetaryAccountExternalSavings. */
  savings_goal?: Amount;
  /** The id of the MonetaryAccountExternalSavings. */
  id?: number;
  /** The timestamp of the MonetaryAccountExternalSavings's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountExternalSavings's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountExternalSavings. */
  avatar?: Avatar;
  /** The current available balance Amount of the MonetaryAccountExternalSavings. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountExternalSavings. */
  alias?: Pointer[];
  /** The MonetaryAccountExternalSavings's public UUID. */
  public_uuid?: string;
  /** The id of the User who owns the MonetaryAccountExternalSavings. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
  /** The progress in percentages for the Savings Goal set for this MonetaryAccountExternalSavings. */
  savings_goal_progress?: number;
  /** The number of payments that can be made from this savings account */
  number_of_payment_remaining?: string;
}

export interface MonetaryAccountExternalSavingsCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface MonetaryAccountExternalSavingsListing {
  /** The id of the MonetaryAccountExternalSavings. */
  id?: number;
  /** The timestamp of the MonetaryAccountExternalSavings's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountExternalSavings's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountExternalSavings. */
  avatar?: Avatar;
  /** The currency of the MonetaryAccountExternalSavings as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountExternalSavings. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountExternalSavings. Defaults to 1000 EUR. Currency must match the MonetaryAccountExternalSavings's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountExternalSavings. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountExternalSavings. */
  alias?: Pointer[];
  /** The MonetaryAccountExternalSavings's public UUID. */
  public_uuid?: string;
  /** The status of the MonetaryAccountExternalSavings. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountExternalSavings providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountExternalSavings, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountExternalSavings. Can be any user provided message. */
  reason_description?: string;
  /** The id of the User who owns the MonetaryAccountExternalSavings. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The legal name of the user / company using this monetary account. */
  display_name?: string;
  /** The settings of the MonetaryAccountExternalSavings. */
  setting?: MonetaryAccountSetting;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
  /** The Savings Goal set for this MonetaryAccountExternalSavings. */
  savings_goal?: Amount;
  /** The progress in percentages for the Savings Goal set for this MonetaryAccountExternalSavings. */
  savings_goal_progress?: number;
  /** The number of payments that can be made from this savings account */
  number_of_payment_remaining?: string;
}

export interface MonetaryAccountExternalSavingsRead {
  /** The id of the MonetaryAccountExternalSavings. */
  id?: number;
  /** The timestamp of the MonetaryAccountExternalSavings's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountExternalSavings's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountExternalSavings. */
  avatar?: Avatar;
  /** The currency of the MonetaryAccountExternalSavings as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountExternalSavings. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountExternalSavings. Defaults to 1000 EUR. Currency must match the MonetaryAccountExternalSavings's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountExternalSavings. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountExternalSavings. */
  alias?: Pointer[];
  /** The MonetaryAccountExternalSavings's public UUID. */
  public_uuid?: string;
  /** The status of the MonetaryAccountExternalSavings. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountExternalSavings providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountExternalSavings, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountExternalSavings. Can be any user provided message. */
  reason_description?: string;
  /** The id of the User who owns the MonetaryAccountExternalSavings. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The legal name of the user / company using this monetary account. */
  display_name?: string;
  /** The settings of the MonetaryAccountExternalSavings. */
  setting?: MonetaryAccountSetting;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
  /** The Savings Goal set for this MonetaryAccountExternalSavings. */
  savings_goal?: Amount;
  /** The progress in percentages for the Savings Goal set for this MonetaryAccountExternalSavings. */
  savings_goal_progress?: number;
  /** The number of payments that can be made from this savings account */
  number_of_payment_remaining?: string;
}

export interface MonetaryAccountExternalSavingsUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface MonetaryAccountExternalUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface MonetaryAccountInvestment {
  /** The currency of the MonetaryAccountInvestment as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The provider of the investment service. */
  provider: string;
  /** The description of the MonetaryAccountInvestment. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountInvestment. Defaults to 1000 EUR. Currency must match the MonetaryAccountInvestment's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The UUID of the Avatar of the MonetaryAccountInvestment. */
  avatar_uuid?: string;
  /** The status of the MonetaryAccountInvestment. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountInvestment providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountInvestment, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountInvestment. Can be any user provided message. */
  reason_description?: string;
  /** The legal name of the user / company using this monetary account. */
  display_name?: string;
  /** The settings of the MonetaryAccountInvestment. */
  setting?: MonetaryAccountSetting;
  /** The Birdee investment portfolio. */
  birdee_investment_portfolio?: BirdeeInvestmentPortfolio;
  /** The id of the MonetaryAccountInvestment. */
  id?: number;
  /** The timestamp of the MonetaryAccountInvestment's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountInvestment's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountInvestment. */
  avatar?: Avatar;
  /** The current available balance Amount of the MonetaryAccountInvestment. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountInvestment. */
  alias?: Pointer[];
  /** The MonetaryAccountInvestment's public UUID. */
  public_uuid?: string;
  /** The id of the User who owns the MonetaryAccountInvestment. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
}

export interface MonetaryAccountJoint {
  /** The currency of the MonetaryAccountJoint as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountJoint. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountJoint. Defaults to 1000 EUR. Currency must match the MonetaryAccountJoint's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The maximum Amount the MonetaryAccountJoint can be 'in the red'. */
  overdraft_limit?: Amount;
  /** The Aliases for the MonetaryAccountJoint. */
  alias?: Pointer[];
  /** The UUID of the Avatar of the MonetaryAccountJoint. */
  avatar_uuid?: string;
  /** The status of the MonetaryAccountJoint. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountJoint providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountJoint, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountJoint. Can be any user provided message. */
  reason_description?: string;
  /** The users the account will be joint with. */
  all_co_owner?: CoOwner[];
  /** The settings of the MonetaryAccountJoint. */
  setting?: MonetaryAccountSetting;
  /** The id of the MonetaryAccountJoint. */
  id?: number;
  /** The timestamp of the MonetaryAccountJoint's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountJoint's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountJoint. */
  avatar?: Avatar;
  /** The current available balance Amount of the MonetaryAccountJoint. */
  balance?: Amount;
  /** The MonetaryAccountJoint's public UUID. */
  public_uuid?: string;
  /** The id of the User who owns the MonetaryAccountJoint. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
}

export interface MonetaryAccountJointCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface MonetaryAccountJointListing {
  /** The id of the MonetaryAccountJoint. */
  id?: number;
  /** The timestamp of the MonetaryAccountJoint's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountJoint's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountJoint. */
  avatar?: Avatar;
  /** The currency of the MonetaryAccountJoint as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountJoint. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountJoint. Defaults to 1000 EUR. Currency must match the MonetaryAccountJoint's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The maximum Amount the MonetaryAccountJoint can be 'in the red'. */
  overdraft_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountJoint. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountJoint. */
  alias?: Pointer[];
  /** The MonetaryAccountJoint's public UUID. */
  public_uuid?: string;
  /** The status of the MonetaryAccountJoint. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountJoint providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountJoint, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountJoint. Can be any user provided message. */
  reason_description?: string;
  /** The users the account will be joint with. */
  all_co_owner?: CoOwner[];
  /** The id of the User who owns the MonetaryAccountJoint. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The settings of the MonetaryAccountJoint. */
  setting?: MonetaryAccountSetting;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
}

export interface MonetaryAccountJointRead {
  /** The id of the MonetaryAccountJoint. */
  id?: number;
  /** The timestamp of the MonetaryAccountJoint's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountJoint's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountJoint. */
  avatar?: Avatar;
  /** The currency of the MonetaryAccountJoint as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountJoint. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountJoint. Defaults to 1000 EUR. Currency must match the MonetaryAccountJoint's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The maximum Amount the MonetaryAccountJoint can be 'in the red'. */
  overdraft_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountJoint. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountJoint. */
  alias?: Pointer[];
  /** The MonetaryAccountJoint's public UUID. */
  public_uuid?: string;
  /** The status of the MonetaryAccountJoint. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountJoint providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountJoint, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountJoint. Can be any user provided message. */
  reason_description?: string;
  /** The users the account will be joint with. */
  all_co_owner?: CoOwner[];
  /** The id of the User who owns the MonetaryAccountJoint. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The settings of the MonetaryAccountJoint. */
  setting?: MonetaryAccountSetting;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
}

export interface MonetaryAccountJointUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface MonetaryAccountLight {
  /** The currency of the MonetaryAccountLight as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountLight. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountLight. Defaults to 1000 EUR. Currency must match the MonetaryAccountLight's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The UUID of the Avatar of the MonetaryAccountLight. */
  avatar_uuid?: string;
  /** The status of the MonetaryAccountLight. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountLight providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountBank, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountBank. Can be any user provided message. */
  reason_description?: string;
  /** The settings of the MonetaryAccountLight. */
  setting?: MonetaryAccountSetting;
  /** The id of the MonetaryAccountLight. */
  id?: number;
  /** The timestamp of the MonetaryAccountLight's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountLight's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountLight. */
  avatar?: Avatar;
  /** The current available balance Amount of the MonetaryAccountLight. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountLight. */
  alias?: Pointer[];
  /** The MonetaryAccountLight's public UUID. */
  public_uuid?: string;
  /** The id of the User who owns the MonetaryAccountLight. */
  user_id?: number;
  /** The maximum balance Amount of the MonetaryAccountLight. */
  balance_maximum?: Amount;
  /** The amount of the monthly budget used. */
  budget_month_used?: Amount;
  /** The total amount of the monthly budget. */
  budget_month_maximum?: Amount;
  /** The amount of the yearly budget used. */
  budget_year_used?: Amount;
  /** The total amount of the yearly budget. */
  budget_year_maximum?: Amount;
  /** The amount of the yearly withdrawal budget used. */
  budget_withdrawal_year_used?: Amount;
  /** The total amount of the yearly withdrawal budget. */
  budget_withdrawal_year_maximum?: Amount;
}

export interface MonetaryAccountListing {
  MonetaryAccountBank?: MonetaryAccountBank;
  MonetaryAccountJoint?: MonetaryAccountJoint;
  MonetaryAccountLight?: MonetaryAccountLight;
  MonetaryAccountSavings?: MonetaryAccountSavings;
  MonetaryAccountExternal?: MonetaryAccountExternal;
  MonetaryAccountInvestment?: MonetaryAccountInvestment;
  MonetaryAccountExternalSavings?: MonetaryAccountExternalSavings;
}

export interface MonetaryAccountProfile {
  /** The profile settings for triggering the fill of a monetary account. */
  profile_fill?: MonetaryAccountProfileFill;
  /** The profile settings for moving excesses to a savings account */
  profile_drain?: MonetaryAccountProfileDrain;
}

export interface MonetaryAccountProfileDrain {
  /** The status of the profile. */
  status?: string;
  /** The goal balance. */
  balance_preferred?: Amount;
  /** The high threshold balance. */
  balance_threshold_high?: Amount;
  /** The savings monetary account. */
  savings_account_alias?: LabelMonetaryAccount;
}

export interface MonetaryAccountProfileFill {
  /** The status of the profile. */
  status?: string;
  /** The goal balance. */
  balance_preferred?: Amount;
  /** The low threshold balance. */
  balance_threshold_low?: Amount;
  /** The bank the fill is supposed to happen from, with BIC and bank name. */
  issuer?: Issuer;
}

export interface MonetaryAccountRead {
  MonetaryAccountBank?: MonetaryAccountBank;
  MonetaryAccountJoint?: MonetaryAccountJoint;
  MonetaryAccountLight?: MonetaryAccountLight;
  MonetaryAccountSavings?: MonetaryAccountSavings;
  MonetaryAccountExternal?: MonetaryAccountExternal;
  MonetaryAccountInvestment?: MonetaryAccountInvestment;
  MonetaryAccountExternalSavings?: MonetaryAccountExternalSavings;
}

export interface MonetaryAccountSavings {
  /** The currency of the MonetaryAccountSavings as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountSavings. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountSavings. Defaults to 1000 EUR. Currency must match the MonetaryAccountSavings's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The UUID of the Avatar of the MonetaryAccountSavings. */
  avatar_uuid?: string;
  /** The status of the MonetaryAccountSavings. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountSavings providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountSavings, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountSavings. Can be any user provided message. */
  reason_description?: string;
  /** The users the account will be joint with. */
  all_co_owner?: CoOwner[];
  /** The settings of the MonetaryAccountSavings. */
  setting?: MonetaryAccountSetting;
  /** The Savings Goal set for this MonetaryAccountSavings. */
  savings_goal?: Amount;
  /** The id of the MonetaryAccountSavings. */
  id?: number;
  /** The timestamp of the MonetaryAccountSavings's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountSavings's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountSavings. */
  avatar?: Avatar;
  /** The current available balance Amount of the MonetaryAccountSavings. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountSavings. */
  alias?: Pointer[];
  /** The MonetaryAccountSavings's public UUID. */
  public_uuid?: string;
  /** The id of the User who owns the MonetaryAccountSavings. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The progress in percentages for the Savings Goal set for this MonetaryAccountSavings. */
  savings_goal_progress?: number;
  /** The number of payments that can be made from this savings account */
  number_of_payment_remaining?: string;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
}

export interface MonetaryAccountSavingsCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface MonetaryAccountSavingsListing {
  /** The id of the MonetaryAccountSavings. */
  id?: number;
  /** The timestamp of the MonetaryAccountSavings's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountSavings's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountSavings. */
  avatar?: Avatar;
  /** The currency of the MonetaryAccountSavings as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountSavings. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountSavings. Defaults to 1000 EUR. Currency must match the MonetaryAccountSavings's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountSavings. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountSavings. */
  alias?: Pointer[];
  /** The MonetaryAccountSavings's public UUID. */
  public_uuid?: string;
  /** The status of the MonetaryAccountSavings. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountSavings providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountSavings, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountSavings. Can be any user provided message. */
  reason_description?: string;
  /** The users the account will be joint with. */
  all_co_owner?: CoOwner[];
  /** The id of the User who owns the MonetaryAccountSavings. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The settings of the MonetaryAccountSavings. */
  setting?: MonetaryAccountSetting;
  /** The Savings Goal set for this MonetaryAccountSavings. */
  savings_goal?: Amount;
  /** The progress in percentages for the Savings Goal set for this MonetaryAccountSavings. */
  savings_goal_progress?: number;
  /** The number of payments that can be made from this savings account */
  number_of_payment_remaining?: string;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
}

export interface MonetaryAccountSavingsRead {
  /** The id of the MonetaryAccountSavings. */
  id?: number;
  /** The timestamp of the MonetaryAccountSavings's creation. */
  created?: string;
  /** The timestamp of the MonetaryAccountSavings's last update. */
  updated?: string;
  /** The Avatar of the MonetaryAccountSavings. */
  avatar?: Avatar;
  /** The currency of the MonetaryAccountSavings as an ISO 4217 formatted currency code. */
  currency?: string;
  /** The description of the MonetaryAccountSavings. Defaults to 'bunq account'. */
  description?: string;
  /** The daily spending limit Amount of the MonetaryAccountSavings. Defaults to 1000 EUR. Currency must match the MonetaryAccountSavings's currency. Limited to 10000 EUR. */
  daily_limit?: Amount;
  /** The current available balance Amount of the MonetaryAccountSavings. */
  balance?: Amount;
  /** The Aliases for the MonetaryAccountSavings. */
  alias?: Pointer[];
  /** The MonetaryAccountSavings's public UUID. */
  public_uuid?: string;
  /** The status of the MonetaryAccountSavings. Can be: ACTIVE, BLOCKED, CANCELLED or PENDING_REOPEN */
  status?: string;
  /** The sub-status of the MonetaryAccountSavings providing extra information regarding the status. Will be NONE for ACTIVE or PENDING_REOPEN, COMPLETELY or ONLY_ACCEPTING_INCOMING for BLOCKED and REDEMPTION_INVOLUNTARY, REDEMPTION_VOLUNTARY or PERMANENT for CANCELLED. */
  sub_status?: string;
  /** The reason for voluntarily cancelling (closing) the MonetaryAccountSavings, can only be OTHER. */
  reason?: string;
  /** The optional free-form reason for voluntarily cancelling (closing) the MonetaryAccountSavings. Can be any user provided message. */
  reason_description?: string;
  /** The users the account will be joint with. */
  all_co_owner?: CoOwner[];
  /** The id of the User who owns the MonetaryAccountSavings. */
  user_id?: number;
  /** The profile of the account. */
  monetary_account_profile?: MonetaryAccountProfile;
  /** The settings of the MonetaryAccountSavings. */
  setting?: MonetaryAccountSetting;
  /** The Savings Goal set for this MonetaryAccountSavings. */
  savings_goal?: Amount;
  /** The progress in percentages for the Savings Goal set for this MonetaryAccountSavings. */
  savings_goal_progress?: number;
  /** The number of payments that can be made from this savings account */
  number_of_payment_remaining?: string;
  /** The ids of the AutoSave. */
  all_auto_save_id?: BunqId[];
}

export interface MonetaryAccountSavingsUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface MonetaryAccountSetting {
  /** The color chosen for the MonetaryAccount. */
  color?: string;
  /** The icon chosen for the MonetaryAccount. */
  icon?: string;
  /** The status of the avatar. Can be either AVATAR_DEFAULT, AVATAR_CUSTOM or AVATAR_UNDETERMINED. */
  default_avatar_status?: string;
  /** The chat restriction. Possible values are ALLOW_INCOMING or BLOCK_INCOMING */
  restriction_chat?: string;
  /** The preference for this monetary account on whether to automatically accept or reject expiring SDDs. */
  sdd_expiration_action?: string;
}

export interface NoteAttachmentAdyenCardTransaction {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentAdyenCardTransactionCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentAdyenCardTransactionDelete = object;

export interface NoteAttachmentAdyenCardTransactionListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentAdyenCardTransactionRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentAdyenCardTransactionUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentBankSwitchServiceNetherlandsIncomingPayment {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentDelete = object;

export interface NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentBunqMeFundraiserResult {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentBunqMeFundraiserResultCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentBunqMeFundraiserResultDelete = object;

export interface NoteAttachmentBunqMeFundraiserResultListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentBunqMeFundraiserResultRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentBunqMeFundraiserResultUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentDraftPayment {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentDraftPaymentCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentDraftPaymentDelete = object;

export interface NoteAttachmentDraftPaymentListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentDraftPaymentRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentDraftPaymentUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentIdealMerchantTransaction {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentIdealMerchantTransactionCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentIdealMerchantTransactionDelete = object;

export interface NoteAttachmentIdealMerchantTransactionListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentIdealMerchantTransactionRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentIdealMerchantTransactionUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentMasterCardAction {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentMasterCardActionCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentMasterCardActionDelete = object;

export interface NoteAttachmentMasterCardActionListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentMasterCardActionRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentMasterCardActionUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentPayment {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentPaymentBatch {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentPaymentBatchCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentPaymentBatchDelete = object;

export interface NoteAttachmentPaymentBatchListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentPaymentBatchRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentPaymentBatchUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentPaymentCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentPaymentDelete = object;

export interface NoteAttachmentPaymentListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentPaymentRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentPaymentUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentRequestInquiry {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentRequestInquiryBatch {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentRequestInquiryBatchCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentRequestInquiryBatchDelete = object;

export interface NoteAttachmentRequestInquiryBatchListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentRequestInquiryBatchRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentRequestInquiryBatchUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentRequestInquiryCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentRequestInquiryDelete = object;

export interface NoteAttachmentRequestInquiryListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentRequestInquiryRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentRequestInquiryUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentRequestResponse {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentRequestResponseCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentRequestResponseDelete = object;

export interface NoteAttachmentRequestResponseListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentRequestResponseRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentRequestResponseUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentScheduleInstance {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentScheduleInstanceCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentScheduleInstanceDelete = object;

export interface NoteAttachmentScheduleInstanceListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentScheduleInstanceRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentScheduleInstanceUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentSchedulePayment {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentSchedulePaymentBatch {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentSchedulePaymentBatchCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentSchedulePaymentBatchDelete = object;

export interface NoteAttachmentSchedulePaymentBatchListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentSchedulePaymentBatchRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentSchedulePaymentBatchUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentSchedulePaymentCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentSchedulePaymentDelete = object;

export interface NoteAttachmentSchedulePaymentListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentSchedulePaymentRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentSchedulePaymentUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentSofortMerchantTransaction {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentSofortMerchantTransactionCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentSofortMerchantTransactionDelete = object;

export interface NoteAttachmentSofortMerchantTransactionListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentSofortMerchantTransactionRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentSofortMerchantTransactionUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteAttachmentWhitelistResult {
  /** Optional description of the attachment. */
  description?: string;
  /** The reference to the uploaded file to attach to this note. */
  attachment_id: number;
}

export interface NoteAttachmentWhitelistResultCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteAttachmentWhitelistResultDelete = object;

export interface NoteAttachmentWhitelistResultListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentWhitelistResultRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** Optional description of the attachment. */
  description?: string;
  /** The attachment attached to the note. */
  attachment?: AttachmentMonetaryAccountPayment[];
}

export interface NoteAttachmentWhitelistResultUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextAdyenCardTransaction {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextAdyenCardTransactionCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextAdyenCardTransactionDelete = object;

export interface NoteTextAdyenCardTransactionListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextAdyenCardTransactionRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextAdyenCardTransactionUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextBankSwitchServiceNetherlandsIncomingPayment {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextBankSwitchServiceNetherlandsIncomingPaymentCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextBankSwitchServiceNetherlandsIncomingPaymentDelete = object;

export interface NoteTextBankSwitchServiceNetherlandsIncomingPaymentListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextBankSwitchServiceNetherlandsIncomingPaymentRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextBankSwitchServiceNetherlandsIncomingPaymentUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextBunqMeFundraiserResult {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextBunqMeFundraiserResultCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextBunqMeFundraiserResultDelete = object;

export interface NoteTextBunqMeFundraiserResultListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextBunqMeFundraiserResultRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextBunqMeFundraiserResultUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextDraftPayment {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextDraftPaymentCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextDraftPaymentDelete = object;

export interface NoteTextDraftPaymentListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextDraftPaymentRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextDraftPaymentUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextIdealMerchantTransaction {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextIdealMerchantTransactionCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextIdealMerchantTransactionDelete = object;

export interface NoteTextIdealMerchantTransactionListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextIdealMerchantTransactionRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextIdealMerchantTransactionUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextMasterCardAction {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextMasterCardActionCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextMasterCardActionDelete = object;

export interface NoteTextMasterCardActionListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextMasterCardActionRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextMasterCardActionUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextPayment {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextPaymentBatch {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextPaymentBatchCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextPaymentBatchDelete = object;

export interface NoteTextPaymentBatchListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextPaymentBatchRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextPaymentBatchUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextPaymentCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextPaymentDelete = object;

export interface NoteTextPaymentListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextPaymentRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextPaymentUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextRequestInquiry {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextRequestInquiryBatch {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextRequestInquiryBatchCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextRequestInquiryBatchDelete = object;

export interface NoteTextRequestInquiryBatchListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextRequestInquiryBatchRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextRequestInquiryBatchUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextRequestInquiryCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextRequestInquiryDelete = object;

export interface NoteTextRequestInquiryListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextRequestInquiryRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextRequestInquiryUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextRequestResponse {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextRequestResponseCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextRequestResponseDelete = object;

export interface NoteTextRequestResponseListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextRequestResponseRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextRequestResponseUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextScheduleInstance {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextScheduleInstanceCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextScheduleInstanceDelete = object;

export interface NoteTextScheduleInstanceListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextScheduleInstanceRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextScheduleInstanceUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextSchedulePayment {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextSchedulePaymentBatch {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextSchedulePaymentBatchCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextSchedulePaymentBatchDelete = object;

export interface NoteTextSchedulePaymentBatchListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextSchedulePaymentBatchRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextSchedulePaymentBatchUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextSchedulePaymentCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextSchedulePaymentDelete = object;

export interface NoteTextSchedulePaymentListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextSchedulePaymentRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextSchedulePaymentUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextSofortMerchantTransaction {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextSofortMerchantTransactionCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextSofortMerchantTransactionDelete = object;

export interface NoteTextSofortMerchantTransactionListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextSofortMerchantTransactionRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextSofortMerchantTransactionUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NoteTextWhitelistResult {
  /** The content of the note. */
  content?: string;
}

export interface NoteTextWhitelistResultCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type NoteTextWhitelistResultDelete = object;

export interface NoteTextWhitelistResultListing {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextWhitelistResultRead {
  /** The id of the note. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The label of the user who created this note. */
  label_user_creator?: LabelUser;
  /** The content of the note. */
  content?: string;
}

export interface NoteTextWhitelistResultUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NotificationFilter {
  /** The delivery method via which notifications that match this notification filter will be delivered. Possible choices are PUSH for delivery via push notification and URL for delivery via URL callback. */
  notification_delivery_method?: string;
  /** The target of notifications that match this notification filter. For URL notification filters this is the URL to which the callback will be made. For PUSH notifications filters this should always be null. */
  notification_target?: string;
  /** The notification category that will match this notification filter. Possible choices are BILLING, CARD_TRANSACTION_FAILED, CARD_TRANSACTION_SUCCESSFUL, CHAT, DRAFT_PAYMENT, IDEAL, SOFORT, MONETARY_ACCOUNT_PROFILE, MUTATION, PAYMENT, PROMOTION, REQUEST, SCHEDULE_RESULT, SCHEDULE_STATUS, SHARE, SUPPORT, TAB_RESULT, USER_APPROVAL. */
  category?: string;
}

export interface NotificationFilterEmail {
  /** The types of notifications that will result in a email notification for this user. */
  notification_filters?: NotificationFilterEmail[];
}

export interface NotificationFilterEmailCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NotificationFilterEmailListing {
  /** The types of notifications that will result in a email notification for this user. */
  notification_filters?: NotificationFilterEmail[];
}

export interface NotificationFilterFailure {
  /** The IDs to retry. */
  notification_filter_failed_ids: string;
}

export interface NotificationFilterFailureCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NotificationFilterFailureListing {
  /** The types of notifications that will result in a url notification for this user. */
  notification_filters?: NotificationFilter[];
  /** The category of the failed notification. */
  category?: string;
  /** The event type of the failed notification. */
  event_type?: string;
  /** The object id used to generate the body of the notification. */
  object_id?: number;
  /** The exception bunq encountered when processing the callback. */
  exception_message?: string;
  /** The response code (or null) received from the endpoint. */
  response_code?: number;
}

export interface NotificationFilterPush {
  /** The types of notifications that will result in a push notification for this user. */
  notification_filters?: NotificationFilterPush[];
}

export interface NotificationFilterPushCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NotificationFilterPushListing {
  /** The types of notifications that will result in a push notification for this user. */
  notification_filters?: NotificationFilterPush[];
}

export interface NotificationFilterUrl {
  /** The types of notifications that will result in a url notification for this user. */
  notification_filters?: NotificationFilterUrl[];
}

export interface NotificationFilterUrlCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NotificationFilterUrlListing {
  /** The types of notifications that will result in a url notification for this user. */
  notification_filters?: NotificationFilterUrl[];
}

export interface NotificationFilterUrlMonetaryAccount {
  /** The types of notifications that will result in a url notification for this monetary account. */
  notification_filters?: NotificationFilterUrl[];
}

export interface NotificationFilterUrlMonetaryAccountCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface NotificationFilterUrlMonetaryAccountListing {
  /** The types of notifications that will result in a url notification for this monetary account. */
  notification_filters?: NotificationFilterUrl[];
}

export interface OauthCallbackUrl {
  /** The URL for this callback. */
  url: string;
}

export interface OauthCallbackUrlCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type OauthCallbackUrlDelete = object;

export interface OauthCallbackUrlListing {
  /** The URL for this callback. */
  url?: string;
}

export interface OauthCallbackUrlRead {
  /** The URL for this callback. */
  url?: string;
}

export interface OauthCallbackUrlUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface OauthClient {
  /** The status of the Oauth Client, can be ACTIVE or CANCELLED. */
  status?: string;
}

export interface OauthClientCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface OauthClientListing {
  /** Id of the client. */
  id?: number;
  /** The status of the pack group, can be ACTIVE, CANCELLED or CANCELLED_PENDING. */
  status?: string;
  /** The display name of this Oauth Client */
  display_name?: string;
  /** The Client ID associated with this Oauth Client */
  client_id?: string;
  /** Secret associated with this Oauth Client */
  secret?: string;
  /** The callback URLs which are bound to this Oauth Client */
  callback_url?: OauthCallbackUrl[];
}

export interface OauthClientRead {
  /** Id of the client. */
  id?: number;
  /** The status of the pack group, can be ACTIVE, CANCELLED or CANCELLED_PENDING. */
  status?: string;
  /** The display name of this Oauth Client */
  display_name?: string;
  /** The Client ID associated with this Oauth Client */
  client_id?: string;
  /** Secret associated with this Oauth Client */
  secret?: string;
  /** The callback URLs which are bound to this Oauth Client */
  callback_url?: OauthCallbackUrl[];
}

export interface OauthClientUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface Payment {
  /** The Amount transferred by the Payment. Will be negative for outgoing Payments and positive for incoming Payments (relative to the MonetaryAccount indicated by monetary_account_id). */
  amount?: Amount;
  /** The LabelMonetaryAccount containing the public information of the other (counterparty) side of the Payment. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The description for the Payment. Maximum 140 characters for Payments to external IBANs, 9000 characters for Payments to only other bunq MonetaryAccounts. */
  description?: string;
  /** The Attachments attached to the Payment. */
  attachment?: AttachmentMonetaryAccountPayment[];
  /** Optional data included with the Payment specific to the merchant. */
  merchant_reference?: string;
  /** Whether or not sending a bunq.to payment is allowed. */
  allow_bunqto?: boolean;
  /** The id of the created Payment. */
  id?: number;
  /** The timestamp when the Payment was done. */
  created?: string;
  /** The timestamp when the Payment was last updated (will be updated when chat messages are received). */
  updated?: string;
  /** The id of the MonetaryAccount the Payment was made to or from (depending on whether this is an incoming or outgoing Payment). */
  monetary_account_id?: number;
  /** The LabelMonetaryAccount containing the public information of 'this' (party) side of the Payment. */
  alias?: LabelMonetaryAccount;
  /** The type of Payment, can be BUNQ, EBA_SCT, EBA_SDD, IDEAL, SWIFT or FIS (card). */
  type?: string;
  /** The sub-type of the Payment, can be PAYMENT, WITHDRAWAL, REVERSAL, REQUEST, BILLING, SCT, SDD or NLO. */
  sub_type?: string;
  /** The status of the bunq.to payment. */
  bunqto_status?: string;
  /** The sub status of the bunq.to payment. */
  bunqto_sub_status?: string;
  /** The status of the bunq.to payment. */
  bunqto_share_url?: string;
  /** When bunq.to payment is about to expire. */
  bunqto_expiry?: string;
  /** The timestamp of when the bunq.to payment was responded to. */
  bunqto_time_responded?: string;
  /** The id of the PaymentBatch if this Payment was part of one. */
  batch_id?: number;
  /** The id of the JobScheduled if the Payment was scheduled. */
  scheduled_id?: number;
  /** A shipping Address provided with the Payment, currently unused. */
  address_shipping?: Address;
  /** A billing Address provided with the Payment, currently unused. */
  address_billing?: Address;
  /** The Geolocation where the Payment was done from. */
  geolocation?: Geolocation;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
  /** The new balance of the monetary account after the mutation. */
  balance_after_mutation?: Amount;
  /** A reference to the PaymentAutoAllocateInstance if it exists. */
  payment_auto_allocate_instance?: PaymentAutoAllocateInstance;
}

export interface PaymentAutoAllocate {
  /** The payment that should be used to define the triggers for the payment auto allocate. */
  payment_id: number;
  /** Whether a payment should be sorted ONCE or RECURRING. */
  type: string;
  /** The definition of how the money should be allocated. */
  definition: PaymentAutoAllocateDefinition[];
}

export interface PaymentAutoAllocateCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface PaymentAutoAllocateDefinition {
  /** The type of definition. */
  type: string;
  /** The alias of the party we are allocating the money to. */
  counterparty_alias?: Pointer;
  /** The description for the payment. */
  description?: string;
  /** The amount to allocate. */
  amount?: Amount;
  /** The percentage of the triggering payment's amount to allocate. */
  fraction?: number;
  /** The id of the PaymentAutoAllocateDefinition. */
  id?: number;
  /** The timestamp when the PaymentAutoAllocateDefinition was created. */
  created?: string;
  /** The timestamp when the PaymentAutoAllocateDefinition was last updated. */
  updated?: string;
}

export interface PaymentAutoAllocateDefinitionListing {
  /** The id of the PaymentAutoAllocateDefinition. */
  id?: number;
  /** The timestamp when the PaymentAutoAllocateDefinition was created. */
  created?: string;
  /** The timestamp when the PaymentAutoAllocateDefinition was last updated. */
  updated?: string;
  /** The alias of the party we are allocating the money to. */
  counterparty_alias?: Pointer;
  /** The description for the payment. */
  description?: string;
  /** The amount to allocate. */
  amount?: Amount;
  /** The percentage of the triggering payment's amount to allocate. */
  fraction?: number;
}

export type PaymentAutoAllocateDelete = object;

export interface PaymentAutoAllocateInstance {
  /** The id of the PaymentAutoAllocateInstance. */
  id?: number;
  /** The timestamp when the PaymentAutoAllocateInstance was created. */
  created?: string;
  /** The timestamp when the PaymentAutoAllocateInstance was last updated. */
  updated?: string;
  /** The ID of the payment auto allocate this instance belongs to. */
  payment_auto_allocate_id?: number;
  /** The status of the payment auto allocate instance. SUCCEEDED or FAILED. */
  status?: string;
  /** The error message, if the payment auto allocating failed. */
  error_message?: Error[];
  /** The payment batch allocating all the payments. */
  payment_batch?: PaymentBatch;
  /** The ID of the payment that triggered the allocating of the payments. */
  payment_id?: number;
}

export interface PaymentAutoAllocateInstanceListing {
  /** The id of the PaymentAutoAllocateInstance. */
  id?: number;
  /** The timestamp when the PaymentAutoAllocateInstance was created. */
  created?: string;
  /** The timestamp when the PaymentAutoAllocateInstance was last updated. */
  updated?: string;
  /** The ID of the payment auto allocate this instance belongs to. */
  payment_auto_allocate_id?: number;
  /** The status of the payment auto allocate instance. SUCCEEDED or FAILED. */
  status?: string;
  /** The error message, if the payment auto allocating failed. */
  error_message?: Error[];
  /** The payment batch allocating all the payments. */
  payment_batch?: PaymentBatch;
  /** The ID of the payment that triggered the allocating of the payments. */
  payment_id?: number;
}

export interface PaymentAutoAllocateInstanceRead {
  /** The id of the PaymentAutoAllocateInstance. */
  id?: number;
  /** The timestamp when the PaymentAutoAllocateInstance was created. */
  created?: string;
  /** The timestamp when the PaymentAutoAllocateInstance was last updated. */
  updated?: string;
  /** The ID of the payment auto allocate this instance belongs to. */
  payment_auto_allocate_id?: number;
  /** The status of the payment auto allocate instance. SUCCEEDED or FAILED. */
  status?: string;
  /** The error message, if the payment auto allocating failed. */
  error_message?: Error[];
  /** The payment batch allocating all the payments. */
  payment_batch?: PaymentBatch;
  /** The ID of the payment that triggered the allocating of the payments. */
  payment_id?: number;
}

export interface PaymentAutoAllocateListing {
  /** The id of the PaymentAutoAllocate. */
  id?: number;
  /** The timestamp when the PaymentAutoAllocate was created. */
  created?: string;
  /** The timestamp when the PaymentAutoAllocate was last updated. */
  updated?: string;
  /** The type. */
  type?: string;
  /** The status. */
  status?: string;
  /** The amount on which this payment auto allocate will be triggered. */
  trigger_amount?: Amount;
  /** The payment that was used to define the triggers for this payment auto allocate. */
  payment?: Payment;
}

export interface PaymentAutoAllocateRead {
  /** The id of the PaymentAutoAllocate. */
  id?: number;
  /** The timestamp when the PaymentAutoAllocate was created. */
  created?: string;
  /** The timestamp when the PaymentAutoAllocate was last updated. */
  updated?: string;
  /** The type. */
  type?: string;
  /** The status. */
  status?: string;
  /** The amount on which this payment auto allocate will be triggered. */
  trigger_amount?: Amount;
  /** The payment that was used to define the triggers for this payment auto allocate. */
  payment?: Payment;
}

export interface PaymentAutoAllocateUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface PaymentAutoAllocateUserListing {
  PaymentAutoAllocate?: PaymentAutoAllocate;
}

export interface PaymentBatch {
  /** The list of mutations that were made. */
  payments?: PaymentBatchAnchoredPayment;
}

export interface PaymentBatchAnchoredPayment {
  Payment?: Payment[];
}

export interface PaymentBatchCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface PaymentBatchListing {
  /** The list of mutations that were made. */
  payments?: PaymentBatchAnchoredPayment;
}

export interface PaymentBatchRead {
  /** The list of mutations that were made. */
  payments?: PaymentBatchAnchoredPayment;
}

export interface PaymentBatchUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface PaymentCreate {
  /** The id of the created Payment. */
  id?: number;
}

export interface PaymentListing {
  /** The id of the created Payment. */
  id?: number;
  /** The timestamp when the Payment was done. */
  created?: string;
  /** The timestamp when the Payment was last updated (will be updated when chat messages are received). */
  updated?: string;
  /** The id of the MonetaryAccount the Payment was made to or from (depending on whether this is an incoming or outgoing Payment). */
  monetary_account_id?: number;
  /** The Amount transferred by the Payment. Will be negative for outgoing Payments and positive for incoming Payments (relative to the MonetaryAccount indicated by monetary_account_id). */
  amount?: Amount;
  /** The LabelMonetaryAccount containing the public information of 'this' (party) side of the Payment. */
  alias?: LabelMonetaryAccount;
  /** The LabelMonetaryAccount containing the public information of the other (counterparty) side of the Payment. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The description for the Payment. Maximum 140 characters for Payments to external IBANs, 9000 characters for Payments to only other bunq MonetaryAccounts. */
  description?: string;
  /** The type of Payment, can be BUNQ, EBA_SCT, EBA_SDD, IDEAL, SWIFT or FIS (card). */
  type?: string;
  /** The sub-type of the Payment, can be PAYMENT, WITHDRAWAL, REVERSAL, REQUEST, BILLING, SCT, SDD or NLO. */
  sub_type?: string;
  /** The status of the bunq.to payment. */
  bunqto_status?: string;
  /** The sub status of the bunq.to payment. */
  bunqto_sub_status?: string;
  /** The status of the bunq.to payment. */
  bunqto_share_url?: string;
  /** When bunq.to payment is about to expire. */
  bunqto_expiry?: string;
  /** The timestamp of when the bunq.to payment was responded to. */
  bunqto_time_responded?: string;
  /** The Attachments attached to the Payment. */
  attachment?: AttachmentMonetaryAccountPayment[];
  /** Optional data included with the Payment specific to the merchant. */
  merchant_reference?: string;
  /** The id of the PaymentBatch if this Payment was part of one. */
  batch_id?: number;
  /** The id of the JobScheduled if the Payment was scheduled. */
  scheduled_id?: number;
  /** A shipping Address provided with the Payment, currently unused. */
  address_shipping?: Address;
  /** A billing Address provided with the Payment, currently unused. */
  address_billing?: Address;
  /** The Geolocation where the Payment was done from. */
  geolocation?: Geolocation;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
  /** The new balance of the monetary account after the mutation. */
  balance_after_mutation?: Amount;
  /** A reference to the PaymentAutoAllocateInstance if it exists. */
  payment_auto_allocate_instance?: PaymentAutoAllocateInstance;
}

export interface PaymentRead {
  /** The id of the created Payment. */
  id?: number;
  /** The timestamp when the Payment was done. */
  created?: string;
  /** The timestamp when the Payment was last updated (will be updated when chat messages are received). */
  updated?: string;
  /** The id of the MonetaryAccount the Payment was made to or from (depending on whether this is an incoming or outgoing Payment). */
  monetary_account_id?: number;
  /** The Amount transferred by the Payment. Will be negative for outgoing Payments and positive for incoming Payments (relative to the MonetaryAccount indicated by monetary_account_id). */
  amount?: Amount;
  /** The LabelMonetaryAccount containing the public information of 'this' (party) side of the Payment. */
  alias?: LabelMonetaryAccount;
  /** The LabelMonetaryAccount containing the public information of the other (counterparty) side of the Payment. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The description for the Payment. Maximum 140 characters for Payments to external IBANs, 9000 characters for Payments to only other bunq MonetaryAccounts. */
  description?: string;
  /** The type of Payment, can be BUNQ, EBA_SCT, EBA_SDD, IDEAL, SWIFT or FIS (card). */
  type?: string;
  /** The sub-type of the Payment, can be PAYMENT, WITHDRAWAL, REVERSAL, REQUEST, BILLING, SCT, SDD or NLO. */
  sub_type?: string;
  /** The status of the bunq.to payment. */
  bunqto_status?: string;
  /** The sub status of the bunq.to payment. */
  bunqto_sub_status?: string;
  /** The status of the bunq.to payment. */
  bunqto_share_url?: string;
  /** When bunq.to payment is about to expire. */
  bunqto_expiry?: string;
  /** The timestamp of when the bunq.to payment was responded to. */
  bunqto_time_responded?: string;
  /** The Attachments attached to the Payment. */
  attachment?: AttachmentMonetaryAccountPayment[];
  /** Optional data included with the Payment specific to the merchant. */
  merchant_reference?: string;
  /** The id of the PaymentBatch if this Payment was part of one. */
  batch_id?: number;
  /** The id of the JobScheduled if the Payment was scheduled. */
  scheduled_id?: number;
  /** A shipping Address provided with the Payment, currently unused. */
  address_shipping?: Address;
  /** A billing Address provided with the Payment, currently unused. */
  address_billing?: Address;
  /** The Geolocation where the Payment was done from. */
  geolocation?: Geolocation;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
  /** The new balance of the monetary account after the mutation. */
  balance_after_mutation?: Amount;
  /** A reference to the PaymentAutoAllocateInstance if it exists. */
  payment_auto_allocate_instance?: PaymentAutoAllocateInstance;
}

export interface PaymentServiceProviderCredential {
  /** Payment Services Directive 2 compatible QSEAL certificate */
  client_payment_service_provider_certificate: string;
  /** Intermediate and root certificate belonging to the provided certificate. */
  client_payment_service_provider_certificate_chain: string;
  /** The Base64 encoded signature of the public key provided during installation and with the installation token appended as a nonce. Signed with the private key belonging to the QSEAL certificate. */
  client_public_key_signature: string;
}

export interface PaymentServiceProviderCredentialCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface PaymentServiceProviderCredentialRead {
  /** The id of the credential. */
  id?: number;
  /** The timestamp of the credential object's creation. */
  created?: string;
  /** The timestamp of the credential object's last update. */
  updated?: string;
  /** The status of the credential. */
  status?: string;
  /** When the status is PENDING_FIRST_USE: when the credential expires. */
  expiry_time?: string;
  /** When the status is PENDING_FIRST_USE: the value of the token. */
  token_value?: string;
  /** When the status is ACTIVE: the details of the device that may use the credential. */
  permitted_device?: PermittedDevice;
}

export interface PaymentServiceProviderDraftPayment {
  /** The IBAN of the sender. */
  sender_iban: string;
  /** The name of the sender. */
  sender_name?: string;
  /** The IBAN of the counterparty. */
  counterparty_iban: string;
  /** The name of the counterparty. */
  counterparty_name: string;
  /** Description of the payment. */
  description: string;
  /** The Amount to transfer with the Payment. Must be bigger than 0. */
  amount: Amount;
  /** The new status of the Draft Payment. Can only be set to REJECTED or CANCELLED by update. */
  status?: string;
}

export interface PaymentServiceProviderDraftPaymentCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface PaymentServiceProviderDraftPaymentListing {
  /** The sender IBAN. */
  sender_iban?: string;
  /** The sender IBAN. */
  receiver_iban?: string;
  /** The amount of the draft payment */
  amount?: Amount;
  /** The status of the draft payment */
  status?: string;
}

export interface PaymentServiceProviderDraftPaymentRead {
  /** The sender IBAN. */
  sender_iban?: string;
  /** The sender IBAN. */
  receiver_iban?: string;
  /** The amount of the draft payment */
  amount?: Amount;
  /** The status of the draft payment */
  status?: string;
}

export interface PaymentServiceProviderDraftPaymentUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface PaymentServiceProviderIssuerTransaction {
  /** The counter party this transaction should be sent to. */
  counterparty_alias: Pointer;
  /** The money amount of this transaction */
  amount: Amount;
  /** The description of this transaction, to be shown to the user and to the counter party. */
  description: string;
  /** The url to which the user should be redirected once the transaction is accepted or rejected. */
  url_redirect: string;
  /** The (optional) expiration time of the transaction. Defaults to 10 minutes. */
  time_expiry?: string;
  /** The status of the transaction. Can only be used for cancelling the transaction. */
  status?: string;
}

export interface PaymentServiceProviderIssuerTransactionCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface PaymentServiceProviderIssuerTransactionListing {
  /** The id of this transaction. */
  id?: number;
  /** The time this transaction was created. */
  created?: string;
  /** The time this transaction was last updated. */
  updated?: string;
  /** The public uuid used to identify this transaction. */
  public_uuid?: string;
  /** The counter party this transaction should be sent to. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The money amount of this transaction */
  amount?: Amount;
  /** The description of this transaction, to be shown to the user and to the counter party. */
  description?: string;
  /** The url to which the user should be redirected once the transaction is accepted or rejected. */
  url_redirect?: string;
  /** The (optional) expiration time of the transaction. Defaults to 10 minutes. */
  time_expiry?: string;
  /** The status of the transaction. Can only be used for cancelling the transaction. */
  status?: string;
}

export interface PaymentServiceProviderIssuerTransactionRead {
  /** The id of this transaction. */
  id?: number;
  /** The time this transaction was created. */
  created?: string;
  /** The time this transaction was last updated. */
  updated?: string;
  /** The public uuid used to identify this transaction. */
  public_uuid?: string;
  /** The counter party this transaction should be sent to. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The money amount of this transaction */
  amount?: Amount;
  /** The description of this transaction, to be shown to the user and to the counter party. */
  description?: string;
  /** The url to which the user should be redirected once the transaction is accepted or rejected. */
  url_redirect?: string;
  /** The (optional) expiration time of the transaction. Defaults to 10 minutes. */
  time_expiry?: string;
  /** The status of the transaction. Can only be used for cancelling the transaction. */
  status?: string;
}

export interface PaymentServiceProviderIssuerTransactionUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface PermittedDevice {
  /** The description of the device that may use the credential. */
  description?: string;
  /** The IP address of the device that may use the credential. */
  ip?: string;
}

export interface PermittedIp {
  /** The IP address. */
  ip: string;
  /** The status of the IP. May be "ACTIVE" or "INACTIVE". It is only possible to make requests from "ACTIVE" IP addresses. Only "ACTIVE" IPs will be billed. */
  status?: string;
}

export interface PermittedIpCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface PermittedIpListing {
  /** The IP address. */
  ip?: string;
  /** The status of the IP. May be "ACTIVE" or "INACTIVE". It is only possible to make requests from "ACTIVE" IP addresses. Only "ACTIVE" IPs will be billed. */
  status?: string;
}

export interface PermittedIpRead {
  /** The IP address. */
  ip?: string;
  /** The status of the IP. May be "ACTIVE" or "INACTIVE". It is only possible to make requests from "ACTIVE" IP addresses. Only "ACTIVE" IPs will be billed. */
  status?: string;
}

export interface PermittedIpUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface Pointer {
  /** The alias type, can be: EMAIL|PHONE_NUMBER|IBAN. */
  type?: string;
  /** The alias value. */
  value?: string;
  /** The alias name. */
  name?: string;
  /** The pointer service. Only required for external counterparties. */
  service?: string;
}

export interface RegistryMembership {
  /** The UUID of the membership. */
  uuid?: string;
  /** The LabelMonetaryAccount of the user who belongs to this RegistryMembership. */
  alias?: LabelMonetaryAccount;
  /** The status of the RegistryMembership. */
  status?: string;
  /** The setting for for adding automatically card transactions to the registry. (deprecated) */
  auto_add_card_transaction?: string;
  /** Registry membership setting. */
  setting?: RegistryMembershipSetting;
  /** The original TricountId of the membership for backwards compatibility. May be used as an alternative to the UUID to identify specific memberships to allow clients to sync changes made offline before the Tricount migration. */
  membership_ticount_id?: number;
  /** The balance of this RegistryMembership. */
  balance?: Amount;
  /** The total amount spent of this RegistryMembership. */
  total_amount_spent?: Amount;
  /** The status of the settlement of the Registry. Can be PENDING or SETTLED. */
  status_settlement?: string;
  /** The registry id. */
  registry_id?: number;
  /** The registry title. */
  registry_title?: string;
  /** The label of the user that sent the invite. */
  invitor?: LabelUser;
}

export interface RegistryMembershipSetting {
  /** The setting for for adding automatically card transactions to the registry. */
  auto_add_card_transaction?: string;
  /** The time when auto add card gets active */
  time_auto_add_card_transaction_start?: string;
  /** The time when auto add card gets inactive */
  time_auto_add_card_transaction_end?: string;
  /** The ids of the cards that have been added to registry membership setting. */
  card_ids?: string[];
  /** The cards of which payments will be automatically added to this Registry. */
  card_labels?: LabelCard[];
}

export type RegistrySettlement = object;

export interface RegistrySettlementCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface RegistrySettlementItem {
  /** The amount of the RegistrySettlementItem. */
  amount?: Amount;
  /** The membership of the user that has to pay. */
  membership_paying?: RegistryMembership;
  /** The membership of the user that will receive money. */
  membership_receiving?: RegistryMembership;
  /** The LabelMonetaryAccount of the user that has to pay the request. */
  paying_user_alias?: LabelMonetaryAccount;
  /** The LabelMonetaryAccount of the user that will receive the amount. */
  receiving_user_alias?: LabelMonetaryAccount;
}

export interface RegistrySettlementListing {
  /** The id of the RegistrySettlement. */
  id?: number;
  /** The timestamp of the RegistrySettlement's creation. */
  created?: string;
  /** The timestamp of the RegistrySettlement's last update. */
  updated?: string;
  /** The timestamp of the Registry's settlement. */
  settlement_time?: string;
  /** The total amount spent for the RegistrySettlement. */
  total_amount_spent?: Amount;
  /** The number of RegistryEntry's associated with this RegistrySettlement. */
  number_of_entries?: number;
  /** The membership of the user that settled the Registry. */
  settled_by_alias?: RegistryMembership;
  /** The membership of the user that has settled the registry. */
  membership_settled?: RegistryMembership;
  /** List of RegistrySettlementItems */
  items?: RegistrySettlementItem[];
}

export interface RegistrySettlementRead {
  /** The id of the RegistrySettlement. */
  id?: number;
  /** The timestamp of the RegistrySettlement's creation. */
  created?: string;
  /** The timestamp of the RegistrySettlement's last update. */
  updated?: string;
  /** The timestamp of the Registry's settlement. */
  settlement_time?: string;
  /** The total amount spent for the RegistrySettlement. */
  total_amount_spent?: Amount;
  /** The number of RegistryEntry's associated with this RegistrySettlement. */
  number_of_entries?: number;
  /** The membership of the user that settled the Registry. */
  settled_by_alias?: RegistryMembership;
  /** The membership of the user that has settled the registry. */
  membership_settled?: RegistryMembership;
  /** List of RegistrySettlementItems */
  items?: RegistrySettlementItem[];
}

export interface RelationUser {
  /** The user's ID. */
  user_id?: string;
  /** The counter user's ID. */
  counter_user_id?: string;
  /** The user's label. */
  label_user?: LabelUser;
  /** The counter user's label. */
  counter_label_user?: LabelUser;
  /** The requested relation type. */
  relationship?: string;
  /** The request's status, only for UPDATE. */
  status?: string;
  /** The account status of a user */
  user_status?: string;
  /** The account status of a user */
  counter_user_status?: string;
}

export interface RequestInquiry {
  /** The requested amount. */
  amount_inquired?: Amount;
  /** The LabelMonetaryAccount with the public information of the MonetaryAccount the money was requested from. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The description of the inquiry. */
  description?: string;
  /** The attachments attached to the payment. */
  attachment?: BunqId[];
  /** The client's custom reference that was attached to the request and the mutation. */
  merchant_reference?: string;
  /** The status of the request. */
  status?: string;
  /** The minimum age the user accepting the RequestInquiry must have. */
  minimum_age?: number;
  /** Whether or not an address must be provided on accept. */
  require_address?: string;
  /** [DEPRECATED] Whether or not the accepting user can give an extra tip on top of the requested Amount. Defaults to false. */
  want_tip?: boolean;
  /** [DEPRECATED] Whether or not the accepting user can choose to accept with a lower amount than requested. Defaults to false. */
  allow_amount_lower?: boolean;
  /** [DEPRECATED] Whether or not the accepting user can choose to accept with a higher amount than requested. Defaults to false. */
  allow_amount_higher?: boolean;
  /** Whether or not sending a bunq.me request is allowed. */
  allow_bunqme: boolean;
  /** The URL which the user is sent to after accepting or rejecting the Request. */
  redirect_url?: string;
  /** The ID of the associated event if the request was made using 'split the bill'. */
  event_id?: number;
  /** The id of the created RequestInquiry. */
  id?: number;
  /** The timestamp of the payment request's creation. */
  created?: string;
  /** The timestamp of the payment request's last update. */
  updated?: string;
  /** The timestamp of when the payment request was responded to. */
  time_responded?: string;
  /** The timestamp of when the payment request expired. */
  time_expiry?: string;
  /** The id of the monetary account the request response applies to. */
  monetary_account_id?: number;
  /** The responded amount. */
  amount_responded?: Amount;
  /** The label that's displayed to the counterparty with the mutation. Includes user. */
  user_alias_created?: LabelUser;
  /** The label that's displayed to the counterparty with the mutation. Includes user. */
  user_alias_revoked?: LabelUser;
  /** The id of the batch if the request was part of a batch. */
  batch_id?: number;
  /** The id of the scheduled job if the request was scheduled. */
  scheduled_id?: number;
  /** The url that points to the bunq.me request. */
  bunqme_share_url?: string;
  /** The shipping address provided by the accepting user if an address was requested. */
  address_shipping?: Address;
  /** The billing address provided by the accepting user if an address was requested. */
  address_billing?: Address;
  /** The geolocation where the payment was done. */
  geolocation?: Geolocation;
  /** The reference to the object used for split the bill. Can be Payment, PaymentBatch, ScheduleInstance, RequestResponse and MasterCardAction */
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject;
}

export interface RequestInquiryBatch {
  /** The list of requests that were made. */
  request_inquiries?: RequestInquiry[];
  /** The status of the request. */
  status?: string;
  /** The total amount originally inquired for this batch. */
  total_amount_inquired?: Amount;
  /** The ID of the associated event if the request batch was made using 'split the bill'. */
  event_id?: number;
  /** The reference to the object used for split the bill. Can be Payment, PaymentBatch, ScheduleInstance, RequestResponse and MasterCardAction */
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject;
}

export interface RequestInquiryBatchCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface RequestInquiryBatchListing {
  /** The list of requests that were made. */
  request_inquiries?: RequestInquiry[];
  /** The total amount originally inquired for this batch. */
  total_amount_inquired?: Amount;
  /** The reference to the object used for split the bill. Can be Payment, PaymentBatch, ScheduleInstance, RequestResponse and MasterCardAction */
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject;
}

export interface RequestInquiryBatchRead {
  /** The list of requests that were made. */
  request_inquiries?: RequestInquiry[];
  /** The total amount originally inquired for this batch. */
  total_amount_inquired?: Amount;
  /** The reference to the object used for split the bill. Can be Payment, PaymentBatch, ScheduleInstance, RequestResponse and MasterCardAction */
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject;
}

export interface RequestInquiryBatchUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface RequestInquiryCreate {
  /** The id of the created RequestInquiry. */
  id?: number;
}

export interface RequestInquiryListing {
  /** The id of the created RequestInquiry. */
  id?: number;
  /** The timestamp of the payment request's creation. */
  created?: string;
  /** The timestamp of the payment request's last update. */
  updated?: string;
  /** The timestamp of when the payment request was responded to. */
  time_responded?: string;
  /** The timestamp of when the payment request expired. */
  time_expiry?: string;
  /** The id of the monetary account the request response applies to. */
  monetary_account_id?: number;
  /** The requested amount. */
  amount_inquired?: Amount;
  /** The responded amount. */
  amount_responded?: Amount;
  /** The label that's displayed to the counterparty with the mutation. Includes user. */
  user_alias_created?: LabelUser;
  /** The label that's displayed to the counterparty with the mutation. Includes user. */
  user_alias_revoked?: LabelUser;
  /** The LabelMonetaryAccount with the public information of the MonetaryAccount the money was requested from. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The description of the inquiry. */
  description?: string;
  /** The client's custom reference that was attached to the request and the mutation. */
  merchant_reference?: string;
  /** The attachments attached to the payment. */
  attachment?: BunqId[];
  /** The status of the request. */
  status?: string;
  /** The id of the batch if the request was part of a batch. */
  batch_id?: number;
  /** The id of the scheduled job if the request was scheduled. */
  scheduled_id?: number;
  /** The minimum age the user accepting the RequestInquiry must have. */
  minimum_age?: number;
  /** Whether or not an address must be provided on accept. */
  require_address?: string;
  /** The url that points to the bunq.me request. */
  bunqme_share_url?: string;
  /** The URL which the user is sent to after accepting or rejecting the Request. */
  redirect_url?: string;
  /** The shipping address provided by the accepting user if an address was requested. */
  address_shipping?: Address;
  /** The billing address provided by the accepting user if an address was requested. */
  address_billing?: Address;
  /** The geolocation where the payment was done. */
  geolocation?: Geolocation;
  /** The reference to the object used for split the bill. Can be Payment, PaymentBatch, ScheduleInstance, RequestResponse and MasterCardAction */
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject;
}

export interface RequestInquiryRead {
  /** The id of the created RequestInquiry. */
  id?: number;
  /** The timestamp of the payment request's creation. */
  created?: string;
  /** The timestamp of the payment request's last update. */
  updated?: string;
  /** The timestamp of when the payment request was responded to. */
  time_responded?: string;
  /** The timestamp of when the payment request expired. */
  time_expiry?: string;
  /** The id of the monetary account the request response applies to. */
  monetary_account_id?: number;
  /** The requested amount. */
  amount_inquired?: Amount;
  /** The responded amount. */
  amount_responded?: Amount;
  /** The label that's displayed to the counterparty with the mutation. Includes user. */
  user_alias_created?: LabelUser;
  /** The label that's displayed to the counterparty with the mutation. Includes user. */
  user_alias_revoked?: LabelUser;
  /** The LabelMonetaryAccount with the public information of the MonetaryAccount the money was requested from. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The description of the inquiry. */
  description?: string;
  /** The client's custom reference that was attached to the request and the mutation. */
  merchant_reference?: string;
  /** The attachments attached to the payment. */
  attachment?: BunqId[];
  /** The status of the request. */
  status?: string;
  /** The id of the batch if the request was part of a batch. */
  batch_id?: number;
  /** The id of the scheduled job if the request was scheduled. */
  scheduled_id?: number;
  /** The minimum age the user accepting the RequestInquiry must have. */
  minimum_age?: number;
  /** Whether or not an address must be provided on accept. */
  require_address?: string;
  /** The url that points to the bunq.me request. */
  bunqme_share_url?: string;
  /** The URL which the user is sent to after accepting or rejecting the Request. */
  redirect_url?: string;
  /** The shipping address provided by the accepting user if an address was requested. */
  address_shipping?: Address;
  /** The billing address provided by the accepting user if an address was requested. */
  address_billing?: Address;
  /** The geolocation where the payment was done. */
  geolocation?: Geolocation;
  /** The reference to the object used for split the bill. Can be Payment, PaymentBatch, ScheduleInstance, RequestResponse and MasterCardAction */
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject;
}

export interface RequestInquiryReference {
  /** The type of request inquiry. Can be RequestInquiry or RequestInquiryBatch. */
  type?: string;
  /** The id of the request inquiry (batch). */
  id?: number;
}

export interface RequestInquiryUpdate {
  /** The id of the payment request. */
  id?: number;
  /** The timestamp of the payment request's creation. */
  created?: string;
  /** The timestamp of the payment request's last update. */
  updated?: string;
  /** The timestamp of when the payment request was responded to. */
  time_responded?: string;
  /** The timestamp of when the payment request expired. */
  time_expiry?: string;
  /** The id of the monetary account the request response applies to. */
  monetary_account_id?: number;
  /** The requested amount. */
  amount_inquired?: Amount;
  /** The responded amount. */
  amount_responded?: Amount;
  /** The label that's displayed to the counterparty with the mutation. Includes user. */
  user_alias_created?: LabelUser;
  /** The label that's displayed to the counterparty with the mutation. Includes user. */
  user_alias_revoked?: LabelUser;
  /** The LabelMonetaryAccount with the public information of the MonetaryAccount the money was requested from. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The description of the inquiry. */
  description?: string;
  /** The client's custom reference that was attached to the request and the mutation. */
  merchant_reference?: string;
  /** The attachments attached to the payment. */
  attachment?: BunqId[];
  /** The status of the request. */
  status?: string;
  /** The id of the batch if the request was part of a batch. */
  batch_id?: number;
  /** The id of the scheduled job if the request was scheduled. */
  scheduled_id?: number;
  /** The minimum age the user accepting the RequestInquiry must have. */
  minimum_age?: number;
  /** Whether or not an address must be provided on accept. */
  require_address?: string;
  /** The shipping address provided by the accepting user if an address was requested. */
  address_shipping?: Address;
  /** The billing address provided by the accepting user if an address was requested. */
  address_billing?: Address;
  /** The geolocation where the payment was done. */
  geolocation?: Geolocation;
  /** The reference to the object used for split the bill. Can be Payment, PaymentBatch, ScheduleInstance, RequestResponse and MasterCardAction */
  reference_split_the_bill?: RequestReferenceSplitTheBillAnchorObject;
}

export interface RequestReferenceSplitTheBillAnchorObject {
  BillingInvoice?: Invoice;
  DraftPayment?: DraftPayment;
  MasterCardAction?: MasterCardAction;
  Payment?: Payment;
  PaymentBatch?: PaymentBatch;
  RequestResponse?: RequestResponse;
  ScheduleInstance?: ScheduleInstance;
  WhitelistResult?: WhitelistResult;
  TransferwisePayment?: TransferwiseTransfer;
  CurrencyConversion?: CurrencyConversion;
}

export interface RequestResponse {
  /** The Amount the RequestResponse was accepted with. */
  amount_responded?: Amount;
  /** The status of the RequestResponse. Can be ACCEPTED, PENDING, REJECTED, REFUND_REQUESTED, REFUNDED or REVOKED. */
  status?: string;
  /** The shipping address provided by the accepting user if an address was requested. */
  address_shipping?: Address;
  /** The billing address provided by the accepting user if an address was requested. */
  address_billing?: Address;
  /** When the request is accepted on a monetary account with a different currency, a quote is expected to convert. */
  currency_conversion_quote_id?: number;
  /** The id of the Request Response. */
  id?: number;
  /** The timestamp when the Request Response was created. */
  created?: string;
  /** The timestamp when the Request Response was last updated (will be updated when chat messages are received). */
  updated?: string;
  /** The timestamp of when the RequestResponse was responded to. */
  time_responded?: string;
  /** The timestamp of when the RequestResponse expired or will expire. */
  time_expiry?: string;
  /** The timestamp of when a refund request for the RequestResponse was claimed. */
  time_refund_requested?: string;
  /** The timestamp of when the RequestResponse was refunded. */
  time_refunded?: string;
  /** The label of the user that requested the refund. */
  user_refund_requested?: LabelUser;
  /** The id of the MonetaryAccount the RequestResponse was received on. */
  monetary_account_id?: number;
  /** The requested Amount. */
  amount_inquired?: Amount;
  /** The description for the RequestResponse provided by the requesting party. Maximum 9000 characters. */
  description?: string;
  /** The LabelMonetaryAccount with the public information of the MonetaryAccount this RequestResponse was received on. */
  alias?: LabelMonetaryAccount;
  /** The LabelMonetaryAccount with the public information of the MonetaryAccount that is requesting money with this RequestResponse. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The Attachments attached to the RequestResponse. */
  attachment?: Attachment[];
  /** The minimum age the user accepting the RequestResponse must have. */
  minimum_age?: number;
  /** Whether or not an address must be provided on accept. */
  require_address?: string;
  /** The Geolocation where the RequestResponse was created. */
  geolocation?: Geolocation;
  /** The type of the RequestInquiry. Can be DIRECT_DEBIT, DIRECT_DEBIT_B2B, IDEAL, SOFORT or INTERNAL. */
  type?: string;
  /** The subtype of the RequestInquiry. Can be ONCE or RECURRING for DIRECT_DEBIT RequestInquiries and NONE for all other. */
  sub_type?: string;
  /** The URL which the user is sent to after accepting or rejecting the Request. */
  redirect_url?: string;
  /** The credit scheme id provided by the counterparty for DIRECT_DEBIT inquiries. */
  credit_scheme_identifier?: string;
  /** The mandate id provided by the counterparty for DIRECT_DEBIT inquiries. */
  mandate_identifier?: string;
  /** The whitelist id for this action or null. */
  eligible_whitelist_id?: number;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
  /** The ID of the latest event for the request. */
  event_id?: number;
  /** The ID of the monetary account this user prefers to pay the request from. */
  monetary_account_preferred_id?: number;
}

export interface RequestResponseListing {
  /** The id of the Request Response. */
  id?: number;
  /** The timestamp when the Request Response was created. */
  created?: string;
  /** The timestamp when the Request Response was last updated (will be updated when chat messages are received). */
  updated?: string;
  /** The timestamp of when the RequestResponse was responded to. */
  time_responded?: string;
  /** The timestamp of when the RequestResponse expired or will expire. */
  time_expiry?: string;
  /** The timestamp of when a refund request for the RequestResponse was claimed. */
  time_refund_requested?: string;
  /** The timestamp of when the RequestResponse was refunded. */
  time_refunded?: string;
  /** The label of the user that requested the refund. */
  user_refund_requested?: LabelUser;
  /** The id of the MonetaryAccount the RequestResponse was received on. */
  monetary_account_id?: number;
  /** The requested Amount. */
  amount_inquired?: Amount;
  /** The Amount the RequestResponse was accepted with. */
  amount_responded?: Amount;
  /** The status of the RequestResponse. Can be ACCEPTED, PENDING, REJECTED, REFUND_REQUESTED, REFUNDED or REVOKED. */
  status?: string;
  /** The description for the RequestResponse provided by the requesting party. Maximum 9000 characters. */
  description?: string;
  /** The LabelMonetaryAccount with the public information of the MonetaryAccount this RequestResponse was received on. */
  alias?: LabelMonetaryAccount;
  /** The LabelMonetaryAccount with the public information of the MonetaryAccount that is requesting money with this RequestResponse. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The Attachments attached to the RequestResponse. */
  attachment?: Attachment[];
  /** The minimum age the user accepting the RequestResponse must have. */
  minimum_age?: number;
  /** Whether or not an address must be provided on accept. */
  require_address?: string;
  /** The Geolocation where the RequestResponse was created. */
  geolocation?: Geolocation;
  /** The type of the RequestInquiry. Can be DIRECT_DEBIT, DIRECT_DEBIT_B2B, IDEAL, SOFORT or INTERNAL. */
  type?: string;
  /** The subtype of the RequestInquiry. Can be ONCE or RECURRING for DIRECT_DEBIT RequestInquiries and NONE for all other. */
  sub_type?: string;
  /** The URL which the user is sent to after accepting or rejecting the Request. */
  redirect_url?: string;
  /** The billing address provided by the accepting user if an address was requested. */
  address_billing?: Address;
  /** The shipping address provided by the accepting user if an address was requested. */
  address_shipping?: Address;
  /** The credit scheme id provided by the counterparty for DIRECT_DEBIT inquiries. */
  credit_scheme_identifier?: string;
  /** The mandate id provided by the counterparty for DIRECT_DEBIT inquiries. */
  mandate_identifier?: string;
  /** The whitelist id for this action or null. */
  eligible_whitelist_id?: number;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
  /** The ID of the latest event for the request. */
  event_id?: number;
  /** The ID of the monetary account this user prefers to pay the request from. */
  monetary_account_preferred_id?: number;
}

export interface RequestResponseRead {
  /** The id of the Request Response. */
  id?: number;
  /** The timestamp when the Request Response was created. */
  created?: string;
  /** The timestamp when the Request Response was last updated (will be updated when chat messages are received). */
  updated?: string;
  /** The timestamp of when the RequestResponse was responded to. */
  time_responded?: string;
  /** The timestamp of when the RequestResponse expired or will expire. */
  time_expiry?: string;
  /** The timestamp of when a refund request for the RequestResponse was claimed. */
  time_refund_requested?: string;
  /** The timestamp of when the RequestResponse was refunded. */
  time_refunded?: string;
  /** The label of the user that requested the refund. */
  user_refund_requested?: LabelUser;
  /** The id of the MonetaryAccount the RequestResponse was received on. */
  monetary_account_id?: number;
  /** The requested Amount. */
  amount_inquired?: Amount;
  /** The Amount the RequestResponse was accepted with. */
  amount_responded?: Amount;
  /** The status of the RequestResponse. Can be ACCEPTED, PENDING, REJECTED, REFUND_REQUESTED, REFUNDED or REVOKED. */
  status?: string;
  /** The description for the RequestResponse provided by the requesting party. Maximum 9000 characters. */
  description?: string;
  /** The LabelMonetaryAccount with the public information of the MonetaryAccount this RequestResponse was received on. */
  alias?: LabelMonetaryAccount;
  /** The LabelMonetaryAccount with the public information of the MonetaryAccount that is requesting money with this RequestResponse. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The Attachments attached to the RequestResponse. */
  attachment?: Attachment[];
  /** The minimum age the user accepting the RequestResponse must have. */
  minimum_age?: number;
  /** Whether or not an address must be provided on accept. */
  require_address?: string;
  /** The Geolocation where the RequestResponse was created. */
  geolocation?: Geolocation;
  /** The type of the RequestInquiry. Can be DIRECT_DEBIT, DIRECT_DEBIT_B2B, IDEAL, SOFORT or INTERNAL. */
  type?: string;
  /** The subtype of the RequestInquiry. Can be ONCE or RECURRING for DIRECT_DEBIT RequestInquiries and NONE for all other. */
  sub_type?: string;
  /** The URL which the user is sent to after accepting or rejecting the Request. */
  redirect_url?: string;
  /** The billing address provided by the accepting user if an address was requested. */
  address_billing?: Address;
  /** The shipping address provided by the accepting user if an address was requested. */
  address_shipping?: Address;
  /** The credit scheme id provided by the counterparty for DIRECT_DEBIT inquiries. */
  credit_scheme_identifier?: string;
  /** The mandate id provided by the counterparty for DIRECT_DEBIT inquiries. */
  mandate_identifier?: string;
  /** The whitelist id for this action or null. */
  eligible_whitelist_id?: number;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
  /** The ID of the latest event for the request. */
  event_id?: number;
  /** The ID of the monetary account this user prefers to pay the request from. */
  monetary_account_preferred_id?: number;
}

export interface RequestResponseUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface RewardListing {
  /** The id of the reward. */
  id?: number;
  /** The time the reward was created. */
  created?: string;
  /** The time the reward was last updated. */
  updated?: string;
  /** The status of the reward. */
  status?: string;
  /** The subStatus of the reward. */
  sub_status?: string;
  /** The type of the reward. */
  type?: string;
  /** The alias of the other user eligible for the reward award. */
  counterparty_alias?: LabelUser;
  /** The amount that will be/was awarded as reward for the reward. */
  amount_reward?: Amount;
}

export interface RewardRead {
  /** The id of the reward. */
  id?: number;
  /** The time the reward was created. */
  created?: string;
  /** The time the reward was last updated. */
  updated?: string;
  /** The status of the reward. */
  status?: string;
  /** The subStatus of the reward. */
  sub_status?: string;
  /** The type of the reward. */
  type?: string;
  /** The alias of the other user eligible for the reward award. */
  counterparty_alias?: LabelUser;
  /** The amount that will be/was awarded as reward for the reward. */
  amount_reward?: Amount;
}

export interface RewardRecipient {
  /** The id of the reward. */
  id?: number;
  /** The time the reward was created. */
  created?: string;
  /** The time the reward was last updated. */
  updated?: string;
  /** The status of the reward. */
  status?: string;
  /** The subStatus of the reward. */
  sub_status?: string;
  /** The type of the reward. */
  type?: string;
  /** The alias of the other user eligible for the reward award. */
  counterparty_alias?: LabelUser;
  /** The amount that will be/was awarded as reward for the reward. */
  amount_reward?: Amount;
}

export interface RewardRecipientListing {
  /** The id of the reward. */
  id?: number;
  /** The time the reward was created. */
  created?: string;
  /** The time the reward was last updated. */
  updated?: string;
  /** The status of the reward. */
  status?: string;
  /** The subStatus of the reward. */
  sub_status?: string;
  /** The type of the reward. */
  type?: string;
  /** The alias of the other user eligible for the reward award. */
  counterparty_alias?: LabelUser;
  /** The amount that will be/was awarded as reward for the reward. */
  amount_reward?: Amount;
}

export interface RewardRecipientRead {
  /** The id of the reward. */
  id?: number;
  /** The time the reward was created. */
  created?: string;
  /** The time the reward was last updated. */
  updated?: string;
  /** The status of the reward. */
  status?: string;
  /** The subStatus of the reward. */
  sub_status?: string;
  /** The type of the reward. */
  type?: string;
  /** The alias of the other user eligible for the reward award. */
  counterparty_alias?: LabelUser;
  /** The amount that will be/was awarded as reward for the reward. */
  amount_reward?: Amount;
}

export interface RewardSender {
  /** The id of the reward. */
  id?: number;
  /** The time the reward was created. */
  created?: string;
  /** The time the reward was last updated. */
  updated?: string;
  /** The status of the reward. */
  status?: string;
  /** The subStatus of the reward. */
  sub_status?: string;
  /** The type of the reward. */
  type?: string;
  /** The alias of the other user eligible for the reward award. */
  counterparty_alias?: LabelUser;
  /** The amount that will be/was awarded as reward for the reward. */
  amount_reward?: Amount;
}

export interface RewardSenderListing {
  /** The id of the reward. */
  id?: number;
  /** The time the reward was created. */
  created?: string;
  /** The time the reward was last updated. */
  updated?: string;
  /** The status of the reward. */
  status?: string;
  /** The subStatus of the reward. */
  sub_status?: string;
  /** The type of the reward. */
  type?: string;
  /** The alias of the other user eligible for the reward award. */
  counterparty_alias?: LabelUser;
  /** The amount that will be/was awarded as reward for the reward. */
  amount_reward?: Amount;
}

export interface RewardSenderRead {
  /** The id of the reward. */
  id?: number;
  /** The time the reward was created. */
  created?: string;
  /** The time the reward was last updated. */
  updated?: string;
  /** The status of the reward. */
  status?: string;
  /** The subStatus of the reward. */
  sub_status?: string;
  /** The type of the reward. */
  type?: string;
  /** The alias of the other user eligible for the reward award. */
  counterparty_alias?: LabelUser;
  /** The amount that will be/was awarded as reward for the reward. */
  amount_reward?: Amount;
}

export type SandboxUserCompany = object;

export interface SandboxUserCompanyCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type SandboxUserPerson = object;

export interface SandboxUserPersonCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface Schedule {
  /** The schedule start time (UTC). */
  time_start?: string;
  /** The schedule end time (UTC). */
  time_end?: string;
  /** The schedule recurrence unit, options: ONCE, HOURLY, DAILY, WEEKLY, MONTHLY, YEARLY */
  recurrence_unit?: string;
  /** The schedule recurrence size. For example size 4 and unit WEEKLY means the recurrence is every 4 weeks. */
  recurrence_size?: number;
  /** The schedule status, options: ACTIVE, FINISHED, CANCELLED. */
  status?: string;
  /** The scheduled object. (Payment, PaymentBatch) */
  object?: ScheduleAnchorObject;
}

export interface ScheduleAnchorObject {
  Payment?: Payment;
  PaymentBatch?: PaymentBatch;
}

export interface ScheduleInstance {
  /** The state of the scheduleInstance. (FINISHED_SUCCESSFULLY, RETRY, FAILED_USER_ERROR) */
  state?: string;
  /** The schedule start time (UTC). */
  time_start?: string;
  /** The schedule end time (UTC). */
  time_end?: string;
  /** The message when the scheduled instance has run and failed due to user error. */
  error_message?: Error[];
  /** The scheduled object. (Payment, PaymentBatch) */
  scheduled_object?: ScheduleAnchorObject;
  /** The result object of this schedule instance. (Payment, PaymentBatch) */
  result_object?: ScheduleInstanceAnchorObject;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
}

export interface ScheduleInstanceAnchorObject {
  Payment?: Payment;
  PaymentBatch?: PaymentBatch;
}

export interface ScheduleInstanceListing {
  /** The state of the scheduleInstance. (FINISHED_SUCCESSFULLY, RETRY, FAILED_USER_ERROR) */
  state?: string;
  /** The schedule start time (UTC). */
  time_start?: string;
  /** The schedule end time (UTC). */
  time_end?: string;
  /** The message when the scheduled instance has run and failed due to user error. */
  error_message?: Error[];
  /** The scheduled object. (Payment, PaymentBatch) */
  scheduled_object?: ScheduleAnchorObject;
  /** The result object of this schedule instance. (Payment, PaymentBatch) */
  result_object?: ScheduleInstanceAnchorObject;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
}

export interface ScheduleInstanceRead {
  /** The state of the scheduleInstance. (FINISHED_SUCCESSFULLY, RETRY, FAILED_USER_ERROR) */
  state?: string;
  /** The schedule start time (UTC). */
  time_start?: string;
  /** The schedule end time (UTC). */
  time_end?: string;
  /** The message when the scheduled instance has run and failed due to user error. */
  error_message?: Error[];
  /** The scheduled object. (Payment, PaymentBatch) */
  scheduled_object?: ScheduleAnchorObject;
  /** The result object of this schedule instance. (Payment, PaymentBatch) */
  result_object?: ScheduleInstanceAnchorObject;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
}

export interface ScheduleInstanceUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface ScheduleListing {
  /** The schedule start time (UTC). */
  time_start?: string;
  /** The schedule end time (UTC). */
  time_end?: string;
  /** The schedule recurrence unit, options: ONCE, HOURLY, DAILY, WEEKLY, MONTHLY, YEARLY */
  recurrence_unit?: string;
  /** The schedule recurrence size. For example size 4 and unit WEEKLY means the recurrence is every 4 weeks. */
  recurrence_size?: number;
  /** The schedule status, options: ACTIVE, FINISHED, CANCELLED. */
  status?: string;
  /** The scheduled object. (Payment, PaymentBatch) */
  object?: ScheduleAnchorObject;
}

export interface SchedulePayment {
  /** The payment details. */
  payment?: SchedulePaymentEntry;
  /** The schedule details. */
  schedule?: Schedule;
  /** The schedule status, options: ACTIVE, FINISHED, CANCELLED. */
  status?: string;
}

export interface SchedulePaymentBatch {
  /** The payment details. */
  payments?: SchedulePaymentEntry[];
  /** The schedule details. */
  schedule?: Schedule;
}

export interface SchedulePaymentBatchCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type SchedulePaymentBatchDelete = object;

export interface SchedulePaymentBatchRead {
  /** The payment details. */
  payments?: SchedulePaymentEntry[];
  /** The schedule details. */
  schedule?: Schedule;
}

export interface SchedulePaymentBatchUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface SchedulePaymentCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type SchedulePaymentDelete = object;

export interface SchedulePaymentEntry {
  /** The Amount transferred by the Payment. Will be negative for outgoing Payments and positive for incoming Payments (relative to the MonetaryAccount indicated by monetary_account_id). */
  amount?: Amount;
  /** The LabelMonetaryAccount containing the public information of the other (counterparty) side of the Payment. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The description for the Payment. Maximum 140 characters for Payments to external IBANs, 9000 characters for Payments to only other bunq MonetaryAccounts. */
  description?: string;
  /** The Attachments attached to the Payment. */
  attachment?: AttachmentMonetaryAccountPayment[];
  /** Optional data included with the Payment specific to the merchant. */
  merchant_reference?: string;
  /** Whether or not sending a bunq.to payment is allowed. */
  allow_bunqto?: boolean;
  /** The LabelMonetaryAccount containing the public information of 'this' (party) side of the Payment. */
  alias?: LabelMonetaryAccount;
}

export interface SchedulePaymentListing {
  /** The payment details. */
  payment?: SchedulePaymentEntry;
  /** The schedule details. */
  schedule?: Schedule;
  /** The schedule status, options: ACTIVE, FINISHED, CANCELLED. */
  status?: string;
}

export interface SchedulePaymentRead {
  /** The payment details. */
  payment?: SchedulePaymentEntry;
  /** The schedule details. */
  schedule?: Schedule;
  /** The schedule status, options: ACTIVE, FINISHED, CANCELLED. */
  status?: string;
}

export interface SchedulePaymentUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface ScheduleRead {
  /** The schedule start time (UTC). */
  time_start?: string;
  /** The schedule end time (UTC). */
  time_end?: string;
  /** The schedule recurrence unit, options: ONCE, HOURLY, DAILY, WEEKLY, MONTHLY, YEARLY */
  recurrence_unit?: string;
  /** The schedule recurrence size. For example size 4 and unit WEEKLY means the recurrence is every 4 weeks. */
  recurrence_size?: number;
  /** The schedule status, options: ACTIVE, FINISHED, CANCELLED. */
  status?: string;
  /** The scheduled object. (Payment, PaymentBatch) */
  object?: ScheduleAnchorObject;
}

export type ScheduleUserListing = object;

export type ServerError = object;

export interface ServerErrorCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type SessionDelete = object;

export interface SessionServer {
  /** The API key of the user you want to login. If your API key has not been used before, it will be bound to the ip address of this DeviceServer. */
  secret: string;
}

export interface SessionServerCreate {
  /** The Id object of the created Session. */
  Id?: BunqId;
  /** The token object of this Session. */
  Token?: SessionServerToken;
  /** The UserCompany object that is logged in with this Session. */
  UserCompany?: UserCompany;
  /** The UserPerson object that is logged in with this Session. */
  UserPerson?: UserPerson;
  /** The UserApiKey object that is logged in with this Session. */
  UserApiKey?: UserApiKey;
  /** The UserPaymentServiceProvider object that is logged in with this Session. */
  UserPaymentServiceProvider?: UserPaymentServiceProvider;
}

export interface SessionServerToken {
  /** The id of the Token. */
  id?: number;
  /** The Session token is the token the client has to provide in the "X-Bunq-Client-Authentication" header for each API call that requires a Session (only the creation of a Installation and DeviceServer don't require a Session). */
  token?: string;
}

export interface ShareDetail {
  /** The share details for a payment share. In the response 'payment' is replaced by 'ShareDetailPayment'. */
  payment?: ShareDetailPayment;
  /** The share details for viewing a share. In the response 'read_only' is replaced by 'ShareDetailReadOnly'. */
  read_only?: ShareDetailReadOnly;
  /** The share details for a draft payment share. In the response 'draft_payment' is replaced by 'ShareDetailDraftPayment'. */
  draft_payment?: ShareDetailDraftPayment;
}

export interface ShareDetailDraftPayment {
  /** If set to true, the invited user will be able to make draft payments from the shared account. */
  make_draft_payments?: boolean;
  /** If set to true, the invited user will be able to view the account balance. */
  view_balance?: boolean;
  /** If set to true, the invited user will be able to view events from before the share was active. */
  view_old_events?: boolean;
  /** If set to true, the invited user will be able to view events starting from the time the share became active. */
  view_new_events?: boolean;
}

export interface ShareDetailPayment {
  /** If set to true, the invited user will be able to make payments from the shared account. */
  make_payments?: boolean;
  /** If set to true, the invited user will be able to make draft payments from the shared account. */
  make_draft_payments?: boolean;
  /** If set to true, the invited user will be able to view the account balance. */
  view_balance?: boolean;
  /** If set to true, the invited user will be able to view events from before the share was active. */
  view_old_events?: boolean;
  /** If set to true, the invited user will be able to view events starting from the time the share became active. */
  view_new_events?: boolean;
}

export interface ShareDetailReadOnly {
  /** If set to true, the invited user will be able to view the account balance. */
  view_balance?: boolean;
  /** If set to true, the invited user will be able to view events from before the share was active. */
  view_old_events?: boolean;
  /** If set to true, the invited user will be able to view events starting from the time the share became active. */
  view_new_events?: boolean;
}

export interface ShareInviteMonetaryAccountInquiry {
  /** The label of the user to share with. */
  counter_user_alias?: LabelUser;
  /** Type of access that is in place. */
  access_type?: string;
  /** DEPRECATED: USE `access_type` INSTEAD | The id of the draft share invite bank. */
  draft_share_invite_bank_id?: number;
  /** DEPRECATED: USE `access_type` INSTEAD | The share details. Only one of these objects may be passed. */
  share_detail?: ShareDetail;
  /** The status of the share. Can be ACTIVE, REVOKED, REJECTED. */
  status?: string;
  /** The relationship: COMPANY_DIRECTOR, COMPANY_EMPLOYEE, etc */
  relationship?: string;
  /** DEPRECATED: USE `access_type` INSTEAD | The share type, either STANDARD or MUTUAL. */
  share_type?: string;
  /** DEPRECATED: USE `access_type` INSTEAD | The start date of this share. */
  start_date?: string;
  /** DEPRECATED: USE `access_type` INSTEAD | The expiration date of this share. */
  end_date?: string;
  /** The label of the monetary account that's being shared. */
  alias?: LabelMonetaryAccount;
  /** The user who created the share. */
  user_alias_created?: LabelUser;
  /** The user who revoked the share. */
  user_alias_revoked?: LabelUser;
  /** The id of the monetary account the share applies to. */
  monetary_account_id?: number;
  /** The id of the newly created share invite. */
  id?: number;
}

export interface ShareInviteMonetaryAccountInquiryCreate {
  /** The id of the newly created share invite. */
  id?: number;
}

export interface ShareInviteMonetaryAccountInquiryListing {
  /** The label of the monetary account that's being shared. */
  alias?: LabelMonetaryAccount;
  /** The user who created the share. */
  user_alias_created?: LabelUser;
  /** The user who revoked the share. */
  user_alias_revoked?: LabelUser;
  /** The label of the user to share with. */
  counter_user_alias?: LabelUser;
  /** The id of the monetary account the share applies to. */
  monetary_account_id?: number;
  /** The status of the share. Can be ACTIVE, REVOKED, REJECTED. */
  status?: string;
  /** Type of access that is in place. */
  access_type?: string;
  /** The relationship: COMPANY_DIRECTOR, COMPANY_EMPLOYEE, etc */
  relationship?: string;
  /** The id of the newly created share invite. */
  id?: number;
}

export interface ShareInviteMonetaryAccountInquiryRead {
  /** The label of the monetary account that's being shared. */
  alias?: LabelMonetaryAccount;
  /** The user who created the share. */
  user_alias_created?: LabelUser;
  /** The user who revoked the share. */
  user_alias_revoked?: LabelUser;
  /** The label of the user to share with. */
  counter_user_alias?: LabelUser;
  /** The id of the monetary account the share applies to. */
  monetary_account_id?: number;
  /** The status of the share. Can be ACTIVE, REVOKED, REJECTED. */
  status?: string;
  /** Type of access that is in place. */
  access_type?: string;
  /** The relationship: COMPANY_DIRECTOR, COMPANY_EMPLOYEE, etc */
  relationship?: string;
  /** The id of the newly created share invite. */
  id?: number;
}

export interface ShareInviteMonetaryAccountInquiryUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface ShareInviteMonetaryAccountResponse {
  /** The status of the share. Can be ACTIVE, REVOKED, REJECTED. */
  status?: string;
  /** The card to link to the shared monetary account. Used only if share_detail is ShareDetailCardPayment. */
  card_id?: number;
  /** The id of the ShareInviteBankResponse. */
  id?: number;
  /** The timestamp of the ShareInviteBankResponse creation. */
  created?: string;
  /** The timestamp of the ShareInviteBankResponse last update. */
  updated?: string;
  /** The monetary account and user who created the share. */
  counter_alias?: LabelMonetaryAccount;
  /** The user who cancelled the share if it has been revoked or rejected. */
  user_alias_cancelled?: LabelUser;
  /** The id of the monetary account the ACCEPTED share applies to. null otherwise. */
  monetary_account_id?: number;
  /** The id of the draft share invite bank. */
  draft_share_invite_bank_id?: number;
  /** The share details. */
  share_detail?: ShareDetail;
  /** Type of access that is wanted, one of VIEW_BALANCE, VIEW_TRANSACTION, DRAFT_PAYMENT or FULL_TRANSIENT */
  access_type?: string;
  /** All of the relation users towards this MA. */
  relation_user?: RelationUser;
  /** The share type, either STANDARD or MUTUAL. */
  share_type?: string;
  /** The start date of this share. */
  start_date?: string;
  /** The expiration date of this share. */
  end_date?: string;
  /** The description of this share. It is basically the monetary account description. */
  description?: string;
}

export interface ShareInviteMonetaryAccountResponseListing {
  /** The id of the ShareInviteBankResponse. */
  id?: number;
  /** The timestamp of the ShareInviteBankResponse creation. */
  created?: string;
  /** The timestamp of the ShareInviteBankResponse last update. */
  updated?: string;
  /** The monetary account and user who created the share. */
  counter_alias?: LabelMonetaryAccount;
  /** The user who cancelled the share if it has been revoked or rejected. */
  user_alias_cancelled?: LabelUser;
  /** The id of the monetary account the ACCEPTED share applies to. null otherwise. */
  monetary_account_id?: number;
  /** The id of the draft share invite bank. */
  draft_share_invite_bank_id?: number;
  /** The share details. */
  share_detail?: ShareDetail;
  /** Type of access that is wanted, one of VIEW_BALANCE, VIEW_TRANSACTION, DRAFT_PAYMENT or FULL_TRANSIENT */
  access_type?: string;
  /** The status of the share. Can be ACTIVE, REVOKED, REJECTED. */
  status?: string;
  /** All of the relation users towards this MA. */
  relation_user?: RelationUser;
  /** The share type, either STANDARD or MUTUAL. */
  share_type?: string;
  /** The start date of this share. */
  start_date?: string;
  /** The expiration date of this share. */
  end_date?: string;
  /** The description of this share. It is basically the monetary account description. */
  description?: string;
}

export interface ShareInviteMonetaryAccountResponseRead {
  /** The id of the ShareInviteBankResponse. */
  id?: number;
  /** The timestamp of the ShareInviteBankResponse creation. */
  created?: string;
  /** The timestamp of the ShareInviteBankResponse last update. */
  updated?: string;
  /** The monetary account and user who created the share. */
  counter_alias?: LabelMonetaryAccount;
  /** The user who cancelled the share if it has been revoked or rejected. */
  user_alias_cancelled?: LabelUser;
  /** The id of the monetary account the ACCEPTED share applies to. null otherwise. */
  monetary_account_id?: number;
  /** The id of the draft share invite bank. */
  draft_share_invite_bank_id?: number;
  /** The share details. */
  share_detail?: ShareDetail;
  /** Type of access that is wanted, one of VIEW_BALANCE, VIEW_TRANSACTION, DRAFT_PAYMENT or FULL_TRANSIENT */
  access_type?: string;
  /** The status of the share. Can be ACTIVE, REVOKED, REJECTED. */
  status?: string;
  /** All of the relation users towards this MA. */
  relation_user?: RelationUser;
  /** The share type, either STANDARD or MUTUAL. */
  share_type?: string;
  /** The start date of this share. */
  start_date?: string;
  /** The expiration date of this share. */
  end_date?: string;
  /** The description of this share. It is basically the monetary account description. */
  description?: string;
}

export interface ShareInviteMonetaryAccountResponseUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface SofortMerchantTransaction {
  /** The requested amount of money to add. */
  amount_requested?: Amount;
  /** The BIC of the issuer. */
  issuer?: string;
  /** The id of the monetary account this sofort merchant transaction links to. */
  monetary_account_id?: number;
  /** The alias of the monetary account to add money to. */
  alias?: LabelMonetaryAccount;
  /** The alias of the monetary account the money comes from. */
  counterparty_alias?: LabelMonetaryAccount;
  /** In case of a successful transaction, the amount of money that will be transferred. */
  amount_guaranteed?: Amount;
  /** The URL to visit to  */
  issuer_authentication_url?: string;
  /** The status of the transaction. */
  status?: string;
  /** The error message of the transaction. */
  error_message?: Error[];
  /** The 'transaction ID' of the Sofort transaction. */
  transaction_identifier?: string;
}

export interface SofortMerchantTransactionListing {
  /** The id of the monetary account this sofort merchant transaction links to. */
  monetary_account_id?: number;
  /** The alias of the monetary account to add money to. */
  alias?: LabelMonetaryAccount;
  /** The alias of the monetary account the money comes from. */
  counterparty_alias?: LabelMonetaryAccount;
  /** In case of a successful transaction, the amount of money that will be transferred. */
  amount_guaranteed?: Amount;
  /** The requested amount of money to add. */
  amount_requested?: Amount;
  /** The BIC of the issuer. */
  issuer?: string;
  /** The URL to visit to  */
  issuer_authentication_url?: string;
  /** The status of the transaction. */
  status?: string;
  /** The error message of the transaction. */
  error_message?: Error[];
  /** The 'transaction ID' of the Sofort transaction. */
  transaction_identifier?: string;
}

export interface SofortMerchantTransactionRead {
  /** The id of the monetary account this sofort merchant transaction links to. */
  monetary_account_id?: number;
  /** The alias of the monetary account to add money to. */
  alias?: LabelMonetaryAccount;
  /** The alias of the monetary account the money comes from. */
  counterparty_alias?: LabelMonetaryAccount;
  /** In case of a successful transaction, the amount of money that will be transferred. */
  amount_guaranteed?: Amount;
  /** The requested amount of money to add. */
  amount_requested?: Amount;
  /** The BIC of the issuer. */
  issuer?: string;
  /** The URL to visit to  */
  issuer_authentication_url?: string;
  /** The status of the transaction. */
  status?: string;
  /** The error message of the transaction. */
  error_message?: Error[];
  /** The 'transaction ID' of the Sofort transaction. */
  transaction_identifier?: string;
}

export interface TaxResident {
  /** The country of the tax number. */
  country?: string;
  /** The tax number. */
  tax_number?: string;
  /** The status of the tax number. Either CONFIRMED or UNCONFIRMED. */
  status?: string;
}

export interface TokenQrRequestIdeal {
  /** The token passed from a site or read from a QR code. */
  token: string;
}

export interface TokenQrRequestIdealCreate {
  /** The id of the RequestResponse. */
  id?: number;
  /** The timestamp of when the RequestResponse was responded to. */
  time_responded?: string;
  /** The timestamp of when the RequestResponse expired or will expire. */
  time_expiry?: string;
  /** The id of the MonetaryAccount the RequestResponse was received on. */
  monetary_account_id?: number;
  /** The requested Amount. */
  amount_inquired?: Amount;
  /** The Amount the RequestResponse was accepted with. */
  amount_responded?: Amount;
  /** The LabelMonetaryAccount with the public information of the MonetaryAccount this RequestResponse was received on. */
  alias?: LabelMonetaryAccount;
  /** The LabelMonetaryAccount with the public information of the MonetaryAccount that is requesting money with this RequestResponse. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The description for the RequestResponse provided by the requesting party. Maximum 9000 characters. */
  description?: string;
  /** The Attachments attached to the RequestResponse. */
  attachment?: Attachment[];
  /** The status of the created RequestResponse. Can only be PENDING. */
  status?: string;
  /** The minimum age the user accepting the RequestResponse must have. */
  minimum_age?: number;
  /** Whether or not an address must be provided on accept. */
  require_address?: string;
  /** The shipping address provided by the accepting user if an address was requested. */
  address_shipping?: Address;
  /** The billing address provided by the accepting user if an address was requested. */
  address_billing?: Address;
  /** The Geolocation where the RequestResponse was created. */
  geolocation?: Geolocation;
  /** The URL which the user is sent to after accepting or rejecting the Request. */
  redirect_url?: string;
  /** The type of the RequestResponse. Can be only be IDEAL. */
  type?: string;
  /** The subtype of the RequestResponse. Can be only be NONE. */
  sub_type?: string;
  /** The whitelist id for this action or null. */
  eligible_whitelist_id?: number;
}

export interface TokenQrRequestSofort {
  /** The token passed from a site or read from a QR code. */
  token: string;
}

export interface TokenQrRequestSofortCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface TransferwiseAccountQuote {
  /** The country of the receiving account. */
  country?: string;
  /** The name of the account holder. */
  name_account_holder: string;
  /** The chosen recipient account type. The possible options are provided dynamically in the response endpoint. */
  type: string;
  /** The fields which were specified as "required" and have since been filled by the user. Always provide the full list. */
  detail?: TransferwiseRequirementField[];
}

export interface TransferwiseAccountQuoteCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type TransferwiseAccountQuoteDelete = object;

export interface TransferwiseAccountQuoteListing {
  /** Transferwise's id of the account. */
  account_id?: string;
  /** The currency the account. */
  currency?: string;
  /** The country of the account. */
  country?: string;
  /** The name of the account holder. */
  name_account_holder?: string;
  /** The account number. */
  account_number?: string;
  /** The bank code. */
  bank_code?: string;
}

export interface TransferwiseAccountQuoteRead {
  /** Transferwise's id of the account. */
  account_id?: string;
  /** The currency the account. */
  currency?: string;
  /** The country of the account. */
  country?: string;
  /** The name of the account holder. */
  name_account_holder?: string;
  /** The account number. */
  account_number?: string;
  /** The bank code. */
  bank_code?: string;
}

export interface TransferwiseAccountRequirement {
  /** The country of the receiving account. */
  country?: string;
  /** The name of the account holder. */
  name_account_holder: string;
  /** The chosen recipient account type. The possible options are provided dynamically in the response endpoint. */
  type: string;
  /** The fields which were specified as "required" and have since been filled by the user. Always provide the full list. */
  detail?: TransferwiseRequirementField[];
}

export interface TransferwiseAccountRequirementCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface TransferwiseAccountRequirementListing {
  /** A possible recipient account type. */
  type?: string;
  /** The label of the possible recipient account type to show to the user. */
  label?: string;
  /** The fields which the user needs to fill. */
  fields?: TransferwiseRequirementField[];
}

export interface TransferwiseCurrencyListing {
  /** The currency code. */
  currency?: string;
  /** The currency name. */
  name?: string;
  /** The country code associated with the currency. */
  country?: string;
}

export interface TransferwiseQuote {
  /** The source currency. */
  currency_source: string;
  /** The target currency. */
  currency_target: string;
  /** The source amount. */
  amount_source?: Amount;
  /** The target amount. */
  amount_target?: Amount;
  /** The id of the quote. */
  id?: number;
  /** The timestamp of the quote's creation. */
  created?: string;
  /** The timestamp of the quote's last update. */
  updated?: string;
  /** The expiration timestamp of the quote. */
  time_expiry?: string;
  /** The quote id Transferwise needs. */
  quote_id?: string;
  /** The fee amount. */
  amount_fee?: Amount;
  /** The rate. */
  rate?: string;
  /** The estimated delivery time. */
  time_delivery_estimate?: string;
}

export interface TransferwiseQuoteCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface TransferwiseQuoteRead {
  /** The id of the quote. */
  id?: number;
  /** The timestamp of the quote's creation. */
  created?: string;
  /** The timestamp of the quote's last update. */
  updated?: string;
  /** The expiration timestamp of the quote. */
  time_expiry?: string;
  /** The quote id Transferwise needs. */
  quote_id?: string;
  /** The source amount. */
  amount_source?: Amount;
  /** The target amount. */
  amount_target?: Amount;
  /** The fee amount. */
  amount_fee?: Amount;
  /** The rate. */
  rate?: string;
  /** The estimated delivery time. */
  time_delivery_estimate?: string;
}

export interface TransferwiseQuoteTemporary {
  /** The source currency. */
  currency_source: string;
  /** The target currency. */
  currency_target: string;
  /** The source amount. Required if target amount is left empty. */
  amount_source?: Amount;
  /** The target amount. Required if source amount is left empty. */
  amount_target?: Amount;
}

export interface TransferwiseQuoteTemporaryCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface TransferwiseQuoteTemporaryRead {
  /** The id of the quote. */
  id?: number;
  /** The timestamp of the note's creation. */
  created?: string;
  /** The timestamp of the note's last update. */
  updated?: string;
  /** The expiration timestamp of the quote. Will always be null for temporary quotes. */
  time_expiry?: string;
  /** The quote id Transferwise needs. Will always be null for temporary quotes. */
  quote_id?: string;
  /** The source amount. */
  amount_source?: Amount;
  /** The target amount. */
  amount_target?: Amount;
  /** The rate. */
  rate?: string;
}

export interface TransferwiseRequirementField {
  /** The name of the required field. */
  key: string;
  /** The value of the required field. */
  value: string;
  /** The descriptive label of the field. */
  name?: string;
  /** The field group. */
  group?: TransferwiseRequirementFieldGroup;
}

export interface TransferwiseRequirementFieldGroup {
  /** The key of the field. This is the value to send as input. */
  key?: string;
  /** The field's input type: "text", "select" or "radio". */
  type?: string;
  /** The field name. */
  name?: string;
  /** Indicates that any changes in this field affect the requirements, if this field is changed, the requirements endpoint must be called again to recheck if there are any additional requirements. */
  refresh_requirements_on_change?: boolean;
  /** Whether or not the field is required. */
  required?: boolean;
  /** Formatting mask to guide user input. */
  display_format?: string;
  /** An example value for this field. */
  example?: string;
  /** The minimum length of the field's value. */
  min_length?: string;
  /** The maximum length of the field's value. */
  max_length?: string;
  /** A regular expression which may be used to validate the user input. */
  validation_regexp?: string;
  /** Details of an endpoint which may be used to validate the user input. */
  validation_async?: TransferwiseRequirementFieldGroupValidationAsync;
  /** Shows which values are allowed for fields of type "select" or "radio". */
  values_allowed?: TransferwiseRequirementFieldGroupValuesAllowed;
}

export interface TransferwiseRequirementFieldGroupValidationAsync {
  /** The url to be used to validate user input. */
  url?: string;
  /** The parameters to send when validating user input. */
  params?: TransferwiseRequirementFieldGroupValidationAsyncParams;
}

export interface TransferwiseRequirementFieldGroupValidationAsyncParams {
  /** The parameter key. */
  key?: string;
  /** The parameter label. */
  parameter_name?: string;
  /** Shows whether the parameter is required or not. */
  required?: boolean;
}

export interface TransferwiseRequirementFieldGroupValuesAllowed {
  /** The key. */
  key?: string;
  /** The label. */
  name?: string;
}

export interface TransferwiseTransfer {
  /** The id of the monetary account the payment should be made from. */
  monetary_account_id: string;
  /** The id of the target account. */
  recipient_id: string;
  /** The LabelMonetaryAccount containing the public information of 'this' (party) side of the Payment. */
  alias?: LabelMonetaryAccount;
  /** The LabelMonetaryAccount containing the public information of the other (counterparty) side of the Payment. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The status. */
  status?: string;
  /** The subStatus. */
  sub_status?: string;
  /** The status as Transferwise reports it. */
  status_transferwise?: string;
  /** A status to indicatie if Transferwise has an issue with this payment and requires more information. */
  status_transferwise_issue?: string;
  /** The source amount. */
  amount_source?: Amount;
  /** The target amount. */
  amount_target?: Amount;
  /** The rate of the payment. */
  rate?: string;
  /** The reference of the payment. */
  reference?: string;
  /** The Pay-In reference of the payment. */
  pay_in_reference?: string;
  /** The estimated delivery time. */
  time_delivery_estimate?: string;
  /** The quote details used to created the payment. */
  quote?: TransferwiseQuote;
}

export interface TransferwiseTransferCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface TransferwiseTransferListing {
  /** The LabelMonetaryAccount containing the public information of 'this' (party) side of the Payment. */
  alias?: LabelMonetaryAccount;
  /** The LabelMonetaryAccount containing the public information of the other (counterparty) side of the Payment. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The status. */
  status?: string;
  /** The subStatus. */
  sub_status?: string;
  /** The status as Transferwise reports it. */
  status_transferwise?: string;
  /** A status to indicatie if Transferwise has an issue with this payment and requires more information. */
  status_transferwise_issue?: string;
  /** The source amount. */
  amount_source?: Amount;
  /** The target amount. */
  amount_target?: Amount;
  /** The rate of the payment. */
  rate?: string;
  /** The reference of the payment. */
  reference?: string;
  /** The Pay-In reference of the payment. */
  pay_in_reference?: string;
  /** The estimated delivery time. */
  time_delivery_estimate?: string;
  /** The quote details used to created the payment. */
  quote?: TransferwiseQuote;
}

export interface TransferwiseTransferRead {
  /** The LabelMonetaryAccount containing the public information of 'this' (party) side of the Payment. */
  alias?: LabelMonetaryAccount;
  /** The LabelMonetaryAccount containing the public information of the other (counterparty) side of the Payment. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The status. */
  status?: string;
  /** The subStatus. */
  sub_status?: string;
  /** The status as Transferwise reports it. */
  status_transferwise?: string;
  /** A status to indicatie if Transferwise has an issue with this payment and requires more information. */
  status_transferwise_issue?: string;
  /** The source amount. */
  amount_source?: Amount;
  /** The target amount. */
  amount_target?: Amount;
  /** The rate of the payment. */
  rate?: string;
  /** The reference of the payment. */
  reference?: string;
  /** The Pay-In reference of the payment. */
  pay_in_reference?: string;
  /** The estimated delivery time. */
  time_delivery_estimate?: string;
  /** The quote details used to created the payment. */
  quote?: TransferwiseQuote;
}

export interface TransferwiseTransferRequirement {
  /** The id of the target account. */
  recipient_id: string;
  /** The fields which were specified as "required" and have since been filled by the user. Always provide the full list. */
  detail?: TransferwiseRequirementField[];
}

export interface TransferwiseTransferRequirementCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface TransferwiseUser {
  /** The OAuth code returned by Transferwise we should be using to gain access to the user's Transferwise account. */
  oauth_code?: string;
}

export interface TransferwiseUserCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface TransferwiseUserListing {
  /** The id of the TransferwiseUser. */
  id?: number;
  /** The timestamp of the TransferwiseUser's creation. */
  created?: string;
  /** The timestamp of the TransferwiseUser's last update. */
  updated?: string;
  /** The name the user is registered with at TransferWise. */
  name?: string;
  /** The email the user is registered with at TransferWise. */
  email?: string;
  /** The source of the user at TransferWise. */
  source?: string;
}

export interface TreeProgressListing {
  /** The number of trees this user and all users have planted. */
  number_of_tree?: number;
  /** The progress towards the next tree. */
  progress_tree_next?: number;
  /** URL of the invite profile. */
  url_invite_profile?: string;
  /** The label of the user the progress belongs to. */
  label_user?: LabelUser;
}

export interface Ubo {
  /** The name of the ultimate beneficiary owner. */
  name?: string;
  /** The date of birth of the ultimate beneficiary owner. */
  date_of_birth?: string;
  /** The nationality of the ultimate beneficiary owner. */
  nationality?: string;
}

export interface UserApiKey {
  /** The id of the user. */
  id?: number;
  /** The timestamp of the user object's creation. */
  created?: string;
  /** The timestamp of the user object's last update. */
  updated?: string;
  /** The user who requested access. */
  requested_by_user?: UserApiKeyAnchoredUser;
  /** The user who granted access. */
  granted_by_user?: UserApiKeyAnchoredUser;
}

export interface UserApiKeyAnchoredUser {
  UserPerson?: UserPerson;
  UserCompany?: UserCompany;
  UserPaymentServiceProvider?: UserPaymentServiceProvider;
}

export interface UserBlacklistMasterCardMerchant {
  /** The name of the merchant. */
  merchant_name?: string;
  /** The blacklisted merchant. */
  merchant_id?: string;
  /** Identifier of the merchant we are blacklisting. */
  merchant_identifier?: string;
  /** The blacklisted merchant. */
  mastercard_merchant_id?: string;
  /** Externally provided merchant identification. */
  external_merchant_id?: string;
  /** The id of the blacklist. */
  id?: number;
  /** The timestamp of the object's creation. */
  created?: string;
  /** The timestamp of the object's last update. */
  updated?: string;
  /** The status of the the blacklist. */
  status?: string;
  /** Hash of the merchant we are blacklisting. */
  merchant_hash?: string;
  merchant_avatar?: Avatar;
}

export interface UserCompany {
  /** The company name. */
  name?: string;
  /** The company's public nick name. */
  public_nick_name?: string;
  /** The public UUID of the company's avatar. */
  avatar_uuid?: string;
  /** The company's main address. */
  address_main?: Address;
  /** The company's postal address. */
  address_postal?: Address;
  /** The person's preferred language. Formatted as a ISO 639-1 language code plus a ISO 3166-1 alpha-2 country code, seperated by an underscore. */
  language?: string;
  /** The person's preferred region. Formatted as a ISO 639-1 language code plus a ISO 3166-1 alpha-2 country code, seperated by an underscore. */
  region?: string;
  /** The country as an ISO 3166-1 alpha-2 country code. */
  country?: string;
  /** The names of the company's ultimate beneficiary owners. Minimum zero, maximum four. */
  ubo?: Ubo[];
  /** The company's chamber of commerce number. */
  chamber_of_commerce_number?: string;
  /** The company's legal form. */
  legal_form?: string;
  /** The user status. Can be: ACTIVE, SIGNUP, RECOVERY. */
  status?: string;
  /** The user sub-status. Can be: NONE, FACE_RESET, APPROVAL, APPROVAL_DIRECTOR, APPROVAL_PARENT, APPROVAL_SUPPORT, COUNTER_IBAN, IDEAL or SUBMIT. */
  sub_status?: string;
  /** The setting for the session timeout of the company in seconds. */
  session_timeout?: number;
  /** The amount the company can pay in the session without asking for credentials. */
  daily_limit_without_confirmation_login?: Amount;
  /** The id of the modified company. */
  id?: number;
  /** The timestamp of the company object's creation. */
  created?: string;
  /** The timestamp of the company object's last update. */
  updated?: string;
  /** The company's public UUID. */
  public_uuid?: string;
  /** The company's display name. */
  display_name?: string;
  /** The aliases of the account. */
  alias?: Pointer[];
  /** The type of business entity. */
  type_of_business_entity?: string;
  /** The sector of industry. */
  sector_of_industry?: string;
  /** The company's other bank account IBAN, through which we verify it. */
  counter_bank_iban?: string;
  /** The company's avatar. */
  avatar?: Avatar;
  /** The version of the terms of service accepted by the user. */
  version_terms_of_service?: string;
  /** The existing bunq aliases for the company's directors. */
  directors?: LabelUser[];
  /** The types of notifications that will result in a push notification or URL callback for this UserCompany. */
  notification_filters?: NotificationFilter[];
  /** The customer profile of the company. */
  customer?: Customer;
  /** The customer limits of the company. */
  customer_limit?: CustomerLimit;
  /** The subscription of the company. */
  billing_contract?: BillingContractSubscription[];
  /** The user deny reason. */
  deny_reason?: string;
  /** The relations for this user. */
  relations?: RelationUser[];
  /** The user's tax residence numbers for different countries. */
  tax_resident?: TaxResident[];
}

export interface UserCompanyNameListing {
  /** All known (trade) names for a user company. */
  name_array?: string[];
}

export interface UserCompanyRead {
  /** The id of the modified company. */
  id?: number;
  /** The timestamp of the company object's creation. */
  created?: string;
  /** The timestamp of the company object's last update. */
  updated?: string;
  /** The company's public UUID. */
  public_uuid?: string;
  /** The company name. */
  name?: string;
  /** The company's display name. */
  display_name?: string;
  /** The company's public nick name. */
  public_nick_name?: string;
  /** The aliases of the account. */
  alias?: Pointer[];
  /** The company's chamber of commerce number. */
  chamber_of_commerce_number?: string;
  /** The company's legal form. */
  legal_form?: string;
  /** The type of business entity. */
  type_of_business_entity?: string;
  /** The sector of industry. */
  sector_of_industry?: string;
  /** The company's other bank account IBAN, through which we verify it. */
  counter_bank_iban?: string;
  /** The company's avatar. */
  avatar?: Avatar;
  /** The company's main address. */
  address_main?: Address;
  /** The company's postal address. */
  address_postal?: Address;
  /** The version of the terms of service accepted by the user. */
  version_terms_of_service?: string;
  /** The existing bunq aliases for the company's directors. */
  directors?: LabelUser[];
  /** The person's preferred language. Formatted as a ISO 639-1 language code plus a ISO 3166-1 alpha-2 country code, seperated by an underscore. */
  language?: string;
  /** The country as an ISO 3166-1 alpha-2 country code. */
  country?: string;
  /** The person's preferred region. Formatted as a ISO 639-1 language code plus a ISO 3166-1 alpha-2 country code, seperated by an underscore. */
  region?: string;
  /** The names of the company's ultimate beneficiary owners. Minimum zero, maximum four. */
  ubo?: Ubo[];
  /** The user status. Can be: ACTIVE, SIGNUP, RECOVERY. */
  status?: string;
  /** The user sub-status. Can be: NONE, FACE_RESET, APPROVAL, APPROVAL_DIRECTOR, APPROVAL_PARENT, APPROVAL_SUPPORT, COUNTER_IBAN, IDEAL or SUBMIT. */
  sub_status?: string;
  /** The setting for the session timeout of the company in seconds. */
  session_timeout?: number;
  /** The amount the company can pay in the session without asking for credentials. */
  daily_limit_without_confirmation_login?: Amount;
  /** The types of notifications that will result in a push notification or URL callback for this UserCompany. */
  notification_filters?: NotificationFilter[];
  /** The customer profile of the company. */
  customer?: Customer;
  /** The customer limits of the company. */
  customer_limit?: CustomerLimit;
  /** The subscription of the company. */
  billing_contract?: BillingContractSubscription[];
  /** The user deny reason. */
  deny_reason?: string;
  /** The relations for this user. */
  relations?: RelationUser[];
  /** The user's tax residence numbers for different countries. */
  tax_resident?: TaxResident[];
}

export interface UserCompanyUpdate {
  /** The id of the modified company. */
  id?: number;
}

export interface UserCredentialPasswordIpListing {
  /** The id of the credential. */
  id?: number;
  /** The timestamp of the credential object's creation. */
  created?: string;
  /** The timestamp of the credential object's last update. */
  updated?: string;
  /** The status of the credential. */
  status?: string;
  /** When the status is PENDING_FIRST_USE: when the credential expires. */
  expiry_time?: string;
  /** When the status is PENDING_FIRST_USE: the value of the token. */
  token_value?: string;
  /** When the status is ACTIVE: the details of the device that may use the credential. */
  permitted_device?: PermittedDevice;
}

export interface UserCredentialPasswordIpRead {
  /** The id of the credential. */
  id?: number;
  /** The timestamp of the credential object's creation. */
  created?: string;
  /** The timestamp of the credential object's last update. */
  updated?: string;
  /** The status of the credential. */
  status?: string;
  /** When the status is PENDING_FIRST_USE: when the credential expires. */
  expiry_time?: string;
  /** When the status is PENDING_FIRST_USE: the value of the token. */
  token_value?: string;
  /** When the status is ACTIVE: the details of the device that may use the credential. */
  permitted_device?: PermittedDevice;
}

export interface UserLegalNameListing {
  /** All legal names that can be used by the user */
  legal_names?: string[];
}

export interface UserListing {
  UserPerson?: UserPerson;
  UserCompany?: UserCompany;
  UserApiKey?: UserApiKey;
  UserPaymentServiceProvider?: UserPaymentServiceProvider;
}

export interface UserPaymentServiceProvider {
  /** The id of the user. */
  id?: number;
  /** The timestamp of the user object's creation. */
  created?: string;
  /** The timestamp of the user object's last update. */
  updated?: string;
  /** The distinguished name from the certificate used to identify this user. */
  certificate_distinguished_name?: string;
  /** The aliases of the user. */
  alias?: Pointer[];
  /** The user's avatar. */
  avatar?: Avatar;
  /** The user status. The user status. Can be: ACTIVE, BLOCKED or DENIED. */
  status?: string;
  /** The user sub-status. Can be: NONE */
  sub_status?: string;
  /** The providers's public UUID. */
  public_uuid?: string;
  /** The display name for the provider. */
  display_name?: string;
  /** The public nick name for the provider. */
  public_nick_name?: string;
  /** The provider's language. Formatted as a ISO 639-1 language code plus a ISO 3166-1 alpha-2 country code, separated by an underscore. */
  language?: string;
  /** The provider's region. Formatted as a ISO 639-1 language code plus a ISO 3166-1 alpha-2 country code, separated by an underscore. */
  region?: string;
  /** The setting for the session timeout of the user in seconds. */
  session_timeout?: number;
}

export interface UserPaymentServiceProviderRead {
  /** The id of the user. */
  id?: number;
  /** The timestamp of the user object's creation. */
  created?: string;
  /** The timestamp of the user object's last update. */
  updated?: string;
  /** The distinguished name from the certificate used to identify this user. */
  certificate_distinguished_name?: string;
  /** The aliases of the user. */
  alias?: Pointer[];
  /** The user's avatar. */
  avatar?: Avatar;
  /** The user status. The user status. Can be: ACTIVE, BLOCKED or DENIED. */
  status?: string;
  /** The user sub-status. Can be: NONE */
  sub_status?: string;
  /** The providers's public UUID. */
  public_uuid?: string;
  /** The display name for the provider. */
  display_name?: string;
  /** The public nick name for the provider. */
  public_nick_name?: string;
  /** The provider's language. Formatted as a ISO 639-1 language code plus a ISO 3166-1 alpha-2 country code, separated by an underscore. */
  language?: string;
  /** The provider's region. Formatted as a ISO 639-1 language code plus a ISO 3166-1 alpha-2 country code, separated by an underscore. */
  region?: string;
  /** The setting for the session timeout of the user in seconds. */
  session_timeout?: number;
}

export interface UserPerson {
  /** The subscription type the user should start on. */
  subscription_type?: string;
  /** The person's first name. */
  first_name?: string;
  /** The person's middle name. */
  middle_name?: string;
  /** The person's last name. */
  last_name?: string;
  /** The public nick name for the person. */
  public_nick_name?: string;
  /** The person's main address. */
  address_main?: Address;
  /** The person's postal address. */
  address_postal?: Address;
  /** The public UUID of the user's avatar. */
  avatar_uuid?: string;
  /** The user's tax residence numbers for different countries. */
  tax_resident?: TaxResident[];
  /** The type of identification document the person registered with. */
  document_type?: string;
  /** The identification document number the person registered with. */
  document_number?: string;
  /** The country which issued the identification document the person registered with. */
  document_country_of_issuance?: string;
  /** The reference to the uploaded picture/scan of the front side of the identification document. */
  document_front_attachment_id?: number;
  /** The reference to the uploaded picture/scan of the back side of the identification document. */
  document_back_attachment_id?: number;
  /** The person's date of birth. Accepts ISO8601 date formats. */
  date_of_birth?: string;
  /** The person's nationality. Formatted as a SO 3166-1 alpha-2 country code. */
  nationality?: string;
  /** The person's preferred language. Formatted as a ISO 639-1 language code plus a ISO 3166-1 alpha-2 country code, seperated by an underscore. */
  language?: string;
  /** The person's preferred region. Formatted as a ISO 639-1 language code plus a ISO 3166-1 alpha-2 country code, seperated by an underscore. */
  region?: string;
  /** The person's gender. Can be MALE, FEMALE or UNKNOWN. */
  gender?: string;
  /** The user status. The user status. Can be: ACTIVE, BLOCKED, SIGNUP, RECOVERY, DENIED or ABORTED. */
  status?: string;
  /** The user sub-status. Can be: NONE, FACE_RESET, APPROVAL, APPROVAL_DIRECTOR, APPROVAL_PARENT, APPROVAL_SUPPORT, COUNTER_IBAN, IDEAL or SUBMIT. */
  sub_status?: string;
  /** The legal guardian of the user. Required for minors. */
  legal_guardian_alias?: Pointer;
  /** The setting for the session timeout of the user in seconds. */
  session_timeout?: number;
  /** The amount the user can pay in the session without asking for credentials. */
  daily_limit_without_confirmation_login?: Amount;
  /** The display name for the person. */
  display_name?: string;
  /** The type of signup track the user is following. */
  signup_track_type?: string;
  /** The id of the modified person object. */
  id?: number;
  /** The timestamp of the person object's creation. */
  created?: string;
  /** The timestamp of the person object's last update. */
  updated?: string;
  /** The person's public UUID. */
  public_uuid?: string;
  /** The person's legal name. */
  legal_name?: string;
  /** The aliases of the user. */
  alias?: Pointer[];
  /** The person's place of birth. */
  place_of_birth?: string;
  /** The person's country of birth. Formatted as a SO 3166-1 alpha-2 country code. */
  country_of_birth?: string;
  /** The user's avatar. */
  avatar?: Avatar;
  /** The version of the terms of service accepted by the user. */
  version_terms_of_service?: string;
  /** The types of notifications that will result in a push notification or URL callback for this UserPerson. */
  notification_filters?: NotificationFilter[];
  /** The relations for this user. */
  relations?: RelationUser[];
}

export interface UserPersonRead {
  /** The id of the modified person object. */
  id?: number;
  /** The timestamp of the person object's creation. */
  created?: string;
  /** The timestamp of the person object's last update. */
  updated?: string;
  /** The person's public UUID. */
  public_uuid?: string;
  /** The person's first name. */
  first_name?: string;
  /** The person's middle name. */
  middle_name?: string;
  /** The person's last name. */
  last_name?: string;
  /** The person's legal name. */
  legal_name?: string;
  /** The display name for the person. */
  display_name?: string;
  /** The public nick name for the person. */
  public_nick_name?: string;
  /** The aliases of the user. */
  alias?: Pointer[];
  /** The user's tax residence numbers for different countries. */
  tax_resident?: TaxResident[];
  /** The person's main address. */
  address_main?: Address;
  /** The person's postal address. */
  address_postal?: Address;
  /** The person's date of birth. Accepts ISO8601 date formats. */
  date_of_birth?: string;
  /** The person's place of birth. */
  place_of_birth?: string;
  /** The person's country of birth. Formatted as a SO 3166-1 alpha-2 country code. */
  country_of_birth?: string;
  /** The person's nationality. Formatted as a SO 3166-1 alpha-2 country code. */
  nationality?: string;
  /** The person's preferred language. Formatted as a ISO 639-1 language code plus a ISO 3166-1 alpha-2 country code, seperated by an underscore. */
  language?: string;
  /** The person's preferred region. Formatted as a ISO 639-1 language code plus a ISO 3166-1 alpha-2 country code, seperated by an underscore. */
  region?: string;
  /** The person's gender. Can be MALE, FEMALE or UNKNOWN. */
  gender?: string;
  /** The user's avatar. */
  avatar?: Avatar;
  /** The version of the terms of service accepted by the user. */
  version_terms_of_service?: string;
  /** The user status. The user status. Can be: ACTIVE, BLOCKED, SIGNUP, RECOVERY, DENIED or ABORTED. */
  status?: string;
  /** The user sub-status. Can be: NONE, FACE_RESET, APPROVAL, APPROVAL_DIRECTOR, APPROVAL_PARENT, APPROVAL_SUPPORT, COUNTER_IBAN, IDEAL or SUBMIT. */
  sub_status?: string;
  /** The setting for the session timeout of the user in seconds. */
  session_timeout?: number;
  /** The amount the user can pay in the session without asking for credentials. */
  daily_limit_without_confirmation_login?: Amount;
  /** The types of notifications that will result in a push notification or URL callback for this UserPerson. */
  notification_filters?: NotificationFilter[];
  /** The relations for this user. */
  relations?: RelationUser[];
}

export interface UserPersonUpdate {
  /** The id of the modified person object. */
  id?: number;
}

export interface UserRead {
  UserPerson?: UserPerson;
  UserCompany?: UserCompany;
  UserApiKey?: UserApiKey;
  UserPaymentServiceProvider?: UserPaymentServiceProvider;
}

export type Whitelist = object;

export interface WhitelistResult {
  /** The ID of the whitelist entry. */
  id?: number;
  /** The account from which payments will be deducted when a transaction is matched with this whitelist. */
  monetary_account_paying_id?: number;
  /** The status of the WhitelistResult. */
  status?: string;
  /** The subStatus of the WhitelistResult. */
  sub_status?: string;
  /** The message when the whitelist result has failed due to user error. */
  error_message?: Error[];
  /** The corresponding whitelist. */
  whitelist?: Whitelist;
  /** The details of the external object the event was created for. */
  object?: WhitelistResultViewAnchoredObject;
  /** The reference to the object used for split the bill. Can be RequestInquiry or RequestInquiryBatch */
  request_reference_split_the_bill?: RequestInquiryReference[];
}

export interface WhitelistResultViewAnchoredObject {
  /** The ID of the whitelist entry. */
  id?: number;
  /** The RequestResponse object */
  requestResponse?: RequestResponse;
  /** The DraftPayment object */
  draftPayment?: DraftPayment;
}

export interface WhitelistSddListing {
  /** The ID of the whitelist entry. */
  id?: number;
  /** The account to which payments will come in before possibly being 'redirected' by the whitelist. */
  monetary_account_incoming_id?: number;
  /** The account from which payments will be deducted when a transaction is matched with this whitelist. */
  monetary_account_paying_id?: number;
  /** The type of the SDD whitelist, can be CORE or B2B. */
  type?: string;
  /** The status of the whitelist. */
  status?: string;
  /** The credit scheme ID provided by the counterparty. */
  credit_scheme_identifier?: string;
  /** The mandate ID provided by the counterparty. */
  mandate_identifier?: string;
  /** The account to which payments will be paid. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The monthly maximum amount that can be deducted from the target account. */
  maximum_amount_per_month?: Amount;
  /** The user who created the whitelist entry. */
  user_alias_created?: LabelUser;
}

export interface WhitelistSddMonetaryAccountPayingListing {
  /** The ID of the whitelist entry. */
  id?: number;
  /** The account to which payments will come in before possibly being 'redirected' by the whitelist. */
  monetary_account_incoming_id?: number;
  /** The account from which payments will be deducted when a transaction is matched with this whitelist. */
  monetary_account_paying_id?: number;
  /** The type of the SDD whitelist, can be CORE or B2B. */
  type?: string;
  /** The status of the whitelist. */
  status?: string;
  /** The credit scheme ID provided by the counterparty. */
  credit_scheme_identifier?: string;
  /** The mandate ID provided by the counterparty. */
  mandate_identifier?: string;
  /** The account to which payments will be paid. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The monthly maximum amount that can be deducted from the target account. */
  maximum_amount_per_month?: Amount;
  /** The user who created the whitelist entry. */
  user_alias_created?: LabelUser;
}

export interface WhitelistSddMonetaryAccountPayingRead {
  /** The ID of the whitelist entry. */
  id?: number;
  /** The account to which payments will come in before possibly being 'redirected' by the whitelist. */
  monetary_account_incoming_id?: number;
  /** The account from which payments will be deducted when a transaction is matched with this whitelist. */
  monetary_account_paying_id?: number;
  /** The type of the SDD whitelist, can be CORE or B2B. */
  type?: string;
  /** The status of the whitelist. */
  status?: string;
  /** The credit scheme ID provided by the counterparty. */
  credit_scheme_identifier?: string;
  /** The mandate ID provided by the counterparty. */
  mandate_identifier?: string;
  /** The account to which payments will be paid. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The monthly maximum amount that can be deducted from the target account. */
  maximum_amount_per_month?: Amount;
  /** The user who created the whitelist entry. */
  user_alias_created?: LabelUser;
}

export interface WhitelistSddOneOff {
  /** ID of the monetary account of which you want to pay from. */
  monetary_account_paying_id: number;
  /** ID of the request for which you want to whitelist the originating SDD. */
  request_id: number;
  /** The maximum amount of money that is allowed to be deducted per month based on the whitelist. */
  maximum_amount_per_month?: Amount;
  /** The maximum amount of money that is allowed to be deducted per payment based on the whitelist. */
  maximum_amount_per_payment?: Amount;
}

export interface WhitelistSddOneOffCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type WhitelistSddOneOffDelete = object;

export interface WhitelistSddOneOffListing {
  /** The ID of the whitelist entry. */
  id?: number;
  /** The account to which payments will come in before possibly being 'redirected' by the whitelist. */
  monetary_account_incoming_id?: number;
  /** The account from which payments will be deducted when a transaction is matched with this whitelist. */
  monetary_account_paying_id?: number;
  /** The type of the SDD whitelist, can be CORE or B2B. */
  type?: string;
  /** The status of the whitelist. */
  status?: string;
  /** The credit scheme ID provided by the counterparty. */
  credit_scheme_identifier?: string;
  /** The account to which payments will be paid. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The monthly maximum amount that can be deducted from the target account. */
  maximum_amount_per_month?: Amount;
  /** The maximum amount per payment that can be deducted from the target account. */
  maximum_amount_per_payment?: Amount;
  /** The user who created the whitelist entry. */
  user_alias_created?: LabelUser;
}

export interface WhitelistSddOneOffRead {
  /** The ID of the whitelist entry. */
  id?: number;
  /** The account to which payments will come in before possibly being 'redirected' by the whitelist. */
  monetary_account_incoming_id?: number;
  /** The account from which payments will be deducted when a transaction is matched with this whitelist. */
  monetary_account_paying_id?: number;
  /** The type of the SDD whitelist, can be CORE or B2B. */
  type?: string;
  /** The status of the whitelist. */
  status?: string;
  /** The credit scheme ID provided by the counterparty. */
  credit_scheme_identifier?: string;
  /** The account to which payments will be paid. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The monthly maximum amount that can be deducted from the target account. */
  maximum_amount_per_month?: Amount;
  /** The maximum amount per payment that can be deducted from the target account. */
  maximum_amount_per_payment?: Amount;
  /** The user who created the whitelist entry. */
  user_alias_created?: LabelUser;
}

export interface WhitelistSddOneOffUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export interface WhitelistSddRead {
  /** The ID of the whitelist entry. */
  id?: number;
  /** The account to which payments will come in before possibly being 'redirected' by the whitelist. */
  monetary_account_incoming_id?: number;
  /** The account from which payments will be deducted when a transaction is matched with this whitelist. */
  monetary_account_paying_id?: number;
  /** The type of the SDD whitelist, can be CORE or B2B. */
  type?: string;
  /** The status of the whitelist. */
  status?: string;
  /** The credit scheme ID provided by the counterparty. */
  credit_scheme_identifier?: string;
  /** The mandate ID provided by the counterparty. */
  mandate_identifier?: string;
  /** The account to which payments will be paid. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The monthly maximum amount that can be deducted from the target account. */
  maximum_amount_per_month?: Amount;
  /** The user who created the whitelist entry. */
  user_alias_created?: LabelUser;
}

export interface WhitelistSddRecurring {
  /** ID of the monetary account of which you want to pay from. */
  monetary_account_paying_id: number;
  /** ID of the request for which you want to whitelist the originating SDD. */
  request_id: number;
  /** The maximum amount of money that is allowed to be deducted per month based on the whitelist. */
  maximum_amount_per_month?: Amount;
  /** The maximum amount of money that is allowed to be deducted per payment based on the whitelist. */
  maximum_amount_per_payment?: Amount;
}

export interface WhitelistSddRecurringCreate {
  /** The id of the created item */
  Id?: BunqId;
}

export type WhitelistSddRecurringDelete = object;

export interface WhitelistSddRecurringListing {
  /** The ID of the whitelist entry. */
  id?: number;
  /** The account to which payments will come in before possibly being 'redirected' by the whitelist. */
  monetary_account_incoming_id?: number;
  /** The account from which payments will be deducted when a transaction is matched with this whitelist. */
  monetary_account_paying_id?: number;
  /** The type of the SDD whitelist, can be CORE or B2B. */
  type?: string;
  /** The status of the whitelist. */
  status?: string;
  /** The credit scheme ID provided by the counterparty. */
  credit_scheme_identifier?: string;
  /** The mandate ID provided by the counterparty. */
  mandate_identifier?: string;
  /** The account to which payments will be paid. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The monthly maximum amount that can be deducted from the target account. */
  maximum_amount_per_month?: Amount;
  /** The maximum amount per payment that can be deducted from the target account. */
  maximum_amount_per_payment?: Amount;
  /** The user who created the whitelist entry. */
  user_alias_created?: LabelUser;
}

export interface WhitelistSddRecurringRead {
  /** The ID of the whitelist entry. */
  id?: number;
  /** The account to which payments will come in before possibly being 'redirected' by the whitelist. */
  monetary_account_incoming_id?: number;
  /** The account from which payments will be deducted when a transaction is matched with this whitelist. */
  monetary_account_paying_id?: number;
  /** The type of the SDD whitelist, can be CORE or B2B. */
  type?: string;
  /** The status of the whitelist. */
  status?: string;
  /** The credit scheme ID provided by the counterparty. */
  credit_scheme_identifier?: string;
  /** The mandate ID provided by the counterparty. */
  mandate_identifier?: string;
  /** The account to which payments will be paid. */
  counterparty_alias?: LabelMonetaryAccount;
  /** The monthly maximum amount that can be deducted from the target account. */
  maximum_amount_per_month?: Amount;
  /** The maximum amount per payment that can be deducted from the target account. */
  maximum_amount_per_payment?: Amount;
  /** The user who created the whitelist entry. */
  user_alias_created?: LabelUser;
}

export interface WhitelistSddRecurringUpdate {
  /** The id of the created item */
  Id?: BunqId;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://public-api.sandbox.bunq.com/{basePath}";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response.clone()[responseFormat]()
          .then((data) => {
            if (r.ok) {
              r.data = data;
            } else {
              r.error = data;
            }
            return r;
          })
          .catch((e) => {
            r.error = e;
            return r;
          });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title bunq API
 * @version 1.0
 * @license Apache 2.0 (https://www.apache.org/licenses/LICENSE-2.0.html)
 * @termsOfService http://bunq.com/terms-api/
 * @baseUrl https://public-api.sandbox.bunq.com/{basePath}
 * @contact bunq Developer Support (http://bunq.com/developer)
 *
 * ***UPDATE:*** *We have released a [beta version of the new bunq API documentation.](https://beta.doc.bunq.com)*
 *
 * ***NOTICE:***  *We have updated the sandbox base url to `https://public-api.sandbox.bunq.com/v1/`. Please update your applications accordingly. Check here: <https://github.com/bunq/sdk_php/issues/149> for more info.*
 *
 * ***PSD2 NOTICE:*** *The second Payment Services Directive (PSD2) may affect your current or planned usage of our public API, as some of the API services are now subject to a permit. Please be aware that using our public API without the required PSD2 permit is at your own risk and take notice of our updated API Terms and Conditions on <https://www.bunq.com> for more information.*
 *
 * # <span id="topic-introduction">Introduction</span>
 *
 * Welcome to bunq!
 *
 * - The bunq API is organised around REST. JSON will be returned in almost all responses from the API, including errors but excluding binary (image) files.
 * - Please configure your implementation to send its API requests to `https://public-api.sandbox.bunq.com/v1/`
 * - There is a version of the [Android app](https://appstore.bunq.com/api/android/builds/bunq-android-sandbox-master.apk) that connects to the bunq Sandbox environment. To create accounts for the Sandbox app, please follow the steps in the [Android Emulator](#android-emulator) section.
 *
 * ## <span id="topic-introduction-get-started">Getting started</span>
 *
 * Before you start sending API requests, you need to get an API key and activate it. API activation happens when you install the API key and link your IP address and device to it *(create an API context)*. The steps below will guide you through what you need to do to start sending custom API requests.
 *
 * Here is an overview of what you can use to get started with the bunq API:
 * 1. **Create an API key.** You can do it either in our [developer portal](https://developer.bunq.com) or in the bunq app *(Profile → Security & Settings → Developers → API keys)*. If you want to test our sandbox first, our [bunq Developer ](https://developer.bunq.com)is the best place to start.
 * 2. **Register a device.** A device can be a phone (private), computer or a server (public). You can register a new device by using the `POST /installation` and `POST /device-server` calls. This will activate your API key. You only need to do this once.
 * 3. **Open a session.** Sessions are temporary and expire after the auto-logout time set for the user account. It can be changed by the account owner in the bunq app.
 * 4. **Make your first call!**
 *
 * ![bunq_API_context](https://www.bunq.com/assets/media/developer/API-context.jpg)
 *
 * ## <span id="topic-introduction-versioning">Versioning</span>
 *
 * Developments in the financial sector, changing regulatory regimes and new feature requests require us to be flexible. This means we can iterate quickly to improve the API and related tooling. Therefore, we have chosen not to attach any version numbers to the changes just yet.
 *
 * We will inform you in a timely manner of any important changes we make before they are deployed on together.bunq.com. You can also [subscribe to our API newsletter](https://bunq.us8.list-manage.com/subscribe?u=c00d0d6daea4e1cf7c863d52e&id=b08680cdc7) to make sure you don't miss any important updates.
 *
 * # <span id="topic-oauth">OAuth</span>
 *
 * ## <span id="topic-oauth-what-is-oauth">What is OAuth?</span>
 *
 * [OAuth 2.0](https://www.oauth.com/oauth2-servers/getting-ready/) is a protocol that will let your app connect to bunq users in a safe and easy way. Please be aware that if you will gain access to the account information of other bunq users or initiate a payment for them, [you may require a PSD2 permit](https://beta.doc.bunq.com/other/faq#can-we-use-the-bunq-api-to-offer-services-to-third-parties).
 *
 * ## <span id="topic-oauth-get-started-with-oauth-for-bunq">Get started with OAuth for bunq</span>
 *
 * To initiate authorization into the bunq user accounts, you need to create an OAuth Client and register at least 1 redirect URL for it.
 *
 * You can have 1 OAuth Client at a time. Reuse your OAuth credentials for every authorization request.
 *
 * The list of steps below will help you to get started:
 *
 * 1. Register an OAuth Client by creating an app in [bunq Developer](https://developer.bunq.com/portal)_._
 * 2. Add one or more Redirect URLs.
 * 3. Get your `client_id` and `secret` from your app information tab in [bunq Developer](https://developer.bunq.com/portal).
 * 4. Redirect your users to the [OAuth authorization request URL](#oauth-authorization-request).
 * 5. If the user accepts the authorization request, they will be redirected to the previously specified `redirect_uri` with an authorization `code` parameter.
 * 6. Use the [token endpoint](#oauth-token-exchange) to exchange the authorization `code` for an `access_token`.
 * 7. Use the `access_token` as a normal API Key. Open a session or use [our SDKs](https://github.com/bunq) to get started.
 *
 * You can set up an OAuth Client and add redirect URLs to it using the dedicated endpoints too. Follow the flow below to do it programmatically.
 *
 * ℹ️ As a PSD2 user, you cannot log in to the bunq app. You need to follow the flow below to register an OAuth Client for your application.
 *
 * ![bunq_OAuth_credentials](https://www.bunq.com/assets/media/developer/create-oauth-credentials.jpg)
 *
 * ## <span id="topic-oauth-what-can-my-apps-do-with-oauth">What can my apps do with OAuth?</span>
 *
 * We decided to launch OAuth with a default permission that allows you to perform the following actions:
 * - read and create Monetary Accounts;
 * - read Payments & Transactions;
 * - create Payments between Monetary Accounts of the same user;
 * - create Draft-Payments (the user will need to approve the payment using the bunq app);
 * - assign a Monetary account to a Card;
 * - read, create and manage Cards;
 * - read and create Request-Inquiries
 * - read Request-Responses.
 *
 * As a PSD2-licensed developer, you are limited to the permission scopes of your role.
 *
 * ## <span id="topic-oauth-authorization-request">Authorization request</span>
 *
 * Your web or mobile app should redirect users to the following URL:
 *
 * `https://oauth.bunq.com/auth`
 *
 * The following parameters should be passed:
 *
 * - `response_type` - bunq supports the authorization code grant, provide `code` as parameter (required)
 * - `client_id` - your Client ID, get it from the bunq app (required)
 * - `redirect_uri` - the URL you wish the user to be redirected after the authorization, make sure you register the Redirect URL in the bunq app (required)
 * - `state` - a unique string to be passed back upon completion (optional)
 *
 * Use `https://oauth.sandbox.bunq.com/auth` in the sandbox environment.
 *
 * **Authorization request example:**
 *
 * ```
 * https://oauth.bunq.com/auth?response_type=code
 * &client_id=1cc540b6e7a4fa3a862620d0751771500ed453b0bef89cd60e36b7db6260f813
 * &redirect_uri=https://www.bunq.com
 * &state=594f5548-6dfb-4b02-8620-08e03a9469e6
 * ```
 *
 * **Authorization request response:**
 *
 * ```
 * https://www.bunq.com/?code=7d272be434a75933f40c13d56aef6c31496005b653074f7d6ac57029d9995d30
 * &state=594f5548-6dfb-4b02-8620-08e03a9469e6
 *
 * ```
 *
 * ![bunq_OAuth_authorization_token_exchange.jpg](https://www.bunq.com/assets/media/developer/Authorization-token-exchange.jpg)
 *
 * ## <span id="topic-oauth-token-exchange">Token exchange</span>
 *
 * If the authorization request is accepted by the user, you get the authorization `code`_._ Exchange it for an `access_token`.
 *
 * Make a `POST` call to `https://api.oauth.bunq.com/v1/token` . Pass the following parameters as `GET` variables:
 *
 * - `grant_type` - the grant type used, `authorization_code` for now (required)
 * - `code` -  the authorization code received from bunq (required)
 * - `redirect_uri` - the same Redirect URL used in the authorisation request (required)
 * - `client_id` - your Client ID (required)
 * - `client_secret` - your Client Secret (required)
 *
 * Use `https://api-oauth.sandbox.bunq.com/v1/token` in the sandbox environment.
 *
 * **Token request example:**
 *
 * ```
 * https://api.oauth.bunq.com/v1/token?grant_type=authorization_code
 * &code=7d272be434a75933f40c13d56aef6c31496005b653074f7d6ac57029d9995d30
 * &redirect_uri=https://www.bunq.com/
 * &client_id=1cc540b6e7a4fa3a862620d0751771500ed453b0bef89cd60e36b7db6260f813
 * &client_secret=184f969765f6f74f53bf563ae3e9f891aec9179157601d25221d57f2f1151fd5
 * ```
 *
 * Note: The request should only contain URL parameters. No body is expected.
 *
 * **Example successful response:**
 *
 * ```json
 * {
 *     "access_token": "8baec0ac1aafca3345d5b811042feecfe0272514c5d09a69b5fbc84cb1c06029",
 *     "token_type": "bearer",
 *     "state": "594f5548-6dfb-4b02-8620-08e03a9469e6"
 * }
 * ```
 *
 * **Example error response:**
 *
 * ```json
 * {
 *     "error": "invalid_grant",
 *     "error_description": "The authorization code is invalid or expired."
 * }
 * ```
 *
 * ## <span id="topic-oauth-whats-next">What's next?</span>
 *
 * To start sending calls to the account of the user who has accepted your authorization request, create an API context for the `access_token` you have received as the result of the token exchange. The `access_token` can be used as a normal API key. Please continue with [Authentication](#authentication).
 *
 * **NOTE:** When connecting to a bunq user's account using OAuth, you create a new user \(`userApiKey`\) that has its own `id` and `access_token` . When sending a request on behalf of a user connected to your app via OAuth,  use the `id` of `userApiKey`  as `userId` and the item `id`s of the bunq user \(`grantedByUser`\).
 *
 * **Example of a successful request URL:**
 *
 * ```text
 * https://api.bunq.com/user/{userApiKey's userId}/monetary-account/{grantedByUser's monetary-accountId}/payment
 * ```
 *
 * When calling `GET /user/{userID}`, you might expect to get `UserPerson` or `UserCompany`. Instead, you will get the `UserApiKey` object, which contains references to both the user that requested access *(you)* and the user that granted access *(the bunq user account that you connected to)*.
 *
 * ![bunq_OAuth UserApiKey](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LbhJLuxCAKl5yUuS74T%2F-LuhS4YOAX9bwW1eGYF8%2F-LuhnlwEcVXtLVk6846Z%2FUserApiKey%20creation%20(3).jpg?alt=media&token=d1f212a2-3105-4f0e-a980-34b04a12998a)
 *
 * ## <span id="topic-oauth-using-the-connect-button">Using the Connect button</span>
 *
 * All good? Ready to connect to your bunq users? Refer to our style guide and use the following assets when implementing the **Connect to bunq** button.
 *
 * - [Style guide](https://bunq.com/info/oauth-styleguide)
 * - [Connect button assets](https://bunq.com/info/oauth-connect-buttons)
 *
 * Visit us on together.bunq.com, share your creations, ask question and build your very own bunq app!
 *
 * # <span id="topic-authentication">Authentication</span>
 *
 * - All requests must use HTTPS. HTTP calls will fail.
 * - You should use SSL Certificate Pinning and Hostname Verification to ensure your connection with bunq is secure.
 * - The auto logout time that you set in the app applies to all your sessions including the API ones. If a request is made 30 minutes before a session expires, the session will automatically be extended.
 * - We use extra signing on top of HTTPS encryption that you must implement yourself if you are not using the SDKs.
 *
 * ℹ️ *We use asymmetric cryptography for signing requests and encryption.*
 * - The client (you) and the server (bunq) must have a pair of keys: a private key and a public key. You need to pre-generate your own pair of 2048-bit RSA keys in the PEM format aligned with the PKCS #8 standard.
 * - The parties (you and bunq) exchange their public keys in the first step of the API context creation flow. All the following requests must be signed by both your application and the server. Pass your signature in the `X-Bunq-Client-Signature` header, and the server will return its signature in the `X-Bunq-Server-Signature` header.
 *
 * ## <span id="topic-authentication-device-registration">Device registration</span>
 *
 * Before you can start calling the bunq API, you must activate your API key, which covers the following steps:
 * * register your API key, device, and IP address\(es\) _\(only once to activate your API key\);_
 * * create a session via `POST /session-server`.
 *
 * We call this sequence of steps "creating an API context."
 *
 * If you are using OAuth to access a user account, you need to create an API context for the `access_token` you receive upon [authorization token exchange](https://doc.bunq.com/#/oauth) too.
 *
 * ### <span id="topic-authentication-device-registration-using-our-sdks">Using our SDKs</span>
 *
 * 1. Go to our [GitHub](https://github.com/bunq) page.
 * 2. Choose the SDK in your language of choice.
 * 3. Find and use the part dedicated to creating an API context.
 *
 * [Run Tinker](https://developer.bunq.com/tinker-command-line-banking) to see a sample project using bunq SDKs in action.
 *
 *
 * ### <span id="topic-authentication-device-registration-using-our-api">Using our API directly</span>
 *
 * 1. Create an _Installation_ by calling `POST v1/installation` and passing your pre-generated public key. You will receive an installation _Token._ Use it when making the two following API calls.
 * 2. Create a _DeviceServer_ via `POST v1/device-server`. Provide a description and a secret \(API key in this case\).
 * 3. Create a _SessionServer_ by executing `POST v1/session-server`. You will receive an authentication _Token._ Use it in the API requests in this active session.​
 *
 * [Import our Postman collection](https://github.com/bunq/postman) to see our pre-setup API context creation calls. It will automatically generate and pre-fill everything in the API calls that create context so you can inspect the process.
 *
 * ### <span id="topic-authentication-device-registration-ip-addresses">IP addresses</span>
 *
 * When using a standard API Key the DeviceServer and Installation that are created in this process are bound to the IP address they are created from. Afterwards it is only possible to add IP addresses via the Permitted IP endpoint.
 *
 * Using a Wildcard API Key gives you the freedom to make API calls from any IP address after the POST device-server. You can switch to a Wildcard API Key by tapping on “Allow All IP Addresses” in your API Key menu inside the bunq app. You can also programatically switch to a Wildcard API Key by passing your current ip and a `*` (asterisk) in the `permitted_ips` field of the device-server POST call. E.g: `["1.2.3.4", "*"]`.
 *
 * # <span id="topic-psd2">Connect as a PSD2 service provider</span>
 *
 * As a service provider, either an Account Information Service Provider (AISP), Payment Initiation Service Provider (PISP), or Card Based Payment Instrument Issuer (CBPII), you have obtained or are planning to obtain a license from your local supervisor. You will need your unique eIDAS certificate number to start using the PSD2-compliant bunq API on production.
 *
 * We accept pseudo certificates in the sandbox environment so you could test the flow. You can generate a test certificate using the command below.
 *
 * ⚠️ Make sure to include AISP and/or PISP in the name to generate a certificate with the roles.
 *
 * ```
 * openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes -subj '/CN=My App PISP AISP/C=NL'
 * ```
 *
 * ## <span id="topic-psd2-register-as-a-service-provider">Register as a service provider</span>
 *
 * Before you can read the information on bunq users or initiate payments, you need to register a PSD2 account and receive credentials that will enable you to access the bunq user accounts.
 *
 * 1. Execute `POST v1/installation` and get your installation *Token* with a unique random key pair.
 * 1. Use the installation *Token* and your unique PSD2 certificate to call `POST v1/payment-service-provider-credential`. This will register your software.
 * 1. Receive your API key in return. It will identify you as a PSD2 bunq API user. You will use it to start an OAuth flow. The session will last 90 days. After it closes, start a new session using the same API key.
 * 1. Register a device by using `POST v1/device-server` using the API key for the secret and passing the installation *Token* in the `X-Bunq-Client-Authentication` header.
 * 1. Create your first session by executing `POST v1/session-server`. Provide the installation *Token* in the `X-Bunq-Client-Authentication` header. You will receive a session *Token*. Use it in any following request in the `X-Bunq-Client-Authentication` header.
 *
 * **NOTE.** The first session will last 1 hour. Start a new session within 60 minutes.
 *
 * ![bunq_PSD2_API_context](https://www.bunq.com/assets/media/developer/Creating-API-context-as-a-PSD2-user-REVISED.jpg)
 *
 * ## <span id="topic-psd2-register-your-applicaton">Register your OAuth application</span>
 *
 * Before you can start authenticating on behalf of a bunq user, you need to get *Client ID* and *Client Secret*, which will identify you in authorization requests to the user accounts.
 *
 * 1. Call `POST /v1/user/{userID}/oauth-client` to create an OAuth Client.
 * 2. Add a redirect URL to the OAuth Client via `POST /user/{userID}/oauth-client/{oauth-clientID}/callback-url`.
 * 3. Call `GET /v1/user/{userID}/oauth-client/{oauth-clientID}`. We will return your _Client ID_ and _Client Secret_.
 * 4. You are ready to [initiate authorization requests](#oauth-authorization-request).
 *
 * The flow below will guide you through the full OAuth connection process. Note that you only need to create OAuth credentials once.
 *
 * ![bunq_full_OAuth_flow](https://www.bunq.com/assets/media/developer/AuthorizationOAuth-Flow.jpg)
 *
 * ## <span id="topic-psd2-access-user-accounts-as-an-aisp">Access user accounts as an AISP</span>
 *
 * As an AISP, you are allowed to authenticate in a user’s account and access \(read\) the following account information:
 *
 * 1. legal name
 * 2. IBAN
 * 3. nationality
 * 4. card validity data
 * 5. transaction history
 * 6. account balance
 *
 * To read the user's information, you need to establish a connection with their bunq account. You can do it using an [authorization request](#oauth-authorization-request). Once a bunq user has confirmed the authorization request and you have done the [token exchange](#oauth-token-exchange), you can activate the Access Token \(use it as an API key\).
 *
 * Token activation happens when you create an API context \(install it and link your IP adrress and device to it\). See the [OAuth](https://beta.doc.bunq.com/basics/oauth) page for the full flow illustration.
 *
 * An active Access Token allows you to communicate with the bunq user’s account. You can use it to start a session to interact with the monetary accounts the user allows you to access.
 *
 * ![bunq_AISP](https://www.bunq.com/assets/media/developer/AISP.jpg)
 *
 * ## <span id="topic-psd2-initiate-payments-as-a-pisp">Make payments as a PISP</span>
 *
 * As a PISP, you are allowed to authenticate in a user’s account with the following permissions:
 * read account information \(via`GET /user`\):
 *    * legal name;
 *    * IBAN;
 * 2. initiate payments \(create draft payments via either  `POST /user/{userID}/monetary-account/{monetary-accountID}/draft-payment` or `POST /user/{userID}/payment-service-provider-draft-payment`\) and read their statuses;
 * 3. confirm that the account balance is sufficient for covering the payment \(via`POST /user/{userID}/confirmation-of-funds`\).
 *
 * The bunq API provides endpoints for different scenarios of the implementation of the payment initiation functionality. In particular, as a PISP user, you can build applications that initiate and authorize one-off or multiple incoming payments. Depending on the use case you are intending to deploy, you might need to initiate the OAuth authorization either before or after the payment initiation.
 *
 * ### <span id="topic-psd2-initiate-multiple-payments-as-a-pisp">Authorization of multiple (scheduled) payments</span>
 *
 * It is possible to initiate payments from a bunq user's account having previously established an OAuth connection between your application and the bunq user's account. The bunq user will receive push notifications for each initiated payment.
 *
 * Once a bunq user has [confirmed they want to make payments via your application](https://beta.doc.bunq.com/psd2/connect-as-a-psd2-service-provider#register-your-application), you can initiate the payment confirmation flow.
 *
 * 1. Create a draft payment via `POST /user/{userID}/monetary-account/{monetary-accountID}/draft-payment`passing the following parameters:
 *    * `monetary-accountId and userId` (`userApiKey`'s `id`; see [OAuth](https://beta.doc.bunq.com/basics/oauth#user-id-vs-item-ids) for more information) in the endpoint URL;
 *    * the customer’s email address, phone number, or IBAN in the `counterparty_alias` field of the request body.
 * 2. If the user confirms their intent to make the payment, bunq carries out the transaction.
 * 3. Check the status of the payment via `GET /user/{userID}/monetary-account/{monetary-accountID}/draft-payment` using the draft payment `id` parameter returned in the previous step.
 *
 * ![bunq_PISP](https://www.bunq.com/assets/media/developer/Payment-initiation-1.1-universal.jpg)
 *
 * ### <span id="topic-psd2-initiate-single-payments-as-a-pisp">Single payment authorization</span>
 *
 * It is possible to initiate payments having only the IBAN of the payer using `POST /user/{userID}/payment-service-provider-draft-payment`.  In this case, the bunq user will accept the payment along with the authorization request. No additional push notifications are sent to the user.
 *
 * 1. Collect the bunq user's IBAN (and name) in the UI of your application.
 * 2. Create a draft payment via `POST /user/{userID}/payment-service-provider-draft-payment`.
 * 3. Initiate an [authorization request.](https://beta.doc.bunq.com/basics/oauth#authorization-request) Upon the QR-code scan, the bunq user will see and be able to either accept or reject the payment authorization request.
 * 4. Check the status of the payment.
 *
 * ![bunq_PISP_single_payment](https://www.bunq.com/assets/media/developer/Payment-initiation-1.0.jpg)
 *
 * ## <span id="topic-psd2-confirm-available-funds-as-a-cbpii">Confirm available funds as a CBPII</span>
 *
 * As a CBPII, you are allowed to authenticate in a user’s account to validate the availability of funds for the payment in question.
 *
 * 1. Collect an alias for the bunq user's account (their name and IBAN, email address, or phone number).
 * 2. Check the availability of funds via `POST /user/{userID}/confirmation-of-funds` passing the following information:
 *    * your `userId`;
 *    * the amount of money needed for the payment;
 *    * the name of the bunq user and the IBAN of the account (email address or phone number pointing at the user are also possible).
 *
 * # <span id="topic-signing">Signing</span>
 * ⚠️ **NOTE:**  We deprecated the signing of the entire API request (the URL, headers and body). You only need to sign the request body. Requests with full request signatures are no longer validated.
 *
 * We are legally required to protect our users and their data from malicious attacks and intrusions. That is why we beyond having a secure https connection, we use [asymmetric cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography) for signing requests that create a session or payment. The use of signatures ensures the data is coming from the trusted party and was not modified after sending and before receiving.
 *
 * Request body signing is only mandatory for the following operations:
 * - open a session;
 * - create a payment;
 * - create a scheduled payment;
 * - any other operation that executes a payment such as the following:
 * 	- accept a draft payment;
 * 	- accept a scheduled payment;
 * 	- accept a draft scheduled payment;
 * 	- accept a payment request.
 *
 * You will know that the API call must be encrypted if you get the 466 error code.
 *
 * The signing mechanism is implemented in our [SDKs](https://github.com/bunq) so if you are using them you don't have to worry about the details described below.
 *
 * The signatures are created using the SHA256 cryptographic hash function and included (encoded in base 64) in the `X-Bunq-Client-Signature` request header and `X-Bunq-Server-Signature` response header. The data to sign is the following:
 *
 * - For requests: the body only.
 * - For responses: the body only.
 *
 * For signing requests, the client must use the private key corresponding to the public key that was sent to the server in the installation API call. That public key is what the server will use to verify the signature when it receives the request. In that same call the server will respond with a server side public key, which the client must use to verify the server's signatures. The generated RSA key pair must have key lengths of 2048 bits and adhere to the PKCS #8 standard.
 *
 * ## <span id="topic-signing-request-signing-example">Request signing example</span>
 *
 * Consider the following request, a `POST` to `/v1/user/126/monetary-account/222/payment` (the JSON is formatted with newlines and indentations to make it more readable):
 *
 * <table>
 *     <thead>
 *         <tr>
 *             <th>Header</th>
 *             <th>Value</th>
 *         </tr>
 *     </thead>
 *     <tbody>
 *         <tr>
 *             <td>Cache-Control:</td>
 *             <td>no-cache</td>
 *         </tr>
 *         <tr>
 *             <td>User-Agent:</td>
 *             <td>bunq-TestServer/1.00 sandbox/0.17b3</td>
 *         </tr>
 *         <tr>
 *             <td>X-Bunq-Client-Authentication:</td>
 *
 * <td>f15f1bbe1feba25efb00802fa127042b54101c8ec0a524c36464f5bb143d3b8b</td>
 *         </tr>
 *     </tbody>
 * </table>
 *
 * ```json
 * {
 * 	"amount": {
 * 		"value": "12.50",
 * 		"currency": "EUR"
 * 	},
 * 	"counterparty_alias": {
 * 		"type": "EMAIL",
 * 		"value": "bravo@bunq.com"
 * 	},
 * 	"description": "Payment for drinks."
 * }
 * ```
 *
 * Let's sign that request. First create a variable `$dataToSign` containing the body of the request:
 *
 * ```json
 * {
 *     "amount": {
 *         "value": "12.50",
 *         "currency": "EUR"
 *     },
 *     "counterparty_alias": {
 *         "type": "EMAIL",
 *         "value": "bravo@bunq.com"
 *     },
 *     "description": "Payment for drinks."
 * }
 * ```
 * Next, create the signature of `$dataToSign` using the SHA256 algorithm and the private key `$privateKey` of the Installation's key pair. In PHP, use the following to create a signature. The signature will be passed by reference into `$signature`.
 *
 * `openssl_sign($dataToSign, $signature, $privateKey, OPENSSL_ALGO_SHA256);`
 *
 * Encode the resulting `$signature` using base64, and add the resulting value to the request under the `X-Bunq-Client-Signature` header. You have just signed your request, and can send it!
 *
 * ## <span id="topic-signing-response-verifying-example">Response verifying example</span>
 *
 * The response to the previous request is as follows (the JSON is formatted with newlines and indentations to make it more readable):
 *
 * <table>
 *     <thead>
 *         <tr>
 *             <th>Header</th>
 *             <th>Value</th>
 *         </tr>
 *     </thead>
 *     <tbody>
 *         <tr>
 *             <td>Access-Control-Allow-Origin:</td>
 *             <td>*</td>
 *         </tr>
 *         <tr>
 *             <td>Content-Type:</td>
 *             <td>application/json</td>
 *         </tr>
 *         <tr>
 *             <td>Date:</td>
 *             <td>Thu, 07 Apr 2016 08:32:04 GMT</td>
 *         </tr>
 *         <tr>
 *             <td>Server:</td>
 *             <td>APACHE</td>
 *         </tr>
 *         <tr>
 *             <td>Strict-Transport-Security:</td>
 *             <td>max-age=31536000</td>
 *         </tr>
 *         <tr>
 *             <td>Transfer-Encoding:</td>
 *             <td>chunked</td>
 *         </tr>
 *         <tr>
 *             <td>X-Bunq-Client-Response-Id:</td>
 *             <td>89dcaa5c-fa55-4068-9822-3f87985d2268</td>
 *         </tr>
 *         <tr>
 *             <td>X-Bunq-Client-Request-Id:</td>
 *             <td>57061b04b67ef</td>
 *         </tr>
 *         <tr>
 *             <td>X-Bunq-Server-Signature:</td>
 *             <td>ee9sDfzEhQ2L6Rquyh2XmJyNWdSBOBo6Z2eUYuM4bAOBCn9N5vjs6k6RROpagxXFXdGI9sT15tYCaLe5FS9aciIuJmrVW/SZCDWq/nOvSThi7+BwD9JFdG7zfR4afC8qfVABmjuMrtjaUFSrthyHS/5wEuDuax9qUZn6sVXcgZEq49hy4yHrV8257I4sSQIHRmgds4BXcGhPp266Z6pxjzAJbfyzt5JgJ8/suxgKvm/nYhnOfsgIIYCgcyh4DRrQltohiSon6x1ZsRIfQnCDlDDghaIxbryLfinT5Y4eU1eiCkFB4D69S4HbFXYyAxlqtX2W6Tvax6rIM2MMPNOh4Q==</td>
 *         </tr>
 *         <tr>
 *             <td>X-Frame-Options:</td>
 *             <td>SAMEORIGIN</td>
 *         </tr>
 *     </tbody>
 * </table>
 *
 * ```json
 * {
 * 	"Response": [
 * 		{
 * 			"Id": {
 * 				"id": 1561
 * 			}
 * 		}
 * 	]
 * }
 * ```
 * We need to verify that this response was sent by the bunq server and not from a man-in-the-middle:
 * - Create a `$dataToSign` variable containing the body of the request.
 *
 * **NOTE:** We started to only sign the response body on April 28, 2020. Please make sure you validate our new response signature.
 *
 * So for our example above the response to sign will look like this:
 *
 * ```
 * {"Response":[{"Id":{"id":1561}}]}
 * ```
 * Now, verify the signature of `$dataToVerify` using the SHA256 algorithm and the public key `$publicKey` of the server. In PHP, use the following to verify the signature.
 *
 * `openssl_sign($dataToVerify, $signature, $publicKey, OPENSSL_ALGO_SHA256);`
 *
 * ## <span id="topic-signing-troubleshooting">Troubleshooting</span>
 *
 * If you get an error telling you "The request signature is invalid", please check the following:
 *
 * - There are no redundant characters (extra spaces, trailing line breaks, etc.) in the data to sign.
 * - Make sure the body is appended to the data to sign exactly as you're adding it to the request.
 * - You have added the full body to the data to sign.
 * - You use the data to sign to create a SHA256 hash signature.
 * - You have base64 encoded the SHA256 hash signature before adding it to the request under `X-Bunq-Client-Signature`.
 *
 * # <span id="topic-headers">Headers</span>
 *
 * HTTP headers allow your client and bunq to pass on additional information along with the request or response.
 *
 * While this is already implemented in our [SDKs](https://github.com/bunq), please follow these instructions to make sure you set appropriate headers for calls if using bunq API directly.
 *
 * ## <span id="topic-headers-request-headers">Request headers</span>
 *
 * ### <span id="topic-headers-request-headers-mandatory-request-headers">Mandatory request headers</span>
 *
 * #### Cache-Control
 *
 * `Cache-Control: no-cache`
 *
 * The standard HTTP Cache-Control header is required for all requests.
 *
 * #### User-Agent
 *
 * `User-Agent: bunq-TestServer/1.00 sandbox/0.17b3`
 *
 * The User-Agent header field should contain information about the user agent originating the request. There are no restrictions on the value of this header.
 *
 * #### X-Bunq-Client-Signature
 *
 * **⚠️ UPCOMING CHANGE:** Header and URL signature will stop being validated on April 28, 2020. Please [sign the request body](https://doc.bunq.com/#/signing) only.
 *
 * `X-Bunq-Client-Signature: XLOwEdyjF1d+tT2w7a7Epv4Yj7w74KncvVfq9mDJVvFRlsUaMLR2q4ISgT+5mkwQsSygRRbooxBqydw7IkqpuJay9g8eOngsFyIxSgf2vXGAQatLm47tLoUFGSQsRiYoKiTKkgBwA+/3dIpbDWd+Z7LEYVbHaHRKkEY9TJ22PpDlVgLLVaf2KGRiZ+9/+0OUsiiF1Fkd9aukv0iWT6N2n1P0qxpjW0aw8mC1nBSJuuk5yKtDCyQpqNyDQSOpQ8V56LNWM4Px5l6SQMzT8r6zk5DvrMAB9DlcRdUDcp/U9cg9kACXIgfquef3s7R8uyOWfKLSNBQpdVIpzljwNKI1Q`
 *
 *
 * #### X-Bunq-Client-Authentication
 *
 * `X-Bunq-Client-Authentication: 622749ac8b00c81719ad0c7d822d3552e8ff153e3447eabed1a6713993749440`
 *
 * The authentication *token* is used to authenticate the source of the API call. It is required by all API calls except for `POST /v1/installation`.
 *
 * It is important to note that the device and session calls are using the token from the response of the installation call, while all the other calls use the token from the response of the session-server call:
 * - Pass the **installation *Token*** you get in the response to the `POST /installation` call in the `/device-server` and `/session-server` calls.
 * - Pass the **session *Token*** you get in the response to the `POST /session-server` call in all the other calls.
 *
 * ### <span id="topic-headers-request-headers-otpional-request-headers">Optional request headers</span>
 *
 * #### X-Bunq-Language
 *
 * `X-Bunq-Language: en_US`
 *
 * `en_US` is the default language setting for responses and error descriptions.
 *
 * The X-Bunq-Language header must contain a preferred language indication. The value of this header is formatted as a ISO 639-1 language code plus a ISO 3166-1 alpha-2 country code, separated by an underscore.
 *
 * Currently only the languages en_US and nl_NL are supported. Anything else will default to en_US.
 *
 * #### X-Bunq-Region
 *
 * `X-Bunq-Region: en_US`
 *
 * `en_US` is the default region for localization formatting.
 *
 * The X-Bunq-Region header must contain the region (country) of the client device. The value of this header is formatted as a ISO 639-1 language code plus a ISO 3166-1 alpha-2 country code, separated by an underscore.
 *
 * #### X-Bunq-Client-Request-Id
 *
 * `X-Bunq-Client-Request-Id: a4f0de`
 *
 * This header has to specify an ID with each request that is unique for the logged in user. There are no restrictions for the format of this ID. However, the server will respond with an error when the same ID is used again on the same DeviceServer.
 *
 * #### X-Bunq-Geolocation
 *
 * `X-Bunq-Geolocation: 4.89 53.2 12 100 NL`
 *
 * `X-Bunq-Geolocation: 0 0 0 0 000` *(if no geolocation is available or known)*
 *
 * This header has to specify the geolocation of the device. It makes it possible for bunq to map the geolocation with the payment.
 * ‌
 * The format of this value is longitude latitude altitude radius country. The country is expected to be formatted of an ISO 3166-1 alpha-2 country code. When no geolocation is available or known the header must still be included but can be zero valued.
 *
 * ### <span id="topic-headers-request-headers-attachment-headers">Attachment headers</span>
 *
 * #### Content-Type
 *
 * `Content-Type: image/jpeg`
 *
 * This header should be used when uploading an attachment to pass its MIME type. Supported types are: image/png, image/jpeg and image/gif.
 *
 * #### X-Bunq-Attachment-Description
 * X-Bunq-Attachment-Description: Check out these cookies.
 * This header should be used when uploading an Attachment's content to give it a description.
 *
 * ## <span id="topic-response-headers">Response headers</span>
 *
 * ### <span id="topic-response-headers-all-responses">All Responses</span>
 *
 * ####  X-Bunq-Client-Request-Id
 *
 * `X-Bunq-Client-Request-Id: a4f0de`
 *
 * The same ID that was provided in the request's X-Bunq-Client-Request-Id header. Is included in the response (and request) signature, so can be used to ensure this is the response for the sent request.
 *
 * #### X-Bunq-Client-Response-Id
 *
 * `X-Bunq-Client-Response-Id: 76cc7772-4b23-420a-9586-8721dcdde174`
 *
 * A unique ID for the response formatted as a UUID. Clients can use it to add extra protection against replay attacks.
 *
 * #### X-Bunq-Server-Signature
 *
 * `X-Bunq-Server-Signature: XBBwfDaOZJapvcBpAIBT1UOmczKqJXLSpX9ZWHsqXwrf1p+H+eON+TktYksAbmkSkI4gQghw1AUQSJh5i2c4+CTuKdZ4YuFT0suYG4sltiKnmtwODOFtu1IBGuE5XcfGEDDSFC+zqxypMi9gmTqjl1KI3WP2gnySRD6PBJCXfDxJnXwjRkk4kpG8Ng9nyxJiFG9vcHNrtRBj9ZXNdUAjxXZZFmtdhmJGDahGn2bIBWsCEudW3rBefycL1DlpJZw6yRLoDltxeBo7MjgROBpIeElh5qAz9vxUFLqIQC7EDONBGbSBjaXS0wWrq9s2MGuOi9kJxL2LQm/Olj2g==`
 *
 * The server's signature for this response. See the signing page for details on how to verify this signature.
 *
 * ### <span id="topic-response-headers-warning-header">Warning header</span>
 *
 * #### X-Bunq-Warning
 *
 * `X-Bunq-Warning: "You have a negative balance. Please check the app for more details."`
 *
 * Used to inform you on situations that might impact your bunq account and API access.
 *
 * # <span id="topic-errors">Errors</span>
 *
 * Familiar HTTP response codes are used to indicate the success or failure of an API request.
 *
 * Generally speaking, codes in the 2xx range indicate success, while codes in the 4xx range indicate an error having to do with provided information (e.g. a required parameter was missing, insufficient funds, etc.).
 *
 * Finally, codes in the 5xx range indicate an error with bunq servers. If this is the case, please stop by the support chat and report it to us.
 *
 * ## <span id="topic-errors-response-codes">Response codes</span>
 *
 * <table>
 *     <thead>
 *         <tr>
 *             <th>Code</th>
 *             <th>Error</th>
 *             <th>Description</th>
 *         </tr>
 *     </thead>
 *     <tbody>
 *         <tr>
 *             <td>200</td>
 *             <td>OK</td>
 *             <td>Successful HTTP request</td>
 *         </tr>
 *         <tr>
 *             <td>399</td>
 *             <td>NOT MODIFIED</td>
 *             <td>Same as a 304, it implies you have a local cached copy of the data</td>
 *         </tr>
 *         <tr>
 *             <td>400</td>
 *             <td>BAD REQUEST</td>
 *             <td>Most likely a parameter is missing or invalid</td>
 *         </tr>
 *         <tr>
 *             <td>401</td>
 *             <td>UNAUTHORISED</td>
 *             <td>Token or signature provided is not valid</td>
 *         </tr>
 *         <tr>
 *             <td>403</td>
 *             <td>FORBIDDEN</td>
 *             <td>You're not allowed to make this call</td>
 *         </tr>
 *         <tr>
 *             <td>404</td>
 *             <td>NOT FOUND</td>
 *             <td>The object you're looking for cannot be found</td>
 *         </tr>
 *         <tr>
 *             <td>405</td>
 *             <td>METHOD NOT ALLOWED</td>
 *             <td>The method you are using is not allowed for this endpoint</td>
 *         </tr>
 *         <tr>
 *             <td>429</td>
 *             <td>RATE LIMIT</td>
 *             <td>Too many API calls have been made in a too short period</td>
 *         </tr>
 *         <tr>
 *             <td>466</td>
 *             <td>REQUEST SIGNATURE REQUIRED</td>
 *             <td>Request signature is required for this operation.</td>
 *         </tr>
 *         <tr>
 *             <td>490</td>
 *             <td>USER ERROR</td>
 *             <td>Most likely a parameter is missing or invalid</td>
 *         </tr>
 *         <tr>
 *             <td>491</td>
 *             <td>MAINTENANCE ERROR</td>
 *             <td>bunq is in maintenance mode</td>
 *         </tr>
 *         <tr>
 *             <td>500</td>
 *             <td>INTERNAL SERVER ERROR</td>
 *             <td>Something went wrong on bunq's end</td>
 *         </tr>
 *     </tbody>
 * </table>
 *
 * All errors 4xx code errors will include a JSON body explaining what went wrong.
 *
 * ## <span id="topic-errors-rate-limits">Rate limits</span>
 *
 * If you are receiving the error 429, please make sure you are sending requests at rates that are below our rate limits.
 *
 * Our rate limits per IP address per endpoint:
 *
 * - GET requests: 3 within any 3 consecutive seconds
 * - POST requests: 5 within any 3 consecutive seconds
 * - PUT requests: 2 within any 3 consecutive seconds
 * - Callbacks: 2 callback URLs per notification category
 *
 * We have a lower rate limit for `/session-server`: 1 request within 30 consecutive seconds.
 *
 * # <span id="topic-api-conventions">API conventions</span>
 *
 * Make sure to follow these indications when using the bunq API or get started with our SDKs.
 *
 * ## <span id="topic-api-conventions-responses">Responses</span>
 *
 * All JSON responses have one top level object. In this object will be a Response field of which the value is always an array, even for responses that only contain one object.
 *
 * Example response body
 *
 * ```json
 * {
 * 	"Response": [
 * 		{
 * 			"DataObject": {}
 * 		}
 * 	]
 * }
 * ```
 *
 * ## <span id="topic-api-conventions-errors">Errors</span>
 *
 * - Error responses also have one top level Error object.
 * - The contents of the array will be a JSON object with an error_description and error_description_translated field.
 * - The error_description is an English text indicating the error and the error_description_translated field can be shown to end users and is translated into the language from the X-Bunq-Language header, defaulting to en_US.
 * - When using bunq SDKs, error responses will be always raised in form of an exception.
 *
 * Example response body
 * ```json
 * {
 * 	"Error": [
 * 		{
 * 			"error_description": "Error description",
 * 			"error_description_translated": "User facing error description"
 * 		}
 * 	]
 * }
 * ```
 *
 * ## <span id="topic-api-conventionsobject-type-indications">Object Type indications</span>
 *
 * When the API returns different types of objects for the same field, they will be nested in another JSON object that includes a specific field for each one of them. Within bunq SDKs a BunqResponse object will be returned as the top level object.
 *
 * In this example there is a field content, which can have multiple types of objects as value such as — in this case — ChatMessageContentText. Be sure to follow this convention or use bunq SDKs instead.
 *
 * ```json
 * {
 * 	"content": {
 * 		"ChatMessageContentText": {
 * 			"text": "Hi! This is an automated security message. We saw you just logged in on an My Device Description. If you believe someone else logged in with your account, please get in touch with Support."
 * 		}
 * 	}
 * }
 * ```
 *
 * ## <span id="topic-api-conventions-time-formats">Time formats</span>
 *
 * Times and dates being sent to and from the API are in UTC. The format that should be used is `YYYY-MM-DD hh:mm:ss.ssssss`, where the letters have the meaning as specified in ISO 8601. For example: `2017-01-13 13:19:16.215235`.
 *
 * # <span id="topic-callbacks">Callbacks</span>
 *
 * Callbacks are used to send information about events on your bunq account to a URL of your choice, so that you can receive real-time updates.
 *
 * ## <span id="topic-callbacks-notification-filters">Notification Filters</span>
 *
 * To receive notifications for certain activities on a bunq account, you have to create notification filters. It is possible to send the notifications to a provided URL and/or the user’s phone as push notifications.
 *
 * Use the `notification-filter-push` resource to create and manage push notification filters. Provide the type of events you want to receive notifications about in the `category` field.
 *
 * ```json
 * {
 *    "notification_filters":[
 *       {
 *          "category":"SCHEDULE_RESULT"
 *       }
 *    ]
 * }
 * ```
 *
 * Use the `notification-filter-url` resource to create and manage URL notification filters. The callback URL you provide in the `notification_target` field must use HTTPS.
 *
 * ```json
 * {
 *    "notification_filters":[
 *       {
 *          "category":"PAYMENT",
 *          "notification_target":"{YOUR_CALLBACK_URL}"
 *       }
 *    ]
 * }
 * ```
 *
 * ### <span id="topic-callbacks-notification-filters-callback-categories">Callback categories</span>
 *
 * <table>
 *     <thead>
 *         <tr>
 *             <th>Category</th>
 *             <th>Description</th>
 *         </tr>
 *     </thead>
 *     <tbody>
 *         <tr>
 *             <td>BILLING</td>
 *             <td>notifications for all bunq invoices</td>
 *         </tr>
 *         <tr>
 *             <td>CARD_TRANSACTION_SUCCESSFUL</td>
 *             <td>notifications for successful card transactions</td>
 *         </tr>
 *         <tr>
 *             <td>CARD_TRANSACTION_FAILED</td>
 *             <td>notifications for failed card transaction</td>
 *         </tr>
 *         <tr>
 *             <td>CHAT</td>
 *             <td>notifications for received chat messages</td>
 *         </tr>
 *         <tr>
 *             <td>DRAFT_PAYMENT</td>
 *             <td>notifications for creation and updates of draft payments</td>
 *         </tr>
 *         <tr>
 *             <td>IDEAL</td>
 *             <td>notifications for iDEAL-deposits towards a bunq account</td>
 *         </tr>
 *         <tr>
 *             <td>SOFORT</td>
 *             <td>notifications for SOFORT-deposits towards a bunq account</td>
 *         </tr>
 *         <tr>
 *             <td>MUTATION</td>
 *             <td>notifications for any action that affects a monetary account’s balance</td>
 *         </tr>
 * 	<tr>
 *             <td>OAUTH</td>
 *             <td>notifications for revoked OAuth connections</td>
 *         </tr>
 *         <tr>
 *             <td>PAYMENT</td>
 *             <td>notifications for payments created from, or received on a bunq account (doesn’t include payments that result out of paying a Request, iDEAL, Sofort or Invoice). Outgoing payments have a negative value while incoming payments have a positive value</td>
 *         </tr>
 *         <tr>
 *             <td>REQUEST</td>
 *             <td>notifications for incoming requests and updates on outgoing requests</td>
 *         </tr>
 *         <tr>
 *             <td>SCHEDULE_RESULT</td>
 *             <td>notifications for when a scheduled payment is executed</td>
 *         </tr>
 *         <tr>
 *             <td>SCHEDULE_STATUS</td>
 *             <td>notifications about the status of a scheduled payment, e.g. when the scheduled payment is updated or cancelled</td>
 *         </tr>
 *         <tr>
 *             <td>SHARE</td>
 *             <td>notifications for any updates or creation of Connects (ShareInviteBankInquiry)</td>
 *         </tr>
 *         <tr>
 *             <td>TAB_RESULT</td>
 *             <td>notifications for updates on Tab payments</td>
 *         </tr>
 *         <tr>
 *             <td>BUNQME_TAB</td>
 *             <td>notifications for updates on bunq.me Tab (open request) payments</td>
 *         </tr>
 *         <tr>
 *             <td>SUPPORT</td>
 *             <td>notifications for messages received from us through support chat</td>
 *         </tr>
 *     </tbody>
 * </table>
 *
 * ### <span id="topic-callbacks-notification-filters-mutation-category">Mutation category</span>
 *
 * A Mutation is a change in the balance of a monetary account. So, for each payment-like object, such as a request, iDEAL-payment or a regular payment, a Mutation is created. Therefore, the `MUTATION` category can be used to keep track of a monetary account's balance.
 *
 * ### <span id="topic-callbacks-notification-filters-receiving-callbacks">Receiving callbacks</span>
 *
 * Callbacks for the sandbox environment will be made from different IP's at AWS.
 * Callbacks for the production environment will be made from `185.40.108.0/22`.
 *
 * *The IP addresses might change*. We will notify you in a timely fashion if such a change would take place.
 *
 * ### <span id="topic-callbacks-notification-filters-retry-mechanism">Retry mechanism</span>
 *
 * When the execution of a callback fails (e.g. if the callback server is down or the response contains an error) it is tried again for a maximum of 5 times, with an interval of one minute between each try. If your server is not reachable by the callback after the 6th total try, the callback is not sent anymore.
 *
 * ### <span id="topic-callbacks-notification-filters-removing-callbacks">Removing callbacks</span>
 *
 * To remove callbacks for an object, send a PUT request to the *user-person*, *user-company*, *monetary-account* or *cash-register* resource with the `notification_filters` field of the JSON request body unset.
 * ```
 * {
 *     "notification_filters": []
 * }
 * ```
 *
 * ## <span id="topic-callbacks-certificate-pinning">Certificate pinning</span>
 *
 * We recommend you use certificate pinning as an extra security measure. With certificate pinning, we check the certificate of the server on which you want to receive callbacks against the pinned certificate that has been provided by you and cancel the callback if that check fails.
 *
 * ### <span id="topic-callbacks-certificate-pinning-how-to-set-up-certificate-pinning">How to set up certificate pinning</span>
 *
 * Retrieve the SSL certificate of your server using the following command:
 *
 * 1. `openssl s_client -servername www.example.com -connect www.example.com:443 < /dev/null | sed -n "/-----BEGIN/,/-----END/p" > www.example.com.pem`
 * 2. `POST` the certificate to the certificate-pinned endpoint.
 *
 * Now every callback that is made will be checked against the pinned certificate that you provided. Note that if the SSL certificate on your server expires or is changed, our callbacks will fail.
 *
 * # <span id="topic-pagination">Pagination</span>
 *
 * In order to control the size of the response of a `LIST` request, items can be paginated. A `LIST` request is a request for every one of a certain resources, for instance all payments of a certain monetary account `GET /v1/user/1/monetary-account/1/payment`). You can decide on the maximum amount of items of a response by adding a `count` query parameter with the number of items you want per page to the URL. For instance:
 *
 * `GET /v1/user/1/monetary-account/1/payment?count=25`
 *
 * When no `count` is given, the default count is set to 10. The maximum `count` you can set is 200.
 *
 * With every listing, a `Pagination` object will be added to the response, containing the URLs to be used to get the next or previous set of items. The URLs in the Pagination object can be used to navigate through the listed resources. The Pagination object looks like this given a count of 25:
 *
 * ```json
 * {
 *     "Pagination": {
 *         "future_url": null,
 *         "newer_url": "/v1/user/1/monetary-account/1/payment?count=25&newer_id=249",
 *         "older_url": "/v1/user/1/monetary-account/1/payment?count=25&older_id=224"
 *     }
 * }
 * ```
 *
 * The `newer_url` value can be used to get the next page. The `newer_id` is always the ID of the last item in the current page. If `newer_url` is `null`, there are no more recent items before the current page.
 *
 * The `older_url` value can be used to get the previous page. The `older_id` is always the ID of the first item in the current page. If `older_url` is `null`, there are no older items after the current page.
 *
 * The `future_url` can be used to refresh and check for newer items that didn't exist when the listing was requested. The `newer_id` will always be the ID of the last item in the current page. `future_url` will be `null` if `newer_id` is not also the ID of the latest item.
 *
 * # <span id="topic-sandbox">Sandbox</span>
 * *The sandbox base URL is https://public-api.sandbox.bunq.com/v1/*
 *
 * We do not use real money and do not allow external transactions in the sandbox environment.
 *
 * ## Sandbox user accounts
 * You need to create a sandbox user to test the bunq API. The easiest way to do it is by using [our developer portal](https://developer.bunq.com/):
 * 1. Log in using your bunq account or [create a free developer account](https://developer.bunq.com/portal/signup) with sandbox-only access.
 * 1. Go to Sandbox Users.
 * 1. Generate up to 5 users.
 * 1. Use the sandbox API key to create an API context and/or use the user credentials to log in to the [sandbox bunq app](https://doc.bunq.com/#/android-emulator).
 *
 * ### Alternative ways to generate sandbox API keys
 * There are 3 other ways you can generate a bunq sandbox API key:
 * * connect to [Tinker](https://lexy.gitbook.io/bunq/quickstart/tinker) *(it will also return login credentials for the sandbox app)*;
 * * create it in the [sandbox app](https://doc.bunq.com/#/android-emulator) *(you need to be logged in as a sandbox user)*;
 * * call the sandbox user endpoints directly, using [our Postman collection](https://github.com/bunq/postman), or by running a cURL command (change `sandbox-user-person` to `sandbox-user-company` to generate a business user):
 *
 * ```
 * curl https://public-api.sandbox.bunq.com/v1/sandbox-user-person -X POST --header "Content-Type: application/json" --header "Cache-Control: none" --header "User-Agent: curl-request" --header "X-Bunq-Client-Request-Id: $(date)randomId" --header "X-Bunq-Language: nl_NL" --header "X-Bunq-Region: nl_NL" --header "X-Bunq-Geolocation: 0 0 0 0 000"
 * ```
 *
 * ⚠️ **NOTE:** An API key can only be assigned to an IP within 1 hour after its creation. After the 1 hour, it will become invalid if not assigned. API keys that are created via the sandbox app are wiped with each sandbox reset.
 *
 * Once you have a sandbox API key, create more sandbox users to use as test customer accounts, and start playing with the API.
 *
 * The sandbox base URL is https://public-api.sandbox.bunq.com/v1/.
 *
 * ## Sandbox money
 * Without money, it's not always sunny in the sandbox world. Fortunately, getting money on the bunq sandbox is easy. All you need to do is ask Sugar Daddy for it.
 *
 * Send a `POST v1/request-inquiry` request passing sugardaddy@bunq.com  in the counterparty_alias field. Specify the type for the alias and set the `allow_bunqme` field. Request up to €500 at a time.
 * ```
 * {
 *     "amount_inquired": {
 *         "value": "100",
 *         "currency": "EUR"
 *     },
 *     "counterparty_alias": {
 *         "type": "EMAIL",
 *         "value": "sugardaddy@bunq.com",
 *         "name": "Sugar Daddy"
 *     },
 *     "description": "You're the best!",
 *     "allow_bunqme": false
 * }
 * ```
 *
 * # <span id="topic-android-emulator">Android Emulator</span>
 *
 * In case you do not own an Android device on which you can run our Sandbox app for end-to-end testing, you can set up an emulator to run the bunq Sandbox app for Android.
 *
 * ## Things you will need
 *
 * - The [bunq Sandbox App APK](https://appstore.bunq.com/api/android/builds/bunq-android-sandbox-master.apk) that's optimised for emulating;
 * - [Android Studio](https://developer.android.com/studio/index.html).
 *
 * ## Starting the Android Virtual Device (AVD) Manager
 *
 * 1. Open Android Studio.
 * 2. From the top menu, select “Tools” > "Android" > "AVD Manager".
 *
 * ## Setting up a new virtual device
 *
 * 1. Start the wizard by clicking on "+ Create Virtual Device".
 * 2. Select a device (recommendation: "Pixel 5.0" or "Nexus 6") and press "Next".
 * 3. Select an x86 system image (recommendation: Nougat, API Level 25, Android 7.1.1 with Google APIs) and press "Next". The image needs to have Google Play Services 10.0.1 or higher.
 * 4. In the bottom left corner, select "Show Advanced Settings".
 * 5. Scroll to "Memory and Storage".
 * 6. Change "Internal Storage" to "2048 MB".
 * 7. Change "SD card" to "200 MB".
 * 8. Press "Finish".
 *
 * ## Starting the virtual device
 *
 * 1. On the right side under "Actions", select the green "Play" button.
 * 2. Wait for the device to boot, this may take a few minutes.
 *
 * ## Installing the bunq Sandbox App APK
 *
 * 1. Open the command line.
 * 2. Navigate to your Android SDK platform tools directory (e.g. `cd ~/Library/Android/sdk/platform-tools` on macOS).
 * 3. Make sure that the virtual device is started and has fully booted.
 * 4. Run `./adb install ~/Downloads/bunq-android-sandboxEmulator-public-api.apk`, this may take a few minutes, and should finish with "Success".
 *
 * ## Creating an account or logging in
 *
 * 1. Create a sandbox account in the [developer portal](https://developer.bunq.com/).
 * 1. Log in to the sandbox app using the sandbox user credentials.
 *
 * ℹ️ *You will be asked to verify your phone number when you open the app for the first time. Sandbox does not send actual SMS messages. Enter any valid phone number and use the default verification code `992266`*.
 *
 * If you couldn't generate a sandbox account in the developer portal, use Tinker:
 * 1. Install [Tinker](https://beta.doc.bunq.com/quickstart/tinker).
 * 1. Run `tinker/user-overview` to create a sandbox account. The output of the command will include the login credentials for the sandbox account.
 *
 * ⚠️ **NOTE:** It is **not** possible to create accounts using the regular signup in the app, bunq is not reviewing Sandbox applications.
 *
 * # <span id="topic-moving-to-production">Moving to Production</span>
 *
 * Have you tested your bunq integration to the fullest and are you now ready to introduce it to the world? Then the time has come to move it to a production environment!
 *
 * To get started you'll need some fresh API keys for the production environment, which you can create via your bunq app. You can create these under "Profile" by tapping the "Security" menu. We do, however, highly recommend using a standard API Key instead of a Wildcard API Key. The former is significantly safer and it protects you from intrusions and possible attacks.
 *
 * There's only a few things to do before your beautiful bunq creation can be moved to production. You're going to have to change your API Key and redo the sequence of calls to open a session.
 *
 * The bunq Public API production environment is hosted at `https://api.bunq.com`.
 *
 * Do you have any questions or remarks about the process, or do you simply want to show off with your awesome creations? Don't hesitate to drop us a line on [together.bunq.com](https://together.bunq.com).
 *
 * Please be aware that if you will gain access to account information of other bunq users or initiate a payment for them, you  maybrequire a PSD2 permit.
 *
 * # <span id="topic-quickstart-opening-a-session">Quickstart: Opening a Session</span>
 *
 * ## <span id="topic-quickstart-opening-a-session-goal">Goal</span>
 *
 * So, you want to start using the bunq API, awesome! To do this, you have to open a session in which you will be making those calls.
 *
 * ## <span id="topic-quickstart-opening-a-session-getting-an-api-key">Getting an API key</span>
 *
 * To connect to the API, you have to make sure you have received an API key.
 *
 * **For production:**
 * 1. create an app in the [developer portal](http://developer.bunq.com/), or
 * 1. generate it in the bunq app *(Profile → Security & Settings → Developers → API keys)*.
 *
 * **For sandbox**
 * You can use one of the following ways:
 * - create a sandbox user in the [developer portal](http://developer.bunq.com/);
 * - generate an API key in the [sandbox app](#android-emulator) *(Profile → Security & Settings → Developers → API keys)*;
 * - get an API key from [Tinker](https://beta.doc.bunq.com/quickstart/tinker);
 * - run a cURL request: `curl https://public-api.sandbox.bunq.com/v1/sandbox-user-person -X POST --header "Content-Type: application/json" --header "Cache-Control: none" --header "User-Agent: curl-request" --header "X-Bunq-Client-Request-Id: $(date)randomId" --header "X-Bunq-Language: nl_NL" --header "X-Bunq-Region: nl_NL" --header "X-Bunq-Geolocation: 0 0 0 0 000"`. Use `sandbox-user-company` to generate a business user.
 *
 * Note that production API key is only usable on production and sandbox key is only usable on sandbox. Sandbox key has a `sandbox_` prefix while production key does not have any noticeable prefixes.
 *
 * ## <span id="topic-quickstart-opening-a-session-call-sequence">Call sequence</span>
 *
 * The calls you need to perform to set up a session from scratch are the following:
 *
 * ### <span id="topic-quickstart-opening-a-session-call-sequence-post-installation">1. POST installation</span>
 *
 * Each call needs to be signed with your own private key. An Installation is used to tell the server about the public key of your key pair. The server uses this key to verify your subsequent calls.
 *
 * Start by generating a 2048-bit RSA key pair. You can find examples by looking at the source code of the sdk's located at github.
 *
 * #### Headers
 *
 * On the headers page you can find out about the mandatory headers. Take care that if you are in the sandbox environment, you set an `Authorization` header. Specific to the `POST /installation` call, you shouldn't use the `X-Bunq-Client-Authentication` or the `X-Bunq-Client-Signature` headers.
 *
 * #### Body
 *
 * Post your public key to the Installation endpoint (use `\n` for newlines in your public key).
 *
 * #### Response
 *
 * Save the Installation token and the bunq API's public key from the response. This token is used in the `Authentication` header to register a `DeviceServer` and to start a `SessionServer`. The bunq API's public key should be used to verify future responses received from the bunq API.
 *
 * ### <span id="topic-quickstart-opening-a-session-call-sequence-post-device-server">2. POST device-server</span>
 *
 * Further calls made to the server need to come from a registered device. `POST /device-server` registers your current device and the IP address(es) it uses to connect to the bunq API.
 *
 * #### Headers
 *
 * Use the token you received from `POST /installation` in the `X-Bunq-Client-Authentication` header. Make sure you sign your call, passing the call signature in `X-Bunq-Client-Signature` header.
 *
 * #### Body
 *
 * For the secret, use the API key you received. If you want to create another API key, you can do so in the bunq sandbox app (or production app for the production environment). Login, go to Profile > Security and tap 'API keys'. The freshly created API key can be assigned to one or multiple IP addresses using `POST device-server` within 4 hours before becoming invalid. As soon as you start using your API key, it will remain valid until the next sandbox reset. For the secret, use the API key you received.
 *
 * ### <span id="topic-quickstart-opening-a-session-call-sequence-post-session-server">3. POST session-server</span>
 *
 * To make any calls besides `installation` and `device-server`, you need to open a session.
 *
 * #### Headers
 *
 * Use the token you received from `POST /installation` in the `X-Bunq-Client-Authentication` header. Make sure you sign your call, passing the call signature in `X-Bunq-Client-Signature` header.
 *
 * #### Body
 *
 * For the secret, use the API key you received.
 *
 * #### Response
 *
 * The token received in the response to `POST /session-server` should be used to authenticate your calls in this session. Pass this session's token in the `X-Bunq-Client-Authentication` header on every call you make in this session.
 *
 * # <span id="topic-quickstart-payment-request">Quickstart: Payment Request</span>
 *
 * ## <span id="topic-quickstart-payment-request-goal">Goal</span>
 *
 * You want to offer bunq payments on a website or in an application.
 *
 * ## <span id="topic-quickstart-payment-request-scenario">Scenario</span>
 *
 * In this use case the consumer and the merchant both have a bunq account. The consumer wants to pay with bunq and enters their alias in the bunq payment field at checkout. The merchant sends the request for payment to the consumer when the consumer presses enter. The consumer agrees to the request in the bunq mobile app and the merchant has immediate confirmation of the payment. Please be aware that if you will gain access to account information of other bunq users or initiate a payment for them, you require a PSD2 permit.
 *
 * ## <span id="topic-quickstart-payment-request-before-you-start">Before you start</span>
 *
 * Make sure that you have opened a session and that for any call you make after that, you pass the session’s token in the X-Bunq-Client-Authentication header.
 *
 * ## <span id="topic-quickstart-payment-request-call-sequence">Call Sequence</span>
 *
 * The consumer is at checkout and selects the bunq payment method. This would be a logical time to open a session on the bunq server.
 *
 * ### <span id="topic-quickstart-payment-request-call-sequence-list-monetary-account">1. LIST monetary-account</span>
 *
 * When a request for payment is accepted, the money will be deposited on the bank account the request for payment is connected to. Let’s start by finding all your available bank accounts. Pick one of them to make the request for payment with and save its `id`.
 *
 * ### <span id="topic-quickstart-payment-request-call-sequence-post-monetary-account-attachment">2. POST monetary-account attachment (optional)</span>
 *
 * Optionally, you can attach an image to the request for payment.
 *
 * #### Headers
 * Make sure you set the `Content-Type` header to match the MIME type of the image. It’s also required you pass a description of the image via the `X-Bunq-Attachment-Description` header.
 *
 * #### Body
 * The payload of this request is the binary representation of the image file. Do not use any JSON formatting.
 *
 * #### Response
 * Save the `id` of the posted attachment. You’ll need it to attach it to the request for payment.
 *
 * ### <span id="topic-quickstart-payment-request-call-sequence-post-request-inquiry">3. POST request-inquiry</span>
 *
 * Next, create a request inquiry. A request inquiry is the request for payment that your customer can respond to by accepting or rejecting it.
 *
 * #### Body
 *
 * Pass the customer’s email address, phone number or IBAN in the `counterparty_alias`. Make sure you set the correct `type` for the alias, depending on what you pass. When providing an IBAN, a name of the `counterparty_alias` is required. You can provide the `id` of the created attachment.
 *
 * #### Response
 *
 * You will receive the `id` of the created request inquiry in the response. Save this `id`. You will need it to check if the customer has responded to the request yet.
 *
 * ### <span id="topic-quickstart-payment-request-call-sequence-get-request-inquiry">4. GET request-inquiry</span>
 *
 * After you’ve sent the request for payment, its status can be checked.
 *
 * #### Response
 *
 * When the `status` is `ACCEPTED`, the customer has accepted and paid the request, and you will have received the money on the connected monetary account. If the `status` is `REJECTED`, the customer did not accept the request.
 *
 * # <span id="topic-quickstart-create-a-tab-payment">Quickstart: Create a Tab payment</span>
 *
 * ## <span id="topic-quickstart-create-a-tab-payment-goal">Goal</span>
 *
 * You will create a tab that can be paid once by a single user, a so called TagUsageSingle, and explore three different ways to make the Tab visible to your customers:
 *
 * - QR code from the CashRegister
 * - QR code from the Tab.
 *
 * ## <span id="topic-quickstart-create-a-tab-payment-before-you-start">Before you start</span>
 *
 * Make sure that you have opened a session and that for any call you make after that, you pass the session’s token in the `X-Bunq-Client-Authentication` header.
 *
 * ## <span id="topic-quickstart-create-a-tab-payment-call-sequence">Call sequence</span>
 *
 * ### <span id="topic-quickstart-create-a-tab-payment-call-sequence-post-attachment-public">1. POST attachment-public</span>
 *
 * Start by creating an attachment that will be used for the avatar for the cash register.
 *
 * #### Header
 *
 * Make sure you set the `Content-Type` header to match the MIME type of the image. It is also required you pass a description of the image via the `X-Bunq-Attachment-Description` header.
 *
 * #### Body
 *
 * The payload of this request is the binary representation of the image file. Do not use any JSON formatting.
 *
 * #### Response
 *
 * Save the `uuid` of the posted attachment. You'll need it to create the avatar in the next step.
 *
 * ### <span id="topic-quickstart-create-a-tab-payment-call-sequence-post-avatar">2. POST avatar</span>
 *
 * Make an avatar using the public attachment you've just created.
 *
 * #### Body
 *
 * The payload of this request is the `uuid` of the attachment public.
 *
 * #### Response
 *
 * In response, you’ll receive the UUID of the avatar created using the attachment. Save this UUID. You’ll use it as the avatar for the cash register you're about to create.
 *
 * ### <span id="topic-quickstart-create-a-tab-payment-call-sequence-list-monetary-account">3. LIST monetary-account</span>
 *
 * Get a listing of all available monetary accounts. Choose one, and save the id of the monetary account you want your cash register to be connected to. Each paid tab for the cash register will transfer the money to this account.
 *
 * ### <span id="topic-quickstart-create-a-tab-payment-call-sequence-post-cash-register">4a. POST cash-register</span>
 *
 * Create a cash register. Use the `id` of the monetary account you want to connect the cash register to in the URL of the request.
 *
 * #### Body
 *
 * In the body provide the `uuid` of the avatar you created for this cash register. Also make sure to provide a unique name for your cash register. Set the status to `PENDING_APPROVAL`.
 *
 * #### Response
 *
 * The response contains the `id` of the cash register you created. Save this `id`. You will need it to create subsequent tabs and tab items.
 *
 * ### <span id="topic-quickstart-create-a-tab-payment-call-sequence-wait-for-approval">4b. Wait for approval</span>
 *
 * On the production environment, a bunq admin will review and approve your cash register. In the sandbox environment, your cash register will be automatically approved.
 *
 * ### <span id="topic-quickstart-create-a-tab-payment-call-sequence-post-tab-usage-single">5. POST tab-usage-single</span>
 *
 * Create a new tab that is connected to your cash register. Use the id of the cash register you want to connect this tab to in the URL of your request.
 *
 * #### Body
 *
 * Give the tab a name in `merchant_reference`. Create the tab with status `OPEN`, and give the tab a starting amount. You can update this amount later.
 *
 * #### Response
 *
 * The response contains the uuid of the tab you created.
 *
 * ### <span id="topic-quickstart-create-a-tab-payment-call-sequence-post-tab-item">6. POST tab-item (optional)</span>
 *
 * You can add items to a tab. For instance, if a customer will be paying for multiple products via this tab, you can decide to add an item for each of these. Adding items to a tab is optional, and adding them will not change the total amount of the tab itself. However, if you've added any tab items the sum of the amounts of these items must be equal to the `total_amount` of the tab when you change its status to `WAITING_FOR_PAYMENT`.
 *
 * ### <span id="topic-quickstart-create-a-tab-payment-call-sequence-put-tab-usage-single">7. PUT tab-usage-single</span>
 *
 * Update the status of the tab to `WAITING_FOR_PAYMENT` if you want the costumer to pay the tab, and you're done adding any tab items. You can use this request to make the tab visible for your costumers.
 *
 * #### Visibility
 *
 * To decide how you are going to make your tab visible, pass a visibility object in the payload.
 *
 * Setting `cash_register_qr_code` to true will connect this tab to the QR code from the cash register. If this cash register does not have a QR code yet, one will be created. Only one Tab can be connected to the cash register’s QR code at any given time.
 *
 * Setting `tab_qr_code` to true will create a QR code specifically for this tab. This QR code can not be linked to anything else.
 *
 * # <span id="topic-quickstart-transwerwise-payment">Quickstart: Create a TransferWise payment</span>
 *
 * ## Goal
 *
 * You want to send a payment in currency other than euro outside the SEPA zone.
 *
 * ## Before you start
 *
 * Make sure that you have opened a session and that for any call you make after that, you pass the session’s token in the `X-Bunq-Client-Authentication` header.
 *
 * ℹ️ *bunq relies on TransferWise for international, so you need to create a TransferWise account linked to a bunq account to be able to create international transfers. You can do it either from the bunq app or using our API as described below.*
 *
 * ## Get the up-to-date exchange rate (optional)
 *
 * You might want to check the latest currency exchange rate before making a transfer. Here’s how you can do it using the bunq API:
 * 1. Check the list of supported currencies via `GET /user/{userID}/transferwise-currency`. Copy the needed currency code.
 * 2. Create a temporary quote for the currency of your choice via `POST /user/{userID}/transferwise-quote-temporary`.
 *
 * ℹ️ *A quote is the exchange rate at the exact timestamp. Temporary quotes carry solely informative value and cannot be used for creating a transfer.*
 *
 * 3. Read the temporary quote via `GET /user/{userID}/transferwise-quote-temporary/{transferwise-quote-temporaryID}`.
 *
 * ## Create a TransferWise account
 *
 * You need a TransferWise account linked to your bunq account to make TransferWise payments via the bunq API. Create one via `POST /user/{userID}/transferwise-user`, and save its ID.
 *
 * ℹ️ *You cannot use an existing TransferWise account.*
 *
 * ## Create a quote
 *
 * 1. Create a quote via POST /user/{userID}/transferwise-quote and save its ID.
 *
 * ℹ️ *Use amount_target to indicate the sum the recipient must get. Amount_source, on the other hand, will indicate the sum you want to send, but it will not necessarily be the final sum the recipient gets.*
 *
 * ℹ️ *Quotes are valid for 30 minutes so if you do not manage to create a transfer within this time, you will need to create another quote.*
 *
 * 2. Get the exchange rate by reading the quote via GET /user/{userID}/transferwise-quote/(transferwise-quoteID).
 *
 * ## Create a recipient
 *
 * If you have sent money via the TransferWise account linked to your bunq account, you can reuse the recipients. You can list their IDs via `GET /user/{userID}/transferwise-quote/{transferwise-quoteID}/transferwise-recipient`.
 *
 * To create a new, previously unused recipient, follow these steps:
 * 1. Retrieve the fields required for creating the recipient as the requirements vary for the type of recipient in each country. Iterate sending the following request pair till there are no more required fields:
 * - `GET /user/{userID}/transferwise-quote/{transferwise-quoteID}/transferwise-recipient-requirement`
 * - `POST /user/{userID}/transferwise-quote/{transferwise-quoteID}/transferwise-recipient-requirement`
 * 2. Create a recipient account using the final request body from the previous step with `POST /user/{userID}/transferwise-quote/{transferwise-quoteID}/transferwise-recipient-requirement`
 *
 * ## Create a transfer
 *
 * Finally, having both the quote ID and the recipient ID, you can create a transfer. 🎉
 *
 * 1. Check if there are any additional transfer requirements via `POST /user/{userID}/transferwise-quote/{transferwise-quoteID}/transferwise-transfer-requirement`.
 * 2. Create a transfer via `POST /user/{userID}/transferwise-quote/{transferwise-quoteID}/transferwise-transfer`. You need to specify the ID of the monetary account from which you want the payment to be made.
 *
 * # <span id="topic-quickstart-attachments">Quickstart: Downloading attachments</span>
 *
 * ## Goal
 * Export receipts and invoices attached to payments to your application.
 *
 * ## The scenario you want to achieve
 * 0. The bunq user has accepted the authorization request and your application can read the bunq user’s account information.
 * 1. Your application imports all the transactions and attachments.
 * 2. The bunq user sees the transactions matched with the receipts and invoices in your application.
 *
 * ## Before you start
 * * Make sure that you have opened a session
 * * Make sure you pass the session Token in the X-Bunq-Client-Authentication header in all the following requests of the session.
 *
 * ## Call sequence
 * 1. List the payments of the user via GET /user/{userID}/monetary-account/{monetary-accountID}/payment.
 * 2. Check if the payments have attachments via GET /user/{userID}/monetary-account/{monetary-accountID}/payment/{paymentID}/note-attachment. Save the attachment IDs.
 * 3. Export the raw content of the attachments via GET /user/{userID}/attachment/{attachmentID}/content.
 *
 * ***HINT:** You can use [callbacks](https://doc.bunq.com/#/callbacks) to make sure you don’t miss anything happening on the bunq account.*
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  user = {
    /**
     * @description Get the available categories.
     *
     * @tags additional-transaction-information-category
     * @name ListAllAdditionalTransactionInformationCategoryForUser
     * @request GET:/user/{userID}/additional-transaction-information-category
     */
    listAllAdditionalTransactionInformationCategoryForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        AdditionalTransactionInformationCategoryListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/additional-transaction-information-category`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Manage user-defined categories.
     *
     * @tags additional-transaction-information-category-user-defined
     * @name CreateAdditionalTransactionInformationCategoryUserDefinedForUser
     * @request POST:/user/{userID}/additional-transaction-information-category-user-defined
     */
    createAdditionalTransactionInformationCategoryUserDefinedForUser: (
      userId: number,
      data: AdditionalTransactionInformationCategoryUserDefined,
      params: RequestParams = {},
    ) =>
      this.request<
        AdditionalTransactionInformationCategoryUserDefinedCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/additional-transaction-information-category-user-defined`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new monetary account attachment. Create a POST request with a payload that contains the binary representation of the file, without any JSON wrapping. Make sure you define the MIME type (i.e. image/jpeg) in the Content-Type header. You are required to provide a description of the attachment using the X-Bunq-Attachment-Description header.
     *
     * @tags attachment
     * @name CreateAttachmentForUserMonetaryAccount
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/attachment
     */
    createAttachmentForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      data: AttachmentMonetaryAccount,
      params: RequestParams = {},
    ) =>
      this.request<
        AttachmentMonetaryAccountCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/attachment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a specific attachment. The header of the response contains the content-type of the attachment.
     *
     * @tags attachment
     * @name ReadAttachmentForUser
     * @request GET:/user/{userID}/attachment/{itemId}
     */
    readAttachmentForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        AttachmentUserRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/attachment/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get all subscription billing contract for the authenticated user.
     *
     * @tags billing-contract-subscription
     * @name ListAllBillingContractSubscriptionForUser
     * @request GET:/user/{userID}/billing-contract-subscription
     */
    listAllBillingContractSubscriptionForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        BillingContractSubscriptionListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/billing-contract-subscription`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description bunq.me public profile of the user.
     *
     * @tags bunqme-fundraiser-profile
     * @name ReadBunqmeFundraiserProfileForUser
     * @request GET:/user/{userID}/bunqme-fundraiser-profile/{itemId}
     */
    readBunqmeFundraiserProfileForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        BunqMeFundraiserProfileUserRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/bunqme-fundraiser-profile/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description bunq.me public profile of the user.
     *
     * @tags bunqme-fundraiser-profile
     * @name ListAllBunqmeFundraiserProfileForUser
     * @request GET:/user/{userID}/bunqme-fundraiser-profile
     */
    listAllBunqmeFundraiserProfileForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        BunqMeFundraiserProfileUserListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/bunqme-fundraiser-profile`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description bunq.me fundraiser result containing all payments.
     *
     * @tags bunqme-fundraiser-result
     * @name ReadBunqmeFundraiserResultForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/bunqme-fundraiser-result/{itemId}
     */
    readBunqmeFundraiserResultForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        BunqMeFundraiserResultRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/bunqme-fundraiser-result/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description bunq.me tabs allows you to create a payment request and share the link through e-mail, chat, etc. Multiple persons are able to respond to the payment request and pay through bunq, iDeal or SOFORT.
     *
     * @tags bunqme-tab
     * @name CreateBunqmeTabForUserMonetaryAccount
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/bunqme-tab
     */
    createBunqmeTabForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      data: BunqMeTab,
      params: RequestParams = {},
    ) =>
      this.request<
        BunqMeTabCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/bunqme-tab`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description bunq.me tabs allows you to create a payment request and share the link through e-mail, chat, etc. Multiple persons are able to respond to the payment request and pay through bunq, iDeal or SOFORT.
     *
     * @tags bunqme-tab
     * @name ListAllBunqmeTabForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/bunqme-tab
     */
    listAllBunqmeTabForUserMonetaryAccount: (userId: number, monetaryAccountId: number, params: RequestParams = {}) =>
      this.request<
        BunqMeTabListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/bunqme-tab`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description bunq.me tabs allows you to create a payment request and share the link through e-mail, chat, etc. Multiple persons are able to respond to the payment request and pay through bunq, iDeal or SOFORT.
     *
     * @tags bunqme-tab
     * @name UpdateBunqmeTabForUserMonetaryAccount
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/bunqme-tab/{itemId}
     */
    updateBunqmeTabForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      data: BunqMeTab,
      params: RequestParams = {},
    ) =>
      this.request<
        BunqMeTabUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/bunqme-tab/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description bunq.me tabs allows you to create a payment request and share the link through e-mail, chat, etc. Multiple persons are able to respond to the payment request and pay through bunq, iDeal or SOFORT.
     *
     * @tags bunqme-tab
     * @name ReadBunqmeTabForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/bunqme-tab/{itemId}
     */
    readBunqmeTabForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        BunqMeTabRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/bunqme-tab/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to view bunq.me TabResultResponse objects belonging to a tab. A TabResultResponse is an object that holds details on a tab which has been paid from the provided monetary account.
     *
     * @tags bunqme-tab-result-response
     * @name ReadBunqmeTabResultResponseForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/bunqme-tab-result-response/{itemId}
     */
    readBunqmeTabResultResponseForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        BunqMeTabResultResponseRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/bunqme-tab-result-response/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used for managing OAuth Client Callback URLs.
     *
     * @tags callback-url
     * @name ReadCallbackUrlForUserOauthClient
     * @request GET:/user/{userID}/oauth-client/{oauth-clientID}/callback-url/{itemId}
     */
    readCallbackUrlForUserOauthClient: (
      userId: number,
      oauthClientId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        OauthCallbackUrlRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/oauth-client/${oauthClientId}/callback-url/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used for managing OAuth Client Callback URLs.
     *
     * @tags callback-url
     * @name UpdateCallbackUrlForUserOauthClient
     * @request PUT:/user/{userID}/oauth-client/{oauth-clientID}/callback-url/{itemId}
     */
    updateCallbackUrlForUserOauthClient: (
      userId: number,
      oauthClientId: number,
      itemId: number,
      data: OauthCallbackUrl,
      params: RequestParams = {},
    ) =>
      this.request<
        OauthCallbackUrlUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/oauth-client/${oauthClientId}/callback-url/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used for managing OAuth Client Callback URLs.
     *
     * @tags callback-url
     * @name DeleteCallbackUrlForUserOauthClient
     * @request DELETE:/user/{userID}/oauth-client/{oauth-clientID}/callback-url/{itemId}
     */
    deleteCallbackUrlForUserOauthClient: (
      userId: number,
      oauthClientId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        OauthCallbackUrlDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/oauth-client/${oauthClientId}/callback-url/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used for managing OAuth Client Callback URLs.
     *
     * @tags callback-url
     * @name CreateCallbackUrlForUserOauthClient
     * @request POST:/user/{userID}/oauth-client/{oauth-clientID}/callback-url
     */
    createCallbackUrlForUserOauthClient: (
      userId: number,
      oauthClientId: number,
      data: OauthCallbackUrl,
      params: RequestParams = {},
    ) =>
      this.request<
        OauthCallbackUrlCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/oauth-client/${oauthClientId}/callback-url`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used for managing OAuth Client Callback URLs.
     *
     * @tags callback-url
     * @name ListAllCallbackUrlForUserOauthClient
     * @request GET:/user/{userID}/oauth-client/{oauth-clientID}/callback-url
     */
    listAllCallbackUrlForUserOauthClient: (userId: number, oauthClientId: number, params: RequestParams = {}) =>
      this.request<
        OauthCallbackUrlListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/oauth-client/${oauthClientId}/callback-url`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Update the card details. Allow to change pin code, status, limits, country permissions and the monetary account connected to the card. When the card has been received, it can be also activated through this endpoint.
     *
     * @tags card
     * @name UpdateCardForUser
     * @request PUT:/user/{userID}/card/{itemId}
     */
    updateCardForUser: (userId: number, itemId: number, data: Card, params: RequestParams = {}) =>
      this.request<
        CardUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/card/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Return the details of a specific card.
     *
     * @tags card
     * @name ReadCardForUser
     * @request GET:/user/{userID}/card/{itemId}
     */
    readCardForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        CardRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/card/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Return all the cards available to the user.
     *
     * @tags card
     * @name ListAllCardForUser
     * @request GET:/user/{userID}/card
     */
    listAllCardForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        CardListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/card`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to update multiple cards in a batch.
     *
     * @tags card-batch
     * @name CreateCardBatchForUser
     * @request POST:/user/{userID}/card-batch
     */
    createCardBatchForUser: (userId: number, data: CardBatch, params: RequestParams = {}) =>
      this.request<
        CardBatchCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/card-batch`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to replace multiple cards in a batch.
     *
     * @tags card-batch-replace
     * @name CreateCardBatchReplaceForUser
     * @request POST:/user/{userID}/card-batch-replace
     */
    createCardBatchReplaceForUser: (userId: number, data: CardBatchReplace, params: RequestParams = {}) =>
      this.request<
        CardBatchReplaceCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/card-batch-replace`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new credit card request.
     *
     * @tags card-credit
     * @name CreateCardCreditForUser
     * @request POST:/user/{userID}/card-credit
     */
    createCardCreditForUser: (userId: number, data: CardCredit, params: RequestParams = {}) =>
      this.request<
        CardCreditCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/card-credit`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new debit card request.
     *
     * @tags card-debit
     * @name CreateCardDebitForUser
     * @request POST:/user/{userID}/card-debit
     */
    createCardDebitForUser: (userId: number, data: CardDebit, params: RequestParams = {}) =>
      this.request<
        CardDebitCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/card-debit`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Return all the accepted card names for a specific user.
     *
     * @tags card-name
     * @name ListAllCardNameForUser
     * @request GET:/user/{userID}/card-name
     */
    listAllCardNameForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        CardNameListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/card-name`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Pin the certificate chain.
     *
     * @tags certificate-pinned
     * @name CreateCertificatePinnedForUser
     * @request POST:/user/{userID}/certificate-pinned
     */
    createCertificatePinnedForUser: (userId: number, data: CertificatePinned, params: RequestParams = {}) =>
      this.request<
        CertificatePinnedCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/certificate-pinned`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description List all the pinned certificate chain for the given user.
     *
     * @tags certificate-pinned
     * @name ListAllCertificatePinnedForUser
     * @request GET:/user/{userID}/certificate-pinned
     */
    listAllCertificatePinnedForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        CertificatePinnedListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/certificate-pinned`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Remove the pinned certificate chain with the specific ID.
     *
     * @tags certificate-pinned
     * @name DeleteCertificatePinnedForUser
     * @request DELETE:/user/{userID}/certificate-pinned/{itemId}
     */
    deleteCertificatePinnedForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        CertificatePinnedDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/certificate-pinned/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Get the pinned certificate chain with the specified ID.
     *
     * @tags certificate-pinned
     * @name ReadCertificatePinnedForUser
     * @request GET:/user/{userID}/certificate-pinned/{itemId}
     */
    readCertificatePinnedForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        CertificatePinnedRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/certificate-pinned/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for apps to fetch a challenge request.
     *
     * @tags challenge-request
     * @name ReadChallengeRequestForUser
     * @request GET:/user/{userID}/challenge-request/{itemId}
     */
    readChallengeRequestForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        MasterCardIdentityCheckChallengeRequestUserRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/challenge-request/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for apps to fetch a challenge request.
     *
     * @tags challenge-request
     * @name UpdateChallengeRequestForUser
     * @request PUT:/user/{userID}/challenge-request/{itemId}
     */
    updateChallengeRequestForUser: (
      userId: number,
      itemId: number,
      data: MasterCardIdentityCheckChallengeRequestUser,
      params: RequestParams = {},
    ) =>
      this.request<
        MasterCardIdentityCheckChallengeRequestUserUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/challenge-request/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create and manage companies.
     *
     * @tags company
     * @name CreateCompanyForUser
     * @request POST:/user/{userID}/company
     */
    createCompanyForUser: (userId: number, data: Company, params: RequestParams = {}) =>
      this.request<
        CompanyCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/company`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create and manage companies.
     *
     * @tags company
     * @name ListAllCompanyForUser
     * @request GET:/user/{userID}/company
     */
    listAllCompanyForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        CompanyListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/company`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Create and manage companies.
     *
     * @tags company
     * @name ReadCompanyForUser
     * @request GET:/user/{userID}/company/{itemId}
     */
    readCompanyForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        CompanyRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/company/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Create and manage companies.
     *
     * @tags company
     * @name UpdateCompanyForUser
     * @request PUT:/user/{userID}/company/{itemId}
     */
    updateCompanyForUser: (userId: number, itemId: number, data: Company, params: RequestParams = {}) =>
      this.request<
        CompanyUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/company/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to confirm availability of funds on an account.
     *
     * @tags confirmation-of-funds
     * @name CreateConfirmationOfFundsForUser
     * @request POST:/user/{userID}/confirmation-of-funds
     */
    createConfirmationOfFundsForUser: (userId: number, data: ConfirmationOfFunds, params: RequestParams = {}) =>
      this.request<
        ConfirmationOfFundsCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/confirmation-of-funds`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the raw content of a specific attachment.
     *
     * @tags content
     * @name ListAllContentForUserChatConversationAttachment
     * @request GET:/user/{userID}/chat-conversation/{chat-conversationID}/attachment/{attachmentID}/content
     */
    listAllContentForUserChatConversationAttachment: (
      userId: number,
      chatConversationId: number,
      attachmentId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        AttachmentConversationContentListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/chat-conversation/${chatConversationId}/attachment/${attachmentId}/content`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get the raw content of a specific attachment.
     *
     * @tags content
     * @name ListAllContentForUserMonetaryAccountAttachment
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/attachment/{attachmentID}/content
     */
    listAllContentForUserMonetaryAccountAttachment: (
      userId: number,
      monetaryAccountId: number,
      attachmentId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        AttachmentMonetaryAccountContentListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/attachment/${attachmentId}/content`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get the raw content of a specific attachment.
     *
     * @tags content
     * @name ListAllContentForUserAttachment
     * @request GET:/user/{userID}/attachment/{attachmentID}/content
     */
    listAllContentForUserAttachment: (userId: number, attachmentId: number, params: RequestParams = {}) =>
      this.request<
        AttachmentUserContentListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/attachment/${attachmentId}/content`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to retrieve the raw content of an annual overview.
     *
     * @tags content
     * @name ListAllContentForUserExportAnnualOverview
     * @request GET:/user/{userID}/export-annual-overview/{export-annual-overviewID}/content
     */
    listAllContentForUserExportAnnualOverview: (
      userId: number,
      exportAnnualOverviewId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        ExportAnnualOverviewContentListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/export-annual-overview/${exportAnnualOverviewId}/content`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to retrieve the raw content of an RIB.
     *
     * @tags content
     * @name ListAllContentForUserMonetaryAccountExportRib
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/export-rib/{export-ribID}/content
     */
    listAllContentForUserMonetaryAccountExportRib: (
      userId: number,
      monetaryAccountId: number,
      exportRibId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        ExportRibContentListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/export-rib/${exportRibId}/content`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch the raw content of a card statement export. The returned file format could be CSV or PDF depending on the statement format specified during the statement creation. The doc won't display the response of a request to get the content of a statement export.
     *
     * @tags content
     * @name ListAllContentForUserCardExportStatementCard
     * @request GET:/user/{userID}/card/{cardID}/export-statement-card/{export-statement-cardID}/content
     */
    listAllContentForUserCardExportStatementCard: (
      userId: number,
      cardId: number,
      exportStatementCardId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        ExportStatementCardContentListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/card/${cardId}/export-statement-card/${exportStatementCardId}/content`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch the raw content of a statement export. The returned file format could be MT940, CSV or PDF depending on the statement format specified during the statement creation. The doc won't display the response of a request to get the content of a statement export.
     *
     * @tags content
     * @name ListAllContentForUserMonetaryAccountCustomerStatement
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/customer-statement/{customer-statementID}/content
     */
    listAllContentForUserMonetaryAccountCustomerStatement: (
      userId: number,
      monetaryAccountId: number,
      customerStatementId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        ExportStatementContentListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/customer-statement/${customerStatementId}/content`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Fetch the raw content of a payment statement export.
     *
     * @tags content
     * @name ListAllContentForUserMonetaryAccountEventStatement
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/event/{eventID}/statement/{statementID}/content
     */
    listAllContentForUserMonetaryAccountEventStatement: (
      userId: number,
      monetaryAccountId: number,
      eventId: number,
      statementId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        ExportStatementPaymentContentListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/event/${eventId}/statement/${statementId}/content`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Create a credential of a user for server authentication, or delete the credential of a user for server authentication.
     *
     * @tags credential-password-ip
     * @name ReadCredentialPasswordIpForUser
     * @request GET:/user/{userID}/credential-password-ip/{itemId}
     */
    readCredentialPasswordIpForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        UserCredentialPasswordIpRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/credential-password-ip/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Create a credential of a user for server authentication, or delete the credential of a user for server authentication.
     *
     * @tags credential-password-ip
     * @name ListAllCredentialPasswordIpForUser
     * @request GET:/user/{userID}/credential-password-ip
     */
    listAllCredentialPasswordIpForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        UserCredentialPasswordIpListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/credential-password-ip`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint to manage CurrencyCloud beneficiaries.
     *
     * @tags currency-cloud-beneficiary
     * @name CreateCurrencyCloudBeneficiaryForUser
     * @request POST:/user/{userID}/currency-cloud-beneficiary
     */
    createCurrencyCloudBeneficiaryForUser: (
      userId: number,
      data: CurrencyCloudBeneficiary,
      params: RequestParams = {},
    ) =>
      this.request<
        CurrencyCloudBeneficiaryCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/currency-cloud-beneficiary`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint to manage CurrencyCloud beneficiaries.
     *
     * @tags currency-cloud-beneficiary
     * @name ListAllCurrencyCloudBeneficiaryForUser
     * @request GET:/user/{userID}/currency-cloud-beneficiary
     */
    listAllCurrencyCloudBeneficiaryForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        CurrencyCloudBeneficiaryListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/currency-cloud-beneficiary`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint to manage CurrencyCloud beneficiaries.
     *
     * @tags currency-cloud-beneficiary
     * @name ReadCurrencyCloudBeneficiaryForUser
     * @request GET:/user/{userID}/currency-cloud-beneficiary/{itemId}
     */
    readCurrencyCloudBeneficiaryForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        CurrencyCloudBeneficiaryRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/currency-cloud-beneficiary/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint to list requirements for CurrencyCloud beneficiaries.
     *
     * @tags currency-cloud-beneficiary-requirement
     * @name ListAllCurrencyCloudBeneficiaryRequirementForUser
     * @request GET:/user/{userID}/currency-cloud-beneficiary-requirement
     */
    listAllCurrencyCloudBeneficiaryRequirementForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        CurrencyCloudBeneficiaryRequirementListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/currency-cloud-beneficiary-requirement`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for managing currency conversions.
     *
     * @tags currency-cloud-payment-quote
     * @name CreateCurrencyCloudPaymentQuoteForUserMonetaryAccount
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/currency-cloud-payment-quote
     */
    createCurrencyCloudPaymentQuoteForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      data: CurrencyCloudPaymentQuote,
      params: RequestParams = {},
    ) =>
      this.request<
        CurrencyCloudPaymentQuoteCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/currency-cloud-payment-quote`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for managing currency conversions.
     *
     * @tags currency-conversion
     * @name ListAllCurrencyConversionForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/currency-conversion
     */
    listAllCurrencyConversionForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        CurrencyConversionListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/currency-conversion`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for managing currency conversions.
     *
     * @tags currency-conversion
     * @name ReadCurrencyConversionForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/currency-conversion/{itemId}
     */
    readCurrencyConversionForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        CurrencyConversionRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/currency-conversion/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint to create a quote for currency conversions.
     *
     * @tags currency-conversion-quote
     * @name CreateCurrencyConversionQuoteForUserMonetaryAccount
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/currency-conversion-quote
     */
    createCurrencyConversionQuoteForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      data: CurrencyConversionQuote,
      params: RequestParams = {},
    ) =>
      this.request<
        CurrencyConversionQuoteCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/currency-conversion-quote`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint to create a quote for currency conversions.
     *
     * @tags currency-conversion-quote
     * @name ReadCurrencyConversionQuoteForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/currency-conversion-quote/{itemId}
     */
    readCurrencyConversionQuoteForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        CurrencyConversionQuoteRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/currency-conversion-quote/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint to create a quote for currency conversions.
     *
     * @tags currency-conversion-quote
     * @name UpdateCurrencyConversionQuoteForUserMonetaryAccount
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/currency-conversion-quote/{itemId}
     */
    updateCurrencyConversionQuoteForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      data: CurrencyConversionQuote,
      params: RequestParams = {},
    ) =>
      this.request<
        CurrencyConversionQuoteUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/currency-conversion-quote/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to create new and read existing statement exports. Statement exports can be created in either CSV, MT940 or PDF file format.
     *
     * @tags customer-statement
     * @name CreateCustomerStatementForUserMonetaryAccount
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/customer-statement
     */
    createCustomerStatementForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      data: ExportStatement,
      params: RequestParams = {},
    ) =>
      this.request<
        ExportStatementCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/customer-statement`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to create new and read existing statement exports. Statement exports can be created in either CSV, MT940 or PDF file format.
     *
     * @tags customer-statement
     * @name ListAllCustomerStatementForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/customer-statement
     */
    listAllCustomerStatementForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        ExportStatementListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/customer-statement`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to create new and read existing statement exports. Statement exports can be created in either CSV, MT940 or PDF file format.
     *
     * @tags customer-statement
     * @name ReadCustomerStatementForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/customer-statement/{itemId}
     */
    readCustomerStatementForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        ExportStatementRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/customer-statement/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to create new and read existing statement exports. Statement exports can be created in either CSV, MT940 or PDF file format.
     *
     * @tags customer-statement
     * @name DeleteCustomerStatementForUserMonetaryAccount
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/customer-statement/{itemId}
     */
    deleteCustomerStatementForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        ExportStatementDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/customer-statement/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description List all the definitions in a payment auto allocate.
     *
     * @tags definition
     * @name ListAllDefinitionForUserMonetaryAccountPaymentAutoAllocate
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/payment-auto-allocate/{payment-auto-allocateID}/definition
     */
    listAllDefinitionForUserMonetaryAccountPaymentAutoAllocate: (
      userId: number,
      monetaryAccountId: number,
      paymentAutoAllocateId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        PaymentAutoAllocateDefinitionListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment-auto-allocate/${paymentAutoAllocateId}/definition`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new DraftPayment.
     *
     * @tags draft-payment
     * @name CreateDraftPaymentForUserMonetaryAccount
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/draft-payment
     */
    createDraftPaymentForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      data: DraftPayment,
      params: RequestParams = {},
    ) =>
      this.request<
        DraftPaymentCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/draft-payment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a listing of all DraftPayments from a given MonetaryAccount.
     *
     * @tags draft-payment
     * @name ListAllDraftPaymentForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/draft-payment
     */
    listAllDraftPaymentForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        DraftPaymentListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/draft-payment`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Update a DraftPayment.
     *
     * @tags draft-payment
     * @name UpdateDraftPaymentForUserMonetaryAccount
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/draft-payment/{itemId}
     */
    updateDraftPaymentForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      data: DraftPayment,
      params: RequestParams = {},
    ) =>
      this.request<
        DraftPaymentUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/draft-payment/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a specific DraftPayment.
     *
     * @tags draft-payment
     * @name ReadDraftPaymentForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/draft-payment/{itemId}
     */
    readDraftPaymentForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        DraftPaymentRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/draft-payment/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get a specific event for a given user.
     *
     * @tags event
     * @name ReadEventForUser
     * @request GET:/user/{userID}/event/{itemId}
     */
    readEventForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        EventRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/event/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get a collection of events for a given user. You can add query the parameters monetary_account_id, status and/or display_user_event to filter the response. When monetary_account_id={id,id} is provided only events that relate to these monetary account ids are returned. When status={AWAITING_REPLY/FINALIZED} is provided the response only contains events with the status AWAITING_REPLY or FINALIZED. When display_user_event={true/false} is set to false user events are excluded from the response, when not provided user events are displayed. User events are events that are not related to a monetary account (for example: connect invites).
     *
     * @tags event
     * @name ListAllEventForUser
     * @request GET:/user/{userID}/event
     */
    listAllEventForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        EventListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/event`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new annual overview for a specific year. An overview can be generated only for a past year.
     *
     * @tags export-annual-overview
     * @name CreateExportAnnualOverviewForUser
     * @request POST:/user/{userID}/export-annual-overview
     */
    createExportAnnualOverviewForUser: (userId: number, data: ExportAnnualOverview, params: RequestParams = {}) =>
      this.request<
        ExportAnnualOverviewCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/export-annual-overview`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description List all the annual overviews for a user.
     *
     * @tags export-annual-overview
     * @name ListAllExportAnnualOverviewForUser
     * @request GET:/user/{userID}/export-annual-overview
     */
    listAllExportAnnualOverviewForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        ExportAnnualOverviewListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/export-annual-overview`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get an annual overview for a user by its id.
     *
     * @tags export-annual-overview
     * @name ReadExportAnnualOverviewForUser
     * @request GET:/user/{userID}/export-annual-overview/{itemId}
     */
    readExportAnnualOverviewForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        ExportAnnualOverviewRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/export-annual-overview/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to create new and read existing annual overviews of all the user's monetary accounts. Once created, annual overviews can be downloaded in PDF format via the 'export-annual-overview/{id}/content' endpoint.
     *
     * @tags export-annual-overview
     * @name DeleteExportAnnualOverviewForUser
     * @request DELETE:/user/{userID}/export-annual-overview/{itemId}
     */
    deleteExportAnnualOverviewForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        ExportAnnualOverviewDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/export-annual-overview/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new RIB.
     *
     * @tags export-rib
     * @name CreateExportRibForUserMonetaryAccount
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/export-rib
     */
    createExportRibForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      data: ExportRib,
      params: RequestParams = {},
    ) =>
      this.request<
        ExportRibCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/export-rib`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description List all the RIBs for a monetary account.
     *
     * @tags export-rib
     * @name ListAllExportRibForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/export-rib
     */
    listAllExportRibForUserMonetaryAccount: (userId: number, monetaryAccountId: number, params: RequestParams = {}) =>
      this.request<
        ExportRibListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/export-rib`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get a RIB for a monetary account by its id.
     *
     * @tags export-rib
     * @name ReadExportRibForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/export-rib/{itemId}
     */
    readExportRibForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        ExportRibRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/export-rib/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to create new and read existing RIBs of a monetary account
     *
     * @tags export-rib
     * @name DeleteExportRibForUserMonetaryAccount
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/export-rib/{itemId}
     */
    deleteExportRibForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        ExportRibDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/export-rib/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to create new and read existing card statement exports. Statement exports can be created in either CSV or PDF file format.
     *
     * @tags export-statement-card
     * @name ReadExportStatementCardForUserCard
     * @request GET:/user/{userID}/card/{cardID}/export-statement-card/{itemId}
     */
    readExportStatementCardForUserCard: (userId: number, cardId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        ExportStatementCardRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/card/${cardId}/export-statement-card/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to create new and read existing card statement exports. Statement exports can be created in either CSV or PDF file format.
     *
     * @tags export-statement-card
     * @name ListAllExportStatementCardForUserCard
     * @request GET:/user/{userID}/card/{cardID}/export-statement-card
     */
    listAllExportStatementCardForUserCard: (userId: number, cardId: number, params: RequestParams = {}) =>
      this.request<
        ExportStatementCardListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/card/${cardId}/export-statement-card`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to serialize ExportStatementCardCsv
     *
     * @tags export-statement-card-csv
     * @name CreateExportStatementCardCsvForUserCard
     * @request POST:/user/{userID}/card/{cardID}/export-statement-card-csv
     */
    createExportStatementCardCsvForUserCard: (
      userId: number,
      cardId: number,
      data: ExportStatementCardCsv,
      params: RequestParams = {},
    ) =>
      this.request<
        ExportStatementCardCsvCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/card/${cardId}/export-statement-card-csv`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to serialize ExportStatementCardCsv
     *
     * @tags export-statement-card-csv
     * @name ListAllExportStatementCardCsvForUserCard
     * @request GET:/user/{userID}/card/{cardID}/export-statement-card-csv
     */
    listAllExportStatementCardCsvForUserCard: (userId: number, cardId: number, params: RequestParams = {}) =>
      this.request<
        ExportStatementCardCsvListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/card/${cardId}/export-statement-card-csv`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to serialize ExportStatementCardCsv
     *
     * @tags export-statement-card-csv
     * @name ReadExportStatementCardCsvForUserCard
     * @request GET:/user/{userID}/card/{cardID}/export-statement-card-csv/{itemId}
     */
    readExportStatementCardCsvForUserCard: (
      userId: number,
      cardId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        ExportStatementCardCsvRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/card/${cardId}/export-statement-card-csv/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to serialize ExportStatementCardCsv
     *
     * @tags export-statement-card-csv
     * @name DeleteExportStatementCardCsvForUserCard
     * @request DELETE:/user/{userID}/card/{cardID}/export-statement-card-csv/{itemId}
     */
    deleteExportStatementCardCsvForUserCard: (
      userId: number,
      cardId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        ExportStatementCardCsvDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/card/${cardId}/export-statement-card-csv/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to serialize ExportStatementCardPdf
     *
     * @tags export-statement-card-pdf
     * @name CreateExportStatementCardPdfForUserCard
     * @request POST:/user/{userID}/card/{cardID}/export-statement-card-pdf
     */
    createExportStatementCardPdfForUserCard: (
      userId: number,
      cardId: number,
      data: ExportStatementCardPdf,
      params: RequestParams = {},
    ) =>
      this.request<
        ExportStatementCardPdfCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/card/${cardId}/export-statement-card-pdf`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to serialize ExportStatementCardPdf
     *
     * @tags export-statement-card-pdf
     * @name ListAllExportStatementCardPdfForUserCard
     * @request GET:/user/{userID}/card/{cardID}/export-statement-card-pdf
     */
    listAllExportStatementCardPdfForUserCard: (userId: number, cardId: number, params: RequestParams = {}) =>
      this.request<
        ExportStatementCardPdfListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/card/${cardId}/export-statement-card-pdf`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to serialize ExportStatementCardPdf
     *
     * @tags export-statement-card-pdf
     * @name ReadExportStatementCardPdfForUserCard
     * @request GET:/user/{userID}/card/{cardID}/export-statement-card-pdf/{itemId}
     */
    readExportStatementCardPdfForUserCard: (
      userId: number,
      cardId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        ExportStatementCardPdfRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/card/${cardId}/export-statement-card-pdf/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to serialize ExportStatementCardPdf
     *
     * @tags export-statement-card-pdf
     * @name DeleteExportStatementCardPdfForUserCard
     * @request DELETE:/user/{userID}/card/{cardID}/export-statement-card-pdf/{itemId}
     */
    deleteExportStatementCardPdfForUserCard: (
      userId: number,
      cardId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        ExportStatementCardPdfDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/card/${cardId}/export-statement-card-pdf/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description view for updating the feature display.
     *
     * @tags feature-announcement
     * @name ReadFeatureAnnouncementForUser
     * @request GET:/user/{userID}/feature-announcement/{itemId}
     */
    readFeatureAnnouncementForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        FeatureAnnouncementRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/feature-announcement/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Generate a new CVC2 code for a card.
     *
     * @tags generated-cvc2
     * @name CreateGeneratedCvc2ForUserCard
     * @request POST:/user/{userID}/card/{cardID}/generated-cvc2
     */
    createGeneratedCvc2ForUserCard: (
      userId: number,
      cardId: number,
      data: CardGeneratedCvc2,
      params: RequestParams = {},
    ) =>
      this.request<
        CardGeneratedCvc2Create,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/card/${cardId}/generated-cvc2`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get all generated CVC2 codes for a card.
     *
     * @tags generated-cvc2
     * @name ListAllGeneratedCvc2ForUserCard
     * @request GET:/user/{userID}/card/{cardID}/generated-cvc2
     */
    listAllGeneratedCvc2ForUserCard: (userId: number, cardId: number, params: RequestParams = {}) =>
      this.request<
        CardGeneratedCvc2Listing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/card/${cardId}/generated-cvc2`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get the details for a specific generated CVC2 code.
     *
     * @tags generated-cvc2
     * @name ReadGeneratedCvc2ForUserCard
     * @request GET:/user/{userID}/card/{cardID}/generated-cvc2/{itemId}
     */
    readGeneratedCvc2ForUserCard: (userId: number, cardId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        CardGeneratedCvc2Read,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/card/${cardId}/generated-cvc2/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for generating and retrieving a new CVC2 code.
     *
     * @tags generated-cvc2
     * @name UpdateGeneratedCvc2ForUserCard
     * @request PUT:/user/{userID}/card/{cardID}/generated-cvc2/{itemId}
     */
    updateGeneratedCvc2ForUserCard: (
      userId: number,
      cardId: number,
      itemId: number,
      data: CardGeneratedCvc2,
      params: RequestParams = {},
    ) =>
      this.request<
        CardGeneratedCvc2Update,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/card/${cardId}/generated-cvc2/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description View for requesting iDEAL transactions and polling their status.
     *
     * @tags ideal-merchant-transaction
     * @name CreateIdealMerchantTransactionForUserMonetaryAccount
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/ideal-merchant-transaction
     */
    createIdealMerchantTransactionForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      data: IdealMerchantTransaction,
      params: RequestParams = {},
    ) =>
      this.request<
        IdealMerchantTransactionCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/ideal-merchant-transaction`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description View for requesting iDEAL transactions and polling their status.
     *
     * @tags ideal-merchant-transaction
     * @name ListAllIdealMerchantTransactionForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/ideal-merchant-transaction
     */
    listAllIdealMerchantTransactionForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        IdealMerchantTransactionListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/ideal-merchant-transaction`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description View for requesting iDEAL transactions and polling their status.
     *
     * @tags ideal-merchant-transaction
     * @name ReadIdealMerchantTransactionForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/ideal-merchant-transaction/{itemId}
     */
    readIdealMerchantTransactionForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        IdealMerchantTransactionRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/ideal-merchant-transaction/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to allow users to set insight/budget preferences.
     *
     * @tags insight-preference-date
     * @name ListAllInsightPreferenceDateForUser
     * @request GET:/user/{userID}/insight-preference-date
     */
    listAllInsightPreferenceDateForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        InsightPreferenceDateListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/insight-preference-date`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to get insights about transactions between given time range.
     *
     * @tags insights
     * @name ListAllInsightsForUser
     * @request GET:/user/{userID}/insights
     */
    listAllInsightsForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        InsightListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/insights`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to get events based on time and insight category.
     *
     * @tags insights-search
     * @name ListAllInsightsSearchForUser
     * @request GET:/user/{userID}/insights-search
     */
    listAllInsightsSearchForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        InsightEventListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/insights-search`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description List all the times a users payment was automatically allocated.
     *
     * @tags instance
     * @name ListAllInstanceForUserMonetaryAccountPaymentAutoAllocate
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/payment-auto-allocate/{payment-auto-allocateID}/instance
     */
    listAllInstanceForUserMonetaryAccountPaymentAutoAllocate: (
      userId: number,
      monetaryAccountId: number,
      paymentAutoAllocateId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        PaymentAutoAllocateInstanceListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment-auto-allocate/${paymentAutoAllocateId}/instance`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description List all the times a users payment was automatically allocated.
     *
     * @tags instance
     * @name ReadInstanceForUserMonetaryAccountPaymentAutoAllocate
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/payment-auto-allocate/{payment-auto-allocateID}/instance/{itemId}
     */
    readInstanceForUserMonetaryAccountPaymentAutoAllocate: (
      userId: number,
      monetaryAccountId: number,
      paymentAutoAllocateId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        PaymentAutoAllocateInstanceRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment-auto-allocate/${paymentAutoAllocateId}/instance/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to view a bunq invoice.
     *
     * @tags invoice
     * @name ListAllInvoiceForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/invoice
     */
    listAllInvoiceForUserMonetaryAccount: (userId: number, monetaryAccountId: number, params: RequestParams = {}) =>
      this.request<
        InvoiceListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/invoice`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to view a bunq invoice.
     *
     * @tags invoice
     * @name ReadInvoiceForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/invoice/{itemId}
     */
    readInvoiceForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        InvoiceRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/invoice/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to list bunq invoices by user.
     *
     * @tags invoice
     * @name ListAllInvoiceForUser
     * @request GET:/user/{userID}/invoice
     */
    listAllInvoiceForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        InvoiceByUserListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/invoice`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to list bunq invoices by user.
     *
     * @tags invoice
     * @name ReadInvoiceForUser
     * @request GET:/user/{userID}/invoice/{itemId}
     */
    readInvoiceForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        InvoiceByUserRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/invoice/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the IPs which may be used for a credential of a user for server authentication.
     *
     * @tags ip
     * @name ReadIpForUserCredentialPasswordIp
     * @request GET:/user/{userID}/credential-password-ip/{credential-password-ipID}/ip/{itemId}
     */
    readIpForUserCredentialPasswordIp: (
      userId: number,
      credentialPasswordIpId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        PermittedIpRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/credential-password-ip/${credentialPasswordIpId}/ip/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the IPs which may be used for a credential of a user for server authentication.
     *
     * @tags ip
     * @name UpdateIpForUserCredentialPasswordIp
     * @request PUT:/user/{userID}/credential-password-ip/{credential-password-ipID}/ip/{itemId}
     */
    updateIpForUserCredentialPasswordIp: (
      userId: number,
      credentialPasswordIpId: number,
      itemId: number,
      data: PermittedIp,
      params: RequestParams = {},
    ) =>
      this.request<
        PermittedIpUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/credential-password-ip/${credentialPasswordIpId}/ip/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the IPs which may be used for a credential of a user for server authentication.
     *
     * @tags ip
     * @name CreateIpForUserCredentialPasswordIp
     * @request POST:/user/{userID}/credential-password-ip/{credential-password-ipID}/ip
     */
    createIpForUserCredentialPasswordIp: (
      userId: number,
      credentialPasswordIpId: number,
      data: PermittedIp,
      params: RequestParams = {},
    ) =>
      this.request<
        PermittedIpCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/credential-password-ip/${credentialPasswordIpId}/ip`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the IPs which may be used for a credential of a user for server authentication.
     *
     * @tags ip
     * @name ListAllIpForUserCredentialPasswordIp
     * @request GET:/user/{userID}/credential-password-ip/{credential-password-ipID}/ip
     */
    listAllIpForUserCredentialPasswordIp: (
      userId: number,
      credentialPasswordIpId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        PermittedIpListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/credential-password-ip/${credentialPasswordIpId}/ip`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for getting available legal names that can be used by the user.
     *
     * @tags legal-name
     * @name ListAllLegalNameForUser
     * @request GET:/user/{userID}/legal-name
     */
    listAllLegalNameForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        UserLegalNameListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/legal-name`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get all limits for the authenticated user.
     *
     * @tags limit
     * @name ListAllLimitForUser
     * @request GET:/user/{userID}/limit
     */
    listAllLimitForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        CustomerLimitListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/limit`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description MasterCard transaction view.
     *
     * @tags mastercard-action
     * @name ReadMastercardActionForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/mastercard-action/{itemId}
     */
    readMastercardActionForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        MasterCardActionRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/mastercard-action/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description MasterCard transaction view.
     *
     * @tags mastercard-action
     * @name ListAllMastercardActionForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/mastercard-action
     */
    listAllMastercardActionForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        MasterCardActionListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/mastercard-action`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get a specific MonetaryAccount.
     *
     * @tags monetary-account
     * @name ReadMonetaryAccountForUser
     * @request GET:/user/{userID}/monetary-account/{itemId}
     */
    readMonetaryAccountForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        MonetaryAccountRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get a collection of all your MonetaryAccounts.
     *
     * @tags monetary-account
     * @name ListAllMonetaryAccountForUser
     * @request GET:/user/{userID}/monetary-account
     */
    listAllMonetaryAccountForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        MonetaryAccountListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Create new MonetaryAccountBank.
     *
     * @tags monetary-account-bank
     * @name CreateMonetaryAccountBankForUser
     * @request POST:/user/{userID}/monetary-account-bank
     */
    createMonetaryAccountBankForUser: (userId: number, data: MonetaryAccountBank, params: RequestParams = {}) =>
      this.request<
        MonetaryAccountBankCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account-bank`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets a listing of all MonetaryAccountBanks of a given user.
     *
     * @tags monetary-account-bank
     * @name ListAllMonetaryAccountBankForUser
     * @request GET:/user/{userID}/monetary-account-bank
     */
    listAllMonetaryAccountBankForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        MonetaryAccountBankListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account-bank`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get a specific MonetaryAccountBank.
     *
     * @tags monetary-account-bank
     * @name ReadMonetaryAccountBankForUser
     * @request GET:/user/{userID}/monetary-account-bank/{itemId}
     */
    readMonetaryAccountBankForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        MonetaryAccountBankRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account-bank/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Update a specific existing MonetaryAccountBank.
     *
     * @tags monetary-account-bank
     * @name UpdateMonetaryAccountBankForUser
     * @request PUT:/user/{userID}/monetary-account-bank/{itemId}
     */
    updateMonetaryAccountBankForUser: (
      userId: number,
      itemId: number,
      data: MonetaryAccountBank,
      params: RequestParams = {},
    ) =>
      this.request<
        MonetaryAccountBankUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account-bank/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a specific MonetaryAccountCard.
     *
     * @tags monetary-account-card
     * @name ReadMonetaryAccountCardForUser
     * @request GET:/user/{userID}/monetary-account-card/{itemId}
     */
    readMonetaryAccountCardForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        MonetaryAccountCardRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account-card/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Update a specific existing MonetaryAccountCard.
     *
     * @tags monetary-account-card
     * @name UpdateMonetaryAccountCardForUser
     * @request PUT:/user/{userID}/monetary-account-card/{itemId}
     */
    updateMonetaryAccountCardForUser: (
      userId: number,
      itemId: number,
      data: MonetaryAccountCard,
      params: RequestParams = {},
    ) =>
      this.request<
        MonetaryAccountCardUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account-card/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets a listing of all MonetaryAccountCard of a given user.
     *
     * @tags monetary-account-card
     * @name ListAllMonetaryAccountCardForUser
     * @request GET:/user/{userID}/monetary-account-card
     */
    listAllMonetaryAccountCardForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        MonetaryAccountCardListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account-card`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for managing monetary accounts which are connected to external services.
     *
     * @tags monetary-account-external
     * @name CreateMonetaryAccountExternalForUser
     * @request POST:/user/{userID}/monetary-account-external
     */
    createMonetaryAccountExternalForUser: (userId: number, data: MonetaryAccountExternal, params: RequestParams = {}) =>
      this.request<
        MonetaryAccountExternalCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account-external`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for managing monetary accounts which are connected to external services.
     *
     * @tags monetary-account-external
     * @name ListAllMonetaryAccountExternalForUser
     * @request GET:/user/{userID}/monetary-account-external
     */
    listAllMonetaryAccountExternalForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        MonetaryAccountExternalListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account-external`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for managing monetary accounts which are connected to external services.
     *
     * @tags monetary-account-external
     * @name ReadMonetaryAccountExternalForUser
     * @request GET:/user/{userID}/monetary-account-external/{itemId}
     */
    readMonetaryAccountExternalForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        MonetaryAccountExternalRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account-external/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for managing monetary accounts which are connected to external services.
     *
     * @tags monetary-account-external
     * @name UpdateMonetaryAccountExternalForUser
     * @request PUT:/user/{userID}/monetary-account-external/{itemId}
     */
    updateMonetaryAccountExternalForUser: (
      userId: number,
      itemId: number,
      data: MonetaryAccountExternal,
      params: RequestParams = {},
    ) =>
      this.request<
        MonetaryAccountExternalUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account-external/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for managing monetary account savings which are connected to external services.
     *
     * @tags monetary-account-external-savings
     * @name CreateMonetaryAccountExternalSavingsForUser
     * @request POST:/user/{userID}/monetary-account-external-savings
     */
    createMonetaryAccountExternalSavingsForUser: (
      userId: number,
      data: MonetaryAccountExternalSavings,
      params: RequestParams = {},
    ) =>
      this.request<
        MonetaryAccountExternalSavingsCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account-external-savings`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for managing monetary account savings which are connected to external services.
     *
     * @tags monetary-account-external-savings
     * @name ListAllMonetaryAccountExternalSavingsForUser
     * @request GET:/user/{userID}/monetary-account-external-savings
     */
    listAllMonetaryAccountExternalSavingsForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        MonetaryAccountExternalSavingsListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account-external-savings`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for managing monetary account savings which are connected to external services.
     *
     * @tags monetary-account-external-savings
     * @name ReadMonetaryAccountExternalSavingsForUser
     * @request GET:/user/{userID}/monetary-account-external-savings/{itemId}
     */
    readMonetaryAccountExternalSavingsForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        MonetaryAccountExternalSavingsRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account-external-savings/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for managing monetary account savings which are connected to external services.
     *
     * @tags monetary-account-external-savings
     * @name UpdateMonetaryAccountExternalSavingsForUser
     * @request PUT:/user/{userID}/monetary-account-external-savings/{itemId}
     */
    updateMonetaryAccountExternalSavingsForUser: (
      userId: number,
      itemId: number,
      data: MonetaryAccountExternalSavings,
      params: RequestParams = {},
    ) =>
      this.request<
        MonetaryAccountExternalSavingsUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account-external-savings/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description The endpoint for joint monetary accounts.
     *
     * @tags monetary-account-joint
     * @name CreateMonetaryAccountJointForUser
     * @request POST:/user/{userID}/monetary-account-joint
     */
    createMonetaryAccountJointForUser: (userId: number, data: MonetaryAccountJoint, params: RequestParams = {}) =>
      this.request<
        MonetaryAccountJointCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account-joint`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description The endpoint for joint monetary accounts.
     *
     * @tags monetary-account-joint
     * @name ListAllMonetaryAccountJointForUser
     * @request GET:/user/{userID}/monetary-account-joint
     */
    listAllMonetaryAccountJointForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        MonetaryAccountJointListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account-joint`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description The endpoint for joint monetary accounts.
     *
     * @tags monetary-account-joint
     * @name ReadMonetaryAccountJointForUser
     * @request GET:/user/{userID}/monetary-account-joint/{itemId}
     */
    readMonetaryAccountJointForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        MonetaryAccountJointRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account-joint/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description The endpoint for joint monetary accounts.
     *
     * @tags monetary-account-joint
     * @name UpdateMonetaryAccountJointForUser
     * @request PUT:/user/{userID}/monetary-account-joint/{itemId}
     */
    updateMonetaryAccountJointForUser: (
      userId: number,
      itemId: number,
      data: MonetaryAccountJoint,
      params: RequestParams = {},
    ) =>
      this.request<
        MonetaryAccountJointUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account-joint/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create new MonetaryAccountSavings.
     *
     * @tags monetary-account-savings
     * @name CreateMonetaryAccountSavingsForUser
     * @request POST:/user/{userID}/monetary-account-savings
     */
    createMonetaryAccountSavingsForUser: (userId: number, data: MonetaryAccountSavings, params: RequestParams = {}) =>
      this.request<
        MonetaryAccountSavingsCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account-savings`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets a listing of all MonetaryAccountSavingss of a given user.
     *
     * @tags monetary-account-savings
     * @name ListAllMonetaryAccountSavingsForUser
     * @request GET:/user/{userID}/monetary-account-savings
     */
    listAllMonetaryAccountSavingsForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        MonetaryAccountSavingsListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account-savings`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get a specific MonetaryAccountSavings.
     *
     * @tags monetary-account-savings
     * @name ReadMonetaryAccountSavingsForUser
     * @request GET:/user/{userID}/monetary-account-savings/{itemId}
     */
    readMonetaryAccountSavingsForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        MonetaryAccountSavingsRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account-savings/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Update a specific existing MonetaryAccountSavings.
     *
     * @tags monetary-account-savings
     * @name UpdateMonetaryAccountSavingsForUser
     * @request PUT:/user/{userID}/monetary-account-savings/{itemId}
     */
    updateMonetaryAccountSavingsForUser: (
      userId: number,
      itemId: number,
      data: MonetaryAccountSavings,
      params: RequestParams = {},
    ) =>
      this.request<
        MonetaryAccountSavingsUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account-savings/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name CreateNoteAttachmentForUserMonetaryAccountAdyenCardTransaction
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/adyen-card-transaction/{adyen-card-transactionID}/note-attachment
     */
    createNoteAttachmentForUserMonetaryAccountAdyenCardTransaction: (
      userId: number,
      monetaryAccountId: number,
      adyenCardTransactionId: number,
      data: NoteAttachmentAdyenCardTransaction,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentAdyenCardTransactionCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/adyen-card-transaction/${adyenCardTransactionId}/note-attachment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name ListAllNoteAttachmentForUserMonetaryAccountAdyenCardTransaction
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/adyen-card-transaction/{adyen-card-transactionID}/note-attachment
     */
    listAllNoteAttachmentForUserMonetaryAccountAdyenCardTransaction: (
      userId: number,
      monetaryAccountId: number,
      adyenCardTransactionId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentAdyenCardTransactionListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/adyen-card-transaction/${adyenCardTransactionId}/note-attachment`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name UpdateNoteAttachmentForUserMonetaryAccountAdyenCardTransaction
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/adyen-card-transaction/{adyen-card-transactionID}/note-attachment/{itemId}
     */
    updateNoteAttachmentForUserMonetaryAccountAdyenCardTransaction: (
      userId: number,
      monetaryAccountId: number,
      adyenCardTransactionId: number,
      itemId: number,
      data: NoteAttachmentAdyenCardTransaction,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentAdyenCardTransactionUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/adyen-card-transaction/${adyenCardTransactionId}/note-attachment/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name DeleteNoteAttachmentForUserMonetaryAccountAdyenCardTransaction
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/adyen-card-transaction/{adyen-card-transactionID}/note-attachment/{itemId}
     */
    deleteNoteAttachmentForUserMonetaryAccountAdyenCardTransaction: (
      userId: number,
      monetaryAccountId: number,
      adyenCardTransactionId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentAdyenCardTransactionDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/adyen-card-transaction/${adyenCardTransactionId}/note-attachment/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name ReadNoteAttachmentForUserMonetaryAccountAdyenCardTransaction
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/adyen-card-transaction/{adyen-card-transactionID}/note-attachment/{itemId}
     */
    readNoteAttachmentForUserMonetaryAccountAdyenCardTransaction: (
      userId: number,
      monetaryAccountId: number,
      adyenCardTransactionId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentAdyenCardTransactionRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/adyen-card-transaction/${adyenCardTransactionId}/note-attachment/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name CreateNoteAttachmentForUserMonetaryAccountSwitchServicePayment
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/switch-service-payment/{switch-service-paymentID}/note-attachment
     */
    createNoteAttachmentForUserMonetaryAccountSwitchServicePayment: (
      userId: number,
      monetaryAccountId: number,
      switchServicePaymentId: number,
      data: NoteAttachmentBankSwitchServiceNetherlandsIncomingPayment,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/switch-service-payment/${switchServicePaymentId}/note-attachment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-attachment
     * @name ListAllNoteAttachmentForUserMonetaryAccountSwitchServicePayment
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/switch-service-payment/{switch-service-paymentID}/note-attachment
     */
    listAllNoteAttachmentForUserMonetaryAccountSwitchServicePayment: (
      userId: number,
      monetaryAccountId: number,
      switchServicePaymentId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/switch-service-payment/${switchServicePaymentId}/note-attachment`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name UpdateNoteAttachmentForUserMonetaryAccountSwitchServicePayment
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/switch-service-payment/{switch-service-paymentID}/note-attachment/{itemId}
     */
    updateNoteAttachmentForUserMonetaryAccountSwitchServicePayment: (
      userId: number,
      monetaryAccountId: number,
      switchServicePaymentId: number,
      itemId: number,
      data: NoteAttachmentBankSwitchServiceNetherlandsIncomingPayment,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/switch-service-payment/${switchServicePaymentId}/note-attachment/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name DeleteNoteAttachmentForUserMonetaryAccountSwitchServicePayment
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/switch-service-payment/{switch-service-paymentID}/note-attachment/{itemId}
     */
    deleteNoteAttachmentForUserMonetaryAccountSwitchServicePayment: (
      userId: number,
      monetaryAccountId: number,
      switchServicePaymentId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/switch-service-payment/${switchServicePaymentId}/note-attachment/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name ReadNoteAttachmentForUserMonetaryAccountSwitchServicePayment
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/switch-service-payment/{switch-service-paymentID}/note-attachment/{itemId}
     */
    readNoteAttachmentForUserMonetaryAccountSwitchServicePayment: (
      userId: number,
      monetaryAccountId: number,
      switchServicePaymentId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentBankSwitchServiceNetherlandsIncomingPaymentRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/switch-service-payment/${switchServicePaymentId}/note-attachment/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name CreateNoteAttachmentForUserMonetaryAccountBunqmeFundraiserResult
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/bunqme-fundraiser-result/{bunqme-fundraiser-resultID}/note-attachment
     */
    createNoteAttachmentForUserMonetaryAccountBunqmeFundraiserResult: (
      userId: number,
      monetaryAccountId: number,
      bunqmeFundraiserResultId: number,
      data: NoteAttachmentBunqMeFundraiserResult,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentBunqMeFundraiserResultCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/bunqme-fundraiser-result/${bunqmeFundraiserResultId}/note-attachment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-attachment
     * @name ListAllNoteAttachmentForUserMonetaryAccountBunqmeFundraiserResult
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/bunqme-fundraiser-result/{bunqme-fundraiser-resultID}/note-attachment
     */
    listAllNoteAttachmentForUserMonetaryAccountBunqmeFundraiserResult: (
      userId: number,
      monetaryAccountId: number,
      bunqmeFundraiserResultId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentBunqMeFundraiserResultListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/bunqme-fundraiser-result/${bunqmeFundraiserResultId}/note-attachment`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name UpdateNoteAttachmentForUserMonetaryAccountBunqmeFundraiserResult
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/bunqme-fundraiser-result/{bunqme-fundraiser-resultID}/note-attachment/{itemId}
     */
    updateNoteAttachmentForUserMonetaryAccountBunqmeFundraiserResult: (
      userId: number,
      monetaryAccountId: number,
      bunqmeFundraiserResultId: number,
      itemId: number,
      data: NoteAttachmentBunqMeFundraiserResult,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentBunqMeFundraiserResultUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/bunqme-fundraiser-result/${bunqmeFundraiserResultId}/note-attachment/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name DeleteNoteAttachmentForUserMonetaryAccountBunqmeFundraiserResult
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/bunqme-fundraiser-result/{bunqme-fundraiser-resultID}/note-attachment/{itemId}
     */
    deleteNoteAttachmentForUserMonetaryAccountBunqmeFundraiserResult: (
      userId: number,
      monetaryAccountId: number,
      bunqmeFundraiserResultId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentBunqMeFundraiserResultDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/bunqme-fundraiser-result/${bunqmeFundraiserResultId}/note-attachment/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name ReadNoteAttachmentForUserMonetaryAccountBunqmeFundraiserResult
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/bunqme-fundraiser-result/{bunqme-fundraiser-resultID}/note-attachment/{itemId}
     */
    readNoteAttachmentForUserMonetaryAccountBunqmeFundraiserResult: (
      userId: number,
      monetaryAccountId: number,
      bunqmeFundraiserResultId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentBunqMeFundraiserResultRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/bunqme-fundraiser-result/${bunqmeFundraiserResultId}/note-attachment/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name CreateNoteAttachmentForUserMonetaryAccountDraftPayment
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/draft-payment/{draft-paymentID}/note-attachment
     */
    createNoteAttachmentForUserMonetaryAccountDraftPayment: (
      userId: number,
      monetaryAccountId: number,
      draftPaymentId: number,
      data: NoteAttachmentDraftPayment,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentDraftPaymentCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/draft-payment/${draftPaymentId}/note-attachment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-attachment
     * @name ListAllNoteAttachmentForUserMonetaryAccountDraftPayment
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/draft-payment/{draft-paymentID}/note-attachment
     */
    listAllNoteAttachmentForUserMonetaryAccountDraftPayment: (
      userId: number,
      monetaryAccountId: number,
      draftPaymentId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentDraftPaymentListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/draft-payment/${draftPaymentId}/note-attachment`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name UpdateNoteAttachmentForUserMonetaryAccountDraftPayment
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/draft-payment/{draft-paymentID}/note-attachment/{itemId}
     */
    updateNoteAttachmentForUserMonetaryAccountDraftPayment: (
      userId: number,
      monetaryAccountId: number,
      draftPaymentId: number,
      itemId: number,
      data: NoteAttachmentDraftPayment,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentDraftPaymentUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/draft-payment/${draftPaymentId}/note-attachment/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name DeleteNoteAttachmentForUserMonetaryAccountDraftPayment
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/draft-payment/{draft-paymentID}/note-attachment/{itemId}
     */
    deleteNoteAttachmentForUserMonetaryAccountDraftPayment: (
      userId: number,
      monetaryAccountId: number,
      draftPaymentId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentDraftPaymentDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/draft-payment/${draftPaymentId}/note-attachment/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name ReadNoteAttachmentForUserMonetaryAccountDraftPayment
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/draft-payment/{draft-paymentID}/note-attachment/{itemId}
     */
    readNoteAttachmentForUserMonetaryAccountDraftPayment: (
      userId: number,
      monetaryAccountId: number,
      draftPaymentId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentDraftPaymentRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/draft-payment/${draftPaymentId}/note-attachment/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name CreateNoteAttachmentForUserMonetaryAccountIdealMerchantTransaction
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/ideal-merchant-transaction/{ideal-merchant-transactionID}/note-attachment
     */
    createNoteAttachmentForUserMonetaryAccountIdealMerchantTransaction: (
      userId: number,
      monetaryAccountId: number,
      idealMerchantTransactionId: number,
      data: NoteAttachmentIdealMerchantTransaction,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentIdealMerchantTransactionCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/ideal-merchant-transaction/${idealMerchantTransactionId}/note-attachment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-attachment
     * @name ListAllNoteAttachmentForUserMonetaryAccountIdealMerchantTransaction
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/ideal-merchant-transaction/{ideal-merchant-transactionID}/note-attachment
     */
    listAllNoteAttachmentForUserMonetaryAccountIdealMerchantTransaction: (
      userId: number,
      monetaryAccountId: number,
      idealMerchantTransactionId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentIdealMerchantTransactionListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/ideal-merchant-transaction/${idealMerchantTransactionId}/note-attachment`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name UpdateNoteAttachmentForUserMonetaryAccountIdealMerchantTransaction
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/ideal-merchant-transaction/{ideal-merchant-transactionID}/note-attachment/{itemId}
     */
    updateNoteAttachmentForUserMonetaryAccountIdealMerchantTransaction: (
      userId: number,
      monetaryAccountId: number,
      idealMerchantTransactionId: number,
      itemId: number,
      data: NoteAttachmentIdealMerchantTransaction,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentIdealMerchantTransactionUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/ideal-merchant-transaction/${idealMerchantTransactionId}/note-attachment/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name DeleteNoteAttachmentForUserMonetaryAccountIdealMerchantTransaction
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/ideal-merchant-transaction/{ideal-merchant-transactionID}/note-attachment/{itemId}
     */
    deleteNoteAttachmentForUserMonetaryAccountIdealMerchantTransaction: (
      userId: number,
      monetaryAccountId: number,
      idealMerchantTransactionId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentIdealMerchantTransactionDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/ideal-merchant-transaction/${idealMerchantTransactionId}/note-attachment/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name ReadNoteAttachmentForUserMonetaryAccountIdealMerchantTransaction
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/ideal-merchant-transaction/{ideal-merchant-transactionID}/note-attachment/{itemId}
     */
    readNoteAttachmentForUserMonetaryAccountIdealMerchantTransaction: (
      userId: number,
      monetaryAccountId: number,
      idealMerchantTransactionId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentIdealMerchantTransactionRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/ideal-merchant-transaction/${idealMerchantTransactionId}/note-attachment/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name CreateNoteAttachmentForUserMonetaryAccountMastercardAction
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/mastercard-action/{mastercard-actionID}/note-attachment
     */
    createNoteAttachmentForUserMonetaryAccountMastercardAction: (
      userId: number,
      monetaryAccountId: number,
      mastercardActionId: number,
      data: NoteAttachmentMasterCardAction,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentMasterCardActionCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/mastercard-action/${mastercardActionId}/note-attachment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-attachment
     * @name ListAllNoteAttachmentForUserMonetaryAccountMastercardAction
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/mastercard-action/{mastercard-actionID}/note-attachment
     */
    listAllNoteAttachmentForUserMonetaryAccountMastercardAction: (
      userId: number,
      monetaryAccountId: number,
      mastercardActionId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentMasterCardActionListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/mastercard-action/${mastercardActionId}/note-attachment`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name UpdateNoteAttachmentForUserMonetaryAccountMastercardAction
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/mastercard-action/{mastercard-actionID}/note-attachment/{itemId}
     */
    updateNoteAttachmentForUserMonetaryAccountMastercardAction: (
      userId: number,
      monetaryAccountId: number,
      mastercardActionId: number,
      itemId: number,
      data: NoteAttachmentMasterCardAction,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentMasterCardActionUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/mastercard-action/${mastercardActionId}/note-attachment/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name DeleteNoteAttachmentForUserMonetaryAccountMastercardAction
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/mastercard-action/{mastercard-actionID}/note-attachment/{itemId}
     */
    deleteNoteAttachmentForUserMonetaryAccountMastercardAction: (
      userId: number,
      monetaryAccountId: number,
      mastercardActionId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentMasterCardActionDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/mastercard-action/${mastercardActionId}/note-attachment/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name ReadNoteAttachmentForUserMonetaryAccountMastercardAction
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/mastercard-action/{mastercard-actionID}/note-attachment/{itemId}
     */
    readNoteAttachmentForUserMonetaryAccountMastercardAction: (
      userId: number,
      monetaryAccountId: number,
      mastercardActionId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentMasterCardActionRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/mastercard-action/${mastercardActionId}/note-attachment/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name CreateNoteAttachmentForUserMonetaryAccountPaymentBatch
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/payment-batch/{payment-batchID}/note-attachment
     */
    createNoteAttachmentForUserMonetaryAccountPaymentBatch: (
      userId: number,
      monetaryAccountId: number,
      paymentBatchId: number,
      data: NoteAttachmentPaymentBatch,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentPaymentBatchCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment-batch/${paymentBatchId}/note-attachment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-attachment
     * @name ListAllNoteAttachmentForUserMonetaryAccountPaymentBatch
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/payment-batch/{payment-batchID}/note-attachment
     */
    listAllNoteAttachmentForUserMonetaryAccountPaymentBatch: (
      userId: number,
      monetaryAccountId: number,
      paymentBatchId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentPaymentBatchListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment-batch/${paymentBatchId}/note-attachment`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name UpdateNoteAttachmentForUserMonetaryAccountPaymentBatch
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/payment-batch/{payment-batchID}/note-attachment/{itemId}
     */
    updateNoteAttachmentForUserMonetaryAccountPaymentBatch: (
      userId: number,
      monetaryAccountId: number,
      paymentBatchId: number,
      itemId: number,
      data: NoteAttachmentPaymentBatch,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentPaymentBatchUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment-batch/${paymentBatchId}/note-attachment/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name DeleteNoteAttachmentForUserMonetaryAccountPaymentBatch
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/payment-batch/{payment-batchID}/note-attachment/{itemId}
     */
    deleteNoteAttachmentForUserMonetaryAccountPaymentBatch: (
      userId: number,
      monetaryAccountId: number,
      paymentBatchId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentPaymentBatchDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment-batch/${paymentBatchId}/note-attachment/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name ReadNoteAttachmentForUserMonetaryAccountPaymentBatch
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/payment-batch/{payment-batchID}/note-attachment/{itemId}
     */
    readNoteAttachmentForUserMonetaryAccountPaymentBatch: (
      userId: number,
      monetaryAccountId: number,
      paymentBatchId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentPaymentBatchRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment-batch/${paymentBatchId}/note-attachment/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name CreateNoteAttachmentForUserMonetaryAccountPayment
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/payment/{paymentID}/note-attachment
     */
    createNoteAttachmentForUserMonetaryAccountPayment: (
      userId: number,
      monetaryAccountId: number,
      paymentId: number,
      data: NoteAttachmentPayment,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentPaymentCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment/${paymentId}/note-attachment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-attachment
     * @name ListAllNoteAttachmentForUserMonetaryAccountPayment
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/payment/{paymentID}/note-attachment
     */
    listAllNoteAttachmentForUserMonetaryAccountPayment: (
      userId: number,
      monetaryAccountId: number,
      paymentId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentPaymentListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment/${paymentId}/note-attachment`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name UpdateNoteAttachmentForUserMonetaryAccountPayment
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/payment/{paymentID}/note-attachment/{itemId}
     */
    updateNoteAttachmentForUserMonetaryAccountPayment: (
      userId: number,
      monetaryAccountId: number,
      paymentId: number,
      itemId: number,
      data: NoteAttachmentPayment,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentPaymentUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment/${paymentId}/note-attachment/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name DeleteNoteAttachmentForUserMonetaryAccountPayment
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/payment/{paymentID}/note-attachment/{itemId}
     */
    deleteNoteAttachmentForUserMonetaryAccountPayment: (
      userId: number,
      monetaryAccountId: number,
      paymentId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentPaymentDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment/${paymentId}/note-attachment/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name ReadNoteAttachmentForUserMonetaryAccountPayment
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/payment/{paymentID}/note-attachment/{itemId}
     */
    readNoteAttachmentForUserMonetaryAccountPayment: (
      userId: number,
      monetaryAccountId: number,
      paymentId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentPaymentRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment/${paymentId}/note-attachment/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name CreateNoteAttachmentForUserMonetaryAccountRequestInquiryBatch
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry-batch/{request-inquiry-batchID}/note-attachment
     */
    createNoteAttachmentForUserMonetaryAccountRequestInquiryBatch: (
      userId: number,
      monetaryAccountId: number,
      requestInquiryBatchId: number,
      data: NoteAttachmentRequestInquiryBatch,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentRequestInquiryBatchCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry-batch/${requestInquiryBatchId}/note-attachment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-attachment
     * @name ListAllNoteAttachmentForUserMonetaryAccountRequestInquiryBatch
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry-batch/{request-inquiry-batchID}/note-attachment
     */
    listAllNoteAttachmentForUserMonetaryAccountRequestInquiryBatch: (
      userId: number,
      monetaryAccountId: number,
      requestInquiryBatchId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentRequestInquiryBatchListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry-batch/${requestInquiryBatchId}/note-attachment`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name UpdateNoteAttachmentForUserMonetaryAccountRequestInquiryBatch
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry-batch/{request-inquiry-batchID}/note-attachment/{itemId}
     */
    updateNoteAttachmentForUserMonetaryAccountRequestInquiryBatch: (
      userId: number,
      monetaryAccountId: number,
      requestInquiryBatchId: number,
      itemId: number,
      data: NoteAttachmentRequestInquiryBatch,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentRequestInquiryBatchUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry-batch/${requestInquiryBatchId}/note-attachment/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name DeleteNoteAttachmentForUserMonetaryAccountRequestInquiryBatch
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry-batch/{request-inquiry-batchID}/note-attachment/{itemId}
     */
    deleteNoteAttachmentForUserMonetaryAccountRequestInquiryBatch: (
      userId: number,
      monetaryAccountId: number,
      requestInquiryBatchId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentRequestInquiryBatchDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry-batch/${requestInquiryBatchId}/note-attachment/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name ReadNoteAttachmentForUserMonetaryAccountRequestInquiryBatch
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry-batch/{request-inquiry-batchID}/note-attachment/{itemId}
     */
    readNoteAttachmentForUserMonetaryAccountRequestInquiryBatch: (
      userId: number,
      monetaryAccountId: number,
      requestInquiryBatchId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentRequestInquiryBatchRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry-batch/${requestInquiryBatchId}/note-attachment/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name CreateNoteAttachmentForUserMonetaryAccountRequestInquiry
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry/{request-inquiryID}/note-attachment
     */
    createNoteAttachmentForUserMonetaryAccountRequestInquiry: (
      userId: number,
      monetaryAccountId: number,
      requestInquiryId: number,
      data: NoteAttachmentRequestInquiry,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentRequestInquiryCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry/${requestInquiryId}/note-attachment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-attachment
     * @name ListAllNoteAttachmentForUserMonetaryAccountRequestInquiry
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry/{request-inquiryID}/note-attachment
     */
    listAllNoteAttachmentForUserMonetaryAccountRequestInquiry: (
      userId: number,
      monetaryAccountId: number,
      requestInquiryId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentRequestInquiryListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry/${requestInquiryId}/note-attachment`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name UpdateNoteAttachmentForUserMonetaryAccountRequestInquiry
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry/{request-inquiryID}/note-attachment/{itemId}
     */
    updateNoteAttachmentForUserMonetaryAccountRequestInquiry: (
      userId: number,
      monetaryAccountId: number,
      requestInquiryId: number,
      itemId: number,
      data: NoteAttachmentRequestInquiry,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentRequestInquiryUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry/${requestInquiryId}/note-attachment/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name DeleteNoteAttachmentForUserMonetaryAccountRequestInquiry
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry/{request-inquiryID}/note-attachment/{itemId}
     */
    deleteNoteAttachmentForUserMonetaryAccountRequestInquiry: (
      userId: number,
      monetaryAccountId: number,
      requestInquiryId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentRequestInquiryDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry/${requestInquiryId}/note-attachment/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name ReadNoteAttachmentForUserMonetaryAccountRequestInquiry
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry/{request-inquiryID}/note-attachment/{itemId}
     */
    readNoteAttachmentForUserMonetaryAccountRequestInquiry: (
      userId: number,
      monetaryAccountId: number,
      requestInquiryId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentRequestInquiryRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry/${requestInquiryId}/note-attachment/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name CreateNoteAttachmentForUserMonetaryAccountRequestResponse
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/request-response/{request-responseID}/note-attachment
     */
    createNoteAttachmentForUserMonetaryAccountRequestResponse: (
      userId: number,
      monetaryAccountId: number,
      requestResponseId: number,
      data: NoteAttachmentRequestResponse,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentRequestResponseCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-response/${requestResponseId}/note-attachment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-attachment
     * @name ListAllNoteAttachmentForUserMonetaryAccountRequestResponse
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/request-response/{request-responseID}/note-attachment
     */
    listAllNoteAttachmentForUserMonetaryAccountRequestResponse: (
      userId: number,
      monetaryAccountId: number,
      requestResponseId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentRequestResponseListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-response/${requestResponseId}/note-attachment`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name UpdateNoteAttachmentForUserMonetaryAccountRequestResponse
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/request-response/{request-responseID}/note-attachment/{itemId}
     */
    updateNoteAttachmentForUserMonetaryAccountRequestResponse: (
      userId: number,
      monetaryAccountId: number,
      requestResponseId: number,
      itemId: number,
      data: NoteAttachmentRequestResponse,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentRequestResponseUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-response/${requestResponseId}/note-attachment/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name DeleteNoteAttachmentForUserMonetaryAccountRequestResponse
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/request-response/{request-responseID}/note-attachment/{itemId}
     */
    deleteNoteAttachmentForUserMonetaryAccountRequestResponse: (
      userId: number,
      monetaryAccountId: number,
      requestResponseId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentRequestResponseDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-response/${requestResponseId}/note-attachment/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name ReadNoteAttachmentForUserMonetaryAccountRequestResponse
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/request-response/{request-responseID}/note-attachment/{itemId}
     */
    readNoteAttachmentForUserMonetaryAccountRequestResponse: (
      userId: number,
      monetaryAccountId: number,
      requestResponseId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentRequestResponseRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-response/${requestResponseId}/note-attachment/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name CreateNoteAttachmentForUserMonetaryAccountScheduleScheduleInstance
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/schedule/{scheduleID}/schedule-instance/{schedule-instanceID}/note-attachment
     */
    createNoteAttachmentForUserMonetaryAccountScheduleScheduleInstance: (
      userId: number,
      monetaryAccountId: number,
      scheduleId: number,
      scheduleInstanceId: number,
      data: NoteAttachmentScheduleInstance,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentScheduleInstanceCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule/${scheduleId}/schedule-instance/${scheduleInstanceId}/note-attachment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-attachment
     * @name ListAllNoteAttachmentForUserMonetaryAccountScheduleScheduleInstance
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/schedule/{scheduleID}/schedule-instance/{schedule-instanceID}/note-attachment
     */
    listAllNoteAttachmentForUserMonetaryAccountScheduleScheduleInstance: (
      userId: number,
      monetaryAccountId: number,
      scheduleId: number,
      scheduleInstanceId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentScheduleInstanceListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule/${scheduleId}/schedule-instance/${scheduleInstanceId}/note-attachment`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name UpdateNoteAttachmentForUserMonetaryAccountScheduleScheduleInstance
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/schedule/{scheduleID}/schedule-instance/{schedule-instanceID}/note-attachment/{itemId}
     */
    updateNoteAttachmentForUserMonetaryAccountScheduleScheduleInstance: (
      userId: number,
      monetaryAccountId: number,
      scheduleId: number,
      scheduleInstanceId: number,
      itemId: number,
      data: NoteAttachmentScheduleInstance,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentScheduleInstanceUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule/${scheduleId}/schedule-instance/${scheduleInstanceId}/note-attachment/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name DeleteNoteAttachmentForUserMonetaryAccountScheduleScheduleInstance
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/schedule/{scheduleID}/schedule-instance/{schedule-instanceID}/note-attachment/{itemId}
     */
    deleteNoteAttachmentForUserMonetaryAccountScheduleScheduleInstance: (
      userId: number,
      monetaryAccountId: number,
      scheduleId: number,
      scheduleInstanceId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentScheduleInstanceDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule/${scheduleId}/schedule-instance/${scheduleInstanceId}/note-attachment/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name ReadNoteAttachmentForUserMonetaryAccountScheduleScheduleInstance
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/schedule/{scheduleID}/schedule-instance/{schedule-instanceID}/note-attachment/{itemId}
     */
    readNoteAttachmentForUserMonetaryAccountScheduleScheduleInstance: (
      userId: number,
      monetaryAccountId: number,
      scheduleId: number,
      scheduleInstanceId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentScheduleInstanceRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule/${scheduleId}/schedule-instance/${scheduleInstanceId}/note-attachment/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name CreateNoteAttachmentForUserMonetaryAccountSchedulePaymentBatch
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment-batch/{schedule-payment-batchID}/note-attachment
     */
    createNoteAttachmentForUserMonetaryAccountSchedulePaymentBatch: (
      userId: number,
      monetaryAccountId: number,
      schedulePaymentBatchId: number,
      data: NoteAttachmentSchedulePaymentBatch,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentSchedulePaymentBatchCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment-batch/${schedulePaymentBatchId}/note-attachment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-attachment
     * @name ListAllNoteAttachmentForUserMonetaryAccountSchedulePaymentBatch
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment-batch/{schedule-payment-batchID}/note-attachment
     */
    listAllNoteAttachmentForUserMonetaryAccountSchedulePaymentBatch: (
      userId: number,
      monetaryAccountId: number,
      schedulePaymentBatchId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentSchedulePaymentBatchListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment-batch/${schedulePaymentBatchId}/note-attachment`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name UpdateNoteAttachmentForUserMonetaryAccountSchedulePaymentBatch
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment-batch/{schedule-payment-batchID}/note-attachment/{itemId}
     */
    updateNoteAttachmentForUserMonetaryAccountSchedulePaymentBatch: (
      userId: number,
      monetaryAccountId: number,
      schedulePaymentBatchId: number,
      itemId: number,
      data: NoteAttachmentSchedulePaymentBatch,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentSchedulePaymentBatchUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment-batch/${schedulePaymentBatchId}/note-attachment/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name DeleteNoteAttachmentForUserMonetaryAccountSchedulePaymentBatch
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment-batch/{schedule-payment-batchID}/note-attachment/{itemId}
     */
    deleteNoteAttachmentForUserMonetaryAccountSchedulePaymentBatch: (
      userId: number,
      monetaryAccountId: number,
      schedulePaymentBatchId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentSchedulePaymentBatchDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment-batch/${schedulePaymentBatchId}/note-attachment/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name ReadNoteAttachmentForUserMonetaryAccountSchedulePaymentBatch
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment-batch/{schedule-payment-batchID}/note-attachment/{itemId}
     */
    readNoteAttachmentForUserMonetaryAccountSchedulePaymentBatch: (
      userId: number,
      monetaryAccountId: number,
      schedulePaymentBatchId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentSchedulePaymentBatchRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment-batch/${schedulePaymentBatchId}/note-attachment/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name CreateNoteAttachmentForUserMonetaryAccountSchedulePayment
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment/{schedule-paymentID}/note-attachment
     */
    createNoteAttachmentForUserMonetaryAccountSchedulePayment: (
      userId: number,
      monetaryAccountId: number,
      schedulePaymentId: number,
      data: NoteAttachmentSchedulePayment,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentSchedulePaymentCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment/${schedulePaymentId}/note-attachment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-attachment
     * @name ListAllNoteAttachmentForUserMonetaryAccountSchedulePayment
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment/{schedule-paymentID}/note-attachment
     */
    listAllNoteAttachmentForUserMonetaryAccountSchedulePayment: (
      userId: number,
      monetaryAccountId: number,
      schedulePaymentId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentSchedulePaymentListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment/${schedulePaymentId}/note-attachment`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name UpdateNoteAttachmentForUserMonetaryAccountSchedulePayment
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment/{schedule-paymentID}/note-attachment/{itemId}
     */
    updateNoteAttachmentForUserMonetaryAccountSchedulePayment: (
      userId: number,
      monetaryAccountId: number,
      schedulePaymentId: number,
      itemId: number,
      data: NoteAttachmentSchedulePayment,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentSchedulePaymentUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment/${schedulePaymentId}/note-attachment/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name DeleteNoteAttachmentForUserMonetaryAccountSchedulePayment
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment/{schedule-paymentID}/note-attachment/{itemId}
     */
    deleteNoteAttachmentForUserMonetaryAccountSchedulePayment: (
      userId: number,
      monetaryAccountId: number,
      schedulePaymentId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentSchedulePaymentDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment/${schedulePaymentId}/note-attachment/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name ReadNoteAttachmentForUserMonetaryAccountSchedulePayment
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment/{schedule-paymentID}/note-attachment/{itemId}
     */
    readNoteAttachmentForUserMonetaryAccountSchedulePayment: (
      userId: number,
      monetaryAccountId: number,
      schedulePaymentId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentSchedulePaymentRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment/${schedulePaymentId}/note-attachment/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name CreateNoteAttachmentForUserMonetaryAccountSofortMerchantTransaction
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/sofort-merchant-transaction/{sofort-merchant-transactionID}/note-attachment
     */
    createNoteAttachmentForUserMonetaryAccountSofortMerchantTransaction: (
      userId: number,
      monetaryAccountId: number,
      sofortMerchantTransactionId: number,
      data: NoteAttachmentSofortMerchantTransaction,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentSofortMerchantTransactionCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/sofort-merchant-transaction/${sofortMerchantTransactionId}/note-attachment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-attachment
     * @name ListAllNoteAttachmentForUserMonetaryAccountSofortMerchantTransaction
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/sofort-merchant-transaction/{sofort-merchant-transactionID}/note-attachment
     */
    listAllNoteAttachmentForUserMonetaryAccountSofortMerchantTransaction: (
      userId: number,
      monetaryAccountId: number,
      sofortMerchantTransactionId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentSofortMerchantTransactionListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/sofort-merchant-transaction/${sofortMerchantTransactionId}/note-attachment`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name UpdateNoteAttachmentForUserMonetaryAccountSofortMerchantTransaction
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/sofort-merchant-transaction/{sofort-merchant-transactionID}/note-attachment/{itemId}
     */
    updateNoteAttachmentForUserMonetaryAccountSofortMerchantTransaction: (
      userId: number,
      monetaryAccountId: number,
      sofortMerchantTransactionId: number,
      itemId: number,
      data: NoteAttachmentSofortMerchantTransaction,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentSofortMerchantTransactionUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/sofort-merchant-transaction/${sofortMerchantTransactionId}/note-attachment/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name DeleteNoteAttachmentForUserMonetaryAccountSofortMerchantTransaction
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/sofort-merchant-transaction/{sofort-merchant-transactionID}/note-attachment/{itemId}
     */
    deleteNoteAttachmentForUserMonetaryAccountSofortMerchantTransaction: (
      userId: number,
      monetaryAccountId: number,
      sofortMerchantTransactionId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentSofortMerchantTransactionDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/sofort-merchant-transaction/${sofortMerchantTransactionId}/note-attachment/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name ReadNoteAttachmentForUserMonetaryAccountSofortMerchantTransaction
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/sofort-merchant-transaction/{sofort-merchant-transactionID}/note-attachment/{itemId}
     */
    readNoteAttachmentForUserMonetaryAccountSofortMerchantTransaction: (
      userId: number,
      monetaryAccountId: number,
      sofortMerchantTransactionId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentSofortMerchantTransactionRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/sofort-merchant-transaction/${sofortMerchantTransactionId}/note-attachment/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name CreateNoteAttachmentForUserMonetaryAccountWhitelistWhitelistResult
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/whitelist/{whitelistID}/whitelist-result/{whitelist-resultID}/note-attachment
     */
    createNoteAttachmentForUserMonetaryAccountWhitelistWhitelistResult: (
      userId: number,
      monetaryAccountId: number,
      whitelistId: number,
      whitelistResultId: number,
      data: NoteAttachmentWhitelistResult,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentWhitelistResultCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/whitelist/${whitelistId}/whitelist-result/${whitelistResultId}/note-attachment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-attachment
     * @name ListAllNoteAttachmentForUserMonetaryAccountWhitelistWhitelistResult
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/whitelist/{whitelistID}/whitelist-result/{whitelist-resultID}/note-attachment
     */
    listAllNoteAttachmentForUserMonetaryAccountWhitelistWhitelistResult: (
      userId: number,
      monetaryAccountId: number,
      whitelistId: number,
      whitelistResultId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentWhitelistResultListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/whitelist/${whitelistId}/whitelist-result/${whitelistResultId}/note-attachment`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name UpdateNoteAttachmentForUserMonetaryAccountWhitelistWhitelistResult
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/whitelist/{whitelistID}/whitelist-result/{whitelist-resultID}/note-attachment/{itemId}
     */
    updateNoteAttachmentForUserMonetaryAccountWhitelistWhitelistResult: (
      userId: number,
      monetaryAccountId: number,
      whitelistId: number,
      whitelistResultId: number,
      itemId: number,
      data: NoteAttachmentWhitelistResult,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentWhitelistResultUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/whitelist/${whitelistId}/whitelist-result/${whitelistResultId}/note-attachment/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name DeleteNoteAttachmentForUserMonetaryAccountWhitelistWhitelistResult
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/whitelist/{whitelistID}/whitelist-result/{whitelist-resultID}/note-attachment/{itemId}
     */
    deleteNoteAttachmentForUserMonetaryAccountWhitelistWhitelistResult: (
      userId: number,
      monetaryAccountId: number,
      whitelistId: number,
      whitelistResultId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentWhitelistResultDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/whitelist/${whitelistId}/whitelist-result/${whitelistResultId}/note-attachment/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage attachment notes.
     *
     * @tags note-attachment
     * @name ReadNoteAttachmentForUserMonetaryAccountWhitelistWhitelistResult
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/whitelist/{whitelistID}/whitelist-result/{whitelist-resultID}/note-attachment/{itemId}
     */
    readNoteAttachmentForUserMonetaryAccountWhitelistWhitelistResult: (
      userId: number,
      monetaryAccountId: number,
      whitelistId: number,
      whitelistResultId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteAttachmentWhitelistResultRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/whitelist/${whitelistId}/whitelist-result/${whitelistResultId}/note-attachment/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name CreateNoteTextForUserMonetaryAccountAdyenCardTransaction
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/adyen-card-transaction/{adyen-card-transactionID}/note-text
     */
    createNoteTextForUserMonetaryAccountAdyenCardTransaction: (
      userId: number,
      monetaryAccountId: number,
      adyenCardTransactionId: number,
      data: NoteTextAdyenCardTransaction,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextAdyenCardTransactionCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/adyen-card-transaction/${adyenCardTransactionId}/note-text`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name ListAllNoteTextForUserMonetaryAccountAdyenCardTransaction
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/adyen-card-transaction/{adyen-card-transactionID}/note-text
     */
    listAllNoteTextForUserMonetaryAccountAdyenCardTransaction: (
      userId: number,
      monetaryAccountId: number,
      adyenCardTransactionId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextAdyenCardTransactionListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/adyen-card-transaction/${adyenCardTransactionId}/note-text`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name UpdateNoteTextForUserMonetaryAccountAdyenCardTransaction
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/adyen-card-transaction/{adyen-card-transactionID}/note-text/{itemId}
     */
    updateNoteTextForUserMonetaryAccountAdyenCardTransaction: (
      userId: number,
      monetaryAccountId: number,
      adyenCardTransactionId: number,
      itemId: number,
      data: NoteTextAdyenCardTransaction,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextAdyenCardTransactionUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/adyen-card-transaction/${adyenCardTransactionId}/note-text/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name DeleteNoteTextForUserMonetaryAccountAdyenCardTransaction
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/adyen-card-transaction/{adyen-card-transactionID}/note-text/{itemId}
     */
    deleteNoteTextForUserMonetaryAccountAdyenCardTransaction: (
      userId: number,
      monetaryAccountId: number,
      adyenCardTransactionId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextAdyenCardTransactionDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/adyen-card-transaction/${adyenCardTransactionId}/note-text/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name ReadNoteTextForUserMonetaryAccountAdyenCardTransaction
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/adyen-card-transaction/{adyen-card-transactionID}/note-text/{itemId}
     */
    readNoteTextForUserMonetaryAccountAdyenCardTransaction: (
      userId: number,
      monetaryAccountId: number,
      adyenCardTransactionId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextAdyenCardTransactionRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/adyen-card-transaction/${adyenCardTransactionId}/note-text/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name CreateNoteTextForUserMonetaryAccountSwitchServicePayment
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/switch-service-payment/{switch-service-paymentID}/note-text
     */
    createNoteTextForUserMonetaryAccountSwitchServicePayment: (
      userId: number,
      monetaryAccountId: number,
      switchServicePaymentId: number,
      data: NoteTextBankSwitchServiceNetherlandsIncomingPayment,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextBankSwitchServiceNetherlandsIncomingPaymentCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/switch-service-payment/${switchServicePaymentId}/note-text`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-text
     * @name ListAllNoteTextForUserMonetaryAccountSwitchServicePayment
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/switch-service-payment/{switch-service-paymentID}/note-text
     */
    listAllNoteTextForUserMonetaryAccountSwitchServicePayment: (
      userId: number,
      monetaryAccountId: number,
      switchServicePaymentId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextBankSwitchServiceNetherlandsIncomingPaymentListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/switch-service-payment/${switchServicePaymentId}/note-text`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name UpdateNoteTextForUserMonetaryAccountSwitchServicePayment
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/switch-service-payment/{switch-service-paymentID}/note-text/{itemId}
     */
    updateNoteTextForUserMonetaryAccountSwitchServicePayment: (
      userId: number,
      monetaryAccountId: number,
      switchServicePaymentId: number,
      itemId: number,
      data: NoteTextBankSwitchServiceNetherlandsIncomingPayment,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextBankSwitchServiceNetherlandsIncomingPaymentUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/switch-service-payment/${switchServicePaymentId}/note-text/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name DeleteNoteTextForUserMonetaryAccountSwitchServicePayment
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/switch-service-payment/{switch-service-paymentID}/note-text/{itemId}
     */
    deleteNoteTextForUserMonetaryAccountSwitchServicePayment: (
      userId: number,
      monetaryAccountId: number,
      switchServicePaymentId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextBankSwitchServiceNetherlandsIncomingPaymentDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/switch-service-payment/${switchServicePaymentId}/note-text/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name ReadNoteTextForUserMonetaryAccountSwitchServicePayment
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/switch-service-payment/{switch-service-paymentID}/note-text/{itemId}
     */
    readNoteTextForUserMonetaryAccountSwitchServicePayment: (
      userId: number,
      monetaryAccountId: number,
      switchServicePaymentId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextBankSwitchServiceNetherlandsIncomingPaymentRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/switch-service-payment/${switchServicePaymentId}/note-text/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name CreateNoteTextForUserMonetaryAccountBunqmeFundraiserResult
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/bunqme-fundraiser-result/{bunqme-fundraiser-resultID}/note-text
     */
    createNoteTextForUserMonetaryAccountBunqmeFundraiserResult: (
      userId: number,
      monetaryAccountId: number,
      bunqmeFundraiserResultId: number,
      data: NoteTextBunqMeFundraiserResult,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextBunqMeFundraiserResultCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/bunqme-fundraiser-result/${bunqmeFundraiserResultId}/note-text`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-text
     * @name ListAllNoteTextForUserMonetaryAccountBunqmeFundraiserResult
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/bunqme-fundraiser-result/{bunqme-fundraiser-resultID}/note-text
     */
    listAllNoteTextForUserMonetaryAccountBunqmeFundraiserResult: (
      userId: number,
      monetaryAccountId: number,
      bunqmeFundraiserResultId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextBunqMeFundraiserResultListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/bunqme-fundraiser-result/${bunqmeFundraiserResultId}/note-text`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name UpdateNoteTextForUserMonetaryAccountBunqmeFundraiserResult
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/bunqme-fundraiser-result/{bunqme-fundraiser-resultID}/note-text/{itemId}
     */
    updateNoteTextForUserMonetaryAccountBunqmeFundraiserResult: (
      userId: number,
      monetaryAccountId: number,
      bunqmeFundraiserResultId: number,
      itemId: number,
      data: NoteTextBunqMeFundraiserResult,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextBunqMeFundraiserResultUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/bunqme-fundraiser-result/${bunqmeFundraiserResultId}/note-text/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name DeleteNoteTextForUserMonetaryAccountBunqmeFundraiserResult
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/bunqme-fundraiser-result/{bunqme-fundraiser-resultID}/note-text/{itemId}
     */
    deleteNoteTextForUserMonetaryAccountBunqmeFundraiserResult: (
      userId: number,
      monetaryAccountId: number,
      bunqmeFundraiserResultId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextBunqMeFundraiserResultDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/bunqme-fundraiser-result/${bunqmeFundraiserResultId}/note-text/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name ReadNoteTextForUserMonetaryAccountBunqmeFundraiserResult
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/bunqme-fundraiser-result/{bunqme-fundraiser-resultID}/note-text/{itemId}
     */
    readNoteTextForUserMonetaryAccountBunqmeFundraiserResult: (
      userId: number,
      monetaryAccountId: number,
      bunqmeFundraiserResultId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextBunqMeFundraiserResultRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/bunqme-fundraiser-result/${bunqmeFundraiserResultId}/note-text/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name CreateNoteTextForUserMonetaryAccountDraftPayment
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/draft-payment/{draft-paymentID}/note-text
     */
    createNoteTextForUserMonetaryAccountDraftPayment: (
      userId: number,
      monetaryAccountId: number,
      draftPaymentId: number,
      data: NoteTextDraftPayment,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextDraftPaymentCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/draft-payment/${draftPaymentId}/note-text`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-text
     * @name ListAllNoteTextForUserMonetaryAccountDraftPayment
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/draft-payment/{draft-paymentID}/note-text
     */
    listAllNoteTextForUserMonetaryAccountDraftPayment: (
      userId: number,
      monetaryAccountId: number,
      draftPaymentId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextDraftPaymentListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/draft-payment/${draftPaymentId}/note-text`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name UpdateNoteTextForUserMonetaryAccountDraftPayment
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/draft-payment/{draft-paymentID}/note-text/{itemId}
     */
    updateNoteTextForUserMonetaryAccountDraftPayment: (
      userId: number,
      monetaryAccountId: number,
      draftPaymentId: number,
      itemId: number,
      data: NoteTextDraftPayment,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextDraftPaymentUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/draft-payment/${draftPaymentId}/note-text/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name DeleteNoteTextForUserMonetaryAccountDraftPayment
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/draft-payment/{draft-paymentID}/note-text/{itemId}
     */
    deleteNoteTextForUserMonetaryAccountDraftPayment: (
      userId: number,
      monetaryAccountId: number,
      draftPaymentId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextDraftPaymentDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/draft-payment/${draftPaymentId}/note-text/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name ReadNoteTextForUserMonetaryAccountDraftPayment
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/draft-payment/{draft-paymentID}/note-text/{itemId}
     */
    readNoteTextForUserMonetaryAccountDraftPayment: (
      userId: number,
      monetaryAccountId: number,
      draftPaymentId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextDraftPaymentRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/draft-payment/${draftPaymentId}/note-text/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name CreateNoteTextForUserMonetaryAccountIdealMerchantTransaction
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/ideal-merchant-transaction/{ideal-merchant-transactionID}/note-text
     */
    createNoteTextForUserMonetaryAccountIdealMerchantTransaction: (
      userId: number,
      monetaryAccountId: number,
      idealMerchantTransactionId: number,
      data: NoteTextIdealMerchantTransaction,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextIdealMerchantTransactionCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/ideal-merchant-transaction/${idealMerchantTransactionId}/note-text`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-text
     * @name ListAllNoteTextForUserMonetaryAccountIdealMerchantTransaction
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/ideal-merchant-transaction/{ideal-merchant-transactionID}/note-text
     */
    listAllNoteTextForUserMonetaryAccountIdealMerchantTransaction: (
      userId: number,
      monetaryAccountId: number,
      idealMerchantTransactionId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextIdealMerchantTransactionListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/ideal-merchant-transaction/${idealMerchantTransactionId}/note-text`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name UpdateNoteTextForUserMonetaryAccountIdealMerchantTransaction
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/ideal-merchant-transaction/{ideal-merchant-transactionID}/note-text/{itemId}
     */
    updateNoteTextForUserMonetaryAccountIdealMerchantTransaction: (
      userId: number,
      monetaryAccountId: number,
      idealMerchantTransactionId: number,
      itemId: number,
      data: NoteTextIdealMerchantTransaction,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextIdealMerchantTransactionUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/ideal-merchant-transaction/${idealMerchantTransactionId}/note-text/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name DeleteNoteTextForUserMonetaryAccountIdealMerchantTransaction
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/ideal-merchant-transaction/{ideal-merchant-transactionID}/note-text/{itemId}
     */
    deleteNoteTextForUserMonetaryAccountIdealMerchantTransaction: (
      userId: number,
      monetaryAccountId: number,
      idealMerchantTransactionId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextIdealMerchantTransactionDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/ideal-merchant-transaction/${idealMerchantTransactionId}/note-text/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name ReadNoteTextForUserMonetaryAccountIdealMerchantTransaction
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/ideal-merchant-transaction/{ideal-merchant-transactionID}/note-text/{itemId}
     */
    readNoteTextForUserMonetaryAccountIdealMerchantTransaction: (
      userId: number,
      monetaryAccountId: number,
      idealMerchantTransactionId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextIdealMerchantTransactionRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/ideal-merchant-transaction/${idealMerchantTransactionId}/note-text/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name CreateNoteTextForUserMonetaryAccountMastercardAction
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/mastercard-action/{mastercard-actionID}/note-text
     */
    createNoteTextForUserMonetaryAccountMastercardAction: (
      userId: number,
      monetaryAccountId: number,
      mastercardActionId: number,
      data: NoteTextMasterCardAction,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextMasterCardActionCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/mastercard-action/${mastercardActionId}/note-text`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-text
     * @name ListAllNoteTextForUserMonetaryAccountMastercardAction
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/mastercard-action/{mastercard-actionID}/note-text
     */
    listAllNoteTextForUserMonetaryAccountMastercardAction: (
      userId: number,
      monetaryAccountId: number,
      mastercardActionId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextMasterCardActionListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/mastercard-action/${mastercardActionId}/note-text`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name UpdateNoteTextForUserMonetaryAccountMastercardAction
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/mastercard-action/{mastercard-actionID}/note-text/{itemId}
     */
    updateNoteTextForUserMonetaryAccountMastercardAction: (
      userId: number,
      monetaryAccountId: number,
      mastercardActionId: number,
      itemId: number,
      data: NoteTextMasterCardAction,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextMasterCardActionUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/mastercard-action/${mastercardActionId}/note-text/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name DeleteNoteTextForUserMonetaryAccountMastercardAction
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/mastercard-action/{mastercard-actionID}/note-text/{itemId}
     */
    deleteNoteTextForUserMonetaryAccountMastercardAction: (
      userId: number,
      monetaryAccountId: number,
      mastercardActionId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextMasterCardActionDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/mastercard-action/${mastercardActionId}/note-text/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name ReadNoteTextForUserMonetaryAccountMastercardAction
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/mastercard-action/{mastercard-actionID}/note-text/{itemId}
     */
    readNoteTextForUserMonetaryAccountMastercardAction: (
      userId: number,
      monetaryAccountId: number,
      mastercardActionId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextMasterCardActionRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/mastercard-action/${mastercardActionId}/note-text/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name CreateNoteTextForUserMonetaryAccountPaymentBatch
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/payment-batch/{payment-batchID}/note-text
     */
    createNoteTextForUserMonetaryAccountPaymentBatch: (
      userId: number,
      monetaryAccountId: number,
      paymentBatchId: number,
      data: NoteTextPaymentBatch,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextPaymentBatchCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment-batch/${paymentBatchId}/note-text`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-text
     * @name ListAllNoteTextForUserMonetaryAccountPaymentBatch
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/payment-batch/{payment-batchID}/note-text
     */
    listAllNoteTextForUserMonetaryAccountPaymentBatch: (
      userId: number,
      monetaryAccountId: number,
      paymentBatchId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextPaymentBatchListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment-batch/${paymentBatchId}/note-text`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name UpdateNoteTextForUserMonetaryAccountPaymentBatch
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/payment-batch/{payment-batchID}/note-text/{itemId}
     */
    updateNoteTextForUserMonetaryAccountPaymentBatch: (
      userId: number,
      monetaryAccountId: number,
      paymentBatchId: number,
      itemId: number,
      data: NoteTextPaymentBatch,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextPaymentBatchUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment-batch/${paymentBatchId}/note-text/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name DeleteNoteTextForUserMonetaryAccountPaymentBatch
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/payment-batch/{payment-batchID}/note-text/{itemId}
     */
    deleteNoteTextForUserMonetaryAccountPaymentBatch: (
      userId: number,
      monetaryAccountId: number,
      paymentBatchId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextPaymentBatchDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment-batch/${paymentBatchId}/note-text/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name ReadNoteTextForUserMonetaryAccountPaymentBatch
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/payment-batch/{payment-batchID}/note-text/{itemId}
     */
    readNoteTextForUserMonetaryAccountPaymentBatch: (
      userId: number,
      monetaryAccountId: number,
      paymentBatchId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextPaymentBatchRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment-batch/${paymentBatchId}/note-text/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name CreateNoteTextForUserMonetaryAccountPayment
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/payment/{paymentID}/note-text
     */
    createNoteTextForUserMonetaryAccountPayment: (
      userId: number,
      monetaryAccountId: number,
      paymentId: number,
      data: NoteTextPayment,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextPaymentCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment/${paymentId}/note-text`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-text
     * @name ListAllNoteTextForUserMonetaryAccountPayment
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/payment/{paymentID}/note-text
     */
    listAllNoteTextForUserMonetaryAccountPayment: (
      userId: number,
      monetaryAccountId: number,
      paymentId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextPaymentListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment/${paymentId}/note-text`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name UpdateNoteTextForUserMonetaryAccountPayment
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/payment/{paymentID}/note-text/{itemId}
     */
    updateNoteTextForUserMonetaryAccountPayment: (
      userId: number,
      monetaryAccountId: number,
      paymentId: number,
      itemId: number,
      data: NoteTextPayment,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextPaymentUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment/${paymentId}/note-text/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name DeleteNoteTextForUserMonetaryAccountPayment
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/payment/{paymentID}/note-text/{itemId}
     */
    deleteNoteTextForUserMonetaryAccountPayment: (
      userId: number,
      monetaryAccountId: number,
      paymentId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextPaymentDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment/${paymentId}/note-text/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name ReadNoteTextForUserMonetaryAccountPayment
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/payment/{paymentID}/note-text/{itemId}
     */
    readNoteTextForUserMonetaryAccountPayment: (
      userId: number,
      monetaryAccountId: number,
      paymentId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextPaymentRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment/${paymentId}/note-text/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name CreateNoteTextForUserMonetaryAccountRequestInquiryBatch
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry-batch/{request-inquiry-batchID}/note-text
     */
    createNoteTextForUserMonetaryAccountRequestInquiryBatch: (
      userId: number,
      monetaryAccountId: number,
      requestInquiryBatchId: number,
      data: NoteTextRequestInquiryBatch,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextRequestInquiryBatchCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry-batch/${requestInquiryBatchId}/note-text`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-text
     * @name ListAllNoteTextForUserMonetaryAccountRequestInquiryBatch
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry-batch/{request-inquiry-batchID}/note-text
     */
    listAllNoteTextForUserMonetaryAccountRequestInquiryBatch: (
      userId: number,
      monetaryAccountId: number,
      requestInquiryBatchId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextRequestInquiryBatchListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry-batch/${requestInquiryBatchId}/note-text`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name UpdateNoteTextForUserMonetaryAccountRequestInquiryBatch
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry-batch/{request-inquiry-batchID}/note-text/{itemId}
     */
    updateNoteTextForUserMonetaryAccountRequestInquiryBatch: (
      userId: number,
      monetaryAccountId: number,
      requestInquiryBatchId: number,
      itemId: number,
      data: NoteTextRequestInquiryBatch,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextRequestInquiryBatchUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry-batch/${requestInquiryBatchId}/note-text/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name DeleteNoteTextForUserMonetaryAccountRequestInquiryBatch
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry-batch/{request-inquiry-batchID}/note-text/{itemId}
     */
    deleteNoteTextForUserMonetaryAccountRequestInquiryBatch: (
      userId: number,
      monetaryAccountId: number,
      requestInquiryBatchId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextRequestInquiryBatchDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry-batch/${requestInquiryBatchId}/note-text/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name ReadNoteTextForUserMonetaryAccountRequestInquiryBatch
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry-batch/{request-inquiry-batchID}/note-text/{itemId}
     */
    readNoteTextForUserMonetaryAccountRequestInquiryBatch: (
      userId: number,
      monetaryAccountId: number,
      requestInquiryBatchId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextRequestInquiryBatchRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry-batch/${requestInquiryBatchId}/note-text/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name CreateNoteTextForUserMonetaryAccountRequestInquiry
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry/{request-inquiryID}/note-text
     */
    createNoteTextForUserMonetaryAccountRequestInquiry: (
      userId: number,
      monetaryAccountId: number,
      requestInquiryId: number,
      data: NoteTextRequestInquiry,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextRequestInquiryCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry/${requestInquiryId}/note-text`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-text
     * @name ListAllNoteTextForUserMonetaryAccountRequestInquiry
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry/{request-inquiryID}/note-text
     */
    listAllNoteTextForUserMonetaryAccountRequestInquiry: (
      userId: number,
      monetaryAccountId: number,
      requestInquiryId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextRequestInquiryListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry/${requestInquiryId}/note-text`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name UpdateNoteTextForUserMonetaryAccountRequestInquiry
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry/{request-inquiryID}/note-text/{itemId}
     */
    updateNoteTextForUserMonetaryAccountRequestInquiry: (
      userId: number,
      monetaryAccountId: number,
      requestInquiryId: number,
      itemId: number,
      data: NoteTextRequestInquiry,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextRequestInquiryUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry/${requestInquiryId}/note-text/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name DeleteNoteTextForUserMonetaryAccountRequestInquiry
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry/{request-inquiryID}/note-text/{itemId}
     */
    deleteNoteTextForUserMonetaryAccountRequestInquiry: (
      userId: number,
      monetaryAccountId: number,
      requestInquiryId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextRequestInquiryDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry/${requestInquiryId}/note-text/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name ReadNoteTextForUserMonetaryAccountRequestInquiry
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry/{request-inquiryID}/note-text/{itemId}
     */
    readNoteTextForUserMonetaryAccountRequestInquiry: (
      userId: number,
      monetaryAccountId: number,
      requestInquiryId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextRequestInquiryRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry/${requestInquiryId}/note-text/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name CreateNoteTextForUserMonetaryAccountRequestResponse
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/request-response/{request-responseID}/note-text
     */
    createNoteTextForUserMonetaryAccountRequestResponse: (
      userId: number,
      monetaryAccountId: number,
      requestResponseId: number,
      data: NoteTextRequestResponse,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextRequestResponseCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-response/${requestResponseId}/note-text`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-text
     * @name ListAllNoteTextForUserMonetaryAccountRequestResponse
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/request-response/{request-responseID}/note-text
     */
    listAllNoteTextForUserMonetaryAccountRequestResponse: (
      userId: number,
      monetaryAccountId: number,
      requestResponseId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextRequestResponseListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-response/${requestResponseId}/note-text`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name UpdateNoteTextForUserMonetaryAccountRequestResponse
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/request-response/{request-responseID}/note-text/{itemId}
     */
    updateNoteTextForUserMonetaryAccountRequestResponse: (
      userId: number,
      monetaryAccountId: number,
      requestResponseId: number,
      itemId: number,
      data: NoteTextRequestResponse,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextRequestResponseUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-response/${requestResponseId}/note-text/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name DeleteNoteTextForUserMonetaryAccountRequestResponse
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/request-response/{request-responseID}/note-text/{itemId}
     */
    deleteNoteTextForUserMonetaryAccountRequestResponse: (
      userId: number,
      monetaryAccountId: number,
      requestResponseId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextRequestResponseDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-response/${requestResponseId}/note-text/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name ReadNoteTextForUserMonetaryAccountRequestResponse
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/request-response/{request-responseID}/note-text/{itemId}
     */
    readNoteTextForUserMonetaryAccountRequestResponse: (
      userId: number,
      monetaryAccountId: number,
      requestResponseId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextRequestResponseRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-response/${requestResponseId}/note-text/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name CreateNoteTextForUserMonetaryAccountScheduleScheduleInstance
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/schedule/{scheduleID}/schedule-instance/{schedule-instanceID}/note-text
     */
    createNoteTextForUserMonetaryAccountScheduleScheduleInstance: (
      userId: number,
      monetaryAccountId: number,
      scheduleId: number,
      scheduleInstanceId: number,
      data: NoteTextScheduleInstance,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextScheduleInstanceCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule/${scheduleId}/schedule-instance/${scheduleInstanceId}/note-text`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-text
     * @name ListAllNoteTextForUserMonetaryAccountScheduleScheduleInstance
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/schedule/{scheduleID}/schedule-instance/{schedule-instanceID}/note-text
     */
    listAllNoteTextForUserMonetaryAccountScheduleScheduleInstance: (
      userId: number,
      monetaryAccountId: number,
      scheduleId: number,
      scheduleInstanceId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextScheduleInstanceListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule/${scheduleId}/schedule-instance/${scheduleInstanceId}/note-text`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name UpdateNoteTextForUserMonetaryAccountScheduleScheduleInstance
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/schedule/{scheduleID}/schedule-instance/{schedule-instanceID}/note-text/{itemId}
     */
    updateNoteTextForUserMonetaryAccountScheduleScheduleInstance: (
      userId: number,
      monetaryAccountId: number,
      scheduleId: number,
      scheduleInstanceId: number,
      itemId: number,
      data: NoteTextScheduleInstance,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextScheduleInstanceUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule/${scheduleId}/schedule-instance/${scheduleInstanceId}/note-text/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name DeleteNoteTextForUserMonetaryAccountScheduleScheduleInstance
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/schedule/{scheduleID}/schedule-instance/{schedule-instanceID}/note-text/{itemId}
     */
    deleteNoteTextForUserMonetaryAccountScheduleScheduleInstance: (
      userId: number,
      monetaryAccountId: number,
      scheduleId: number,
      scheduleInstanceId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextScheduleInstanceDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule/${scheduleId}/schedule-instance/${scheduleInstanceId}/note-text/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name ReadNoteTextForUserMonetaryAccountScheduleScheduleInstance
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/schedule/{scheduleID}/schedule-instance/{schedule-instanceID}/note-text/{itemId}
     */
    readNoteTextForUserMonetaryAccountScheduleScheduleInstance: (
      userId: number,
      monetaryAccountId: number,
      scheduleId: number,
      scheduleInstanceId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextScheduleInstanceRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule/${scheduleId}/schedule-instance/${scheduleInstanceId}/note-text/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name CreateNoteTextForUserMonetaryAccountSchedulePaymentBatch
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment-batch/{schedule-payment-batchID}/note-text
     */
    createNoteTextForUserMonetaryAccountSchedulePaymentBatch: (
      userId: number,
      monetaryAccountId: number,
      schedulePaymentBatchId: number,
      data: NoteTextSchedulePaymentBatch,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextSchedulePaymentBatchCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment-batch/${schedulePaymentBatchId}/note-text`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-text
     * @name ListAllNoteTextForUserMonetaryAccountSchedulePaymentBatch
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment-batch/{schedule-payment-batchID}/note-text
     */
    listAllNoteTextForUserMonetaryAccountSchedulePaymentBatch: (
      userId: number,
      monetaryAccountId: number,
      schedulePaymentBatchId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextSchedulePaymentBatchListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment-batch/${schedulePaymentBatchId}/note-text`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name UpdateNoteTextForUserMonetaryAccountSchedulePaymentBatch
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment-batch/{schedule-payment-batchID}/note-text/{itemId}
     */
    updateNoteTextForUserMonetaryAccountSchedulePaymentBatch: (
      userId: number,
      monetaryAccountId: number,
      schedulePaymentBatchId: number,
      itemId: number,
      data: NoteTextSchedulePaymentBatch,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextSchedulePaymentBatchUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment-batch/${schedulePaymentBatchId}/note-text/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name DeleteNoteTextForUserMonetaryAccountSchedulePaymentBatch
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment-batch/{schedule-payment-batchID}/note-text/{itemId}
     */
    deleteNoteTextForUserMonetaryAccountSchedulePaymentBatch: (
      userId: number,
      monetaryAccountId: number,
      schedulePaymentBatchId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextSchedulePaymentBatchDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment-batch/${schedulePaymentBatchId}/note-text/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name ReadNoteTextForUserMonetaryAccountSchedulePaymentBatch
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment-batch/{schedule-payment-batchID}/note-text/{itemId}
     */
    readNoteTextForUserMonetaryAccountSchedulePaymentBatch: (
      userId: number,
      monetaryAccountId: number,
      schedulePaymentBatchId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextSchedulePaymentBatchRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment-batch/${schedulePaymentBatchId}/note-text/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name CreateNoteTextForUserMonetaryAccountSchedulePayment
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment/{schedule-paymentID}/note-text
     */
    createNoteTextForUserMonetaryAccountSchedulePayment: (
      userId: number,
      monetaryAccountId: number,
      schedulePaymentId: number,
      data: NoteTextSchedulePayment,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextSchedulePaymentCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment/${schedulePaymentId}/note-text`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-text
     * @name ListAllNoteTextForUserMonetaryAccountSchedulePayment
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment/{schedule-paymentID}/note-text
     */
    listAllNoteTextForUserMonetaryAccountSchedulePayment: (
      userId: number,
      monetaryAccountId: number,
      schedulePaymentId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextSchedulePaymentListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment/${schedulePaymentId}/note-text`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name UpdateNoteTextForUserMonetaryAccountSchedulePayment
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment/{schedule-paymentID}/note-text/{itemId}
     */
    updateNoteTextForUserMonetaryAccountSchedulePayment: (
      userId: number,
      monetaryAccountId: number,
      schedulePaymentId: number,
      itemId: number,
      data: NoteTextSchedulePayment,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextSchedulePaymentUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment/${schedulePaymentId}/note-text/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name DeleteNoteTextForUserMonetaryAccountSchedulePayment
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment/{schedule-paymentID}/note-text/{itemId}
     */
    deleteNoteTextForUserMonetaryAccountSchedulePayment: (
      userId: number,
      monetaryAccountId: number,
      schedulePaymentId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextSchedulePaymentDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment/${schedulePaymentId}/note-text/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name ReadNoteTextForUserMonetaryAccountSchedulePayment
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment/{schedule-paymentID}/note-text/{itemId}
     */
    readNoteTextForUserMonetaryAccountSchedulePayment: (
      userId: number,
      monetaryAccountId: number,
      schedulePaymentId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextSchedulePaymentRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment/${schedulePaymentId}/note-text/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name CreateNoteTextForUserMonetaryAccountSofortMerchantTransaction
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/sofort-merchant-transaction/{sofort-merchant-transactionID}/note-text
     */
    createNoteTextForUserMonetaryAccountSofortMerchantTransaction: (
      userId: number,
      monetaryAccountId: number,
      sofortMerchantTransactionId: number,
      data: NoteTextSofortMerchantTransaction,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextSofortMerchantTransactionCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/sofort-merchant-transaction/${sofortMerchantTransactionId}/note-text`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-text
     * @name ListAllNoteTextForUserMonetaryAccountSofortMerchantTransaction
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/sofort-merchant-transaction/{sofort-merchant-transactionID}/note-text
     */
    listAllNoteTextForUserMonetaryAccountSofortMerchantTransaction: (
      userId: number,
      monetaryAccountId: number,
      sofortMerchantTransactionId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextSofortMerchantTransactionListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/sofort-merchant-transaction/${sofortMerchantTransactionId}/note-text`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name UpdateNoteTextForUserMonetaryAccountSofortMerchantTransaction
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/sofort-merchant-transaction/{sofort-merchant-transactionID}/note-text/{itemId}
     */
    updateNoteTextForUserMonetaryAccountSofortMerchantTransaction: (
      userId: number,
      monetaryAccountId: number,
      sofortMerchantTransactionId: number,
      itemId: number,
      data: NoteTextSofortMerchantTransaction,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextSofortMerchantTransactionUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/sofort-merchant-transaction/${sofortMerchantTransactionId}/note-text/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name DeleteNoteTextForUserMonetaryAccountSofortMerchantTransaction
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/sofort-merchant-transaction/{sofort-merchant-transactionID}/note-text/{itemId}
     */
    deleteNoteTextForUserMonetaryAccountSofortMerchantTransaction: (
      userId: number,
      monetaryAccountId: number,
      sofortMerchantTransactionId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextSofortMerchantTransactionDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/sofort-merchant-transaction/${sofortMerchantTransactionId}/note-text/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name ReadNoteTextForUserMonetaryAccountSofortMerchantTransaction
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/sofort-merchant-transaction/{sofort-merchant-transactionID}/note-text/{itemId}
     */
    readNoteTextForUserMonetaryAccountSofortMerchantTransaction: (
      userId: number,
      monetaryAccountId: number,
      sofortMerchantTransactionId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextSofortMerchantTransactionRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/sofort-merchant-transaction/${sofortMerchantTransactionId}/note-text/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name CreateNoteTextForUserMonetaryAccountWhitelistWhitelistResult
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/whitelist/{whitelistID}/whitelist-result/{whitelist-resultID}/note-text
     */
    createNoteTextForUserMonetaryAccountWhitelistWhitelistResult: (
      userId: number,
      monetaryAccountId: number,
      whitelistId: number,
      whitelistResultId: number,
      data: NoteTextWhitelistResult,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextWhitelistResultCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/whitelist/${whitelistId}/whitelist-result/${whitelistResultId}/note-text`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the notes for a given user.
     *
     * @tags note-text
     * @name ListAllNoteTextForUserMonetaryAccountWhitelistWhitelistResult
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/whitelist/{whitelistID}/whitelist-result/{whitelist-resultID}/note-text
     */
    listAllNoteTextForUserMonetaryAccountWhitelistWhitelistResult: (
      userId: number,
      monetaryAccountId: number,
      whitelistId: number,
      whitelistResultId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextWhitelistResultListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/whitelist/${whitelistId}/whitelist-result/${whitelistResultId}/note-text`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name UpdateNoteTextForUserMonetaryAccountWhitelistWhitelistResult
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/whitelist/{whitelistID}/whitelist-result/{whitelist-resultID}/note-text/{itemId}
     */
    updateNoteTextForUserMonetaryAccountWhitelistWhitelistResult: (
      userId: number,
      monetaryAccountId: number,
      whitelistId: number,
      whitelistResultId: number,
      itemId: number,
      data: NoteTextWhitelistResult,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextWhitelistResultUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/whitelist/${whitelistId}/whitelist-result/${whitelistResultId}/note-text/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name DeleteNoteTextForUserMonetaryAccountWhitelistWhitelistResult
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/whitelist/{whitelistID}/whitelist-result/{whitelist-resultID}/note-text/{itemId}
     */
    deleteNoteTextForUserMonetaryAccountWhitelistWhitelistResult: (
      userId: number,
      monetaryAccountId: number,
      whitelistId: number,
      whitelistResultId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextWhitelistResultDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/whitelist/${whitelistId}/whitelist-result/${whitelistResultId}/note-text/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage text notes.
     *
     * @tags note-text
     * @name ReadNoteTextForUserMonetaryAccountWhitelistWhitelistResult
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/whitelist/{whitelistID}/whitelist-result/{whitelist-resultID}/note-text/{itemId}
     */
    readNoteTextForUserMonetaryAccountWhitelistWhitelistResult: (
      userId: number,
      monetaryAccountId: number,
      whitelistId: number,
      whitelistResultId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NoteTextWhitelistResultRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/whitelist/${whitelistId}/whitelist-result/${whitelistResultId}/note-text/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the email notification filters for a user.
     *
     * @tags notification-filter-email
     * @name CreateNotificationFilterEmailForUser
     * @request POST:/user/{userID}/notification-filter-email
     */
    createNotificationFilterEmailForUser: (userId: number, data: NotificationFilterEmail, params: RequestParams = {}) =>
      this.request<
        NotificationFilterEmailCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/notification-filter-email`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the email notification filters for a user.
     *
     * @tags notification-filter-email
     * @name ListAllNotificationFilterEmailForUser
     * @request GET:/user/{userID}/notification-filter-email
     */
    listAllNotificationFilterEmailForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        NotificationFilterEmailListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/notification-filter-email`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the url notification filters for a user.
     *
     * @tags notification-filter-failure
     * @name CreateNotificationFilterFailureForUser
     * @request POST:/user/{userID}/notification-filter-failure
     */
    createNotificationFilterFailureForUser: (
      userId: number,
      data: NotificationFilterFailure,
      params: RequestParams = {},
    ) =>
      this.request<
        NotificationFilterFailureCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/notification-filter-failure`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the url notification filters for a user.
     *
     * @tags notification-filter-failure
     * @name ListAllNotificationFilterFailureForUser
     * @request GET:/user/{userID}/notification-filter-failure
     */
    listAllNotificationFilterFailureForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        NotificationFilterFailureListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/notification-filter-failure`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the push notification filters for a user.
     *
     * @tags notification-filter-push
     * @name CreateNotificationFilterPushForUser
     * @request POST:/user/{userID}/notification-filter-push
     */
    createNotificationFilterPushForUser: (userId: number, data: NotificationFilterPush, params: RequestParams = {}) =>
      this.request<
        NotificationFilterPushCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/notification-filter-push`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the push notification filters for a user.
     *
     * @tags notification-filter-push
     * @name ListAllNotificationFilterPushForUser
     * @request GET:/user/{userID}/notification-filter-push
     */
    listAllNotificationFilterPushForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        NotificationFilterPushListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/notification-filter-push`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the url notification filters for a user.
     *
     * @tags notification-filter-url
     * @name CreateNotificationFilterUrlForUser
     * @request POST:/user/{userID}/notification-filter-url
     */
    createNotificationFilterUrlForUser: (userId: number, data: NotificationFilterUrl, params: RequestParams = {}) =>
      this.request<
        NotificationFilterUrlCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/notification-filter-url`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the url notification filters for a user.
     *
     * @tags notification-filter-url
     * @name ListAllNotificationFilterUrlForUser
     * @request GET:/user/{userID}/notification-filter-url
     */
    listAllNotificationFilterUrlForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        NotificationFilterUrlListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/notification-filter-url`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the url notification filters for a user.
     *
     * @tags notification-filter-url
     * @name CreateNotificationFilterUrlForUserMonetaryAccount
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/notification-filter-url
     */
    createNotificationFilterUrlForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      data: NotificationFilterUrlMonetaryAccount,
      params: RequestParams = {},
    ) =>
      this.request<
        NotificationFilterUrlMonetaryAccountCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/notification-filter-url`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the url notification filters for a user.
     *
     * @tags notification-filter-url
     * @name ListAllNotificationFilterUrlForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/notification-filter-url
     */
    listAllNotificationFilterUrlForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        NotificationFilterUrlMonetaryAccountListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/notification-filter-url`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used for managing OAuth Clients.
     *
     * @tags oauth-client
     * @name ReadOauthClientForUser
     * @request GET:/user/{userID}/oauth-client/{itemId}
     */
    readOauthClientForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        OauthClientRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/oauth-client/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used for managing OAuth Clients.
     *
     * @tags oauth-client
     * @name UpdateOauthClientForUser
     * @request PUT:/user/{userID}/oauth-client/{itemId}
     */
    updateOauthClientForUser: (userId: number, itemId: number, data: OauthClient, params: RequestParams = {}) =>
      this.request<
        OauthClientUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/oauth-client/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used for managing OAuth Clients.
     *
     * @tags oauth-client
     * @name CreateOauthClientForUser
     * @request POST:/user/{userID}/oauth-client
     */
    createOauthClientForUser: (userId: number, data: OauthClient, params: RequestParams = {}) =>
      this.request<
        OauthClientCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/oauth-client`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used for managing OAuth Clients.
     *
     * @tags oauth-client
     * @name ListAllOauthClientForUser
     * @request GET:/user/{userID}/oauth-client
     */
    listAllOauthClientForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        OauthClientListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/oauth-client`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new Payment.
     *
     * @tags payment
     * @name CreatePaymentForUserMonetaryAccount
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/payment
     */
    createPaymentForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      data: Payment,
      params: RequestParams = {},
    ) =>
      this.request<
        PaymentCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a listing of all Payments performed on a given MonetaryAccount (incoming and outgoing).
     *
     * @tags payment
     * @name ListAllPaymentForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/payment
     */
    listAllPaymentForUserMonetaryAccount: (userId: number, monetaryAccountId: number, params: RequestParams = {}) =>
      this.request<
        PaymentListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get a specific previous Payment.
     *
     * @tags payment
     * @name ReadPaymentForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/payment/{itemId}
     */
    readPaymentForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        PaymentRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description MasterCard transaction view.
     *
     * @tags payment
     * @name ListAllPaymentForUserMonetaryAccountMastercardAction
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/mastercard-action/{mastercard-actionID}/payment
     */
    listAllPaymentForUserMonetaryAccountMastercardAction: (
      userId: number,
      monetaryAccountId: number,
      mastercardActionId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        MasterCardPaymentListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/mastercard-action/${mastercardActionId}/payment`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Manage a users automatic payment auto allocated settings.
     *
     * @tags payment-auto-allocate
     * @name CreatePaymentAutoAllocateForUserMonetaryAccount
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/payment-auto-allocate
     */
    createPaymentAutoAllocateForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      data: PaymentAutoAllocate,
      params: RequestParams = {},
    ) =>
      this.request<
        PaymentAutoAllocateCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment-auto-allocate`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage a users automatic payment auto allocated settings.
     *
     * @tags payment-auto-allocate
     * @name ListAllPaymentAutoAllocateForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/payment-auto-allocate
     */
    listAllPaymentAutoAllocateForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        PaymentAutoAllocateListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment-auto-allocate`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Manage a users automatic payment auto allocated settings.
     *
     * @tags payment-auto-allocate
     * @name ReadPaymentAutoAllocateForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/payment-auto-allocate/{itemId}
     */
    readPaymentAutoAllocateForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        PaymentAutoAllocateRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment-auto-allocate/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Manage a users automatic payment auto allocated settings.
     *
     * @tags payment-auto-allocate
     * @name UpdatePaymentAutoAllocateForUserMonetaryAccount
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/payment-auto-allocate/{itemId}
     */
    updatePaymentAutoAllocateForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      data: PaymentAutoAllocate,
      params: RequestParams = {},
    ) =>
      this.request<
        PaymentAutoAllocateUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment-auto-allocate/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage a users automatic payment auto allocated settings.
     *
     * @tags payment-auto-allocate
     * @name DeletePaymentAutoAllocateForUserMonetaryAccount
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/payment-auto-allocate/{itemId}
     */
    deletePaymentAutoAllocateForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        PaymentAutoAllocateDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment-auto-allocate/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description List a users automatic payment auto allocated settings.
     *
     * @tags payment-auto-allocate
     * @name ListAllPaymentAutoAllocateForUser
     * @request GET:/user/{userID}/payment-auto-allocate
     */
    listAllPaymentAutoAllocateForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        PaymentAutoAllocateUserListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/payment-auto-allocate`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Create a payment batch by sending an array of single payment objects, that will become part of the batch.
     *
     * @tags payment-batch
     * @name CreatePaymentBatchForUserMonetaryAccount
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/payment-batch
     */
    createPaymentBatchForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      data: PaymentBatch,
      params: RequestParams = {},
    ) =>
      this.request<
        PaymentBatchCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment-batch`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Return all the payment batches for a monetary account.
     *
     * @tags payment-batch
     * @name ListAllPaymentBatchForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/payment-batch
     */
    listAllPaymentBatchForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        PaymentBatchListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment-batch`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Revoke a bunq.to payment batch. The status of all the payments will be set to REVOKED.
     *
     * @tags payment-batch
     * @name UpdatePaymentBatchForUserMonetaryAccount
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/payment-batch/{itemId}
     */
    updatePaymentBatchForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      data: PaymentBatch,
      params: RequestParams = {},
    ) =>
      this.request<
        PaymentBatchUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment-batch/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Return the details of a specific payment batch.
     *
     * @tags payment-batch
     * @name ReadPaymentBatchForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/payment-batch/{itemId}
     */
    readPaymentBatchForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        PaymentBatchRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/payment-batch/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the PaymentServiceProviderDraftPayment's for a PISP.
     *
     * @tags payment-service-provider-draft-payment
     * @name CreatePaymentServiceProviderDraftPaymentForUser
     * @request POST:/user/{userID}/payment-service-provider-draft-payment
     */
    createPaymentServiceProviderDraftPaymentForUser: (
      userId: number,
      data: PaymentServiceProviderDraftPayment,
      params: RequestParams = {},
    ) =>
      this.request<
        PaymentServiceProviderDraftPaymentCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/payment-service-provider-draft-payment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the PaymentServiceProviderDraftPayment's for a PISP.
     *
     * @tags payment-service-provider-draft-payment
     * @name ListAllPaymentServiceProviderDraftPaymentForUser
     * @request GET:/user/{userID}/payment-service-provider-draft-payment
     */
    listAllPaymentServiceProviderDraftPaymentForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        PaymentServiceProviderDraftPaymentListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/payment-service-provider-draft-payment`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the PaymentServiceProviderDraftPayment's for a PISP.
     *
     * @tags payment-service-provider-draft-payment
     * @name UpdatePaymentServiceProviderDraftPaymentForUser
     * @request PUT:/user/{userID}/payment-service-provider-draft-payment/{itemId}
     */
    updatePaymentServiceProviderDraftPaymentForUser: (
      userId: number,
      itemId: number,
      data: PaymentServiceProviderDraftPayment,
      params: RequestParams = {},
    ) =>
      this.request<
        PaymentServiceProviderDraftPaymentUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/payment-service-provider-draft-payment/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Manage the PaymentServiceProviderDraftPayment's for a PISP.
     *
     * @tags payment-service-provider-draft-payment
     * @name ReadPaymentServiceProviderDraftPaymentForUser
     * @request GET:/user/{userID}/payment-service-provider-draft-payment/{itemId}
     */
    readPaymentServiceProviderDraftPaymentForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        PaymentServiceProviderDraftPaymentRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/payment-service-provider-draft-payment/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description The endpoint for payment service provider issuer transactions
     *
     * @tags payment-service-provider-issuer-transaction
     * @name CreatePaymentServiceProviderIssuerTransactionForUser
     * @request POST:/user/{userID}/payment-service-provider-issuer-transaction
     */
    createPaymentServiceProviderIssuerTransactionForUser: (
      userId: number,
      data: PaymentServiceProviderIssuerTransaction,
      params: RequestParams = {},
    ) =>
      this.request<
        PaymentServiceProviderIssuerTransactionCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/payment-service-provider-issuer-transaction`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description The endpoint for payment service provider issuer transactions
     *
     * @tags payment-service-provider-issuer-transaction
     * @name ListAllPaymentServiceProviderIssuerTransactionForUser
     * @request GET:/user/{userID}/payment-service-provider-issuer-transaction
     */
    listAllPaymentServiceProviderIssuerTransactionForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        PaymentServiceProviderIssuerTransactionListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/payment-service-provider-issuer-transaction`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description The endpoint for payment service provider issuer transactions
     *
     * @tags payment-service-provider-issuer-transaction
     * @name ReadPaymentServiceProviderIssuerTransactionForUser
     * @request GET:/user/{userID}/payment-service-provider-issuer-transaction/{itemId}
     */
    readPaymentServiceProviderIssuerTransactionForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        PaymentServiceProviderIssuerTransactionRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/payment-service-provider-issuer-transaction/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description The endpoint for payment service provider issuer transactions
     *
     * @tags payment-service-provider-issuer-transaction
     * @name UpdatePaymentServiceProviderIssuerTransactionForUser
     * @request PUT:/user/{userID}/payment-service-provider-issuer-transaction/{itemId}
     */
    updatePaymentServiceProviderIssuerTransactionForUser: (
      userId: number,
      itemId: number,
      data: PaymentServiceProviderIssuerTransaction,
      params: RequestParams = {},
    ) =>
      this.request<
        PaymentServiceProviderIssuerTransactionUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/payment-service-provider-issuer-transaction/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a PDF export of an invoice.
     *
     * @tags pdf-content
     * @name ListAllPdfContentForUserInvoice
     * @request GET:/user/{userID}/invoice/{invoiceID}/pdf-content
     */
    listAllPdfContentForUserInvoice: (userId: number, invoiceId: number, params: RequestParams = {}) =>
      this.request<
        InvoiceExportPdfContentListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/invoice/${invoiceId}/pdf-content`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new Slice group settlement.
     *
     * @tags registry-settlement
     * @name CreateRegistrySettlementForUserRegistry
     * @request POST:/user/{userID}/registry/{registryID}/registry-settlement
     */
    createRegistrySettlementForUserRegistry: (
      userId: number,
      registryId: number,
      data: RegistrySettlement,
      params: RequestParams = {},
    ) =>
      this.request<
        RegistrySettlementCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/registry/${registryId}/registry-settlement`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a listing of all Slice group settlements.
     *
     * @tags registry-settlement
     * @name ListAllRegistrySettlementForUserRegistry
     * @request GET:/user/{userID}/registry/{registryID}/registry-settlement
     */
    listAllRegistrySettlementForUserRegistry: (userId: number, registryId: number, params: RequestParams = {}) =>
      this.request<
        RegistrySettlementListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/registry/${registryId}/registry-settlement`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get a specific Slice group settlement.
     *
     * @tags registry-settlement
     * @name ReadRegistrySettlementForUserRegistry
     * @request GET:/user/{userID}/registry/{registryID}/registry-settlement/{itemId}
     */
    readRegistrySettlementForUserRegistry: (
      userId: number,
      registryId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        RegistrySettlementRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/registry/${registryId}/registry-settlement/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Request a card replacement.
     *
     * @tags replace
     * @name CreateReplaceForUserCard
     * @request POST:/user/{userID}/card/{cardID}/replace
     */
    createReplaceForUserCard: (userId: number, cardId: number, data: CardReplace, params: RequestParams = {}) =>
      this.request<
        CardReplaceCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/card/${cardId}/replace`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new payment request.
     *
     * @tags request-inquiry
     * @name CreateRequestInquiryForUserMonetaryAccount
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry
     */
    createRequestInquiryForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      data: RequestInquiry,
      params: RequestParams = {},
    ) =>
      this.request<
        RequestInquiryCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get all payment requests for a user's monetary account. bunqme_share_url is always null if the counterparty is a bunq user.
     *
     * @tags request-inquiry
     * @name ListAllRequestInquiryForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry
     */
    listAllRequestInquiryForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        RequestInquiryListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Revoke a request for payment, by updating the status to REVOKED.
     *
     * @tags request-inquiry
     * @name UpdateRequestInquiryForUserMonetaryAccount
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry/{itemId}
     */
    updateRequestInquiryForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      data: RequestInquiry,
      params: RequestParams = {},
    ) =>
      this.request<
        RequestInquiryUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the details of a specific payment request, including its status. bunqme_share_url is always null if the counterparty is a bunq user.
     *
     * @tags request-inquiry
     * @name ReadRequestInquiryForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry/{itemId}
     */
    readRequestInquiryForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        RequestInquiryRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Create a request batch by sending an array of single request objects, that will become part of the batch.
     *
     * @tags request-inquiry-batch
     * @name CreateRequestInquiryBatchForUserMonetaryAccount
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry-batch
     */
    createRequestInquiryBatchForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      data: RequestInquiryBatch,
      params: RequestParams = {},
    ) =>
      this.request<
        RequestInquiryBatchCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry-batch`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Return all the request batches for a monetary account.
     *
     * @tags request-inquiry-batch
     * @name ListAllRequestInquiryBatchForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry-batch
     */
    listAllRequestInquiryBatchForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        RequestInquiryBatchListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry-batch`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Revoke a request batch. The status of all the requests will be set to REVOKED.
     *
     * @tags request-inquiry-batch
     * @name UpdateRequestInquiryBatchForUserMonetaryAccount
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry-batch/{itemId}
     */
    updateRequestInquiryBatchForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      data: RequestInquiryBatch,
      params: RequestParams = {},
    ) =>
      this.request<
        RequestInquiryBatchUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry-batch/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Return the details of a specific request batch.
     *
     * @tags request-inquiry-batch
     * @name ReadRequestInquiryBatchForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/request-inquiry-batch/{itemId}
     */
    readRequestInquiryBatchForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        RequestInquiryBatchRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-inquiry-batch/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Update the status to accept or reject the RequestResponse.
     *
     * @tags request-response
     * @name UpdateRequestResponseForUserMonetaryAccount
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/request-response/{itemId}
     */
    updateRequestResponseForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      data: RequestResponse,
      params: RequestParams = {},
    ) =>
      this.request<
        RequestResponseUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-response/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get the details for a specific existing RequestResponse.
     *
     * @tags request-response
     * @name ReadRequestResponseForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/request-response/{itemId}
     */
    readRequestResponseForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        RequestResponseRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-response/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get all RequestResponses for a MonetaryAccount.
     *
     * @tags request-response
     * @name ListAllRequestResponseForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/request-response
     */
    listAllRequestResponseForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        RequestResponseListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/request-response`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to view Rewards.
     *
     * @tags reward
     * @name ReadRewardForUser
     * @request GET:/user/{userID}/reward/{itemId}
     */
    readRewardForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        RewardRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/reward/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to view Rewards.
     *
     * @tags reward
     * @name ListAllRewardForUser
     * @request GET:/user/{userID}/reward
     */
    listAllRewardForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        RewardListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/reward`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to view Rewards.
     *
     * @tags reward-recipient
     * @name ReadRewardRecipientForUser
     * @request GET:/user/{userID}/reward-recipient/{itemId}
     */
    readRewardRecipientForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        RewardRecipientRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/reward-recipient/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to view Rewards.
     *
     * @tags reward-recipient
     * @name ListAllRewardRecipientForUser
     * @request GET:/user/{userID}/reward-recipient
     */
    listAllRewardRecipientForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        RewardRecipientListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/reward-recipient`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to view Rewards.
     *
     * @tags reward-sender
     * @name ReadRewardSenderForUser
     * @request GET:/user/{userID}/reward-sender/{itemId}
     */
    readRewardSenderForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        RewardSenderRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/reward-sender/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to view Rewards.
     *
     * @tags reward-sender
     * @name ListAllRewardSenderForUser
     * @request GET:/user/{userID}/reward-sender
     */
    listAllRewardSenderForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        RewardSenderListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/reward-sender`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get a specific schedule definition for a given monetary account.
     *
     * @tags schedule
     * @name ReadScheduleForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/schedule/{itemId}
     */
    readScheduleForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        ScheduleRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get a collection of scheduled definition for a given monetary account. You can add the parameter type to filter the response. When type={SCHEDULE_DEFINITION_PAYMENT,SCHEDULE_DEFINITION_PAYMENT_BATCH} is provided only schedule definition object that relate to these definitions are returned.
     *
     * @tags schedule
     * @name ListAllScheduleForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/schedule
     */
    listAllScheduleForUserMonetaryAccount: (userId: number, monetaryAccountId: number, params: RequestParams = {}) =>
      this.request<
        ScheduleListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get a collection of scheduled definition for all accessible monetary accounts of the user. You can add the parameter type to filter the response. When type={SCHEDULE_DEFINITION_PAYMENT,SCHEDULE_DEFINITION_PAYMENT_BATCH} is provided only schedule definition object that relate to these definitions are returned.
     *
     * @tags schedule
     * @name ListAllScheduleForUser
     * @request GET:/user/{userID}/schedule
     */
    listAllScheduleForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        ScheduleUserListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/schedule`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description view for reading, updating and listing the scheduled instance.
     *
     * @tags schedule-instance
     * @name ReadScheduleInstanceForUserMonetaryAccountSchedule
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/schedule/{scheduleID}/schedule-instance/{itemId}
     */
    readScheduleInstanceForUserMonetaryAccountSchedule: (
      userId: number,
      monetaryAccountId: number,
      scheduleId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        ScheduleInstanceRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule/${scheduleId}/schedule-instance/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description view for reading, updating and listing the scheduled instance.
     *
     * @tags schedule-instance
     * @name UpdateScheduleInstanceForUserMonetaryAccountSchedule
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/schedule/{scheduleID}/schedule-instance/{itemId}
     */
    updateScheduleInstanceForUserMonetaryAccountSchedule: (
      userId: number,
      monetaryAccountId: number,
      scheduleId: number,
      itemId: number,
      data: ScheduleInstance,
      params: RequestParams = {},
    ) =>
      this.request<
        ScheduleInstanceUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule/${scheduleId}/schedule-instance/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description view for reading, updating and listing the scheduled instance.
     *
     * @tags schedule-instance
     * @name ListAllScheduleInstanceForUserMonetaryAccountSchedule
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/schedule/{scheduleID}/schedule-instance
     */
    listAllScheduleInstanceForUserMonetaryAccountSchedule: (
      userId: number,
      monetaryAccountId: number,
      scheduleId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        ScheduleInstanceListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule/${scheduleId}/schedule-instance`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for schedule payments.
     *
     * @tags schedule-payment
     * @name CreateSchedulePaymentForUserMonetaryAccount
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment
     */
    createSchedulePaymentForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      data: SchedulePayment,
      params: RequestParams = {},
    ) =>
      this.request<
        SchedulePaymentCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for schedule payments.
     *
     * @tags schedule-payment
     * @name ListAllSchedulePaymentForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment
     */
    listAllSchedulePaymentForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        SchedulePaymentListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for schedule payments.
     *
     * @tags schedule-payment
     * @name DeleteSchedulePaymentForUserMonetaryAccount
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment/{itemId}
     */
    deleteSchedulePaymentForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        SchedulePaymentDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for schedule payments.
     *
     * @tags schedule-payment
     * @name ReadSchedulePaymentForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment/{itemId}
     */
    readSchedulePaymentForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        SchedulePaymentRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for schedule payments.
     *
     * @tags schedule-payment
     * @name UpdateSchedulePaymentForUserMonetaryAccount
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment/{itemId}
     */
    updateSchedulePaymentForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      data: SchedulePayment,
      params: RequestParams = {},
    ) =>
      this.request<
        SchedulePaymentUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for schedule payment batches.
     *
     * @tags schedule-payment-batch
     * @name ReadSchedulePaymentBatchForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment-batch/{itemId}
     */
    readSchedulePaymentBatchForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        SchedulePaymentBatchRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment-batch/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for schedule payment batches.
     *
     * @tags schedule-payment-batch
     * @name UpdateSchedulePaymentBatchForUserMonetaryAccount
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment-batch/{itemId}
     */
    updateSchedulePaymentBatchForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      data: SchedulePaymentBatch,
      params: RequestParams = {},
    ) =>
      this.request<
        SchedulePaymentBatchUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment-batch/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for schedule payment batches.
     *
     * @tags schedule-payment-batch
     * @name DeleteSchedulePaymentBatchForUserMonetaryAccount
     * @request DELETE:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment-batch/{itemId}
     */
    deleteSchedulePaymentBatchForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        SchedulePaymentBatchDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment-batch/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for schedule payment batches.
     *
     * @tags schedule-payment-batch
     * @name CreateSchedulePaymentBatchForUserMonetaryAccount
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/schedule-payment-batch
     */
    createSchedulePaymentBatchForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      data: SchedulePaymentBatch,
      params: RequestParams = {},
    ) =>
      this.request<
        SchedulePaymentBatchCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/schedule-payment-batch`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description [DEPRECATED - use /share-invite-monetary-account-response] Create a new share inquiry for a monetary account, specifying the permission the other bunq user will have on it.
     *
     * @tags share-invite-monetary-account-inquiry
     * @name CreateShareInviteMonetaryAccountInquiryForUserMonetaryAccount
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/share-invite-monetary-account-inquiry
     */
    createShareInviteMonetaryAccountInquiryForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      data: ShareInviteMonetaryAccountInquiry,
      params: RequestParams = {},
    ) =>
      this.request<
        ShareInviteMonetaryAccountInquiryCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/share-invite-monetary-account-inquiry`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description [DEPRECATED - use /share-invite-monetary-account-response] Get a list with all the share inquiries for a monetary account, only if the requesting user has permission to change the details of the various ones.
     *
     * @tags share-invite-monetary-account-inquiry
     * @name ListAllShareInviteMonetaryAccountInquiryForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/share-invite-monetary-account-inquiry
     */
    listAllShareInviteMonetaryAccountInquiryForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        ShareInviteMonetaryAccountInquiryListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/share-invite-monetary-account-inquiry`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description [DEPRECATED - use /share-invite-monetary-account-response] Get the details of a specific share inquiry.
     *
     * @tags share-invite-monetary-account-inquiry
     * @name ReadShareInviteMonetaryAccountInquiryForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/share-invite-monetary-account-inquiry/{itemId}
     */
    readShareInviteMonetaryAccountInquiryForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        ShareInviteMonetaryAccountInquiryRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/share-invite-monetary-account-inquiry/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description [DEPRECATED - use /share-invite-monetary-account-response] Update the details of a share. This includes updating status (revoking or cancelling it), granted permission and validity period of this share.
     *
     * @tags share-invite-monetary-account-inquiry
     * @name UpdateShareInviteMonetaryAccountInquiryForUserMonetaryAccount
     * @request PUT:/user/{userID}/monetary-account/{monetary-accountID}/share-invite-monetary-account-inquiry/{itemId}
     */
    updateShareInviteMonetaryAccountInquiryForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      data: ShareInviteMonetaryAccountInquiry,
      params: RequestParams = {},
    ) =>
      this.request<
        ShareInviteMonetaryAccountInquiryUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/share-invite-monetary-account-inquiry/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Return the details of a specific share a user was invited to.
     *
     * @tags share-invite-monetary-account-response
     * @name ReadShareInviteMonetaryAccountResponseForUser
     * @request GET:/user/{userID}/share-invite-monetary-account-response/{itemId}
     */
    readShareInviteMonetaryAccountResponseForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        ShareInviteMonetaryAccountResponseRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/share-invite-monetary-account-response/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Accept or reject a share a user was invited to.
     *
     * @tags share-invite-monetary-account-response
     * @name UpdateShareInviteMonetaryAccountResponseForUser
     * @request PUT:/user/{userID}/share-invite-monetary-account-response/{itemId}
     */
    updateShareInviteMonetaryAccountResponseForUser: (
      userId: number,
      itemId: number,
      data: ShareInviteMonetaryAccountResponse,
      params: RequestParams = {},
    ) =>
      this.request<
        ShareInviteMonetaryAccountResponseUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/share-invite-monetary-account-response/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Return all the shares a user was invited to.
     *
     * @tags share-invite-monetary-account-response
     * @name ListAllShareInviteMonetaryAccountResponseForUser
     * @request GET:/user/{userID}/share-invite-monetary-account-response
     */
    listAllShareInviteMonetaryAccountResponseForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        ShareInviteMonetaryAccountResponseListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/share-invite-monetary-account-response`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description View for requesting Sofort transactions and polling their status.
     *
     * @tags sofort-merchant-transaction
     * @name ReadSofortMerchantTransactionForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/sofort-merchant-transaction/{itemId}
     */
    readSofortMerchantTransactionForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        SofortMerchantTransactionRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/sofort-merchant-transaction/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description View for requesting Sofort transactions and polling their status.
     *
     * @tags sofort-merchant-transaction
     * @name ListAllSofortMerchantTransactionForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/sofort-merchant-transaction
     */
    listAllSofortMerchantTransactionForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        SofortMerchantTransactionListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/sofort-merchant-transaction`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to create a statement export of a single payment.
     *
     * @tags statement
     * @name CreateStatementForUserMonetaryAccountEvent
     * @request POST:/user/{userID}/monetary-account/{monetary-accountID}/event/{eventID}/statement
     */
    createStatementForUserMonetaryAccountEvent: (
      userId: number,
      monetaryAccountId: number,
      eventId: number,
      data: ExportStatementPayment,
      params: RequestParams = {},
    ) =>
      this.request<
        ExportStatementPaymentCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/event/${eventId}/statement`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to create a statement export of a single payment.
     *
     * @tags statement
     * @name ReadStatementForUserMonetaryAccountEvent
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/event/{eventID}/statement/{itemId}
     */
    readStatementForUserMonetaryAccountEvent: (
      userId: number,
      monetaryAccountId: number,
      eventId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        ExportStatementPaymentRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/event/${eventId}/statement/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description An incoming payment made towards an account of an external bank and redirected to a bunq account via switch service.
     *
     * @tags switch-service-payment
     * @name ReadSwitchServicePaymentForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/switch-service-payment/{itemId}
     */
    readSwitchServicePaymentForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        BankSwitchServiceNetherlandsIncomingPaymentRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/switch-service-payment/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Create a request from an ideal transaction.
     *
     * @tags token-qr-request-ideal
     * @name CreateTokenQrRequestIdealForUser
     * @request POST:/user/{userID}/token-qr-request-ideal
     */
    createTokenQrRequestIdealForUser: (userId: number, data: TokenQrRequestIdeal, params: RequestParams = {}) =>
      this.request<
        TokenQrRequestIdealCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/token-qr-request-ideal`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a request from an SOFORT transaction.
     *
     * @tags token-qr-request-sofort
     * @name CreateTokenQrRequestSofortForUser
     * @request POST:/user/{userID}/token-qr-request-sofort
     */
    createTokenQrRequestSofortForUser: (userId: number, data: TokenQrRequestSofort, params: RequestParams = {}) =>
      this.request<
        TokenQrRequestSofortCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/token-qr-request-sofort`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to get a list of supported currencies for Transferwise.
     *
     * @tags transferwise-currency
     * @name ListAllTransferwiseCurrencyForUser
     * @request GET:/user/{userID}/transferwise-currency
     */
    listAllTransferwiseCurrencyForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        TransferwiseCurrencyListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/transferwise-currency`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to get quotes from Transferwise. These can be used to initiate payments.
     *
     * @tags transferwise-quote
     * @name CreateTransferwiseQuoteForUser
     * @request POST:/user/{userID}/transferwise-quote
     */
    createTransferwiseQuoteForUser: (userId: number, data: TransferwiseQuote, params: RequestParams = {}) =>
      this.request<
        TransferwiseQuoteCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/transferwise-quote`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to get quotes from Transferwise. These can be used to initiate payments.
     *
     * @tags transferwise-quote
     * @name ReadTransferwiseQuoteForUser
     * @request GET:/user/{userID}/transferwise-quote/{itemId}
     */
    readTransferwiseQuoteForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        TransferwiseQuoteRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/transferwise-quote/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to get temporary quotes from Transferwise. These cannot be used to initiate payments
     *
     * @tags transferwise-quote-temporary
     * @name CreateTransferwiseQuoteTemporaryForUser
     * @request POST:/user/{userID}/transferwise-quote-temporary
     */
    createTransferwiseQuoteTemporaryForUser: (
      userId: number,
      data: TransferwiseQuoteTemporary,
      params: RequestParams = {},
    ) =>
      this.request<
        TransferwiseQuoteTemporaryCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/transferwise-quote-temporary`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to get temporary quotes from Transferwise. These cannot be used to initiate payments
     *
     * @tags transferwise-quote-temporary
     * @name ReadTransferwiseQuoteTemporaryForUser
     * @request GET:/user/{userID}/transferwise-quote-temporary/{itemId}
     */
    readTransferwiseQuoteTemporaryForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        TransferwiseQuoteTemporaryRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/transferwise-quote-temporary/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage recipient accounts with Transferwise.
     *
     * @tags transferwise-recipient
     * @name CreateTransferwiseRecipientForUserTransferwiseQuote
     * @request POST:/user/{userID}/transferwise-quote/{transferwise-quoteID}/transferwise-recipient
     */
    createTransferwiseRecipientForUserTransferwiseQuote: (
      userId: number,
      transferwiseQuoteId: number,
      data: TransferwiseAccountQuote,
      params: RequestParams = {},
    ) =>
      this.request<
        TransferwiseAccountQuoteCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/transferwise-quote/${transferwiseQuoteId}/transferwise-recipient`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage recipient accounts with Transferwise.
     *
     * @tags transferwise-recipient
     * @name ListAllTransferwiseRecipientForUserTransferwiseQuote
     * @request GET:/user/{userID}/transferwise-quote/{transferwise-quoteID}/transferwise-recipient
     */
    listAllTransferwiseRecipientForUserTransferwiseQuote: (
      userId: number,
      transferwiseQuoteId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        TransferwiseAccountQuoteListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/transferwise-quote/${transferwiseQuoteId}/transferwise-recipient`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage recipient accounts with Transferwise.
     *
     * @tags transferwise-recipient
     * @name ReadTransferwiseRecipientForUserTransferwiseQuote
     * @request GET:/user/{userID}/transferwise-quote/{transferwise-quoteID}/transferwise-recipient/{itemId}
     */
    readTransferwiseRecipientForUserTransferwiseQuote: (
      userId: number,
      transferwiseQuoteId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        TransferwiseAccountQuoteRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/transferwise-quote/${transferwiseQuoteId}/transferwise-recipient/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage recipient accounts with Transferwise.
     *
     * @tags transferwise-recipient
     * @name DeleteTransferwiseRecipientForUserTransferwiseQuote
     * @request DELETE:/user/{userID}/transferwise-quote/{transferwise-quoteID}/transferwise-recipient/{itemId}
     */
    deleteTransferwiseRecipientForUserTransferwiseQuote: (
      userId: number,
      transferwiseQuoteId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        TransferwiseAccountQuoteDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/transferwise-quote/${transferwiseQuoteId}/transferwise-recipient/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to determine the recipient account requirements for Transferwise transfers.
     *
     * @tags transferwise-recipient-requirement
     * @name CreateTransferwiseRecipientRequirementForUserTransferwiseQuote
     * @request POST:/user/{userID}/transferwise-quote/{transferwise-quoteID}/transferwise-recipient-requirement
     */
    createTransferwiseRecipientRequirementForUserTransferwiseQuote: (
      userId: number,
      transferwiseQuoteId: number,
      data: TransferwiseAccountRequirement,
      params: RequestParams = {},
    ) =>
      this.request<
        TransferwiseAccountRequirementCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/transferwise-quote/${transferwiseQuoteId}/transferwise-recipient-requirement`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to determine the recipient account requirements for Transferwise transfers.
     *
     * @tags transferwise-recipient-requirement
     * @name ListAllTransferwiseRecipientRequirementForUserTransferwiseQuote
     * @request GET:/user/{userID}/transferwise-quote/{transferwise-quoteID}/transferwise-recipient-requirement
     */
    listAllTransferwiseRecipientRequirementForUserTransferwiseQuote: (
      userId: number,
      transferwiseQuoteId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        TransferwiseAccountRequirementListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/transferwise-quote/${transferwiseQuoteId}/transferwise-recipient-requirement`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to create Transferwise payments.
     *
     * @tags transferwise-transfer
     * @name CreateTransferwiseTransferForUserTransferwiseQuote
     * @request POST:/user/{userID}/transferwise-quote/{transferwise-quoteID}/transferwise-transfer
     */
    createTransferwiseTransferForUserTransferwiseQuote: (
      userId: number,
      transferwiseQuoteId: number,
      data: TransferwiseTransfer,
      params: RequestParams = {},
    ) =>
      this.request<
        TransferwiseTransferCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/transferwise-quote/${transferwiseQuoteId}/transferwise-transfer`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to create Transferwise payments.
     *
     * @tags transferwise-transfer
     * @name ListAllTransferwiseTransferForUserTransferwiseQuote
     * @request GET:/user/{userID}/transferwise-quote/{transferwise-quoteID}/transferwise-transfer
     */
    listAllTransferwiseTransferForUserTransferwiseQuote: (
      userId: number,
      transferwiseQuoteId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        TransferwiseTransferListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/transferwise-quote/${transferwiseQuoteId}/transferwise-transfer`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to create Transferwise payments.
     *
     * @tags transferwise-transfer
     * @name ReadTransferwiseTransferForUserTransferwiseQuote
     * @request GET:/user/{userID}/transferwise-quote/{transferwise-quoteID}/transferwise-transfer/{itemId}
     */
    readTransferwiseTransferForUserTransferwiseQuote: (
      userId: number,
      transferwiseQuoteId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        TransferwiseTransferRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/transferwise-quote/${transferwiseQuoteId}/transferwise-transfer/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Used to determine the account requirements for Transferwise transfers.
     *
     * @tags transferwise-transfer-requirement
     * @name CreateTransferwiseTransferRequirementForUserTransferwiseQuote
     * @request POST:/user/{userID}/transferwise-quote/{transferwise-quoteID}/transferwise-transfer-requirement
     */
    createTransferwiseTransferRequirementForUserTransferwiseQuote: (
      userId: number,
      transferwiseQuoteId: number,
      data: TransferwiseTransferRequirement,
      params: RequestParams = {},
    ) =>
      this.request<
        TransferwiseTransferRequirementCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/transferwise-quote/${transferwiseQuoteId}/transferwise-transfer-requirement`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage Transferwise users.
     *
     * @tags transferwise-user
     * @name CreateTransferwiseUserForUser
     * @request POST:/user/{userID}/transferwise-user
     */
    createTransferwiseUserForUser: (userId: number, data: TransferwiseUser, params: RequestParams = {}) =>
      this.request<
        TransferwiseUserCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/transferwise-user`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to manage Transferwise users.
     *
     * @tags transferwise-user
     * @name ListAllTransferwiseUserForUser
     * @request GET:/user/{userID}/transferwise-user
     */
    listAllTransferwiseUserForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        TransferwiseUserListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/transferwise-user`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description See how many trees this user has planted.
     *
     * @tags tree-progress
     * @name ListAllTreeProgressForUser
     * @request GET:/user/{userID}/tree-progress
     */
    listAllTreeProgressForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        TreeProgressListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/tree-progress`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get a specific user.
     *
     * @tags user
     * @name ReadUser
     * @request GET:/user/{itemId}
     */
    readUser: (itemId: number, params: RequestParams = {}) =>
      this.request<
        UserRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get a collection of all available users.
     *
     * @tags user
     * @name ListAllUser
     * @request GET:/user
     */
    listAllUser: (params: RequestParams = {}) =>
      this.request<
        UserListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get a specific recurring SDD whitelist entry.
     *
     * @tags whitelist-sdd
     * @name ReadWhitelistSddForUser
     * @request GET:/user/{userID}/whitelist-sdd/{itemId}
     */
    readWhitelistSddForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        WhitelistSddRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/whitelist-sdd/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get a listing of all recurring SDD whitelist entries for a target monetary account.
     *
     * @tags whitelist-sdd
     * @name ListAllWhitelistSddForUser
     * @request GET:/user/{userID}/whitelist-sdd
     */
    listAllWhitelistSddForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        WhitelistSddListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/whitelist-sdd`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get a specific SDD whitelist entry.
     *
     * @tags whitelist-sdd
     * @name ReadWhitelistSddForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/whitelist-sdd/{itemId}
     */
    readWhitelistSddForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      itemId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        WhitelistSddMonetaryAccountPayingRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/whitelist-sdd/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get a listing of all SDD whitelist entries for a target monetary account.
     *
     * @tags whitelist-sdd
     * @name ListAllWhitelistSddForUserMonetaryAccount
     * @request GET:/user/{userID}/monetary-account/{monetary-accountID}/whitelist-sdd
     */
    listAllWhitelistSddForUserMonetaryAccount: (
      userId: number,
      monetaryAccountId: number,
      params: RequestParams = {},
    ) =>
      this.request<
        WhitelistSddMonetaryAccountPayingListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/monetary-account/${monetaryAccountId}/whitelist-sdd`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get a specific one off SDD whitelist entry.
     *
     * @tags whitelist-sdd-one-off
     * @name ReadWhitelistSddOneOffForUser
     * @request GET:/user/{userID}/whitelist-sdd-one-off/{itemId}
     */
    readWhitelistSddOneOffForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        WhitelistSddOneOffRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/whitelist-sdd-one-off/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Whitelist an one off SDD so that when another one off SDD from the creditor comes in, it is automatically accepted.
     *
     * @tags whitelist-sdd-one-off
     * @name UpdateWhitelistSddOneOffForUser
     * @request PUT:/user/{userID}/whitelist-sdd-one-off/{itemId}
     */
    updateWhitelistSddOneOffForUser: (
      userId: number,
      itemId: number,
      data: WhitelistSddOneOff,
      params: RequestParams = {},
    ) =>
      this.request<
        WhitelistSddOneOffUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/whitelist-sdd-one-off/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Whitelist an one off SDD so that when another one off SDD from the creditor comes in, it is automatically accepted.
     *
     * @tags whitelist-sdd-one-off
     * @name DeleteWhitelistSddOneOffForUser
     * @request DELETE:/user/{userID}/whitelist-sdd-one-off/{itemId}
     */
    deleteWhitelistSddOneOffForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        WhitelistSddOneOffDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/whitelist-sdd-one-off/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new one off SDD whitelist entry.
     *
     * @tags whitelist-sdd-one-off
     * @name CreateWhitelistSddOneOffForUser
     * @request POST:/user/{userID}/whitelist-sdd-one-off
     */
    createWhitelistSddOneOffForUser: (userId: number, data: WhitelistSddOneOff, params: RequestParams = {}) =>
      this.request<
        WhitelistSddOneOffCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/whitelist-sdd-one-off`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a listing of all one off SDD whitelist entries for a target monetary account.
     *
     * @tags whitelist-sdd-one-off
     * @name ListAllWhitelistSddOneOffForUser
     * @request GET:/user/{userID}/whitelist-sdd-one-off
     */
    listAllWhitelistSddOneOffForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        WhitelistSddOneOffListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/whitelist-sdd-one-off`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get a specific recurring SDD whitelist entry.
     *
     * @tags whitelist-sdd-recurring
     * @name ReadWhitelistSddRecurringForUser
     * @request GET:/user/{userID}/whitelist-sdd-recurring/{itemId}
     */
    readWhitelistSddRecurringForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        WhitelistSddRecurringRead,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/whitelist-sdd-recurring/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Whitelist a recurring SDD so that when another recurrence comes in, it is automatically accepted.
     *
     * @tags whitelist-sdd-recurring
     * @name UpdateWhitelistSddRecurringForUser
     * @request PUT:/user/{userID}/whitelist-sdd-recurring/{itemId}
     */
    updateWhitelistSddRecurringForUser: (
      userId: number,
      itemId: number,
      data: WhitelistSddRecurring,
      params: RequestParams = {},
    ) =>
      this.request<
        WhitelistSddRecurringUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/whitelist-sdd-recurring/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Whitelist a recurring SDD so that when another recurrence comes in, it is automatically accepted.
     *
     * @tags whitelist-sdd-recurring
     * @name DeleteWhitelistSddRecurringForUser
     * @request DELETE:/user/{userID}/whitelist-sdd-recurring/{itemId}
     */
    deleteWhitelistSddRecurringForUser: (userId: number, itemId: number, params: RequestParams = {}) =>
      this.request<
        WhitelistSddRecurringDelete,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/whitelist-sdd-recurring/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new recurring SDD whitelist entry.
     *
     * @tags whitelist-sdd-recurring
     * @name CreateWhitelistSddRecurringForUser
     * @request POST:/user/{userID}/whitelist-sdd-recurring
     */
    createWhitelistSddRecurringForUser: (userId: number, data: WhitelistSddRecurring, params: RequestParams = {}) =>
      this.request<
        WhitelistSddRecurringCreate,
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/whitelist-sdd-recurring`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a listing of all recurring SDD whitelist entries for a target monetary account.
     *
     * @tags whitelist-sdd-recurring
     * @name ListAllWhitelistSddRecurringForUser
     * @request GET:/user/{userID}/whitelist-sdd-recurring
     */
    listAllWhitelistSddRecurringForUser: (userId: number, params: RequestParams = {}) =>
      this.request<
        WhitelistSddRecurringListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user/${userId}/whitelist-sdd-recurring`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  attachmentPublic = {
    /**
     * @description Create a new public attachment. Create a POST request with a payload that contains a binary representation of the file, without any JSON wrapping. Make sure you define the MIME type (i.e. image/jpeg, or image/png) in the Content-Type header. You are required to provide a description of the attachment using the X-Bunq-Attachment-Description header.
     *
     * @tags attachment-public
     * @name CreateAttachmentPublic
     * @request POST:/attachment-public
     */
    createAttachmentPublic: (data: AttachmentPublic, params: RequestParams = {}) =>
      this.request<
        AttachmentPublicCreate,
        {
          Error?: Error;
        }
      >({
        path: `/attachment-public`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a specific attachment's metadata through its UUID. The Content-Type header of the response will describe the MIME type of the attachment file.
     *
     * @tags attachment-public
     * @name ReadAttachmentPublic
     * @request GET:/attachment-public/{itemId}
     */
    readAttachmentPublic: (itemId: number, params: RequestParams = {}) =>
      this.request<
        AttachmentPublicRead,
        {
          Error?: Error;
        }
      >({
        path: `/attachment-public/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get the raw content of a specific attachment.
     *
     * @tags content
     * @name ListAllContentForAttachmentPublic
     * @request GET:/attachment-public/{attachment-publicUUID}/content
     */
    listAllContentForAttachmentPublic: (attachmentPublicUuid: string, params: RequestParams = {}) =>
      this.request<
        AttachmentPublicContentListing[],
        {
          Error?: Error;
        }
      >({
        path: `/attachment-public/${attachmentPublicUuid}/content`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  avatar = {
    /**
     * @description Avatars are public images used to represent you or your company. Avatars are used to represent users, monetary accounts and cash registers. Avatars cannot be deleted, only replaced. Avatars can be updated after uploading the image you would like to use through AttachmentPublic. Using the attachment_public_uuid which is returned you can update your Avatar. Avatars used for cash registers and company accounts will be reviewed by bunq.
     *
     * @tags avatar
     * @name CreateAvatar
     * @request POST:/avatar
     */
    createAvatar: (data: Avatar, params: RequestParams = {}) =>
      this.request<
        AvatarCreate,
        {
          Error?: Error;
        }
      >({
        path: `/avatar`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Avatars are public images used to represent you or your company. Avatars are used to represent users, monetary accounts and cash registers. Avatars cannot be deleted, only replaced. Avatars can be updated after uploading the image you would like to use through AttachmentPublic. Using the attachment_public_uuid which is returned you can update your Avatar. Avatars used for cash registers and company accounts will be reviewed by bunq.
     *
     * @tags avatar
     * @name ReadAvatar
     * @request GET:/avatar/{itemId}
     */
    readAvatar: (itemId: number, params: RequestParams = {}) =>
      this.request<
        AvatarRead,
        {
          Error?: Error;
        }
      >({
        path: `/avatar/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  device = {
    /**
     * @description Get a single Device. A Device is either a DevicePhone or a DeviceServer.
     *
     * @tags device
     * @name ReadDevice
     * @request GET:/device/{itemId}
     */
    readDevice: (itemId: number, params: RequestParams = {}) =>
      this.request<
        DeviceRead,
        {
          Error?: Error;
        }
      >({
        path: `/device/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get a collection of Devices. A Device is either a DevicePhone or a DeviceServer.
     *
     * @tags device
     * @name ListAllDevice
     * @request GET:/device
     */
    listAllDevice: (params: RequestParams = {}) =>
      this.request<
        DeviceListing[],
        {
          Error?: Error;
        }
      >({
        path: `/device`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  deviceServer = {
    /**
     * @description Create a new DeviceServer providing the installation token in the header and signing the request with the private part of the key you used to create the installation. The API Key that you are using will be bound to the IP address of the DeviceServer which you have created.<br/><br/>Using a Wildcard API Key gives you the freedom to make API calls even if the IP address has changed after the POST device-server.<br/><br/>Find out more at this link <a href="https:/bunq.com/en/apikey-dynamic-ip" target="_blank">https:/bunq.com/en/apikey-dynamic-ip</a>.
     *
     * @tags device-server
     * @name CreateDeviceServer
     * @request POST:/device-server
     */
    createDeviceServer: (data: DeviceServer, params: RequestParams = {}) =>
      this.request<
        DeviceServerCreate,
        {
          Error?: Error;
        }
      >({
        path: `/device-server`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a collection of all the DeviceServers you have created.
     *
     * @tags device-server
     * @name ListAllDeviceServer
     * @request GET:/device-server
     */
    listAllDeviceServer: (params: RequestParams = {}) =>
      this.request<
        DeviceServerListing[],
        {
          Error?: Error;
        }
      >({
        path: `/device-server`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get one of your DeviceServers.
     *
     * @tags device-server
     * @name ReadDeviceServer
     * @request GET:/device-server/{itemId}
     */
    readDeviceServer: (itemId: number, params: RequestParams = {}) =>
      this.request<
        DeviceServerRead,
        {
          Error?: Error;
        }
      >({
        path: `/device-server/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  installation = {
    /**
     * @description This is the only API call that does not require you to use the "X-Bunq-Client-Authentication" and "X-Bunq-Client-Signature" headers. You provide the server with the public part of the key pair that you are going to use to create the value of the signature header for all future API calls. The server creates an installation for you. Store the Installation Token and ServerPublicKey from the response. This token is used in the "X-Bunq-Client-Authentication" header for the creation of a DeviceServer and SessionServer.
     *
     * @tags installation
     * @name CreateInstallation
     * @request POST:/installation
     */
    createInstallation: (data: Installation, params: RequestParams = {}) =>
      this.request<
        InstallationCreate,
        {
          Error?: Error;
        }
      >({
        path: `/installation`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description You must have an active session to make this call. This call returns the Id of the the Installation you are using in your session.
     *
     * @tags installation
     * @name ListAllInstallation
     * @request GET:/installation
     */
    listAllInstallation: (params: RequestParams = {}) =>
      this.request<
        InstallationListing[],
        {
          Error?: Error;
        }
      >({
        path: `/installation`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description You must have an active session to make this call. This call is used to check whether the Id you provide is the Id of your current installation or not.
     *
     * @tags installation
     * @name ReadInstallation
     * @request GET:/installation/{itemId}
     */
    readInstallation: (itemId: number, params: RequestParams = {}) =>
      this.request<
        InstallationRead,
        {
          Error?: Error;
        }
      >({
        path: `/installation/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Show the ServerPublicKey for this Installation.
     *
     * @tags server-public-key
     * @name ListAllServerPublicKeyForInstallation
     * @request GET:/installation/{installationID}/server-public-key
     */
    listAllServerPublicKeyForInstallation: (installationId: number, params: RequestParams = {}) =>
      this.request<
        InstallationServerPublicKeyListing[],
        {
          Error?: Error;
        }
      >({
        path: `/installation/${installationId}/server-public-key`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  userCompany = {
    /**
     * @description Return all the known (trade) names for a specific user company.
     *
     * @tags name
     * @name ListAllNameForUserCompany
     * @request GET:/user-company/{user-companyID}/name
     */
    listAllNameForUserCompany: (userCompanyId: number, params: RequestParams = {}) =>
      this.request<
        UserCompanyNameListing[],
        {
          Error?: Error;
        }
      >({
        path: `/user-company/${userCompanyId}/name`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Get a specific company.
     *
     * @tags user-company
     * @name ReadUserCompany
     * @request GET:/user-company/{itemId}
     */
    readUserCompany: (itemId: number, params: RequestParams = {}) =>
      this.request<
        UserCompanyRead,
        {
          Error?: Error;
        }
      >({
        path: `/user-company/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Modify a specific company's data.
     *
     * @tags user-company
     * @name UpdateUserCompany
     * @request PUT:/user-company/{itemId}
     */
    updateUserCompany: (itemId: number, data: UserCompany, params: RequestParams = {}) =>
      this.request<
        UserCompanyUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user-company/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  paymentServiceProviderCredential = {
    /**
     * @description Register a Payment Service Provider and provide credentials
     *
     * @tags payment-service-provider-credential
     * @name ReadPaymentServiceProviderCredential
     * @request GET:/payment-service-provider-credential/{itemId}
     */
    readPaymentServiceProviderCredential: (itemId: number, params: RequestParams = {}) =>
      this.request<
        PaymentServiceProviderCredentialRead,
        {
          Error?: Error;
        }
      >({
        path: `/payment-service-provider-credential/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Register a Payment Service Provider and provide credentials
     *
     * @tags payment-service-provider-credential
     * @name CreatePaymentServiceProviderCredential
     * @request POST:/payment-service-provider-credential
     */
    createPaymentServiceProviderCredential: (data: PaymentServiceProviderCredential, params: RequestParams = {}) =>
      this.request<
        PaymentServiceProviderCredentialCreate,
        {
          Error?: Error;
        }
      >({
        path: `/payment-service-provider-credential`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  sandboxUserCompany = {
    /**
     * @description Used to create a sandbox userCompany.
     *
     * @tags sandbox-user-company
     * @name CreateSandboxUserCompany
     * @request POST:/sandbox-user-company
     */
    createSandboxUserCompany: (data: SandboxUserCompany, params: RequestParams = {}) =>
      this.request<
        SandboxUserCompanyCreate,
        {
          Error?: Error;
        }
      >({
        path: `/sandbox-user-company`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  sandboxUserPerson = {
    /**
     * @description Used to create a sandbox userPerson.
     *
     * @tags sandbox-user-person
     * @name CreateSandboxUserPerson
     * @request POST:/sandbox-user-person
     */
    createSandboxUserPerson: (data: SandboxUserPerson, params: RequestParams = {}) =>
      this.request<
        SandboxUserPersonCreate,
        {
          Error?: Error;
        }
      >({
        path: `/sandbox-user-person`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  serverError = {
    /**
     * @description An endpoint that will always throw an error.
     *
     * @tags server-error
     * @name CreateServerError
     * @request POST:/server-error
     */
    createServerError: (data: ServerError, params: RequestParams = {}) =>
      this.request<
        ServerErrorCreate,
        {
          Error?: Error;
        }
      >({
        path: `/server-error`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  session = {
    /**
     * @description Deletes the current session.
     *
     * @tags session
     * @name DeleteSession
     * @request DELETE:/session/{itemId}
     */
    deleteSession: (itemId: number, params: RequestParams = {}) =>
      this.request<
        SessionDelete,
        {
          Error?: Error;
        }
      >({
        path: `/session/${itemId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
  sessionServer = {
    /**
     * @description Create a new session for a DeviceServer. Provide the Installation token in the "X-Bunq-Client-Authentication" header. And don't forget to create the "X-Bunq-Client-Signature" header. The response contains a Session token that should be used for as the "X-Bunq-Client-Authentication" header for all future API calls. The ip address making this call needs to match the ip address bound to your API key.
     *
     * @tags session-server
     * @name CreateSessionServer
     * @request POST:/session-server
     */
    createSessionServer: (data: SessionServer, params: RequestParams = {}) =>
      this.request<
        SessionServerCreate,
        {
          Error?: Error;
        }
      >({
        path: `/session-server`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  userPaymentServiceProvider = {
    /**
     * @description Used to view UserPaymentServiceProvider for session creation.
     *
     * @tags user-payment-service-provider
     * @name ReadUserPaymentServiceProvider
     * @request GET:/user-payment-service-provider/{itemId}
     */
    readUserPaymentServiceProvider: (itemId: number, params: RequestParams = {}) =>
      this.request<
        UserPaymentServiceProviderRead,
        {
          Error?: Error;
        }
      >({
        path: `/user-payment-service-provider/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  userPerson = {
    /**
     * @description Get a specific person.
     *
     * @tags user-person
     * @name ReadUserPerson
     * @request GET:/user-person/{itemId}
     */
    readUserPerson: (itemId: number, params: RequestParams = {}) =>
      this.request<
        UserPersonRead,
        {
          Error?: Error;
        }
      >({
        path: `/user-person/${itemId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Modify a specific person object's data.
     *
     * @tags user-person
     * @name UpdateUserPerson
     * @request PUT:/user-person/{itemId}
     */
    updateUserPerson: (itemId: number, data: UserPerson, params: RequestParams = {}) =>
      this.request<
        UserPersonUpdate,
        {
          Error?: Error;
        }
      >({
        path: `/user-person/${itemId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
