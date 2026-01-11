import{r as f,e}from"./iframe-YjsnRhKk.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisProps-ByMyQu0r.js";import{Y as c}from"./YAxis-Dkcj0U0j.js";import{R as C}from"./arrayEqualityCheck-BJwRC6MI.js";import{C as K}from"./ComposedChart-DHA8rPkN.js";import{X as A}from"./XAxis-B2tLltrx.js";import{L as v}from"./Legend-BJ9mKJX0.js";import{B as a}from"./Bar-D0JuwFH2.js";import{R as x}from"./RechartsHookInspector-B9NqqHZV.js";import{p as s}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./resolveDefaultProps-Z_TS6-YD.js";import"./CartesianAxis-B3Ooqwxn.js";import"./Layer-B5j-14SA.js";import"./Text-B-IGFYif.js";import"./DOMUtils-B8xMLIPn.js";import"./Label-CLhSutXl.js";import"./PolarUtils-CY6yHRxS.js";import"./ZIndexLayer-B9GJT-1H.js";import"./zIndexSlice-CrYhtLvr.js";import"./types-B3ZyTjxE.js";import"./hooks-ybSWjp7E.js";import"./axisSelectors-DDrqqiFr.js";import"./RechartsWrapper-D804dJFF.js";import"./CartesianChart-BXbZQS9i.js";import"./chartDataContext-DdZy89Ic.js";import"./CategoricalChart-DshWcI8J.js";import"./Symbols-BEUnwuzy.js";import"./Curve-C9YHabA2.js";import"./useElementOffset-BorWrtVN.js";import"./iteratee-BmPeyMV0.js";import"./tooltipContext-DLROr6jm.js";import"./ReactUtils-DPXAlJoJ.js";import"./ActiveShapeUtils-BoZeuq2S.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DuxV1NLN.js";import"./useAnimationId-BZSEvVKv.js";import"./Trapezoid-CBkMiRG-.js";import"./Sector-COEdyvE7.js";import"./RegisterGraphicalItemId-iR66q9wz.js";import"./ErrorBarContext-wiTCAurl.js";import"./GraphicalItemClipPath-Ctr3letV.js";import"./SetGraphicalItem-CpQPspCO.js";import"./getZIndexFromUnknown-TtLcOY0I.js";import"./graphicalItemSelectors-BtIB5oqM.js";import"./index-D4ADZzYF.js";import"./ChartSizeDimensions-pADZR5mB.js";import"./OffsetShower-BC6NiJ8x.js";import"./PlotAreaShower-B40cJmGZ.js";const Ae={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(K,{data:s},e.createElement(A,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
  args: getStoryArgsFromArgsTypesObject(YAxisProps)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ve=["WithIncludeHidden"];export{t as WithIncludeHidden,ve as __namedExportsOrder,Ae as default};
