import{r as p,R as t}from"./iframe-DHoXusD1.js";import{L as n}from"./LineChart-CiWQkdJS.js";import{R as s}from"./zIndexSlice-FsvXxdXV.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Dfi9spYg.js";import{X as d}from"./XAxis-hvLT-HVR.js";import{Y as y}from"./YAxis-_YVzx5KE.js";import{L as u}from"./Legend-DPl65V_h.js";import{L as h}from"./Line-COAixAac.js";import{T as g}from"./Tooltip-D3ME52ET.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B415nsX3.js";import"./resolveDefaultProps-htUurm4w.js";import"./get-cF5BDHN6.js";import"./axisSelectors-pR92cyKp.js";import"./throttle-bPL_CYHd.js";import"./index-CCctG3OF.js";import"./index-lVEyBlWW.js";import"./polarAxisSelectors-BGegD2Hb.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BrVNT65M.js";import"./index-Dy3TNkua.js";import"./index-DNIoQSRO.js";import"./renderedTicksSlice-BXV4OD99.js";import"./index-DVO0bVkJ.js";import"./fillDefinitions-BK2qfHam.js";import"./CartesianChart-0nvsDd6J.js";import"./chartDataContext-Cv05qjwa.js";import"./CategoricalChart-C50aZvEG.js";import"./CartesianAxis-D3kgYeFy.js";import"./Layer-DvTlLbe7.js";import"./Text-DGMTORnL.js";import"./ZIndexLayer-ZLuJl0PO.js";import"./Label-DH0ZiH3v.js";import"./types-BuL5d7PW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Buf-PQNY.js";import"./symbol-CzqK2yND.js";import"./path-DyVhHtw_.js";import"./useElementOffset-0dudveHh.js";import"./uniqBy-Cb8Ka0OF.js";import"./iteratee-DACkWKhu.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CobFJY2m.js";import"./step-7L3GLQ3k.js";import"./dataEntryStyles-DjrRjJ6y.js";import"./ActivePoints-Okwmojju.js";import"./Dot-DjtRy0VI.js";import"./activeStyles-CtCkxF9Y.js";import"./useAnimationId-BUoKLqt_.js";import"./ErrorBarContext-BUjEWD9b.js";import"./SetGraphicalItem-x9UkOjiz.js";import"./getRadiusAndStrokeWidthFromDot-JLWstI7V.js";import"./ActiveShapeUtils-CJDCK8tA.js";import"./useEffectiveDataKey-Ckh-4MN_.js";import"./Cross-Dbucp1-Q.js";import"./Rectangle-DvIJVMhk.js";import"./util-Dxo8gN5i.js";import"./Sector-CkJljpkv.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
