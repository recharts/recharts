import{R as t}from"./iframe-BAw0s5ot.js";import{u as a}from"./CategoricalChart-BcYU7xxq.js";import{R as p}from"./zIndexSlice-BeH27P2U.js";import{C as s}from"./ComposedChart-DteFOQlI.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DjWgsN1g.js";import{X as l}from"./XAxis-DLc6krzc.js";import{Y as h}from"./YAxis-o1QSu-GR.js";import{L as c}from"./Legend-CTPvlbFs.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bttwz4rr.js";import"./index-B1DwQ2Om.js";import"./index-46sIyfq_.js";import"./index-CjVdCyN5.js";import"./index-BK18-1Z2.js";import"./throttle-CMKSqw9i.js";import"./get-CSAr6kNF.js";import"./renderedTicksSlice-lnlzRSDk.js";import"./axisSelectors-CrQ5YVkn.js";import"./d3-scale-8J52VcxR.js";import"./resolveDefaultProps-BuFdbqch.js";import"./isWellBehavedNumber-9WEl6uBx.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-qH9nTYaZ.js";import"./chartDataContext-Bg-IfXwk.js";import"./Layer-CnD0sOVo.js";import"./Curve-DDP5uwdK.js";import"./types-3486df9G.js";import"./step-BMQa1wmq.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DKynRxAN.js";import"./Label-RqhE4qn6.js";import"./Text-CHY17Wwg.js";import"./DOMUtils-DRw43MBp.js";import"./ZIndexLayer-B6NdRg2s.js";import"./useAnimationId-D83gTctj.js";import"./ActivePoints-x13vM-lM.js";import"./Dot-DM8ASB1e.js";import"./RegisterGraphicalItemId-BYWDLggr.js";import"./ErrorBarContext-B9tnwNW4.js";import"./GraphicalItemClipPath-CFCGDJ4D.js";import"./SetGraphicalItem-BtUL3que.js";import"./getRadiusAndStrokeWidthFromDot-Dj6bNAvM.js";import"./ActiveShapeUtils-DPtxPHYL.js";import"./CartesianAxis-BP8vTRJY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BExFE9NQ.js";import"./symbol-CdA8a2iG.js";import"./useElementOffset-BFqwe0iW.js";import"./uniqBy-dt3axYWo.js";import"./iteratee-E5lawuru.js";const lt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ht=["UsePlotArea"];export{e as UsePlotArea,ht as __namedExportsOrder,lt as default};
