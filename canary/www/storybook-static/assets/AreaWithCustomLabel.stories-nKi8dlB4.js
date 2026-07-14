import{R as e}from"./iframe-CoZYBKIX.js";import{R as c}from"./zIndexSlice-2wRK4kMu.js";import{C as d}from"./ComposedChart-BD8sJbPA.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B2mtcCNP.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DTjNB_wn.js";import"./index-CxqEAs70.js";import"./index-DbtoquVJ.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CXWmRWxD.js";import"./isWellBehavedNumber-DPie-IPs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Chafq55k.js";import"./index-8vVHWDox.js";import"./index-CB7yOKq2.js";import"./renderedTicksSlice-BJztigH5.js";import"./axisSelectors-Bk60vGia.js";import"./d3-scale-Bs_mySfl.js";import"./CartesianChart-DoniaHV0.js";import"./chartDataContext-Cx3CX6pd.js";import"./CategoricalChart-DEIC5a6b.js";import"./Layer-Do7uuXp2.js";import"./AnimatedItems-OdNYlxxq.js";import"./Label-B5Sw4cWo.js";import"./Text-Br2KMW9j.js";import"./DOMUtils-B_OLo7Kh.js";import"./ZIndexLayer-Cub30BGV.js";import"./useAnimationId-C7atvuRl.js";import"./ActivePoints-DpHWAW0C.js";import"./Dot-C3ifhvT9.js";import"./types-DlqgPqNT.js";import"./RegisterGraphicalItemId-BhxVKnq7.js";import"./GraphicalItemClipPath-BqDFfLzv.js";import"./SetGraphicalItem-Cm5RMzg0.js";import"./getRadiusAndStrokeWidthFromDot-J7tXgy4t.js";import"./ActiveShapeUtils-Is-vymDi.js";import"./Curve-Cg7tsFL-.js";import"./step-C4ZbFa_I.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-B5MdhFFy.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
