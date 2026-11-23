import{r as p,R as t}from"./iframe-B5lEY8zD.js";import{L as n}from"./LineChart-CxTHtBbN.js";import{R as s}from"./zIndexSlice-BgROAb6p.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DEJZ4SeJ.js";import{X as d}from"./XAxis-DFQPNyZu.js";import{Y as y}from"./YAxis-B84b5tRH.js";import{L as u}from"./Legend-C1Ic0OQu.js";import{L as h}from"./Line-UBoMUVJK.js";import{T as g}from"./Tooltip-Bywq2Krs.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dry7ZWQ8.js";import"./resolveDefaultProps-Bw4esZyQ.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BghrQiEU.js";import"./throttle-B3jfQssg.js";import"./index-DOD6pO5N.js";import"./index-CrxBt4o0.js";import"./polarAxisSelectors-CnEvxLcF.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Be2MBhun.js";import"./index-DK10suvB.js";import"./index-C_OJiFXB.js";import"./renderedTicksSlice-BBBAmkst.js";import"./index-DxvEKk7O.js";import"./fillDefinitions-BYW3BXfQ.js";import"./CartesianChart-BJrH5JsN.js";import"./chartDataContext-BJNaOkd4.js";import"./CategoricalChart-DELNesLI.js";import"./CartesianAxis-C5RmfnOa.js";import"./Layer-DvqCln2S.js";import"./Text-Bpx0HJU1.js";import"./ZIndexLayer-BKjofHlF.js";import"./Label-BcoGvPAa.js";import"./types-DtlUuq-f.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CpkCeDJ9.js";import"./symbol-CumbrPds.js";import"./path-BBMZd4YL.js";import"./useElementOffset-DI0jf-H9.js";import"./uniqBy-w7Bk0idQ.js";import"./iteratee-DlqZpNBR.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-DgSQ364K.js";import"./Curve-Be0fUfaD.js";import"./step-C6UNokWX.js";import"./dataEntryStyles-XQ5o-AIv.js";import"./ActivePoints-BD_17PNW.js";import"./Dot-qGe_2cJR.js";import"./activeStyles-CCUgVOTa.js";import"./useAnimationId-BR63270P.js";import"./ErrorBarContext-BW17ZVEc.js";import"./SetGraphicalItem-BlbgEltH.js";import"./ActiveShapeUtils-BtGosP0P.js";import"./useEffectiveDataKey-TbJa30kz.js";import"./Cross-CuapKUiT.js";import"./Rectangle-DrSOMoM_.js";import"./util-Dxo8gN5i.js";import"./Sector-pZI3lBm7.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
