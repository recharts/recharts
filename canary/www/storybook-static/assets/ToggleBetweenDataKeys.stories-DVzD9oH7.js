import{r as p,R as t}from"./iframe-Brw_3xg7.js";import{L as n}from"./LineChart-D5Vyj_tx.js";import{R as s}from"./zIndexSlice-2iAxrZkm.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BxIxxakc.js";import{X as d}from"./XAxis-DXhKRI9c.js";import{Y as y}from"./YAxis-B_qMueqj.js";import{L as u}from"./Legend-BbfEXsAv.js";import{L as h}from"./Line-BR2md8Jx.js";import{T as g}from"./Tooltip-vXTAbAqr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CMScH4Y-.js";import"./resolveDefaultProps-6Y628-3q.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BgtJq2Kp.js";import"./throttle-ConCS3s7.js";import"./index-CtKZ7ilo.js";import"./index-BzcphCAG.js";import"./isWellBehavedNumber-CKWY2x6w.js";import"./d3-scale-DDiKCNKi.js";import"./index-BcnaSdn8.js";import"./index-DAIxs-aJ.js";import"./renderedTicksSlice-7YaTp-wU.js";import"./index-DZwFur8w.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D0m-K2vW.js";import"./chartDataContext-B_uwNVrC.js";import"./CategoricalChart-CtbAzaJE.js";import"./CartesianAxis-DBWQUVsj.js";import"./Layer-U4JZqCxa.js";import"./Text-DAJ7DyY-.js";import"./DOMUtils-Df1YjqfK.js";import"./useId-DReBIxno.js";import"./useBackwardsCompatibleTheme-bimwwtgB.js";import"./Label-CpCnMIaY.js";import"./ZIndexLayer-DvhvnUDg.js";import"./types-BTkYx2NR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DBitbmPf.js";import"./symbol-DlOMBTws.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C0IEKM2v.js";import"./uniqBy-DcxgoEQg.js";import"./iteratee-DhCw4nN3.js";import"./Curve-C9eVciME.js";import"./step-Bi6RETvz.js";import"./AnimatedItems-O-Ra8tLQ.js";import"./useAnimationId-LBf_tWSw.js";import"./ActivePoints-CFOMS5xz.js";import"./Dot-CwLVs_ZX.js";import"./RegisterGraphicalItemId-11bybKxG.js";import"./ErrorBarContext-FTmrznrA.js";import"./GraphicalItemClipPath-SQ9_TryA.js";import"./SetGraphicalItem-CcGmMfg9.js";import"./getRadiusAndStrokeWidthFromDot-DFfjCAar.js";import"./ActiveShapeUtils-DolYUreE.js";import"./useGraphicalItemIdentity-CdCNj1VU.js";import"./Cross-CO1parlB.js";import"./Rectangle-CNj8eYAZ.js";import"./util-Dxo8gN5i.js";import"./Sector-CvCebKc6.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
