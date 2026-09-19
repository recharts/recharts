import{R as r}from"./iframe-BrTyBnwX.js";import{R as c}from"./zIndexSlice-fCAjIC-s.js";import{C as d}from"./ComposedChart-D5HBBFyd.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CgXFy_s2.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DoecO86t.js";import"./index-Bv6_RxtD.js";import"./index-COio-J2v.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-pdBcEa5m.js";import"./isWellBehavedNumber-yFPwar6M.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BNiYksGw.js";import"./axisSelectors-CsVFdpc7.js";import"./d3-scale-BBCERD4_.js";import"./index-6bvANrWw.js";import"./index-CY5SFnak.js";import"./renderedTicksSlice-BfFRGBwT.js";import"./index-DWzY76B7.js";import"./CartesianChart-C4EYf5JO.js";import"./chartDataContext-C8snCbmL.js";import"./CategoricalChart-C8btz5qd.js";import"./Layer-DXlWYKjQ.js";import"./AnimatedItems-Cw_YQpsP.js";import"./Label-BmV3H-Sw.js";import"./Text-BiFKA33F.js";import"./DOMUtils-DAEkqOho.js";import"./useId-DsdbKPS3.js";import"./useBackwardsCompatibleTheme-DZwZ5sQ-.js";import"./ZIndexLayer-CRDOSP7u.js";import"./useAnimationId-CQ1-fLBA.js";import"./ActivePoints-DGnEStBQ.js";import"./Dot-BNzrtaBE.js";import"./types-CIyrEG5X.js";import"./RegisterGraphicalItemId-NAciwQoL.js";import"./GraphicalItemClipPath-DJrsjfnr.js";import"./SetGraphicalItem-eWJRfUVz.js";import"./getRadiusAndStrokeWidthFromDot-Ds0TVCkG.js";import"./ActiveShapeUtils-DenUl92R.js";import"./Curve-C0Njno5j.js";import"./step-DqmVBTvC.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CTGe8VwY.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
