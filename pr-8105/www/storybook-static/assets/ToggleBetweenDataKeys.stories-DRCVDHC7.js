import{r as p,R as t}from"./iframe-BMnEk6rk.js";import{L as n}from"./LineChart-sfspemXo.js";import{R as s}from"./zIndexSlice-AHK2lLDY.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BgeAcGhx.js";import{X as d}from"./XAxis-DO8MMAbO.js";import{Y as y}from"./YAxis-Bg-R0mkd.js";import{L as u}from"./Legend-CKtpkcjd.js";import{L as h}from"./Line-uhUVV2ZJ.js";import{T as g}from"./Tooltip-CdRDsB00.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D4g7WfzD.js";import"./resolveDefaultProps-B_QljJZX.js";import"./get-cF5BDHN6.js";import"./axisSelectors-p5JtpZwX.js";import"./throttle-BLJmRI7W.js";import"./index-lkPNhlVs.js";import"./index-Bttv8G3u.js";import"./polarAxisSelectors-CeZI25QH.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CFf5tOkL.js";import"./index-DVw0VuQJ.js";import"./index-Bk611d1z.js";import"./renderedTicksSlice-CBxoq99O.js";import"./index-Cs2FdYvJ.js";import"./CartesianChart-D8VYP9Px.js";import"./ZIndexPortal-BccU1gyk.js";import"./CategoricalChart-CejU0SpF.js";import"./CartesianAxis-1xDTwGjL.js";import"./Layer-DhQvAzDq.js";import"./Text-C8Qyn2EQ.js";import"./pageBackground-CtZK7idk.js";import"./ZIndexLayer-B5NKkV0N.js";import"./Label-h8wQzOus.js";import"./types-BEqbC_4a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-H6KF7Fzl.js";import"./symbol-BrVg2837.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CKZUIDIC.js";import"./uniqBy-m6py-FT2.js";import"./iteratee-Dc85xDQN.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D8kPdRuj.js";import"./step-OCTxecjD.js";import"./LabelList-Dd3JyrGq.js";import"./ActivePoints-BPIJeIuh.js";import"./Dot-BOMHkylR.js";import"./activeStyles-DlaO21qO.js";import"./useAnimationId-Ctda-hFk.js";import"./dataEntryStyles-DegCLzhf.js";import"./ErrorBarContext-dq2106Y0.js";import"./SetGraphicalItem-C1JNOq53.js";import"./getRadiusAndStrokeWidthFromDot-BNTnGfox.js";import"./ActiveShapeUtils-BwTzV5YZ.js";import"./useEffectiveDataKey-DQstj3az.js";import"./Cross-CkQASEDQ.js";import"./Rectangle-CyQcxgx5.js";import"./util-Dxo8gN5i.js";import"./Sector-GHL6DImZ.js";const wt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},xt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
