/*
  Warnings:

  - You are about to drop the column `imagemUrl` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `precoBruto` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `precoLiquido` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `pedidoId` on the `ProdutosPedido` table. All the data in the column will be lost.
  - Added the required column `imagem_url` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preco_bruto` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preco_liquido` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pedido_id` to the `ProdutosPedido` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProdutosPedido" DROP CONSTRAINT "ProdutosPedido_pedidoId_fkey";

-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "imagemUrl",
DROP COLUMN "precoBruto",
DROP COLUMN "precoLiquido",
ADD COLUMN     "imagem_url" TEXT NOT NULL,
ADD COLUMN     "preco_bruto" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "preco_liquido" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "ProdutosPedido" DROP COLUMN "pedidoId",
ADD COLUMN     "pedido_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ProdutosPedido" ADD CONSTRAINT "ProdutosPedido_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
