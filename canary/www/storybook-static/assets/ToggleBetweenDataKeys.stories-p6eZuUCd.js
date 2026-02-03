import{r as n,e as t}from"./iframe-CTxRHOGj.js";import{L as p}from"./LineChart-CRgH-m5Z.js";import{R as s}from"./arrayEqualityCheck-B_rRIojj.js";import{C as c}from"./CartesianGrid-BpC0r6wr.js";import{X as l}from"./XAxis-BNIlZlch.js";import{Y as d}from"./YAxis-D6e6Qj3m.js";import{L as y}from"./Legend-Dq7ShxQ8.js";import{L as h}from"./Line-D0jLL_KR.js";import{T as u}from"./Tooltip-D5lRIm6g.js";import{R as g}from"./RechartsHookInspector-Dvolm171.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B2RXwXeU.js";import"./hooks-C7jgZ8ZG.js";import"./axisSelectors-Dmr46G9_.js";import"./zIndexSlice-fEtQltEu.js";import"./resolveDefaultProps-DMjdAuvI.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-Dac5W46z.js";import"./chartDataContext-lkL8bl_R.js";import"./CategoricalChart-CwXcJ4KD.js";import"./CartesianAxis-BedncvxG.js";import"./Layer-NDmuZa_H.js";import"./Text-mcy7Wgv9.js";import"./DOMUtils-DAlT2U1x.js";import"./Label-D926DJYr.js";import"./ZIndexLayer-hZNMFSqY.js";import"./types-CAlg1Faj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BBka0yme.js";import"./Curve-Dmxl7Q3I.js";import"./useElementOffset-DEG1gE-F.js";import"./iteratee-BzekVtn2.js";import"./ReactUtils-BZY6277w.js";import"./ActivePoints-ColTAJU4.js";import"./Dot-BjkBWsnl.js";import"./RegisterGraphicalItemId-Cw9P8hA6.js";import"./ErrorBarContext-D1j-EPSf.js";import"./GraphicalItemClipPath-C6n7_76l.js";import"./SetGraphicalItem-BipBgEa4.js";import"./useAnimationId-BmKrhVKp.js";import"./getRadiusAndStrokeWidthFromDot-DhHV37ye.js";import"./ActiveShapeUtils-Dwyol1Bt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BxJQxHPh.js";import"./Trapezoid-VAjw1k5b.js";import"./Sector-DQFWjz1_.js";import"./Cross-Cw4BhdHo.js";import"./index-HMl1pmjv.js";import"./ChartSizeDimensions-aD96KjA6.js";import"./OffsetShower-BkNDrOWW.js";import"./PlotAreaShower-hX4_8FHk.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Kt as __namedExportsOrder,gt as default};
