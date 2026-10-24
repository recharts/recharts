import{r as p,R as t}from"./iframe-DwT3zBcw.js";import{L as n}from"./LineChart-CsknpvK_.js";import{R as s}from"./zIndexSlice-B1c8R-o4.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Bkyj7982.js";import{X as d}from"./XAxis-DDMS_4GY.js";import{Y as y}from"./YAxis-Blmef7Zk.js";import{L as u}from"./Legend-BGqif3Gi.js";import{L as h}from"./Line-BPX8zZ3-.js";import{T as g}from"./Tooltip-CcGVX3TY.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B-ytYCFw.js";import"./resolveDefaultProps-Cd4ZPAw9.js";import"./get-cF5BDHN6.js";import"./axisSelectors-C7AasPYQ.js";import"./throttle-zQvI5ucF.js";import"./index-DaIIHj-7.js";import"./index-HzTW079l.js";import"./isWellBehavedNumber-sM73_qxP.js";import"./d3-scale-DKCZEfGq.js";import"./index-C8mRu_Mi.js";import"./index-BGcjFl-p.js";import"./renderedTicksSlice-CIz6Ndsz.js";import"./index-Bk7-Tdy1.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-brTBebdD.js";import"./chartDataContext-UYYS7Vdp.js";import"./CategoricalChart-z4qVmpWN.js";import"./CartesianAxis-BOCUxksG.js";import"./Layer-DTu28EsQ.js";import"./Text-aRPMe4ci.js";import"./pageBackground-DsM-Z0Rr.js";import"./useId-Dw49XwJm.js";import"./useBackwardsCompatibleTheme-7icVFW3Y.js";import"./Label-BJdAgAze.js";import"./ZIndexLayer-DYMRbOsR.js";import"./dataEntryStyles-BzuS2ZGG.js";import"./types-CLejyp8C.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Cg4hZU-z.js";import"./symbol-DBcDWVfa.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BPhfD7za.js";import"./uniqBy-DSw40EQt.js";import"./iteratee-BWpKqSkU.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Bt6WU0fX.js";import"./step-Cf4wfTi4.js";import"./activeStyles-0kotXHCs.js";import"./useAnimationId-BjdF1-gz.js";import"./ActivePoints-DatcE_ix.js";import"./Dot-B9jMerXC.js";import"./RegisterGraphicalItemId-BXXaOAlY.js";import"./ErrorBarContext-HVEt8c-6.js";import"./SetGraphicalItem-BwU9qQSh.js";import"./getRadiusAndStrokeWidthFromDot-DuGu4d4H.js";import"./ActiveShapeUtils-DY08WDqW.js";import"./useEffectiveDataKey-BsFyVvUD.js";import"./Cross-jElMP1_w.js";import"./Rectangle-DLCOL5Gn.js";import"./util-Dxo8gN5i.js";import"./Sector-DxUt_IOw.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
