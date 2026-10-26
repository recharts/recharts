import{r as p,R as t}from"./iframe-xm0njxpX.js";import{L as n}from"./LineChart-BBo-awEr.js";import{R as s}from"./zIndexSlice-BXJXmFQu.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-95dpm8eo.js";import{X as d}from"./XAxis-BO1QGjPl.js";import{Y as y}from"./YAxis-NECyBpPr.js";import{L as u}from"./Legend-BdswvNJP.js";import{L as h}from"./Line-8E3Vc0X3.js";import{T as g}from"./Tooltip-BCFHrh-n.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B8IVe3Ss.js";import"./resolveDefaultProps-B61AogRi.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CvRpVDMX.js";import"./throttle-CQYnjh9B.js";import"./index-sPTpvkxI.js";import"./index-BJuRFged.js";import"./polarAxisSelectors-DQe6GYeu.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DRKVpWRJ.js";import"./index--0VHY1xY.js";import"./index-A2yfNmgu.js";import"./renderedTicksSlice-BXAMy43b.js";import"./index-BwWTg3c5.js";import"./CartesianChart-BJCMshR7.js";import"./chartDataContext-Dzgvzmie.js";import"./CategoricalChart-CF01fl7y.js";import"./CartesianAxis-C-JfYURt.js";import"./Layer-BK3cybNP.js";import"./Text-B0-TExiI.js";import"./pageBackground-DWSrNR00.js";import"./useId-BgEUuOn0.js";import"./ZIndexLayer-DyZHr2FP.js";import"./Label-S9WiqPCG.js";import"./dataEntryStyles-6HljWj9B.js";import"./types-dJ8tHIrH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DCRo0j9j.js";import"./symbol-BSoKxRAd.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DlepEBex.js";import"./uniqBy-0D-LcbqQ.js";import"./iteratee-IqDasbN4.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BAoUkSSw.js";import"./step-W8iSilzg.js";import"./activeStyles-DbHXCiJk.js";import"./useAnimationId-CEkjnsp2.js";import"./ActivePoints-BjJpQq32.js";import"./Dot-CSz5GuhK.js";import"./RegisterGraphicalItemId-CvVXplwq.js";import"./ErrorBarContext-iSnZN3fR.js";import"./SetGraphicalItem-BWe-V4S4.js";import"./getRadiusAndStrokeWidthFromDot-C3oN3ytl.js";import"./ActiveShapeUtils-BgjHc8Mn.js";import"./useEffectiveDataKey-L1KgQlH4.js";import"./Cross-CzL3SQCG.js";import"./Rectangle-y41hMVV_.js";import"./util-Dxo8gN5i.js";import"./Sector-DPbvsCHz.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
