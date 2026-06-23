import{R as e}from"./iframe-B-rX_Ovq.js";import{R as c}from"./zIndexSlice-BsQifls5.js";import{C as d}from"./ComposedChart-BlAyCMqM.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CYlMqbDU.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DYOeNz8_.js";import"./index-D2kGKgGj.js";import"./index-Bh_-T13z.js";import"./get-DdRsJrM-.js";import"./resolveDefaultProps-D1pz5wzG.js";import"./isWellBehavedNumber-DgpUmT_-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BCnMK_aC.js";import"./index-chviYFta.js";import"./index-CpJc3r_b.js";import"./renderedTicksSlice-DQrcKm6F.js";import"./axisSelectors-CfXFgmuu.js";import"./d3-scale-DG2A9yU0.js";import"./CartesianChart-Hr6f_olX.js";import"./chartDataContext-CWp3X-kc.js";import"./CategoricalChart-BH_EAWmt.js";import"./Layer-BzDAHWqw.js";import"./AnimatedItems-C_X3btbZ.js";import"./Label-CL0zassZ.js";import"./Text-CbyfEyi5.js";import"./DOMUtils-CImWbOuY.js";import"./ZIndexLayer-CFxBNrtU.js";import"./useAnimationId-Bc7mMz9I.js";import"./ActivePoints-CPbnnH6m.js";import"./Dot-CQVjNDgk.js";import"./types-BrxUVIV4.js";import"./RegisterGraphicalItemId-DRp7yt-Z.js";import"./GraphicalItemClipPath-gUtT7Str.js";import"./SetGraphicalItem-mNTSaJYY.js";import"./getRadiusAndStrokeWidthFromDot-CJuF-Sfd.js";import"./ActiveShapeUtils-Cb8N5twM.js";import"./Curve-T3BWQcql.js";import"./step-h3zMWkhs.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-D_FjOrWh.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
