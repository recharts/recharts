import{e}from"./iframe-PyjOQzGK.js";import{P as p,a as m}from"./PieChart-DZy3Odgs.js";import{R as s}from"./arrayEqualityCheck-_dHyT-RZ.js";import{C as l}from"./tooltipContext-D-hTrTbJ.js";import{R as c}from"./RechartsHookInspector-D26E9kzM.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-uwFRJaRu.js";import"./Layer-CHnOmiRY.js";import"./Curve-BookXfP4.js";import"./types-UMLEboQ_.js";import"./Text-BMHdefpA.js";import"./DOMUtils-InBL681b.js";import"./ReactUtils-ChAGskY_.js";import"./Label-CvwrqBXQ.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-DUzVAEAH.js";import"./zIndexSlice-B8KtXzX9.js";import"./RechartsWrapper-C_qiBOfF.js";import"./hooks-Lbs_q-DW.js";import"./axisSelectors-BsdiAjZp.js";import"./ActiveShapeUtils-ChuhRPpg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BJG4_O5K.js";import"./useAnimationId-DVpAz_Js.js";import"./Trapezoid-DucQEHEf.js";import"./Sector-hPc79hJa.js";import"./Symbols-Jat4kELE.js";import"./RegisterGraphicalItemId-BTJ5pHFA.js";import"./SetGraphicalItem-CfBIbOKf.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-lTgAltpJ.js";import"./PolarChart-Btj7f4AR.js";import"./chartDataContext--xq0wDov.js";import"./CategoricalChart-CggXLcLb.js";import"./index-uJDoNHNu.js";import"./ChartSizeDimensions-BahwbRey.js";import"./OffsetShower-C2jS-DP9.js";import"./PlotAreaShower-CwTougAK.js";const V={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
