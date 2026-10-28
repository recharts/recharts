import{r as p,R as t}from"./iframe-CUml5YCN.js";import{L as n}from"./LineChart-ViH0G8Dy.js";import{R as s}from"./zIndexSlice-Duug8EOo.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BG3A01XW.js";import{X as d}from"./XAxis-DS-AJg-5.js";import{Y as y}from"./YAxis-CGT5tGsT.js";import{L as u}from"./Legend-Dy_w-u1K.js";import{L as h}from"./Line-HXIUzKg7.js";import{T as g}from"./Tooltip-DnZ-jfwM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-jAZSY4Pq.js";import"./resolveDefaultProps-bEvLqOBJ.js";import"./get-cF5BDHN6.js";import"./axisSelectors-B2HI9EL2.js";import"./throttle-00pBoixS.js";import"./index-AklA9_0y.js";import"./index-DLBpPTx4.js";import"./polarAxisSelectors-DMpK1CYb.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CEanJ2qJ.js";import"./index-BI0kgcsn.js";import"./index-Bs8UXAbZ.js";import"./renderedTicksSlice-BxDeHuoS.js";import"./index-a6VaArhG.js";import"./CartesianChart-BkZTrO_H.js";import"./ZIndexPortal-C_VlO0o9.js";import"./CategoricalChart-BvHPlluA.js";import"./CartesianAxis-BVj8a-va.js";import"./Layer-BUAUs1E0.js";import"./Text-C-J7rFVH.js";import"./DOMUtils-BO2yqkFt.js";import"./ZIndexLayer-BY73hU8m.js";import"./Label-Co-nrknN.js";import"./types-BdRO-t6j.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-IX5_Qg4V.js";import"./symbol-Ft1metgp.js";import"./path-DyVhHtw_.js";import"./FillDefinition-DVWLhRTd.js";import"./dataEntryStyles-DqljzTne.js";import"./useElementOffset-CYLtSqO9.js";import"./uniqBy-wScc6s2S.js";import"./iteratee-BSvw-Q2D.js";import"./isArguments-yB-y1yaH.js";import"./Curve-MMF3Mq57.js";import"./step-CbD7Fw7p.js";import"./LabelList-1BV2-5OM.js";import"./ActivePoints-DmxPU0dU.js";import"./Dot-Bb0NnVdB.js";import"./activeStyles-DSIZcOzy.js";import"./useAnimationId-CTU-teyX.js";import"./ErrorBarContext-Bo1VUNfm.js";import"./SetGraphicalItem-IwBxHE7j.js";import"./getRadiusAndStrokeWidthFromDot-B5I8H9q6.js";import"./ActiveShapeUtils-DWo-vRVn.js";import"./useEffectiveDataKey-11clGpT5.js";import"./Cross-boGLgjf_.js";import"./Rectangle-Ayj5uTYD.js";import"./util-Dxo8gN5i.js";import"./Sector-B3hFZlEZ.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
