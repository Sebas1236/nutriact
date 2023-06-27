import { NextRequest } from "next/server";
import { redirect, useRouter } from "next/navigation";
import useLoginModal from "../../../hooks/useLoginModal";

export async function GET(request: Request | NextRequest, {params}: {params: {token: string}}){
    // const loginModal = useLoginModal();
    // loginModal.onOpen
    redirect('/')
}