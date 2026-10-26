import{R as r}from"./iframe-CcLWsqZ6.js";import{R as c}from"./zIndexSlice-qEbbRsug.js";import{C as d}from"./ComposedChart-EaqAREPx.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BXt_hLtC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DIHsajMe.js";import"./throttle-QCGHXTx2.js";import"./index-BFIBYpnF.js";import"./index-DS2FinM5.js";import"./RechartsWrapper-BXLQXmKg.js";import"./axisSelectors-DKMD16Y3.js";import"./polarAxisSelectors-ChPgG8gV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C4Z54rtJ.js";import"./index-53ZRgOab.js";import"./index-DTchXhsD.js";import"./renderedTicksSlice-ByXwp7t2.js";import"./index-DgxdHgy0.js";import"./CartesianChart-DtQ910PV.js";import"./chartDataContext-BOZiBkOs.js";import"./CategoricalChart-xvgg784f.js";import"./Layer-Cid6c7Vb.js";import"./activeStyles-l3ZfSaP4.js";import"./Label-FbOJbP-p.js";import"./Text-B8YpIyQn.js";import"./pageBackground-LUiwpw9x.js";import"./useId-HcHlz_oH.js";import"./ZIndexLayer-DNvaLTFc.js";import"./dataEntryStyles-Cm1A0_Zh.js";import"./useAnimationId-D35HAJRU.js";import"./ActivePoints-Ch_IhoTN.js";import"./Dot-DxmHRpLN.js";import"./types-B5Ef_z7I.js";import"./Symbols-CqDetlVC.js";import"./symbol-CfzxdKp_.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-DuSlzxcR.js";import"./SetGraphicalItem-DRC1z2NN.js";import"./getRadiusAndStrokeWidthFromDot-Dy2q91XH.js";import"./ActiveShapeUtils-B0HZ1tIg.js";import"./Curve-CkzSpo54.js";import"./step-Dkisf4Kt.js";import"./useEffectiveDataKey-7iKmBNHY.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
