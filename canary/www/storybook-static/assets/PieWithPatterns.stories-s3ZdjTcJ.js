import{e}from"./iframe-Cz5RPrzo.js";import{a as p,P as m}from"./PieChart-DLPyA2xL.js";import{R as s}from"./arrayEqualityCheck-DuhA3hrU.js";import{C as l}from"./tooltipContext-Bauin2Js.js";import{R as c}from"./RechartsHookInspector-DP8xCOal.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-x0GM_Fqy.js";import"./Layer-CngTgEke.js";import"./Curve-C0KXugLq.js";import"./types-D1v_Rc2a.js";import"./Text-BayrHrEj.js";import"./DOMUtils-m1R-l7fT.js";import"./ReactUtils-BQq-yyvu.js";import"./Label-XMPDelhI.js";import"./PolarUtils-BqV0Lm0k.js";import"./ZIndexLayer-DopQY-kA.js";import"./zIndexSlice-CcJ--Fig.js";import"./RechartsWrapper-cu-FIaeq.js";import"./hooks-BM-KAHTV.js";import"./axisSelectors-B5q7pd7-.js";import"./ActiveShapeUtils-D5xwOR7W.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C2aKHHpL.js";import"./useAnimationId-ifmUbYmC.js";import"./Trapezoid-CFJnjNBB.js";import"./Sector-D7vvH_6F.js";import"./Symbols-R3z9Gbft.js";import"./RegisterGraphicalItemId-B1o2SWmz.js";import"./SetGraphicalItem-BmMKLEXu.js";import"./polarSelectors-DQKqm8vf.js";import"./PolarChart-dkzZrhBH.js";import"./chartDataContext-CuN30YAe.js";import"./CategoricalChart-LFVK4bCX.js";import"./index-nSyYgmIS.js";import"./ChartSizeDimensions-BL9_hnvT.js";import"./OffsetShower-9oUxrKwL.js";import"./PlotAreaShower-CCuY3b1X.js";const Q={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
