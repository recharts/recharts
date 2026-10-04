import{R as r}from"./iframe-DeP4Wy7i.js";import{R as c}from"./zIndexSlice-nnPIR1gF.js";import{C as d}from"./ComposedChart-CJez4X5P.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B7ZaTLQ2.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-meF8BPI2.js";import"./index-iD4LtFlt.js";import"./index-CP6Rv1Sw.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cuw6EoTI.js";import"./isWellBehavedNumber-oQsvKY8H.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CSrF3qvK.js";import"./axisSelectors-CZy9dm6d.js";import"./d3-scale-BMFuZ2xk.js";import"./index-bTLe7Jwh.js";import"./index-LaINuLzR.js";import"./renderedTicksSlice-UEqy9PPR.js";import"./index-BI5vUZLp.js";import"./CartesianChart-n8mpzi4z.js";import"./chartDataContext-O08JVLGx.js";import"./CategoricalChart-DHRd-r0A.js";import"./Layer-CBmTHU88.js";import"./AnimatedItems-XIng_I1E.js";import"./Label-BDn5In4u.js";import"./Text-tlJnHXas.js";import"./DOMUtils-fGj0XAk5.js";import"./useId-Bwy1FQE5.js";import"./useBackwardsCompatibleTheme-CIuhIiJU.js";import"./ZIndexLayer-46z2Emao.js";import"./useAnimationId-BrY9w4yL.js";import"./ActivePoints-CKZ5Aqki.js";import"./Dot-BLQMwT0r.js";import"./types-CanfrVuk.js";import"./RegisterGraphicalItemId-C2Pze7xm.js";import"./GraphicalItemClipPath-F-rOP2Wx.js";import"./SetGraphicalItem-Bb8kLJya.js";import"./getRadiusAndStrokeWidthFromDot-mAqkcHAK.js";import"./ActiveShapeUtils-DbA45Jz_.js";import"./Curve-BgvZ8zEy.js";import"./step-D7VIgsjb.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DO54SzyN.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
