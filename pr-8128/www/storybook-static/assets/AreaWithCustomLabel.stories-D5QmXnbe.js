import{R as r}from"./iframe-BwLZw-_M.js";import{R as c}from"./zIndexSlice-ChI0kTlF.js";import{C as d}from"./ComposedChart-CIavBfkK.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DGKYJqmh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BegzgTjS.js";import"./throttle-DvL4FsEQ.js";import"./index-C9AtYHBZ.js";import"./index-qoVf35OJ.js";import"./RechartsWrapper-C2SzhBqG.js";import"./axisSelectors-kUTEWjAI.js";import"./polarAxisSelectors-Bhh2eZQc.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DGzUJoIU.js";import"./index-BfwFhJuC.js";import"./index-o3dNuH8W.js";import"./renderedTicksSlice-BYZX0jcd.js";import"./index-B0i9H4tX.js";import"./CartesianChart-DhrEBdyK.js";import"./ZIndexPortal-CPgp6_q6.js";import"./CategoricalChart-DWgt9BZJ.js";import"./Layer-DuW_QRN1.js";import"./LabelList-6PzejVVq.js";import"./Label-U4vkciLv.js";import"./Text-CBZN8k_S.js";import"./DOMUtils-i6fMpPJ-.js";import"./pageBackground-BK1aOTMM.js";import"./ZIndexLayer-Bvlb4wTY.js";import"./ActivePoints-vE2lL3n4.js";import"./Dot-P4orGxiz.js";import"./fillDefinitions-B6DD0NTj.js";import"./themeFill-sw4Y96Vm.js";import"./types-tzWyPHwG.js";import"./activeStyles-lGmv_AYe.js";import"./useAnimationId-yjvP5B3D.js";import"./dataEntryStyles-B1tUzdyv.js";import"./Symbols-D0k11amF.js";import"./symbol-CxJ4nrsQ.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CZMv7iCK.js";import"./getRadiusAndStrokeWidthFromDot-Di0VE_vh.js";import"./ActiveShapeUtils-BCNnGPme.js";import"./Curve-CzfoK2T3.js";import"./step-QqIlLDuW.js";import"./useEffectiveDataKey-C-YUm0jF.js";const nt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},ct=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,ct as __namedExportsOrder,nt as default};
