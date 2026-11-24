import{r as p,R as t}from"./iframe-3nQ-xZag.js";import{L as n}from"./LineChart-Bc5gmQt7.js";import{R as s}from"./zIndexSlice-Dm-AMY-R.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DvPQp3Ii.js";import{X as d}from"./XAxis-DaNCZ6NZ.js";import{Y as y}from"./YAxis-D3gPtNIE.js";import{L as u}from"./Legend--w7PqQuJ.js";import{L as h}from"./Line-BaS7SehX.js";import{T as g}from"./Tooltip-DBycVl39.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CLBNIVU_.js";import"./resolveDefaultProps-CB2UEG-j.js";import"./get-CjriyByo.js";import"./axisSelectors-fNaznWMp.js";import"./throttle-VgoIbkK-.js";import"./index-GNDyZ-zm.js";import"./index-ByeDIwBG.js";import"./polarAxisSelectors-dCOIGnCj.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Nv905U8s.js";import"./index-BQJ2UTdx.js";import"./index-D4meeqfk.js";import"./renderedTicksSlice-BwWN8huf.js";import"./index-Diug9bjW.js";import"./fillDefinitions-BLnlF0KU.js";import"./CartesianChart-D8wOEODK.js";import"./chartDataContext-CxxFWOOm.js";import"./CategoricalChart-D8F0hlwY.js";import"./CartesianAxis-Bro405i1.js";import"./Layer-B7hf8wrq.js";import"./Text-DQIY-xVt.js";import"./ZIndexLayer-5jwQGiTj.js";import"./Label-CjKwBg5w.js";import"./types-CveBZAlv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-tD_4MAA2.js";import"./symbol-34ANNL6v.js";import"./path-BBMZd4YL.js";import"./useElementOffset-C7XMmhpG.js";import"./uniqBy-qypsR_Io.js";import"./iteratee-Oqe1JUBW.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-DqipViX9.js";import"./Curve-D3218arp.js";import"./step-nf1yL9aW.js";import"./dataEntryStyles-31cxgZsa.js";import"./ActivePoints-Ba3qB0HE.js";import"./Dot-B0shGOFT.js";import"./activeStyles-BALJdcO7.js";import"./useAnimationId-JHyqMuIo.js";import"./ErrorBarContext-BrChGa93.js";import"./SetGraphicalItem-CcSizHOA.js";import"./ActiveShapeUtils-CPk9lbeK.js";import"./useEffectiveDataKey-DHnfGJ84.js";import"./Cross-B8qZszvR.js";import"./Rectangle-BmKAL7wU.js";import"./util-Dxo8gN5i.js";import"./Sector-DMIO8Iyd.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
