import{r as p,R as t}from"./iframe-iz9dRDhe.js";import{L as n}from"./LineChart-DijZ1Fky.js";import{R as s}from"./zIndexSlice-BdPqcxx_.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B9qruWPz.js";import{X as d}from"./XAxis-6Wrkyy5u.js";import{Y as y}from"./YAxis-DtrhiCef.js";import{L as u}from"./Legend-DwOR3Z5p.js";import{L as h}from"./Line-AbxFIqH7.js";import{T as g}from"./Tooltip-BG_htq1V.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CUdNLZqv.js";import"./resolveDefaultProps-DtNPAsTQ.js";import"./get-C2VjdU0L.js";import"./axisSelectors-2huN7QkS.js";import"./throttle-DE0tlCdA.js";import"./index-DxHaJGfQ.js";import"./index-Bl-8dy8S.js";import"./isWellBehavedNumber--SX7jZAJ.js";import"./d3-scale-DHC9WiBl.js";import"./index-mn3tws3H.js";import"./index-8jy5f1Un.js";import"./renderedTicksSlice-CEU3EycZ.js";import"./index-Bn7rp-xI.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DOgw209l.js";import"./chartDataContext-CeQ-Tm4w.js";import"./CategoricalChart-D__Jof4a.js";import"./CartesianAxis-CdElIjx1.js";import"./Layer-DYGhC4_B.js";import"./Text-CUS7a8VN.js";import"./DOMUtils-lupu9nOG.js";import"./useId-HDpOWxLn.js";import"./useBackwardsCompatibleTheme-BDaqedqa.js";import"./Label-C1iyqFpa.js";import"./ZIndexLayer-TqmbKYqx.js";import"./types-LFzxVX1I.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BfhqqNlw.js";import"./symbol-CqpTEBVx.js";import"./path-DyVhHtw_.js";import"./useElementOffset-jd_Y94ov.js";import"./uniqBy-D6bHLL80.js";import"./iteratee-ch_GTcmf.js";import"./Curve-D2o1LRz2.js";import"./step-C36qcU_Q.js";import"./AnimatedItems-Dc8Ivobd.js";import"./useAnimationId-7yr0q3Dd.js";import"./ActivePoints-DShx2jgH.js";import"./Dot-B7QvGJur.js";import"./RegisterGraphicalItemId-CDExOK2J.js";import"./ErrorBarContext-CNF3begD.js";import"./GraphicalItemClipPath-C5R-amEZ.js";import"./SetGraphicalItem-CMqF7RNk.js";import"./getRadiusAndStrokeWidthFromDot-CQjtIaHq.js";import"./ActiveShapeUtils-DFPOUViC.js";import"./useGraphicalItemIdentity-MtWjlwkT.js";import"./Cross-DRdHpkte.js";import"./Rectangle-CC1ns2p9.js";import"./util-Dxo8gN5i.js";import"./Sector-DcPkBzZk.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
