import{r as n,R as t}from"./iframe-BWYv0W0I.js";import{L as p}from"./LineChart-BryfnGyK.js";import{R as s}from"./zIndexSlice-BZjtJtRO.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-3IdHAIbq.js";import{X as d}from"./XAxis-DpTHfSKL.js";import{Y as y}from"./YAxis-DIG6TcZO.js";import{L as u}from"./Legend-D42dlFNp.js";import{L as h}from"./Line-BatACtMg.js";import{T as g}from"./Tooltip-BgsINPYu.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-A48iA3eZ.js";import"./index-C30dpYE2.js";import"./index-ByNF5ywv.js";import"./index-DTxMd3-u.js";import"./index-BcXaHiqG.js";import"./immer-BPqm6WO1.js";import"./get-YpvzSERN.js";import"./renderedTicksSlice-BylsjMl6.js";import"./axisSelectors-BqS5J0kn.js";import"./d3-scale-CFHPl3Hx.js";import"./resolveDefaultProps-_5I5KHm0.js";import"./isWellBehavedNumber-BvLe-n8Z.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CWrMrl0B.js";import"./chartDataContext-8Yx6Y713.js";import"./CategoricalChart-COWvBEEg.js";import"./CartesianAxis-DUktxQyy.js";import"./Layer-Bj1H698J.js";import"./Text-z-woKoAn.js";import"./DOMUtils-CcdNUrj8.js";import"./Label-Df5r-7el.js";import"./ZIndexLayer-DFHa7v_x.js";import"./types-Dytxgf6V.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DwyX2t_a.js";import"./symbol-B59mLEvR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DLPfaP7i.js";import"./uniqBy-Bag5RbDs.js";import"./iteratee-ByXW7YOK.js";import"./Curve-u414SiC4.js";import"./step-FVBZPP9Y.js";import"./AnimatedItems-DhxwbWlw.js";import"./useAnimationId-CZnp92c4.js";import"./ActivePoints-_ILc4AHk.js";import"./Dot-DQMh135C.js";import"./RegisterGraphicalItemId-CK6cp7E5.js";import"./ErrorBarContext-CwrVQcWY.js";import"./GraphicalItemClipPath-lDfebASI.js";import"./SetGraphicalItem-DQ0Lh0bj.js";import"./getRadiusAndStrokeWidthFromDot-DsWQpG0J.js";import"./ActiveShapeUtils-iodju3ZT.js";import"./Cross-nCh6kSUZ.js";import"./Rectangle-CT2eea31.js";import"./util-Dxo8gN5i.js";import"./Sector-zHxlDDaP.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
