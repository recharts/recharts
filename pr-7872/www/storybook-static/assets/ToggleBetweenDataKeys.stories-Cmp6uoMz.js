import{r as p,R as t}from"./iframe-Hl-NyIui.js";import{L as n}from"./LineChart-CNTCI4KO.js";import{R as s}from"./zIndexSlice-CfmJ5m3S.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BKXW8HHN.js";import{X as d}from"./XAxis-dvgP8Xa0.js";import{Y as y}from"./YAxis-aV4oz1qa.js";import{L as u}from"./Legend-DATPhy6E.js";import{L as h}from"./Line-Do1DfpvA.js";import{T as g}from"./Tooltip-DMEXtl6P.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-6h9C2k7P.js";import"./resolveDefaultProps-Cef9-W_0.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BUNPrG5h.js";import"./throttle-BbfdAojm.js";import"./index--xPFvF8G.js";import"./index-BDqTEc2Q.js";import"./isWellBehavedNumber-DkDVf3J3.js";import"./d3-scale-jS5aGAiZ.js";import"./index-DBpjU2SQ.js";import"./index-BofEEBUS.js";import"./renderedTicksSlice-CNE8P8TP.js";import"./index-D2iNSRAe.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Ci5OoGHz.js";import"./chartDataContext-C-VJeLBh.js";import"./CategoricalChart-CArj-fEw.js";import"./CartesianAxis-B_3pRXW9.js";import"./Layer-CFBs8Wel.js";import"./Text-BrVNMlzX.js";import"./DOMUtils-CG6HmAln.js";import"./useId-DW-27Lrg.js";import"./useBackwardsCompatibleTheme-gSrU4sF5.js";import"./Label-B3PtgVX6.js";import"./ZIndexLayer-C3i-HdBs.js";import"./types-B1K9SbcX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BWF6xm86.js";import"./symbol-DhzuOEcy.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BfRtNT8-.js";import"./uniqBy-ByQGoswD.js";import"./iteratee-BqIuCNzZ.js";import"./Curve-DylS8_W7.js";import"./step-DpF6rbyV.js";import"./AnimatedItems-ChX6uVrd.js";import"./useAnimationId-DLNOJTSV.js";import"./ActivePoints-CVfZawzl.js";import"./Dot-DSN5jlp-.js";import"./RegisterGraphicalItemId-D1BMc2l2.js";import"./ErrorBarContext-D2c9lRCZ.js";import"./GraphicalItemClipPath-CzquVpfg.js";import"./SetGraphicalItem-BgE77ea4.js";import"./getRadiusAndStrokeWidthFromDot-Bo-OkCM4.js";import"./ActiveShapeUtils-D9ea8jTE.js";import"./useGraphicalItemIdentity-uh3z32K3.js";import"./Cross-E3EcVqNT.js";import"./Rectangle-ChG8X9SF.js";import"./util-Dxo8gN5i.js";import"./Sector-RRY7EsWd.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
