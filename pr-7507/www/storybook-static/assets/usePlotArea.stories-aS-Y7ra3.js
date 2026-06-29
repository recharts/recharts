import{R as t}from"./iframe-_oCKXQQT.js";import{u as a}from"./CategoricalChart-CepUJJer.js";import{R as p}from"./zIndexSlice-Dq64QlX1.js";import{C as s}from"./ComposedChart-Doh5buxK.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CpOlBkzb.js";import{X as l}from"./XAxis-D3L4SFSq.js";import{Y as h}from"./YAxis-pBFniQdP.js";import{L as c}from"./Legend-CxXOfWWb.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BkeUzj5p.js";import"./index-6i1k6cIu.js";import"./index-DYTqQgsI.js";import"./index-eQFvDN2n.js";import"./index-BhdyHQ9q.js";import"./throttle-BQ_gnI8m.js";import"./get-Dgc8xSDl.js";import"./renderedTicksSlice-BRr9Mzxw.js";import"./axisSelectors-DIl8ejt1.js";import"./d3-scale-DRcGFkfh.js";import"./resolveDefaultProps-D-cNYr8U.js";import"./isWellBehavedNumber-B9wxNRPu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Br7CcIjd.js";import"./chartDataContext-DAy8Squq.js";import"./Layer-BtAMG36m.js";import"./Curve-OFG9MmZD.js";import"./types-C2uV_Cvt.js";import"./step-BG6ETINo.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CmMbILYr.js";import"./Label-DrF3NWpt.js";import"./Text-CaXzzKZw.js";import"./DOMUtils-BvVxKZ4D.js";import"./ZIndexLayer-DUuDPJyN.js";import"./useAnimationId-CObBJ0f9.js";import"./ActivePoints-vZyVJ-4h.js";import"./Dot-B8ZmznHu.js";import"./RegisterGraphicalItemId-43VeAxEX.js";import"./ErrorBarContext-C6Mh3zEx.js";import"./GraphicalItemClipPath-BiS7z6q5.js";import"./SetGraphicalItem-jz90sZeJ.js";import"./getRadiusAndStrokeWidthFromDot-AsQYUmCL.js";import"./ActiveShapeUtils-CrKU6_AB.js";import"./CartesianAxis--Lh3QzvY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-C3XKYUvU.js";import"./symbol-Kk4TNAEo.js";import"./useElementOffset-CeTWjI2A.js";import"./uniqBy-CTI2mupa.js";import"./iteratee-2tW9rS6f.js";const lt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ht=["UsePlotArea"];export{e as UsePlotArea,ht as __namedExportsOrder,lt as default};
