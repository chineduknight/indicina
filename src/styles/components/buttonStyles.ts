import { darken, mode } from "@chakra-ui/theme-tools";

// https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/button.ts
export const ButtonStyles = {
  baseStyle: {
    outline: "none",
    _focus: { boxShadow: "none" },
  },
  variants: {
    primary: (props) => ({
      bg: "#5C5C5C",
      borderRadius: "0.3125rem",
      fontSize: "1rem",
      fontWeight: "700",
      color: "white",
      padding: "0.9375rem 1.875rem 0.875rem 1.9375rem",
      _hover: {
        bg: mode("#3E3E3E", darken("#5C5C5C", 20))(props),
        boxShadow: "md",
        color: "#fff",
        _disabled: {
          bg: "#5C5C5C",
          color: "white",
        },
      },
    }),
  },
  defaultProps: {
    variant: "primary",
  },
};
