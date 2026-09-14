import{R as r}from"./iframe-BWDwgK_D.js";import{R as c}from"./zIndexSlice-C1O5MBWY.js";import{C as d}from"./ComposedChart-CGi5sLu_.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DFIdeUzV.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BcZmZghI.js";import"./index-B49xXNHt.js";import"./index-CCaysGPM.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bp_p1EHk.js";import"./isWellBehavedNumber-WNu-UqrG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DvAFqpAd.js";import"./axisSelectors-e9-Lmas5.js";import"./d3-scale-BpMJuDGQ.js";import"./index-kktikCBK.js";import"./index-DFG57tTU.js";import"./renderedTicksSlice-xUJav-aw.js";import"./index-y3EgPNWn.js";import"./CartesianChart-B6ulmZoL.js";import"./chartDataContext-D0xRn858.js";import"./CategoricalChart-D3lIPbNt.js";import"./Layer-DAcTuudf.js";import"./AnimatedItems-BustB_TV.js";import"./Label-BKEGIlSz.js";import"./Text-BizBnj_T.js";import"./DOMUtils-iBBTwtfH.js";import"./useId-D1g06gFI.js";import"./useBackwardsCompatibleTheme-BYeMUCh_.js";import"./ZIndexLayer-DRdRjEOe.js";import"./useAnimationId-_CO00dkp.js";import"./ActivePoints-nPDtSH3W.js";import"./Dot-ClXgqV3o.js";import"./types-loTHP4vv.js";import"./RegisterGraphicalItemId-DRBnYmKx.js";import"./GraphicalItemClipPath-BC50Hrc5.js";import"./SetGraphicalItem-CmL2KxpU.js";import"./getRadiusAndStrokeWidthFromDot-VGRijqjA.js";import"./ActiveShapeUtils-CRD4kYgV.js";import"./Curve-BJ0_3V4P.js";import"./step-BAFgT2Gg.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-D6QbUwzB.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
