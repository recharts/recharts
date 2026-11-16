import{R as r}from"./iframe-BoIdwylW.js";import{R as c}from"./zIndexSlice-PMZXbuz8.js";import{C as d}from"./ComposedChart-CtZqtgqM.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DLoJjFGW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CtzWd-qA.js";import"./throttle-DJovDE6i.js";import"./index-DNtzd00k.js";import"./index-D93QOL6W.js";import"./RechartsWrapper-KwWkpOaO.js";import"./axisSelectors-CnNiq6Rh.js";import"./polarAxisSelectors-BUrHoreM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Asjkzq2w.js";import"./index-Cb6O7Zhr.js";import"./index-DeVO3TjK.js";import"./renderedTicksSlice-BcY34TaC.js";import"./index-DLxdIIWm.js";import"./fillDefinitions-CK96g-PQ.js";import"./CartesianChart-RjOUEsRj.js";import"./chartDataContext-XVkCEP1D.js";import"./CategoricalChart-8Ce8TnvZ.js";import"./Layer-DnLGFXqh.js";import"./dataEntryStyles-CG-hLtdl.js";import"./Label-B2lBcb4D.js";import"./Text-D_S4fT48.js";import"./ZIndexLayer-BYJgF0xG.js";import"./ActivePoints-Dv9hEuIy.js";import"./Dot-CLBNcaQB.js";import"./types-D0djA_gg.js";import"./activeStyles-kk8IGRJt.js";import"./useAnimationId-BZtpw3X8.js";import"./Symbols-Cpgbh6kd.js";import"./symbol-ChnJAo1F.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-B5MmjNJa.js";import"./getRadiusAndStrokeWidthFromDot-DvyJSF9f.js";import"./ActiveShapeUtils-BK27ZWgW.js";import"./Curve-BucXWP1n.js";import"./step-cn3vFhcC.js";import"./useEffectiveDataKey-QRSJB29_.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
