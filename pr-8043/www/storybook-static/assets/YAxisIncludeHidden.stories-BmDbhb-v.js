import{r as f,R as e}from"./iframe-BJwrbqqi.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BRttk8mJ.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dgyv34Z4.js";import{C as k}from"./ComposedChart-BZiAB31H.js";import{X as K}from"./XAxis-B7ZX8Kfa.js";import{L as v}from"./Legend-CXIWKYSv.js";import{B as a}from"./Bar-CvzNsmkk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-XjwS876P.js";import"./Text-KHiJMqsX.js";import"./resolveDefaultProps-C-uvAkWz.js";import"./pageBackground-BIIIhWKR.js";import"./isWellBehavedNumber-pfE5Q5mt.js";import"./useId-DQUV3KXo.js";import"./useBackwardsCompatibleTheme-B8str_Tp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BJ-hVFwd.js";import"./index-G7qNEGy_.js";import"./index-DvHXQAWB.js";import"./dataEntryStyles-D7ilp65R.js";import"./axisSelectors-C5NObvkt.js";import"./throttle-pfeYxzRR.js";import"./d3-scale-DSWUCzXy.js";import"./CartesianAxis-CmiU-XO8.js";import"./Layer-eN5gk5Rs.js";import"./types-BBGLRMuE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BnrduSeF.js";import"./index-DsGTB-aY.js";import"./index-WSINJmPt.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DeuEZMtn.js";import"./index-BP4AOHzk.js";import"./CartesianChart-CLAnODbR.js";import"./chartDataContext-BDqLbH1o.js";import"./CategoricalChart-Db_HBiCU.js";import"./Symbols-BIb_pKxd.js";import"./symbol-5eUW0bsj.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B3zfLjYP.js";import"./uniqBy-CLTRPXtC.js";import"./iteratee-DM8gut2i.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-JM_riMMZ.js";import"./useAnimationId-Cz6ggmzR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DKcQQ7tK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DSUQ40Ee.js";import"./tooltipContext-Ds0YQgby.js";import"./RegisterGraphicalItemId-CPxaQHtW.js";import"./ErrorBarContext-8FsJ_EHd.js";import"./GraphicalItemClipPath-D57dspwd.js";import"./SetGraphicalItem-Dgy41JCB.js";import"./getZIndexFromUnknown-8xBVpWQi.js";import"./useEffectiveDataKey-dwhPZ08z.js";import"./omit-ai2KogqZ.js";const we={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Oe=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Oe as __namedExportsOrder,we as default};
