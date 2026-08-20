import{R as t}from"./iframe-T2vx_vOa.js";import{u as a}from"./CategoricalChart-DZbNl6UN.js";import{R as p}from"./zIndexSlice-B-qj09MF.js";import{C as s}from"./ComposedChart-C1KMn7rC.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Cr6MSzMJ.js";import{X as l}from"./XAxis-BN7ADdXK.js";import{Y as h}from"./YAxis-BF1HUrTi.js";import{L as c}from"./Legend-QD-0owBx.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B7E4P3q_.js";import"./index-BGfsg-y8.js";import"./index-BmiiKlQ3.js";import"./index-CKmP93dg.js";import"./index-C2g4etmg.js";import"./throttle-B2YWMMfN.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Bwt_MWfh.js";import"./resolveDefaultProps-DDbhMM_B.js";import"./isWellBehavedNumber-CkczEaKC.js";import"./d3-scale-9Bwz5xwo.js";import"./renderedTicksSlice-BZDyTRdO.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bnxa5O6x.js";import"./chartDataContext-BRu0PEKp.js";import"./Layer-BJSWtfPf.js";import"./Curve-B3Mj_t6F.js";import"./types-Bh_AGi1X.js";import"./step-DPp_r08A.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C9f8W2_c.js";import"./Label-AUPLS1jy.js";import"./Text-C_hpuPsU.js";import"./DOMUtils-DCQI-dAG.js";import"./useId-BgzgS8Mn.js";import"./useBackwardsCompatibleTheme-CPVLRTOy.js";import"./ZIndexLayer-BwLVxIBn.js";import"./useAnimationId-w6GkkQqu.js";import"./ActivePoints-99dWxsTW.js";import"./Dot-BlclRNOF.js";import"./RegisterGraphicalItemId-DenhQzIU.js";import"./ErrorBarContext-ClNe4tHQ.js";import"./GraphicalItemClipPath-CBz4hBDX.js";import"./SetGraphicalItem-BV24eLVS.js";import"./getRadiusAndStrokeWidthFromDot-DJHAn0yp.js";import"./ActiveShapeUtils-jwMR0d8y.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-Bztsuorj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CV9T5Yu_.js";import"./symbol-BI3up_Yv.js";import"./useElementOffset-DcABdze2.js";import"./uniqBy-BVVWdgld.js";import"./iteratee-B1adNlu2.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const At=["UsePlotArea"];export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
