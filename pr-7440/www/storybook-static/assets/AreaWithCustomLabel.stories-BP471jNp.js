import{R as e}from"./iframe-AkXMTiN1.js";import{R as c}from"./zIndexSlice-D2IbpIG9.js";import{C as d}from"./ComposedChart-CbcedsfM.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-zkHVXtwS.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CGdqiLEl.js";import"./index-DO9nmyvc.js";import"./index-B7ESZsek.js";import"./get-hfJl8nDX.js";import"./resolveDefaultProps-Cb6CyAiD.js";import"./isWellBehavedNumber-BjHph-L0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BFfZ1OV4.js";import"./index-Dvk2Reae.js";import"./index-cd3KTdjN.js";import"./renderedTicksSlice-CIoFYl-j.js";import"./axisSelectors-DNRIweDw.js";import"./d3-scale-uKys2Prv.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DuevVog_.js";import"./chartDataContext-krnp3gzW.js";import"./CategoricalChart-Bbv_9Kq1.js";import"./Layer-BbfEqMjd.js";import"./AnimatedItems-DMUwO7tR.js";import"./Label-yi6vcZhu.js";import"./Text-B8TabNrv.js";import"./DOMUtils-tdyvfO_t.js";import"./ZIndexLayer-2Zb-HEnP.js";import"./useAnimationId-DnVrzYZK.js";import"./ActivePoints-CsE5DRnu.js";import"./Dot-CXwe2hvn.js";import"./types-eY1LNeEN.js";import"./RegisterGraphicalItemId-GDKh1K9_.js";import"./GraphicalItemClipPath-D9xbA8oG.js";import"./SetGraphicalItem-D-MN-a76.js";import"./getRadiusAndStrokeWidthFromDot-CXAjyQPs.js";import"./ActiveShapeUtils-cQX6UbLq.js";import"./Curve-DjnTfF-s.js";import"./step-Du2Dxzc7.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-B1qTcvDF.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
