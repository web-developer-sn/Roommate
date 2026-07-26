'use client'
import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import {useRouter} from "next/navigation";
interface ActionCardProps {
  name?:string,
  title: string;
  subtitle: string;
  icon: ReactNode;
  color: "purple" | "white";
}

export default function ActionCard({
 name,
  title,
  subtitle,
  icon,
  color,
}: ActionCardProps) {
  const router = useRouter();
  const handleClick=()=>{
    if(name==="createGroup"){
      router.push("/create-group");
    }
    if(name==="joinExistingGroup"){
      router.push("/join-existing-group");
    }
  }
  return (
    <button
      className={`w-full rounded-3xl shadow-md transition-all duration-300 hover:scale-[1.02]
      ${
        color === "purple"
          ? "bg-gradient-to-r from-violet-600 to-violet-500 text-white"
          : "bg-white border"
      }`}
     onClick={handleClick}
    >
      <div className="flex items-center justify-between p-5">

        <div className="flex items-center gap-4">

          <div
            className={`h-16 w-16 rounded-full flex items-center justify-center
            ${
              color === "purple"
                ? "bg-white text-violet-600"
                : "bg-green-50 text-green-600"
            }`}
          >
            {icon}
          </div>

          <div className="text-left">

            <h2
              className={`font-bold text-lg ${
                color === "purple"
                  ? "text-white"
                  : "text-gray-900"
              }`}
            >
              {title}
            </h2>

            <p
              className={`text-sm ${
                color === "purple"
                  ? "text-violet-100"
                  : "text-gray-500"
              }`}
            >
              {subtitle}
            </p>

          </div>

        </div>

        <ChevronRight
          size={28}
          className={
            color === "purple"
              ? "text-white"
              : "text-gray-500"
          }
        />

      </div>
    </button>
  );
}