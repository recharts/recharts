import{r as p,R as t}from"./iframe-E8y1LHOl.js";import{L as n}from"./LineChart-BIbrQYcB.js";import{R as s}from"./zIndexSlice-CP2K5fjd.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CfUCRFt7.js";import{X as d}from"./XAxis-CQma6gAW.js";import{Y as y}from"./YAxis-DUr2r86j.js";import{L as u}from"./Legend-DXN7z_bl.js";import{L as h}from"./Line-DkSRoaUJ.js";import{T as g}from"./Tooltip-DsmV1b_B.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C8PWTH_z.js";import"./resolveDefaultProps-Dp5H_7QD.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Bx3EdZdn.js";import"./throttle-BI-R_Jee.js";import"./index-B9tVeqRW.js";import"./index-DPYTKeUs.js";import"./isWellBehavedNumber-CRMuJk7d.js";import"./d3-scale-DaRSGBEX.js";import"./index-uIxCQJLq.js";import"./index-BIh6D11j.js";import"./renderedTicksSlice-C2dkiWvM.js";import"./index-ozGQLW8c.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BBRLk3sY.js";import"./chartDataContext-BjS41WHN.js";import"./CategoricalChart-ZbKNQGxB.js";import"./CartesianAxis-Cha6t-QP.js";import"./Layer-Bg2OEiKj.js";import"./Text-BdpTntNA.js";import"./DOMUtils-8lkeZOFq.js";import"./useId-BmVi-H88.js";import"./useBackwardsCompatibleTheme-vYz6naZ1.js";import"./Label-DN0LsbYZ.js";import"./ZIndexLayer-m7llBpH3.js";import"./types-Din7IpfN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CXHBdrP3.js";import"./symbol-B6pGvMhL.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B-KqThyE.js";import"./uniqBy-BLB5pAg_.js";import"./iteratee-DAhSWhx1.js";import"./Curve-CzvWk0Dg.js";import"./step-uXGSGbmf.js";import"./AnimatedItems-c6sC2Ph5.js";import"./useAnimationId-MpB0cIEG.js";import"./ActivePoints-wk2Fpufe.js";import"./Dot-C5og9dHv.js";import"./RegisterGraphicalItemId-zHC8jjTe.js";import"./ErrorBarContext-Bj9hGQm8.js";import"./GraphicalItemClipPath-B1o9CCBQ.js";import"./SetGraphicalItem-BwH3S5eX.js";import"./getRadiusAndStrokeWidthFromDot-xNb8nybi.js";import"./ActiveShapeUtils-CpmlaViF.js";import"./useGraphicalItemIdentity-C1Aa_3nu.js";import"./Cross-CCHmuHmD.js";import"./Rectangle-D4vCsGb7.js";import"./util-Dxo8gN5i.js";import"./Sector-B6g6C-iG.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
