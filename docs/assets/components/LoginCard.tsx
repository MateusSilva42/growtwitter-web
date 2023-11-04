import { CardContent } from "@mui/material";

interface LoginCardProps {
    children: React.ReactNode;
    backgroundColor?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({children, backgroundColor}) => {
    const loginCard = {
        backgroundColor: backgroundColor || '#1d9bf0',
        borderRadius: '10px',
    };

    const cardContentStyle = {
        padding: '10px',
    }

    return (
        <div style={loginCard}>
            <CardContent style={cardContentStyle as any}>
                {children}
            </CardContent>
        </div>
    );
};

export default LoginCard;