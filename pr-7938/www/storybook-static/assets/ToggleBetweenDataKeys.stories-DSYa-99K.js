import{r as p,R as t}from"./iframe-DyRGY0m8.js";import{L as n}from"./LineChart-CBrci95H.js";import{R as s}from"./zIndexSlice-C8Goqaoo.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BKYufXor.js";import{X as d}from"./XAxis-ClyuyVSJ.js";import{Y as y}from"./YAxis-CiOcUDSR.js";import{L as u}from"./Legend-DekGki40.js";import{L as h}from"./Line-DHDl2yuC.js";import{T as g}from"./Tooltip-CwG5nFhr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-eOw39y0P.js";import"./resolveDefaultProps-CwBj0Vjn.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DJKcPqvS.js";import"./throttle-D2TCso2q.js";import"./index-Cv8tkEHt.js";import"./index-DxURkMdl.js";import"./isWellBehavedNumber-JGpa1dK4.js";import"./d3-scale-sk2wIxSM.js";import"./index-CzwSuytx.js";import"./index-DSQh__sX.js";import"./renderedTicksSlice-DM2Uh_-7.js";import"./index-BZwbzPta.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B9Ziwbgu.js";import"./chartDataContext-DdROdGCg.js";import"./CategoricalChart-CS-kA2nE.js";import"./CartesianAxis-C3YZMA4b.js";import"./Layer-Cn0quWvc.js";import"./Text-BK2IfBRh.js";import"./pageBackground-BnJW5YJX.js";import"./useId-DkHD0fqt.js";import"./useBackwardsCompatibleTheme-B8R5ZMSD.js";import"./Label-DmSSoRs6.js";import"./ZIndexLayer-CELDjLLn.js";import"./types-vbUeFItv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-B9mIS2TB.js";import"./symbol-CPUUWFC3.js";import"./path-DyVhHtw_.js";import"./useElementOffset-fQu1PDa3.js";import"./uniqBy-GFY-aWot.js";import"./iteratee-wH6oTw1B.js";import"./Curve-BnhnBI5K.js";import"./step-Dnl3MITN.js";import"./AnimatedItems-B4s4aHQH.js";import"./useAnimationId-DVRsp9Ga.js";import"./ActivePoints-DdFDoJtX.js";import"./Dot-DOIcUge1.js";import"./dataEntryStyles-BSCSOZbL.js";import"./ErrorBarContext-CkmAHEEl.js";import"./GraphicalItemClipPath-CzHoeJLu.js";import"./SetGraphicalItem-C2wvR06e.js";import"./getRadiusAndStrokeWidthFromDot-BB4xIvng.js";import"./ActiveShapeUtils-DW6rbsEP.js";import"./useGraphicalItemIdentity-CI8fdYZe.js";import"./Cross-BadjxkMM.js";import"./Rectangle-Dw0JBNRA.js";import"./util-Dxo8gN5i.js";import"./Sector-DUOxujmX.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
