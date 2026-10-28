import{r as p,R as t}from"./iframe-Bvdgb1qV.js";import{L as n}from"./LineChart-CSWXZNT1.js";import{R as s}from"./zIndexSlice-B01j9Vcs.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CtCmynQ5.js";import{X as d}from"./XAxis-D59h15hK.js";import{Y as y}from"./YAxis-BeFwt-ht.js";import{L as u}from"./Legend-DI99byP4.js";import{L as h}from"./Line-Bq9HsgXM.js";import{T as g}from"./Tooltip-D7ufEnAI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Xt6mrXGV.js";import"./resolveDefaultProps-Dw9_y5mH.js";import"./get-cF5BDHN6.js";import"./axisSelectors-B7JYqxaB.js";import"./throttle-BPyPQEAQ.js";import"./index-CvLCmGiJ.js";import"./index-Cpva_oKK.js";import"./polarAxisSelectors-DEav2p-j.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-AQ3fTkSg.js";import"./index-BnNH-Ow2.js";import"./index-ByMobiKc.js";import"./renderedTicksSlice-9ekrV8Q5.js";import"./index-BIMpYUxR.js";import"./CartesianChart-D526lA3e.js";import"./ZIndexPortal-dwQ5L04t.js";import"./CategoricalChart-CuxUrQWu.js";import"./CartesianAxis-qmdlREsz.js";import"./Layer-C-2DDjxl.js";import"./Text-DPvkSF-G.js";import"./pageBackground-Cb0q0UoB.js";import"./ZIndexLayer-uaQDwXWb.js";import"./Label-DP6vSrfL.js";import"./dataEntryStyles-BpvBRnn1.js";import"./types-BLGnyPc9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BbBHtmua.js";import"./symbol-Bt3qNqsz.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D0AH9eMq.js";import"./uniqBy-AZ6L8AlC.js";import"./iteratee-BJJQ9tMD.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DVUXJ3hw.js";import"./step-DfpUdPc6.js";import"./LabelList-BzPq7Pbp.js";import"./ActivePoints-CspnecJX.js";import"./Dot-DtkvzlrW.js";import"./activeStyles-D6UDaEYG.js";import"./useAnimationId-t1eD8fzp.js";import"./RegisterGraphicalItemId-Drj4gpzK.js";import"./ErrorBarContext-DdyA3erj.js";import"./SetGraphicalItem-CHhflLCy.js";import"./getRadiusAndStrokeWidthFromDot-DNhfP8M9.js";import"./ActiveShapeUtils-qHwMrvBD.js";import"./useEffectiveDataKey-W79tWrXs.js";import"./Cross-CSUJOjH7.js";import"./Rectangle-N8aUytSm.js";import"./util-Dxo8gN5i.js";import"./Sector-BbQhMLaT.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
