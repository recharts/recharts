import{e}from"./iframe-BlTD-rim.js";import{a as p,P as m}from"./PieChart-Cnx9krNH.js";import{R as s}from"./arrayEqualityCheck-rFMbtr9X.js";import{C as l}from"./tooltipContext-D31RXlBy.js";import{R as c}from"./RechartsHookInspector-AxC62fMg.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CYyTkUJ3.js";import"./Layer-COV8jJuI.js";import"./Curve-BUANm7-q.js";import"./types-DTlxByIq.js";import"./Text-CcLFuzDB.js";import"./DOMUtils-JUKIsz3X.js";import"./ReactUtils-cgJBm0o5.js";import"./Label-DeeiiEOU.js";import"./PolarUtils-uT4ExAHg.js";import"./ZIndexLayer-D1uFjBFZ.js";import"./zIndexSlice-Ir6gglyl.js";import"./RechartsWrapper-BRiCuj44.js";import"./hooks-ZIQpvDbg.js";import"./axisSelectors-BTk9q0tB.js";import"./ActiveShapeUtils-TxWRIrWJ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DYtDJsJv.js";import"./useAnimationId-Cp6XJ64u.js";import"./Trapezoid-YZMZwo4M.js";import"./Sector-BWZ0U6hI.js";import"./Symbols-CPbquqjE.js";import"./RegisterGraphicalItemId-7-yGWLdn.js";import"./SetGraphicalItem-BzR4HcCN.js";import"./polarSelectors-DlZGClph.js";import"./PolarChart-Yls-65Xs.js";import"./chartDataContext-BDSmG94B.js";import"./CategoricalChart-DNOtZmhb.js";import"./index-BN3nPK1K.js";import"./ChartSizeDimensions-DjKj5CZH.js";import"./OffsetShower-BJ7VFhTL.js";import"./PlotAreaShower-DLdCBikg.js";const Q={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
