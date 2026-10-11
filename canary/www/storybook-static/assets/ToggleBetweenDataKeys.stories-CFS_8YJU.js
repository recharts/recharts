import{r as p,R as t}from"./iframe-DfTkQmXX.js";import{L as n}from"./LineChart-DIiua3g_.js";import{R as s}from"./zIndexSlice-CK1KsdwK.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CsXp8hDA.js";import{X as d}from"./XAxis-DoFqVwCs.js";import{Y as y}from"./YAxis-D7HuTQbC.js";import{L as u}from"./Legend-kahq9B90.js";import{L as h}from"./Line-BdKxadRr.js";import{T as g}from"./Tooltip-ClSGuEgW.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DxAPF2hj.js";import"./resolveDefaultProps-DzYEjrKC.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BlOH_04s.js";import"./throttle-BVJmkUn0.js";import"./index-Ba59U2Y8.js";import"./index-CsAN8_eV.js";import"./isWellBehavedNumber-BsgXnYfL.js";import"./d3-scale-DmiuGQyG.js";import"./index-CKqFjhNi.js";import"./index-MdrQnTxf.js";import"./renderedTicksSlice-Br06-4O3.js";import"./index-B9XVTu1f.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DTtp-RK_.js";import"./chartDataContext-0kN3l1x_.js";import"./CategoricalChart-W3tTj6f2.js";import"./CartesianAxis-DeGU3T7P.js";import"./Layer-B_W6fsjz.js";import"./Text-B1vqPWff.js";import"./pageBackground-Bwi0dJpd.js";import"./useId-Dtq_j8MX.js";import"./useBackwardsCompatibleTheme-19GRtDCt.js";import"./Label-SXOQPAQ7.js";import"./ZIndexLayer-DPEED4Hn.js";import"./types-D3zQeAKc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CWELWbKP.js";import"./symbol-z0GjC0cu.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cn3V7naw.js";import"./uniqBy-DNn1deX1.js";import"./iteratee-BgZoIgJ1.js";import"./Curve-gJd5arqO.js";import"./step-BPp5YbXE.js";import"./activeStyles-BILREjwj.js";import"./useAnimationId-BR_dOTuF.js";import"./dataEntryStyles-U8DJYbqc.js";import"./ActivePoints-dsaCSJiB.js";import"./Dot-CX7jfzvx.js";import"./ErrorBarContext-CN6zyEVc.js";import"./GraphicalItemClipPath-xajKPwIx.js";import"./SetGraphicalItem-CbFA-TWr.js";import"./getRadiusAndStrokeWidthFromDot-DArtm6VW.js";import"./ActiveShapeUtils-CGTBxphT.js";import"./useGraphicalItemIdentity-C9Z0QIkA.js";import"./Cross-D6FGK7NQ.js";import"./Rectangle-Ct4TwQSW.js";import"./util-Dxo8gN5i.js";import"./Sector-DrDJPhCX.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
