import React from 'react'

const MenuCard= ({menuData}) =>
{
    //console.log(menuData)
    return(
        <>
        <section className='main-card--cointainer'>
        {menuData.map((current) => {
                return(
                    <>
                    <div className="card-container" key={current.id}>
                        <div className="card">  
                           <div className="card-body">
                                <span className='card-number card-circle subtle'>{current.id} </span>
                                <span className='card-author subtle'>{current.category}</span>
                                <h2 className='card-title'> {current.name} </h2>
                                <span className='card-description subtle'>
                                {current.description}
                                </span>
                                <div className='card-read'>Read</div>
                                <img src={current.image} alt="sorry" />
                                <span className='card-tag subtle'>Order now
                                </span>
                            </div>
                        </div>
                    </div>
                    </>
                );
            })
        }
        </section>
        </>
    )
}
export default MenuCard
