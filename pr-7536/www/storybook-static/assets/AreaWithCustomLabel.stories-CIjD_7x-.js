import{R as e}from"./iframe-blo479ea.js";import{R as c}from"./zIndexSlice-B-NboAfn.js";import{C as d}from"./ComposedChart-CVG--YjL.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BWPCbCkS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CAybpjPd.js";import"./index-5Xauv1a1.js";import"./index-DwOveEH0.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-d-c_EfmU.js";import"./isWellBehavedNumber-vMDquOd-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DZW1xtMc.js";import"./index-Bk8DAVsF.js";import"./index-D98VNpy1.js";import"./renderedTicksSlice-DSEoRhRT.js";import"./axisSelectors-BsWadBKB.js";import"./d3-scale-D5iAOdDh.js";import"./CartesianChart-QYdWDySw.js";import"./chartDataContext-Dkqb0EXV.js";import"./CategoricalChart-B3UrSPAC.js";import"./Layer-C26T8E2g.js";import"./AnimatedItems-Bj_FYwBV.js";import"./Label-CXH82xbV.js";import"./Text-CjpmWysE.js";import"./DOMUtils-Tw2iKYp4.js";import"./ZIndexLayer-2I4OO_bH.js";import"./useAnimationId-NeumBkdx.js";import"./ActivePoints-y80Iu2pf.js";import"./Dot-BqQZbjFP.js";import"./types-CAFMP27K.js";import"./RegisterGraphicalItemId-D8SJKJaD.js";import"./GraphicalItemClipPath-BMIU9EC2.js";import"./SetGraphicalItem-DxPgsw5M.js";import"./getRadiusAndStrokeWidthFromDot-Bz6_dvfT.js";import"./ActiveShapeUtils-DIyj0lNk.js";import"./Curve-2n5H6-9L.js";import"./step-D2-UZcK5.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-C7jPYBiH.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
