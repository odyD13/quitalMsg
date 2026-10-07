type UserStatus = "Online" | "Offline" | "Away";
type MsgStatus = "Sending" | "Sent" | "Delivered" | "Read" | "Failed";
// type MsgType = "Text" | "Image" | "File"; 

interface UserData {
    username: string,
    avatarUrl?: string;
    status: UserStatus,
}

type User = UserData & {id:string}

interface Message {
    id: string,
    chatID: string,
    senderId: string,
    content: string,
    // type: MsgType,
    status: MsgStatus,
    date: Date
}

const Styles = {
    colors: {
        Orange: "fda014",
        White: "fafafa",
        Lightgrey: "f5f5f6",
        Neutral100: "e9ecef",
        Neutral200: "dee2e6",
        Neutral300: "ced4da",
        Neutral400: "adb5bd",
        Neutral500: "6c757d",
        Neutral600: "495057",
        Neutral700: "343a40",
        Neutral800: "212529",
    },
    spacing: {
        
    }
}