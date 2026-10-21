import{r as p,R as t}from"./iframe-DTHZbTt-.js";import{L as n}from"./LineChart-B736fp5e.js";import{R as s}from"./zIndexSlice-CwvyUZAf.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DcCVUBM2.js";import{X as d}from"./XAxis-DNNXvE0w.js";import{Y as y}from"./YAxis-D2uAEQ_1.js";import{L as u}from"./Legend-CgLGi-UP.js";import{L as h}from"./Line-BAiXLkVa.js";import{T as g}from"./Tooltip-DFQWj3xk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BEg2HwJ0.js";import"./resolveDefaultProps-kDJk6VzV.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BOmHsD9v.js";import"./throttle-_YZWlOkj.js";import"./index-Fy1PXU7Z.js";import"./index-Daz8taF-.js";import"./isWellBehavedNumber-Bozcvyc-.js";import"./d3-scale-BmJqysRF.js";import"./index-DguN7IkA.js";import"./index-CIOmtNBi.js";import"./renderedTicksSlice-D7ZIJ8O6.js";import"./index-CrHWP68A.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CFx76W2A.js";import"./chartDataContext-HhXd6bIQ.js";import"./CategoricalChart-BuK74uML.js";import"./CartesianAxis-Ck9hBcPI.js";import"./Layer-DW8M9VQm.js";import"./Text-D1xR-i1r.js";import"./pageBackground-D-Popr0j.js";import"./useId-BWpg6He6.js";import"./useBackwardsCompatibleTheme-Cm_dQqJG.js";import"./Label-0KYVoNB4.js";import"./ZIndexLayer--bHJC1rV.js";import"./types-DfO2mLHa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Dgbdyewp.js";import"./symbol-DLWG4co-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BXtH78i8.js";import"./uniqBy-CKgXEfs_.js";import"./iteratee-CTtZA5q0.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BFSDmDlA.js";import"./step-BNxJFgbJ.js";import"./activeStyles-C3naVa7V.js";import"./useAnimationId-Dfuq3lyA.js";import"./dataEntryStyles-DkIuZeQk.js";import"./ActivePoints-XYXWcFmf.js";import"./Dot-BoMbzqSu.js";import"./ErrorBarContext-BnuvGJQ5.js";import"./GraphicalItemClipPath-EAO5wM-I.js";import"./SetGraphicalItem-SNY8eCLu.js";import"./getRadiusAndStrokeWidthFromDot-BBjNZ8_1.js";import"./ActiveShapeUtils-CMR5ure_.js";import"./useEffectiveDataKey-5jqQvgZD.js";import"./Cross-D9Dtg2wU.js";import"./Rectangle-DcH2ra7A.js";import"./util-Dxo8gN5i.js";import"./Sector-yWkVt4zI.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
