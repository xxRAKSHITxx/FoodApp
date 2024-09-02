import React from 'react'

export default function Card() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px' }}>
                <div className="card" style={{ maxWidth: '300px', boxShadow: '0px 4px 8px var(--shadow-color)' }}>
                    <img
                        src="https://aartimadan.com/wp-content/uploads/2020/09/red-sauce-pasta-blog-4.jpg"
                        className="card-img-top"
                        alt="Delicious Pasta"
                        style={{ width: '100%', height: 'auto', borderRadius: '5px 5px 0 0' }}
                    />
                    <div className="card-body" style={{ padding: '15px', backgroundColor: 'var(--secondary-color)', color: 'black' }}>
                        <h5 className="card-title" style={{ marginBottom: '10px' }}>Delicious Pasta</h5>
                        <p className="card-text" style={{ margin: '0' }}>
                            A delicious plate of pasta with a rich tomato sauce and fresh herbs.
                        </p>
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor="pasta-quantity" style={{ marginRight: '10px' }}>Quantity:</label>
                            <select id="pasta-quantity" name="quantity" style={{ marginRight: '10px' }}>
                                {Array.from({ length: 5 }, (_, i) => i + 1).map(quantity => (
                                    <option key={quantity} value={quantity}>{quantity}</option>
                                ))}
                            </select>
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor="pasta-size" style={{ marginRight: '10px' }}>Size:</label>
                            <select id="pasta-size" name="size">
                                <option value="half">Half</option>
                                <option value="full">Full</option>
                            </select>
                            <div style={{ marginTop: '10px' }}>
                                <label htmlFor="Total Price" style={{ marginRight: '10px' }}>Total Price:</label>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="card" style={{ maxWidth: '300px', boxShadow: '0px 4px 8px var(--shadow-color)' }}>
                    <img
                        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
                        className="card-img-top"
                        alt="Delicious Pizza"
                        style={{ width: '100%', height: 'auto', borderRadius: '5px 5px 0 0' }}
                    />
                    <div className="card-body" style={{ padding: '15px', backgroundColor: 'var(--secondary-color)', color: 'black' }}>
                        <h5 className="card-title" style={{ marginBottom: '10px' }}>Delicious Pizza</h5>
                        <p className="card-text" style={{ margin: '0' }}>
                            A mouth-watering pizza with a crispy crust, gooey cheese, and fresh toppings.
                        </p>
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor="pizza-quantity" style={{ marginRight: '10px' }}>Quantity:</label>
                            <select id="pizza-quantity" name="quantity">
                                {Array.from({ length: 5 }, (_, i) => i + 1).map(quantity => (
                                    <option key={quantity} value={quantity}>{quantity}</option>
                                ))}
                            </select>


                        </div>
                    </div>
                </div>
                <div className="card" style={{ maxWidth: '300px', boxShadow: '0px 4px 8px var(--shadow-color)' }}>
                    <img
                        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
                        className="card-img-top"
                        alt="Delicious Pizza"
                        style={{ width: '100%', height: 'auto', borderRadius: '5px 5px 0 0' }}
                    />
                    <div className="card-body" style={{ padding: '15px', backgroundColor: 'var(--secondary-color)', color: 'black' }}>
                        <h5 className="card-title" style={{ marginBottom: '10px' }}>Delicious Pizza</h5>
                        <p className="card-text" style={{ margin: '0' }}>
                            A mouth-watering pizza with a crispy crust, gooey cheese, and fresh toppings.
                        </p>
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor="pizza-quantity" style={{ marginRight: '10px' }}>Quantity:</label>
                            <select id="pizza-quantity" name="quantity">
                                {Array.from({ length: 5 }, (_, i) => i + 1).map(quantity => (
                                    <option key={quantity} value={quantity}>{quantity}</option>
                                ))}
                            </select>


                        </div>
                    </div>
                </div>
                <div className="card" style={{ maxWidth: '300px', boxShadow: '0px 4px 8px var(--shadow-color)' }}>
                    <img
                        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
                        className="card-img-top"
                        alt="Delicious Pizza"
                        style={{ width: '100%', height: 'auto', borderRadius: '5px 5px 0 0' }}
                    />
                    <div className="card-body" style={{ padding: '15px', backgroundColor: 'var(--secondary-color)', color: 'black' }}>
                        <h5 className="card-title" style={{ marginBottom: '10px' }}>Delicious Pizza</h5>
                        <p className="card-text" style={{ margin: '0' }}>
                            A mouth-watering pizza with a crispy crust, gooey cheese, and fresh toppings.
                        </p>
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor="pizza-quantity" style={{ marginRight: '10px' }}>Quantity:</label>
                            <select id="pizza-quantity" name="quantity">
                                {Array.from({ length: 5 }, (_, i) => i + 1).map(quantity => (
                                    <option key={quantity} value={quantity}>{quantity}</option>
                                ))}
                            </select>


                        </div>
                    </div>
                </div>
                
                

                <div className="card" style={{ maxWidth: '300px', boxShadow: '0px 4px 8px var(--shadow-color)' }}>
                    <img
                        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
                        className="card-img-top"
                        alt="Delicious Pizza"
                        style={{ width: '100%', height: 'auto', borderRadius: '5px 5px 0 0' }}
                    />
                    <div className="card-body" style={{ padding: '15px', backgroundColor: 'var(--secondary-color)', color: 'black' }}>
                        <h5 className="card-title" style={{ marginBottom: '10px' }}>Delicious Pizza</h5>
                        <p className="card-text" style={{ margin: '0' }}>
                            A mouth-watering pizza with a crispy crust, gooey cheese, and fresh toppings.
                        </p>
                        <div style={{ marginTop: '10px' }}>
                            <label htmlFor="pizza-quantity" style={{ marginRight: '10px' }}>Quantity:</label>
                            <select id="pizza-quantity" name="quantity">
                                {Array.from({ length: 5 }, (_, i) => i + 1).map(quantity => (
                                    <option key={quantity} value={quantity}>{quantity}</option>
                                ))}
                            </select>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
