import{r as n,R as t}from"./iframe-BX5cRibr.js";import{L as p}from"./LineChart-DGXiKNaD.js";import{R as s}from"./zIndexSlice-AZuYl_vp.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BEN8mmtg.js";import{X as d}from"./XAxis-DwJ67tbd.js";import{Y as y}from"./YAxis-LHNvPj5J.js";import{L as u}from"./Legend-Bh7zufuS.js";import{L as h}from"./Line-Ble_dEe_.js";import{T as g}from"./Tooltip-BQ1TvFws.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BWIRq1qS.js";import"./index-D7b-sRGH.js";import"./index-Dw3bOTki.js";import"./index-DPKEyt0t.js";import"./index-CcyvhUmM.js";import"./throttle-zmqWqRK4.js";import"./get-C2VjdU0L.js";import"./axisSelectors-TKieRxLR.js";import"./resolveDefaultProps-mM3kvg0l.js";import"./isWellBehavedNumber-DBNW0jLE.js";import"./d3-scale-Bo5r3xwl.js";import"./renderedTicksSlice-CMTI5nMK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dy3LaLed.js";import"./chartDataContext-BTnhTp6W.js";import"./CategoricalChart-DuHEcs_Z.js";import"./CartesianAxis-C0ASpg_d.js";import"./Layer-W_QEwym4.js";import"./Text-LzAq1gnt.js";import"./DOMUtils-BjdsXn98.js";import"./useId-DmJJcbw8.js";import"./useBackwardsCompatibleTheme-D4QNjc2r.js";import"./Label-DaxsWVsm.js";import"./ZIndexLayer-5Nxk2bOM.js";import"./types-DbQE6sDs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-8Y55TEi-.js";import"./symbol-DJtjK0so.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B2muHLId.js";import"./uniqBy-CUPPr5RE.js";import"./iteratee-C-A_FkJM.js";import"./Curve-DB2Kv5XX.js";import"./step-DSSF95ZQ.js";import"./AnimatedItems-Cm8c3RW5.js";import"./useAnimationId-CcWR-JA_.js";import"./ActivePoints-C2sJ7ejP.js";import"./Dot-BmK-BBdb.js";import"./RegisterGraphicalItemId-Bm8N3XnH.js";import"./ErrorBarContext-Bxp-Dx_a.js";import"./GraphicalItemClipPath-T4Qnp2Cr.js";import"./SetGraphicalItem-D_SsxP0N.js";import"./getRadiusAndStrokeWidthFromDot-CTcI3Era.js";import"./ActiveShapeUtils-Dci8zubi.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-D6NGwbys.js";import"./Rectangle-sEO8jAvN.js";import"./util-Dxo8gN5i.js";import"./Sector-xNI7UkRk.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
