import{R as e}from"./iframe-C-jRtd4O.js";import{R as c}from"./zIndexSlice-C13rA1yY.js";import{C as d}from"./ComposedChart-CYkr-z0J.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Dnqnm_7r.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-t4hhNfzx.js";import"./index-JIvcUmdP.js";import"./index-yCZUjS0Z.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-hGxk2_Y7.js";import"./isWellBehavedNumber-BazoxJ8k.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CszU7DXa.js";import"./index-Cqo_qzOk.js";import"./index-CODjAUjN.js";import"./renderedTicksSlice--jA8UMed.js";import"./axisSelectors-CkStVnzz.js";import"./d3-scale-DJzOiobO.js";import"./CartesianChart-dpIhYASN.js";import"./chartDataContext-POKzhFjx.js";import"./CategoricalChart-DlYy8Ici.js";import"./Layer-0nVmjaPa.js";import"./AnimatedItems-Dni8LwDO.js";import"./Label-ESmdcWMr.js";import"./Text-Bq6-_dbg.js";import"./DOMUtils-BNQTHuwM.js";import"./ZIndexLayer-BPTUfBlU.js";import"./useAnimationId-CyWcqLuD.js";import"./ActivePoints-B23Yd9jI.js";import"./Dot-DcnRANwh.js";import"./types-DJYeJibv.js";import"./RegisterGraphicalItemId-fpfKicem.js";import"./GraphicalItemClipPath-BbJiOV57.js";import"./SetGraphicalItem-DdFJ0gfA.js";import"./getRadiusAndStrokeWidthFromDot-DDj4ZBfK.js";import"./ActiveShapeUtils-DtJs66Wu.js";import"./Curve-BSXCagUH.js";import"./step-BK85lAbe.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DurAtTWi.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
