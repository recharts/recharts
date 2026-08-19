import{R as r}from"./iframe-BEU0VEzj.js";import{R as c}from"./zIndexSlice-mhTpFGis.js";import{C as d}from"./ComposedChart-NpRQQbTs.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CKS7jORS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BnTbmX16.js";import"./index-C8ohCoZb.js";import"./index-DaENtIET.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-3wYQv28v.js";import"./isWellBehavedNumber-C2k8qIGv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BgY8CE2w.js";import"./index-C2ItmsS3.js";import"./index-urNlcYtz.js";import"./axisSelectors-X6Iztzs2.js";import"./d3-scale-D-iBl5g_.js";import"./renderedTicksSlice-xgVkluQT.js";import"./CartesianChart-SjLeJZWR.js";import"./chartDataContext-DlMENguP.js";import"./CategoricalChart-venkO3Qs.js";import"./Layer-BxzS3V_h.js";import"./AnimatedItems-C1OsdHSy.js";import"./Label-ChFEzAZk.js";import"./Text-1VnO-5nk.js";import"./DOMUtils-B3nT0fft.js";import"./useId-DlO5xKwO.js";import"./useBackwardsCompatibleTheme-DbNZLS-G.js";import"./ZIndexLayer-nwUJ9Z8I.js";import"./useAnimationId-BpSAAbQy.js";import"./ActivePoints-DmPjn1vV.js";import"./Dot-BaUbFdJY.js";import"./types-BcpteXUs.js";import"./RegisterGraphicalItemId-C3EeC43L.js";import"./GraphicalItemClipPath-DWoEZRp9.js";import"./SetGraphicalItem-BO4L7W4Z.js";import"./getRadiusAndStrokeWidthFromDot-U5qUSWt7.js";import"./ActiveShapeUtils-DJPjSqHL.js";import"./Curve-DRodi9QH.js";import"./step-B0HdwPOl.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-D4g6qdze.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const pt=["CustomizedLabel"];export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
