import{R as r}from"./iframe-DP_a1dmY.js";import{R as c}from"./zIndexSlice-rjLYhejy.js";import{C as d}from"./ComposedChart-CSr8xtVa.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CrTMQZRz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BUA_ea65.js";import"./throttle-BChPb-_m.js";import"./index-Cpxqs5RX.js";import"./index-CZaxsyUC.js";import"./RechartsWrapper-B4nQvyyr.js";import"./axisSelectors-DEw1mS80.js";import"./polarAxisSelectors-C8froBOH.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CQwtQXkW.js";import"./index-B7p3ZvHO.js";import"./index-BKlw8SLM.js";import"./renderedTicksSlice-vKkijtCh.js";import"./index-CDLzOnEQ.js";import"./fillDefinitions-ClRF1Jdn.js";import"./CartesianChart-BUksmgNb.js";import"./ZIndexPortal-DjdaUnXL.js";import"./CategoricalChart-Cb54doQf.js";import"./Layer-CZaWfsGO.js";import"./LabelList-DL3Ydiqu.js";import"./Label-ja-Sj5Q7.js";import"./Text-Dp_r5yDX.js";import"./DOMUtils-mf3xp45a.js";import"./ZIndexLayer-DlEiCgSn.js";import"./ActivePoints-DnIoFkEo.js";import"./Dot-FQPok2YB.js";import"./types-CDz_n5r5.js";import"./activeStyles-BV6CK3cL.js";import"./useAnimationId-CFEdeYhu.js";import"./dataEntryStyles-4JNZcrwL.js";import"./Symbols-rf6N_jcM.js";import"./symbol-DeF3ladi.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-5vhsybgs.js";import"./getRadiusAndStrokeWidthFromDot-BgEfcfUu.js";import"./ActiveShapeUtils-DC7CnxCS.js";import"./Curve-BWt9Gc4p.js";import"./step-D5N_P6yo.js";import"./useEffectiveDataKey-D45Rikd2.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
