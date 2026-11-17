import{r as p,R as t}from"./iframe-DQIHw-Vj.js";import{L as n}from"./LineChart-D2R6omtm.js";import{R as s}from"./zIndexSlice-DLnqMvRR.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DAgIamEO.js";import{X as d}from"./XAxis-C1j7r1zg.js";import{Y as y}from"./YAxis-BRNNX1VG.js";import{L as u}from"./Legend-CK1IssTU.js";import{L as h}from"./Line-CwKp4y3S.js";import{T as g}from"./Tooltip-hF8WqyNy.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BOwBRf5q.js";import"./resolveDefaultProps-DCDPXacx.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BOWof0F_.js";import"./throttle-CsL6-oT8.js";import"./index-ddMf2qZl.js";import"./index-DvzJj3QK.js";import"./polarAxisSelectors-CO8YfrX5.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D3QDia2a.js";import"./index-CAKt4SRE.js";import"./index-ej37J0iC.js";import"./renderedTicksSlice-DWNRUwtc.js";import"./index-DdSRFntK.js";import"./fillDefinitions-T89P4CC8.js";import"./CartesianChart-e9rrIYqD.js";import"./chartDataContext-D7ij0_Rh.js";import"./CategoricalChart-DgxyBa1d.js";import"./CartesianAxis-uR_V8Oxl.js";import"./Layer-Dtg1l4X7.js";import"./Text-UFCPlRdh.js";import"./ZIndexLayer-cKbXtIsu.js";import"./Label-CDOIzumT.js";import"./types-DC02XBeR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Derc8Zbt.js";import"./symbol-DHOCB5wG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B-UoXHul.js";import"./uniqBy-DLWeu4D6.js";import"./iteratee-BZDFIkpf.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-BtNwq4SW.js";import"./Curve-BGOWFPUa.js";import"./step-WCAmzMpM.js";import"./dataEntryStyles-CRT7gJOj.js";import"./ActivePoints-fySHDRUR.js";import"./Dot-so438WjJ.js";import"./activeStyles-DlG12Hxm.js";import"./useAnimationId-BGqCxB5a.js";import"./ErrorBarContext-DeOd0WHi.js";import"./SetGraphicalItem-xxOWq2oE.js";import"./ActiveShapeUtils-sNC7IbT4.js";import"./useEffectiveDataKey-DXNQs5X4.js";import"./Cross-DpX9ppW_.js";import"./Rectangle-Bd8I5Mu8.js";import"./util-Dxo8gN5i.js";import"./Sector-BQCU8Weg.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
