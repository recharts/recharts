import{r as p,R as t}from"./iframe-CuGhPmlk.js";import{L as n}from"./LineChart-D3WIuRG0.js";import{R as s}from"./zIndexSlice-BOf55cXv.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Dm2DOXaA.js";import{X as d}from"./XAxis-CKjURUro.js";import{Y as y}from"./YAxis-DLBgWodt.js";import{L as u}from"./Legend-CV_YUnjK.js";import{L as h}from"./Line-DF_AoKL_.js";import{T as g}from"./Tooltip-DmDIsB-U.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CkD6y7S6.js";import"./resolveDefaultProps-JU216Ibw.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Bzh2qDn8.js";import"./throttle-D0-4r1vg.js";import"./index-D9ZLEpwh.js";import"./index-CLkWjMz0.js";import"./polarAxisSelectors-BwdXKLtW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DH8f3Idv.js";import"./index-pU8qqa02.js";import"./index--76JpPy7.js";import"./renderedTicksSlice-DbYgrNox.js";import"./index-CxvEfTaS.js";import"./CartesianChart-CEtK8vTY.js";import"./ZIndexPortal-ClQ_oNM2.js";import"./CategoricalChart-DiUb-iYo.js";import"./CartesianAxis-D0E-Hq6W.js";import"./Layer-C-miwaoG.js";import"./Text-L-8TUXNX.js";import"./pageBackground-DCo2yzAB.js";import"./ZIndexLayer-BtXB3z2o.js";import"./Label-B62wTY7D.js";import"./types-B0LhVrLk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DiagS28o.js";import"./symbol-CetSzj0T.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DovsWr-R.js";import"./uniqBy-D9UgBzVb.js";import"./iteratee-CkLtFoKx.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Cv9VJ7_-.js";import"./step-Bpop3Ls-.js";import"./LabelList-T4o6_Eqe.js";import"./ActivePoints-Bn3lQzBu.js";import"./Dot-DK7HsTYP.js";import"./activeStyles-U82greWp.js";import"./useAnimationId-DwU2Zwh7.js";import"./dataEntryStyles-DpUTp7qZ.js";import"./ErrorBarContext-B35UIqZH.js";import"./SetGraphicalItem-Csvl1Ioj.js";import"./getRadiusAndStrokeWidthFromDot-CE9VpvC8.js";import"./ActiveShapeUtils-BpXA90LR.js";import"./useEffectiveDataKey-Q10jxXsl.js";import"./Cross-BREw-WAC.js";import"./Rectangle-CA1kt8UJ.js";import"./util-Dxo8gN5i.js";import"./Sector-ENB_SqU-.js";const wt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},xt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
