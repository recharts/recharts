import{r as p,R as t}from"./iframe-DW88jlWE.js";import{L as n}from"./LineChart-BlckqTSO.js";import{R as s}from"./zIndexSlice-DVK4421h.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-C75CGIfw.js";import{X as d}from"./XAxis-DR4MLdhh.js";import{Y as y}from"./YAxis-uwKRdj5s.js";import{L as u}from"./Legend-CpCFRfof.js";import{L as h}from"./Line-eHeA353O.js";import{T as g}from"./Tooltip-CU8_CHdD.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D6Qja1Rv.js";import"./resolveDefaultProps-BeGeeMAY.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BvsqhHdG.js";import"./throttle-DdwERQOb.js";import"./index-CYoLVhib.js";import"./index-DKd_R_4T.js";import"./isWellBehavedNumber-DJEibIDK.js";import"./d3-scale-B9KsqEcg.js";import"./index-DGoH4J8D.js";import"./index-CTYHixiw.js";import"./renderedTicksSlice-CBsnm3d5.js";import"./index-DfrCmWVV.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DB1uC4rj.js";import"./chartDataContext-DYk24gQd.js";import"./CategoricalChart-Bfzcp6tQ.js";import"./CartesianAxis-BAGJBH6f.js";import"./Layer-1wEz8tGE.js";import"./Text-BEy-xjYS.js";import"./pageBackground-D5Jdtqol.js";import"./useId-DsKCuo-O.js";import"./useBackwardsCompatibleTheme-DRnujEnS.js";import"./Label-woFms0xV.js";import"./ZIndexLayer-NojUaQJi.js";import"./types-CqLteoP0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CutYEzOh.js";import"./symbol-D0ar7WGl.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BhYHZyL1.js";import"./uniqBy-CqnjSlNB.js";import"./iteratee-CxMCF-q0.js";import"./Curve-Dh68tpzp.js";import"./step-DBxmXEXg.js";import"./activeStyles-D70ZhOkY.js";import"./useAnimationId-CJ2VkiZA.js";import"./dataEntryStyles-BR960LqV.js";import"./ActivePoints-uBvMOKmI.js";import"./Dot-uVIbcFi4.js";import"./ErrorBarContext-Cf7bjtdd.js";import"./GraphicalItemClipPath-BGSGPFhH.js";import"./SetGraphicalItem-CiG8FS9q.js";import"./getRadiusAndStrokeWidthFromDot-jzOKzrlC.js";import"./ActiveShapeUtils-sQdrYNDC.js";import"./useEffectiveDataKey-OZ4YR6rc.js";import"./Cross-BgszvaaW.js";import"./Rectangle-BTJIjFU2.js";import"./util-Dxo8gN5i.js";import"./Sector-BtU0zDu-.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
