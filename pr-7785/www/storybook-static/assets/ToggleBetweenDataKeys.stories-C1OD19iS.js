import{r as p,R as t}from"./iframe-WBosH1gH.js";import{L as n}from"./LineChart-CaPvgBv8.js";import{R as s}from"./zIndexSlice-DY0UoJ4l.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-C6SyUmjq.js";import{X as d}from"./XAxis-m7Q_C79b.js";import{Y as y}from"./YAxis-CenhW_SV.js";import{L as u}from"./Legend-DKwORgxj.js";import{L as h}from"./Line-CfXL_ESg.js";import{T as g}from"./Tooltip-rif23icC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B0qr77rU.js";import"./resolveDefaultProps-B2r9_mKe.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DVaMQoZI.js";import"./throttle-XsvTB-sR.js";import"./index-BwqgnM9k.js";import"./index-VfXF9cRB.js";import"./isWellBehavedNumber-BkYn7WHA.js";import"./d3-scale-D0rOwI1X.js";import"./index-vxpjOmvK.js";import"./index-0eRMU_eW.js";import"./renderedTicksSlice-w1R0M-NQ.js";import"./index-C25eF-tn.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DVqibfCK.js";import"./chartDataContext-CniWriLR.js";import"./CategoricalChart-DG5t8KxI.js";import"./CartesianAxis-Bjry6SmX.js";import"./Layer-DlEXHs0c.js";import"./Text-DUKo7lId.js";import"./DOMUtils-Cua0edvn.js";import"./useId-QCeL7Xpe.js";import"./useBackwardsCompatibleTheme-Dm9WBqGk.js";import"./Label-BCHXbIDv.js";import"./ZIndexLayer-Ceqldfm9.js";import"./types-CXdVyMYF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CDs3PTZo.js";import"./symbol-DTBAqEY2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-VmdMhEAv.js";import"./uniqBy-CDDW1t5J.js";import"./iteratee-C0LkWsI5.js";import"./Curve-CWu1k2x-.js";import"./step-774Uk35K.js";import"./AnimatedItems-DJehR24_.js";import"./useAnimationId-B1IfIBZT.js";import"./ActivePoints-CpdsnThn.js";import"./Dot-DxEZ3OZ8.js";import"./RegisterGraphicalItemId-CooVBKDB.js";import"./ErrorBarContext-LEGekQDa.js";import"./GraphicalItemClipPath-t-5ZkTcv.js";import"./SetGraphicalItem-C5z9UzHr.js";import"./getRadiusAndStrokeWidthFromDot-CwInr6tA.js";import"./ActiveShapeUtils-DhiQ5sHd.js";import"./useGraphicalItemIdentity-BcmjlH91.js";import"./Cross-4kelqF0b.js";import"./Rectangle-CCQKHFOK.js";import"./util-Dxo8gN5i.js";import"./Sector-CQKr0wQc.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
