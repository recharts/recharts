import{r as n,e as t}from"./iframe-BOzdYMSK.js";import{L as p}from"./LineChart-RD8AgCwr.js";import{R as s}from"./arrayEqualityCheck-C-L8EdU9.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-EB-7kOGj.js";import{X as d}from"./XAxis-BCEpc3K6.js";import{Y as y}from"./YAxis-FsZJz6tV.js";import{L as h}from"./Legend-BwMlwprH.js";import{L as u}from"./Line-CMTElOTG.js";import{T as g}from"./Tooltip-BuUMH7pp.js";import{R as K}from"./RechartsHookInspector-BxQ7npCV.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BKlBI8B-.js";import"./index-DlDmkRAf.js";import"./immer-BswUgWWB.js";import"./hooks-DABVmJA-.js";import"./axisSelectors-D0SqUNzA.js";import"./d3-scale-BLmRkdBI.js";import"./zIndexSlice-C7XasEZZ.js";import"./renderedTicksSlice-Br0n-FAv.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CYCDZmDe.js";import"./chartDataContext-CLnWO5Qo.js";import"./CategoricalChart-DnUtLsS8.js";import"./resolveDefaultProps-2gE7AyU9.js";import"./CartesianAxis-CvCr5PgT.js";import"./Layer-B9qQTSv5.js";import"./Text-BrQPjMdx.js";import"./DOMUtils-BtSYpCvp.js";import"./Label-Dx_BRROg.js";import"./ZIndexLayer-DSuS-vq3.js";import"./types-o0ZEOggY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CMXu8a67.js";import"./symbol-BCO6WfvA.js";import"./step-C508TLAF.js";import"./useElementOffset-B-5_AZVT.js";import"./uniqBy-gL9NO_yL.js";import"./iteratee-BNe7uJ8G.js";import"./ReactUtils-B7_pPpqU.js";import"./ActivePoints-pX3DuQoW.js";import"./Dot-B9xnb9v8.js";import"./RegisterGraphicalItemId-BExwrCQG.js";import"./ErrorBarContext-Bo7z398t.js";import"./GraphicalItemClipPath-CABkDL1Y.js";import"./SetGraphicalItem-CvulM7lS.js";import"./useAnimationId-DdiGbGls.js";import"./getRadiusAndStrokeWidthFromDot-DHr5ycqw.js";import"./ActiveShapeUtils-DtwM1IUK.js";import"./isPlainObject-ugbSTU2W.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B7iw7enh.js";import"./Trapezoid-BZWxKB8U.js";import"./Sector-O1WOLqS-.js";import"./Curve-BClDVh5D.js";import"./Cross-V-QfZuOP.js";import"./index-DozVodwh.js";import"./ChartSizeDimensions-DfVhVyBn.js";import"./OffsetShower-Cv0VvbUT.js";import"./PlotAreaShower-DAwEQHde.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
