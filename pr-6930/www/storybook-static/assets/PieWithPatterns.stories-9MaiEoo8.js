import{e}from"./iframe-BUAHB1JE.js";import{P as p,a as m}from"./PieChart-XBjVOkpb.js";import{R as s}from"./arrayEqualityCheck-D5cvBvD0.js";import{C as l}from"./tooltipContext-CiBBulxM.js";import{R as c}from"./RechartsHookInspector-DyBVLxQ5.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DB3crruI.js";import"./Layer-Cm056lbD.js";import"./Curve-U_sOEQqK.js";import"./types-ztb1_leN.js";import"./Text-Cz010pA5.js";import"./DOMUtils-xg92JkXT.js";import"./ReactUtils-kUjnR9HA.js";import"./Label-DycKUeOS.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-CvBAZeUB.js";import"./zIndexSlice-DtimrYBU.js";import"./RechartsWrapper-D3Kz3rBL.js";import"./hooks-CLHcqW-j.js";import"./axisSelectors-nwFqxBSg.js";import"./ActiveShapeUtils-IOesA3uZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C5TZFuIg.js";import"./useAnimationId-Dqqe1r9b.js";import"./Trapezoid-DhqC00At.js";import"./Sector-ZEGPqrgm.js";import"./Symbols-B668NUUf.js";import"./RegisterGraphicalItemId-Wzb-45_P.js";import"./SetGraphicalItem-jsgYVNOw.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-CDBbcDdV.js";import"./PolarChart-nhKWEC9U.js";import"./chartDataContext-CsNatWbQ.js";import"./CategoricalChart-CgjnwgmC.js";import"./index-C8QR5MVL.js";import"./ChartSizeDimensions-DxM1dHTb.js";import"./OffsetShower-CLEQK-Rx.js";import"./PlotAreaShower-Xx92qV_c.js";const V={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
