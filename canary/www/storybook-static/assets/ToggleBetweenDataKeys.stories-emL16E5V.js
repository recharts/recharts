import{r as p,R as t}from"./iframe-Bm_JRRDc.js";import{L as n}from"./LineChart-ftNdhxtd.js";import{R as s}from"./zIndexSlice-CE1MC-Bj.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BRRRMFU0.js";import{X as d}from"./XAxis-CYGYoqLr.js";import{Y as y}from"./YAxis-DkJzVEan.js";import{L as u}from"./Legend-Dh6E4qzu.js";import{L as h}from"./Line-Dlo0KXIB.js";import{T as g}from"./Tooltip-1PXtah1l.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CWqhr_G8.js";import"./resolveDefaultProps-Cwcw9Llo.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CQbwMXjx.js";import"./throttle-Di0g5pz3.js";import"./index-2pvHcFpK.js";import"./index-DwUcBVgp.js";import"./polarAxisSelectors-CFmXVpQm.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-_mEsQ66i.js";import"./index-B22Nz6Ed.js";import"./index-C9h-Jb--.js";import"./renderedTicksSlice-DeG-maS7.js";import"./index-CuKK0pvL.js";import"./CartesianChart-BtCYpchS.js";import"./ZIndexPortal-Cd4FT9ez.js";import"./CategoricalChart-Ue3TZSpb.js";import"./CartesianAxis-D65lIMFu.js";import"./Layer-C38IBOtq.js";import"./Text-nM-LHLsO.js";import"./DOMUtils-C1tRULq9.js";import"./pageBackground-BcaJILnW.js";import"./ZIndexLayer-DBCQDkbL.js";import"./Label-v2uuRqjZ.js";import"./types-BgOFnMuj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-DfZYoox_.js";import"./fillDefinitions-D55-ziDc.js";import"./Symbols-CobU2W6x.js";import"./symbol-EG1r1dzp.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DZtVmn8K.js";import"./uniqBy-CNiTKE7V.js";import"./iteratee-DH1QSUwA.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Co0XT7xq.js";import"./step-Og4N4nQm.js";import"./LabelList-CIhUYtSm.js";import"./ActivePoints-B-UlNM6M.js";import"./Dot-Cd58ma5-.js";import"./activeStyles-BuWIAazB.js";import"./useAnimationId-7tWnytho.js";import"./dataEntryStyles-p95uc1IW.js";import"./ErrorBarContext-Bvj-sJVI.js";import"./SetGraphicalItem-IhBPl0xA.js";import"./getRadiusAndStrokeWidthFromDot-Z8_eBFcz.js";import"./ActiveShapeUtils-DOiWWiaf.js";import"./useEffectiveDataKey-1gMAnkt8.js";import"./Cross-sceG4Hk0.js";import"./Rectangle-DVcWQa2n.js";import"./util-Dxo8gN5i.js";import"./Sector-6h8eCDfu.js";const Rt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Tt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Tt as __namedExportsOrder,Rt as default};
