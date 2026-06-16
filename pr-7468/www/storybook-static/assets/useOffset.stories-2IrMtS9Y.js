import{R as t}from"./iframe-Bd_RatVP.js";import{e as p}from"./CategoricalChart-B7ZdZ9dp.js";import{R as a}from"./zIndexSlice-Bs3cmT56.js";import{C as s}from"./ComposedChart-C0J2irJb.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-ChcwwI6C.js";import{X as d}from"./XAxis-CxMafso2.js";import{Y as h}from"./YAxis-KJSd-Ivi.js";import{L as g}from"./Legend-9MYXYV6G.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DoiYSoxN.js";import"./index-CtCj_c9U.js";import"./index-KgYFzznq.js";import"./index-DuMhoHLg.js";import"./index-AIDQn2zy.js";import"./immer-K2Jr_glw.js";import"./get-D2eywazJ.js";import"./renderedTicksSlice-BaNjR9ZK.js";import"./axisSelectors-iePK0TpX.js";import"./d3-scale-8NOk75ft.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-CDT2X36A.js";import"./isWellBehavedNumber-vEzZ_uBL.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BgWder66.js";import"./chartDataContext-2ZBdxPuo.js";import"./Layer-CSKVUvgL.js";import"./Curve-BKajUmGn.js";import"./types-B_YM2FYy.js";import"./step-D0gWFOvv.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CTN3MMrY.js";import"./Label-_LaAHgCb.js";import"./Text-CID6qmBG.js";import"./DOMUtils-BvIcVirU.js";import"./ZIndexLayer-CW5Q6iO0.js";import"./useAnimationId-WD2dkHdB.js";import"./ActivePoints-BJ3mN3TL.js";import"./Dot-BDk1ts5p.js";import"./RegisterGraphicalItemId-CSpPBahn.js";import"./ErrorBarContext-CXGw6SKK.js";import"./GraphicalItemClipPath-CqhiUh0n.js";import"./SetGraphicalItem-CCPPdaQB.js";import"./getRadiusAndStrokeWidthFromDot-CrS1vnPP.js";import"./ActiveShapeUtils-CKHNZG0U.js";import"./CartesianAxis-DYnLL5ki.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BJZoHXe5.js";import"./symbol-BMyvtyS_.js";import"./useElementOffset-BeZVN4uM.js";import"./uniqBy-ROVpOYmf.js";import"./iteratee-CZJ3xSSv.js";const ht={title:"API/hooks/useOffset",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(a,{width:e.width,height:e.height},t.createElement(s,{data:n,margin:e.margin},t.createElement(f,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(g,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["UseOffset"];export{r as UseOffset,gt as __namedExportsOrder,ht as default};
