import{R as r}from"./iframe-0BZy6ovm.js";import{R as c}from"./zIndexSlice-BIk5RwDD.js";import{C as d}from"./ComposedChart-BZt5HSsG.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DnEhAQvk.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DiDu5xyi.js";import"./index-TucVX7sw.js";import"./index-BJl6RyTQ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DgX86JLB.js";import"./isWellBehavedNumber-D86CElyX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DN-j5lzD.js";import"./index-C9HBA5-V.js";import"./index-BRBcTSHI.js";import"./axisSelectors-D-aV3CxY.js";import"./d3-scale-D3apC1JT.js";import"./renderedTicksSlice-BqoCmvXn.js";import"./CartesianChart-n4Lt6mFH.js";import"./chartDataContext-BAuSJd-k.js";import"./CategoricalChart-hrSTyr7f.js";import"./Layer-6uGVVV7y.js";import"./AnimatedItems-B0lHzkOL.js";import"./Label-C0FrVcAE.js";import"./Text-Bh7Xcfw9.js";import"./DOMUtils-D2BAAnEX.js";import"./useBackwardsCompatibleTheme-CXpr_aCI.js";import"./ZIndexLayer-AgSG9OQ6.js";import"./useAnimationId-D-aszzjL.js";import"./ActivePoints-Cv_MWE-P.js";import"./Dot-B2MNIfB_.js";import"./types-CUmyHBBS.js";import"./RegisterGraphicalItemId-BhyVkMoB.js";import"./GraphicalItemClipPath-BgcM8yOE.js";import"./SetGraphicalItem-CM7A1obe.js";import"./getRadiusAndStrokeWidthFromDot-BStcUf-0.js";import"./ActiveShapeUtils-BtFIRlOA.js";import"./Curve-80kkET8R.js";import"./step-LsS_armE.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-3OFZXdgi.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{t as CustomizedLabel,mt as __namedExportsOrder,at as default};
