import{r as n,R as t}from"./iframe-CZhceScU.js";import{L as p}from"./LineChart-D9jiPPn3.js";import{R as s}from"./zIndexSlice-6KQyntdT.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DYux2XBt.js";import{X as d}from"./XAxis-o7n6bJ8R.js";import{Y as y}from"./YAxis-DyokKs4q.js";import{L as u}from"./Legend-DUi_ZNry.js";import{L as h}from"./Line-BVbkMHTj.js";import{T as g}from"./Tooltip-BAtEf983.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-FSanOK4G.js";import"./index-BEy16_lK.js";import"./index-Blwm4_kv.js";import"./index-CDuDfojR.js";import"./index-DpQK2wXv.js";import"./throttle-4vdN6P2D.js";import"./get-C2VjdU0L.js";import"./axisSelectors-8JBi47Qo.js";import"./resolveDefaultProps-DKz_FWjC.js";import"./isWellBehavedNumber-D-87yJTE.js";import"./d3-scale-C7Vm1zun.js";import"./renderedTicksSlice-Cf3Ebwgh.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-8qShj_eX.js";import"./chartDataContext-DJFrW4dv.js";import"./CategoricalChart-Cgj8wKUd.js";import"./CartesianAxis-C3rrpirv.js";import"./Layer-Drn4JAex.js";import"./Text-CmIo03No.js";import"./DOMUtils-DbT53TZn.js";import"./useId-BZ6DWjsO.js";import"./useBackwardsCompatibleTheme-DNlLIhqX.js";import"./Label-CNgEIlwK.js";import"./ZIndexLayer-wFB7jUG1.js";import"./types-B4F0kvck.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-XuuhZcr7.js";import"./symbol-BufjkdaW.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CAePsNzR.js";import"./uniqBy-DimUAY1k.js";import"./iteratee-D_nrFtIa.js";import"./Curve-FuimFyqA.js";import"./step-H2rxpHgP.js";import"./AnimatedItems-DXBAxv9p.js";import"./useAnimationId-Cx8RIuDl.js";import"./ActivePoints-B1Bif-Ou.js";import"./Dot-0p8__XhD.js";import"./RegisterGraphicalItemId-DnHmtku0.js";import"./ErrorBarContext-CS2ZLStC.js";import"./GraphicalItemClipPath-BzJCuoya.js";import"./SetGraphicalItem-DuTz6hix.js";import"./getRadiusAndStrokeWidthFromDot-CVlp7Tat.js";import"./ActiveShapeUtils-Dk1tODGi.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-DSmOwhxO.js";import"./Rectangle-CNqYqtsk.js";import"./util-Dxo8gN5i.js";import"./Sector-BBPVFVEm.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
