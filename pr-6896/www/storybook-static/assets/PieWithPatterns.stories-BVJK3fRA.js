import{e}from"./iframe-DTjNyuRV.js";import{P as p,a as m}from"./PieChart-BykQDX2x.js";import{R as s}from"./arrayEqualityCheck-C4xGcSTy.js";import{C as l}from"./tooltipContext-DeWM14_N.js";import{R as c}from"./RechartsHookInspector-euo4g-ug.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-SGcnM_aC.js";import"./Layer-Bnob1t-w.js";import"./Curve-OPgUPtNu.js";import"./types-To9Ddb8E.js";import"./Text-Df79kjUu.js";import"./DOMUtils-Ckv5L2Ry.js";import"./ReactUtils-338dS-Qh.js";import"./Label-BLKfXojP.js";import"./PolarUtils-jGr_7wxa.js";import"./ZIndexLayer-DQomkPs4.js";import"./zIndexSlice-DRfn0LKt.js";import"./RechartsWrapper-Buv5ZAi-.js";import"./hooks-BKspSbbk.js";import"./axisSelectors-C5N0FKJg.js";import"./ActiveShapeUtils-DzFlbCdp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-p9Ft26dZ.js";import"./useAnimationId-DyTjjL6a.js";import"./Trapezoid-DDbPynHI.js";import"./Sector-DY-WO6-X.js";import"./Symbols-Bqb-NDkg.js";import"./RegisterGraphicalItemId-DpE9EW2r.js";import"./SetGraphicalItem-B-b4IafD.js";import"./polarSelectors-tftH5yY8.js";import"./PolarChart-B6qUWzo9.js";import"./chartDataContext-_UJlrEtw.js";import"./CategoricalChart-D9AJMhmv.js";import"./index-qnmfyn6T.js";import"./ChartSizeDimensions-C7n2xQzd.js";import"./OffsetShower-NiY8JQK2.js";import"./PlotAreaShower-B9h0VEbL.js";const Q={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
