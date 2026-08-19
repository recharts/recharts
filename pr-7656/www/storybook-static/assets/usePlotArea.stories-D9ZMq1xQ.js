import{R as t}from"./iframe-r_02-Jx1.js";import{u as a}from"./CategoricalChart-BXr2d9-i.js";import{R as p}from"./zIndexSlice-DicCmdef.js";import{C as s}from"./ComposedChart-RzNAfe4m.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-gVyrED1g.js";import{X as l}from"./XAxis-CVgPbfXC.js";import{Y as h}from"./YAxis-Bi1VNLZO.js";import{L as c}from"./Legend-CPrl_Fhi.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BQFxUNUu.js";import"./index-N0rIL4Gt.js";import"./index-3jrDyBev.js";import"./index-1kThdQ6e.js";import"./index-wzqytK4Q.js";import"./throttle-BdAdSRQA.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Dk3JE-i1.js";import"./resolveDefaultProps-DyxRtFzB.js";import"./isWellBehavedNumber-CBLlozNg.js";import"./d3-scale-ZwXuuq5P.js";import"./renderedTicksSlice-DFasVLMR.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BGJHdGBf.js";import"./chartDataContext-BdayT2-p.js";import"./Layer-dybzDHm9.js";import"./Curve-BS9D-rBh.js";import"./types-DPBZ02ip.js";import"./step-CkxDYVc4.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CW8FYpXu.js";import"./Label-CNQryUt-.js";import"./Text-DCZHyyNe.js";import"./DOMUtils-BlgfTScp.js";import"./useBackwardsCompatibleTheme-WaqTwaFy.js";import"./ZIndexLayer-DmaqXjfN.js";import"./useAnimationId-R3ZNERdL.js";import"./ActivePoints-B4uNP6Ql.js";import"./Dot-CPXaMvXV.js";import"./RegisterGraphicalItemId-BP1XikYq.js";import"./ErrorBarContext-DmfoTXVm.js";import"./GraphicalItemClipPath-D_fliYIp.js";import"./SetGraphicalItem-ByUdxl3U.js";import"./getRadiusAndStrokeWidthFromDot-CrfZ4miq.js";import"./ActiveShapeUtils-BgiK615A.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-D3LO-u6r.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BARhuu6m.js";import"./symbol-U42lp78U.js";import"./useElementOffset-slB8K9ts.js";import"./uniqBy-9Ezk50RS.js";import"./iteratee-Bv8d6n2u.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ut=["UsePlotArea"];export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
