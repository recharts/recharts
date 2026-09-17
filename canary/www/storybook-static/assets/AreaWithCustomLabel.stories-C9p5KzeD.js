import{R as r}from"./iframe-DbHNynaQ.js";import{R as c}from"./zIndexSlice-seYPsfER.js";import{C as d}from"./ComposedChart-OopH4fQy.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-ge0dHe0o.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BLg26bcw.js";import"./index-CRIpJa5f.js";import"./index-BGBt4hW8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BxCdwk1t.js";import"./isWellBehavedNumber-B8EuhNZV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B8ljz37p.js";import"./axisSelectors-DuRw_22M.js";import"./d3-scale-ChODOj9m.js";import"./index-C6ClRwPj.js";import"./index-C0g1ZRMH.js";import"./renderedTicksSlice-BqyFHlMV.js";import"./index-uIcexEpZ.js";import"./CartesianChart-B7Bt3OSw.js";import"./chartDataContext-EUMNNHrQ.js";import"./CategoricalChart-D9jf8lgu.js";import"./Layer-McKs3jBR.js";import"./AnimatedItems-DQqNxpCY.js";import"./Label-CahCPYhY.js";import"./Text-CnT4LfU-.js";import"./DOMUtils-W_YN1JiB.js";import"./useId-JKbSdXmU.js";import"./useBackwardsCompatibleTheme-BrfbM-bw.js";import"./ZIndexLayer-DLZyPL-y.js";import"./useAnimationId-aseG17e8.js";import"./ActivePoints-C-6wZqrA.js";import"./Dot-CnXT2FP3.js";import"./types-Dtr2g2lR.js";import"./RegisterGraphicalItemId-CTY00hAi.js";import"./GraphicalItemClipPath-GbTn8y2C.js";import"./SetGraphicalItem-eyDqIX5L.js";import"./getRadiusAndStrokeWidthFromDot-K22oepzJ.js";import"./ActiveShapeUtils-FJemOztc.js";import"./Curve-DSpvGQJR.js";import"./step-DpeM9sZC.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-Ox7A1s1f.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
