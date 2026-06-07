import{R as e}from"./iframe-B32UfMsX.js";import{R as c}from"./zIndexSlice-DkyNtvIV.js";import{C as d}from"./ComposedChart-QBL839d_.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-TX26qPGy.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BidytqCU.js";import"./index-BAP72phy.js";import"./index-wjzF3nV2.js";import"./get-CT3OO5rn.js";import"./resolveDefaultProps-SHHlCQDD.js";import"./isWellBehavedNumber-B3ho9k16.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BXDb61uY.js";import"./index-DzoQc6cZ.js";import"./index-Q93duC2Q.js";import"./renderedTicksSlice-DtIdXCHL.js";import"./axisSelectors-B8hXjmBG.js";import"./d3-scale-BwqG5DLv.js";import"./string-B6fdYHAA.js";import"./CartesianChart-s4vgD_mJ.js";import"./chartDataContext-d3sJv4oK.js";import"./CategoricalChart-svLbPFL5.js";import"./Layer-M7lMUPI2.js";import"./AnimatedItems-CWOjCZuo.js";import"./Label-Ba3mw93_.js";import"./Text-DenoxlLY.js";import"./DOMUtils-qhHnbbUp.js";import"./ZIndexLayer-DIk8UPq9.js";import"./useAnimationId-kKOEl60u.js";import"./ActivePoints-BOP5iqzh.js";import"./Dot-oj-oSIki.js";import"./types-BFdTLIuF.js";import"./RegisterGraphicalItemId-BPd8SjvM.js";import"./GraphicalItemClipPath-DtFSmlFx.js";import"./SetGraphicalItem-CLuszb-H.js";import"./getRadiusAndStrokeWidthFromDot-BZUf4vDk.js";import"./ActiveShapeUtils-rTJK82Vs.js";import"./Curve-BQ-BZdGC.js";import"./step-DXYrSD7K.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CCBoqdYH.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
