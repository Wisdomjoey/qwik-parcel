"use client";

import React, { useEffect, useState } from "react";
import Tracking from "../../components/Tracking/Tracking";
import Loader from "../../components/Loader";
import { useSearchParams } from "next/navigation";

export default function TrackingPage() {
  const id = useSearchParams().get("id");
  const [error, setError] = useState();
  const [loading, setLoading] = useState(!!id);
  const [data, setData] = useState();

  useEffect(() => {
    if (!id) return;

    setLoading(true);

    const fetchData = async () => {
      const res = await fetch("https://jz-cargo.vercel.app/api/tracking", {
        method: "POST",
        body: JSON.stringify({
          id,
        }),
      });

      const { data, success, message } = await res.json();

      if (!success) {
        setError(message);
      } else {
        setData(data);
      }

      setLoading(false);
    };

    fetchData();
  }, [id]);

  if (loading) return <Loader />;

  return <Tracking data={data} error={error} />;
}
