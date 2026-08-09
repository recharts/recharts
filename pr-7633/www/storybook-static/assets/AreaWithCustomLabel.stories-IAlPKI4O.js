import{R as r}from"./iframe-D9rYPFI6.js";import{R as c}from"./zIndexSlice-C3wsTrp9.js";import{C as d}from"./ComposedChart-CrPVcAMK.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DbyGNU9J.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-JMn6s7-r.js";import"./index-CBOJEfGe.js";import"./index-D-oLxkfn.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-ULtnpSod.js";import"./isWellBehavedNumber-wns85k-s.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DraVZS0h.js";import"./index-BwM3wMsV.js";import"./index-BxIft0ja.js";import"./axisSelectors-BEMJ5G3d.js";import"./d3-scale-CWZ2NBQb.js";import"./renderedTicksSlice-BQcf9eI6.js";import"./CartesianChart-CbCZKRVf.js";import"./chartDataContext-C9SNw5Kb.js";import"./CategoricalChart-BTp1W0gj.js";import"./Layer-Dvgn5PDs.js";import"./AnimatedItems-JH_MyxHu.js";import"./Label-VP1_-jlA.js";import"./Text-CPEEagO_.js";import"./DOMUtils-DnqcKz1X.js";import"./ZIndexLayer-CJhkiIkj.js";import"./useAnimationId-CBJcnsSW.js";import"./ActivePoints-BOg4hwaZ.js";import"./Dot-DA1K4FFV.js";import"./types-BrxWVo-u.js";import"./RegisterGraphicalItemId-Can_TNgi.js";import"./GraphicalItemClipPath-CiKUQeNX.js";import"./SetGraphicalItem-AXc71c8D.js";import"./getRadiusAndStrokeWidthFromDot-DWbL5obz.js";import"./ActiveShapeUtils-yvf6fJP9.js";import"./Curve-BFrR0D3S.js";import"./step-C1GSzIMp.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-CrN5KJo6.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-IhPtoSXH.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
