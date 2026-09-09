import{r as p,R as t}from"./iframe-BysHx74D.js";import{L as n}from"./LineChart-sDvZxNuN.js";import{R as s}from"./zIndexSlice-B9_IIDSS.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-XLGSdGyz.js";import{X as d}from"./XAxis-Bu0Olx-M.js";import{Y as y}from"./YAxis-BuISev1J.js";import{L as u}from"./Legend-Cma8tjBf.js";import{L as h}from"./Line-BsJW2aoa.js";import{T as g}from"./Tooltip-3BnByDB6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DUyJnBgS.js";import"./resolveDefaultProps-C5vv7I0d.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BPfQ7z4G.js";import"./throttle-BvXCXgu9.js";import"./index-BJxLMgN-.js";import"./index-H0SrxT4N.js";import"./isWellBehavedNumber-oHvlto0K.js";import"./d3-scale-DD00swLB.js";import"./index-CB_yz375.js";import"./index-DNsScqoB.js";import"./renderedTicksSlice-3X1ncpqb.js";import"./index-r38g0wHW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DmPHp5IF.js";import"./chartDataContext-9O_0ckbs.js";import"./CategoricalChart-Cn_rERmH.js";import"./CartesianAxis-CKvkK8kD.js";import"./Layer-BF34dHnr.js";import"./Text-BCrIO-O-.js";import"./DOMUtils-CXQBBarz.js";import"./useId-Bj8s3C04.js";import"./useBackwardsCompatibleTheme-Dm-8fXUv.js";import"./Label-BN43rvaR.js";import"./ZIndexLayer-lKptmcsL.js";import"./types-DGXblPho.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CP1G2AEe.js";import"./symbol-D7fm9S_9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BInCcsaq.js";import"./uniqBy-JC9DBpsi.js";import"./iteratee-laF-f1n6.js";import"./Curve-BmDlaXTG.js";import"./step-B4vU2sA2.js";import"./AnimatedItems-DsYEWi_U.js";import"./useAnimationId-COzQNsPr.js";import"./ActivePoints--qrMkUyO.js";import"./Dot-D1W-oosg.js";import"./RegisterGraphicalItemId-B5UvF8cg.js";import"./ErrorBarContext-C3rhr1lE.js";import"./GraphicalItemClipPath-D2pDNvXJ.js";import"./SetGraphicalItem-CewCaUrF.js";import"./getRadiusAndStrokeWidthFromDot-BA8MWWaF.js";import"./ActiveShapeUtils-OXeos-xf.js";import"./useGraphicalItemIdentity-rkAwppzN.js";import"./Cross-Cj3dyoIf.js";import"./Rectangle-BgPukjWy.js";import"./util-Dxo8gN5i.js";import"./Sector-D0PQPCWS.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
