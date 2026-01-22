import{e}from"./iframe-Bnj2hik-.js";import{P as p,a as m}from"./PieChart-C55_Fdrw.js";import{R as s}from"./arrayEqualityCheck-CvUuuvKy.js";import{C as l}from"./tooltipContext-C91HkTF6.js";import{R as c}from"./RechartsHookInspector-C_AeFs2E.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CPe3qGY9.js";import"./Layer-CTa4OydD.js";import"./Curve-DmusCa7H.js";import"./types-BDwtxhLH.js";import"./Text-CZ97J0qN.js";import"./DOMUtils-JoNXkoCv.js";import"./ReactUtils-Df0RtsJl.js";import"./Label-CGAHaC0Q.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-AOmKG0iq.js";import"./zIndexSlice-CXHmHRtI.js";import"./RechartsWrapper-B0Rp0hND.js";import"./hooks-Bya6Ssf9.js";import"./axisSelectors-DFI1wFeY.js";import"./ActiveShapeUtils--kZjLfXB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BBR3U7HU.js";import"./useAnimationId-APU2l9w6.js";import"./Trapezoid-CztQNmuh.js";import"./Sector-DCA192jN.js";import"./Symbols-DhIIpi5f.js";import"./RegisterGraphicalItemId-DiJF1Hfp.js";import"./SetGraphicalItem-DzQbpKu1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-wnc8ZR9y.js";import"./PolarChart-BFJqQ0Cp.js";import"./chartDataContext-DBEZcAkK.js";import"./CategoricalChart-6PDUcg0C.js";import"./index-BXTK0ASf.js";import"./ChartSizeDimensions-fd2MIhjM.js";import"./OffsetShower-h-8uohRc.js";import"./PlotAreaShower-BfrbL-Yz.js";const V={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
