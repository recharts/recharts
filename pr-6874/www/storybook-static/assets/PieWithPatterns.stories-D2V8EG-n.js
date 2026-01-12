import{e}from"./iframe-CzId_vMR.js";import{a as p,P as m}from"./PieChart-BOIESW3K.js";import{R as s}from"./arrayEqualityCheck-DSdyV2X5.js";import{C as l}from"./tooltipContext-CbvQKLwH.js";import{R as c}from"./RechartsHookInspector-Co5fk2RP.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CjfObxG9.js";import"./Layer-Cd1nD4kQ.js";import"./Curve-D5USJD5l.js";import"./types-DjXw3wTJ.js";import"./Text-DyrIV_fF.js";import"./DOMUtils-DbOiFokS.js";import"./ReactUtils-B9bn4DTf.js";import"./Label-C0ElDb7Z.js";import"./PolarUtils-pvs2WqdL.js";import"./ZIndexLayer-C_SxWHYm.js";import"./zIndexSlice-BwlmGQPJ.js";import"./RechartsWrapper-CN4xlQ0u.js";import"./hooks-C9JnWS43.js";import"./axisSelectors-OGsi9SPN.js";import"./ActiveShapeUtils-CjNwvE6j.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B-Y8RlPT.js";import"./useAnimationId-DOB-FYIq.js";import"./Trapezoid-D5iOXGDe.js";import"./Sector-BzoC5hxT.js";import"./Symbols-BRKfSvcL.js";import"./RegisterGraphicalItemId-CBAG7Y6C.js";import"./SetGraphicalItem-w1vQ_GFV.js";import"./polarSelectors-W2GeAK9p.js";import"./PolarChart-zYRizZNY.js";import"./chartDataContext-bc8aYpmC.js";import"./CategoricalChart-Fsg15egP.js";import"./index-CS_I0C1E.js";import"./ChartSizeDimensions-DGZWUdPh.js";import"./OffsetShower-b12JY01P.js";import"./PlotAreaShower-BQSWUX-t.js";const Q={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
