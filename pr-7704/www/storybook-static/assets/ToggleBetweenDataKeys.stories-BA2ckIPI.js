import{r as n,R as t}from"./iframe-CVDCphxx.js";import{L as p}from"./LineChart-DYwp0wsB.js";import{R as s}from"./zIndexSlice-D76eaAVt.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DoXp0aHg.js";import{X as d}from"./XAxis-BaXZzVL8.js";import{Y as y}from"./YAxis-BxEmWMWe.js";import{L as u}from"./Legend-BL0GsnlB.js";import{L as h}from"./Line-CBX_YG-s.js";import{T as g}from"./Tooltip-Bd8tlp4z.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DEnb7ufM.js";import"./resolveDefaultProps-B_5oDYmC.js";import"./get-C2VjdU0L.js";import"./axisSelectors-ChjpNCZD.js";import"./throttle-t8E79NJX.js";import"./index-BJO-ep7J.js";import"./index-BpxiUomY.js";import"./isWellBehavedNumber-DVmFYWt0.js";import"./d3-scale-Cu204p6o.js";import"./index-CihE6hhr.js";import"./index-DCMHKzI9.js";import"./renderedTicksSlice-B1XRs7d0.js";import"./index-BJY-g_ad.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D47jpHMU.js";import"./chartDataContext-C-FdSEwK.js";import"./CategoricalChart-D7b0lra6.js";import"./CartesianAxis-BZu_fnrb.js";import"./Layer-CMIguF8f.js";import"./Text-Dgr5qdov.js";import"./DOMUtils-DF_qw-1b.js";import"./useId-CWzKPTKL.js";import"./useBackwardsCompatibleTheme-MdPX2i5n.js";import"./Label-CplunMl3.js";import"./ZIndexLayer-BeV_pa6H.js";import"./types-qF5qaMWi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CHo6RFpT.js";import"./symbol-CeZjzcHj.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dlxs2KSy.js";import"./uniqBy-BQLa7Owx.js";import"./iteratee-BocsKiRY.js";import"./Curve-BAi3bHUk.js";import"./step-CnFrEUK7.js";import"./AnimatedItems-BHXlTf3v.js";import"./useAnimationId-Bwtwv5PP.js";import"./ActivePoints-wrDHu4bh.js";import"./Dot-DSiQ3Q_z.js";import"./RegisterGraphicalItemId-z4StfXHb.js";import"./ErrorBarContext-Dl0aWSaL.js";import"./GraphicalItemClipPath-C3-aN0c_.js";import"./SetGraphicalItem-Xr4kmH_o.js";import"./getRadiusAndStrokeWidthFromDot-BWSKjGaB.js";import"./ActiveShapeUtils-BczdQoPB.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-BCjVITdc.js";import"./Rectangle-g52yuu9_.js";import"./util-Dxo8gN5i.js";import"./Sector-BxAve4eq.js";const xt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
