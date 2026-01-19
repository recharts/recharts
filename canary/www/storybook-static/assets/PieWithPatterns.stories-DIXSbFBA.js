import{e}from"./iframe-DDDJQB5W.js";import{P as p,a as m}from"./PieChart-qfAKe_Q8.js";import{R as s}from"./arrayEqualityCheck-D0Xb1fN2.js";import{C as l}from"./tooltipContext-DL1Jhu1K.js";import{R as c}from"./RechartsHookInspector-UcMzq5oF.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BsKQv1PU.js";import"./Layer-VwKMwUPk.js";import"./Curve-zMorL5Ul.js";import"./types-CGHtFgCy.js";import"./Text-Djbe6uvl.js";import"./DOMUtils-Dkn2KrJ_.js";import"./ReactUtils-DAfUDxZJ.js";import"./Label-vsQtY8U6.js";import"./PolarUtils-t5VCEmBY.js";import"./ZIndexLayer-DbViNaNl.js";import"./zIndexSlice-rPTjsX-n.js";import"./RechartsWrapper-DdXQ715_.js";import"./hooks-BP25Spjv.js";import"./axisSelectors-CQBK46ul.js";import"./ActiveShapeUtils-BxCYJ66h.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CMimnTgv.js";import"./useAnimationId-C8z7_GYR.js";import"./Trapezoid-DCDgebWC.js";import"./Sector-DoveBBFo.js";import"./Symbols-ykgg1Owr.js";import"./RegisterGraphicalItemId-Du0teFv1.js";import"./SetGraphicalItem-C60hp0F5.js";import"./polarSelectors-C8OBcy4B.js";import"./PolarChart-CivjbEDY.js";import"./chartDataContext-j99xrIrV.js";import"./CategoricalChart-grKPARSf.js";import"./index-BliyNw2M.js";import"./ChartSizeDimensions-BYcSqOel.js";import"./OffsetShower-BlJsaDut.js";import"./PlotAreaShower-rDHCl9WN.js";const Q={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
