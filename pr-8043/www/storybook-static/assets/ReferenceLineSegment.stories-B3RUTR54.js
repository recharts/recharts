import{R as e}from"./iframe-x9YCwuVc.js";import{R as i}from"./zIndexSlice-BV1eDa8t.js";import{C as n}from"./ComposedChart-vHYW6JZh.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Dj6fKyXJ.js";import{X as s}from"./XAxis-DOrrA_AO.js";import{Y as c}from"./YAxis-CcW9nNm_.js";import{L as d}from"./Line-B5t4aXxo.js";import{R as g}from"./ReferenceLine-Cg4znj_6.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CFpl0b0L.js";import"./index-4vAc-1PY.js";import"./index-_DnjTFHH.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-IMSWVxjI.js";import"./isWellBehavedNumber-BfcoqVbY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DuSi3yuo.js";import"./axisSelectors-DUrnAUTK.js";import"./d3-scale-DeFHX2Lm.js";import"./index-CnDSa4vm.js";import"./index-BC1Gmj01.js";import"./renderedTicksSlice-BQZVpqNr.js";import"./index-BC2a9-E_.js";import"./CartesianChart-pmy50aWE.js";import"./chartDataContext-CCIkzP_F.js";import"./CategoricalChart-DqHAXNep.js";import"./CartesianAxis-C1FOk_u6.js";import"./Layer-byU46PKm.js";import"./Text-COBhbjuo.js";import"./pageBackground-TE-MQad5.js";import"./useId-CMngnmGp.js";import"./useBackwardsCompatibleTheme-BQTuAdi2.js";import"./Label-BWVi17tM.js";import"./ZIndexLayer-DrSAG7iO.js";import"./dataEntryStyles-Drm_aJ2X.js";import"./types-fCYwQ83-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-8b-Qxogq.js";import"./step-DWJVpFVS.js";import"./path-DyVhHtw_.js";import"./activeStyles-B5NsC4ZM.js";import"./useAnimationId-DxnlQorl.js";import"./ActivePoints-BL8qk4Kh.js";import"./Dot-B98z2wU8.js";import"./RegisterGraphicalItemId-DNM5emxE.js";import"./ErrorBarContext-a5it_Nak.js";import"./GraphicalItemClipPath-DXDK6Y35.js";import"./SetGraphicalItem-D1wyT9-l.js";import"./getRadiusAndStrokeWidthFromDot-DRWTNSpx.js";import"./ActiveShapeUtils-CYeGEQWR.js";import"./useEffectiveDataKey-D48S_iiZ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,he as __namedExportsOrder,fe as default};
