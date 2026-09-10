import{R as r}from"./iframe-C3cMgs7N.js";import{R as c}from"./zIndexSlice-D-L1krEw.js";import{C as d}from"./ComposedChart-B0L49GOK.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-aX2eui2X.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CwKbnzuB.js";import"./index-mPjB9LZ5.js";import"./index-DWDQXKDL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-VIGlyQ4Q.js";import"./isWellBehavedNumber-loxwPj_L.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BBL8LSCF.js";import"./axisSelectors-CyFo4akS.js";import"./d3-scale-D9HAsSWg.js";import"./index-iS8UOd73.js";import"./index-CbpSVjN5.js";import"./renderedTicksSlice-BLxMgK4j.js";import"./index-CK2o4ASw.js";import"./CartesianChart-BYHp5epD.js";import"./chartDataContext-CUGiPJA1.js";import"./CategoricalChart-BrdbHA9J.js";import"./Layer-B4ssOgoe.js";import"./AnimatedItems-CeXZD4iR.js";import"./Label-p42oyH6O.js";import"./Text-BJKUimah.js";import"./DOMUtils-DEPBoe7u.js";import"./useId-B00C84E0.js";import"./useBackwardsCompatibleTheme-yxpwTzAk.js";import"./ZIndexLayer-Beq1j20z.js";import"./useAnimationId-Bsfqf9JH.js";import"./ActivePoints-CeVGeC-b.js";import"./Dot-DHWsLk6I.js";import"./types-BRZWQnVt.js";import"./RegisterGraphicalItemId-Ce557wgI.js";import"./GraphicalItemClipPath-6iwmqxiy.js";import"./SetGraphicalItem-NnzstWhO.js";import"./getRadiusAndStrokeWidthFromDot-Bp5N-w6q.js";import"./ActiveShapeUtils-CBqTe_nx.js";import"./Curve-Cd2PH3uW.js";import"./step-BchzuBRK.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BrYniqkC.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
