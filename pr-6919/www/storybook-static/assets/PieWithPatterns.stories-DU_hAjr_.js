import{e}from"./iframe-DTIyp44P.js";import{P as p,a as m}from"./PieChart-DfGvoEbB.js";import{R as s}from"./arrayEqualityCheck-CROVUPPr.js";import{C as l}from"./tooltipContext-BWhsucN3.js";import{R as c}from"./RechartsHookInspector-D8bdCWM1.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CEVdASN5.js";import"./Layer-CNvBRmF0.js";import"./Curve-QqkAraw2.js";import"./types-CLTao0pZ.js";import"./Text-oi_VPtbj.js";import"./DOMUtils-51XpcVVM.js";import"./ReactUtils-BtxPFKgx.js";import"./Label-CM6isse0.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-J9Ech39_.js";import"./zIndexSlice-CpP_hw3f.js";import"./RechartsWrapper-CMatZq67.js";import"./hooks-BoTdYeVb.js";import"./axisSelectors-DKeWHk_r.js";import"./ActiveShapeUtils-rB0qGo-m.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C99nylwM.js";import"./useAnimationId-cUd_sss9.js";import"./Trapezoid-C-AINK0-.js";import"./Sector-BVwTJui3.js";import"./Symbols-BXEo6yiB.js";import"./RegisterGraphicalItemId-Bq2lDHMm.js";import"./SetGraphicalItem-BpKNPEn8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-Bb-Y6iDX.js";import"./PolarChart-Dwqvmht_.js";import"./chartDataContext-DEKYo5U6.js";import"./CategoricalChart-DBE0EroA.js";import"./index-DH6qoWff.js";import"./ChartSizeDimensions-AlgeFMWv.js";import"./OffsetShower-Ytqxw96A.js";import"./PlotAreaShower-IGOsRXvZ.js";const V={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const X=["PieWithPatterns"];export{t as PieWithPatterns,X as __namedExportsOrder,V as default};
