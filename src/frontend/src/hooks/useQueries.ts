import { useQuery } from "@tanstack/react-query";
import type { Category } from "../backend";
import type { CompanyInfo, Product } from "../backend";
import { useActor } from "./useActor";

export function useProductsByCategory(category: Category) {
  const { actor, isFetching } = useActor();
  return useQuery<Product[]>({
    queryKey: ["products", category],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getProductsByCategory(category);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCompanyInfo() {
  const { actor, isFetching } = useActor();
  return useQuery<CompanyInfo>({
    queryKey: ["companyInfo"],
    queryFn: async () => {
      if (!actor) {
        return {
          name: "Khushi Marble and Granite",
          email: "khushimarblesksg@gmail.com",
          website: "www.khushimarbles.com",
          address: "Makrana Road, Kishangarh, 305801",
          phone: "+91 92529 9172",
        };
      }
      return actor.getCompanyInfo();
    },
    enabled: !!actor && !isFetching,
  });
}
