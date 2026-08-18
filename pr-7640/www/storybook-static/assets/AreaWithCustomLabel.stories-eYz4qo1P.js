import{R as r}from"./iframe-tjnA4ZJo.js";import{R as c}from"./zIndexSlice-C0N8aUUS.js";import{C as d}from"./ComposedChart-C0wVbOjh.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BqT3qMVo.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BG5Cbw48.js";import"./index-BTfui88R.js";import"./index-BBMNndk4.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bpk1yIxn.js";import"./isWellBehavedNumber-C0zpNc8z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CWJ-Ct21.js";import"./index-BXBph9CX.js";import"./index-zHF4-EZF.js";import"./axisSelectors-kO8GHbei.js";import"./d3-scale-DO15g-NA.js";import"./renderedTicksSlice-cCRvnCrJ.js";import"./CartesianChart-Fpuc0WuY.js";import"./chartDataContext-Czgamfqs.js";import"./CategoricalChart-4thYKElI.js";import"./Layer-BffJbX--.js";import"./AnimatedItems-6MMSMcYJ.js";import"./Label-CYvlsQvC.js";import"./Text-D3he8dQP.js";import"./DOMUtils-Bpsfg4Oe.js";import"./useBackwardsCompatibleTheme-WfOg4bTb.js";import"./ZIndexLayer-J8-hOCa0.js";import"./useAnimationId-1S4zeXgZ.js";import"./ActivePoints-BiBnoeEb.js";import"./Dot-3hZpkGF4.js";import"./types-B1JXlqQN.js";import"./RegisterGraphicalItemId-CPAkHit-.js";import"./GraphicalItemClipPath-CVEv0QyJ.js";import"./SetGraphicalItem-Bw7kOs9y.js";import"./getRadiusAndStrokeWidthFromDot-CaYPlNA5.js";import"./ActiveShapeUtils-D6_9Syl7.js";import"./Curve-CyJ2f9jM.js";import"./step-OCCE-5TJ.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-aSOStWya.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
