import{r as p,R as t}from"./iframe-qp48uAQ7.js";import{L as n}from"./LineChart-Bybl5B6K.js";import{R as s}from"./zIndexSlice-KCJej1vF.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DDmVqEQy.js";import{X as d}from"./XAxis-DBjPaOy0.js";import{Y as y}from"./YAxis-DlgcwvPx.js";import{L as u}from"./Legend-BgAjc9md.js";import{L as h}from"./Line-DYWFyVWx.js";import{T as g}from"./Tooltip-Dar0g843.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-1rMBmo6H.js";import"./resolveDefaultProps-H_yb4yD-.js";import"./get-cF5BDHN6.js";import"./axisSelectors-EQaPQOEj.js";import"./throttle-DidOwtMq.js";import"./index-neNyiLUw.js";import"./index-BV3Lw9OX.js";import"./polarAxisSelectors-B_tUAyjC.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C1UROyMV.js";import"./index-BBO10kZC.js";import"./index-DSRi-YPI.js";import"./renderedTicksSlice-BsS9ZrzM.js";import"./index-D8wT4PmW.js";import"./fillDefinitions-0M80HuO4.js";import"./CartesianChart-2yA0qqcE.js";import"./chartDataContext-BjUDfEUJ.js";import"./CategoricalChart-Dz_UBlxz.js";import"./CartesianAxis-CvElXQWV.js";import"./Layer-3O8BuD1C.js";import"./Text-9axAMSSa.js";import"./ZIndexLayer-B5vbT5ul.js";import"./Label-Sje2x2ae.js";import"./types-B-Gso0-n.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DxoHFJIb.js";import"./symbol-Wa3jzChJ.js";import"./path-BBMZd4YL.js";import"./useElementOffset-Dp4_SaWM.js";import"./uniqBy-Cnk-Rop6.js";import"./iteratee-CnEj035Y.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-DPhFQhmH.js";import"./Curve-D9eNKl8H.js";import"./step-DYSBTYxM.js";import"./dataEntryStyles-MmJGBd3d.js";import"./ActivePoints-AeR92xz-.js";import"./Dot-CZVpULkY.js";import"./activeStyles-CvvZZ1RN.js";import"./useAnimationId-gBLR8eku.js";import"./ErrorBarContext-BOAdtyxi.js";import"./SetGraphicalItem-BRHHFk9x.js";import"./ActiveShapeUtils--ilFziir.js";import"./useEffectiveDataKey-81Od8ro-.js";import"./Cross-CVzQj4ub.js";import"./Rectangle-Cfn5NBZC.js";import"./util-Dxo8gN5i.js";import"./Sector-CaOTB0DJ.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
