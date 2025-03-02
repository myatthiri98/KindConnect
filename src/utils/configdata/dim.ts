const dim = {
  // Spacing
  spacing: {
    xs: 5,
    sm: 8,
    md: 10,
    lg: 15,
    xl: 20,
    xxl: 30,
  },

  // Border radius
  borderRadius: {
    xs: 5,
    sm: 10,
    md: 15,
    lg: 20,
    xl: 30,
    circle: 60, // For circular elements
  },

  // Font sizes
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
    xxl: 32,
  },

  // Line heights
  lineHeight: {
    sm: 18,
    md: 24,
    lg: 32,
  },

  // Font weights using valid React Native values
  fontWeight: {
    regular: '400' as const,
    medium: '500' as const,
    semiBold: '600' as const,
    bold: 'bold' as const,
  },

  // Component specific dimensions
  avatar: {
    sm: 40,
    md: 80,
    lg: 120,
  },

  // Button padding
  button: {
    paddingVertical: {
      sm: 8,
      md: 12,
      lg: 15,
    },
    paddingHorizontal: {
      sm: 12,
      md: 20,
      lg: 30,
    },
  },

  // Badge dimensions
  badge: {
    width: 100,
  },
};

export default dim;
