export interface BranchStep {
  branchType?: string | undefined;
  branchDetail?: string[] | undefined;
  note?: string[] | undefined;
}

export interface ShopInformationStep {
  shopType: string;
  customization?: boolean; // optional
  customDetail?: string; // optional
  shopName: string;
  siteName: string;
  contactPort: string;
  package: string;
  printer?:
    | {
        model: string;
        serial: string;
        warrantyShop?: Date; // optional
        warrantyVendor?: Date; // optional
      }[]
    | undefined; // optional
  addOn?:
    | {
        device?: string; // optional
        serial?: string; // optional
      }[]
    | undefined; // optional
  device?:
    | {
        device?: string; // optional
        model: string;
        serial: string;
      }[]
    | undefined; // optional
}

export interface SetupSystemStep {
  siteType?: string | undefined;
  siteDetail?: (string | undefined)[] | undefined;
}

export interface TrainStep {
  frontEndDetail?: string[] | undefined;
  backEndDetail?: string[] | undefined;
  dateTrain?: Date | undefined;
}

export interface DeliverStep {
  deliverDetail?: string[] | undefined;
  dateDeliver?: Date | undefined;
  signatureSupport?: string;
}
