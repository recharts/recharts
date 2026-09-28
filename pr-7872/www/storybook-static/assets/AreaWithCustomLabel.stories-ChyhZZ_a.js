import{R as r}from"./iframe-C_uZmGJ0.js";import{R as c}from"./zIndexSlice-DLwc6L6K.js";import{C as d}from"./ComposedChart-Bj6W4vsF.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DladGqOV.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-ssm5i5NQ.js";import"./index-BPNGFjKX.js";import"./index-C_Xrr1JY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-qk1iWAfg.js";import"./isWellBehavedNumber-bflz4OY5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CXap3oDx.js";import"./axisSelectors-Bynx2pvt.js";import"./d3-scale-qCFWvZmx.js";import"./index-i5xBuxs4.js";import"./index-D4BdbP-V.js";import"./renderedTicksSlice-DdBaQZqr.js";import"./index-DmhH5Xz3.js";import"./CartesianChart-RcuLD4DP.js";import"./chartDataContext-DAujoSs5.js";import"./CategoricalChart-BSnQBJZ3.js";import"./Layer-FqzZic0p.js";import"./AnimatedItems-Bdmry8Nm.js";import"./Label-fJXJ83zZ.js";import"./Text-gzTYclIX.js";import"./DOMUtils-D581TnDq.js";import"./useId-CAahTF3z.js";import"./useBackwardsCompatibleTheme-Dcj-aUF4.js";import"./ZIndexLayer-WWept0wS.js";import"./useAnimationId-DVpik13A.js";import"./ActivePoints-C2NAg-mW.js";import"./Dot-BxKfnRiv.js";import"./types-mc5h_EFw.js";import"./RegisterGraphicalItemId-BuMk-4uG.js";import"./GraphicalItemClipPath-CZ-MeeIA.js";import"./SetGraphicalItem-CizKrbKK.js";import"./getRadiusAndStrokeWidthFromDot-Cu-dtnOu.js";import"./ActiveShapeUtils-DegrRRKp.js";import"./Curve-DrCVQ1z_.js";import"./step-d36cIwmk.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BVAmN--h.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
