import{r as p,R as t}from"./iframe-Dveh6XC4.js";import{L as n}from"./LineChart-Ccc7W8XX.js";import{R as s}from"./zIndexSlice-CHGKLvUt.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DvW8Geav.js";import{X as d}from"./XAxis-CRKEYqOq.js";import{Y as y}from"./YAxis-w9pVccwz.js";import{L as u}from"./Legend-CQFo3MKV.js";import{L as h}from"./Line-41i7MCIm.js";import{T as g}from"./Tooltip-CFGvSGFT.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BjJrVVo_.js";import"./resolveDefaultProps-DuxVF1QF.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BNJiRWtc.js";import"./throttle-CRxbwEvt.js";import"./index-Cbmt_wIf.js";import"./index-CG-oseCj.js";import"./polarAxisSelectors-DOXrMTYm.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-XJHyjNta.js";import"./index-BC5sf_5c.js";import"./index-uMZJip00.js";import"./renderedTicksSlice-Cw-0pUCw.js";import"./index-Fu0XORfS.js";import"./fillDefinitions-BC_l7gtK.js";import"./CartesianChart-DPPEX1sp.js";import"./ZIndexPortal-yJs_hgSa.js";import"./CategoricalChart-BBllviTF.js";import"./CartesianAxis-DUZQMGP0.js";import"./Layer-BJKthE-c.js";import"./Text-DDi8tnpk.js";import"./DOMUtils-BsJwiviE.js";import"./ZIndexLayer-DbxRiqCY.js";import"./Label-Vwsx_sp3.js";import"./types-XJ7-EVuf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-QXbi9vzZ.js";import"./symbol-CTWslb94.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Diqs6aNv.js";import"./uniqBy-r-8_JOan.js";import"./iteratee-F2t8nio4.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BFn8Gc1Y.js";import"./step-COK9gonL.js";import"./LabelList-C0azlQgx.js";import"./ActivePoints-B26bJhxw.js";import"./Dot-BnEEmk8R.js";import"./activeStyles-C0UNB_bG.js";import"./useAnimationId-ClkvXH7X.js";import"./dataEntryStyles-CX9qr7B-.js";import"./ErrorBarContext-DkBQ5rXz.js";import"./SetGraphicalItem-B2n4iSWY.js";import"./getRadiusAndStrokeWidthFromDot-BzBtfZmi.js";import"./ActiveShapeUtils-CXVbuCLN.js";import"./useEffectiveDataKey-CghzYeW7.js";import"./Cross-CA-OBfX-.js";import"./Rectangle-L-kKC_mf.js";import"./util-Dxo8gN5i.js";import"./Sector-DPSFgAWf.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
