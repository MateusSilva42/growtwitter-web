import { CardContent } from "@mui/material";

interface LoginCardProps {
    children: React.ReactNode;
    backgroundColor?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({children, backgroundColor}) => {
    const loginCard = {
        backgroundColor: backgroundColor || '#fff',
        display: 'flex',
        height: 'auto',
        width: '60%',
        padding: '0px',
        borderRadius: '10px',

};

    const cardContentStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '0',
    }

    return (
        <div style={loginCard}>
            <CardContent >
                <div style={cardContentStyle as any}>

                </div>
                {children}
            </CardContent>
        </div>
    );
};

export default LoginCard;