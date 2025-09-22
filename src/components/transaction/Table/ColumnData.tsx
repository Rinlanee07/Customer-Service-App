import { ClaimOrderData, ImplementationDetails } from "@/datatype/fetch.datatype";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { CopyX } from "lucide-react";
import moment from "moment";
import Link from "next/link";

export interface ColumnProps<T> {
    accessorKey: string;
    header: string;
    cell?: (row: { row: T }) => React.ReactNode; // Pass the entire row object here
}

export const columnsTransaction: ColumnProps<ImplementationDetails>[] = [
    {
        accessorKey: 'id',
        header: "Action",
        cell: ({ row }: { row: ImplementationDetails }) => {
            const serializedData = {
                id: row.id,
                createdAt: row.createdAt,
                updatedAt: row.updatedAt,
                createdBy: row.createdBy,
                date: row.date,
                implementer: row.implementer,
                shopType: row.shopType,
                siteType: row.siteType,
                branchType: row.branchType,
                customization: row.customization,
                customDetail: row.customDetail,
                shopName: row.shopName,
                siteName: row.siteName,
                noteShop: row.noteShop,
                contactPort: row.contactPort,
                package: row.package,
                siteDetail: JSON.stringify(row.siteDetail),
                branchDetail: JSON.stringify(row.branchDetail),
                note: JSON.stringify(row.note),
                testAppDetail: JSON.stringify(row.testAppDetail),
                frontEndDetail: JSON.stringify(row.frontEndDetail),
                backEndDetail: JSON.stringify(row.backEndDetail),
                dateTrain: row.dateTrain,
                deliverDetail: JSON.stringify(row.deliverDetail),
                dateDeliver: row.dateDeliver,
                signatureSupport: row.signatureSupport,
                signatureTrainer: row.signatureTrainer,
                addOn: JSON.stringify(row.addOn),
                printer: JSON.stringify(row.printer),
                device: JSON.stringify(row.device),
            };
            return (
                <Link
                    href={{
                        pathname: `/implementation/updatestep/shopinformation`,
                        query: serializedData, // Send the entire row data as query parameters
                    }}
                >
                    <Pencil2Icon />
                </Link>
            );
        },
    },
    {
        accessorKey: 'createdAt',
        header: 'Created At',
        cell: ({ row }: { row: ImplementationDetails }) => {
            const value = row.createdAt;
            return value ? <div>{moment(value).format('DD-MMM-YYYY HH:mm:ss')}</div> : <div>-</div>;
        },
    },
    {
        accessorKey: 'updatedAt',
        header: 'Updated At',
        cell: ({ row }: { row: ImplementationDetails }) => {
            const value = row.updatedAt;
            return value ? <div>{moment(value).format('DD-MMM-YYYY HH:mm:ss')}</div> : <div>-</div>;
        },
    },
    {
        accessorKey: 'createdBy',
        header: 'Created By',
        cell: ({ row }: { row: ImplementationDetails }) => <div>{row.createdBy}</div>,
    },
    {
        accessorKey: 'date',
        header: 'Date',
        cell: ({ row }: { row: ImplementationDetails }) => {
            const value = row.date;
            return value ? <div>{moment(value).format('DD-MMM-YYYY HH:mm:ss')}</div> : <div>-</div>;
        },
    },
    {
        accessorKey: 'shopType',
        header: 'Shop Type',
        cell: ({ row }: { row: ImplementationDetails }) => <div>{row.shopType}</div>,
    },
    {
        accessorKey: 'siteType',
        header: 'Site Type',
        cell: ({ row }: { row: ImplementationDetails }) => <div>{row.siteType}</div>,
    },
    {
        accessorKey: 'branchType',
        header: 'Branch Type',
        cell: ({ row }: { row: ImplementationDetails }) => <div>{row.branchType}</div>,
    },
    {
        accessorKey: 'customization',
        header: 'Customization',
        cell: ({ row }: { row: ImplementationDetails }) => <div>{row.customization}</div>,
    },
    {
        accessorKey: 'customDetail',
        header: 'Custom Detail',
        cell: ({ row }: { row: ImplementationDetails }) => <div>{row.customDetail}</div>,
    },
    {
        accessorKey: 'shopName',
        header: 'Shop Name',
        cell: ({ row }: { row: ImplementationDetails }) => <div>{row.shopName}</div>,
    },
    {
        accessorKey: 'siteName',
        header: 'Site Name',
        cell: ({ row }: { row: ImplementationDetails }) => <div>{row.siteName}</div>,
    },
    {
        accessorKey: 'contactPort',
        header: 'Contact Port',
        cell: ({ row }: { row: ImplementationDetails }) => <div>{row.contactPort}</div>,
    },
    {
        accessorKey: 'package',
        header: 'Package',
        cell: ({ row }: { row: ImplementationDetails }) => <div>{row.package}</div>,
    },
    {
        accessorKey: 'siteDetail',
        header: 'Site Detail',
        cell: ({ row }: { row: ImplementationDetails }) => (
            <div>{Array.isArray(row.siteDetail) ? row.siteDetail.join(', ') : row.siteDetail}</div>
        ),
    },
    {
        accessorKey: 'branchDetail',
        header: 'Branch Detail',
        cell: ({ row }: { row: ImplementationDetails }) => (
            <div>{Array.isArray(row.branchDetail) ? row.branchDetail.join(', ') : row.branchDetail}</div>
        ),
    },
    {
        accessorKey: 'note',
        header: 'Note',
        cell: ({ row }: { row: ImplementationDetails }) => (
            <div>{Array.isArray(row.note) ? row.note.join(', ') : row.note}</div>
        ),
    },
    {
        accessorKey: 'noteShop',
        header: 'Note Shop',
        cell: ({ row }: { row: ImplementationDetails }) => <div>{row.noteShop}</div>,
    },
    {
        accessorKey: 'testAppDetail',
        header: 'Test App Detail',
        cell: ({ row }: { row: ImplementationDetails }) => (
            <div>{Array.isArray(row.testAppDetail) ? row.testAppDetail.join(', ') : row.testAppDetail}</div>
        ),
    },
    {
        accessorKey: 'frontEndDetail',
        header: 'Front End Detail',
        cell: ({ row }: { row: ImplementationDetails }) => (
            <div>{Array.isArray(row.frontEndDetail) ? row.frontEndDetail.join(', ') : row.frontEndDetail}</div>
        ),
    },
    {
        accessorKey: 'backEndDetail',
        header: 'Back End Detail',
        cell: ({ row }: { row: ImplementationDetails }) => (
            <div>{Array.isArray(row.backEndDetail) ? row.backEndDetail.join(', ') : row.backEndDetail}</div>
        ),
    },
    {
        accessorKey: 'dateTrain',
        header: 'Date Train',
        cell: ({ row }: { row: ImplementationDetails }) => {
            const value = row.dateTrain;
            return value ? <div>{moment(value).format('DD-MMM-YYYY HH:mm:ss')}</div> : <div>-</div>;
        },
    },
    {
        accessorKey: 'signatureTrainer',
        header: 'Signature Trainer',
        cell: ({ row }: { row: ImplementationDetails }) => (
            row.signatureTrainer ? <img src={row.signatureTrainer.toString()} alt="Trainer Signature" /> : <CopyX />
        ),
    },
    {
        accessorKey: 'deliverDetail',
        header: 'Deliver Detail',
        cell: ({ row }: { row: ImplementationDetails }) => (
            <div>{Array.isArray(row.deliverDetail) ? row.deliverDetail.join(', ') : row.deliverDetail}</div>
        ),
    },
    {
        accessorKey: 'dateDeliver',
        header: 'Date Deliver',
        cell: ({ row }: { row: ImplementationDetails }) => {
            const value = row.dateDeliver;
            return value ? <div>{moment(value).format('DD-MMM-YYYY HH:mm:ss')}</div> : <div>-</div>;
        },
    },
    {
        accessorKey: 'signatureSupport',
        header: 'Signature Support',
        cell: ({ row }: { row: ImplementationDetails }) => (
            row.signatureSupport ? <img src={row.signatureSupport.toString()} alt="Support Signature" /> : <CopyX />
        ),
    },
];



