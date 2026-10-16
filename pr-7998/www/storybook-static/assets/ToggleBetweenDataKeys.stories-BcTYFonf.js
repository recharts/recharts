import{r as p,R as t}from"./iframe--2AVw2Ig.js";import{L as n}from"./LineChart-CyqqFFib.js";import{R as s}from"./zIndexSlice-DY-KmnMj.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CoNoBhjb.js";import{X as d}from"./XAxis-DR36Dp_O.js";import{Y as y}from"./YAxis-B_xGwaHy.js";import{L as u}from"./Legend-DYM93m9A.js";import{L as h}from"./Line-_Cuhdt7D.js";import{T as g}from"./Tooltip-D8Knn-sQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-EJRMqcbQ.js";import"./resolveDefaultProps-B29QL1c4.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CDUrw1Me.js";import"./throttle-BaGyyE0T.js";import"./index-rGVVlfKz.js";import"./index-CbZkT_u5.js";import"./isWellBehavedNumber-BCwXwBOh.js";import"./d3-scale-CuVmq_8Z.js";import"./index-BTmio8NJ.js";import"./index-_nleLnFM.js";import"./renderedTicksSlice-ViCmPO8v.js";import"./index-DVblcXeN.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DwfabjuB.js";import"./chartDataContext-BsjWdA7j.js";import"./CategoricalChart-D1mzQ8Dl.js";import"./CartesianAxis-khS1fmQe.js";import"./Layer-eIGZDbY8.js";import"./Text-Hvkjn3b4.js";import"./pageBackground-DkdcD7r5.js";import"./useId-CUoDw_aI.js";import"./useBackwardsCompatibleTheme-CKvuuYac.js";import"./Label-DUHcPYlD.js";import"./ZIndexLayer-KCSLP8mG.js";import"./types-DZjr1JEr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DZkC9C8i.js";import"./symbol-4r17nwA_.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C3tMcbQq.js";import"./uniqBy-BT1kOl9J.js";import"./iteratee-BUnf2Li6.js";import"./Curve-DnLexwZ8.js";import"./step-CCcO8MdV.js";import"./activeStyles-CzHB9dwV.js";import"./useAnimationId-CHJ3Zhtv.js";import"./dataEntryStyles-DeEjeZX4.js";import"./ActivePoints-BD1pKs86.js";import"./Dot-D-Ut_Ero.js";import"./ErrorBarContext-CPUPPNIF.js";import"./GraphicalItemClipPath-DBN3vY8J.js";import"./SetGraphicalItem-CFoIf7JL.js";import"./getRadiusAndStrokeWidthFromDot-D3N_jfqh.js";import"./ActiveShapeUtils-Cos36bQq.js";import"./useEffectiveDataKey-mwtlbWZk.js";import"./Cross-DBhkKTPh.js";import"./Rectangle-CQO9mUlA.js";import"./util-Dxo8gN5i.js";import"./Sector-D9_TvkfH.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
