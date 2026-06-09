import{R as e}from"./iframe-Bvg5iw6Z.js";import{R as c}from"./zIndexSlice-Ds_NjbNn.js";import{C as d}from"./ComposedChart-20ZO85Nl.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DUcYo-ON.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DHoEBynv.js";import"./index-Ce12os93.js";import"./index-C7ALVEHS.js";import"./get-DHB3VUn4.js";import"./resolveDefaultProps-DdhPeWBo.js";import"./isWellBehavedNumber-BfXcmwrI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CHMdqOJQ.js";import"./index-D6uOIfEh.js";import"./index-DjoxYWbz.js";import"./renderedTicksSlice-BOSAcKeB.js";import"./axisSelectors-ChUTyiTu.js";import"./d3-scale-C3JFNDzB.js";import"./string-B6fdYHAA.js";import"./CartesianChart-B5xnpDkJ.js";import"./chartDataContext-C4maze1A.js";import"./CategoricalChart-D7IINMSs.js";import"./Layer-irp4ME8h.js";import"./AnimatedItems-BUtl3ij7.js";import"./Label-DkRUWIp2.js";import"./Text-DjnMaOWq.js";import"./DOMUtils-DJUlICsZ.js";import"./ZIndexLayer-BSVnK8Dt.js";import"./useAnimationId-BOUeGlQ3.js";import"./ActivePoints-DfDHJRbx.js";import"./Dot-dsakJdmW.js";import"./types-C-xtjdCV.js";import"./RegisterGraphicalItemId-DtXuMSpf.js";import"./GraphicalItemClipPath-VUPv1woh.js";import"./SetGraphicalItem-DwOFrAeq.js";import"./getRadiusAndStrokeWidthFromDot-DrdS8yiS.js";import"./ActiveShapeUtils-DAESvJMs.js";import"./Curve-C6rubuUm.js";import"./step-CEyafom-.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-abwyxz13.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const at=["CustomizedLabel"];export{t as CustomizedLabel,at as __namedExportsOrder,it as default};
