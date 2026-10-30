import{r as p,R as t}from"./iframe-BmS0ecXK.js";import{L as n}from"./LineChart-BPHHqb0M.js";import{R as s}from"./zIndexSlice-ChtzqxIP.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-C__yHp3Z.js";import{X as d}from"./XAxis-Bh2usn2R.js";import{Y as y}from"./YAxis-p6gtuiCl.js";import{L as u}from"./Legend-CLhfiF0I.js";import{L as h}from"./Line-Dcfa59Q0.js";import{T as g}from"./Tooltip-D9DFAcp1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CUI9gBJC.js";import"./resolveDefaultProps-L-kb5cDL.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BzqnuZDm.js";import"./throttle-OPlZV-qu.js";import"./index-CdWOU_Jt.js";import"./index-CT2dpPb1.js";import"./polarAxisSelectors-CE28gFQQ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-3fk2W2Xu.js";import"./index-S9VbsYVM.js";import"./index-B2CB0vSq.js";import"./renderedTicksSlice-DE9Jk9Mo.js";import"./index-B9xLgKg_.js";import"./fillDefinitions-BfTN52CB.js";import"./CartesianChart-MAWW00G9.js";import"./ZIndexPortal-BBTCIcjJ.js";import"./CategoricalChart-Y8ADkKU9.js";import"./CartesianAxis-Brh0Ot5h.js";import"./Layer-BUeogdZj.js";import"./Text-Cy6IgmxI.js";import"./DOMUtils-nGO8S--J.js";import"./ZIndexLayer-CGSpKlNm.js";import"./Label-xOYEqHzO.js";import"./types-BFfgrH_g.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-D9BPgtte.js";import"./symbol-BAUa8x3O.js";import"./path-DyVhHtw_.js";import"./useElementOffset-EBCaWoeA.js";import"./uniqBy-3a9GARB0.js";import"./iteratee-Cu9W3M9t.js";import"./isArguments-yB-y1yaH.js";import"./Curve-lc4LP5Ja.js";import"./step-SGVv9xA0.js";import"./LabelList-HbN4s7ci.js";import"./ActivePoints-DWCg0rgm.js";import"./Dot-D1LmOLCb.js";import"./activeStyles-D5Ig3nSZ.js";import"./useAnimationId-CpCNOV8e.js";import"./dataEntryStyles-BusWIJtt.js";import"./ErrorBarContext-D4UbmXd_.js";import"./SetGraphicalItem-DxeCv-Nd.js";import"./getRadiusAndStrokeWidthFromDot-DJ-NIfPX.js";import"./ActiveShapeUtils-UpE3VQFE.js";import"./useEffectiveDataKey-1aGsCLfO.js";import"./Cross-DQ_rg4Ea.js";import"./Rectangle-BZ-oVzUh.js";import"./util-Dxo8gN5i.js";import"./Sector-FEOFsvPJ.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
