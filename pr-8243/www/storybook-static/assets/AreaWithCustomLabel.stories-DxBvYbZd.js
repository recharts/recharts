import{R as r}from"./iframe-DHoXusD1.js";import{R as c}from"./zIndexSlice-FsvXxdXV.js";import{C as d}from"./ComposedChart-CDDK98iJ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-3apoXoPv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-htUurm4w.js";import"./throttle-bPL_CYHd.js";import"./index-CCctG3OF.js";import"./index-lVEyBlWW.js";import"./RechartsWrapper-B415nsX3.js";import"./axisSelectors-pR92cyKp.js";import"./polarAxisSelectors-BGegD2Hb.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BrVNT65M.js";import"./index-Dy3TNkua.js";import"./index-DNIoQSRO.js";import"./renderedTicksSlice-BXV4OD99.js";import"./index-DVO0bVkJ.js";import"./fillDefinitions-BK2qfHam.js";import"./CartesianChart-0nvsDd6J.js";import"./chartDataContext-Cv05qjwa.js";import"./CategoricalChart-C50aZvEG.js";import"./Layer-DvTlLbe7.js";import"./dataEntryStyles-DjrRjJ6y.js";import"./Label-DH0ZiH3v.js";import"./Text-DGMTORnL.js";import"./ZIndexLayer-ZLuJl0PO.js";import"./ActivePoints-Okwmojju.js";import"./Dot-DjtRy0VI.js";import"./types-BuL5d7PW.js";import"./activeStyles-CtCkxF9Y.js";import"./useAnimationId-BUoKLqt_.js";import"./Symbols-Buf-PQNY.js";import"./symbol-CzqK2yND.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-x9UkOjiz.js";import"./getRadiusAndStrokeWidthFromDot-JLWstI7V.js";import"./ActiveShapeUtils-CJDCK8tA.js";import"./Curve-CobFJY2m.js";import"./step-7L3GLQ3k.js";import"./useEffectiveDataKey-Ckh-4MN_.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
