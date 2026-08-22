import{R as r}from"./iframe-CbdG93Rp.js";import{R as c}from"./zIndexSlice-BBA2vYL9.js";import{C as d}from"./ComposedChart-BlErnFXo.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Bdoq9NiP.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-k7AnGod1.js";import"./index-yQCZGhVI.js";import"./index-BiGXtIk6.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BNACGTBd.js";import"./isWellBehavedNumber-DBJb9JTb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bx7VgKe3.js";import"./index-D8WEHlsH.js";import"./index-ybXde8ox.js";import"./axisSelectors-BHZKzxax.js";import"./d3-scale-CLJM1nE7.js";import"./renderedTicksSlice-H0Ext-F-.js";import"./CartesianChart-KT4JQkAx.js";import"./chartDataContext-fDUY1EA6.js";import"./CategoricalChart-BZ6Syier.js";import"./Layer-BZ6Fc3lQ.js";import"./AnimatedItems-LAFrqwsd.js";import"./Label-DXZsEXpn.js";import"./Text-DuH_mhct.js";import"./DOMUtils-CqvRu_MB.js";import"./useId-Ca5c2KHs.js";import"./useBackwardsCompatibleTheme-CqJEL2NO.js";import"./ZIndexLayer-FtCXwXjd.js";import"./useAnimationId-Ctl7EN5N.js";import"./ActivePoints-BK9QhdV8.js";import"./Dot-CTYtj4mc.js";import"./types-CpUmxW-2.js";import"./RegisterGraphicalItemId-VTOA4vtw.js";import"./GraphicalItemClipPath-B5C5ys39.js";import"./SetGraphicalItem-OAT4QAS1.js";import"./getRadiusAndStrokeWidthFromDot-CZbk3-9Z.js";import"./ActiveShapeUtils-DQoUFAUU.js";import"./Curve-Dl3donnJ.js";import"./step-DJlKpvLR.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Beqitca1.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
