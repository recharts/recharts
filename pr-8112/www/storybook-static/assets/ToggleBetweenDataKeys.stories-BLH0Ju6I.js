import{r as p,R as t}from"./iframe-DEalUshl.js";import{L as n}from"./LineChart-B933PEbi.js";import{R as s}from"./zIndexSlice-CAksOI_1.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CkISHoQE.js";import{X as d}from"./XAxis-BITqqVCe.js";import{Y as y}from"./YAxis-DlX9l8Ve.js";import{L as u}from"./Legend-DiL1Iu_V.js";import{L as h}from"./Line-KtdY_z4O.js";import{T as g}from"./Tooltip-BCvfBg18.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BK5G7zbx.js";import"./resolveDefaultProps-BRTQsXjp.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DjgJ2Mrx.js";import"./throttle-DufRm-wd.js";import"./index-Bi7Cs1mM.js";import"./index-DdKBddy3.js";import"./polarAxisSelectors-BYiBdmVV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-R09LkYsV.js";import"./index-XZ5w84xu.js";import"./index-C7wIczSG.js";import"./renderedTicksSlice-f1LuiShq.js";import"./index-DCjef1wh.js";import"./CartesianChart-BhhkInk7.js";import"./ZIndexPortal-CZV1ifs7.js";import"./CategoricalChart-pEhIoip4.js";import"./CartesianAxis-kcZBykzp.js";import"./Layer-Bw1dSYwu.js";import"./Text-DnHyAqDr.js";import"./pageBackground-CVwWBmc5.js";import"./ZIndexLayer-BXnvY1k7.js";import"./Label-CBgDJ6T5.js";import"./types-CObAiW_q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BT8pREls.js";import"./symbol-DXqIeeEX.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DRy_rfXg.js";import"./uniqBy-D0fLoUi4.js";import"./iteratee-aVpqpOpW.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BXiJvEeV.js";import"./step-BwbLlF7G.js";import"./LabelList-hToPfPST.js";import"./ActivePoints-CRXr9H7D.js";import"./Dot-DCVDv1q-.js";import"./activeStyles-DOcC-AXu.js";import"./useAnimationId-_MrDTWeG.js";import"./dataEntryStyles-D4Y7WVvW.js";import"./ErrorBarContext-CNmRRpz3.js";import"./SetGraphicalItem-QRv9uJVL.js";import"./getRadiusAndStrokeWidthFromDot-DBGr2m_l.js";import"./ActiveShapeUtils-C0qxzm6E.js";import"./useEffectiveDataKey-Bk8kAFIQ.js";import"./Cross-zedPutIO.js";import"./Rectangle-CnZc9_Rc.js";import"./util-Dxo8gN5i.js";import"./Sector-Ou1iFUt1.js";const wt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},xt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
