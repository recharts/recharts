import{r as n,R as t}from"./iframe-D4-JHLuy.js";import{L as p}from"./LineChart-BJNJG0hz.js";import{R as s}from"./zIndexSlice-Bl2qFY1A.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-QY_EBeYm.js";import{X as d}from"./XAxis-N0htLXAu.js";import{Y as y}from"./YAxis-CC97e3o5.js";import{L as u}from"./Legend-Bw66eS2q.js";import{L as h}from"./Line-BkdrkySx.js";import{T as g}from"./Tooltip-meMb5WjK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DcHNLFvh.js";import"./index-CeIhzw3-.js";import"./index-BhPwJBge.js";import"./index-CU6oIHEI.js";import"./index-CTDSjMzl.js";import"./immer-M-cM6uYj.js";import"./get-Bi1X6SaN.js";import"./renderedTicksSlice-CQdRGRjO.js";import"./axisSelectors-BZHqEull.js";import"./d3-scale-DE_Hgqpo.js";import"./resolveDefaultProps-EHkzfb1T.js";import"./isWellBehavedNumber-c1UrbL-U.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DqNanfGA.js";import"./chartDataContext-CvNOo9hu.js";import"./CategoricalChart-D1W7mN8j.js";import"./CartesianAxis-Da1hp6ds.js";import"./Layer-DnbVmNuk.js";import"./Text-hRlne3oO.js";import"./DOMUtils-BF23epo9.js";import"./Label-Dbayb2l5.js";import"./ZIndexLayer-BIs2Zanq.js";import"./types-B4cCoOJo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-C6h_j7RC.js";import"./symbol-CTVt6zDq.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C5ufnYD8.js";import"./uniqBy-P4FasXrF.js";import"./iteratee-DvCHZIMY.js";import"./Curve-CDHj8CQ7.js";import"./step-DP0d975A.js";import"./AnimatedItems-BaefG7CY.js";import"./useAnimationId-v_oz9FgZ.js";import"./ActivePoints-CUhH8-xa.js";import"./Dot-ColQ7WFS.js";import"./RegisterGraphicalItemId-D8VEn74g.js";import"./ErrorBarContext-eSnspfxP.js";import"./GraphicalItemClipPath-DMJ0OWmb.js";import"./SetGraphicalItem-CpRH4JNE.js";import"./getRadiusAndStrokeWidthFromDot-5SFlDmNV.js";import"./ActiveShapeUtils-DA9DBhpV.js";import"./Cross-D94un-X_.js";import"./Rectangle-BxeEDcjB.js";import"./util-Dxo8gN5i.js";import"./Sector-C6wPNvhw.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};
