import{r as p,R as t}from"./iframe-DbHNynaQ.js";import{L as n}from"./LineChart-rcFqXS9L.js";import{R as s}from"./zIndexSlice-seYPsfER.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CbQ3J_0K.js";import{X as d}from"./XAxis-IVt4eUDa.js";import{Y as y}from"./YAxis-BKqQ4P5e.js";import{L as u}from"./Legend-DTb60GHo.js";import{L as h}from"./Line-C3qaM2j5.js";import{T as g}from"./Tooltip-Bh5NqKKB.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B8ljz37p.js";import"./resolveDefaultProps-BxCdwk1t.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DuRw_22M.js";import"./throttle-BLg26bcw.js";import"./index-CRIpJa5f.js";import"./index-BGBt4hW8.js";import"./isWellBehavedNumber-B8EuhNZV.js";import"./d3-scale-ChODOj9m.js";import"./index-C6ClRwPj.js";import"./index-C0g1ZRMH.js";import"./renderedTicksSlice-BqyFHlMV.js";import"./index-uIcexEpZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B7Bt3OSw.js";import"./chartDataContext-EUMNNHrQ.js";import"./CategoricalChart-D9jf8lgu.js";import"./CartesianAxis-BKzDRc2K.js";import"./Layer-McKs3jBR.js";import"./Text-CnT4LfU-.js";import"./DOMUtils-W_YN1JiB.js";import"./useId-JKbSdXmU.js";import"./useBackwardsCompatibleTheme-BrfbM-bw.js";import"./Label-CahCPYhY.js";import"./ZIndexLayer-DLZyPL-y.js";import"./types-Dtr2g2lR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-p0vpfpIB.js";import"./symbol-C6icU8fd.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DsZ5J3Ev.js";import"./uniqBy-B46YDIdh.js";import"./iteratee-DXP-yn47.js";import"./Curve-DSpvGQJR.js";import"./step-DpeM9sZC.js";import"./AnimatedItems-DQqNxpCY.js";import"./useAnimationId-aseG17e8.js";import"./ActivePoints-C-6wZqrA.js";import"./Dot-CnXT2FP3.js";import"./RegisterGraphicalItemId-CTY00hAi.js";import"./ErrorBarContext-BMuc8qch.js";import"./GraphicalItemClipPath-GbTn8y2C.js";import"./SetGraphicalItem-eyDqIX5L.js";import"./getRadiusAndStrokeWidthFromDot-K22oepzJ.js";import"./ActiveShapeUtils-FJemOztc.js";import"./useGraphicalItemIdentity-Ox7A1s1f.js";import"./Cross-B86aT3hY.js";import"./Rectangle-BiI27SKD.js";import"./util-Dxo8gN5i.js";import"./Sector-CYz6hNF2.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
