import{R as r}from"./iframe-CV_Focqb.js";import{R as c}from"./zIndexSlice-BMlZ-BTA.js";import{C as d}from"./ComposedChart-MH3garqG.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D6p8A8rj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BHR6OE-9.js";import"./throttle-B3rCyY-p.js";import"./index-CjhSLlbk.js";import"./index-Beg8UZ9d.js";import"./RechartsWrapper-gHoUEC4B.js";import"./axisSelectors-BxeWYXvo.js";import"./polarAxisSelectors-C3BM8mNN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CaWFw3Yv.js";import"./index-CURBXMxT.js";import"./index-B3f3WOos.js";import"./renderedTicksSlice-BoOYYKQz.js";import"./index-M6ICInBl.js";import"./CartesianChart-Db9Ekhbm.js";import"./ZIndexPortal-AZ5cZsws.js";import"./CategoricalChart-DWAHsGuD.js";import"./Layer-CsEez_y-.js";import"./LabelList-DREKrdKH.js";import"./Label-Du5iQDtH.js";import"./Text-DkcQkg85.js";import"./pageBackground-CnYdCkRU.js";import"./ZIndexLayer-mZMt123c.js";import"./dataEntryStyles-BVJSTixW.js";import"./ActivePoints-CZ1Bkl4s.js";import"./Dot-BSQDV2JF.js";import"./types-DM7Vi8Am.js";import"./activeStyles-gddFfhxG.js";import"./useAnimationId-DuuBzQL8.js";import"./Symbols-iEBpa06p.js";import"./symbol-CX01f9Tn.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-r-VYbJMs.js";import"./SetGraphicalItem-BpTteZzJ.js";import"./getRadiusAndStrokeWidthFromDot-BmGx7Z4E.js";import"./ActiveShapeUtils-180icphM.js";import"./Curve-BuhBl-mk.js";import"./step-BlU7WG28.js";import"./useEffectiveDataKey-CjigGJWt.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
