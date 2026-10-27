import{r as p,R as t}from"./iframe-DsuaRm2b.js";import{L as n}from"./LineChart-B00fYb-X.js";import{R as s}from"./zIndexSlice-BHCK5tg8.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-C4KbAzbG.js";import{X as d}from"./XAxis-DLqBMq0Q.js";import{Y as y}from"./YAxis-dn2GRGzH.js";import{L as u}from"./Legend-CfNgZIbH.js";import{L as h}from"./Line-DtkCR5A2.js";import{T as g}from"./Tooltip-e9xtskO3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B7rLRibb.js";import"./resolveDefaultProps-tBmiBd0v.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CXh7ZK0v.js";import"./throttle-CuCThFR3.js";import"./index-BjBwgNd2.js";import"./index-DLanYFve.js";import"./polarAxisSelectors-ZY9QidmG.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D1FvEoQ3.js";import"./index-BqhjsQ14.js";import"./index-vSo2F5h4.js";import"./renderedTicksSlice-W2QLd4az.js";import"./index-C0CHU-c7.js";import"./CartesianChart-CFB_Qy3A.js";import"./ZIndexPortal-DYBSHocn.js";import"./CategoricalChart-Do18W6-M.js";import"./CartesianAxis-BCG5Rps_.js";import"./Layer-Bvg1MEF5.js";import"./Text-7KEzSR95.js";import"./pageBackground-gwgMpjOQ.js";import"./ZIndexLayer-FbasJJ13.js";import"./Label-Bg_SjTDz.js";import"./dataEntryStyles-CVVg9ITz.js";import"./types-BVjfEegt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Sb1I6V5y.js";import"./symbol-DiPBPxxC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BH16anoB.js";import"./uniqBy-BvBJ9JSl.js";import"./iteratee-D6J9B8SK.js";import"./isArguments-yB-y1yaH.js";import"./Curve-B54D09ht.js";import"./step-CnnXSPZn.js";import"./LabelList-B1g8Cfod.js";import"./ActivePoints-BIHfIwHR.js";import"./Dot-CLio3VMY.js";import"./activeStyles-BEbyAFUN.js";import"./useAnimationId-BDMFeBiK.js";import"./RegisterGraphicalItemId-ovNP-fPN.js";import"./ErrorBarContext-BJw3_1Vq.js";import"./SetGraphicalItem-DN4Prq4p.js";import"./getRadiusAndStrokeWidthFromDot-CuYo3i94.js";import"./ActiveShapeUtils-z3i_FVcp.js";import"./useEffectiveDataKey-DBOtZYxA.js";import"./Cross-CHnu3AiU.js";import"./Rectangle-Dz3Crc0K.js";import"./util-Dxo8gN5i.js";import"./Sector-jsLncyAA.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
