import{r as n,R as t}from"./iframe-WAmwAwqv.js";import{L as p}from"./LineChart-CWpTLN8M.js";import{R as s}from"./zIndexSlice-B7760TIp.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-C_zE1Adm.js";import{X as d}from"./XAxis-C0HQ7bAn.js";import{Y as y}from"./YAxis-CvqgpJJX.js";import{L as u}from"./Legend-BexoLQlr.js";import{L as h}from"./Line-DurF_OOw.js";import{T as g}from"./Tooltip-B9ZEFjVQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DKs-TVlY.js";import"./index-BrLHScrZ.js";import"./index-BaF8VV2T.js";import"./index-dES25ELm.js";import"./index-BtWjEEaM.js";import"./throttle-DaWJmTtS.js";import"./get-C2VjdU0L.js";import"./axisSelectors-P4MAoEAr.js";import"./resolveDefaultProps-SfzQDdEE.js";import"./isWellBehavedNumber-BFdGE5VX.js";import"./d3-scale-B9CJnMVD.js";import"./renderedTicksSlice-QjUf-6mF.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-1FQk5Fvk.js";import"./chartDataContext-DyeMEqHY.js";import"./CategoricalChart-BhQV0u5E.js";import"./CartesianAxis-BJa8Ix1s.js";import"./Layer-CduouMU4.js";import"./Text-BQOM4h-3.js";import"./DOMUtils-BipZejVj.js";import"./useId-C6WCz-Hg.js";import"./useBackwardsCompatibleTheme-BbiUPV5J.js";import"./Label-BI58xTcy.js";import"./ZIndexLayer-BMgwtUUQ.js";import"./types-MF287rET.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DkWxdQn-.js";import"./symbol-BXLJz2oe.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DQMWT-KB.js";import"./uniqBy-D-IG-Bst.js";import"./iteratee-CJxJZXFJ.js";import"./Curve-sYCo-eDU.js";import"./step-BqQm5Gfz.js";import"./AnimatedItems-Dygs4a37.js";import"./useAnimationId-DhhiM2kh.js";import"./ActivePoints-CCxDSDuJ.js";import"./Dot-BMicymMQ.js";import"./RegisterGraphicalItemId-eBpDv0na.js";import"./ErrorBarContext-BIoHTUJq.js";import"./GraphicalItemClipPath-Dnbhxb72.js";import"./SetGraphicalItem-CTKvKbys.js";import"./getRadiusAndStrokeWidthFromDot-7A-aLYCL.js";import"./ActiveShapeUtils-C0CPvy3n.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-DH3iGmT5.js";import"./Rectangle-Dn9uS56j.js";import"./util-Dxo8gN5i.js";import"./Sector--Am-WAO6.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
