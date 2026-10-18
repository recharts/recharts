import{r as p,R as t}from"./iframe-Cs9VT9SX.js";import{L as n}from"./LineChart-BDQJej6B.js";import{R as s}from"./zIndexSlice-BdtHtScS.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CRWRpzt9.js";import{X as d}from"./XAxis-ZXwUP9Th.js";import{Y as y}from"./YAxis-vNX_kYng.js";import{L as u}from"./Legend-CdO2FU6H.js";import{L as h}from"./Line-Cx0NJuWb.js";import{T as g}from"./Tooltip-DBB7x4xM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C5YZJO9f.js";import"./resolveDefaultProps-BxA5_OWP.js";import"./get-cF5BDHN6.js";import"./axisSelectors-gCAVib4T.js";import"./throttle-DO7D3GPa.js";import"./index-xMFBNBU3.js";import"./index-Ccb8EBp4.js";import"./isWellBehavedNumber-CVBN0S-y.js";import"./d3-scale-B33rCp3E.js";import"./index-Co8WVvE-.js";import"./index-Cjg5XPAC.js";import"./renderedTicksSlice-CLNxhMWR.js";import"./index-iO7lXoIC.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BoDGj9iP.js";import"./chartDataContext-neHnT-17.js";import"./CategoricalChart-D0wW8A9V.js";import"./CartesianAxis-CkxFyA6u.js";import"./Layer-DyApFY3D.js";import"./Text-NwXvdk36.js";import"./pageBackground-Oh548Gvn.js";import"./useId-pJJcLuGB.js";import"./useBackwardsCompatibleTheme-BWsBUWUZ.js";import"./Label-CtA6iQna.js";import"./ZIndexLayer-6baMIq5x.js";import"./types-BderJbki.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DxmnmwzS.js";import"./symbol-in5fS4rD.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dsr0kKKf.js";import"./uniqBy-0hLfVEhM.js";import"./iteratee-DMBh3gc4.js";import"./isArguments-yB-y1yaH.js";import"./Curve-C5hSs_Mg.js";import"./step-C0n0sZGY.js";import"./activeStyles-CIXVWOxz.js";import"./useAnimationId-1jmYsVjg.js";import"./dataEntryStyles-Bogdu71F.js";import"./ActivePoints-zHs9ig4S.js";import"./Dot-D9tJW78F.js";import"./ErrorBarContext-Ba_qpzYN.js";import"./GraphicalItemClipPath-BhbyQIog.js";import"./SetGraphicalItem-Dqm-RVU6.js";import"./getRadiusAndStrokeWidthFromDot-CqwHrRi4.js";import"./ActiveShapeUtils-DP1vY-Az.js";import"./useEffectiveDataKey-KP9u_G2c.js";import"./Cross-D-h4cxnd.js";import"./Rectangle-B7LH8v7V.js";import"./util-Dxo8gN5i.js";import"./Sector-D65AispO.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
