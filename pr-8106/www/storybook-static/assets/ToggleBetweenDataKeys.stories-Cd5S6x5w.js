import{r as p,R as t}from"./iframe-B_MIDKz_.js";import{L as n}from"./LineChart-BkaDzOLd.js";import{R as s}from"./zIndexSlice-BRdFs8ID.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-C_d4KfQI.js";import{X as d}from"./XAxis-C4lIERbq.js";import{Y as y}from"./YAxis-D3fzxS21.js";import{L as u}from"./Legend-DEqvMq_C.js";import{L as h}from"./Line-CxvYc4C3.js";import{T as g}from"./Tooltip-CNRGXaSi.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CqGFDY60.js";import"./resolveDefaultProps-xzz5mEiC.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Dl7meOBx.js";import"./throttle-BEqz9r6e.js";import"./index-BrIcEx9Z.js";import"./index-BOmAjlKN.js";import"./polarAxisSelectors-mzwQQ_dU.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-TVFiOeXq.js";import"./index-DPAMyEeL.js";import"./index-CwOCWg00.js";import"./renderedTicksSlice-yOWeuXiw.js";import"./index-BKlyB3jB.js";import"./CartesianChart-_H9IG9R2.js";import"./ZIndexPortal-DjuZ3mTH.js";import"./CategoricalChart-D_eNWRTX.js";import"./CartesianAxis-ZYJAAdvA.js";import"./Layer-DNwByRxz.js";import"./Text-B7cqpu59.js";import"./pageBackground-5b67NUgV.js";import"./ZIndexLayer-CUoHFkKf.js";import"./Label-CENIwYcD.js";import"./types-B5hVBX50.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-C4T4jjYn.js";import"./symbol-D75a70A4.js";import"./path-DyVhHtw_.js";import"./useElementOffset-kN6XAzkC.js";import"./uniqBy-CXvSLOdk.js";import"./iteratee-CYXB4_wY.js";import"./isArguments-yB-y1yaH.js";import"./Curve-9U6noJF7.js";import"./step-Bj2YjaOf.js";import"./LabelList-BZln5lTY.js";import"./ActivePoints-rPg8bsf1.js";import"./Dot-COTCbAgg.js";import"./activeStyles-CDqKbiIO.js";import"./useAnimationId-BYTiB8_B.js";import"./dataEntryStyles-BFC38uYF.js";import"./ErrorBarContext-Dwk9fL5w.js";import"./SetGraphicalItem-vDiBonc7.js";import"./getRadiusAndStrokeWidthFromDot-DE4AoGFo.js";import"./ActiveShapeUtils-D5xg6B3r.js";import"./useEffectiveDataKey-CNJBjtBe.js";import"./Cross-DsABquOe.js";import"./Rectangle-m0bX_fRW.js";import"./util-Dxo8gN5i.js";import"./Sector-BTnPCX-J.js";const wt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},xt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
