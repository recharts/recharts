import{R as r}from"./iframe-DyrN_51d.js";import{R as c}from"./zIndexSlice-20W2dW_I.js";import{C as d}from"./ComposedChart-D587OAML.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BqIHjdtM.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Deocn2P3.js";import"./index-JQNKXinH.js";import"./index-DXzoq_51.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dqwg9Cw4.js";import"./isWellBehavedNumber-BWb0p1O1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DkN-Eg1-.js";import"./axisSelectors-Bfr9Dapf.js";import"./d3-scale-Dg7Uhedh.js";import"./index-Zhh87yRU.js";import"./index-B7rURxTX.js";import"./renderedTicksSlice-CRqt9_jA.js";import"./index-DdYmtx0a.js";import"./CartesianChart-BsXS56U5.js";import"./chartDataContext-5lrtEEYG.js";import"./CategoricalChart-DkwHwiOc.js";import"./Layer-Bhl1Azk1.js";import"./AnimatedItems-_Ln2HVFG.js";import"./Label-BwFzhvIj.js";import"./Text-CV1ypZeZ.js";import"./DOMUtils-DIhf953N.js";import"./useId-kCzHPj6p.js";import"./useBackwardsCompatibleTheme-Bt58M03l.js";import"./ZIndexLayer-Bp9YTxbL.js";import"./useAnimationId-D9Lt2BUa.js";import"./ActivePoints-C6wxEM4H.js";import"./Dot-CXTwVenc.js";import"./types-D2IYUNPt.js";import"./RegisterGraphicalItemId-CVmkVACh.js";import"./GraphicalItemClipPath-CA7J29cH.js";import"./SetGraphicalItem-lGNUC0L0.js";import"./getRadiusAndStrokeWidthFromDot-u76jjLdq.js";import"./ActiveShapeUtils-DpQnh-5h.js";import"./Curve-JRjNlxP0.js";import"./step-DtwkAaFX.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CBB7gohW.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
