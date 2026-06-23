import{r as n,R as t}from"./iframe-Csitbru2.js";import{L as p}from"./LineChart-D2XQ9HQT.js";import{R as s}from"./zIndexSlice-BG9qkId4.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BnYcAmsk.js";import{X as d}from"./XAxis-GSkuRjug.js";import{Y as y}from"./YAxis-77x_J4Mg.js";import{L as u}from"./Legend-1-fEOdlM.js";import{L as h}from"./Line-Dlr3zu4o.js";import{T as g}from"./Tooltip-DUtc5Of5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CJrqmvjr.js";import"./index-BUYeukup.js";import"./index-3rUoeV7Y.js";import"./index-DY2vKHdm.js";import"./index-82VYn5V_.js";import"./immer-DZIxrqNF.js";import"./get-DUq6txa7.js";import"./renderedTicksSlice-DArjmdb9.js";import"./axisSelectors-BKzg4uht.js";import"./d3-scale-ruaAtfZ3.js";import"./resolveDefaultProps-zVEOPP5d.js";import"./isWellBehavedNumber-_7tyBBfO.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CQCv9B95.js";import"./chartDataContext-5AtwXdKv.js";import"./CategoricalChart-CH47Oqt0.js";import"./CartesianAxis-625Se9fv.js";import"./Layer-CzMJ0aPe.js";import"./Text-CCtHFY4v.js";import"./DOMUtils-QGCjuYeS.js";import"./Label-ipIcHgJV.js";import"./ZIndexLayer-BXMbhl4p.js";import"./types-CUGjGCsQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DTyRS-9_.js";import"./symbol-6fV8HDNc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BFAuBBXU.js";import"./uniqBy-BiKJ-0mt.js";import"./iteratee-DCHecb74.js";import"./Curve-B3wzhPX7.js";import"./step-Cvs1IljU.js";import"./AnimatedItems-nKsPTqFW.js";import"./useAnimationId-co5Blost.js";import"./ActivePoints-CJkfV15x.js";import"./Dot-Wnlr8zt6.js";import"./RegisterGraphicalItemId-4_42U9Tt.js";import"./ErrorBarContext-CNfKV2VL.js";import"./GraphicalItemClipPath-DmSSVMHB.js";import"./SetGraphicalItem-H4qAywSp.js";import"./getRadiusAndStrokeWidthFromDot-BVPCo9J9.js";import"./ActiveShapeUtils-BJwvh2Jx.js";import"./Cross-CXKlPB_s.js";import"./Rectangle-Bp3a_jVT.js";import"./util-Dxo8gN5i.js";import"./Sector-r30QQkHv.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
