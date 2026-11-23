import{r as p,R as t}from"./iframe-B3Q9BieZ.js";import{L as n}from"./LineChart-B3fT3Xm7.js";import{R as s}from"./zIndexSlice-sqFd1bzt.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DTELdrvM.js";import{X as d}from"./XAxis-D2lT-EVr.js";import{Y as y}from"./YAxis-DvVjGCkX.js";import{L as u}from"./Legend-D54bBuuY.js";import{L as h}from"./Line-CqPtSHor.js";import{T as g}from"./Tooltip-C3uuRk_U.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cfrbgio_.js";import"./resolveDefaultProps-BfktPE_A.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DvTAFEOk.js";import"./throttle-D7B_fzZD.js";import"./index-BCJi3GJg.js";import"./index-vYqwVqCg.js";import"./polarAxisSelectors-DPwJ5LbZ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C94aTEcE.js";import"./index-DcskzPeY.js";import"./index-orRyden8.js";import"./renderedTicksSlice-1Ib_b5H5.js";import"./index-CII0l-xa.js";import"./fillDefinitions-DFJ8_pt7.js";import"./CartesianChart-Cr3Ujgb_.js";import"./chartDataContext-BZMC5ZNk.js";import"./CategoricalChart-DW1p8FyC.js";import"./CartesianAxis-COGs4upa.js";import"./Layer-CM6IL6TI.js";import"./Text-vJxvkBMX.js";import"./ZIndexLayer-D273i2uL.js";import"./Label-DqBOaUXK.js";import"./types-D4j33x05.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CWY2nbRa.js";import"./symbol-MUjZPdnP.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BjLkxFtO.js";import"./uniqBy-BY6j9O5X.js";import"./iteratee-CK_fQl9o.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-CVv--GX5.js";import"./Curve-1WEPDMRv.js";import"./step-CLCxHiga.js";import"./dataEntryStyles-DvvOVUEP.js";import"./ActivePoints-tqDqo9N4.js";import"./Dot-ClUpNew-.js";import"./activeStyles-BLYIXqri.js";import"./useAnimationId-2VJaNjeA.js";import"./ErrorBarContext-B613I2F5.js";import"./SetGraphicalItem-B51ay4rQ.js";import"./ActiveShapeUtils-axs2zJFe.js";import"./useEffectiveDataKey-CELfbHpr.js";import"./Cross-D4GVRzZw.js";import"./Rectangle-uE9FLPYH.js";import"./util-Dxo8gN5i.js";import"./Sector-C3a2lDVG.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
