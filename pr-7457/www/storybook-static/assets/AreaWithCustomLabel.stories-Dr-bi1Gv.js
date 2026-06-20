import{R as e}from"./iframe-CbmcvRkz.js";import{R as c}from"./zIndexSlice-DoKZE_fT.js";import{C as d}from"./ComposedChart-B9rJ9PPz.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-QgDKigrb.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BWk67B8y.js";import"./index-EVqr9zMt.js";import"./index-B4yUayYa.js";import"./get-prZAxsgN.js";import"./resolveDefaultProps-DSWLYRE0.js";import"./isWellBehavedNumber-D0V00cvg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C6OXESHp.js";import"./index-NV2k7-9r.js";import"./index-B7UJplH4.js";import"./renderedTicksSlice-BID11n2_.js";import"./axisSelectors-BFflKNFi.js";import"./d3-scale-Cq5I-Lzi.js";import"./CartesianChart-C9d6soJe.js";import"./chartDataContext-AyeK8CTN.js";import"./CategoricalChart-CbA9DUlt.js";import"./Layer-aQjZulmS.js";import"./AnimatedItems-C8brG2ut.js";import"./Label-CMFdvkIW.js";import"./Text-CQlqdYfu.js";import"./DOMUtils-D_6a5VHc.js";import"./ZIndexLayer-ByjAgEa2.js";import"./useAnimationId-Bg4LY1-F.js";import"./ActivePoints-Bm3DH6tK.js";import"./Dot-CYkHGb9U.js";import"./types-aj_9xhUM.js";import"./RegisterGraphicalItemId-BlnWChFK.js";import"./GraphicalItemClipPath-BhK5nGk3.js";import"./SetGraphicalItem-CVVFn7G6.js";import"./getRadiusAndStrokeWidthFromDot-D4nwke3n.js";import"./ActiveShapeUtils-yEY4r1E4.js";import"./Curve-Ba6UoBvx.js";import"./step-qj-9nXS-.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-C9f7OtbQ.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
