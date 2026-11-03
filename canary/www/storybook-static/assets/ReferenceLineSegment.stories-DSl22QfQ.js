import{R as e}from"./iframe-BquPZQZR.js";import{R as i}from"./zIndexSlice-DfoMGwwJ.js";import{C as n}from"./ComposedChart-FnXBnX6v.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-CtICaZ9l.js";import{X as s}from"./XAxis-B0NTBS_i.js";import{Y as c}from"./YAxis-DU99c4NY.js";import{L as d}from"./Line-BUXIJhlS.js";import{R as g}from"./ReferenceLine-Co2s5o-E.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C1-PhdLj.js";import"./throttle-Ifciv68t.js";import"./index-BeXk3gq4.js";import"./index-CY_4egx2.js";import"./RechartsWrapper-BOh7Al31.js";import"./axisSelectors-Ra6SuVrn.js";import"./polarAxisSelectors-Bi2qo_WA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B2Z3tDr8.js";import"./index-BBIQOsY9.js";import"./index-DeLNFakb.js";import"./renderedTicksSlice-DkVmzd5W.js";import"./index-C389QzGe.js";import"./fillDefinitions-bKlUAuaq.js";import"./CartesianChart-DusmDSbk.js";import"./ZIndexPortal-ChcM8kac.js";import"./CategoricalChart-DY8SYWQ4.js";import"./CartesianAxis-G--oVlcc.js";import"./Layer-DgCLyWmw.js";import"./Text-Cz9Qm4K-.js";import"./DOMUtils-Hop2FGiK.js";import"./ZIndexLayer-BKwk9Ckz.js";import"./Label-QfyPAwEN.js";import"./types-HVxQrabK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DPOrxZAK.js";import"./step-CUnUoUW9.js";import"./path-DyVhHtw_.js";import"./LabelList-c67UtHfn.js";import"./ActivePoints-BzSHcWj6.js";import"./Dot-B5ySELDq.js";import"./activeStyles-7MX0jGA5.js";import"./useAnimationId-BAgUZZzE.js";import"./dataEntryStyles-DcYBdp4K.js";import"./Symbols-BOEhDLOF.js";import"./symbol-BytJGu2b.js";import"./ErrorBarContext-LEjhprcI.js";import"./SetGraphicalItem-DVTOJBGj.js";import"./getRadiusAndStrokeWidthFromDot-Dz2gbesP.js";import"./ActiveShapeUtils-B8wKgjG7.js";import"./useEffectiveDataKey-Dv0si8CY.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,he as __namedExportsOrder,fe as default};
