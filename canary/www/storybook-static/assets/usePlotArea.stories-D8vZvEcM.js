import{R as t}from"./iframe-CQZPQf4O.js";import{e as p}from"./RechartsWrapper-CKHlp-Rt.js";import{R as a}from"./zIndexSlice-BxTiYWdU.js";import{C as n}from"./ComposedChart-BrH5TOj4.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DjUB_QE1.js";import{X as l}from"./XAxis-vMRVH8Ao.js";import{Y as h}from"./YAxis-BXIOSjAZ.js";import{L as c}from"./Legend-BUo0Nb3s.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DgVJwWbR.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Or82bYZb.js";import"./throttle-AnGuXVWW.js";import"./index-CHepiqPh.js";import"./index-D3lB8fDF.js";import"./isWellBehavedNumber-BVjPIj2C.js";import"./d3-scale-Dh160Q_7.js";import"./index-CEP5bmmA.js";import"./index-BCncLH8b.js";import"./renderedTicksSlice-DwLtgLm9.js";import"./index-XXc_9p_2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BGmWQkFH.js";import"./chartDataContext-BFYg2JX8.js";import"./CategoricalChart-DpdoG3FY.js";import"./Layer-C-YS-hE0.js";import"./Curve-CEf8Z_wT.js";import"./types-Q9Uebpou.js";import"./step-B5PbnVsw.js";import"./path-DyVhHtw_.js";import"./activeStyles-CbDR06hO.js";import"./Label-CwpPaPRc.js";import"./Text-FG9LsITf.js";import"./pageBackground-VSL8VAH8.js";import"./useId-CKB20m-R.js";import"./useBackwardsCompatibleTheme-DinZCZAi.js";import"./ZIndexLayer-BKLTAFCk.js";import"./useAnimationId-C5Lal4Ku.js";import"./dataEntryStyles-CEFXctA4.js";import"./ActivePoints-DDJZk_do.js";import"./Dot-D6DMXsNr.js";import"./ErrorBarContext-nT97Ooaq.js";import"./GraphicalItemClipPath-BdCokK_0.js";import"./SetGraphicalItem-LkBJ9I3O.js";import"./getRadiusAndStrokeWidthFromDot-DsehLS7A.js";import"./ActiveShapeUtils-Dx4Ozko3.js";import"./useEffectiveDataKey-CCE12RzB.js";import"./CartesianAxis-CO8voLuT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-C7CdNj5F.js";import"./symbol-OvqjbrCm.js";import"./useElementOffset-CNsQVFGU.js";import"./uniqBy-CT-lLGIP.js";import"./iteratee-rt63w_5K.js";import"./isArguments-yB-y1yaH.js";const ft={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(a,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},yt=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,yt as __namedExportsOrder,ft as default};
