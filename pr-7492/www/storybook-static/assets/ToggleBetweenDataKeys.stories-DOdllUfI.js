import{r as n,R as t}from"./iframe-Cmv2uZik.js";import{L as p}from"./LineChart-DULh8e8Q.js";import{R as s}from"./zIndexSlice-kpWLrDSf.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BV-bcAfI.js";import{X as d}from"./XAxis-BHNxMNK7.js";import{Y as y}from"./YAxis-BKFIWsdJ.js";import{L as u}from"./Legend-mUAAvKi4.js";import{L as h}from"./Line-DqG_n08P.js";import{T as g}from"./Tooltip-D3bM9iro.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B1y6zL6A.js";import"./index-F92hSDpv.js";import"./index-Blrf4sdp.js";import"./index-1nWXUQRt.js";import"./index-BODQ_clV.js";import"./immer-BpVJ12_R.js";import"./get-26q7mLtB.js";import"./renderedTicksSlice-De354RnA.js";import"./axisSelectors-DN7Qk49e.js";import"./d3-scale-C0Ts3d9o.js";import"./resolveDefaultProps-CVMWQw0A.js";import"./isWellBehavedNumber-DPLnuG7C.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Culr-Wpg.js";import"./chartDataContext-DDdGqXS2.js";import"./CategoricalChart-BzXggkHJ.js";import"./CartesianAxis-BCDXmj_o.js";import"./Layer-BSNuGngv.js";import"./Text-579iQBnG.js";import"./DOMUtils-BF0MLXBa.js";import"./Label-COZByZz9.js";import"./ZIndexLayer-D1dh8rie.js";import"./types-DtyijqTI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-C9K35YDq.js";import"./symbol-UjsPHlP5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CSu7wa8E.js";import"./uniqBy-Bk8Zomuw.js";import"./iteratee-DwbYjoyw.js";import"./Curve-DX9DZst-.js";import"./step-DGX6e4k6.js";import"./AnimatedItems-lktoz8YW.js";import"./useAnimationId-9e7OJi4C.js";import"./ActivePoints-DII5AyZv.js";import"./Dot-Drefe2Tr.js";import"./RegisterGraphicalItemId-snzh5Pbt.js";import"./ErrorBarContext-kFIcQTi0.js";import"./GraphicalItemClipPath-BiRXHsBx.js";import"./SetGraphicalItem-HiTeWvOV.js";import"./getRadiusAndStrokeWidthFromDot-Bl4mU7H4.js";import"./ActiveShapeUtils-Dvr59oga.js";import"./Cross-CtkqI7lB.js";import"./Rectangle-OJfYPkwR.js";import"./util-Dxo8gN5i.js";import"./Sector-DBPKh_N3.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
