import{r as p,R as t}from"./iframe-CKMzUQLl.js";import{L as n}from"./LineChart-BDcoXcWF.js";import{R as s}from"./zIndexSlice-COhM5Ssb.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DeYEEHhQ.js";import{X as d}from"./XAxis-BDBlWxDf.js";import{Y as y}from"./YAxis-DB4YGo7q.js";import{L as u}from"./Legend-BbIVnfVR.js";import{L as h}from"./Line-BotpFDCu.js";import{T as g}from"./Tooltip-BT_z6n7f.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-bg3MvxI9.js";import"./resolveDefaultProps-BhXVuCfw.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BSZ3SCPn.js";import"./throttle-cmQF6pk6.js";import"./index-CnQmPyN6.js";import"./index-Ct96jcIf.js";import"./polarAxisSelectors-BANjW4O_.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-uc_I_mt7.js";import"./index-D6eYg-36.js";import"./index-Cl9-JK-G.js";import"./renderedTicksSlice-C4Psuukl.js";import"./index-ClS1qprr.js";import"./CartesianChart-CPRN1zhJ.js";import"./ZIndexPortal-CMRkqNYv.js";import"./CategoricalChart-DhGyzJYC.js";import"./CartesianAxis-BPlDbcHH.js";import"./Layer-VHBsdASS.js";import"./Text-CUuCMSti.js";import"./DOMUtils-CShcNi4q.js";import"./pageBackground-DxYgqm3W.js";import"./ZIndexLayer-B6POVY0e.js";import"./Label-DwblDDwh.js";import"./types-DgiI7KOn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-D5lwwS81.js";import"./Symbols-Bp34LNU2.js";import"./symbol-FynIgkai.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BGehcf2H.js";import"./uniqBy-qDOcKTVS.js";import"./iteratee-DrtJv-M1.js";import"./isArguments-yB-y1yaH.js";import"./Curve-B0phiZsH.js";import"./step-Wrr8d7OB.js";import"./LabelList-DO8MwQV1.js";import"./ActivePoints-DBk2T96T.js";import"./Dot-Da_BOClg.js";import"./activeStyles-CT0hkTay.js";import"./useAnimationId-DKuDzs92.js";import"./dataEntryStyles-2pl_sY7K.js";import"./ErrorBarContext-CFogFGPo.js";import"./SetGraphicalItem-BAzOwitl.js";import"./getRadiusAndStrokeWidthFromDot-CkpjOgWX.js";import"./ActiveShapeUtils-BQ5N4hNI.js";import"./useEffectiveDataKey-3-wTW5Lh.js";import"./Cross-IIL7sW25.js";import"./Rectangle-CaGbKQx_.js";import"./util-Dxo8gN5i.js";import"./Sector-BqPv5Kez.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
