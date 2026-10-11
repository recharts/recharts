import{R as r}from"./iframe-DUGvLzaM.js";import{R as c}from"./zIndexSlice-B4Mogj2z.js";import{C as d}from"./ComposedChart-cwP5-Ry_.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-hCR3_btE.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-iBva9Xri.js";import"./index-Bf1ebX0Z.js";import"./index-D4rZIo04.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B6fFLtp3.js";import"./isWellBehavedNumber-Dz-qkofC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ba1hxoNM.js";import"./axisSelectors-CGc2s0Fh.js";import"./d3-scale-C86sab-h.js";import"./index-CmYddVJ2.js";import"./index-CwW47wP2.js";import"./renderedTicksSlice-CrtrmLXp.js";import"./index-C-yXSHy-.js";import"./CartesianChart-CoHpfyp6.js";import"./chartDataContext-DrEWUsQF.js";import"./CategoricalChart-W5cmFX3l.js";import"./Layer-C-Z-OoWn.js";import"./activeStyles-DDiORVPn.js";import"./Label-C6rBfDHi.js";import"./Text-DzH8Q7Re.js";import"./pageBackground-9CWG-5EI.js";import"./useId-Bo2C_hQY.js";import"./useBackwardsCompatibleTheme-Dm759DN1.js";import"./ZIndexLayer-ytkVOhJ8.js";import"./useAnimationId-FtVQIfuZ.js";import"./dataEntryStyles-DRqvsfnl.js";import"./ActivePoints-C8OEAzuD.js";import"./Dot-B4gb0ExT.js";import"./types-CAM6k8hf.js";import"./GraphicalItemClipPath-BsVVWJrM.js";import"./SetGraphicalItem-BkJcCs8V.js";import"./getRadiusAndStrokeWidthFromDot-Bj_75x8K.js";import"./ActiveShapeUtils-CYHb3Hz-.js";import"./Curve-BLS66xAF.js";import"./step-CA28nkdr.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CNWhuATd.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
