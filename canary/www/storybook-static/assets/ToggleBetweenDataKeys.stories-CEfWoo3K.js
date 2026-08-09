import{r as n,R as t}from"./iframe-DQWQDaPi.js";import{L as p}from"./LineChart-I8M7GDfe.js";import{R as s}from"./zIndexSlice-DcHJpvAl.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D2KU4kw2.js";import{X as d}from"./XAxis-BBBhOkeu.js";import{Y as y}from"./YAxis-C2-Mzga3.js";import{L as u}from"./Legend-n_BkvOmU.js";import{L as h}from"./Line-kGMiuUzH.js";import{T as g}from"./Tooltip-DfRUmUhQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BYnvhIY5.js";import"./index-BkyhQGGW.js";import"./index-CXa1CePB.js";import"./index-CVzBZnUD.js";import"./index-Boa57nB7.js";import"./throttle-BQvRWZqy.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CuF4kGlO.js";import"./resolveDefaultProps-Booe6JJa.js";import"./isWellBehavedNumber-BYWBnctP.js";import"./d3-scale-CLTv1Y1c.js";import"./renderedTicksSlice-D0V9j1Gj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DeUhDNtd.js";import"./chartDataContext-BGbsBt_h.js";import"./CategoricalChart-BVqvVrz0.js";import"./CartesianAxis-DrD9H6GX.js";import"./Layer-7j8XoA_H.js";import"./Text-C8i9V0Ud.js";import"./DOMUtils-D6N96cFz.js";import"./Label-DuuyKMi1.js";import"./ZIndexLayer-CfwFYr9r.js";import"./types-D4LIC8ZM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CJF-_HuY.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BNIDe_iv.js";import"./symbol-DJaGR-_n.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CLIiDdJ8.js";import"./uniqBy-fSK0oXn5.js";import"./iteratee-DdboyrOE.js";import"./Curve-CR2T-gv2.js";import"./step-C6wof28x.js";import"./AnimatedItems-Brr5wTGw.js";import"./useAnimationId-C7lsUvOa.js";import"./ActivePoints-CRS7YZW5.js";import"./Dot-xJkR_k9t.js";import"./RegisterGraphicalItemId-DoLIlFOq.js";import"./ErrorBarContext-Ch1rJbNM.js";import"./graphicalItemIdentity-CCnPSphi.js";import"./SetGraphicalItem-rBiZ9Gct.js";import"./getRadiusAndStrokeWidthFromDot-DsN6vJJI.js";import"./ActiveShapeUtils-BFafhpNl.js";import"./Cross-4l8qkIJQ.js";import"./Rectangle-Cj344d-6.js";import"./util-Dxo8gN5i.js";import"./Sector-CfjfRVeu.js";const Et={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
