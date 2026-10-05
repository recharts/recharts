import{r as p,R as t}from"./iframe-BjBEpprL.js";import{L as n}from"./LineChart-BLK_mVgP.js";import{R as s}from"./zIndexSlice-D-PTjDwF.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DChrxsh_.js";import{X as d}from"./XAxis-BDZhGE0-.js";import{Y as y}from"./YAxis-CJHLeFgq.js";import{L as u}from"./Legend--94wUzmo.js";import{L as h}from"./Line-c9VeJUIK.js";import{T as g}from"./Tooltip-CvizmIaq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CcICmPjO.js";import"./resolveDefaultProps-B9MstDaw.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DfmJjs-d.js";import"./throttle-NXQPRMgU.js";import"./index-CFgOxFQX.js";import"./index-BBITsrkq.js";import"./isWellBehavedNumber-BCSUkdc1.js";import"./d3-scale-CKCE33MR.js";import"./index-BaAr_1o8.js";import"./index-MYKE-65n.js";import"./renderedTicksSlice-1EW54Ol1.js";import"./index-DMF93B4y.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BrSdxCQq.js";import"./chartDataContext-D6HhxZlR.js";import"./CategoricalChart-CI19dNhZ.js";import"./CartesianAxis--AnwAjfA.js";import"./Layer-vH_2ZCys.js";import"./Text-CUza6yot.js";import"./DOMUtils-Bj0yZBJ3.js";import"./useId-ChOQ34QW.js";import"./useBackwardsCompatibleTheme-CUuvE6f4.js";import"./Label-BeKD4wFi.js";import"./ZIndexLayer-Dpvj1i9H.js";import"./types-DeKlgzSD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BRCh4zwI.js";import"./symbol-BrM6n73m.js";import"./path-DyVhHtw_.js";import"./useElementOffset-vtz1m0Dx.js";import"./uniqBy-CsD2VMx9.js";import"./iteratee-tek0I0sc.js";import"./Curve-C8b-yzs0.js";import"./step-DdKwrL1k.js";import"./AnimatedItems-BDzZfL3v.js";import"./useAnimationId-a8RjQG0_.js";import"./ActivePoints-DYDQlTVO.js";import"./Dot-BYQ0G1Os.js";import"./RegisterGraphicalItemId-CyOHhqL8.js";import"./ErrorBarContext-CQzClf2u.js";import"./GraphicalItemClipPath-EXC5I5vP.js";import"./SetGraphicalItem-CqlMG-ES.js";import"./getRadiusAndStrokeWidthFromDot-C3KEWMVy.js";import"./ActiveShapeUtils-BcKWPZeO.js";import"./useGraphicalItemIdentity-BkQxsk2A.js";import"./Cross-CyG2VKzL.js";import"./Rectangle-BTYoZZR8.js";import"./util-Dxo8gN5i.js";import"./Sector-D2BbnGaa.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
