import{e}from"./iframe-CUnLgpW-.js";import{a as p,P as m}from"./PieChart-DgQ6faWB.js";import{R as s}from"./arrayEqualityCheck-CGwnIdvG.js";import{C as l}from"./tooltipContext-J2Mqx9dW.js";import{R as c}from"./RechartsHookInspector-Bx_AeU2-.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-3A21IoT3.js";import"./Layer-DqDgkHbR.js";import"./Curve-BFHPlIj0.js";import"./types-Cya9OZ_P.js";import"./Text-Bzx_mpBH.js";import"./DOMUtils-rOWW9V75.js";import"./ReactUtils-ubByZwRx.js";import"./Label-BFTmbefL.js";import"./PolarUtils-B2H8NKZh.js";import"./ZIndexLayer-CIJpz3dT.js";import"./zIndexSlice-COAwGY7D.js";import"./RechartsWrapper-DlEqFuyr.js";import"./hooks-BodQywHm.js";import"./axisSelectors-CesYX3jk.js";import"./ActiveShapeUtils-CaB32_zp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-fUf-OO.js";import"./useAnimationId-DVbvIVcC.js";import"./Trapezoid-D3rvFnZU.js";import"./Sector-CCBcQdor.js";import"./Symbols-B7Txi7cb.js";import"./RegisterGraphicalItemId-BTAKxoZt.js";import"./SetGraphicalItem-BRf4oXtZ.js";import"./polarSelectors-Boe5joZj.js";import"./PolarChart-C5drMWSy.js";import"./chartDataContext-C42Wd2jm.js";import"./CategoricalChart-BBiN7XHJ.js";import"./index-F2EJmSFt.js";import"./ChartSizeDimensions-BZ4xctFr.js";import"./OffsetShower-DfQZxxZ8.js";import"./PlotAreaShower-ajA77Kx1.js";const Q={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
