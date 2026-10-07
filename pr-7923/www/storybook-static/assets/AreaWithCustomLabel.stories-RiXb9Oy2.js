import{R as r}from"./iframe-BMzdo2OO.js";import{R as c}from"./zIndexSlice-ChqivVgc.js";import{C as d}from"./ComposedChart-DSKFy6An.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-zemBnPJD.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bn5L-Spy.js";import"./index-DcvaXuoD.js";import"./index-CuowPYJL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DMOVc-U0.js";import"./isWellBehavedNumber-BxxKk3_X.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DZyZLCSd.js";import"./axisSelectors-DePv-gjT.js";import"./d3-scale-FRN-50hy.js";import"./index-IxxRTzdH.js";import"./index-BBWSU8H0.js";import"./renderedTicksSlice-D7KSBl5-.js";import"./index-QGNmKXB_.js";import"./CartesianChart-CJTLTCmg.js";import"./chartDataContext-D12dRZ2D.js";import"./CategoricalChart-DgT48bow.js";import"./Layer-DI_tMp3J.js";import"./AnimatedItems-aWQxtrPp.js";import"./Label-DXGFYQ6y.js";import"./Text-BUhrLoyp.js";import"./DOMUtils-CENQr-dm.js";import"./useId-CISxasqF.js";import"./useBackwardsCompatibleTheme-COHZZMqy.js";import"./ZIndexLayer-J0q0oOXM.js";import"./useAnimationId-DMkWUgfv.js";import"./ActivePoints-DbFNvnJX.js";import"./Dot-C8FkbxSc.js";import"./types-XidxuGSX.js";import"./RegisterGraphicalItemId-CdkGqZbg.js";import"./GraphicalItemClipPath-jODxuvX2.js";import"./SetGraphicalItem-fUYBwl3z.js";import"./getRadiusAndStrokeWidthFromDot-CrQ8YxTR.js";import"./ActiveShapeUtils-P-2_LOiD.js";import"./Curve--AxPXvQm.js";import"./step-C6IWo9eW.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-p0tnB9lX.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
