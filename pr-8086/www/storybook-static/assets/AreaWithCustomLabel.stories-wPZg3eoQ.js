import{R as r}from"./iframe-BK3Sisey.js";import{R as c}from"./zIndexSlice-BetgAyCc.js";import{C as d}from"./ComposedChart-D1QZxiQE.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DrXb5S3I.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C_F1VMOc.js";import"./throttle-biJe8rDV.js";import"./index-DRUOZNOo.js";import"./index-de72ObtI.js";import"./RechartsWrapper-DORC7p_L.js";import"./axisSelectors-BspbFoiI.js";import"./polarAxisSelectors-DUPrNhEV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Bzw5IHoB.js";import"./index-c0twB4Fw.js";import"./index-B0fPjlHo.js";import"./renderedTicksSlice-By71GZi8.js";import"./index-LqSrX9BA.js";import"./CartesianChart-BDnUkJu9.js";import"./chartDataContext-DOIuQ-MV.js";import"./CategoricalChart-CF961821.js";import"./Layer-D1HH46xf.js";import"./activeStyles-Tawg351V.js";import"./Label-UVuQgYwr.js";import"./Text-CRgN4x4u.js";import"./pageBackground-CgvVcPsa.js";import"./useId-zAfHK1iY.js";import"./ZIndexLayer-BE0p1xel.js";import"./dataEntryStyles-B4V6KkDF.js";import"./useAnimationId-CS-FJwCc.js";import"./ActivePoints-D-7HMJrF.js";import"./Dot-SPXRnAns.js";import"./types-DkavCTl8.js";import"./Symbols-PPNvVUUW.js";import"./symbol-BQrXtAQf.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-BBZLH_Nk.js";import"./SetGraphicalItem-Cx8SQgq9.js";import"./getRadiusAndStrokeWidthFromDot-Bj490LjI.js";import"./ActiveShapeUtils-CgpbZaR3.js";import"./Curve-DG5NWTvD.js";import"./step-DmrcgL_N.js";import"./useEffectiveDataKey-Cwm-IkPM.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,st as __namedExportsOrder,pt as default};
