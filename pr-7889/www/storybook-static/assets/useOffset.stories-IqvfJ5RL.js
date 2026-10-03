import{R as t}from"./iframe-BiVlDiGB.js";import{A as p}from"./RechartsWrapper-BDkbatGL.js";import{R as a}from"./zIndexSlice-BT91VcLs.js";import{C as n}from"./ComposedChart-CruKG_sN.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-Bk_cwfyz.js";import{X as d}from"./XAxis-DvOqqISP.js";import{Y as h}from"./YAxis-B9zpHgNk.js";import{L as g}from"./Legend-xr5rxJV6.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CzQIEG40.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BEkueF2I.js";import"./throttle-YKevu-yW.js";import"./index-QwesTmYv.js";import"./index-ChXYLaG0.js";import"./isWellBehavedNumber-6NC8t9If.js";import"./d3-scale-GIUO3qKs.js";import"./index-BUQ8JU-K.js";import"./index-BgrYIa47.js";import"./renderedTicksSlice-BO57uAxz.js";import"./index-BlprVplm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-zLDK9f_1.js";import"./chartDataContext-C02yhzPU.js";import"./CategoricalChart-C5Ob1It2.js";import"./Layer-CGg1zqLT.js";import"./Curve-vjyprLTK.js";import"./types-D-F_NfC0.js";import"./step-CkhChmyV.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-0a3kF70I.js";import"./Label-CTisYkFS.js";import"./Text-B7j_haGg.js";import"./DOMUtils-uFQLQ8Py.js";import"./useId-Di9tEwNI.js";import"./useBackwardsCompatibleTheme-C8tb1jUV.js";import"./ZIndexLayer-SmUjHGv1.js";import"./useAnimationId-BDtWHeb_.js";import"./ActivePoints-DAXej_aD.js";import"./Dot-CRQkuIVU.js";import"./RegisterGraphicalItemId-BA3j10pa.js";import"./ErrorBarContext-CYWSJ13C.js";import"./GraphicalItemClipPath-3vc4gJgj.js";import"./SetGraphicalItem-jWHGIqY5.js";import"./getRadiusAndStrokeWidthFromDot-BevzmnHp.js";import"./ActiveShapeUtils-Dqrzinyd.js";import"./useGraphicalItemIdentity-DlBKGkIj.js";import"./CartesianAxis-CosHp30d.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-4jhHW0ot.js";import"./symbol-5KCJJZ1d.js";import"./useElementOffset-C6GTdqz1.js";import"./uniqBy-yTl4EH60.js";import"./iteratee-CgYWoIDz.js";const ut={title:"API/hooks/useOffset",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(a,{width:e.width,height:e.height},t.createElement(n,{data:s,margin:e.margin},t.createElement(f,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(g,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}},Ct=["UseOffset"];var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{r as UseOffset,Ct as __namedExportsOrder,ut as default};
