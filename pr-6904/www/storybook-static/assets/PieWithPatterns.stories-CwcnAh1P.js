import{e}from"./iframe-BLLNbNku.js";import{P as p,a as m}from"./PieChart-BuwCgb1Z.js";import{R as s}from"./arrayEqualityCheck-Co8h5dnX.js";import{C as l}from"./tooltipContext-Di8nQB5E.js";import{R as c}from"./RechartsHookInspector-0ZdSIZYh.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BEjwQWgd.js";import"./Layer-BCxNAEKV.js";import"./Curve-k7SSPeeE.js";import"./types-C2V5y-Kb.js";import"./Text-DzNeFpe7.js";import"./DOMUtils-Bb3zeSfI.js";import"./ReactUtils-DqoF2LGV.js";import"./Label-BoL4zXeM.js";import"./PolarUtils-DXjI68e5.js";import"./ZIndexLayer-rdL7qpG4.js";import"./zIndexSlice-DcR9U4FZ.js";import"./RechartsWrapper-DHcwqX8r.js";import"./hooks-Ch251T4B.js";import"./axisSelectors-CmF5TL99.js";import"./ActiveShapeUtils-IKQ46J3H.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B1VmBLbJ.js";import"./useAnimationId-Brx318jV.js";import"./Trapezoid-DMY00GCf.js";import"./Sector-BtcaLVg3.js";import"./Symbols-Uq5NG2Xk.js";import"./RegisterGraphicalItemId-CwVFZemd.js";import"./SetGraphicalItem-BZa4lgFq.js";import"./polarSelectors-DwNZjSQN.js";import"./PolarChart-BHB5RN-s.js";import"./chartDataContext-a-oaLnie.js";import"./CategoricalChart-MybRLE0p.js";import"./index-Dyt5IQSl.js";import"./ChartSizeDimensions-CgN2NQMs.js";import"./OffsetShower-FR5I6nlk.js";import"./PlotAreaShower-B06uRIML.js";const Q={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
