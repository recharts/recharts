import{r as n,R as t}from"./iframe-CqMmO9Xr.js";import{L as p}from"./LineChart-BVk6aRb3.js";import{R as s}from"./zIndexSlice-DFZjSdbQ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BqSYQq_O.js";import{X as d}from"./XAxis-D2oZKEvW.js";import{Y as y}from"./YAxis-saOkQHhA.js";import{L as u}from"./Legend-4VUwXk4m.js";import{L as h}from"./Line-CB7u-l8s.js";import{T as g}from"./Tooltip-DyNXM7du.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CnEYhKO1.js";import"./index-4Y0h8bRC.js";import"./index-DUkcUndf.js";import"./index-DM7XJZkc.js";import"./index-C7a4ZWQb.js";import"./throttle-QEuO__ZS.js";import"./get-Bd1LrVMt.js";import"./renderedTicksSlice-CRwA1chB.js";import"./axisSelectors-DNmvLHVP.js";import"./d3-scale-QPfz2uTg.js";import"./resolveDefaultProps-B4mfWg2L.js";import"./isWellBehavedNumber-BQfelr5r.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-9yjUQzO4.js";import"./chartDataContext-C_w1UWdz.js";import"./CategoricalChart-D2FUAiwR.js";import"./CartesianAxis-CazwgKuv.js";import"./Layer-B_iZYaDE.js";import"./Text-CEmf9w7F.js";import"./DOMUtils-Ds2cGO5I.js";import"./Label-I1gAWal3.js";import"./ZIndexLayer-pq6FNmg5.js";import"./types-DVuTAt9Y.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DGe5NEHH.js";import"./symbol-BTAzmh16.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DPAYmMQw.js";import"./uniqBy-D3CQlvr-.js";import"./iteratee-iX9KB4Pz.js";import"./Curve-DqnHYjX3.js";import"./step-CnWsiLlx.js";import"./AnimatedItems-CVpfsiGm.js";import"./useAnimationId-CUS7kjlN.js";import"./ActivePoints-Cv3N35qL.js";import"./Dot-DuJvVQ71.js";import"./RegisterGraphicalItemId-CKAuGKYu.js";import"./ErrorBarContext-BhL3whwn.js";import"./GraphicalItemClipPath-BKxNv1YA.js";import"./SetGraphicalItem-DZlHA3su.js";import"./getRadiusAndStrokeWidthFromDot-Ctxaag6G.js";import"./ActiveShapeUtils-B4C1Nqw7.js";import"./Cross-DFMW6XBY.js";import"./Rectangle-DB2MZslE.js";import"./util-Dxo8gN5i.js";import"./Sector-DbbW-PCY.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
