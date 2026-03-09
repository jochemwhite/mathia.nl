import { ReactNode } from "react";

export interface ServiceItemType {
  text: string;
  sub?: string[];
}

export interface PricingCardType {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  items: ServiceItemType[];
  firstSession: string;
  recurring: string;
  recurringLabel: string;
  icon: ReactNode;
}
