import{r as p,R as t}from"./iframe-Dpvc5Yjz.js";import{L as n}from"./LineChart-Ds7U4xIc.js";import{R as s}from"./zIndexSlice-Dho3i8T5.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Bmc5nWGG.js";import{X as d}from"./XAxis-DH81C7oh.js";import{Y as y}from"./YAxis-CRJBTUK4.js";import{L as u}from"./Legend-T_pItw78.js";import{L as h}from"./Line-D72OFrJ_.js";import{T as g}from"./Tooltip-BQAbbeVI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Y3ZAzA3v.js";import"./resolveDefaultProps-CRYxfVCI.js";import"./get-C2VjdU0L.js";import"./axisSelectors-B0MCU6bk.js";import"./throttle-ChqzHVQ0.js";import"./index-Bl2eW-CY.js";import"./index-CVG-Xgr5.js";import"./isWellBehavedNumber-C1q3yIjs.js";import"./d3-scale-B7bmEbYw.js";import"./index-D1MAn6gI.js";import"./index-BGJHRM8B.js";import"./renderedTicksSlice-oAd8rZHP.js";import"./index-hEOzvS9k.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-AKEzFsPm.js";import"./chartDataContext-BXOKjidD.js";import"./CategoricalChart-kI0T_bBx.js";import"./CartesianAxis-6_XALvtr.js";import"./Layer-DB4rVtgq.js";import"./Text-DV8ChouY.js";import"./DOMUtils-B1JUaPdm.js";import"./useId-BTdNu9Gm.js";import"./useBackwardsCompatibleTheme-CtPFlS3s.js";import"./Label-DIzmtP1_.js";import"./ZIndexLayer-BroloYIp.js";import"./types-PTwxeL9Y.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BEaJ5bek.js";import"./symbol-CoOSEH1J.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DFxcHkws.js";import"./uniqBy-DPOJBwGI.js";import"./iteratee-BEgn-_6q.js";import"./Curve-D8gKKjbw.js";import"./step-CbGZbdjm.js";import"./AnimatedItems-Dqknvwue.js";import"./useAnimationId-8x9555ZS.js";import"./ActivePoints-_iSEV7nC.js";import"./Dot-BbHheHK4.js";import"./RegisterGraphicalItemId-BrxaJpgc.js";import"./ErrorBarContext-DgnCQmwB.js";import"./GraphicalItemClipPath-DoYX_rje.js";import"./SetGraphicalItem-WpaZzJ--.js";import"./getRadiusAndStrokeWidthFromDot-BNtk_UOf.js";import"./ActiveShapeUtils-B4yE9O3b.js";import"./useGraphicalItemIdentity-B6UUBA8h.js";import"./Cross-DAmovQ-J.js";import"./Rectangle-DMGyTNc0.js";import"./util-Dxo8gN5i.js";import"./Sector-DZDoxeje.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
