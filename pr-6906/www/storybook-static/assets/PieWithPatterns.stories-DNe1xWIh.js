import{e}from"./iframe-DwwP6BDm.js";import{P as p,a as m}from"./PieChart-DjR39oaQ.js";import{R as s}from"./arrayEqualityCheck-CXp0SSuS.js";import{C as l}from"./tooltipContext-HXLRqA2y.js";import{R as c}from"./RechartsHookInspector-CJI_KtjH.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-fclRL42w.js";import"./Layer-CFoQxLn1.js";import"./Curve-CYEqd5kN.js";import"./types-B_qGOwmF.js";import"./Text-BQatnNw9.js";import"./DOMUtils-B0inai4d.js";import"./ReactUtils-DUdaZBrS.js";import"./Label-DDS3-7t-.js";import"./PolarUtils-Dg8SPN1d.js";import"./ZIndexLayer-BDklLudV.js";import"./zIndexSlice-B2wHCWq0.js";import"./RechartsWrapper-DfwiyTzK.js";import"./hooks-COs4f3qd.js";import"./axisSelectors-B_EC2kA9.js";import"./ActiveShapeUtils-TYQt8YFp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BIC-oKaI.js";import"./useAnimationId-DSGl_EXu.js";import"./Trapezoid-D_UTfuwy.js";import"./Sector-CBezTXxj.js";import"./Symbols-C6tHIL3l.js";import"./RegisterGraphicalItemId-DERA-43u.js";import"./SetGraphicalItem-BEgWdOjU.js";import"./polarSelectors-B5G57dgg.js";import"./PolarChart-C42JPq6-.js";import"./chartDataContext-GZk7dH94.js";import"./CategoricalChart-LzovMGTR.js";import"./index-BPFUjSxJ.js";import"./ChartSizeDimensions-Bw79VUZb.js";import"./OffsetShower-BCg2GNSc.js";import"./PlotAreaShower-DXMXrPtG.js";const Q={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
