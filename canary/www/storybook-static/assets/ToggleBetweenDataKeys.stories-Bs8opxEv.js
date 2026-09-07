import{r as p,R as t}from"./iframe-vkuvwsVK.js";import{L as n}from"./LineChart-CaVgNq9o.js";import{R as s}from"./zIndexSlice-Dv-4_3RD.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-fmAjXW7p.js";import{X as d}from"./XAxis-CpNjxui_.js";import{Y as y}from"./YAxis-BRsD9NZr.js";import{L as u}from"./Legend-CCBI4fn3.js";import{L as h}from"./Line-CP5o0VFe.js";import{T as g}from"./Tooltip-M8YEfCnF.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BGV5QqYH.js";import"./resolveDefaultProps-B-kKD-dq.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BTwgcDWt.js";import"./throttle-BLHvZaft.js";import"./index-D41S2RZq.js";import"./index-Chk0yUZO.js";import"./isWellBehavedNumber-CEhn0nxL.js";import"./d3-scale-5XjKmDSJ.js";import"./index-_iLGw6z5.js";import"./index-CowJ9bbH.js";import"./renderedTicksSlice-CkUsoCJX.js";import"./index-BegFXIYu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C28eI56R.js";import"./chartDataContext-D8moszCG.js";import"./CategoricalChart-C__CUkoq.js";import"./CartesianAxis-DxB0GpiS.js";import"./Layer-Bi6vQt34.js";import"./Text-Bzv8HE1I.js";import"./DOMUtils-Bw-pfRF7.js";import"./useId-CkK6agKe.js";import"./useBackwardsCompatibleTheme-DDVT5RRa.js";import"./Label-MPhkREO_.js";import"./ZIndexLayer-Ds3zCArg.js";import"./types-BvD7j9i8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C_xc1Cec.js";import"./symbol-BZ9PCIAn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C3uG_kWl.js";import"./uniqBy-Dq3TlbF7.js";import"./iteratee-Da6DrtKw.js";import"./Curve-Dio-qnL1.js";import"./step-BXgLPagR.js";import"./AnimatedItems-DBPnILuv.js";import"./useAnimationId-DDynUN7k.js";import"./ActivePoints-BpGdn-ZL.js";import"./Dot-DDw4Jjdd.js";import"./RegisterGraphicalItemId-BNZMo2JA.js";import"./ErrorBarContext-BiVVJplW.js";import"./GraphicalItemClipPath-B9JB0AOy.js";import"./SetGraphicalItem-CZfOWNG9.js";import"./getRadiusAndStrokeWidthFromDot-CXXRrtxr.js";import"./ActiveShapeUtils-BdYG65ei.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-BPIIlaLH.js";import"./Rectangle-9gytVjHV.js";import"./util-Dxo8gN5i.js";import"./Sector-DMXrhCec.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
