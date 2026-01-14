import{r as n,e as t}from"./iframe-0lTGunMW.js";import{L as p}from"./LineChart-B8KRFZdY.js";import{R as s}from"./arrayEqualityCheck-BcVHM6kB.js";import{C as c}from"./CartesianGrid-C3bTOkY1.js";import{X as l}from"./XAxis-Cfcoth7C.js";import{Y as d}from"./YAxis-lXYEyZz1.js";import{L as y}from"./Legend-Dhq_oTRt.js";import{L as h}from"./Line-DQI75P2i.js";import{T as u}from"./Tooltip-D5BWDrFR.js";import{R as g}from"./RechartsHookInspector-Dk1C8jj5.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CnzobKYl.js";import"./hooks-CXPWyfRe.js";import"./axisSelectors-Djz2yXUi.js";import"./zIndexSlice-D-YSqdMJ.js";import"./resolveDefaultProps-Hv7UJc4Y.js";import"./PolarUtils-mWliNy-S.js";import"./CartesianChart-CMMpVnoF.js";import"./chartDataContext-Cyqtlzkq.js";import"./CategoricalChart-CV-slYuT.js";import"./CartesianAxis-Co_LHUOm.js";import"./Layer-BnXp22uo.js";import"./Text-bhqNXfXh.js";import"./DOMUtils-B5DHQ51j.js";import"./Label-CODe3zwa.js";import"./ZIndexLayer-DWGlhSed.js";import"./types-WsTRE19v.js";import"./Symbols-DWUe3itn.js";import"./Curve-DZsm4o-J.js";import"./useElementOffset-CU9yJrDm.js";import"./iteratee-Bod8Xpm-.js";import"./ReactUtils-CXVPwG-V.js";import"./ActivePoints-C5vcU6Ed.js";import"./Dot-7hrVu7_8.js";import"./RegisterGraphicalItemId-BjD0GJz1.js";import"./ErrorBarContext-ADLH_OpK.js";import"./GraphicalItemClipPath-DvXQ6fJn.js";import"./SetGraphicalItem-j4NHyBYf.js";import"./useAnimationId-D9Wpr36K.js";import"./getRadiusAndStrokeWidthFromDot-I0B4Jd_U.js";import"./ActiveShapeUtils-CKfXoaq0.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BCh8wZqF.js";import"./Trapezoid-Tsb3ohUM.js";import"./Sector-Doli5igL.js";import"./Cross-DDNArpcM.js";import"./index-DjmMVEJp.js";import"./ChartSizeDimensions-C9nZfRd3.js";import"./OffsetShower-ZX4tabc8.js";import"./PlotAreaShower-BEMT4keu.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [dataKey, setDataKey] = useState('pv');
    return <>
        <button type="button" onClick={() => {
        if (dataKey === 'pv') {
          setDataKey('uv');
        } else {
          setDataKey('pv');
        }
      }}>
          Change Data Key
        </button>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={400} data={pageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Tooltip />
            <RechartsHookInspector />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,gt as __namedExportsOrder,ut as default};
