import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <ThemedView margin>
      <ThemedCard className="mb-5">
        <ThemedTextInput
          placeholder="Nombre Completo"
          autoCapitalize="words"
          autoCorrect={false}
          onChangeText={(value) => setForm({ ...form, name: value })}
        />
        <ThemedTextInput
          placeholder="Correo Electrónico"
          autoCorrect={false}
          onChangeText={(value) => setForm({ ...form, email: value })}
          keyboardType="email-address"
        />
      </ThemedCard>

      <ThemedCard>
        <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
      </ThemedCard>
    </ThemedView>
  );
};
export default TextInputsScreen;
