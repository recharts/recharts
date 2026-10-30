import{R as r}from"./iframe-BmKqhsPF.js";import{R as c}from"./zIndexSlice-CBQM2Gyg.js";import{C as d}from"./ComposedChart-DkiFuqQR.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Q8o6UFhR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BDqp1YKl.js";import"./throttle-DFLwZbH7.js";import"./index-3u8XkdeO.js";import"./index-BGZm-V5p.js";import"./RechartsWrapper-CdEiQwLq.js";import"./axisSelectors-De-QIQw0.js";import"./polarAxisSelectors-3J3j4TTi.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-66RSqjvR.js";import"./index-B3BeYDVW.js";import"./index-BlCA3-m5.js";import"./renderedTicksSlice-1_lrB1iK.js";import"./index-CBz7nTI3.js";import"./fillDefinitions-miIei5Ak.js";import"./CartesianChart-DwN6Hmpg.js";import"./ZIndexPortal-DFoHfC3q.js";import"./CategoricalChart-DDmHhC4k.js";import"./Layer-DFK8Q48P.js";import"./LabelList-Cw7YYHKY.js";import"./Label-DJuyIpr6.js";import"./Text-CrMJTYNw.js";import"./DOMUtils-DtycWmz8.js";import"./ZIndexLayer-E2zC26PS.js";import"./ActivePoints-CVBU67Gc.js";import"./Dot-BY7ekD9g.js";import"./types-8TEdLcfT.js";import"./activeStyles-B9WkYOlU.js";import"./useAnimationId-Cw8-NrKa.js";import"./dataEntryStyles-BYeCTEXf.js";import"./Symbols-C1ZJFDve.js";import"./symbol-Cwivg1At.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-DaR9Vkxk.js";import"./getRadiusAndStrokeWidthFromDot-DwT_-E51.js";import"./ActiveShapeUtils-CmFmkU6o.js";import"./Curve--g8UutGF.js";import"./step-DxyJMaY2.js";import"./useEffectiveDataKey-etJHmmHX.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
