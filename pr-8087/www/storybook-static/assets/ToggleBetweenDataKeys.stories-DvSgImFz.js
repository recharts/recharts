import{r as p,R as t}from"./iframe-DqyoK0ud.js";import{L as n}from"./LineChart-DcjIzyNw.js";import{R as s}from"./zIndexSlice-BLzMP0pQ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CsF-hHng.js";import{X as d}from"./XAxis-BatUM5pq.js";import{Y as y}from"./YAxis-_lbVlQrz.js";import{L as u}from"./Legend-gHqRthhy.js";import{L as h}from"./Line-DO5n4YO0.js";import{T as g}from"./Tooltip-CR34NQkj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bv3_Hj5n.js";import"./resolveDefaultProps-Ck8pmjzH.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CFa3shM-.js";import"./throttle-Dn4JCjly.js";import"./index-BsuCzGf5.js";import"./index-CssgCrFq.js";import"./polarAxisSelectors-CBUZ9Z3j.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-oZSie1D-.js";import"./index-CtviIcDK.js";import"./index-BwS7ULIY.js";import"./renderedTicksSlice-DhCNe_6s.js";import"./index-wVxsoSnH.js";import"./CartesianChart-_Aa3OKSl.js";import"./chartDataContext-MbnhVXSW.js";import"./CategoricalChart-EiDYPGiV.js";import"./CartesianAxis-MuFUII6s.js";import"./Layer-svnx0Bdz.js";import"./Text-2V5_vcbB.js";import"./pageBackground-DCkPUiBo.js";import"./useId-DxxYvKaU.js";import"./ZIndexLayer-DDKk2bqL.js";import"./Label-C_IP7EJJ.js";import"./dataEntryStyles-sIqJlf-4.js";import"./types-DD3eyhWj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CYwitPRM.js";import"./symbol-DWxTznCL.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C0YlHWpD.js";import"./uniqBy-CGKsPvnn.js";import"./iteratee-BKsZSq5H.js";import"./isArguments-yB-y1yaH.js";import"./Curve-B4FKLROM.js";import"./step-DDV9RjiH.js";import"./activeStyles-D0nGCC2C.js";import"./useAnimationId-b5BOeEdT.js";import"./ActivePoints-B12yNU4r.js";import"./Dot-BOVBX4q2.js";import"./RegisterGraphicalItemId-DywfiWqL.js";import"./ErrorBarContext-CHgLAGYu.js";import"./SetGraphicalItem-DDAjd9Yt.js";import"./getRadiusAndStrokeWidthFromDot-DMbsIH9n.js";import"./ActiveShapeUtils-HHjD57n-.js";import"./useEffectiveDataKey-D-FiIxk6.js";import"./Cross-DyA4am9f.js";import"./Rectangle-DW2Nkmcm.js";import"./util-Dxo8gN5i.js";import"./Sector-DX9pAAzL.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
