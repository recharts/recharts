import{r as p,R as t}from"./iframe-BzxAUdBV.js";import{L as n}from"./LineChart-LYNEx439.js";import{R as s}from"./zIndexSlice-CpYrgVZX.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-HNLibLcV.js";import{X as d}from"./XAxis-CtYxvtbo.js";import{Y as y}from"./YAxis-DCmm8K7b.js";import{L as u}from"./Legend-B6MIKlcq.js";import{L as h}from"./Line-C-rr1QKq.js";import{T as g}from"./Tooltip-BNUBXAzx.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BCictS_F.js";import"./resolveDefaultProps-DheJQ_-R.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D1428BGH.js";import"./throttle-C2l7QP8r.js";import"./index-DxuOyH9Y.js";import"./index-5gwlPTJD.js";import"./polarAxisSelectors-CqQp2e17.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BnAxRH73.js";import"./index-DwsBZD05.js";import"./index-D3M5mM9_.js";import"./renderedTicksSlice-DYvam8ud.js";import"./index-CIBNfLVZ.js";import"./fillDefinitions-fx1J2dmJ.js";import"./CartesianChart-Cryci4Uo.js";import"./chartDataContext-CextJDGM.js";import"./CategoricalChart-DzNtI-Go.js";import"./CartesianAxis-C9p6cgyy.js";import"./Layer-Df_NEF0m.js";import"./Text-DPkQNMpB.js";import"./ZIndexLayer-BUHaqwT6.js";import"./Label-9brnKF6Z.js";import"./types-djSleOln.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BU2g01-G.js";import"./symbol-DGFVgd7C.js";import"./path-BBMZd4YL.js";import"./useElementOffset-DEzR6i3W.js";import"./uniqBy-BHLVblv7.js";import"./iteratee-BJNLYDOc.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-ZLRSIrH1.js";import"./Curve-DIyQM0l3.js";import"./step-CAG0Ynz6.js";import"./dataEntryStyles-C-ZfbqEc.js";import"./ActivePoints-B380tDrW.js";import"./Dot-BeK6ZL_a.js";import"./activeStyles-DjlDJ1Rs.js";import"./useAnimationId-CdQeQcKS.js";import"./ErrorBarContext-iCVMvaG7.js";import"./SetGraphicalItem-in8OQb6t.js";import"./ActiveShapeUtils-BTD3-pm6.js";import"./useEffectiveDataKey-BLws13Ws.js";import"./Cross-Ck9k1RFb.js";import"./Rectangle-s-gxJKKB.js";import"./util-Dxo8gN5i.js";import"./Sector-Cb8zQIac.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
