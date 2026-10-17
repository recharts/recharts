import{r as p,R as t}from"./iframe-Cf4rQ-NM.js";import{L as n}from"./LineChart-CxT6q1vm.js";import{R as s}from"./zIndexSlice-DMD_kE2u.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Dijd34fp.js";import{X as d}from"./XAxis-BIvdIl6o.js";import{Y as y}from"./YAxis-CNqs_HAY.js";import{L as u}from"./Legend-BTDRi3AW.js";import{L as h}from"./Line-D7eG1rq4.js";import{T as g}from"./Tooltip-CMjrj-7d.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BteUr7Vj.js";import"./resolveDefaultProps-Dge1pFTV.js";import"./get-cF5BDHN6.js";import"./axisSelectors-9PR0sTvr.js";import"./throttle-B2HUKrsu.js";import"./index-BCa2sd2-.js";import"./index-DeMDRv06.js";import"./isWellBehavedNumber-DGgr4zRD.js";import"./d3-scale-Lc72VcRD.js";import"./index-xRR_iGj4.js";import"./index-1RjEuLS2.js";import"./renderedTicksSlice-CE9QQLn-.js";import"./index-BsaRhs6B.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CpdyhfTD.js";import"./chartDataContext-Dx7ZG5X9.js";import"./CategoricalChart-BUsdXEus.js";import"./CartesianAxis-DkanQVq_.js";import"./Layer-Cw23EJyc.js";import"./Text-CI7nXg92.js";import"./pageBackground-ja8baDve.js";import"./useId-CX6V0BQ1.js";import"./useBackwardsCompatibleTheme-Beid_g9Z.js";import"./Label-DJuA9Y4I.js";import"./ZIndexLayer-DsOZ8kUq.js";import"./types-PE1Wk2R_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-D5DJG6Nl.js";import"./symbol-B_S5I6Iq.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dl0LIsHj.js";import"./uniqBy-CYhaWn8Y.js";import"./iteratee-Dbg95qkm.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Dr4UIWQ5.js";import"./step-Bcwq9xqU.js";import"./activeStyles-Do9UPxka.js";import"./useAnimationId-D_Che_T2.js";import"./dataEntryStyles-DPFF45fD.js";import"./ActivePoints-C6euMq8T.js";import"./Dot-B2NKpqWj.js";import"./ErrorBarContext-CaHoTzTO.js";import"./GraphicalItemClipPath-Dmqa19CH.js";import"./SetGraphicalItem-Dfb9XQen.js";import"./getRadiusAndStrokeWidthFromDot-DixpZj8q.js";import"./ActiveShapeUtils-BaLJZ67g.js";import"./useEffectiveDataKey-BQAfbWh7.js";import"./Cross-t70eUuc2.js";import"./Rectangle-B34jhTte.js";import"./util-Dxo8gN5i.js";import"./Sector-BHuTuRcM.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Rt as __namedExportsOrder,kt as default};
