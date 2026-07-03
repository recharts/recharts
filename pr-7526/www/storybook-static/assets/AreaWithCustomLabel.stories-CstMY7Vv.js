import{R as e}from"./iframe-C76fCBLt.js";import{R as c}from"./zIndexSlice-BsJGnMmn.js";import{C as d}from"./ComposedChart-CsRNgK1V.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DJSQzvSx.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DuTovYxH.js";import"./index-DNHm-Slh.js";import"./index-DdHCa9pO.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-B-pRQb2R.js";import"./isWellBehavedNumber-6CN-Ynbl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dp2Q4tlU.js";import"./index-CKV5D6qs.js";import"./index-CdgAhURM.js";import"./renderedTicksSlice-ChQt8XEs.js";import"./axisSelectors-44DsbA90.js";import"./d3-scale-X-nthEaw.js";import"./CartesianChart-DpIJVUtf.js";import"./chartDataContext-xuvA9xY5.js";import"./CategoricalChart-BizDpfsn.js";import"./Layer-COsfpmfI.js";import"./AnimatedItems-QpEnlZxo.js";import"./Label-Dx0etugK.js";import"./Text-BtH4Ru5e.js";import"./DOMUtils-BPYJD_VQ.js";import"./ZIndexLayer-DTL30j5z.js";import"./useAnimationId-CEbYcbZq.js";import"./ActivePoints-rl4j4hoo.js";import"./Dot-C9pDbdqv.js";import"./types-BiK_KtGv.js";import"./RegisterGraphicalItemId-D4GJEFJb.js";import"./GraphicalItemClipPath-B6FRGk7o.js";import"./SetGraphicalItem-C9ktGnfi.js";import"./getRadiusAndStrokeWidthFromDot-DKT9RGri.js";import"./ActiveShapeUtils-PxqP6tZ6.js";import"./Curve-BzIujVSC.js";import"./step-UDFv_jwZ.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CANcD4oO.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
