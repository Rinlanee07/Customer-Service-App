export interface Fetch {
  id: number;
  companyName: string;
  address: string;
  contactName: string;
  contactTel: string;
  contactEmail: string;
  description: string;
  name: string;
  status: boolean;
}
export interface CategoryData {
  createdAt: Date;
  description: string;
  id: number;
  name: string;
  organizationId: number;
  updatedAt: Date;
}

export interface WarehouseData {
  id: number;
  organizationId: number;
  name: string;
  location: string;
  contactName: string;
  contactEmail: string;
  contactTel: string;
  branchId: number;
  receiveEmail: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface SupplierData {
  id: number;
  companyName: string;
  address: string;
  contactName: string;
  contactTel: string;
  contactEmail: string;
  status: string;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface StockData {
  id: number;
  code: string;
  organizationId: number;
  name: string;
  description: string;
  baseUnitId: number;
  displayUnitId: number;
  stockLevel: number;
  reorderLevel: number;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface UnitData {
  id: number;
  name: string;
  description: string;
  isBaseUnit: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ImplementData {
  id: number;
  name: string;
  description: string;
  isBaseUnit: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ImplementationDetails {
  id: number;
  createdAt: string;
  updatedAt: string;
  createdBy: number;
  date: string;
  implementer: string | null;
  shopType: string;
  siteType: string;
  branchType: string;
  customization: boolean;
  customDetail: string;
  shopName: string;
  siteName: string;
  contactPort: string;
  package: string;
  siteDetail: string[];
  branchDetail: string[];
  note: string[];
  testAppDetail: string[];
  frontEndDetail: string[];
  backEndDetail: string[];
  dateTrain: string;
  deliverDetail: string[];
  dateDeliver: string;
  signatureSupport: string;
  signatureTrainer: string;
  printer: Printer[];
  addOn: AddOn[];
  device: Device[];
  noteShop: string;
}

export interface Printer {
  id: number;
  model: string;
  serial: string;
  warrantyShop: string; // ISO 8601 date string
  warrantyVendor: string; // ISO 8601 date string
  transactionCustomerId: number;
}

export interface AddOn {
  id: number;
  device: string;
  serial: string;
  transactionCustomerId: number;
}

export interface Device {
  id: number;
  device: string;
  model: string;
  serial: string;
  transactionCustomerId: number;
}

export interface ClaimOrderData {
  id: number;
  category: string[];
  model?: string | null;
  serialNumber?: string | null;
  warrantyStatus?: boolean | null;
  accessories: string[];
  refNo?: string | null;
  price?: number | null;
  trackNo?: string | null;
  symptom?: string | null;
  resolution?: string | null;
  receiverName?: string | null;
  receiverService?: string | null;
  receiverDate?: string | null;
  receiverServiceDate?: string | null;
  senderName?: string | null;
  senderService?: string | null;
  senderDate?: string | null;
  senderServiceDate?: string | null;
  date?: string | null;
  address?: string | null;
  createdBy?: number | null;
  createAt: string;
  updateAt: string;
  signatureReceiverName?: string | null;
  signatureReceiverService?: string | null;
  signatureSenderService?: string | null;
  signatureSenderName?: string | null;
  documentType: string;
  companyName?: string;
}

export interface ClaimOrderDataNoNull {
  id: number;
  category: string[];
  model?: string;
  serialNumber?: string;
  warrantyStatus?: boolean;
  accessories: string[];
  refNo?: string;
  price?: number;
  trackNo?: string;
  symptom?: string;
  resolution?: string;
  receiverName?: string;
  receiverService?: string;
  receiverDate?: string;
  receiverServiceDate?: string;
  senderName?: string;
  senderService?: string;
  senderDate?: string;
  senderServiceDate?: string;
  date?: string;
  address?: string;
  createdBy?: number;
  createAt: string;
  updateAt: string;
  signatureReceiverName?: string;
  signatureReceiverService?: string;
  signatureSenderService?: string;
  signatureSenderName?: string;
  documentType: string;
}
