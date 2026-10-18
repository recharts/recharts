import{R as t}from"./iframe-BVidFuBg.js";import{e as p}from"./RechartsWrapper-7A4GvPw3.js";import{R as a}from"./zIndexSlice-BVu_VJKn.js";import{C as n}from"./ComposedChart-CeoyKEhO.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BwWsnMpN.js";import{X as l}from"./XAxis-D6ghc140.js";import{Y as h}from"./YAxis-CAK7lAdx.js";import{L as c}from"./Legend-BCcfS3Kt.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BnMAchLG.js";import"./get-cF5BDHN6.js";import"./axisSelectors-7sszg3SW.js";import"./throttle-BSCmJhty.js";import"./index-qH4-zIlS.js";import"./index-DBJQpaC5.js";import"./isWellBehavedNumber-Bgrep7-b.js";import"./d3-scale-n9zBPjXr.js";import"./index-BiOB95Co.js";import"./index-k6xKkYdd.js";import"./renderedTicksSlice-X2qP0nh3.js";import"./index-CYZL9Ecm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BVao4mhK.js";import"./chartDataContext-KRrlptML.js";import"./CategoricalChart-B9oBZckD.js";import"./Layer-BamX7bDZ.js";import"./Curve-DADC3Qn9.js";import"./types-d1h9D5Nt.js";import"./step-DQ_5Whcs.js";import"./path-DyVhHtw_.js";import"./activeStyles-DLYfLCId.js";import"./Label-Dkr2cH3E.js";import"./Text-B-jeJZdK.js";import"./pageBackground-DWUaDsTL.js";import"./useId-B-SrM2oo.js";import"./useBackwardsCompatibleTheme-CdbVLEqd.js";import"./ZIndexLayer-Diklw-mz.js";import"./useAnimationId-DUX3gKYN.js";import"./dataEntryStyles-doFW0jSZ.js";import"./ActivePoints-CkjWSogS.js";import"./Dot-08nNQsA3.js";import"./ErrorBarContext-DCSMt2xY.js";import"./GraphicalItemClipPath-BHt5dg8Z.js";import"./SetGraphicalItem-COgSsKbs.js";import"./getRadiusAndStrokeWidthFromDot-DtsjXIq5.js";import"./ActiveShapeUtils-OFRSQ0pw.js";import"./useEffectiveDataKey-BG2pu5J2.js";import"./CartesianAxis-B6O3GOLV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Ce81nxL9.js";import"./symbol-B3XC6ocG.js";import"./useElementOffset-DGDKGLsn.js";import"./uniqBy-DnZxk8gC.js";import"./iteratee-BSh9UVJS.js";import"./isArguments-yB-y1yaH.js";const ft={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(a,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},yt=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
