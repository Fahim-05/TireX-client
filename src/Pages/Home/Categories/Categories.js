import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {


    const { data:categories, isLoading, refetch } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:5000/categories')
            .then(res => res.json())
    });

 
    return (

        <div className='my-32'>
            <h1 className='text-orange-500 font-bold text-5xl uppercase text-center mb-10'>Product Categories <hr className='my-2'></hr></h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20'>
                {
                    categories?.map((category, index) =>
                        <Link
                            to={`/category/${category.categoryId}`}
                            key={category.categoryId}
                            className=' btn btn-outline  border-2 text-xl bg-gradient-to-r from-violet-400 to-blue-500 border-none hover:scale-110 duration-200 text-white'
                        >
                            <button >
                                {index + 1}. {category.categoryName}
                            </button>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Categories;