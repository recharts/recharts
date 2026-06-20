import{r as n,R as t}from"./iframe-DhLiHYA9.js";import{L as p}from"./LineChart-DG3fsMuf.js";import{R as s}from"./zIndexSlice-0EuGNLI-.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CEFwFbVr.js";import{X as d}from"./XAxis-BpfFXf4g.js";import{Y as y}from"./YAxis-lwpN76oK.js";import{L as u}from"./Legend-CheapvBe.js";import{L as h}from"./Line-CUQX2rtT.js";import{T as g}from"./Tooltip-N3umdugN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CvYHcQFm.js";import"./index-xOxo7x3f.js";import"./index-DKmBjdDb.js";import"./index-NG-Tdzng.js";import"./index-BeAu05Eb.js";import"./immer-T8RsDcjn.js";import"./get-BqOTE_u_.js";import"./renderedTicksSlice-B1LCQJVr.js";import"./axisSelectors-DL47bbYB.js";import"./d3-scale-B_WyWKG3.js";import"./resolveDefaultProps-CBPzFJH6.js";import"./isWellBehavedNumber-BNidD9Ks.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BdXEaLDP.js";import"./chartDataContext-Bcb5nIkO.js";import"./CategoricalChart-CN-mt1-6.js";import"./CartesianAxis-dYZ4VxrX.js";import"./Layer-DglRvEKa.js";import"./Text-D4hUpX6-.js";import"./DOMUtils-BQBCpy3J.js";import"./Label-Cv4QmxCb.js";import"./ZIndexLayer-CvBhZ60T.js";import"./types-CH1fGuRR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BmHfVAZq.js";import"./symbol-CtUUOtbn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-fe1mw0WL.js";import"./uniqBy-BN7HPTpI.js";import"./iteratee-BBagmPW9.js";import"./Curve-rXpWLPqx.js";import"./step-DzpE9YVj.js";import"./AnimatedItems-C2gGUiAe.js";import"./useAnimationId-PUY_wn7H.js";import"./ActivePoints-CK5L63lz.js";import"./Dot-pp5BV2FH.js";import"./RegisterGraphicalItemId-BJxK6F3S.js";import"./ErrorBarContext-BjQaCHVv.js";import"./GraphicalItemClipPath-Bu7CM1zV.js";import"./SetGraphicalItem-t7MzgWgu.js";import"./getRadiusAndStrokeWidthFromDot-DKfDk9su.js";import"./ActiveShapeUtils-CPYzaIXa.js";import"./Cross-CyCVJVF4.js";import"./Rectangle-Bk9D_f7f.js";import"./util-Dxo8gN5i.js";import"./Sector-DlqSWAUI.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
