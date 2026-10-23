import{R as r}from"./iframe-x9YCwuVc.js";import{R as c}from"./zIndexSlice-BV1eDa8t.js";import{C as d}from"./ComposedChart-vHYW6JZh.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D_5oQPJV.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CFpl0b0L.js";import"./index-4vAc-1PY.js";import"./index-_DnjTFHH.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-IMSWVxjI.js";import"./isWellBehavedNumber-BfcoqVbY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DuSi3yuo.js";import"./axisSelectors-DUrnAUTK.js";import"./d3-scale-DeFHX2Lm.js";import"./index-CnDSa4vm.js";import"./index-BC1Gmj01.js";import"./renderedTicksSlice-BQZVpqNr.js";import"./index-BC2a9-E_.js";import"./CartesianChart-pmy50aWE.js";import"./chartDataContext-CCIkzP_F.js";import"./CategoricalChart-DqHAXNep.js";import"./Layer-byU46PKm.js";import"./activeStyles-B5NsC4ZM.js";import"./Label-BWVi17tM.js";import"./Text-COBhbjuo.js";import"./pageBackground-TE-MQad5.js";import"./useId-CMngnmGp.js";import"./useBackwardsCompatibleTheme-BQTuAdi2.js";import"./ZIndexLayer-DrSAG7iO.js";import"./dataEntryStyles-Drm_aJ2X.js";import"./useAnimationId-DxnlQorl.js";import"./ActivePoints-BL8qk4Kh.js";import"./Dot-B98z2wU8.js";import"./types-fCYwQ83-.js";import"./RegisterGraphicalItemId-DNM5emxE.js";import"./GraphicalItemClipPath-DXDK6Y35.js";import"./SetGraphicalItem-D1wyT9-l.js";import"./getRadiusAndStrokeWidthFromDot-DRWTNSpx.js";import"./ActiveShapeUtils-CYeGEQWR.js";import"./Curve-8b-Qxogq.js";import"./step-DWJVpFVS.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-D48S_iiZ.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,st as __namedExportsOrder,pt as default};
