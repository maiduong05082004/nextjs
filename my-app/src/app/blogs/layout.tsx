import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Blogs list",
    description: "See blogs briefly",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>

    );
}
