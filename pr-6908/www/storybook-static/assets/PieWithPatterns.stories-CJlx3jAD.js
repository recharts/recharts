import{e}from"./iframe-CsUpRRwn.js";import{P as p,a as m}from"./PieChart-CJd31LeZ.js";import{R as s}from"./arrayEqualityCheck-Df4uzLw-.js";import{C as l}from"./tooltipContext-CLzHhvJj.js";import{R as c}from"./RechartsHookInspector-D2kAWSRM.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-ZLsJ9Xuo.js";import"./Layer-DS1Wp5Ew.js";import"./Curve-qa4VelFY.js";import"./types-B0LA1FfJ.js";import"./Text-5TnWPMA2.js";import"./DOMUtils-CimXgsHI.js";import"./ReactUtils-BcCnPuvu.js";import"./Label-B_KIKWwL.js";import"./PolarUtils-B4KHlE6s.js";import"./ZIndexLayer-VR9NNsxL.js";import"./zIndexSlice-Cey6hWeC.js";import"./RechartsWrapper-zi21JKPF.js";import"./hooks-DRsri2Tq.js";import"./axisSelectors-DgM-VaIw.js";import"./ActiveShapeUtils-BaTMfdg_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BbT4XfPo.js";import"./useAnimationId-LktXmMrZ.js";import"./Trapezoid-BXYnhgSX.js";import"./Sector-B6CpJ8fc.js";import"./Symbols-DiPp8IeL.js";import"./RegisterGraphicalItemId-CxpIkg19.js";import"./SetGraphicalItem-6nFc_yGt.js";import"./polarSelectors-OER347r-.js";import"./PolarChart-DpXYNOy7.js";import"./chartDataContext-DdVHUCw_.js";import"./CategoricalChart-dx0iu6Gx.js";import"./index-DOefsbVi.js";import"./ChartSizeDimensions-DjP1Vw_U.js";import"./OffsetShower-C5pOpIAI.js";import"./PlotAreaShower-wVtzUP4L.js";const Q={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
