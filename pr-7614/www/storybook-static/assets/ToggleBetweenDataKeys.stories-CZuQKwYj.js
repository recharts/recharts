import{r as n,R as t}from"./iframe-C5hmF0To.js";import{L as p}from"./LineChart-DyM4Wjp5.js";import{R as s}from"./zIndexSlice-BixfUK5V.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BtlMgpnR.js";import{X as d}from"./XAxis-C0QI0HXh.js";import{Y as y}from"./YAxis-8wMoNgQN.js";import{L as u}from"./Legend-BsUHQNuT.js";import{L as h}from"./Line-DEGUXAZ2.js";import{T as g}from"./Tooltip-28ogAC6y.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C2jsJsE5.js";import"./index-CJFfs8Zx.js";import"./index-B_hHrNFX.js";import"./index-DPASLuit.js";import"./index-BrQaS3a5.js";import"./throttle-teWCo3kp.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-Cp2rYryV.js";import"./axisSelectors-3ticTacJ.js";import"./resolveDefaultProps-CdkFEDnC.js";import"./isWellBehavedNumber-DY0MczIS.js";import"./d3-scale-B4bxyqZp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-luY4Ugiw.js";import"./chartDataContext-BtJuej3V.js";import"./CategoricalChart-B7M_pOAg.js";import"./CartesianAxis-Co52JpOx.js";import"./Layer-CDmGCMyH.js";import"./Text-C5taNjiE.js";import"./DOMUtils-BTnNVt5T.js";import"./Label-Du636Igd.js";import"./ZIndexLayer-CCu8NHHi.js";import"./types-CeFfhpIK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-oPpqoGy7.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BGaSP5QY.js";import"./symbol-DEC0z0TC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BvtQZ0-R.js";import"./uniqBy-BSE1jEQh.js";import"./iteratee-CTdVzveq.js";import"./Curve-cVSz_V8P.js";import"./step-AxYq5Lzl.js";import"./AnimatedItems-BcG4wu47.js";import"./useAnimationId-WdLJ0TXq.js";import"./ActivePoints-DkEblMVf.js";import"./Dot-B5cqvfYd.js";import"./RegisterGraphicalItemId-Db5IkoaQ.js";import"./ErrorBarContext-BXXzJsD_.js";import"./GraphicalItemClipPath-DzTwh4wM.js";import"./SetGraphicalItem-CGZeJBQo.js";import"./graphicalItemIdentity-BfXCt-oz.js";import"./ActiveShapeUtils-Bfj9ZkEg.js";import"./Cross-CQZ99liq.js";import"./Rectangle-CcdSdsCc.js";import"./util-Dxo8gN5i.js";import"./Sector-Bbn7YV2S.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Lt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Lt as __namedExportsOrder,Et as default};
