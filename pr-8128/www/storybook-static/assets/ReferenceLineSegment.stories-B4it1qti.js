import{R as e}from"./iframe-BJZBYlXs.js";import{R as i}from"./zIndexSlice-4kzTBdEO.js";import{C as p}from"./ComposedChart-C6IGkTRw.js";import{p as n}from"./Page-Cj8EiXz7.js";import{C as a}from"./CartesianGrid-OVGlQqeu.js";import{X as s}from"./XAxis-BODArBrx.js";import{Y as c}from"./YAxis-8yYBvtiR.js";import{L as d}from"./Line-DsC7P6_G.js";import{R as g}from"./ReferenceLine-35DfVaYb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DGRFLMT5.js";import"./throttle-m042I2dJ.js";import"./index-r1c9axOK.js";import"./index-YjQ_vGf6.js";import"./RechartsWrapper-xMruxvG5.js";import"./axisSelectors-fPyxXNp-.js";import"./polarAxisSelectors-BW13raLn.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-fXkyVTj6.js";import"./index-CLntLmjf.js";import"./index-CbX7_COp.js";import"./renderedTicksSlice-BfBzdz3z.js";import"./index-ztNxUc0B.js";import"./CartesianChart-8Ns5ZAmP.js";import"./ZIndexPortal-Dk8L0y9I.js";import"./CategoricalChart-CIocy3rX.js";import"./CartesianAxis-DuzHYXrg.js";import"./Layer-BiONajIB.js";import"./Text-D_QESfNW.js";import"./DOMUtils-CSm0nbrI.js";import"./pageBackground-OPtbMqw3.js";import"./ZIndexLayer-9eIJN5cX.js";import"./Label-BB8sjzzI.js";import"./types-BRBV9Zbz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-DO9vEba-.js";import"./fillDefinitions-DzwllWHv.js";import"./Curve-BZZJQhfg.js";import"./step-C9q08w-O.js";import"./path-DyVhHtw_.js";import"./LabelList-CjXuEtRO.js";import"./ActivePoints-DOT1DbFw.js";import"./Dot-B7xctmF8.js";import"./activeStyles-CNDsNUTt.js";import"./useAnimationId-t_dEgl2e.js";import"./dataEntryStyles-O6Ub96yy.js";import"./Symbols-iu0turDo.js";import"./symbol-DqzbJzzt.js";import"./ErrorBarContext-B2TtUlqL.js";import"./SetGraphicalItem-N6zbMYsO.js";import"./getRadiusAndStrokeWidthFromDot-DjRQ5aRa.js";import"./ActiveShapeUtils-C_it4ZOO.js";import"./useEffectiveDataKey-BoPTmL0v.js";import"./CartesianScaleHelper-C9Oze4oB.js";const le={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:n,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},Ce=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,Ce as __namedExportsOrder,le as default};
