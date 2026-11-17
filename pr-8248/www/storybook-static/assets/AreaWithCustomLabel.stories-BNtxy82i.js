import{R as r}from"./iframe-DQIHw-Vj.js";import{R as c}from"./zIndexSlice-DLnqMvRR.js";import{C as d}from"./ComposedChart-Bq6suzwR.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CeC68J1I.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DCDPXacx.js";import"./throttle-CsL6-oT8.js";import"./index-ddMf2qZl.js";import"./index-DvzJj3QK.js";import"./RechartsWrapper-BOwBRf5q.js";import"./axisSelectors-BOWof0F_.js";import"./polarAxisSelectors-CO8YfrX5.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D3QDia2a.js";import"./index-CAKt4SRE.js";import"./index-ej37J0iC.js";import"./renderedTicksSlice-DWNRUwtc.js";import"./index-DdSRFntK.js";import"./fillDefinitions-T89P4CC8.js";import"./CartesianChart-e9rrIYqD.js";import"./chartDataContext-D7ij0_Rh.js";import"./CategoricalChart-DgxyBa1d.js";import"./getRadiusAndStrokeWidthFromDot-BtNwq4SW.js";import"./Layer-Dtg1l4X7.js";import"./dataEntryStyles-CRT7gJOj.js";import"./Label-CDOIzumT.js";import"./Text-UFCPlRdh.js";import"./ZIndexLayer-cKbXtIsu.js";import"./ActivePoints-fySHDRUR.js";import"./Dot-so438WjJ.js";import"./types-DC02XBeR.js";import"./activeStyles-DlG12Hxm.js";import"./useAnimationId-BGqCxB5a.js";import"./Symbols-Derc8Zbt.js";import"./symbol-DHOCB5wG.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-xxOWq2oE.js";import"./ActiveShapeUtils-sNC7IbT4.js";import"./Curve-BGOWFPUa.js";import"./step-WCAmzMpM.js";import"./useEffectiveDataKey-DXNQs5X4.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,mt as __namedExportsOrder,at as default};
