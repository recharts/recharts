import{R as r}from"./iframe-Z3SayaVd.js";import{R as c}from"./zIndexSlice-Dh2HMKB6.js";import{C as d}from"./ComposedChart-i6W5PytN.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CQcykFq2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DNiWcqg9.js";import"./throttle-Dxt6SGJ3.js";import"./index--orTKKd0.js";import"./index-wtNxUfyP.js";import"./RechartsWrapper-rHkMTZTL.js";import"./axisSelectors--kuv0hpR.js";import"./polarAxisSelectors-DRpHoHNx.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-COX3gckA.js";import"./index-Byv9yEMF.js";import"./index-IODgrwVj.js";import"./renderedTicksSlice-B1QrN0Ft.js";import"./index-eVlhMApr.js";import"./fillDefinitions-YvUR7ZoJ.js";import"./CartesianChart-C0rkW4er.js";import"./chartDataContext-MZv5qjpR.js";import"./CategoricalChart-B9nlic4H.js";import"./getRadiusAndStrokeWidthFromDot-CRZbI57R.js";import"./Layer-R9bgEcMl.js";import"./dataEntryStyles-CdjRVARh.js";import"./Label-gVjZnKx0.js";import"./Text-DdcAXxQ7.js";import"./ZIndexLayer-y38pl_-1.js";import"./ActivePoints-mT6mIIhN.js";import"./Dot-CnIUGRfT.js";import"./types-C7fTXY90.js";import"./activeStyles-DoLNHT3-.js";import"./useAnimationId-CJJ1SFId.js";import"./Symbols-D5F94Msa.js";import"./symbol-Cplhih6x.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-na8KM_FV.js";import"./ActiveShapeUtils-8h_kjkj8.js";import"./Curve-5n5qGKoW.js";import"./step-BOsnLXQi.js";import"./useEffectiveDataKey-COaHCNkR.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
