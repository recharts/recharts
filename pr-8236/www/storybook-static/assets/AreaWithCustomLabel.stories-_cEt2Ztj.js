import{R as r}from"./iframe-BhLunS0i.js";import{R as c}from"./zIndexSlice-DSPJCLFE.js";import{C as d}from"./ComposedChart-prDwTclO.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DCghXefF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DXAJRd9k.js";import"./throttle-CRN4ZNKA.js";import"./index-H7oJ2m7W.js";import"./index-CcZqU02h.js";import"./RechartsWrapper-wQ1gT1I0.js";import"./axisSelectors-D1ydZeah.js";import"./polarAxisSelectors-BbkwWyBS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DitufHHw.js";import"./index-D0rCwL5o.js";import"./index-DIg_N1nK.js";import"./renderedTicksSlice-R-_VMDVC.js";import"./index-CFjbQa5l.js";import"./fillDefinitions-CiiNJPEd.js";import"./CartesianChart-Bh_JRPa2.js";import"./chartDataContext-BNqwthL0.js";import"./CategoricalChart-D-9XLz-N.js";import"./Layer-BM8-5uQX.js";import"./dataEntryStyles-V8RFTVJZ.js";import"./Label-BKkx1Yqi.js";import"./Text-DaAfyhaD.js";import"./ZIndexLayer-DT0AmS3A.js";import"./ActivePoints-B_P37ke-.js";import"./Dot-5madfp2A.js";import"./types-CT83QobA.js";import"./activeStyles-CJzsRDKh.js";import"./useAnimationId-Xa81ZCl9.js";import"./Symbols-DZ9QCbQ8.js";import"./symbol-C4ewZ54u.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-DMPKHwhz.js";import"./getRadiusAndStrokeWidthFromDot-DJtKm8XN.js";import"./ActiveShapeUtils-DTLaa-AG.js";import"./Curve-LlXUYE-L.js";import"./step-C270rjWW.js";import"./useEffectiveDataKey-0h-gJoNJ.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
