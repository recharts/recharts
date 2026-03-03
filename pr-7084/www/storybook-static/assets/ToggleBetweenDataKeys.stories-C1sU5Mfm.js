import{r as n,e as t}from"./iframe-D5au-B4R.js";import{L as p}from"./LineChart-ByBV-nct.js";import{R as s}from"./arrayEqualityCheck-DjoT1CkP.js";import{C as c}from"./CartesianGrid-wjb1mDcc.js";import{X as l}from"./XAxis-Djz3Z4bE.js";import{Y as d}from"./YAxis-Bi10WgdJ.js";import{L as y}from"./Legend-C8EttWck.js";import{L as h}from"./Line-GBkSu3V2.js";import{T as u}from"./Tooltip-CwOLT_hR.js";import{R as g}from"./RechartsHookInspector-DFTuWkwy.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B2p68SqA.js";import"./index-CqclXjSb.js";import"./immer-Uxla1AdH.js";import"./hooks-CjYYqk-o.js";import"./axisSelectors-CPPpM5-p.js";import"./d3-scale-DAtNW_dV.js";import"./zIndexSlice-Dfjz8HwK.js";import"./renderedTicksSlice-NNQLBsMs.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B5W05POX.js";import"./chartDataContext-CVbY0bI2.js";import"./CategoricalChart-CjFfaA5A.js";import"./resolveDefaultProps-DoxDJzak.js";import"./CartesianAxis-fQqkoIc6.js";import"./Layer-N2rtvF3c.js";import"./Text-CodnAT-D.js";import"./DOMUtils-CCC5iRCA.js";import"./Label-CgqPFnns.js";import"./ZIndexLayer-D3P9nzyJ.js";import"./types-C71ySwku.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DA9it_1u.js";import"./symbol-DYMTv-17.js";import"./step-BXVfDqRU.js";import"./useElementOffset-ONaxsyYW.js";import"./uniqBy-Dx3xi0zM.js";import"./iteratee-BP3T-uwN.js";import"./ReactUtils-BP9EaRxl.js";import"./ActivePoints-BozXtQ62.js";import"./Dot-DOxQIUAd.js";import"./RegisterGraphicalItemId-wh7gYtX8.js";import"./ErrorBarContext-BKfr8U3o.js";import"./GraphicalItemClipPath-BSyS1Brn.js";import"./SetGraphicalItem-BsfuYCoV.js";import"./useAnimationId-B8Se4RD-.js";import"./getRadiusAndStrokeWidthFromDot-sXJnO0M5.js";import"./ActiveShapeUtils-XCFf1hjH.js";import"./isPlainObject-c9Qdn0OS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dfyov816.js";import"./Trapezoid-CE1-MrL0.js";import"./Sector-JrfJaAcz.js";import"./Curve-Cud4Oq3s.js";import"./Cross-BXaG_z2s.js";import"./index-47pdZWe1.js";import"./ChartSizeDimensions-ITlssz9c.js";import"./OffsetShower-r5ZHHhNG.js";import"./PlotAreaShower-Ck8CTF06.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
