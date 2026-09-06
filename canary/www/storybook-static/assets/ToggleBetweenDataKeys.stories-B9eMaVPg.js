import{r as n,R as t}from"./iframe-C98xM-14.js";import{L as p}from"./LineChart-Dpl3x1Mq.js";import{R as s}from"./zIndexSlice-PFqQVngT.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-EJt33FZ5.js";import{X as d}from"./XAxis-CsWwdt7Q.js";import{Y as y}from"./YAxis-CaqCP2Lk.js";import{L as u}from"./Legend-DuYK6dO2.js";import{L as h}from"./Line-vvPtX59c.js";import{T as g}from"./Tooltip-CcjpX53J.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DNpWLRvv.js";import"./resolveDefaultProps-BpgNO45K.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DE9vQUUE.js";import"./throttle-Cpn-KPW0.js";import"./index-BfkVHUSN.js";import"./index-lWYWFl_c.js";import"./isWellBehavedNumber-B0B1V1Mw.js";import"./d3-scale-BIaFt0TH.js";import"./index-B33qjCts.js";import"./index-CRw9oTKs.js";import"./renderedTicksSlice-BVBdj9en.js";import"./index-Bwd0n8ve.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DdfFkL89.js";import"./chartDataContext-BX4jELOi.js";import"./CategoricalChart-Cg6rdWul.js";import"./CartesianAxis-BhBvKKe-.js";import"./Layer-DV2USN9H.js";import"./Text-CdsOrPG8.js";import"./DOMUtils-Cyba50bX.js";import"./useId-gkj8hVD1.js";import"./useBackwardsCompatibleTheme-CnvikNkE.js";import"./Label-6WZ-bs73.js";import"./ZIndexLayer-_jlJOhPE.js";import"./types-C3nHa31Z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-D5VKxaV3.js";import"./symbol-Bb_1-nQc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BwcDYxj_.js";import"./uniqBy-KZWDygXq.js";import"./iteratee-CBQ5EdUG.js";import"./Curve-C4kxUnUy.js";import"./step-CKRTH0G6.js";import"./AnimatedItems-CTflnzuI.js";import"./useAnimationId-B6O86EG4.js";import"./ActivePoints-Bm8Ngiah.js";import"./Dot-BVHRbG7p.js";import"./RegisterGraphicalItemId-CrKJMoiy.js";import"./ErrorBarContext-eOyXWxlr.js";import"./GraphicalItemClipPath-Dn-XuIGK.js";import"./SetGraphicalItem-CJTGWUG8.js";import"./getRadiusAndStrokeWidthFromDot-BCR9SUwJ.js";import"./ActiveShapeUtils-bQFjdaPv.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-CmEoGz0N.js";import"./Rectangle-EqmP3HLD.js";import"./util-Dxo8gN5i.js";import"./Sector-BcT2aBee.js";const xt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
