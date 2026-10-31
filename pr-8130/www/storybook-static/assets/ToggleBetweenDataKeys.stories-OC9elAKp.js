import{r as p,R as t}from"./iframe-DP_a1dmY.js";import{L as n}from"./LineChart-Cjie9-d1.js";import{R as s}from"./zIndexSlice-rjLYhejy.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CGuJ-d56.js";import{X as d}from"./XAxis-1vjsoN9j.js";import{Y as y}from"./YAxis-DqctmLMG.js";import{L as u}from"./Legend-BZrfV6wX.js";import{L as h}from"./Line-B0f2Q_SE.js";import{T as g}from"./Tooltip-BLa4yGZh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B4nQvyyr.js";import"./resolveDefaultProps-BUA_ea65.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DEw1mS80.js";import"./throttle-BChPb-_m.js";import"./index-Cpxqs5RX.js";import"./index-CZaxsyUC.js";import"./polarAxisSelectors-C8froBOH.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CQwtQXkW.js";import"./index-B7p3ZvHO.js";import"./index-BKlw8SLM.js";import"./renderedTicksSlice-vKkijtCh.js";import"./index-CDLzOnEQ.js";import"./fillDefinitions-ClRF1Jdn.js";import"./CartesianChart-BUksmgNb.js";import"./ZIndexPortal-DjdaUnXL.js";import"./CategoricalChart-Cb54doQf.js";import"./CartesianAxis-C1uxWw-Y.js";import"./Layer-CZaWfsGO.js";import"./Text-Dp_r5yDX.js";import"./DOMUtils-mf3xp45a.js";import"./ZIndexLayer-DlEiCgSn.js";import"./Label-ja-Sj5Q7.js";import"./types-CDz_n5r5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-rf6N_jcM.js";import"./symbol-DeF3ladi.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CYP9m4TG.js";import"./uniqBy-Bwcnbh18.js";import"./iteratee-Doq5RcdM.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BWt9Gc4p.js";import"./step-D5N_P6yo.js";import"./LabelList-DL3Ydiqu.js";import"./ActivePoints-DnIoFkEo.js";import"./Dot-FQPok2YB.js";import"./activeStyles-BV6CK3cL.js";import"./useAnimationId-CFEdeYhu.js";import"./dataEntryStyles-4JNZcrwL.js";import"./ErrorBarContext-tkKb7Nex.js";import"./SetGraphicalItem-5vhsybgs.js";import"./getRadiusAndStrokeWidthFromDot-BgEfcfUu.js";import"./ActiveShapeUtils-DC7CnxCS.js";import"./useEffectiveDataKey-D45Rikd2.js";import"./Cross-BfRejwAV.js";import"./Rectangle-CYUStI_n.js";import"./util-Dxo8gN5i.js";import"./Sector-1u7_Cs3V.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
