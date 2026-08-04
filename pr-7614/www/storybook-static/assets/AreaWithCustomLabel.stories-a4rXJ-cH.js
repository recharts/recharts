import{R as e}from"./iframe-C5hmF0To.js";import{R as c}from"./zIndexSlice-BixfUK5V.js";import{C as d}from"./ComposedChart-8HNQI9r3.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-H2vLa3ko.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-teWCo3kp.js";import"./index-DPASLuit.js";import"./index-BrQaS3a5.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CdkFEDnC.js";import"./isWellBehavedNumber-DY0MczIS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C2jsJsE5.js";import"./index-CJFfs8Zx.js";import"./index-B_hHrNFX.js";import"./renderedTicksSlice-Cp2rYryV.js";import"./axisSelectors-3ticTacJ.js";import"./d3-scale-B4bxyqZp.js";import"./CartesianChart-luY4Ugiw.js";import"./chartDataContext-BtJuej3V.js";import"./CategoricalChart-B7M_pOAg.js";import"./Layer-CDmGCMyH.js";import"./AnimatedItems-BcG4wu47.js";import"./Label-Du636Igd.js";import"./Text-C5taNjiE.js";import"./DOMUtils-BTnNVt5T.js";import"./ZIndexLayer-CCu8NHHi.js";import"./useAnimationId-WdLJ0TXq.js";import"./ActivePoints-DkEblMVf.js";import"./Dot-B5cqvfYd.js";import"./types-CeFfhpIK.js";import"./RegisterGraphicalItemId-Db5IkoaQ.js";import"./GraphicalItemClipPath-DzTwh4wM.js";import"./SetGraphicalItem-CGZeJBQo.js";import"./graphicalItemIdentity-BfXCt-oz.js";import"./ActiveShapeUtils-Bfj9ZkEg.js";import"./Curve-cVSz_V8P.js";import"./step-AxYq5Lzl.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-oPpqoGy7.js";import"./graphicalItemSelectors-Dvd0v0Xk.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const at=["CustomizedLabel"];export{t as CustomizedLabel,at as __namedExportsOrder,it as default};
