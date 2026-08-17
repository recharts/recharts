import{R as r}from"./iframe-5rlHu5E0.js";import{R as c}from"./zIndexSlice-Dvv9j-PL.js";import{C as d}from"./ComposedChart-02LDQCPf.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BJ_385Du.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BEcUjoVL.js";import"./index-De9KIq3f.js";import"./index-CPjGkxRF.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DMzoBuFc.js";import"./isWellBehavedNumber-CtQc_19S.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_1S-WX9.js";import"./index-CRexnrp9.js";import"./index-CgDVIgvd.js";import"./axisSelectors-XpGDVkFI.js";import"./d3-scale-DQPeDNzN.js";import"./renderedTicksSlice-BU2rLD4L.js";import"./CartesianChart-CTBAwDjg.js";import"./chartDataContext-_d8W5FBB.js";import"./CategoricalChart-fg3LMOIt.js";import"./Layer-B7qTvwXJ.js";import"./AnimatedItems-CcRowb6W.js";import"./Label-dTTzfWAl.js";import"./Text-BWBZmFaQ.js";import"./DOMUtils-Cgsp7qZK.js";import"./useBackwardsCompatibleTheme-CU4QNWlg.js";import"./ZIndexLayer-CC4VGBXC.js";import"./useAnimationId-9v2us4V5.js";import"./ActivePoints-uOYRpmEx.js";import"./Dot-jf28pyfo.js";import"./types-_FdMQlV7.js";import"./RegisterGraphicalItemId-DiVn-hPt.js";import"./GraphicalItemClipPath-BY5WrhEA.js";import"./SetGraphicalItem-B4wCJH3k.js";import"./getRadiusAndStrokeWidthFromDot-DgCt5gXI.js";import"./ActiveShapeUtils-DcbSHq-a.js";import"./Curve-D7O-jO1k.js";import"./step-BcoQtodi.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-7tXAQg_z.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
