// Resolvers receive four arguments: parent, args, context, info
// Prefer destructuring and indicators for unused fields

const product = ({ id }, _, { prisma }) => prisma.project({ id }).product();

const notes = ({ id }, _, { prisma }) => prisma.project({ id }).notes();

module.exports = {
  product,
  notes,
};
