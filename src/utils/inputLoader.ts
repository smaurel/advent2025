export type InputVariant = "main" | "test";

function buildKey(dayNumber: number, fileName: "input.txt" | "test.txt") {
  const dayStr = String(dayNumber).padStart(2, "0");
  return `../days/day${dayStr}/${fileName}`;
}

/**
 * Charge un fichier d'input pour un jour donné
 * variant = 'main' => input.txt
 * variant = 'test' => test.txt
 */
export async function loadInput(dayNumber: number, variant: InputVariant = "main"): Promise<string> {
  const key = buildKey(dayNumber, variant === "test" ? "test.txt" : "input.txt");

  try {
    const module = await import(key + "?raw");
    return module.default;
  } catch (error) {
    throw new Error(
      `Impossible de charger ${
        variant === "test" ? "l'input de test" : "l'input"
      } pour le jour ${dayNumber}. Assurez-vous que src/days/day${String(dayNumber).padStart(2, "0")}/${
        variant === "test" ? "test.txt" : "input.txt"
      } existe.`,
    );
  }

  return "";
}
