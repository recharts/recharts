import{r as n,R as t}from"./iframe-COvR6m4y.js";import{L as p}from"./LineChart-CkFIiRMm.js";import{R as s}from"./zIndexSlice-ou7P1k4B.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Cy9ZO17O.js";import{X as d}from"./XAxis-Dko6EwLt.js";import{Y as y}from"./YAxis-BmBZe_s0.js";import{L as u}from"./Legend-C2zR3K4b.js";import{L as h}from"./Line-A2N_Jj9W.js";import{T as g}from"./Tooltip-Bs0TNcBq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-S2j0RMDF.js";import"./index-DaYFSMwi.js";import"./index-BTT3eJrw.js";import"./index-C-vvr8x7.js";import"./index-FWviPRnN.js";import"./throttle-CwSdkZJ2.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-BCt_pLiN.js";import"./axisSelectors-CgZaOuWk.js";import"./resolveDefaultProps-Bslp9ftf.js";import"./isWellBehavedNumber-BMFlPjoz.js";import"./d3-scale-BKhMit0q.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B3NTwVXz.js";import"./chartDataContext-BtNlXKIo.js";import"./CategoricalChart-dbTixxWK.js";import"./CartesianAxis-BfSFkfBG.js";import"./Layer-BxScpKop.js";import"./Text-CVNPXLFS.js";import"./DOMUtils-CI2tOPO2.js";import"./Label-DL7W3oea.js";import"./ZIndexLayer-fZm6clI3.js";import"./types-C40QwNfk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-bMPPd1I7.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CMI7uChg.js";import"./symbol-C_Kkl2c9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CzVnQFDP.js";import"./uniqBy-Cwho9xkh.js";import"./iteratee-C7AvrAG1.js";import"./Curve-C1YATuiv.js";import"./step-CeMcQkHX.js";import"./AnimatedItems-DVdwO1UF.js";import"./useAnimationId-Cb3gVBxS.js";import"./ActivePoints-BCa4N9Pu.js";import"./Dot-COu3_HTT.js";import"./RegisterGraphicalItemId-DqoHzEMf.js";import"./ErrorBarContext-SLrJh98L.js";import"./GraphicalItemClipPath-BFgUMlnl.js";import"./SetGraphicalItem-CQMRhEff.js";import"./graphicalItemIdentity-KbS-c8wy.js";import"./ActiveShapeUtils-crCTkC1S.js";import"./Cross-DD1n0aFu.js";import"./Rectangle-DqY-vkpx.js";import"./util-Dxo8gN5i.js";import"./Sector-BGs4NfRJ.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Lt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Lt as __namedExportsOrder,Et as default};
