import{r as p,R as t}from"./iframe-CA9m8GYo.js";import{L as n}from"./LineChart-BqwzghAS.js";import{R as s}from"./zIndexSlice-DtH5keZE.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B5a1RZh7.js";import{X as d}from"./XAxis-CC3YYdgQ.js";import{Y as y}from"./YAxis-CbW8C0_5.js";import{L as u}from"./Legend-CrU4twQ-.js";import{L as h}from"./Line-7sQ58Sto.js";import{T as g}from"./Tooltip-oV_VKaqR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-PB4GMrwR.js";import"./resolveDefaultProps-CyX6DFN8.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BayOnfvg.js";import"./throttle-o0TVEzLp.js";import"./index-CErELZnL.js";import"./index-BmamNDCv.js";import"./polarAxisSelectors-C9u8TkQ8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C2dTdr93.js";import"./index-CqNMjBNA.js";import"./index-B2booWlS.js";import"./renderedTicksSlice-CIfh4CCk.js";import"./index-AvPiQd-I.js";import"./CartesianChart-BMo55UJv.js";import"./ZIndexPortal-CP5nbT1n.js";import"./CategoricalChart-CxzHbLbb.js";import"./CartesianAxis-D4TNjeO6.js";import"./Layer-Hxk-5S8n.js";import"./Text-BFxpfCQD.js";import"./pageBackground-O7JuB7S_.js";import"./ZIndexLayer-DnamAcTi.js";import"./Label-ekuzQLiz.js";import"./types-Cvx_7iJj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BokwsXNu.js";import"./symbol-DmvnuhBw.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DILgA3Om.js";import"./uniqBy-Cx6V6RxR.js";import"./iteratee-BlwalV7N.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DZjiB-zR.js";import"./step-DF34UguZ.js";import"./LabelList-CV5x_Azz.js";import"./ActivePoints-CEzGZ3l_.js";import"./Dot-CmRgS_7G.js";import"./activeStyles-PpyfPCVq.js";import"./useAnimationId-CvualzzB.js";import"./dataEntryStyles-XE7WR2iA.js";import"./ErrorBarContext-DjcN2az-.js";import"./SetGraphicalItem-C9x_j8Aw.js";import"./getRadiusAndStrokeWidthFromDot-CYDrKKi3.js";import"./ActiveShapeUtils-DBAVXS8z.js";import"./useEffectiveDataKey-VJMj_VC4.js";import"./Cross-oYr6BlXY.js";import"./Rectangle-Bu0iEdVM.js";import"./util-Dxo8gN5i.js";import"./Sector-6yiBA46s.js";const wt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},xt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
