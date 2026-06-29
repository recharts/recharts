import{R as e}from"./iframe-Xn2MpEZO.js";import{R as c}from"./zIndexSlice-Ci7uKtqk.js";import{C as d}from"./ComposedChart-B-mMwZkB.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-7gJ7wVDU.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Df9E9w07.js";import"./index-B9rMLYis.js";import"./index-BJjZAGkk.js";import"./get-a5GlobPr.js";import"./resolveDefaultProps-ComQIB2r.js";import"./isWellBehavedNumber-ikHr81yL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BxUke-Wy.js";import"./index-DCEv34s7.js";import"./index-BFHb-0iX.js";import"./renderedTicksSlice-DHtwTgZF.js";import"./axisSelectors-N1yg_9bS.js";import"./d3-scale-BhQeBFLV.js";import"./CartesianChart-qVEZ4DBv.js";import"./chartDataContext-CdM4lEIq.js";import"./CategoricalChart-BYw4mGkG.js";import"./Layer-DSBtIc_n.js";import"./AnimatedItems-AezG2GF8.js";import"./Label-Drk02YPI.js";import"./Text-DhiURvp0.js";import"./DOMUtils-C9OtDZJT.js";import"./ZIndexLayer-rkhqqfVD.js";import"./useAnimationId-Dddlhxb8.js";import"./ActivePoints-Du0eECBh.js";import"./Dot-BgDetyZ9.js";import"./types-BkUFHbYz.js";import"./RegisterGraphicalItemId-CGNP0Yo_.js";import"./GraphicalItemClipPath-Cc8lCQ6R.js";import"./SetGraphicalItem-97hX8Iat.js";import"./getRadiusAndStrokeWidthFromDot-CWaP50r6.js";import"./ActiveShapeUtils-DjKDdlLp.js";import"./Curve-DX9_0-tw.js";import"./step-DkdplZJs.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-IpQzZ0vj.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const it=["CustomizedLabel"];export{t as CustomizedLabel,it as __namedExportsOrder,ot as default};
