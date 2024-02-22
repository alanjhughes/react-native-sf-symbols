import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, Text, PlatformColor } from "react-native";
import {
  Symbol,
  SymbolModuleViewProps,
  AnimationEffect,
} from "react-native-sf-symbols";

const names = [
  "keyboard.badge.ellipsis",
  "bandage",
  "minus",
  "beats.powerbeats3.right",
  "textformat.superscript",
  "laser.burst",
  "polishzlotysign.circle.fill",
  "exclamationmark.circle",
  "pesosign.square",
  "point.topleft.down.to.point.bottomright.filled.curvepath",
  "point.topleft.filled.down.to.point.bottomright.curvepath",
  "figure.open.water.swim",
  "key.viewfinder",
  "waveform.path.ecg.rectangle",
  "door.garage.double.bay.open.trianglebadge.exclamationmark",
  "figure.climbing",
  "arrow.up.and.line.horizontal.and.arrow.down",
  "person.3.fill",
  "person.bubble.fill",
  "mic.slash.circle.fill",
  "lizard.circle",
  "lock.slash.fill",
  "mic.fill",
  "flag.slash",
  "plus.rectangle.portrait",
  "polishzlotysign.square.fill",
  "tugriksign",
  "cross.fill",
  "tugriksign.circle",
  "teletype.circle",
  "bookmark.slash.fill",
  "iphone.gen1.slash.circle.fill",
  "lessthan",
  "figure.fall.circle",
  "figure.child.and.lock.open.fill",
  "photo.badge.arrow.down",
  "rupeesign.circle.fill",
  "suv.side.and.exclamationmark",
  "person.badge.shield.checkmark.fill",
  "arrowshape.turn.up.left.2.circle.fill",
  "eraser.line.dashed.fill",
  "guaranisign.square",
  "person.crop.square.badge.camera",
  "figure.softball",
  "poweroutlet.type.i.square.fill",
  "sun.rain.fill",
  "moon",
  "distribute.vertical.center.fill",
  "homepod.fill",
  "arrow.up.left.and.down.right.and.arrow.up.right.and.down.left",
  "exclamationmark.square.fill",
  "cloud.bolt.rain.circle",
  "flame.circle.fill",
  "beats.powerbeatspro.right",
  "bird.circle",
  "asterisk",
  "character.book.closed.zh",
  "figure.seated.seatbelt",
  "person.badge.minus",
  "info.circle",
  "wineglass",
  "francsign.square",
  "figure.seated.side.air.distribution.upper",
  "cloud.sun.rain.circle.fill",
  "arrow.left.and.line.vertical.and.arrow.right",
  "plus.bubble.fill",
  "questionmark.key.filled",
  "distribute.horizontal.center",
  "slider.horizontal.2.gobackward",
  "eurozonesign.square",
  "figure.rugby",
  "ellipsis.circle.fill",
  "speaker.slash.circle",
];

export default function App() {
  const [symbolNames, setSymbolNames] = useState<string[]>(names);
  return (
    <View style={styles.container}>
      <Symbol
        name="externaldrive.fill.badge.wifi"
        style={{ width: 80, height: 80, margin: 5 }}
        resizeMode="scaleAspectFit"
        type="hierarchical"
        animationSpec={{
          effect: {
            type: "bounce",
            direction: "down",
          },
          repeating: true,
          speed: 0.2,
        }}
      />

      <Symbol
        name="externaldrive.badge.wifi"
        style={{ width: 80, height: 80, margin: 5 }}
        resizeMode="scaleAspectFit"
        animationSpec={{
          variableAnimationSpec: {
            cumulative: true,
            dimInactiveLayers: false,
          },
        }}
      />

      <Symbol
        name="pencil.tip.crop.circle.badge.plus"
        style={{ width: 80, height: 80, margin: 5 }}
        resizeMode="scaleAspectFit"
        tint="red"
        type="palette"
        animationSpec={{
          effect: {
            type: "scale",
            direction: "up",
            wholeSymbol: false,
          },
          repeating: true,
          speed: 0.8,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 44,
    alignItems: "center",
  },
});
