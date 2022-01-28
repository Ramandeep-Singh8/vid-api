module.exports = (sequelize, DataTypes) => {
  const Raman = sequelize.define("raman_assesment", {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Raman;
};
