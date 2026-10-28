import{R as e}from"./iframe-CFREJgKh.js";import{R as i}from"./zIndexSlice-BlChPiJc.js";import{C as n}from"./ComposedChart-BHYrkphp.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-hr-lupo1.js";import{X as s}from"./XAxis-C8rslJeD.js";import{Y as c}from"./YAxis-BpqGKlEV.js";import{L as d}from"./Line-RQeT_xTt.js";import{R as g}from"./ReferenceLine-BW3CXLyV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D2NJN12P.js";import"./throttle-D0fuDWYv.js";import"./index-BnRinVhV.js";import"./index-9ppQqeZ5.js";import"./RechartsWrapper-i5dbrXIz.js";import"./axisSelectors-BWBf8JbO.js";import"./polarAxisSelectors-U9vqJLN4.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CSfabLms.js";import"./index-DNbnfthz.js";import"./index-CXWxUzol.js";import"./renderedTicksSlice-BlPhjOzM.js";import"./index-BMrIm2ob.js";import"./CartesianChart-DKqxdz5e.js";import"./ZIndexPortal-CxkIiCll.js";import"./CategoricalChart-wyRiJqKi.js";import"./CartesianAxis-DYae0Cq3.js";import"./Layer-C0qOZ959.js";import"./Text-CdYm4waL.js";import"./pageBackground-BhcEVreL.js";import"./ZIndexLayer-C1WGeCae.js";import"./Label-CqB5IeGz.js";import"./types-DVbjgkU5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CftG2h3G.js";import"./step-BcalNNwl.js";import"./path-DyVhHtw_.js";import"./LabelList-D_a5qFT1.js";import"./ActivePoints-C0jpDbhM.js";import"./Dot-CbZEK9HK.js";import"./activeStyles-DZOohqxv.js";import"./useAnimationId-D_reCqg_.js";import"./dataEntryStyles-D-tUw7To.js";import"./Symbols-C448CvWL.js";import"./symbol-nJMR8kbN.js";import"./ErrorBarContext-Ckc5teto.js";import"./SetGraphicalItem-DdrEYt3d.js";import"./getRadiusAndStrokeWidthFromDot-C8BFWNtM.js";import"./ActiveShapeUtils-D0KAMjVA.js";import"./useEffectiveDataKey-D5PSAWPt.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,fe as __namedExportsOrder,ge as default};
