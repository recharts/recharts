import{r as n,R as t}from"./iframe-DZAd3BLm.js";import{L as p}from"./LineChart-DZwZBqnZ.js";import{R as s}from"./zIndexSlice-DDhKiy1V.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-R5ihndfA.js";import{X as d}from"./XAxis-5nXxnrK2.js";import{Y as y}from"./YAxis-CI4kUv4b.js";import{L as u}from"./Legend-B8pONA4U.js";import{L as h}from"./Line-CAxB2TgS.js";import{T as g}from"./Tooltip-D3BArYy6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C3K_a1sL.js";import"./index-CrgUN8tp.js";import"./index-DE0KsAyL.js";import"./index-DpSoO6Ha.js";import"./index-Cx0mUDGV.js";import"./throttle-CxrkEaDJ.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CX0U1NQS.js";import"./axisSelectors-BxAq0Acb.js";import"./resolveDefaultProps-D9KqOm2-.js";import"./isWellBehavedNumber-dz6lCIva.js";import"./d3-scale-CqJYvWj_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D6ylJNpo.js";import"./chartDataContext-qN5e6uaD.js";import"./CategoricalChart-CsBU8lh_.js";import"./CartesianAxis-Cc4EZfV0.js";import"./Layer-BfiQlN-H.js";import"./Text-Q1Wur-Yf.js";import"./DOMUtils-DWsppMFw.js";import"./Label-Dx7t0PWj.js";import"./ZIndexLayer-CmOHtK31.js";import"./types-CcoYjlf-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-DjKvefa5.js";import"./symbol-SBXaPnm-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CU9nLeay.js";import"./uniqBy-DA442kbh.js";import"./iteratee-DghfLlN_.js";import"./Curve-BGXYHzuU.js";import"./step-CHKBUDm2.js";import"./AnimatedItems-C7LWLCES.js";import"./useAnimationId-CWfIJf2v.js";import"./ActivePoints-DJ9bpUbD.js";import"./Dot-DlyPxXLd.js";import"./RegisterGraphicalItemId-DxWgL3YR.js";import"./ErrorBarContext-BoJHJa4K.js";import"./GraphicalItemClipPath-CynJPOAi.js";import"./SetGraphicalItem-Bs1R-JeP.js";import"./getRadiusAndStrokeWidthFromDot-DGJvqL22.js";import"./ActiveShapeUtils-Tj5AoBDs.js";import"./Cross-DJaJNlOI.js";import"./Rectangle-HzHPhy_K.js";import"./util-Dxo8gN5i.js";import"./Sector-DYSWp28k.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Et=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Et as __namedExportsOrder,Ct as default};
