import{R as e}from"./iframe-DwLZZwhK.js";import{R as c}from"./zIndexSlice-lVUWNgM0.js";import{C as d}from"./ComposedChart-p1KVu18j.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BjWRH8_3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-m49sR4Np.js";import"./index-CyNYrL4w.js";import"./index-D2i4UmdT.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D_yJAfqa.js";import"./isWellBehavedNumber-DdXnDQ5z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B6xOBDhR.js";import"./index-BRPN53-o.js";import"./index-VnXRJ0a1.js";import"./renderedTicksSlice-BnOQ8D5D.js";import"./axisSelectors-Deou-VxK.js";import"./d3-scale-CjSqz0E9.js";import"./CartesianChart--QBa1qTn.js";import"./chartDataContext-BGrP4bw5.js";import"./CategoricalChart-Bx727tBC.js";import"./Layer-BVmot7FB.js";import"./AnimatedItems-DKnm6tp0.js";import"./Label-tECJL-37.js";import"./Text-Bh0YxhQF.js";import"./DOMUtils-BGpns11t.js";import"./ZIndexLayer-BAEsl3nH.js";import"./useAnimationId-C3Y_zOxU.js";import"./ActivePoints-CdWhr2jU.js";import"./Dot-CGLhLTV3.js";import"./types-B7g8Th-s.js";import"./RegisterGraphicalItemId-CzEEk6Dd.js";import"./GraphicalItemClipPath-C29F_2hP.js";import"./SetGraphicalItem-DX7YElzO.js";import"./graphicalItemIdentity-CtF6lVXQ.js";import"./ActiveShapeUtils-BFi0EA_4.js";import"./Curve-Cv92tytC.js";import"./step-DqN0Bx6a.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-pLBMwypQ.js";import"./graphicalItemSelectors-CsGPPAWZ.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
