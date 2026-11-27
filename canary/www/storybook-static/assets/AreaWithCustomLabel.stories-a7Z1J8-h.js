import{R as r}from"./iframe-C6tckEdC.js";import{R as c}from"./zIndexSlice-BRbRDCdD.js";import{C as d}from"./ComposedChart-5VVWJpva.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DB_5EvA_.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CSiVUs4x.js";import"./get-CjriyByo.js";import"./throttle-CU3FfpOW.js";import"./index-BzKVLmVc.js";import"./index-BR0KP3KE.js";import"./RechartsWrapper-0oVlPs_v.js";import"./axisSelectors-BaS600qd.js";import"./polarAxisSelectors-BP0xU-X7.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-cNizIXDy.js";import"./index-DKLWww0Z.js";import"./index-DvK4dXF2.js";import"./renderedTicksSlice-gvMRVXAc.js";import"./index-Cqbhonwj.js";import"./fillDefinitions-D_qwa_ZF.js";import"./CartesianChart-Cl401OCs.js";import"./chartDataContext-BIkRUcpA.js";import"./CategoricalChart-BQKW_s0C.js";import"./getRadiusAndStrokeWidthFromDot-vxIF-amO.js";import"./Layer-CZ4BpJHW.js";import"./dataEntryStyles-DEosnEmo.js";import"./Label-DaLGTh2V.js";import"./Text-Wncpajm_.js";import"./ZIndexLayer-Duaj4w7a.js";import"./ActivePoints-BDUd4tjN.js";import"./Dot-Byjprri8.js";import"./types-DkdMor4N.js";import"./activeStyles-Cw05xMjp.js";import"./useAnimationId-Cexbjbj0.js";import"./Symbols-BA4WcXcY.js";import"./symbol-CGpiEals.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-L9dOpy2C.js";import"./ActiveShapeUtils-Cs4PiFBm.js";import"./Curve-hlfhz3O_.js";import"./step-BdRt_Kf3.js";import"./useEffectiveDataKey-C_xG5lbB.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
