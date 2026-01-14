import{e}from"./iframe-CaIgGyHM.js";import{P as p,a as m}from"./PieChart-NDC6leBR.js";import{R as s}from"./arrayEqualityCheck-CjxR2bSj.js";import{C as l}from"./tooltipContext-C07Af5tl.js";import{R as c}from"./RechartsHookInspector-Dwl6GEES.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DWSFOFU9.js";import"./Layer-Bv6QiOXu.js";import"./Curve-9htNi4i5.js";import"./types-8d_H4dY-.js";import"./Text-b4cawV-F.js";import"./DOMUtils-Bp1vNIxR.js";import"./ReactUtils-CsC3O-TD.js";import"./Label-P-OvPLPn.js";import"./PolarUtils-DrqRDweU.js";import"./ZIndexLayer-Dbr8-T8d.js";import"./zIndexSlice-Q7xIp-VY.js";import"./RechartsWrapper-GR6QdmkY.js";import"./hooks-C-Cwfz9Q.js";import"./axisSelectors-CnuhT51I.js";import"./ActiveShapeUtils-BYK5wQE6.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CaJA74zA.js";import"./useAnimationId-C8_uny94.js";import"./Trapezoid-DwBeZXV_.js";import"./Sector-BJsydvu6.js";import"./Symbols-Crj6RDt9.js";import"./RegisterGraphicalItemId-BuoGtP2e.js";import"./SetGraphicalItem-ByoAYqMJ.js";import"./polarSelectors-Cj4evHM-.js";import"./PolarChart-Dn2_ZXDl.js";import"./chartDataContext-D2XV3P37.js";import"./CategoricalChart-BosqoloG.js";import"./index-B-tNTan1.js";import"./ChartSizeDimensions-BI1RWPz_.js";import"./OffsetShower-BPLk7P8i.js";import"./PlotAreaShower-CFgftmSD.js";const Q={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
