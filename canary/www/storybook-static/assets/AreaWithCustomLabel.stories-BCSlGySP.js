import{R as r}from"./iframe-D_uMBlIp.js";import{R as c}from"./zIndexSlice-Cqv84PqK.js";import{C as d}from"./ComposedChart-DhQzd1k_.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-0Tb02F7h.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B5MtCWD4.js";import"./throttle-z9Tdm54L.js";import"./index-r7_kFCKH.js";import"./index-DecxnzXH.js";import"./RechartsWrapper-gFpkW2lO.js";import"./axisSelectors-BH5tVjmc.js";import"./polarAxisSelectors-PGXXztW2.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-De88z7ff.js";import"./index-BKkZnPf8.js";import"./index-BDJW8MG1.js";import"./renderedTicksSlice-CTrf5tAn.js";import"./index-DolxpBYu.js";import"./fillDefinitions-Cx6GiVLd.js";import"./CartesianChart-CnGjeW1j.js";import"./ZIndexPortal-CZb6tOfo.js";import"./CategoricalChart-BP_Fs5vF.js";import"./Layer-B6KF3bsJ.js";import"./LabelList-lhjdoetJ.js";import"./Label-xcLv9MPJ.js";import"./Text-CgSvhKKx.js";import"./DOMUtils-BNA43YVy.js";import"./ZIndexLayer-B-ClRqkn.js";import"./ActivePoints-CutcUh5t.js";import"./Dot-CWRVOvZp.js";import"./types-DFJuzk9K.js";import"./activeStyles-Dd3au7Dm.js";import"./useAnimationId-BUGTxmjG.js";import"./dataEntryStyles-BSEnNQ9n.js";import"./Symbols-C6zxOEV9.js";import"./symbol-kWjCqPSu.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-jkYvUFdr.js";import"./getRadiusAndStrokeWidthFromDot-DtDP844S.js";import"./ActiveShapeUtils-CosApWaB.js";import"./Curve-D7Q9HT-0.js";import"./step-CndKQIzs.js";import"./useEffectiveDataKey-CgejumXO.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
