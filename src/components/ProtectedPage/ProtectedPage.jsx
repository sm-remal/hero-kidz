"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const ProtectedPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push(`/login?callbackUrl=${window.location.pathname}`);
    }
  }, [status, router]);

  if (status === "loading") return <div>Loading...</div>;

  return <div>Welcome {session.user.name}</div>;
};

export default ProtectedPage;
