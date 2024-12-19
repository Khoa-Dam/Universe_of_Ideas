import React from 'react';
import Image from 'next/image';
import styles from '@/app/styles/ScrollingFields.module.css';

interface ItemProps {
    index: number;
    totalItems: number;
    imageUrl: any;
    alt: string;
}

const Item: React.FC<ItemProps> = ({ index, totalItems, imageUrl, alt }) => {
    const style = {
        animationDelay: `calc(30s / ${totalItems} * (${totalItems} - ${index + 1}) * -1)`,
    };

    return (
        <div className={styles.item} style={style}>
            <Image
                src={imageUrl}
                alt={alt}
                width={200}
                height={150}
                className={styles.image}
            />
        </div>
    );
};

export default Item;

