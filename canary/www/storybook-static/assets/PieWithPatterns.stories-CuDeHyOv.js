import{e}from"./iframe-CKmpfOpL.js";import{a as p,P as m}from"./PieChart-C5OLVEet.js";import{R as s}from"./arrayEqualityCheck-CGTamc7H.js";import{C as l}from"./tooltipContext-dPsf86pg.js";import{R as c}from"./RechartsHookInspector-DZtkbE0Z.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C7FTbt6F.js";import"./Layer-DhYkCEVl.js";import"./Curve-Bys97J5V.js";import"./types-BLY5tRwt.js";import"./Text-DsSpVH1-.js";import"./DOMUtils-Bi3DtBC5.js";import"./ReactUtils-BXryAzdD.js";import"./Label-DnuO6Rjq.js";import"./PolarUtils-BmD-XZwK.js";import"./ZIndexLayer-B_sQwTbu.js";import"./zIndexSlice-CQqF6s7B.js";import"./RechartsWrapper-D1NbH_UG.js";import"./hooks-BGbqk51h.js";import"./axisSelectors-Bt4_ZMoO.js";import"./ActiveShapeUtils-DCJZv5Uu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D_zs00yx.js";import"./useAnimationId-DzZ8q-8e.js";import"./Trapezoid-PdOQHAco.js";import"./Sector-DbmZtSEy.js";import"./Symbols-CFHhg7rN.js";import"./RegisterGraphicalItemId-wa1Otpvd.js";import"./SetGraphicalItem-DSgpGKPf.js";import"./polarSelectors-Dx_4Jfci.js";import"./PolarChart-D0MJBS0_.js";import"./chartDataContext-CLpm-ufS.js";import"./CategoricalChart-CCPcc9Jc.js";import"./index-moZvkop3.js";import"./ChartSizeDimensions-DFNYoe11.js";import"./OffsetShower-9z7FzopR.js";import"./PlotAreaShower-C7JeV-Sm.js";const Q={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
