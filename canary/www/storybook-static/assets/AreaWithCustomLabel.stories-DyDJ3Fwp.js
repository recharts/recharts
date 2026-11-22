import{R as r}from"./iframe-CLIhRm7R.js";import{R as c}from"./zIndexSlice-cURKLlYU.js";import{C as d}from"./ComposedChart-DplTXjfB.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DgKhX4Wy.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D-eAHaNk.js";import"./throttle-B7ykPIAJ.js";import"./index-DR1HnwII.js";import"./index-BUNiVZYu.js";import"./RechartsWrapper-DwQg3ppC.js";import"./axisSelectors-CDU9IwIv.js";import"./polarAxisSelectors-D5qsDUBS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D44QmEnt.js";import"./index-BRcZtsT0.js";import"./index-B_FXaL58.js";import"./renderedTicksSlice-BBFFs0IH.js";import"./index-CQ513AnM.js";import"./fillDefinitions-Y1HmkZBg.js";import"./CartesianChart-Cfp3axNC.js";import"./chartDataContext-CnJguSW_.js";import"./CategoricalChart-RViwWBSb.js";import"./getRadiusAndStrokeWidthFromDot-4sZTg9_Z.js";import"./Layer-BbygySlV.js";import"./dataEntryStyles-BrgkWZuf.js";import"./Label-DearAakw.js";import"./Text-JwQNyxYp.js";import"./ZIndexLayer-CVT-3Kt6.js";import"./ActivePoints-C9r-WFdJ.js";import"./Dot-C3ytqCXy.js";import"./types-B-D67JLt.js";import"./activeStyles-DkO8dKQi.js";import"./useAnimationId-CFCPoirY.js";import"./Symbols-CL9eWqJw.js";import"./symbol-DfjzGj-p.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-Byj-zkni.js";import"./ActiveShapeUtils-B5F3agWS.js";import"./Curve-BOeChXDU.js";import"./step-b64WSsG3.js";import"./useEffectiveDataKey-B6ZXrXvv.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
