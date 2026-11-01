import{R as r}from"./iframe-Dt9aG847.js";import{R as c}from"./zIndexSlice-C3sOwbsK.js";import{C as d}from"./ComposedChart-CpvmmgfC.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BWOzKV0z.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cnn2TL20.js";import"./throttle-DjDKvtka.js";import"./index-Ckb0wJr8.js";import"./index-ZaO1fpAq.js";import"./RechartsWrapper-CgsNUza7.js";import"./axisSelectors-Bm-O_fE3.js";import"./polarAxisSelectors-BE-JLCIi.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DLGbz4xh.js";import"./index-DaFKSt3L.js";import"./index-C7FBrTyJ.js";import"./renderedTicksSlice-CiUiD4jz.js";import"./index-Cy9hP7c-.js";import"./fillDefinitions-Cturf6E_.js";import"./CartesianChart-ZS3wTvyi.js";import"./ZIndexPortal-C6GfDihg.js";import"./CategoricalChart-CcRrPC5A.js";import"./Layer-Z8zmzF48.js";import"./LabelList-Dmjy57ut.js";import"./Label-0OpL57DR.js";import"./Text-6YRDeSKh.js";import"./DOMUtils-DacRhvVS.js";import"./ZIndexLayer-D4w_arr1.js";import"./ActivePoints-Djx8G9q2.js";import"./Dot-B7i9JEY2.js";import"./types-CAYyOejn.js";import"./activeStyles-D2EMNXIV.js";import"./useAnimationId-CJa-E4MR.js";import"./dataEntryStyles-V0ugCGFO.js";import"./Symbols-VXtPO39-.js";import"./symbol-6_lKArhi.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-KzVnPo4P.js";import"./getRadiusAndStrokeWidthFromDot-BIO0J0B_.js";import"./ActiveShapeUtils-BCHVEK9a.js";import"./Curve-BqouQalk.js";import"./step-J3DdjOPx.js";import"./useEffectiveDataKey-DvT2OXI-.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,st as __namedExportsOrder,pt as default};
