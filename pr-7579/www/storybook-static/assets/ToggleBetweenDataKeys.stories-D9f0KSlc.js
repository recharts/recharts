import{r as n,R as t}from"./iframe-Bfq89VA1.js";import{L as p}from"./LineChart-Tu09VAex.js";import{R as s}from"./zIndexSlice-CIiurCy7.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CUD_IRpk.js";import{X as d}from"./XAxis-XWWA5Vcg.js";import{Y as y}from"./YAxis-BKOVychP.js";import{L as u}from"./Legend-BUmlfFwj.js";import{L as h}from"./Line-BUzvUqJl.js";import{T as g}from"./Tooltip-DsAve4cr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Clucjzln.js";import"./index-CJwKc2JD.js";import"./index-C5yh5hWX.js";import"./index-CYj6WtTt.js";import"./index-BrZplGoV.js";import"./throttle-D9Dxi9p7.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-Bq1WS_1z.js";import"./axisSelectors-DeSjN-yN.js";import"./resolveDefaultProps-sI76rt8e.js";import"./isWellBehavedNumber-Cjy03S2S.js";import"./d3-scale-DNdF6BGI.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BR20NBVb.js";import"./chartDataContext-CtFpG3fr.js";import"./CategoricalChart-C2BN44hW.js";import"./CartesianAxis-BwpzYsrw.js";import"./Layer-Ddny-Z-5.js";import"./Text-hgAABJUd.js";import"./DOMUtils-D5O5VN8V.js";import"./Label-TzQ05lix.js";import"./ZIndexLayer-BNbeMphj.js";import"./types-BzfB60xK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-sZizIm6P.js";import"./symbol-mIOUQ11t.js";import"./path-DyVhHtw_.js";import"./useElementOffset-JKh4KBSu.js";import"./uniqBy-Bd3SP3U8.js";import"./iteratee-C88R0o-M.js";import"./Curve-DuW3zwTN.js";import"./step-De5xdkMr.js";import"./AnimatedItems-u8tbY5MQ.js";import"./useAnimationId-nFx4hlTa.js";import"./ActivePoints-BuFY0qPt.js";import"./Dot-CdihK_4o.js";import"./RegisterGraphicalItemId-Cqi3B4nU.js";import"./ErrorBarContext-C94DxYOd.js";import"./GraphicalItemClipPath-BPnHFI7W.js";import"./SetGraphicalItem-COSatqks.js";import"./getRadiusAndStrokeWidthFromDot-SR9W1edy.js";import"./ActiveShapeUtils-DWYip-It.js";import"./Cross-D285--m4.js";import"./Rectangle-TJ7hJnR0.js";import"./util-Dxo8gN5i.js";import"./Sector-Bf9g04ER.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
