import express from 'express';
import productModel from '../schemas/pro.schemas.js';

const router = express.Router();

// 상품 등록
router.post('/goods', async (req, res) => {
    // req.body는 객체 형태로 넘어옴.
    await productModel.create(req.body);
    res.send('상품이 등록되었읍니다.');
});

// 상품 조회
router.get('/goods', async (req, res) => {
    const productList = await productModel.find({});
    res.json(productList);
});

//상품 상세 조회 API
router.get('/goods/:goodsId', async (req, res) => {
    const { goodsId } = req.params;

    const product = await productModel.findOne(
        { goodsId },
        { password: 0, _id: 0 },
    );

    res.json({ product });
});

router.get('/goods', (req, res) => {});

export default router;
