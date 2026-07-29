"use client";

import { useMutation } from "@tanstack/react-query";

import { joinGroupService } from "../services/join-group.service";

export function useJoinGroup() {
  return useMutation({
    mutationFn: joinGroupService,
  });
}