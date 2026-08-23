import{r as n,R as t}from"./iframe-1kyud43n.js";import{L as p}from"./LineChart-Bwv2wgkG.js";import{R as s}from"./zIndexSlice-Cz5lyADs.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BGxA39av.js";import{X as d}from"./XAxis-hMDf8ppU.js";import{Y as y}from"./YAxis-CNW7YlNA.js";import{L as u}from"./Legend-DjbGlKzg.js";import{L as h}from"./Line-B3NZzZlI.js";import{T as g}from"./Tooltip-DZEh_yWv.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C6lw4dqn.js";import"./index-C2be1uTX.js";import"./index-XjPcI5ms.js";import"./index-DSXagRxi.js";import"./index-_AXMDP6s.js";import"./throttle-Hu0TR0tN.js";import"./get-C2VjdU0L.js";import"./axisSelectors-l88JnyTW.js";import"./resolveDefaultProps-BuZ_Ktq7.js";import"./isWellBehavedNumber-CN4_9Vj1.js";import"./d3-scale-CyS0eQ4Y.js";import"./renderedTicksSlice-DyP9_snd.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DvAV2_6S.js";import"./chartDataContext-CIvFsnLa.js";import"./CategoricalChart-BmX_T4yF.js";import"./CartesianAxis-ClVpcem5.js";import"./Layer-BIHn5b7O.js";import"./Text-DH0wfypU.js";import"./DOMUtils-PMyjxqYh.js";import"./useId-9eWNRi00.js";import"./useBackwardsCompatibleTheme-CSH7ZS6o.js";import"./Label-C1lR5ca8.js";import"./ZIndexLayer-JkDBeXjs.js";import"./types-CTti3ygY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-f2mRqTBE.js";import"./symbol-DKOlcRcH.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DQHbmpKz.js";import"./uniqBy-B-IGlKv3.js";import"./iteratee-DZnlicew.js";import"./Curve-DxkIWAgM.js";import"./step-CTArbJyP.js";import"./AnimatedItems-DeTQYvPq.js";import"./useAnimationId-RVCSWKWu.js";import"./ActivePoints-Bncm4L2S.js";import"./Dot-DagwZWJ3.js";import"./RegisterGraphicalItemId-BzVYbG1B.js";import"./ErrorBarContext-k5tsvNfO.js";import"./GraphicalItemClipPath-CPrhIVsz.js";import"./SetGraphicalItem-ydaT6l1I.js";import"./getRadiusAndStrokeWidthFromDot-Cv0Blg-c.js";import"./ActiveShapeUtils-rwurj85y.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-BY_UQvnq.js";import"./Rectangle-BxKv-jXG.js";import"./util-Dxo8gN5i.js";import"./Sector-BsIhIReH.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
