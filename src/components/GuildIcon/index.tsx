import React from "react";
import { View, Image } from "react-native";

import { styles } from "./styles";

export function GuildIcon() {
  const uri =
    "https://www.animesxis.com.br/wp-content/uploads/2017/02/discord-icon.png";
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
}
