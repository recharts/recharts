import{r as p,R as t}from"./iframe-BGa_aXYV.js";import{L as n}from"./LineChart-w8wvJObO.js";import{R as s}from"./zIndexSlice-Ck6l0OZs.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BkXJee70.js";import{X as d}from"./XAxis-CE3oHyxg.js";import{Y as y}from"./YAxis-CP1brurK.js";import{L as u}from"./Legend-Dilw1X-J.js";import{L as h}from"./Line-Y16V4sUQ.js";import{T as g}from"./Tooltip-MhnN-294.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BTlrgf4s.js";import"./resolveDefaultProps--MxbOSxe.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BhlTci4j.js";import"./throttle-odPHgumR.js";import"./index-wG94lJw7.js";import"./index-Bi5RYh62.js";import"./polarAxisSelectors-DZZ_sV95.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D32hxSnZ.js";import"./index-CCS8tdiB.js";import"./index-_XAYd-SQ.js";import"./renderedTicksSlice-D_6jJO7k.js";import"./index-DF81NAeA.js";import"./CartesianChart-BVZLzzem.js";import"./ZIndexPortal-yBnaKAUB.js";import"./CategoricalChart-C-tokN3T.js";import"./CartesianAxis-D2QFH6SB.js";import"./Layer-Bzj9T_Rp.js";import"./Text-mATLrig6.js";import"./pageBackground-BUMPEk7V.js";import"./ZIndexLayer-D3eS8Esu.js";import"./Label-Bzq01dK8.js";import"./types-BlkSdkM7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-D-n9Z7lT.js";import"./symbol-CZaSDg5i.js";import"./path-DyVhHtw_.js";import"./useElementOffset-PZh3tzwx.js";import"./uniqBy-BD2wLUuV.js";import"./iteratee-GuFU32s6.js";import"./isArguments-yB-y1yaH.js";import"./Curve-yqHv3532.js";import"./step-Bk4v6FYF.js";import"./LabelList-dSe8emrx.js";import"./ActivePoints-CflJ3BqH.js";import"./Dot-DIjQdgeX.js";import"./activeStyles-DZX2Soqz.js";import"./useAnimationId-BY6DYNe9.js";import"./dataEntryStyles-3sm9ZLw4.js";import"./ErrorBarContext-DCAq7oKy.js";import"./SetGraphicalItem-Ds0lF9cJ.js";import"./getRadiusAndStrokeWidthFromDot-Dl4gueRZ.js";import"./ActiveShapeUtils-Luuswf_P.js";import"./useEffectiveDataKey-D5yK2eiQ.js";import"./Cross-D3L1ZFfF.js";import"./Rectangle-BNMIfASl.js";import"./util-Dxo8gN5i.js";import"./Sector-hq76lirF.js";const wt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},xt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
