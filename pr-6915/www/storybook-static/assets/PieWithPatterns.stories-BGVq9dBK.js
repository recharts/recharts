import{e}from"./iframe-NQnSavsc.js";import{P as p,a as m}from"./PieChart-CB3XITdm.js";import{R as s}from"./arrayEqualityCheck-ClUhvVMc.js";import{C as l}from"./tooltipContext-BSe215jy.js";import{R as c}from"./RechartsHookInspector-CrS4ifUj.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-clR4-9At.js";import"./Layer-BUJpEzYu.js";import"./Curve-D3iL2MuF.js";import"./types-Ditu6fq2.js";import"./Text-s16izCJe.js";import"./DOMUtils-hORVmOPR.js";import"./ReactUtils-B56Ms0vK.js";import"./Label-CdLQa_Zq.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-D7r7UDo0.js";import"./zIndexSlice-nS_oTVB0.js";import"./RechartsWrapper-BFx6ycKR.js";import"./hooks-BcaLrk1Y.js";import"./axisSelectors-GttesoX_.js";import"./ActiveShapeUtils-CdNAARSB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-dUbZu5CP.js";import"./useAnimationId-DY2MKiMD.js";import"./Trapezoid-BZ0zgDCf.js";import"./Sector-DKYprxhX.js";import"./Symbols-C7hNVpPd.js";import"./RegisterGraphicalItemId-CF9d6kYM.js";import"./SetGraphicalItem-BSyTvg-d.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-BClsgCDf.js";import"./PolarChart-B8KKlJ1Q.js";import"./chartDataContext-BPtWcoks.js";import"./CategoricalChart--MZ7Ud20.js";import"./index-CtOaP7ae.js";import"./ChartSizeDimensions-BZdR1kHO.js";import"./OffsetShower-CoGf8iJT.js";import"./PlotAreaShower-CFMI3s33.js";const V={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
