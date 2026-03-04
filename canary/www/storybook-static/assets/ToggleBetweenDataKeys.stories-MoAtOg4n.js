import{r as n,e as t}from"./iframe-D83ZSNbz.js";import{L as p}from"./LineChart-CLUPg6T-.js";import{R as s}from"./arrayEqualityCheck-BGA4RwPN.js";import{C as c}from"./CartesianGrid-DOXYo2au.js";import{X as l}from"./XAxis-C6_NJJDB.js";import{Y as d}from"./YAxis-QvVYxZLS.js";import{L as y}from"./Legend-CFiUqMnB.js";import{L as h}from"./Line-nYAELe6c.js";import{T as u}from"./Tooltip-CqpJOm1l.js";import{R as g}from"./RechartsHookInspector-BWsm2Zwo.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-6kLXfAE0.js";import"./index-8b00PKjq.js";import"./immer-CVep4-EU.js";import"./hooks-DCtmV1SZ.js";import"./axisSelectors-DsPqnEOY.js";import"./d3-scale-yzqdTiSJ.js";import"./zIndexSlice-z-sDwpjP.js";import"./renderedTicksSlice-Bt6P6Lqy.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Zohr5k9I.js";import"./chartDataContext-DzOegroB.js";import"./CategoricalChart-BH19QtA5.js";import"./resolveDefaultProps-BQFmif0Y.js";import"./CartesianAxis-4L0yK2SL.js";import"./Layer-CzMDOsc5.js";import"./Text-BHw_uujw.js";import"./DOMUtils-Bml6CSWG.js";import"./Label-CPoQ7ALx.js";import"./ZIndexLayer-BlsfoIRs.js";import"./types-CQ4rEtgJ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BiJ-DNBY.js";import"./symbol-S6sIvH4b.js";import"./step-DnRHTEfS.js";import"./useElementOffset-BGi4QxFd.js";import"./uniqBy-DgQL0Nmw.js";import"./iteratee-DGB-E-W_.js";import"./ReactUtils-Dwz5eB4M.js";import"./ActivePoints-xgfu-OUk.js";import"./Dot-CeVblkN7.js";import"./RegisterGraphicalItemId-DBtbwGke.js";import"./ErrorBarContext-DI1C1qO8.js";import"./GraphicalItemClipPath-DCwYUI8F.js";import"./SetGraphicalItem-CVQEh09-.js";import"./useAnimationId-DC1LkXPL.js";import"./getRadiusAndStrokeWidthFromDot-C8XAklJz.js";import"./ActiveShapeUtils-C7T_TsZu.js";import"./isPlainObject-CP5WOR_K.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BcHYsitW.js";import"./Trapezoid-DcZW9PM6.js";import"./Sector-BNG-UwhR.js";import"./Curve-VgEiMVDm.js";import"./Cross-DfakOLYr.js";import"./index-CSluNsr9.js";import"./ChartSizeDimensions--X_0ARq3.js";import"./OffsetShower-CvSCKQiO.js";import"./PlotAreaShower-BKASkiMz.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
