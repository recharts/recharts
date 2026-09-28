import{r as p,R as t}from"./iframe-DfzMHjuD.js";import{L as n}from"./LineChart-DLRunsTX.js";import{R as s}from"./zIndexSlice-D65nx7n2.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-wori74zY.js";import{X as d}from"./XAxis-CcmvQ4-M.js";import{Y as y}from"./YAxis-CYvNJGV-.js";import{L as u}from"./Legend-D5XVzkm8.js";import{L as h}from"./Line-CXIUk8YQ.js";import{T as g}from"./Tooltip-C55DSjup.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Btc41qHc.js";import"./resolveDefaultProps-BhiSE-fR.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Dv8-JHab.js";import"./throttle-B4jaia1x.js";import"./index-DQvdEvgc.js";import"./index-CHbvF_w5.js";import"./isWellBehavedNumber-B84GX6Iq.js";import"./d3-scale-DkoGb7PH.js";import"./index-CrtWwB5P.js";import"./index-CHqtXhJ0.js";import"./renderedTicksSlice-YMBm5Aq7.js";import"./index-D-FQmlHp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CgfuN-gF.js";import"./chartDataContext-BU-za_rr.js";import"./CategoricalChart-BaFSqBAh.js";import"./CartesianAxis-B2_CRuSv.js";import"./Layer-BgMBl2n9.js";import"./Text-KIvPk-oI.js";import"./DOMUtils-DZvMhBn7.js";import"./useId-jHWdyPm9.js";import"./useBackwardsCompatibleTheme-BN8Sccns.js";import"./Label-DHYmqyDD.js";import"./ZIndexLayer-DjEP4vsT.js";import"./types-BoXpTlVd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C-vyMKGy.js";import"./symbol-B2B_dEQS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-WbfHTGT4.js";import"./uniqBy-BbVKU46e.js";import"./iteratee-Biw9ni9t.js";import"./Curve-BLtOpFAf.js";import"./step-9PcWzaJ_.js";import"./AnimatedItems-D8ukjbdC.js";import"./useAnimationId-BwLSFp-D.js";import"./ActivePoints-CQoPkIu-.js";import"./Dot-CVblHFHD.js";import"./RegisterGraphicalItemId-FhHKtG3E.js";import"./ErrorBarContext-CbViVQBZ.js";import"./GraphicalItemClipPath-qYVsG-0u.js";import"./SetGraphicalItem-CfEkxgRj.js";import"./getRadiusAndStrokeWidthFromDot-BDWnIHrh.js";import"./ActiveShapeUtils-CUP96Mlj.js";import"./useGraphicalItemIdentity-CnOmH2BL.js";import"./Cross-DIR6xrIW.js";import"./Rectangle-D_LZlwBF.js";import"./util-Dxo8gN5i.js";import"./Sector-D806wobg.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
