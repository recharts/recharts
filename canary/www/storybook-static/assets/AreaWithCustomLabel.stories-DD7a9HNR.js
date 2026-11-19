import{R as r}from"./iframe-DzGmKl0f.js";import{R as c}from"./zIndexSlice-C_hCocyn.js";import{C as d}from"./ComposedChart-BMgh39RK.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BvJkuX0d.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DQfzh6Jd.js";import"./throttle-CTpO1d0G.js";import"./index-CLtTm24E.js";import"./index-BW8cRvO1.js";import"./RechartsWrapper-DyktFVWv.js";import"./axisSelectors-CXmW2Cx2.js";import"./polarAxisSelectors-BjROy2nM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BqUwTZLN.js";import"./index-Dfq7BfPO.js";import"./index-CbanqfDi.js";import"./renderedTicksSlice-Cj7UXIdm.js";import"./index-By0aYyvM.js";import"./fillDefinitions-D8TUKuUW.js";import"./CartesianChart-BHEtFY6v.js";import"./chartDataContext-CBkj6nC7.js";import"./CategoricalChart-8iPxehsc.js";import"./getRadiusAndStrokeWidthFromDot-x4kMFRNy.js";import"./Layer-FlA1vg8A.js";import"./dataEntryStyles-Dj48sKZ8.js";import"./Label-D7SDC5pA.js";import"./Text-4Yqe8NiQ.js";import"./ZIndexLayer-DCgoY3ny.js";import"./ActivePoints-Dk-ASqYF.js";import"./Dot-C7ry2cU8.js";import"./types-DhQXJZ5L.js";import"./activeStyles-wSVq9YzU.js";import"./useAnimationId-CGyZ0qQs.js";import"./Symbols-f4V1uJfI.js";import"./symbol-C_p4EZd-.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BOgZ-5S7.js";import"./ActiveShapeUtils-DvbjLMLM.js";import"./Curve-CY0LgJEY.js";import"./step-DtdKv3o3.js";import"./useEffectiveDataKey-DtLTSAvq.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
