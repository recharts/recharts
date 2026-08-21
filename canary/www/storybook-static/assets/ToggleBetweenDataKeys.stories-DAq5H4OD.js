import{r as n,R as t}from"./iframe-Badwul9q.js";import{L as p}from"./LineChart-DEzdcQEX.js";import{R as s}from"./zIndexSlice-CEPqA6uv.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D7F2_a-r.js";import{X as d}from"./XAxis-DwaxFHEN.js";import{Y as y}from"./YAxis-B14z5K_h.js";import{L as u}from"./Legend-Dhz4Bzfc.js";import{L as h}from"./Line-Bq5Pip6f.js";import{T as g}from"./Tooltip-BCssNaCG.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DT9_WEbf.js";import"./index-BAZVFS-Q.js";import"./index-BjECjR4R.js";import"./index-BL44lg5f.js";import"./index-D1wsKNYb.js";import"./throttle-BG2Qy65h.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CTwDlHnv.js";import"./resolveDefaultProps-DH92j3VQ.js";import"./isWellBehavedNumber-kTcazBa4.js";import"./d3-scale-TLUlZmuF.js";import"./renderedTicksSlice-BDycl-yX.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D8iyGmBz.js";import"./chartDataContext-Bt38eSkc.js";import"./CategoricalChart-1ZyUfD1N.js";import"./CartesianAxis-C8y8cQTk.js";import"./Layer-D6-JDPxR.js";import"./Text-h9Iu7ZeD.js";import"./DOMUtils-BA3evV1C.js";import"./useId-DvG1S0KZ.js";import"./useBackwardsCompatibleTheme-BCTNxxa7.js";import"./Label-UqWUh_Dj.js";import"./ZIndexLayer-DzsdJFep.js";import"./types-DAsbYWRO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Dtyl81qq.js";import"./symbol-DUMetRhr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BfmRpqsp.js";import"./uniqBy-BfG2k_aA.js";import"./iteratee-CpkIGYwK.js";import"./Curve-BaVpsYCr.js";import"./step-B8WIZZ5_.js";import"./AnimatedItems-D7VnlwSp.js";import"./useAnimationId-jiUA16Df.js";import"./ActivePoints-B6c6f_ub.js";import"./Dot-1XO9AD1Q.js";import"./RegisterGraphicalItemId-f2QL4JQB.js";import"./ErrorBarContext-DRSE_a5E.js";import"./GraphicalItemClipPath-CN8tu77t.js";import"./SetGraphicalItem-DT7eapgt.js";import"./getRadiusAndStrokeWidthFromDot-qvEZslpV.js";import"./ActiveShapeUtils-CF5WFyvr.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-DL-kP-Ml.js";import"./Rectangle-DHU_gf2m.js";import"./util-Dxo8gN5i.js";import"./Sector-D5EuP6OP.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
