import{e}from"./iframe-0lTGunMW.js";import{P as p,a as m}from"./PieChart-D6lJyoMt.js";import{R as s}from"./arrayEqualityCheck-BcVHM6kB.js";import{C as l}from"./tooltipContext-PVr3o7WU.js";import{R as c}from"./RechartsHookInspector-Dk1C8jj5.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Hv7UJc4Y.js";import"./Layer-BnXp22uo.js";import"./Curve-DZsm4o-J.js";import"./types-WsTRE19v.js";import"./Text-bhqNXfXh.js";import"./DOMUtils-B5DHQ51j.js";import"./ReactUtils-CXVPwG-V.js";import"./Label-CODe3zwa.js";import"./PolarUtils-mWliNy-S.js";import"./ZIndexLayer-DWGlhSed.js";import"./zIndexSlice-D-YSqdMJ.js";import"./RechartsWrapper-CnzobKYl.js";import"./hooks-CXPWyfRe.js";import"./axisSelectors-Djz2yXUi.js";import"./ActiveShapeUtils-CKfXoaq0.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BCh8wZqF.js";import"./useAnimationId-D9Wpr36K.js";import"./Trapezoid-Tsb3ohUM.js";import"./Sector-Doli5igL.js";import"./Symbols-DWUe3itn.js";import"./RegisterGraphicalItemId-BjD0GJz1.js";import"./SetGraphicalItem-j4NHyBYf.js";import"./polarSelectors-D6pM3MO4.js";import"./PolarChart-C8tGuB3y.js";import"./chartDataContext-Cyqtlzkq.js";import"./CategoricalChart-CV-slYuT.js";import"./index-DjmMVEJp.js";import"./ChartSizeDimensions-C9nZfRd3.js";import"./OffsetShower-ZX4tabc8.js";import"./PlotAreaShower-BEMT4keu.js";const Q={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
