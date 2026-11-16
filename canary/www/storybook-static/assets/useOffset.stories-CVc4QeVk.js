import{R as t}from"./iframe-1fJ5z_WZ.js";import{y as p}from"./RechartsWrapper-CR62a_mQ.js";import{R as a}from"./zIndexSlice-BJlX5T59.js";import{C as n}from"./ComposedChart-Ejf7RFZN.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-CbRnIiBV.js";import{X as d}from"./XAxis-Kvj5vG7_.js";import{Y as h}from"./YAxis-De-4AuvJ.js";import{L as g}from"./Legend-CmPChhHP.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DpYz-CI8.js";import"./get-cF5BDHN6.js";import"./axisSelectors-V7mZ-cGP.js";import"./throttle-6GiZsFaS.js";import"./index-DsJre9D2.js";import"./index-CN35TrPh.js";import"./polarAxisSelectors-DJTK4O93.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DqY1ZQ_w.js";import"./index-n_irgge3.js";import"./index-BVEyPHm4.js";import"./renderedTicksSlice-C4Oi_vEC.js";import"./index-Cn_Mqps3.js";import"./fillDefinitions-BKoNuBLW.js";import"./CartesianChart-DqvtgvX5.js";import"./chartDataContext-B7GlDzou.js";import"./CategoricalChart-DhN17CFo.js";import"./Layer-6gV2DTZI.js";import"./Curve-D2bzFbuS.js";import"./types-XVdAxFZ3.js";import"./step-DaCSxOe-.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CqRs5fjI.js";import"./Label-C7hOOLTD.js";import"./Text-BeONQBVt.js";import"./ZIndexLayer-CrU6dYup.js";import"./ActivePoints-D175dDtY.js";import"./Dot-B85RmoVX.js";import"./activeStyles-C3pl5b-R.js";import"./useAnimationId-BaNyc8zg.js";import"./Symbols-CPapFf10.js";import"./symbol-CvHFU9Z0.js";import"./ErrorBarContext-CHpXmxM4.js";import"./SetGraphicalItem-BkhZc2Qn.js";import"./getRadiusAndStrokeWidthFromDot-BILnwdsR.js";import"./ActiveShapeUtils-DH_zMc_D.js";import"./useEffectiveDataKey-BB-f3APH.js";import"./CartesianAxis-DL2qV91b.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-DE_GKN50.js";import"./uniqBy-C60c41gU.js";import"./iteratee-DEMDIKbX.js";import"./isArguments-yB-y1yaH.js";const ct={title:"API/hooks/useOffset",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(a,{width:e.width,height:e.height},t.createElement(n,{data:s,margin:e.margin},t.createElement(f,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(g,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}},lt=["UseOffset"];var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useOffset',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
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
    }
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{r as UseOffset,lt as __namedExportsOrder,ct as default};
