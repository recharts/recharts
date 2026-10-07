import{r as p,R as t}from"./iframe-BMzdo2OO.js";import{L as n}from"./LineChart-Dxw0wxPn.js";import{R as s}from"./zIndexSlice-ChqivVgc.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Da3I8a2m.js";import{X as d}from"./XAxis-D0FZw3tk.js";import{Y as y}from"./YAxis-BNMn58Qu.js";import{L as u}from"./Legend-Drlr6PEv.js";import{L as h}from"./Line-HvZ-B3uy.js";import{T as g}from"./Tooltip-BCXNVYKW.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DZyZLCSd.js";import"./resolveDefaultProps-DMOVc-U0.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DePv-gjT.js";import"./throttle-Bn5L-Spy.js";import"./index-DcvaXuoD.js";import"./index-CuowPYJL.js";import"./isWellBehavedNumber-BxxKk3_X.js";import"./d3-scale-FRN-50hy.js";import"./index-IxxRTzdH.js";import"./index-BBWSU8H0.js";import"./renderedTicksSlice-D7KSBl5-.js";import"./index-QGNmKXB_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CJTLTCmg.js";import"./chartDataContext-D12dRZ2D.js";import"./CategoricalChart-DgT48bow.js";import"./CartesianAxis-BwqV9jtY.js";import"./Layer-DI_tMp3J.js";import"./Text-BUhrLoyp.js";import"./DOMUtils-CENQr-dm.js";import"./useId-CISxasqF.js";import"./useBackwardsCompatibleTheme-COHZZMqy.js";import"./Label-DXGFYQ6y.js";import"./ZIndexLayer-J0q0oOXM.js";import"./types-XidxuGSX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Bs3oLubR.js";import"./symbol-B1gI76t2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CNLeBMxi.js";import"./uniqBy-DlBrbasH.js";import"./iteratee-k4aeFlqG.js";import"./Curve--AxPXvQm.js";import"./step-C6IWo9eW.js";import"./AnimatedItems-aWQxtrPp.js";import"./useAnimationId-DMkWUgfv.js";import"./ActivePoints-DbFNvnJX.js";import"./Dot-C8FkbxSc.js";import"./RegisterGraphicalItemId-CdkGqZbg.js";import"./ErrorBarContext-Dvnk9Osp.js";import"./GraphicalItemClipPath-jODxuvX2.js";import"./SetGraphicalItem-fUYBwl3z.js";import"./getRadiusAndStrokeWidthFromDot-CrQ8YxTR.js";import"./ActiveShapeUtils-P-2_LOiD.js";import"./useGraphicalItemIdentity-p0tnB9lX.js";import"./Cross-BtRQT9ij.js";import"./Rectangle-CYGVySvu.js";import"./util-Dxo8gN5i.js";import"./Sector-dxcau_Jz.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
