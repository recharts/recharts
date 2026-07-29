import{r as n,R as t}from"./iframe-VZ2aM8fP.js";import{L as p}from"./LineChart-Dt9VS6C-.js";import{R as s}from"./zIndexSlice-CQOPOcrz.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B2ElzWSV.js";import{X as d}from"./XAxis-wYdPJJmK.js";import{Y as y}from"./YAxis-BnAL0SHr.js";import{L as u}from"./Legend-sDzFO5rA.js";import{L as h}from"./Line-B81037Cs.js";import{T as g}from"./Tooltip-DwRvR9mJ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BgtBwIWT.js";import"./index-B8NmJaJc.js";import"./index-BdOpZNUA.js";import"./index-RAnsrEyk.js";import"./index-5JKLnMLz.js";import"./throttle-CpHch1iP.js";import"./get-C2VjdU0L.js";import"./renderedTicksSlice-BWvg2Uuk.js";import"./axisSelectors-BuT92BdO.js";import"./resolveDefaultProps-_p4e6Off.js";import"./isWellBehavedNumber-B1YHMHRX.js";import"./d3-scale-2P7n4BrN.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bc8fypAa.js";import"./chartDataContext-Ci6amljO.js";import"./CategoricalChart-CxsxsIbU.js";import"./CartesianAxis-C1YtHz_V.js";import"./Layer-D5KpKuLh.js";import"./Text-BxYT9j-0.js";import"./DOMUtils-D8EYtam3.js";import"./Label-Bcx9yaip.js";import"./ZIndexLayer-BQK00jlT.js";import"./types-BixaCUGO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CWQxd3mi.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DVumFTK6.js";import"./symbol-CUlD2-5A.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B7H5s1sG.js";import"./uniqBy-D-VFpCI_.js";import"./iteratee-BrJ0nONF.js";import"./Curve-B5MshFyr.js";import"./step-DBa2Myk3.js";import"./AnimatedItems-B1Uj1Gzk.js";import"./useAnimationId-BWSvDpI-.js";import"./ActivePoints-oAKWC-6n.js";import"./Dot-CNR-wtas.js";import"./RegisterGraphicalItemId-C7us6vqj.js";import"./ErrorBarContext-DZjmiaio.js";import"./GraphicalItemClipPath-BhbKOYCd.js";import"./SetGraphicalItem-BqP4f3rQ.js";import"./getRadiusAndStrokeWidthFromDot-D2NN5p-Y.js";import"./ActiveShapeUtils-C3jZ13_H.js";import"./Cross-QAFKi9OG.js";import"./Rectangle-BHt9-SY3.js";import"./util-Dxo8gN5i.js";import"./Sector-CTuxRXvD.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
