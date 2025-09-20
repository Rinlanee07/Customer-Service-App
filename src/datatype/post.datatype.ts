export interface CreateWarehouseData {
    organizationId: number;
    name: string;
    location: string;
    contactName: string;
    contactEmail: string;
    contactTel: string;
    branchId?: number;
    receiveEmail: boolean;
}

export interface CreateCategory {
    name: string;
    description?: string;
    organizationId: number;
}

export interface CreateSupplier {
    companyName: string
    address: string
    contactName: string
    contactTel: string
    contactEmail: string
    status: string
    categoryId: string
}

export interface TransactionCustomer {
    createdBy?: number | null;
    date?: Date | null;
    implementer?: string | null;
    shopType?: string | null;
    siteType?: string | null;
    branchType?: string | null;
    customization?: boolean | null;
    customDetail?: string | null;
    shopName: string;
    siteName: string;
    contactPort: string;
    package: string;
    printer?: Printer[]; // Defined in Printer.ts
    addOn?: AddOn[]; // Defined in AddOn.ts
    device?: Device[]; // Defined in Device.ts
    siteDetail?: string[];
    branchDetail?: string[];
    note?: string[];
    testAppDetail?: string[];
    frontEndDetail?: string[];
    backEndDetail?: string[];
    dateTrain?: Date | null;
    deliverDetail?: string[];
    dateDeliver?: Date | null;
}

export interface PostClaimOrderData {
    category: string[];
    model?: string | null;
    serialNumber?: string | null;
    warrantyStatus?: boolean | null;
    accessories: string[];
    refNo?: string | null;
    trackNo?: string | null;
    symptom?: string | null;
    resolution?: string | null;
    receiverName?: string | null;
    receiverService?: string | null;
    receiverDate?: Date | null;
    receiverServiceDate?: Date | null;
    senderName?: string | null;
    senderService?: string | null;
    senderDate?: Date | null;
    senderServiceDate?: Date | null;
    date?: Date | null;
    address?: string | null;
    price?: number | null;
    signatureReceiverName?: string | null,
    signatureReceiverService?: string | null,
    signatureSenderService?: string | null,
    signatureSenderName?: string | null,
    documentType: string
}


export interface Printer {
    id?: number;
    model: string;
    serial: string;
    warrantyShop?: Date | null;
    warrantyVendor?: Date | null;
    transactionCustomerId?: number | null;
}

export interface AddOn {
    id?: number;
    device?: string | null;
    serial?: string | null;
    transactionCustomerId?: number | null;
}

export interface Device {
    id?: number;
    device?: string | null;
    model: string;
    serial: string;
    transactionCustomerId?: number | null;
}