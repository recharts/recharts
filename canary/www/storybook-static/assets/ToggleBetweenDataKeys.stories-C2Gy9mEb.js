import{r as p,R as t}from"./iframe-C0h7cDRB.js";import{L as n}from"./LineChart-DSw-bQrg.js";import{R as s}from"./zIndexSlice-qYbn1M2d.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Cc-TuiJg.js";import{X as d}from"./XAxis-BA_RiYmX.js";import{Y as y}from"./YAxis-C8YuU25K.js";import{L as u}from"./Legend-B9myfM-R.js";import{L as h}from"./Line-BPh87F_P.js";import{T as g}from"./Tooltip-VBW21GWi.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cw2PyL1_.js";import"./resolveDefaultProps-BkghodIs.js";import"./get-C2VjdU0L.js";import"./axisSelectors-ao6VSC3T.js";import"./throttle-BTNdvVGL.js";import"./index-D1hon26J.js";import"./index-DVJUv_Eo.js";import"./isWellBehavedNumber-l0bWs0-b.js";import"./d3-scale-D7rNqaSZ.js";import"./index-aOlaHU4z.js";import"./index-BxvBa7qS.js";import"./renderedTicksSlice-DM87J7gU.js";import"./index-BTP4J2bR.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bz05LL8N.js";import"./chartDataContext-aa0JHiM9.js";import"./CategoricalChart-DJQlgPsa.js";import"./CartesianAxis-CojQTbDy.js";import"./Layer-CDasTplA.js";import"./Text-0LVKVKzy.js";import"./DOMUtils-CJDZt9Se.js";import"./useId-mBPRAmCQ.js";import"./useBackwardsCompatibleTheme-BiYiaeUI.js";import"./Label-ChRnigpx.js";import"./ZIndexLayer-CQRtxHWp.js";import"./types-BFdAlI3B.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CkEijzRx.js";import"./symbol-DZ3WUR_I.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CeFmnDth.js";import"./uniqBy-CNP_WPaF.js";import"./iteratee-Csb2m47f.js";import"./Curve-S0jwBuSa.js";import"./step-imJiFMDF.js";import"./AnimatedItems-_8lABYqi.js";import"./useAnimationId-CdJJ5aJU.js";import"./ActivePoints-BbEboQPa.js";import"./Dot-bF0pyqQk.js";import"./RegisterGraphicalItemId-DAhv8npK.js";import"./ErrorBarContext-BL4xVqAn.js";import"./GraphicalItemClipPath-DAnL6xzi.js";import"./SetGraphicalItem-BPbhG1jF.js";import"./getRadiusAndStrokeWidthFromDot-BL01NReM.js";import"./ActiveShapeUtils-DcbAXTAV.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-DgIVShaz.js";import"./Rectangle-Bdav8_u9.js";import"./util-Dxo8gN5i.js";import"./Sector-DbZszRwY.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
