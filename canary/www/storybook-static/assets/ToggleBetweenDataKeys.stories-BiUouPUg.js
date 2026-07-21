import{r as n,R as t}from"./iframe-2CSQwnzh.js";import{L as p}from"./LineChart-C-KxgAF9.js";import{R as s}from"./zIndexSlice-BFAyLu2K.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-wDjJNs7b.js";import{X as d}from"./XAxis-Q_FxDFmH.js";import{Y as y}from"./YAxis-CGxWNSi-.js";import{L as u}from"./Legend-DlgIPDhY.js";import{L as h}from"./Line-DawadGfv.js";import{T as g}from"./Tooltip-DueAtotn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DBVst9hu.js";import"./index-cEZOrgfU.js";import"./index-DiEzMPwb.js";import"./index-Cea4V0if.js";import"./index-DaE0ahnp.js";import"./throttle-D6AnBAnr.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-HMFum7ql.js";import"./axisSelectors-svppWMH6.js";import"./resolveDefaultProps-BHTXK_Jm.js";import"./isWellBehavedNumber-Dcam8SOU.js";import"./d3-scale-Dt9cpg9w.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DSNUg0OG.js";import"./chartDataContext-CjOi85nN.js";import"./CategoricalChart-DtXBMgKk.js";import"./CartesianAxis-B1LfcQH3.js";import"./Layer-whPw80AU.js";import"./Text-D8BcLzfv.js";import"./DOMUtils-CR7HkqrI.js";import"./Label-BgiiW0df.js";import"./ZIndexLayer-BmQ9stZJ.js";import"./types-Co_C0j8x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-McDm8XxD.js";import"./symbol-DJbov12X.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CbQUl8ho.js";import"./uniqBy-BOeXWsaI.js";import"./iteratee-DeKV1h7S.js";import"./Curve-BVeBGaCZ.js";import"./step-cLfMjHgU.js";import"./AnimatedItems-Ba6tXj_A.js";import"./useAnimationId-CkCcxDPT.js";import"./ActivePoints-fb37GVPw.js";import"./Dot-D2O1VtDH.js";import"./RegisterGraphicalItemId-D-cwWngY.js";import"./ErrorBarContext-B19vexPG.js";import"./GraphicalItemClipPath-DcZNtOEm.js";import"./SetGraphicalItem-DiGKkNAO.js";import"./getRadiusAndStrokeWidthFromDot-DvI-6mn5.js";import"./ActiveShapeUtils-CiureFp6.js";import"./Cross-DRVUwuRK.js";import"./Rectangle-BogSoKYG.js";import"./util-Dxo8gN5i.js";import"./Sector-UcZahgCQ.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
