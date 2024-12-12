import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";

const isIOS = Platform.OS === "ios";

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <KeyboardAvoidingView behavior={isIOS ? "height" : undefined}>
      <ScrollView>
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
            <ThemedTextInput
              placeholder="Telefono"
              autoCorrect={false}
              onChangeText={(value) => setForm({ ...form, phone: value })}
              keyboardType="phone-pad"
            />
          </ThemedCard>

          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard
          // style={{
          //   marginBottom: isIOS ? 100 : 10,
          // }}
          >
            <ThemedTextInput
              placeholder="Telefono"
              autoCorrect={false}
              onChangeText={(value) => setForm({ ...form, phone: value })}
              keyboardType="phone-pad"
            />
          </ThemedCard>
        </ThemedView>
        {isIOS && <View style={{ marginBottom: 100 }} />}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
