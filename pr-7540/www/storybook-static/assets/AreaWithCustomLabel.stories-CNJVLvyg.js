import{R as e}from"./iframe-DGYc5Evr.js";import{R as c}from"./zIndexSlice-CjPpABdt.js";import{C as d}from"./ComposedChart-DPdiH-nu.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DcliiwXJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-44TCHeAp.js";import"./index-D_ZxU5Q3.js";import"./index-sF9bEsAF.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BzwDYh32.js";import"./isWellBehavedNumber-BpEOcoHg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CM9ry10x.js";import"./index-cJf64k7_.js";import"./index-xTx_eyuL.js";import"./renderedTicksSlice-BojFd99l.js";import"./axisSelectors-BNixzxMM.js";import"./d3-scale-DWZ-qO9T.js";import"./CartesianChart-BPYrXhHn.js";import"./chartDataContext-CnthLNs9.js";import"./CategoricalChart-CwbInpB3.js";import"./Layer-Cp66mevN.js";import"./AnimatedItems-DpTt0Un9.js";import"./Label-ByCQCza6.js";import"./Text-C1RHjt0W.js";import"./DOMUtils-D9lLS2TF.js";import"./ZIndexLayer-BiqJjXGY.js";import"./useAnimationId-CRdgro7A.js";import"./ActivePoints-vXI-iHsm.js";import"./Dot-CRtBS-b6.js";import"./types-m9Fzmc4X.js";import"./RegisterGraphicalItemId-BYtbpB8Y.js";import"./GraphicalItemClipPath-D4tdWuXE.js";import"./SetGraphicalItem-sSG1dofq.js";import"./getRadiusAndStrokeWidthFromDot-CuWeSJ3l.js";import"./ActiveShapeUtils-0IrxfALl.js";import"./Curve-CIxbvgQM.js";import"./step-ClaeK2JI.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-o-2IsEs2.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
