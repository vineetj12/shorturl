"use client";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { history } from "@/atom/Atoms";
import { useSession } from "next-auth/react";
import axios from "axios";

export default function UserPage() {
  const { data: session, status } = useSession();
  const [data, setData] = useRecoilState(history);

  useEffect(() => {
    if (status !== "authenticated") return;

    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/user", {
          params: { username: session?.user?.name },
        });
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [session?.user?.name, status, setData]);

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">User Data</h1>
      {data?.length ? (
        data.map((item, index) => (
          <div key={index} className="mb-2">
            {JSON.stringify(item)}
          </div>
        ))
      ) : (
        <p>No data available or not authenticated.</p>
      )}
    </div>
  );
}
