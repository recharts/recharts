import{R as e}from"./iframe-CTZq4wow.js";import{R as c}from"./zIndexSlice-BugLLn2I.js";import{C as d}from"./ComposedChart-B7gp54eM.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CrkU2ySk.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CyDwbdt-.js";import"./index-BsdYqaGf.js";import"./index-CDrnfkiS.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-HvEOYUSi.js";import"./isWellBehavedNumber-o0IYSWOi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DfAH14um.js";import"./index-B4a7aOKY.js";import"./index-C9WAMmaw.js";import"./renderedTicksSlice-CnaOGMsT.js";import"./axisSelectors-CvXoECki.js";import"./d3-scale-oRxS8xLw.js";import"./CartesianChart-D9JMH5Z9.js";import"./chartDataContext-CjbWGJuj.js";import"./CategoricalChart-xMgetrMq.js";import"./Layer-B0eWkEir.js";import"./AnimatedItems-TPOIkuad.js";import"./Label-BA3Mm5Cp.js";import"./Text-Cu7BMLGl.js";import"./DOMUtils-DAhFjHam.js";import"./ZIndexLayer-JO4x2o2R.js";import"./useAnimationId-N1bAbizC.js";import"./ActivePoints-DduaoRit.js";import"./Dot-Ck1gikCj.js";import"./types-Cmo79yaU.js";import"./RegisterGraphicalItemId-CBhnZQJL.js";import"./GraphicalItemClipPath-C2c2EBGK.js";import"./SetGraphicalItem-Dzd1nu2B.js";import"./getRadiusAndStrokeWidthFromDot-DY4tcjGE.js";import"./ActiveShapeUtils-BYg3ncJn.js";import"./Curve-B2-DT88v.js";import"./step-BOqrsqeu.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CB6kf9eg.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const it=["CustomizedLabel"];export{t as CustomizedLabel,it as __namedExportsOrder,ot as default};
