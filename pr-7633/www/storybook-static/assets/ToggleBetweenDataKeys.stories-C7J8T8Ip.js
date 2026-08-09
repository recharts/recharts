import{r as n,R as t}from"./iframe-Dbaqfuxw.js";import{L as p}from"./LineChart-Dwd6Y2GG.js";import{R as s}from"./zIndexSlice-CcFmF_GZ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BUjZkSQx.js";import{X as d}from"./XAxis-B8p6yjl5.js";import{Y as y}from"./YAxis-Dutac8df.js";import{L as u}from"./Legend-Brhe2n5X.js";import{L as h}from"./Line-BIC9rMP6.js";import{T as g}from"./Tooltip-CIoI_ZFX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dl5FKPzp.js";import"./index-Da5KZnpm.js";import"./index-BrtWnZP9.js";import"./index-A3AcgQ4H.js";import"./index-CQt4Xl-S.js";import"./throttle-Y8aMRwU5.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BumiVa5e.js";import"./resolveDefaultProps-xjFLpEsL.js";import"./isWellBehavedNumber-BxE9MI33.js";import"./d3-scale-HmOGYUjs.js";import"./renderedTicksSlice-DpL__K8R.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BXfYtqIv.js";import"./chartDataContext-4k7YbnXG.js";import"./CategoricalChart-CFxz42EG.js";import"./CartesianAxis-DGjRHc2j.js";import"./Layer-BXzB5K08.js";import"./Text-Be1RjgkE.js";import"./DOMUtils-CWVgWmzu.js";import"./Label-BcEDWRMz.js";import"./ZIndexLayer-CpQayApT.js";import"./types-CVDIv1Cb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-60DgJeSx.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DPxy7uEG.js";import"./symbol-xEsYg7em.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D6a9Gzra.js";import"./uniqBy-C7E9iKzu.js";import"./iteratee-lFXD7-Os.js";import"./Curve-CTO_mN3-.js";import"./step-E3pvPVWS.js";import"./AnimatedItems-y-MKsCpX.js";import"./useAnimationId-CsoHoZpG.js";import"./ActivePoints-CymzKczQ.js";import"./Dot-B0ezNCXB.js";import"./RegisterGraphicalItemId-BZO7dJhg.js";import"./ErrorBarContext-lpnJ7mOQ.js";import"./GraphicalItemClipPath-r0eQUgnA.js";import"./SetGraphicalItem-D1VXM8vc.js";import"./getRadiusAndStrokeWidthFromDot-BIpM0DDc.js";import"./ActiveShapeUtils-BwZZXBow.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-COTFQbMP.js";import"./Rectangle-CF0u-T5-.js";import"./util-Dxo8gN5i.js";import"./Sector-B-9CEmPe.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
