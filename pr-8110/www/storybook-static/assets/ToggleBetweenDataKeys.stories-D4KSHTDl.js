import{r as p,R as t}from"./iframe-EeI-1j8u.js";import{L as n}from"./LineChart-Dr9t-k7s.js";import{R as s}from"./zIndexSlice-DHZxeEos.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BO5Air8Y.js";import{X as d}from"./XAxis-CIWygb1G.js";import{Y as y}from"./YAxis-BRal3r11.js";import{L as u}from"./Legend-BgI5LjXY.js";import{L as h}from"./Line-DEXoNnz0.js";import{T as g}from"./Tooltip-Dn_vDD_U.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BS1aWGo0.js";import"./resolveDefaultProps-nYBnVSVd.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Cv1-8nVO.js";import"./throttle-CXPRMSpL.js";import"./index-pgwVXRJO.js";import"./index-jJDdBZp4.js";import"./polarAxisSelectors-D7djmlhq.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DCtxOwfO.js";import"./index-BylysGcb.js";import"./index-BCOZ7QjH.js";import"./renderedTicksSlice-Y-CkzfGU.js";import"./index-DKT02nAj.js";import"./CartesianChart-e1TnBbHn.js";import"./ZIndexPortal-pivMB2CQ.js";import"./CategoricalChart-BQ46uFlP.js";import"./CartesianAxis-Qxk-B3SK.js";import"./Layer-U6GYHWx5.js";import"./Text-BY4Mp6iu.js";import"./DOMUtils-CO7WypWi.js";import"./ZIndexLayer-D_EbKSUX.js";import"./Label-BhnhNpXu.js";import"./types-DqUdmTjU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CDnC4YnR.js";import"./symbol-DRSGvgE-.js";import"./path-DyVhHtw_.js";import"./FillDefinition-DuMwyIxx.js";import"./dataEntryStyles-RarJtqD3.js";import"./useElementOffset-BM2TfUnu.js";import"./uniqBy-v3RdXdow.js";import"./iteratee-BmmzoLEb.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CyFTZwtt.js";import"./step-DC-9QXp9.js";import"./LabelList-D0m07rKR.js";import"./ActivePoints-BbQX7U_s.js";import"./Dot-LqOCFWRI.js";import"./activeStyles-T-Ne1kjI.js";import"./useAnimationId-CIis84-o.js";import"./ErrorBarContext-Cxsgmfrf.js";import"./SetGraphicalItem-DIh7Z4HQ.js";import"./getRadiusAndStrokeWidthFromDot-C5z_N8Pp.js";import"./ActiveShapeUtils-B2Xd3mgO.js";import"./useEffectiveDataKey-Ce4gQ9XU.js";import"./Cross-WnLTnECd.js";import"./Rectangle-CCoDLphy.js";import"./util-Dxo8gN5i.js";import"./Sector-CiNF6rG5.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
