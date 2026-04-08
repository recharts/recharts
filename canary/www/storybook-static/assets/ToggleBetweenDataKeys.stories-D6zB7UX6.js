import{r as n,e as t}from"./iframe-GFfTjQoK.js";import{L as p}from"./LineChart-DHSSc52P.js";import{R as s}from"./arrayEqualityCheck-rTBxpMje.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D6MTnGUA.js";import{X as d}from"./XAxis-DKH_cPy1.js";import{Y as y}from"./YAxis-BZdMUrT_.js";import{L as h}from"./Legend-BemLAAW3.js";import{L as u}from"./Line-BM3xvdML.js";import{T as g}from"./Tooltip-B9Il5g_L.js";import{R as K}from"./RechartsHookInspector-B-bvN_Hp.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C0HFJBeI.js";import"./index-DXddhZW0.js";import"./immer-DuJeroaq.js";import"./hooks-CqeOQ7eW.js";import"./axisSelectors-L84MoTjP.js";import"./d3-scale-BPfRQFr_.js";import"./zIndexSlice-BfN4rN3H.js";import"./renderedTicksSlice-DKYVxNAz.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D-2ecpa2.js";import"./chartDataContext-FYXA0LCO.js";import"./CategoricalChart-B30LS6x5.js";import"./resolveDefaultProps-BjWq3AFN.js";import"./CartesianAxis-Cx84Q0BH.js";import"./Layer-CKdwahrM.js";import"./Text-CMg3-e7E.js";import"./DOMUtils-D3LQizf9.js";import"./Label-B7hBq0Ji.js";import"./ZIndexLayer-BaMuJtoq.js";import"./types-CLB7ynuJ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-I86a4FCe.js";import"./symbol-B1lNwkQx.js";import"./step-BFgO3zi8.js";import"./useElementOffset-C2BhWW9o.js";import"./uniqBy-CZKOzj_D.js";import"./iteratee-DZbtrRGQ.js";import"./ReactUtils-D17-4l-2.js";import"./ActivePoints-DRajpHvZ.js";import"./Dot-zVj_nUxC.js";import"./RegisterGraphicalItemId-BcS1kKIp.js";import"./ErrorBarContext-CFOED4N_.js";import"./GraphicalItemClipPath-Bgdp1vAv.js";import"./SetGraphicalItem-mKeT8kkZ.js";import"./useAnimationId-Yz3h7jnZ.js";import"./getRadiusAndStrokeWidthFromDot-DW9LVMsc.js";import"./ActiveShapeUtils-rLEzUBWB.js";import"./isPlainObject-DZFhrpuV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CYvKy2lW.js";import"./Trapezoid-BzxYlSmA.js";import"./Sector-BM4VUaxN.js";import"./Curve-mNHJmuek.js";import"./Cross-C41OJfy-.js";import"./index-DEk02y8i.js";import"./ChartSizeDimensions-C4mVk4KC.js";import"./OffsetShower-UIogbUR8.js";import"./PlotAreaShower-DSjypVDX.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
