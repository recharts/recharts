import{R as r}from"./iframe-qOFEdJsq.js";import{R as c}from"./zIndexSlice-4ZilFo_n.js";import{C as d}from"./ComposedChart-CIu6IO4X.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BUYi3-DC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CFXMkGAW.js";import"./throttle-Bx7bNNV1.js";import"./index-DTQZl9pi.js";import"./index-BeFiGwAW.js";import"./RechartsWrapper-BNMPtHnU.js";import"./axisSelectors-CB4lGYL3.js";import"./polarAxisSelectors-Dp5ZHRD4.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DLjhRaU2.js";import"./index-BDT2LzEy.js";import"./index-DBlkQQbr.js";import"./renderedTicksSlice-ZmKsBH6-.js";import"./index-CBaY9CWO.js";import"./CartesianChart-D-SoV7is.js";import"./ZIndexPortal-BLQG9CdF.js";import"./CategoricalChart-BGKiqihk.js";import"./Layer-p7tl0Obh.js";import"./LabelList-CNqM2k92.js";import"./Label-Cllq2PGv.js";import"./Text-D4Or0m3K.js";import"./DOMUtils-DGwlz8Fh.js";import"./pageBackground-BIUVtVt0.js";import"./ZIndexLayer-18sgIJKw.js";import"./ActivePoints-B9VIFtI9.js";import"./Dot-Cx_dxYvu.js";import"./fillDefinitions-C8MPZPAo.js";import"./types-vee7x0Qx.js";import"./activeStyles-B7bZlFHp.js";import"./useAnimationId-DRvHP31x.js";import"./dataEntryStyles-BpwMOC9F.js";import"./Symbols-DU4y3lGd.js";import"./symbol-Cc7ZDpSQ.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BZaIjsVo.js";import"./getRadiusAndStrokeWidthFromDot-B-7643QY.js";import"./ActiveShapeUtils-BJhecgQK.js";import"./Curve-DB3f0x8T.js";import"./step-5jiFn3Gv.js";import"./useEffectiveDataKey-Y8Iowmfi.js";const st={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},nt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,nt as __namedExportsOrder,st as default};
