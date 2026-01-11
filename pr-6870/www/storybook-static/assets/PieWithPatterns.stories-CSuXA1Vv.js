import{e}from"./iframe-D2G3HIAp.js";import{a as p,P as m}from"./PieChart-CJHWwhYC.js";import{R as s}from"./arrayEqualityCheck-D7f_pFRZ.js";import{C as l}from"./tooltipContext-BcWuMro5.js";import{R as c}from"./RechartsHookInspector-Bl5k7Hvc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DUSJViu-.js";import"./Layer--_yZLHYD.js";import"./Curve-DwXIRY2H.js";import"./types-DJ8_iZaM.js";import"./Text-BktKgt0G.js";import"./DOMUtils-CXrXcMzN.js";import"./ReactUtils-BiGt9Rwl.js";import"./Label-Dmvkas3w.js";import"./PolarUtils-Dps0SkyA.js";import"./ZIndexLayer-CUBtDPQX.js";import"./zIndexSlice-DJ_SqHH-.js";import"./RechartsWrapper-CZfXu9Bm.js";import"./hooks-sNKmgtMM.js";import"./axisSelectors-276H6COd.js";import"./ActiveShapeUtils-D_-w_v2b.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BNNRRaL-.js";import"./useAnimationId-P64LV0gd.js";import"./Trapezoid-BPu8z8Hk.js";import"./Sector-CkVMFxgw.js";import"./Symbols-CdOOLS_O.js";import"./RegisterGraphicalItemId-Dydu6q-y.js";import"./SetGraphicalItem-4DzlkcSy.js";import"./polarSelectors-esejXy7I.js";import"./PolarChart-DfDdqz2q.js";import"./chartDataContext-BdGyYEQ1.js";import"./CategoricalChart-DtaGr5KL.js";import"./index-BwQRywFC.js";import"./ChartSizeDimensions-C1G0XugS.js";import"./OffsetShower-vnVO-R-R.js";import"./PlotAreaShower-8nMbOvlD.js";const Q={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
