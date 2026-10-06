import{R as r}from"./iframe-B0eldO7v.js";import{R as c}from"./zIndexSlice-CXop2G5e.js";import{C as d}from"./ComposedChart-Ddcti6fy.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CYEjcHyP.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D7OWylrB.js";import"./index-DCLOFYkq.js";import"./index-BKRX5CvI.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dl5A3vcA.js";import"./isWellBehavedNumber-Bs9ryC8U.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BwMPh17B.js";import"./axisSelectors-B4pxDEAY.js";import"./d3-scale-B5kcweJa.js";import"./index-C_-NyhpR.js";import"./index-Bdj7MaD4.js";import"./renderedTicksSlice-D3LeHV-Y.js";import"./index-DlY7-xoe.js";import"./CartesianChart-CoOYNy_x.js";import"./chartDataContext-1U_QIO6p.js";import"./CategoricalChart-B8AkurP8.js";import"./Layer-BkeFUCM0.js";import"./AnimatedItems-Bli2w_x8.js";import"./Label-wnFLP2Gb.js";import"./Text-DkYUHdlt.js";import"./DOMUtils-DXyJKZjT.js";import"./useId-ByWKwJ9t.js";import"./useBackwardsCompatibleTheme-peNjLWv-.js";import"./ZIndexLayer-CuGirjla.js";import"./useAnimationId-REGnqG-r.js";import"./ActivePoints-oqRPT4fh.js";import"./Dot-poKEwaeq.js";import"./types-BECNnjMS.js";import"./RegisterGraphicalItemId-DGTqEQmn.js";import"./GraphicalItemClipPath-DvdFYP5C.js";import"./SetGraphicalItem-FUNEgggo.js";import"./getRadiusAndStrokeWidthFromDot-D6ch2P3E.js";import"./ActiveShapeUtils-BmGLuzNe.js";import"./Curve-W12vhYO0.js";import"./step-BjD9SRNv.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CcjTcmiI.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
