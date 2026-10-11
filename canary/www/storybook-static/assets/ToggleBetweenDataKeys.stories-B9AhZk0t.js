import{r as p,R as t}from"./iframe-C9H6nb8O.js";import{L as n}from"./LineChart-DdxL-ItH.js";import{R as s}from"./zIndexSlice-86DFZZsp.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CrTk47qg.js";import{X as d}from"./XAxis-CywV301b.js";import{Y as y}from"./YAxis-DXEeaYcv.js";import{L as u}from"./Legend-DjtNBXa7.js";import{L as h}from"./Line-CmfR4dPi.js";import{T as g}from"./Tooltip-DQEtwi0s.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bh_nwwHr.js";import"./resolveDefaultProps-B_vS2EyS.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CaDgI8Oc.js";import"./throttle-BnpdZ0b3.js";import"./index-DkNU9Jwj.js";import"./index-BTq_b2hA.js";import"./isWellBehavedNumber-BxcMlH1H.js";import"./d3-scale-BBLrtWMa.js";import"./index-DOD7xHyz.js";import"./index-d48a0T_2.js";import"./renderedTicksSlice-TzJYRiTZ.js";import"./index-ByTGeVXQ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dy945WYe.js";import"./chartDataContext-BNqh0ME9.js";import"./CategoricalChart-BRBdOICb.js";import"./CartesianAxis-BWYBJgMt.js";import"./Layer-DNW7nupE.js";import"./Text-BU8Is9rY.js";import"./pageBackground-DsggDmpK.js";import"./useId-pZk3BoDa.js";import"./useBackwardsCompatibleTheme-K49OtSF_.js";import"./Label-6glZLWD6.js";import"./ZIndexLayer-DL3up6PN.js";import"./types-oEFxgIut.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CF_zrpHv.js";import"./symbol-BDtWPoty.js";import"./path-DyVhHtw_.js";import"./useElementOffset-KKareHqY.js";import"./uniqBy-1ZQrBMnQ.js";import"./iteratee-BR3KUAK-.js";import"./Curve-CQId5eMN.js";import"./step-C5UsVhDs.js";import"./activeStyles-Dwr5_xBc.js";import"./useAnimationId-k6lITT5p.js";import"./dataEntryStyles-CmzRurqC.js";import"./ActivePoints-xNyBthG2.js";import"./Dot-CRvB7d-n.js";import"./ErrorBarContext-CBrxfbC1.js";import"./GraphicalItemClipPath-Cizji_0l.js";import"./SetGraphicalItem-B5C7hWKX.js";import"./getRadiusAndStrokeWidthFromDot-C0Lx-uc8.js";import"./ActiveShapeUtils-Cv1ZH2em.js";import"./useEffectiveDataKey-BpO8_klP.js";import"./Cross-CYx8WrQR.js";import"./Rectangle-DUAtv8-f.js";import"./util-Dxo8gN5i.js";import"./Sector-RczJUp_V.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
