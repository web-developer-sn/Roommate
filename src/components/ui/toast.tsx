

"use client";

import { toast } from "react-toastify";
import CustomToast from "@/components/ui/CustomToast";

export const showToast = {
  success(title: string, message?: string) {
    toast(
      <CustomToast
        type="success"
        title={title}
        message={message}
      />
    );
  },

  error(title: string, message?: string) {
    toast(
      <CustomToast
        type="error"
        title={title}
        message={message}
      />
    );
  },

  warning(title: string, message?: string) {
    toast(
      <CustomToast
        type="warning"
        title={title}
        message={message}
      />
    );
  },

  info(title: string, message?: string) {
    toast(
      <CustomToast
        type="info"
        title={title}
        message={message}
      />
    );
  },
};