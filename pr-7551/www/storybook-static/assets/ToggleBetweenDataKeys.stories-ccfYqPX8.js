import{r as n,R as t}from"./iframe-DeA6Jpe3.js";import{L as p}from"./LineChart-DX8Xurzd.js";import{R as s}from"./zIndexSlice-BC0f17EQ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-ca-mWNXH.js";import{X as d}from"./XAxis-CWYh7d5o.js";import{Y as y}from"./YAxis-5Hp6S-YS.js";import{L as u}from"./Legend-BtwoIRQl.js";import{L as h}from"./Line-DX7Ebcir.js";import{T as g}from"./Tooltip-DhmV0FMM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B64-BdAv.js";import"./index-DH7_6A6k.js";import"./index-_OzwQHli.js";import"./index-COu95pDD.js";import"./index-Cgi5iiaO.js";import"./throttle-CrUA5muc.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BS64flHf.js";import"./axisSelectors-D1wvQQnO.js";import"./resolveDefaultProps-CSkrQNmh.js";import"./isWellBehavedNumber-QapkByze.js";import"./d3-scale-BpDmqGQL.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BM30Ht3L.js";import"./chartDataContext-DUEOLv6k.js";import"./CategoricalChart-BGS1Syzx.js";import"./CartesianAxis-D6SDyMBH.js";import"./Layer-EcnCd1Gq.js";import"./Text-D2SjxJqk.js";import"./DOMUtils-Bt_ISucd.js";import"./Label-DxF7lRqe.js";import"./ZIndexLayer-B9FDBqTJ.js";import"./types-Dc_zINiL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BZlpiwQm.js";import"./symbol-CiFz0GEe.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CIvcKMtZ.js";import"./uniqBy-UFmqCWmo.js";import"./iteratee-syIuvkdt.js";import"./Curve-hairJGsw.js";import"./step-cipjXRUD.js";import"./AnimatedItems-C9_zvyTE.js";import"./useAnimationId-DmZXjvo1.js";import"./ActivePoints-DXrZqI9p.js";import"./Dot-BnJj13Wl.js";import"./RegisterGraphicalItemId-DYqiPt6w.js";import"./ErrorBarContext-DdrEBPjm.js";import"./GraphicalItemClipPath-BPKm-IHy.js";import"./SetGraphicalItem-D9c-Ll1Q.js";import"./getRadiusAndStrokeWidthFromDot-JO35KbEr.js";import"./ActiveShapeUtils-DhlcDB3a.js";import"./Cross-CJOqCG5U.js";import"./Rectangle-CQJfdyEy.js";import"./util-Dxo8gN5i.js";import"./Sector-aK76tY29.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
