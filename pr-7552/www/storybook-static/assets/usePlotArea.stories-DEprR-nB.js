import{R as t}from"./iframe-w7qCbIlq.js";import{u as a}from"./CategoricalChart-C5vKFxAI.js";import{R as p}from"./zIndexSlice-BtZQ5xih.js";import{C as s}from"./ComposedChart-DOApFncK.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BlbeS46W.js";import{X as l}from"./XAxis-8n0ix597.js";import{Y as h}from"./YAxis-CwFi80nS.js";import{L as c}from"./Legend-BOzn4Gr3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CJCCLnSy.js";import"./index-Ddi-T72V.js";import"./index-C1u3rFhR.js";import"./index-BmGe_VQx.js";import"./index-BBIhqOXx.js";import"./throttle-KQ-EWGZj.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-TeAVrZEF.js";import"./axisSelectors-DudJ2V7b.js";import"./resolveDefaultProps-BXXLLFZs.js";import"./isWellBehavedNumber-BLtoVg4o.js";import"./d3-scale-DHyfTYAT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BbPcQF_v.js";import"./chartDataContext-d_tiIYhw.js";import"./Layer-C8MJqdtw.js";import"./Curve-858tLF7S.js";import"./types-0ytIGtz9.js";import"./step-BY4MZZhT.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DtqXu7a9.js";import"./Label-Bwto3iA9.js";import"./Text-Bii4Z9SU.js";import"./DOMUtils-BHtgPnwB.js";import"./ZIndexLayer-BipLpo9Z.js";import"./useAnimationId-BLBs87N6.js";import"./ActivePoints-MWBllTj-.js";import"./Dot-DqpKuKrG.js";import"./RegisterGraphicalItemId-BMqZVFge.js";import"./ErrorBarContext-Ddig5LAI.js";import"./GraphicalItemClipPath-CJg2XcFN.js";import"./SetGraphicalItem-CaM-dNjz.js";import"./getRadiusAndStrokeWidthFromDot-Bj2pWrUE.js";import"./ActiveShapeUtils-pA3gak5X.js";import"./CartesianAxis-CT_UcdRd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DpLVmZ-d.js";import"./symbol-DSkPJeUc.js";import"./useElementOffset-BPAlyBBz.js";import"./uniqBy-D4kbD2sN.js";import"./iteratee-kNxDFHiu.js";const lt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
