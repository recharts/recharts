import{r as n,R as t}from"./iframe-Cdy9NYu9.js";import{L as p}from"./LineChart-BB6uvWNj.js";import{R as s}from"./zIndexSlice-C2_e4Jbl.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DKOeRVem.js";import{X as d}from"./XAxis-BJhS5a8e.js";import{Y as y}from"./YAxis-B-BKBDfM.js";import{L as u}from"./Legend-DM-Rt-nv.js";import{L as h}from"./Line-L0enbhhs.js";import{T as g}from"./Tooltip-N88xWPck.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D4IxCG7a.js";import"./index-Bcb8rKnp.js";import"./index-CaPeX6FT.js";import"./index-BZ9Fe99a.js";import"./index-DsFTIXEw.js";import"./throttle-t9dcJkBi.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DWXzhFAM.js";import"./axisSelectors-ByTu7Vcx.js";import"./resolveDefaultProps-CG6sO-97.js";import"./isWellBehavedNumber-CJulqOvD.js";import"./d3-scale-DTNVMcZf.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C4yHSY79.js";import"./chartDataContext-C2Y_0_Vz.js";import"./CategoricalChart-BucM35ky.js";import"./CartesianAxis-DA9B6fNW.js";import"./Layer-Hq_4dnpr.js";import"./Text-DMhYSqT7.js";import"./DOMUtils-DBN2rZ60.js";import"./Label-BIfqnFjj.js";import"./ZIndexLayer-BxN8McgO.js";import"./types-C9NSKw4l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DZGbGfC4.js";import"./symbol-CnhKgttC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DysDxY94.js";import"./uniqBy-LvrlaU3A.js";import"./iteratee-bdNJUmyF.js";import"./Curve-CX0sCCUr.js";import"./step-Dtj-YZD0.js";import"./AnimatedItems-BSQ2aAGr.js";import"./useAnimationId-DO_gOZxo.js";import"./ActivePoints-MMq034Vb.js";import"./Dot-B4nh6ym9.js";import"./RegisterGraphicalItemId-WMzFziJE.js";import"./ErrorBarContext-B4XuHyPg.js";import"./GraphicalItemClipPath-GIg3EkdR.js";import"./SetGraphicalItem-CgtgTGFl.js";import"./getRadiusAndStrokeWidthFromDot-BJvaJANi.js";import"./ActiveShapeUtils-CMZtEUn5.js";import"./Cross-DfwotlG2.js";import"./Rectangle-zLcbgT_c.js";import"./util-Dxo8gN5i.js";import"./Sector-CzJudC60.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
