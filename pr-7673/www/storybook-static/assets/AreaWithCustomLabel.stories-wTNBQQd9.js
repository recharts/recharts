import{R as r}from"./iframe-C93Nv-sG.js";import{R as c}from"./zIndexSlice-ByU1_vW7.js";import{C as d}from"./ComposedChart-CbNoaIAl.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CY0waHZr.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DKDTz13_.js";import"./index-CX4bLeAT.js";import"./index-WdxouXHE.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C5w327Ax.js";import"./isWellBehavedNumber-Cfr3MT4y.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bd-lflJB.js";import"./index-2-1yVY-g.js";import"./index-BGWLrOy5.js";import"./axisSelectors-B_nw5bC_.js";import"./d3-scale-DPCHxtwr.js";import"./renderedTicksSlice-BfcPBBmI.js";import"./CartesianChart-DjN4sIo1.js";import"./chartDataContext-DgDj7d7B.js";import"./CategoricalChart-Ckb0xTkj.js";import"./Layer-C-yThQSL.js";import"./AnimatedItems-B9gSLTjZ.js";import"./Label-C3kKco4I.js";import"./Text-BwKXAAQh.js";import"./DOMUtils-BXMnIR4n.js";import"./useId-Dcf96ehM.js";import"./useBackwardsCompatibleTheme-LhXwVyLe.js";import"./ZIndexLayer-txp7Phg0.js";import"./useAnimationId-ChO4WR-0.js";import"./ActivePoints-C6Pzzzqs.js";import"./Dot-4IJHfCjD.js";import"./types-DSu39Mtk.js";import"./RegisterGraphicalItemId-DBNNmaKj.js";import"./GraphicalItemClipPath-DHw7w2MP.js";import"./SetGraphicalItem-BVLzKmF8.js";import"./getRadiusAndStrokeWidthFromDot-BKbcHmv5.js";import"./ActiveShapeUtils-CpLwkFCz.js";import"./Curve-C4EKfZxi.js";import"./step-DUN67lSa.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DVEtBU0R.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
