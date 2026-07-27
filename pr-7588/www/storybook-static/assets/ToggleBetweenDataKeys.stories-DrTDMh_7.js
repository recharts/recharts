import{r as n,R as t}from"./iframe-Dk6QtUOm.js";import{L as p}from"./LineChart-CJd7JyOz.js";import{R as s}from"./zIndexSlice-DIYdct83.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DTFcpM_v.js";import{X as d}from"./XAxis-DpzwYtrF.js";import{Y as y}from"./YAxis-5MZ6qw-w.js";import{L as u}from"./Legend-Bj5CS1_f.js";import{L as h}from"./Line-CeOL_j5O.js";import{T as g}from"./Tooltip-CAO9Dq7b.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DtQEiJyx.js";import"./index-COkLsuib.js";import"./index-DoCUyrNc.js";import"./index-DoZuvuq0.js";import"./index-U7zmREmi.js";import"./throttle-D98VVn5G.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-1Do5QcM1.js";import"./axisSelectors-D6uzbqkR.js";import"./resolveDefaultProps-iHCSp8Qu.js";import"./isWellBehavedNumber-D_eFFsbn.js";import"./d3-scale-B2mup6zM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BPW_q9xK.js";import"./chartDataContext-BWXJwi3S.js";import"./CategoricalChart-DDK0QtzY.js";import"./CartesianAxis-BFE0ezxc.js";import"./Layer-CriLvMlw.js";import"./Text-B_RemiZL.js";import"./DOMUtils-C0erXEEq.js";import"./Label-Cv9o4t_y.js";import"./ZIndexLayer-CQwtlObF.js";import"./types-Df8kiDN0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-_cvEA0x0.js";import"./symbol-DQm7NK9B.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CDl8IrDv.js";import"./uniqBy-DUa1oDxC.js";import"./iteratee-qwNKeEU2.js";import"./Curve-DD_9uNW0.js";import"./step-74BZyyTl.js";import"./AnimatedItems-CpjG7pC9.js";import"./useAnimationId-BV1Lvx7_.js";import"./ActivePoints-D5mYDCHZ.js";import"./Dot-9qHn4B5a.js";import"./RegisterGraphicalItemId-DRrwgsJN.js";import"./ErrorBarContext-60D9zT8I.js";import"./GraphicalItemClipPath-DJOu5Ece.js";import"./SetGraphicalItem-D9C9m9l_.js";import"./getRadiusAndStrokeWidthFromDot-eEz4aUTs.js";import"./ActiveShapeUtils-CJey3tMT.js";import"./Cross-AtwPrNGl.js";import"./Rectangle-COIgOmTW.js";import"./util-Dxo8gN5i.js";import"./Sector-CB9kSF6e.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Et=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Et as __namedExportsOrder,Ct as default};
