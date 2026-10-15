import{r as p,R as t}from"./iframe-D_03ePl7.js";import{L as n}from"./LineChart-B8yNBkl4.js";import{R as s}from"./zIndexSlice-gI7CPKt8.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BHX9vQGB.js";import{X as d}from"./XAxis-CjKd6FOO.js";import{Y as y}from"./YAxis-BYLx-dFj.js";import{L as u}from"./Legend-B3gkZulI.js";import{L as h}from"./Line-BNGgDTi-.js";import{T as g}from"./Tooltip-B2s0sIRi.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B_Jo0xL0.js";import"./resolveDefaultProps-C_535qvz.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CyxZNoxv.js";import"./throttle-DlozmNLH.js";import"./index-CbBA7rES.js";import"./index-Hu7BLM9I.js";import"./isWellBehavedNumber-08WJO6-p.js";import"./d3-scale-CS5gmyGm.js";import"./index-DmfSCfAr.js";import"./index-CsBIVix0.js";import"./renderedTicksSlice-DL9pT9-E.js";import"./index-Dlf7H1uA.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B_RdHXsl.js";import"./chartDataContext-sh7W2Xea.js";import"./CategoricalChart-Wu8m05Op.js";import"./CartesianAxis-C3nD1dv8.js";import"./Layer-PN0rvZRP.js";import"./Text-Z5PwaRTj.js";import"./pageBackground-2sAJZ1tz.js";import"./useId-BHfhqUC8.js";import"./useBackwardsCompatibleTheme-CFqJibBS.js";import"./Label-BQXHRFnW.js";import"./ZIndexLayer-CAYdtHvW.js";import"./types-dtQ43_yo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-ADmgqoZG.js";import"./symbol-CCRBoIOr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DakWzhaz.js";import"./uniqBy-C4oZiLR-.js";import"./iteratee-DYmUi1kx.js";import"./Curve-BOXPF2Cl.js";import"./step-P_HLonsz.js";import"./activeStyles-BEtEtj28.js";import"./useAnimationId-CBDTDHfD.js";import"./dataEntryStyles-eD8YHQf_.js";import"./ActivePoints-BxKnLR-Y.js";import"./Dot-WWJXawog.js";import"./ErrorBarContext-DFl8QQpS.js";import"./GraphicalItemClipPath-Dpw0HOzQ.js";import"./SetGraphicalItem-CJI-A4Bp.js";import"./getRadiusAndStrokeWidthFromDot-BIFluFxo.js";import"./ActiveShapeUtils-DGMvpmsE.js";import"./useEffectiveDataKey-OYuZWKUp.js";import"./Cross-G9TGKT1L.js";import"./Rectangle-DdU_MFIg.js";import"./util-Dxo8gN5i.js";import"./Sector-R2EIboYZ.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
