import{r as p,R as t}from"./iframe-D3EjTtxy.js";import{L as n}from"./LineChart-CQE65DWo.js";import{R as s}from"./zIndexSlice-CR47Grm-.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-wvwN91rf.js";import{X as d}from"./XAxis-CBAr_26y.js";import{Y as y}from"./YAxis-ChbhO02F.js";import{L as u}from"./Legend-xKqboeAU.js";import{L as h}from"./Line-BwJdDGaV.js";import{T as g}from"./Tooltip-CcecZwBS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BKqCmNei.js";import"./resolveDefaultProps-CypR0Li3.js";import"./get-C2VjdU0L.js";import"./axisSelectors-2jJKhRaD.js";import"./throttle-EojsqAtG.js";import"./index-BrBaOJJz.js";import"./index-ClKWjY2h.js";import"./isWellBehavedNumber-D6-F1Zhx.js";import"./d3-scale-Bcyj84u8.js";import"./index-CW2m-a8N.js";import"./index-D-PCy9lp.js";import"./renderedTicksSlice-DWYht6zE.js";import"./index-C-LGK5kE.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-ClyYLTkq.js";import"./chartDataContext-tvTSeXcP.js";import"./CategoricalChart-D-xvlCPh.js";import"./CartesianAxis-Mzi-Pwf8.js";import"./Layer-CAR2aUbH.js";import"./Text-D8BNDsFW.js";import"./pageBackground-Bgbh54PU.js";import"./useId-CXtTlWvS.js";import"./useBackwardsCompatibleTheme-DShn4Fj5.js";import"./Label-Cwzl5MfK.js";import"./ZIndexLayer-DYrhxp9-.js";import"./types-OWn5Mrao.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C_eJ930f.js";import"./symbol-Cwu5ve2k.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CcOLWzLv.js";import"./uniqBy-BMWd6n_M.js";import"./iteratee-CFhE0l7L.js";import"./Curve-DGfDXyXs.js";import"./step-BpQzdfyO.js";import"./activeStyles-Celt-13r.js";import"./useAnimationId-C3lA_xne.js";import"./dataEntryStyles-BOeZ2OB5.js";import"./ActivePoints-BFJ9lPgu.js";import"./Dot-B5LpJNu8.js";import"./ErrorBarContext-D2RzPC2k.js";import"./GraphicalItemClipPath-qNx1D-3O.js";import"./SetGraphicalItem-2Yc4bdBx.js";import"./getRadiusAndStrokeWidthFromDot-O_fwqGez.js";import"./ActiveShapeUtils-DJnsuYPC.js";import"./useEffectiveDataKey-CruL2487.js";import"./Cross-DlFXEbgE.js";import"./Rectangle-BkUhA54S.js";import"./util-Dxo8gN5i.js";import"./Sector-CtInToRa.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
