export default ({ env }) => ({
    "users-permissions": {
      config: {
        register: {
          allowedFields: ["telephone", "university", "nameUser"], // Adicione seus campos personalizados aqui
        },
      },
    },
  });