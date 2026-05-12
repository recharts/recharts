import{r as f,e}from"./iframe-1J0v0kJa.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-BN3lk6r1.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-Crr3Dzh6.js";import{C}from"./ComposedChart-hk6GI-DP.js";import{X as K}from"./XAxis-BA2sHg_J.js";import{L as v}from"./Legend-BP0OO6t3.js";import{B as s}from"./Bar-D7KTdFBj.js";import{R as x}from"./RechartsHookInspector-D3XyLt9P.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BEIIuhLy.js";import"./Layer-BVvsC5_K.js";import"./resolveDefaultProps-C05SE_tf.js";import"./Text-DVd_qj4R.js";import"./DOMUtils-CddqG7G1.js";import"./Label-BoTwLtcO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bol6PWej.js";import"./zIndexSlice-DMwFl-HJ.js";import"./immer-ZnQZAws8.js";import"./types-DbkoSsM0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CcC_3ltP.js";import"./hooks-D7UD8X0t.js";import"./axisSelectors-DmWq6GuE.js";import"./d3-scale-WGdCtqiA.js";import"./RechartsWrapper-NfAPn5nO.js";import"./index-CooR3W3l.js";import"./CartesianChart-T051KWch.js";import"./chartDataContext-CLazaXIr.js";import"./CategoricalChart-_SeB5FDZ.js";import"./Symbols-B03fqPxI.js";import"./symbol-DdOQHYIO.js";import"./step-D8iwa8wm.js";import"./useElementOffset-DD7oMeZg.js";import"./uniqBy-31dyuDjs.js";import"./iteratee-CanO0FQp.js";import"./tooltipContext-DCAa6nAg.js";import"./ReactUtils-DrCtqFWq.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DPgm42Av.js";import"./isPlainObject-yfWDawVf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CtnB5yHC.js";import"./useAnimationId-AI_H7XbQ.js";import"./Trapezoid-BQHCtBz1.js";import"./Sector-DrN7HSuk.js";import"./Curve-MBHSj-Hn.js";import"./RegisterGraphicalItemId-Ds4EEh5p.js";import"./ErrorBarContext-BoDeu_Di.js";import"./GraphicalItemClipPath-AV19Jsyu.js";import"./SetGraphicalItem-CdiSFPyl.js";import"./getZIndexFromUnknown-B-iILyGp.js";import"./graphicalItemSelectors-B5eXLn7d.js";import"./index-tjWZGZoc.js";import"./ChartSizeDimensions-DBgMadMY.js";import"./OffsetShower-L7gF9BZe.js";import"./PlotAreaShower-C_TnXU0T.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const allKeys = Object.keys(pageData[0]);
    const [activeKeys, setActiveKeys] = useState(allKeys);

    /*
     * Toggles displayed bars when clicking on a legend item
     */
    const handleLegendClick: ComponentProps<typeof Legend>['onClick'] = (e: any) => {
      const key: string = e.dataKey;
      setActiveKeys(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
    };
    return <>
        <h4>
          Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if
          \`includeHidden\`
        </h4>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={pageData}>
            <XAxis dataKey="name" scale="band" />
            <YAxis includeHidden />
            <Legend onClick={handleLegendClick} />
            <Bar dataKey="pv" fill="blue" hide={!activeKeys.includes('pv')} />
            <Bar dataKey="amt" fill="green" hide={!activeKeys.includes('amt')} />
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Oe=["WithIncludeHidden"];export{t as WithIncludeHidden,Oe as __namedExportsOrder,we as default};
