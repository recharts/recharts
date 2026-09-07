import{R as t}from"./iframe-CEqSETwy.js";import{j as a}from"./RechartsWrapper-D7k5lu9l.js";import{R as p}from"./zIndexSlice-CJNe71Mi.js";import{C as n}from"./ComposedChart-C-LRGuZG.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DGuStQPX.js";import{X as l}from"./XAxis-DiGyugB3.js";import{Y as h}from"./YAxis-DZdJE3LC.js";import{L as c}from"./Legend-DF0V0MPG.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CbEbpjss.js";import"./get-C2VjdU0L.js";import"./axisSelectors-p_-hiMzG.js";import"./throttle-DnGGP0fW.js";import"./index-BNz6dVRa.js";import"./index-BvAe43aE.js";import"./isWellBehavedNumber-DDsPS4Vv.js";import"./d3-scale-kHCfNVPM.js";import"./index-CKh217UZ.js";import"./index-CcAm8cKQ.js";import"./renderedTicksSlice-Bs5DanIZ.js";import"./index-BHSo_RxK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DDkHhS9o.js";import"./chartDataContext-CtXgelXS.js";import"./CategoricalChart-Cuq3_PiL.js";import"./Layer-C0D9GKi7.js";import"./Curve-ByfwLNod.js";import"./types-Ddhi9krD.js";import"./step-DaAwVIu6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C2HkT0wg.js";import"./Label-lnqMQjsv.js";import"./Text-DksTiW_2.js";import"./DOMUtils-19Cjbm1E.js";import"./useId-DLOcTRFV.js";import"./useBackwardsCompatibleTheme-C18-49Mr.js";import"./ZIndexLayer-0nUyu6n_.js";import"./useAnimationId-gLsHzM3f.js";import"./ActivePoints-2KTX-e1O.js";import"./Dot-BHS04fT3.js";import"./RegisterGraphicalItemId-BZYWE3sH.js";import"./ErrorBarContext-4Qyv8RFs.js";import"./GraphicalItemClipPath-B4449nNq.js";import"./SetGraphicalItem-BqGzK2Ro.js";import"./getRadiusAndStrokeWidthFromDot-DMkHG-MO.js";import"./ActiveShapeUtils-BN_cCfJG.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-Baoe0UzV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-aQKjgxVt.js";import"./symbol-BgFayqAI.js";import"./useElementOffset-BL5iDFTN.js";import"./uniqBy-CPCN80XU.js";import"./iteratee-DPwVpnC0.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
