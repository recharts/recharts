import{r as p,R as t}from"./iframe-BP-lIJn6.js";import{L as n}from"./LineChart-Dk5Llgjl.js";import{R as s}from"./zIndexSlice-D3RgJgQF.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DjveYuJT.js";import{X as d}from"./XAxis-D7UL0yEG.js";import{Y as y}from"./YAxis-Dyx7Nivk.js";import{L as u}from"./Legend-CqS47HBY.js";import{L as h}from"./Line-Do4a8iV9.js";import{T as g}from"./Tooltip-ChEod8ex.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BGn36pC9.js";import"./resolveDefaultProps-BpLU83gk.js";import"./get-cF5BDHN6.js";import"./axisSelectors-B6bM08CR.js";import"./throttle-CRwrBkn8.js";import"./index-B8dZU-9J.js";import"./index-C8ITQajG.js";import"./isWellBehavedNumber-B-TYzgiQ.js";import"./d3-scale-BUOxWIbI.js";import"./index-BOoGZrpB.js";import"./index-j3_diSu4.js";import"./renderedTicksSlice-B2e0mRjq.js";import"./index-BmFIm_LJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BrvlcuUX.js";import"./chartDataContext-DxnoCrzs.js";import"./CategoricalChart-BLzi3Mv1.js";import"./CartesianAxis-B7dTibl7.js";import"./Layer-Dh6XQbJK.js";import"./Text-sFd385s3.js";import"./pageBackground-BxeZOm5U.js";import"./useId-BEGNTi1u.js";import"./useBackwardsCompatibleTheme-CNFi_woZ.js";import"./Label-eMzNaTJc.js";import"./ZIndexLayer-C0Gq1XyH.js";import"./dataEntryStyles-DtR4SG-M.js";import"./types-BDcuyNFB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-D9c9uDF_.js";import"./symbol-DhQfft-S.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B4j4ZMKA.js";import"./uniqBy-4sj4Loax.js";import"./iteratee-SNrVc_V2.js";import"./isArguments-yB-y1yaH.js";import"./Curve-B-WHWf6z.js";import"./step-1Avpntyj.js";import"./activeStyles-CaOdi5W_.js";import"./useAnimationId-BeUNfbh5.js";import"./ActivePoints-BnUbRfQW.js";import"./Dot-B-Fku2ox.js";import"./RegisterGraphicalItemId-CJi8bpow.js";import"./ErrorBarContext-BVsxDLFP.js";import"./GraphicalItemClipPath-_Vh94eGb.js";import"./SetGraphicalItem-CL36LKX_.js";import"./getRadiusAndStrokeWidthFromDot-Bcq6fsJt.js";import"./ActiveShapeUtils-QZxg5z0Q.js";import"./useEffectiveDataKey-C-3Q7bIW.js";import"./Cross-HFdQ01ZH.js";import"./Rectangle-CNpXiGQR.js";import"./util-Dxo8gN5i.js";import"./Sector-IagwWihv.js";const Rt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Tt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Tt as __namedExportsOrder,Rt as default};
