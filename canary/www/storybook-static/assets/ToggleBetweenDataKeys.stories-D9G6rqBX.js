import{r as p,R as t}from"./iframe-CiBEWf8Q.js";import{L as n}from"./LineChart-weBr3X4t.js";import{R as s}from"./zIndexSlice-CF6C51G2.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Iviq5fOX.js";import{X as d}from"./XAxis-CbgzK4MI.js";import{Y as y}from"./YAxis-By5XyMD9.js";import{L as u}from"./Legend-CWcnCzB9.js";import{L as h}from"./Line-CSsqXF3e.js";import{T as g}from"./Tooltip-C8U9lybJ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DwV4v4eg.js";import"./resolveDefaultProps-Cheer07s.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B1sNcXcW.js";import"./throttle-Br6qQatL.js";import"./index-ChQP2zgF.js";import"./index-DQl4yRvy.js";import"./isWellBehavedNumber-CTCV4BvK.js";import"./d3-scale-DOQDVnBo.js";import"./index-B7Lle2z-.js";import"./index-4YB-Ccb_.js";import"./renderedTicksSlice-CoMChRdU.js";import"./index-2IKC_5hn.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-J5V6zdaG.js";import"./chartDataContext-DDFLXgxQ.js";import"./CategoricalChart-D02G0NrG.js";import"./CartesianAxis-DSFQC2E9.js";import"./Layer-Cb-HZ0sR.js";import"./Text-CsV3VR-3.js";import"./DOMUtils-9fJMrmCV.js";import"./useId-fAK_bkox.js";import"./useBackwardsCompatibleTheme-CXlfy45z.js";import"./Label-DPc6TFRy.js";import"./ZIndexLayer-D9-T3nqJ.js";import"./types-P989fbDX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DnAcSvRt.js";import"./symbol-BUPcR90A.js";import"./path-DyVhHtw_.js";import"./useElementOffset-veMYPWYT.js";import"./uniqBy-DZZnv1Z6.js";import"./iteratee-DYSkR0rl.js";import"./Curve-smW2CuEl.js";import"./step-CTJEDYn1.js";import"./AnimatedItems-BvlvVcPM.js";import"./useAnimationId-DjyXFux3.js";import"./ActivePoints-C9WTSqpm.js";import"./Dot-CmAzU2u7.js";import"./RegisterGraphicalItemId-CHeBqfEu.js";import"./ErrorBarContext-BpAFB1gw.js";import"./GraphicalItemClipPath-DMEdIjUU.js";import"./SetGraphicalItem-CegZ7sSO.js";import"./getRadiusAndStrokeWidthFromDot-bLR0mN7s.js";import"./ActiveShapeUtils-BlIjGu9a.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-n30rT6wX.js";import"./Rectangle-CGbECz4J.js";import"./util-Dxo8gN5i.js";import"./Sector-BXnlAyS8.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
