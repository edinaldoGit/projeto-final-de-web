export default ({ env }) => ({
    "users-permissions": {
      config: {
        register: {
          allowedFields: ["telephone", "university", "nameUser", "pictureProfile"], // Adicione seus campos personalizados aqui
        },
      },
    },
  });