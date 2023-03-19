import { useState } from 'react';
import styles from './HomePageProducts.module.css';
import ProductPreview from '../ProductPreview/ProductPreview';

const cartProducts = [
	{
		id: '1',
		img: [
			'../public/products/kufer1.PNG',
			'../public/products/kufer1a.PNG',
			'../public/products/kufer1b.PNG',
			'../public/products/kufer1c.PNG',
			'../public/products/kufer1d.PNG',
		],
		category: 'Kufry, skrzynie',
		name: 'Kufer wiklinowy skrzynia',
		amount: 10,
		price: 250,
	},
	{
		id: '2',
		img: [
			'../public/products/kufer1.PNG',
			'../public/products/kufer1a.PNG',
			'../public/products/kufer1b.PNG',
			'../public/products/kufer1c.PNG',
			'../public/products/kufer1d.PNG',
		],
		category: 'Kufry, skrzynie',
		name: 'Kufer wiklinowy skrzynia',
		amount: 10,
		price: 250,
	},
	{
		id: '3',
		img: [
			'../public/products/kufer1.PNG',
			'../public/products/kufer1a.PNG',
			'../public/products/kufer1b.PNG',
			'../public/products/kufer1c.PNG',
			'../public/products/kufer1d.PNG',
		],
		category: 'Kufry, skrzynie',
		name: 'Kufer wiklinowy skrzynia',
		amount: 10,
		price: 250,
	},
	{
		id: '4',
		img: [
			'../public/products/kufer1.PNG',
			'../public/products/kufer1a.PNG',
			'../public/products/kufer1b.PNG',
			'../public/products/kufer1c.PNG',
			'../public/products/kufer1d.PNG',
		],
		category: 'Kufry, skrzynie',
		name: 'Kufer wiklinowy skrzynia',
		amount: 0,
		price: 250,
	},
];

const HomePageProducts = () => {
	const [activeProducts, setActiveProducts] = useState<string>('koszyki');

	return (
		<div className={styles.homepage_products}>
			<div className={styles.homepage_products_titles}>
				<h3
					className={`${activeProducts === 'koszyki' && styles.active}`}
					onClick={() => {
						setActiveProducts('koszyki');
					}}
				>
					Koszyki
				</h3>
				<h3
					className={`${activeProducts === 'pojemniki' && styles.active}`}
					onClick={() => {
						setActiveProducts('pojemniki');
					}}
				>
					Pojemniki
				</h3>
				<h3
					className={`${activeProducts === 'meble' && styles.active}`}
					onClick={() => {
						setActiveProducts('meble');
					}}
				>
					Meble
				</h3>
			</div>

			<div className={styles.homepage_products_box}>
				{cartProducts.map((product) => (
					<ProductPreview key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default HomePageProducts;
