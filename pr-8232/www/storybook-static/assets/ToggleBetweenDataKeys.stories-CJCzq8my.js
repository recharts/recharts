import{r as p,R as t}from"./iframe-Ca1UrYHb.js";import{L as n}from"./LineChart-Bo4Ppac7.js";import{R as s}from"./zIndexSlice-DkJuOKqH.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DzzAYDlT.js";import{X as d}from"./XAxis-fyR759Im.js";import{Y as y}from"./YAxis--Ne3LUdW.js";import{L as u}from"./Legend-CKpK190F.js";import{L as h}from"./Line-DA8d46P8.js";import{T as g}from"./Tooltip-B8lwG9Ea.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DpgD45ps.js";import"./resolveDefaultProps-C7Zn3GIw.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Dxz5Fo81.js";import"./throttle-CQ25M_Sr.js";import"./index-DyyWsaDx.js";import"./index-BL3iJc3a.js";import"./polarAxisSelectors-BJjdmelv.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BSpvxsSq.js";import"./index-CGbgMVTZ.js";import"./index-CeJ-_gAW.js";import"./renderedTicksSlice-C6Llf2gZ.js";import"./index-CXh6mJLx.js";import"./fillDefinitions-CGDilicc.js";import"./CartesianChart-Ahhse01G.js";import"./chartDataContext-Nvu6nj5u.js";import"./CategoricalChart-Cbl_4Ofw.js";import"./CartesianAxis-C2LROGDs.js";import"./Layer-YpjF2SE4.js";import"./Text-CG61ars6.js";import"./ZIndexLayer-84bYvzQv.js";import"./Label-Df_VmgSa.js";import"./types-DxtdvItD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DCcF1Btd.js";import"./symbol-C0Dz9CIF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-bheOR33N.js";import"./uniqBy-BWay3J3F.js";import"./iteratee-D2oTiGUc.js";import"./isArguments-yB-y1yaH.js";import"./Curve-_7igEkPt.js";import"./step-BwzpgB8P.js";import"./dataEntryStyles-HIGj4PG3.js";import"./ActivePoints-DFCTzNYL.js";import"./Dot-7od_5Z4B.js";import"./activeStyles-gkqlHaiP.js";import"./useAnimationId-Dpl0bF--.js";import"./ErrorBarContext-ChnkHwYk.js";import"./SetGraphicalItem-BYm76vy-.js";import"./getRadiusAndStrokeWidthFromDot-B4kLZYpF.js";import"./ActiveShapeUtils-83_vs6lS.js";import"./useEffectiveDataKey-mZIPn9UL.js";import"./Cross-COR7fnF3.js";import"./Rectangle-CrzCB3zu.js";import"./util-Dxo8gN5i.js";import"./Sector-D52HjYRR.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
