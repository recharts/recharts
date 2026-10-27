import{R as r}from"./iframe-FAdFbT6J.js";import{R as c}from"./zIndexSlice-COO8R9lj.js";import{C as d}from"./ComposedChart-ByetWKbs.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BkUdzICx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Dtf0HKLA.js";import"./throttle-DmbGe_oo.js";import"./index-Bi2HKvdy.js";import"./index-CAO6Ulba.js";import"./RechartsWrapper-B8CA35TH.js";import"./axisSelectors-DjwIFZga.js";import"./polarAxisSelectors-CZ0SBXPQ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CfdNPJMp.js";import"./index-BCrgpV8I.js";import"./index-D2Bzwkru.js";import"./renderedTicksSlice-C41wjkwS.js";import"./index-Cdi1oYuJ.js";import"./CartesianChart-BPlrTUFV.js";import"./ZIndexPortal-B1h9CFOj.js";import"./CategoricalChart-D9WR_D7Z.js";import"./Layer-DDi6JECL.js";import"./LabelList-BYdzk1TZ.js";import"./Label-MEQSQEMP.js";import"./Text-Cndhy6VG.js";import"./pageBackground-CQW2qZWO.js";import"./ZIndexLayer-5IISokl0.js";import"./dataEntryStyles-CEjpbRUj.js";import"./ActivePoints-NvUWdQPY.js";import"./Dot-CvQhsRdk.js";import"./types-BX8ZQcvG.js";import"./activeStyles-D7U9MU9g.js";import"./useAnimationId-CiJHzCVR.js";import"./Symbols-DFQxEPmi.js";import"./symbol-BlNnJRbB.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-DlZGROHe.js";import"./SetGraphicalItem-CbZ_Osbr.js";import"./getRadiusAndStrokeWidthFromDot-BJ55Ryxa.js";import"./ActiveShapeUtils-CppGq9PY.js";import"./Curve-DQIDgvYs.js";import"./step-DTM-27zI.js";import"./useEffectiveDataKey-DTWxfT2D.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
