import{r as p,R as t}from"./iframe-DDlpcCnl.js";import{L as n}from"./LineChart-BKwIHSgj.js";import{R as s}from"./zIndexSlice-IyRnOGSL.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Dq_IMNCb.js";import{X as d}from"./XAxis-BoZpTebr.js";import{Y as y}from"./YAxis-DLVtcSn1.js";import{L as u}from"./Legend-D1luNBim.js";import{L as h}from"./Line-BeAdfBzZ.js";import{T as g}from"./Tooltip-KqHdu6QC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CEsAbTQz.js";import"./resolveDefaultProps-DdcIcuy0.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DJ_js28E.js";import"./throttle-BEGaSLni.js";import"./index-BrGVAlaK.js";import"./index-DgZ0S6kR.js";import"./polarAxisSelectors-CmUB7T9A.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C8E3wvOe.js";import"./index-DQ5N6C5N.js";import"./index-CVLdebNc.js";import"./renderedTicksSlice-CDUEc77e.js";import"./index-DwERpMJ8.js";import"./fillDefinitions-B51hWH8m.js";import"./CartesianChart-EWd5fLMj.js";import"./ZIndexPortal-cCqCXZCV.js";import"./CategoricalChart-fIZxwY-X.js";import"./CartesianAxis-B9o_pqzh.js";import"./Layer-G7QHPTqV.js";import"./Text-BYHxKQhi.js";import"./DOMUtils-CEWteLOc.js";import"./ZIndexLayer-6Wt9kpTG.js";import"./Label-CZPjkQy2.js";import"./types-9pREsRXw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CUes1UBB.js";import"./symbol-DbG6j_AG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C-qpYo5b.js";import"./uniqBy-5vufMWU3.js";import"./iteratee-DRvaSPOJ.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BE_oIUBL.js";import"./step-8fTxxi9s.js";import"./LabelList-D8buJxhL.js";import"./ActivePoints-sqb6X4Yl.js";import"./Dot-D-KXvVde.js";import"./activeStyles-cdXgOxXT.js";import"./useAnimationId-BvctuRLt.js";import"./dataEntryStyles-DFT_PI06.js";import"./ErrorBarContext-BKlvoAQJ.js";import"./SetGraphicalItem-tysqpR10.js";import"./getRadiusAndStrokeWidthFromDot-DKbshIsH.js";import"./ActiveShapeUtils-9MmIWSgd.js";import"./useEffectiveDataKey-DdYNwp-E.js";import"./Cross-DO5nm-k1.js";import"./Rectangle-CJnKnMxE.js";import"./util-Dxo8gN5i.js";import"./Sector-BLL9Klsh.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
