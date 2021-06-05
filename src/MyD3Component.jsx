import React, { useRef, useEffect } from 'react';

function MyD3Component (props) {
    const d3Container = useRef(null);

    /* The useEffect Hook is for running side effects outside of React,
       for instance inserting elements into the DOM using D3 */
    useEffect(
        () => {
            if (props.data && d3Container.current) {

                // the container holding our D3 chart
                const svg = d3.select(d3Container.current);

                // Bind D3 data
                const update = svg
                    .append('g')
                    .selectAll('rect')
                    .data(props.data);

                // Enter new D3 elements
                update.enter()
                    .append('rect')
                    .attr('x', (d, i) => i * 25)
                    .attr('y', (d)=> 100-(d*15))
                    .attr("fill", "steelblue")
                    .attr("width",20)
                    .attr("height",(d) => d*15);

                // Update existing D3 elements
                update
                    .attr('x', (d, i) => i * 25)
                    .attr("height",(d) => d*15);

                // Remove old D3 elements
                update.exit()
                    .remove();
            }
        },

        [props.data, d3Container.current])

    return (
        <svg
            className="d3-component"
            width={400}
            height={200}
            ref={d3Container}
        />
    );
}

export default MyD3Component;