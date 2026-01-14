import{e}from"./iframe-B8YYEd9G.js";import{P as p,a as m}from"./PieChart-5dNdH4zy.js";import{R as s}from"./arrayEqualityCheck-BJSPs_LU.js";import{C as l}from"./tooltipContext-Cp6s-Na8.js";import{R as c}from"./RechartsHookInspector-C0QywKAE.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Css_XkGu.js";import"./Layer-ChuaoeIg.js";import"./Curve-B-G6e6PZ.js";import"./types-CnVGCqEL.js";import"./Text-DUM-8xR_.js";import"./DOMUtils-C8hDQeGd.js";import"./ReactUtils-DfY637Lx.js";import"./Label-XqAMTaA_.js";import"./PolarUtils-DYWzGjDu.js";import"./ZIndexLayer-DX8lEGHQ.js";import"./zIndexSlice-BLNkJo_X.js";import"./RechartsWrapper-pZyt8ABU.js";import"./hooks-CoDkm5OR.js";import"./axisSelectors-DqEy3XQD.js";import"./ActiveShapeUtils-DiiELvjB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-1iaHX5tZ.js";import"./useAnimationId-pnmN_K1g.js";import"./Trapezoid-C7ogOYif.js";import"./Sector-BNyMoo46.js";import"./Symbols-jZ2_n1nU.js";import"./RegisterGraphicalItemId-CVcSXCce.js";import"./SetGraphicalItem-B4U1VyG2.js";import"./polarSelectors-CGvIFk1R.js";import"./PolarChart-CkQfXkUY.js";import"./chartDataContext-D4iCOjmy.js";import"./CategoricalChart-DO0H3PuU.js";import"./index-C4mlw0NF.js";import"./ChartSizeDimensions-BeS7eDbq.js";import"./OffsetShower-mhU6p0_K.js";import"./PlotAreaShower-Br2_XSTr.js";const Q={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
