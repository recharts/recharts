import{e}from"./iframe-D9q7UUmi.js";import{a as p,P as m}from"./PieChart-CeWg8ywU.js";import{R as s}from"./arrayEqualityCheck-CJJXJ9Rv.js";import{C as l}from"./tooltipContext-DC7nW4sy.js";import{R as c}from"./RechartsHookInspector-Btgon49z.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D-3coS0e.js";import"./Layer-CUKLQgPC.js";import"./Curve-DEESCjbc.js";import"./types-FPdAMXDy.js";import"./Text-CLmUy_On.js";import"./DOMUtils-BXuH-NK6.js";import"./ReactUtils-CfRgqXT5.js";import"./Label-CDSn628C.js";import"./PolarUtils-cf4CEJPT.js";import"./ZIndexLayer-CtgCGO4x.js";import"./zIndexSlice-CxekzBSL.js";import"./RechartsWrapper-8_jXv7hz.js";import"./hooks-b1KD0qBL.js";import"./axisSelectors-DCJHWbvW.js";import"./ActiveShapeUtils-Cf3wP9DQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-aQPjrzEG.js";import"./useAnimationId-DeN0uxUI.js";import"./Trapezoid-CrYCphId.js";import"./Sector-BIUbLnT5.js";import"./Symbols-B3oT9PiF.js";import"./RegisterGraphicalItemId-B8upk-8m.js";import"./SetGraphicalItem-DllIbSlC.js";import"./polarSelectors-DEjXZNdq.js";import"./PolarChart-DODKQrSV.js";import"./chartDataContext-C5vcePQl.js";import"./CategoricalChart-ak-_6B9f.js";import"./index-YTWFD20P.js";import"./ChartSizeDimensions-CGOPgU1Q.js";import"./OffsetShower-D7RAK20_.js";import"./PlotAreaShower-DDsxyFt0.js";const Q={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
