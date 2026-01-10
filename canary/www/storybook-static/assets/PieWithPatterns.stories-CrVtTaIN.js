import{e}from"./iframe-C7VEdwDl.js";import{a as p,P as m}from"./PieChart-C3UYV2gA.js";import{R as s}from"./arrayEqualityCheck-BFuWEF_2.js";import{C as l}from"./tooltipContext-Bt-pgH_N.js";import{R as c}from"./RechartsHookInspector-zossHO9I.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BUd4YoeE.js";import"./Layer-CPbMT7hg.js";import"./Curve-DE9HnzTx.js";import"./types-CRh2J3nK.js";import"./Text-BdIA0mDm.js";import"./DOMUtils-BLCIXtr_.js";import"./ReactUtils-DGKDkYPZ.js";import"./Label-BR_hSEq_.js";import"./PolarUtils-DHfJA17M.js";import"./ZIndexLayer-BPo_6GDC.js";import"./zIndexSlice-BJ_Gr8zy.js";import"./RechartsWrapper-DEcROWOI.js";import"./hooks-BW_tvarJ.js";import"./axisSelectors-F4Rfzy8w.js";import"./ActiveShapeUtils-DxCy-J0g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dk5aROAI.js";import"./useAnimationId-BiiYSys9.js";import"./Trapezoid-CiHao4Jj.js";import"./Sector-foYN3hhu.js";import"./Symbols-HruIKh8l.js";import"./RegisterGraphicalItemId-CQVzSIpL.js";import"./SetGraphicalItem-CDbWAttj.js";import"./polarSelectors-BFMG5mVl.js";import"./PolarChart-BJ_cdjR1.js";import"./chartDataContext-CfkWD6kk.js";import"./CategoricalChart-0Xeq1mM5.js";import"./index-D3VqoZ-t.js";import"./ChartSizeDimensions-DdGVjbyp.js";import"./OffsetShower-BIF6rOJj.js";import"./PlotAreaShower-YHRv7s4A.js";const Q={component:p},t={render:r=>e.createElement(s,{width:"100%",height:500},e.createElement(m,null,e.createElement("defs",null,e.createElement("pattern",{id:"pattern-A",width:"10",height:"10",patternUnits:"userSpaceOnUse"},e.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2",fill:"#f00"})),e.createElement("pattern",{id:"pattern-B",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},e.createElement("rect",{width:"2",height:"4",fill:"#0f0"})),e.createElement("pattern",{id:"pattern-C",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(135)"},e.createElement("rect",{width:"2",height:"4",fill:"#00f"}))),e.createElement(p,{dataKey:"value",...r},r.data.map(a=>e.createElement(l,{key:`cell-${a.name}`,fill:`url(#pattern-${a.name})`}))),e.createElement(c,null))),args:{cx:150,cy:200,data:[{name:"A",value:80,color:"#ff0000"},{name:"B",value:45,color:"#00ff00"},{name:"C",value:25,color:"#0000ff"}],dataKey:"value",fill:"#8884d8",innerRadius:50,outerRadius:100,stroke:"none"}};var i,n,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
