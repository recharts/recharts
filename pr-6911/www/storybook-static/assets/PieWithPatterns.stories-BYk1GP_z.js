import{e}from"./iframe-BJE3gYiz.js";import{P as p,a as m}from"./PieChart-DsUPwcSe.js";import{R as s}from"./arrayEqualityCheck-DOpOKb7k.js";import{C as l}from"./tooltipContext-CEFht0ON.js";import{R as c}from"./RechartsHookInspector-CmJjyPOL.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKNlGFt8.js";import"./Layer-BpHZQDe5.js";import"./Curve-9wsGsorR.js";import"./types-BgpWyLLK.js";import"./Text-CV7Ey6jK.js";import"./DOMUtils-DGjslG0U.js";import"./ReactUtils-DpOzmnGs.js";import"./Label-8Du7WhKH.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-PGry8EqE.js";import"./zIndexSlice-CPc0PYoJ.js";import"./RechartsWrapper-6YVSs0X2.js";import"./hooks-CzpWgTi2.js";import"./axisSelectors-BAfv6-Wm.js";import"./ActiveShapeUtils-D_XtSxMo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-oe8iNjEY.js";import"./useAnimationId-xUHk75MJ.js";import"./Trapezoid-wLmtEI-B.js";import"./Sector-D1swSw6R.js";import"./Symbols-CA9SXzw3.js";import"./RegisterGraphicalItemId-DDZY4GcH.js";import"./SetGraphicalItem-Bs3LcTS6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./polarSelectors-CSlKPkzU.js";import"./PolarChart-Ch-pFbyp.js";import"./chartDataContext-dCefmzkT.js";import"./CategoricalChart-BCQDahMf.js";import"./index-BZmliZtD.js";import"./ChartSizeDimensions-kmApRxRi.js";import"./OffsetShower-Cu7vEAUz.js";import"./PlotAreaShower-3gxA0MT2.js";const V={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
