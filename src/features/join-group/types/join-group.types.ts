export interface JoinGroupInput {
  inviteCode: string;
}

export interface JoinGroupResponse {
  success: boolean;
  groupId: string;
}