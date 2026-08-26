import{R as r}from"./iframe-C2IAoP9z.js";import{R as c}from"./zIndexSlice-BOdY0c2w.js";import{C as d}from"./ComposedChart-B9_G-h0N.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DLtFePjZ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CMLI9bDX.js";import"./index-Bc8qjgC3.js";import"./index-OAErDOz1.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CEcc3HUE.js";import"./isWellBehavedNumber-Dx9jutoa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CGBW-uJJ.js";import"./index-ozLvQTxr.js";import"./index-Dzs-h2I5.js";import"./axisSelectors-Cc0lgYtN.js";import"./d3-scale-Cvy-Ur2o.js";import"./renderedTicksSlice-CQpIMs9x.js";import"./CartesianChart-Dhpx6_3-.js";import"./chartDataContext-D77crK3E.js";import"./CategoricalChart-Q-FJ4faS.js";import"./Layer-c70k-pgH.js";import"./AnimatedItems-D3kWiSe3.js";import"./Label-DAn48o-H.js";import"./Text-Cay_E7zv.js";import"./DOMUtils-SGZ0CxAs.js";import"./useId-B5XgiE_K.js";import"./useBackwardsCompatibleTheme-Dqn1q3dG.js";import"./ZIndexLayer-BqO-ONcy.js";import"./useAnimationId-DzFP_Ei6.js";import"./ActivePoints-D57dx6Bs.js";import"./Dot-BXKPSTnn.js";import"./types-BONlApS2.js";import"./RegisterGraphicalItemId-BFnewc-x.js";import"./GraphicalItemClipPath-j5P5g_UT.js";import"./SetGraphicalItem-CB0dHT4c.js";import"./getRadiusAndStrokeWidthFromDot-BlVIdv42.js";import"./ActiveShapeUtils-dJNYAFGN.js";import"./Curve-Dgd-wDO-.js";import"./step-DmsxAhZl.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CWQ_KFxX.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const pt=["CustomizedLabel"];export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
