import{e as t}from"./iframe-DYXgwBIj.js";import{R as c}from"./arrayEqualityCheck-CLSXPhEJ.js";import{C as d}from"./ComposedChart-BNyuImgf.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BapUsOm7.js";import{R as u}from"./RechartsHookInspector-DNZQsUA4.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-xhU6-TKE.js";import"./immer-DqnPv083.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BJ4twCb0.js";import"./index-DKQaQPo5.js";import"./hooks-B36GXF-L.js";import"./axisSelectors-D1Sw3rlY.js";import"./d3-scale-DvhayWTq.js";import"./zIndexSlice-grNRpkcv.js";import"./renderedTicksSlice-BsOdr-UA.js";import"./CartesianChart-BhbBZsjR.js";import"./chartDataContext-CQgEv-1D.js";import"./CategoricalChart-8xICKxcP.js";import"./Curve-DqnNZDut.js";import"./types-D3wyGAu1.js";import"./step-5UvXITCF.js";import"./Layer-B2chWpFo.js";import"./ReactUtils-D9ZXF6dc.js";import"./Label-BotO9q2I.js";import"./Text-1DsuNyNG.js";import"./DOMUtils-YQarvmoJ.js";import"./ZIndexLayer-D-ilahJA.js";import"./ActivePoints-DYLWF3Yu.js";import"./Dot-TZcM57dL.js";import"./RegisterGraphicalItemId-BBYoprYG.js";import"./GraphicalItemClipPath-BivSF4rD.js";import"./SetGraphicalItem-C0jCUDKT.js";import"./useAnimationId-DLi04jG5.js";import"./getRadiusAndStrokeWidthFromDot-DuV-YuJd.js";import"./graphicalItemSelectors-C-WQzubA.js";import"./index-DIOmg34x.js";import"./ChartSizeDimensions-DgpSyLAE.js";import"./OffsetShower-hXudHQen.js";import"./PlotAreaShower-DjlUc4SO.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{e as CustomizedLabel,mt as __namedExportsOrder,at as default};
