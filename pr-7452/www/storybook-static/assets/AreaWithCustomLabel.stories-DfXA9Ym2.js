import{R as e}from"./iframe-DBxFP3uX.js";import{R as c}from"./zIndexSlice-B_9s4KsU.js";import{C as d}from"./ComposedChart-CWD6KhhR.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CMAotj9r.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DjG9xqx-.js";import"./index-DgF-9ML2.js";import"./index-DJo0-J4-.js";import"./get-CN0u3twK.js";import"./resolveDefaultProps-DCaDIMSr.js";import"./isWellBehavedNumber-BiB40tPr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DEp3al8N.js";import"./index-BcBtkybK.js";import"./index-CNd0a_qD.js";import"./renderedTicksSlice-BowbWmvp.js";import"./axisSelectors-B_9j14vR.js";import"./d3-scale-B06022wF.js";import"./string-B6fdYHAA.js";import"./CartesianChart-GxlalsIE.js";import"./chartDataContext-CZK58LYI.js";import"./CategoricalChart-CKuMbTEb.js";import"./Layer-Buso2Ccs.js";import"./AnimatedItems-ooNl266t.js";import"./Label-Dhv9vMg4.js";import"./Text-CmyuUjWM.js";import"./DOMUtils-CU_Od2Bc.js";import"./ZIndexLayer-DBGeCZYh.js";import"./useAnimationId-54G3nUfQ.js";import"./ActivePoints-hNSOrLBT.js";import"./Dot-g-iDk6Aa.js";import"./types-B2FPYU3d.js";import"./RegisterGraphicalItemId-BzdV07RL.js";import"./GraphicalItemClipPath-CDU2cR1P.js";import"./SetGraphicalItem-DoJqlCoL.js";import"./getRadiusAndStrokeWidthFromDot-CAXSoZ4P.js";import"./ActiveShapeUtils-Bhf79Nyo.js";import"./Curve-Dh6mi4Et.js";import"./step-CqGdUrTJ.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BLVS9kie.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
