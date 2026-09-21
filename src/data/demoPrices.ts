// DEMO: precios ficticios, únicamente para la pantalla de carga de pedidos en modo demostración.
// DEMO: no representan valores comerciales reales y no deben usarse para cotizar.

/** Precio unitario ficticio por SKU (pesos). */
export const demoPrices: Record<string, number> = {
  // DEMO
  "MNC-001": 18500,
  "MNC-004": 18900,
  "MNC-008": 19200,
  "MNC-012": 19800,
  "MNC-015": 20100,
  "MNC-019": 20500,
  "MNC-022": 21000,
  "MNC-026": 21600,
  "MNC-031": 22400,
  "MNC-CRV-101": 27300,
  "MNC-CRV-105": 27900,
  "MNC-CRV-109": 28400,
  "MNC-LXR-201": 31200,
  "MNC-LXR-205": 31800,
  "MNC-LXR-212": 32600,
  "MNC-VLV-301": 29400,
  "MNC-VLV-306": 29900,
  "MNC-VLV-310": 30500,
  "MLN-120-001": 41500,
  "MLN-120-002": 41900,
  "MLN-120-003": 42400,
  "MLN-120-008": 43100,
  "MLN-120-011": 43800,
  "MLN-120-030": 44600,
  "MLN-100-015": 36700,
  "MLN-100-018": 37200,
  "MLN-080-022": 28800,
  "MLN-TC-501": 12400,
  "MLN-TC-504": 12900,
  "MLN-TC-601": 14300,
  "MLN-TC-605": 14800,
  "MLN-TC-701": 16200,
  "MLN-TC-708": 16900,
  "MLN-TC-801": 17600,
  "MLN-TC-805": 18100,
  "MLN-TC-901": 19400,
};

/** Precio unitario ficticio de referencia cuando el SKU no tiene valor cargado. */
export const demoFallbackPrice = 20000; // DEMO

export function getDemoPrice(sku: string): number {
  return demoPrices[sku] ?? demoFallbackPrice;
}
