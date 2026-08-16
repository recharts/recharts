import{R as r}from"./iframe-GNxtioUR.js";import{R as c}from"./zIndexSlice-D4haQxNn.js";import{C as d}from"./ComposedChart-Dx410X4q.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BndWXGHE.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Du4Eduzv.js";import"./index-CN1r47eQ.js";import"./index-DT7OqoJJ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D5DCSoJx.js";import"./isWellBehavedNumber-B1loF3DE.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-5Lqdjjzz.js";import"./index-CV7IGYk1.js";import"./index-BJVo2ffI.js";import"./axisSelectors-CsnJkuOW.js";import"./d3-scale-CsslalFd.js";import"./renderedTicksSlice-BNEcUsku.js";import"./CartesianChart-B0x1kr2K.js";import"./chartDataContext-DEGQ_Aoe.js";import"./CategoricalChart-m_Ids5fk.js";import"./Layer-DR6S9zl-.js";import"./AnimatedItems-Ct2IhasV.js";import"./Label-C7cFT6-M.js";import"./Text-C79V-s10.js";import"./DOMUtils-UzZI-9_5.js";import"./RechartsThemeContext-BZnANilh.js";import"./ZIndexLayer-D7CqA8Uv.js";import"./useAnimationId-B4U03xNw.js";import"./ActivePoints-qyzQPqTK.js";import"./Dot-BaVZ6R7S.js";import"./types-omsl4D4O.js";import"./RegisterGraphicalItemId-BVyZPmQY.js";import"./GraphicalItemClipPath-BK71gx_X.js";import"./SetGraphicalItem-vjMpKlni.js";import"./getRadiusAndStrokeWidthFromDot-DMvsMn3-.js";import"./ActiveShapeUtils-McNEEg_Y.js";import"./Curve-DKHt29i6.js";import"./step-b1TCH5-c.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BM42DxsS.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
