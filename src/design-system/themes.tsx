import { createContext, useState } from "react";
import styled from "styled-components";
const cndUrl = (process.env.CDN_URL as string) || "";
export const ThemeRoot = styled.div`
  display: contents;
  --colors-primitive-black: #000000ff;
  --radius-demo: 12px;
  --spacing-untitled: 10px;
  --svgs-types-featuresIocns-components: url("${cndUrl}/assets/images/c482ea5a-5153-4511-aac7-8846986b97c2.svg");
  --svgs-types-featuresIocns-cms: url("${cndUrl}/assets/images/4d860c7f-0f03-486c-b0cb-3aaded406fa6.svg");
  --svgs-types-icons-go: url("${cndUrl}/assets/images/d645b362-fe3f-4f7d-8cbd-61e77b682e69.svg");
  --svgs-types-screenshot-logicTab: url("${cndUrl}/assets/images/0e6b8fba-d46e-4404-ac61-fb58830a7603.png");
  --svgs-types-social-github: url("${cndUrl}/assets/images/e37103e2-b299-4cb0-b30e-d34b73504daa.svg");
  --svgs-types-logo-profile: url("${cndUrl}/assets/images/174ba925-56e6-4393-bfdb-ee34269b9529.jpg");
  --svgs-types-info-clone: url("${cndUrl}/assets/images/a06361fb-67ef-47e1-9fd4-df04d8222a6e.svg");
  --svgs-types-logo-bg: url("${cndUrl}/assets/images/8a732534-18bd-4b7c-8fe8-3db3943c18fc.png");
  --svgs-types-logo-main: url("${cndUrl}/assets/images/dc2bebb2-f5ca-42cc-addd-3767e1ef30ec.svg");
  --svgs-types-info-login: url("${cndUrl}/assets/images/cd88d5cc-c072-4909-bcaf-32f6456c46b3.svg");
  --svgs-types-screenshot-themes: url("${cndUrl}/assets/images/e9e44de0-37f8-4f8f-8eae-ab997c7e290b.png");
  --svgs-types-info-play: url("${cndUrl}/assets/images/b4099cb8-0ebe-4c94-8bb4-da405072338c.svg");
  --svgs-types-social-x: url("${cndUrl}/assets/images/01479509-a701-4f08-94a4-3cd4a04c14d5.svg");
  --svgs-types-info-menu: url("${cndUrl}/assets/images/6649e1ed-0152-4b6d-bbb0-a6444a4a64b2.svg");
  --svgs-types-info-github: url("${cndUrl}/assets/images/68fd896f-a690-46c0-aa8d-5ba8d2eda1c5.svg");
  --svgs-types-screenshot-component: url("${cndUrl}/assets/images/cc7679c7-46d6-4979-a4e1-d52d530b5823.png");
  --svgs-types-social-discord: url("${cndUrl}/assets/images/50af7d25-451f-441b-8eb3-a998bb6f82d4.svg");
  --svgs-types-screenshot-exportCode: url("${cndUrl}/assets/images/c9a8d490-a793-4d69-b0f2-1bfd01497e4c.png");
  --svgs-types-social-linkedin: url("${cndUrl}/assets/images/97a8e07a-51d6-453a-9a5c-da6610c3b365.svg");
  --svgs-types-screenshot-animationTab: url("${cndUrl}/assets/images/b8887f5f-a1f1-42b2-9dc6-6df843392067.png");
  --svgs-types-screenshot-designSystem: url("${cndUrl}/assets/images/c5bd6597-b770-4830-81a4-a027c7929c37.png");
  --svgs-types-assets-curlyArrow: url("${cndUrl}/assets/images/f0eebb27-3ae8-440d-8c08-ac18d94b12e9.svg");
  --svgs-types-icons-home: url("${cndUrl}/assets/images/3fc9be23-0ccc-4ee7-8404-e11e95db6f94.svg");
  --svgs-types-icons-mark: url("${cndUrl}/assets/images/83225edc-b84a-41c6-8ec6-3a478ca75aba.svg");
  --svgs-types-icons-menuDrawer: url("${cndUrl}/assets/images/02453013-aa25-4b29-b73e-a47089a4f167.svg");
  --svgs-types-screenshot-logicStart: url("${cndUrl}/assets/images/d464dfbf-7e6d-4053-b5f8-067e40b935c4.png");
  --svgs-types-screenshot-colors: url("${cndUrl}/assets/images/8784686a-e4e5-4b22-84ba-21da76cba3be.png");
  --svgs-types-screenshot-logicStates: url("${cndUrl}/assets/images/3a7a9b82-8d79-43f2-943c-e4ccdbdf4062.png");
  --svgs-types-featuresIocns-canvas: url("${cndUrl}/assets/images/3915e800-0959-47d1-96fb-4bc319f395aa.svg");
  --svgs-types-info-info: url("${cndUrl}/assets/images/b761afc8-0a4e-4ba0-bb68-5b15c7142ab9.svg");
  --svgs-types-featuresIocns-designSystem: url("${cndUrl}/assets/images/e7396d57-1c72-4445-a0b7-4681f30fc797.svg");
  --svgs-types-featuresIocns-webPages: url("${cndUrl}/assets/images/00218eb2-d0f9-4193-8e1c-cd76bad9ed01.svg");
  --svgs-types-social-google: url("${cndUrl}/assets/images/2b478886-a92a-4f3b-81c6-3d6319bb39ba.svg");
  --svgs-types-screenshot-logic: url("${cndUrl}/assets/images/95f0b52e-57ac-4754-b1e4-4dddee8f72fa.png");
  --svgs-types-screenshot-designTab: url("${cndUrl}/assets/images/99f98df0-dce3-43d0-ab7a-8764824d17b1.png");
  &.light_1 {
    --colors-sematic-untitled: #000000ff;
    --colors-alias-untitled: #000000ff;
  }
  &.light_2 {
    --colors-sematic-untitled: #000000ff;
    --colors-alias-untitled: #000000ff;
  }
  &.light_3 {
    --colors-sematic-untitled: #000000ff;
    --colors-alias-untitled: #000000ff;
  }
  &.light_4 {
    --colors-sematic-untitled: #000000ff;
    --colors-alias-untitled: #000000ff;
  }
  &.dark_1 {
    --colors-sematic-untitled: #000000ff;
    --colors-alias-untitled: #000000ff;
  }
  &.dark_2 {
    --colors-sematic-untitled: #000000ff;
    --colors-alias-untitled: #000000ff;
  }
  &.dark_3 {
    --colors-sematic-untitled: #000000ff;
    --colors-alias-untitled: #000000ff;
  }
  &.dark_4 {
    --colors-sematic-untitled: #000000ff;
    --colors-alias-untitled: #000000ff;
  }
  &.materialDesign_1 {
    --colors-sematic-untitled: #000000ff;
    --colors-alias-untitled: #000000ff;
  }
  &.materialDesign_2 {
    --colors-sematic-untitled: #000000ff;
    --colors-alias-untitled: #000000ff;
  }
  &.materialDesign_3 {
    --colors-sematic-untitled: #000000ff;
    --colors-alias-untitled: #000000ff;
  }
  &.materialDesign_4 {
    --colors-sematic-untitled: #000000ff;
    --colors-alias-untitled: #000000ff;
  }
  &.untitled_1 {
    --colors-sematic-untitled: #000000ff;
    --colors-alias-untitled: #000000ff;
  }
  &.untitled_2 {
    --colors-sematic-untitled: #000000ff;
    --colors-alias-untitled: #000000ff;
  }
  &.untitled_3 {
    --colors-sematic-untitled: #000000ff;
    --colors-alias-untitled: #000000ff;
  }
  &.untitled_4 {
    --colors-sematic-untitled: #000000ff;
    --colors-alias-untitled: #000000ff;
  }
  &.contrastLight_1 {
    --colors-sematic-untitled: #000000ff;
    --colors-alias-untitled: #000000ff;
  }
  &.contrastLight_2 {
    --colors-sematic-untitled: #000000ff;
    --colors-alias-untitled: #000000ff;
  }
  &.contrastLight_3 {
    --colors-sematic-untitled: #000000ff;
    --colors-alias-untitled: #000000ff;
  }
  &.contrastLight_4 {
    --colors-sematic-untitled: #000000ff;
    --colors-alias-untitled: #000000ff;
  }
`;
export const Themes = {
  light: "light",
  dark: "dark",
  materialDesign: "materialDesign",
  untitled: "untitled",
  contrastLight: "contrastLight",
};
export type ThemeType = keyof typeof Themes;
export type Layer = 1 | 2 | 3 | 4;

export const ComponentFileContext = createContext<{
  type: ThemeType;
  layer: Layer;
  setTheme: (type: ThemeType) => void;
  setLayer: (layer: Layer) => void;
}>({
  layer: 1,
  type: "light",
  setTheme: () => {},
  setLayer: () => {},
});

export const ThemesLayer = ({
  defaultType,
  children,
  defaultLayer,
}: {
  defaultType: ThemeType;
  defaultLayer: 1 | 2 | 3 | 4;
  children: React.JSX.Element;
}) => {
  const [currentTheme, setTheme] = useState(defaultType);
  const [currentLayer, setLayer] = useState(defaultLayer);
  return (
    <ComponentFileContext.Provider
      value={{
        layer: currentLayer,
        type: currentTheme,
        setTheme: (type) => setTheme(type),
        setLayer: (layer) => setLayer(layer),
      }}
    >
      <ThemeRoot className={`${currentTheme}_${currentLayer}`}>
        {children}
      </ThemeRoot>
    </ComponentFileContext.Provider>
  );
};
