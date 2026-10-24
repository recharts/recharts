import{r as p,R as t}from"./iframe-CQih25KR.js";import{L as n}from"./LineChart-C9I59gKk.js";import{R as s}from"./zIndexSlice-BBwd9R4A.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BFGaGNCw.js";import{X as d}from"./XAxis-DatML6Vr.js";import{Y as y}from"./YAxis-D92DpTLx.js";import{L as u}from"./Legend-CDR7Zxpu.js";import{L as h}from"./Line-DKHN4FGO.js";import{T as g}from"./Tooltip-B629u-do.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BCMHJsHG.js";import"./resolveDefaultProps-DZXiBHxq.js";import"./get-cF5BDHN6.js";import"./axisSelectors-gqm50JPH.js";import"./throttle-CYod_o09.js";import"./index-lk52KXx5.js";import"./index-DdtFl0i3.js";import"./isWellBehavedNumber-BZsUlmxg.js";import"./d3-scale-C8349dF6.js";import"./index-83zVEPqI.js";import"./index-BX29BXND.js";import"./renderedTicksSlice-TriIcOtn.js";import"./index-DY8NIj0D.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D5IyTQPM.js";import"./chartDataContext-SrRPyl9F.js";import"./CategoricalChart-dLpz1ZCk.js";import"./CartesianAxis-B8Q7lXls.js";import"./Layer-BzMCwaud.js";import"./Text-ByeKnFJN.js";import"./pageBackground-B-dTuZL1.js";import"./useId-BUhtjdKT.js";import"./useBackwardsCompatibleTheme-Cv0bY4c1.js";import"./Label-DtKjJWj0.js";import"./ZIndexLayer-C0V9Q93e.js";import"./dataEntryStyles-BMnqm0mo.js";import"./types-NMZqXy0T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DVPBfB38.js";import"./symbol-DswsDQA7.js";import"./path-DyVhHtw_.js";import"./useElementOffset-EGy64DcV.js";import"./uniqBy-DOqGPGpA.js";import"./iteratee-B3skCKTj.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BPpaKfS5.js";import"./step-BqUGYyr0.js";import"./activeStyles-BLa_G1fN.js";import"./useAnimationId-BuSk-bLT.js";import"./ActivePoints-Bf_gQQVU.js";import"./Dot-ZqJ7ot6M.js";import"./RegisterGraphicalItemId-BKvpbBB2.js";import"./ErrorBarContext-QTm2eq8O.js";import"./SetGraphicalItem-51m-LnYN.js";import"./getRadiusAndStrokeWidthFromDot-F_yGfOhs.js";import"./ActiveShapeUtils-Bl37L_si.js";import"./useEffectiveDataKey-BJYzr5Gr.js";import"./Cross-CamwH1qB.js";import"./Rectangle-DwxPMwLi.js";import"./util-Dxo8gN5i.js";import"./Sector-BJfIo3UI.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
