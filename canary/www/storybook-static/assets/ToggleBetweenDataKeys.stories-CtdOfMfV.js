import{r as p,R as t}from"./iframe-C1szs8Ge.js";import{L as n}from"./LineChart-CRBtmobr.js";import{R as s}from"./zIndexSlice-2Z2wgmDW.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-C1NQ-B2u.js";import{X as d}from"./XAxis-DAR-gQPA.js";import{Y as y}from"./YAxis-BL_YScKz.js";import{L as u}from"./Legend-EF6fUOtk.js";import{L as h}from"./Line-BHGjXSGr.js";import{T as g}from"./Tooltip-CuajHWD2.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-xd3kaPdN.js";import"./resolveDefaultProps-CIiYtXni.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D9npcJPs.js";import"./throttle-BnhEbDBT.js";import"./index-Bs58vI0d.js";import"./index-DcPa8fOp.js";import"./polarAxisSelectors-Du9qp_Aq.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D4TUcbxA.js";import"./index-CRFlBobz.js";import"./index-D0v9EDwx.js";import"./renderedTicksSlice-CTsziWKi.js";import"./index-BmvynZon.js";import"./CartesianChart-CXVzGtkA.js";import"./ZIndexPortal-DqFnA3uG.js";import"./CategoricalChart-dJgQ9xv_.js";import"./CartesianAxis-8dKjDOC0.js";import"./Layer-KO-TauTm.js";import"./Text-BAXgr8vS.js";import"./DOMUtils-DrwuOTMG.js";import"./ZIndexLayer-n44qhyKx.js";import"./Label-DKy-t54T.js";import"./types-DbKLPbYB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./Symbols-By-_RD8m.js";import"./symbol-D-xguMnA.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-DO3waM5C.js";import"./dataEntryStyles-D1ZH1qoE.js";import"./useElementOffset-B3huUP7p.js";import"./uniqBy-BgGgOORw.js";import"./iteratee-CroL2MN8.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BGMmiUdq.js";import"./step-CEIdKdZW.js";import"./LabelList-iP8lFrAf.js";import"./ActivePoints-CPsO1qxs.js";import"./Dot-DMbI3mI2.js";import"./activeStyles-CqRrjByh.js";import"./useAnimationId-Cg9ej0wY.js";import"./ErrorBarContext-C-G-Mak5.js";import"./SetGraphicalItem-DIZkXs21.js";import"./getRadiusAndStrokeWidthFromDot-DKxug9PK.js";import"./ActiveShapeUtils-Cmzt23TH.js";import"./useEffectiveDataKey-SSLwUhsN.js";import"./Cross-D0i44YDT.js";import"./Rectangle-Qa1VLo8n.js";import"./util-Dxo8gN5i.js";import"./Sector-4Lf6e-B4.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Rt as __namedExportsOrder,kt as default};
