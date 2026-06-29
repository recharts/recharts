import{r as n,R as t}from"./iframe-BAIqIWNA.js";import{L as p}from"./LineChart-WgztRMlp.js";import{R as s}from"./zIndexSlice-CH0jeNcq.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Cg-pZWhK.js";import{X as d}from"./XAxis-BESD5mtP.js";import{Y as y}from"./YAxis-Bm2PYPOq.js";import{L as u}from"./Legend-DmYWIZQh.js";import{L as h}from"./Line-Bq1IM0A9.js";import{T as g}from"./Tooltip-BP6t96w5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C_-Hq-nw.js";import"./index-toxz65-Z.js";import"./index-CyrXrpRf.js";import"./index-DEPXziQr.js";import"./index-8mm5rYzH.js";import"./throttle-RdvYAJ7W.js";import"./get-BRwdZQjD.js";import"./renderedTicksSlice-BzbX13g0.js";import"./axisSelectors-DSdgiRZF.js";import"./d3-scale-XjdmCel8.js";import"./resolveDefaultProps-i7ykL5qD.js";import"./isWellBehavedNumber-CNdP1Ytp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-rcoBq7rb.js";import"./chartDataContext-B9E6qJUl.js";import"./CategoricalChart-2sY7x5Tz.js";import"./CartesianAxis-C8GWRYR8.js";import"./Layer-B1lMYI05.js";import"./Text-zDVT9NAV.js";import"./DOMUtils-DVLfSCIT.js";import"./Label-Bax8HmP7.js";import"./ZIndexLayer-_81h3bN-.js";import"./types-CesEI09P.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-CVaSTbbY.js";import"./symbol-DX_EUXwT.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Y89N9bd1.js";import"./uniqBy-CLC5nVUH.js";import"./iteratee-D4GVextx.js";import"./Curve-DkPKhJGD.js";import"./step-BUpdG0kT.js";import"./AnimatedItems-C-tOmxqX.js";import"./useAnimationId-BLdV4NOG.js";import"./ActivePoints-CRPdmnzs.js";import"./Dot-BHbC6SWf.js";import"./RegisterGraphicalItemId-D75UFrcW.js";import"./ErrorBarContext-kr74OQbY.js";import"./GraphicalItemClipPath-hNmJpUVR.js";import"./SetGraphicalItem-CgGxkUt7.js";import"./getRadiusAndStrokeWidthFromDot-B3GO9P3F.js";import"./ActiveShapeUtils-Cmphxx7v.js";import"./Cross-CBjNFZem.js";import"./Rectangle-BcFE5tg_.js";import"./util-Dxo8gN5i.js";import"./Sector-Bm_uS1EM.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};
