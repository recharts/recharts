import{R as r}from"./iframe-BrId7CKe.js";import{R as c}from"./zIndexSlice-DF5zMGO6.js";import{C as d}from"./ComposedChart-Cnp7765T.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DeuHSa9P.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DIgz9kBc.js";import"./throttle-CvD-CMS9.js";import"./index-D7ICnWyX.js";import"./index-EO2EMNzs.js";import"./RechartsWrapper-C0PTLzSu.js";import"./axisSelectors-BWicBn7w.js";import"./polarAxisSelectors-BScTjZiA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Did4wLnp.js";import"./index-B4UkUUGe.js";import"./index-CKY_1Z5f.js";import"./renderedTicksSlice-DAS2rh9P.js";import"./index-Drj8yiU0.js";import"./fillDefinitions-dpOaLydo.js";import"./CartesianChart-BQoBJqDq.js";import"./chartDataContext-BtKuFOy0.js";import"./CategoricalChart-D7PumRDT.js";import"./getRadiusAndStrokeWidthFromDot-2ewH2R2L.js";import"./Layer-CxlvVVO_.js";import"./dataEntryStyles-Dl3_KD-K.js";import"./Label-BOSTGjYW.js";import"./Text-CtzCspEf.js";import"./ZIndexLayer-DtobrSuN.js";import"./ActivePoints-BfbfOk4s.js";import"./Dot-Bz04y-El.js";import"./types-BIH_CFXa.js";import"./activeStyles-haHqTj48.js";import"./useAnimationId-DnW4K7Yj.js";import"./Symbols-DW8eGAaV.js";import"./symbol-Bas1pNoF.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-Bx9N4hIP.js";import"./ActiveShapeUtils-B-iMU9qH.js";import"./Curve-CODof7zW.js";import"./step-D0GmmZR_.js";import"./useEffectiveDataKey-BlMggeza.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
