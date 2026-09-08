import{r as p,R as t}from"./iframe-DNntBodD.js";import{L as n}from"./LineChart-COGzNwrE.js";import{R as s}from"./zIndexSlice-DiWKALGY.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-LMPXAGBk.js";import{X as d}from"./XAxis-BY2gNAXm.js";import{Y as y}from"./YAxis-CF14HcHp.js";import{L as u}from"./Legend-H0Ygc-Gq.js";import{L as h}from"./Line-BW1G3hO8.js";import{T as g}from"./Tooltip-CkfNsq-h.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-v1Mup_kK.js";import"./resolveDefaultProps-BBBno9Vz.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B-JAPPws.js";import"./throttle-C7dkKHPf.js";import"./index-DJMKHO2r.js";import"./index-Dseq7l94.js";import"./isWellBehavedNumber-BAVeTOtu.js";import"./d3-scale-B1cdCOGf.js";import"./index-D3OPKtIE.js";import"./index-C8meDON6.js";import"./renderedTicksSlice-CzSTMxGf.js";import"./index-BzMcqiTa.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-xqtu5zOX.js";import"./chartDataContext-GWmAYxkF.js";import"./CategoricalChart-Bgnt48NN.js";import"./CartesianAxis-DWyLKLt1.js";import"./Layer-BJ4Iw8RT.js";import"./Text-CagXdBG4.js";import"./DOMUtils-Dvaq5fYM.js";import"./useId-D2xBfPBM.js";import"./useBackwardsCompatibleTheme-CfEQJ-O-.js";import"./Label-CCBtX9go.js";import"./ZIndexLayer-BnBloPVM.js";import"./types-DE65RlUn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-qPZ-o7VF.js";import"./symbol-D5c2VmH_.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CxyO0HMk.js";import"./uniqBy-mFdjf_gi.js";import"./iteratee-B3GlqRNc.js";import"./Curve-DrKWfUOs.js";import"./step-uR5oqTHC.js";import"./AnimatedItems-Dpv_eB7t.js";import"./useAnimationId-CbwNnleB.js";import"./ActivePoints-DsO8E_yf.js";import"./Dot-DwijN6tl.js";import"./RegisterGraphicalItemId-CkaBE6dd.js";import"./ErrorBarContext-D2Q4_EH8.js";import"./GraphicalItemClipPath-BQ6wt6g2.js";import"./SetGraphicalItem-cPTjE6UA.js";import"./getRadiusAndStrokeWidthFromDot-DSbl8OKM.js";import"./ActiveShapeUtils-DL04WIzD.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-BLn3TIW2.js";import"./Rectangle-3j1HbpFj.js";import"./util-Dxo8gN5i.js";import"./Sector-Dbfwf-mJ.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
