import{r as f,e}from"./iframe-C4HM3tOf.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-BtziLXcq.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-pVd2ZEAL.js";import{C}from"./ComposedChart-1kQax0ra.js";import{X as K}from"./XAxis-BK6oNET2.js";import{L as v}from"./Legend-CeIE24ND.js";import{B as s}from"./Bar-Bjw-ysuR.js";import{R as x}from"./RechartsHookInspector-Dl-njr8g.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BrQUtBdm.js";import"./Layer-BI5SY9Q3.js";import"./resolveDefaultProps-DIrfype3.js";import"./Text-Cpkro7uK.js";import"./DOMUtils-CuJDrrCS.js";import"./Label-95NTi3lP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-hyQhvrxG.js";import"./zIndexSlice-B6fkFiXD.js";import"./immer-DKT0L4DC.js";import"./types-DhPv2WtL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-D0u-pzQU.js";import"./hooks-BGwRhZ9s.js";import"./axisSelectors-q2a6ivV9.js";import"./d3-scale-LcYjb00Y.js";import"./RechartsWrapper-CsUVNyak.js";import"./index-fnqQxzGI.js";import"./CartesianChart-zslZnBEv.js";import"./chartDataContext-11WBovGQ.js";import"./CategoricalChart-CnCIIeeu.js";import"./Symbols-DcdiuJ8X.js";import"./symbol-CU7O9hm_.js";import"./step-Bw_J3Aex.js";import"./useElementOffset-DzbAKatV.js";import"./uniqBy-8PxkX1wT.js";import"./iteratee-Dv6XlQG0.js";import"./tooltipContext-BjH6SGop.js";import"./ReactUtils-NJDufUbJ.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CmP6-7kE.js";import"./isPlainObject-CF48X339.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DkO9lidd.js";import"./useAnimationId-G20N3axR.js";import"./Trapezoid-nYgyRJct.js";import"./Sector-D93eAIbO.js";import"./Curve-CTxT4HGO.js";import"./RegisterGraphicalItemId-lR-7WV2p.js";import"./ErrorBarContext-CuIz_GNg.js";import"./GraphicalItemClipPath-BLanLC3n.js";import"./SetGraphicalItem-Cgab4IqB.js";import"./getZIndexFromUnknown-CloGEWvC.js";import"./graphicalItemSelectors-01J99iJK.js";import"./index-D1Vpw6AQ.js";import"./ChartSizeDimensions-C5dCDLnk.js";import"./OffsetShower-DOxYEgNi.js";import"./PlotAreaShower-BwQpOYoG.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
