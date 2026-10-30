import{r as p,R as t}from"./iframe-BvC_nX2I.js";import{L as n}from"./LineChart-z3Ie5LHN.js";import{R as s}from"./zIndexSlice-Deux2KLj.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-SNfuGx3f.js";import{X as d}from"./XAxis-DJblgq_P.js";import{Y as y}from"./YAxis-Dnd7ECK6.js";import{L as u}from"./Legend-CiXsHN1E.js";import{L as h}from"./Line-DlYE1LdE.js";import{T as g}from"./Tooltip-DVnkgbDa.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-YXBLwPUp.js";import"./resolveDefaultProps-DT691zhh.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D1Op89Ra.js";import"./throttle-CirueaOA.js";import"./index-CbvgqQkR.js";import"./index-C-6557Zz.js";import"./polarAxisSelectors-Bv7-VLAe.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-oQwuANVt.js";import"./index-CVNtrs8_.js";import"./index-Cthsl8Eg.js";import"./renderedTicksSlice-Bg6jRWvt.js";import"./index-C59oTpld.js";import"./CartesianChart-C1otsVa1.js";import"./ZIndexPortal-BgIvcEBP.js";import"./CategoricalChart-BNHZ2U_e.js";import"./CartesianAxis-CcuHoEVr.js";import"./Layer-BgbmxeTS.js";import"./Text-3ao1DtcI.js";import"./DOMUtils-DlV8uPCF.js";import"./pageBackground-BygNKisP.js";import"./ZIndexLayer-CJcw2vh_.js";import"./Label-CNqVbewr.js";import"./types-CcK0_WR7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-CZGVPI6N.js";import"./Symbols-DHQWc_0k.js";import"./symbol-BOIFwd4y.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C7rqP3X3.js";import"./uniqBy-BF0sKSrQ.js";import"./iteratee-B6a_e8WW.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Dwq2onbG.js";import"./step-MgrEs1-v.js";import"./LabelList-CRaDVB5f.js";import"./ActivePoints-K5tloKEU.js";import"./Dot-B0BFGoSP.js";import"./activeStyles-D5yKyFeN.js";import"./useAnimationId-CfSQBeBZ.js";import"./dataEntryStyles-DH8AExSk.js";import"./ErrorBarContext-p-ctGfT-.js";import"./SetGraphicalItem-P596Nxos.js";import"./getRadiusAndStrokeWidthFromDot-BvCb0Nrn.js";import"./ActiveShapeUtils-CHw2ZkCc.js";import"./useEffectiveDataKey-B9rISrD-.js";import"./Cross-DzDfYPf9.js";import"./Rectangle-CaXkiWJ0.js";import"./util-Dxo8gN5i.js";import"./Sector-Dsg_Vl6t.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Rt as __namedExportsOrder,kt as default};
