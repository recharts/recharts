import{R as r}from"./iframe-BxezfZww.js";import{R as c}from"./zIndexSlice-HcjonX2F.js";import{C as d}from"./ComposedChart-lZLISn57.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Il2FndkU.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-kDZpq7hG.js";import"./index-7ARW1nXD.js";import"./index-BXbofj5h.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BIZk73OJ.js";import"./isWellBehavedNumber-CIfm0Fso.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CAWBTKvy.js";import"./index-apQUDkx_.js";import"./index-jirKooN3.js";import"./axisSelectors-Cqbxg7Vx.js";import"./d3-scale-D269iDuq.js";import"./renderedTicksSlice-DT6H86Gd.js";import"./CartesianChart-DdIyro--.js";import"./chartDataContext-BSYSRccK.js";import"./CategoricalChart-BhuBu3pE.js";import"./Layer-B7Lou8N3.js";import"./AnimatedItems-szXuAxdz.js";import"./Label-Cwi7qDe-.js";import"./Text-BDhYhtIl.js";import"./DOMUtils-DML8OagK.js";import"./useBackwardsCompatibleTheme-B3ckLjAp.js";import"./ZIndexLayer-DCAxC-a3.js";import"./useAnimationId-DlB6WviS.js";import"./ActivePoints-B8-Z2u2e.js";import"./Dot-_cBoNrM4.js";import"./types-CqtRzysP.js";import"./RegisterGraphicalItemId-CDMBYjL1.js";import"./GraphicalItemClipPath-dU8N3SPe.js";import"./SetGraphicalItem-CwJs58Td.js";import"./getRadiusAndStrokeWidthFromDot-BQG6lvrP.js";import"./ActiveShapeUtils-CSRwAi3u.js";import"./Curve-D-Z_q46N.js";import"./step-Dc9pogTJ.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C5f0vLre.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{t as CustomizedLabel,mt as __namedExportsOrder,at as default};
