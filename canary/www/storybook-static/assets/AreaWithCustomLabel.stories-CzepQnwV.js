import{R as e}from"./iframe-BivO5BoJ.js";import{R as c}from"./zIndexSlice-Bjz_KcZJ.js";import{C as d}from"./ComposedChart-Bey5_4WZ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BtofxmNH.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BplF9VH1.js";import"./index-03GkEewG.js";import"./index-B0o2St2z.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B41TlN8V.js";import"./isWellBehavedNumber-BP5BBjcl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DFOf-gVb.js";import"./index-DdI5aF1Z.js";import"./index-eGB7E-8r.js";import"./axisSelectors-DhnOFegq.js";import"./d3-scale-oUOyK3d-.js";import"./renderedTicksSlice-CI5d0VIf.js";import"./CartesianChart-By-DJA1x.js";import"./chartDataContext-bLv_3jvW.js";import"./CategoricalChart-piOEuQ3H.js";import"./Layer-CQraiAmP.js";import"./AnimatedItems-Daz5NR7w.js";import"./Label-C7YhLpFH.js";import"./Text-B8O_8yPP.js";import"./DOMUtils-CA0Xf545.js";import"./ZIndexLayer-TaYOeXN7.js";import"./useAnimationId-C4RNTUIo.js";import"./ActivePoints-_kZDvhaZ.js";import"./Dot-BA4sFX2k.js";import"./types-Ci90ji2E.js";import"./RegisterGraphicalItemId-CmSKkMyt.js";import"./GraphicalItemClipPath-xHJ3Vi6r.js";import"./SetGraphicalItem-D5hw8CGc.js";import"./graphicalItemIdentity-PtVRHa7z.js";import"./ActiveShapeUtils-BWMWU3gW.js";import"./Curve-DmB3zN28.js";import"./step-D7AgkVHN.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-CezfAeyp.js";import"./graphicalItemSelectors-Dk26_IY-.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
