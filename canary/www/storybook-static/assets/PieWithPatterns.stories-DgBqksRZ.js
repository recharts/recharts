import{e}from"./iframe-DGrXlEkx.js";import{a as p,P as m}from"./PieChart-CTfRJoS0.js";import{R as s}from"./arrayEqualityCheck-DicChNuU.js";import{C as l}from"./tooltipContext-CMxTeChW.js";import{R as c}from"./RechartsHookInspector-Br39JKkJ.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CbjUZWO4.js";import"./Layer-D3LXHH9n.js";import"./Curve-B7GNUcvb.js";import"./types-Byz7h8Fw.js";import"./Text-DHLuacJp.js";import"./DOMUtils-BNpuiDkW.js";import"./ReactUtils-B0RMD20A.js";import"./Label-BU6Zd3bq.js";import"./PolarUtils-DHWqJfSQ.js";import"./ZIndexLayer-B0lWMP9E.js";import"./zIndexSlice-BOlzJk7E.js";import"./RechartsWrapper-BsZxNtsW.js";import"./hooks-BJzdHLQJ.js";import"./axisSelectors-B99hHUji.js";import"./ActiveShapeUtils-Dmo5KH5o.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B_ChE2a8.js";import"./useAnimationId-BLzFnaDj.js";import"./Trapezoid-D3rkb8mR.js";import"./Sector-BiHhGzVm.js";import"./Symbols-lPueLsWK.js";import"./RegisterGraphicalItemId-kRuXUne3.js";import"./SetGraphicalItem-DtkD_AUo.js";import"./polarSelectors-Cb63FjAU.js";import"./PolarChart-DtSacEEm.js";import"./chartDataContext-xgZ2IC4i.js";import"./CategoricalChart-CoFZdKLi.js";import"./index-DUFFx6eI.js";import"./ChartSizeDimensions-DMMvC6d0.js";import"./OffsetShower-T7KMfcKq.js";import"./PlotAreaShower-B7mPYwn0.js";const Q={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
