import{e}from"./iframe-BDEQfIlb.js";import{P as p,a as m}from"./PieChart-D-ZTNey2.js";import{R as s}from"./arrayEqualityCheck-BA5tHTkl.js";import{C as l}from"./tooltipContext-DGI_kjpQ.js";import{R as c}from"./RechartsHookInspector-BP4qljDX.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D0yWPBKj.js";import"./Layer-Con5T55J.js";import"./Curve-apm-ZytV.js";import"./types-tr7QhDo_.js";import"./Text-9oQB2ulB.js";import"./DOMUtils-C_B6oJip.js";import"./ReactUtils-B2Wxyi5A.js";import"./Label-B9k6RWTG.js";import"./PolarUtils-KAlgtJ9T.js";import"./ZIndexLayer-CzQ7dqjv.js";import"./zIndexSlice-B88C6q2R.js";import"./RechartsWrapper-CST4_BZP.js";import"./hooks-Cc5861FD.js";import"./axisSelectors-W9GqkCkL.js";import"./ActiveShapeUtils-DSG0DNjO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DZIbf3UH.js";import"./useAnimationId-fPMh2rE3.js";import"./Trapezoid-D-MMn83p.js";import"./Sector-CDYiU8tv.js";import"./Symbols-CIf3O2Az.js";import"./RegisterGraphicalItemId-B-_vEcYf.js";import"./SetGraphicalItem-mM5uupNM.js";import"./polarSelectors-CEiewLpZ.js";import"./PolarChart-DAD-Ji6X.js";import"./chartDataContext-BX7wQqVg.js";import"./CategoricalChart-BAadDSZ5.js";import"./index-D0u2n02A.js";import"./ChartSizeDimensions-DKCYbGH7.js";import"./OffsetShower-BiVSgjK5.js";import"./PlotAreaShower-D2oOPDsU.js";const Q={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <defs>
            <pattern id="pattern-A" width="10" height="10" patternUnits="userSpaceOnUse">
              <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" fill="#f00" />
            </pattern>
            <pattern id="pattern-B" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="2" height="4" fill="#0f0" />
            </pattern>
            <pattern id="pattern-C" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(135)">
              <rect width="2" height="4" fill="#00f" />
            </pattern>
          </defs>
          <Pie dataKey="value" {...args}>
            {/* @ts-expect-error our storybooks need types */}
            {args.data.map(entry => <Cell key={\`cell-\${entry.name}\`} fill={\`url(#pattern-\${entry.name})\`} />)}
          </Pie>
          <RechartsHookInspector />
        </PieChart>
      </ResponsiveContainer>;
  },
  args: {
    cx: 150,
    cy: 200,
    data: [{
      name: 'A',
      value: 80,
      color: '#ff0000'
    }, {
      name: 'B',
      value: 45,
      color: '#00ff00'
    }, {
      name: 'C',
      value: 25,
      color: '#0000ff'
    }],
    dataKey: 'value',
    fill: '#8884d8',
    innerRadius: 50,
    outerRadius: 100,
    stroke: 'none'
  }
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const V=["PieWithPatterns"];export{t as PieWithPatterns,V as __namedExportsOrder,Q as default};
