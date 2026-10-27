import{R as r}from"./iframe-DNsV3xvw.js";import{R as c}from"./zIndexSlice-BkDmHlXx.js";import{C as d}from"./ComposedChart-DUPDtyKq.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D7YjPhoR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DaIQaOsN.js";import"./throttle-CpyfnSH3.js";import"./index-Dztf8_-N.js";import"./index-CvtjAZLm.js";import"./RechartsWrapper-BitdsUuz.js";import"./axisSelectors-DtPl2Lwd.js";import"./polarAxisSelectors-wmmlw52W.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Y31MRKoT.js";import"./index-DpSt1MRy.js";import"./index-Byk9LK8-.js";import"./renderedTicksSlice-gGubTrlw.js";import"./index-HmVV84Ak.js";import"./CartesianChart-CQXK8dPk.js";import"./ZIndexPortal-D_VHs3j1.js";import"./CategoricalChart-Dkljh1MP.js";import"./Layer-CxNpu0Gw.js";import"./LabelList-Dxbb0X28.js";import"./Label-DxEHX6q3.js";import"./Text-D6nhI6eC.js";import"./pageBackground-DcwhSKr2.js";import"./ZIndexLayer-B29GXU_O.js";import"./dataEntryStyles-BPFhmlnt.js";import"./ActivePoints-Wn9kmDE8.js";import"./Dot-2Y-Kuv4T.js";import"./types-En29vQtS.js";import"./activeStyles-BmYbBsXF.js";import"./useAnimationId-BFFnWfJy.js";import"./Symbols-CXxyrJ-f.js";import"./symbol-Da48TnzF.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-0BinVrEN.js";import"./SetGraphicalItem-BMxaBFjY.js";import"./getRadiusAndStrokeWidthFromDot-DYbmzRmX.js";import"./ActiveShapeUtils-DHdP5lJT.js";import"./Curve-CuwsmGsN.js";import"./step-Bt130Gb4.js";import"./useEffectiveDataKey-BlrFpRwa.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
