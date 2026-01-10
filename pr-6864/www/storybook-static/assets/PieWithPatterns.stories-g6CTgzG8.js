import{e}from"./iframe-DFbc2wnk.js";import{a as p,P as m}from"./PieChart-D_a1rupU.js";import{R as s}from"./arrayEqualityCheck-DNx-7st0.js";import{C as l}from"./tooltipContext-BfWSfKm-.js";import{R as c}from"./RechartsHookInspector-BArVV55G.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-ClO_iFbZ.js";import"./Layer-qN8dyvlM.js";import"./Curve-CTbZZW_i.js";import"./types-CdWStgLs.js";import"./Text-DCmcV5md.js";import"./DOMUtils-Bie9vKOH.js";import"./ReactUtils-BJsLkXPe.js";import"./Label-CS9yD1bY.js";import"./PolarUtils-BDvNNmDF.js";import"./ZIndexLayer-DxPlI_9c.js";import"./zIndexSlice-DhoG6ae-.js";import"./RechartsWrapper-PvLVQTSN.js";import"./hooks-zOgLtc1N.js";import"./axisSelectors-BtV4vldP.js";import"./ActiveShapeUtils-BSQcxVua.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-tz9WvN-g.js";import"./useAnimationId-B9C_B4hh.js";import"./Trapezoid-CRho5hrx.js";import"./Sector-BE1YiTfv.js";import"./Symbols--iTzKkzh.js";import"./RegisterGraphicalItemId-BFMXufyl.js";import"./SetGraphicalItem-DlUa5gp3.js";import"./polarSelectors-IPiGwrtB.js";import"./PolarChart-BxQg6gaW.js";import"./chartDataContext-Coc1sgsX.js";import"./CategoricalChart-UkGGk_Hv.js";import"./index-DEbDUIbN.js";import"./ChartSizeDimensions-BvKst1DG.js";import"./OffsetShower-BMIsB7Uf.js";import"./PlotAreaShower-CrjZWfAt.js";const Q={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
