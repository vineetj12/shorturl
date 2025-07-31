
"use client";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useSession } from "next-auth/react";
import axios from "axios";
import { history } from "@/atom/Atoms";

export default function UserPage() {
  const { data: session, status } = useSession();
  const [data, setData] = useRecoilState(history);

  useEffect(() => {
    if (status !== "authenticated") return;

    async function fetchHistory() {
      const response = await axios.get("/api/user", {
        params: { username: session?.user?.name },
      });
      setData(response.data.data);
    }

    fetchHistory();
  }, [session?.user?.name, status, setData]);

  return <div>{JSON.stringify(data)}</div>;
}
