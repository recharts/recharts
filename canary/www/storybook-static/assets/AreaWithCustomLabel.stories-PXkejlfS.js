import{R as r}from"./iframe-CKDPSKer.js";import{R as c}from"./zIndexSlice-BPEXBnkz.js";import{C as d}from"./ComposedChart-BRk5rLm3.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DX2dECYO.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BxISGQ-D.js";import"./index-b8m7PcKP.js";import"./index-BCb8LTpu.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BHhxWlvh.js";import"./isWellBehavedNumber-B7M1fd8R.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DXJuSLgb.js";import"./axisSelectors-BCmNu8mb.js";import"./d3-scale-b7USrreT.js";import"./index-Yn8E1RQt.js";import"./index-YNG8abLs.js";import"./renderedTicksSlice-D_KOvBCE.js";import"./index-CdVjfuR9.js";import"./CartesianChart-8JudaFqK.js";import"./chartDataContext-BPq1GFdD.js";import"./CategoricalChart-C1cfNrgi.js";import"./Layer-B33l4zSF.js";import"./AnimatedItems-DQZ1vYlx.js";import"./Label-dc-yhDIk.js";import"./Text-C2JOwhg7.js";import"./DOMUtils-YKVjc3tQ.js";import"./useId-Ci63Vlud.js";import"./useBackwardsCompatibleTheme-CrbUBK8p.js";import"./ZIndexLayer-U3HIU8rZ.js";import"./useAnimationId-BJ5AGKlq.js";import"./ActivePoints-BaQ565al.js";import"./Dot-BHyvQM3b.js";import"./types-CtnAz4fT.js";import"./RegisterGraphicalItemId-DPP3dtMc.js";import"./GraphicalItemClipPath-CwqjQ5yI.js";import"./SetGraphicalItem-oK4eoPFb.js";import"./getRadiusAndStrokeWidthFromDot-jgRF4YSW.js";import"./ActiveShapeUtils-Wg41V-yZ.js";import"./Curve-Blt-RSy4.js";import"./step-Bgemofkp.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-SlGiSA9D.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
