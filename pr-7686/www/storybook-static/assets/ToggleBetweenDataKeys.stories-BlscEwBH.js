import{r as n,R as t}from"./iframe-BcaWFD7u.js";import{L as p}from"./LineChart-Y7MqeJQt.js";import{R as s}from"./zIndexSlice-bS7cYBKO.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-ZOFM-CTl.js";import{X as d}from"./XAxis-DD0jXpQz.js";import{Y as y}from"./YAxis-CG4baE84.js";import{L as u}from"./Legend-gkr2D6-Y.js";import{L as h}from"./Line-CtVnRj6L.js";import{T as g}from"./Tooltip-VxBAnM0q.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C-VIMVig.js";import"./index-Cgtj3oPE.js";import"./index-xxpNQb8f.js";import"./index-DD-aKuCi.js";import"./index-DVZ7kkny.js";import"./throttle-Dz1UTb_M.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D0fMBFBE.js";import"./resolveDefaultProps-CqMML5sA.js";import"./isWellBehavedNumber-BP6UcqH1.js";import"./d3-scale-CjZBqtB1.js";import"./renderedTicksSlice-naYz1W_2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CjI4gSTo.js";import"./chartDataContext-BwgPsUMn.js";import"./CategoricalChart-CgNZHuyL.js";import"./CartesianAxis-D8v1d9Y9.js";import"./Layer-BhtJX80Y.js";import"./Text-C02gRxFY.js";import"./DOMUtils-BvzyNhX6.js";import"./useId-Dsncsbnj.js";import"./useBackwardsCompatibleTheme-R44_v_zH.js";import"./Label-C-frAhmf.js";import"./ZIndexLayer-CI7tJTJS.js";import"./types-BCqYYX1O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BGM_JZYv.js";import"./symbol-BtXaAdka.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DHdFJydJ.js";import"./uniqBy-Bkj6aSgv.js";import"./iteratee-Bj7EDGxK.js";import"./Curve-DaA6zKZn.js";import"./step-CXwuHX1W.js";import"./AnimatedItems-e5mGDN3Y.js";import"./useAnimationId-DDgucPPX.js";import"./ActivePoints-CvqJbqjR.js";import"./Dot-DD0Nn15x.js";import"./RegisterGraphicalItemId-C3WPLV-4.js";import"./ErrorBarContext-CyXVsRn2.js";import"./GraphicalItemClipPath-BL_hooiS.js";import"./SetGraphicalItem-BClSdCLV.js";import"./getRadiusAndStrokeWidthFromDot-DyVM-7ZZ.js";import"./ActiveShapeUtils-BL97HDhi.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-DXsiCygx.js";import"./Rectangle-BYLlJBXy.js";import"./util-Dxo8gN5i.js";import"./Sector-l1-yrPuy.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
