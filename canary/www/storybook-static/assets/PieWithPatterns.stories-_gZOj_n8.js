import{e}from"./iframe-BVH8UecD.js";import{P as p,a as m}from"./PieChart-Cy_N3R3S.js";import{R as s}from"./arrayEqualityCheck-vgKGXjJg.js";import{C as l}from"./tooltipContext-BBDmyfFl.js";import{R as c}from"./RechartsHookInspector-Dq3yykk5.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cdk0Kr5w.js";import"./Layer-CdphaBoS.js";import"./Curve-5Yzr7IBn.js";import"./types-iQF7hC2M.js";import"./Text-B5hVuEjR.js";import"./DOMUtils-Awr9GIGy.js";import"./ReactUtils-CPhzqwNY.js";import"./Label-DbioSpEE.js";import"./PolarUtils-D3PpCgED.js";import"./ZIndexLayer-Qipy46x2.js";import"./zIndexSlice-BoigZ-y7.js";import"./RechartsWrapper-BZaLp-vS.js";import"./hooks-EmSSg1xf.js";import"./axisSelectors-CdzAnCbl.js";import"./ActiveShapeUtils-BkZUQSXK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DWlX6cPO.js";import"./useAnimationId-B1orywOS.js";import"./Trapezoid-BHTAQ8Mn.js";import"./Sector-DWTAjqin.js";import"./Symbols-Bx3sDerM.js";import"./RegisterGraphicalItemId-BvvWKN3n.js";import"./SetGraphicalItem-B2OXJLzy.js";import"./polarSelectors-CYYw3TI0.js";import"./PolarChart-By58hzZN.js";import"./chartDataContext-DfFz62HT.js";import"./CategoricalChart-361vez3Q.js";import"./index-C-t36GsJ.js";import"./ChartSizeDimensions-C0bbugJp.js";import"./OffsetShower-CgbwF9et.js";import"./PlotAreaShower-HC6koTfx.js";const Q={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