export const columnsClaimOrder: ColumnProps<ClaimOrderData>[] = [
    {
        accessorKey: 'id',
        header: "Action",
        cell: ({ row }: { row: ClaimOrderData }) => {
            const serializedData = {
                id: row.id,
                createdAt: row.createAt,
                updatedAt: row.updateAt,
                createdBy: row.createdBy,
                date: row.date,
                documentType: row.documentType,
                companyName: row.companyName,
                category: JSON.stringify(row.category),
                model: row.model,
                serialNumber: row.serialNumber,
                warrantyStatus: row.warrantyStatus,
                accessories: JSON.stringify(row.accessories),
                refNo: row.refNo,
                price: row.price,
                trackNo: row.trackNo,
                symptom: row.symptom,
                resolution: row.resolution,
                receiverName: row.receiverName,
                receiverService: row.receiverService,
                receiverDate: row.receiverDate,
                receiverServiceDate: row.receiverServiceDate,
                senderName: row.senderName,
                senderService: row.senderService,
                senderDate: row.senderDate,
                senderServiceDate: row.senderServiceDate,
                address: row.address,
                signatureReceiverName: row.signatureReceiverName,
                signatureReceiverService: row.signatureReceiverService,
                signatureSenderService: row.signatureSenderService,
                signatureSenderName: row.signatureSenderName
            };
            return (
                <Link
                    href={{
                        pathname: `/claimorder/update`,
                        query: serializedData, // Send the entire row data as query parameters
                    }}
                >
                    <Pencil2Icon />
                </Link>
            );
        },
    },
    {
        accessorKey: 'documentType',
        header: 'Document Type',
        cell: ({ row }: { row: ClaimOrderData }) => <div>{row.documentType}</div>,
    },
    {
        accessorKey: 'category',
        header: 'Category',
        cell: ({ row }: { row: ClaimOrderData }) => <div>{row.category?.join(', ')}</div>,
    },
    {
        accessorKey: 'model',
        header: 'Model',
        cell: ({ row }: { row: ClaimOrderData }) => <div>{row.model}</div>,
    },
    {
        accessorKey: 'serialNumber',
        header: 'Serial Number',
        cell: ({ row }: { row: ClaimOrderData }) => <div>{row.serialNumber}</div>,
    },
    {
        accessorKey: 'warrantyStatus',
        header: 'Warranty Status',
        cell: ({ row }: { row: ClaimOrderData }) => <div>{row.warrantyStatus ? 'In-Warranty' : 'Out-of-Warranty'}</div>,
    },
    {
        accessorKey: 'price',
        header: 'Price',
        cell: ({ row }: { row: ClaimOrderData }) => <div>{row.price}</div>,
    },
    {
        accessorKey: 'accessories',
        header: 'Accessories',
        cell: ({ row }: { row: ClaimOrderData }) => <div>{row.accessories?.join(', ')}</div>,
    },
    {
        accessorKey: 'symptom',
        header: 'Symptom',
        cell: ({ row }: { row: ClaimOrderData }) => <div className="overflow-auto">{row.symptom}</div>,
    },
    {
        accessorKey: 'resolution',
        header: 'Resolution',
        cell: ({ row }: { row: ClaimOrderData }) => <div className="overflow-auto">{row.resolution}</div>,
    },
    {
        accessorKey: 'receiverName',
        header: 'Receiver Name',
        cell: ({ row }: { row: ClaimOrderData }) => <div>{row.receiverName}</div>,
    },
    {
        accessorKey: 'receiverService',
        header: 'Receiver Service',
        cell: ({ row }: { row: ClaimOrderData }) => <div>{row.receiverService}</div>,
    },
    {
        accessorKey: 'receiverDate',
        header: 'Receiver Date',
        cell: ({ row }: { row: ClaimOrderData }) => (
            row.receiverDate ? <div>{moment(row.receiverDate).format('DD-MMM-YYYY HH:mm:ss')}</div> : <div>-</div>
        ),
    },
    {
        accessorKey: 'signatureReceiverName',
        header: 'Signature Receiver Name',
        cell: ({ row }: { row: ClaimOrderData }) =>
            row.signatureReceiverName ? <img src={row.signatureReceiverName} alt="Receiver Signature" /> : <CopyX />,
    },
    {
        accessorKey: 'senderName',
        header: 'Sender Name',
        cell: ({ row }: { row: ClaimOrderData }) => <div>{row.senderName}</div>,
    },
    {
        accessorKey: 'senderService',
        header: 'Sender Service',
        cell: ({ row }: { row: ClaimOrderData }) => <div>{row.senderService}</div>,
    },
    {
        accessorKey: 'companyName',
        header: 'Company Name',
        cell: ({ row }: { row: ClaimOrderData }) => <div>{row.companyName}</div>,
    },
    {
        accessorKey: 'senderDate',
        header: 'Sender Date',
        cell: ({ row }: { row: ClaimOrderData }) => (
            row.senderDate ? <div>{moment(row.senderDate).format('DD-MMM-YYYY HH:mm:ss')}</div> : <div>-</div>
        ),
    },
    {
        accessorKey: 'signatureSenderName',
        header: 'Signature Sender Name',
        cell: ({ row }: { row: ClaimOrderData }) =>
            row.signatureSenderName ? <img src={row.signatureSenderName} alt="Sender Signature" /> : <CopyX />,
    },
    {
        accessorKey: 'date',
        header: 'Date',
        cell: ({ row }: { row: ClaimOrderData }) => (
            row.date ? <div>{moment(row.date).format('DD-MMM-YYYY HH:mm:ss')}</div> : <div>-</div>
        ),
    },
    {
        accessorKey: 'address',
        header: 'Address',
        cell: ({ row }: { row: ClaimOrderData }) => <div>{row.address}</div>,
    },
    {
        accessorKey: 'createdBy',
        header: 'Created By',
        cell: ({ row }: { row: ClaimOrderData }) => <div>{row.createdBy}</div>,
    },
    {
        accessorKey: 'createAt',
        header: 'Created At',
        cell: ({ row }: { row: ClaimOrderData }) => (
            row.createAt ? <div>{moment(row.createAt).format('DD-MMM-YYYY HH:mm:ss')}</div> : <div>-</div>
        ),
    },
    {
        accessorKey: 'updateAt',
        header: 'Updated At',
        cell: ({ row }: { row: ClaimOrderData }) => (
            row.updateAt ? <div>{moment(row.updateAt).format('DD-MMM-YYYY HH:mm:ss')}</div> : <div>-</div>
        ),
    },
];