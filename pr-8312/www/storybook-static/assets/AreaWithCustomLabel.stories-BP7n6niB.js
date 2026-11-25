import{R as r}from"./iframe-CVu8zrUS.js";import{R as c}from"./zIndexSlice-Bq6bmQlp.js";import{C as d}from"./ComposedChart-DxlxWjOw.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DqxR27Zu.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bb5e-Ri9.js";import"./get-CjriyByo.js";import"./throttle-DhpuiNc1.js";import"./index-CnHWc7sj.js";import"./index-DtrO1U5O.js";import"./RechartsWrapper-BMgc3fuA.js";import"./axisSelectors-Sot67Aim.js";import"./polarAxisSelectors-MtWLdCCF.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BfJtYZLb.js";import"./index-9zr5wxfL.js";import"./index-BuvxFglF.js";import"./renderedTicksSlice-C88oJ44U.js";import"./index-CTNfzL7A.js";import"./fillDefinitions-nObHHCVo.js";import"./CartesianChart-CcPXlhV4.js";import"./chartDataContext-Dg0Jj1rs.js";import"./CategoricalChart-DIJd4lOu.js";import"./getRadiusAndStrokeWidthFromDot-C0Ej1DHm.js";import"./Layer-Cu87ioWV.js";import"./dataEntryStyles-BbIoPGWl.js";import"./Label-Cx8AJG-1.js";import"./Text-R7SqSI0E.js";import"./ZIndexLayer-B1JZDtFw.js";import"./ActivePoints-y_nl0SSe.js";import"./Dot-CJSjjEfy.js";import"./types-DISj1D7D.js";import"./activeStyles-BYV0uDWS.js";import"./useAnimationId-HRjjYmjj.js";import"./Symbols-CPBzhLNS.js";import"./symbol-BnOQ6fEU.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-BzQ3GKka.js";import"./ActiveShapeUtils-BVHA2GWO.js";import"./Curve-DnKmeSPX.js";import"./step-B759BuMX.js";import"./useEffectiveDataKey-BkqeFEex.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
