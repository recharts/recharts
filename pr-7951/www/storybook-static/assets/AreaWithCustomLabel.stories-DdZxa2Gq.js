import{R as r}from"./iframe-yZAwGisL.js";import{R as c}from"./zIndexSlice-vFKh36uD.js";import{C as d}from"./ComposedChart-CsZfHT2l.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DHoHd1wt.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-IYJcPlE6.js";import"./index-Bt1GAe6_.js";import"./index-BTDWI4JQ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CpOUXIWy.js";import"./isWellBehavedNumber-BKIZfdbp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BFLcsvAk.js";import"./axisSelectors-CjnrZFGM.js";import"./d3-scale-BEY7rAMO.js";import"./index-Ds4u8dOy.js";import"./index-DoEg_2wF.js";import"./renderedTicksSlice-C_b5HfBN.js";import"./index-CX6Jn8F9.js";import"./CartesianChart-CRAui4vE.js";import"./chartDataContext-x9qaucVY.js";import"./CategoricalChart-BgiEDQst.js";import"./Layer-CD9hCFBU.js";import"./activeStyles-CKbiEpkz.js";import"./Label-DlvpoYCy.js";import"./Text-DCZHKK2-.js";import"./pageBackground-CPn-UXC2.js";import"./useId-fCPF8DLN.js";import"./useBackwardsCompatibleTheme-BEC80JP4.js";import"./ZIndexLayer-jYmr7Pld.js";import"./useAnimationId-D2NnZ8n8.js";import"./dataEntryStyles-heCtjgf8.js";import"./ActivePoints-X-te6dVp.js";import"./Dot-B6Z_ObGU.js";import"./types-BDgd-zTs.js";import"./GraphicalItemClipPath-CTekJVv_.js";import"./SetGraphicalItem-BAzuu_AW.js";import"./getRadiusAndStrokeWidthFromDot-C8mMcy-b.js";import"./ActiveShapeUtils-Bka3d7Ur.js";import"./Curve-DFleLHdr.js";import"./step-6P7iPqmC.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-C_H0JivC.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
