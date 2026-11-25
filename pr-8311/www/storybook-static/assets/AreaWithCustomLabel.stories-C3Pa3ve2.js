import{R as r}from"./iframe-DC5T2GCj.js";import{R as c}from"./zIndexSlice-DOsx9V2z.js";import{C as d}from"./ComposedChart-Dc1csNHW.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B-ToNYR-.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-gSxbvbxj.js";import"./get-CjriyByo.js";import"./throttle-CU56JRf7.js";import"./index-CxhZ_jtS.js";import"./index-CuovNQzi.js";import"./RechartsWrapper-DYjSRCa_.js";import"./axisSelectors-B_BJB7t0.js";import"./polarAxisSelectors-ftiVMEmb.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Ccs_pA9m.js";import"./index-BzBudmwv.js";import"./index-Dg66RVOT.js";import"./renderedTicksSlice-B-kM46TD.js";import"./index-BFdMDMd2.js";import"./fillDefinitions-Bx7rUJI2.js";import"./CartesianChart-7SPsAfcZ.js";import"./chartDataContext-BhVo_C4q.js";import"./CategoricalChart-BjWBv8hx.js";import"./getRadiusAndStrokeWidthFromDot-DZMpjyXl.js";import"./Layer-CPK-7NIh.js";import"./dataEntryStyles-D7lSN93x.js";import"./Label-CWyu9wCB.js";import"./Text-agvS8xSD.js";import"./ZIndexLayer-CauVCDM2.js";import"./ActivePoints-BGltZVX5.js";import"./Dot-BnGpEvHu.js";import"./types-Bpysv2Pn.js";import"./activeStyles-CBtGMRGE.js";import"./useAnimationId-Do3keAzT.js";import"./Symbols-B7vEIcCD.js";import"./symbol-CpvxzB9V.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-CgeoKwAC.js";import"./ActiveShapeUtils-09R3ENuC.js";import"./Curve-xzcOD2X_.js";import"./step-dKzEEUk_.js";import"./useEffectiveDataKey-CuDgyJop.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
