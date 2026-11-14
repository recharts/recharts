import{R as e}from"./iframe-DB1dQNP8.js";import{R as i}from"./zIndexSlice-4nnTulLE.js";import{C as n}from"./ComposedChart-CXmJ-ojD.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DGj-NBTQ.js";import{X as s}from"./XAxis-CMTVdgXW.js";import{Y as c}from"./YAxis-CIxMAlZN.js";import{L as d}from"./Line-CHe47qf6.js";import{R as g}from"./ReferenceLine-DQPASFtb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DmpFbxUX.js";import"./throttle-BFaVdKGa.js";import"./index-DDVC-U_9.js";import"./index-CCD7ra-J.js";import"./RechartsWrapper-BSa1uinT.js";import"./axisSelectors-DYpJMmPb.js";import"./polarAxisSelectors-CrHx5sYT.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BO6-R8pB.js";import"./index-D-0kkOAc.js";import"./index-BBS885gB.js";import"./renderedTicksSlice-BBAl23GW.js";import"./index-D2MojgXH.js";import"./fillDefinitions-Cx6IehzG.js";import"./CartesianChart-DYBxU76V.js";import"./chartDataContext-B1lnzDGG.js";import"./CategoricalChart-DANutzlC.js";import"./CartesianAxis-C8e-4BIf.js";import"./Layer-Dv8-s5I6.js";import"./Text-C1medGIX.js";import"./ZIndexLayer-CWhMC-q_.js";import"./Label-jFA6iMVu.js";import"./types-DtWjgFmy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CckPV-p0.js";import"./step-Bnr8fo0T.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-Cv4r99AD.js";import"./ActivePoints-CSEAww-_.js";import"./Dot-oe6mnN2l.js";import"./activeStyles-ByNnOm-i.js";import"./useAnimationId-CoLe5YqV.js";import"./Symbols-UlDypbOg.js";import"./symbol-CJrx0ghD.js";import"./ErrorBarContext-XalCVz8w.js";import"./SetGraphicalItem-BpLBLRYe.js";import"./getRadiusAndStrokeWidthFromDot-BxCLKzYD.js";import"./ActiveShapeUtils-Bsyq6LIm.js";import"./useEffectiveDataKey-H48CmBWB.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,ge as __namedExportsOrder,de as default};
