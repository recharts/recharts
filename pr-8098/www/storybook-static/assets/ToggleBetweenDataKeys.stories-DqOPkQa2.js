import{r as p,R as t}from"./iframe-C-1IryXX.js";import{L as n}from"./LineChart-XFbEyWy3.js";import{R as s}from"./zIndexSlice-fsCRj6jn.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Cfx84kn5.js";import{X as d}from"./XAxis-DgA8soXs.js";import{Y as y}from"./YAxis-BNLMUv-C.js";import{L as u}from"./Legend-w7k-Gnvk.js";import{L as h}from"./Line-Dr6pYibn.js";import{T as g}from"./Tooltip-DCcQpeDs.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bb_GJAnC.js";import"./resolveDefaultProps-BhlxPQQ0.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DnbooZ92.js";import"./throttle-_r7dS2f6.js";import"./index-D_guE_NV.js";import"./index-BpW2h4nW.js";import"./polarAxisSelectors-nNfiNjC3.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CK0ZBavL.js";import"./index-BM9qHJ3l.js";import"./index-CaHSXMyC.js";import"./renderedTicksSlice-B4PG9UaR.js";import"./index-BbeXMPlB.js";import"./CartesianChart-X1Ss8Xb_.js";import"./ZIndexPortal-D1pWS7G9.js";import"./CategoricalChart-CCP7izw9.js";import"./CartesianAxis-Boy6gEfE.js";import"./Layer-BY_4_n1M.js";import"./Text-bsivD33T.js";import"./pageBackground-BsKy__Zx.js";import"./ZIndexLayer-DcusPv6z.js";import"./Label-BTNrgHMM.js";import"./dataEntryStyles-RoHSwMuf.js";import"./types-Ca1J50vn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DkSC4tBr.js";import"./symbol-D09AuR3g.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CiN9yCdN.js";import"./uniqBy-CJHXXqVq.js";import"./iteratee-02qgE8DQ.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BZP4AtoJ.js";import"./step-D97QNVl7.js";import"./LabelList-BgJAhVhH.js";import"./ActivePoints-Kxn86qrL.js";import"./Dot-DKVTZ3_d.js";import"./activeStyles-DZ3GRzLP.js";import"./useAnimationId-B4AGcQCE.js";import"./RegisterGraphicalItemId-BAsbW75f.js";import"./ErrorBarContext-CMFEKiC-.js";import"./SetGraphicalItem-DzD-3glG.js";import"./getRadiusAndStrokeWidthFromDot-CSG42cOl.js";import"./ActiveShapeUtils-B19_Z8K8.js";import"./useEffectiveDataKey-B3UErnsT.js";import"./Cross-D-TYHapV.js";import"./Rectangle-BQECHtGD.js";import"./util-Dxo8gN5i.js";import"./Sector-Cq5EH9uE.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
