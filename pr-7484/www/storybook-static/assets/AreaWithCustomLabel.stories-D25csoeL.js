import{R as e}from"./iframe-DX1vtGMO.js";import{R as c}from"./zIndexSlice-CBHqXPZu.js";import{C as d}from"./ComposedChart-DrTtv4BR.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CP2J7kjY.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CyjJLdoY.js";import"./index-CFOnPmwL.js";import"./index-BhJxPluG.js";import"./get-Cgjumwe9.js";import"./resolveDefaultProps-Evu9rMXK.js";import"./isWellBehavedNumber-BhjTCj8F.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BbcqKMmx.js";import"./index-CfVXt8f5.js";import"./index-CNqf-i4f.js";import"./renderedTicksSlice-DGFQGuI_.js";import"./axisSelectors-CD5YpxWK.js";import"./d3-scale-D456QfQQ.js";import"./CartesianChart-mvs2MZhK.js";import"./chartDataContext-DPGZ1R2s.js";import"./CategoricalChart-DtbdNaQa.js";import"./Layer-D3wyNfAg.js";import"./AnimatedItems-D5gtlj3g.js";import"./Label-D5WIiRBw.js";import"./Text-DdDBf3IT.js";import"./DOMUtils-9dw7u23l.js";import"./ZIndexLayer-DdHbybrS.js";import"./useAnimationId-3wGGsZoS.js";import"./ActivePoints-4qRZgwnO.js";import"./Dot-UykzmigB.js";import"./types-wjbQlydb.js";import"./RegisterGraphicalItemId-BdvIWiM6.js";import"./GraphicalItemClipPath-CtH8IX0c.js";import"./SetGraphicalItem-DJ3AMYhJ.js";import"./getRadiusAndStrokeWidthFromDot-CigRqL_g.js";import"./ActiveShapeUtils-C5uepk-V.js";import"./Curve-B-MgiVxo.js";import"./step-d6ptEm-b.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BqxEcvOJ.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
