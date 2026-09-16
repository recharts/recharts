import{R as r}from"./iframe-BBXYJHV9.js";import{R as c}from"./zIndexSlice-DeV5nVkQ.js";import{C as d}from"./ComposedChart-CI6CKZVa.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BpXM7kN-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D_5C5TP0.js";import"./index-CKKng9rb.js";import"./index-DD1sJSjK.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cuufas3t.js";import"./isWellBehavedNumber-Df9i-Xuh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper--QMYLh37.js";import"./axisSelectors-ldrqaVXy.js";import"./d3-scale-Cim9t_7k.js";import"./index-C1POlg4L.js";import"./index-DaLQCs1D.js";import"./renderedTicksSlice-D2BRqvUe.js";import"./index-CyGTPXip.js";import"./CartesianChart-Sq09cuqY.js";import"./chartDataContext-CvGK2QEJ.js";import"./CategoricalChart-BQqZpjdB.js";import"./Layer-CLVZjsru.js";import"./AnimatedItems-Szq-E2F-.js";import"./Label-lRXxfB4K.js";import"./Text-D82BKuR8.js";import"./DOMUtils-CzO3u12F.js";import"./useId-B4ofBqjM.js";import"./useBackwardsCompatibleTheme-DCcJalTw.js";import"./ZIndexLayer-DTr1Fcax.js";import"./useAnimationId-CBIZAPE4.js";import"./ActivePoints-ogH_t-gd.js";import"./Dot-CeQpq0Ml.js";import"./types-Bf4vH5cc.js";import"./RegisterGraphicalItemId-B-07fAKx.js";import"./GraphicalItemClipPath-h1d35KAS.js";import"./SetGraphicalItem-Dp4v1WTr.js";import"./getRadiusAndStrokeWidthFromDot-BRVPa3kE.js";import"./ActiveShapeUtils-DcqMOZEc.js";import"./Curve-D-Wgwm0-.js";import"./step-CPCTXlnC.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DpGCweuE.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
