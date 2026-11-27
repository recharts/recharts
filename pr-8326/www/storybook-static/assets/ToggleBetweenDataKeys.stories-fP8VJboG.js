import{r as p,R as t}from"./iframe-PHc5u_Go.js";import{L as n}from"./LineChart-VPRPG4M9.js";import{R as s}from"./zIndexSlice-O7J7Jeos.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BpJzICqP.js";import{X as d}from"./XAxis-CwnWWi2T.js";import{Y as y}from"./YAxis-W1GxgUQy.js";import{L as u}from"./Legend-BoIqYOYs.js";import{L as h}from"./Line-CScqX6gb.js";import{T as g}from"./Tooltip-Ixe77Jvi.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-0aodawEv.js";import"./resolveDefaultProps-CtovE_6b.js";import"./get-CjriyByo.js";import"./axisSelectors-D8A3lwIR.js";import"./throttle-B7fmfrhU.js";import"./index-CENrQ3Fo.js";import"./index-BL548a5i.js";import"./polarAxisSelectors-C8shuSpM.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-Ca8JIZw_.js";import"./index-B6C2iRoi.js";import"./index-B8MUftfu.js";import"./renderedTicksSlice-B_HpVp09.js";import"./index-B4O5QRRq.js";import"./fillDefinitions-CfETDC7a.js";import"./CartesianChart-B8odkp-B.js";import"./chartDataContext-uHFtVhR5.js";import"./CategoricalChart-BjWAqdhB.js";import"./CartesianAxis-DA5HtWf2.js";import"./Layer-DvHcP4X_.js";import"./Text-B4WGoEXs.js";import"./ZIndexLayer-jWs-pX7J.js";import"./Label-B_2vkxlb.js";import"./types-DsQO6Yiz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-jKk-8HGk.js";import"./symbol-Bn8bSYai.js";import"./path-BBMZd4YL.js";import"./useElementOffset-D5tMp2PA.js";import"./uniqBy-2OtzGgB3.js";import"./iteratee-Oda0bPnm.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-L9UGnbtt.js";import"./Curve-5DP7CstF.js";import"./step-BRWBSxqC.js";import"./dataEntryStyles-B0gayhW-.js";import"./ActivePoints-BJNvDjHC.js";import"./Dot-CLPkuyBC.js";import"./activeStyles-C4EAX3cB.js";import"./useAnimationId-Crie2Rxs.js";import"./ErrorBarContext-DX7Uypjj.js";import"./SetGraphicalItem-CpbhBJBp.js";import"./ActiveShapeUtils-4zLzrPeO.js";import"./useEffectiveDataKey-Br4Rw_9X.js";import"./Cross-BAq3FLrZ.js";import"./Rectangle-EDZm1eQj.js";import"./util-Dxo8gN5i.js";import"./Sector-DSgNE3zK.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
